"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { siteConfig } from "../config/siteData";

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg className="brand-disc" viewBox="0 0 256 256" focusable="false">
        <g className="brand-disc-ring brand-disc-ring-outer" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="butt" strokeLinejoin="round">
          <path d="M26 112A103 103 0 0 1 196 49" />
          <path d="M216 68A103 103 0 0 1 230 112" />
          <path d="M230 136A103 103 0 0 1 140 231" />
          <path d="M116 231A103 103 0 0 1 26 136" />
        </g>
        <g className="brand-disc-ring brand-disc-ring-inner" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="butt" strokeLinejoin="round">
          <path d="M55 102A78 78 0 0 1 186 70" />
          <path d="M201 91A78 78 0 0 1 140 207" />
          <path d="M116 207A78 78 0 0 1 55 126" />
        </g>
        <g className="brand-disc-owl" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="square" strokeLinejoin="round">
          <path d="M62 101h37c11 0 19 8 19 19v28l10 11" />
          <path d="M194 101h-37c-11 0-19 8-19 19v28l-10 11" />
        </g>
        <g className="brand-disc-eyes" fill="currentColor">
          <path d="M75 141c10-10 26-10 36 2-13 7-27 6-36-2Z" />
          <path d="M181 141c-10-10-26-10-36 2 13 7 27 6 36-2Z" />
        </g>
        <g className="brand-disc-node-orbit">
          <circle className="brand-disc-node" cx="205" cy="57" r="9" />
        </g>
      </svg>
    </span>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-shell">
        <a className="wordmark" href="#top" aria-label="Traustia home">
          <BrandMark />
          <span>TRAUSTIA</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <i />
          <i />
        </button>
        <nav id="primary-navigation" className={`primary-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {siteConfig.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a className="button button-small" href="#contact" onClick={() => setMenuOpen(false)}>Discuss a Review</a>
        </nav>
      </div>
    </header>
  );
}

function ScrollBrandRail() {
  const railRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const rail = railRef.current;
      if (!rail) return;

      const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(window.scrollY / scrollable, 0), 1);
      const travel = Math.max(rail.clientHeight - 48, 0);
      rail.style.setProperty("--rail-y", `${Math.round(progress * travel)}px`);
      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <aside className="scroll-brand-rail" ref={railRef} aria-hidden="true">
      <span className="scroll-brand-traveler"><BrandMark /></span>
    </aside>
  );
}

function Hero() {
  return (
    <main id="main-content">
      <section className="hero" id="top">
        <div className="brand-card-shell">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-card" src="og.png" alt="Traustia — Evidence you can defend." />
        </div>
        <div className="container hero-message" id="why">
          <div>
            <p className="eyebrow">SPONSOR-SIDE BIOMEDICAL EVIDENCE VALIDATION</p>
            <h1>Execution is outsourced.<br /><em>Judgment cannot be.</em></h1>
          </div>
          <div className="hero-copy">
            <p>CRO and laboratory reports are outputs—not yet decision-ready evidence.</p>
            <p>Traustia helps biotech sponsors define rigorous work, review what comes back, and independently validate the claim before the next expensive decision.</p>
            <div className="hero-actions">
              <a className="button button-filled" href="#services">View the four services</a>
              <a className="text-link" href="#contact">Discuss a review <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
        <div className="container evidence-path" aria-label="From outsourced execution to a defensible decision">
          <div><span>01</span><strong>Biotech sponsor</strong><small>Owns the asset and decision</small></div>
          <i aria-hidden="true">→</i>
          <div><span>02</span><strong>CRO / laboratory output</strong><small>Data and report return</small></div>
          <i aria-hidden="true">→</i>
          <div className="is-traustia"><span>03</span><strong>Traustia review</strong><small>Specification, integrity, validation</small></div>
          <i aria-hidden="true">→</i>
          <div><span>04</span><strong>Board / partner decision</strong><small>Fund, partner, license, advance</small></div>
        </div>
        <p className="container hero-boundary">We do not run clinical operations. We make the sponsor-side specification and evidence defensible.</p>
      </section>
      <Services />
      <EngagementModels />
      <Contact />
    </main>
  );
}

function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-label">FOUR SERVICES</p>
            <h2 id="services-title">One evidence layer.<br />Four clear engagements.</h2>
          </div>
          <p>Start with the decision you need to make. We will identify the narrowest review that can make the evidence more defensible.</p>
        </div>
        <div className="service-list">
          {siteConfig.services.map((service) => (
            <article className="service-row" key={service.number}>
              <div className="service-number">{service.number}</div>
              <div className="service-main">
                <p>{service.timing}</p>
                <h3>{service.title}</h3>
                <strong>{service.promise}</strong>
              </div>
              <div className="service-detail">
                <span>REVIEW FOCUS</span>
                <ul>{service.focus.map((item) => <li key={item}>{item}</li>)}</ul>
                <p><span>DELIVERABLE</span><strong>{service.deliverable}</strong></p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngagementModels() {
  return (
    <section className="engagements" id="independence" aria-labelledby="engagement-title">
      <div className="container">
        <div className="section-heading section-heading-dark">
          <div>
            <p className="section-label">INDEPENDENCE BY DESIGN</p>
            <h2 id="engagement-title">Creation and validation<br />stay separate.</h2>
          </div>
          <p>Traustia cannot help build a model and then call its own review independent. Every engagement begins in one of two distinct workflows.</p>
        </div>
        <div className="engagement-grid">
          {siteConfig.engagementModels.map((model) => (
            <article className="engagement-model" key={model.label}>
              <p>{model.label}</p>
              <h3>{model.title}</h3>
              <strong>{model.role}</strong>
              <ul>{model.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="engagement-status">
                <span>{model.workspace}</span>
                <strong>{model.independence}</strong>
              </div>
            </article>
          ))}
        </div>
        <p className="firewall-note"><span>THE FIREWALL</span> Work performed in the Development Workspace is ineligible for independent validation by the same team.</p>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const composeInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (String(form.get("website") ?? "").trim()) return;

    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const organization = String(form.get("organization") ?? "").trim();
    const service = String(form.get("service") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    if (!name || !email || !service || !message) return;

    const subject = encodeURIComponent(`Traustia inquiry — ${service}`);
    const body = encodeURIComponent([
      `Name: ${name}`,
      `Email: ${email}`,
      `Organization: ${organization || "Not provided"}`,
      `Service: ${service}`,
      "",
      message,
    ].join("\n"));
    setStatus("ready");
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-heading">
          <p className="section-label">START WITH THE DECISION</p>
          <h2 id="contact-title">What does the evidence need to support?</h2>
          <p>Tell us where the work stands, what decision is approaching, and which evidence is still uncertain.</p>
        </div>
        <form className="contact-form" onSubmit={composeInquiry}>
          <label>
            <span>Service</span>
            <select name="service" required defaultValue="">
              <option value="" disabled>Select a review</option>
              {siteConfig.services.map((service) => <option key={service.number} value={service.title}>{service.title}</option>)}
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </label>
          <div className="field-pair">
            <label><span>Name</span><input name="name" autoComplete="name" required /></label>
            <label><span>Work email</span><input name="email" type="email" autoComplete="email" required /></label>
          </div>
          <label><span>Organization</span><input name="organization" autoComplete="organization" /></label>
          <label>
            <span>Decision and evidence question</span>
            <textarea name="message" rows={5} maxLength={2000} required placeholder="What decision is approaching, and what evidence needs review?" />
          </label>
          <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
          <div className="form-footer">
            <small>This prepares an email in your email application. Nothing is stored on this website.</small>
            <button className="button button-filled" type="submit">Compose inquiry <span aria-hidden="true">↗</span></button>
          </div>
          {status === "ready" ? <p className="form-status" role="status">Your inquiry has been prepared.</p> : null}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <a className="wordmark" href="#top" aria-label="Traustia home"><BrandMark /><span>TRAUSTIA</span></a>
          <p>Evidence you can defend.</p>
        </div>
        <nav aria-label="Footer navigation">
          {siteConfig.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Traustia. All rights reserved.</span>
        <span>Validation services—not clinical operations, regulatory certification, or legal advice.</span>
      </div>
    </footer>
  );
}

export function TraustiaSite() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <ScrollBrandRail />
      <Hero />
      <Footer />
    </>
  );
}
