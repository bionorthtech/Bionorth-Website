import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const HASH_LINKS = [
  { label: "Solution", href: "#solution" },
  { label: "Technology", href: "#technology" },
  { label: "Science", href: "#science" },
  { label: "Roadmap", href: "#development" },
  { label: "Team", href: "#team" },
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
          <span className="nav__mark">
            <span className="nav__mark-ring" />
            <span className="nav__mark-core" />
          </span>
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
            to="/side-projects"
            className={`nav__link ${location.pathname === "/side-projects" ? "nav__link--active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Side Projects
          </Link>
          <button className="nav__link" onClick={() => goToSection("#connect")}>
            Connect
          </button>
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
          <Link to="/side-projects" className="nav__link" onClick={() => setMenuOpen(false)}>
            Side Projects
          </Link>
          <button className="nav__link" onClick={() => goToSection("#connect")}>
            Connect
          </button>
        </div>
      )}
    </>
  );
}
