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
          Un espacio de pensamiento para quienes hacen de la creación una práctica.
        </h1>

        <div className="hero__text">
          <p>
            La vida artística no se reduce a la producción de obras. También
            implica atravesar decisiones, interrupciones, transformaciones,
            conflictos y momentos de incertidumbre. La creación pone en juego
            modos singulares de relacionarse con el trabajo, el deseo, el
            reconocimiento, el tiempo y los otros.
          </p>

          <p>
            En Acto propone un espacio de trabajo psicológico orientado a
            quienes desarrollan una práctica artística o creativa. Nuestro
            trabajo se apoya en una formación clínica y en una reflexión
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
          aria-label="Solicitar una entrevista inicial"
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