---
name: Add Exchange Support
about: Provide DOM selectors and supporting details to add or fix an exchange auto-fill
title: "Add Support for {Exchange Name}"
labels: enhancement, help wanted
assignees: ''
---

## Exchange details
- **Exchange name:** {e.g. Betfair}
- **Domain tested:** {e.g. www.betfair.com}
- **Country-specific domain?:** {e.g. Betfair (AU)}
- **Browser / OS:** {e.g. Firefox 120 on Windows}

## Console output from diagnostic script
Paste the output below (if you used the console helper script, paste the JSON block):
```
[Paste console output here]
```

## Steps to reproduce
- What page did you open to get the betting slip? (URL or navigation steps)
- Any special actions (e.g., add bet, open market, switch to mobile view)?


## HTML of stake input and parent containers
Please copy the stake input element and at least 2–3 parent levels up and paste it here. Include the classes and data attributes.

```
[Paste HTML snippet here]
```

## Suggested selectors (optional)
- bettingSlip: `[class*="betslip"], ...`
- stakeInput: `input.betslip-size-input[ng-model*="size"], ...`
- odds: `...`
- selection: `...`

## Screenshots
Attach a screenshot showing the stake input in the betting slip (recommended)
 
## Additional info for maintainers (optional)
- Did you try the `tools/collect_betslip_info.js` script from the repo? (Yes/No)
- If you ran the script, paste the JSON here and confirm the best matching selector(s) that should be used for `BETTING_SLIP_SELECTORS`.

## Additional notes
Any other info that may help (e.g., mobile vs desktop differences, dynamic loading, Angular/React/Vue frameworks):

---

Thanks! We'll review your submission and aim to add the support in the next release.