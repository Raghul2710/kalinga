"""Render archivesIssue2Data entries for the papers in the manifest."""
import json, re, sys

manifest = json.load(open(sys.argv[1], encoding='utf-8'))
start_id = int(sys.argv[2])

# The archive list is rendered in Title Case throughout, so lowercase connector
# words from the sheet are lifted to match. Words that already carry an
# uppercase letter are left alone so acronyms survive.
ACRONYMS = {"Smes": "SMEs"}


def title_case(text):
    def fix(word):
        if word in ACRONYMS:
            return ACRONYMS[word]
        if any(c.isupper() for c in word):
            return word
        return word[:1].upper() + word[1:]
    return re.sub(r"[A-Za-z][A-Za-z']*", lambda m: fix(m.group(0)), text)


def js_string(value):
    return json.dumps(value, ensure_ascii=False)


blocks = []
for offset, entry in enumerate(manifest):
    blocks.append(
        "        {\n"
        f"            id: {start_id + offset},\n"
        f"            shortName: {js_string(title_case(entry['title']))},\n"
        f"            title: {js_string(entry['author'])},\n"
        '            duration: "April - June 2026",\n'
        '            level: "VOL 1",\n'
        f"            slug: \"/univista/vol-1-issue-2/{entry['filename']}\"\n"
        "        },"
    )

sys.stdout.write("\n".join(blocks) + "\n")
