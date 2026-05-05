# Human dispatches every connection request; automation never sends

LinkedIn's Terms of Service prohibit automated sending of connection requests. Beyond compliance, automated sending removes the final quality check on the Draft message before it reaches a real person.

The Pipeline halts at the Review queue. The dashboard presents the Draft message alongside the Profile and a button that copies the message to the clipboard and opens the LinkedIn profile simultaneously. The human reads, optionally edits, and manually sends.

This constraint is enforced at both the architectural level (no code in the system can submit a LinkedIn connection request) and the prompt level (Mode files instruct the LLM that its output is a draft for human review, not an instruction to act).

## Consequences

The throughput ceiling is the human's daily capacity to review and send, not the Pipeline's processing rate. The Review queue may accumulate; the dashboard must surface the highest-scored Profiles first.
