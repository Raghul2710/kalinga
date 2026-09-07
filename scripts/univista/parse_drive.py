"""Extract PDF file ids + names from a saved public Google Drive folder page.

The folder grid renders each file as a div carrying both the Drive file id and
the filename, e.g.
    <div ... data-id="1Eo4..." ... data-tooltip="61 Akanksha Patel.pdf PDF">
"""
import re, json, sys, html as htmlmod

page = open(sys.argv[1], encoding='utf-8', errors='replace').read()

pattern = 'data-id="([^"]+)"[^>]*data-tooltip="([^"]+?[.]pdf) PDF"'
matches = re.findall(pattern, page)

out, seen = [], set()
for fid, name in matches:
    if fid in seen:
        continue
    seen.add(fid)
    out.append({"id": fid, "name": htmlmod.unescape(name)})

print("unique pdfs:", len(out))
for i, e in enumerate(out, 1):
    print(f"{i:3} {e['id']}  {e['name']}")
json.dump(out, open(sys.argv[2], "w", encoding="utf-8"), indent=2, ensure_ascii=False)
