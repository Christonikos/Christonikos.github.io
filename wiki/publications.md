# Publications

**Summary**: Published research spanning clinical AI on biosignals (Sensome PAD and lung, Sama psychiatric ML), cognitive neuroscience and language (Cortex, EMNLP), LLM evaluation (IJCNLP, Springer N400), and earlier psychometrics (Hellenic norms). Four first-author PAD abstracts (SEPARATE and E-SEPARATE; PVI 2024 and JET 2025); third-author ML lead on INSPECT (ATS 2026). Website taxonomy: [[website-publications-taxonomy]].

**Sources**: `raw/industrial_cv_25/own-bib.bib`, `raw/industrial_cv_25/misc.tex`, `raw/Profile (2).pdf`, `raw/2 Sama Therapeutics Clinical Presentation - 6th Neuropsych Drug Dev Summit Boston.pdf`, `raw/scholar.google.com-...-fpscreenshot.jpeg`, `raw/PR_INSPECT-ATS_260519_EN.pdf`, `raw/SENSOME_PR_RES_E_SEPERATE_241213_EN.pdf`, `raw/PVI_SEPARATE_ABSTRACT_V241106.docx`, `raw/PVI_E_SEPARATE_ABSTRACT_V241111-Final.docx`, `raw/JET_SEPARATE_ABSTRACT_V241216_Christos.docx`, `raw/JET_E_SEPARATE_ABSTRACT_V241215_Christos_AH.docx`, `raw/ATS-Abstract-INSPECT-2026-final.docx`, `raw/Overleaf Projects (1 items) (2).zip`, `raw/Overleaf Projects (2 items).zip`

**Last updated**: 2026-05-28

---

## Website display (christonikos.github.io)

Live structure matches [[website-publications-taxonomy]]:

1. **Clinical AI & biomedical signal validation** — PAD (SEPARATE, E-SEPARATE), INSPECT, Sama transprognostic poster  
2. **Cognitive neuroscience & language processing** — *Cortex* 2026, EMNLP 2023  
3. **Language-model evaluation & representation** — IJCNLP 2025, In Machina N400 (Springer AICS 2025)  
4. **Earlier work** — Hellenic valence/arousal norms (SAN2016)

**PAD on site:** two rows (SEPARATE, E-SEPARATE), JET 2025 as primary venue, PVI 2024 in `alsoPresentedAt` — not four separate venue rows.

**Figures on site:** paper figures only for Cortex, EMNLP, IJCNLP (temperature panel), and N400 (two panels). No graphical abstracts linked in `publications.ts` as of 2026-05-28 ([[guidelines-for-graphical-abstracts]]).

---

## Domain: Clinical AI & biomedical signal validation

### PVI 2024 / JET 2025 — PAD (SEPARATE & E-SEPARATE)

**Conference (first presentation)**: Paris Vascular Insights Course (PVI), December 13, 2024, Paris.
**Affiliation**: Sensome
(source: `raw/PVI_SEPARATE_ABSTRACT_V241106.docx`, `raw/PVI_E_SEPARATE_ABSTRACT_V241111-Final.docx`, `raw/SENSOME_PR_RES_E_SEPERATE_241213_EN.pdf`)

**SEPARATE study** (in-vivo, [[source-abstract-separate-pvi]]):
- Title: "In-vivo impedance identification of RBC-rich clot tissue in peripheral arterial disease: predictive modeling and clinical validation using the Clotild® Smart Guidewire System"
- Authors: **Zacharopoulos** (first), Lafaurie-Janvore, Cavalié, Schaub, Deloose (physician, last)
- 17 patients; AZ Sint Blasius Hospital, Belgium
- Primary endpoint: 100% success (all patients yielded usable lesion impedance data)
- Strong physician-model agreement; RBC-rich identification confirmed in all thrombolysis cases

**E-SEPARATE study** (ex-vivo, [[source-abstract-e-separate-pvi]]):
- Title: "Ex-vivo machine learning impedance analysis for thrombus analysis in patients with occlusive lower limb Peripheral Arterial Disease: towards improved diagnostic precision and treatment selection."
- Authors: **Zacharopoulos** (first), Messina, Cavalié, Bozsak, Adam, Doyle, Hauguel, Gouëffic (surgeon, last)
- 15 patients; Groupe Hospitalier Paris Saint-Joseph, France; N=6 thrombus subgroup analyzed
- R²=0.79, Spearman=0.85, p<0.001 (ML predictions vs histology gold standard)
- Finding: time of symptom onset alone does not reliably predict RBC content

**Correction note (2026-05-28)**: Prior entry (2026-05-27) incorrectly recorded both PVI abstracts as "third author, first technical" based on user confirmation at the time. The abstract documents (ground truth) show Christos as first author on both. Entry corrected accordingly.

### JET OPEN the world 2025 — same studies (website primary venue)

**Conference**: Japan Endovascular Treatment Conference (JET OPEN the world 2025), Osaka.
**Affiliation**: Sensome
(source: `raw/JET_SEPARATE_ABSTRACT_V241216_Christos.docx`, `raw/JET_E_SEPARATE_ABSTRACT_V241215_Christos_AH.docx`)

Same two studies as PVI 2024, reformatted for JET's "What's known / What's new" structure. The website lists JET as the main venue and PVI under prior presentation ([[website-publications-taxonomy]]).

**SEPARATE** ([[source-abstract-separate-jet]]):
- Title: "In-vivo impedance identification of RBC-rich clot in peripheral arterial disease using the Clotild® Smart Guidewire System"
- Authors: **Zacharopoulos** (first), Lafaurie-Janvore, Cavalié, Schaub, Deloose (last)
- Same results as PVI SEPARATE

**E-SEPARATE** ([[source-abstract-e-separate-jet]]):
- Title: "Ex-vivo machine learning impedance analysis for thrombus analysis in patients with occlusive lower limb Peripheral Arterial Disease"
- Authors: **Zacharopoulos** (first), Messina, Cavalié, Bozsak, Adam, Doyle, Hauguel, Gouëffic (last)
- Same results as PVI E-SEPARATE; R²=0.79 highlighted

**Correction note (2026-05-28)**: Prior entry recorded JET as "third author, first technical" based on the JET programme PDF (source: `raw/JETOPEN-the_world_Oral_0401.pdf`). The abstract documents are the ground truth — Christos is first author on both JET abstracts. Note: the JET programme may list the presenting physician's name differently from the abstract author order.

### ATS 2026 — Third-Author Clinical Abstract (ML Analysis Lead)

**Title**: "In situ lung tissue characterization using bioimpedance for tool-in-lesion confirmation during bronchoscopic biopsy of central and peripheral lesions: results from the first-in-human study INSPECT"
**Conference**: ATS 2026 International Conference (American Thoracic Society), May 2026, Orlando, USA
**Affiliation**: Sensome
(source: `raw/ATS-Abstract-INSPECT-2026-final.docx`, `raw/PR_INSPECT-ATS_260519_EN.pdf`)

**Authors**: Hanna (1st, Marie Lannelongue Hospital, France), Bashirzadeh (2nd, Royal Brisbane and Women's Hospital, Australia), **Zacharopoulos** (3rd, Sensome — ML analysis lead), Cavalie, Schaub, Lafaurie (Sensome), Crutu (Marie Lannelongue), Fielding (Royal Brisbane)

**Study details** ([[source-abstract-inspect-ats]]):
- First-in-human, single-arm; **26 patients**; Australia and France
- 80.9% accuracy (healthy vs lesion; sensitivity 88.5%, specificity 71.4%)
- 78.7% accuracy (cancer vs all tissue; sensitivity 78.3%, specificity 79.2%)
- Learning curves: r²=0.92 (cancer model), r²=0.84 (lesion model) — linear growth phase, projecting >90%
- No adverse events

**Correction note (2026-05-28)**: Patient count corrected from 27 to **26** (abstract document is the primary source; press release figure was slightly different).

### 6th Neuropsychiatric Drug Development Summit, Boston — Co-Author Poster
**"A Transprognostic Multimodal Algorithm Predicts MDD, ADHD, OCD, and PTSD Treatment Response in Clinical Trials"**
Affiliation: Sama Therapeutics, Inc. (source: Sama poster PDF)

Authors: Shobi Ahmed, Tyler Moore, **Christos-Nikolaos Zacharopoulos PhD**, Franz Hell, Elias Mouchlianitis, Kristel Carrington, Russell Hanson, Adam Teed, Alan Tucholka.

Key metrics: 10,000+ subjects aggregated; ~600 patients in primary analysis (TD-Brain + EMBARC); TRIPOD Type 4 external validation (highest standard); nPPV 121–127%, AUC 60–80% across diagnoses.

**Why this matters**: TRIPOD Type 4 is the highest standard for clinical prediction model reporting — equivalent to a properly externally validated model. Named PhD authorship at this level signals genuine scientific contribution, not a supporting role. The algorithm is independently described on the Sama website as ranking #1 in an international competition among dozens of teams, outperforming the state of the art by >50%. (source: `raw/download (1).png`)

**Christos's contribution**: Third author · multimodal feature extraction lead on the website (2026-05-28). **User-confirmed (2026-05-28)**: owned feature extraction across EEG, ECG, and psychometric modalities (supersedes earlier wiki wording limited to EEG pipeline only). Poster authorship position unchanged (third author). TRIPOD Type 4, #1 ranking, >50% SoTA per poster and Sama website (source: [[source-sama-poster]]).

---

## Domain: Cognitive neuroscience & language processing

### Cortex (2026) — "Disentangling Hierarchical and Sequential Computations during Sentence Processing"
(source: `raw/transition_vs_structure_Zacharopoulos_et_al.zip` / Article.tex; supersedes Google Scholar screenshot-only entry)

- Authors: **Christos-Nikolaos Zacharopoulos** (first, corresponding), Stanislas Dehaene, Yair Lakretz (corresponding)
- Published in *Cortex* (Elsevier), 2026. Journal: https://www.sciencedirect.com/science/article/abs/pii/S0010945226000456. Preprint: bioRxiv 2022.07.08.499161.
- **Methods**: Combined MEG + EEG (n=22; NeuroSpin n=15, ICM Paris n=7); RSVP sentence reading; structural vs transition agreement manipulated for grammatical number and animacy; compared to a two-layer **LSTM** language model (not Transformer in this paper).
- **Main result**: In human MEG/EEG, **only the structural effect is decodable**; transition and congruity decoding remain at chance. The LSTM model decodes structural, transition, and congruity effects. Sentence processing is dominated by structure-based computation and robust to local sequential effects.
- **Correction (2026-06-03)**: Prior wiki/website text incorrectly described Transformer comparison and iEEG/ECoG for this paper. Those modalities are not in this manuscript (source: Article.tex).

### EMNLP 2023 — Main-track paper
**"Assessing the influence of attractor-verb distance on grammatical agreement in humans and language models"**
(source: [[source-overleaf-emnlp-interference-2023]]; Anthology + arXiv corroborated)

- Venue: EMNLP 2023, Singapore (Empirical Methods in Natural Language Processing)
- Authors: **Christos-Nikolaos Zacharopoulos** (first), Théo Desbordes (Meta AI Research; NeuroSpin), Mathias Sablé-Meyer (NeuroSpin; Collège de France, Université PSL)
- Affiliations: Cognitive Neuroimaging Unit, NeuroSpin; Sensome SAS, Massy, France
- **Methods**: RSVP grammaticality task; n=34 after exclusions (54 recruited); proximal vs distal attractor; GPT-Neo-1.3B + JFLEG-fine-tuned T5
- **Results**: More errors when attractor is proximal (humans and NLMs); NLMs near chance on proximal trials; linear RT effect of distance in humans
- Links: [ACL Anthology](https://aclanthology.org/2023.emnlp-main.998/) · [arXiv:2311.16978](https://arxiv.org/abs/2311.16978) · [OSF](https://osf.io/d4g6k)

**Why this matters**: First-authored EMNLP paper with Meta AI and Collège de France co-authors; bridges human psycholinguistics and transformer LM evaluation; produced during Sensome employment.

---

## Domain: Language-model evaluation & representation

### IJCNLP 2025 — "Decoding Emergent Big Five Traits in Large Language Models: Temperature-Dependent Expression and Architectural Clustering"
(source: [[source-overleaf-ijcnlp-personality-2025]]; corroborated by Google Scholar screenshot)

- Authors: **Christos-Nikolaos Zacharopoulos** (first, corresponding), Revekka Kyriakoglou (Université Paris 8)
- Venue: Proceedings of the 14th International Joint Conference on Natural Language Processing (IJCNLP 2025)
- **Methods**: Six LLMs; BFI-2 (60 items); temperature 0–2 (step 1) → 21 conditions; Kruskal-Wallis, regression
- **Results**: Significant between-model differences on four Big Five traits (not Neuroticism); temperature modulates Neuroticism (R² = 0.35, r = -0.59) and Extraversion (R² = 0.25, r = 0.50)
- Links: [ACL Anthology](https://aclanthology.org/2025.findings-ijcnlp.104/) · [arXiv:2511.18232](https://arxiv.org/abs/2511.18232) · [OSF data/code](https://osf.io/bsvzc/?view_only=6672219bede24b4e875097426dc3fac1)
- **Website figure (2026-06-03)**: temperature-effects panel only; clustering figure removed from site.

### Springer CCIS 2025 — "In Machina N400: Pinpointing Where a Causal Language Model Detects Semantic Violations"
(source: [[source-overleaf-in-machina-n400-aics-2025]]; Google Scholar + Straive production email, 2026-05-26)

- Authors: **Christos-Nikolaos Zacharopoulos** (first, corresponding), Revekka Kyriakoglou
- arXiv:2511.19232
- **Peer-reviewed proceedings**: *Artificial Intelligence and Cognitive Science (AICS 2025)*, CCIS Vol. 2950, Springer. ISBN 978-3-032-25808-3.
- **Methods**: Phi-2; 1520 sentence pairs (760 plausible / 760 implausible); per-layer logistic decoding (AUC) + participation ratio
- **Main result**: Semantic violation decoding emerges mid-stack; layers **18–30** above chance (cluster permutation **p < 0.001**); early layers near chance; PR shows expansion then collapse
- Production email (Straive, 19 May 2026): accepted, proofs ~20 May 2026

---

## Domain: Earlier work

### "Valence, and arousal ratings for Hellenic words by young, middle-aged, and older adults"
Frontiers in Human Neuroscience (conference abstract); poster at **SAN2016 Meeting**, Corfu, Greece (6–9 Oct 2016). (source: [[source-frontiers-san2016-hellenic-valence]], `raw/industrial_cv_25/own-bib.bib`)

**Authors**: Styliadis, C., Vivas, A.B., **Zacharopoulos, C.** (third), Zilidou, V.I., Paraskevopoulos, E., Bamidis, P.D.

**Design**: Cross-sectional; n = 84 native Hellenic speakers (young / middle-aged / older); 120 words in HV, LV, and NV conditions.

**Key results**: Older adults gave higher valence ratings overall (5.01 vs 4.51 middle, 4.64 young); age × valence interactions across conditions; older adults higher arousal than young (6.18 vs 5.411). (source: Frontiers event abstract)

**Links**: [Frontiers abstract](https://www.frontiersin.org/10.3389/conf.fnhum.2016.220.00102/event_abstract) · DOI [10.3389/conf.fnhum.2016.220.00102](https://doi.org/10.3389/conf.fnhum.2016.220.00102)

---

## In Preparation (at time of LaTeX CV)

### "Reconstructing the perceptual organization of sound from neural responses"
Target journal: Journal of Neuroscience. (source: own-bib.bib)
Authors: **Zacharopoulos, C.** and Englitz, B.
Year: 2017

### "Effects of rTMS on emotional memory schemas acquired after mood induction and sleep"
Authors: Bovy, L., Tendolkar, I., Fernandez, G., Draxler, J., **Zacharopoulos, C.**, Dresler, M. (source: own-bib.bib)

*Note: These were listed as "in preparation" in the LaTeX CV bib file. Verification of current status needed.*
**[FILL: confirm whether these were eventually published or abandoned]**

---

## Related pages

- [[website-publications-taxonomy]]
- [[guidelines-for-graphical-abstracts]]
- [[website-strategy]]
- [[christos-zacharopoulos]]
- [[employment-history]]
- [[education]]
