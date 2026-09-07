/**
 * Written text for the generated policy pages, keyed by the policy's slug.
 *
 * Every policy named in `SUSTAINABILITY_POLICIES` already has a URL and a page
 * (see `policy-registry.js`). Adding an entry here is what turns that page from
 * a placeholder into the published policy — nothing else needs to change.
 *
 * Shape:
 *
 *     "smoke-free-campus-policy": {
 *         summary: "One sentence, used for the meta description.",
 *         body: ["First paragraph.", "Second paragraph."],
 *     }
 *
 * A slug that is absent renders the "being prepared for publication" notice and
 * is marked `noindex`, so an unwritten policy is never indexed as an empty page.
 *
 * The longer policies that need headings, lists or cards get their own page and
 * data file instead — see `wellness-policy-content.js` and the
 * `emotional-wellness-and-mental-health-policy` route for that pattern.
 */

export const POLICY_CONTENT = {};
