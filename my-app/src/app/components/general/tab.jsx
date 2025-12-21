"use client";

import { createContext, useContext, useMemo, useState } from "react";

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
  return (
    <div className={["flex gap-[14px] bg-white rounded-lg p-1", className].join(" ")}>
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
        "h-[55px] rounded-[6px] px-[18px] text-[14px] leading-none transition",
        "border border-white/30",
        isActive ? "bg-[var(--button-red)] text-white" : "bg-white text-[var(--foreground)] cursor-pointer",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className = "", children }) {
  const ctx = useContext(TabsCtx);
  if (!ctx) throw new Error("TabsContent must be used inside <Tabs />");
  if (ctx.value !== value) return null;

  return <div className={className}>{children}</div>;
}
