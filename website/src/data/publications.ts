/** Publications - wiki/publications.md, raw/industrial_cv_25/misc.tex, employment.tex */

export type PublicationType =
  | "Peer-reviewed journal"
  | "Conference paper"
  | "Clinical abstract"
  | "Conference poster";

export type PublicationDomainId =
  | "clinical-ai-biosignals"
  | "cognitive-neuroscience-language"
  | "llm-evaluation"
  | "earlier-work";

export type PublicationGroupId =
  | "pad-clot"
  | "lung-inspect"
  | "psychiatric-biomarkers"
  | "neuroimaging-sentence"
  | "psycholinguistics"
  | "llm-evaluation"
  | "hellenic-affective";

export const publicationGroupDomain: Record<
  PublicationGroupId,
  PublicationDomainId
> = {
  "pad-clot": "clinical-ai-biosignals",
  "lung-inspect": "clinical-ai-biosignals",
  "psychiatric-biomarkers": "clinical-ai-biosignals",
  "neuroimaging-sentence": "cognitive-neuroscience-language",
  psycholinguistics: "cognitive-neuroscience-language",
  "llm-evaluation": "llm-evaluation",
  "hellenic-affective": "earlier-work",
};

export const publicationDomainMeta: Record<
  PublicationDomainId,
  { title: string; intro: string }
> = {
  "clinical-ai-biosignals": {
    title: "Clinical AI & biomedical signal validation",
    intro:
      "Clinically validated machine learning (ML) on biomedical signals: intravascular bioimpedance for peripheral arterial disease (PAD) and lung biopsy at Sensome, plus electroencephalography (EEG)-led psychiatric treatment-response work at Sama Therapeutics. Sensome study codes (SEPARATE, E-SEPARATE, INSPECT) are internal names; section headings describe the clinical question first.",
  },
  "cognitive-neuroscience-language": {
    title: "Cognitive neuroscience & language processing",
    intro:
      "Human neural and behavioural data during sentence processing, compared with computational models: NeuroSpin PhD work in *Cortex* (MEG/EEG decoding) and first-author EMNLP psycholinguistics with language model (LM) comparison.",
  },
  "llm-evaluation": {
    title: "Language-model evaluation & representation",
    intro:
      "Computational studies of large language model (LLM) behaviour and internal representations (no human neuroimaging): personality-trait expression and semantic-violation detection in causal LMs.",
  },
  "earlier-work": {
    title: "Earlier work",
    intro:
      "Earlier contributions before the clinical-AI and NeuroSpin research lines.",
  },
};

export const publicationDomainOrder: PublicationDomainId[] = [
  "clinical-ai-biosignals",
  "cognitive-neuroscience-language",
  "llm-evaluation",
  "earlier-work",
];

export type PublicationLink = {
  label: string;
  href: string;
};

export type PublicationFigure = {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
};

export type Publication = {
  year: number;
  title: string;
  venue: string;
  role: string;
  summary: string;
  /** Clinical / regulatory audience: phase and setting (sourced from abstracts) */
  studyPhase?: string;
  featured?: boolean;
  status?: "abstract";
  type?: PublicationType;
  alsoPresentedAt?: string[];
  group: PublicationGroupId;
  links?: PublicationLink[];
  /** Single figure (legacy) */
  figure?: PublicationFigure;
  /** Paper figures from camera-ready sources (preferred when multiple) */
  figures?: PublicationFigure[];
};

export const publicationGroupMeta: Record<
  PublicationGroupId,
  { title: string; tocLabel: string; intro: string }
> = {
  "pad-clot": {
    tocLabel:
      "Clot characterisation in peripheral arterial disease (SEPARATE / E-SEPARATE)",
    title:
      "Clot characterisation in peripheral arterial disease (SEPARATE / E-SEPARATE studies)",
    intro:
      "Peripheral arterial disease (PAD) clot characterisation with the Clotild® smart guidewire (Sensome). Bioimpedance targets red blood cell (RBC)-rich clot tissue. SEPARATE is the in-vivo clinical study; E-SEPARATE is the ex-vivo preclinical validation against histology.",
  },
  "lung-inspect": {
    tocLabel:
      "Lung tissue classification during bronchoscopic biopsy (INSPECT)",
    title:
      "Lung tissue classification during bronchoscopic biopsy (INSPECT study)",
    intro:
      "Tool-in-lesion confirmation during bronchoscopic lung biopsy (central and peripheral lesions). The INSPECT study (Sensome) is a first-in-human evaluation of bioimpedance on a bronchoscopy stylet.",
  },
  "psychiatric-biomarkers": {
    tocLabel: "Psychiatric treatment-response from EEG biomarkers (Sama)",
    title:
      "Psychiatric treatment-response prediction from EEG biomarkers (Sama Therapeutics)",
    intro:
      "Transprognostic multimodal model across major depressive disorder (MDD), attention-deficit/hyperactivity disorder (ADHD), obsessive-compulsive disorder (OCD), and post-traumatic stress disorder (PTSD), with Transparent Reporting of a multivariable prediction model for Individual Prognosis Or Diagnosis (TRIPOD) Type 4 external validation. Christos led the electroencephalography (EEG) pipeline.",
  },
  "neuroimaging-sentence": {
    tocLabel: "Cortex: M/EEG vs LSTM",
    title: "Hierarchical vs sequential sentence processing (*Cortex*)",
    intro:
      "PhD work at NeuroSpin / Sorbonne University. In human MEG/EEG, only structural (hierarchical) effects decode above chance; transition and congruity do not. Compared to a two-layer long short-term memory (LSTM) language model that decodes all three.",
  },
  psycholinguistics: {
    tocLabel: "Grammatical agreement (EMNLP 2023)",
    title: "Psycholinguistics and computational modelling",
    intro:
      "Human grammatical agreement versus language models (LMs). First-author EMNLP 2023 paper (Empirical Methods in Natural Language Processing) with Meta AI and NeuroSpin co-authors.",
  },
  "llm-evaluation": {
    tocLabel: "LLM evaluation (IJCNLP, Springer)",
    title: "LLM evaluation and representation analysis",
    intro:
      "Personality-trait probing and layer-wise semantic-violation decoding in causal language models.",
  },
  "hellenic-affective": {
    tocLabel: "Hellenic word norms (SAN2016)",
    title: "Valence and arousal ratings for Hellenic words",
    intro:
      "Cross-sectional psychometrics (Aristotle University of Thessaloniki): valence and arousal norms across the adult lifespan.",
  },
};

export const publicationGroupOrder: PublicationGroupId[] = [
  "pad-clot",
  "lung-inspect",
  "psychiatric-biomarkers",
  "neuroimaging-sentence",
  "psycholinguistics",
  "llm-evaluation",
  "hellenic-affective",
];

export const publications: Publication[] = [
  {
    year: 2025,
    title:
      "In-vivo identification of RBC-rich clot in peripheral arterial disease (SEPARATE study)",
    venue: "JET OPEN the world 2025, Osaka",
    role: "First author",
    studyPhase: "Clinical · in-vivo",
    summary:
      "In-vivo clinical validation (n = 17); 100% primary endpoint success for lesion impedance data. Red blood cell (RBC)-rich clot identification in peripheral arterial disease (PAD).",
    featured: true,
    type: "Clinical abstract",
    alsoPresentedAt: [
      "Paris Vascular Insights (PVI) 2024, Paris",
    ],
    group: "pad-clot",
    links: [
      {
        label: "About the SEPARATE and E-SEPARATE studies (Vascular News)",
        href: "https://vascularnews.com/sensome-announces-data-from-two-studies-showing-clot-sensing-guidewire-successfully-identifies-fresh-clot-to-support-decision-making-in-pad-treatment/",
      },
      { label: "Sensome", href: "https://www.sensome.com/" },
    ],
  },
  {
    year: 2025,
    title:
      "Ex-vivo thrombus analysis in PAD versus histology (E-SEPARATE study)",
    venue: "JET OPEN the world 2025, Osaka",
    role: "First author",
    studyPhase: "Preclinical · ex-vivo",
    summary:
      "Ex-vivo machine learning (ML) versus histology gold standard (n = 15); coefficient of determination R² = 0.79 in peripheral arterial disease (PAD).",
    featured: true,
    type: "Clinical abstract",
    alsoPresentedAt: [
      "Paris Vascular Insights (PVI) 2024, Paris",
    ],
    group: "pad-clot",
    links: [
      {
        label: "About the SEPARATE and E-SEPARATE studies (Vascular News)",
        href: "https://vascularnews.com/sensome-announces-data-from-two-studies-showing-clot-sensing-guidewire-successfully-identifies-fresh-clot-to-support-decision-making-in-pad-treatment/",
      },
      { label: "Sensome", href: "https://www.sensome.com/" },
    ],
  },
  {
    year: 2026,
    title:
      "In situ lung tissue characterisation during bronchoscopic biopsy (INSPECT study)",
    venue: "American Thoracic Society (ATS) 2026 International Conference",
    role: "Third author · ML analysis lead",
    studyPhase: "Clinical · first-in-human",
    summary:
      "Machine learning (ML) tissue classification during bronchoscopic lung biopsy; 26 patients across Australia and France.",
    featured: true,
    status: "abstract",
    type: "Clinical abstract",
    group: "lung-inspect",
    links: [
      { label: "Sensome", href: "https://www.sensome.com/" },
      {
        label: "About the INSPECT study (press release)",
        href: "https://www.sensome.com/docs/news/SENSOME_PR_INSPECT_250527_EN.pdf",
      },
    ],
  },
  {
    year: 2022,
    title:
      "Transprognostic treatment-response prediction across depression, ADHD, OCD, and PTSD",
    venue: "6th Neuropsychiatric Drug Development Summit, Boston",
    role: "Third author · EEG pipeline lead",
    studyPhase: "Clinical · TRIPOD Type 4 validation",
    summary:
      "Multimodal model for major depressive disorder (MDD), attention-deficit/hyperactivity disorder (ADHD), obsessive-compulsive disorder (OCD), and post-traumatic stress disorder (PTSD); ranked first in the TDBRAIN international competition.",
    type: "Conference poster",
    group: "psychiatric-biomarkers",
    links: [
      {
        label: "TDBRAIN challenge",
        href: "https://brainclinics.com/tdbrain-challenge/",
      },
    ],
  },
  {
    year: 2026,
    title:
      "Disentangling Hierarchical and Sequential Computations during Sentence Processing",
    venue: "Cortex (Elsevier)",
    role: "First author · corresponding author",
    summary:
      "n=22; MEG and EEG during sentence reading. Main result: only the structural effect is decodable in humans; transition and congruity stay at chance. The LSTM model decodes structural, transition, and congruity effects.",
    featured: true,
    type: "Peer-reviewed journal",
    group: "neuroimaging-sentence",
    figure: {
      src: "/publications/cortex-meg-vs-lstm-decoding.png",
      alt: "Decoding plots comparing human MEG data and an LSTM language model for grammatical number and animacy during sentence reading",
      caption:
        "Human MEG/EEG (left): structural effect only (transition and congruity at chance). LSTM model (right): all three effects decodable. Zacharopoulos, Dehaene, Lakretz, Cortex 2026.",
    },
    links: [
      {
        label: "Journal (ScienceDirect)",
        href: "https://www.sciencedirect.com/science/article/abs/pii/S0010945226000456",
      },
      {
        label: "Preprint (bioRxiv)",
        href: "https://www.biorxiv.org/content/10.1101/2022.07.08.499161v3",
      },
    ],
  },
  {
    year: 2023,
    title:
      "Assessing the influence of attractor-verb distance on grammatical agreement in humans and language models",
    venue: "EMNLP 2023 (Empirical Methods in Natural Language Processing)",
    role: "First author",
    summary:
      "RSVP agreement task (n=34): humans and NLMs err more with proximal attractors; linear RT effect of distance; GPT-Neo-1.3B and grammar-corrected T5 compared to humans.",
    featured: true,
    type: "Conference paper",
    group: "psycholinguistics",
    figure: {
      src: "/publications/emnlp-interference-results.png",
      alt: "Error rate and response time for humans, GPT-3, and T5 across baseline, distal, and proximal attractor conditions",
      caption:
        "Human and NLM error rate and response time by attractor distance and grammaticality (from paper; fig. 2).",
      width: 732,
      height: 746,
    },
    links: [
      {
        label: "Paper (ACL Anthology)",
        href: "https://aclanthology.org/2023.emnlp-main.998/",
      },
      { label: "Preprint (arXiv)", href: "https://arxiv.org/abs/2311.16978" },
      {
        label: "Data & analyses (OSF)",
        href: "https://osf.io/d4g6k",
      },
    ],
  },
  {
    year: 2025,
    title:
      "Decoding Emergent Big Five Traits in Large Language Models: Temperature-Dependent Expression and Architectural Clustering",
    venue: "IJCNLP 2025 (International Joint Conference on Natural Language Processing)",
    role: "First author · corresponding author",
    summary:
      "Six LLMs, BFI-2, temperature 0–2: four traits differ across models; Neuroticism and Extraversion track temperature (R² = 0.35 / 0.25).",
    type: "Conference paper",
    group: "llm-evaluation",
    figure: {
      src: "/publications/ijcnlp-personality-temperature-effects.png",
      alt: "Effects of sampling temperature on Big Five personality trait scores across six large language models",
      caption:
        "Temperature effects on trait expression (from paper). Neuroticism and Extraversion are most sensitive to sampling temperature.",
      width: 5970,
      height: 1275,
    },
    links: [
      {
        label: "Paper (ACL Anthology)",
        href: "https://aclanthology.org/2025.findings-ijcnlp.104/",
      },
      { label: "Preprint (arXiv)", href: "https://arxiv.org/abs/2511.18232" },
      {
        label: "Data & code (OSF)",
        href: "https://osf.io/bsvzc/?view_only=6672219bede24b4e875097426dc3fac1",
      },
    ],
  },
  {
    year: 2025,
    title:
      "In Machina N400: Pinpointing Where a Causal Language Model Detects Semantic Violations",
    venue: "Springer CCIS / AICS 2025",
    role: "First author · corresponding author",
    summary:
      "Phi-2, 1520 sentence pairs: per-layer AUC shows semantic violations decoded in layers 18–30 (cluster p < 0.001); early layers at chance; participation ratio expansion then collapse.",
    type: "Conference paper",
    group: "llm-evaluation",
    figures: [
      {
        src: "/publications/in-machina-n400-auc-layers.png",
        alt: "Layer-wise ROC-AUC for decoding plausible versus implausible sentence endings in Phi-2",
        caption:
          "Mean ROC-AUC by layer; grey band marks layers 18–30 above chance after cluster permutation (p < 0.001).",
        width: 1037,
        height: 773,
      },
      {
        src: "/publications/in-machina-n400-participation-ratio.png",
        alt: "Participation ratio across Phi-2 layers for violation versus control sentences",
        caption:
          "Participation ratio by layer: early expansion for violations, mid-stack convergence, later compression (from paper).",
        width: 1050,
        height: 1200,
      },
    ],
    links: [
      { label: "Preprint (arXiv)", href: "https://arxiv.org/abs/2511.19232" },
    ],
  },
  {
    year: 2016,
    title:
      "Valence, and arousal ratings for Hellenic words by young, middle-aged, and older adults",
    venue:
      "SAN2016 Meeting, Corfu · Frontiers in Human Neuroscience (conference abstract)",
    role: "Third author",
    summary:
      "Cross-sectional study (n = 84): older adults rated Hellenic words more positively and with higher arousal than younger groups; age-by-valence interactions across pleasant, neutral, and unpleasant word sets.",
    type: "Conference abstract",
    group: "hellenic-affective",
    links: [
      {
        label: "Abstract (Frontiers)",
        href: "https://www.frontiersin.org/10.3389/conf.fnhum.2016.220.00102/event_abstract",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.3389/conf.fnhum.2016.220.00102",
      },
    ],
  },
];

export const featuredPublications = publications.filter((p) => p.featured);

export type PublicationGroup = {
  id: PublicationGroupId;
  domain: PublicationDomainId;
  title: string;
  tocLabel: string;
  intro: string;
  items: Publication[];
};

export const publicationGroups: PublicationGroup[] = publicationGroupOrder
  .map((id) => {
    const items = publications.filter((p) => p.group === id);
    if (items.length === 0) return null;
    const meta = publicationGroupMeta[id];
    return {
      id,
      domain: publicationGroupDomain[id],
      title: meta.title,
      tocLabel: meta.tocLabel,
      intro: meta.intro,
      items,
    };
  })
  .filter((g): g is PublicationGroup => g !== null);

export type PublicationDomain = {
  id: PublicationDomainId;
  title: string;
  intro: string;
  groups: PublicationGroup[];
};

export const publicationDomains: PublicationDomain[] =
  publicationDomainOrder.map((domainId) => {
    const meta = publicationDomainMeta[domainId];
    const groups = publicationGroups.filter((g) => g.domain === domainId);
    return {
      id: domainId,
      title: meta.title,
      intro: meta.intro,
      groups,
    };
  });
