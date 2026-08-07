"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  contactIsConfigured,
  siteConfig,
  type Capability,
  type Founder,
  type ResearchProject,
} from "../config/siteData";

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span className="brand-mark-node node-top" />
      <span className="brand-mark-node node-left" />
      <span className="brand-mark-node node-right" />
    </span>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
          <span />
          <span />
        </button>
        <nav
          id="primary-navigation"
          className={`primary-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {siteConfig.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="button button-small button-filled" href="#contact" onClick={() => setMenuOpen(false)}>
            Start a Collaboration
          </a>
        </nav>
      </div>
    </header>
  );
}

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading reveal">
      <p className="section-label"><span />{label}</p>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

const scrollPhases = [
  { label: "Data", href: "#top" },
  { label: "Method", href: "#capabilities" },
  { label: "Validation", href: "#evidence-intelligence" },
  { label: "Evidence", href: "#research" },
  { label: "Decision", href: "#contact" },
];

function ScrollEvidenceRail() {
  const railRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const scrollRange = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const progress = Math.min(Math.max(window.scrollY / scrollRange, 0), 1);
      const heroProgress = Math.min(Math.max(window.scrollY / 760, 0), 1);
      const targetOffsets = scrollPhases.map(({ href }) => {
        const target = document.querySelector<HTMLElement>(href);
        return target?.offsetTop ?? 0;
      });
      const readingLine = window.scrollY + window.innerHeight * 0.48;
      let nextIndex = 0;

      targetOffsets.forEach((offset, index) => {
        if (readingLine >= offset) nextIndex = index;
      });

      railRef.current?.style.setProperty("--rail-progress", progress.toFixed(4));
      document.documentElement.style.setProperty(
        "--hero-shift",
        heroProgress.toFixed(4),
      );
      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <aside className="scroll-evidence-rail" aria-label="Evidence journey" ref={railRef}>
      <span className="scroll-rail-cap">EVIDENCE TRACE</span>
      <span className="scroll-rail-track" aria-hidden="true">
        <span className="scroll-rail-fill" />
        <span className="scroll-object">
          <span className="scroll-object-orbit" />
          <span className="scroll-object-core" />
          <span className="scroll-object-satellite satellite-one" />
          <span className="scroll-object-satellite satellite-two" />
          <span className="scroll-object-satellite satellite-three" />
        </span>
      </span>
      <ol>
        {scrollPhases.map((phase, index) => (
          <li className={index === activeIndex ? "is-active" : ""} key={phase.label}>
            <a href={phase.href} aria-current={index === activeIndex ? "step" : undefined}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{phase.label}</strong>
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}

function Hero() {
  return (
    <main id="main-content">
      <section className="hero section-dark" id="top">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-banner-shell container">
          <div className="hero-banner-frame">
            {/* Local, optimized social card reused as the requested top banner. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="hero-banner-image"
              src="og.png"
              alt="Traustia — Evidence you can defend, visualized as a scientific evidence network."
            />
            <span className="banner-scan" aria-hidden="true" />
            <span className="banner-coordinate coordinate-left">TRS / EVIDENCE SYSTEM / 01</span>
            <span className="banner-coordinate coordinate-right">SCIENTIFIC INTEGRITY · ACTIVE</span>
          </div>
        </div>
        <div className="hero-brief container">
          <div className="hero-brief-heading">
            <p className="eyebrow">BIOMEDICAL RESEARCH <i /> DATA SCIENCE <i /> EVIDENCE VALIDATION</p>
            <h1>From research question to <em>trustworthy evidence.</em></h1>
          </div>
          <div className="hero-brief-copy">
            <p className="hero-lede">
              Traustia helps biomedical researchers and life-science teams design rigorous studies, analyze complex data, validate computational results, and turn scientific evidence into defensible decisions.
            </p>
            <p className="hero-support">
              Collaborative biostatistics. Biomedical data science. Omics. Reproducibility. Evidence validation.
            </p>
            <div className="hero-actions">
              <a className="button button-filled" href="#capabilities">Explore Our Capabilities <span aria-hidden="true">↗</span></a>
              <a className="button button-ghost" href="#contact">Start a Research Collaboration</a>
            </div>
            <ul className="trust-principles" aria-label="Our operating principles">
              <li><span>01</span> Research-first</li>
              <li><span>02</span> Validation-driven</li>
              <li><span>03</span> Human-reviewed</li>
            </ul>
          </div>
        </div>
        <div className="hero-footer container">
          <span>SCIENTIFIC PRECISION</span>
          <span className="hero-footer-line" />
          <span>REPRODUCIBLE EVIDENCE</span>
        </div>
      </section>
      <ProblemSection />
      <Capabilities />
      <EvidenceIntelligence />
      <ResearchProgram />
      <HowWeWork />
      <AudienceBand />
      <Team />
      <About />
      <Contact />
    </main>
  );
}

function ProblemSection() {
  const risks = [
    "Hidden data leakage",
    "Unstable features",
    "Weak external validation",
    "Pipeline drift",
    "Poor provenance",
    "Irreproducible analyses",
    "Lost translational context",
  ];

  return (
    <section className="problem section-light" aria-labelledby="problem-title">
      <div className="container problem-grid">
        <div className="problem-statement reveal">
          <p className="section-label"><span />THE CONFIDENCE GAP</p>
          <h2 id="problem-title">Biomedical discovery is accelerating. <br /><em>Confidence should not lag behind.</em></h2>
        </div>
        <div className="problem-copy reveal delay-one">
          <p className="lede-light">Modern biomedical research generates more data, more models, and more computational results than ever before. But performance alone does not establish credibility.</p>
          <p>These failures can change the scientific conclusion. Traustia helps research teams identify those risks before they become decisions.</p>
        </div>
        <div className="risk-console reveal">
          <div className="console-header">
            <span>ANALYTICAL RISK SIGNALS</span>
            <span>MONITORING / ACTIVE</span>
          </div>
          <div className="risk-list">
            {risks.map((risk, index) => (
              <div className="risk-item" key={risk}>
                <span className="risk-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="risk-dot" />
                <span>{risk}</span>
                <span className="risk-status">ASSESS</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ capability }: { capability: Capability }) {
  return (
    <article className="capability-card reveal">
      <div className="card-number">{capability.number}</div>
      <h3>{capability.title}</h3>
      <p>{capability.description}</p>
      <ul>
        {capability.examples.map((example) => <li key={example}>{example}</li>)}
      </ul>
    </article>
  );
}

function Capabilities() {
  return (
    <section className="capabilities section-light" id="capabilities">
      <div className="container">
        <SectionHeading
          label="WHAT WE DO"
          title="Rigorous quantitative support across the biomedical research lifecycle."
          description="From study architecture to independent validation, we help make analytical decisions traceable, reproducible, and scientifically defensible."
        />
        <div className="capability-grid">
          {siteConfig.capabilities.map((capability) => (
            <CapabilityCard key={capability.number} capability={capability} />
          ))}
        </div>
        <div className="capability-callout reveal">
          <div><span>NEED SOMETHING MORE SPECIFIC?</span><h3>A quantitative collaboration shaped around the scientific question.</h3></div>
          <p>Traustia can work as a project-based quantitative collaborator, independent validation team, or embedded scientific data partner.</p>
          <a className="text-link" href="#contact">Discuss your research <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}

const evidenceSteps = [
  "Scientific claim",
  "Evidence intake",
  "Data & provenance",
  "Analytical integrity",
  "Reproducibility",
  "External validation",
  "Translational context",
  "Evidence dossier",
  "Decision support",
];

const concepts = [
  {
    code: "TRV / 01",
    title: "Traustia Validation Report",
    copy: "Independent assessment of computational models, pipelines, analytical workflows, and validation integrity.",
  },
  {
    code: "TED / 02",
    title: "Traustia Evidence Dossier",
    copy: "Structured synthesis of the evidence supporting—and limiting—a biomedical claim.",
  },
  {
    code: "TRI / 03",
    title: "Traustia Research Integrity Audit",
    copy: "Study-level assessment of data provenance, methodology, reproducibility, validation, and reporting integrity.",
  },
];

function EvidenceIntelligence() {
  return (
    <section className="evidence-intelligence section-dark" id="evidence-intelligence">
      <div className="section-glow" aria-hidden="true" />
      <div className="container">
        <div className="intelligence-header">
          <SectionHeading
            label="RESEARCH & DEVELOPMENT"
            title="Building the trust layer for biomedical evidence."
            description="Traustia is developing an Evidence Intelligence framework that transforms complex biomedical claims into structured, reproducible, decision-ready evidence."
          />
          <span className="status-badge"><i /> IN DEVELOPMENT</span>
        </div>
        <div className="evidence-architecture reveal">
          <div className="architecture-title"><span>EVIDENCE INTELLIGENCE / SYSTEM ARCHITECTURE</span><span>R&amp;D CONCEPT</span></div>
          <ol>
            {evidenceSteps.map((step, index) => (
              <li key={step} className={index === 0 || index === evidenceSteps.length - 1 ? "terminal-step" : ""}>
                <span className="step-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="step-node" />
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
        <div className="concept-grid">
          {concepts.map((concept) => (
            <article className="concept-card reveal" key={concept.code}>
              <span>{concept.code}</span>
              <h3>{concept.title}</h3>
              <p>{concept.copy}</p>
              <div className="concept-mark" aria-hidden="true"><i /><i /><i /></div>
            </article>
          ))}
        </div>
        <p className="rnd-note reveal"><span /> Our research collaborations help define the scientific requirements for this platform.</p>
      </div>
    </section>
  );
}

function ResearchCard({ project }: { project: ResearchProject }) {
  return (
    <article className="research-card reveal">
      <div className="research-card-head">
        <span>{project.number}</span>
        <span>{project.status}</span>
      </div>
      <p className="integrity-label">{project.integrity}</p>
      <h3>{project.title}</h3>
      <p>{project.focus}</p>
      <div className="research-question">
        <span>KEY QUESTION</span>
        <strong>{project.question}</strong>
      </div>
    </article>
  );
}

function ResearchProgram() {
  return (
    <section className="research section-light" id="research">
      <div className="container">
        <SectionHeading
          label="RESEARCH PROGRAM"
          title="Research that tests how evidence earns trust."
          description="Traustia’s research program focuses on methodological failure modes that can change biomedical conclusions."
        />
        <div className="research-grid">
          {siteConfig.researchProjects.map((project) => <ResearchCard key={project.number} project={project} />)}
        </div>
        <div className="trust-line reveal" aria-label="Model trust. Pipeline trust. Translational trust.">
          <span>MODEL TRUST</span><i /><span>PIPELINE TRUST</span><i /><span>TRANSLATIONAL TRUST</span>
        </div>
      </div>
    </section>
  );
}

const workStages = [
  { number: "01", title: "Define", copy: "Clarify the scientific question, decision, endpoint, data, and claim boundary." },
  { number: "02", title: "Design", copy: "Pre-specify the study design, analytical strategy, validation architecture, and evidence requirements." },
  { number: "03", title: "Analyze & stress-test", copy: "Perform reproducible analysis, robustness assessment, leakage checks, sensitivity analysis, and independent validation." },
  { number: "04", title: "Document", copy: "Produce transparent methods, traceable outputs, limitations, and decision-ready scientific evidence." },
];

function HowWeWork() {
  return (
    <section className="how-we-work section-white" id="how-we-work">
      <div className="container">
        <SectionHeading label="HOW WE WORK" title="Scientific collaboration, with validation built in." />
        <ol className="process-grid">
          {workStages.map((stage) => (
            <li className="process-step reveal" key={stage.number}>
              <span>{stage.number}</span><i aria-hidden="true" />
              <h3>{stage.title}</h3>
              <p>{stage.copy}</p>
            </li>
          ))}
        </ol>
        <p className="negative-note reveal">Negative and inconclusive findings are evidence too.</p>
      </div>
    </section>
  );
}

const audiences = [
  "Biomedical Scientists",
  "Academic Research Labs",
  "Clinician-Scientists",
  "Biotech Startups",
  "Life-Science Research Teams",
  "Biomedical AI Developers",
  "Translational Research Programs",
];

function AudienceBand() {
  return (
    <section className="audience section-dark" aria-labelledby="audience-title">
      <div className="container audience-grid">
        <div className="reveal">
          <p className="section-label"><span />WHO WE WORK WITH</p>
          <h2 id="audience-title">For teams where the evidence matters.</h2>
          <p>Engagements can range from academic research collaboration to project-based analysis, independent scientific validation, and embedded quantitative support.</p>
        </div>
        <ul className="audience-list reveal delay-one">
          {audiences.map((audience, index) => (
            <li key={audience}><span>{String(index + 1).padStart(2, "0")}</span>{audience}<i aria-hidden="true">↗</i></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FounderCard({ founder }: { founder: Founder }) {
  return (
    <article className="founder-card reveal">
      <div className="founder-portrait">
        {founder.photo ? (
          // Portraits are local, pre-optimized WebP assets configured by the founders.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={founder.photo} alt={`${founder.name}, ${founder.role}`} />
        ) : (
          <div className="portrait-placeholder" aria-label={`Professional portrait placeholder for ${founder.name}`}>
            <BrandMark /><span>{founder.initials}</span><small>PORTRAIT / PENDING</small>
          </div>
        )}
      </div>
      <div className="founder-content">
        <p className="founder-role">{founder.role}</p>
        <h3>{founder.name}</h3>
        <p className="founder-discipline">{founder.discipline}</p>
        <a className="founder-email" href={`mailto:${founder.email}`}>
          {founder.email}<span aria-hidden="true">↗</span>
        </a>
        {founder.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <ul>{founder.areas.map((area) => <li key={area}>{area}</li>)}</ul>
      </div>
    </article>
  );
}

function Team() {
  return (
    <section className="team section-light" id="team">
      <div className="container">
        <SectionHeading
          label="LEADERSHIP"
          title="Built across disciplines."
          description="Traustia was founded by two Harvard University alumni in Data Science whose complementary backgrounds span mathematics, biomedical research, omics, software engineering, machine learning, and reproducible analytics. Both completed the ALM in Data Science through Harvard University Extension School."
        />
        <div className="founder-grid">
          {siteConfig.founders.map((founder) => <FounderCard key={founder.name} founder={founder} />)}
        </div>
        <p className="credential-line reveal">HARVARD DATA SCIENCE <i /> MATHEMATICS <i /> BIOLOGY <i /> BIOMEDICAL INFORMATICS <i /> SOFTWARE ENGINEERING</p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section-white" id="about">
      <div className="container about-grid">
        <div className="about-heading reveal">
          <p className="section-label"><span />ABOUT TRAUSTIA</p>
          <h2>Trust is a scientific requirement.</h2>
        </div>
        <div className="about-copy reveal delay-one">
          <p>Traustia is a biomedical research and evidence-validation company working at the intersection of quantitative methodology, data science, omics, reproducible computing, and translational evidence.</p>
          <p>We believe strong biomedical research requires more than a high-performing model or statistically significant result.</p>
          <ul>
            <li>Where did the data come from?</li>
            <li>How was the analysis performed?</li>
            <li>Was validation independent?</li>
            <li>Is the result reproducible?</li>
            <li>Where does uncertainty remain?</li>
            <li>How far can the conclusion legitimately travel?</li>
          </ul>
          <p>Our role is to make that evidence visible.</p>
        </div>
        <blockquote className="about-quote reveal">
          <span>“</span>
          <p>We do not ask only whether a result is impressive.<br />We ask whether it deserves to be trusted.</p>
        </blockquote>
      </div>
    </section>
  );
}

function Contact() {
  const collaborationMailto = contactIsConfigured
    ? `mailto:${siteConfig.contactEmail}?subject=Traustia%20research%20collaboration`
    : undefined;
  const validationMailto = `mailto:${siteConfig.founders[1].email}?subject=Traustia%20validation%20project`;

  const composeContactEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = String(form.get("message") ?? "").trim();
    if (!message) return;

    const subject = encodeURIComponent("Traustia website inquiry");
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact section-dark" id="contact">
      <div className="contact-grid-bg" aria-hidden="true" />
      <div className="container contact-inner reveal">
        <p className="section-label"><span />START A CONVERSATION</p>
        <h2>Let’s build<br /><em>stronger evidence.</em></h2>
        <p>We welcome conversations with biomedical scientists, clinician-researchers, academic laboratories, biotech teams, and organizations seeking rigorous quantitative collaboration or independent scientific validation.</p>
        {contactIsConfigured ? (
          <>
            <form className="contact-message" onSubmit={composeContactEmail}>
              <label htmlFor="contact-message">
                <span>CONTACT US</span>
                <strong>Tell us what you’re working on.</strong>
              </label>
              <textarea
                id="contact-message"
                name="message"
                maxLength={2000}
                placeholder="Share your research question, dataset, analytical challenge, or validation need…"
                required
                rows={6}
              />
              <div className="contact-message-footer">
                <small>Your message is not stored. This opens your email application.</small>
                <button className="button button-filled" type="submit">
                  Compose Email <span aria-hidden="true">↗</span>
                </button>
              </div>
            </form>
            <div className="contact-directory" aria-label="Traustia contacts">
              {siteConfig.founders.map((founder, index) => (
                <a href={`mailto:${founder.email}`} key={founder.email}>
                  <span>CONTACT / {String(index + 1).padStart(2, "0")}</span>
                  <strong>{founder.name}</strong>
                  <small>{founder.email}</small>
                  <i aria-hidden="true">↗</i>
                </a>
              ))}
            </div>
            <div className="contact-actions">
              <a className="button button-filled" href={collaborationMailto}>Start a Collaboration <span aria-hidden="true">↗</span></a>
              <a className="button button-ghost" href={validationMailto}>Discuss a Validation Project</a>
            </div>
          </>
        ) : (
          <div className="contact-pending" role="status"><span /> Contact information coming soon.</div>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a className="wordmark" href="#top" aria-label="Traustia home"><BrandMark /><span>TRAUSTIA</span></a>
            <p>From research question to trustworthy evidence.</p>
          </div>
          <nav aria-label="Footer navigation">
            {siteConfig.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
        </div>
        <p className="footer-disclaimer">Traustia provides research, analytical, and scientific evidence services. Its work does not constitute medical diagnosis, patient-specific treatment advice, regulatory certification, or legal advice.</p>
        <div className="footer-bottom">
          <span>© 2026 Traustia. All rights reserved.</span>
          <span>SCIENTIFIC INTEGRITY · REPRODUCIBLE METHODS · DEFENSIBLE EVIDENCE</span>
        </div>
      </div>
    </footer>
  );
}

function RevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return null;
}

export function TraustiaSite() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <RevealObserver />
      <ScrollEvidenceRail />
      <Header />
      <Hero />
      <Footer />
    </>
  );
}
