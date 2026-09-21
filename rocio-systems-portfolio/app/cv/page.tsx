"use client";

import { useEffect, useState } from "react";

type Lang = "es" | "en";
const roles = [
  {period:"2026 —",org:"MPA Flow",title:{es:"Fundadora · Arquitecta de Sistemas y Gestión del Cambio",en:"Founder · Systems & Change Architect"},summary:{es:"Diseño arquitecturas operativas, soluciones digitales y transformaciones organizacionales. Entre los trabajos recientes: la arquitectura operativa de The Knowing Agency, SkillPath Flow y módulos comerciales para Diego Suárez Inmobiliaria.",en:"I design operating architectures, digital solutions and organizational transformations. Recent work includes The Knowing Agency's operating model, SkillPath Flow and commercial operations modules for Diego Suárez Inmobiliaria."}},
  {period:"2019 — 2026",org:"Grupo OMINT",title:{es:"IT Delivery Manager · Arquitectura de Sistemas y Procesos",en:"IT Delivery Manager · Systems & Process Architecture"},summary:{es:"Escalé el sistema de delivery a 25+ iniciativas simultáneas, con 5 proveedores y 40+ stakeholders; institucionalicé su lifecycle y gobernanza en Jira. Lideré la simplificación de un flujo de Dynamics 365 de 48 a 24 pasos y llevé 3 soluciones de IA a producción.",en:"Scaled delivery to 25+ concurrent initiatives with 5 vendors and 40+ stakeholders; established its lifecycle and governance in Jira. Led a Dynamics 365 flow redesign from 48 to 24 steps and delivered 3 AI solutions to production."}},
  {period:"2018 — 2019",org:"Arbusta",title:{es:"IT Project Manager · Delivery Unit Manager",en:"IT Project Manager · Delivery Unit Manager"},summary:{es:"Conduje una unidad de 30+ profesionales, 5 líderes y 7 células sobre 10+ cuentas enterprise. Recuperé 2 cuentas estratégicas y desarrollé 5 líderes desde roles técnicos.",en:"Led a unit of 30+ professionals, 5 leaders and 7 teams across 10+ enterprise accounts. Recovered 2 strategic accounts and developed 5 leaders from technical roles."}},
  {period:"2016 — 2018",org:"Gobierno de la Ciudad de Buenos Aires · Municipalidad de Quilmes",title:{es:"Análisis funcional · Reingeniería y digitalización",en:"Functional analysis · Process redesign and digitization"},summary:{es:"Contribuí a implementar 300+ trámites electrónicos y lideré el relevamiento de 700+ procedimientos para digitalización documental, integrando capacitación y gestión del cambio.",en:"Contributed to 300+ electronic government procedures and led the assessment of 700+ processes for document digitization, integrating training and change management."}},
  {period:"2007 — 2017",org:"Universidades · Organismos públicos",title:{es:"Investigación, proyectos y transformación organizacional",en:"Research, projects and organizational transformation"},summary:{es:"Formulación, diseño y evaluación de proyectos desde mi formación universitaria y la gestión pública, junto con investigación aplicada, docencia y programas de empleo y formación. Esa base precede y sostiene mi práctica actual de project management.",en:"Project formulation, design and evaluation rooted in my university education and public-sector work, alongside applied research, teaching and employment and training programs. This foundation predates and supports my current project-management practice."}},
];

const results = [
  {value:"25+", label:{es:"iniciativas simultáneas",en:"concurrent initiatives"}},
  {value:"30+", label:{es:"profesionales liderados",en:"professionals led"}},
  {value:"−50%", label:{es:"pasos en un flujo de CRM",en:"steps in a CRM workflow"}},
];

const workTools = [
  {name:"Jira", mark:"JI", logo:"https://commons.wikimedia.org/wiki/Special:FilePath/Jira_Logo.svg"},
  {name:"Confluence", mark:"CO", logo:"https://commons.wikimedia.org/wiki/Special:FilePath/Atlassian_Confluence_2017_logo.svg"},
  {name:"MantisBT", mark:"MB", logo:"https://mantisbt.org/images/favicon.ico"},
  {name:"Slack", mark:"SL", logo:"https://api.iconify.design/logos:slack-icon.svg"},
  {name:"Microsoft Teams", mark:"MT", logo:"https://api.iconify.design/logos:microsoft-teams.svg"},
  {name:"Bizagi", mark:"BZ", logo:"https://www.bizagi.com/favicon.ico"},
  {name:"Microsoft Visio", mark:"VI", logo:"https://api.iconify.design/logos:microsoft-visio.svg"},
];
const systems = [
  {name:"Microsoft Dynamics 365", mark:"D365", logo:"https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft_Dynamics_365_Logo_(2021%E2%80%93present).svg"},
  {name:"Microsoft 365", mark:"M365", logo:"https://api.iconify.design/logos:microsoft-icon.svg"},
  {name:"Microsoft Azure", mark:"AZ", logo:"https://api.iconify.design/logos:microsoft-azure.svg"},
  {name:"Attio", mark:"AT", logo:"https://attio.com/brand/v1/attio-logomark.svg"},
  {name:"HighLevel (GHL)", mark:"GHL", logo:"https://api.iconify.design/simple-icons:gohighlevel.svg?color=%232162ff"},
  {name:"Podium", mark:"PO", logo:"https://www.podium.com/favicon.ico"},
  {name:"CallTrackingMetrics (CTM)", mark:"CTM", logo:"https://www.calltrackingmetrics.com/favicon.ico"},
];
const technologies = ["SQL", "APIs", "IA generativa aplicada", "Automatización", "Digitalización de procesos"];

const transformations = [
  {
    id:"commercial-operations",
    org:"MPA Flow",
    label:{es:"Operación comercial",en:"Commercial operations"},
    before:{
      es:"El circuito de trabajo comercial no era suficientemente visible: la información estaba dispersa, muchas consultas terminaban concentradas en el dueño y los vendedores operaban con dudas sobre cómo avanzar.",
      en:"The commercial workflow was not sufficiently visible: information was dispersed, many questions ended up concentrated on the owner, and salespeople were unsure how to move forward."
    },
    key:{es:"Arquitectura operativa",en:"Operating architecture"},
    after:{
      es:"Un circuito comercial más claro y centralizado, con etapas, información y responsabilidades visibles para reducir dependencias y sostener la operación cotidiana.",
      en:"A clearer, centralized commercial workflow, with visible stages, information and responsibilities to reduce dependencies and support daily operations."
    },
    proof:"FLOW"
  },
  {
    id:"dynamics",
    org:"Grupo OMINT",
    label:{es:"Experiencia de atención",en:"Customer service experience"},
    before:{
      es:"En una central de emergencias, iniciar cada caso exigía rapidez. Pero el flujo de Dynamics 365 no guardaba correspondencia con la operación real: repetía cargas, interrumpía la continuidad de los datos, prolongaba las llamadas y demoraba el seguimiento, generando quejas de operadores y clientes.",
      en:"In an emergency response center, opening each case demanded speed. But the Dynamics 365 flow did not match the real operation: it repeated data entry, interrupted data continuity, prolonged calls and delayed follow-up, generating complaints from operators and customers."
    },
    key:{es:"Reingeniería incremental",en:"Incremental redesign"},
    after:{
      es:"Un flujo más correspondiente con la operación real y con la experiencia de sus usuarios, con mayor continuidad para iniciar y seguir cada caso. Alcancé la reducción propuesta del 50% —de 48 a 24 pasos— y reduje la fricción y la duración de las llamadas.",
      en:"A flow better aligned with the real operation and user experience, with greater continuity to open and follow each case. I achieved the proposed 50% reduction—from 48 to 24 steps—and reduced friction and call duration."
    },
    proof:"48 → 24"
  },
  {
    id:"delivery",
    org:"Grupo OMINT",
    label:{es:"Gestión tecnológica",en:"Technology management"},
    before:{
      es:"Capacidad, estimaciones, prioridades, riesgos y compromisos se construían entre equipos y proveedores sin una capa integrada de gestión y visibilidad del portfolio.",
      en:"Capacity, estimates, priorities, risks and commitments were built across teams and vendors without an integrated management and portfolio-visibility layer."
    },
    key:{es:"Arquitectura operativa",en:"Operating architecture"},
    after:{
      es:"Una capa común de gestión tecnológica permitió escalar el ecosistema hasta 25+ iniciativas simultáneas, articulando 5 proveedores tecnológicos, el equipo interno y 40+ stakeholders.",
      en:"A shared technology-management layer enabled the ecosystem to scale to 25+ concurrent initiatives, connecting 5 technology vendors, the internal team and 40+ stakeholders."
    },
    proof:"25+ · 5 · 40+"
  },
  {
    id:"leadership",
    org:"Arbusta",
    label:{es:"Liderazgo y desarrollo",en:"Leadership & development"},
    before:{
      es:"Una unidad de delivery distribuida en 7 células y más de 10 cuentas enterprise necesitaba recuperar vínculos estratégicos y desarrollar liderazgo desde los propios equipos.",
      en:"A delivery unit distributed across 7 teams and more than 10 enterprise accounts needed to recover strategic relationships and develop leadership from within the teams."
    },
    key:{es:"Liderazgo habilitante",en:"Enabling leadership"},
    after:{
      es:"Recuperé 2 cuentas estratégicas y desarrollé 5 líderes desde roles técnicos, acompañando una unidad de más de 30 profesionales.",
      en:"I recovered 2 strategic accounts and developed 5 leaders from technical roles while supporting a unit of more than 30 professionals."
    },
    proof:"2 · 5 · 30+"
  },
  {
    id:"public",
    org:"Gobierno de la Ciudad de Buenos Aires · Municipalidad de Quilmes",
    label:{es:"Transformación pública",en:"Public transformation"},
    before:{
      es:"Cientos de procedimientos requerían ser relevados, comprendidos y reorganizados antes de poder transformarse en servicios y circuitos digitales.",
      en:"Hundreds of procedures needed to be assessed, understood and reorganized before they could become digital services and workflows."
    },
    key:{es:"Digitalización a escala",en:"Digitization at scale"},
    after:{
      es:"Lideré el relevamiento de 700+ procedimientos y contribuí a implementar 300+ trámites electrónicos, integrando capacitación y gestión del cambio.",
      en:"I led the assessment of 700+ procedures and contributed to implementing 300+ electronic services, integrating training and change management."
    },
    proof:"700+ → 300+"
  }
];

function TransformationCase({item,lang}:{item:typeof transformations[number],lang:Lang}){
  const [stage,setStage]=useState<0|1|2>(0);
  return <div className={`cv-role-transformation stage-${stage}`}>
    <button type="button" className="cv-role-transformation-head" onClick={()=>setStage(stage===2?0:(stage+1) as 0|1|2)} aria-expanded={stage>0}>
      <span>{item.label[lang]}</span><b>{stage===0?(lang==="es"?"Explorar":"Explore"):stage===1?(lang==="es"?"Ver después":"Reveal after"):(lang==="es"?"Reiniciar":"Restart")} →</b>
    </button>
    <div className="cv-role-transform-flow">
      <div><small>{lang==="es"?"Antes":"Before"}</small><p>{item.before[lang]}</p></div>
      <div className="cv-role-transform-key"><small>{lang==="es"?"Transformación":"Transformation"}</small>{stage>0&&<strong>{item.key[lang]}</strong>}</div>
      <div className="cv-role-transform-after" aria-hidden={stage<2}><small>{lang==="es"?"Después":"After"}</small>{stage>1&&<><p>{item.after[lang]}</p><strong>{item.proof}</strong></>}</div>
    </div>
  </div>
}

export default function CVPage(){
  const [lang,setLang]=useState<Lang>("es");
  useEffect(()=>{const saved=window.localStorage.getItem("mpa-lang");if(saved==="en"||saved==="es"){setLang(saved);document.documentElement.lang=saved}},[]);
  const toggleLanguage=()=>{const next=lang==="es"?"en":"es";setLang(next);window.localStorage.setItem("mpa-lang",next);document.documentElement.lang=next};
  return <main className="cv-page"><div className="cv-wrap">
    <nav className="cv-top"><a href="/">← {lang==="es"?"Volver al portfolio":"Back to portfolio"}</a><button type="button" onClick={toggleLanguage}>{lang==="es"?"Read in English":"Leer en español"}</button></nav>
    <header className="cv-header"><p className="section-kicker">{lang==="es"?"Trayectoria · CV digital":"Career · Digital CV"}</p><h1>Rocío Dopazo</h1><p>Systems &amp; Change Architect <span aria-hidden="true">|</span> Head of IT Delivery <span aria-hidden="true">|</span> IT Project Management</p><div className="cv-lead">{lang==="es"?"Diseño sistemas de trabajo, lidero su transformación y acompaño a las organizaciones y sus equipos desde la arquitectura hasta la operación. 19 años de trayectoria; casi una década conduciendo delivery tecnológico end-to-end.":"I design ways of working, lead their transformation, and support organizations and their teams from architecture to operation. 19 years of experience; nearly a decade leading end-to-end technology delivery."}</div><div className="cv-contact"><a href="mailto:rociocelestedopazo@gmail.com">Email ↗</a><a href="https://www.linkedin.com/in/rociodopazo" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://mpaflow.com/" target="_blank" rel="noreferrer">MPA Flow ↗</a><span>Mar del Plata · Argentina · {lang==="es"?"Remoto / híbrido":"Remote / hybrid"}</span></div></header>
    <section className="cv-results" aria-label={lang==="es"?"Resultados destacados":"Selected results"}>{results.map(item=><div key={item.value}><strong>{item.value}</strong><span>{item.label[lang]}</span></div>)}</section>
    <div className="cv-grid"><aside className="cv-sidebar">
      <section><h2>{lang==="es"?"Lo que integro":"What I bring together"}</h2><ul>{(lang==="es"?["IT Delivery y gestión de servicios","Gobernanza, portfolio y demanda","Equipos, clientes y proveedores","Arquitectura de sistemas y cambio","Formulación, diseño y evaluación de proyectos","Análisis funcional y procesos","Agile · Scrum · Kanban · Product Ownership","Facilitación, coaching y PNL"]:["IT delivery and service management","Governance, portfolio and demand","Teams, clients and vendors","Systems & change architecture","Project formulation, design and evaluation","Functional analysis and processes","Agile · Scrum · Kanban · Product Ownership","Facilitation, coaching and NLP"]).map(item=><li key={item}>{item}</li>)}</ul></section>
      <section className="cv-ecosystem"><h2>{lang==="es"?"Herramientas de trabajo":"Work tools"}</h2><div className="cv-logo-list">{workTools.map(item=><div className="cv-logo-item" key={item.name}><span className="cv-logo-mark"><b>{item.mark}</b><img src={item.logo} alt="" loading="lazy"/></span><span>{item.name}</span></div>)}</div></section>
      <section className="cv-ecosystem"><h2>{lang==="es"?"Sistemas y plataformas":"Systems & platforms"}</h2><div className="cv-logo-list">{systems.map(item=><div className="cv-logo-item" key={item.name}><span className="cv-logo-mark"><b>{item.mark}</b><img src={item.logo} alt="" loading="lazy"/></span><span>{item.name}</span></div>)}</div><p className="cv-ecosystem-note">{lang==="es"?"También trabajé en integraciones con SAP y Softland Logic.":"I have also worked on integrations with SAP and Softland Logic."}</p></section>
      <section><h2>{lang==="es"?"Tecnologías":"Technologies"}</h2><div className="cv-tools">{technologies.map(item=><span key={item}>{item}</span>)}</div></section>
    </aside><div className="cv-experience" id="transformaciones"><p className="cv-section-number">01 / {lang==="es"?"RECORRIDO":"CAREER"}</p><h2>{lang==="es"?"Experiencia seleccionada":"Selected experience"}</h2>{roles.map(role=><article className="cv-entry" key={role.org}><small>{role.period} · {role.org}</small><h3>{role.title[lang]}</h3><p>{role.summary[lang]}</p><div className="cv-role-transformations">{transformations.filter(item=>item.org===role.org).map(item=><TransformationCase key={item.id} item={item} lang={lang}/>)}</div></article>)}<div className="cv-end">{lang==="es"?"Esta es una síntesis, no un inventario. Los contextos y decisiones detrás de cada resultado se entienden mejor en conversación.":"This is a selection, not an inventory. The context and decisions behind each result are best explored in conversation."} <a href="mailto:rociocelestedopazo@gmail.com">{lang==="es"?"Conversemos ↗":"Let's talk ↗"}</a></div></div></div>
    <div className="cv-education"><section><h2>{lang==="es"?"Formación académica":"Academic education"}</h2><p>{lang==="es"?"Especialización en Gestión de la Tecnología y la Innovación · UNSAM":"Technology & Innovation Management specialization · UNSAM"}</p><p>{lang==="es"?"Magíster en Gobierno Local · UVQ":"Master's in Local Government · UVQ"}</p><p>{lang==="es"?"Licenciada en Ciencias Sociales · UNQ":"Bachelor's in Social Sciences · UNQ"}</p></section><section><h2>{lang==="es"?"Formación complementaria":"Additional training"}</h2><p>{lang==="es"?"Coach Ontológico Profesional · Axon Training":"Professional Ontological Coach · Axon Training"}</p><p>{lang==="es"?"Analista Funcional · formación complementaria":"Functional Analysis · additional training"}</p><p>{lang==="es"?"Programación Neurolingüística (PNL)":"Neuro-Linguistic Programming (NLP)"}</p></section><section><h2>{lang==="es"?"Idiomas":"Languages"}</h2><p>{lang==="es"?"Español nativo · Inglés profesional (B2)":"Native Spanish · Professional English (B2)"}</p></section></div>
  </div></main>;
}
