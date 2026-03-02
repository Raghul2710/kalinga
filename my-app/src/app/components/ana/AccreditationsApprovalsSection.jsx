"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";


function PdfRow({ item }) {
  const disabled = !item?.url || item.url === "#";

  return (
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
      {/* PDF icon */}
      <div className="w-10 h-10 rounded-lg bg-[var(--lite-sand)] flex items-center justify-center border border-gray-200">
        <span className="text-sm font-bold text-[var(--button-red)]">PDF</span>
      </div>

      <p className="font-plus-jakarta-sans text-sm md:text-base font-semibold leading-snug">
        {item?.title || "Untitled document"}
      </p>
    </a>
  );
}

export default function AccreditationsApprovalsSection({ data }) {
  const tabs = data?.tabs || [];
  const sections = data?.sections || {};
  const pageTitle = data?.title || "Accreditations & Approvals";

  const [activeTab, setActiveTab] = useState(tabs?.[0]?.id || "");
  const [expandedYears, setExpandedYears] = useState({});

  // Keep activeTab always valid (if tabs change)
  useEffect(() => {
    if (!activeTab && tabs?.[0]?.id) setActiveTab(tabs[0].id);
    if (activeTab && !tabs.find((t) => t.id === activeTab) && tabs?.[0]?.id) {
      setActiveTab(tabs[0].id);
    }
  }, [tabs, activeTab]);

  const section = useMemo(() => sections?.[activeTab], [sections, activeTab]);
  const activeTabObj = useMemo(() => tabs.find((t) => t.id === activeTab), [tabs, activeTab]);

  const years = useMemo(() => {
    const y = section?.years ? Object.keys(section.years) : [];
    return y; // keep the order as you entered in data
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

  if (!tabs.length) {
    return (
      <section className="w-full py-10 px-2">
        <p className="text-center text-[var(--foreground)]/60 font-plus-jakarta-sans">
          No tabs configured.
        </p>
      </section>
    );
  }

  return (
    <section className="w-full py-10 px-2">
      {/* Title */}
      <h1 className="text-center text-3xl md:text-5xl mb-10">
        {pageTitle}
      </h1>

      <div className="w-full px-4 md:px-10">
        {/* ✅ BLUE CONTAINER like SDG */}
        <div className="bg-[var(--dark-blue)] rounded-xl py-12 px-4 md:px-10">
          {/* ✅ make both columns stretch equally */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Left Tabs */}
            <div className="w-full lg:w-[360px] flex-shrink-0">
              {/* ✅ scrollable + full height */}
              <div className="h-full max-h-[650px] lg:max-h-[720px] overflow-y-auto pr-2 space-y-4 scrollbar-hide">
                {tabs.map((tab) => {
                  const isActive = tab.id === activeTab;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setExpandedYears({});
                      }}
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
            </div>

            {/* Right Content */}
            <div className="flex-1">
              {/* ✅ scrollable + same height as left */}
              <div className="h-full max-h-[650px] lg:max-h-[720px] overflow-y-auto bg-gray-100 rounded-2xl p-6 md:p-8 scrollbar-hide">

                {/* Right Panel Header with Organization Logo */}
                {activeTabObj?.logo && (
                  <div className="mb-8 w-full bg-white rounded-xl p-8 border border-gray-200 flex items-center gap-8">
                    {/* Logo on Left */}
                    <div className="w-56 h-36 bg-white rounded-xl flex-shrink-0 flex items-center justify-center p-2">
                      <Image
                        src={activeTabObj.logo}
                        alt={activeTabObj.label}
                        width={200}
                        height={200}
                        className="object-contain w-full h-full max-h-32"
                      />
                    </div>
                    {/* Name and Description on Right */}
                    <div className="flex-1">
                      <h3 className="mb-1 leading-none">
                        {activeTabObj.label}
                      </h3>
                      <p className="text-gray-500 leading-relaxed max-w-2xl">
                        {activeTabObj.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                      </p>
                    </div>
                  </div>
                )}
                {/* ✅ If section has docs (no years) */}
                {Array.isArray(section?.docs) && section.docs.length > 0 ? (
                  <div className="space-y-4">
                    {section.docs.map((doc, idx) => (
                      <PdfRow key={idx} item={doc} />
                    ))}
                  </div>
                ) : (
                  /* ✅ Else year accordions */
                  <div className="space-y-5">
                    {years.length ? (
                      years.map((year) => {
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
                                <svg
                                  width="14"
                                  height="10"
                                  viewBox="0 0 12 8"
                                  fill="none"
                                >
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
                                  items.map((doc, idx) => (
                                    <PdfRow key={idx} item={doc} />
                                  ))
                                ) : (
                                  <p className="font-plus-jakarta-sans text-sm text-[var(--foreground)]/60 px-2">
                                    No documents added for this year.
                                  </p>
                                )}
                              </div>
                            ) : null}
                          </div>
                        );
                      })
                    ) : (
                      <p className="font-plus-jakarta-sans text-sm text-[var(--foreground)]/60 px-2">
                        No documents available.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ✅ scrollbar hide styles */}
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}