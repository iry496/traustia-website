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
          <a className="button button-small" href="#contact" onClick={() => setMenuOpen(false)}>Book a Scoping Call</a>
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

function Particles() {
  return (
    <div className="particle-field" aria-hidden="true">
      {Array.from({ length: 14 }, (_, index) => (
        <span key={index} className={`particle particle-v${index % 7}`} />
      ))}
      <span className="glow-orb glow-orb-a" />
      <span className="glow-orb glow-orb-b" />
    </div>
  );
}

function SectionHead({ id, kicker, title }: { id: string; kicker: string; title: string }) {
  return (
    <div className="sec-head">
      <p className="section-label">{kicker}</p>
      <div className="sec-title-row">
        <h2 id={id}>{title}</h2>
        <i className="sec-line" aria-hidden="true" />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-stage">
        <div className="hero-story">
          <div className="hero-brand">
            <span className="hero-brand-lockup"><BrandMark /><span>TRAUSTIA</span></span>
            <i aria-hidden="true" />
            <p className="hero-tagline">Evidence you can defend.</p>
          </div>
          <p className="eyebrow">SPONSOR-SIDE BIOMEDICAL EVIDENCE VALIDATION</p>
          <h1><span>Your CRO delivered the report.</span><em>We verify the evidence behind it.</em></h1>
          <p className="hero-opening">Traustia is an independent review team for biotech sponsors. Before you advance an asset, raise a round, or sign a licensing deal, we check that the outsourced science behind the decision actually holds — study design, data integrity, biomarkers, and models.</p>
          <div className="hero-actions">
            <a className="button button-filled" href="#contact">Book a scoping call</a>
            <a className="text-link" href="#services">See the four services <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-meta">
            <p className="hero-audience">FOR BIOTECH FOUNDERS &amp; CSOs · FINANCING &amp; BD TEAMS · INVESTORS · ACADEMIC SPIN-OFFS</p>
            <p className="hero-route" aria-label="The four Traustia services: Prepare, Review, Validate, Defend">
              <span><b>01</b>Prepare</span><i>→</i><span><b>02</b>Review</span><i>→</i><span><b>03</b>Validate</span><i>→</i><span><b>04</b>Defend</span>
            </p>
          </div>
        </div>
      </div>
      <p className="container hero-boundary">Validation services—not clinical operations. Independent only when Traustia did not create the original model.</p>
    </section>
  );
}

function Services({ onSelect }: { onSelect: (title: string) => void }) {
  return (
    <section className="section services-block" id="services" aria-labelledby="services-title">
      <div className="container">
        <SectionHead id="services-title" kicker="FOUR SERVICES" title="What we do" />
        <p className="sec-lead">One review for each moment your evidence is at risk. Every engagement ends with a written record you can put in front of a board, an investor, or a partner.</p>
        <div className="services-grid">
          {siteConfig.services.map((service) => (
            <a className="service-panel" key={service.number} href="#contact" onClick={() => onSelect(service.title)}>
              <p className="service-meta"><span>{service.number}</span>{service.timing}</p>
              <h3>{service.title}</h3>
              <p className="service-story">{service.story}</p>
              <p className="service-receive"><span>YOU RECEIVE</span>{service.deliverable}</p>
              <p className="service-cta">Request this review <span aria-hidden="true">→</span></p>
            </a>
          ))}
        </div>
        <p className="services-note">Validation services — not clinical operations. Independent only when Traustia did not create the original model.</p>
      </div>
    </section>
  );
}

function WhoWeServe() {
  return (
    <section className="section audiences" id="who" aria-labelledby="who-title">
      <div className="container">
        <SectionHead id="who-title" kicker="WHO WE WORK WITH" title="Who we serve" />
        <p className="sec-lead">If the next board meeting, financing round, or licensing conversation depends on work someone else performed, we work for you.</p>
        <div className="tile-grid">
          {siteConfig.audiences.map((audience) => (
            <article className="tile" key={audience.title}>
              <h3>{audience.title}</h3>
              <p>{audience.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyTraustia() {
  return (
    <section className="section why" id="why" aria-labelledby="why-title">
      <div className="container why-grid">
        <div className="why-left">
          <SectionHead id="why-title" kicker="WHY TRAUSTIA" title="Why sponsors bring us in" />
          <p className="why-copy">Outsourced work comes back as a polished report. Whether it can carry a high-stakes decision is a different question — and answering it is our entire job.</p>
          <p className="why-copy">We catch problems while they are still cheap to fix, so you walk into diligence with no surprises, and your board sees go/no-go calls backed by documented, independent review — not by the vendor&rsquo;s own summary of its own work.</p>
          <a className="button button-filled" href="#contact">Book a scoping call</a>
        </div>
        <div className="why-right">
          {siteConfig.whyQuestions.map((question) => (
            <article className="qa-item" key={question.number}>
              <span className="qa-badge" aria-hidden="true">{question.number}</span>
              <div>
                <h3>{question.title}</h3>
                <p>{question.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteBand() {
  return (
    <section className="quote-band" aria-label="The Traustia position">
      <div className="container">
        <p className="quote-text">&ldquo;CROs execute. Investors interrogate.<br />Traustia is the check in between — working only for you.&rdquo;</p>
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="section outcomes" aria-labelledby="outcomes-title">
      <div className="container">
        <SectionHead id="outcomes-title" kicker="WHAT CHANGES" title="What you get out of it" />
        <p className="sec-lead">Four ways checked evidence changes the position you decide, raise, and negotiate from.</p>
        <div className="tile-grid">
          {siteConfig.outcomes.map((outcome) => (
            <article className="tile" key={outcome.title}>
              <h3>{outcome.title}</h3>
              <p>{outcome.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngagementModels() {
  return (
    <section className="section engagements" id="independence" aria-labelledby="engagement-title">
      <div className="container">
        <SectionHead id="engagement-title" kicker="INDEPENDENCE BY DESIGN" title="We never validate our own work" />
        <p className="sec-lead">Every engagement begins in one of two lanes, and a firewall keeps them apart. That separation is what makes a Traustia validation worth showing to your investors.</p>
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

function CtaBand() {
  return (
    <section className="cta-band" aria-label="Start a review">
      <div className="container cta-band-inner">
        <i className="cta-bar" aria-hidden="true" />
        <p className="cta-title">What decision is in front of you?</p>
        <a className="button button-inverse" href="#contact">Start the conversation</a>
      </div>
    </section>
  );
}

function Contact({ selectedService, onServiceChange }: { selectedService: string; onServiceChange: (value: string) => void }) {
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
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-heading">
          <SectionHead id="contact-title" kicker="START WITH THE DECISION" title="Start a review" />
          <p>A financing round. A licensing conversation. A go/no-go on the lead asset. A CRO contract about to be signed. Tell us the decision and where the evidence stands — we will tell you which review fits, what it covers, and what it would take.</p>
        </div>
        <form className="contact-form" onSubmit={composeInquiry}>
          <label>
            <span>Service</span>
            <select name="service" required value={selectedService} onChange={(event) => onServiceChange(event.target.value)}>
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
            <button className="button button-filled" type="submit">Start the conversation <span aria-hidden="true">↗</span></button>
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
  const [selectedService, setSelectedService] = useState("");

  return (
    <>
      <SiteBackground />
      <Particles />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <ScrollBrandRail />
      <main id="main-content">
        <Hero />
        <Services onSelect={setSelectedService} />
        <WhoWeServe />
        <WhyTraustia />
        <QuoteBand />
        <Outcomes />
        <EngagementModels />
        <CtaBand />
        <Contact selectedService={selectedService} onServiceChange={setSelectedService} />
      </main>
      <Footer />
    </>
  );
}
