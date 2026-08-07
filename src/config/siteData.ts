export type Capability = {
  number: string;
  title: string;
  description: string;
  examples: string[];
};

export type ResearchProject = {
  number: string;
  integrity: string;
  title: string;
  focus: string;
  question: string;
  status: string;
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
      integrity: "Model Integrity",
      title: "Reproducible Omics Evidence Audit",
      focus:
        "Data leakage, nested validation, feature stability, permutation controls, and external transportability in high-dimensional omics classification.",
      question: "Can the model’s reported performance actually be trusted?",
      status: "Research / manuscript work",
    },
    {
      number: "02",
      integrity: "Pipeline Integrity",
      title: "Computational Pipeline Transition & Reproducibility",
      focus:
        "Whether changes in RNA-seq computational operators and accelerated analysis pipelines propagate into expression, prediction, calibration, feature stability, and pathway evidence.",
      question:
        "Does changing the computational pipeline change the scientific conclusion?",
      status: "Research in progress",
    },
    {
      number: "03",
      integrity: "Translational Integrity",
      title: "Cross-Species and Cell-Type-Resolved Biomedical Evidence",
      focus:
        "How experimental context, exposure, species, cell type, pathway evidence, and human data constrain translational claims.",
      question:
        "When can biological evidence legitimately be transported from one context to another?",
      status: "Research in progress",
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
