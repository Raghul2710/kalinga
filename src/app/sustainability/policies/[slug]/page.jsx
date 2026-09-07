import Link from "next/link";
import { notFound } from "next/navigation";
import {
    POLICY_PAGES,
    getPolicyBySlug,
} from "@/app/components/sustainability/data/policy-registry";
import { POLICY_CONTENT } from "@/app/components/sustainability/data/policy-content";

const SITE = "https://kalingauniversity.ac.in";

/**
 * One page per policy named in the Sustainability Policies table. The URLs are
 * fixed by the policy registry so they can be published and linked now; the
 * written policy is filled in per-slug in `policy-content.js` as each one is
 * approved.
 *
 * Until then the page states that the text is not published yet and is kept out
 * of search results, so a policy is never indexed as an empty page.
 */
export function generateStaticParams() {
    return POLICY_PAGES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const policy = getPolicyBySlug(slug);
    if (!policy) return {};

    const url = `${SITE}${policy.href}`;
    const content = POLICY_CONTENT[policy.slug];

    return {
        title: `${policy.name} | Kalinga University`,
        description:
            content?.summary ||
            `${policy.name} — a sustainability policy of Kalinga University, supporting ${policy.goals.join(" and ")}.`,
        alternates: { canonical: url },
        // A policy with no text yet is a placeholder, not a page worth indexing.
        robots: content ? undefined : { index: false, follow: true },
    };
}

export default async function SustainabilityPolicyPage({ params }) {
    const { slug } = await params;
    const policy = getPolicyBySlug(slug);
    if (!policy) notFound();

    const content = POLICY_CONTENT[policy.slug];
    const url = `${SITE}${policy.href}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `${policy.name} - Kalinga University`,
        description: content?.summary || `${policy.name}, a sustainability policy of Kalinga University.`,
        breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
                { "@type": "ListItem", position: 2, name: "Sustainability", item: `${SITE}/sustainability` },
                { "@type": "ListItem", position: 3, name: policy.name, item: url },
            ],
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* No min-h-screen here: the surrounding <main> already reserves a
                full viewport, and a short placeholder would otherwise stretch to
                a second one and leave a screen of white above the footer. */}
            <div className="bg-white pb-16">
                <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl space-y-10 md:space-y-12">
                    <header className="space-y-3">
                        <span className="block h-[3px] w-16 rounded-full bg-[var(--button-red)]" />
                        <h1 className="font-stix !text-2xl md:!text-[34px] leading-tight text-[var(--foreground)]">
                            {policy.goals.join(" · ")}
                        </h1>
                        <h2 className="font-stix !text-xl md:!text-[26px] !leading-snug text-[var(--button-red)]">
                            {policy.name}
                        </h2>
                    </header>

                    {content ? (
                        <div className="space-y-4">
                            {content.body.map((paragraph) => (
                                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-xl border-l-4 border-[var(--button-red)] bg-gray-50 p-5 md:p-6">
                            <p className="text-[var(--text-gray-card)]">
                                The full text of this policy is being prepared for publication and
                                will appear on this page once approved. For a copy in the meantime,
                                please contact the SDG Cell.
                            </p>
                        </div>
                    )}

                    <div className="border-t border-gray-200 pt-6">
                        <Link
                            href="/sustainability"
                            className="font-plus-jakarta-sans text-sm font-medium text-[var(--button-red)] underline underline-offset-2 hover:opacity-75"
                        >
                            ← Back to Sustainability
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
