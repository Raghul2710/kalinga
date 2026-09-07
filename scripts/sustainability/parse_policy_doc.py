"""Dump the policy table from the exported Google Doc, flagging red-coloured text.

Google Docs exports colour as a CSS class; the doc marks the policies that are
still missing from the site in dark red (#980000). Each list item is checked
separately so a mixed cell reports item-by-item.
"""
import json, re, sys, html as htmlmod

page = open(sys.argv[1], encoding='utf-8', errors='replace').read()

css = re.search(r'<style[^>]*>(.*?)</style>', page, re.S).group(1)
red = {m.group(1) for m in re.finditer(r'[.](c\d+)[{]([^}]*)[}]', css)
       if re.search(r'color:#(98|ff|cc|e0|d0|b0|a0)0000', m.group(2))}

body = page[page.find('<body'):]


def strip_tags(fragment):
    return htmlmod.unescape(re.sub(r'<[^>]+>', '', fragment)).strip()


def cell_items(cell_html):
    """Split a cell into its list items / paragraphs, each with a red flag."""
    chunks = re.findall(r'<(?:li|p)\b[^>]*>.*?</(?:li|p)>', cell_html, re.S)
    items = []
    for chunk in chunks:
        text = strip_tags(chunk)
        if not text:
            continue
        classes = set()
        for attr in re.findall(r'class="([^"]*)"', chunk):
            classes.update(attr.split())
        items.append({"text": text, "red": bool(classes & red)})
    return items


rows = []
for table in re.findall(r'<table.*?</table>', body, re.S):
    for row in re.findall(r'<tr.*?</tr>', table, re.S):
        cells = [cell_items(c) for c in re.findall(r'<td.*?</td>', row, re.S)]
        if len(cells) >= 3:
            rows.append({
                "goal": " ".join(i["text"] for i in cells[0]),
                "theme": " ".join(i["text"] for i in cells[1]),
                "policies": cells[2],
            })

out = sys.stdout
if len(sys.argv) > 2:
    json.dump(rows, open(sys.argv[2], "w", encoding="utf-8"), indent=2, ensure_ascii=False)
    out = open(sys.argv[2] + ".txt", "w", encoding="utf-8")

for r in rows:
    print(f"\n{r['goal']}   [{r['theme']}]", file=out)
    for p in r["policies"]:
        print(f"   {'RED  ' if p['red'] else '     '}{p['text']}", file=out)
