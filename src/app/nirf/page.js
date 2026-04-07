"use client";

import { useState, useEffect, useMemo } from "react";
import SectionHeading from "../components/general/SectionHeading";
import ResearchSixGridButtons from "../components/research/research_six_grid-buttons";

export default function NirfPage() {
    const nirfData = [
        {
            id: 1,
            text: "DCS- Overall",
            url: "#"
        },
        {
            id: 2,
            text: "DCS- Management",
            url: "#"
        },
        {
            id: 3,
            text: "DCS- Pharmacy",
            url: "#"
        },
        {
            id: 4,
            text: "DCS- SDGs",
            url: "#"
        }
    ];
    return (
        <>
            <SectionHeading
                title="NIRF"
                titleClassName="text-center" />
            <ResearchSixGridButtons
                buttons={nirfData}
            />
        </>
    );
}