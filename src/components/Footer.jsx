import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "32px", flexWrap: "wrap" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "var(--grad)", display: "grid", placeItems: "center", boxShadow: "0 0 16px -3px rgba(0,212,255,0.6)" }}>
              <span style={{ width: "7px", height: "7px", background: "#02110D", borderRadius: "50%" }} />
            </span>
            <span className="display" style={{ fontWeight: 700, fontSize: "16px", color: "var(--heading)", letterSpacing: "-0.01em" }}>BioNorth</span>
          </div>
          <div className="sans" style={{ fontSize: "11px", color: "var(--faint)", lineHeight: 1.6, maxWidth: "380px" }}>
            Built by a team of high-school students. Lake Mary, Florida.<br />
            This device is a research prototype. Not FDA-cleared. For investigational use only.
          </div>
          <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
            <Link to="/" className="mono" style={{ fontSize: "10px", color: "var(--muted-3)", letterSpacing: "1px" }}>HOME</Link>
            <Link to="/side-projects" className="mono" style={{ fontSize: "10px", color: "var(--muted-3)", letterSpacing: "1px" }}>SIDE PROJECTS</Link>
            <a href="https://github.com/bionorthtech" target="_blank" rel="noreferrer" className="mono" style={{ fontSize: "10px", color: "var(--muted-3)", letterSpacing: "1px" }}>GITHUB</a>
            <a href="mailto:biotech@bionorth.us" className="mono" style={{ fontSize: "10px", color: "var(--muted-3)", letterSpacing: "1px" }}>EMAIL</a>
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

      <div className="container" style={{ marginTop: "40px", paddingTop: "20px", borderTop: "1px solid #0A0D14", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
        <div className="mono" style={{ fontSize: "9px", color: "#2A2A3A", letterSpacing: "1px" }}>
          © {new Date().getFullYear()} BioNorth Tech. All rights reserved.
        </div>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <span style={{ width: "5px", height: "5px", background: "#00FF88", borderRadius: "50%", animation: "pulse 1.5s infinite", display: "inline-block" }} />
          <span className="mono" style={{ fontSize: "9px", color: "#00FF8866", letterSpacing: "1px" }}>ACTIVE DEVELOPMENT</span>
        </div>
      </div>
    </footer>
  );
}
