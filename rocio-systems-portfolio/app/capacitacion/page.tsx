import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rocío Dopazo · Capacitación en IA y aprendizaje aplicado",
  description: "Capacitación en IA, facilitación y comunicación estratégica para convertir conocimiento en capacidades aplicables.",
};

const teachingAreas = [
  ["01", "IA aplicada al trabajo", "ChatGPT, Claude, Gemini y Copilot para investigar, redactar, analizar y automatizar con criterio.", "Prompt engineering · Uso responsable · Flujos de trabajo"],
  ["02", "Adopción de herramientas", "Acompaño la incorporación de nuevas herramientas conectándolas con procesos reales y decisiones cotidianas.", "Onboarding · Práctica situada · Transferencia"],
  ["03", "Comunicación y facilitación", "Diseño conversaciones y experiencias para que equipos comprendan, practiquen y sostengan el cambio.", "Workshops · Quizzes · Simulaciones"],
];

const experiences = [
  ["Universidad", "Docencia y formación", "Dicté clases en la Universidad Nacional de Quilmes en reemplazo del profesor a cargo, y fui investigadora y consejera académica."],
  ["Consejo Deliberante", "Diseño y gestión institucional", "Diseñé y gestioné integralmente una capacitación: administré el presupuesto, definí los contenidos, seleccioné y contraté al equipo docente y coordiné la implementación."],
  ["Cámara de Diputados", "ICAP · capacitación", "Diseñé el programa del módulo “Comisiones Legislativas”, armé el equipo docente y dicté clases en el Instituto de Capacitación Parlamentaria."],
  ["Empresas", "Aprendizaje aplicado", "Diseñé capacitaciones online sobre Attio y sus funciones de IA para The Knowing Agency, y formaciones grupales en agilidad, Scrum y Jira para Grupo OMINT y Arbusta."],
];

const proofPoints = [
  ["19+", "años de trayectoria"],
  ["Universidad", "docencia e investigación"],
  ["Cámara", "diseño de programa y equipo docente"],
  ["Top 10", "Prompt Engineering"],
  ["2.º", "premio AI Weekend"],
];

const teachingMethod = [
  ["01", "Observar", "Parto del contexto, la experiencia previa y la fricción real que necesita resolverse."],
  ["02", "Practicar", "Convierto los conceptos en decisiones, escenarios y conversaciones que se pueden ensayar."],
  ["03", "Transferir", "Dejo materiales, criterios y mediciones para que la capacidad siga funcionando después."],
];

const designedExperiences = [
  ["Formación · IA · Adopción", "Capacitación online de Attio", "Una experiencia para incorporar una nueva herramienta, conectarla con procesos reales y acompañar su adopción posterior."],
  ["Aprendizaje gamificado", "ScrumFlix MPA", "Entrenamiento PSM I convertido en experiencia: niveles progresivos, feedback contextual y microplan de refuerzo."],
  ["Diseño instruccional", "PSM I Trainer", "Un recorrido de práctica con dailys vivenciales, retrospectivas y refuerzo por concepto para transformar contenidos en criterio."],
];

const tools = [
  ["Quizzes diagnósticos", "Muestran qué sabe cada persona antes de empezar y qué conviene reforzar."],
  ["Escenarios de decisión", "Situaciones reales del trabajo en las que hay que elegir qué hacer y ver qué pasa después."],
  ["Simulaciones y role play", "Practicar una tarea o una conversación en un entorno seguro, antes de hacerla de verdad."],
  ["Microlearning", "Piezas cortas para repasar un concepto o un paso en pocos minutos, justo cuando se necesita."],
  ["Mapas de progreso", "Un recorrido por niveles que muestra dónde está cada persona y qué le falta."],
  ["Medición de adopción", "Indicadores simples para saber si la herramienta se sigue usando después de la capacitación."],
];

export default function CapacitacionPage() {
  return <main className="training-page">
    <nav className="training-nav"><Link className="training-brand" href="/"><img src="/mpa-flow-logo-final-v7.png" alt="MPA Flow"/><span>Rocío Dopazo</span></Link><div className="training-nav-links"><Link href="/">Perfil general</Link><Link href="/cv">Trayectoria</Link><Link className="training-nav-cta" href="/#contact">Conversar</Link></div></nav>
    <header className="training-hero"><div className="training-hero-copy"><p className="section-kicker">Facilitación · Formación · Comunicación estratégica</p><h1>Diseño experiencias para que las personas <em>comprendan, practiquen y sostengan</em> el cambio.</h1><p className="training-dek">Trabajo en la intersección entre transformación organizacional, aprendizaje y tecnología. Convierto conocimiento complejo en recorridos claros, conversaciones productivas y capacidades que quedan instaladas.</p><div className="training-actions"><Link className="button primary" href="/#contact">Conversar sobre una búsqueda</Link><Link className="button secondary" href="/">Ver perfil completo</Link></div></div><figure className="training-portrait"><img src="/assets/training/facilitacion-pizarron.jpg" alt="Rocío Dopazo facilitando una capacitación frente a un pizarrón"/><figcaption>Facilitación · Aprendizaje aplicado</figcaption></figure></header>
    <section className="training-stats" aria-label="Trayectoria y credenciales">{proofPoints.map(([value,label])=><div key={value}><strong>{value}</strong><span>{label}</span></div>)}</section>
    <section className="training-intro"><p className="section-kicker">Qué puedo enseñar</p><h2>La formación es parte de la transformación, no una actividad separada.</h2><p>Antes de enseñar, observo qué necesita entender cada persona, dónde aparece la fricción y qué decisiones tiene que poder tomar después. Cada experiencia combina marco conceptual, práctica situada, feedback y una forma concreta de medir el avance.</p><p className="training-credentials">Formación y credenciales: certificaciones en IA aplicada · Claude 101 · Top 10 en Prompt Engineering.</p></section>
    <section className="training-method"><div className="training-section-heading"><div><p className="section-kicker">Cómo enseño</p><h2>Una experiencia diseñada para que el aprendizaje quede instalado.</h2></div><p>La capacitación no termina cuando se explica un contenido: termina cuando alguien puede usarlo con criterio.</p></div><div className="training-method-grid">{teachingMethod.map(([code,title,text])=><article key={code}><span>{code}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="training-pillars">{teachingAreas.map(([code,title,text,tags])=><article className="training-pillar" key={code}><span className="training-number">{code}</span><h3>{title}</h3><p>{text}</p><p className="training-tags">{tags}</p></article>)}</section>
    <section className="training-experiences"><div className="training-section-heading"><div><p className="section-kicker">Dónde enseñé</p><h2>Experiencia que se convierte en método.</h2></div><p>No solo transmito contenidos: diseño condiciones para que el aprendizaje circule y pueda sostenerse.</p></div><div className="training-experience-grid">{experiences.map(([label,title,text])=><article className="training-experience" key={title}><span>{label}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="training-designed"><div className="training-section-heading"><div><p className="section-kicker">Experiencias que diseñé</p><h2>Aprender haciendo.</h2></div><p>Convierto una necesidad de cambio en una experiencia de aprendizaje concreta.</p></div><div className="training-experience-grid">{designedExperiences.map(([label,title,text])=><article className="training-experience" key={title}><span>{label}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="training-tools"><p className="section-kicker">Herramientas de aprendizaje</p><h2>La capacitación también puede ser una experiencia.</h2><p className="training-tools-lead">Elijo el formato según el objetivo: comprender, practicar, transferir o medir.</p><div className="training-tools-grid">{tools.map(([tool,text],index)=><article className="training-tool" key={tool}><span>0{index+1}</span><h3>{tool}</h3><p>{text}</p></article>)}</div></section>
    <section className="training-proof"><div><p className="section-kicker">Lo que queda después</p><h2>Una experiencia útil se nota cuando la organización puede continuar sin vos.</h2></div><ul><li><strong>Claridad</strong><span>Las personas pueden explicar qué están haciendo y para qué.</span></li><li><strong>Práctica</strong><span>El conocimiento se convierte en decisiones y comportamientos observables.</span></li><li><strong>Capacidad</strong><span>Quedan materiales, criterios y rituales para sostener y replicar lo aprendido.</span></li></ul></section>
    <section className="training-contact"><div><p className="section-kicker">Hablemos</p><h2>¿Buscás una facilitadora para una capacitación o un proceso de adopción?</h2></div><div><p>Podemos conversar sobre el contexto, las personas y el resultado que necesitás construir.</p><a href="mailto:rociocelestedopazo@gmail.com">rociocelestedopazo@gmail.com</a><Link className="button primary" href="/#contact">Conversar sobre una búsqueda</Link></div></section>
    <footer className="training-footer"><p>Rocío Dopazo · Transformación, aprendizaje y sistemas</p><Link href="/#contact">Conversar sobre una búsqueda ↗</Link></footer>
  </main>;
}
