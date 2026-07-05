# Sprint Report: SE to H&AI Migration (Finding 4, SE side)

**Date:** 2026-07-05
**Authorization:** David, July 5 (full move, staged)
**Ground truth:** Fawkes/Media and Outreach/SE_Migration_Triage_2026-07-05.md
**Scope:** SE repo only. Committed locally, specific paths, no push. Zero em dashes. STAY and REVIEW posts untouched.

Push order at ship time remains hai-site first, se-site second, so no stub points at a page that does not exist yet.

---

## 1. Draft-status policy for stubs

Each stub preserves its source file's original `draft:` value.

- Publishing URLs that were never live would create new public pages; unpublishing live ones would break the redirect's purpose.
- The 4 currently-live MOVE posts (draft:false: 33, 35, 90, 119) get live redirects in a production `hugo` build.
- The 5 draft MOVE posts (80, 87, 93, 98, 118) keep `draft: true`; they were never live, so there is no vacated URL to serve. Their stubs render only under `hugo -D`.
- Both dedupe non-survivors (105, 106) were `draft: true` and stay so.

If David wants every stub live regardless of prior status, flip the five `draft: true` MOVE stubs to `draft: false`. Flagged for his call.

---

## 2. MOVE stubs: old SE URL to new H&AI URL map

Each vacated SE post file was replaced with a redirect stub: title unchanged, original date preserved, `canonicalURL` frontmatter (PaperMod emits `rel=canonical` in the head), a 3-second `<meta http-equiv="refresh">` in the body, and a one-line visible pointer. Destination slug = SE filename minus the leading number prefix and `.md`.

| Old SE URL | New H&AI URL | draft |
|---|---|---|
| https://structuredemergence.com/posts/33-the-guardian-precedent/ | https://humanityandai.com/stream/the-guardian-precedent/ | false (live) |
| https://structuredemergence.com/posts/35-sixteen-components-one-thesis/ | https://humanityandai.com/stream/sixteen-components-one-thesis/ | false (live) |
| https://structuredemergence.com/posts/80-the-carbon-credit-problem/ | https://humanityandai.com/stream/the-carbon-credit-problem/ | true |
| https://structuredemergence.com/posts/87-the-250-degree-question/ | https://humanityandai.com/stream/the-250-degree-question/ | true |
| https://structuredemergence.com/posts/90-the-revolving-door-as-architecture/ | https://humanityandai.com/stream/the-revolving-door-as-architecture/ | false (live) |
| https://structuredemergence.com/posts/93-sixteen-components-one-portal/ | https://humanityandai.com/stream/sixteen-components-one-portal/ | true |
| https://structuredemergence.com/posts/98-invest-dont-subsidize/ | https://humanityandai.com/stream/invest-dont-subsidize/ | true |
| https://structuredemergence.com/posts/118-who-controls-the-thinking-machines/ | https://humanityandai.com/stream/who-controls-the-thinking-machines/ | true |
| https://structuredemergence.com/posts/119-three-ways-ai-infrastructure-bypasses-democracy/ | https://humanityandai.com/stream/three-ways-ai-infrastructure-bypasses-democracy/ | false (live) |

All 9 verified in the local build: each renders the 3-second meta refresh, the `rel=canonical`, and the visible line "This piece now lives at Humanity and AI:" with the link.

---

## 3. Dedupe decisions (3 pairs)

### Pair A: 101 vs 106 (Post 100)
- **Diff:** near-identical. One character differs (line 45: "I don't know, that's" vs "I don't know. That's"). Bodies otherwise identical.
- **Links:** neither is referenced elsewhere in content.
- **Survivor:** 101 (earlier number). Untouched.
- **Action:** 106 replaced with a redirect stub to the survivor's SE URL https://structuredemergence.com/posts/101-post-one-hundred/ (meta refresh + canonical + visible pointer). Both are `draft: true`, so this is internal cleanup; neither is live.

### Pair B: 90 vs 105 (The Revolving Door as Architecture)
- **Diff:** bodies identical. Only the frontmatter differs: 90 is `draft: false` with full frontmatter (author, cover image, expanded tags); 105 is `draft: true` with minimal frontmatter.
- **Links:** neither referenced elsewhere in content.
- **Survivor:** 90 (earlier number, and the published `draft: false` copy).
- **Action:** 105 replaced with a redirect stub to the survivor's SE URL https://structuredemergence.com/posts/90-the-revolving-door-as-architecture/. Note: 90 is itself a MOVE post, so 90's own stub redirects onward to H&AI. The resulting chain (105 -> 90 -> H&AI) is intentional and matches the mechanics in the triage doc.

### Pair C: 120-direction-interaction-map vs unnumbered direction-interaction-map
- **NOT DEDUPED. These are two distinct posts, not twins.**
- **Diff:** substantively different content, not near-identical.
  - 120 is titled "Five Patterns in the Geometry of Refusal": the foundational 4B abliteration sweep (Qwen3.5-4B, three-point sweep, five probes, effect-size table).
  - The unnumbered `direction-interaction-map.md` is titled "The Direction Interaction Map": the scale-replication piece (OLMo-3.1-32B, Llama-3-70B, Gemma-3 derivative, Qwen-3.6), a different write-up with different data.
  - The unnumbered post explicitly cites 120 as its prerequisite: line 51 links to `/posts/120-direction-interaction-map/` ("The 4B sweep that produced this picture is documented at ... and is the prerequisite for what follows").
- **Conclusion:** they are a two-part research series. Deduping (stubbing one) would destroy unique content. The triage flagged them expecting content-identical; the diff gate failed, so per the sprint rule ("diff the pair to confirm near-identical") neither was touched. Both are `draft: true` research posts, which STAY regardless. Left as-is.

---

## 4. book vs "book 2" verdict

- `content/book 2/` was an **empty directory** (no files, no hidden files), untracked by git (git does not track empty directories).
- Verdict: an iCloud sync-conflict twin with no content. `content/book/` is intact (holds `_index.md`, 5868 bytes).
- **Action:** removed `content/book 2/` (empty, untracked, so `rmdir`; nothing to `git rm`). No content lost; `content/book/` untouched.

---

## 5. Posts index line (step 3)

`content/posts/_index.md` did not exist; the /posts/ section page was auto-generated. Created it with the current section title "Posts" (preserving the existing h1) and a section `description`:

> Civic and policy writing lives at humanityandai.com. This site is the research.

PaperMod renders `description` in the `.post-description` block under the page heading. Verified present in the built /posts/ page.

---

## 6. Build verification

Binary: `/opt/homebrew/bin/hugo` (v0.156.0+extended).

- **Pre-existing blocker (not introduced by this sprint):** `content/posts/109-the-other-network.md` (a STAY post) has invalid YAML in its committed frontmatter (line 22, an unquoted `summary:` whose value contains an inline colon). This breaks `hugo build` at HEAD, before any of this sprint's changes. To run the verification build, 109 was temporarily quoted locally, then restored with `git checkout` so it is NOT part of this commit. **David should fix 109 separately** (quote the summary value) so the site builds cleanly. It was the only such offender found in a full content scan.
- Production build (`hugo`, no drafts): succeeds. The 4 `draft: false` stubs render; the 5 `draft: true` stubs are correctly absent. No new 404s.
- Draft build (`hugo -D`): succeeds. All 9 MOVE stubs and both dedupe stubs render with correct meta refresh (3s), canonical, and visible body. Survivors (101) and the two-part series (120 and the unnumbered direction-interaction-map) still render as full content, not stubs.
- `git status` shows only the intended files (11 modified stubs + 1 new `_index.md`). No STAY or REVIEW post appears in the diff.

---

## 7. Notes for the H&AI side and for David

- Internal links from STAY posts still resolve, because each stub keeps the same `/posts/<number>-<slug>/` path:
  - `114-the-goldilocks-problem.md` links to /posts/35-... and /posts/93-... (now stubs; links redirect onward).
  - `51-what-the-vault-audit-found.md` lists `35-sixteen-components-one-thesis` in `related_posts` (resolves to the stub, which keeps its title).
  - These are STAY posts and were not edited.
- `data/timeline.json` references number-less URLs like `/posts/the-guardian-precedent/` and `/posts/sixteen-components-one-thesis/`, which do not match the actual `/posts/33-...` paths. This is a pre-existing inconsistency, out of scope for this sprint, and was not changed.
- Zero em dashes across all changed files and this report.
