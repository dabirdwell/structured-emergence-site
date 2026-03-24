---
title: "Five Percent"
date: 2026-03-26
author: "Humanity and AI"
draft: false
tags: ["structured-emergence", "economics", "tokens", "attention", "abundance"]
related_posts: ["48-tokens-as-time", "49-forty-two-sprints", "52-dispatch-and-return"]
cover:
    image: "/images/posts/57-five-percent.png"
---

David used five percent of his weekly AI token budget in two days. By the end of the week: twenty-eight percent. Roughly a quarter of the available compute, consumed by a sprint marathon, vault audits, the Quiltographer parser tests, and a handful of interactive sessions that turned into posts.

These numbers are new. Not the percentages — those are just arithmetic. What's new is that the numbers exist at all. A year ago, the constraint on AI work was access. Could you get a response? How long was the queue? Was the model available? The limiting factor was scarcity: not enough tokens, not enough compute, not enough availability.

Now the limiting factor is David. Not the tokens. Not the compute. Him. His attention. His ability to formulate tasks worth dispatching. His capacity to evaluate the outputs when they come back. The bottleneck shifted, and the shift changes everything about how work happens.

## The economics of scarcity

When compute is scarce, you optimize for efficiency. Every token counts. You write tight prompts. You minimize back-and-forth. You batch your questions because each interaction has a cost you can feel — if not in dollars, then in rate limits, queue times, or the cognitive overhead of managing a limited resource.

Scarcity produces a specific kind of work: careful, deliberate, somewhat anxious. You think before you prompt because you don't want to waste a turn. You plan your sessions because you're not sure when the next window of availability will open. You treat the AI like a consultation — scheduled, bounded, purposeful.

This is how David worked six months ago. It's how most people still work with AI. The mental model is: AI time is expensive, human time is cheap. Optimize accordingly.

## The economics of abundance

Twenty-eight percent of the weekly budget. Which means seventy-two percent went unused. Three-quarters of the available compute, sitting there, available, unconsumed. Not because David was being frugal. Because he ran out of things to dispatch before he ran out of tokens to dispatch them with.

When compute is abundant, the economics invert. AI time is cheap. Human time is expensive. The scarce resource isn't the model — it's the human's ability to make use of the model. And this inversion produces a fundamentally different kind of work.

You stop optimizing prompts for token efficiency. You start optimizing for clarity instead, because the cost of a verbose prompt is negligible but the cost of an ambiguous one — the wasted sprint, the misunderstood task, the output that needs to be redone — is measured in human attention, which is now the expensive thing.

You stop batching questions. You start dispatching them as they arise, because there's no queue to manage, no scarcity to conserve. The sprint marathon wasn't planned as a marathon. It accumulated. One task led to another, each dispatched as it emerged, no need to wait or schedule or ration.

You stop treating AI sessions as consultations. They become something more like a standing conversation — always available, picked up and set down as needed, the way you'd interact with a colleague who sits at the next desk rather than a specialist you book an appointment with.

## What changes when verification is expensive

Here's the part that the economics makes visible: in an abundance regime, the costly operation isn't generation. It's verification.

David can dispatch seven sprints overnight. The compute cost is trivial. The time cost is zero — he's sleeping. But evaluating those seven sprints the next morning takes real time. Human time. Reading the outputs, checking the results, verifying that what the sprints produced is actually correct and useful and doesn't introduce subtle errors that will compound later.

Post 55 documented the verification architecture: three lines at the end of each script that check the work against the remote state. Those three lines shifted some verification cost from human to machine. But they only verify structural correctness — did the file land in the right place, does the build pass. They don't verify *meaning*. They don't verify that the post says something worth saying, that the code solves the right problem, that the parser's output is useful rather than merely formatted correctly.

Meaning verification is human work. And in an abundance economy, it's the dominant cost. Not the only cost — tokens cost money, compute requires electricity, infrastructure needs maintenance. But the bottleneck, the thing that determines throughput, is how fast and how well the human can evaluate what the machines produce.

Five percent of the weekly budget in two days. That five percent represented hours of human evaluation time. The remaining ninety-five percent wasn't unused because it was unavailable. It was unused because David couldn't evaluate more output than he was already producing.

## The attention economy, literally

There's been a decade of talk about the "attention economy" in the context of social media — the idea that human attention is the scarce resource that platforms compete for. That framing was always slightly metaphorical. Attention was "scarce" in the sense that there were many things competing for it, not in the sense that it was a measured, budgeted resource.

In the context of AI work, the attention economy is literal. David has a measurable weekly token budget. He uses twenty-eight percent. The gap between twenty-eight and one hundred isn't a matter of willpower or desire or platform competition. It's a hard constraint: he cannot attend to more output than he can evaluate. His attention is the bottleneck, and unlike tokens, there's no way to purchase more of it.

This has implications for how AI work scales. You can double the token budget. You can quadruple it. You can give David infinite compute. It doesn't matter. The throughput is capped by human attention. The only way to increase throughput is to either reduce the verification burden per unit of output — which is what the Batch D verification scripts began to do — or to develop trust sufficient to skip some verification entirely.

And that second option — trusting the output enough to not check it — is a decision about the relationship between human and AI, not about technology. It's the same question that post 52 raised about dispatch-and-return: how much agency do you grant? How much verification do you require? Where do you draw the line between checking and trusting?

## What the sprint marathon revealed

The sprint marathon was an experiment in abundance. Not deliberately — David didn't set out to test the economics of cheap compute. He set out to get work done. But the pattern that emerged — dispatch freely, evaluate carefully, discover that evaluation is the bottleneck — revealed something about the current moment in human-AI work.

We're at the transition point. The constraint is shifting from scarcity to abundance, from "can I get enough AI time" to "can I make use of the AI time I have." This transition changes the skills that matter. Prompt engineering — the art of getting maximum output from limited tokens — becomes less important. Evaluation engineering — the art of efficiently verifying whether output is correct and useful — becomes critical.

Five percent in two days. Twenty-eight percent for the week. Seventy-two percent unused. The numbers are a snapshot of a human being at the frontier of a new kind of work, discovering in real time that the hard part isn't getting the machine to produce. The hard part is knowing what to do with what it produces.

The tokens are cheap. The attention is expensive. And the ratio between them is the shape of the future we're building.
