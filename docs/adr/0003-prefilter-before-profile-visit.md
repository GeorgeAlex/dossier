# Run the Pre-filter on Snippet metadata before any Profile visit

The View budget is the most constrained resource in the Pipeline. Visiting a Profile page to then decide it is irrelevant wastes budget and increases detection risk. Snippet metadata (title, headline, company) is available from Sales Navigator search results at zero Profile visit cost and contains enough signal to reject obvious non-recruiters.

The Pre-filter — a regex/keyword match on the title field — runs immediately after the search results are stored, before the Profile fetcher is invoked. Only Profiles that pass the Pre-filter consume View budget.

## Consequences

The Pre-filter operates only on Snippet metadata, so it will produce false negatives (recruiters with unconventional titles slipping through). This is acceptable: the Classifier gate catches misclassifications after the LLM analysis. The Pre-filter's job is to eliminate the obvious non-cases cheaply, not to be precise.
