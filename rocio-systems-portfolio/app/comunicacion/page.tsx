import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rocío Dopazo · Estrategia y comunicación",
  description: "Estrategia, dirección creativa y contenidos para que cada mensaje llegue a quien tiene que llegar.",
};

const services = [
  ["01", "Estrategia de comunicación", "Qué decir, a quién y en qué forma, alineado al objetivo del negocio."],
  ["02", "Dirección creativa y de arte", "Defino lo que se ve, cómo se ve y por qué."],
  ["03", "Dirección de contenidos y edición", "Guiones, videos, series y entrevistas."],
  ["04", "Cobertura de eventos", "Entrevistas y contenido en vivo."],
];

const experiences = [
  ["Comunicación en organizaciones y espacios de aprendizaje", "Una trayectoria construida entre aulas, talleres, equipos y proyectos: traducir ideas complejas, facilitar conversaciones y diseñar mensajes para que lleguen a las personas que necesitan usarlos."],
];

export default function ComunicacionPage() {
  return <main className="training-page communication-page">
    <nav className="training-nav"><Link className="training-brand" href="/"><img src="/mpa-flow-logo-final-v7.png" alt="MPA Flow"/><span>Rocío Dopazo</span></Link><div className="training-nav-links"><Link href="/">Perfil general</Link><Link href="/cv">Trayectoria</Link><Link href="/capacitacion">Capacitación</Link><Link href="/comunicacion">Estrategia y comunicación</Link><Link className="training-nav-cta" href="#contacto">Conversar</Link></div></nav>

    <header className="training-hero"><div className="training-hero-copy"><p className="section-kicker">Estrategia y comunicación · Dirección creativa</p><h1>Siempre pensé en <em>cómo llegar.</em></h1><p className="training-dek">En el aula, en un taller, en un informe para la dirección, en un escenario o detrás de una cámara. Hoy pongo esa pregunta en el centro de mi trabajo: diseñar cómo llega un mensaje a quien tiene que recibirlo.</p><div className="training-actions"><Link className="button primary" href="#contacto">Conversar</Link><Link className="button secondary" href="/">Ver perfil completo</Link></div></div><figure className="training-portrait"><img src="/rocio-mpa-flow.jpg" alt="Rocío Dopazo trabajando con MPA Flow"/><figcaption>Estrategia · Comunicación · Experiencias</figcaption></figure></header>

    <section className="training-intro"><p className="section-kicker">Qué hago</p><h2>Una estrategia clara encuentra su forma.</h2><p>Trabajo en la intersección entre pensamiento estratégico, sensibilidad creativa y lectura de audiencias. Cada pieza tiene un propósito: orientar, explicar, convocar o hacer que algo se mueva.</p></section>
    <section className="training-pillars">{services.map(([code,title,text])=><article className="training-pillar" key={code}><span className="training-number">{code}</span><h3>{title}</h3><p>{text}</p></article>)}</section>

    <section className="training-method"><div className="training-section-heading"><div><p className="section-kicker">Cómo trabajo</p><h2>La misma estructura, otra forma para cada público.</h2></div><p>Parto de lo que hay que comunicar y lo traduzco al lenguaje de cada audiencia.</p></div><div className="training-method-grid"><article><span>01</span><h3>Traducir</h3><p>Ordeno la idea central, el contexto y la acción que el mensaje necesita habilitar.</p></article><article><span>02</span><h3>Probar, medir y ajustar</h3><p>Trabajo de forma incremental. Pruebo una variable por vez —formato, duración, gancho o colaboración—, miro los resultados y ajusto.</p></article><article><span>03</span><h3>Hacer llegar</h3><p>Diseño una experiencia coherente entre estrategia, contenido, canal y momento.</p></article></div></section>

    <section className="training-experiences"><div className="training-section-heading"><div><p className="section-kicker">Experiencias que diseñé</p><h2>Una trayectoria de comunicación aplicada.</h2></div><p>La comunicación atraviesa mi recorrido profesional: en organizaciones, espacios de aprendizaje y proyectos donde había que hacer llegar una idea.</p></div><div className="training-experience-grid">{experiences.map(([label,text])=><article className="training-experience" key={label}><span>Trayectoria</span><h3>{label}</h3><p>{text}</p></article>)}</div><p className="communication-current-project"><a className="communication-project-link" href="https://mpaflow.com/flow-potentia/" target="_blank" rel="noreferrer">Ver proyecto actual: Flow Potentia ↗</a></p></section>

    <section className="training-designed"><div className="training-section-heading"><div><p className="section-kicker">De dónde viene</p><h2>Una práctica construida entre lenguajes, innovación y creatividad.</h2></div><p>Cada experiencia suma una forma distinta de leer, escuchar y hacer visible.</p></div><div className="communication-origin-grid"><div className="training-experience-grid"><article className="training-experience"><h3>Una trayectoria entre escena, aula y organización.</h3><p>Cantante, intérprete de comedia musical, actriz, artista de doblaje y coach vocal. Licenciada en Ciencias Sociales y Humanidades, con formación en Coaching Ontológico, PNL y marketing. Todo eso me dio herramientas para algo que hago en cada proyecto: convertir ideas complejas en experiencias claras, creativas y posibles.</p></article></div><figure className="communication-art-visual"><img src="/assets/communication/escena-voz.jpg" alt="Rocío Dopazo en escena"/><figcaption>Voz, presencia y lectura de audiencias.</figcaption></figure></div></section>

    <section className="training-proof communication-origin"><div className="training-section-heading"><div><p className="section-kicker">Dónde lo hice</p><h2>Comunicación en contextos reales.</h2></div><p>La comunicación atraviesa mi trabajo en organizaciones, proyectos, eventos, contenidos y espacios de aprendizaje.</p></div><ul><li><strong>Organizaciones</strong><span>Mensajes, documentos y conversaciones para acompañar transformaciones y decisiones.</span></li><li><strong>Escena y voz</strong><span>Interpretación, locución, doblaje y presencia para construir una experiencia que llegue.</span></li><li><strong>Contenidos</strong><span>Guiones, entrevistas, piezas audiovisuales y formatos pensados para cada audiencia.</span></li></ul></section>

    <section id="contacto" className="training-contact"><div><p className="section-kicker">Contacto</p><h2>Si hay algo que necesitás hacer llegar, conversemos.</h2></div><div><p>Podemos conversar sobre la audiencia, el objetivo y la experiencia que querés construir.</p><a href="mailto:rociocelestedopazo@gmail.com">rociocelestedopazo@gmail.com</a><a href="https://www.linkedin.com/in/rociodopazo" target="_blank" rel="noreferrer">LinkedIn</a><a className="button primary" href="https://mpaflow.com/" target="_blank" rel="noreferrer">Ver servicios en MPA Flow</a></div></section>
    <footer className="training-footer"><p>Rocío Dopazo · Comunicación, transformación y experiencias</p><Link href="/#contact">Perfil general ↗</Link></footer>
  </main>;
}
