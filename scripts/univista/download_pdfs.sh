#!/usr/bin/env bash
# Download the manifest's Drive PDFs into the given destination directory.
set -u
MANIFEST="$1"
DEST="$2"
mkdir -p "$DEST"

# tr -d strips the CR that Python's Windows text mode appends, which would
# otherwise end up in the output filename.
python - "$MANIFEST" <<'PYEOF' | tr -d '\r' > /tmp/univista/dl.tsv
import json, sys
for e in json.load(open(sys.argv[1], encoding='utf-8')):
    print(e["drive_id"] + "\t" + e["filename"])
PYEOF

fail=0
while IFS=$'\t' read -r id fname; do
  [ -z "$id" ] && continue
  out="$DEST/$fname"
  curl -sL --max-time 120 "https://drive.usercontent.google.com/download?id=${id}&export=download" -o "$out"
  if [ -f "$out" ] && [ "$(head -c 4 "$out")" = '%PDF' ]; then
    printf 'ok   %-45s %8s bytes\n' "$fname" "$(wc -c < "$out")"
  else
    printf 'FAIL %-45s (not a PDF)\n' "$fname"
    fail=$((fail+1))
  fi
done < /tmp/univista/dl.tsv
echo "failures: $fail"
