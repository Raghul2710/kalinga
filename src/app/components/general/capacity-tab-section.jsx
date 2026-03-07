"use client";

import { useState } from "react";

export default function CapacityTabSection({ data = {}, title = "Our Initiatives" }) {
  const years = Object.keys(data).sort((a, b) => b.localeCompare(a));
  const [activeTab, setActiveTab] = useState(years[0] || "");

  return (
    <section className="w-full py-12 px-2 md:px-4">
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--button-red);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a31d1d;
        }
      `}</style>

      <div className="">
        <div className="bg-[var(--dark-blue)] py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 rounded-3xl overflow-hidden shadow-xl">
          <h2 className="text-white text-3xl md:text-5xl text-center mb-12 font-plus-jakarta-sans tracking-tight">
            {title}
          </h2>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 lg:h-[750px]">
            {/* Left Tabs */}
            <div className="w-full lg:w-80 flex-shrink-0 lg:h-full lg:overflow-y-auto scrollbar-hide">
              <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
                {years.map((year) => {
                  const isActive = activeTab === year;
                  return (
                    <button
                      key={year}
                      onClick={() => setActiveTab(year)}
                      className={`
                      flex-shrink-0 lg:w-full text-left px-4 py-5 rounded-[8px]
                      font-plus-jakarta-sans text-sm md:text-base font-semibold
                      transition-all duration-200
                      ${isActive
                          ? "bg-[var(--button-red)] text-white"
                          : "bg-[var(--lite-sand)] text-[var(--foreground)] hover:opacity-90"
                        }
                    `}
                    >
                      {year}
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="flex-1 w-full lg:h-full flex flex-col min-h-[400px] overflow-hidden">
              <div className="rounded-[24px] bg-white p-5 md:p-8 lg:p-10 shadow-sm flex-1 overflow-y-auto custom-scrollbar">
                <div className="space-y-12 animate-in fade-in duration-500 pr-2">
                  {data[activeTab]?.map((item, idx) => (
                    <div key={idx} className="space-y-4">
                      <h3 className="font-plus-jakarta-sans text-xl md:text-2xl font-semibold text-[var(--foreground)] border-b pb-2 border-gray-100">
                        {item.question}
                      </h3>
                      <div className="w-full overflow-x-auto pb-4 px-1">
                        {item.component}
                      </div>
                    </div>
                  ))}
                  {(!data[activeTab] || data[activeTab].length === 0) && (
                    <div className="text-center py-20 text-gray-500">
                      No data available for this year.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
