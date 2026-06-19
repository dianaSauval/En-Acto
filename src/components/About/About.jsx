import "./About.css";

export default function About() {
  return (
    <section
      className="about"
      id="quien-soy"
      aria-labelledby="about-title"
    >
      <div className="about__inner">
        <div className="about__content">
          <span className="section-number">05</span>

          <h2 id="about-title">Quién soy</h2>

          <div className="about__text">
            <p>
              En Acto surge de una trayectoria que articula la experiencia
              clínica con una reflexión de largo plazo sobre los procesos
              subjetivos involucrados en el trabajo creativo y en la vida de
              quienes crean.
            </p>

            <p>
              Guillermo Pietra Figueredo es psicólogo, graduado en la
              Universidad de Buenos Aires en 1991, y docente universitario desde
              hace más de treinta años.
            </p>

            <p>
              Además de su formación clínica, desarrolló un sostenido interés
              por distintas prácticas artísticas, entre ellas el mimo y la
              expresión corporal, la fotografía y la pintura. Con el tiempo, ese
              recorrido se integró a su trabajo profesional a través de
              talleres, investigaciones y producciones teóricas dedicadas a las
              relaciones entre creación, arte y subjetividad.
            </p>
          </div>
        </div>

        <aside
          className="about__card"
          aria-label="Información profesional de Guillermo Pietra Figueredo"
        >
          <div className="about__portrait">
            <img
              src="https://res.cloudinary.com/dkdhdy9e5/image/upload/v1781696311/Proyecto-Guille/WhatsApp_Image_2026-06-15_at_3.06.13_PM_moiepw.jpg"
              alt="Retrato de Guillermo Pietra Figueredo, psicólogo y docente universitario"
              loading="lazy"
              decoding="async"
            />
          </div>

          <span>Guillermo Pietra Figueredo</span>
          <strong>Psicólogo</strong>
          <small>Universidad de Buenos Aires · 1991</small>
        </aside>

        <p className="sr-only">
          Guillermo Pietra Figueredo es psicólogo, graduado en la Universidad
          de Buenos Aires en 1991 y docente universitario desde hace más de
          treinta años. Ofrece atención psicológica online en español para
          artistas, creadores y personas vinculadas a procesos creativos.
          Trabaja con personas hispanohablantes residentes en Europa y otros
          países.
        </p>
      </div>
    </section>
  );
}