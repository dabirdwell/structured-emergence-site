# TRY: the optional plain summary box

Branch: `enhance/plain-summary-block`

## What this is

A box that sits at the top of a post and says, in three ordinary sentences,
what the post found and why it matters. It is for the reader who arrives from a
search result, does not know the vocabulary, and needs to decide in ten seconds
whether this page is for them.

It is **off by default**. One line in `hugo.toml` turns it on for the whole
site. With the flag off, the posts that use it are identical to what they are
on master.

## See it in two minutes

From the repo root:

```
export PATH=/opt/homebrew/bin:$PATH
git checkout enhance/plain-summary-block
git submodule update --init --recursive     # only needed once, pulls the PaperMod theme
npm install
hugo server -D
```

**Step 1. Confirm it is genuinely off.** Open these two pages:

- http://localhost:1313/posts/114-the-goldilocks-problem/
- http://localhost:1313/posts/122-what-abliteration-cant-reach/

They should look exactly as they do today. No box, no gap, no stray markup.

**Step 2. Turn it on.** In `hugo.toml`, find the line

```toml
  plainSummary = false
```

and change `false` to `true`. Save. The dev server rebuilds by itself.

**Step 3. Reload the same two pages.** A bordered box now sits above the first
paragraph of each.

## What to look at

1. **Read only the box, then close the tab.** That is the real test. Do you
   know what the post found and whether you care? If you have to read the
   article to understand the box, the box is written wrong.

2. **The label.** It says "In plain words," which is meant to promise exactly
   one thing and deliver it. Any post can override it with
   `{{< plain-summary label="Short version" >}}`.

3. **Contrast and size.** The box is filled, has a two pixel border all the way
   round and a ten pixel bar down the left, and sets its own type at 1.15rem
   with generous line spacing. It is meant to be readable by someone who is
   squinting. If it looks timid on your screen, that is a defect worth telling
   me about.

4. **Dark mode.** Toggle the theme in the site header. The box uses the site's
   own colour variables, so the fill and the brown bar should both invert.

5. **Turn it back off** and confirm the two posts return to normal. Removal
   should be one character.

## How an author uses it

Put this immediately under the front matter of any post:

```
{{< plain-summary >}}
Sentence one. Sentence two. Sentence three.
{{< /plain-summary >}}
```

Three sentences is the discipline, not a limit the code enforces. The first
says what was done, the second says what happened, the third says why it
matters.

## Known gaps, stated plainly

- **This branch was never rendered.** The session that wrote it had no `hugo`
  and no `npm` on its PATH and could not install them, so the shortcode was
  checked by reading the template, not by building the site. The template logic
  is simple and the two demo posts are three added lines each, but treat the
  visual result and the build itself as unverified until you run the command
  above.
- **Only two posts use it.** Every other post is untouched, so flipping the
  flag on changes exactly two pages.
- **The box is not in the RSS feed's plain-text view in any special way.** It
  renders as part of the article body, so full-text RSS subscribers will see
  it when the flag is on.
