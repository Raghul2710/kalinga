"use client";

import { useMemo, useState } from "react";
import DataTable from "../general/data-table";
import Icons from "../general/icons";

export default function HostelFeeTabs() {
    const tabs = useMemo(
        () => [
            { id: "boys", label: "Boys Hostel" },
            { id: "girls", label: "Girls Hostel" },
            { id: "notes", label: "Important Notes" },
            { id: "deliverables", label: "Hostel Deliverables" },
        ],
        []
    );

    const [activeTab, setActiveTab] = useState("boys");

    const toggleAccordion = (id) => {
        setActiveTab((prev) => (prev === id ? "boys" : id));
    };

    const renderContent = (id) => {
        if (id === "boys") return <BoysHostel />;
        if (id === "girls") return <GirlsHostel />;
        if (id === "notes") return <ImportantNotes />;
        if (id === "deliverables") return <HostelDeliverables />;
        return null;
    };

    return (
        <section className="py-14">
            <div className="mx-auto max-w-6xl rounded-3xl bg-[#0d4a75] p-4 md:p-6">
                {/* DESKTOP TABS */}
                <div className="hidden md:flex gap-3 overflow-x-auto pb-2">
                    {tabs.map((t) => {
                        const isActive = t.id === activeTab;
                        return (
                            <button
                                key={t.id}
                                type="button"
                                onClick={() => setActiveTab(t.id)}
                                className={[
                                    "rounded-lg border px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap",
                                    isActive
                                        ? "bg-[var(--button-red)] text-white border-white/10"
                                        : "bg-white text-[var(--foreground)] border-white/30 hover:bg-white/95",
                                ].join(" ")}
                            >
                                {t.label}
                            </button>
                        );
                    })}
                </div>

                {/* CONTENT CARD */}
                <div className="mt-4 rounded-2xl bg-white p-4 md:p-10">
                    {/* MOBILE ACCORDION */}
                    <div className="md:hidden space-y-3">
                        {tabs.map((t) => {
                            const isOpen = t.id === activeTab;
                            return (
                                <div
                                    key={t.id}
                                    className="rounded-xl border border-black/10 overflow-hidden"
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleAccordion(t.id)}
                                        className={[
                                            "w-full flex items-center justify-between px-4 py-3 text-left transition-colors",
                                            isOpen ? "bg-black/5" : "bg-white",
                                        ].join(" ")}
                                    >
                                        <span className="font-plus-jakarta-sans font-semibold text-[var(--foreground)]">
                                            {t.label}
                                        </span>

                                        <Icons
                                            name="chevronDown"
                                            size={20}
                                            className={isOpen ? "rotate-180" : "rotate-0"}
                                        />
                                    </button>

                                    {isOpen && <div className="px-4 py-6">{renderContent(t.id)}</div>}
                                </div>
                            );
                        })}
                    </div>

                    {/* DESKTOP CONTENT */}
                    <div className="hidden md:block">{renderContent(activeTab)}</div>
                </div>
            </div>
        </section>
    );
}

/* ======================= TABLE via DataTable ======================= */

function HostelFeeTable({ rows }) {
    const columns = useMemo(
        () => [
            { key: "hostelName", label: "Hostel Name", widthPx: 220 },
            { key: "food", label: "Food", widthPx: 140 },
            { key: "occupancy", label: "Occupancy", widthPx: 120 },
            { key: "waterCooled", label: "Water-Cooled Room (₹)", widthPx: 210 },
            { key: "acRoom", label: "AC Room (₹)", widthPx: 160 },
        ],
        []
    );

    const data = useMemo(
        () =>
            (rows || []).map((r) => ({
                hostelName: r[0],
                food: r[1],
                occupancy: r[2],
                waterCooled: r[3] !== "NA" ? `₹ ${r[3]}` : "NA",
                acRoom: r[4] !== "NA" ? `₹ ${r[4]}` : "NA",
            })),
        [rows]
    );

    return (
        <DataTable
            columns={columns}
            data={data}
            overflowX={true}
        />
    );
}

/* ======================= BOYS HOSTEL ======================= */

function BoysHostel() {
    return (
        <>
            <h2 className="font-stix !text-lg md:!text-2xl text-[var(--foreground)] mb-6">
                Boys Hostel Fee (2026–27)
            </h2>

            <HostelFeeTable
                rows={[
                    ["Brahmaputra", "Veg", "5", "98,000", "1,22,000"],
                    ["Brahmaputra", "Non-Veg", "5", "1,34,000", "1,58,000"],
                    ["Pacific", "Veg", "7", "78,000", "96,000"],
                    ["Pacific", "Non-Veg", "7", "1,14,000", "1,32,000"],
                    ["Pacific", "Veg", "5", "98,000", "1,36,000"],
                    ["Pacific", "Non-Veg", "5", "1,34,000", "1,58,000"],
                    ["Pacific", "Veg", "3", "1,12,000", "1,57,000"],
                    ["Pacific", "Non-Veg", "3", "1,48,000", "1,93,000"],
                    ["Pacific", "Veg", "2", "1,16,000", "1,76,000"],
                    ["Pacific", "Non-Veg", "2", "1,52,000", "2,12,000"],
                    ["Everest", "Veg", "4", "90,000", "NA"],
                    ["Everest", "Non-Veg", "4", "1,26,000", "NA"],
                ]}
            />
        </>
    );
}

/* ======================= GIRLS HOSTEL ======================= */

function GirlsHostel() {
    return (
        <>
            <h2 className="font-stix !text-lg md:!text-2xl text-[var(--foreground)] mb-6">
                Girls Hostel Fee (2026–27)
            </h2>

            <HostelFeeTable
                rows={[
                    ["Indus", "Veg", "7", "78,000", "96,000"],
                    ["Indus", "Non-Veg", "7", "1,14,000", "1,32,000"],
                    ["Indus", "Veg", "6", "85,000", "1,09,000"],
                    ["Indus", "Non-Veg", "6", "1,21,000", "1,45,000"],
                    ["Indus", "Veg", "5", "98,000", "1,22,000"],
                    ["Indus", "Non-Veg", "5", "1,34,000", "1,58,000"],
                    ["Indus", "Veg", "3", "1,12,000", "1,57,000"],
                    ["Indus", "Non-Veg", "3", "1,48,000", "1,93,000"],
                    ["Indus", "Veg", "2", "1,16,000", "1,76,000"],
                    ["Indus", "Non-Veg", "2", "1,52,000", "2,12,000"],
                    ["Indus", "Veg", "1", "1,30,000", "2,50,000"],
                    ["Indus", "Non-Veg", "1", "1,66,000", "2,86,000"],
                ]}
            />
        </>
    );
}

/* ======================= NOTES ======================= */

function ImportantNotes() {
    const notes = [
        "AC maintenance cost borne by students.",
        "Room type once selected cannot be downgraded.",
        "Caution Money: ₹5,000 (Refundable).",
        "AC rooms only if all occupants agree.",
        "Hostel cancellation fee: ₹2,000.",
    ];

    return (
        <>
            <h2 className="font-stix !text-lg md:!text-2xl text-[var(--foreground)] mb-4">
                Important Notes
            </h2>

            <ul className="space-y-3 text-[var(--light-text-gray)]">
                {notes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-3 leading-relaxed">
                        <Icons name="arrowBox" className="mt-0.5" />
                        <span>{note}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}

/* ======================= DELIVERABLES ======================= */

function HostelDeliverables() {
    const items = [
        "Bed",
        "Table",
        "Chair",
        "Pillow",
        "Mattress",
        "Almirah",
        "Medical Facility",
        "Cooler",
        "Shoe Rack",
        "Wi-Fi",
        "2 Outings per Month",
        "Breakfast",
        "Lunch",
        "Tea",
        "Dinner",
    ];

    return (
        <>
            <h2 className="font-stix !text-lg md:!text-2xl text-[var(--foreground)] mb-4">
                Hostel Deliverables
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[var(--light-text-gray)]">
                {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                        <Icons name="arrowBox" />
                        <span className="leading-snug">{item}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}