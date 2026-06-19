import "./Situations.css";

const situations = [
  "Sostener una práctica artística en determinados momentos de la vida.",
  "Atravesar cambios de rumbo o redefiniciones profesionales.",
  "Recuperar un trabajo creativo interrumpido.",
  "Resolver conflictos que afectan proyectos en curso.",
  "Pensar la relación con el reconocimiento y la exposición pública.",
  "Conciliar la creación con otras exigencias de la vida.",
  "Interrogar el sentido y la continuidad de una práctica.",
];

export default function Situations() {
  return (
    <section
      className="situations"
      id="situaciones"
      aria-labelledby="situations-title"
    >
      <div className="situations__inner">
        <div className="situations__heading">
          <span className="section-number">02</span>
          <h2 id="situations-title">Algunas situaciones frecuentes</h2>
        </div>

        <ul className="situations__list" aria-label="Situaciones frecuentes en la vida artística">
          {situations.map((situation) => (
            <li key={situation}>
              <article>{situation}</article>
            </li>
          ))}
        </ul>

        <p className="sr-only">
          Espacio de atención psicológica online en español para artistas,
          creadores y personas hispanohablantes que atraviesan bloqueo creativo,
          crisis profesional, cambios de rumbo, conflictos en proyectos
          artísticos, exposición pública, exigencias de la vida creativa y
          preguntas sobre la continuidad de su práctica.
        </p>
      </div>
    </section>
  );
}