window.HELIA_DATA={
  doctors:[
    {id:"ana",name:"Dra. Ana Martins",specialty:"Clínica médica",crm:"CRM-SP 000001",rating:4.9,reviews:324,price:280,image:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=82",tags:["Coordenação do cuidado","Adultos"],bio:"Clínica geral com foco em prevenção, investigação de sintomas e organização do plano de cuidado."},
    {id:"rafael",name:"Dr. Rafael Lima",specialty:"Cardiologia",crm:"CRM-SP 000002",rating:4.9,reviews:286,price:360,image:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=82",tags:["Prevenção","Risco cardiovascular"],bio:"Cardiologista com foco em prevenção, acompanhamento de risco e integração com hábitos e histórico."},
    {id:"clara",name:"Dra. Clara Soares",specialty:"Dermatologia",crm:"CRM-SP 000003",rating:4.8,reviews:211,price:330,image:"https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=82",tags:["Dermatologia clínica","Seguimento"],bio:"Dermatologia clínica com acompanhamento longitudinal e registro de evolução."},
    {id:"marina",name:"Dra. Marina Prado",specialty:"Nutrição",crm:"CRN 000004",rating:4.9,reviews:198,price:240,image:"https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=82",tags:["Nutrição clínica","Metas"],bio:"Nutrição clínica integrada ao restante do cuidado, com foco em contexto e aderência."}
  ],
  specialties:[
    {id:"clinica",name:"Clínica médica",icon:"＋",desc:"Avaliação ampla, prevenção e coordenação do cuidado.",color:"#dfeee4"},
    {id:"cardio",name:"Cardiologia",icon:"♥",desc:"Prevenção cardiovascular e acompanhamento.",color:"#f4dfdc"},
    {id:"dermato",name:"Dermatologia",icon:"◌",desc:"Pele, cabelo e unhas com seguimento digital.",color:"#e9e2f4"},
    {id:"nutri",name:"Nutrição",icon:"◒",desc:"Plano alimentar integrado a metas e contexto clínico.",color:"#f1e8d8"},
    {id:"tele",name:"Teleconsulta",icon:"▣",desc:"Atendimento remoto com sala privada e documentos.",color:"#dbe9f5"},
    {id:"check",name:"Check-up",icon:"✓",desc:"Jornada preventiva com exames e retorno.",color:"#e7efdf"}
  ],
  appointments:[
    {id:"HLA-2148",doctor:"Dr. Rafael Lima",specialty:"Cardiologia",date:"08/10/2026",time:"14:30",type:"Presencial",status:"Confirmada"},
    {id:"HLA-2102",doctor:"Dra. Ana Martins",specialty:"Clínica médica",date:"12/09/2026",time:"10:00",type:"Presencial",status:"Concluída"},
    {id:"HLA-2054",doctor:"Dra. Clara Soares",specialty:"Dermatologia",date:"28/08/2026",time:"16:20",type:"Teleconsulta",status:"Concluída"}
  ],
  exams:[
    {id:"EX-8841",name:"Hemograma completo",date:"24/09/2026",status:"Disponível",lab:"HELIA Lab",highlight:"Sem alterações relevantes"},
    {id:"EX-8830",name:"Perfil lipídico",date:"24/09/2026",status:"Disponível",lab:"HELIA Lab",highlight:"LDL em acompanhamento"},
    {id:"EX-8720",name:"Vitamina D",date:"10/08/2026",status:"Disponível",lab:"Parceiro",highlight:"Resultado dentro da referência"}
  ],
  messages:[
    {id:"m1",from:"Equipe HELIA",subject:"Preparo para cardiologia",time:"Hoje · 09:12",body:"Para sua consulta de cardiologia, leve os exames recentes e chegue 10 minutos antes. Se preferir, envie os arquivos pelo portal."},
    {id:"m2",from:"Dra. Ana Martins",subject:"Resumo do retorno",time:"Ontem · 18:40",body:"Seu resumo clínico foi atualizado. O próximo passo é revisar o perfil lipídico na consulta de cardiologia."},
    {id:"m3",from:"Atendimento",subject:"Confirmação de consulta",time:"27/09 · 15:02",body:"Sua consulta foi confirmada. Você pode reagendar pelo portal até 4 horas antes do horário."}
  ]
};