"use client";

import MainIntro from "../components/about/main_intro";
import ResearchIntro from "@/app/components/research-resources/research_intro";
import BoardOfStudiesTable from "@/app/components/general/board_of_studies_table";
import AccreditationRanking from "@/app/components/home/AccreditationRanking";
import AdmissionCareer from "../components/general/admission_cta";
import APITable from "../components/general/api-table";
import CtcdTrainingTabs from "../components/ctcd/ctcd_training_tabs";
import { useEffect } from "react";



export default function ResearchPapersAndBooksPublished() {


    /* =========================
       RESEARCH PAPERS (DO NOT TOUCH)
       IDs: 35–41
    ========================== */
    const researchPaperTabs = Array.from({ length: 7 }, (_, i) => {
        const id = 35 + i;
        const yearStart = 2025 - i;
        const yearEnd = yearStart + 1;

        return {
            value: `research-${id}`,
            label: `${yearStart}-${yearEnd}`,
            content: (
                <APITable
                    tableId={id.toString()}
                    title={`Research Papers ${yearStart}-${yearEnd}`}
                    className="py-12"
                    overflowX
                />
            ),
        };
    });

    /* =========================
       PATENTS
       IDs: 11, 12, 13, 46, 47
       (reverse year order)
    ========================== */
    const patentYears = [
        { id: 11, label: "2018-2019" },
        { id: 12, label: "2019-2020" },
        { id: 13, label: "2020-2021" },
        { id: 46, label: "2021-2022" },
        { id: 47, label: "2022-2023" },
    ];

    const patentsTabs = patentYears.map((year) => ({
        value: `patent-${year.id}`,
        label: year.label,
        content: (
            <APITable
                tableId={year.id.toString()}
                title={`Patents ${year.label}`}
                className="py-12"
                overflowX
            />
        ),
    }));

    /* =========================
       BOOKS PUBLISHED
       IDs: 48–55
       (2018–19 = 48 onwards)
    ========================== */
    const booksTabs = Array.from({ length: 8 }, (_, i) => {
        const id = 48 + i;
        const yearStart = 2018 + i;
        const yearEnd = yearStart + 1;

        return {
            value: `books-${id}`,
            label: `${yearStart}-${yearEnd}`,
            content: (
                <APITable
                    tableId={id.toString()}
                    title={`Books Published ${yearStart}-${yearEnd}`}
                    className="py-12"
                    overflowX
                />
            ),
        };
    });

    return (
        <>
            {/* HERO INTRO */}
            <MainIntro
                title="Transforming Your Results Into Publications"
                description="Kalinga University actively supports its researchers by providing them with resources, guidance, and support in their publication journey. From expert mentorship to providing access to publication tools and final printing, we’re with them at every step."
                imageUrl="https://cdn.kalingauniversity.ac.in/common/placeholder-img.png"
                imageAlt="Kalinga University Research"
                showKnowMore
            />

            {/* SPACING FIX */}
            <div className="my-16">
                <AccreditationRanking />
            </div>

            {/* BOOKS (STATIC TABLE HEADER ONLY IF NEEDED) */}
            <div className="my-16">
                <CtcdTrainingTabs customTabs={booksTabs} />
            </div>

            {/* PATENTS */}
            <div className="my-16">
                <CtcdTrainingTabs customTabs={patentsTabs} />
            </div>

            {/* RESEARCH PAPERS (UNCHANGED LOGIC) */}
            <div className="my-16">
                <CtcdTrainingTabs customTabs={researchPaperTabs} />
            </div>

            {/* CTA */}
            <div className="mt-20">
                <AdmissionCareer />
            </div>
        </>
    );
}