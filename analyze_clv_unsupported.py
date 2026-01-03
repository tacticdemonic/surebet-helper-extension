import json
import os
from collections import defaultdict

# Load the JSON file
with open('surebet-bets-2025-12-12T08-01-15.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Supported leagues from footballDataLeagues.js
SUPPORTED_LEAGUES = {
    'E0', 'E1', 'E2', 'E3', 'EC', 'SC0', 'SC1', 'SC2', 'SC3',
    'D1', 'D2', 'SP1', 'SP2', 'I1', 'I2', 'F1', 'F2', 'N1',
    'B1', 'P1', 'G1', 'T1'
}

# Unsupported tournaments list from footballDataLeagues.js
UNSUPPORTED_TOURNAMENTS = [
    'europe - uefa champions league', 'uefa champions league', 'champions league',
    'europe - uefa europa league', 'uefa europa league', 'europa league',
    'europe - uefa conference league', 'uefa conference league',
    'world cup', 'euro', 'copa america', 'africa cup of nations',
    'chile - chile cup', 'chile cup', 'egypt - egypt league cup', 'egypt league cup',
    'fa cup', 'efl cup', 'copa del rey', 'coupe de france', 'coppa italia', 'dfb pokal',
    "women's champions league", "uefa women's champions league",
    'asia - afc champions league 2', 'afc champions league 2', 'afc champions league two',
    'mls', 'j-league', 'k-league', 'chinese super league', 'indian super league',
    'australia a-league', 'saudi pro league', 'kenyan premier league', 'kenya premier league',
    'saudi arabia - saudi arabia league division 1', 'saudi arabia league division 1',
    'serbia - serbia superliga', 'serbia superliga',
    'romanian liga 1', 'romania - romania liga 1', 'romania liga 1',
    'portugal liga 2', 'portuguese liga 2',
    'guatemala - guatemala liga nacional', 'guatemalan liga nacional', 'guatemala liga nacional',
    'bolivia - bolivia primera division', 'bolivia primera division', 'bolivia primera'
]

def is_unsupported_tournament(tournament_name):
    if not tournament_name:
        return False
    normalized = tournament_name.lower().strip()
    for unsupported in UNSUPPORTED_TOURNAMENTS:
        if normalized == unsupported or unsupported in normalized:
            return True
    return False

def map_tournament_to_league(tournament_name):
    if not tournament_name:
        return None
    normalized = tournament_name.lower().strip()

    # Simple mapping for supported leagues
    mappings = {
        'premier league': 'E0', 'english premier league': 'E0', 'england premier league': 'E0',
        'championship': 'E1', 'english championship': 'E1',
        'league one': 'E2', 'english league one': 'E2',
        'league two': 'E3', 'english league two': 'E3',
        'national league': 'EC',
        'scottish premiership': 'SC0', 'scotland premiership': 'SC0',
        'bundesliga': 'D1', 'german bundesliga': 'D1',
        'bundesliga 2': 'D2', '2. bundesliga': 'D2',
        'la liga': 'SP1', 'spanish la liga': 'SP1',
        'segunda division': 'SP2', 'la liga 2': 'SP2',
        'serie a': 'I1', 'italian serie a': 'I1',
        'serie b': 'I2', 'italian serie b': 'I2',
        'ligue 1': 'F1', 'french ligue 1': 'F1',
        'ligue 2': 'F2', 'french ligue 2': 'F2',
        'eredivisie': 'N1', 'dutch eredivisie': 'N1',
        'first division': 'B1', 'belgian first division': 'B1',
        'primeira liga': 'P1', 'portuguese primeira liga': 'P1',
        'super league': 'G1', 'greek super league': 'G1',
        'super lig': 'T1', 'turkish super lig': 'T1'
    }

    for key, code in mappings.items():
        if key in normalized:
            return code
    return None

# Analyze bets
unsupported_bets = []
tournament_counts = defaultdict(int)
clv_status_counts = defaultdict(int)

for bet in data['bets']:
    tournament = bet.get('tournament', '').strip()
    tournament_counts[tournament] += 1

    # Check CLV status
    has_clv = 'clv' in bet
    has_clv_retry = 'clvRetryCount' in bet
    has_clv_error = 'clvLastRetry' in bet

    if has_clv:
        clv_status = 'has_clv'
    elif has_clv_retry:
        clv_status = 'retrying'
    else:
        clv_status = 'no_clv_attempt'

    clv_status_counts[clv_status] += 1

    # Check if unsupported - bets that are retrying CLV (indicating unsupported)
    if has_clv_retry and not has_clv:
        league_code = map_tournament_to_league(tournament)
        is_explicitly_unsupported = is_unsupported_tournament(tournament)
        is_not_supported_league = league_code not in SUPPORTED_LEAGUES if league_code else True

        unsupported_bets.append({
            'tournament': tournament,
            'league_code': league_code,
            'clv_status': clv_status,
            'retry_count': bet.get('clvRetryCount', 0),
            'is_explicitly_unsupported': is_explicitly_unsupported,
            'is_not_in_supported_leagues': is_not_supported_league
        })

# Group by tournament
unsupported_tournaments = defaultdict(list)
for bet in unsupported_bets:
    unsupported_tournaments[bet['tournament']].append(bet)

# Print results
print("=== CLV UNSUPPORTED TOURNAMENTS ANALYSIS ===")
print(f"Total bets analyzed: {len(data['bets'])}")
print(f"CLV status breakdown: {dict(clv_status_counts)}")
print(f"Unique tournaments: {len(tournament_counts)}")
print()

print("=== UNSUPPORTED TOURNAMENTS FOR CLV TRACKING ===")
for tournament, bets in sorted(unsupported_tournaments.items()):
    count = len(bets)
    sample_bet = bets[0]
    reason = []
    if sample_bet['is_explicitly_unsupported']:
        reason.append("explicitly in unsupported list")
    if sample_bet['is_not_in_supported_leagues']:
        reason.append("not in supported leagues mapping")
    if not reason:
        reason.append("no CLV data available")

    print(f"- {tournament} ({count} bets): {', '.join(reason)}")

print()
print("=== SUPPORTED TOURNAMENTS WITH CLV DATA ===")
supported_tournaments = defaultdict(int)
for bet in data['bets']:
    if 'clv' in bet:
        tournament = bet.get('tournament', '').strip()
        supported_tournaments[tournament] += 1

if supported_tournaments:
    for tournament, count in sorted(supported_tournaments.items()):
        league_code = map_tournament_to_league(tournament)
        print(f"- {tournament} ({count} bets): {league_code}")
else:
    print("No supported tournaments with CLV data found in this dataset.")

print()
print("=== ALL TOURNAMENTS WITH CLV STATUS ===")
for tournament, count in sorted(tournament_counts.items(), key=lambda x: x[1], reverse=True):
    league_code = map_tournament_to_league(tournament)
    has_clv = any('clv' in bet for bet in data['bets'] if bet.get('tournament', '').strip() == tournament)
    has_retry = any('clvRetryCount' in bet for bet in data['bets'] if bet.get('tournament', '').strip() == tournament)
    if has_clv:
        status = "CLV supported"
    elif has_retry:
        status = "CLV unsupported (retrying)"
    else:
        status = "CLV not attempted"
    print(f"- {tournament}: {count} bets ({status})")