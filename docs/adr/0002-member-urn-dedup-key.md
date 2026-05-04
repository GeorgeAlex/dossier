# Use Member URN as the primary dedup key for Profiles

LinkedIn vanity URLs (linkedin.com/in/…) can be changed by the user at any time. Using them as a dedup key would cause false negatives (the same person re-enters the Pipeline after a URL change) and wasted View budget on Profiles already seen. The Member URN (e.g. `urn:li:fsd_profile:ACoAA…`) is LinkedIn's internal identifier and does not change.

The `seen_profiles` table is keyed on Member URN. A Profile is considered seen — and blocked from re-entry — only if its URN matches, regardless of what URL it was reached at.

## Consequences

The Member URN must be extracted from the Sales Navigator page source or response during scraping; it is not present in the profile URL itself. It is opaque and not human-readable, but it is the only stable identity for a Profile.
