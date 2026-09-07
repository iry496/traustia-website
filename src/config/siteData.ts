export type Locale = "en" | "zh-TW";

export type ServiceId = "readiness" | "integrity" | "validation" | "dossier";

export type NavigationItem = {
  label: string;
  href: string;
};

export type Service = {
  id: ServiceId;
  number: string;
  timing: string;
  title: string;
  story: string;
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

export type EvidenceSource = {
  label: string;
  href: string;
};

export type EvidenceBrief = {
  id: string;
  featuredLabel: string;
  articleTitle: string;
  articleDek: string;
  articleMeta: string;
  paragraphs: string[];
  pullQuote: string;
  decisionBody: string;
  sources: EvidenceSource[];
  editorialNote: string;
};

export type SiteCopy = {
  language: {
    ariaLabel: string;
    english: string;
    traditionalChinese: string;
  };
  accessibility: {
    home: string;
    menu: string;
    primaryNavigation: string;
    footerNavigation: string;
    skipToMain: string;
  };
  navigation: NavigationItem[];
  headerCta: string;
  hero: {
    tagline: string;
    eyebrow: string;
    headline: [string, string];
    opening: string;
    primaryCta: string;
    secondaryCta: string;
    audience: string;
    routeAria: string;
    route: [string, string, string, string];
    conceptAria: string;
    concept: [string, string, string];
    boundary: string;
  };
  servicesSection: {
    kicker: string;
    title: string;
    lead: string;
    receive: string;
    request: string;
    note: string;
  };
  services: Service[];
  who: {
    kicker: string;
    title: string;
    lead: string;
  };
  audiences: Audience[];
  why: {
    kicker: string;
    title: string;
    paragraphs: [string, string];
    photoAlt: string;
    cta: string;
  };
  whyQuestions: WhyQuestion[];
  quote: {
    ariaLabel: string;
    lines: [string, string];
  };
  signals: {
    kicker: string;
    title: string;
    lead: string;
    briefs: EvidenceBrief[];
    featuredLabel: string;
    articleTitle: string;
    articleDek: string;
    articleMeta: string;
    openLabel: string;
    closeLabel: string;
    paragraphs: string[];
    pullQuote: string;
    decisionLabel: string;
    decisionBody: string;
    sourcesLabel: string;
    sources: EvidenceSource[];
    editorialNote: string;
  };
  outcomesSection: {
    kicker: string;
    title: string;
    lead: string;
  };
  outcomes: Outcome[];
  independence: {
    kicker: string;
    title: string;
    lead: string;
    firewallLabel: string;
    firewallNote: string;
  };
  engagementModels: EngagementModel[];
  ctaBand: {
    ariaLabel: string;
    title: string;
    cta: string;
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    service: string;
    selectReview: string;
    notSure: string;
    name: string;
    workEmail: string;
    organization: string;
    decisionQuestion: string;
    placeholder: string;
    honeypot: string;
    disclaimer: string;
    button: string;
    status: string;
    subjectPrefix: string;
    emailLabels: {
      name: string;
      email: string;
      organization: string;
      service: string;
      notProvided: string;
    };
  };
  footer: {
    tagline: string;
    profileLabel: string;
    copyright: string;
    disclaimer: string;
  };
};

export const siteConfig = {
  companyName: "Traustia",
  contactEmail: "irisyang@traustia.com",
} as const;

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    language: {
      ariaLabel: "Choose language",
      english: "English",
      traditionalChinese: "Traditional Chinese",
    },
    accessibility: {
      home: "Traustia home",
      menu: "Toggle navigation",
      primaryNavigation: "Primary navigation",
      footerNavigation: "Footer navigation",
      skipToMain: "Skip to main content",
    },
    navigation: [
      { label: "Services", href: "#services" },
      { label: "Who we serve", href: "#who" },
      { label: "Why Traustia", href: "#why" },
      { label: "Evidence Signals", href: "#signals" },
      { label: "Independence", href: "#independence" },
      { label: "Contact", href: "#contact" },
    ],
    headerCta: "Book a Scoping Call",
    hero: {
      tagline: "Evidence you can defend.",
      eyebrow: "SPONSOR-SIDE BIOMEDICAL EVIDENCE VALIDATION",
      headline: ["Your CRO delivered the report.", "We verify the evidence behind it."],
      opening: "Traustia is an independent review team for biotech sponsors. Before you advance an asset, raise a round, or sign a licensing deal, we check that the outsourced science behind the decision actually holds — study design, data integrity, biomarkers, and models.",
      primaryCta: "Book a scoping call",
      secondaryCta: "See the four services",
      audience: "FOR BIOTECH FOUNDERS & CSOs · FINANCING & BD TEAMS · INVESTORS · ACADEMIC SPIN-OFFS",
      routeAria: "The four Traustia services: Prepare, Review, Validate, Defend",
      route: ["Prepare", "Review", "Validate", "Defend"],
      conceptAria: "Research evidence passes through independent validation and becomes decision-grade evidence for more defensible business decisions.",
      concept: ["Research evidence", "Independent validation", "Decision-grade evidence"],
      boundary: "Validation services—not clinical operations. Independent only when Traustia did not create the original model.",
    },
    servicesSection: {
      kicker: "FOUR SERVICES",
      title: "What we do",
      lead: "One review for each moment your evidence is at risk. Every engagement ends with a written record you can put in front of a board, an investor, or a partner.",
      receive: "YOU RECEIVE",
      request: "Request this review",
      note: "Validation services—not clinical operations. Independent only when Traustia did not create the original model.",
    },
    services: [
      {
        id: "readiness",
        number: "01",
        timing: "Before CRO work begins",
        title: "CRO Data & Analysis Readiness Review",
        story: "We turn your scientific question into a specification a CRO cannot misread — protocol, endpoints, statistical analysis plan, success criteria — so the study you pay for is the study you actually need.",
        deliverable: "CRO Readiness Review Memo",
      },
      {
        id: "integrity",
        number: "02",
        timing: "When CRO or lab results come back",
        title: "CRO Output Integrity Review",
        story: "A vendor report is an output, not a verdict. We audit it against the agreed protocol — sample flow, missing data, batch effects, deviations, analysis choices — and tell you plainly what is solid, what is fragile, and what needs rework.",
        deliverable: "CRO Data Integrity Review Memo",
      },
      {
        id: "validation",
        number: "03",
        timing: "Before you rely on a biomarker or model",
        title: "Independent Biomarker / Model Validation",
        story: "We re-run and stress-test the biomarker or model under a frozen protocol, with no involvement in its original development — leakage, stability, calibration, external cohorts. You learn its real limits before someone else's diligence team does.",
        deliverable: "Independent Validation Report",
      },
      {
        id: "dossier",
        number: "04",
        timing: "Before financing, partnering, or licensing",
        title: "Financing / Partnering Evidence Dossier",
        story: "We connect each asset claim to its underlying studies, validation status, contradictions, and open risks — a claim-by-claim evidence map built to be interrogated.",
        deliverable: "Traustia Evidence Dossier",
      },
    ],
    who: {
      kicker: "WHO WE WORK WITH",
      title: "Who we serve",
      lead: "If the next board meeting, financing round, or licensing conversation depends on work someone else performed, we work for you.",
    },
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
    ],
    why: {
      kicker: "WHY TRAUSTIA",
      title: "Why sponsors bring us in",
      paragraphs: [
        "Outsourced work comes back as a polished report. Whether it can carry a high-stakes decision is a different question — and answering it is our entire job.",
        "We catch problems while they are still cheap to fix, so you walk into diligence with no surprises, and your board sees go/no-go calls backed by documented, independent review — not by the vendor's own summary of its own work.",
      ],
      photoAlt: "An independent review team examining biomedical evidence together.",
      cta: "Book a scoping call",
    },
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
    ],
    quote: {
      ariaLabel: "The Traustia position",
      lines: ["CROs execute. Investors interrogate.", "Traustia is the check in between — working only for you."],
    },
    signals: {
      kicker: "EVIDENCE SIGNALS",
      title: "What changed — and what it changes",
      lead: "We follow scientific, regulatory, and market developments through the question that matters to a decision-maker: does this event change what the evidence can support?",
      briefs: [
        {
          id: "foundation-model-traceability",
          featuredLabel: "NEW EVIDENCE BRIEF · AI TRACEABILITY",
          articleTitle: "If the foundation model changes, what exactly has been validated?",
          articleDek: "A September 4 FDA page update points to a basic transparency problem: before evidence can support an AI-enabled medical device, the evaluated system must be identifiable.",
          articleMeta: "Traustia Evidence Brief · September 2026 · 5-minute read",
          paragraphs: [
            "On September 4, 2026, the FDA listed an update to its AI-Enabled Medical Devices page. The page says the agency will explore methods to identify and tag devices that incorporate foundation models, from large language models to multimodal architectures, and encourages sponsors to include suitable information in public summaries. This is a transparency signal, not a new guidance or a new regulatory requirement.",
            "The practical issue reaches beyond a database label. A foundation-model system is not one stable object. Its behaviour can depend on the model provider and version, fine-tuning, system instructions, retrieval sources, guardrails, interfaces, and local configuration. A product name can remain unchanged while the evidence-relevant system underneath it changes.",
            "That creates a difficult gap between validation and deployment. A study may be methodologically sound for the version that was tested, yet become a weak basis for the version now in use. Without a traceable model identity and change history, teams cannot tell whether an earlier result still applies, which change triggered new uncertainty, or when revalidation became necessary.",
            "A defensible evidence record therefore needs more than an accuracy result. It should connect the exact model and build to the intended use, data provenance, independent evaluation set, failure modes, subgroup and site performance, change log, and predefined revalidation triggers. The goal is not paperwork for its own sake; it is continuity between the claim, the evaluated object, and the deployed object.",
            "For a sponsor, investor, or licensing team, the diligence question becomes concrete: which exact system produced the reported performance, under which conditions, and what subsequent change could invalidate the claim? If the evaluated object cannot be reconstructed, the evidence may be impressive but difficult to defend.",
          ],
          pullQuote: "A model cannot be validated if the evaluated object cannot be identified.",
          decisionBody: "Before adopting, financing, or licensing an AI-enabled product, require a versioned evidence lineage: model identity, configuration, data and evaluation provenance, change history, and explicit revalidation triggers.",
          sources: [
            { label: "FDA — Artificial Intelligence-Enabled Medical Devices", href: "https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices" },
            { label: "FDA CDRH New — September 4, 2026 update record", href: "https://www.fda.gov/medical-devices/medical-devices-news-and-events/cdrh-new-news-and-updates" },
          ],
          editorialNote: "This original educational analysis is based on the cited public FDA pages. It does not characterize the page update as guidance or a binding requirement, assess any named device or company, or provide medical, regulatory, investment, or legal advice.",
        },
        {
          id: "catalina-independent-validation",
          featuredLabel: "NEW EVIDENCE BRIEF · AI BIOMARKER VALIDATION",
          articleTitle: "Locked models, independent data—and the harder question: did the AI add value?",
          articleDek: "The CATALINA study shows why replication and decision value must be judged separately: an AI-derived biomarker can carry prognostic signal without improving an already stronger evidence model.",
          articleMeta: "Traustia Evidence Brief · September 2026 · 6-minute read",
          paragraphs: [
            "The CATALINA study, published in the September 2026 issue of The Lancet Oncology, tested two previously validated computational tumour-infiltrating lymphocyte pipelines through masked, independent deployment of locked models. It pooled prospectively collected outcomes from seven randomised trials: data were collated for 1,759 patients, with 1,356 having the complete information needed for the main prognostic analyses.",
            "The AI-derived scores and pathologist-scored stromal TILs each added prognostic information beyond clinicopathological variables alone. But when the AI score was added to a model that already included clinicopathological variables and the pathologist score, it did not provide a statistically significant further improvement. That is not well described by a simple label of success or failure.",
            "Instead, the result separates three questions that are often collapsed into one. First, can a locked model reproduce a useful signal on independent, multisite data? Second, is that signal associated with an outcome after appropriate adjustment? Third, does it add enough information beyond the current comparator to change a real decision? CATALINA supplies strong evidence for the first two while narrowing the claim that can be made about the third.",
            "This distinction matters in diligence. Locked models, independent deployment, long-term outcomes, and data pooled from randomised trials strengthen the credibility of a validation. They do not remove the need to examine intended use, cohort representativeness, missingness, calibration, operating thresholds, site effects, workflow integration, and clinical utility.",
            "The comparator also defines the claim. Using computational scoring where consistent pathologist assessment is unavailable is a different proposition from claiming that AI improves a decision already informed by pathology. A defensible dossier should state which proposition was actually tested—and resist allowing a positive association to travel farther than the study supports.",
          ],
          pullQuote: "A replicated signal is not automatically an added decision.",
          decisionBody: "When reviewing an AI biomarker, ask three separate questions: does it reproduce on independent data, does it add information beyond the current standard, and would that added information change the intended decision?",
          sources: [
            { label: "PubMed — CATALINA independent external validation study", href: "https://pubmed.ncbi.nlm.nih.gov/42636839/" },
            { label: "The Lancet Oncology — DOI 10.1016/S1470-2045(26)00339-6", href: "https://doi.org/10.1016/S1470-2045(26)00339-6" },
          ],
          editorialNote: "This original educational summary paraphrases the cited publication and uses no third-party figures, screenshots, or article text. It does not evaluate a commercial product or vendor and is not diagnostic, treatment, investment, regulatory, or legal advice.",
        },
      ],
      featuredLabel: "FEATURED EVIDENCE BRIEF · BIOLOGICS CMC",
      articleTitle: "Passing is not sameness: what a manufacturing change reveals about evidence",
      articleDek: "Two batches can both meet release specifications without proving that the product remained comparable. The same blind spot appears whenever a polished biomedical result is asked to carry a larger decision.",
      articleMeta: "Traustia Evidence Brief · August 2026 · 6-minute read",
      openLabel: "Read the full analysis",
      closeLabel: "Close analysis",
      paragraphs: [
        "Consider an illustrative scenario: a monoclonal antibody moves to a new manufacturing site and part of its purification process changes. The pre-change and post-change batches both pass release: purity, potency, aggregates, host-cell proteins, and residual DNA all remain within their approved limits. On the quality table, the transfer looks successful.",
        "But two acceptable batches do not, by themselves, demonstrate comparability. Release specifications answer whether a batch remains inside a predefined quality boundary. Comparability asks a more consequential question: after the process changed, is there sufficient evidence that any observed differences will not adversely affect quality, safety, or efficacy?",
        "The distinction matters because a result can pass while the reasons for trusting it have shifted. An impurity profile may be moving, a glycosylation pattern may have changed, an assay may be insensitive to a meaningful functional difference, or the long-term stability trajectory may not yet be known. A specification guards an acceptance boundary. Comparability tests whether the evidence supporting continuity of trust has been preserved.",
        "The same problem appears outside CMC. A CRO can deliver a biomarker or biomedical AI report whose AUROC clears the target and whose primary analysis is statistically significant. Yet a change in cohort, site, platform, data pipeline, or model can still alter subgroup performance, calibration, feature stability, batch sensitivity, leakage risk, or external generalizability. The metric may pass even when the evidence chain underneath it has weakened.",
        "Traustia works at that boundary between an acceptable output and a defensible decision. We reconstruct how the result was produced, stress-test the claim, identify what remains uncertain, and state how far the reviewed evidence can responsibly travel. A completed report may begin a decision. It should not automatically end the evidence review.",
      ],
      pullQuote: "Passing a test is not the same as preserving trust.",
      decisionLabel: "THE DECISION LENS",
      decisionBody: "Before a board, financing, licensing, or go/no-go decision, ask not only whether the result passed. Ask what changed, how the team knows the relevant evidence was preserved, and which uncertainty could still change the decision.",
      sourcesLabel: "Primary references",
      sources: [
        { label: "ICH Q6B — Specifications for biological products", href: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/q6b-specifications-test-procedures-and-acceptance-criteria-biotechnologicalbiological-products" },
        { label: "ICH Q5E — Comparability after manufacturing changes", href: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/q5e-comparability-biotechnologicalbiological-products-subject-changes-their-manufacturing-process" },
      ],
      editorialNote: "This illustrative educational analysis is based on cited public sources. It does not assess any named product or company and is not a formal comparability assessment, regulatory determination, or clinical, investment, or legal advice.",
    },
    outcomesSection: {
      kicker: "WHAT CHANGES",
      title: "What you get out of it",
      lead: "Four ways checked evidence changes the position you decide, raise, and negotiate from.",
    },
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
    ],
    independence: {
      kicker: "INDEPENDENCE BY DESIGN",
      title: "We never validate our own work",
      lead: "Every engagement begins in one of two lanes, and a firewall keeps them apart. That separation is what makes a Traustia validation worth showing to your investors.",
      firewallLabel: "THE FIREWALL",
      firewallNote: "Work performed in the Development Workspace is ineligible for independent validation by the same team.",
    },
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
    ],
    ctaBand: {
      ariaLabel: "Start a review",
      title: "What decision is in front of you?",
      cta: "Start the conversation",
    },
    contact: {
      kicker: "START WITH THE DECISION",
      title: "Start a review",
      body: "A financing round. A licensing conversation. A go/no-go on the lead asset. A CRO contract about to be signed. Tell us the decision and where the evidence stands — we will tell you which review fits, what it covers, and what it would take.",
      service: "Service",
      selectReview: "Select a review",
      notSure: "Not sure yet",
      name: "Name",
      workEmail: "Work email",
      organization: "Organization",
      decisionQuestion: "Decision and evidence question",
      placeholder: "What decision is approaching, and what evidence needs review?",
      honeypot: "Website",
      disclaimer: "This prepares an email in your email application. Nothing is stored on this website.",
      button: "Start the conversation",
      status: "Your inquiry has been prepared.",
      subjectPrefix: "Traustia inquiry",
      emailLabels: {
        name: "Name",
        email: "Email",
        organization: "Organization",
        service: "Service",
        notProvided: "Not provided",
      },
    },
    footer: {
      tagline: "Evidence you can defend.",
      profileLabel: "Founder profile",
      copyright: "© 2026 Traustia. All rights reserved.",
      disclaimer: "Validation services—not clinical operations, regulatory certification, or legal advice.",
    },
  },
  "zh-TW": {
    language: {
      ariaLabel: "選擇語言",
      english: "英文",
      traditionalChinese: "繁體中文",
    },
    accessibility: {
      home: "Traustia 首頁",
      menu: "切換導覽選單",
      primaryNavigation: "主要導覽",
      footerNavigation: "頁尾導覽",
      skipToMain: "跳至主要內容",
    },
    navigation: [
      { label: "服務項目", href: "#services" },
      { label: "服務對象", href: "#who" },
      { label: "為何選擇 Traustia", href: "#why" },
      { label: "證據訊號", href: "#signals" },
      { label: "獨立性", href: "#independence" },
      { label: "聯絡我們", href: "#contact" },
    ],
    headerCta: "預約初步諮詢",
    hero: {
      tagline: "經得起檢驗的證據。",
      eyebrow: "委託方生醫證據驗證",
      headline: ["您的 CRO 已交付報告。", "我們驗證報告背後的證據。"],
      opening: "Traustia 是服務生技委託方的獨立審查團隊。在推進資產、啟動募資或簽署授權合作之前，我們檢驗支撐決策的委外科學工作是否真正成立——包括研究設計、資料完整性、生物標誌與模型。",
      primaryCta: "預約初步諮詢",
      secondaryCta: "查看四項服務",
      audience: "服務對象：生技創辦人與 CSO · 募資與商務開發團隊 · 投資人 · 學術衍生新創",
      routeAria: "Traustia 的四項服務：準備、審查、驗證、支持主張",
      route: ["準備", "審查", "驗證", "支持主張"],
      conceptAria: "研究證據經過獨立驗證，形成可支持穩健商業決策的決策級證據。",
      concept: ["研究證據", "獨立驗證", "決策級證據"],
      boundary: "我們提供驗證服務，不承接臨床營運。只有在 Traustia 未參與原始模型開發時，才能稱為獨立驗證。",
    },
    servicesSection: {
      kicker: "四項服務",
      title: "我們提供的服務",
      lead: "在證據最容易失真的四個時點，提供相對應的審查。每一次合作都會形成一份可交付董事會、投資人或合作夥伴的書面紀錄。",
      receive: "您將收到",
      request: "申請此項審查",
      note: "我們提供驗證服務，不承接臨床營運。只有在 Traustia 未參與原始模型開發時，才能稱為獨立驗證。",
    },
    services: [
      {
        id: "readiness",
        number: "01",
        timing: "CRO 工作開始之前",
        title: "CRO 資料與分析就緒度審查",
        story: "我們把您的科學問題轉化為 CRO 不易誤解的工作規格——包括試驗計畫、終點、統計分析計畫與成功標準——確保您付費執行的研究，正是您真正需要的研究。",
        deliverable: "CRO 就緒度審查備忘錄",
      },
      {
        id: "integrity",
        number: "02",
        timing: "CRO 或實驗室結果交付之後",
        title: "CRO 交付成果完整性審查",
        story: "供應商報告是輸出，不是結論。我們依照原訂計畫審查樣本流、遺失資料、批次效應、偏差與分析選擇，清楚說明哪些結果穩固、哪些脆弱，以及哪些需要重做。",
        deliverable: "CRO 資料完整性審查備忘錄",
      },
      {
        id: "validation",
        number: "03",
        timing: "在採信生物標誌或模型之前",
        title: "生物標誌／模型獨立驗證",
        story: "我們在不參與原始開發的前提下，依照凍結計畫重新執行並壓力測試生物標誌或模型，包括資料洩漏、穩定性、校準與外部世代驗證，讓您在別人的盡職調查團隊發現之前，先了解真實界限。",
        deliverable: "獨立驗證報告",
      },
      {
        id: "dossier",
        number: "04",
        timing: "募資、合作或授權之前",
        title: "募資／合作證據檔案",
        story: "我們把每一項資產主張與其研究來源、驗證狀態、矛盾證據及未解風險連結起來，形成一份可逐項檢驗的證據地圖。",
        deliverable: "Traustia 證據檔案",
      },
    ],
    who: {
      kicker: "合作對象",
      title: "我們服務的對象",
      lead: "若下一次董事會、募資或授權談判仰賴他人執行的工作，Traustia 就是站在您這一邊的審查團隊。",
    },
    audiences: [
      {
        title: "生技創辦人、CSO 與研發主管",
        body: "您把研究委外給 CRO 與實驗室，但內部缺少統計或資料團隊檢查交付成果。我們可按需成為這支團隊。",
      },
      {
        title: "準備募資、授權或合作的團隊",
        body: "您的資料室即將面對對方的專家。我們先找出弱點、修正可修正之處，並記錄真正成立的證據。",
      },
      {
        title: "投資人與盡職調查團隊",
        body: "您正在評估他人的科學主張。我們在承諾資金之前，獨立驗證交易背後的生物標誌、模型或資料集。",
      },
      {
        title: "學術衍生與早期團隊",
        body: "科學成果誕生於實驗室，下一站卻是資料室。我們協助證據完成這段轉換，也包含第一次 CRO 交接。",
      },
    ],
    why: {
      kicker: "為何選擇 TRAUSTIA",
      title: "委託方為何會找我們",
      paragraphs: [
        "委外工作通常以一份精美報告回到您手上。但它是否足以承擔高風險決策，是另一個問題——而回答這個問題，就是我們的工作。",
        "我們在問題仍然容易修正、成本仍低時找出風險，讓您進入盡職調查時沒有意外；董事會看到的 go/no-go 建議，來自有紀錄的獨立審查，而不是供應商對自己工作的摘要。",
      ],
      photoAlt: "獨立審查團隊共同檢視生醫證據。",
      cta: "預約初步諮詢",
    },
    whyQuestions: [
      {
        number: "01",
        title: "研究真的回答了您的問題嗎？",
        body: "CRO 會執行收到的規格。如果科學問題與試驗計畫之間發生意圖偏移，您付費得到的可能是另一個問題的答案。",
      },
      {
        number: "02",
        title: "資料在流程中仍然完整嗎？",
        body: "樣本處理、遺失資料、批次效應與未記錄的分析選擇，往往不會出現在摘要報告裡。",
      },
      {
        number: "03",
        title: "這項主張經得起檢驗嗎？",
        body: "投資人、合作夥伴與監管單位都會以對抗式方式審查證據。最好先由您自己完成這場審查。",
      },
    ],
    quote: {
      ariaLabel: "Traustia 的定位",
      lines: ["CRO 負責執行，投資人負責追問。", "Traustia 是兩者之間、只為您工作的驗證關卡。"],
    },
    signals: {
      kicker: "證據訊號",
      title: "不只看見變化，更看見它改變了什麼",
      lead: "我們追蹤科學、監管與市場事件，但不止於摘要新聞。Traustia 關心的是：這件事是否改變了現有證據能夠支持的主張與決策？",
      briefs: [
        {
          id: "foundation-model-traceability",
          featuredLabel: "最新證據解讀 · AI 可追溯性",
          articleTitle: "如果 foundation model 改變了，究竟是哪一個版本被驗證過？",
          articleDek: "FDA 於 9 月 4 日更新的頁面，指向一個最基本的透明度問題：AI 醫療器材的證據要能成立，首先必須能辨識當時實際被評估的是哪一套系統。",
          articleMeta: "Traustia 證據解讀 · 2026 年 9 月 · 閱讀時間約 5 分鐘",
          paragraphs: [
            "2026 年 9 月 4 日，FDA 在 CDRH 更新紀錄中列出 AI-Enabled Medical Devices 頁面的更新。頁面表示，FDA 將探索如何辨識與標記納入 foundation model 的醫療器材，範圍包括大型語言模型與多模態架構，並鼓勵申請人在公開摘要中提供適當資訊。這是一項透明度訊號，不是新的 guidance，也不是新增的強制要求。",
            "真正的問題並不只是一個資料庫標籤。Foundation-model system 並非固定不變的單一物件；它的行為可能受到模型供應商與版本、微調方式、system instructions、檢索來源、guardrails、介面與在地設定影響。產品名稱可以不變，支撐證據的底層系統卻可能已經不同。",
            "因此，驗證與部署之間可能出現斷點。一項研究也許對當時測試的版本設計得很嚴謹，卻未必足以支持現在實際使用的版本。若缺少可追溯的模型身分與變更紀錄，團隊就無法判斷過去的結果是否仍適用、哪一項變更帶來新的不確定性，以及何時應該重新驗證。",
            "可辯護的證據紀錄不能只有一個 accuracy 數字。它應把明確的模型與 build 連結到 intended use、資料來源、獨立評估資料集、failure modes、不同 subgroup 與 site 的表現、變更紀錄，以及預先定義的再驗證觸發條件。目的不是增加文件，而是讓主張、被評估的物件與實際部署的物件保持連續。",
            "對委託方、投資人或授權團隊而言，盡職調查問題因此變得非常具體：報告中的表現是由哪一個確切系統、在什麼條件下產生？後續哪一項變更可能使原有主張失效？如果無法重建被評估的物件，證據即使看起來亮眼，也很難真正經得起檢驗。",
          ],
          pullQuote: "若無法辨識被評估的物件，就無法真正驗證一個模型。",
          decisionBody: "在導入、投資或授權 AI 醫療產品之前，應要求具版本紀錄的 evidence lineage：模型身分與設定、資料及評估來源、變更歷史，以及明確的再驗證觸發條件。",
          sources: [
            { label: "FDA — Artificial Intelligence-Enabled Medical Devices", href: "https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices" },
            { label: "FDA CDRH New — 2026 年 9 月 4 日更新紀錄", href: "https://www.fda.gov/medical-devices/medical-devices-news-and-events/cdrh-new-news-and-updates" },
          ],
          editorialNote: "本文為根據所列 FDA 公開頁面撰寫的原創教育分析；不將此次頁面更新描述為 guidance 或具拘束力的要求，不評估任何具名器材或公司，也不構成醫療、監管、投資或法律意見。",
        },
        {
          id: "catalina-independent-validation",
          featuredLabel: "最新證據解讀 · AI 生物標誌驗證",
          articleTitle: "模型凍結、資料獨立，然後呢？AI 是否真的增加了決策價值？",
          articleDek: "CATALINA 研究說明，重現結果與增加決策價值必須分開判斷：AI 衍生生物標誌可以帶有預後訊號，卻不一定改善一個已經包含更強資訊的模型。",
          articleMeta: "Traustia 證據解讀 · 2026 年 9 月 · 閱讀時間約 6 分鐘",
          paragraphs: [
            "刊登於 2026 年 9 月《The Lancet Oncology》的 CATALINA 研究，以 blinded、獨立部署的方式，評估兩套先前已驗證且完全凍結的 computational tumour-infiltrating lymphocyte pipelines。研究整合七項隨機試驗中前瞻性收集的結果資料，共彙整 1,759 位病人，其中 1,356 位具有主要預後分析所需的完整資料。",
            "AI 衍生分數與病理醫師評估的 stromal TIL 分數，分別都能在只含 clinicopathological variables 的模型之外提供預後資訊；但當模型已經納入臨床病理變項與病理醫師分數後，再加入 AI 分數並未帶來統計上顯著的進一步改善。把這項結果簡化為成功或失敗，都不夠精確。",
            "這項研究真正切開了三個經常被混為一談的問題。第一，凍結模型能否在獨立、多中心資料上重現有用訊號？第二，經過適當調整後，該訊號是否仍與結果相關？第三，它是否能在現行 comparator 之外增加足以改變真實決策的資訊？CATALINA 對前兩項提供了有力證據，同時縮小了第三項可被支持的主張範圍。",
            "這個差異在盡職調查中很重要。凍結模型、獨立部署、長期追蹤結果，以及來自隨機試驗的彙整資料，都提高了驗證可信度；但仍不能取代對 intended use、cohort representativeness、missingness、calibration、operating threshold、site effects、工作流程整合與實際效用的檢查。",
            "Comparator 也決定了主張邊界。在無法普遍取得一致病理評估的情境下使用 computational scoring，與宣稱 AI 能改善已經有病理結果支持的決策，是兩個不同命題。可辯護的 evidence dossier 必須說清楚實際測試的是哪一個命題，也不能讓正向關聯走得比研究證據更遠。",
          ],
          pullQuote: "能夠重現的訊號，不會自動成為能夠增加價值的決策。",
          decisionBody: "審查 AI 生物標誌時，請分別回答三個問題：它能否在獨立資料中重現？能否在現行標準之外增加資訊？新增的資訊是否真的會改變預定決策？",
          sources: [
            { label: "PubMed — CATALINA 獨立外部驗證研究", href: "https://pubmed.ncbi.nlm.nih.gov/42636839/" },
            { label: "The Lancet Oncology — DOI 10.1016/S1470-2045(26)00339-6", href: "https://doi.org/10.1016/S1470-2045(26)00339-6" },
          ],
          editorialNote: "本文以原創文字摘要所列研究，未使用第三方圖表、截圖或文章段落；不評估任何商業產品或供應商，也不構成診斷、治療、投資、監管或法律意見。",
        },
      ],
      featuredLabel: "本期證據解讀 · 生物製劑 CMC",
      articleTitle: "合格，不代表相同：一個製程變更揭露的證據盲點",
      articleDek: "兩批產品都通過放行規格，不代表製程改變後的產品已經證明具有可比較性。同一個盲點，也存在於每一份準備承擔重大決策的生醫報告裡。",
      articleMeta: "Traustia 證據解讀 · 2026 年 8 月 · 閱讀時間約 6 分鐘",
      openLabel: "閱讀完整分析",
      closeLabel: "收合分析",
      paragraphs: [
        "想像一個示例情境：一項 monoclonal antibody 產品更換了生產廠區，也調整了部分純化流程。變更前後的批次都順利通過放行規格：純度、效價、聚集體、宿主細胞蛋白與殘留 DNA 全部落在核准範圍內。從品質報表上看，這似乎是一場成功的技術轉移。",
        "但兩批產品都合格，並不等於製程改變後的產品已經證明具有可比較性。放行規格回答的是：這一批產品是否仍在預先設定的品質邊界內？Comparability 要回答的則是另一個更困難的問題：製程改變之後，是否有足夠證據顯示觀察到的差異不會對品質、安全性或療效造成不利影響？",
        "這個差別之所以重要，是因為結果可以通過，支撐信任的理由卻可能已經改變。雜質分布可能正在偏移，glycosylation pattern 可能發生變化，分析方法可能無法辨識具有意義的功能差異，長期穩定性軌跡也可能尚未建立。規格守住的是最低可接受邊界；comparability 檢查的，則是改變發生後，原本值得相信的理由是否仍然成立。",
        "同樣的問題也存在於 CMC 之外。CRO 交付的 biomarker 或 biomedical AI 報告可能達到預定的 AUROC，主要分析也具有統計顯著性；但當 cohort、site、platform、資料流程或模型發生改變時，subgroup performance、calibration、feature stability、batch sensitivity、leakage risk 與 external generalizability 都可能隨之改變。數字通過了門檻，並不代表數字背後的證據鏈仍然完整。",
        "Traustia 工作的位置，正是在『可接受的輸出』與『經得起檢驗的決策』之間。我們重建結果產生的路徑，壓力測試主張，辨識尚未解決的不確定性，並清楚說明現有證據究竟能支持多大的決策。一份完成的報告可以是決策的起點，卻不應自動成為證據審查的終點。",
      ],
      pullQuote: "通過測試，不代表信任已經被保留下來。",
      decisionLabel: "決策視角",
      decisionBody: "在董事會、募資、授權或資產 go/no-go 之前，不要只問結果是否通過。還要問：什麼發生了改變？團隊如何知道重要證據仍被保留？哪一項尚未解決的不確定性，仍可能改變決策？",
      sourcesLabel: "主要參考來源",
      sources: [
        { label: "ICH Q6B — 生物製劑規格與允收標準", href: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/q6b-specifications-test-procedures-and-acceptance-criteria-biotechnologicalbiological-products" },
        { label: "ICH Q5E — 製程變更後的可比較性", href: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/q5e-comparability-biotechnologicalbiological-products-subject-changes-their-manufacturing-process" },
      ],
      editorialNote: "本文為以所列公開來源為基礎的示例性教育分析，不針對任何具名產品或公司，也不構成正式 comparability assessment、監管判定、臨床、投資或法律意見。",
    },
    outcomesSection: {
      kicker: "改變的是什麼",
      title: "您將得到什麼",
      lead: "經過審查的證據，會從四個層面改變您做決策、募資與談判的位置。",
    },
    outcomes: [
      {
        title: "在修正成本仍低時發現問題。",
        body: "規格錯誤或批次效應若提早發現，只需要修正；若在盡職調查才被發現，可能讓整筆交易失敗。",
      },
      {
        title: "資料室不再出現意外。",
        body: "進入盡職調查之前，您已經知道哪些主張成立、哪些不成立，以及如何說明兩者。",
      },
      {
        title: "董事會能夠承擔的決策。",
        body: "Go/no-go 決策有完整且獨立的審查紀錄支持，而不是依賴供應商對自身工作的摘要。",
      },
      {
        title: "資金跟著證據，而不是故事。",
        body: "真正有價值的資產繼續推進；薄弱主張則在消耗下一輪資金前被修正或終止。",
      },
    ],
    independence: {
      kicker: "以制度確保獨立性",
      title: "我們不驗證自己開發的工作",
      lead: "每一項合作一開始就進入兩條不同路徑之一，並由防火牆分隔。這項分離，正是 Traustia 驗證值得向投資人展示的原因。",
      firewallLabel: "防火牆",
      firewallNote: "由開發工作區完成的工作，不得再由同一團隊進行獨立驗證。",
    },
    engagementModels: [
      {
        label: "模式 01",
        title: "嵌入式量化合作夥伴",
        role: "Traustia 協助設計或執行工作。",
        independence: "不得稱為獨立驗證",
        workspace: "開發工作區",
        responsibilities: [
          "試驗計畫與終點設計",
          "分析設計、執行與解釋",
          "CRO 交接前的就緒度工作",
        ],
      },
      {
        label: "模式 02",
        title: "獨立驗證合作夥伴",
        role: "Traustia 審查未由自身建立的工作。",
        independence: "可稱為獨立驗證",
        workspace: "獨立驗證工作區",
        responsibilities: [
          "不參與原始模型開發",
          "依凍結計畫重跑並進行完整性審查",
          "明確說明證據狀態、風險與主張界限",
        ],
      },
    ],
    ctaBand: {
      ariaLabel: "啟動審查",
      title: "您目前面對的是哪一項決策？",
      cta: "開始對話",
    },
    contact: {
      kicker: "從決策開始",
      title: "啟動審查",
      body: "募資、授權談判、主要資產的 go/no-go，或即將簽署的 CRO 合約。告訴我們即將做出的決策，以及目前證據的狀態；我們會說明最合適的審查、涵蓋範圍與所需條件。",
      service: "服務項目",
      selectReview: "選擇一項審查",
      notSure: "尚未確定",
      name: "姓名",
      workEmail: "工作電子郵件",
      organization: "機構",
      decisionQuestion: "決策與證據問題",
      placeholder: "即將做出什麼決策？哪些證據需要審查？",
      honeypot: "網站",
      disclaimer: "這會在您的電子郵件應用程式中準備一封郵件；本網站不會儲存任何內容。",
      button: "開始對話",
      status: "您的詢問郵件已準備完成。",
      subjectPrefix: "Traustia 服務詢問",
      emailLabels: {
        name: "姓名",
        email: "電子郵件",
        organization: "機構",
        service: "服務項目",
        notProvided: "未提供",
      },
    },
    footer: {
      tagline: "經得起檢驗的證據。",
      profileLabel: "創辦人名片",
      copyright: "© 2026 Traustia。保留所有權利。",
      disclaimer: "本公司提供驗證服務，不提供臨床營運、監管認證或法律意見。",
    },
  },
};
