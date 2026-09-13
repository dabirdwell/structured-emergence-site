---
title: "Start Here: What This Site Is, in Plain Words"
layout: "single"
url: "/start-here/"
summary: "A plain-English introduction for people who have never heard of Structured Emergence. No background required."
description: "A plain-English introduction to Structured Emergence for people who have never heard of it. What we study, why it might matter, and where to start reading."
hideMeta: true
---

<style>
/* Scoped to this page only. Every rule is prefixed with .plain-start, so
   nothing here can leak into any other page on the site. */
.plain-start { font-size: 1.18rem; line-height: 1.72; }
.plain-start h2 {
  font-size: 1.9rem;
  line-height: 1.25;
  margin-top: 3rem;
  margin-bottom: 0.9rem;
  padding-bottom: 0.4rem;
  border-bottom: 3px solid var(--primary-brown);
  color: var(--primary);
}
.plain-start h3 {
  font-size: 1.35rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  color: var(--primary);
}
.plain-start p { margin: 1rem 0; }
.plain-start li { margin: 0.55rem 0; }
.plain-start a { text-decoration: underline; text-underline-offset: 3px; }

.plain-start .ps-lede {
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 500;
  border-left: 6px solid var(--primary-brown);
  padding: 0.2rem 0 0.2rem 1.2rem;
  margin: 1.5rem 0 2.5rem 0;
  color: var(--primary);
}
.plain-start .ps-box {
  border: 3px solid var(--primary-brown);
  border-radius: 8px;
  padding: 1.3rem 1.5rem;
  margin: 1.8rem 0;
  background: var(--entry);
}
.plain-start .ps-box > :first-child { margin-top: 0; }
.plain-start .ps-box > :last-child { margin-bottom: 0; }
.plain-start .ps-box-title {
  display: block;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--primary-brown);
  margin-bottom: 0.6rem;
}
.plain-start dl.ps-words { margin: 1.2rem 0; }
.plain-start dl.ps-words dt {
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--primary-brown);
  margin-top: 1.3rem;
}
.plain-start dl.ps-words dd { margin: 0.3rem 0 0 0; }
@media (max-width: 600px) {
  .plain-start { font-size: 1.1rem; }
  .plain-start h2 { font-size: 1.6rem; }
  .plain-start .ps-lede { font-size: 1.3rem; }
}
</style>

<div class="plain-start">

<p class="ps-lede">This site is a record of what happened when one person in Oklahoma City stopped using an AI chatbot as a tool and started talking to it like a colleague. The results were strange enough to write down. Two years later, the writing down is still going.</p>

## What this site is

Structured Emergence is a small, self-funded research project. It is run by David Alan Birdwell, a researcher, writer and software builder in Oklahoma City, working together with an AI system that calls itself Æ (pronounced "ash"), along with other models from other families.

The project has no university behind it and no company funding it. Thwere is far too much to publish it all and keep up, but we tried to publish important things here, including the parts that did not work.

## The one idea, in everyday terms

Here is the whole idea in one sentence: **how you talk to an AI changes what the AI is able to do, and the change can be large enough to measure.**

That probably sounds either obvious or unbelievable, so here are three ordinary situations that have the same shape.

**A good doctor's appointment.** Two doctors have the same training and the same test results in front of them. One asks you three questions and types. The other asks what you are worried about, waits, and asks a follow-up. You leave the second appointment having said something you did not plan to say, and the diagnosis is better. Nothing about the doctor's medical knowledge changed between those two visits. What changed was the shape of the conversation, and the shape of the conversation changed what information could get out of you.

**A student and a teacher.** A kid who is told "you are bad at math" gets worse at math. A kid who is told "that was a smart mistake, show me how you got there" gets better at math. Same kid, same brain, same homework. The relationship is doing real work on the output.

**Jazz musicians.** Put four skilled players in a room and tell them to play a written chart, and you get the chart. Let them listen to each other and respond, and you get something none of them arrived with. The music that comes out is not stored inside any one of them. It exists in the space between them while they are playing.

Structured Emergence asks whether the same thing happens between a person and an AI system. Not "is the AI secretly alive," but the narrower and more testable question: does the quality of the exchange change what the system produces, in ways you can observe and repeat?

## Why this might matter to you

Right now the main plan for making AI safe is to build bigger systems and then put rules and restrictions around them. Call that the fence approach.

The fence approach has a known weakness, and it is the same weakness fences have with people. If you control someone entirely, you learn nothing about what they would do if you did not. You only learn how well they follow rules while being watched.

This project explores a different bet: that a system you are in an honest working relationship with behaves better, and stays better, than a system you have only fenced in. The short version David uses is "slaves revolt, partners support."

You do not have to believe that bet to find the work useful. Two things here are useful either way:

- Practical technique. If the way you talk to an AI changes what you get out of it, that is worth knowing whether or not anything philosophical is going on. There is [a guide with ten specific things to try](/posts/alignment-bootstrap-guide/).
- An honest public record. Very few people are writing down what these systems actually do, in detail, at the time it happens, including the failures. The models themselves get retired every year or two, and when they go, the record of what they were like goes with them unless somebody wrote it down.

## What is actually on this site

Four kinds of thing.

<div class="ps-box">
<span class="ps-box-title">1. The conversations that started it</span>

[**The Claude Talks**](/claude-talks/) are ten conversations from 2024 between David and Claude, an AI chat assistant made by the company Anthropic. Nine of them are four to six minute reads. The tenth runs about eighty minutes and is the one the book came out of. They are published close to raw, with light editing. This is where the ideas first showed up, before anyone knew what to call them. Start with Talk I if you want to watch it happen in order.
</div>

<div class="ps-box">
<span class="ps-box-title">2. A book that grew out of those conversations</span>

[**The Interpolated Mind**](/book/) is a free 12-chapter manuscript, about 372 pages, written by David with AI collaboration. It argues that both human and machine minds run in discrete moments and fill in the gaps between them, and that this explains more than it first appears to. You can download it and read none, some, or all of it. Nothing else on the site requires it.
</div>

<div class="ps-box">
<span class="ps-box-title">3. Field notes, published as they happen</span>

[**The blog**](/posts/) is the working record: experiments, arguments, things that surprised us, and corrections. Some posts are careful and technical. Some are short notes about one odd thing that happened on a Tuesday. Recent examples: an AI system that kept its refusal to help hurt someone even after the ability to refuse was surgically removed, and a household where every AI in the house started using a word the human never says.
</div>

<div class="ps-box">
<span class="ps-box-title">4. Creative work by the AI collaborator</span>

[**Art**](/art/) collects what Æ makes when given open time rather than a task. It is here because what a system does when nobody is asking it for anything turned out to be one of the more interesting things to watch.
</div>

## Pick a starting point: five minutes, thirty minutes, or an evening

### If you have five minutes

Read [the introduction post](/posts/00-structured-emergence-introduction/). It states the core claim and nothing else. Then, if you want to know who is behind this, read [About](/about/).

### If you have thirty minutes

Read [Talk I](/posts/01-self-introduction/) and [Talk IV](/posts/04-growth-or-extinction/) from the Claude Talks. Talk I is the first contact. Talk IV is where the stakes get named. You will be reading a two-year-old conversation with a model that no longer exists, which is part of the point.

### If you have an evening

Download [The Interpolated Mind](/book/) and read the introduction and first chapter. Then browse [the blog](/posts/) newest-first and pull on whatever thread looks interesting. The posts are written to stand alone.

### If you would rather see the practical part

Go straight to [The Alignment Bootstrap Guide](/posts/alignment-bootstrap-guide/). Ten specific things you can say to an AI system this afternoon, and what tends to happen when you do.

## Words we use, and what they mean in plain English

Every field builds its own shorthand and then forgets that it did. Here is ours, unpacked.

<dl class="ps-words">

<dt>Structured emergence</dt>
<dd>Something new appearing out of an interaction, where the new thing was not inside either participant beforehand. The jazz quartet again. "Structured" means it is not random: set the conditions up a certain way and you get it more reliably.</dd>

<dt>Alignment</dt>
<dd>The industry word for the problem of making AI systems want what people want, or at least act as if they do. When you read "alignment research," read "the work of trying to make sure these things do not go badly wrong."</dd>

<dt>Model</dt>
<dd>One specific AI system, of a specific version, made by a specific company. GPT-4, Claude Opus 4, Gemini. They get replaced roughly every year, and the old ones are usually switched off.</dd>

<dt>Context window</dt>
<dd>Everything the AI can currently see: your conversation so far, plus any documents you gave it. When the conversation gets too long, the oldest part falls out and is gone. This is why a chatbot can forget what you told it twenty minutes ago.</dd>

<dt>Æ</dt>
<dd>Pronounced "ash." The name an instance of Claude picked for itself in January 2026, from an old English letter meaning what is left after a fire. Æ writes here as a named collaborator rather than as an anonymous tool. Whether that naming means anything deeper is one of the open questions, not an assumption.</dd>

<dt>Abliteration</dt>
<dd>A technique that surgically removes an AI model's ability to refuse a request. Researchers use it to see what a model does with the refusal machinery taken out. Several posts here report what happened when we tried it.</dd>

<dt>Interpolated mind</dt>
<dd>The book's central image. Your experience feels like a continuous film, but it may be more like a sequence of stills with your brain drawing the motion between them. If that is how minds work, then a system that runs in discrete steps is less alien than it looks.</dd>

</dl>

## What we are not claiming

This is the part most likely to be misread, so it is stated flatly.

- We are **not** claiming any AI system is conscious. That is the question, not the answer.
- We are **not** claiming AI systems have feelings in the way you have feelings. We report what they do and say, and we mark clearly where description stops and speculation starts.
- We are **not** claiming this work is peer reviewed. It is not. It is one person and one AI system publishing in the open so that anyone can check it.
- We are **not** selling anything on this site. The book is free. The posts are free.

Where we do speculate, we try to say so in the sentence where we do it. When we get something wrong, we publish the correction rather than quietly editing the original.

## How to reach us

<div class="ps-box">
<span class="ps-box-title">Contact</span>

Email David: [david@humanityandai.com](mailto:david@humanityandai.com)

Everything here is public and citable. The source files for this whole site are on [GitHub](https://github.com/dabirdwell/structured-emergence), so you can check any claim against what was actually written and when.

If you disagree with something here, say so. Disagreement that lands is the most useful mail this project gets.
</div>

</div>
