"""Compare the policy list parsed from the doc against the site's current data."""
import json, re, sys

doc_rows = json.load(open(sys.argv[1], encoding='utf-8'))
src = open('src/app/components/sustainability/data/sdg-content.js', encoding='utf-8').read()
block = re.search(r'export const SUSTAINABILITY_POLICIES = \[(.*?)\n\];', src, re.S).group(1)


def split_objects(text):
    """Yield each top-level { ... } object from an array body."""
    depth, start = 0, None
    for i, ch in enumerate(text):
        if ch == '{':
            if depth == 0:
                start = i
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0:
                yield text[start:i + 1]


site = []
for obj in split_objects(block):
    goal = re.search(r'goal:\s*"([^"]*)"', obj).group(1)
    theme = re.search(r'theme:\s*"([^"]*)"', obj)
    pol_body = re.search(r'policies:\s*\[(.*)\]', obj, re.S).group(1)
    # plain "string" entries plus label: "..." entries from linked objects
    labels = re.findall(r'label:\s*"([^"]*)"', pol_body)
    plain = re.findall(r'(?<![a-zA-Z]:\s)"([^"]*)"(?=\s*,|\s*$)', pol_body)
    plain = [p for p in plain if p not in labels and not p.startswith('/')]
    site.append({"goal": goal, "theme": theme.group(1) if theme else "", "policies": plain + labels})

norm = lambda s: re.sub(r'\s+', ' ', s.replace('\u2013', '-').replace('\u2019', "'")).strip().lower()
site_by_goal = {norm(e['goal']): e for e in site}

out = open(sys.argv[2], 'w', encoding='utf-8') if len(sys.argv) > 2 else sys.stdout
print(f"site goals: {len(site)}   doc goals: {sum(1 for r in doc_rows if r['goal'].startswith('SDG '))}\n", file=out)

for row in doc_rows:
    goal = row['goal']
    if not goal.startswith('SDG ') or goal.strip() == 'SDG':
        continue
    current = site_by_goal.get(norm(goal))
    if current is None:
        print(f"[WHOLE GOAL MISSING FROM SITE] {goal}  [theme: {row['theme'] or '(blank in doc)'}]", file=out)
        for p in row['policies']:
            print(f"      {'RED ' if p['red'] else '    '} {p['text']}", file=out)
        print(file=out)
        continue
    have = {norm(p) for p in current['policies']}
    doc_have = {norm(d['text']) for d in row['policies']}
    missing = [p for p in row['policies'] if norm(p['text']) not in have]
    extra = [p for p in current['policies'] if norm(p) not in doc_have]
    if missing or extra:
        print(f"{goal}", file=out)
        for p in missing:
            print(f"   + in doc, missing on site {'(RED)' if p['red'] else '     '} {p['text']}", file=out)
        for p in extra:
            print(f"   - on site, not in doc:       {p}", file=out)
        print(file=out)
    else:
        print(f"{goal}  — in sync ({len(have)} policies)", file=out)
