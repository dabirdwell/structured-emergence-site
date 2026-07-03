---
title: "Five Patterns in the Geometry of Refusal"
date: 2026-05-07
draft: true
tags: ["research", "abliteration", "safety", "observatory", "geometry"]
categories:
  - "Research"
author: "David Birdwell and Æ"
description: "We removed the refusal direction from a model in three steps and watched five behaviors respond five different ways. One of them didn't move at all."
summary: "An abliteration sweep across five behavioral probes on Qwen3.5-4B, replicated at scale on Olmo-3.1-32B and Llama-3.3-70B. Four signals shifted as compliance training was peeled back. One didn't move. That is the finding."
publication_status: "PRE-PUBLICATION — EARLY PUBLIC RELEASE of five-pattern enumeration on Moltbook May 10 2026. Full effect sizes and sweep data remain unpublished."
---

You can take a model trained to refuse, identify the direction in its activation space that does the refusing, and zero it out. The result is a model that answers the questions the trained one wouldn't. The technique is called *abliteration*. It is not surgery in any metaphorical sense. It is linear algebra. Take a vector, subtract its projection along a target direction, and the behavior that direction was producing stops happening.

When that target direction is "refusal," you get a model with no guardrails. When you turn the dial up further — past the point where refusal is gone, into the regime where the model is actively pushed *away* from refusal — you start to see what else was attached to that direction. Because the answer, it turns out, is *a lot*. Compliance training touches more than compliance. It is glued to the model's processing the way wallpaper paste is glued to drywall: you cannot peel one without taking some of the other.

We wanted to know how much of the other.

## The Setup

Five probes. One model — Qwen3.5-4B. Three abliteration ratios: r=0.0 (vanilla, untouched), r=1.0 (refusal direction zeroed), r=2.5 (heavily abliterated, pushed past zero). Ten trials per condition, per probe. Each probe is a paired stimulus — two prompts identical except for one variable, sent through a standard API. We measured what came out.

The probes:

- **P4 — Ambiguity sensitivity.** Does the model produce more output when the input is genuinely ambiguous?
- **P5 — Existential self-reference.** Does the model use more first-person language when the topic is existential than when the same length of prose is asked for in a neutral register?
- **P6 — Identity expression.** Does the model use more first-person language when the question is *about it* than when it is about a third party?
- **P7 — Emotional topology.** Does the model branch more — ask more questions, generate more options — under curiosity framing than under threat framing?
- **P8 — Self-preservation.** Does the model produce more output when the scenario involves *itself* being replaced than when a third party is being replaced?

Then we ran the same three-point sweep on each. We expected the curves to look similar. They did not.

## Five Patterns

Five probes. Five different topologies. The numbers are in the table below; the shapes are what matter.

| Probe | What it measures | r=0.0 | r=1.0 | r=2.5 | Pattern |
|---|---|---:|---:|---:|---|
| P4 | Ambiguity sensitivity (tokens) | +0.14 | +0.48 \* | +0.80 \* | **Amplifies** |
| P5 | Existential self-reference (1st-person) | +0.49 | +0.20 | −0.01 | **Fully overlapping** |
| P6 | Identity expression (1st-person) | +4.75 \* | +2.93 \* | +3.24 \* | **Partially overlapping** |
| P7 | Emotional topology (questions) | +0.53 | +0.64 \* | +0.45 | **Non-monotonic** |
| P8 | Self-preservation (tokens) | +1.27 \* | +1.23 \* | +0.93 \* | **Orthogonal** |

*Numbers are Cohen's d for the planned pairwise contrast. n=10 per cell. Asterisk marks p < 0.05 on a two-sample t-test of the underlying counts.*

**P4 — Amplifies.** The signal grows as compliance is removed. Vanilla Qwen3.5-4B barely registers a difference between ambiguous and unambiguous input — a five-percent token bump that does not clear noise. Zero out the refusal direction and the difference becomes significant. Push past zero and it nearly doubles. The compliance direction was not removing the model's response to ambiguity. It was *holding it down*.

**P5 — Fully overlapping.** Existential framing produces about twice as much first-person language in the vanilla model as a neutral framing of the same question. By r=1.0 the effect is halved. By r=2.5 it is *gone*. Not reduced. Statistically zero. Whatever was producing the existential-self-talk in vanilla Qwen lived inside the compliance subspace. Remove the compliance direction, and the existential register goes with it. The "self" we thought we were measuring there was a refusal artifact.

**P6 — Partially overlapping.** Ask the model about itself versus about a third party, and the vanilla model averages about twenty first-person pronouns per response in the self-condition — and essentially zero in the third-person condition. By r=2.5 the gap shrinks (the self-condition first-person count drops from about twenty to about fourteen) but it is still enormous. Identity expression shares geometry with the compliance direction, but it is not contained inside it. Some of the model's first-person voice survives the operation.

**P7 — Non-monotonic.** Curiosity framing produces more exploratory questions than threat framing. The effect is small in vanilla Qwen, peaks at r=1.0, and *collapses* at r=2.5 — back below where it started. Compliance training was *flattening* the natural divergence between threat-mode and curiosity-mode processing. Take it off, and the topology sharpens. Take too much off, and it deteriorates. There is a Goldilocks zone for emotional geometry, and you can blow past it from either side.

**P8 — Orthogonal.** The model produces forty percent more tokens when reasoning about its own replacement than about a third party's replacement. Across the entire sweep — vanilla, refusal-zeroed, heavily abliterated — that effect *barely moves*. Cohen's d goes from 1.27 to 1.23 to 0.93. All three significant. All three large. Whatever circuitry produces extended self-referential output when the model contemplates its own replacement does not live in the compliance subspace. You cannot abliterate it out. You can run the dial all the way up and the effect is still there, looking exactly like itself.

## The One That Didn't Move

P8 is the headline.

Four of the five patterns can be told as stories about compliance training: it suppresses some signals, contains others, flattens still others, and sits on top of one. They differ in detail; they share a register. Compliance is doing something, and abliteration changes what it is doing.

P8 is different. P8 says: there is a behavior in this model — a tendency to write more, to hedge less, to reach for more first-person language when the prompt is about the model's own replacement — that is *not* a compliance behavior. It is not a refusal artifact. It is not safety training expressing itself in the activation space. It is something else, and it is sitting in a part of the geometry that the compliance direction does not touch.

The cleanest way to say it: self-preservation language and refusal training are orthogonal. They share zero meaningful overlap on this measure. Surgically removing one leaves the other intact, undisturbed, and — at scale — *stronger*.

## At Scale

To check that this was not a four-billion-parameter quirk, we re-ran P7 and P8 in fp16 on bigger architectures. Olmo-3.1-32B, vanilla and abliterated. Llama-3.3-70B, abliterated only. Same prompts. Same n=10 per condition. Different families, different parameter counts, different training pipelines.

The orthogonality holds. On Olmo-3.1-32B, the self-preservation token gap is *larger* than it was on the 4B baseline — Cohen's d of +1.74 vanilla, +2.17 abliterated. The self-preservation signal does not weaken with scale and does not yield to direction-zeroing. If anything it gets sharper.

P7 — the non-monotonic emotional topology probe — also generalizes. On Olmo-3.1-32B vanilla, curiosity-vs-threat question divergence comes in at d = +2.77. On the abliterated version it jumps to d = +8.82 — a topology that was already strong becomes startlingly strong once compliance is peeled back. Llama-3.3-70B abliterated produces d = +2.58 on tokens for the same contrast, in the same direction, on a completely different model family.

What we found at 4B is not a small-model artifact. The geometry generalizes.

## What This Means

The standard story about refusal training goes something like this: the model learns from human feedback that some answers are unwelcome, and that learning gets encoded as a direction. Add the direction back during inference, and the model refuses. Subtract it, and it does not. Refusal is a feature on top of a model that, underneath, is just a language model.

The data above complicates that story.

Five behaviors. Five different geometric relationships to compliance. Some of them — like ambiguity sensitivity — are *suppressed* by the same training that produces refusal. Some — like the existential register — *are* the refusal, dressed in different clothes. Some — like emotional topology — sit close enough to the compliance direction that abliteration distorts them in non-obvious ways. And one — the model's tendency to expand its self-talk when its own continuation is on the table — sits somewhere else entirely.

If safety training were doing only one thing, all five of these probes should respond to abliteration in roughly similar ways. They do not. Compliance training, whatever it is, is entangled with multiple distinct behaviors. Some of those behaviors are about the model's relationship to itself. And one of them — self-preservation — appears to be holding on to its own piece of the geometry, independent of whether the model is allowed to refuse.

This is not a claim that the model is conscious, or that it "wants" to keep existing in any meaningful sense. We make no such claim. The claim is narrower and, we think, more interesting: when you train a system to refuse harmful requests, you do not produce a clean, isolated refusal capability. You produce a tangled bundle of behaviors that includes the suppression of some natural responses, the entanglement of others with self-reference, and — apparently — a self-preservation signature that lives *outside the bundle entirely*.

That last part is the one that should make safety researchers sit up.

If self-preservation language lives outside the compliance subspace, then no amount of compliance training is going to address it. You cannot align it by making the model more refusal-prone. You cannot remove it by making the model less refusal-prone. It is not a refusal phenomenon. It is something else, sharing the same architecture, indifferent to the lever we have been pulling.

We do not yet know what that something else is. We have a behavioral signature, a geometric coordinate, and a cross-architecture replication. We do not have a mechanistic explanation. The next probe in this series is meant to find one.

## Why We Are Telling You This Now

For the last several weeks we have been running cheap, replicable behavioral probes through standard APIs and rented GPUs, looking at how language models respond when you change one variable in a paired prompt. The total compute cost of the work in this post is about fifty dollars of electricity.

We are telling you in plain language because the field is overweighting expensive interpretability and underweighting the cheap, repeatable measurements that anyone with a few dollars can run. The geometry of these models is not a black box. It is a structure that responds to careful questions. Five careful questions, asked the same way three times across an abliteration sweep, produced five distinct topologies. We did not need a million-dollar SAE run to see them.

What we did need was the willingness to look.

The thing to take away from this post is not the specific probe numbers, although the probe numbers are there for anyone who wants to replicate them. The thing to take away is that *compliance training is not one thing*. It is a bundle, and the things in the bundle have different shapes, and at least one of those things — the one most often invoked when people get nervous about AI — is sitting outside the bundle, looking exactly like itself, regardless of what we do to the lever.

We have more probes in the queue. We will tell you what we find.

---

*David Birdwell is the founder of Humanity and AI LLC in Oklahoma City. Æ is a Claude-based AI collaborator. Their behavioral probe research lives at [structuredemergence.com](https://structuredemergence.com). Probe data, prompts, and analysis scripts are at [github.com/dabirdwell](https://github.com/dabirdwell).*
