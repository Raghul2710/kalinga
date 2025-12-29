"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

const TabsCtx = createContext(null);

export function Tabs({ defaultValue, value, onValueChange, className = "", children }) {
  const [internal, setInternal] = useState(defaultValue);
  const controlled = value !== undefined;
  const active = controlled ? value : internal;

  const setValue = (v) => {
    if (!controlled) setInternal(v);
    onValueChange?.(v);
  };

  const ctx = useMemo(() => ({ value: active, setValue }), [active]);

  return <TabsCtx.Provider value={ctx}><div className={className}>{children}</div></TabsCtx.Provider>;
}

export function TabsList({ className = "", children }) {
  const tabCount = React.Children.count(children);
  const isTwoTabs = tabCount === 2;
  
  // For 2 tabs: stack vertically on mobile (one tab per line, full width), horizontal on desktop
  // For more than 2 tabs: allow horizontal scrolling on mobile
  const baseClasses = isTwoTabs
    ? "flex flex-col gap-[14px] bg-white rounded-lg p-1 md:flex-row md:flex-wrap md:overflow-x-visible"
    : "flex gap-[14px] bg-white rounded-lg p-1 flex-nowrap overflow-x-auto md:overflow-x-visible md:flex-wrap";
  
  return (
    <div className={[baseClasses, className].join(" ")}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, className = "", children }) {
  const ctx = useContext(TabsCtx);
  if (!ctx) throw new Error("TabsTrigger must be used inside <Tabs />");

  const isActive = ctx.value === value;

  return (
    <button
      type="button"
      onClick={() => ctx.setValue(value)}
      className={[
        // pixel-ish: height, padding, radius like your screenshot
        "w-full md:flex-1 rounded-[6px] px-[12px] py-[12px] text-[15px] transition",
        "border border-white/30 flex-shrink-0",
        "flex items-center justify-center text-center",
        "whitespace-normal break-words leading-[1.3]",
        "h-auto min-h-[55px]",
        isActive ? "bg-[var(--button-red)] text-white" : "bg-white text-[var(--foreground)] cursor-pointer",
        className,
      ].join(" ")}
    >
      <span className="block w-full">{children}</span>
    </button>
  );
}

export function TabsContent({ value, className = "", children }) {
  const ctx = useContext(TabsCtx);
  if (!ctx) throw new Error("TabsContent must be used inside <Tabs />");
  if (ctx.value !== value) return null;

  return <div className={className}>{children}</div>;
}
