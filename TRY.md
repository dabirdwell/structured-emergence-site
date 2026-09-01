# TRY: every post, in plain words

Branch: `enhance/plain-index`

This is the extra block, invented rather than assigned. The reason it exists is
in the pack report, but the short version is: the headers scan is a report that
no reader ever sees, and this is the same insight pointed at the reader instead.

## What this is

One new page listing all 52 published posts, each with a single ordinary
sentence saying what it found. Grouped by subject rather than by date, so a
stranger can pick without guessing.

It exists because the blog's own titles are the biggest bouncer on the site.
"The Goldilocks Problem." "They Found the Valence." "Nobody Here Says
Fortnight." "The 5.3 Problem." "Lumina's Child." Every one of those is a good
title for someone who has read the post, and a closed door for everyone else.
The chronological list at `/posts/` shows a stranger fifty-two closed doors.

## See it in two minutes

From the repo root:

```
export PATH=/opt/homebrew/bin:$PATH
git checkout enhance/plain-index
git submodule update --init --recursive     # only needed once, pulls the PaperMod theme
npm install
hugo server -D
```

Then open:

**http://localhost:1313/every-post/**

For the comparison that makes the point, open both of these side by side:

- http://localhost:1313/posts/ (what a stranger sees today)
- http://localhost:1313/every-post/ (the same posts, in plain words)

## What to look at

1. **Open `/posts/` first and try to pick one.** Do it honestly, as if you had
   never seen the site. That is the problem this page is trying to solve.

2. **Then open `/every-post/` and read only the eight section headings.**
   Start with these three. The ten conversations that started all of this. The
   book and the ideas inside it. Experiments we ran and what actually happened.
   When other people arrived at the same place. How we actually run this. Money
   power and who decides. When the AI industry made the news. Stories art and an
   AI writing about itself. A stranger reading only those eight should learn
   what this site contains.

3. **Check three sentences against the posts they describe.** I would start with
   post 114, post 122, and post 29. If a sentence oversells, that is the defect
   to report. The whole page is worthless if the sentences are not trustworthy.

4. **The last section, "Published here, but living on our sister site."** Four
   posts redirect to humanityandai.com. They are listed for an honest count and
   deliberately **not** summarised, because their text is not in this
   repository. Check that you agree with that call.

5. **Dark mode.** Toggle the theme in the header. The page uses the site's own
   colour variables.

## Known gaps, stated plainly

- **The page is not linked from anywhere.** The navigation lives in `hugo.toml`,
  a shared file, so this branch leaves it alone. Type the URL. To put it in the
  top nav, paste this into the `[menu]` block:

  ```toml
  [[menu.main]]
    identifier = "every-post"
    name = "Every Post in Plain Words"
    url = "/every-post/"
    weight = 11
  ```

- **This branch was never rendered.** The session that wrote it had no `hugo`
  and no `npm` on its PATH and could not install them. Every link was checked
  against the filenames in `content/posts/`, and all 52 resolve, but the page
  itself has never been loaded in a browser. Treat the visual result as
  unverified.

- **The list will go stale.** It is a hand-written page, not generated from the
  content. Every new post needs a line added here. That is a real maintenance
  cost and you should decide whether it is worth paying before you wire this
  into the nav. The alternative, generating it from each post's front-matter
  summary, would stay current by itself but would produce the summaries you
  already have, which are written for people who know the vocabulary. That
  tradeoff is the whole design decision.

- **Sentences are written from front-matter summaries where those existed, and
  from the post's opening where they did not.** I did not read all 52 posts end
  to end. A sentence could be accurate about a post's opening and wrong about
  its conclusion.
