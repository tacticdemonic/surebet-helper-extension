---
name: CSV Import Match Issue
about: Report issues with CSV import not matching bets correctly
title: 'CSV Import: [Brief Description]'
labels: bug, csv-import
assignees: ''
---

## CSV Import Match Failure Report

**Extension Version:** 
**CSV Format:** (Betfair / Smarkets / Other)
**Browser:** (Chrome / Firefox / Edge)

### Summary
- **Matched:** X
- **Unmatched:** Y
- **Total CSV Entries:** Z
- **Pending Bets Available:** N

### Unmatched CSV Entries

| Event | Market | P/L |
|-------|--------|-----|
| Example Event | Example Market | -5.00 |

### Pending Bets Available

| Event | Market | Bookmaker |
|-------|--------|-----------|
| Example Event | Example Market | Betfair |

### Normalization Debug

**CSV Entry:**
- Raw Event: `Original event name`
- Normalized: `normalized event name`
- Raw Market: `Original market`
- Normalized: `normalized market`

**Best Candidate (if any):**
- Event: `Bet event` → `normalized`
- Market: `Bet market` → `normalized`
- Event Match: X%
- Levenshtein: Y%
- Token Overlap: Z%
- Common Tokens: [token1, token2]
- Shared Market Types: [MATCHWIN, etc.]

### Full Debug JSON

<details>
<summary>Click to expand</summary>

```json
{
  "timestamp": "...",
  "csvFormat": "...",
  "csvEntries": [...],
  "pendingBets": [...],
  "matchAttempts": [...],
  "matchedCount": 0,
  "unmatchedCount": 0
}
```

</details>

### Additional Context

Add any other context about the problem here. For example:
- Were the bets saved from the same browser?
- Did you notice any pattern in unmatched bets?
- Any special characters in event/market names?
