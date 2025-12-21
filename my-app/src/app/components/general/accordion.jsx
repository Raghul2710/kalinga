"use client";

import { useState } from "react";

export function AccordionItem({ title, children, defaultOpen = false, titleClassName = "" }) {
  const [open, setOpen] = useState(defaultOpen);
  
  const defaultTitleClassName = "font-stix text-[24px] leading-[30px] text-[var(--button-red)]";
  const finalTitleClassName = titleClassName || defaultTitleClassName;

  return (
    <div className="rounded-[16px] bg-[var(--card-sandal)] p-[22px] md:p-[26px]">
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left cursor-pointer"
      >
        <h3 className={finalTitleClassName}>
          {title}
        </h3>

        {/* Arrow */}
        <span
          className={`ml-4 inline-block transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "mt-4 max-h-[2000px]" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
