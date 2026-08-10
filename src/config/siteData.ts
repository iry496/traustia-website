export type Service = {
  number: string;
  timing: string;
  title: string;
  storyTitle: string;
  story: string;
  trace: string;
  deliverable: string;
};

export type EngagementModel = {
  label: string;
  title: string;
  role: string;
  independence: string;
  workspace: string;
  responsibilities: string[];
};

export const siteConfig = {
  companyName: "Traustia",
  contactEmail: "irisyang@traustia.com",
  navigation: [
    { label: "Why Traustia", href: "#why" },
    { label: "Services", href: "#services" },
    { label: "Independence", href: "#independence" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    {
      number: "01",
      timing: "Before CRO work begins",
      title: "CRO Data & Analysis Readiness Review",
      storyTitle: "Begin before the work begins.",
      story: "A CRO can only execute the question it receives. We turn the sponsor's scientific intent into a specification rigorous enough to survive execution.",
      trace: "Question → protocol → endpoint → SAP → biomarker plan → success criteria",
      deliverable: "CRO Readiness Review Memo",
    },
    {
      number: "02",
      timing: "When CRO or laboratory outputs return",
      title: "CRO Output Integrity Review",
      storyTitle: "Interrogate what comes back.",
      story: "A vendor report is an output, not a verdict. We follow the samples, data, deviations, and analysis decisions back to the agreed protocol.",
      trace: "Sample flow → missingness → provenance → batch effects → protocol-to-report match",
      deliverable: "CRO Data Integrity Review Memo",
    },
    {
      number: "03",
      timing: "Before a high-stakes asset decision",
      title: "Independent Biomarker / Model Validation",
      storyTitle: "Ask whether the claim survives.",
      story: "Under a frozen protocol, we re-run and stress-test the biomarker or model without participating in its original development.",
      trace: "Leakage → stability → calibration → external cohort → transportability → claim boundary",
      deliverable: "Independent Validation Report",
    },
    {
      number: "04",
      timing: "Before financing, partnering, or licensing",
      title: "Financing / Partnering Evidence Dossier",
      storyTitle: "Carry the evidence into the decision.",
      story: "We connect the asset claim to its underlying studies, validation status, contradictions, and remaining risk—so the next decision rests on evidence, not narrative alone.",
      trace: "Claim → provenance → validation → contradictions → unresolved risk → next milestone",
      deliverable: "Traustia Evidence Dossier",
    },
  ] satisfies Service[],
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
