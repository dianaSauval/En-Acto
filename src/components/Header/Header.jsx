import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <a href="#inicio" className="header__brand" onClick={closeMenu}>
        <span className="header__logo">EA</span>
        <span className="header__name">En Acto</span>
      </a>

      <button
        className={`header__burger ${open ? "is-open" : ""}`}
        type="button"
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
      </button>

      <nav className={`header__nav ${open ? "is-open" : ""}`}>
        <a href="#para-quien" onClick={closeMenu}>Para quién</a>
        <a href="#situaciones" onClick={closeMenu}>Situaciones</a>
        <a href="#enfoque" onClick={closeMenu}>Enfoque</a>
        <a href="#quien-soy" onClick={closeMenu}>Quién soy</a>
        <a href="#contacto" className="header__cta" onClick={closeMenu}>
          Contacto
        </a>
      </nav>
    </header>
  );
}