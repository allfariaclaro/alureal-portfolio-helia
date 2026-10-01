const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const dataSource = fs.readFileSync('helia-data.js', 'utf8');
const appSource = fs.readFileSync('helia-app.js', 'utf8');
const htmlSource = fs.readFileSync('agendamento.html', 'utf8');

function openBooking(query = '') {
  const dataContext = { window: {} };
  vm.runInNewContext(dataSource, dataContext);
  const selected = { textContent: '' };
  const status = { textContent: '' };
  const root = { innerHTML: '', textContent: '' };
  const form = { hidden: false, onsubmit: null };
  const local = new Map();
  const document = {
    readyState: 'loading',
    documentElement: { dataset: {} },
    addEventListener(_name, callback) { this.init = callback; },
    querySelector(selector) {
      return ({ '[data-schedule]': root, '[data-selected-doctor]': selected,
        '[data-booking-status]': status, '[data-booking-form]': form })[selector] || null;
    },
    querySelectorAll() { return []; }
  };
  const context = {
    window: { HELIA_DATA: dataContext.window.HELIA_DATA, matchMedia: () => ({ matches: false }) },
    document, location: { search: query, href: '' }, URLSearchParams,
    localStorage: { getItem: key => local.get(key) || null, setItem: (key, value) => local.set(key, value) },
    console, FormData, alert() {}, Date
  };
  vm.runInNewContext(appSource, context);
  document.init();
  return { selected, status, root, form };
}

test('specialty links resolve the first professional for each staffed specialty', () => {
  for (const [specialty, expected] of [['clinica', 'Dra. Ana Martins'], ['cardio', 'Dr. Rafael Lima'],
    ['dermato', 'Dra. Clara Soares'], ['nutri', 'Dra. Marina Prado']]) {
    const { selected, root } = openBooking(`?specialty=${specialty}`);
    assert.ok(selected.textContent.startsWith(expected), specialty);
    assert.match(root.innerHTML, /05\/10/);
    assert.match(root.innerHTML, /08\/10/);
  }
});

test('specialty lookup ignores accents and letter case', () => {
  assert.ok(openBooking('?specialty=CARDIOLOG%C3%8DA').selected.textContent.startsWith('Dr. Rafael Lima'));
});

test('unknown specialty is a safe, clear empty state without query HTML', () => {
  const { selected, status, root, form } = openBooking('?specialty=%3Cimg%20src%3Dx%20onerror%3Dalert(1)%3E');
  assert.equal(selected.textContent, 'Nenhum profissional disponível');
  assert.match(status.textContent, /não foi encontrada/);
  assert.equal(root.textContent, 'Nenhum horário disponível.');
  assert.equal(form.hidden, true);
  assert.doesNotMatch(root.innerHTML, /<img/i);
});

test('a valid explicit doctor takes priority, and no filter keeps the default', () => {
  const preferred = openBooking('?doctor=rafael&specialty=clinica');
  assert.ok(preferred.selected.textContent.startsWith('Dr. Rafael Lima'));
  assert.match(preferred.status.textContent, /prioridade/);
  assert.ok(openBooking().selected.textContent.startsWith('Dra. Ana Martins'));
});

test('the booking form clearly identifies the demo and fictitious data requirement', () => {
  assert.match(htmlSource, /não cria uma consulta real/i);
  assert.match(htmlSource, /somente dados fictícios/i);
  assert.match(htmlSource, /não informe dados de saúde/i);
  assert.match(htmlSource, /Nome e e-mail não são enviados nem salvos/i);
});
