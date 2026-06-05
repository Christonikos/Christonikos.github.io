/** Site metadata - wiki/christos-zacharopoulos.md */

export const site = {
  name: "Christos Zacharopoulos",
  credentials: "Ph.D.",
  title: "Clinical AI scientist",
  headline:
    "Clinical AI scientist for biosignals, medical imaging, and regulated deployment",
  thesis:
    "I build and validate machine-learning systems that turn complex biomedical signals into evidence for clinical and regulatory decisions across biosignals, imaging, and regulated deployment.",
  bridge:
    "NeuroSpin PhD; clinical ML at Sensome, Sama Therapeutics, and DESKi.",
  credentialsLine:
    "Ph.D. in cognitive neuroscience · Sorbonne University / NeuroSpin · supervised by Prof. Stanislas Dehaene",
  about: [
    "PhD-trained clinical AI scientist. I have led teams and delivered clinical ML across biosignals, medical imaging, psychiatric biomarkers, peripheral arterial disease, lung cancer, and cardiac care, with study design, statistical analysis plans, external validation, and regulatory-facing evidence for FDA and CE MDR pathways.",
    "Clinical roles at Sensome, Sama Therapeutics, and DESKi follow a NeuroSpin PhD in cognitive neuroscience.",
  ],
  collaboration: [
    "I work with clinical investigators, regulatory specialists, and ML engineers on catheter-lab studies, psychiatric trial cohorts, and cardiac imaging R&D. Recent clinical delivery spanned Belgium, Australia, and France (PAD and lung); psychiatric biomarker work drew on international trial cohorts (TD-Brain, EMBARC).",
    "Based in Paris. Career across Greece, the Netherlands, and France; comfortable with distributed teams, including remote collaboration with US partners. Conference outputs include PVI (Paris), JET OPEN (Osaka), and ATS (Orlando).",
  ],
  contactIntro:
    "For research leadership, regulated medical AI, collaborations, invited talks, or consulting, email with a subject line below (opens your mail client).",
  currentRole: "Head of Research, DESKi",
  location: "Paris, France",
  heroLocation:
    "Based in France · collaborating across Europe and North America",
  email: "christonik@gmail.com",
  headshot: "/christos-zacharopoulos-headshot.png",
  pageTitle:
    "Christos Zacharopoulos | Clinical AI Scientist | Biosignals, Neuroimaging, Medical ML",
  metaDescription:
    "Clinical AI scientist building and validating machine-learning systems across biosignals, neuroimaging, medical imaging, and regulated clinical-AI settings.",
  year: new Date().getFullYear(),
} as const;

export const contactInquiries = [
  {
    label: "Research or collaboration",
    subject: "Research collaboration inquiry",
  },
  {
    label: "Regulated medical AI / consulting",
    subject: "Consulting inquiry",
  },
  { label: "Speaking invitation", subject: "Speaking inquiry" },
  { label: "General inquiry", subject: "Website inquiry" },
] as const;

export function mailtoWithSubject(subject: string): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

export const links = {
  email: "mailto:christonik@gmail.com",
  linkedin: "https://linkedin.com/in/cnz",
  github: "https://github.com/Christonikos",
  scholar:
    "https://scholar.google.com/citations?hl=en&q=Christos+Zacharopoulos+NeuroSpin",
  cv: "/christos-zacharopoulos-cv.pdf",
  cvDownloadName: "christos-zacharopoulos-cv.pdf",
} as const;

export const profileStrip = [
  "Clinical AI · Medical ML",
  "FDA & CE MDR pathways",
  "Biosignals · Neuroimaging · Medical imaging",
  "France · Belgium · Australia · USA",
] as const;
