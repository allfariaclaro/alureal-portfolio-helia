const header=document.querySelector('[data-header]');
const menuButton=document.querySelector('[data-menu-button]');
const nav=document.querySelector('[data-nav]');
const specialtySelect=document.querySelector('[data-specialty-select]');
const doctorSelect=document.querySelector('[data-doctor-select]');
const form=document.querySelector('[data-booking-form]');
const message=document.querySelector('[data-booking-message]');

const onScroll=()=>header?.classList.toggle('scrolled',window.scrollY>16);
onScroll();window.addEventListener('scroll',onScroll,{passive:true});

menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));nav?.classList.toggle('open',!open);document.body.classList.toggle('menu-open',!open)});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menuButton?.setAttribute('aria-expanded','false');nav?.classList.remove('open');document.body.classList.remove('menu-open')}));

const jumpToBooking=()=>document.querySelector('#agendamento')?.scrollIntoView({behavior:'smooth'});
document.querySelectorAll('[data-specialty]').forEach(button=>button.addEventListener('click',()=>{specialtySelect.value=button.dataset.specialty;jumpToBooking()}));
document.querySelectorAll('[data-doctor]').forEach(button=>button.addEventListener('click',()=>{doctorSelect.value=button.dataset.doctor;jumpToBooking()}));

const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

form?.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(form);message.textContent=`Demonstração: ${data.get('especialidade')} em ${data.get('data')} às ${data.get('horario')} selecionada. Em produção, a próxima etapa confirmaria disponibilidade em tempo real.`});

// portfolio-polish-2026-09-29
const closeHeliaMenu=()=>{menuButton?.setAttribute('aria-expanded','false');nav?.classList.remove('open');document.body.classList.remove('menu-open');if(menuButton)menuButton.textContent='Menu'};
menuButton?.addEventListener('click',()=>{menuButton.textContent=menuButton.getAttribute('aria-expanded')==='true'?'Fechar':'Menu'});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav?.classList.contains('open')){closeHeliaMenu();menuButton?.focus()}});

// polish-followup
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(menuButton)menuButton.textContent='Menu'}));
