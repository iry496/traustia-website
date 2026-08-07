export type Capability = {
  number: string;
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
    { label: "Capabilities", href: "#capabilities" },
    { label: "Evidence Intelligence", href: "#evidence-intelligence" },
    { label: "Research", href: "#research" },
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  capabilities: [
    {
      number: "01",
      title: "Collaborative Biostatistics & Study Design",
      description:
        "Research questions, study design, statistical analysis plans, endpoint definition, power and precision, statistical modeling, sensitivity analysis, and publication-ready inference.",
      examples: [
        "Study Design",
        "Statistical Analysis Plans",
        "Power & Precision",
        "Longitudinal / Regression Methods",
        "Uncertainty & Sensitivity Analysis",
      ],
    },
    {
      number: "02",
      title: "Biomedical Data Science & Omics",
      description:
        "Reproducible analysis of complex biomedical and molecular datasets using modern statistics, machine learning, and omics workflows.",
      examples: [
        "Biomedical Machine Learning",
        "Microarray",
        "Bulk RNA-seq",
        "Pathway Analysis",
        "Cross-cohort Validation",
      ],
    },
    {
      number: "03",
      title: "Reproducibility & Validation",
      description:
        "Independent assessment of whether computational results remain credible under rigorous validation, repeated analysis, and external testing.",
      examples: [
        "Data Leakage Audits",
        "Nested Validation",
        "Feature Stability",
        "External Validation",
        "Permutation Controls",
        "Reproducibility Audits",
      ],
    },
    {
      number: "04",
      title: "Scientific Software & Research Pipelines",
      description:
        "Research-grade computational workflows designed for traceability, reproducibility, automation, and reliable scientific execution.",
      examples: [
        "Reproducible Pipelines",
        "Cloud Research Workflows",
        "Research Software",
        "ML Infrastructure",
        "Data Provenance",
        "Pipeline Migration Validation",
      ],
    },
    {
      number: "05",
      title: "Translational Evidence Analysis",
      description:
        "Structured analysis of whether findings can legitimately translate across datasets, platforms, experimental conditions, species, and biological contexts.",
      examples: [
        "Evidence Synthesis",
        "Cross-species Translation",
        "Context & Transportability",
        "Systematic Evidence Review",
        "Mechanistic Claim Boundaries",
      ],
    },
    {
      number: "06",
      title: "Scientific Evidence Audits",
      description:
        "Independent evaluation of biomedical models, biomarkers, gene signatures, computational claims, and research evidence.",
      examples: [
        "Dataset Integrity",
        "Analytical Integrity",
        "Reproducibility",
        "Transportability",
        "Evidence Gaps",
        "Decision-ready Reporting",
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
      role: "Co-Founder",
      discipline: "Quantitative Methodology & Biomedical Data Science",
      bio: [
        "Iris Yang is an adjunct faculty member in Mathematics and Information Systems at California State University, Los Angeles. She earned an ALM in Data Science from Harvard University Extension School and is pursuing doctoral study in the Doctor of Technology program at Purdue University.",
        "Her work focuses on quantitative methodology, trustworthy machine learning, reproducible biomedical data science, evidence validation, and interdisciplinary research collaboration. She is also involved in the Taiwan Ministry of Education-supported 2026 UCLA Taiwan Quantum program and serves as a Vice President / Southern California Coordinator of TAITA.",
      ],
      areas: [
        "Biostatistics",
        "Trustworthy ML",
        "Research Methodology",
        "Biomedical Evidence Validation",
        "Scientific Writing",
        "Reproducibility",
      ],
      photo: "",
    },
    {
      initials: "PT",
      name: "Paul Tan",
      displayName: "Paul T.",
      email: contactEmails.paul,
      role: "Co-Founder",
      discipline: "Data Science, Research Software & Biomedical Informatics",
      bio: [
        "Paul Tan is a Harvard University alumnus with an ALM in Data Science from Harvard Extension School and a Bachelor of Science in Economics and Biology from MIT.",
        "His experience spans biomedical informatics, microarray research, machine learning, research software, laboratory data systems, cloud infrastructure, and production software engineering. His biomedical experience includes research at the NIH NIDDK Microarray Core Facility and work involving genomics and research-data systems.",
      ],
      areas: [
        "Research Software",
        "Biomedical Informatics",
        "Omics",
        "Machine Learning Engineering",
        "Cloud & Data Infrastructure",
        "Reproducible Pipelines",
      ],
      photo: "",
    },
  ] satisfies Founder[],
} as const;

export const contactIsConfigured = Boolean(siteConfig.contactEmail);
