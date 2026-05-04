# Use Sales Navigator as the scraping target

Free LinkedIn's commercial-use detection and rate limits make it unsuitable for a daily automated pipeline — searches throttle quickly and account flags are aggressive. Sales Navigator is a paid prospecting product with richer search filters, more structured Snippet metadata, and a product tier explicitly designed for this use case. We use Sales Navigator as the scraping target despite its tighter View budget.

## Consequences

The View budget becomes the most constrained resource in the Pipeline — tighter than the LLM API budget. Every architectural decision about pipeline ordering must protect it: the Pre-filter runs on Snippet metadata before any Profile visit occurs, and a strict daily ceiling is enforced in code.
