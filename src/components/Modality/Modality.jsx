import "./Modality.css";

const items = [
  {
    number: "01",
    title: "Atención online",
    text: "Encuentros a distancia, pensados para sostener procesos creativos sin depender del lugar de residencia.",
  },
  {
    number: "02",
    title: "Entrevista inicial de orientación",
    text: "Un primer espacio para ubicar la demanda, el momento del proceso y la forma de trabajo más adecuada.",
  },
  {
    number: "03",
    title: "Encuentros individuales de 45 a 50 minutos",
    text: "Sesiones personales con una duración cuidada, orientadas a trabajar bloqueos, inhibiciones y conflictos creativos.",
  },
  {
    number: "04",
    title: "Atención en español para artistas residentes en distintos países",
    text: "Un espacio de atención clínica en español para quienes desarrollan una práctica artística o creativa, independientemente del lugar donde se encuentren",
  },
];

export default function Modality() {
  return (
    <section
      className="modality"
      id="modalidad"
      aria-labelledby="modality-title"
    >
      <div className="modality__container">
        <div className="modality__title">
          <span className="section-number">03</span>

          <h2 id="modality-title">Modalidad</h2>

          <p>
            Una propuesta de trabajo pensada para acompañar procesos creativos
            desde una escucha clínica y una modalidad flexible.
          </p>
        </div>

        <div className="modality__layout">
          <aside
            className="modality__visual"
            aria-label="Resumen de la modalidad de atención psicológica online"
          >
            <div className="modality__orb modality__orb--one" aria-hidden="true"></div>
            <div className="modality__orb modality__orb--two" aria-hidden="true"></div>

            <img
              className="modality__character"
              src="https://res.cloudinary.com/dkdhdy9e5/image/upload/v1781346419/Proyecto-Guille/joven-se%C3%B1alando_d253sg.png"
              alt="Ilustración de una persona señalando información sobre atención psicológica online"
              loading="lazy"
              decoding="async"
            />

            <p>
              Un espacio de trabajo individual, online y sostenido en el tiempo,
              orientado a artistas que necesitan pensar su producción, sus
              bloqueos y sus formas de circulación.
            </p>
          </aside>

          <ol
            className="modality__timeline"
            aria-label="Características de la modalidad de atención"
          >
            {items.map((item) => (
              <li className="modality__item" key={item.number}>
                <div className="modality__marker" aria-hidden="true">
                  <span>{item.number}</span>
                </div>

                <article className="modality__content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>

        <p className="sr-only">
          Modalidad de psicoterapia online en español para artistas,
          creadores, músicos, actores, escritores y personas hispanohablantes
          que viven en Europa o trabajan fuera de su país. Atención psicológica
          individual para procesos creativos, bloqueos, inhibiciones y
          conflictos vinculados a la práctica artística.
        </p>
      </div>
    </section>
  );
}