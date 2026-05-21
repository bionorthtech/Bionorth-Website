import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import BrandLogo from "./BrandLogo.jsx";

const HASH_LINKS = [
  { label: "Solution", href: "#solution" },
  { label: "Technology", href: "#technology" },
  { label: "Science", href: "#science" },
  { label: "Roadmap", href: "#development" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (href) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash: href });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const goHome = () => {
    setMenuOpen(false);
    if (location.pathname !== "/") navigate("/");
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
       <div className="nav__inner">
        <button className="nav__brand" onClick={goHome}>
          <BrandLogo size={34} className="nav__logo" />
          <span className="nav__name">BioNorth</span>
          <span className="nav__tag">NEURAL</span>
        </button>

        <div className="nav__links">
          {HASH_LINKS.map((l) => (
            <button key={l.href} className="nav__link" onClick={() => goToSection(l.href)}>
              {l.label}
            </button>
          ))}
          <Link
            to="/team"
            className={`nav__link ${location.pathname === "/team" ? "nav__link--active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Team
          </Link>
          <Link
            to="/our-product"
            className={`nav__link ${location.pathname === "/our-product" ? "nav__link--active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Our Product
          </Link>
          <Link
            to="/side-projects"
            className={`nav__link ${location.pathname === "/side-projects" ? "nav__link--active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Side Projects
          </Link>
          <Link
            to="/contact"
            className={`nav__link ${location.pathname === "/contact" ? "nav__link--active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        <div className="nav__status">
          <span className="nav__dot" />
          <span className="nav__status-text">PATENT PENDING</span>
        </div>

        <button
          className={`nav__burger ${menuOpen ? "nav__burger--open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
       </div>
      </nav>

      {menuOpen && (
        <div className="nav__mobile">
          {HASH_LINKS.map((l) => (
            <button key={l.href} className="nav__link" onClick={() => goToSection(l.href)}>
              {l.label}
            </button>
          ))}
          <Link to="/team" className="nav__link" onClick={() => setMenuOpen(false)}>
            Team
          </Link>
          <Link to="/our-product" className="nav__link" onClick={() => setMenuOpen(false)}>
            Our Product
          </Link>
          <Link to="/side-projects" className="nav__link" onClick={() => setMenuOpen(false)}>
            Side Projects
          </Link>
          <Link
            to="/contact"
            className={`nav__link ${location.pathname === "/contact" ? "nav__link--active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
