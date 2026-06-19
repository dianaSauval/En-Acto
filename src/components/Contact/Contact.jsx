import { FiMail } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <section
      className="contact"
      id="contacto"
      aria-labelledby="contact-title"
    >
      <div className="contact__inner">
        <div className="contact__content">
          <div className="contact__heading">
            <span className="section-number">06</span>

            <h2 id="contact-title">Contacto</h2>

            <p>
              Para solicitar una entrevista inicial o realizar una consulta, podés
              escribir por correo electrónico, WhatsApp o Instagram.
            </p>
          </div>

          <nav
            className="contact__socials"
            aria-label="Canales de contacto de En Acto"
          >
            <a
              href="mailto:correo@ejemplo.com"
              className="contact-social-link contact-social-link--mail"
              aria-label="Enviar correo electrónico a En Acto"
            >
              <FiMail className="icon" aria-hidden="true" />
            </a>

            <a
              href="https://wa.me/0000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link contact-social-link--whatsapp"
              aria-label="Escribir por WhatsApp a En Acto"
            >
              <FaWhatsapp className="icon" aria-hidden="true" />
            </a>

            <a
              href="https://www.instagram.com/insitupsi/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link contact-social-link--instagram"
              aria-label="Abrir Instagram de En Acto"
            >
              <FaInstagram className="icon" aria-hidden="true" />
            </a>
          </nav>
        </div>

        <div className="contact__visual" aria-hidden="true">
          <span className="contact__blob contact__blob--one" />
          <span className="contact__blob contact__blob--two" />
          <span className="contact__spark contact__spark--one" />
          <span className="contact__spark contact__spark--two" />
          <span className="contact__spark contact__spark--three" />

          <img
            src="https://res.cloudinary.com/dkdhdy9e5/image/upload/v1781343872/Proyecto-Guille/joven-trabajando_e387pu.png"
            alt=""
            className="contact__image"
            loading="lazy"
            decoding="async"
          />
        </div>

        <p className="sr-only">
          Contacto para solicitar una entrevista inicial de atención psicológica
          online en español con En Acto. Consultas para artistas,
          creadores y personas hispanohablantes vinculadas a procesos creativos.
        </p>
      </div>
    </section>
  );
}