"""Check every relative archive slug in the journal page points at a real file."""
import os, re, sys

page = open('src/app/International-Journal-of-Research-and-Studies/page.jsx', encoding='utf-8').read()
slugs = re.findall(r'slug:\s*"(/[^"]+\.pdf)"', page)
print("relative pdf slugs:", len(slugs))

missing = [s for s in slugs if not os.path.isfile(os.path.join('public', s.lstrip('/')))]
print("missing files:", len(missing))
for s in missing:
    print("  MISSING", s)

dupes = {s for s in slugs if slugs.count(s) > 1}
print("duplicate slugs:", sorted(dupes) or "none")

ids = [int(i) for i in re.findall(r'id:\s*(\d+),', page)]
new = [i for i in ids if i >= 138]
print("new ids:", min(new), "-", max(new), "count", len(new),
      "| duplicates:", sorted({i for i in new if new.count(i) > 1}) or "none")
sys.exit(1 if missing else 0)
