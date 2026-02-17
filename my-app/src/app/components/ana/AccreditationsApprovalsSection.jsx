"use client";

import { useMemo, useState } from "react";
import FlipbookTrigger from "../general/FlipbookTrigger";

/** ✅ UPDATE ONLY THIS */
const ACCREDITATION_CONFIG = {
  title: "Accreditations & Approvals",

  tabs: [
    { id: "cg", label: "C.G. Govt. Approval" },
    { id: "ugc", label: "UGC Approval" },
    { id: "pci", label: "PCI Approval" },
    { id: "aicte", label: "AICTE Approval" },
    { id: "bci", label: "BCI Approval" },
    { id: "naac", label: "National Assessment and Accreditation Council" },
    { id: "ncte", label: "NCTE Approval" },
    { id: "eoa_pharmacy", label: "EOA PHARMACY" },
    { id: "eoa_diploma", label: "EOA Diploma Engg" },
  ],

  sections: {
    cg: {
      years: { "2025 - 26": [] },
    },
    ugc: {
      years: { "2025 - 26": [] },
    },
    pci: {
      years: { "2024 - 25": [] },
      years: { "2020 - 21": [] },
      years: { "2019 - 20": [] },
      years: { "2018 - 19": [] },
      years: { "2017 - 18": [] },
      years: { "2016 - 17": [] },
    },
    aicte: {
      years: {
        "2025 - 26": [
          {
            title: "AICTE-DIPLOMA ENGINEERING 2025-26 EOA (With Working Professional)",
            url: "#",
          },
          {
            title: "AICTE B.TECH. 2025-26 EOA (with Working Professional)",
            url: "#",
          },
        ],
        "2024 - 25": [
          {
            title: "AICTE-DIPLOMA ENGINEERING 2024-25",
            url: "#",
          }
        ],
        "2023 - 24": [],
        "2022 - 23": [],
        "2021 - 22": [],
        "2020 - 22": [],
      },
    },
    bci: {
      hero: { title: "BCI Approval", description: "Add description.", logo: "" },
      years: { "2025 - 26": [] },
    },
    naac: {
      years: { "2025 - 26": [] },
    },
    ncte: {
      hero: { title: "NCTE Approval", description: "Add description.", logo: "" },
      years: { "2025 - 26": [] },
    },
    eoa_pharmacy: {
      hero: { title: "EOA Pharmacy", description: "Add description.", logo: "" },
      years: { "2025 - 26": [] },
    },
    eoa_diploma: {
      hero: { title: "EOA Diploma Engg", description: "Add description.", logo: "" },
      years: { "2025 - 26": [] },
    },
  },
};

function PdfRow({ item }) {
  const disabled = !item?.url || item.url === "#";

  const row = (
    <a
      href={disabled ? undefined : item.url}
      target={disabled ? undefined : "_blank"}
      rel={disabled ? undefined : "noopener noreferrer"}
      className={`flex items-center gap-4 px-5 py-4 rounded-xl border transition
        ${disabled
          ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-white border-gray-200 hover:bg-gray-50 text-[var(--foreground)]"
        }`}
    >
      {/* pdf icon */}
      <div className="w-10 h-10 rounded-lg bg-[var(--lite-sand)] flex items-center justify-center border border-gray-200">
        <span className="text-sm font-bold text-[var(--button-red)]">PDF</span>
      </div>

      <p className="font-plus-jakarta-sans text-sm md:text-base font-semibold leading-snug">
        {item.title}
      </p>
    </a>
  );

  // if you want flipbook for PDFs, wrap with FlipbookTrigger (only when url exists)
  return disabled ? (
    row
  ) : (
    <FlipbookTrigger pdfUrl={item.url} title={item.title}>
      {row}
    </FlipbookTrigger>
  );
}

export default function AccreditationsApprovalsSection() {
  const [activeTab, setActiveTab] = useState(
    ACCREDITATION_CONFIG.tabs?.[3]?.id || "aicte"
  );

  const [expandedYears, setExpandedYears] = useState({});

  const section = useMemo(
    () => ACCREDITATION_CONFIG.sections?.[activeTab],
    [activeTab]
  );

  const years = useMemo(() => {
    const y = section?.years ? Object.keys(section.years) : [];
    // keep order as inserted if you like; otherwise sort desc:
    return y; // or: y.sort((a, b) => b.localeCompare(a));
  }, [section]);

  const toggleYear = (year) => {
    setExpandedYears((prev) => {
      const isOpen = !!prev[year];
      const next = {};
      Object.keys(prev).forEach((k) => (next[k] = false));
      if (!isOpen) next[year] = true;
      return next;
    });
  };

  return (
    <section className="w-full py-10 px-2">
      <h1 className="text-center font-plus-jakarta-sans text-3xl md:text-5xl font-semibold mb-10">
        {ACCREDITATION_CONFIG.title}
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
        {/* Left Tabs */}
        <div className="w-full lg:w-[360px] flex-shrink-0 space-y-4">
          {ACCREDITATION_CONFIG.tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-8 py-6 rounded-xl font-plus-jakarta-sans text-base md:text-lg font-semibold transition
                  ${isActive
                    ? "bg-[var(--button-red)] text-white"
                    : "bg-[var(--lite-sand)] text-[var(--foreground)] hover:opacity-90"
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Right Content */}
        <div className="flex-1 bg-gray-100 rounded-2xl p-6 md:p-8">

          {/* Year Accordions */}
          <div className="mt-8 space-y-5">
            {years.map((year) => {
              const isExpanded = expandedYears[year] || false;
              const items = section?.years?.[year] || [];

              return (
                <div key={year} className="bg-transparent">
                  <button
                    onClick={() => toggleYear(year)}
                    className="w-full flex items-center justify-between px-2 py-3"
                  >
                    <h3 className="font-plus-jakarta-sans text-xl md:text-2xl font-semibold text-[var(--foreground)]">
                      {year}
                    </h3>

                    <div
                      className={`w-10 h-10 rounded-md bg-[var(--button-red)] text-white flex items-center justify-center transition-transform ${isExpanded ? "rotate-180" : ""
                        }`}
                    >
                      <svg width="14" height="10" viewBox="0 0 12 8" fill="none">
                        <path
                          d="M1 1L6 6L11 1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>

                  <div className="h-[2px] bg-[var(--button-red)]/70" />

                  {isExpanded ? (
                    <div className="mt-4 space-y-4">
                      {items.length ? (
                        items.map((doc, idx) => <PdfRow key={idx} item={doc} />)
                      ) : (
                        <p className="font-plus-jakarta-sans text-sm text-[var(--foreground)]/60 px-2">
                          No documents added for this year.
                        </p>
                      )}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}