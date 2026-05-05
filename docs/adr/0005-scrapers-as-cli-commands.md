# Implement scrapers as CLI commands, not long-running services

The Search executor and Profile fetcher are bounded batch operations: they run, process a fixed daily workload, and exit. They do not need to stay alive between runs. A long-running daemon adds unnecessary complexity (health checks, restart policies, process supervision) for processes that are naturally invoked on a schedule.

Both scrapers are implemented as CLI commands (`dossier scrape` and `dossier fetch`) invoked by an external scheduler (cron or Cloud Scheduler). The Worker, which must stay alive to consume the BullMQ queue, remains a long-running service.

## Consequences

Scheduling is the responsibility of the deployment environment, not the application. Session state (Playwright browser profile directory) is a filesystem path, persisted between runs by mounting the same volume or directory. A scraper crash has no impact on the Worker or dashboard.

`dossier scrape` and `dossier fetch` are separate commands because they have different daily budgets, different failure modes, and the Profile fetcher is useful to re-run without repeating the search step when tuning the Pre-filter.
