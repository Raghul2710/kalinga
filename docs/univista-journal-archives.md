# Univista Journal — Archives

Covers the **Archives** section of
[`src/app/International-Journal-of-Research-and-Studies/page.jsx`](../src/app/International-Journal-of-Research-and-Studies/page.jsx),
which lists the published papers of *Univista: International Journal of Research
and Studies*.

Live page: `/International-Journal-of-Research-and-Studies`

## Data model

Two arrays in `page.jsx` back the two archive tabs:

| Array | Tab | Notes |
| --- | --- | --- |
| `archivesData` | Vol. 1, Issue 1 | Papers hosted on the Kalinga CDN |
| `archivesIssue2Data` | Vol. 1, Issue 2 | Mixed: early papers on the CDN, later batches served from `public/` |

`activeArchiveTab` selects between them, and the result is handed to the shared
`ProgramsOffered` component. Each entry looks like:

```js
{
    id: 138,                                   // React key only — must be unique per array
    shortName: "A Study On UPI Adoption In Raipur, Chhattisgarh",  // paper title (displayed as the heading)
    title: "Akanksha Patel",                   // author(s) (displayed under the heading)
    duration: "April - June 2026",             // shown as "Duration: ..."
    level: "VOL 1",                            // watermark text on the card
    slug: "/univista/vol-1-issue-2/61-Akanksha-Patel.pdf"
}
```

Two field names are counter-intuitive and easy to get wrong: **`shortName` holds
the paper title** and **`title` holds the author names**.

### Slugs

`slug` is passed straight through by `ProgramsOffered`: a value starting with
`http` or `/` is used as given and opens in a new tab; anything else is treated
as a course slug and gets a `/courses/` prefix. Always use a leading `/` for
locally hosted PDFs.

PDFs added from Issue 2 onward live in `public/univista/vol-1-issue-2/` and are
named `<PDF No.>-<Author-Name>.pdf`.

### `id` uniqueness

`id` is used only as the React key in the rendered list. Duplicates make React
log "Encountered two children with the same key" and can reuse the wrong row
when the Archives search box filters the list, so every entry within an array
needs its own value. `scripts/univista/check_ids.py` reports duplicates.

## Adding a batch of papers

Batches arrive as a Google Sheet (`PDF No.`, `Title`, `Name`) plus a public
Google Drive folder of PDFs named `<PDF No.> <Author>.pdf`. The helper scripts in
[`scripts/univista/`](../scripts/univista/) automate the join and download; all
of them expect to be run from the repository root.

```bash
# 1. Grab the sheet as CSV and the Drive folder listing
curl -sL "https://docs.google.com/spreadsheets/d/<SHEET_ID>/export?format=csv" -o sheet.csv
curl -sL "https://drive.google.com/drive/folders/<FOLDER_ID>" -o drive.html

# 2. Extract the Drive file ids and names
python scripts/univista/parse_drive.py drive.html drive_files.json

# 3. Join sheet rows to Drive files on the leading PDF number.
#    Reports anything present in one source but not the other — this must come
#    back clean before going further.
python scripts/univista/build_manifest.py sheet.csv drive_files.json manifest.json

# 4. Download the PDFs (verifies each response is really a PDF)
bash scripts/univista/download_pdfs.sh manifest.json public/univista/vol-1-issue-2

# 5. Render the JSX entries, continuing from the last id already in the array
python scripts/univista/gen_entries.py manifest.json <NEXT_ID>

# 6. Paste the output before the closing `];` of archivesIssue2Data, then verify
python scripts/univista/verify_slugs.py   # every slug resolves to a real file
python scripts/univista/check_ids.py      # no duplicate React keys
```

The sheet is authoritative for the displayed title and author — Drive filenames
have contained misspellings that the sheet gets right. `gen_entries.py` lifts
lowercase connector words to Title Case so new rows match the existing house
style, and maps known acronyms (see `ACRONYMS`) back to their correct casing.

## Verifying

The Issue 2 list is only rendered once its tab is selected, so fetching the page
HTML will not show it — check it in a browser:

1. `npm run dev`, open the page and click **Vol. 1, Issue 2**.
2. Confirm the new papers appear and the console is free of duplicate-key errors.
3. Use the **Search Archives** box to find one of the new titles and follow its
   **Download PDF** link.
