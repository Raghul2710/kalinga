"""Report duplicate ids inside each archives array of the journal page."""
import re
from collections import Counter

src = open('src/app/International-Journal-of-Research-and-Studies/page.jsx', encoding='utf-8').read()

for name in ('archivesData', 'archivesIssue2Data'):
    m = re.search(r'const ' + name + r' = \[(.*?)\n    \];', src, re.S)
    body = m.group(1)
    ids = [int(i) for i in re.findall(r'id:\s*(\d+),', body)]
    dupes = {i: c for i, c in Counter(ids).items() if c > 1}
    print(f"{name}: {len(ids)} entries, {len(set(ids))} unique ids")
    if dupes:
        print("  duplicate ids:", dict(sorted(dupes.items())))
