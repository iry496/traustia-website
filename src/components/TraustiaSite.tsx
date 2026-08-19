"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  siteConfig,
  siteCopy,
  type Locale,
  type ServiceId,
  type SiteCopy,
} from "../config/siteData";

type ServiceSelection = ServiceId | "not-sure" | "";

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

function LanguageSwitch({ locale, copy, onChange }: { locale: Locale; copy: SiteCopy; onChange: (locale: Locale) => void }) {
  return (
    <div className="language-switch" role="group" aria-label={copy.language.ariaLabel}>
      <button
        type="button"
        className={locale === "en" ? "is-active" : ""}
        aria-label={copy.language.english}
        aria-pressed={locale === "en"}
        onClick={() => onChange("en")}
      >
        EN
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        className={locale === "zh-TW" ? "is-active" : ""}
        aria-label={copy.language.traditionalChinese}
        aria-pressed={locale === "zh-TW"}
        onClick={() => onChange("zh-TW")}
      >
        繁中
      </button>
    </div>
  );
}

function Header({ locale, copy, onLocaleChange }: { locale: Locale; copy: SiteCopy; onLocaleChange: (locale: Locale) => void }) {
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
        <a className="wordmark" href="#top" aria-label={copy.accessibility.home}>
          <BrandMark />
          <span>TRAUSTIA</span>
        </a>
        <div className="header-controls">
          <nav id="primary-navigation" className={`primary-nav ${menuOpen ? "is-open" : ""}`} aria-label={copy.accessibility.primaryNavigation}>
            {copy.navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
            <a className="button button-small" href="#contact" onClick={() => setMenuOpen(false)}>{copy.headerCta}</a>
          </nav>
          <LanguageSwitch locale={locale} copy={copy} onChange={onLocaleChange} />
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{copy.accessibility.menu}</span>
            <i />
            <i />
          </button>
        </div>
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

function Hero({ copy }: { copy: SiteCopy }) {
  return (
    <section className="hero" id="top">
      <div className="container hero-stage">
        <div className="hero-story">
          <div className="hero-brand">
            <span className="hero-brand-lockup"><BrandMark /><span>TRAUSTIA</span></span>
            <i aria-hidden="true" />
            <p className="hero-tagline">{copy.hero.tagline}</p>
          </div>
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1><span>{copy.hero.headline[0]}</span><em>{copy.hero.headline[1]}</em></h1>
          <p className="hero-opening">{copy.hero.opening}</p>
          <div className="hero-actions">
            <a className="button button-filled" href="#contact">{copy.hero.primaryCta}</a>
            <a className="text-link" href="#services">{copy.hero.secondaryCta} <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-meta">
            <p className="hero-audience">{copy.hero.audience}</p>
            <p className="hero-route" aria-label={copy.hero.routeAria}>
              {copy.hero.route.map((label, index) => (
                <span className="route-step" key={label}>
                  <span><b>{String(index + 1).padStart(2, "0")}</b>{label}</span>
                  {index < copy.hero.route.length - 1 ? <i aria-hidden="true">→</i> : null}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <p className="container hero-boundary">{copy.hero.boundary}</p>
    </section>
  );
}

function Services({ copy, onSelect }: { copy: SiteCopy; onSelect: (id: ServiceId) => void }) {
  return (
    <section className="section services-block" id="services" aria-labelledby="services-title">
      <div className="container">
        <SectionHead id="services-title" kicker={copy.servicesSection.kicker} title={copy.servicesSection.title} />
        <p className="sec-lead">{copy.servicesSection.lead}</p>
        <div className="services-grid">
          {copy.services.map((service) => (
            <a className="service-panel" key={service.id} href="#contact" onClick={() => onSelect(service.id)}>
              <p className="service-meta"><span>{service.number}</span>{service.timing}</p>
              <h3>{service.title}</h3>
              <p className="service-story">{service.story}</p>
              <p className="service-receive"><span>{copy.servicesSection.receive}</span>{service.deliverable}</p>
              <p className="service-cta">{copy.servicesSection.request} <span aria-hidden="true">→</span></p>
            </a>
          ))}
        </div>
        <p className="services-note">{copy.servicesSection.note}</p>
      </div>
    </section>
  );
}

function WhoWeServe({ copy }: { copy: SiteCopy }) {
  return (
    <section className="section audiences" id="who" aria-labelledby="who-title">
      <div className="container">
        <SectionHead id="who-title" kicker={copy.who.kicker} title={copy.who.title} />
        <p className="sec-lead">{copy.who.lead}</p>
        <div className="tile-grid">
          {copy.audiences.map((audience) => (
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

function WhyTraustia({ copy }: { copy: SiteCopy }) {
  return (
    <section className="section why" id="why" aria-labelledby="why-title">
      <div className="container why-grid">
        <div className="why-left">
          <SectionHead id="why-title" kicker={copy.why.kicker} title={copy.why.title} />
          {copy.why.paragraphs.map((paragraph) => <p className="why-copy" key={paragraph}>{paragraph}</p>)}
          <a className="button button-filled" href="#contact">{copy.why.cta}</a>
        </div>
        <div className="why-right">
          {copy.whyQuestions.map((question) => (
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

function QuoteBand({ locale, copy }: { locale: Locale; copy: SiteCopy }) {
  return (
    <section className="quote-band" aria-label={copy.quote.ariaLabel}>
      <div className="container">
        <p className="quote-text">
          {locale === "zh-TW" ? "「" : "“"}{copy.quote.lines[0]}<br />{copy.quote.lines[1]}{locale === "zh-TW" ? "」" : "”"}
        </p>
      </div>
    </section>
  );
}

function EvidenceSignals({ copy }: { copy: SiteCopy }) {
  return (
    <section className="section evidence-signals" id="signals" aria-labelledby="signals-title">
      <div className="container">
        <SectionHead id="signals-title" kicker={copy.signals.kicker} title={copy.signals.title} />
        <p className="sec-lead">{copy.signals.lead}</p>
        <article className="signal-feature">
          <header className="signal-header">
            <p className="signal-label">{copy.signals.featuredLabel}</p>
            <h3>{copy.signals.articleTitle}</h3>
            <p className="signal-dek">{copy.signals.articleDek}</p>
            <p className="signal-meta">{copy.signals.articleMeta}</p>
          </header>
          <details className="signal-details">
            <summary>
              <span className="signal-open-label">{copy.signals.openLabel}</span>
              <span className="signal-close-label">{copy.signals.closeLabel}</span>
              <i aria-hidden="true">↓</i>
            </summary>
            <div className="signal-article-body">
              {copy.signals.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <blockquote>{copy.signals.pullQuote}</blockquote>
              <aside className="signal-decision">
                <span>{copy.signals.decisionLabel}</span>
                <p>{copy.signals.decisionBody}</p>
              </aside>
              <div className="signal-sources">
                <p>{copy.signals.sourcesLabel}</p>
                <ul>
                  {copy.signals.sources.map((source) => (
                    <li key={source.href}>
                      <a href={source.href} target="_blank" rel="noreferrer">{source.label} <span aria-hidden="true">↗</span></a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
          <p className="signal-editorial-note">{copy.signals.editorialNote}</p>
        </article>
      </div>
    </section>
  );
}

function Outcomes({ copy }: { copy: SiteCopy }) {
  return (
    <section className="section outcomes" aria-labelledby="outcomes-title">
      <div className="container">
        <SectionHead id="outcomes-title" kicker={copy.outcomesSection.kicker} title={copy.outcomesSection.title} />
        <p className="sec-lead">{copy.outcomesSection.lead}</p>
        <div className="tile-grid">
          {copy.outcomes.map((outcome) => (
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

function EngagementModels({ copy }: { copy: SiteCopy }) {
  return (
    <section className="section engagements" id="independence" aria-labelledby="engagement-title">
      <div className="container">
        <SectionHead id="engagement-title" kicker={copy.independence.kicker} title={copy.independence.title} />
        <p className="sec-lead">{copy.independence.lead}</p>
        <div className="engagement-grid">
          {copy.engagementModels.map((model) => (
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
        <p className="firewall-note"><span>{copy.independence.firewallLabel}</span>{copy.independence.firewallNote}</p>
      </div>
    </section>
  );
}

function CtaBand({ copy }: { copy: SiteCopy }) {
  return (
    <section className="cta-band" aria-label={copy.ctaBand.ariaLabel}>
      <div className="container cta-band-inner">
        <i className="cta-bar" aria-hidden="true" />
        <p className="cta-title">{copy.ctaBand.title}</p>
        <a className="button button-inverse" href="#contact">{copy.ctaBand.cta}</a>
      </div>
    </section>
  );
}

function Contact({ copy, selectedService, onServiceChange }: { copy: SiteCopy; selectedService: ServiceSelection; onServiceChange: (value: ServiceSelection) => void }) {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const composeInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (String(form.get("website") ?? "").trim()) return;

    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const organization = String(form.get("organization") ?? "").trim();
    const serviceId = String(form.get("service") ?? "").trim() as ServiceSelection;
    const message = String(form.get("message") ?? "").trim();
    if (!name || !email || !serviceId || !message) return;

    const service = serviceId === "not-sure"
      ? copy.contact.notSure
      : copy.services.find((item) => item.id === serviceId)?.title ?? serviceId;
    const subject = encodeURIComponent(`${copy.contact.subjectPrefix} — ${service}`);
    const body = encodeURIComponent([
      `${copy.contact.emailLabels.name}: ${name}`,
      `${copy.contact.emailLabels.email}: ${email}`,
      `${copy.contact.emailLabels.organization}: ${organization || copy.contact.emailLabels.notProvided}`,
      `${copy.contact.emailLabels.service}: ${service}`,
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
          <SectionHead id="contact-title" kicker={copy.contact.kicker} title={copy.contact.title} />
          <p>{copy.contact.body}</p>
        </div>
        <form className="contact-form" onSubmit={composeInquiry}>
          <label>
            <span>{copy.contact.service}</span>
            <select name="service" required value={selectedService} onChange={(event) => onServiceChange(event.target.value as ServiceSelection)}>
              <option value="" disabled>{copy.contact.selectReview}</option>
              {copy.services.map((service) => <option key={service.id} value={service.id}>{service.title}</option>)}
              <option value="not-sure">{copy.contact.notSure}</option>
            </select>
          </label>
          <div className="field-pair">
            <label><span>{copy.contact.name}</span><input name="name" autoComplete="name" required /></label>
            <label><span>{copy.contact.workEmail}</span><input name="email" type="email" autoComplete="email" required /></label>
          </div>
          <label><span>{copy.contact.organization}</span><input name="organization" autoComplete="organization" /></label>
          <label>
            <span>{copy.contact.decisionQuestion}</span>
            <textarea name="message" rows={5} maxLength={2000} required placeholder={copy.contact.placeholder} />
          </label>
          <label className="honeypot" aria-hidden="true">{copy.contact.honeypot}<input name="website" tabIndex={-1} autoComplete="off" /></label>
          <div className="form-footer">
            <small>{copy.contact.disclaimer}</small>
            <button className="button button-filled" type="submit">{copy.contact.button} <span aria-hidden="true">↗</span></button>
          </div>
          {status === "ready" ? <p className="form-status" role="status">{copy.contact.status}</p> : null}
        </form>
      </div>
    </section>
  );
}

function Footer({ copy }: { copy: SiteCopy }) {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <a className="wordmark" href="#top" aria-label={copy.accessibility.home}><BrandMark /><span>TRAUSTIA</span></a>
          <p>{copy.footer.tagline}</p>
        </div>
        <nav aria-label={copy.accessibility.footerNavigation}>
          {copy.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>{copy.footer.copyright}</span>
        <span>{copy.footer.disclaimer}</span>
      </div>
    </footer>
  );
}

export function TraustiaSite() {
  const [locale, setLocale] = useState<Locale>("en");
  const [localeReady, setLocaleReady] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceSelection>("");
  const copy = siteCopy[locale];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryLocale = params.get("lang");
    const savedLocale = window.localStorage.getItem("traustia-locale");
    const browserLocale = window.navigator.language.toLowerCase().startsWith("zh") ? "zh-TW" : "en";
    const nextLocale: Locale = queryLocale === "zh-TW" || queryLocale === "zh"
      ? "zh-TW"
      : queryLocale === "en"
        ? "en"
        : savedLocale === "zh-TW" || savedLocale === "en"
          ? savedLocale
          : browserLocale;

    const frame = window.requestAnimationFrame(() => {
      setLocale(nextLocale);
      setLocaleReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!localeReady) return;

    document.documentElement.lang = locale === "zh-TW" ? "zh-Hant-TW" : "en";
    document.documentElement.dataset.locale = locale;
    document.title = locale === "zh-TW"
      ? "Traustia｜生醫證據驗證"
      : "Traustia | Biomedical Evidence Validation";

    const description = locale === "zh-TW"
      ? "Traustia 為生技委託方提供 CRO 就緒度審查、交付成果完整性審查、生物標誌與模型獨立驗證，以及募資／合作證據檔案。"
      : "Traustia provides sponsor-side CRO readiness and output reviews, independent biomarker and model validation, and evidence dossiers for financing and partnering.";
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);

    window.localStorage.setItem("traustia-locale", locale);
    const url = new URL(window.location.href);
    if (locale === "zh-TW") url.searchParams.set("lang", "zh-TW");
    else url.searchParams.delete("lang");
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }, [locale, localeReady]);

  return (
    <>
      <SiteBackground />
      <Particles />
      <a className="skip-link" href="#main-content">{copy.accessibility.skipToMain}</a>
      <Header locale={locale} copy={copy} onLocaleChange={setLocale} />
      <ScrollBrandRail />
      <main id="main-content">
        <Hero copy={copy} />
        <Services copy={copy} onSelect={setSelectedService} />
        <WhoWeServe copy={copy} />
        <WhyTraustia copy={copy} />
        <QuoteBand locale={locale} copy={copy} />
        <EvidenceSignals copy={copy} />
        <Outcomes copy={copy} />
        <EngagementModels copy={copy} />
        <CtaBand copy={copy} />
        <Contact copy={copy} selectedService={selectedService} onServiceChange={setSelectedService} />
      </main>
      <Footer copy={copy} />
    </>
  );
}
