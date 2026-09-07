"""Print the archivesIssue2Data entries at or above a given id, for review."""
import re, sys

start = int(sys.argv[1])
src = open('src/app/International-Journal-of-Research-and-Studies/page.jsx', encoding='utf-8').read()
body = re.search(r'const archivesIssue2Data = \[(.*?)\n    \];', src, re.S).group(1)

fields = r'id:\s*(\d+),\s*\n\s*shortName:\s*"([^"]*)",\s*\n\s*title:\s*"([^"]*)"'
new = [e for e in re.findall(fields, body) if int(e[0]) >= start]
print(len(new), 'entries\n')
for i, (eid, short, author) in enumerate(new, 1):
    print(f"{i:2}. [id {eid}] {author}\n     {short}")
