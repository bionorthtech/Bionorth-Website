import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import { TRUENORTH_PRODUCT } from "../data/content.js";

const img = (n) => `${import.meta.env.BASE_URL}images/${n}`;

export default function OurProduct() {
  return (
    <div>
      <section className="section" style={{ paddingTop: "150px", paddingBottom: "40px" }}>
        <div className="orb orb--cyan" style={{ width: 480, height: 480, top: -80, right: -120, opacity: 0.3 }} />
        <div className="container">
          <div className="eyebrow">Our Product</div>
          <div className="section-divider" />
          <h2 className="section-title" style={{ maxWidth: "760px" }}>
            {TRUENORTH_PRODUCT.nameLine1}<br />
            <em><span className="grad-text">{TRUENORTH_PRODUCT.nameLine2}</span></em>
          </h2>
          <p className="section-lead" style={{ marginBottom: "0" }}>
            {TRUENORTH_PRODUCT.tagline}
          </p>
        </div>
      </section>

      <section className="section section--alt section--bordered" style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: "52px", alignItems: "center" }}>
            <Reveal>
              <div className="mono" style={{ fontSize: "9px", color: "#5fe6e0", letterSpacing: "2px", marginBottom: "16px" }}>OVERVIEW</div>
              <p className="sans" style={{ fontSize: "clamp(15px, 2vw, 17px)", color: "var(--muted)", lineHeight: 1.8, maxWidth: "560px", marginBottom: "28px", fontWeight: 300 }}>
                {TRUENORTH_PRODUCT.overview}
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link to="/#solution" className="btn btn--primary">See How It Works</Link>
                <Link to="/#connect" className="btn btn--ghost">Get Involved</Link>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="media" style={{ aspectRatio: "4 / 3" }}>
              <img src={img(TRUENORTH_PRODUCT.image)} alt={TRUENORTH_PRODUCT.imageAlt} loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {TRUENORTH_PRODUCT.highlights.map((item, i) => (
              <Reveal key={i} delay={i * 0.08} className="card">
                <div style={{ width: "30px", height: "3px", borderRadius: "999px", background: "var(--grad)", marginBottom: "16px" }} />
                <div className="sans" style={{ fontSize: "14px", color: "var(--heading)", fontWeight: 600, marginBottom: "10px" }}>{item.label}</div>
                <div className="sans" style={{ fontSize: "12px", color: "var(--muted-3)", lineHeight: 1.6 }}>{item.detail}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
