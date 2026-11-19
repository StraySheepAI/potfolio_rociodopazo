import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rocío Dopazo · Comunicación estratégica y experiencias",
  description: "Estrategia, dirección creativa y contenidos para que cada mensaje llegue a quien tiene que llegar.",
};

const services = [
  ["01", "Estrategia de comunicación", "Qué decir, a quién y en qué forma, alineado al objetivo del negocio."],
  ["02", "Dirección creativa y de arte", "Defino lo que se ve, cómo se ve y por qué."],
  ["03", "Dirección de contenidos y edición", "Guiones, videos, series y entrevistas."],
  ["04", "Cobertura de eventos", "Entrevistas y contenido en vivo."],
];

const cases = [
  ["Flow Potentia · [nombre de la cuenta o cliente si tengo permiso]", "En menos de dos semanas, con un método incremental de prueba y ajuste, la cuenta sostuvo un promedio de más de 1.000 views por video, mantuvo la retención en formatos de 2 minutos y superó en alcance a una nota de un noticiero local.", "Datos: [completar antes/después de views, retención, seguidores y engagement]."],
  ["Lamadrid Vinos", "Guiones, reels y piezas promocionales, incluida la campaña por su segundo aniversario.", "Resultados: [completar números si los tengo]."],
];

export default function ComunicacionPage() {
  return <main className="training-page communication-page">
    <nav className="training-nav"><Link className="training-brand" href="/"><img src="/mpa-flow-logo-final-v7.png" alt="MPA Flow"/><span>Rocío Dopazo</span></Link><div className="training-nav-links"><Link href="/">Perfil general</Link><Link href="/cv">Trayectoria</Link><Link href="/capacitacion">Capacitación</Link><Link href="/comunicacion">Comunicación</Link><Link className="training-nav-cta" href="#contacto">Conversar</Link></div></nav>

    <header className="training-hero"><div className="training-hero-copy"><p className="section-kicker">Comunicación · Dirección creativa · Experiencias</p><h1>Siempre pensé en <em>cómo llegar.</em></h1><p className="training-dek">En el aula, en un taller, en un informe para la dirección, en un escenario o detrás de una cámara. Hoy pongo esa pregunta en el centro de mi trabajo: diseñar cómo llega un mensaje a quien tiene que recibirlo.</p><div className="training-actions"><Link className="button primary" href="#contacto">Conversar</Link><Link className="button secondary" href="/">Ver perfil completo</Link></div></div><figure className="training-portrait"><img src="/assets/training/facilitacion-pizarron.jpg" alt="Rocío Dopazo comunicando y facilitando una experiencia"/><figcaption>Comunicación · Dirección · Experiencias</figcaption></figure></header>

    <section className="training-intro"><p className="section-kicker">Qué hago</p><h2>Una estrategia clara encuentra su forma.</h2><p>Trabajo en la intersección entre pensamiento estratégico, sensibilidad creativa y lectura de audiencias. Cada pieza tiene un propósito: orientar, explicar, convocar o hacer que algo se mueva.</p></section>
    <section className="training-pillars">{services.map(([code,title,text])=><article className="training-pillar" key={code}><span className="training-number">{code}</span><h3>{title}</h3><p>{text}</p></article>)}</section>

    <section className="training-method"><div className="training-section-heading"><div><p className="section-kicker">Cómo trabajo</p><h2>La misma estructura, otra forma para cada público.</h2></div><p>Parto de lo que hay que comunicar y lo traduzco al lenguaje de cada audiencia.</p></div><div className="training-method-grid"><article><span>01</span><h3>Traducir</h3><p>Ordeno la idea central, el contexto y la acción que el mensaje necesita habilitar.</p></article><article><span>02</span><h3>Probar, medir y ajustar</h3><p>Trabajo de forma incremental. Pruebo una variable por vez —formato, duración, gancho o colaboración—, miro los resultados y ajusto.</p></article><article><span>03</span><h3>Hacer llegar</h3><p>Diseño una experiencia coherente entre estrategia, contenido, canal y momento.</p></article></div></section>

    <section className="training-experiences"><div className="training-section-heading"><div><p className="section-kicker">Casos</p><h2>Comunicación que se puede observar.</h2></div><p>La estrategia se vuelve concreta cuando produce una señal que podemos mirar y aprender.</p></div><div className="training-experience-grid">{cases.map(([label,text,detail])=><article className="training-experience" key={label}><span>{label}</span><h3>{label.split(" · ")[0]}</h3><p>{text}</p><p className="training-credentials">{detail}</p></article>)}</div></section>

    <section className="training-designed"><div className="training-section-heading"><div><p className="section-kicker">De dónde viene</p><h2>Una práctica construida entre lenguajes.</h2></div><p>Cada experiencia suma una forma distinta de leer, escuchar y hacer visible.</p></div><div className="training-experience-grid"><article className="training-experience"><h3>Una trayectoria entre escena, aula y organización.</h3><p>Cantante, intérprete de comedia musical, actriz, artista de doblaje y coach vocal. Licenciada en Ciencias Sociales y Humanidades, con formación en Coaching Ontológico, PNL y marketing. Todo eso me dio herramientas para algo que hago en cada proyecto: que lo que se comunica llegue.</p></article></div></section>

    <section id="contacto" className="training-contact"><div><p className="section-kicker">Contacto</p><h2>Si hay algo que necesitás hacer llegar, conversemos.</h2></div><div><p>Podemos conversar sobre la audiencia, el objetivo y la experiencia que querés construir.</p><a href="mailto:rociocelestedopazo@gmail.com">rociocelestedopazo@gmail.com</a><a href="https://www.linkedin.com/in/rociodopazo" target="_blank" rel="noreferrer">LinkedIn</a><a className="button primary" href="https://mpaflow.com/" target="_blank" rel="noreferrer">Ver servicios en MPA Flow</a></div></section>
    <footer className="training-footer"><p>Rocío Dopazo · Comunicación, transformación y experiencias</p><Link href="/#contact">Perfil general ↗</Link></footer>
  </main>;
}
