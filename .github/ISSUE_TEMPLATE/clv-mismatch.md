---
name: CLV Mismatch Report
about: Report when CLV lookup fails or returns incorrect closing odds for a match
title: "CLV Mismatch: {Event Name}"
labels: clv-mismatch
assignees: ''
---

## Event Details

- **Event:** {e.g. Manchester City vs Liverpool}
- **Tournament/League:** {e.g. Premier League}
- **Sport:** {e.g. Football}
- **Match Date/Time:** {e.g. 2025-01-15 15:00 GMT}
- **Bookmaker:** {e.g. Bet365}
- **Market:** {e.g. Match Winner, Over/Under 2.5}

## Your Bet Details

- **Your Opening Odds:** {e.g. 2.10}
- **Selection:** {e.g. Home Win, Over 2.5}
- **Expected Closing Odds:** {from OddsPortal - e.g. 2.05}

## Issue Type

- [ ] Event not found on OddsPortal
- [ ] Wrong match returned (different teams/event)
- [ ] Incorrect closing odds returned
- [ ] League/tournament not mapped correctly
- [ ] Other (describe below)

## OddsPortal Link

If you found the correct match on OddsPortal, please paste the URL here:

```
https://www.oddsportal.com/...
```

## How Event Appears on Surebet.com

Copy the exact event name as it appears on surebet.com (this helps with fuzzy matching):

```
{e.g. "Manchester City v Liverpool FC"}
```

## How Event Appears on OddsPortal

Copy the exact event name as it appears on OddsPortal:

```
{e.g. "Manchester City - Liverpool"}
```

## Additional Context

Any other details that might help improve the matching algorithm:

- Different team naming conventions
- League/tournament naming variations
- Timezone or date format issues
- etc.

---

**Thank you for reporting!** This helps improve CLV matching for everyone.

We'll review your submission and update the league mappings or fuzzy matching rules accordingly.
