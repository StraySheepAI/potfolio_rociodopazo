"use client";

import { useEffect, useState } from "react";

type Lang = "es" | "en";
type Copy = { es: string; en: string };
const say = (value: Copy, lang: Lang) => value[lang];

const stages = [
  { es:"Fricción", en:"Friction" },
  { es:"Lectura", en:"Reading" },
  { es:"Intervención", en:"Intervention" },
  { es:"Capacidad", en:"Capability" },
];

const cases = [
  {
    id:"delivery", number:"01", organization:"GRUPO OMINT", year:"2019–2026",
    title:{es:"Hacer visible y gobernable el delivery",en:"Making delivery visible and governable"},
    teaser:{es:"Cuando la complejidad crece, el problema no siempre es trabajar más: puede ser que nadie vea el sistema completo.",en:"When complexity grows, working harder is not always the answer: sometimes no one can see the whole system."},
    stages:[
      {es:"Seguimiento manual, múltiples iniciativas y dependencias que cruzaban equipos y proveedores.",en:"Manual tracking, multiple initiatives and dependencies spanning teams and vendors."},
      {es:"Leí el flujo de extremo a extremo: demanda, prioridades, ownership, riesgos y puntos de espera.",en:"I mapped the end-to-end flow: demand, priorities, ownership, risks and waiting points."},
      {es:"Diseñé el lifecycle y su gobernanza en Jira, con recorridos distintos para iniciativas y soporte.",en:"I designed the lifecycle and its governance in Jira, with distinct paths for initiatives and support."},
      {es:"Una operación capaz de coordinar 25+ iniciativas, 5 proveedores y 40+ stakeholders.",en:"An operation able to coordinate 25+ initiatives, 5 vendors and 40+ stakeholders."},
    ],
    question:{es:"¿Qué parte de tu delivery hoy no se puede ver con claridad?",en:"Which part of your delivery is hard to see clearly today?"},
  },
  {
    id:"change", number:"02", organization:"GRUPO OMINT · DYNAMICS 365", year:"2019–2026",
    title:{es:"Simplificar sin romper el sistema",en:"Simplifying without breaking the system"},
    teaser:{es:"Un flujo de CRM no cambia de verdad si se rediseña la pantalla pero no sus relaciones con personas, datos y operación.",en:"A CRM flow does not truly change if the screen is redesigned but its relationships with people, data and operations are not."},
    stages:[
      {es:"Un proceso crítico de 48 pasos, con migración e integración al core de ventas.",en:"A critical 48-step process, with migration and integration into the sales core."},
      {es:"Reconstruí el recorrido con las áreas usuarias y los equipos técnicos, incluyendo reglas y dependencias.",en:"I reconstructed the journey with business and technical teams, including rules and dependencies."},
      {es:"Lideré una transformación incremental del flujo y su validación antes de la adopción.",en:"I led an incremental redesign of the flow and its validation before adoption."},
      {es:"24 pasos en lugar de 48: una reducción del 50% y aceptación total en validación.",en:"24 steps instead of 48: a 50% reduction and full acceptance in validation."},
    ],
    question:{es:"¿Qué proceso de tu organización parece simple hasta que mirás sus dependencias?",en:"Which process seems simple until you look at its dependencies?"},
  },
  {
    id:"people", number:"03", organization:"ARBUSTA", year:"2018–2019",
    title:{es:"Recuperar flujo desarrollando autonomía",en:"Restoring flow by building autonomy"},
    teaser:{es:"Escalar una unidad no era sumar control. Era redistribuir capacidad para que más personas pudieran decidir y responder.",en:"Scaling a unit was not about adding control. It meant distributing capability so more people could decide and respond."},
    stages:[
      {es:"Una unidad multicliente con cuentas críticas, 7 células y demandas simultáneas.",en:"A multi-client unit with critical accounts, 7 teams and concurrent demands."},
      {es:"Observé dónde se concentraban las decisiones y qué impedía que cada célula actuara.",en:"I observed where decisions concentrated and what prevented each team from acting."},
      {es:"Reorganicé el gobierno del trabajo y acompañé a referentes técnicos en su desarrollo como líderes.",en:"I reorganized work governance and supported technical specialists as they became leaders."},
      {es:"2 cuentas estratégicas recuperadas y 5 líderes desarrollados desde roles técnicos.",en:"2 strategic accounts recovered and 5 leaders developed from technical roles."},
    ],
    question:{es:"¿Dónde se concentra hoy la capacidad de decidir en tu equipo?",en:"Where is the ability to decide concentrated in your team today?"},
  },
  {
    id:"architecture", number:"04", organization:"MPA FLOW · THE KNOWING AGENCY", year:"2026",
    title:{es:"Convertir una reorganización en un sistema operable",en:"Turning reorganization into an operating system"},
    teaser:{es:"Una nueva estructura solo se vuelve real cuando las personas pueden trabajar dentro de ella.",en:"A new structure becomes real only when people can work within it."},
    stages:[
      {es:"Una agencia en reorganización necesitaba conectar proyectos, etapas y responsabilidades.",en:"An agency in reorganization needed to connect projects, stages and responsibilities."},
      {es:"Trabajé con el founder para entender el flujo operativo y las unidades reales de trabajo.",en:"I worked with the founder to understand the operating flow and the real units of work."},
      {es:"Diseñé la arquitectura operativa e implementé su sistema de gestión en Attio.",en:"I designed the operating architecture and implemented its management system in Attio."},
      {es:"Pipelines, etapas y unidades de trabajo visibles: una base para operar y evolucionar.",en:"Visible pipelines, stages and work units: a foundation for operating and evolving."},
    ],
    question:{es:"¿Tu organización tiene una estructura clara, pero todavía cuesta trabajar dentro de ella?",en:"Does your organization have a clear structure, but still struggle to work within it?"},
  },
];

const selectedProducts = [
  { name:"SkillPath Flow", image:"/skillpath-flow-journey-v11.png", text:{es:"Entrenar capacidades a través de decisiones y escenarios simulados. 2.º puesto en AI Weekend San Rafael 2026.",en:"Training capabilities through decisions and simulated scenarios. 2nd place at AI Weekend San Rafael 2026."} },
  { name:"Portal de Experiencias", image:"/portal-experiencias-anonimo-v16.png", text:{es:"Un sistema digital para convertir contenidos, sesiones y herramientas en un recorrido de aprendizaje.",en:"A digital system turning content, sessions and tools into a learning journey."} },
  { name:"Atlas Sistémico", image:"/system-atlas-v16.png", text:{es:"Hacer navegables las relaciones entre personas, recursos, preguntas e iniciativas.",en:"Making relationships between people, resources, questions and initiatives navigable."} },
];

export default function PortfolioPage(){
  const [lang,setLang]=useState<Lang>("es");
  useEffect(()=>{const saved=window.localStorage.getItem("mpa-lang");if(saved==="en"||saved==="es"){setLang(saved);document.documentElement.lang=saved}},[]);
  const toggleLanguage=()=>{const next=lang==="es"?"en":"es";setLang(next);window.localStorage.setItem("mpa-lang",next);document.documentElement.lang=next};
  const [activeCase,setActiveCase]=useState(0);
  const [activeStage,setActiveStage]=useState(0);
  const current=cases[activeCase];
  const chooseCase=(index:number)=>{setActiveCase(index);setActiveStage(0)};
  return <main className="portfolio-page">
      <nav className="portfolio-nav"><a href="/">← {lang==="es"?"Rocío Dopazo · Inicio":"Rocío Dopazo · Home"}</a><div><a href="/capacitacion">{lang==="es"?"Capacitación":"Training"}</a><a href="/comunicacion">{lang==="es"?"Estrategia y comunicación":"Strategy & communication"}</a><a href="/cv">CV</a><a href="https://mpaflow.com/" target="_blank" rel="noreferrer">MPA Flow ↗</a><button type="button" onClick={toggleLanguage}>{lang==="es"?"EN":"ES"}</button></div></nav>
    <header className="portfolio-intro"><div className="portfolio-intro-copy"><p className="section-kicker">{lang==="es"?"Portfolio · Sistemas en acción":"Portfolio · Systems in action"}</p><h1>{lang==="es"?<>No muestro solo <em>qué</em> hice. Muestro <em>qué cambió</em>.</>:<>Not just <em>what</em> I made. <em>What changed</em>.</>}</h1><p>{lang==="es"?"Cada proyecto es una configuración de personas, procesos, decisiones y tecnología. Explorá cómo leo esas relaciones y qué ocurre cuando una intervención encuentra su lugar.":"Every project is a configuration of people, processes, decisions and technology. Explore how I read those relationships and what happens when an intervention finds its place."}</p></div><a href="#cases" className="portfolio-scroll">{lang==="es"?"Entrar a los casos":"Enter the cases"} <span>↓</span></a></header>
    <section id="cases" className="portfolio-explorer"><div className="portfolio-explorer-head"><p className="section-kicker">{lang==="es"?"01 · Explorar decisiones":"01 · Explore decisions"}</p><h2>{lang==="es"?"Elegí un sistema. Seguí el cambio.":"Choose a system. Follow the change."}</h2><p>{lang==="es"?"Cuatro contextos distintos. Una misma forma de observar relaciones, diseñar una intervención y dejar capacidad instalada.":"Four different contexts. One way of reading relationships, designing an intervention and building lasting capability."}</p></div>
      <div className="portfolio-case-tabs" role="group" aria-label={lang==="es"?"Seleccionar caso":"Select case"}>{cases.map((item,index)=><button key={item.id} type="button" aria-pressed={activeCase===index} className={activeCase===index?"active":""} onClick={()=>chooseCase(index)}><span>{item.number} / {item.organization}</span><strong>{say(item.title,lang)}</strong></button>)}</div>
      <div className="portfolio-case-story" key={current.id}><div className="portfolio-case-context"><span>{current.organization} · {current.year}</span><h3>{say(current.title,lang)}</h3><p>{say(current.teaser,lang)}</p></div><div className="portfolio-system" aria-label={lang==="es"?"Mapa interactivo de la transformación":"Interactive transformation map"}><div className="portfolio-system-axis" aria-hidden="true"/><div className="portfolio-system-nodes">{stages.map((stage,index)=><button key={stage.en} type="button" aria-pressed={activeStage===index} className={activeStage===index?"active":""} onClick={()=>setActiveStage(index)}><i>0{index+1}</i><span>{say(stage,lang)}</span></button>)}</div><div className="portfolio-system-detail" aria-live="polite"><span>{lang==="es"?"LO QUE HIZO VISIBLE ESTA ETAPA":"WHAT THIS STAGE REVEALED"}</span><p>{say(current.stages[activeStage],lang)}</p></div></div><div className="portfolio-case-next"><p>{say(current.question,lang)}</p><a href="mailto:rociocelestedopazo@gmail.com?subject=Conversemos%20sobre%20mi%20sistema">{lang==="es"?"Me gustaría contártelo":"I'd like to tell you"} ↗</a></div></div>
    </section>
    <section className="portfolio-products"><div className="portfolio-products-head"><p className="section-kicker">{lang==="es"?"02 · Lo que construyo":"02 · What I build"}</p><h2>{lang==="es"?"De la arquitectura a la experiencia.":"From architecture to experience."}</h2><p>{lang==="es"?"Algunas soluciones materializan esa forma de pensar. Son una muestra, no un inventario completo.":"Some solutions make that way of thinking tangible. A selection, not a complete inventory."}</p></div><div className="portfolio-product-grid">{selectedProducts.map(product=><article key={product.name}><img src={product.image} alt={product.name}/><div><h3>{product.name}</h3><p>{say(product.text,lang)}</p></div></article>)}</div><a className="portfolio-more" href="https://mpaflow.com/" target="_blank" rel="noreferrer">{lang==="es"?"Conocer la práctica MPA Flow":"Explore the MPA Flow practice"} ↗</a></section>
    <section className="portfolio-invitation"><p className="section-kicker">{lang==="es"?"03 · Abrir conversación":"03 · Start a conversation"}</p><h2>{lang==="es"?"Tu sistema también tiene una historia que todavía no se ve completa.":"Your system has a story that is not fully visible yet."}</h2><p>{lang==="es"?"Si algo de estos casos te hizo pensar en un desafío propio, contame qué está pasando. Podemos empezar por una buena pregunta.":"If one of these cases made you think of your own challenge, tell me what's happening. We can start with a good question."}</p><div><a className="button primary" href="mailto:rociocelestedopazo@gmail.com?subject=Conversemos%20sobre%20mi%20sistema">{lang==="es"?"Conversemos":"Let's talk"}</a><a className="button secondary" href="/cv">{lang==="es"?"Ver mi trayectoria":"View my career"}</a></div></section>
  </main>;
}
