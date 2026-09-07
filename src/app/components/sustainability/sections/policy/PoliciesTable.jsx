import Link from "next/link";
import DataTable from "../../../general/data-table";
import { SUSTAINABILITY_POLICIES } from "../../data/sdg-content";
import { resolvePolicy } from "../../data/policy-registry";

const LINK_CLASSES =
    "font-medium text-[var(--button-red)] underline underline-offset-2 transition-opacity hover:opacity-75";

const COLUMNS = [
    { key: "goal", label: "SDG", widthPx: 220 },
    { key: "theme", label: "SDG Theme", widthPx: 220 },
    { key: "policies", label: "Relevant Policies", width: "flex-1" },
];

/**
 * Goal-wise map of the policies that back each Sustainable Development Goal.
 * Carries its own heading so it reads as a distinct block within the section.
 */
export default function PoliciesTable() {
    const rows = SUSTAINABILITY_POLICIES.map((entry) => ({
        // The goal is the row's label, so it carries the emphasis.
        goal: <span className="font-semibold text-[var(--foreground)]">{entry.goal}</span>,
        theme: entry.theme,
        policies: (
            <ul className="list-disc space-y-1 pl-4">
                {entry.policies.map((policy) => {
                    // Every policy has an address: its own page by default, or
                    // the href/pdfUrl the entry names. A PDF opens in a new tab.
                    const { label, href, isExternal } = resolvePolicy(policy);

                    return (
                        <li key={label}>
                            {isExternal ? (
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={`${label} (PDF)`}
                                    className={LINK_CLASSES}
                                >
                                    {label}
                                </a>
                            ) : (
                                <Link href={href} className={LINK_CLASSES}>
                                    {label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        ),
    }));

    return (
        <>
            <h3 className="pt-2 font-stix !text-xl md:!text-[22px] !leading-snug text-[var(--foreground)]">
                Sustainability Policies
            </h3>

            <p>
                The policies below translate the University’s sustainability commitments into
                day-to-day practice, mapped against the Sustainable Development Goal each one
                serves.
            </p>

            <DataTable
                columns={COLUMNS}
                data={rows}
                overflowX={false}
                disableContainer
                className="!px-0"
            />
        </>
    );
}
