"use client";
import { useState, useEffect, useMemo } from "react";
import MainIntro from "@/app/components/about/main_intro";


export default function IMTS2025() {
    const mainIntroContent = {
        title: "About The Faculty Of Commerce And Management",
        description: "The Department of Commerce creates a stimulating environment for the academic growth of its students and provides them with a thorough understanding of a range of subjects such as business organisation, financial accounting, corporate law, economic theory and business communication. The faculty members of the Department are known for their expertise in finance and organisational behaviour and impart practical knowledge of the discipline of auditing, company law and income tax. Interwoven into teaching practices is the goal of fostering in students a sense of responsibility towards society as well. In line with this emphasis, the classroom space is democratic and one in which differences in opinions are respected. Most importantly, teachers remain available to students at all times.",
        description2: "To foster student learning, several initiatives are taken beyond classroom teaching; these include workshops, talks, paper presentations, field trips, etc. The Department of Management focuses on management education more than just business management. The commitment is thought leadership with a deep understanding of business. The approach to pedagogy combines fieldwork, case studies, research and instrumented feedback with a strong emphasis on concepts and theory. We, as a Department of Management, are training our students to cope with the pressure of fierce competition. Our education is a fair blend of human behaviour, organisational psychology & behaviour, human resource management, economics, quantitative methods, finance & accounts, marketing, production & operations, and information technology. Students are given ample opportunity to cultivate creativity and exploit innovations in the work culture. Visits of personnel from the corporate world and academia are part of our curriculum to apprise the students of the corporate needs and the latest developments in theory. Industrial visits and training are arranged to simulate the ground realities of corporate work and culture in their minds. Lack of communication skills and ethics poses many problems in our day-to-day work, which becomes serious with the passage of time. Therefore, the students are being given due attention to embedding these so that they can come up to the expectations of the customers, organisations and society in a sustainable manner and add value to their jobs",
        imageUrl: "https://cdn.kalingauniversity.ac.in/imts-2025/About.jpeg",
        imageAlt: "IMTS-2025",
    }

    const mainIntroContent1 = {
        title: "About The Two Days International Conference",
        description: "The Department of Commerce creates a stimulating environment for the academic growth of its students and provides them with a thorough understanding of a range of subjects such as business organisation, financial accounting, corporate law, economic theory and business communication. The faculty members of the Department are known for their expertise in finance and organisational behaviour and impart practical knowledge of the discipline of auditing, company law and income tax. Interwoven into teaching practices is the goal of fostering in students a sense of responsibility towards society as well. In line with this emphasis, the classroom space is democratic and one in which differences in opinions are respected. Most importantly, teachers remain available to students at all times.",
        imageUrl: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/imts-2025/Two-days-International-conference.jpg",
        imageAlt: "Two Days International Conference",
    }

    return (
        <>
            <MainIntro title={mainIntroContent.title}
                description={[mainIntroContent.description, mainIntroContent.description2]}
                imageUrl={mainIntroContent.imageUrl}
                imageAlt={mainIntroContent.imageAlt}
                showKnowMore={true}
                initialVisibleParagraphs={1}
                descriptionClassName="text-[var(--light-text-gray)] font-plus-jakarta-sans"
            />
            {/* <MainIntro title={mainIntroContent1.title}
                description={[mainIntroContent1.description, mainIntroContent1.description2]}
                imageUrl={mainIntroContent1.imageUrl}
                imageAlt={mainIntroContent1.imageAlt}
                showKnowMore={true}
                initialVisibleParagraphs={1}
                descriptionClassName="text-[var(--light-text-gray)] font-plus-jakarta-sans"
            /> */}
        </>
    );

}