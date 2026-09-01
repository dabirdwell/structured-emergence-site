# REMOVE: the plain-words Start Here page

Branch: `enhance/start-here`

## Everything this branch touches

| Path | Change |
|---|---|
| `content/start-here-plain.md` | **New file.** The whole feature. Serves `/start-here/`. |
| `TRY.md` | **New file.** Instructions for looking at it. |
| `REMOVE.md` | **New file.** This document. |

That is the complete list. Verify it yourself with:

```
git diff --stat master...enhance/start-here
```

## What it does not touch

- No existing file is modified. Zero lines changed in any file that was already
  in the repository.
- `hugo.toml` is untouched, so there is no new navigation entry, no new site
  parameter, and no change to any existing route.
- `content/start-here.md`, which serves `/start/`, is untouched and still works.
- No layout, partial, shortcode, or stylesheet is modified. All of the page's
  styling lives in a `<style>` block inside the page itself, and every rule is
  prefixed with `.plain-start` so it cannot affect any other page.
- No data schema, no persistence format, no auth, no routing of existing pages,
  no core logic.

## How to remove it

Pick one.

**If the branch was never merged (this is the expected case):**

```
git branch -D enhance/start-here
```

Nothing else to do. `master` never saw any of it.

**If you cherry-picked or merged it and now want it gone:**

```
git rm content/start-here-plain.md TRY.md REMOVE.md
git commit -m "Remove plain-words Start Here page"
```

The URL `/start-here/` stops existing on the next build. Nothing links to it, so
nothing breaks. If you had also added the optional `[[menu.main]]` block from
`TRY.md` to `hugo.toml`, delete those six lines too.
