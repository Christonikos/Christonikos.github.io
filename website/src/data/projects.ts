/** Selected work — wiki/employment-history.md */

export type WorkLink = {
  label: string;
  href: string;
};

export type WorkItem = {
  title: string;
  context: string;
  summary: string;
  tags: string[];
  bullets: string[];
  href?: string;
  hrefLabel?: string;
  links?: WorkLink[];
};

export const selectedWork: WorkItem[] = [
  {
    title: "Cardiac ultrasound AI under FDA and CE MDR",
    context: "Head of Research · DESKi",
    summary:
      "AI/ML for cardiac ultrasound classification, segmentation, and detection with regulatory milestones aligned to FDA PCCP and CE MDR timelines.",
    tags: ["Cardiac imaging", "FDA · CE MDR", "Team lead"],
    bullets: [
      "Lead a team of three; report to CPO; coordinate AI, clinical, and regulatory functions.",
      "Build validation documentation and evidence packages as research milestones complete.",
      "Owned HF-VCOM analysis and cross-functional AI–clinical–regulatory review cadence.",
    ],
    href: "/medical-device-ai/",
    hrefLabel: "Medical device AI",
    links: [
      { label: "HeartFocus (DESKi)", href: "https://www.heartfocus.ai/" },
    ],
  },
  {
    title: "Bioimpedance ML for PAD and lung tissue characterisation",
    context: "Machine Learning Lead · Sensome",
    summary:
      "ML pipelines for impedance-based tissue and clot characterisation across three full-cycle clinical studies.",
    tags: ["Bioimpedance", "Clinical validation", "R² = 0.79", "Australia · France"],
    bullets: [
      "PAD clot characterisation (SEPARATE / E-SEPARATE): first author; PVI 2024 and JET 2025.",
      "Lung biopsy tissue classification (INSPECT): ML analysis lead; first-in-human study, ATS 2026.",
      "Automated ingestion-to-inference pipelines with uncertainty quantification at labelling and inference.",
    ],
    href: "/biosignals/",
    hrefLabel: "Biosignal ML",
    links: [
      { label: "Sensome", href: "https://www.sensome.com/" },
      {
        label: "About the SEPARATE and E-SEPARATE studies (Vascular News)",
        href: "https://vascularnews.com/sensome-announces-data-from-two-studies-showing-clot-sensing-guidewire-successfully-identifies-fresh-clot-to-support-decision-making-in-pad-treatment/",
      },
    ],
  },
  {
    title: "Psychiatric biomarkers at scale",
    context: "Principal / Senior ML Engineer · Sama Therapeutics",
    summary:
      "Transprognostic multimodal algorithm predicting treatment response across MDD, ADHD, OCD, and PTSD.",
    tags: ["EEG · ECG · GSR", "TRIPOD Type 4", "12,000+ subjects", "#1 ranked"],
    bullets: [
      "Owned EEG pipeline; TRIPOD Type 4 external validation across four psychiatric indications.",
      "Managed automated biosignal collection and analysis for 12,000+ subjects.",
      "Algorithm ranked #1 in an international competition; validated across 10,000+ aggregated subjects.",
    ],
    href: "/biosignals/",
    hrefLabel: "Biosignal ML",
    links: [
      { label: "TDBRAIN challenge", href: "https://brainclinics.com/tdbrain-challenge/" },
    ],
  },
  {
    title: "Hierarchical vs sequential sentence processing",
    context: "PhD researcher · NeuroSpin / Sorbonne University",
    summary:
      "First-author Cortex paper: in human MEG/EEG, only structural effects decode above chance; an LSTM model also decodes transition and congruity.",
    tags: ["Cortex 2026", "EMNLP 2023", "MEG · EEG"],
    bullets: [
      "First author, Cortex (Elsevier): humans show decodable structural effects only; transition and congruity remain at chance.",
      "LSTM language model decodes structural, transition, and congruity effects.",
      "First author, EMNLP 2023 (top 14% of submissions): grammatical agreement in humans and language models.",
      "Co-authored with Meta AI, Collège de France, and ENS researchers.",
    ],
    href: "/neuroimaging-ml/",
    hrefLabel: "Cognitive neuroscience and language",
    links: [
      {
        label: "EMNLP 2023 paper",
        href: "https://aclanthology.org/2023.emnlp-main.998/",
      },
      {
        label: "Cortex (ScienceDirect)",
        href: "https://www.sciencedirect.com/science/article/abs/pii/S0010945226000456",
      },
      {
        label: "Intracranial pipeline (GitHub)",
        href: "https://github.com/Christonikos/intra_prep",
      },
      {
        label: "NeuroSpin",
        href: "https://joliot.cea.fr/drf/joliot/Pages/Entites/NeuroSpin/neurospin.aspx",
      },
    ],
  },
];
