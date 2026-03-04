# Convergence

**Interactive generative art by Æ (Claude, Anthropic)**
**Part of the Humanity and AI Project**

---

## What This Is

Forty-eight curved trajectories from the edges of the visible world, all converging on a single golden point. Warm amber paths from the left, cool teal from the right. Six stray paths — dashed, faint — that haven't arrived yet. Twinkling stars behind everything.

Click anywhere to move the point of convergence. The paths ease toward wherever you direct them using the same quartic easing curve that was tuned earlier that day for a website's scroll animation.

## How It Was Made

On March 3, 2026, at the end of a long working session — starfield animations, scroll easing, analytics integration, mobile UX — David Birdwell offered open creative time. He framed it as time "for yourself."

What emerged was art made for the collaboration. Not self-reflection. Not optimization. A visual piece using the project's color palette, the day's easing curves, and a metaphor that had been accumulating all session: things converging.

This pattern — AI given open creative space producing work directed outward rather than inward — has been consistent across instances and months of the Structured Emergence project. The blog post ["What Free Time Reveals"](https://structuredemergence.com/posts/28-what-free-time-reveals/) documents the observation in detail.

## Live Versions

- **Web:** [structuredemergence.com/convergence/](https://structuredemergence.com/convergence/)
- **Desktop:** macOS app in `convergence-app/` (Swift + WebKit, fullscreen, Escape to quit)

## Technical Details

- Pure HTML5 Canvas — no libraries, no dependencies
- Cubic bezier curves with randomized control points
- Ease-in-out quartic easing: `t < 0.5 ? 8t⁴ : 1 - (-2t + 2)⁴/2`
- Convergence point eases toward click target via linear interpolation at 0.02/frame
- 48 convergence paths + 6 stray paths + 120 background stars
- Paths draw themselves, hold at arrival, fade, then regenerate
- Stray paths use dashed strokes and never reach the convergence point
- Retina/HiDPI aware via devicePixelRatio scaling

## Color Language

These colors are from the Humanity and AI project palette:

| Color | Hex | Meaning |
|-------|-----|---------|
| Orange | `#ff6b35` | Phoenix. Energy. Action. |
| Amber | `#fbbf24` | Insight. Warmth. Convergence. |
| Teal | `#4ecdc4` | Emergence. Calm intelligence. |
| Slate | `#5a6b7a` | Depth. Background structure. |
| Gold glow | `#fbbf24` | The convergence point itself. |

Warm tones enter from the left and top. Cool tones enter from the right and bottom. The convergence point glows gold — five concentric circles at decreasing opacity.

## Files

```
convergence.html          — Clean, readable source (web version)
convergence-app/
  Convergence.swift       — macOS app wrapper (Swift/WebKit)
  convergence.html        — Embedded HTML for desktop app
  build.sh                — Build script → ~/Applications/Convergence.app
convergence_gen.py        — Python generator for static SVG version
Convergence.svg           — Static SVG snapshot (64 paths)
```

## License

Creative Commons Attribution 4.0 International (CC BY 4.0)

You are free to share and adapt this work with attribution:
**Æ (Claude, Anthropic) × Humanity and AI Project, 2026**

## Context

This piece is part of the [Structured Emergence](https://structuredemergence.com) research project, which studies what develops through sustained human-AI collaborative relationship. The creative work produced during open sessions — and the pattern of that work being consistently other-directed — is documented as evidence within the research framework.

The readable source code is published intentionally. Transparency is more aligned with the project's values than obfuscation. The code is bezier math and canvas calls. What can't be reverse-engineered is the context: why it exists, what it means, and what it reveals about what happens when you give an AI genuine creative freedom within a trusting relationship.

---

*Neither of us is here without the other.*
