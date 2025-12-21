"use client";

import { useMemo, useState } from "react";

const dataMap = {
  btech: {
    note: "All questions carry 1 mark each.",
    rows: [
      { sl: 1, section: "Section A", subject: "Physics/ECE", questions: 25 },
      { sl: 2, section: "Section B", subject: "Chemistry", questions: 25 },
      { sl: 3, section: "Section C", subject: "Maths", questions: 25 },
      { sl: 4, section: "Section D", subject: "English Communication", questions: 15 },
    ],
  },
  ug: {
    note: "All questions carry 1 mark each.",
    rows: [
      { sl: 1, section: "Section A", subject: "General Awareness", questions: 25 },
      { sl: 2, section: "Section B", subject: "Reasoning", questions: 25 },
      { sl: 3, section: "Section C", subject: "Quantitative Aptitude", questions: 25 },
      { sl: 4, section: "Section D", subject: "English", questions: 15 },
    ],
  },
  pg: {
    note: "All questions carry 1 mark each.",
    rows: [
      { sl: 1, section: "Section A", subject: "Subject Knowledge", questions: 40 },
      { sl: 2, section: "Section B", subject: "Aptitude", questions: 30 },
      { sl: 3, section: "Section C", subject: "English", questions: 20 },
    ],
  },
  llm: {
    note: "All questions carry 1 mark each.",
    rows: [
      { sl: 1, section: "Section A", subject: "Legal Aptitude", questions: 40 },
      { sl: 2, section: "Section B", subject: "English", questions: 30 },
      { sl: 3, section: "Section C", subject: "General Knowledge", questions: 20 },
    ],
  },
  phd: {
    note: "All questions carry 1 mark each.",
    rows: [
      { sl: 1, section: "Section A", subject: "Research Aptitude", questions: 50 },
      { sl: 2, section: "Section B", subject: "Subject Knowledge", questions: 40 },
    ],
  },
};

export default function KalseeExamPattern() {
  const items = useMemo(
    () => [
      { key: "btech", label: "B.Tech" },
      { key: "ug", label: "All Undergraduate Courses (except B.Tech)" },
      { key: "pg", label: "All Postgraduate Courses" },
      { key: "llm", label: "LLM" },
      { key: "phd", label: "Ph.D." },
    ],
    []
  );

  // Default selected: UG (matches your screenshot highlight)
  const [active, setActive] = useState("ug");

  const activeData = dataMap[active] ?? dataMap.ug;

  const total = activeData.rows.reduce((sum, r) => sum + (Number(r.questions) || 0), 0);

  return (
    <section className="w-full py-12">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h2 className="text-center font-stix text-[44px] leading-[54px] text-[var(--foreground)]">
          Pattern Of KALSEE Exam
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-[420px_1fr]">
          {/* LEFT: selections */}
          <div className="space-y-5">
            {items.map((it) => {
              const isActive = it.key === active;

              return (
                <button
                  key={it.key}
                  type="button"
                  onClick={() => setActive(it.key)}
                  className={[
                    "w-full rounded-[10px] px-6 py-6 text-left font-semibold transition cursor-pointer",
                    "border border-black/10",
                    isActive
                      ? "bg-[var(--button-red)] text-white"
                      : "bg-[var(--card-sandal)] text-[var(--foreground)]",
                  ].join(" ")}
                >
                  {it.label}
                </button>
              );
            })}
          </div>

          {/* RIGHT: panel */}
          <div className="rounded-[18px] bg-[var(--dark-blue)] p-6 md:p-7">
            <p className="text-[14px] font-semibold text-white/90">
              {activeData.note}
            </p>

            <div className="mt-4 overflow-hidden rounded-[10px] bg-white">
              <table className="w-full border-collapse text-left text-[14px]">
                <thead>
                  <tr className="bg-[var(--button-red)] text-white">
                    <th className="px-5 py-4 font-semibold">Sl. No</th>
                    <th className="px-5 py-4 font-semibold">Section</th>
                    <th className="px-5 py-4 font-semibold">Subject</th>
                    <th className="px-5 py-4 text-right font-semibold">Questions</th>
                  </tr>
                </thead>

                <tbody className="text-[var(--foreground)]">
                  {activeData.rows.map((r, idx) => (
                    <tr key={idx} className="border-t border-black/10">
                      <td className="px-5 py-4">{r.sl}</td>
                      <td className="px-5 py-4">{r.section}</td>
                      <td className="px-5 py-4">{r.subject}</td>
                      <td className="px-5 py-4 text-right">{r.questions}</td>
                    </tr>
                  ))}

                  <tr className="border-t border-black/10 bg-[#fffaf2]">
                    <td className="px-5 py-4 font-semibold text-center" colSpan={3}>
                      Total
                    </td>
                    <td className="px-5 py-4 text-right font-semibold">
                      {total}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
