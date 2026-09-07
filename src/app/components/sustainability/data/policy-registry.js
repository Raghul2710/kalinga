/**
 * Addresses for the policies listed in the Sustainability Policies table.
 *
 * `SUSTAINABILITY_POLICIES` in `sdg-content.js` is the single list of policy
 * names. This module turns that list into URLs: every policy named there gets a
 * slug and a page under `POLICY_BASE_PATH`, unless the entry carries its own
 * `href` or `pdfUrl` because it already lives somewhere else.
 *
 * The same policy can serve more than one goal (hazardous waste, for instance,
 * appears under both SDG 12 and SDG 15). Those share one page, and the entry
 * records every goal it is listed under.
 */

import { SUSTAINABILITY_POLICIES } from "./sdg-content";

/** Everything generated from a policy name hangs off this path. */
export const POLICY_BASE_PATH = "/sustainability/policies";

/**
 * Policy name -> URL slug: "Policy on Women’s Applications and Admission"
 * becomes "policy-on-womens-applications-and-admission".
 */
export function policySlug(name) {
    return name
        .toLowerCase()
        .replace(/[’']/g, "")
        .replace(/&/g, " and ")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

/** The label shown in the table, whatever shape the entry takes. */
const labelOf = (policy) => (typeof policy === "string" ? policy : policy.label);

/**
 * Where a policy points. Entries that name their own destination keep it;
 * everything else resolves to its generated page.
 *
 * Returns `{ label, href, isExternal }`, where `isExternal` marks a document
 * that should open in a new tab.
 */
export function resolvePolicy(policy) {
    const label = labelOf(policy);

    if (typeof policy !== "string") {
        if (policy.pdfUrl) {
            return { label, href: policy.pdfUrl, isExternal: true };
        }
        if (policy.href) {
            return { label, href: policy.href, isExternal: false };
        }
    }

    return { label, href: `${POLICY_BASE_PATH}/${policySlug(label)}`, isExternal: false };
}

/**
 * Every policy that needs a page generated for it, in the order the goals are
 * listed. Policies pointing at an existing page or PDF are left out — they are
 * already served elsewhere.
 */
export const POLICY_PAGES = (() => {
    const bySlug = new Map();

    for (const { goal, policies } of SUSTAINABILITY_POLICIES) {
        for (const policy of policies) {
            // An entry with its own href/pdfUrl is served by that destination.
            if (typeof policy !== "string") continue;

            const slug = policySlug(policy);
            const existing = bySlug.get(slug);

            if (existing) {
                existing.goals.push(goal);
            } else {
                bySlug.set(slug, { slug, name: policy, href: `${POLICY_BASE_PATH}/${slug}`, goals: [goal] });
            }
        }
    }

    return [...bySlug.values()];
})();

/** Look up a generated policy page by its slug, or `undefined` if there is none. */
export function getPolicyBySlug(slug) {
    return POLICY_PAGES.find((policy) => policy.slug === slug);
}
