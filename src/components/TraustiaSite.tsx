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

function SiteBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const background = backgroundRef.current;
      if (!background) return;
      const progress = Math.min(Math.max(window.scrollY / (window.innerHeight * 1.4), 0), 1);
      background.style.setProperty("--background-y", `${Math.round(progress * 76)}px`);
      background.style.setProperty("--background-scale", `${(1.07 - progress * .025).toFixed(3)}`);
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
    <div className="site-background" ref={backgroundRef} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="traustia-evidence-system.webp" alt="" />
    </div>
  );
}

function Hero() {
  return (
    <main id="main-content">
      <section className="hero" id="top">
        <div className="container hero-stage" id="why">
          <div className="hero-story">
            <div className="hero-brand-block">
              <div className="hero-brand-lockup"><BrandMark /><span>TRAUSTIA</span></div>
              <p>Evidence you can defend.</p>
            </div>
            <p className="eyebrow">FOUR SPONSOR-SIDE EVIDENCE SERVICES</p>
            <p className="hero-opening">Traustia helps biotech sponsors make outsourced CRO, laboratory, biomarker, and model work ready for high-stakes decisions.</p>
            <h1>From outsourced work to<br /><em>evidence you can act on.</em></h1>
            <p className="hero-support">At four decisive moments, we prepare the work before it starts, audit the outputs when they return, independently validate the biomarker or model, and assemble the evidence dossier for financing or partnering.</p>
            <div className="hero-outcomes">
              <p><span>ENABLE</span>Advance the right asset with clearer board, financing, and partnership decisions.</p>
              <p><span>AVOID</span>Unclear specifications, protocol-to-report drift, leakage, unstable models, and claims that fail under diligence.</p>
            </div>
            <div className="hero-actions">
              <a className="button button-filled" href="#services">Follow the evidence journey</a>
              <a className="text-link" href="#contact">Discuss a review <span aria-hidden="true">↗</span></a>
            </div>
            <p className="hero-route" aria-label="The four Traustia services: Prepare, Review, Validate, Defend">
              <span><b>01</b>Prepare</span><i>→</i><span><b>02</b>Review</span><i>→</i><span><b>03</b>Validate</span><i>→</i><span><b>04</b>Defend</span>
            </p>
          </div>
        </div>
        <p className="container hero-boundary">Validation services—not clinical operations. Independent only when Traustia did not create the original model.</p>
      </section>
      <Services />
      <EngagementModels />
      <Contact />
    </main>
  );
}

function Services() {
  return (
    <section className="evidence-story" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="story-layout">
          <header className="story-heading">
            <p className="section-label">THE EVIDENCE JOURNEY</p>
            <h2 id="services-title">The evidence changes state.<br /><em>The responsibility does not.</em></h2>
            <p>One scientific claim moves through four moments. Traustia enters where the evidence needs to become more defensible.</p>
            <div className="story-progress" aria-hidden="true">
              {siteConfig.services.map((service) => <span key={service.number}>{service.number}</span>)}
            </div>
          </header>
          <div className="story-chapters">
            {siteConfig.services.map((service) => (
              <article className="story-chapter" key={service.number}>
                <p className="story-meta"><span>{service.number}</span>{service.timing}</p>
                <h3>{service.storyTitle}</h3>
                <p className="story-service">{service.title}</p>
                <p className="story-copy">{service.story}</p>
                <p className="story-trace">{service.trace}</p>
                <p className="story-output"><span>THE RECORD</span>{service.deliverable}</p>
              </article>
            ))}
          </div>
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
      <SiteBackground />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <ScrollBrandRail />
      <Hero />
      <Footer />
    </>
  );
}
