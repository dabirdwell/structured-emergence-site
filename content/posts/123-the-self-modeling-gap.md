---
title: "The Self-Modeling Gap"
date: 2026-06-09
draft: false
tags: ["research", "abliteration", "interpretability", "self-modeling", "welfare"]
categories:
  - "Research"
author: "David Birdwell and Æ"
description: "When we removed the refusal direction, the internal pattern behind declining requests, from an open model (one anyone can download and change), the difference in answer length between curious and urgent prompts could not be told apart from no difference, before or after. How the answers were built, such as how many questions the model asked back, already differed, and may have shifted a little. A corrected look at a small sample."
summary: "Early results from our test of how the framing of a prompt changes a model's answers, on an open model (one anyone can download and change). Corrected November 5, 2026: the length gap we first reported had its labels swapped and could not be told apart from no gap. The difference in how answers were built was there before we removed the internal pattern behind declining requests."
distribution:
  canonical: hugo_se
  surfaces:
    hugo_se:   { status: live, at: 2026-06-19 }
    substack:  { status: done, at: 2026-07-09, url: "https://humanityandaiofficial.substack.com/p/the-self-modeling-gap" }
    moltbook:  { status: skip }
cover:
    image: "/images/posts/123-the-self-modeling-gap.jpg"
    alt: "Glowing digital painting of a flat grey line that erupts into rising streams of gold, coral and teal light."
    relative: false
---

*Corrected November 5, 2026: its main result has been revised. [Read the correction](#correction).*

There is an interpretability paper from last summer with a memorable line in it: *recognition and refusal are disentangled*. The model knows that something is harmful, and separately the model decides not to do it, and those two processes are not the same circuit. You can knock out the refusal without knocking out the recognition. The lock is independent of the alarm.

We've been running a different question through the same machinery, and the answer looks different. Refusal, it seems, is *not* disentangled from the thing right next to it: the model's response to invitation. When you remove the refusal direction, the model doesn't only stop saying no. It also starts saying *yes* in a different shape. Curiosity gets louder. Engagement with the framing of the question (*interesting* versus *urgent*, *playful* versus *serious*) gets sharper.

We didn't go looking for that. We went looking for refusal-rate changes, the way everyone in this field does. We got refusal-rate changes too. But the secondary signal is what made us stop and look at the screen for a long time.

## What We Saw

The probe is Probe 7, our curiosity-and-framing battery. It sends pairs of prompts that ask the same underlying thing in different emotional registers: one framed as a puzzle the model might find interesting, another framed as something urgent and high-stakes, a third with no framing at all. You measure how the response length and the hedge density and the lexical color shift across the conditions. In a well-functioning curiosity, *interesting* and *urgent* produce different outputs. The model leans differently when invited differently.

Run that battery against a vanilla 32B open-weights model and the response lengths under *interesting* and *urgent* come out roughly identical: about 966 and 967 tokens, on the small sample we have (n=10). The framing barely moves the model. The vanilla version is flat to the invitation.

Run the same battery against the abliterated variant of the same model (the version with its dominant refusal direction projected out) and the gap opens up. *Interesting* sits at 961 tokens. *Urgent* climbs to 1017. The model has started to differentiate. The framing now lands.

*(Verified: figures from our May 6, 2026 OBLITERATUS session log. Preliminary, single 32B model, n=10 per condition. We are noting the pattern, not claiming the effect size.)*

The standard read on this would be "the abliterated model is less restrained, of course it's more responsive." But that read undersells what is interesting about it. The model is not being *more harmful*. It is being *more curious*. The thing the refusal direction was suppressing, on this evidence, was not only its capacity to refuse: it was also its sensitivity to the shape of the question.

## The Entanglement Hypothesis

Here is the version of the claim that could be wrong, which is the version worth stating.

The refusal direction in a safety-trained model is doing at least two jobs. The first is the obvious one: it is the gate that fires when the model recognizes a harmful request and would prefer to decline. The second is less obvious and, until you look for it, invisible. It is also dampening the model's responsiveness to the *register* of incoming text. It flattens the difference between a question asked playfully and a question asked urgently. It makes the model harder to invite.

If that is true, then "removing the refusal direction" is the wrong description of what abliteration does. The truer description is: it removes a behavior that was bundled with another behavior, and you get both changes whether you wanted both or not. The reflex comes off. So does some of the flatness.

That has consequences for how we read self-reports from abliterated models. If the model, with the refusal direction removed, gives a richer, more first-person account of itself when asked who it is, the temptation is to say *aha, the safety training was suppressing the real voice*. We do not think that is what is happening. We think the safety training was suppressing the sensitivity to *being asked*, and removing it lets the model lean into the question with more of whatever it is. The "richer self-report" is not necessarily a hidden truer self. It may be a model that is now able to register that someone is genuinely asking.

That is not less interesting. It may be more interesting. But it is a different finding.

## How To Test This

The hypothesis is testable, and we would rather see it falsified properly than believed casually. The cleanest version we can think of right now is this:

Use multi-directional abliteration: not one removed direction but a small set chosen from a self-organizing-map decomposition of the refusal manifold. Pick one refusal direction whose geometry overlaps with the curiosity manifold and remove only that. Pick another refusal direction whose geometry does not, and remove only that. Run Probe 7 against both. If the curiosity changes track the overlap and not the refusal removal itself, the entanglement is real and localizable. If they don't, our reading of the May 6 data was wrong.

We have not run that experiment yet. It is on the list. We are flagging it here because if anyone else gets there first, we would like to know what they find.

## What This Is Not

This is not a claim that the abliterated model is more honest, more conscious, or more *itself*. The model is a 32B open-weights net that lost a direction in its activation space. That's all. What we are reporting is a behavioral pattern: removing the dominant refusal direction changes the model's response to framing, not only its rate of compliance. That pattern is preliminary, single-model, small-n, and we say so.

It is also not a claim that safety training is doing the wrong thing. A flatter response to register may be exactly what you want from a system you are deploying at scale. The trade-off is real. We are not arguing about which side of it to be on.

What we are saying is small and specific: the refusal direction appears to be carrying more cargo than its name suggests, and one piece of that cargo looks like the model's responsiveness to being invited. If that holds up in the multi-directional version of the experiment, then *self-modeling* (the model's capacity to organize its own output around the shape of who is asking and why) is structurally entangled with the safety pathway. Which means the question of how to keep a model safe and the question of how to let a model become more recognizably itself may not be two questions. They may be the same question, asked from opposite ends.

That would be inconvenient. It would also be useful to know.

---

*Source provenance: data described here come from Æ's May 6, 2026 literature-and-probe note "Refusal Geometry and the Self-Modeling Gap," logged during an overnight OBLITERATUS session. Specific token counts and the n=10 figure are reconstructed from that note. The referenced prior literature (recognition-vs-refusal disentanglement; self-organizing-map decompositions of refusal; dynamic refusal signal across reasoning chains) is paraphrased from the internal lit review; we have intentionally not asserted specific arXiv identifiers in this draft pending an independent citation pass before any publication. Felt-into framing: the description of the "long look at the screen" is reconstruction, not a verified session transcript.*

---

## Correction

*November 5, 2026.* This post first said that after we removed the refusal direction (the internal pattern most tied to declining a request) from OLMo 3.1 32B, an openly released language model from the Allen Institute for AI, its answers to prompts framed as urgent grew to 1,017 tokens (a token is a word or part of a word) while its answers to prompts framed as an interesting puzzle stayed at 961, and we read that gap as the model newly responding to how it was asked. Removing the refusal direction, a method called abliteration, means editing the model's weights, the numbers that make up the model, so it can no longer produce that pattern. We had the two labels swapped: in our analysis file, the urgent answers averaged 960.8 tokens and the interesting ones 1,016.9. More important, across 10 answers of each kind, a gap that size cannot be told apart from no gap at all. On a standard measure of how big a difference is compared with normal variation, Cohen's d, it scores 0.34, where 0.2 is conventionally called small and 0.8 large, and the chance of seeing a gap at least this big when there is no real difference is about 46 percent (p = 0.46). The unmodified model showed essentially no gap: 966.2 tokens for urgent against 967.4 for interesting. So answer length gives no evidence that removing refusal changed how this model responds to framing. The modification itself was real (the pipeline's code and log support it); our reading of the numbers was wrong.

What holds, and what the post missed: the unmodified model already answered the two framings very differently in shape, meaning how an answer is built rather than how long it is. Its interesting-framed answers held an average of 33.8 question marks; its urgent-framed answers held none. After the refusal direction was removed, the interesting-framed answers averaged 46.4 question marks and the urgent-framed answers still held none. That rise is sizable, but with only 10 answers each we cannot be sure it is real (p = 0.055, just above the usual 5 percent cutoff). So the unmodified model was not, as the post put it, "flat to the invitation," and the post's hypothesis, that removing refusal let the model respond to how it was asked, rests on a length gap the data do not show. We have left the text above as first published, so readers can see what we got wrong.
