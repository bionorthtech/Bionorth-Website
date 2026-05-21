import Reveal from "../components/Reveal.jsx";
import { TEAM_MEMBERS } from "../data/content.js";

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function Team() {
  return (
    <div>
      <section className="section" style={{ paddingTop: "150px", paddingBottom: "40px" }}>
        <div className="orb orb--green" style={{ width: 420, height: 420, top: -80, left: -120, opacity: 0.28 }} />
        <div className="container">
          <div className="eyebrow">The Team</div>
          <div className="section-divider" />
          <h2 className="section-title" style={{ maxWidth: "760px" }}>
            The people behind<br />
            <em><span className="grad-text">BioNorth.</span></em>
          </h2>
          <p className="section-lead" style={{ marginBottom: "0" }}>
            Built by high-school students at Lake Mary High School — rooted in a capstone project at
            Markham Woods Elementary and carried forward by BioNorth Tech.
          </p>
        </div>
      </section>

      <section className="section section--alt section--bordered" style={{ paddingTop: "64px", paddingBottom: "80px" }}>
        <div className="container">
          <div style={{ maxWidth: "420px" }}>
            {TEAM_MEMBERS.map((member, i) => (
              <Reveal key={i} delay={i * 0.08} className="card team-card">
                <div className="team-card__avatar">{initials(member.name)}</div>
                <div className="team-card__name">{member.name}</div>
                <div className="team-card__role">{member.role}</div>
                <div className="team-card__contacts">
                  <a href={member.website} target="_blank" rel="noreferrer" className="team-card__contact">
                    <span aria-hidden="true">🌐</span>
                    <span>{member.website.replace(/^https?:\/\//, "")}</span>
                  </a>
                  <div className="team-card__contact">
                    <span aria-hidden="true">📍</span>
                    <span>{member.location}</span>
                  </div>
                  <a href={`mailto:${member.email}`} className="team-card__contact">
                    <span aria-hidden="true">📧</span>
                    <span>{member.email}</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
