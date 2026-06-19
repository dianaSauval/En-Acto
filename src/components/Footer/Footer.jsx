import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brandBlock">
            <p className="footer__brand">En Acto</p>

            <p className="footer__text">
              Psicología para artistas y creadores.
            </p>
          </div>

          <nav
            className="footer__links"
            aria-label="Navegación del pie de página"
          >
            <a href="#inicio">Inicio</a>
            <a href="#enfoque">Enfoque</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>

        <div className="footer__bottom">
          <small className="footer__copyright">
            © {new Date().getFullYear()} En Acto · Guillermo Pietra Figueredo
          </small>

          <small className="footer__credits">
            Sitio diseñado y desarrollado por{" "}
            <a
              href="https://dianasauvaldigital.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Diana Sauval
            </a>
          </small>
        </div>

        <p className="sr-only">
          En Acto ofrece atención psicológica online en español para artistas,
          creadores y personas vinculadas a procesos creativos. Guillermo Pietra
          Figueredo, psicólogo y docente universitario, acompaña a
          hispanohablantes residentes en Europa y otros países.
        </p>
      </div>
    </footer>
  );
}