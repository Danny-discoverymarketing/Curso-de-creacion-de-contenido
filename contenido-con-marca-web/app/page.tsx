const weeks = [
  {
    label: "Semana 1",
    title: "Fundamentos de contenido con intención",
    description:
      "Define tu tema central, tu audiencia y el tipo de ideas que pueden convertirse en piezas repetibles para construir autoridad.",
    videoUrl: "https://youtu.be/jybf94f8zjU",
    embedUrl: "https://www.youtube.com/embed/jybf94f8zjU",
  },
  {
    label: "Semana 2",
    title: "Sistema para publicar sin improvisar",
    description:
      "Organiza tus pilares, transforma una idea en varios formatos y crea una rutina de producción sostenible.",
    videoUrl: "https://youtu.be/lm58Sie2c0Q",
    embedUrl: "https://www.youtube.com/embed/lm58Sie2c0Q",
  },
  {
    label: "Semana 3",
    title: "Marca personal que se recuerda",
    description:
      "Aterriza tu mensaje, mejora la percepción de tu perfil y convierte tu contenido en una presencia clara y confiable.",
    videoUrl: "https://youtu.be/02bNEoe0kX8",
    embedUrl: "https://www.youtube.com/embed/02bNEoe0kX8",
  },
];

const outcomes = [
  "Una propuesta clara para tu marca personal.",
  "Pilares de contenido listos para publicar.",
  "Un sistema semanal para crear sin depender de inspiración.",
  "Criterios para mejorar tus videos, posts y mensajes.",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          Contenido con Marca
        </a>
        <nav aria-label="Navegación principal">
          <a href="#programa">Programa</a>
          <a href="#videos">Videos</a>
          <a href="#inscripcion">Inscripción</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Curso en español</p>
          <h1>Creación de contenido y marca personal</h1>
          <p className="hero-text">
            Aprende a convertir tus ideas, experiencia y punto de vista en un
            sistema de contenido claro, constante y alineado con la marca que
            quieres construir.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#videos">
              Ver el curso
            </a>
            <a className="button secondary" href="#programa">
              Explorar programa
            </a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Resumen del curso">
          <p className="panel-kicker">Programa práctico</p>
          <strong>3 semanas</strong>
          <span>Videos guiados, ejercicios de claridad y estructura para publicar mejor.</span>
        </aside>
      </section>

      <section className="section intro" id="programa">
        <div>
          <p className="eyebrow">Lo que vas a construir</p>
          <h2>Un sistema simple para que tu contenido trabaje por tu marca.</h2>
        </div>
        <div className="outcome-grid">
          {outcomes.map((outcome) => (
            <article className="outcome" key={outcome}>
              <span aria-hidden="true" />
              <p>{outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section video-section" id="videos">
        <div className="section-heading">
          <p className="eyebrow">Acceso al curso</p>
          <h2>Contenido por semana</h2>
          <p>
            Mira cada clase en orden y usa los links directos si prefieres abrir
            los videos en YouTube.
          </p>
        </div>

        <div className="weeks">
          {weeks.map((week) => (
            <article className="week-card" key={week.label}>
              <div className="week-copy">
                <p className="week-label">{week.label}</p>
                <h3>{week.title}</h3>
                <p>{week.description}</p>
                <a href={week.videoUrl} target="_blank" rel="noreferrer">
                  Abrir video en YouTube
                </a>
              </div>
              <div className="video-frame">
                <iframe
                  src={week.embedUrl}
                  title={`${week.label}: ${week.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta" id="inscripcion">
        <div>
          <p className="eyebrow">Próximo paso</p>
          <h2>Empieza por ordenar tu mensaje.</h2>
          <p>
            Recorre las tres semanas, toma notas de tus ideas principales y
            convierte cada clase en una acción concreta para tu marca.
          </p>
        </div>
        <a className="button primary" href="#videos">
          Comenzar ahora
        </a>
      </section>
    </main>
  );
}
