export type Service = {
  number: string;
  timing: string;
  title: string;
  promise: string;
  focus: string[];
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
      promise: "Make sure the work specification is rigorous before execution starts.",
      focus: [
        "Research question, protocol, endpoint, and Statistical Analysis Plan",
        "Biomarker or omics plan, data specification, samples, and metadata",
        "Validation design and explicit success or failure criteria",
      ],
      deliverable: "CRO Readiness Review Memo",
    },
    {
      number: "02",
      timing: "When CRO or laboratory outputs return",
      title: "CRO Output Integrity Review",
      promise: "Determine whether the returned data and report match the protocol and can support the claim.",
      focus: [
        "Sample flow, inclusion and exclusion, missingness, and protocol deviations",
        "Data completeness, provenance, batch effects, and analysis consistency",
        "Planned versus reported analyses and protocol-to-report discrepancies",
      ],
      deliverable: "CRO Data Integrity Review Memo",
    },
    {
      number: "03",
      timing: "Before a high-stakes asset decision",
      title: "Independent Biomarker / Model Validation",
      promise: "Re-run and stress-test the claim under a frozen, independent validation protocol.",
      focus: [
        "Leakage, train/test contamination, feature stability, and repeated-seed robustness",
        "Calibration, sensitivity analysis, and external-cohort validation",
        "Cross-platform transportability, reproducibility, and claim boundaries",
      ],
      deliverable: "Independent Validation Report",
    },
    {
      number: "04",
      timing: "Before financing, partnering, or licensing",
      title: "Financing / Partnering Evidence Dossier",
      promise: "Create the traceable evidence layer beneath the science claims in a financing or partnering process.",
      focus: [
        "Asset and claim definition, study provenance, and methods integrity",
        "Validation, reproducibility, external evidence, and contradictory evidence",
        "Supported versus unsupported claims, unresolved risk, and the next milestone",
      ],
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
