export type Capability = {
  number: string;
  category: "validation" | "collaboration";
  title: string;
  description: string;
  examples: string[];
};

export type ResearchProject = {
  number: string;
  slug: string;
  integrity: string;
  title: string;
  focus: string;
  question: string;
  status: string;
  methods: string[];
  evidenceState: string;
  output: string;
  failureModes: string[];
  validationPlan: string[];
  limitations: string[];
};

export type Founder = {
  initials: string;
  name: string;
  displayName: string;
  email: string;
  role: string;
  discipline: string;
  bio: string[];
  areas: string[];
  photo?: string;
};

export const contactEmails = {
  iris: "irisyang@traustia.com",
  paul: "paultan@traustia.com",
} as const;

export const siteConfig = {
  companyName: "Traustia",
  legalName: "Traustia",
  contactEmail: contactEmails.iris,
  futureDomain: "",
  socialLinks: {
    linkedin: "",
    github: "",
  },
  navigation: [
    { label: "Work With Us", href: "#capabilities" },
    { label: "Evidence Intelligence", href: "#evidence-intelligence" },
    { label: "Research", href: "#research" },
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  capabilities: [
    {
      number: "01",
      category: "validation",
      title: "Reproducibility & Validation",
      description:
        "Independent reconstruction and stress-testing of biomedical prediction claims under leakage-aware, provenance-controlled conditions.",
      examples: [
        "Data Leakage Audits",
        "Nested Validation",
        "Feature Stability",
        "External-cohort Evaluation",
        "Permutation Controls",
        "Reproducibility Audits",
      ],
    },
    {
      number: "02",
      category: "validation",
      title: "Scientific Evidence Audits",
      description:
        "Neutral assessment of biomedical models, biomarkers, gene signatures, computational claims, and the evidence used to support them.",
      examples: [
        "Dataset Integrity",
        "Analytical Integrity",
        "Data Provenance",
        "Claim Boundaries",
        "Evidence Gaps",
        "Decision-ready Reporting",
      ],
    },
    {
      number: "03",
      category: "validation",
      title: "Translational Evidence Analysis",
      description:
        "Structured testing of whether findings can legitimately travel across datasets, platforms, experimental conditions, species, and biological contexts.",
      examples: [
        "Evidence Synthesis",
        "Cross-species Translation",
        "Context & Transportability",
        "Systematic Evidence Review",
        "Mechanistic Claim Boundaries",
      ],
    },
    {
      number: "04",
      category: "collaboration",
      title: "Biostatistics & Study Design",
      description:
        "Project-based support for research questions, study design, statistical analysis plans, endpoint definition, and publication-ready inference.",
      examples: [
        "Study Design",
        "Statistical Analysis Plans",
        "Power & Precision",
        "Endpoint Definition",
        "Uncertainty & Sensitivity Analysis",
      ],
    },
    {
      number: "05",
      category: "collaboration",
      title: "Biomedical Data Science & Omics",
      description:
        "Reproducible analysis of complex biomedical and molecular datasets using modern statistics, machine learning, and omics workflows.",
      examples: [
        "Biomedical Machine Learning",
        "Microarray",
        "Bulk RNA-seq",
        "Pathway Analysis",
        "Cross-cohort Analysis",
      ],
    },
    {
      number: "06",
      category: "collaboration",
      title: "Scientific Software & Research Pipelines",
      description:
        "Research-grade computational workflows designed for traceability, reproducibility, automation, and reliable scientific execution.",
      examples: [
        "Reproducible Pipelines",
        "Cloud Research Workflows",
        "Research Software",
        "ML Infrastructure",
        "Pipeline Provenance",
      ],
    },
  ] satisfies Capability[],
  researchProjects: [
    {
      number: "01",
      slug: "reproducible-omics-evidence-audit",
      integrity: "Model Integrity",
      title: "Reproducible Omics Evidence Audit",
      focus:
        "Data leakage, nested validation, feature stability, permutation controls, and external transportability in high-dimensional omics classification.",
      question: "Can the model’s reported performance actually be trusted?",
      status: "Research / manuscript work",
      methods: ["Leakage audit", "Nested validation", "Feature stability", "External testing"],
      evidenceState: "Model credibility under review",
      output: "Reproducible evidence audit and manuscript",
      failureModes: ["Information leakage", "Selection-induced optimism", "Feature instability", "Cohort shift"],
      validationPlan: ["Reconstruct the full analytical path", "Separate feature selection from evaluation", "Quantify stability across resamples", "Test transportability in an independent cohort"],
      limitations: ["Illustrative framework - no client or patient data", "Final estimands depend on the supplied study design", "External validity cannot be inferred without an independent cohort"],
    },
    {
      number: "02",
      slug: "pipeline-transition-reproducibility",
      integrity: "Pipeline Integrity",
      title: "Computational Pipeline Transition & Reproducibility",
      focus:
        "Whether changes in RNA-seq computational operators and accelerated analysis pipelines propagate into expression, prediction, calibration, feature stability, and pathway evidence.",
      question:
        "Does changing the computational pipeline change the scientific conclusion?",
      status: "Research in progress",
      methods: ["Operator comparison", "Calibration", "Pathway stability", "Pipeline provenance"],
      evidenceState: "Pipeline sensitivity mapped",
      output: "Transition validation framework",
      failureModes: ["Operator-version drift", "Expression-scale disagreement", "Calibration shift", "Pathway instability"],
      validationPlan: ["Lock source inputs and reference outputs", "Compare operators at every analytical stage", "Measure downstream prediction and calibration changes", "Document acceptable transition tolerances"],
      limitations: ["Placeholder transition scenario", "Tolerance thresholds require scientific owner approval", "Equivalent runtime does not establish equivalent scientific output"],
    },
    {
      number: "03",
      slug: "translational-evidence-transportability",
      integrity: "Translational Integrity",
      title: "Cross-Species and Cell-Type-Resolved Biomedical Evidence",
      focus:
        "How experimental context, exposure, species, cell type, pathway evidence, and human data constrain translational claims.",
      question:
        "When can biological evidence legitimately be transported from one context to another?",
      status: "Research in progress",
      methods: ["Context mapping", "Cell-type resolution", "Cross-species review", "Claim boundaries"],
      evidenceState: "Transportability limits defined",
      output: "Structured translational evidence dossier",
      failureModes: ["Species-context mismatch", "Exposure incompatibility", "Cell-type composition", "Mechanistic overreach"],
      validationPlan: ["Map every claim to its experimental context", "Resolve evidence by species and cell type", "Compare pathway direction and exposure conditions", "Define the strongest defensible human-relevance statement"],
      limitations: ["Illustrative evidence map", "Cross-species agreement does not establish clinical efficacy", "Unmeasured context can narrow transportability"],
    },
  ] satisfies ResearchProject[],
  founders: [
    {
      initials: "IY",
      name: "Iris Yang",
      displayName: "Iris Y.",
      email: contactEmails.iris,
      role: "Founder & Chief Executive Officer",
      discipline: "Quantitative Risk, Model Evaluation & Trustworthy AI",
      bio: [
        "Iris works on a single question: how much confidence a number actually deserves. Her research background is in quantitative finance and risk—volatility and tail-risk forecasting, uncertainty quantification, and model evaluation.",
        "The methods she works in—walk-forward validation, strict timing rules, and out-of-sample discipline—exist because it is remarkably easy to build a model that predicts the past. Biomedicine is confronting the same failure under a different name: data leakage.",
        "She has taught mathematics and statistics at California State University, Los Angeles since 2012, currently alongside courses in computer forensics and network defense, and is a co-author on peer-reviewed research in risk perception and decision-making. She holds an M.S. in Mathematics and an M.A. in Mathematics Education from Cal State LA, an ALM in Data Science from Harvard, and is pursuing a Doctor of Technology at Purdue focused on data science, cybersecurity, and trustworthy AI.",
      ],
      areas: [
        "Model Evaluation",
        "Uncertainty Quantification",
        "Data Leakage",
        "Trustworthy AI",
        "Quantitative Risk",
        "Reproducibility",
      ],
      photo: "",
    },
    {
      initials: "PT",
      name: "Paul K. Tan",
      displayName: "Paul T.",
      email: contactEmails.paul,
      role: "Co-Founder & Chief Technology Officer",
      discipline: "Biomedical Measurement, Research Software & Data Systems",
      bio: [
        "Paul has spent two decades on the boundary between biological measurement and the software that interprets it.",
        "As a research fellow at the NIH’s National Institute of Diabetes and Digestive and Kidney Diseases, he was first author of an early cross-platform assessment of commercial microarray reproducibility. The study found that identical RNA preparations produced substantially different measurements across platforms and concluded that the technology required further independent and thorough validation. It has since been cited in more than 650 publications. Traustia is the company that conclusion implies.",
        "He has since built production systems where computational correctness carries consequences: backend microservices for a machine-learning clinical genomics laboratory at Quantgene, laboratory information management infrastructure handling millions of sample records at Regeneron, and machine-learning platforms across AWS and GCP. He holds a B.S. in Economics and Biology from MIT and an ALM in Data Science from Harvard.",
      ],
      areas: [
        "Microarray Reproducibility",
        "Research Software",
        "Biomedical Informatics",
        "Laboratory Data Systems",
        "Machine Learning Platforms",
        "Cloud Infrastructure",
      ],
      photo: "",
    },
  ] satisfies Founder[],
} as const;

export const contactIsConfigured = Boolean(siteConfig.contactEmail);
