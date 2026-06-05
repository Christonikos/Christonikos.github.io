# Source: EMNLP 2023 interference paper (camera-ready after reviews)

**Summary**: Camera-ready LaTeX for the EMNLP 2023 main-track paper on attractor–verb distance in subject–verb agreement, comparing human RSVP judgments to GPT-Neo-1.3B and grammar-corrected T5.

**Sources**: `raw/Overleaf Projects (1 items) (2).zip` (nested: `Interference_ACL_January_after_reviews.zip` → `naacl2021.tex` and `figures/`)

**Last updated**: 2026-06-03

---

## Bibliographic

| Field | Value |
|-------|--------|
| Title | Assessing the influence of attractor-verb distance on grammatical agreement in humans and language models |
| Venue | EMNLP 2023, Singapore (Empirical Methods in Natural Language Processing), main track |
| ACL Anthology | https://aclanthology.org/2023.emnlp-main.998/ |
| arXiv | https://arxiv.org/abs/2311.16978 |
| OSF (data & analyses) | https://osf.io/d4g6k |
| LaTeX main file | `naacl2021.tex` (ACL style) |

## Authorship & affiliations (from `\author` block)

- **Christos-Nikolaos Zacharopoulos** — first author; Cognitive Neuroimaging Unit, NeuroSpin; Sensome SAS, Massy, France; `christonik@gmail.com`
- **Théo Desbordes** — Meta AI Research; Cognitive Neuroimaging Unit, NeuroSpin
- **Mathias Sablé-Meyer** — NeuroSpin; Collège de France, Université PSL

## Design & methods

- **Task**: Forced-choice grammaticality judgment during RSVP (200 ms word, 366 ms SOA); attractor–verb distance parametrically varied at constant sentence length.
- **Factors**: Violation (structural proxy), Congruency (linear proxy), proximal vs distal attractor; plural attractors for main analyses (markedness replication).
- **Participants**: 54 recruited; 20 excluded (chance on fillers or &lt;70% main-task accuracy); **n=34** in reported analyses (appendix includes full N=54).
- **NLMs**: EleutherAI **GPT-Neo-1.3B** (next-token probability for grammatical vs ungrammatical verb); **T5** fine-tuned on JFLEG for grammaticality judgment.
- **Stimuli**: Lexicon-generated sentences; filtered by GPT-3 perplexity (median to median+2σ); 5 sentences per condition cell + fillers.

## Main results (from abstract & Results section)

- Humans and NLMs make **more errors when the attractor is closer to the verb**; NLMs approach chance on proximal attractors while humans largely overcome interference.
- **Linear effect of attractor distance on reaction times** (humans).
- ANOVA highlights (plural attractors, Table 2): significant violation and congruency effects on ER/RT in proximal condition; distal violation ER η_G² larger than proximal for ungrammatical sentences.
- **T5** sensitive to attractor presence and distance; **GPT-Neo** significant distance effect but not mere attractor presence.
- Congruency in humans: facilitatory effect in proximal condition (fewer errors on congruent trials); incongruent trials do not mirror NLM chance-level pattern.

## Figures in bundle

| File | Role |
|------|------|
| `figures/interference_pedagogical_msm.eps` / `.pdf` | Experimental design schematic |
| `figures/fig2_v3.eps` | Aggregated human vs NLM performance |
| `figures/fig3tight_v3.eps` | Grammaticality × congruency × distance |
| `figures/fig4.eps` | Singular-attractor subset |

**Website asset**: `emnlp-interference-results.png` (aggregated performance panel, `fig2_v3.eps`; exported PNG).

## Notes

- Wiki/website “top 14%” / Category A* claims are **not** in this camera-ready TeX; keep only if corroborated elsewhere (e.g. acceptance notification).
- Filename `Interference_ACL_January_after_reviews.zip` reflects revision history; published venue is EMNLP 2023 per Anthology link.

## Related pages

- [[publications]]
- [[guidelines-for-graphical-abstracts]]
- [[source-overleaf-ijcnlp-personality-2025]]
- [[source-overleaf-in-machina-n400-aics-2025]]
