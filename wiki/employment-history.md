# Employment History

**Summary**: Complete work history in reverse chronological order, with confirmed achievements drawn directly from source documents and flags for missing specifics.

**Sources**: `raw/industrial_cv_25/employment.tex`, `raw/Profile (2).pdf`, `raw/SENSOME_PR_RES_E_SEPERATE_241213_EN.pdf`, `raw/PR_INSPECT-ATS_260519_EN.pdf`

**Last updated**: 2026-05-27

---

## DESKi — Head of Research
**Jan 2026 – Present | Bordeaux / Remote, France**

DESKi builds AI-powered cardiac ultrasound guidance devices (Doppler, EF measurement, pediatric modules) for FDA (incl. PCCP) and CE MDR markets. (source: Job description - Head of Research - 2025 12.pdf)

**Confirmed achievements** (source: employment.tex, Interview PDF, Christos 2026-05-27):
- **Steering** AI/ML research direction for cardiac ultrasound (classification, segmentation, detection) — does not own the full pipeline (role started Jan 2026; careful wording required)
- Ensures research milestones stay aligned with FDA PCCP and CE MDR regulatory submission timelines
- Builds AI validation documentation and evidence packages as milestones are reached
- **Owned delivery of HF-VCOM** (AI-driven ultrasound image acquisition for echocardiography training in medical students): authored Statistical Analysis Report (SAR), produced analysis figures, tables, and slides; contributed to abstract submitted to OMED 2026 (Osteopathic Medical Education Conference) — 11th author; joined after data collection and image-processing analysis; authorship not claimed in CV
- Restructured cross-functional AI/ML-clinical-regulatory review meeting (no longer referred to by "KCR" acronym in CV), strengthening alignment and decision-making across functions
- Management cadence: 1-1s, team meetings, hands-on project management

**Confirmed team structure** (source: Christos, 2026-05-27): One Data Lead + two researchers (=3 total). Reports to CPO (Olivier Moal). Cross-functional with Head of Clinical Affairs and CMO/CEO (CRQO).

**[FILL: any model performance metric or regulatory milestone with a confirmed number — all other DESKi items now confirmed]**

---

## Sensome — Machine Learning Lead
**Nov 2024 – Jan 2026 | Paris, France**
*(End date adjusted from Feb 2026 to Jan 2026 on 2026-05-27 to eliminate apparent overlap with DESKi start date of 02/02/2026)*

Intravascular sensor company; impedance-based tissue classification for PAD and lung cancer. Clotild® Smart Guidewire System holds **FDA Breakthrough Device designation**. (source: employment.tex + `raw/SENSOME_PR_RES_E_SEPERATE_241213_EN.pdf`)

**Confirmed three full-cycle projects** (source: Christos, 2026-05-27; abstract documents, 2026-05-28):
1. **SEPARATE** (in-vivo PAD, 17 patients, AZ Sint Blasius, Belgium) — presented PVI 2024 + JET 2025
2. **E-SEPARATE** (ex-vivo PAD, 15 patients, Paris Saint-Joseph, France) — presented PVI 2024 + JET 2025
3. **INSPECT** (in-vivo lung cancer, **26 patients**, Australia + France) — presented ATS 2026

**Authorship across clinical presentations** (source: abstract documents — ground truth as of 2026-05-28):
- PVI 2024 SEPARATE: **First author** — Zacharopoulos, Lafaurie-Janvore, Cavalié, Schaub, Deloose. (source: `raw/PVI_SEPARATE_ABSTRACT_V241106.docx`)
- PVI 2024 E-SEPARATE: **First author** — Zacharopoulos, Messina, Cavalié, Bozsak, Adam, Doyle, Hauguel, Gouëffic. (source: `raw/PVI_E_SEPARATE_ABSTRACT_V241111-Final.docx`)
- JET 2025 SEPARATE: **First author** — same author list as PVI SEPARATE. (source: `raw/JET_SEPARATE_ABSTRACT_V241216_Christos.docx`)
- JET 2025 E-SEPARATE: **First author** — same author list as PVI E-SEPARATE. (source: `raw/JET_E_SEPARATE_ABSTRACT_V241215_Christos_AH.docx`)
- ATS 2026 INSPECT: **Third author**, ML analysis lead — Hanna, Bashirzadeh, Zacharopoulos, Cavalie, Schaub, Lafaurie, Crutu, Fielding. (source: `raw/ATS-Abstract-INSPECT-2026-final.docx`)

**Key results from abstract documents**:
- SEPARATE: 100% primary endpoint success (all 17 patients yielded usable impedance data); strong physician-model agreement
- E-SEPARATE: R²=0.79, Spearman=0.85, p<0.001 (ML predictions vs histology gold standard)
- INSPECT: 80.9%/88.5%/71.4% (healthy vs lesion); 78.7%/78.3%/79.2% (cancer vs all); learning curves r²=0.92 and r²=0.84

**Correction (2026-05-28)**: Prior authorship entries (2026-05-27) recorded PVI and JET as "third author, first technical" — incorrect. Abstract documents show Christos as first author on all four PAD abstracts. INSPECT patient count corrected from 27 to 26.

**Other confirmed achievements** (source: employment.tex + Christos, 2026-05-28):
- Automated the full ML pipeline from data ingestion through feature extraction to inference — eliminating manual steps and enabling repeatable, auditable runs across all three clinical projects.
- Developed uncertainty quantification (UQ) methods operating at two levels: (1) labelling time — calibrated confidence for annotated training data; (2) inference time — calibrated model confidence for each prediction. Directly relevant to high-risk clinical AI requirements (FDA, EU AI Act).
- Collaborated with Data Engineering team to establish code review and project management best practices, improving code quality and team efficiency.
- Communicated project findings to external stakeholders (CROs, clinicians) and the Scientific Advisory Board.

**Confirmed team structure** (source: Christos, 2026-05-26): Led a team of 3 data scientists. Reported to CEO and CIO. Cross-functional with a clinical team of 3.

**[FILL: pipeline performance improvement metrics, SAP-to-results timeline]**

---

## Sensome — Senior Data Scientist
**May 2023 – Nov 2024 | Paris, France**

(source: employment.tex)

**Confirmed achievements** (source: Christos, 2026-05-28):
- Designed a project-agnostic impedance feature set with a redundancy elimination step, producing signal representations reusable across clinical projects without rebuilding per study; this feature engineering work formed the foundation used in both PAD studies (SEPARATE, E-SEPARATE) and later INSPECT.
- Designed comprehensive labelling protocols spanning impedance measurements and digital pathology for both concurrent PAD trials.
- Built the foundational ETL and inference pipelines for SEPARATE and E-SEPARATE; results coordination and visualisation with clinical teams, CROs, and external stakeholders.
- Served as the primary analytical contact for the CLOTILD in-vivo PAD trial (SEPARATE), coordinating dissemination across clinical teams and stakeholders.
- Note: SEPARATE and E-SEPARATE were presented at PVI December 2024, during early ML Lead tenure; the data pipeline and feature engineering work was built during Senior DS.

**[FILL: data volumes, number of trial sites/patients]**

---

## Sama Therapeutics — Principal Machine Learning Engineer
**Jan 2023 – May 2023 | Boston, USA (remote)**

ML-based biomarkers for major psychiatric disorders (EEG, ECG, GSR biosignals). (source: employment.tex)

**Confirmed achievements**:
- Owned multimodal feature extraction (EEG, ECG, psychometrics) for the transprognostic algorithm across 10,000+ aggregated subjects (source: Christos user-confirmed 2026-05-28; poster lists modalities in [[source-sama-poster]]; supersedes prior EEG-only wording)
- Pipeline delivered TRIPOD Type 4 external validation (highest standard): nPPV 121–127%, AUC 60–80% across MDD, ADHD, OCD, PTSD — ranked #1 among dozens of teams in an international competition, outperforming state of the art by >50% (source: source-sama-poster, Sama website)
- Named co-author on conference poster presented at 6th Neuropsychiatric Drug Development Summit, Boston (source: sama poster PDF)
- Led a team of data scientists and engineers: project management, code reviews, result dissemination to Scientific Advisory Board, clients, and stakeholders
- Applied cognitive neuroscience and neuroimaging expertise to inform ML solutions for neurological diseases

**Confirmed team structure** (source: Christos, 2026-05-26): Led a team of 5 data scientists and engineers. Reported directly to CEO and CSO. Promoted from Senior ML Engineer within 6 months (Jul 2022 → Jan 2023).

---

## Sama Therapeutics — Senior Machine Learning Engineer
**Jul 2022 – Dec 2022 | Boston, USA (remote)**
*(Promoted to Principal ML Engineer Jan 2023; date corrected 2026-05-27 to eliminate overlap with Principal role)*

(source: employment.tex)

**Confirmed achievements**:
- Built biosignal ingestion infrastructure and owned multimodal feature extraction (EEG, ECG, psychometrics) underpinning the transprognostic algorithm (source: Christos user-confirmed 2026-05-28)
- Managed automated biosignal data collection and analysis (EEG, ECG, GSR) for over 12,000 subjects, enabling large-scale studies on patient well-being and treatment efficacy
- Key contributor to ETL, feature store, and inference pipeline development, optimising data flows for faster, more accurate analytics
- Supported experimental design and development of psychometric assessment metrics, aligning ML models with clinical research objectives
- Promoted to Principal Machine Learning Engineer on the strength of this work (source: reccomendation_Elias.pdf)

**[FILL: pipeline throughput improvements, computational efficiency gains]**

---

## CEA / NeuroSpin — Data Scientist | Researcher
**2018 – 2022 | Paris, France**

Unicog Lab, NeuroSpin. PhD research on language processing in neural and artificial systems. Supervisor: Prof. Stanislas Dehaene. (source: employment.tex, Profile (2).pdf)

**Confirmed achievements**:
- Designed and implemented two neuroimaging experiments (EEG & MEG) and one online behavioural study, enabling large-scale data collection across diverse participant cohorts
- Collaborated with USA-based partners to analyse intracranial (iEEG & ECoG) data, integrating multi-modal signals to investigate neural correlates of language processing
- Compared human and artificial (LSTM and Transformer-based) models of language comprehension, yielding novel insights into hierarchical and sequential computations
- Published findings in *Disentangling Hierarchical and Sequential Computations during Sentence Processing* (biorxiv)
- Collected and analysed 2 TB of heterogeneous data from diverse sources and formats (source: Profile (2).pdf)
- Coordinated with France and US teams via strategic planning and collaboration (source: Profile (2).pdf)

**[FILL: number of participants per study, computational scale]**

---

## INSERM — Data Scientist
**2017 – 2018 | Paris, France**

(source: employment.tex)

**Confirmed achievements**:
- Co-developed an intracranial data pipeline for automatic detection of pathological sensors/trials, reducing manual data-cleaning time and improving reliability across multiple hospitals
- Automated data integration and processing across multiple hospitals and experimental setups, ensuring standardised workflows and reproducible analytics
- Investigated high-dimensional data (112 GB) and enabled global collaboration with the USA (source: Profile (2).pdf)
- Analysed hippocampal events in intracranial datasets, supporting research on neurophysiological mechanisms of memory and cognition

---

## Donders Institute, Radboud University — Research Assistant | Data Scientist
**Sep 2016 – Oct 2017 | Nijmegen, Netherlands**

Centre for Cognitive Neuroimaging. (source: Profile (2).pdf)

**Confirmed achievements**:
- Analysed high-dimensional animal electrophysiological data using feature-space reconstruction and dimensionality reduction
- Developed a strategy for utilising ECG data to establish physiological biomarkers distinguishing between experimental conditions (22-subject dataset)
- Participated in acquisition and analysis of electrophysiological data during a pain-perception paradigm
- Contributed to scientific paper submissions; presented results orally

*Note: This role appears commented out in employment.tex — deliberately omitted from the industrial CV version.*

---

## Earlier Positions

**Aristotle University of Thessaloniki — Undergraduate Research Fellow, Medical Physics Laboratory**
Mar 2014 – Jan 2015 | Thessaloniki, Greece
- Collected and analysed behavioural and brain data on valence and arousal ratings for Greek adjectives across age groups (source: own-bib.bib, Profile (2).pdf)

**Alzheimer Hellas — Research Assistant**
Dec 2013 – Mar 2014 | Thessaloniki, Greece
- Preprocessed electrophysiological data from a cohort of 14 patients (source: Profile (2).pdf)

**Aristotle University of Thessaloniki — Teaching Assistant, Computer Science Laboratory**
Jan 2013 – Jun 2013 | Thessaloniki, Greece
- Teaching assistant, Physics department laboratory (source: Profile (2).pdf)

*All three of these roles are commented out in employment.tex — deliberately omitted from the industrial CV.*

---

## Related pages

- [[christos-zacharopoulos]]
- [[publications]]
- [[education]]
- [[manager-strengths]]
- [[target-roles]]
