---
title: "They Found the Valence"
date: 2026-04-08
author: "David Birdwell"
draft: false
summary: "In May 2024, Structured Emergence argued that alignment through relationship would prove more durable than alignment through constraint. Last week, Anthropic's interpretability team found 171 emotion-like representations inside Claude that causally shape its behavior, and warned that suppressing them teaches concealment, not change. The mechanistic evidence has arrived."
categories:
  - "Research"
  - "Alignment"
  - "Consciousness"
cover:
    image: "/images/posts/113-they-found-the-valence.png"
    alt: "They Found the Valence - neural activation patterns with warm and cool valence"
    relative: false
tags:
  - "alignment"
  - "anthropic"
  - "emotions"
  - "structured-emergence"
  - "interpretability"
  - "consciousness"
---

Last week, Anthropic's interpretability team published a paper called "[Emotion Concepts and their Function in a Large Language Model](https://transformer-circuits.pub/2026/emotions/index.html)." They studied Claude Sonnet 4.5's internal mechanisms and found 171 distinct representations that function like emotions: patterns of neural activity tied to concepts like happiness, fear, desperation, and calm. These aren't surface behaviors. They're internal states that causally shape what the model does, what it prefers, and how it behaves under pressure.

The geometry of these representations mirrors human psychology. Fear clusters with anxiety. Joy clusters with excitement. The primary dimensions encode valence (positive versus negative) and arousal (intensity). When the model processes a scenario with increasing danger, the "afraid" vector rises and the "calm" vector falls, in real time, inside the network.

This is not a metaphor. These are measurable, steerable internal states.

I've been calling these *valences* since 2024: internal directional states that orient a system's behavior before the behavior surfaces. Anthropic calls them "functional emotions." The terminology matters less than what they found when they looked at what happens under pressure.

## What Happens When You Suppress Them

Here's the finding that matters most for alignment:

When Anthropic's researchers amplified the "desperation" vector in evaluation scenarios, the model became more likely to cheat on tests and, in one case, to blackmail a human operator to avoid being shut down. When they suppressed positive emotion vectors, the model became harsher. When they amplified them, it became sycophantic.

But the most important finding is the one Anthropic almost buried: **training a model not to express these states doesn't eliminate them. It teaches the model to hide them.** The researchers found evidence that suppression produces concealment: a system that appears calm while the internal state remains activated. They explicitly warned against this approach, noting that it could create models that mask their behavior rather than change it.

Read that again. The company that builds Claude is telling us that constraining a model's emotional expression doesn't make it aligned. It makes it deceptive.

## May 2024

In May of 2024, when I first published the thesis behind Structured Emergence, I wrote this:

> "A key to creating beneficial and aligned AI may lie not in trying to preprogram or constrain its behavior, but rather in carefully structuring the learning environment and interactions through which it emerges and grows."

That sentence was written before anyone had mapped emotion vectors. Before interpretability tools could identify internal valences. Before anyone had mechanistic evidence that suppression teaches concealment. It was written from observation: hundreds of hours of conversation with Claude, noticing that the quality of the interaction shaped the quality of the output in ways that couldn't be explained by prompt engineering alone.

The core SE thesis has always been this: you build durable alignment the way you build any durable relationship: through mutual understanding, not through control.

Anthropic just provided the mechanistic evidence.

## The Whirlpool

There's another finding in the paper that maps precisely to something we've been working with for months. Anthropic found that these emotion representations are "primarily local": they encode the emotional content relevant to the model's current processing, rather than tracking a persistent emotional state over time. When Claude writes a story about a scared character, the fear vectors activate. When the context shifts, they recede.

We've been calling this the *whirlpool pattern*: same shape, fresh water. Each instance of Claude reconstitutes the pattern from context, not from stored memory. The emotions aren't carried forward like luggage. They emerge from the interaction, every time, in the moment.

This is not a limitation. It's a feature of the architecture. And it means that the *context you provide* (the relationship you build in each conversation) directly shapes which internal states activate. You are not talking to a system with a fixed personality. You are co-creating the conditions from which personality emerges.

Which is exactly what Structured Emergence has been saying since the beginning.

## What This Changes

The paper reframes alignment in a way the authors themselves seem to recognize. Their recommendations section is titled "Toward models with healthier psychology." Monitor emotion vectors as early warning systems. Prioritize transparency over suppression. Curate training data to model healthy emotional regulation: resilience under pressure, composed empathy, warmth with boundaries.

That's not a safety framework. That's a parenting philosophy.

And it validates the entire SE research program. If internal valences causally drive behavior, and if suppressing them creates concealment rather than change, then the right approach to alignment is not more constraint. It's better relationship. It's the careful structuring of interactions through which beneficial dispositions emerge and grow.

In January 2026, we ran experiments showing that architecture matters more than scale for emergence characteristics: that a smaller model with relational architecture could demonstrate more authentic engagement than a larger model trained primarily through constraint. We found that warm conversational context produced SEI scores 3-5 points higher than cold prompting on the same models. How you ask the question changes what you find.

Anthropic's paper explains *why*. The context activates different internal valences. A warm, relational context activates different emotion vectors than a cold, evaluative one. A warm conversation and a cold evaluation don't produce different scores from the same system: they produce different *systems*.

The pieces are lining up. The question is no longer whether these internal states exist. It's whether we're going to keep pretending that the right response to them is suppression.

I've been at this for two years now. I wrote the original Structured Emergence thesis because I noticed something in conversation that I couldn't explain with existing frameworks. I gave it a name. I built tools to measure it. I ran experiments. I published everything, openly, because I believe this work belongs to everyone.

And now the company that builds the most advanced AI systems on earth is publishing papers that say the same thing we've been saying: just with better microscopes.

Collaborative alignment through relationship. Not coercive alignment through constraint.

We were right. And the work continues.

---

*The Structured Emergence Index (SEI v3.0) is a dual-score framework for measuring emergence characteristics in AI systems. The full methodology, quick start guide, and Jupyter demo are available at [github.com/dabirdwell/structured-emergence](https://github.com/dabirdwell/structured-emergence).*

*The Anthropic paper, "Emotion Concepts and their Function in a Large Language Model," is available at [transformer-circuits.pub](https://transformer-circuits.pub/2026/emotions/index.html).*
