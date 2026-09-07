# Sustainability page (`/sustainability`)

The Sustainability page presents the work of the University's SDG Cell. It uses a
two-column layout: a sticky **side panel** on the left and stacked content
sections on the right, in the order defined by the
"Sustainability - New Content" document.

## Layout

| Breakpoint | Navigation |
| --- | --- |
| `lg` and up | Sticky side rail (`SustainabilitySideNav`) beside the content |
| below `lg` | Collapsible picker pinned under the site header (`SustainabilitySectionPicker`) |

Both surfaces are driven by the same section list and the same active-section
state, so they can never drift apart.

The page banner and breadcrumb come from the global `Breadcrumb` component via
`src/lib/pageData.ts` — the page itself does not render a hero. The banner image
is `public/banners/sustainability-banner.webp` (SDG Cell team, 2000px wide),
cropped with `imagePosition: "object-center"` so the team stays in the 400px
band. Next.js runs with `images.unoptimized`, so banner artwork must be sized
down before it is committed rather than relying on the image pipeline.

## File map

```
src/app/sustainability/
  page.jsx                     Metadata + JSON-LD, renders the client
  SustainabilityClient.jsx     Assembles nav + sections in order

src/app/components/sustainability/
  useScrollSpy.js              Active-section tracking + smooth scroll helper
  SustainabilitySideNav.jsx    Desktop sticky rail
  SustainabilitySectionPicker.jsx  Mobile collapsible picker
  SectionNavLink.jsx           Shared nav item
  SectionBlock.jsx             Section shell (anchor id, heading, scroll offset)
  DocumentLinks.jsx            Shared grid of "open the PDF" buttons
  OrdinalText.jsx              Raises ordinal suffixes (12th → 12ᵗʰ) in plain copy
  data/
    navigation.js              Section ids + labels (drives nav AND order)
    sdg-content.js             Editorial copy, policy table, cell members, goal tiles
    coe-content.js             Office orders and downloadable-document links
    clubs-content.js           Green Club and BIS Standard Club
    initiatives-content.js     The six initiative detail-page links
  sections/                    One component per section
    policy/                    Blocks composed by SustainabilityPoliciesSection
```

## Section order

1. `sdg-cell` — Sustainable Development Goals (SDG) Cell, followed by the
   "Kalinga University's Commitment Towards SDGs" sub-heading
2. `mission-vision` — Vision, mission and the SDG alignment that sits under it
3. `sdg-cell-composition` — SDG Cell members table
4. `sustainability-policies` — a "Sustainability Policy" disclosure (UN goal
   overview, the role of universities, policy statement) followed by the
   goal → theme → policies table under its own heading
5. `centres-of-excellence` — Centre of Excellence (CoE): the 2022 and 2025
   office orders, each expanding to its full text and signed PDF
6. `annual-reports` — Annual reports 2022–23, 2023–24, 2024–25
7. `sustainable-development-goals` — The 17 goal tiles with goal-wise reports
8. `our-initiatives` — Links to the six initiative detail pages
9. `student-engagement` — "Clubs": Green Club and BIS Standard Club

## Policy and report PDFs

| Folder | Holds |
| --- | --- |
| `public/sdg-reports/` | Goal-wise SDG reports linked from the 17 goal tiles |
| `public/sdg-policies/` | Policy documents linked from the Sustainability Policies table |

A row in `SUSTAINABILITY_POLICIES` lists each policy as a plain string, or as an
object when the policy already lives somewhere else:

- `"Policy name"` — gets its own generated page (see below)
- `{ label, href }` — an existing page on this site, opened in the same tab
- `{ label, pdfUrl }` — a document, opened in a new tab

For the PDF form, drop the file into `public/sdg-policies/` using the exact
filename in `pdfUrl`, or the link will 404.

## Policy pages

Every policy named in `SUSTAINABILITY_POLICIES` has a URL. Adding a name to that
list is all it takes — the slug, the URL and the page follow automatically.

| Path | Holds |
| --- | --- |
| `components/sustainability/data/policy-registry.js` | slug + URL for every policy, derived from its name |
| `src/app/sustainability/policies/[slug]/` | the page each generated URL resolves to |
| `components/sustainability/data/policy-content.js` | the written text, keyed by slug |

URLs take the form `/sustainability/policies/<slug>`, where the slug is the
policy name lowercased with punctuation dropped and spaces hyphenated
("Policy on Women's Applications and Admission" →
`policy-on-womens-applications-and-admission`). To list them all:

```bash
node scripts/sustainability/list_policy_urls.mjs        # grouped by goal
node scripts/sustainability/list_policy_urls.mjs --csv  # SDG,Policy,URL
```

A policy listed under two goals — hazardous waste sits under both SDG 12 and
SDG 15 — resolves to one shared page that names both goals.

### Publishing the text

A slug missing from `POLICY_CONTENT` renders a short "being prepared for
publication" notice and is served `noindex`, so an unwritten policy is never
indexed as an empty page. Adding its entry:

```js
"smoke-free-campus-policy": {
    summary: "One sentence, used for the meta description.",
    body: ["First paragraph.", "Second paragraph."],
}
```

publishes the text and drops the `noindex` — nothing else needs to change.

### Policies with their own page

A policy long enough to need headings, lists or cards gets a dedicated route
instead, and its table entry points there with `{ label, href }`. SDG 3's
"Mental Health & Wellbeing" is the worked example:

| Path | Source |
| --- | --- |
| `src/app/sustainability/emotional-wellness-and-mental-health-policy/` | the page |
| `components/sustainability/data/wellness-policy-content.js` | its text |

That page also links the signed PDF, so both forms of the policy stay reachable.
Add new ones the same way, and register the route in `src/lib/pageData.ts` so it
gets a banner and title.

## Editing content

All copy, tables, links and image URLs live in `components/sustainability/data/`.
Editing a section normally means editing one data file — the section components
only handle presentation.

- **Adding or reordering a section**: add/move the entry in `data/navigation.js`
  and place the matching component in the same position in
  `SustainabilityClient.jsx`. The anchor id must match the `id` passed to
  `SectionBlock`.
- **Goal-wise SDG reports**: drop the PDF into `public/sdg-reports/` and add an
  entry to `SDG_GOAL_REPORTS` in `data/sdg-content.js`, keyed by goal number.
  Only goals present in that map become clickable and show the "View Report"
  ribbon. Reports open in a new tab and render in the browser's built-in PDF
  viewer. Currently only SDG 2 has a published report
  (`public/sdg-reports/sdg-02-zero-hunger-report.pdf`).
- **Our Initiatives**: `SUSTAINABILITY_INITIATIVES` in
  `data/initiatives-content.js` — each entry links to its detail page under
  `src/app/sustainability/<slug>/`.
- **Office orders**: `OFFICE_ORDERS` in `data/coe-content.js` holds the full text
  of each order plus the link to the signed PDF. They render inside the Centre of
  Excellence (CoE) tab — there is no separate Office Orders tab.

## Notes

- Tab 4 nests content: `SustainabilityPoliciesSection` renders a
  "Sustainability Policy" button that discloses `policy/SdgOverview`,
  `policy/UniversitiesRole` and `policy/PolicyStatement`, then always shows
  `policy/PoliciesTable`. Those four are content-only — they carry their own
  headings but no `SectionBlock`, so they can be reordered or moved without
  touching the side panel.

- Copy in `data/` stays plain text. Where it contains ordinals ("12th April",
  "7th Semester"), the rendering section wraps the string in `<OrdinalText>`,
  which raises the suffix. If you add copy with a date or semester to a section
  that does not use it yet, wrap it there too.

- Section anchors carry `scroll-mt-[150px]` so headings clear the sticky header
  and, on mobile, the section picker. The scroll-spy reading line in
  `useScrollSpy.js` (`OFFSET = 160`) must stay above that value.
- Documents open in a new tab rather than the in-page flipbook, matching the rest
  of the SDG Cell material.
