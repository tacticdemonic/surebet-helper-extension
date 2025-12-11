# CLV Tracking Troubleshooting Guide

Use this guide when CLV checks in the extension return empty results, stay Pending, or show scrape errors.

---

## Fast Triage (do these first)

1) **API health**  
`Invoke-RestMethod http://localhost:8765/health` should return `status: ok`. If not, restart (see Restart section).

2) **Supported sport/league**  
Only the sports listed in [Supported inputs](#supported-inputs) work. League must match the OddsPortal slug (example: `england-premier-league`, `usa-nba`). Fix any mismatches in your bet data.

3) **Seed the cache**  
Run one manual scrape for the exact sport/league/season you need:  
`scrape_historic --sport <sport> --leagues <league-id> --season <season> --scrape_odds_history [--headless]`  
Start with a single league. If the command prints rows, the pipeline is fine.

4) **Check the log**  
Tail `odds_harvester_api.log` for errors (see Log reference). Address timeouts or selector issues, then rerun the scrape (try non-headless if needed).

5) **Confirm cache growth**  
`(Get-Item "$env:LOCALAPPDATA\SurebetHelper\OddsHarvesterAPI\clv_cache.db").Length / 1MB` should increase after a successful scrape.

6) **Retry in the extension**  
In Settings > CLV, ensure CLV is enabled, API URL is `http://localhost:8765`, then use Force CLV Check after the cache is populated.

---

## Manual Scraping (populating the cache)

Run OddsHarvester directly to fetch closing odds and write them to `clv_cache.db`.

### Pre-Cache via API (Recommended)
Use the new pre-cache endpoint to populate the cache in the background:
```powershell
# Pre-cache Premier League 2024-2025
Invoke-RestMethod -Uri "http://localhost:8765/api/precache-league?sport=football&league=england-premier-league&season=2024-2025" -Method POST

# Pre-cache La Liga 2024-2025
Invoke-RestMethod -Uri "http://localhost:8765/api/precache-league?sport=football&league=spain-laliga&season=2024-2025" -Method POST

# Pre-cache NBA 2024-2025
Invoke-RestMethod -Uri "http://localhost:8765/api/precache-league?sport=basketball&league=usa-nba&season=2024-2025" -Method POST
```
This runs in the background and can take 10-15 minutes per league.

### Command template (Manual)
```powershell
cd "$env:LOCALAPPDATA\SurebetHelper\OddsHarvesterAPI\OddsHarvester"
& "$env:LOCALAPPDATA\SurebetHelper\OddsHarvesterAPI\venv\Scripts\python.exe" -m src.main scrape_historic --sport <SPORT> --leagues <LEAGUE> --season <SEASON> --scrape_odds_history --headless
```

### Useful examples
- EPL 2024-2025  
```powershell
& "$env:LOCALAPPDATA\SurebetHelper\OddsHarvesterAPI\venv\Scripts\python.exe" -m src.main scrape_historic --sport football --leagues england-premier-league --season 2024-2025 --scrape_odds_history --headless
```
- La Liga 2024-2025  
```powershell
& "$env:LOCALAPPDATA\SurebetHelper\OddsHarvesterAPI\venv\Scripts\python.exe" -m src.main scrape_historic --sport football --leagues spain-laliga --season 2024-2025 --scrape_odds_history --headless
```
- ATP Tennis 2024  
```powershell
& "$env:LOCALAPPDATA\SurebetHelper\OddsHarvesterAPI\venv\Scripts\python.exe" -m src.main scrape_historic --sport tennis --leagues atp-singles --season 2024 --scrape_odds_history --headless
```
- NBA 2024-2025  
```powershell
& "$env:LOCALAPPDATA\SurebetHelper\OddsHarvesterAPI\venv\Scripts\python.exe" -m src.main scrape_historic --sport basketball --leagues usa-nba --season 2024-2025 --scrape_odds_history --headless
```

To observe the browser, drop `--headless`.

---

## Supported inputs

### Sports
| Sport | Value |
|-------|-------|
| Football/Soccer | `football` |
| Tennis | `tennis` |
| Basketball | `basketball` |
| Rugby League | `rugby-league` |
| Rugby Union | `rugby-union` |
| Ice Hockey | `ice-hockey` |
| Baseball | `baseball` |

### Common league slugs
| League | Identifier |
|--------|------------|
| English Premier League | `england-premier-league` |
| English Championship | `england-championship` |
| Spanish La Liga | `spain-laliga` |
| German Bundesliga | `germany-bundesliga` |
| Italian Serie A | `italy-serie-a` |
| French Ligue 1 | `france-ligue-1` |
| UEFA Champions League | `champions-league` |
| UEFA Europa League | `europa-league` |
| Netherlands Eredivisie | `eredivisie` |
| Belgium Pro League | `jupiler-pro-league` |
| Portugal Liga | `liga-portugal` |
| NBA | `nba` |

> **Tip:** League slugs must match OddsHarvester's `sport_league_constants.py`. Check `%LOCALAPPDATA%\SurebetHelper\OddsHarvesterAPI\OddsHarvester\src\utils\sport_league_constants.py` for the complete list.

### Command flags
| Flag | Description |
|------|-------------|
| `--sport` | Required sport value. |
| `--leagues` | OddsPortal slug for the league. |
| `--season` | Season, e.g., `2024-2025` or `2024`. |
| `--scrape_odds_history` | Required for CLV: grabs closing odds history. |
| `--headless` | Run without showing the browser. Remove it for debugging. |
| `--max_pages` | Optional: limit scraped result pages. |

---

## Logs and validation

### Tail the API log
```powershell
Get-Content "$env:LOCALAPPDATA\SurebetHelper\OddsHarvesterAPI\odds_harvester_api.log" -Tail 100
```

### What common messages mean
| Message | Meaning / Action |
|---------|------------------|
| `Found 0 event rows` | Page did not render or layout changed. Retry non-headless to inspect. |
| `Page.goto: Timeout 15000ms exceeded` | Page too slow or blocked. Retry; try visible browser. |
| `React event header selector not found` | OddsPortal structure changed; verify page markup manually. |
| `invalid choice: 'other'` | Bet uses an unsupported sport; correct the bet data. |

### Cache location and size
```powershell
# Path
$env:LOCALAPPDATA\SurebetHelper\OddsHarvesterAPI\clv_cache.db

# Size in MB
(Get-Item "$env:LOCALAPPDATA\SurebetHelper\OddsHarvesterAPI\clv_cache.db").Length / 1MB
```

### API health check
```powershell
Invoke-RestMethod -Uri "http://localhost:8765/health"
```

---

## Restarting the API server

```powershell
# Stop existing python processes
Get-Process -Name python -ErrorAction SilentlyContinue | Stop-Process -Force

# Start fresh
cd "$env:LOCALAPPDATA\SurebetHelper\OddsHarvesterAPI"
& ".\venv\Scripts\python.exe" -m uvicorn server:app --host 127.0.0.1 --port 8765
```

---

## Known limitations and quirks

### Supported Markets
**✅ CSV-Based CLV** supports the following market types for **22 European football leagues**:

#### Fully Supported (Pinnacle Closing Odds)
- **1X2 / Match Odds**: Home, Draw, Away
- **Over/Under 2.5 Goals**: Over 2.5, Under 2.5
- **Asian Handicap**: Any handicap line (e.g., -0.5, +1.0)

#### NOT Supported
- Shots on target (e.g., "Total over 8.5 - shot on target")
- Corners (e.g., "Total over 9.5 - corners")
- Cards (e.g., "Total over 3.5 - cards")
- Both Teams to Score (BTTS)
- Correct Score
- Player props
- Any other exotic markets

Data source: **football-data.co.uk** provides FREE Pinnacle closing odds for all supported markets. If your bets use unsupported markets, CLV data will not be available.

### Other Limitations
- OddsPortal rate limiting can slow or block scrapes; rerun with delays if needed.
- Individual pages can timeout after 15s; scraper continues to next page.
- Sport value `other` is unsupported for CLV scraping.
- Very recent events may not have closing odds indexed yet.
- Full season scrapes can take 10-15 minutes (API timeout is 15 minutes).

---

## Extension settings to verify
- Enable CLV Tracking is on.
- API URL is `http://localhost:8765`.
- Check Interval and Delay After Settlement are set to your preference.
- Use Force CLV Check after you know the cache contains the needed leagues.

---

Last updated: December 2024
