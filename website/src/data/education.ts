/** Education — wiki/education.md, raw/industrial_cv_25/education.tex */

export type EducationLink = {
  label: string;
  href: string;
};

export type EducationEntry = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  detail?: string;
  links?: EducationLink[];
};

export const education: EducationEntry[] = [
  {
    degree: "Ph.D. in Cognitive Neuroscience",
    institution: "Sorbonne University / NeuroSpin (Unicog Lab, CEA Paris-Saclay)",
    location: "Paris, France",
    period: "2018–2022",
    detail:
      "Thesis: On the dissociation of structural and linear operations in sentence processing. Supervisor: Prof. Stanislas Dehaene.",
    links: [
      { label: "Thesis record", href: "https://www.theses.fr/2022SORUS040" },
      { label: "NeuroSpin", href: "https://joliot.cea.fr/drf/joliot/Pages/Entites/NeuroSpin/neurospin.aspx" },
    ],
  },
  {
    degree: "Research Master (M2) in Cognitive Neuroscience",
    institution: "Donders Institute, Radboud University",
    location: "Nijmegen, Netherlands",
    period: "2015–2017",
    detail:
      "Thesis: Reconstructing the perceptual organization of sound from neural responses.",
    links: [
      {
        label: "Thesis",
        href: "https://theses.ubn.ru.nl/handle/123456789/7746",
      },
      { label: "Donders Institute", href: "https://www.donders.ru.nl/" },
    ],
  },
  {
    degree: "Ptychion (M1 equivalent) in Physics",
    institution: "Aristotle University of Thessaloniki",
    location: "Thessaloniki, Greece",
    period: "2010–2015",
    detail:
      "Specialisation: Analysis and applications of EEG: Theory & Practice.",
    links: [
      { label: "School of Physics", href: "https://www.physics.auth.gr/en/" },
    ],
  },
];
