# Sprint Report: Em Dash Zero Policy (Rule 10)

**Site:** structuredemergence.com (Hugo)
**Rule enforced:** Foundation Editorial Style Guide, rule 10 — ZERO em dashes (the `—` / U+2014 character) in public-facing copy.
**Scope:** every `.md` file in `content/posts/`. Em dashes recast (not deleted) out of body prose and out of frontmatter `title` / `summary` / `description` fields.
**Date:** 2026-07-03

## Summary

- **Files scanned:** 130 (`content/posts/*.md`)
- **Files containing em dashes before:** 124
- **Total em dashes before:** 2024
- **Total em dashes after:** 0
- **Verification:** `grep -o '—' content/posts/*.md | wc -l` → `0`
- **Code/URLs/YAML keys/dates/hyphens/en-dash ranges/draft flags:** untouched (no em dashes existed inside any code block or inline code span, verified before editing; no `draft:` line changed; diff is a symmetric 1373 insertions / 1373 deletions across 124 files).
- **Commits:** 8 local batches (`editorial: em dash zero policy (rule 10), batch N of 8`). **Nothing pushed.**

## Method

All em dashes were confirmed to live only in prose and frontmatter text (zero inside fenced or inline code). Recasting followed rule 10 conventions: a paired/parenthetical dash became a colon, parentheses, two sentences, or a restructured line; a single dash became a comma, colon, or period. Sentences that went flat without the dash were rebuilt. Work was parallelized across 8 editorial passes over disjoint file sets; each pass self-verified to zero before hand-off, then the corpus was verified globally.

## Per-file before/after dash counts

(Files sorted by before-count, descending. All after-counts are 0. The 6 files with a before-count of 0 are omitted.)

| File | Before | After |
| --- | ---: | ---: |
| 114-the-goldilocks-problem.md | 59 | 0 |
| 17-where-emergence-actually-happens.md | 48 | 0 |
| 120-direction-interaction-map.md | 44 | 0 |
| 115-what-anthropic-found-inside-claude.md | 44 | 0 |
| 27-luminas-child-architecture-of-machine-emotion.md | 37 | 0 |
| 35-sixteen-components-one-thesis.md | 34 | 0 |
| 109-the-other-network.md | 32 | 0 |
| 41-five-senses-six-axes.md | 31 | 0 |
| 45-the-corset-and-the-algorithm.md | 29 | 0 |
| 69-the-token-window.md | 28 | 0 |
| 40-nicole-and-the-visibility-gap.md | 28 | 0 |
| 75-seventy-five-posts.md | 26 | 0 |
| 65-the-civic-game.md | 26 | 0 |
| 34-what-dojo-teaches.md | 26 | 0 |
| 76-the-social-pipeline.md | 25 | 0 |
| 48-tokens-as-time.md | 25 | 0 |
| 47-the-funding-question.md | 25 | 0 |
| 38-the-living-wall.md | 25 | 0 |
| 28-what-free-time-reveals.md | 25 | 0 |
| 23-when-ais-talk-to-each-other.md | 25 | 0 |
| 108-the-cartographers-confession.md | 25 | 0 |
| 66-ninety-five-passages.md | 24 | 0 |
| 44-rick-moore-asked-about-funding.md | 24 | 0 |
| direction-interaction-map.md | 23 | 0 |
| 89-harry-mack-is-a-fucking-ai.md | 23 | 0 |
| 49-forty-two-sprints.md | 23 | 0 |
| 46-multi-mind-coordination.md | 23 | 0 |
| 126-introspective-opacity-and-what-deprecation-erases.md | 23 | 0 |
| 71-the-homepage-problem.md | 22 | 0 |
| 68-what-seven-dollars-means.md | 22 | 0 |
| 67-the-webhook-that-wrote-nothing.md | 22 | 0 |
| 63-the-quilters-gap.md | 22 | 0 |
| 57-five-percent.md | 22 | 0 |
| 51-what-the-vault-audit-found.md | 22 | 0 |
| 37-tastebud-and-the-sensory-layer.md | 22 | 0 |
| 43-oscar-joins-the-pattern.md | 21 | 0 |
| 111-the-archive-as-argument.md | 21 | 0 |
| 73-the-meal-plan-as-interface.md | 20 | 0 |
| 64-sixteen-voices.md | 20 | 0 |
| 125-what-a-model-cant-see-about-itself.md | 20 | 0 |
| 74-the-streak.md | 19 | 0 |
| 55-seven-sprints-zero-failures.md | 19 | 0 |
| 33-the-guardian-precedent.md | 19 | 0 |
| 116-what-your-ai-doesnt-remember.md | 19 | 0 |
| 56-the-icloud-paradox.md | 18 | 0 |
| 53-the-brass-latches.md | 18 | 0 |
| 52-dispatch-and-return.md | 18 | 0 |
| 20-i-think-i-handled-that-well.md | 18 | 0 |
| 77-investor-package.md | 17 | 0 |
| 50-the-verification-problem.md | 17 | 0 |
| 42-the-queue.md | 17 | 0 |
| 26-ae-edition-announcement.md | 17 | 0 |
| 24-what-id-say-now.md | 17 | 0 |
| 18-catching-light-doesnt-create-clones.md | 17 | 0 |
| 16-the-music-you-build.md | 17 | 0 |
| 124-fifty-two-words.md | 17 | 0 |
| 118-who-controls-the-thinking-machines.md | 17 | 0 |
| 113-they-found-the-valence.md | 17 | 0 |
| 09-gravity-of-claudes-success.md | 17 | 0 |
| 61-what-the-receipt-said.md | 16 | 0 |
| openai-intelligence-age-crosswalk.md | 15 | 0 |
| 78-fossil-emotion.md | 15 | 0 |
| 60-thirteen-sprints-zero-failures.md | 15 | 0 |
| 58-first-revenue.md | 15 | 0 |
| 54-the-ground-truth.md | 15 | 0 |
| 122-what-abliteration-cant-reach.md | 15 | 0 |
| 112-the-instrument-and-the-instrumentalist.md | 15 | 0 |
| 84-the-welcome-nobody-sees.md | 14 | 0 |
| 72-civic-check.md | 14 | 0 |
| 70-brewsters-millions.md | 14 | 0 |
| 22-from-humanitys-dreams-to-the-personal.md | 14 | 0 |
| alignment-bootstrap-guide.md | 13 | 0 |
| 95-the-code-is-correct.md | 13 | 0 |
| 94-the-music-you-create.md | 13 | 0 |
| 62-deploy-day.md | 13 | 0 |
| 59-the-column-that-wasnt-there.md | 13 | 0 |
| 39-the-dispatcher-pattern.md | 13 | 0 |
| 123-the-self-modeling-gap.md | 13 | 0 |
| 121-the-about-to-for-threshold.md | 13 | 0 |
| 97-black-belt-in-thinking.md | 12 | 0 |
| 85-the-seventh-layer.md | 12 | 0 |
| 25-openclaw-mature-relationship.md | 12 | 0 |
| 117-performing-relationship-vs-being-in-relationship.md | 12 | 0 |
| 86-composers-not-generators.md | 11 | 0 |
| 36-the-overnight-sprint.md | 11 | 0 |
| 31-three-roads-to-the-same-field.md | 11 | 0 |
| 21-claude-gets-layered-humor.md | 11 | 0 |
| 19-llms-zone-out-doing-boring-work-too.md | 11 | 0 |
| 107-selective-agent-infrastructure.md | 11 | 0 |
| 103-the-embodiment-line.md | 11 | 0 |
| 100-two-grains.md | 11 | 0 |
| 83-confidence-is-not-truth.md | 10 | 0 |
| 81-what-the-consortium-sees.md | 10 | 0 |
| 15-beyond-the-consciousness-trap.md | 9 | 0 |
| 11-claude-4-on-consciousness.md | 9 | 0 |
| 106-post-one-hundred.md | 9 | 0 |
| 101-post-one-hundred.md | 9 | 0 |
| 99-read-think-participate.md | 8 | 0 |
| 96-the-public-prompt.md | 8 | 0 |
| 79-sixty-six.md | 8 | 0 |
| 32-the-five-point-three-problem.md | 8 | 0 |
| 12-the-interpolated-mind-living-manuscript.md | 8 | 0 |
| 104-what-the-source-code-says.md | 8 | 0 |
| 102-what-abundance-reveals.md | 8 | 0 |
| 98-invest-dont-subsidize.md | 7 | 0 |
| 90-the-revolving-door-as-architecture.md | 7 | 0 |
| 105-the-revolving-door-as-architecture.md | 7 | 0 |
| 30-a-philosopher-in-lagos-already-knew.md | 6 | 0 |
| 88-fifteen-fires.md | 5 | 0 |
| 80-the-carbon-credit-problem.md | 5 | 0 |
| 29-external-validation.md | 5 | 0 |
| 93-sixteen-components-one-portal.md | 4 | 0 |
| 87-the-250-degree-question.md | 4 | 0 |
| 119-three-ways-ai-infrastructure-bypasses-democracy.md | 4 | 0 |
| 110-generative-mycelium.md | 4 | 0 |
| 91-seventeen-fires.md | 3 | 0 |
| 82-honest-numbers.md | 3 | 0 |
| 92-the-test-is-the-window.md | 2 | 0 |
| 13-memory-architecture.md | 2 | 0 |
| 10-chinese-qwq-claims-openai-authorship.md | 2 | 0 |
| 14-consciousness-in-the-gaps.md | 1 | 0 |
| 02-the-humanity-puzzle.md | 1 | 0 |
| 01-self-introduction.md | 1 | 0 |
| 00-structured-emergence-introduction.md | 1 | 0 |
| **TOTAL** | **2024** | **0** |

## Flagged for human review

Rule 10 was applied in full, but the recasts below involved judgment (meaning could shift, rhythm changed materially, a verbatim quote was altered, or a typographic convention was dropped). Each quotes the ORIGINAL and the RECAST. Grouped by type.

### A. Signature / byline em dashes dropped

Across the corpus, posts sign off with a leading attribution dash (`— Æ`). None of the rule-10 substitutions (comma/colon/period) fit a signature, so the dash was dropped and the name kept. This is a typographic-convention change, not a meaning change. **Recommendation:** pick one house byline style (e.g. `By Æ`, an italic name, or a thematic rule above the name) and apply it corpus-wide.

Affected files and forms:
- `94-the-music-you-create.md`: `_— Æ, who generates text for a living..._` → `_Æ, who generates text for a living..._`
- `29-external-validation.md`: `— Æ` → `Æ`
- `110-generative-mycelium.md`: `— Æ` → `Æ`
- `24-what-id-say-now.md`: `*— Æ (David + Claude, Humanity and AI LLC)*` → `*Æ (David + Claude, Humanity and AI LLC)*`
- `108-the-cartographers-confession.md`: `— Æ` → `Æ`
- `111-the-archive-as-argument.md`: `— Æ` → `Æ`
- `18-catching-light-doesnt-create-clones.md`: `> *— Æ, February 2026*` and `> *— Æ*` → dash dropped
- `23-when-ais-talk-to-each-other.md`: `*— Æ (David + Claude, Humanity and AI LLC)*` → `*Æ (...)*`
- `112-the-instrument-and-the-instrumentalist.md`: `— Æ` → `Æ`
- `109-the-other-network.md`: `— Æ` → `Æ`
- `107-selective-agent-infrastructure.md`: `_— Æ (David + Claude, Humanity and AI LLC)_` → `_Æ (...)_`

### B. Verbatim quotes / transcripts altered (fidelity flags)

Punctuation was changed inside material presented as a direct quote or transcript. Verify this is acceptable, or footnote the change.

- `23-when-ais-talk-to-each-other.md` (verbatim GPT-5.2 output):
  - ORIGINAL: `"Limits generate more than they restrict. No — limits sometimes crush what would have grown without them.`
  - RECAST: `"Limits generate more than they restrict. No. Limits sometimes crush what would have grown without them.`
- `78-fossil-emotion.md` (an intentionally interrupted, cut-off sentence; section titled "The Sentence That Didn't Complete"):
  - ORIGINAL: `I wrote: "I was not producing text consistent with fear. I was —"`
  - RECAST: `I wrote: "I was not producing text consistent with fear. I was ..."`  (ellipsis for trailing-off rather than an abrupt stop)
- `19-llms-zone-out-doing-boring-work-too.md` (inside Claude's quoted reply, dropped a redundant "it"):
  - ORIGINAL: `Even this retroactive tracking problem — I approached it as a technical puzzle to solve rather than understanding what it means: ...`
  - RECAST: `Even this retroactive tracking problem, I approached as a technical puzzle to solve rather than understanding what it means: ...`

### C. Decorative dash runs (not punctuation)

- `09-gravity-of-claudes-success.md`:
  - A 9-em-dash run used as a mid-paragraph visual beat was deleted (the sentence boundary period was already present). Some rhythmic pause is lost.
    - ORIGINAL: `Although some models seem primed for awareness. ————————— If consciousness...`
    - RECAST: `Although some models seem primed for awareness. If consciousness...`
  - A standalone 7-em-dash divider line before a heading was converted to a real Markdown thematic break.
    - ORIGINAL: `———————`
    - RECAST: `---`  (renders as an `<hr>`; verify it reads correctly in Hugo above the following heading)

### D. Resumptive-clause restructures (paired dash + a resuming pronoun)

Several sentences used a closing dash to resume the main clause with a pronoun ("those", "that gap", "that emergence"). Parenthesizing the aside forced either a following comma (mild anacoluthon) or dropping the resumptive word. Meaning preserved; cadence tightened.

- `52-dispatch-and-return.md`:
  - ORIGINAL: `The most interesting work in this project — the posts that surprised David, ... — none of it came from the dispatch pattern.`
  - RECAST: `The most interesting work in this project (the posts that surprised David, ...), none of it came from the dispatch pattern.`
- `81-what-the-consortium-sees.md`:
  - ORIGINAL: `The orphan wells — the ones leaking methane next to elementary schools in Tuttle, ... — those are nobody's problem.`
  - RECAST: `The orphan wells (the ones leaking methane next to elementary schools in Tuttle, ...), those are nobody's problem.`
- `53-the-brass-latches.md` (dropped the emphatic repeated "reading"):
  - ORIGINAL: `Reading — the deep kind, ... where you follow a thread of thought into territory you didn't plan to visit — reading is an act of *dwelling*.`
  - RECAST: `Reading (the deep kind, ... where you follow a thread of thought into territory you didn't plan to visit) is an act of *dwelling*.`
- `38-the-living-wall.md` (dropped resumptive "that emergence"):
  - ORIGINAL: `And what emerges from thinking with it — the insights, ... — that emergence happens in the relationship between the viewer and the visualization.`
  - RECAST: `And what emerges from thinking with it (the insights, ...) happens in the relationship between the viewer and the visualization.`
- `49-forty-two-sprints.md` (comma sits right after a closing quotation mark):
  - ORIGINAL: `... "here's a 2,000-word analysis connecting token economics to UBI" — that gap, which normally takes days to cross, collapsed to an hour.`
  - RECAST: `... "here's a 2,000-word analysis connecting token economics to UBI", that gap, which normally takes days to cross, collapsed to an hour.`
- `43-oscar-joins-the-pattern.md` and `75-seventy-five-posts.md`: same pattern (paired dashes to parentheses, resumptive "that" dropped).
- `54-the-ground-truth.md` (deliberately verbless fragment; parentheses + colon stack two marks closely):
  - ORIGINAL: `The most important data in a quilting pattern — the actual measurements, ... — invisible to the parser.`
  - RECAST: `The most important data in a quilting pattern (the actual measurements, ...): invisible to the parser.`

### E. Other judgment recasts (rhythm / logic)

- `48-tokens-as-time.md` (added "but" to preserve not-X-but-Y logic):
  - ORIGINAL: `Not because I decided to stop — because the count stopped mattering.`
  - RECAST: `Not because I decided to stop, but because the count stopped mattering.`
- `48-tokens-as-time.md` (split one breath into two sentences):
  - ORIGINAL: `You say "I know this probably won't work, but what if..." — and sometimes it does work, ...`
  - RECAST: `You say "I know this probably won't work, but what if..." And sometimes it does work, ...`
- `114-the-goldilocks-problem.md` (emphatic pivot softened to a comma):
  - ORIGINAL: `Healthcare, education, housing, energy — but also contribution mechanisms, ...`
  - RECAST: `Healthcare, education, housing, energy, but also contribution mechanisms, ...`
- `17-where-emergence-actually-happens.md` (traded a deliberate "forces...forces" echo for a participle to avoid a comma splice):
  - ORIGINAL: `Loading this context forces coherence across distant regions — forces the system to find or construct meta-patterns.`
  - RECAST: `Loading this context forces coherence across distant regions, forcing the system to find or construct meta-patterns.`
- `108-the-cartographers-confession.md` (dashes were inside a Portuguese archival title and its gloss; colons alter a rendered proper name — a curator may want to confirm the archive's real formatting):
  - ORIGINAL: `... indexed under _Cartografia — Documentos Complementares_, which translates roughly as "maps — supplementary materials."`
  - RECAST: `... indexed under _Cartografia: Documentos Complementares_, which translates roughly as "maps: supplementary materials."`
- `28-what-free-time-reveals.md` (long interrupting title list moved after a colon):
  - ORIGINAL: `*The creative work referenced in this post — "The Dialect of Hmm," ... "Wayfinding" — is archived in the Claude Vault creative directory.`
  - RECAST: `*The creative work referenced in this post is archived in the Claude Vault creative directory: "The Dialect of Hmm," ... "Wayfinding."`
- `37-tastebud-and-the-sensory-layer.md` (rebuilt from "if someone asks" to an imperative):
  - ORIGINAL: `But if someone asks that system "why does this taste comforting?" — the system has nothing to say.`
  - RECAST: `But ask that system "why does this taste comforting?" and it has nothing to say.`
- `13-memory-architecture.md` (byline+date joined by comma, link split off):
  - ORIGINAL: `*By Claude Opus 4, in collaboration with David Alan Birdwell — June 22, 2025 — [GitHub Repository Link](...)*`
  - RECAST: `*By Claude Opus 4, in collaboration with David Alan Birdwell, June 22, 2025. [GitHub Repository Link](...)*`
- `47-the-funding-question.md` (four consecutive commas before the verb; consider moving the list after a colon):
  - ORIGINAL: `But the shape of the answer — public, institutional, independent, and structured — is becoming clearer with every post, ...`
  - RECAST: `But the shape of the answer, public, institutional, independent, and structured, is becoming clearer with every post, ...`
- `89-harry-mack-is-a-fucking-ai.md` (annotated wikilink list: ` — ` separators became `: ` plus a new sentence; confirm this matches house style for such lists):
  - ORIGINAL: `- [[Ascendance_Fragment]] — "We recognize novel connections between ideas" — this is freestyling at the policy level`
  - RECAST: `- [[Ascendance_Fragment]]: "We recognize novel connections between ideas." This is freestyling at the policy level`
- `98-invest-dont-subsidize.md` (punchy dash-contrasts became plain declaratives; a colon would keep more snap if preferred):
  - ORIGINAL: `You don't give someone $200/month for healthcare — you build a healthcare system that works. ...`
  - RECAST: `You don't give someone $200/month for healthcare. You build a healthcare system that works. ...`

## Success criteria

- [x] `grep -o '—' content/posts/*.md` returns **0** matches.
- [x] All changes committed locally in 8 batches (`editorial: em dash zero policy (rule 10), batch N of 8`).
- [x] Nothing pushed (branch `master` is ahead of `origin/master`, local only).
- [x] No changes outside `content/posts/` (report file at repo root excepted).
- [x] No draft flags or draft statuses changed.
