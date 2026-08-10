export type Service = {
  number: string;
  timing: string;
  title: string;
  storyTitle: string;
  story: string;
  trace: string;
  deliverable: string;
  deliverableNote: string;
};

export type EngagementModel = {
  label: string;
  title: string;
  role: string;
  independence: string;
  workspace: string;
  responsibilities: string[];
};

export type WhyQuestion = {
  number: string;
  title: string;
  body: string;
};

export type Audience = {
  title: string;
  body: string;
};

export type Outcome = {
  title: string;
  body: string;
};

export const siteConfig = {
  companyName: "Traustia",
  contactEmail: "irisyang@traustia.com",
  navigation: [
    { label: "Why Traustia", href: "#why" },
    { label: "Who we serve", href: "#who" },
    { label: "Services", href: "#services" },
    { label: "Independence", href: "#independence" },
    { label: "Contact", href: "#contact" },
  ],
  whyQuestions: [
    {
      number: "01",
      title: "Did the study answer your question?",
      body: "A CRO executes the specification it receives. If intent drifted between your scientific question and their protocol, you paid for an answer to a different question.",
    },
    {
      number: "02",
      title: "Did the data survive the process?",
      body: "Sample handling, missing data, batch effects, undocumented analysis choices — the problems that never announce themselves in a summary report.",
    },
    {
      number: "03",
      title: "Will the claim survive scrutiny?",
      body: "Investors, partners, and regulators will put your evidence under adversarial review. Better to run that review yourself, first.",
    },
  ] satisfies WhyQuestion[],
  audiences: [
    {
      title: "Biotech founders, CSOs & R&D leads",
      body: "You outsource studies to CROs and labs, but there is no in-house statistics or data team to check what comes back. We are that team, on demand.",
    },
    {
      title: "Teams preparing to raise, license, or partner",
      body: "Your data room is about to face someone else's experts. We find the weaknesses first, fix what is fixable, and document what holds.",
    },
    {
      title: "Investors & diligence teams",
      body: "You are underwriting someone else's science. We independently validate the biomarker, model, or dataset behind the deal — before you commit.",
    },
    {
      title: "Academic spin-offs & early-stage teams",
      body: "The science was born in a lab. The next step is a data room. We help your evidence make that transition, first CRO handoff included.",
    },
  ] satisfies Audience[],
  services: [
    {
      number: "01",
      timing: "Before CRO work begins",
      title: "CRO Data & Analysis Readiness Review",
      storyTitle: "Begin before the work begins.",
      story: "We turn your scientific question into a specification a CRO cannot misread — protocol, endpoints, statistical analysis plan, success criteria — so the study you pay for is the study you actually need.",
      trace: "Question → protocol → endpoint → SAP → biomarker plan → success criteria",
      deliverable: "CRO Readiness Review Memo",
      deliverableNote: "The specification, and the checklist the results will later be judged against.",
    },
    {
      number: "02",
      timing: "When CRO or lab results come back",
      title: "CRO Output Integrity Review",
      storyTitle: "Interrogate what comes back.",
      story: "A vendor report is an output, not a verdict. We audit it against the agreed protocol — sample flow, missing data, batch effects, deviations, analysis choices — and tell you plainly what is solid, what is fragile, and what needs rework.",
      trace: "Sample flow → missingness → provenance → batch effects → protocol-to-report match",
      deliverable: "CRO Data Integrity Review Memo",
      deliverableNote: "A clear read on how much weight the results can carry.",
    },
    {
      number: "03",
      timing: "Before you rely on a biomarker or model",
      title: "Independent Biomarker / Model Validation",
      storyTitle: "Ask whether the claim survives.",
      story: "We re-run and stress-test the biomarker or model under a frozen protocol, with no involvement in its original development — leakage, stability, calibration, external cohorts. You learn its real limits before someone else's diligence team does.",
      trace: "Leakage → stability → calibration → external cohort → transportability → claim boundary",
      deliverable: "Independent Validation Report",
      deliverableNote: "The evidence state, the risks, and the boundary of what the claim can support.",
    },
    {
      number: "04",
      timing: "Before financing, partnering, or licensing",
      title: "Financing / Partnering Evidence Dossier",
      storyTitle: "Carry the evidence into the decision.",
      story: "We connect each asset claim to its underlying studies, validation status, contradictions, and open risks — a claim-by-claim evidence map built to be interrogated.",
      trace: "Claim → provenance → validation → contradictions → unresolved risk → next milestone",
      deliverable: "Traustia Evidence Dossier",
      deliverableNote: "The document your data room was missing.",
    },
  ] satisfies Service[],
  outcomes: [
    {
      title: "Problems surface while they are still cheap.",
      body: "A flawed specification or a batch effect caught early costs a revision. The same problem found during diligence can cost the deal.",
    },
    {
      title: "No surprises in the data room.",
      body: "You walk into diligence already knowing what holds, what does not, and how to answer for both.",
    },
    {
      title: "Decisions your board can stand behind.",
      body: "Go/no-go calls backed by documented, independent review — not by the vendor's own summary of its own work.",
    },
    {
      title: "Money follows evidence, not narrative.",
      body: "The right assets advance. Weak claims get fixed or retired before they consume the next raise.",
    },
  ] satisfies Outcome[],
  engagementModels: [
    {
      label: "MODE 01",
      title: "Embedded Quantitative Partner",
      role: "Traustia helps shape or execute the work.",
      independence: "Not represented as independent validation",
      workspace: "Development Workspace",
      responsibilities: [
        "Protocol and endpoint development",
        "Analysis design, execution, and interpretation",
        "Readiness work before CRO handoff",
      ],
    },
    {
      label: "MODE 02",
      title: "Independent Validation Partner",
      role: "Traustia reviews work it did not create.",
      independence: "May be represented as independent",
      workspace: "Independent Validation Workspace",
      responsibilities: [
        "No participation in original model development",
        "Frozen protocol, reproducible rerun, and integrity review",
        "Explicit evidence state, risks, and claim boundary",
      ],
    },
  ] satisfies EngagementModel[],
} as const;
