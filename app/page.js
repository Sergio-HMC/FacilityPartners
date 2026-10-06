const services = [
 ["Mantención integral","Coordinamos las necesidades del día a día con un solo interlocutor.","01"],
 ["Electricidad","Averías, iluminación, tableros, mecanismos y reparaciones menores.","02"],
 ["Gasfitería","Fugas, grifería, sanitarios, desagües y reparaciones.","03"],
 ["Climatización","Mantención e incidencias de equipos e instalaciones HVAC.","04"],
 ["Terminaciones","Pintura, carpintería, cerrajería y reparaciones menores.","05"],
 ["Mantención preventiva","Revisiones programadas para anticiparnos a las incidencias.","06"]
];

const sectors = ["Edificios y oficinas","Restaurantes","Colegios","Retail","Centros logísticos","Activos inmobiliarios"];

export default function Home() {
 return <main>
  <header className="nav">
   <a href="#" className="brand"><img src="/logo/facility-partners.svg" alt="Facility Partners"/></a>
   <nav><a href="#servicios">Servicios</a><a href="#sectores">Sectores</a><a href="#como">Cómo trabajamos</a><a href="#contacto">Contacto</a></nav>
   <a className="btn navbtn" href="#contacto">Solicitar propuesta →</a>
  </header>

  <section className="hero">
   <video autoPlay muted loop playsInline poster="/images/hero-fallback.svg">
    <source src="/video/facility-partners-hero.mp4" type="video/mp4"/>
   </video>
   <div className="overlay"></div>
   <div className="heroText">
    <div className="eyebrow">MANTENCIÓN INTEGRAL PARA EMPRESAS</div>
    <h1>Tu mantención,<br/>resuelta con una llamada.</h1>
    <p>Un fee mensual, con horas de mantención incluidas.<br/>Un solo partner para todas tus instalaciones.</p>
    <a className="btn" href="#contacto">Solicitar propuesta →</a>
   </div>
   <div className="proof">
    <div><b>Presupuesto previsible</b><span>Planifica el costo anual.</span></div>
    <div><b>Un solo partner</b><span>Centraliza tus necesidades.</span></div>
    <div><b>Horas incluidas</b><span>Para resolver el día a día.</span></div>
   </div>
  </section>

  <section className="statement"><span>UN PROBLEMA. UNA LLAMADA.</span><h2>Nosotros nos encargamos.</h2><p>Menos proveedores que coordinar. Menos imprevistos. Más control sobre tu mantención.</p></section>

  <section className="section" id="servicios">
   <div className="head"><div><span>SERVICIOS</span><h2>Un equipo.<br/>Todas las especialidades.</h2></div><p>Resolvemos y coordinamos la mantención de tus instalaciones para que tu equipo pueda enfocarse en el negocio.</p></div>
   <div className="grid services">{services.map(([t,d,n])=><article key={t}><i>{n}</i><h3>{t}</h3><p>{d}</p></article>)}</div>
  </section>

  <section className="section dark" id="sectores">
   <div className="head"><div><span>SECTORES</span><h2>Donde haya una instalación,<br/>podemos mantenerla.</h2></div><p>Un modelo flexible para organizaciones que necesitan respuesta, trazabilidad y un costo controlado.</p></div>
   <div className="grid sectors">{sectors.map((s,i)=><article key={s}><i>0{i+1}</i><h3>{s}</h3><b>→</b></article>)}</div>
  </section>

  <section className="section" id="como">
   <div className="head"><div><span>CÓMO TRABAJAMOS</span><h2>Simple desde el primer día.</h2></div></div>
   <div className="steps">
    <article><b>01</b><h3>Evaluamos</h3><p>Conocemos tus instalaciones y necesidades.</p></article>
    <article><b>02</b><h3>Planificamos</h3><p>Definimos el plan y la bolsa de horas.</p></article>
    <article><b>03</b><h3>Mantenemos</h3><p>Ejecutamos mantención preventiva y correctiva.</p></article>
    <article><b>04</b><h3>Resolvemos</h3><p>Una incidencia, una llamada, una solución.</p></article>
   </div>
  </section>

  <section className="model">
   <div><span>EL MODELO FACILITY PARTNERS</span><h2>Deja de improvisar<br/>cada reparación.</h2></div>
   <div><p>Transforma gastos imprevisibles de mantención en un <strong>fee mensual conocido.</strong></p><p>Tu plan incorpora una <strong>bolsa de horas</strong> para las necesidades habituales.</p><p>Cuando aparece un problema, no buscas proveedores. <strong>Nos llamas.</strong></p></div>
  </section>

  <section className="contact" id="contacto">
   <div><span>HABLEMOS</span><h2>¿Necesitas simplificar la<br/>mantención de tus instalaciones?</h2><p>Cuéntanos qué necesitas. Nosotros nos ocupamos del resto.</p></div>
   <a className="btn white" href="mailto:contacto@facilitypartners.cl?subject=Solicitud%20de%20propuesta">Solicitar propuesta →</a>
  </section>
  <footer><img src="/logo/facility-partners-white.svg" alt="Facility Partners"/><p>Mantención integral para empresas en Chile.</p><small>© 2026 Facility Partners</small></footer>
 </main>
}