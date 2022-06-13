import { useCallback, useState } from "react";
import CustomLink from "./CustomLink";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = useCallback(() => {
    setExpanded((isExpanded) => !isExpanded);
  }, [setExpanded]);

  return (
    <nav
      className="navbar is-fixed-top is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="/logo.png" height={48} width={24} />
        </a>

        <a
          onClick={handleToggle}
          role="button"
          className={`navbar-burger ${expanded && "is-active"}`}
          aria-label="menu"
          aria-expanded={expanded}
          data-target="mainNavbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="mainNavbar"
        className={`navbar-menu ${expanded && "is-active"} `}
      >
        <div className="navbar-start">
          <CustomLink href="/" onClick={handleToggle} text="Inicio" />
          <CustomLink
            href="/location"
            onClick={handleToggle}
            text="Ubicacion"
          />
          <CustomLink href="/about" onClick={handleToggle} text="Acerca de" />
          <CustomLink href="/events" onClick={handleToggle} text="Eventos" />
          <CustomLink href="/contact" onClick={handleToggle} text="Contacto" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
