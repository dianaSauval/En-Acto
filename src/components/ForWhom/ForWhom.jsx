import "./ForWhom.css";

const disciplines = [
  {
    title: "Artes visuales",
    image:
      "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1781341056/Proyecto-Guille/artes-visuales_cho8eu.png",
  },
  {
    title: "Música",
    image:
      "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1781341187/Proyecto-Guille/musica_nyz7pq.png",
  },
  {
    title: "Escritura",
    image:
      "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1781341377/Proyecto-Guille/escritura_gurkfx.png",
  },
  {
    title: "Artes escénicas",
    image:
      "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1781343103/Proyecto-Guille/artes-escenicas_hqpdzu.png",
  },
  {
    title: "Cine y audiovisual",
    image:
      "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1781343103/Proyecto-Guille/Cine_suqsl7.png",
  },
  {
    title: "Curaduría y gestión cultural",
    image:
      "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1781343103/Proyecto-Guille/Curadur%C3%ADa_neohmb.png",
  },
  {
    title: "Diseño y disciplinas afines",
    image:
      "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1781343103/Proyecto-Guille/Dise%C3%B1o_fsniri.png",
  },
];

export default function ForWhom() {
  return (
    <section
      className="for-whom"
      id="para-quien"
      aria-labelledby="for-whom-title"
    >
      <div className="for-whom__inner">
        <div className="for-whom__heading">
          <span className="section-number">01</span>

          <h2 id="for-whom-title">¿Para quién?</h2>

          <p>
            Para artistas y personas cuya actividad principal se vincula con
            procesos de creación:
          </p>
        </div>

        <ul className="for-whom__grid" aria-label="Disciplinas artísticas">
          {disciplines.map((discipline) => (
            <li
              key={discipline.title}
              className="for-whom__card for-whom__card--image"
              style={{
                "--card-image": `url('${discipline.image}')`,
              }}
            >
              <h3>{discipline.title}</h3>
            </li>
          ))}
        </ul>

        <p className="sr-only">
          Atención psicológica online en español para artistas
          hispanohablantes, músicos, actores, bailarines, artistas visuales,
          escritores, cineastas, diseñadores, gestores culturales, curadores y
          otras personas vinculadas a procesos creativos en Europa.
        </p>
      </div>
    </section>
  );
}