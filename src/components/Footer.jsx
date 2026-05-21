import { Link } from "react-router-dom";
import { FOOTER_LEGAL } from "../data/content.js";
import BrandLogo from "./BrandLogo.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "32px", flexWrap: "wrap" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <BrandLogo size={30} className="footer__logo" />
            <span className="display" style={{ fontWeight: 700, fontSize: "16px", color: "var(--heading)", letterSpacing: "-0.01em" }}>BioNorth</span>
          </div>
          <div className="sans" style={{ fontSize: "11px", color: "var(--faint)", lineHeight: 1.6, maxWidth: "380px" }}>
            Built by high-school students at Lake Mary High School, Florida. Started as a capstone project at Markham Woods Elementary.<br />
            {FOOTER_LEGAL.disclaimer}
          </div>
          <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
            <Link to="/" className="mono" style={{ fontSize: "10px", color: "var(--muted-3)", letterSpacing: "1px" }}>HOME</Link>
            <Link to="/team" className="mono" style={{ fontSize: "10px", color: "var(--muted-3)", letterSpacing: "1px" }}>TEAM</Link>
            <Link to="/our-product" className="mono" style={{ fontSize: "10px", color: "var(--muted-3)", letterSpacing: "1px" }}>OUR PRODUCT</Link>
            <Link to="/side-projects" className="mono" style={{ fontSize: "10px", color: "var(--muted-3)", letterSpacing: "1px" }}>SIDE PROJECTS</Link>
            <Link to="/contact" className="mono" style={{ fontSize: "10px", color: "var(--muted-3)", letterSpacing: "1px" }}>CONTACT</Link>
            <a href="https://github.com/bionorthtech" target="_blank" rel="noreferrer" className="mono" style={{ fontSize: "10px", color: "var(--muted-3)", letterSpacing: "1px" }}>GITHUB</a>
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div className="mono" style={{ fontSize: "9px", color: "#00D4FF44", letterSpacing: "2px", marginBottom: "8px" }}>PATENT PENDING</div>
          <div className="mono" style={{ fontSize: "9px", color: "#333", letterSpacing: "1px", lineHeight: 1.6 }}>
            Closed-Loop Neuromotor Failure Detection<br />
            &amp; Adaptive Neuromuscular Stimulation
          </div>
        </div>
      </div>

      <div className="container footer__legal">
        <div className="mono footer__legal-label">BIOMEDICAL DEVICE IP · {FOOTER_LEGAL.entity.toUpperCase()}</div>
        <p className="sans footer__legal-text">{FOOTER_LEGAL.notice}</p>
        <p className="sans footer__legal-text footer__legal-text--strong">{FOOTER_LEGAL.prohibition}</p>
      </div>

      <div className="container" style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid #0A0D14", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
        <div className="mono" style={{ fontSize: "9px", color: "#2A2A3A", letterSpacing: "1px" }}>
          © 2026 {FOOTER_LEGAL.entity}. All rights reserved.
        </div>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <span style={{ width: "5px", height: "5px", background: "#00FF88", borderRadius: "50%", animation: "pulse 1.5s infinite", display: "inline-block" }} />
          <span className="mono" style={{ fontSize: "9px", color: "#00FF8866", letterSpacing: "1px" }}>ACTIVE DEVELOPMENT</span>
        </div>
      </div>
    </footer>
  );
}
