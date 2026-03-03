"use client";
import React from "react";
import MainIntro from "@/app/components/about/main_intro";
import FAQ from "@/app/components/general/faq";

export default function ChairsPage() {
    const chairsData = [
        { slNo: 1, chair: "Shaheed Veer Narayan Singh Chair", inCharge: "Dr. Ajay Shukla" },
        { slNo: 2, chair: "Amartya Sen Chair", inCharge: "Dr. Chandra Bhooshan Singh" },
        { slNo: 3, chair: "Weng Ming Hui Chair", inCharge: "Dr. Kali doss" },
    ];

    const activitiesData = [
        {
            slNo: 1,
            title: "Role of Industrial Sector in Viksit Bharat",
            coordinator: "Dr. Chandra Bhooshan Singh",
            date: "31-01-2025",
            time: "2:30 P.M. to 03:30 P.M.",
            type: "Guest Lecture",
            venue: "Kalinga University, Naya Raipur",
            objective: "To enable participants understand the role of the industrial sector in achieving sustainable economic growth and development; To enable students understand the contribution of the industrial sector in innovation, infrastructure development, and economic progress, aligned with SDG - 9; To introduce students to industrial policies, advancements, challenges, and best practices; To offer a platform where they can share their ideas, ask questions, and exchange ideas related to the future of industrial development",
            outcome: "Developed an in-depth understanding of the industrial sector’s role in Viksit Bharat; Students learned about the real-world industrial challenges and opportunities; Developed analytical thinking abilities through interactive discussions and insights; Students understand the economic growth strategies and industrial policies"
        },
        {
            slNo: 2,
            title: "Poverty, Inequality, and Social Justice in India",
            coordinator: "Dr. Chandra Bhooshan Singh",
            date: "25-08-2023",
            time: "11:00 A.M. to 01:30 P.M.",
            type: "Debate Competition",
            venue: "Kalinga University, Naya Raipur",
            objective: "To encourage students to evaluate poverty, inequality, and social justice from economic, political, and ethical perspectives; To provide a platform for students where they can practice public speaking, persuasion, and argumentation skills; To complement classroom learning with participative activities and encourage students' involvement",
            outcome: "Enhanced analytical reasoning and evidence-based argumentation skills; Strengthened public speaking, confidence, and communication skills; Increased awareness about social justice and its role in nation-building"
        },
        {
            slNo: 3,
            title: "Invest-Verse Certification - Certification Sponsored by HDFC Mutual Fund",
            coordinator: "Dr. Komal Gupta",
            date: "11-11-2022",
            time: "10:30 A.M. to 01:30 P.M.",
            type: "Workshop",
            venue: "Kalinga University, Naya Raipur",
            objective: "To introduce students to investment planning, mutual funds, and wealth creation strategies; To provide a hands-on learning experience sponsored by HDFC Mutual Fund and facilitated by NSE Academy; To motivate students to explore responsible investment practices",
            outcome: "Participants learned real-life investment strategies and financial decision-making skills through practical training; Provided industry-level certificates to participants to strengthen employability"
        }
    ];

    const tableSections = [
        {
            id: 1,
            title: "Chairs",
            data: chairsData,
            columns: [
                { key: "slNo", label: "S.No.", width: "w-16" },
                { key: "chair", label: "Chair", width: "w-1/2" },
                { key: "inCharge", label: "In-charge", width: "w-1/3" },
            ]
        },
        {
            id: 2,
            title: "Details & Activities",
            answer: `
        <div class="space-y-4">
          <h4 class="font-bold text-lg">Amartya Sen Chair</h4>
          <p><strong>About the Chair -</strong> In collaboration with Hira Group, the Faculty of Commerce and Management at Kalinga University established the Amartya Sen Chair to promote research, activities and programs, capacity building, and collaboration.</p>
          
          <h5 class="font-bold">Objective of the Chair -</h5>
          <ul class="list-disc pl-5 space-y-1">
            <li>To promote high-quality research work in areas like economics, finance, taxation, corporate governance, management, and more</li>
            <li>To organize workshops, seminars, guest lectures, and conferences for research scholars, commerce and management students, and entrepreneurs</li>
            <li>To align academic research with corporate and societal needs</li>
            <li>To publish high-impact research papers, policy briefs, case studies, and books</li>
            <li>To improve student employability and skill development through industry-linked programs</li>
          </ul>
        </div>
      `
        },
        {
            id: 3,
            title: "Activities",
            data: activitiesData,
            columns: [
                { key: "slNo", label: "S.No", width: "w-12" },
                { key: "title", label: "Title of Program", width: "min-w-[200px]" },
                { key: "coordinator", label: "Faculty Coordinator", width: "min-w-[150px]" },
                { key: "date", label: "Date of Event", width: "min-w-[100px]" },
                { key: "time", label: "Time of Event", width: "min-w-[150px]" },
                { key: "type", label: "Event Type", width: "min-w-[120px]" },
                { key: "venue", label: "Venue", width: "min-w-[150px]" },
                { key: "objective", label: "Objective", width: "min-w-[300px]" },
                { key: "outcome", label: "Program Outcome", width: "min-w-[300px]" },
            ]
        }
    ];

    return (
        <>
            <MainIntro
                title="Chairs and Their Activities"
                description={[
                    "At the heart of Kalinga University’s research and innovation, our distinguished chairs play a crucial role in knowledge advancement in different areas and in creating solutions that remove societal challenges.",
                    "The chairs offer a platform to students, faculty members, researchers, and experts where they can share their unique ideas and conduct project works, presentations, competitions, guest lectures, training, and workshops. They not only contribute to the growth of the institution but also to the overall betterment of society."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/admission/library.webp"
                imageAlt="Kalinga University Library"
                showKnowMore={false}
            />

            <FAQ
                variant="table-display"
                tableSections={tableSections}
                items={[]}
                title="Overview"
                subtitle=""
                showHeading={false}
                pyClassName="pb-16"
            />
        </>
    );
}
