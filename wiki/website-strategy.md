# Website Strategy

**Summary**: Strategic purpose, structure, and content guidelines for Christos's personal website, derived from career positioning analysis and the remote/international job-search context.

**Sources**: `raw/next_carreer_steps.md`, `raw/research.md`, `raw/outputs/personal-website-first-impression-research.md`, `raw/outputs/personal-portfolio-website-research.md`, `raw/outputs/international-remote-credibility-website-research.md`, `raw/outputs/interdisciplinary-positioning-website-research.md`, `raw/outputs/one-page-portfolio-from-dense-cv-research.md`, `outputs/senior-ai-personal-websites-benchmark.md`, `outputs/seniority-signals-website-research.md`, `outputs/personal-site-seo-discoverability-research.md`, `outputs/international-credibility-portfolio-research.md`, `raw/outputs/visual-design-clinical-ai-website-research.md`, `raw/outputs/clinical-ai-website-visual-spec-and-wireframe.md`

**Last updated**: 2026-05-28 (branch deploy policy)

---

## Strategic purpose

The website is a **professional identity page**, not a job-seeking signal. It leads with who Christos is and what he has built. A hiring manager who finds it should feel they discovered someone serious — not someone broadcasting availability.

It serves three functions:

1. **Trust page** — online signals can override strong credentials (2025 experimental study, n=480 hiring decision-makers). A structured, credible site reduces recruiter uncertainty before any contact is made.
2. **Narrative compression** — converts a cross-disciplinary career (neuroimaging, PAD, lung oncology, NLP, biosignals) from density into a coherent story: *this person has repeatedly applied rigorous ML to hard clinical problems across different domains.*
3. **Inbound surface** — makes Christos findable by recruiters searching for "clinical AI", "biosignals", "regulated ML", "SEPARATE", "INSPECT", etc. 57% of employers are less likely to call a candidate they cannot find online (CareerBuilder).

**Core test**: answers in 30 seconds — *"Who are you, and why are you credible in clinical AI / regulated medical-device AI?"*

**Tone constraint**: no "open to work" signals, no availability language, no timezone/overlap framing. Identity first.

---

## Recommended structure (6 sections, one-pager)

### 1. Homepage
- One-sentence positioning
- Example: "Clinical AI research leader building and validating machine-learning systems for regulated medical environments."

### 2. Selected impact
- Clinical ML systems
- Biosignals and medical imaging
- External validation
- Regulatory-facing evidence
- Team leadership
- Selected publications

### 3. Projects
- Only public, non-confidential descriptions
- Medical-device AI (Sensome, DESKi)
- Biosignals
- Medical imaging
- Language, neuroscience, and LLMs

### 4. Publications
Implemented at `/publications/` with four domains (clinical first). Details: [[website-publications-taxonomy]].

- **Clinical AI & biosignals**: SEPARATE, E-SEPARATE (JET 2025 + PVI 2024 noted), INSPECT (ATS 2026), Sama transprognostic poster
- **Cognitive neuroscience & language**: *Cortex* 2026, EMNLP 2023
- **LLM evaluation**: IJCNLP 2025, In Machina N400 (Springer AICS 2025)
- **Earlier work**: Hellenic valence norms (SAN2016)
- Paper figures on featured neuroscience/LLM rows; no graphical abstracts linked in data as of 2026-05-28
- Links to Google Scholar (in site footer/nav)

### 5. CV
- Download from site root source: `christos-zacharopoulos-cv.docx` at repo root → `website/scripts/sync-cv-from-root.sh` → `website/public/`
- Prefer PDF when available: export `christos-zacharopoulos-cv.pdf` to repo root, run sync script, set `links.cv` in `website/src/data/site.ts` to `.pdf`
- Live site (2026-05-28): serves DOCX until PDF is exported

### 6. Contact
- Email
- LinkedIn
- GitHub

---

## Content constraints

Do NOT include:
- Confidential clinical data
- Proprietary pipelines or internal metrics
- Internal regulatory documents
- Unpublished company metrics
- Company-owned IP

---

## Core identity principle

Do not present domains symmetrically. Organise around a **throughline**, not a list.

**Throughline for Christos** (Formula D from `raw/outputs/interdisciplinary-positioning-website-research.md`):
> From neuroscience and neuroimaging to medical-device ML and clinical AI, the throughline in my work has been turning complex biomedical signals into systems that support real decisions.

The diversity (neuroimaging, PAD, lung oncology, NLP, biosignals) should read as **compounding depth**, not scattered curiosity.

---

## Three flagship credibility pillars

All content should map to one of these three pillars (source: `raw/outputs/personal-portfolio-website-research.md`):

1. **Regulated clinical AI leadership** — DESKi: medical imaging AI, FDA PCCP, CE MDR, team leadership
2. **Medical device / biosignal ML translation** — Sensome + Sama: biosignals, clinical data, distributed collaboration, published clinical results
3. **Deep research base in neuroscience, neuroimaging, and language** — CEA/NeuroSpin PhD, EMNLP 2023, Cortex 2026: depth that prevents a narrow startup-only read

---

## Benchmark sites worth studying

Closest profile matches:
- **Matthew Nour** (matthewnour.com) — dual clinical + computational identity; closest overall match
- **Emily Alsentzer** (emilyalsentzer.com) — clinical ML + NLP; healthcare problem framed; safety/deployment bridge
- **Nils Eckstein** (nilseckstein.com) — minimal: field owned, current role, flagship achievement
- **David Stutz** (davidstutz.de) — outcome-first: employer, shipped products, named projects
- **Marcella Montagnese** (marcellamontagnese.com) — institutional strip + translational trust signals
- **Eugene Yan** (eugeneyan.com) — practitioner voice; quantified wins; strong testimonials
- **Alan Akbik** (alanakbik.github.io) — "recent updates" section shows momentum
- **Carlos Justiniano** (cjus.dev) — geography as operational fact, not apology

## Homepage structure — five questions above the fold

1. Who you are
2. What niche you own
3. Why you are credible
4. What proof to click first
5. How to contact you

## Credibility marker priority (Tier 1)

These must be immediately visible — they compress seniority fastest:
- Recognisable employers and institutions
- Concrete specialisation
- Public proof artifacts (papers, code, talks)
- Scope verbs: *led, owned, shipped, deployed, validated, managed*
- Consistency across website / LinkedIn / GitHub / Scholar

## Testimonial

Elias Mouchlianitis (CSO, Sama Therapeutics) recommendation letter is the strongest available testimonial source. Key themes: ownership of complex initiatives, promotion Senior → Principal in short period, bridge between engineering/scientific/executive teams. One short excerpt would be high-value trust signal. **[FILL: confirm Christos is comfortable using an excerpt publicly]**

## Remote / geography

State location plainly ("Based in Paris, France") as a neutral identity fact. Do not frame geography defensively. Evidence of distributed work is implicit in the role history (Sama remote, international conferences). No availability language, no timezone/overlap language. See [[source-website-remote-credibility]] for wording constraints.

## SEO

**Architecture**: hybrid — strong homepage + small number of supporting pages (publications, biosignals, neuroimaging, medical device AI). Pure one-pager is fast for humans but limited for expertise queries.

**Keyword hierarchy**:
- Primary (H1, title tag): *Clinical AI Research Leader* or *Clinical AI Scientist*
- Secondary (page body): biosignal machine learning, neuroimaging ML, biomedical NLP, regulated medical AI, multimodal biomedical data
- Tertiary (project summaries): EEG/ECG biomarkers, cardiac ultrasound AI, FDA/CE MDR validation, SEPARATE, INSPECT, lung oncology AI

**Recommended title tag**: `Christos Zacharopoulos | Clinical AI Research Leader | Biosignals, Neuroimaging, Medical ML`

**Meta description**: `Clinical AI research leader and PhD scientist working across biosignals, neuroimaging, biomedical NLP, and regulated medical machine learning. Experience spanning clinical research, medical devices, and translational AI systems.`

Technical: JSON-LD `Person` / `ProfilePage` structured data with `sameAs` links. Consistent identity spelling across all surfaces (LinkedIn, GitHub, Scholar, ORCID). Personal domain helps own the branded Google result (source: `raw/research/9-great-personal-academic-website-examples-acamedia-uk-7ccb44ac66.md`). Owned-site content is the authoritative origin signal AI search tools cross-reference (source: `raw/research/ai-seo-discoverability-starts-with-your-website-xponent21-20b4d627d4.md`).

## Project card template (scraper-backed)

Each featured project should include: context, problem, role, tools/methods, results, and learnings (source: `raw/research/how-to-build-a-machine-learning-portfolio-examples-b6fab0c77f.md`). Quality over quantity — curate recent, relevant work; each project tells a process/challenge/outcome story (source: `raw/research/land-that-dream-job-your-year-guide-to-a-killer-portfolio-website-36f4e96bcb.md`).

## First-impression checklist (scraper-backed)

- First-person copy; professional photo optional but recommended for human credibility (source: `raw/research/personal-websites-35-inspiring-examples-2026-d7abab8b61.md`)
- Visible contact path (source: `raw/research/how-to-build-a-software-engineer-portfolio-that-ll-land-interviews-472cb56d81.md`)
- Work samples and publications as proof, not adjectives (sources: `raw/research/20-tips-for-showcasing-your-personal-brand-to-hiring-managers-2c50fb938e.md`, Springboard ML portfolio article)
- Testimonials / social proof where permissioned (sources: trust-signals article, personal-websites examples)

## Scope

A one-page site is sufficient. The goal is not a large academic portfolio — it is a 30-second credibility test for a hiring manager who Googled the name.

## Deploy (GitHub Pages)

**Policy (2026-05-28):** always publish from the **`gh-pages` branch**, not GitHub Actions.

- **Repo Settings → Pages:** Deploy from a branch → `gh-pages` / `(root)`.
- **After `website/` changes:** `cd website && npm run deploy` (runs `scripts/deploy-github-pages.sh`).
- **Do not** use a `deploy-pages` Actions workflow; billing locks block Actions and an old Actions artifact can keep serving stale HTML even when `gh-pages` is updated.

Sync CV from project root before deploy: `scripts/sync-cv-from-root.sh`. See `website/README.md`.

---

## Related pages

- [[website-publications-taxonomy]]
- [[publications]]
- [[christos-zacharopoulos]]
- [[source-next-career-steps]]
- [[source-website-research]]
- [[source-website-first-impression]]
- [[source-website-portfolio]]
- [[source-website-remote-credibility]]
- [[source-website-interdisciplinary]]
- [[source-website-one-page]]
- [[source-website-benchmark]]
- [[source-website-seniority-seo]]
- [[source-website-visual-spec]]
- [[job-search-strategy]]
- [[publications]]
