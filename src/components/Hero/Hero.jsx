import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="hero__brand">EN ACTO</p>

        <p className="hero__subtitle">
          Psicología para artistas y creadores
        </p>

        <h1 id="hero-title">
          Psicología para artistas y creadores hispanohablantes
        </h1>

        <p className="hero__headline">
          Un espacio de pensamiento para quienes hacen de la creación una práctica.
        </p>

        <div className="hero__text">
          <p>
            En Acto ofrece atención psicológica online en español para artistas,
            creadores y personas vinculadas a procesos creativos que buscan un
            espacio clínico donde pensar su práctica, sus conflictos y sus modos
            de habitar la vida artística.
          </p>

          <p>
            La vida artística no se reduce a la producción de obras. También
            implica atravesar decisiones, interrupciones, transformaciones,
            exigencias, vínculos, reconocimiento, incertidumbre y momentos de
            bloqueo creativo.
          </p>

          <p>
            Nuestro trabajo se apoya en una formación clínica y en una reflexión
            sostenida sobre la relación entre creación, subjetividad y vida
            cotidiana.
          </p>

          <p className="hero__closing">
            Porque crear no es solamente producir una obra. Es también una
            manera de habitar el mundo.
          </p>
        </div>

        <a
          href="#contacto"
          className="hero__button"
          aria-label="Solicitar una entrevista inicial de orientación psicológica"
        >
          Solicitar una entrevista inicial
        </a>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <div className="hero__orb hero__orb--one" />
        <div className="hero__orb hero__orb--two" />
        <div className="hero__stroke" />
      </div>
    </section>
  );
}