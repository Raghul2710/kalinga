/**
 * Print the URL of every policy in the Sustainability Policies table.
 *
 * Run from the repository root:  node scripts/sustainability/list_policy_urls.mjs [--csv]
 *
 * The data modules are ESM but live in a package without "type": "module", so
 * they are copied to .mjs beside a temp dir before importing. That keeps this
 * script reading the real source of truth rather than duplicating slug logic.
 */
import { mkdtemp, copyFile, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const DATA = "src/app/components/sustainability/data";
const SITE = "https://kalingauniversity.ac.in";

const dir = await mkdtemp(join(tmpdir(), "policy-urls-"));
await copyFile(`${DATA}/sdg-content.js`, join(dir, "sdg-content.mjs"));
const registry = await readFile(`${DATA}/policy-registry.js`, "utf8");
await writeFile(join(dir, "policy-registry.mjs"), registry.replace('"./sdg-content"', '"./sdg-content.mjs"'));

const { SUSTAINABILITY_POLICIES } = await import(pathToFileURL(join(dir, "sdg-content.mjs")));
const { resolvePolicy } = await import(pathToFileURL(join(dir, "policy-registry.mjs")));

const csv = process.argv.includes("--csv");
if (csv) console.log("SDG,Policy,URL");

let count = 0;
for (const { goal, policies } of SUSTAINABILITY_POLICIES) {
    if (!csv) console.log(`\n${goal}`);
    for (const policy of policies) {
        const { label, href } = resolvePolicy(policy);
        count += 1;
        if (csv) {
            console.log(`"${goal}","${label}","${SITE}${href}"`);
        } else {
            console.log(`   ${label}\n      ${SITE}${href}`);
        }
    }
}
if (!csv) console.log(`\n${count} policy links across ${SUSTAINABILITY_POLICIES.length} goals.`);
