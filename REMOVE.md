# REMOVE: the optional plain summary box

Branch: `enhance/plain-summary-block`

## Everything this branch touches

| Path | Change |
|---|---|
| `layouts/shortcodes/plain-summary.html` | **New file.** The whole feature, 50 lines including its own documentation. |
| `hugo.toml` | **6 lines added** inside `[params]`: a comment and `plainSummary = false`. This is the single feature flag. |
| `content/posts/114-the-goldilocks-problem.md` | **4 lines added** right under the front matter: the demo summary. No existing line changed. |
| `content/posts/122-what-abliteration-cant-reach.md` | **4 lines added** right under the front matter: the demo summary. No existing line changed. |
| `TRY.md` | **New file.** |
| `REMOVE.md` | **New file.** This document. |

Verify the whole list yourself:

```
git diff --stat master...enhance/plain-summary-block
```

Fourteen added lines across three existing files, plus three new files. Zero
deleted lines, zero modified lines.

## What it does not touch

- No stylesheet. All of the box's styling is written inline on the elements in
  the shortcode, so `assets/css/extended/custom.css` is untouched and nothing
  can leak onto another page.
- No layout, no partial, no template that already existed.
- No data schema, no persistence format, no auth, no routing, no core logic.
- No other post. Sixty-three published posts are byte-for-byte unchanged.

## How to remove it

Three options, cheapest first.

**Option 1: leave it and turn it off.** It is already off. `plainSummary =
false` in `hugo.toml` means the shortcode outputs an empty string and the two
demo posts render exactly as they do on master. Nothing to do.

**Option 2: delete the branch.** If it was never merged, which is the expected
case:

```
git branch -D enhance/plain-summary-block
```

**Option 3: you merged it and want it gone.** In this order:

```
git rm layouts/shortcodes/plain-summary.html TRY.md REMOVE.md
```

Then delete the shortcode calls from the two demo posts. In each of
`content/posts/114-the-goldilocks-problem.md` and
`content/posts/122-what-abliteration-cant-reach.md`, delete the four-line block
that starts with `{{< plain-summary >}}` and ends with `{{< /plain-summary >}}`.
Find them with:

```
grep -rn "plain-summary" content/
```

Then delete these six lines from `hugo.toml`, inside `[params]`:

```toml
  # Feature flag for the optional plain-summary box.
  # false = the {{< plain-summary >}} shortcode renders nothing at all.
  # true  = posts that use the shortcode show a plain-English summary box
  #         above the article. Nothing else on the site changes either way.
  plainSummary = false
```

Order matters here: delete the shortcode calls from the posts **before** you
delete `layouts/shortcodes/plain-summary.html`, or the build will fail with
"failed to extract shortcode: template for shortcode plain-summary not found".
