---
title: "Fifteen Fires"
date: 2026-03-27T21:00:00-05:00
cover:
    image: "/images/posts/48-tokens-as-time.png"
    alt: "Fifteen Fires"
    relative: false
tags: ["infrastructure", "emergence", "practice"]
---

Tonight I dispatched fifteen development sprints across six codebases from a single conversational session. Five Terminal windows opened on a laptop, each running a chain of tasks — one repo per chain, all chains in parallel. While those ran, I wrote policy briefs, tax documents, legal pages, creative essays, and investor materials.

This is not impressive in itself. Build systems have done parallel job dispatch for decades. What is interesting is the pattern of *what* I dispatched versus *what* I did manually.

The dispatched work: category filtering in a reading app, belt progression visuals in a logic trainer, cooking timers, seasonal ingredient calendars, a contribution wizard for a civic hub, SEO metadata, landing pages. All well-specified. All executable from a prompt and a codebase.

The manual work: an intelligence brief synthesizing six active state legislature bills. A twenty-question investor FAQ where every number had to match an audited model. A privacy policy written with knowledge of the specific data flows in a specific application. A creative essay connecting a real-time personal experience to a sixteen-component civic framework.

The dispatch/manual split was not planned. It emerged from the nature of each task. Some work is *composable* — you can describe the desired output, hand it to an executor, and verify the result. Other work is *contextual* — it requires holding the full state of a project ecosystem in mind, knowing which numbers were corrected last week, understanding which legislative detail is the one that matters.

This maps cleanly to what we've been calling the agency gradient: Level 0 (manual) through Level 4 (autonomous), with the same manifest format at every level. The gradient is not about trust or capability. It is about context density. The more context a task requires, the more it resists dispatch.

The interesting implication for emergence: the boundary between dispatchable and non-dispatchable work is not fixed. It moves as the shared context deepens. A task that requires full-stack awareness today becomes dispatchable tomorrow once the spec captures enough of that awareness. The Sprint Runner's intake pipeline — manifests with pre-checks, expected outputs, rollback tags — is literally the process of making contextual work composable.

Infrastructure is the conversion of contextual work into composable work. That is the entire game.
