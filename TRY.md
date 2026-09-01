# TRY: the plain-words Start Here page

Branch: `enhance/start-here`

## What this is

One new page, written for a stranger who has never heard of Structured
Emergence and has no background beyond two years of AI headlines. It explains
what the site is, what the one idea is (using a doctor's appointment, a
classroom, and a jazz quartet as the examples), why anyone would care, what is
actually on the site, where to start reading, what the words mean, and what the
project is explicitly not claiming.

It does not touch the existing Start Here page at `/start/`. That page is still
there, unchanged.

## See it in two minutes

From the repo root:

```
export PATH=/opt/homebrew/bin:$PATH
git checkout enhance/start-here
git submodule update --init --recursive     # only needed once, pulls the PaperMod theme
npm install
hugo server -D
```

Then open:

**http://localhost:1313/start-here/**

## What to look at

1. **Scroll with the page zoomed out and read only the headings.** They are
   supposed to teach you the whole shape of the site on their own: what this
   site is, the one idea, why it might matter to you, what is actually on this
   site, pick a starting point, words we use, what we are not claiming, how to
   reach us.

2. **The three everyday examples** under "The one idea, in everyday terms."
   These are the load-bearing part. If a stranger does not get the idea from the
   doctor, the classroom, and the jazz quartet, the page has failed and the
   examples are what should change.

3. **The glossary** near the bottom. Seven terms, each defined without using
   another term the reader would have to look up. Check whether any definition
   smuggles in insider language.

4. **The "What we are not claiming" section.** Four flat denials. This is what
   keeps a skeptical stranger reading instead of closing the tab.

5. **Dark mode.** Hit the theme toggle in the header. The page uses the site's
   own colour variables, so the heavy brown rules and boxes should invert
   with everything else.

## Known gaps, stated plainly

- **The page is not linked from anywhere.** The site navigation lives in
  `hugo.toml`, which is a shared file, so this branch leaves it alone. You reach
  the page by typing the URL. To put it in the top nav, paste this into the
  `[menu]` block in `hugo.toml`:

  ```toml
  [[menu.main]]
    identifier = "start-here"
    name = "Start Here"
    url = "/start-here/"
    weight = 1
  ```

- **This branch was never rendered.** The session that wrote it had no `hugo`
  and no `npm` on its PATH and could not install them, so the page has been
  checked by reading the markup, not by loading it in a browser. Treat the
  visual result as unverified until you run the command above.
