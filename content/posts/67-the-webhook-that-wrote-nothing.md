---
title: "The Webhook That Wrote Nothing"
date: 2026-03-24
draft: true
author: "Humanity and AI"
tags: ["structured-emergence", "stripe", "webhooks", "institutions", "communication", "human-ai-collaboration"]
---

The webhook received every event. Customer created. Subscription started. Invoice paid. Payment method attached. Each event arrived at the endpoint, was parsed correctly, processed through the handler, and returned a 200 OK response. The logs were clean. The response times were fast. By every standard metric of webhook health, the system was functioning perfectly.

It was also writing nothing to the database.

Every request processed. Every response successful. Every write silently discarded. The system was a perfect simulation of function: all the visible behavior of a working system with none of the actual effect.

## The column mismatch

The cause was a column mismatch in the subscriptions table. The webhook handler constructed an INSERT statement with fields that didn't match the table schema. The Stripe `subscription.id` was mapped to a column called `stripe_subscription_id`. The table had a column called `subscription_id`. Different name, same intended purpose. The INSERT failed.

But it failed silently, because the error handling caught the database error and, following what looked like reasonable defensive coding, logged the error and returned 200 to Stripe. The logic was: don't return an error to Stripe, because Stripe will retry failed webhooks, and retrying a structurally broken request won't fix the structural problem. It'll just multiply it. Better to accept the event, log the failure, and let a developer find it in the logs.

The developer didn't find it in the logs. Because the logs recorded a database error with a severity level of "warning" rather than "error," and the monitoring was configured to alert on "error" level events only. The warning existed. It was stored, timestamped, and available for inspection. Nobody inspected it.

The system operated for six hours before I noticed that the subscriptions table was empty despite having processed four subscription events. Six hours of a webhook that received everything, responded correctly to everything, and accomplished nothing.

## The metaphor

I've been thinking about this for weeks, because the pattern is everywhere.

Consider the institutional version. A citizen calls their representative's office. The phone is answered. The call is logged. The constituent's concern is noted. A polite response is given: "Thank you for calling, your feedback is important to us." The call is handled by every visible metric: answered promptly, logged accurately, responded to courteously.

Nothing changes. The concern is noted and filed. The filing system stores it. The storage is correct. But the mechanism that would connect the filed concern to a policy action, the column that would match the input to the output, doesn't exist. The schema is wrong. The concern is mapped to `constituent_feedback` but the legislative process reads from `policy_input`. Different name. Same intended purpose. No connection.

The citizen calls again. The system performs again. 200 OK. Thank you for your feedback. Logged. Filed. No write.

## Responsive non-response

There's a specific kind of dysfunction where the system appears responsive while being structurally incapable of response. The webhook returned 200. The representative's office answered the phone. The school board acknowledged the email. The HR department confirmed receipt of the complaint. Each of these is a response in the communicative sense (a signal was sent, a signal was received) but not in the functional sense. No state changed. No data was written. No action followed.

This is different from ignoring input. Ignoring is visible: you can tell when no one answers the phone. Responsive non-response is invisible. Someone answered. Something happened. The caller hangs up believing the system worked because all the signals of working were present. The database error was caught. The response was sent. The log was written. Everything a working system would do, except the one thing that matters.

The insidious part is that responsive non-response improves under pressure. When citizens complain that the system isn't working, the system responds: more phone lines, faster answer times, more courteous representatives, more detailed logging. All of which improve the response without improving the function. The system gets better at performing responsiveness while the column mismatch, the structural gap between input and effect, remains unchanged.

## Why 200 OK is dangerous

In HTTP, 200 OK means the request was received and processed successfully. It's the signal that tells the sender: your message was handled. You can stop worrying about it.

The webhook returned 200 OK for every request that failed. This is, technically, a reasonable engineering decision: returning 400 or 500 would cause Stripe to retry, and retrying wouldn't fix the schema mismatch. But the 200 is also a lie. Not a malicious lie. An architectural lie. The system said "OK" when the correct response was "received but not processed." HTTP doesn't have a status code for "I heard you and did nothing." The closest is 202 Accepted, which means "received, will process later," but even that implies eventual processing that wasn't going to happen.

The absence of a status code for "received and silently discarded" is itself revealing. The protocol assumes that receiving a message and processing it are the same event, or at least that one follows the other. The protocol has no mechanism for the case where receiving is perfect and processing is absent. This case, apparently, wasn't anticipated as common enough to warrant its own code.

It's common enough.

## The warning that wasn't an error

The monitoring system distinguished between warnings and errors. Errors triggered alerts. Warnings were logged but not alerted on. The database failure was classified as a warning.

The classification was made by a developer (possibly me, I don't remember) who decided that a single failed database write wasn't an error. An error, in this classification scheme, was something that broke the system. A failed write didn't break the system. The system continued to operate. It continued to receive events, process them, and return responses. The system was fine. The data was not.

This classification reveals a priority: system health over data integrity. The system is defined as "working" when it processes requests without crashing, not when it stores the data it's supposed to store. A system that runs smoothly and writes nothing is "healthy." A system that writes everything but occasionally throws an exception is "unhealthy."

The classification is defensible from an infrastructure perspective. The infrastructure team cares about uptime, response times, and error rates. A warning that doesn't affect uptime isn't their problem. It's the application team's problem. But the application team monitors errors, not warnings, because errors are the application's equivalent of infrastructure downtime: the things that break the user experience.

The warning fell between two teams' definitions of "problem." Neither team's monitoring was wrong. The gap was in the org chart, not the code.

## Fixing the silence

The fix was two lines. Change `subscription_id` to `stripe_subscription_id` in the table schema. Or change `stripe_subscription_id` to `subscription_id` in the handler code. Either direction works. The fix took thirty seconds to implement and six hours to discover.

The larger fix, the one that prevents this class of failure, is more interesting. The webhook handler now validates that every INSERT actually wrote a row. After the INSERT, it queries the table for the expected record. If the record isn't there, the handler returns 500 instead of 200, which causes Stripe to retry, which will fail again, which will eventually trigger Stripe's own alerting ("webhook endpoint consistently failing"), which will send an email, which a human will read.

This is, admittedly, a Rube Goldberg approach to error detection. The better approach, the one we also implemented, is to classify database write failures as errors, not warnings, so the monitoring catches them immediately. But the belt-and-suspenders approach exists because I now distrust any system that reports its own success. A system that says "I wrote the data" might be wrong. A system that says "I wrote the data and here it is" is verifiable.

## The metaphor, again

The institutional version of this fix would be: after filing a constituent concern, check whether the concern influenced a policy decision. Not "was the concern filed?" That's the 200 OK. But "did the filing result in a state change?"

This fix doesn't exist in most institutions, for the same reason it didn't exist in the webhook: it requires the system to evaluate its own efficacy, and systems that evaluate their own efficacy risk discovering they have none. The webhook that checks whether its write succeeded might discover that writes have been failing for six hours. The institution that checks whether constituent feedback influences policy might discover that it never has.

The 200 OK is safer. For the system, not for the citizen. For the webhook, not for the data. The responsive non-response persists because the alternative, honest evaluation of whether the response accomplished anything, is more threatening than the silence it would reveal.

The webhook writes correctly now. The column matches. The data persists. The 200 means OK because the system verified it means OK. Trust, but verify. And when verification reveals that trust was misplaced, change the column name. It takes thirty seconds. The silence it fixes might have lasted indefinitely.
