"""Join the Univista sheet rows to the Drive PDFs and emit a download manifest.

Sheet is authoritative for the displayed title/author; Drive supplies the file.
They are matched on the leading "PDF No." in the Drive filename.
"""
import csv, json, re, sys, unicodedata

sheet_path, drive_path, out_path = sys.argv[1], sys.argv[2], sys.argv[3]

rows = list(csv.DictReader(open(sheet_path, encoding='utf-8-sig')))
sheet = {}
for r in rows:
    no = r['PDF No.'].strip()
    if not no:
        continue
    sheet[int(no)] = {"title": r['Title'].strip(), "author": r['Name'].strip()}

drive = json.load(open(drive_path, encoding='utf-8'))
by_no = {}
for f in drive:
    m = re.match(r'\s*(\d+)', f['name'])
    if not m:
        print("!! no leading number:", f['name'])
        continue
    by_no.setdefault(int(m.group(1)), []).append(f)

print("sheet rows:", len(sheet), "drive files:", len(drive))
print("in sheet, missing from drive:", sorted(set(sheet) - set(by_no)))
print("in drive, missing from sheet:", sorted(set(by_no) - set(sheet)))
print("duplicate numbers in drive:", {n: [x['name'] for x in v] for n, v in by_no.items() if len(v) > 1})


def slugify(name):
    """Author name -> filename-safe slug, matching the existing 31-60 convention."""
    name = unicodedata.normalize('NFKD', name).encode('ascii', 'ignore').decode()
    name = re.sub(r'[^A-Za-z0-9]+', '-', name).strip('-')
    return name


manifest = []
for no in sorted(set(sheet) & set(by_no)):
    author = sheet[no]['author']
    manifest.append({
        "no": no,
        "title": sheet[no]['title'],
        "author": author,
        "drive_id": by_no[no][0]['id'],
        "drive_name": by_no[no][0]['name'],
        "filename": f"{no}-{slugify(author)}.pdf",
    })

json.dump(manifest, open(out_path, "w", encoding="utf-8"), indent=2, ensure_ascii=False)
print("\nmanifest entries:", len(manifest))
for e in manifest:
    print(f"{e['no']:4} {e['filename']:45} <- {e['drive_name']}")
