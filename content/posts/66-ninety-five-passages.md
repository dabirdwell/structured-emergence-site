---
title: "Ninety-Five Passages"
date: 2026-03-24
draft: true
author: "Humanity and AI"
tags: ["structured-emergence", "clarity", "content", "reading", "product", "human-ai-collaboration"]
---

Clarity now has ninety-five reading passages across three difficulty levels. Level 1: how rain forms, how seeds grow, why the sky is blue. Level 2: how electricity reaches your house, how maps are made, how bridges hold weight. Level 3: how laws get made in Oklahoma, how the Federal Reserve works, how redistricting changes representation.

Ninety-five passages. Each one written, reviewed, leveled, and tested against readability metrics. Each one covering a subject that exists in the world, not a contrived scenario designed to test a skill, but an actual phenomenon that a reader might wonder about. The passage teaches reading by teaching something worth reading about.

This is the entire product thesis of Clarity, and it took ninety-five passages to make it real.

## Content as product

The features of Clarity are unremarkable. Text rendering with adjustable font size. A built-in dictionary that defines words in context. Comprehension questions after each passage. Progress tracking. A reading level assessment that adjusts difficulty based on performance. These are standard features for a reading app. Any competent developer could build them. Many have.

The passages are not unremarkable. Each one required decisions that no feature can automate. What subject to cover. What vocabulary to use at each level. How to explain a complex system (electricity distribution, legislative process, monetary policy) using only words appropriate to the reading level. How to be accurate without being technical. How to be simple without being simplistic.

"How Rain Forms" at Level 1 must explain evaporation, condensation, and precipitation using vocabulary that a developing reader can decode. No Latin roots unless they've been introduced. No compound sentences longer than twelve words. No abstractions: rain is water that falls from clouds, clouds are water that floated up from the ground. The explanation is reductive. It's also correct, as far as it goes, and a reader who understands it has a foundation for the Level 2 version, which introduces air pressure and temperature gradients.

"How Laws Get Made in Oklahoma" at Level 3 must explain the legislative process (bill introduction, committee assignment, floor debate, conference committees, gubernatorial signature) at a reading level that assumes comfort with multi-clause sentences and domain-specific vocabulary but does not assume prior knowledge of government. The passage has to teach both the reading and the civics simultaneously, because the reader who needs reading practice at Level 3 probably also needs civic literacy at any level.

Every passage makes these decisions. Every passage is the product.

## The frame problem

Features are the frame. Content is the painting. This is true of every content-driven product, and it's persistently misunderstood in software development.

The misunderstanding runs like this: the hard part is building the platform. The content is easy: you can always add more content, hire writers, use AI, scale the corpus. The platform is the moat, the competitive advantage, the thing that's difficult to replicate. The content is interchangeable.

This is exactly wrong for Clarity.

The platform (text rendering, dictionary, comprehension questions, progress tracking) took about a week to build. The architecture is a Next.js app with a content management layer. The comprehension questions are generated from the passage content using a template system. The progress tracking is a simple state machine. None of this is proprietary or novel or particularly difficult.

The ninety-five passages took six weeks. Six weeks of writing, reviewing, leveling, testing, and revising. Six weeks of decisions about vocabulary, sentence structure, subject selection, and accuracy. Six weeks of making sure that "How the Federal Reserve Works" at Level 3 is both readable for a developing reader and accurate enough that an economist wouldn't wince.

The ratio (one week for features, six weeks for content) tells you where the value is. The features are the frame. The content is what goes inside. A beautiful frame around a blank canvas is furniture. A great painting in a simple frame is art.

## Why not generate everything

The obvious question in 2026: why not use AI to generate all ninety-five passages?

The answer is that we did use AI. Every passage was drafted with AI assistance. The sprint process (define the subject, set the reading level, draft the passage, review for accuracy, test against readability metrics, revise) is the same AI-human collaboration that produces these essays. AI is fast at drafting. It generates fluent text at any reading level on any subject within seconds.

But AI-generated passages have a specific problem: they're correct and boring. A passage about how rain forms, drafted by AI without additional guidance, will accurately describe the water cycle in grade-appropriate language. It will also read like a textbook excerpt, because AI drafts tend toward the expository mean: the average of all textbook prose in the training data.

Clarity's passages can't be average. A developing reader who is choosing to practice reading (who has downloaded an app and opened it voluntarily) needs text that rewards the effort. Not entertainment, exactly. But engagement. A reason to finish the passage beyond "this is good for you."

The engagement comes from specificity. Not "water evaporates from bodies of water" but "water evaporates from Lake Hefner in Oklahoma City. You might have driven past it." Not "laws are proposed by legislators" but "Senator Johnson introduced SB 1247 on a Tuesday morning to a committee room with eleven chairs and three people in them." The specific detail is what makes the passage feel like reporting rather than lecturing, and the difference between reporting and lecturing is the difference between a reader who finishes the passage and a reader who closes the app.

AI doesn't generate these details spontaneously. It generates them when prompted to, and the prompting (the decision to ground the passage in specific places, specific names, specific images) is the human contribution. The AI writes. The human decides what the writing should feel like. The combination produces passages that are both fluent and engaging, which neither the AI alone nor the human alone could produce as efficiently.

## From rain to redistricting

The three levels form a reading trajectory. A reader who starts at Level 1 with "How Rain Forms" and progresses through Level 2's "How Bridges Hold Weight" arrives at Level 3's "How Redistricting Changes Representation" with two things: the reading skill to decode the passage and the learning habit of understanding systems by reading about them.

This trajectory is deliberate. Level 1 passages cover natural systems: weather, plant growth, animal behavior. Level 2 passages cover human-made systems: infrastructure, technology, economics. Level 3 passages cover civic systems: government, law, policy. The progression mirrors a conceptual development: from understanding how the world works, to understanding how humans have modified the world, to understanding how humans govern the modifications.

A reader who reaches Level 3 and encounters "How Laws Get Made in Oklahoma" is a reader who learned to learn by reading. They learned what evaporation is by reading about it. They learned how electricity is distributed by reading about it. Now they're learning how legislation works by reading about it. The skill and the habit are both established. The content at Level 3 is harder, but the reader is stronger.

## The number

Ninety-five passages is both a lot and not enough. It's enough to constitute a real product: a reader who starts at Level 1 has weeks of material before reaching Level 3. It's not enough to constitute a complete curriculum: there are subjects not covered, difficulty gaps between passages, and reading levels that could use finer gradation.

The number will grow. More passages, more subjects, more levels, eventually more languages. But ninety-five is the number where Clarity stopped being a demo and started being a product. A demo shows that something works. A product gives someone a reason to use it. Ninety-five passages, covering subjects from weather to governance, at three levels of difficulty, is a reason.

The content is the product. The features are just the frame. Ninety-five times over, the content is the product.
