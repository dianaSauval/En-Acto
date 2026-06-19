import "./Approach.css";

export default function Approach() {
  return (
    <section
      className="approach"
      id="enfoque"
      aria-labelledby="approach-title"
    >
      <div className="approach__inner">
        <div className="approach__sticky">
          <span className="section-number">04</span>
          <h2 id="approach-title">Nuestro enfoque</h2>
        </div>

        <div className="approach__content">
          <p>
            No trabajamos desde modelos estandarizados de productividad ni desde
            fórmulas para maximizar el rendimiento creativo.
          </p>

          <p>
            Entendemos la creación como una práctica singular, atravesada por
            dimensiones subjetivas que merecen ser pensadas en su complejidad.
          </p>

          <p>
            La propuesta de En Acto surge de la articulación entre experiencia
            clínica, reflexión teórica y práctica artística.
          </p>

          <p>
            Ofrecemos un espacio clínico para abordar estas cuestiones desde una
            escucha atenta a cada recorrido particular.
          </p>
        </div>

        <p className="sr-only">
          Enfoque clínico de psicología para artistas y creadores. Atención
          psicológica online en español desde una perspectiva clínica orientada a
          procesos creativos, subjetividad, práctica artística, bloqueo creativo,
          exposición pública, conflictos profesionales y vida cotidiana.
        </p>
      </div>
    </section>
  );
}