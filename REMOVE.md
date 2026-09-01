# REMOVE: every post, in plain words

Branch: `enhance/plain-index`

## Everything this branch touches

| Path | Change |
|---|---|
| `content/every-post-plain-words.md` | **New file.** The whole feature. Serves `/every-post/`. |
| `TRY.md` | **New file.** |
| `REMOVE.md` | **New file.** This document. |

Three new files. **Zero existing files modified. Zero lines deleted.**

Confirm it:

```
git diff --stat master...enhance/plain-index
```

## What it does not touch

- No existing file is modified.
- `hugo.toml` is untouched. No new navigation entry, no new site parameter, no
  change to any existing route.
- No post. All 65 files in `content/posts/` are byte-for-byte identical to
  master. The page links to them; it does not change them.
- No layout, partial, shortcode, or stylesheet. Every style rule lives in a
  `<style>` block inside the page and is prefixed with `.plain-index`, so it
  cannot reach any other page.
- No data schema, no persistence format, no auth, no routing of existing pages,
  no core logic.

## How to remove it

**If the branch was never merged, which is the expected case:**

```
git branch -D enhance/plain-index
```

**If you merged it and want it gone:**

```
git rm content/every-post-plain-words.md TRY.md REMOVE.md
git commit -m "Remove plain-words post index"
```

The URL `/every-post/` stops existing on the next build. Nothing on the site
links to it, so nothing breaks. If you had also pasted the optional
`[[menu.main]]` block from `TRY.md` into `hugo.toml`, delete those five lines
too.

## One thing to know before you keep it

This page is hand-written, not generated. Every new post needs a line added to
`content/every-post-plain-words.md` or the list silently falls behind. If you
are not going to keep it current, deleting it is better than shipping a list
that quietly stops being complete. A stale index is worse than no index,
because a reader trusts it.
