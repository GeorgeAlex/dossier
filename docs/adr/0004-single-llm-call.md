# Single LLM call per Profile for classification and Draft message generation

Splitting Three-axis classification and Draft message generation into separate LLM calls loses context: the message generator produces better, more specific output when it can see the classification reasoning inline rather than receiving a bare score. It also doubles latency and token cost for no architectural benefit.

A single structured-output call returns the three axis scores, supporting reasoning, tech signals, and the Draft message in one response. Workers run this call in parallel via BullMQ concurrency.

## Considered options

- **Two calls (classify then generate):** cleaner separation of concerns, but the message prompt would need to reconstruct context the classifier already had. Rejected.
- **Chained agent (classify → reflect → generate):** adds inter-step latency and failure surface. The task does not require reflection or tool use. Rejected.
