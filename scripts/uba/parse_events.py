"""Render the UBA event sheet as the `ubaEventDetails` array for page.jsx."""
import csv, json, re, sys

rows = list(csv.DictReader(open(sys.argv[1], encoding='utf-8-sig')))

out = []
for r in rows:
    no = (r['S.No.'] or '').strip()
    if not no:
        continue
    # Sheet cells carry hard line breaks and doubled spaces; flatten to one line.
    # A word split across a line break ("Market-\nLinkage") rejoins without a gap.
    name = re.sub(r'-\s*\n\s*', '-', r['Name of the Event'] or '')
    name = re.sub(r'\s+', ' ', name).strip()
    date = re.sub(r'\s+', ' ', (r['Date of the Event'] or '')).strip()
    name = re.sub(r'^Title:\s*', '', name)
    out.append({"slNo": int(no), "event": name, "date": date})

print(f"{len(out)} events parsed", file=sys.stderr)
lines = ["const ubaEventDetails = ["]
for e in out:
    lines.append(
        f"  {{ slNo: {e['slNo']}, event: {json.dumps(e['event'], ensure_ascii=False)}, "
        f"date: {json.dumps(e['date'], ensure_ascii=False)} }},"
    )
lines.append("];")
open(sys.argv[2], "w", encoding="utf-8").write("\n".join(lines) + "\n")
