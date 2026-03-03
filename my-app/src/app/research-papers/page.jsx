"use client";

import React from "react";
import APITable from "../components/general/api-table";
import MainIntro from "../components/about/main_intro";

export default function ResearchPapersPage() {
    return (
        <main className="bg-white font-jakarta">
            {/* <MainIntro
                title="Research Papers"
                subtitle="Publications"
                description={[
                    "Browse through the research papers published by our esteemed faculty and students. Kalinga University remains committed to fostering a culture of rigorous inquiry and knowledge dissemination through high-impact research publications.",
                    "Our research community continues to contribute significantly to various disciplines, sharing insights and discoveries that address contemporary challenges and drive innovation forward."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/research/research-main-content.webp"
                imageAlt="Research Papers"
                showKnowMore={false}
            /> */}

            <div className="container mx-auto px-6 py-16">
                <APITable
                    tableId="57"
                    title="Research Paper Publications"
                    overflowX={true}
                    nested={false}
                />
            </div>
        </main>
    );
}
