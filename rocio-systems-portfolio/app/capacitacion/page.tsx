import Link from "next/link";

const teachingAreas = [
  ["01", "IA aplicada al trabajo", "ChatGPT, Claude, Gemini y Copilot para investigar, redactar, analizar y automatizar con criterio.", "Prompt engineering · Uso responsable · Flujos de trabajo"],
  ["02", "Adopción de herramientas", "Acompaño la incorporación de nuevas herramientas conectándolas con procesos reales y decisiones cotidianas.", "Onboarding · Práctica situada · Transferencia"],
  ["03", "Comunicación y facilitación", "Diseño conversaciones y experiencias para que equipos comprendan, practiquen y sostengan el cambio.", "Workshops · Quizzes · Simulaciones"],
];

const experiences = [
  ["Universidad", "Docencia y formación", "Diseño de clases, materiales y recorridos para convertir conceptos complejos en criterio aplicable."],
  ["Cámara de Diputados", "ICAP · capacitación", "Formación para equipos y organismos, con foco en comprensión, práctica y autonomía."],
  ["Empresas", "Aprendizaje aplicado", "Capacitaciones online, facilitación y experiencias interactivas para acompañar adopción y transformación."],
];

const tools = ["Quizzes diagnósticos", "Escenarios de decisión", "Simulaciones y role play", "Microlearning", "Mapas de progreso", "Medición de adopción"];

export default function CapacitacionPage() {
  return <main className="training-page">
    <nav className="training-nav"><Link className="training-brand" href="/"><img src="/mpa-flow-logo-final-v7.png" alt="MPA Flow"/><span>Rocío Dopazo</span></Link><div className="training-nav-links"><Link href="/">Perfil general</Link><Link href="/cv">Trayectoria</Link><Link className="training-nav-cta" href="/#contact">Conversar</Link></div></nav>
    <header className="training-hero"><div className="training-hero-copy"><p className="section-kicker">Facilitación · Formación · Comunicación estratégica</p><h1>Diseño experiencias para que las personas <em>comprendan, practiquen y sostengan</em> el cambio.</h1><p className="training-dek">Trabajo en la intersección entre transformación organizacional, aprendizaje y tecnología. Convierto conocimiento complejo en recorridos claros, conversaciones productivas y capacidades que quedan instaladas.</p><div className="training-actions"><Link className="button primary" href="/#contact">Conversar sobre una búsqueda</Link><Link className="button secondary" href="/">Ver perfil completo</Link></div></div><figure className="training-portrait"><img src="/assets/rocio-dopazo-team.jpg" alt="Rocío Dopazo trabajando con una herramienta digital de MPA Flow"/><figcaption>Facilitación · Aprendizaje aplicado</figcaption></figure></header>
    <section className="training-intro"><p className="section-kicker">Qué puedo enseñar</p><h2>La formación es parte de la transformación, no una actividad separada.</h2><p>Antes de enseñar, observo qué necesita entender cada persona, dónde aparece la fricción y qué decisiones tiene que poder tomar después. Cada experiencia combina marco conceptual, práctica situada, feedback y una forma concreta de medir el avance.</p></section>
    <section className="training-pillars">{teachingAreas.map(([code,title,text,tags])=><article className="training-pillar" key={code}><span className="training-number">{code}</span><h3>{title}</h3><p>{text}</p><p className="training-tags">{tags}</p></article>)}</section>
    <section className="training-experiences"><div className="training-section-heading"><div><p className="section-kicker">Dónde enseñé</p><h2>Experiencia que se convierte en método.</h2></div><p>No solo transmito contenidos: diseño condiciones para que el aprendizaje circule y pueda sostenerse.</p></div><div className="training-experience-grid">{experiences.map(([label,title,text])=><article className="training-experience" key={title}><span>{label}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="training-tools"><p className="section-kicker">Herramientas de aprendizaje</p><h2>La capacitación también puede ser una experiencia.</h2><p className="training-tools-lead">Elijo el formato según el objetivo: comprender, practicar, transferir o medir.</p><div className="training-tools-grid">{tools.map((tool,index)=><article className="training-tool" key={tool}><span>0{index+1}</span><h3>{tool}</h3><p>Un recurso breve y reutilizable para conectar conocimiento con decisiones observables.</p></article>)}</div></section>
    <section className="training-proof"><div><p className="section-kicker">Lo que queda después</p><h2>Una experiencia útil se nota cuando la organización puede continuar sin vos.</h2></div><ul><li><strong>Claridad</strong><span>Las personas pueden explicar qué están haciendo y para qué.</span></li><li><strong>Práctica</strong><span>El conocimiento se convierte en decisiones y comportamientos observables.</span></li><li><strong>Capacidad</strong><span>Quedan materiales, criterios y rituales para sostener y replicar lo aprendido.</span></li></ul></section>
    <footer className="training-footer"><p>Rocío Dopazo · Transformación, aprendizaje y sistemas</p><Link href="/#contact">Conversar sobre una búsqueda ↗</Link></footer>
  </main>;
}
