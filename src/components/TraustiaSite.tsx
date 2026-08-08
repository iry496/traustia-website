"use client";

import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from "react";
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
            Request Review
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

const phaseDescriptions = [
  "Observe the signal",
  "Design the test",
  "Stress-test the claim",
  "Resolve the evidence",
  "Support the decision",
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
    <aside
      className="scroll-evidence-rail"
      aria-label="Evidence journey"
      data-phase={activeIndex}
      ref={railRef}
    >
      <span className="scroll-rail-cap">EVIDENCE TRACE</span>
      <span className="scroll-rail-track" aria-hidden="true">
        <span className="scroll-rail-fill" />
        <span className="scroll-object">
          <span className="scroll-object-halo" />
          <span className="scroll-object-orbit orbit-primary" />
          <span className="scroll-object-orbit orbit-secondary" />
          <span className="scroll-object-core" />
          <span className="scroll-object-satellite satellite-one" />
          <span className="scroll-object-satellite satellite-two" />
          <span className="scroll-object-satellite satellite-three" />
          <span className="scroll-object-satellite satellite-four" />
          <span className="scroll-phase-readout">
            <span>{String(activeIndex + 1).padStart(2, "0")}</span>
            <strong>{scrollPhases[activeIndex].label}</strong>
            <small>{phaseDescriptions[activeIndex]}</small>
          </span>
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
            <span className="banner-depth-grid" aria-hidden="true" />
            <span className="banner-coordinate coordinate-left">TRS / EVIDENCE SYSTEM / 01</span>
            <span className="banner-coordinate coordinate-right">SCIENTIFIC INTEGRITY · ACTIVE</span>
            <span className="banner-index" aria-hidden="true">01 / TRAUSTWORTHY EVIDENCE</span>
          </div>
          <a className="hero-scroll-cue" href="#confidence-gap">
            <span>Explore the evidence journey</span><i aria-hidden="true" />
          </a>
        </div>
        <div className="hero-brief container">
          <div className="hero-brief-heading">
            <p className="eyebrow">BIOMEDICAL RESEARCH <i /> DATA SCIENCE <i /> EVIDENCE VALIDATION</p>
            <h1>A published result is not the same as <em>a reliable one.</em></h1>
          </div>
          <div className="hero-brief-copy">
            <p className="hero-lede">
              Traustia independently reconstructs and re-runs published biomedical prediction claims under leakage-aware, provenance-controlled conditions. Every conclusion we issue traces back to the exact data, code, and analytical step behind it.
            </p>
            <p className="hero-support">
              Independent validation · Leakage detection · Data provenance · Evidence dossiers
            </p>
            <div className="hero-actions">
              <a className="button button-filled" href="#contact">Request an Evidence Review <span aria-hidden="true">↗</span></a>
              <a className="button button-ghost" href="#evidence-intelligence">See How Validation Works</a>
            </div>
            <ul className="trust-principles" aria-label="Our operating principles">
              <li><span>01</span> Independent</li>
              <li><span>02</span> Reproducible</li>
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
      <IndependenceFirewall />
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
    <section className="problem section-light" id="confidence-gap" aria-labelledby="problem-title">
      <div className="container problem-grid">
        <div className="problem-statement reveal">
          <p className="section-label"><span />THE CONFIDENCE GAP</p>
          <h2 id="problem-title">Biomedical discovery is accelerating. <br /><em>Confidence should not lag behind.</em></h2>
        </div>
        <div className="problem-copy reveal delay-one">
          <p className="lede-light">Modern biomedical research generates more data, more models, and more computational results than ever before. But performance alone does not establish credibility.</p>
          <p>These failures can change the scientific conclusion. Traustia helps research teams identify those risks before they become decisions.</p>
        </div>
        <figure className="problem-visual reveal">
          {/* Bespoke Traustia panorama: observation → analysis → defensible evidence. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="evidence-panorama-v1.webp"
            alt="Biomedical observations becoming structured computational evidence."
            decoding="async"
          />
          <span className="problem-visual-shade" aria-hidden="true" />
          <figcaption>
            <span><i>01</i><strong>Observe</strong><small>Raw biological signal</small></span>
            <span><i>02</i><strong>Interrogate</strong><small>Methods and stress tests</small></span>
            <span><i>03</i><strong>Defend</strong><small>Decision-ready evidence</small></span>
          </figcaption>
          <span className="problem-visual-note" aria-hidden="true">EVIDENCE FIELD / CONTINUOUS TRACE</span>
        </figure>
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

function IndependenceFirewall() {
  return (
    <section className="independence-firewall section-dark" id="independence" aria-labelledby="independence-title">
      <div className="container firewall-grid">
        <div className="firewall-heading reveal">
          <p className="section-label"><span />THE FIREWALL</p>
          <h2 id="independence-title">Independence is <em>the product.</em></h2>
        </div>
        <div className="firewall-copy reveal delay-one">
          <p>An assessment is worth exactly what its independence is worth. We keep a hard separation between work we help create and work we validate: <strong>we do not validate analyses we designed.</strong></p>
          <p>Where a client engages us for study design or analysis, that work is excluded from independent review—by us and by anyone who touched it. Every Evidence Dossier records who performed each step, what they had access to, and what they did not.</p>
        </div>
        <div className="firewall-register reveal" aria-label="Traustia independence controls">
          <span><i>01</i><strong>Separate teams</strong><small>Creation and review do not cross</small></span>
          <span><i>02</i><strong>Recorded access</strong><small>People, inputs, and permissions traced</small></span>
          <span><i>03</i><strong>Explicit exclusions</strong><small>Conflicted work is ineligible</small></span>
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
  const atlasViews = [
    { number: "01", title: "Independent validation", detail: "Claim → evidence", focus: "88%" },
    { number: "02", title: "Analytical reconstruction", detail: "Code → result", focus: "50%" },
    { number: "03", title: "Research collaboration", detail: "Question → analysis", focus: "12%" },
  ];
  const validationCapabilities = siteConfig.capabilities.filter((capability) => capability.category === "validation");
  const collaborationCapabilities = siteConfig.capabilities.filter((capability) => capability.category === "collaboration");

  return (
    <section className="capabilities section-light" id="capabilities">
      <div className="container">
        <SectionHeading
          label="WORKING WITH US TODAY"
          title="Two ways to engage."
          description="Independent validation is our lead product. Project-based quantitative collaboration remains available under a strict firewall that keeps creation and review separate."
        />
        <div className="capability-atlas reveal" aria-label="Traustia evidence lifecycle">
          {atlasViews.map((view) => (
            <figure key={view.number} style={{ "--atlas-focus": view.focus } as CSSProperties}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="evidence-panorama-v1.webp" alt="" loading="lazy" decoding="async" />
              <span className="atlas-shade" aria-hidden="true" />
              <figcaption>
                <span>{view.number}</span>
                <strong>{view.title}</strong>
                <small>{view.detail}</small>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="engagement-stack">
          <section className="engagement-block engagement-validation" aria-labelledby="validation-engagement-title">
            <header className="engagement-header reveal">
              <div><span>01 / LEAD ENGAGEMENT</span><h3 id="validation-engagement-title">Independent Validation</h3></div>
              <div>
                <p>We assess a claim we had no part in producing: reconstruction of the published analysis, machine-checkable tests for data leakage, external-cohort evaluation, feature-stability measurement, and a traceable Evidence Dossier.</p>
                <p className="engagement-for"><span>FOR</span> Investors performing scientific diligence · teams deciding whether to advance a model · journals and technology-transfer offices seeking a neutral assessment.</p>
              </div>
            </header>
            <div className="capability-grid">
              {validationCapabilities.map((capability) => <CapabilityCard key={capability.number} capability={capability} />)}
            </div>
          </section>
          <section className="engagement-block engagement-collaboration" aria-labelledby="collaboration-engagement-title">
            <header className="engagement-header reveal">
              <div><span>02 / PROJECT ENGAGEMENT</span><h3 id="collaboration-engagement-title">Research Collaboration</h3></div>
              <div>
                <p>Project-based quantitative work: study design, statistical analysis plans, endpoint definition, reproducible pipelines, and omics analysis.</p>
                <p className="engagement-for"><span>FIREWALL</span> Collaboration engagements are not eligible for independent review by Traustia.</p>
              </div>
            </header>
            <div className="capability-grid">
              {collaborationCapabilities.map((capability) => <CapabilityCard key={capability.number} capability={capability} />)}
            </div>
          </section>
        </div>
        <div className="capability-callout reveal">
          <div><span>THE INDEPENDENCE RULE</span><h3>Work we help create is not eligible for independent review by Traustia.</h3></div>
          <p>The firewall protects the credibility of the assessment and is documented in every Evidence Dossier.</p>
          <a className="text-link" href="#independence">Review the firewall <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}

const evidenceSteps = [
  { title: "Scientific claim", copy: "Define the claim, intended decision, and boundary of what the evidence must support." },
  { title: "Evidence intake", copy: "Register datasets, prior analyses, protocols, models, and the provenance connecting them." },
  { title: "Data & provenance", copy: "Trace origin, inclusion rules, transformations, missingness, and potential sources of bias." },
  { title: "Analytical integrity", copy: "Inspect study design, estimands, model construction, leakage risk, and uncertainty." },
  { title: "Reproducibility", copy: "Re-execute the computational path and test whether results survive independent repetition." },
  { title: "External validation", copy: "Challenge performance and calibration against independent cohorts, contexts, or controls." },
  { title: "Translational context", copy: "Establish where the finding can travel—and where biological or clinical context limits it." },
  { title: "Evidence dossier", copy: "Assemble supporting findings, contradictions, uncertainty, and traceable analytical records." },
  { title: "Decision support", copy: "Translate the evidence state into a defensible conclusion with explicit limitations." },
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
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.step ?? 0);
            setActiveStep(index);
          }
        });
      },
      { rootMargin: "-34% 0px -48%", threshold: 0.05 },
    );

    stepRefs.current.forEach((step) => step && observer.observe(step));
    return () => observer.disconnect();
  }, []);

  const evidenceProgress = `${(activeStep / (evidenceSteps.length - 1)) * 100}%`;

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
        <div
          className="evidence-story"
          style={{ "--evidence-progress": evidenceProgress } as CSSProperties}
        >
          <div className="evidence-story-visual reveal" data-active-step={activeStep}>
            <div className="evidence-story-image">
              {/* Bespoke evidence-dossier visual generated for Traustia. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="evidence-dossier-v1.webp"
                alt="Layered biomedical evidence, statistical analysis, and traceable research documentation."
                loading="lazy"
                decoding="async"
              />
              <span className="evidence-story-shade" aria-hidden="true" />
              <span className="evidence-core-assembly" aria-hidden="true">
                <i className="core-ring ring-a" /><i className="core-ring ring-b" />
                <i className="core-signal signal-a" /><i className="core-signal signal-b" /><i className="core-signal signal-c" />
                <b />
              </span>
              <span className="evidence-progress-line" aria-hidden="true"><i /></span>
            </div>
            <div className="evidence-story-readout" aria-live="polite">
              <span>{String(activeStep + 1).padStart(2, "0")} / {String(evidenceSteps.length).padStart(2, "0")}</span>
              <strong>{evidenceSteps[activeStep].title}</strong>
              <small>EVIDENCE STATE / RESOLVING</small>
            </div>
          </div>
          <ol className="evidence-story-steps">
            {evidenceSteps.map((step, index) => (
              <li
                className={index === activeStep ? "is-active" : ""}
                data-step={index}
                key={step.title}
                ref={(element) => { stepRefs.current[index] = element; }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{step.title}</h3><p>{step.copy}</p></div>
                <i aria-hidden="true" />
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

function ResearchCard({ project, index }: { project: ResearchProject; index: number }) {
  const imagePositions = ["38%", "55%", "72%"];

  return (
    <article className="research-card reveal">
      <div className="research-card-visual" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="evidence-dossier-v1.webp"
          alt=""
          loading="lazy"
          decoding="async"
          style={{ objectPosition: `center ${imagePositions[index]}` }}
        />
        <span>RESEARCH DOSSIER / {project.number}</span>
      </div>
      <div className="research-card-head">
        <span>{project.number}</span>
        <span>{project.status}</span>
      </div>
      <p className="integrity-label">{project.integrity}</p>
      <h3>{project.title}</h3>
      <p>{project.focus}</p>
      <div className="dossier-review-map" aria-label={`Review dimensions for ${project.title}`}>
        {project.methods.map((method, methodIndex) => (
          <span key={method}><i className={methodIndex < 3 ? "is-resolved" : ""} />{method}</span>
        ))}
      </div>
      <div className="research-question">
        <span>KEY QUESTION</span>
        <strong>{project.question}</strong>
      </div>
      <div className="research-output">
        <span>EVIDENCE STATE</span><strong>{project.evidenceState}</strong>
        <span>PLANNED OUTPUT</span><strong>{project.output}</strong>
      </div>
      <a className="dossier-open" href={`#/research/${project.slug}`}>
        Open research dossier <span aria-hidden="true">→</span>
      </a>
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
          {siteConfig.researchProjects.map((project, index) => <ResearchCard key={project.number} project={project} index={index} />)}
        </div>
        <aside className="sample-report reveal" aria-labelledby="sample-report-title">
          <div className="sample-report-visual" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="evidence-dossier-v1.webp" alt="" loading="lazy" decoding="async" />
            <span>ILLUSTRATIVE SAMPLE / 06 PAGES</span>
          </div>
          <div className="sample-report-copy">
            <p className="integrity-label">SAMPLE DELIVERABLE</p>
            <h3 id="sample-report-title">See how a Traustia Evidence Report is structured.</h3>
            <p>A fictional, non-client example showing how provenance, analytical integrity, validation, uncertainty, and claim boundaries can be documented for review.</p>
            <ul aria-label="Sample report contents">
              <li>Executive evidence state</li><li>Provenance review</li><li>Analytical integrity</li><li>Validation and limitations</li>
            </ul>
            <a className="button button-filled" href="sample-traustia-evidence-report.pdf" target="_blank" rel="noreferrer">
              View Sample Report <span aria-hidden="true">↗</span>
            </a>
          </div>
        </aside>
        <div className="trust-line reveal" aria-label="Model trust. Pipeline trust. Translational trust.">
          <span>MODEL TRUST</span><i /><span>PIPELINE TRUST</span><i /><span>TRANSLATIONAL TRUST</span>
        </div>
      </div>
    </section>
  );
}

function ResearchDetailPage({ project }: { project: ResearchProject }) {
  return (
    <main className="research-detail-page" id="research-detail">
      <section className="research-detail-hero section-dark">
        <div className="container">
          <a className="detail-back" href="#research"><span aria-hidden="true">←</span> Back to research program</a>
          <div className="research-detail-heading">
            <div>
              <p className="section-label"><span />RESEARCH DOSSIER / {project.number}</p>
              <p className="detail-placeholder">ILLUSTRATIVE RESEARCH FRAMEWORK - NO CLIENT OR PATIENT DATA</p>
              <h1>{project.title}</h1>
            </div>
            <p>{project.focus}</p>
          </div>
          <div className="research-detail-question">
            <span>SCIENTIFIC QUESTION</span><strong>{project.question}</strong>
          </div>
          <div className="research-detail-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="evidence-panorama-v1.webp" alt="Biomedical evidence moving from observation through validation." />
            <div className="detail-evidence-state">
              <span>STATUS</span><strong>{project.status}</strong>
              <span>EVIDENCE STATE</span><strong>{project.evidenceState}</strong>
              <span>PLANNED OUTPUT</span><strong>{project.output}</strong>
            </div>
          </div>
        </div>
      </section>
      <section className="research-detail-body section-light">
        <div className="container detail-framework-grid">
          <article>
            <p className="integrity-label">01 / REVIEW DIMENSIONS</p>
            <h2>What the review examines.</h2>
            <ul>{project.methods.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article>
            <p className="integrity-label">02 / FAILURE MODES</p>
            <h2>What could change the conclusion.</h2>
            <ul>{project.failureModes.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="detail-plan">
            <p className="integrity-label">03 / VALIDATION PLAN</p>
            <h2>How the claim would be stress-tested.</h2>
            <ol>{project.validationPlan.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
          </article>
          <article className="detail-limitations">
            <p className="integrity-label">04 / CLAIM BOUNDARY</p>
            <h2>What this placeholder does not claim.</h2>
            <ul>{project.limitations.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
        <div className="container detail-report-cta">
          <div><p className="integrity-label">SAMPLE OUTPUT</p><h2>Review the structure of a decision-ready evidence report.</h2></div>
          <a className="button button-filled" href="sample-traustia-evidence-report.pdf" target="_blank" rel="noreferrer">View Sample Report <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  );
}

const workStages = [
  { number: "01", title: "Scope", copy: "Define the published claim, intended decision, analytical boundary, source data, and evidence required." },
  { number: "02", title: "Reconstruct", copy: "Rebuild the analytical path from the registered data, code, transformations, and model decisions." },
  { number: "03", title: "Stress-test", copy: "Test for leakage, unstable features, weak validation, pipeline drift, and failures of transportability." },
  { number: "04", title: "Issue", copy: "Deliver a traceable Evidence Dossier with the evidence state, limitations, exclusions, and defensible conclusion." },
];

function HowWeWork() {
  return (
    <section className="how-we-work section-white" id="how-we-work">
      <div className="container">
        <SectionHeading label="HOW VALIDATION WORKS" title="Reconstructed step by step. Defended line by line." />
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
  "Scientific Diligence Teams",
  "Investors & Funders",
  "Biomedical Product Teams",
  "Journals & Editors",
  "Technology-transfer Offices",
  "Biomedical Scientists",
  "Academic Research Labs",
];

function AudienceBand() {
  return (
    <section className="audience section-dark" aria-labelledby="audience-title">
      <div className="container audience-grid">
        <div className="reveal">
          <p className="section-label"><span />WHO WE WORK WITH</p>
          <h2 id="audience-title">For teams where the evidence matters.</h2>
          <p>For organizations deciding whether a biomedical prediction claim is credible enough to publish, fund, license, reproduce, or advance.</p>
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

function FounderCard({ founder, index }: { founder: Founder; index: number }) {
  return (
    <article className="founder-card reveal">
      <div className="founder-portrait">
        {founder.photo ? (
          // Portraits are local, pre-optimized WebP assets configured by the founders.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={founder.photo} alt={`${founder.name}, ${founder.role}`} />
        ) : (
          <div className="portrait-placeholder" aria-label={`Traustia leadership identity mark for ${founder.name}`}>
            <BrandMark /><span>{founder.initials}</span>
            <i className="identity-orbit orbit-a" /><i className="identity-orbit orbit-b" />
            <small>LEADERSHIP / {String(index + 1).padStart(2, "0")}</small>
          </div>
        )}
      </div>
      <div className="founder-content">
        <p className="founder-role">{founder.role}</p>
        <h3>{founder.displayName}</h3>
        <p className="founder-discipline">{founder.discipline}</p>
        <a className="founder-email" href={`mailto:${founder.email}`}>
          {founder.email}<span aria-hidden="true">↗</span>
        </a>
        <p>{founder.bio[0]}</p>
        {founder.bio.length > 1 ? (
          <details className="founder-profile">
            <summary>View full profile <span aria-hidden="true">＋</span></summary>
            {founder.bio.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </details>
        ) : null}
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
          label="WHO WE ARE"
          title="The people behind the assessment."
          description="Traustia is led by established careers spanning quantitative risk, mathematics, NIH biomedical research, omics, production software, and reproducible model evaluation."
        />
        <div className="founder-grid">
          {siteConfig.founders.map((founder, index) => <FounderCard key={founder.name} founder={founder} index={index} />)}
        </div>
        <p className="team-closing reveal">The founders met in Harvard&apos;s Data Science program, where they spent two years working through the same material on reproducible analysis and model evaluation before deciding to build something with it.</p>
        <p className="credential-line reveal">QUANTITATIVE RISK <i /> NIH BIOMEDICAL RESEARCH <i /> MATHEMATICS <i /> OMICS <i /> RESEARCH SOFTWARE</p>
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
          <p>Traustia is an independent biomedical evidence-validation company. We reconstruct published prediction claims and test whether their analytical result actually holds.</p>
          <p>A high-performing model or statistically significant result is a starting point—not proof that the claim is reliable.</p>
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
        <figure className="about-manifesto reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="evidence-dossier-v1.webp" alt="A structured biomedical evidence dossier with statistical and provenance layers." loading="lazy" decoding="async" />
          <span className="about-manifesto-shade" aria-hidden="true" />
          <figcaption>
            <span><i>01</i><strong>Provenance</strong></span>
            <span><i>02</i><strong>Validation</strong></span>
            <span><i>03</i><strong>Reproducibility</strong></span>
            <span><i>04</i><strong>Claim boundaries</strong></span>
          </figcaption>
        </figure>
        <blockquote className="about-quote reveal">
          <span>“</span>
          <p>We do not ask only whether a result is impressive.<br />We ask whether it deserves to be trusted.</p>
        </blockquote>
      </div>
    </section>
  );
}

function Contact() {
  const inquiryOptions = [
    { id: "evidence-review", label: "Evidence Review", email: siteConfig.founders[1].email },
    { id: "scientific-diligence", label: "Scientific Diligence", email: siteConfig.founders[0].email },
    { id: "research-collaboration", label: "Research Collaboration", email: siteConfig.founders[0].email },
    { id: "other", label: "Other Inquiry", email: siteConfig.founders[1].email },
  ];
  const [inquiryType, setInquiryType] = useState(inquiryOptions[0].id);
  const [contactStatus, setContactStatus] = useState<"idle" | "ready">("idle");
  const collaborationMailto = contactIsConfigured
    ? `mailto:${siteConfig.contactEmail}?subject=Traustia%20research%20collaboration`
    : undefined;
  const validationMailto = `mailto:${siteConfig.founders[1].email}?subject=Traustia%20independent%20evidence%20review`;

  const composeContactEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const honeypot = String(form.get("website") ?? "").trim();
    if (honeypot) return;
    const name = String(form.get("name") ?? "").trim();
    const replyEmail = String(form.get("email") ?? "").trim();
    const organization = String(form.get("organization") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    if (!name || !replyEmail || !message) return;

    const selectedInquiry = inquiryOptions.find((option) => option.id === inquiryType) ?? inquiryOptions[0];
    const subject = encodeURIComponent(`Traustia ${selectedInquiry.label} inquiry`);
    const body = encodeURIComponent([
      `Name: ${name}`,
      `Reply email: ${replyEmail}`,
      `Organization: ${organization || "Not provided"}`,
      `Area of interest: ${selectedInquiry.label}`,
      "",
      message,
    ].join("\n"));
    setContactStatus("ready");
    window.location.href = `mailto:${selectedInquiry.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact section-dark" id="contact">
      <div className="contact-grid-bg" aria-hidden="true" />
      <div className="container contact-inner reveal">
        <p className="section-label"><span />START A CONVERSATION</p>
        <h2>Put the claim<br /><em>to the test.</em></h2>
        <p>Bring us a biomedical prediction claim we had no part in producing. We will reconstruct the analysis, test the evidence, and show exactly how much confidence the result deserves.</p>
        {contactIsConfigured ? (
          <>
            <form className="contact-message" onSubmit={composeContactEmail}>
              <label htmlFor="contact-message">
                <span>CONTACT US</span>
                <strong>Tell us what you’re working on.</strong>
              </label>
              <fieldset className="inquiry-selector">
                <legend>Choose an area of interest</legend>
                {inquiryOptions.map((option) => (
                  <label className={inquiryType === option.id ? "is-selected" : ""} key={option.id}>
                    <input
                      checked={inquiryType === option.id}
                      name="inquiry-type"
                      onChange={() => setInquiryType(option.id)}
                      type="radio"
                      value={option.id}
                    />
                    <span>{option.label}</span><i aria-hidden="true" />
                  </label>
                ))}
              </fieldset>
              <div className="contact-fields">
                <label><span>Name</span><input name="name" autoComplete="name" required placeholder="Your name" /></label>
                <label><span>Email</span><input name="email" type="email" autoComplete="email" required placeholder="you@organization.org" /></label>
                <label><span>Organization</span><input name="organization" autoComplete="organization" placeholder="Optional" /></label>
              </div>
              <label className="contact-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
              <textarea
                id="contact-message"
                name="message"
                maxLength={2000}
                placeholder="Share your research question, dataset, analytical challenge, or validation need…"
                required
                rows={6}
              />
              <label className="contact-consent">
                <input name="consent" type="checkbox" required />
                <span>I understand this form prepares an email in my email application. Traustia does not store the message on this website.</span>
              </label>
              <div className="contact-message-footer">
                <small>Messages are routed by inquiry type. No website-side storage is used.</small>
                <button className="button button-filled" type="submit">
                  Compose Inquiry <span aria-hidden="true">↗</span>
                </button>
              </div>
              {contactStatus === "ready" ? <p className="contact-status" role="status">Your inquiry has been prepared in your email application.</p> : null}
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
              <a className="button button-filled" href={validationMailto}>Request an Evidence Review <span aria-hidden="true">↗</span></a>
              <a className="button button-ghost" href={collaborationMailto}>Discuss Research Collaboration</a>
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
            <p>Evidence you can defend.</p>
            <div className="footer-contacts" aria-label="Traustia email contacts">
              {siteConfig.founders.map((founder) => <a href={`mailto:${founder.email}`} key={founder.email}>{founder.email}</a>)}
            </div>
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
  const [researchSlug, setResearchSlug] = useState<string | null>(null);

  useEffect(() => {
    const syncResearchRoute = () => {
      const match = window.location.hash.match(/^#\/research\/([^/]+)$/);
      setResearchSlug(match ? decodeURIComponent(match[1]) : null);
    };

    syncResearchRoute();
    window.addEventListener("hashchange", syncResearchRoute);
    return () => window.removeEventListener("hashchange", syncResearchRoute);
  }, []);

  useEffect(() => {
    if (researchSlug) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    if (!window.location.hash || window.location.hash.startsWith("#/research/")) return;
    const targetId = window.location.hash.slice(1);
    window.setTimeout(() => document.getElementById(targetId)?.scrollIntoView(), 0);
  }, [researchSlug]);

  const selectedProject = researchSlug
    ? siteConfig.researchProjects.find((project) => project.slug === researchSlug)
    : undefined;

  if (selectedProject) {
    return (
      <>
        <a className="skip-link" href="#research-detail">Skip to research dossier</a>
        <Header />
        <ResearchDetailPage project={selectedProject} />
        <Footer />
      </>
    );
  }

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
