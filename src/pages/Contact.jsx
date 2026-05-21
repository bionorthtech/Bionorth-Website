import Reveal from "../components/Reveal.jsx";
import { CONTACT_SECTIONS } from "../data/content.js";

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function Contact() {
  return (
    <div>
      <section className="section" style={{ paddingTop: "150px", paddingBottom: "40px" }}>
        <div className="orb orb--cyan" style={{ width: 460, height: 460, top: -80, right: -120, opacity: 0.28 }} />
        <div className="container">
          <div className="eyebrow">Contact</div>
          <div className="section-divider" />
          <h2 className="section-title" style={{ maxWidth: "760px" }}>
            Get in touch<br />
            <em><span className="grad-text">with the right team.</span></em>
          </h2>
          <p className="section-lead" style={{ marginBottom: "0" }}>
            Reach out for general questions, legal matters, or investment opportunities.
          </p>
        </div>
      </section>

      <section className="section section--alt section--bordered" style={{ paddingTop: "64px", paddingBottom: "80px" }}>
        <div className="container">
          <div className="grid grid-3">
            {CONTACT_SECTIONS.map((contact, i) => (
              <Reveal
                key={i}
                delay={i * 0.08}
                className="card contact-card"
                style={{ borderColor: `${contact.color}22`, background: `linear-gradient(180deg, ${contact.color}0a, transparent)` }}
              >
                <div style={{ width: "36px", height: "3px", borderRadius: "999px", background: contact.color, marginBottom: "18px" }} />
                <div className="mono contact-card__category">{contact.category}</div>
                <div className="contact-card__avatar">{initials(contact.name)}</div>
                <div className="contact-card__name">{contact.name}</div>
                {contact.role && <div className="contact-card__role">{contact.role}</div>}
                {contact.organization && contact.organization !== contact.name && (
                  <div className="contact-card__org">{contact.organization}</div>
                )}
                <div className="contact-card__links">
                  {contact.website && (
                    <a href={contact.website} target="_blank" rel="noreferrer" className="contact-card__link">
                      <span aria-hidden="true">🌐</span>
                      <span>{contact.website.replace(/^https?:\/\/(www\.)?/, "")}</span>
                    </a>
                  )}
                  {contact.location && (
                    <div className="contact-card__link">
                      <span aria-hidden="true">📍</span>
                      <span>{contact.location}</span>
                    </div>
                  )}
                  {contact.email && (
                    <a href={`mailto:${contact.email}`} className="contact-card__link">
                      <span aria-hidden="true">📧</span>
                      <span>{contact.email}</span>
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
