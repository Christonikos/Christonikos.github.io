# Wiki Log — Append-Only

---

## 2026-05-28 — Website copy: seniority, de-emphasise employer names, Sama scope, EMNLP Singapore

**Trigger**: User feedback on homepage/work cards, collaboration text, and role scope.

**Website** (`website/src/data/site.ts`, `projects.ts`, `publications.ts`, subpages):
- Removed second About paragraph (employer list after PhD)
- Hero bridge: `Senior → Principal → Head of Research` (no employer name-dropping)
- Work cards: clinical-trial headline for bioimpedance; multimodal feature extraction at Sama; broader PhD title; abstract DESKi bullet (no HF-VCOM)
- Sama publication role: multimodal feature extraction lead
- EMNLP venue: Singapore
- Collaboration: removed EMBARC name (kept in wiki/poster metrics only; source: [[source-sama-poster]])

**Wiki**:
- `wiki/publications.md` — Sama contribution + EMNLP Singapore
- `wiki/employment-history.md` — Sama feature extraction scope (user-confirmed)
- `wiki/source-overleaf-emnlp-interference-2023.md` — Singapore venue

---

## 2026-05-28 — GitHub Pages: branch deploy only (no Actions)

**Trigger**: Live site stuck on old Actions artifact; Actions blocked by billing; user policy: always deploy from branch.

**Repo changes**:
- Removed `.github/workflows/deploy-website.yml`
- `website/scripts/deploy-github-pages.sh` — default repo remote; branch-only messaging
- `website/package.json` — `npm run deploy`
- `website/README.md` — deploy from `gh-pages` documented

**Pages settings (manual, one-time)**: Source = branch `gh-pages` / root (not GitHub Actions).

---

## 2026-05-28 — Website publications restructure + wiki sync

**Trigger**: Agreed four-domain taxonomy deployed to `website/src/data/publications.ts`; PAD venue rows merged; CV served from root `.docx` via `sync-cv-from-root.sh`.

**Pages created**:
- `wiki/website-publications-taxonomy.md` — domain/group IDs, PAD `alsoPresentedAt` rule, figures on live site, featured list

**Pages updated**:
- `wiki/publications.md` — reorganised by domain; website display section; JET-as-primary-venue note; Hellenic under earlier work
- `wiki/guidelines-for-graphical-abstracts.md` — live site status (no GA links in data); Hellenic domain ID correction
- `wiki/website-strategy.md` — publications and CV sections aligned with implementation
- `wiki/index.md` — new taxonomy row; updated publications / GA descriptions

**Superseded wiki IDs** (do not reuse on website): `neuroimaging-nlp`, `psychometrics-psychology`

---

## 2026-06-03 — Ingest: EMNLP interference camera-ready; IJCNLP clustering figure removed

**Source ingested**: `raw/Overleaf Projects (1 items) (2).zip` → `Interference_ACL_January_after_reviews.zip`

**Pages created**: `wiki/source-overleaf-emnlp-interference-2023.md`

**Pages updated**: `wiki/publications.md`, `wiki/index.md`, `wiki/guidelines-for-graphical-abstracts.md`, `wiki/source-overleaf-ijcnlp-personality-2025.md`

**Website**: Removed `ijcnlp-personality-clustering.png`; IJCNLP → temperature figure only; EMNLP → OSF link, summary from TeX, `emnlp-interference-design.png`

---

## 2026-06-03 — Ingest: Overleaf camera-ready (IJCNLP + AICS N400)

**Source ingested**: `raw/Overleaf Projects (2 items).zip` (nested: `Camera Ready LLM PERSONALITY.zip`, `in_machina_n4oo_ACIS2025_Camera_Ready.zip`)

**Pages created**:
- `wiki/source-overleaf-ijcnlp-personality-2025.md` — methods, Kruskal-Wallis / temperature results, OSF link
- `wiki/source-overleaf-in-machina-n400-aics-2025.md` — Phi-2 layer probes, layers 18–30 cluster, 1520 stimuli

**Pages updated**:
- `wiki/publications.md` — both 2025 first-author papers expanded from camera-ready (supersedes Scholar-only stubs)
- `wiki/index.md` — two source rows

**Website updated**:
- `website/src/data/publications.ts` — enriched summaries; OSF link on IJCNLP row; corresponding-author alignment

**Follow-up (same day)**:
- Camera-ready figures copied to `website/public/publications/` (IJCNLP ×2, N400 ×2)
- `Publication.figures[]` + `PublicationRow` multi-figure support
- Clustering PNG downscaled (disk space); temperature figure full resolution from paper

---

## 2026-06-03 — Hellenic valence: psychometrics domain + graphical abstract

**Changes**:
- New publication domain `psychometrics-psychology` on website (moved [[hellenic-affective]] out of neuroimaging-nlp)
- Graphical abstract: `website/public/publications/hellenic-valence-graphical-abstract.png`
- `wiki/guidelines-for-graphical-abstracts.md` — Hellenic section
- `wiki/publications.md` — section retitled Psychometrics & psychology

---

## 2026-06-03 — Ingest: Frontiers SAN2016 Hellenic valence abstract

**Source**: https://www.frontiersin.org/10.3389/conf.fnhum.2016.220.00102/event_abstract (cross-checked with `raw/industrial_cv_25/own-bib.bib`)

**Pages created**:
- `wiki/source-frontiers-san2016-hellenic-valence.md`

**Pages updated**:
- `wiki/publications.md` — expanded entry (SAN2016, n=84, key valence/arousal results, links)
- `wiki/index.md` — source table row

**Website updated**:
- `website/src/data/publications.ts` — new group `hellenic-affective`; publication row with Frontiers + DOI links

---

## 2026-06-03 — Sama transprognostic graphical abstract (website)

**Asset**: `website/public/publications/sama-transprognostic-graphical-abstract.png` (first version with EEG cap; user preference)

**Pages updated**:
- `website/src/data/publications.ts` — figure on 2022 Neuropsych Drug Dev Summit poster entry
- `wiki/guidelines-for-graphical-abstracts.md` — Sama transprognostic section

---

## 2026-06-03 — Graphical abstract guidelines (wiki)

**Trigger**: Website build session — SEPARATE, E-SEPARATE, and INSPECT graphical abstracts revised to a shared 4-step workflow.

**Pages created**:
- `wiki/guidelines-for-graphical-abstracts.md` — source fidelity, layout template, per-study content table, anti-patterns, asset paths, publish checklist

**Pages updated**:
- `wiki/index.md` — added [[guidelines-for-graphical-abstracts]] to concept pages

**No raw files ingested** (guidelines synthesise abstract sources and website assets already in wiki).

---

## 2026-06-03 — Twenty-fourth ingest: Cortex manuscript

**Source ingested**:
- `raw/transition_vs_structure_Zacharopoulos_et_al.zip` (Article.tex, figures, bib)

**Pages created**:
- `wiki/source-cortex-paper.md` — methods, results, authors, corrections vs prior Transformer/iEEG claims

**Pages updated**:
- `wiki/publications.md` — Cortex entry rewritten from manuscript (MEG/EEG n=22, LSTM model, structural-only human decoding)
- `wiki/index.md` — added [[source-cortex-paper]]

**Website updated** (same session):
- `website/src/data/publications.ts` — corrected Cortex copy; added figure asset
- `website/src/pages/neuroimaging-ml.astro`, `website/src/data/projects.ts` — corrected PhD/Cortex description
- `website/public/publications/cortex-meg-vs-lstm-decoding.png` — flagship figure

---

## 2026-05-29 — Twenty-third ingest: visual design brief + wireframe

**Sources ingested**:
- `raw/outputs/visual-design-clinical-ai-website-research.md`
- `raw/outputs/clinical-ai-website-visual-spec-and-wireframe.md`

**Pages created**:
- `wiki/source-website-visual-spec.md` — color system, typography spec, layout system, imagery rules, interaction design, full homepage wireframe (9 sections), supporting pages wireframe

**Pages updated**:
- `wiki/website-strategy.md` — added source references and link to [[source-website-visual-spec]]
- `wiki/index.md` — added row for [[source-website-visual-spec]]

---

## 2026-05-28 — Nineteenth–Twenty-second ingest: four website research briefs + architecture cleanup

**Sources ingested**:
- `raw/outputs/interdisciplinary-positioning-website-research.md`
- `raw/outputs/one-page-portfolio-from-dense-cv-research.md`
- `raw/outputs/senior-ai-personal-websites-benchmark.md`
- `raw/outputs/seniority-signals-website-research.md`
- `raw/outputs/personal-site-seo-discoverability-research.md`
- `raw/outputs/international-credibility-portfolio-research.md`

**Pages created**:
- `wiki/source-website-interdisciplinary.md` — 5 interdisciplinary positioning strategies, throughline Formula D, pillar grouping, 8 benchmark sites
- `wiki/source-website-one-page.md` — 5 project selection rules, what to remove/compress/move, academic vs industry language balance
- `wiki/source-website-benchmark.md` — 18-site benchmark table, 7 cross-site patterns, applicability analysis for Christos
- `wiki/source-website-seniority-seo.md` — seniority signals (3 tiers), SEO hybrid architecture, keyword hierarchy, title/meta, international credibility, 7 benchmark sites (consolidates 3 briefs)

**Pages updated**:
- `wiki/website-strategy.md` — added throughline narrative, SEO architecture, keyword hierarchy, title/meta, scope note; sources expanded to 11
- `website/.cursor/rules/website.mdc` — added core identity principle (throughline), project card template, SEO section (keyword hierarchy, title/meta, technical checklist)
- `wiki/index.md` — four new source entries

**Architecture cleanup**:
- Moved 4 remaining root-level `outputs/` files to `raw/outputs/` (international-credibility, seo-discoverability, benchmark, seniority-signals + provenance files)
- `outputs/` directory now empty (OS prevented rmdir; harmless)

---

## 2026-05-28 — Consolidate top-level outputs/ into raw/outputs/

**Action**: Moved 10 files from `/CV/outputs/` to `raw/outputs/`; removed empty top-level `outputs/` directory.

**Files moved**:
- `personal-portfolio-website-research.md` + `.provenance.md`
- `personal-website-first-impression-research.md` + `.provenance.md`
- `international-remote-credibility-website-research.md` + `.provenance.md`
- `interdisciplinary-positioning-website-research.md` + `.provenance.md`
- `one-page-portfolio-from-dense-cv-research.md` + `.provenance.md`

**Pages updated**:
- `CLAUDE.MD` — folder structure documents `raw/outputs/` and `raw/research/`; no top-level `outputs/`
- `wiki/index.md`, `wiki/website-strategy.md`, `wiki/source-website-*.md` — source paths updated
- `notes/portfolio-website-research-plan.md` — deliverable path corrected

**Rule**: All research artifacts land under `raw/`. Code dirs (`research/`, `website/`) store code only.

---

**Tooling**:
- Added `research/pyproject.toml` — installs `crawler` CLI from `research/scraper/`
- Ran 13 queries from `research/scraper/personal_portfolio_research_agent_prompts.md`
- Saved 30 articles to `raw/research/`
- State persisted in `research/scraper/state/`

**Pages created**:
- `wiki/source-portfolio-website-scraper-research.md` — synthesis mapped to all 10 research prompts; gaps and operational notes documented

**Pages updated**:
- `wiki/website-strategy.md` — added scraper-backed SEO notes, project card template, first-impression checklist; linked new source page
- `wiki/index.md` — new source entry

**Key findings**:
- Scraper validates one-page, own-domain, proof-first, English-only patterns already in wiki
- Generic portfolio-builder noise dominated several queries; clinical-AI-specific web guidance scarce in scraped set
- Existing benchmark sites in [[source-website-portfolio]] remain better reference set than scraper examples
- Interdisciplinary positioning gap not filled by scraper — pillar strategy unchanged

---

## 2026-05-28 — Sixteenth–Eighteenth ingest: three website research briefs

**Sources ingested**:
- `raw/outputs/personal-website-first-impression-research.md`
- `raw/outputs/personal-portfolio-website-research.md`
- `raw/outputs/international-remote-credibility-website-research.md`

**Pages created**:
- `wiki/source-website-first-impression.md` — 5-question homepage sequence, credibility marker tiering, 6 benchmark sites, mistakes list, positioning templates
- `wiki/source-website-portfolio.md` — 3 flagship pillars, 8 benchmark sites, 7-section structure, copywriting patterns, SEO (JSON-LD), testimonial recommendation, candidate-specific positioning hypothesis
- `wiki/source-website-remote-credibility.md` — geography wording principles, wording to avoid, trust signal tiering, 5 benchmark sites, design decision constraint recorded

**Pages updated**:
- `wiki/website-strategy.md` — added three flagship pillars; expanded benchmark sites to 8; added credibility marker priority; added testimonial recommendation; added remote/geography and SEO sections; updated sources
- `website/.cursor/rules/website.mdc` — added three flagship pillars; updated reference sites table; added credibility tier section; added copywriting patterns; added geography/remote constraint; added testimonial guidance; added SEO section
- `wiki/index.md` — three new source entries

**Key decisions recorded**:
- Three flagship pillars are the structural backbone of all site content
- Testimonial from Elias Mouchlianitis identified as strongest trust signal — pending Christos's permission to use publicly
- Geography: state location plainly as identity fact; no availability/timezone language

**Architecture note** (resolved 2026-05-28): website research briefs originally landed in top-level `outputs/`; migrated to `raw/outputs/`. See consolidation log entry above.

---

## 2026-05-28 — Fifteenth ingest: research.md (website-specific)

**Source ingested**: `raw/research.md`

**Pages created**:
- `wiki/source-website-research.md` — recruiter screening behaviour, remote trust signals, benchmark sites, homepage framework

**Pages updated**:
- `wiki/website-strategy.md` — reframed as identity page (not job-seeking signal); added tone constraint (no availability signals); added benchmark sites; added five-question homepage framework; updated sources
- `website/.cursor/rules/website.mdc` — same reframe and constraint; added homepage framework and reference sites section
- `wiki/index.md` — new source entry; updated website-strategy description

**Key decisions recorded**:
- Website leads with professional identity, not availability — no "open to work", no timezone/overlap language, no contractor notes
- Tone: a hiring manager who finds the site should feel they discovered someone serious, not someone broadcasting availability

---

## 2026-05-28 — Fourteenth ingest: next_carreer_steps.md

**Source ingested**: `raw/next_carreer_steps.md`

**Pages created**:
- `wiki/source-next-career-steps.md` — source summary
- `wiki/website-strategy.md` — website purpose, 6-section structure, content constraints
- `wiki/job-search-strategy.md` — geographic strategy (remote only, no relocation), seniority calibration, keywords, 12-month action plan
- `wiki/education-options.md` — Regulatory MSc (defensible/modular), MBA (not now), PhD (not recommended), targeted credentials

**Pages updated**:
- `wiki/christos-zacharopoulos.md` — added confirmed positioning statement, key message, headline options, core positioning paragraph, geographic constraint
- `wiki/target-roles.md` — added salary-oriented role ranking table, best-fit role families, role-title keywords for job board search
- `wiki/index.md` — new source entry; three new concept pages; updated descriptions for christos-zacharopoulos and target-roles

**Key new facts confirmed**:
- Canonical positioning: "Clinical AI / Medical Device AI leader who can build models, lead teams, generate clinical evidence, and support regulatory-grade validation."
- Geographic constraint: no relocation; open to fully remote
- France may underprice the profile — international/US-funded remote roles are the salary ceiling

---

## 2026-05-28 — Thirteenth update: TDBrain leaderboard + collaborators + multimodal + nPPV restoration

**New sources:**
- TDBrain Challenge Leaderboard (brainclinics.com/research/articles/tdbrain-challenge): Sama Therapeutics holds #1 and #2 positions (nPPV 127% ADHD, 123% MDD; both independently replicated). Defines nPPV as normalised PPV; threshold >110% = successful.
- CEO email (Shobi Ahmed, 11 Sept 2023): "we just won the TD-Brain challenge!!! Something I'm sure you'll be proud, since we did it with your EEG/ECG feature extraction pipeline!" — C-suite written attribution of challenge win to Christos's pipeline.

**CV changes (build.js):**
- Professional Summary: Added "Multimodal biosignal experience across EEG, ECG, GSR, and impedance signals" as second sentence.
- Selected Impact bullet 1: Rewritten to lead with TDBrain Challenge Leaderboard (nPPV 127%/123%, independently replicated), TRIPOD Type 4, 10,000+ subjects. Removed ">50% over SoTA" (harder to verify independently). Changed "EEG pipeline" to "EEG and ECG feature extraction pipeline."
- Sensome section: Added "Key clinical collaborators" line (small gray text) — Koen Deloose (SEPARATE), Gouëffic (E-SEPARATE), Hanna and Bashirzadeh (INSPECT). [FILL: first names of Gouëffic, Hanna, Bashirzadeh — only last names confirmed from abstracts]
- Sensome ML Lead delivery bullet: Added clinical study terminology — "in-vivo PAD clinical study," "ex-vivo PAD study," "first-in-human lung cancer study."
- Sama Principal ML Eng body bullet: Restored nPPV 127%/123% with TDBrain Challenge Leaderboard reference and independent replication note. Changed "EEG pipeline" to "EEG and ECG pipeline."
- Pre-flight em dash check passed. Clean build confirmed.

**Pending wiki updates:** `employment-history.md` and `publications.md` not yet updated with leaderboard/email details — to be done.

## 2026-05-28 — Twelfth update: technical contribution clarification + CV rebuild

**Changes:**
- `wiki/employment-history.md` (Sensome Senior DS): Replaced BigQuery/feature-store entry with confirmed technical contributions — project-agnostic impedance feature set, redundancy elimination step, labelling protocols spanning impedance and digital pathology. Removed "integrated into BigQuery" (technically inaccurate). (source: Christos, 2026-05-28)
- `wiki/employment-history.md` (Sensome ML Lead): Added confirmed UQ contributions — automated end-to-end ML pipeline (ingestion to inference); uncertainty quantification at labelling time and inference time; relevance to high-risk clinical AI (FDA, EU AI Act). (source: Christos, 2026-05-28)
- `cv-build/build.js`: Applied same two changes to CV; pre-flight em dash check passed (3 em dashes, all in education degree titles only); clean build confirmed.

## 2026-05-28 — Eleventh ingest + CV rebuild (5 clinical abstracts)

**Sources ingested:**
- `raw/PVI_SEPARATE_ABSTRACT_V241106.docx` (PVI 2024, SEPARATE, in-vivo PAD)
- `raw/PVI_E_SEPARATE_ABSTRACT_V241111-Final.docx` (PVI 2024, E-SEPARATE, ex-vivo PAD)
- `raw/JET_SEPARATE_ABSTRACT_V241216_Christos.docx` (JET 2025, SEPARATE, in-vivo PAD)
- `raw/JET_E_SEPARATE_ABSTRACT_V241215_Christos_AH.docx` (JET 2025, E-SEPARATE, ex-vivo PAD)
- `raw/ATS-Abstract-INSPECT-2026-final.docx` (ATS 2026, INSPECT, lung cancer)

**Pages created:**
- `wiki/source-abstract-separate-pvi.md`
- `wiki/source-abstract-e-separate-pvi.md`
- `wiki/source-abstract-separate-jet.md`
- `wiki/source-abstract-e-separate-jet.md`
- `wiki/source-abstract-inspect-ats.md`

**Pages updated:**
- `wiki/publications.md` — major authorship correction: PVI and JET PAD abstracts corrected from "third author" to first author; new sections for JET E-SEPARATE; INSPECT patient count corrected to 26; full author lists added; new metrics (SEPARATE 100% endpoint, E-SEPARATE R²=0.79, INSPECT learning curves r²=0.92/0.84)
- `wiki/employment-history.md` — authorship corrected for all four PAD abstracts; INSPECT patient count corrected; key result metrics added; both JET presentations now documented
- `wiki/index.md` — five new source entries; source-jet-program and source-inspect-pr descriptions updated to note authorship discrepancy

**CV rebuilt** (`christos-zacharopoulos-cv.docx`) with the following fixes:
- JET publication entry: "Third author" → "First author; ML analysis lead"
- INSPECT publication entry: "27 patients" → "26 patients"; "healthy vs abnormal" → "healthy vs lesion"
- Sensome ML Lead publications bullet: rewritten to reflect first authorship on four PAD abstracts (PVI 2024 + JET 2025) and third authorship on INSPECT; added key metrics (100% endpoint, R²=0.79)

**Errors corrected this session:**
- PVI 2024 authorship: prior session recorded "third author, first technical" based on user confirmation. Abstract documents are ground truth — Christos is first author on both PVI abstracts.
- JET 2025 authorship: prior session recorded "third author, first technical" based on JET programme PDF. Abstract documents show Christos as first author on both JET PAD abstracts.
- INSPECT patient count: press release said 27; final abstract says 26. Abstract is primary source.

---

## 2026-05-27 — Second CV review implementation + wiki update

**Source**: External structured CV review (second pass; same senior clinical AI research role audience)

**CV changes (build.js):**
- Added `coHead()` and `roleHead()` helper functions for consolidated multi-role company blocks
- Sensome restructured: single `coHead('Sensome', 'Paris, France', 'May 2023 – Jan 2026')` with nested `roleHead` for ML Lead (Nov 2024 – Jan 2026) and Senior Data Scientist (May 2023 – Nov 2024); company-level context line + role-level context lines
- Sama Therapeutics restructured: single `coHead('Sama Therapeutics', 'Boston, USA (remote)', 'Jul 2022 – May 2023')` with nested `roleHead` for Principal (Jan – May 2023) and Senior (Jul 2022 – Dec 2022)
- Selected Impact bullet 1: "internationally ranked biomarker algorithm" → "biomarker algorithm that ranked first in a blinded international competition among dozens of teams"
- Selected Impact bullet 2: "Lead development of" → "Lead the development of"
- DESKi ctx: "regulated under FDA PCCP and CE MDR" → "products developed under FDA and CE MDR regulatory pathways"
- DESKi bullet 1: "owning the full pipeline from protocol design through" → "owning the pipeline from protocol design to"
- KCR bullet: "improving alignment and decision cycles" → "improving cross-functional alignment and decision-making cycles"
- Sama poster pub: note shortened — removed ">50% outperforming" (duplicates experience section); new: "Third author; EEG pipeline lead. TRIPOD Type 4 external validation across 10,000+ subjects; algorithm ranked first in blinded international competition."

**Wiki changes:**
- `wiki/cv-writing-principles.md`: added section "Principles from external CV review (2026-05-27, second review)" — consolidated multi-role company blocks, vague "internationally ranked" fix, regulatory framing rule, publication note brevity rule; also corrected tense consistency note to "Lead the development of…"

**Outstanding (requires user input):**
- DESKi concrete measurable outcome: reviewer requested one bullet with a specific metric (model performance improvement, milestone, delivery timeline). No confirmed number exists. Flag: `[FILL: one concrete DESKi outcome with a metric — e.g. model accuracy, validation milestone date, or delivery timeline]`

---

## 2026-05-27 — CV review implementation + wiki update

**Source**: External structured CV review (senior clinical AI research roles)

**CV changes (build.js):**
- Headline simplified: mixed separators → all vertical bars; "Biosignal · Regulatory Strategy · Research Leadership" → "Medical Device AI | Biosignals | Regulatory Validation"
- Professional Summary: rewritten (shorter, 3 sentences, no "endorsed at C-suite level", matches suggested structure)
- Selected Impact: tense normalised (all past or action-present); h-index removed; metrics standardised; "technical-to-regulatory interface" replaced
- DESKi bullet 2: distinct from summary/selected impact (each version now adds different information)
- Sensome ML Lead date: Nov 2024 – Feb 2026 → Nov 2024 – Jan 2026 (eliminates apparent overlap with DESKi)
- Sama Senior date: Jul 2022 – Apr 2023 → Jul 2022 – Dec 2022 (promotion to Principal was Jan 2023; overlap was misleading)
- ATS 2026 / INSPECT: added "(analysis conducted at Sensome; presented post-departure)" to the experience bullet
- Global metric standardisation: "percent" → "%", "or more" → "+", "more than 50" → ">50%", "full cycle" → "full-cycle"
- Sama Principal bullets: 10,000+ and >50% and 121–127% and 60–80% standardised
- Sama Senior bullet: 10,000+ standardised
- Sama poster publication: >50% and 10,000+ standardised
- Skills and Certifications section removed; languages kept as single line under Education

**Wiki changes:**
- `wiki/cv-writing-principles.md`: added section "Principles from external CV review (2026-05-27)" — repetition rule, summary length, metric standardisation, date overlap rule, post-departure publications, headline format, skills section at senior level, publication brevity, central positioning statement, tense consistency
- `wiki/employment-history.md`: Sensome ML Lead and Sama Senior dates corrected with notes

---

## 2026-05-27 — Tenth ingest + CV rebuild

**Sources ingested:**
- `raw/PR_INSPECT-ATS_260519_EN.pdf` (Sensome INSPECT press release, ATS 2026)
- `raw/SENSOME_PR_RES_E_SEPERATE_241213_EN.pdf` (Sensome SEPARATE/E-SEPARATE press release, PVI 2024)

**Pages created:**
- `wiki/source-inspect-pr.md`
- `wiki/source-separate-pr.md`

**Pages updated:**
- `wiki/publications.md` — added INSPECT (ATS 2026) as new clinical abstract; corrected PVI 2024 entry: conference name (→ Paris Vascular Insights Course), authorship (→ third author, first technical, same pattern as JET); named both PVI studies (SEPARATE and E-SEPARATE)
- `wiki/employment-history.md` — Sensome ML Lead: named three full-cycle projects (SEPARATE, E-SEPARATE, INSPECT); corrected authorship claim; added FDA Breakthrough Device designation for Clotild®; Sensome Senior DS: named E-SEPARATE and SEPARATE/CLOTILD by proper study names
- `wiki/index.md` — two new source entries

**CV rebuilt** (`christos-zacharopoulos-cv.docx`) with the following fixes:
- **INSPECT added** to publications section (ATS 2026; third author; ML analysis lead; key metrics)
- **Sensome ML Lead publications bullet corrected**: removed "first-author" claim for PVI; rephrased to accurately reflect third author, first technical across SEPARATE, E-SEPARATE, and INSPECT
- **"Three full-cycle projects" bullet updated**: named SEPARATE, E-SEPARATE, and INSPECT explicitly
- **FDA Breakthrough Device designation added** to Sensome ML Lead scope context line
- **PVI conference name corrected** throughout: Paris Vascular Insights Course

**Errors corrected this session:**
- PVI 2024 authorship: "First-Author Abstract" (from employment.tex) was incorrect. User confirmed same pattern as JET: third author, first technical.
- PVI 2024 conference name: "Peripheral Vascular Interventions" was an incorrect expansion. Correct name is Paris Vascular Insights Course.
- PVI 2024 scope: was listed as one abstract; corrected to two distinct studies (SEPARATE in-vivo + E-SEPARATE ex-vivo).

---

## 2026-05-27 — Ninth ingest + CV rebuild

**Sources ingested:**
- `raw/JETOPEN-the_world_Oral_0401.pdf` (JET OPEN the world 2025 official oral presentation programme)

**Pages created:**
- `wiki/source-jet-program.md`

**Pages updated:**
- `wiki/publications.md` — corrected JET2025 entry: venue name (→ Japan Endovascular Treatment Conference), paper title (→ confirmed CLOTILD in-vivo title), authorship (→ third author; ML analysis lead); added correction note referencing [[source-jet-program]]
- `wiki/index.md` — new source entry for source-jet-program

**CV rebuilt** (`christos-zacharopoulos-cv.docx`) with the following fixes:
- **JET venue corrected**: "Journal of Endovascular Therapy (JET 2025)" → "Japan Endovascular Treatment Conference (JET OPEN the world 2025), Osaka"
- **JET title corrected**: approximate employment.tex title → confirmed programme title "In-vivo impedance identification of RBC-rich clot in peripheral arterial disease using the Clotild® Smart Guidewire System"
- **JET authorship corrected**: "First author" → "Third author; ML analysis lead"
- **Sensome ML Lead bullet corrected**: removed false "first author" claim for JET; rephrased to accurately reflect first-author PVI 2024 + third-author (ML analysis lead) JET 2025

**Errors corrected this session:**
- JET conference hallucination: "Journal of Endovascular Therapy" was an invented expansion of the abbreviation. Correct name is Japan Endovascular Treatment Conference.
- JET paper title: employment.tex had a generic approximate title; confirmed title from programme is specific to the CLOTILD in-vivo study.
- JET authorship: Christos is third author (ML analysis lead), not first author. First two authors are physicians who operated the Clotild® device on patients.

---

## 2026-05-26 — Eighth ingest + CV rebuild

**Sources ingested:**
- `raw/scholar.google.com-Christos Nikolaos Zacharopoulos - Google Scholar-fpscreenshot.jpeg`

**Pages created:**
- `wiki/source-google-scholar.md`

**Pages updated:**
- `wiki/publications.md` — corrected biorxiv authors (Zacharopoulos, Dehaene, Lakretz; removed incorrect Englitz attribution); added IJCNLP 2025 and arXiv 2511.18232 as new 2025 publications
- `wiki/index.md` — new source entry

**CV rebuilt** (`christos-zacharopoulos-cv.docx`) with the following fixes:
- **DESKi hallucination removed**: "Doppler, ejection fraction, and paediatric" module names replaced with "classification, segmentation, and detection" sourced directly from JD
- **biorxiv authors corrected**: from "Zacharopoulos & Englitz" to "Zacharopoulos, Dehaene, & Lakretz"
- **IJCNLP 2025 added** to publications section; PVI 2024 and Sama poster removed from publications (achievement covered in experience section)
- **Text justification**: AlignmentType.BOTH applied to all body paragraphs, context lines, skill lines, and publication entries
- **Citations format fixed**: new pub() helper renders venue names in italics; format is now "Authors (Year). Title. *Venue*. Notes."
- **All [FILL] items removed**: three remaining placeholders dropped by rewriting bullets without metric claims
- **Page count reduced**: Sama Senior compressed to 1 bullet; CEA to 2 bullets; INSERM to 1 bullet; spacing tightened throughout; 74 → 69 paragraphs

**Errors corrected this session:**
- Englitz/biorxiv conflation: Bert Englitz co-authored the unpublished MSc sound perception paper (2017), not the sentence processing biorxiv paper. Incorrectly attributed in initial ingest; corrected by Google Scholar source.
- DESKi module hallucination: specific module names (Doppler, EF, paediatric) were not confirmed by user and violated CLAUDE.MD source fidelity rule.

---

## 2026-05-26 — Seventh ingest

**Sources ingested:**
- User-provided inline reference: AI writing fingerprints guide (citing OpenAI, MIT Sloan, Washington Post, The Verge, arXiv 2501.15654v2)

**Pages created:**
- `wiki/source-ai-writing-patterns.md`

**Pages updated:**
- `wiki/cv-writing-principles.md` — added: AI writing fingerprints section (em dash as primary signal, not regular hyphens; vague intensifier list; ChatGPT vocabulary drift words; structural patterns to avoid)
- `wiki/index.md` — new source entry

**Key clarification from this ingest**: The hyphen-avoidance work from the previous session was focused on the wrong character. The primary AI fingerprint is the em dash (`—`), not regular hyphens. Compound adjectives ("senior-level", "end-to-end") are explicitly not flagged as AI signals by this source. The only em dashes in the current CV are in education degree titles — standard academic notation. The more actionable risk going forward is vague intensifiers ("robust," "transformative," etc.) and ChatGPT vocabulary drift words ("delve," "realm," etc.).

---

## 2026-05-26 — Sixth ingest

**Sources ingested:**
- `raw/le_chat.md` (senior AI/ML healthcare CV formatting guide — Le Chat synthesis)
- `raw/formatting_for_senior_not_executive,md` (senior non-executive CV guidance — cites Indeed, USC, MIT, UC Davis, FDA, NIST, EU AI Act)

**Pages created:**
- `wiki/source-le-chat-cv-format.md`
- `wiki/source-senior-cv-format.md`

**Pages updated:**
- `wiki/cv-writing-principles.md` — added: Selected Impact/Leadership Highlights block (pre-experience), scope context line per role, categorised skills grouping, bullet count per role, healthcare AI content signals, buzzword warning
- `wiki/index.md` — two new source entries

**Key new structural insight**: The **Selected Impact / Leadership Highlights block** (3–4 peak achievement bullets placed after the summary, before experience) is not currently in the CV. It is the most consequential addition proposed from this ingest. Candidates for the block are identified in cv-writing-principles.md.

---

## 2026-05-26 — Fifth ingest

**Sources ingested:**
- `raw/outputs/lead-head-cv-format.md` (formatting brief for lead/head CVs — 12 HTML sources, Stanford/Robert Half/Korn Ferry/Greenhouse/ATS vendors)
- `raw/outputs/lead-head-cv-format.provenance.md`

**Pages created:**
- `wiki/source-lead-head-cv-format.md`

**Pages updated:**
- `wiki/cv-writing-principles.md` — added: four-question recruiter scan, page length rule, compress-older-roles rule, ATS contact detail rule, pre-send formatting checklist, eight formatting mistakes
- `wiki/index.md` — new source entry

---

## 2026-05-26 — EMNLP paper correction

**Error corrected**: The wiki had the wrong EMNLP 2023 paper title ("Decoding Emergent Big Five Traits in Large Language Models…") — this was incorrectly inferred during ingestion of misc.tex/LinkedIn data.

**Confirmed correct entry** (source: paper header image provided by Christos):
- Title: "Assessing the influence of attractor-verb distance on grammatical agreement in humans and language models"
- Authors: Christos-Nikolaos Zacharopoulos (first), Théo Desbordes (Meta AI Research; NeuroSpin), Mathias Sablé-Meyer (NeuroSpin; Collège de France, PSL)
- Affiliations on paper: NeuroSpin + Sensome SAS

**Pages updated**: `wiki/publications.md` — corrected title, authors, and added correction note
**CV updated**: `christos-zacharopoulos-cv.docx` rebuilt with correct EMNLP entry

---

## 2026-05-26 — Fourth ingest

**Sources ingested:**
- `raw/reccomendation_Elias.pdf` (formal letter — Dr. Elias Mouchlianitis, CSO, Sama Therapeutics)
- `raw/2 Sama Therapeutics Clinical Presentation - 6th Neuropsych Drug Dev Summit Boston.pdf` (conference poster, 6th Neuropsych Drug Dev Summit, Boston)
- `raw/download (1).png` (Sama website screenshot — #1 ranking, >50% SoTA)

**Pages created:**
- `wiki/source-recommendation-elias.md`
- `wiki/source-sama-poster.md`

**Pages updated:**
- `wiki/testimonials.md` — added Elias Mouchlianitis (CSO) as top testimonial; count now 8
- `wiki/publications.md` — added Sama conference poster with TRIPOD Type 4 metrics and #1 ranking
- `wiki/manager-strengths.md` — added CSO-level strength confirmations from Elias letter
- `wiki/christos-zacharopoulos.md` — updated key differentiator #4 with #1 ranking and >50% SoTA; added differentiator #8 (dual C-suite endorsement); expanded manager-confirmed strengths
- `wiki/index.md` — two new source entries; manager-strengths description updated

---

## 2026-05-26 — Third ingest

**Sources ingested:**
- `raw/outputs/pharma-medtech-cv.md` (Head of R&D CV strategy — 15-source brief, Roche/Novartis/J&J/BD/Siemens)
- `raw/outputs/pharma-medtech-cv.provenance.md`

**Pages created:**
- `wiki/source-pharma-medtech-cv.md`

**Pages updated:**
- `wiki/cv-writing-principles.md` — added: pharma/medtech-specific principles, publications rule, "don't sound too academic" test, AI/digital signal, 5-part balance check
- `wiki/target-roles.md` — added: what top medtech employers specifically look for, employer-specific ATS notes
- `wiki/index.md` — new source entry

---

## 2026-05-26 — Second ingest

**Sources ingested:**
- `raw/outputs/high-paying-job-cv.md` (CV strategy for high-paying roles — 13-source research brief)
- `raw/outputs/high-paying-job-cv.provenance.md` (provenance and verification notes)

**Pages created:**
- `wiki/source-high-paying-job-cv.md`

**Pages updated:**
- `wiki/cv-writing-principles.md` — added: top-third rule, compensation logic check, enterprise framing, ATS rules
- `wiki/index.md` — new source entry
- `wiki/testimonials.md` — added Olivier Moal manager assessment as testimonial #1
- `wiki/source-manager-feedback.md` — added testimonials cross-reference

---

## 2026-05-26 — Initial ingest

**Sources ingested:**
- `raw/industrial_cv_25/` (LaTeX CV — employment.tex, education.tex, publications.tex, skills.tex, Training.tex, misc.tex, own-bib.bib)
- `raw/Profile (2).pdf` (LinkedIn profile export)
- `raw/linkedin.com-Christos Zacharopoulos PhD LinkedIn-fpscreenshot.jpeg` (LinkedIn recommendations screenshot)
- `raw/Interview - Trial Period Follow-Up - Christos ZACHAROPOULOS.pdf` (DESKi trial period review)
- `raw/Job description - Head of Research - 2025 12.pdf` (DESKi Head of Research JD)
- `raw/technical-leadership-cv.md` (CV methodology research brief)

**Pages created:**
- `wiki/index.md`
- `wiki/log.md`
- `wiki/source-industrial-cv.md`
- `wiki/source-linkedin-profile.md`
- `wiki/source-testimonials.md`
- `wiki/source-manager-feedback.md`
- `wiki/source-deski-jd.md`
- `wiki/source-cv-methodology.md`
- `wiki/christos-zacharopoulos.md`
- `wiki/employment-history.md`
- `wiki/education.md`
- `wiki/publications.md`
- `wiki/skills-and-certifications.md`
- `wiki/testimonials.md`
- `wiki/manager-strengths.md`
- `wiki/target-roles.md`
- `wiki/cv-writing-principles.md`
