"use client";

import { useState } from "react";

export default function VerticalTabs({ tabs, defaultTabId, className = "" }) {
    const [activeTab, setActiveTab] = useState(defaultTabId || (tabs[0]?.id));

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <section className={`w-full py-4 px-2 ${className}`}>
            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
            <div>
                <div className="flex flex-col lg:flex-row gap-4 bg-[var(--dark-blue)] py-16 md:px-10 px-4 rounded-xl min-h-[600px]">
                    {/* Vertical Tabs on Left (Horizontal Scroll on Mobile) */}
                    <div className="w-full lg:w-80 flex-shrink-0">
                        <div className="rounded-[16px] bg-[var(--dark-blue)]">
                            <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
                                {tabs.map((tab) => {
                                    const isActive = activeTab === tab.id;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => handleTabClick(tab.id)}
                                            className={`
                        flex-shrink-0 lg:w-full text-left px-4 py-5 rounded-[8px] 
                        font-plus-jakarta-sans text-sm md:text-base font-semibold
                        transition-all duration-200
                        ${isActive
                                                    ? "bg-[var(--button-red)] text-white font-semibold"
                                                    : "bg-[var(--lite-sand)] text-[var(--foreground)] hover:opacity-90"
                                                }
                      `}
                                        >
                                            {tab.label}
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>

                    {/* Content Area - White Background */}
                    <div className="flex-1 w-full">
                        <div className="rounded-[16px] bg-white p-4 md:p-8 shadow-sm h-full flex flex-col overflow-y-auto max-h-[800px]">
                            {tabs.find(tab => tab.id === activeTab)?.content}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
