"use client";

import FAQ from "@/app/components/general/faq";

export default function ResearchResourceFaqClient() {
    const defaultFAQItems = [
        {
            id: 1,
            question: "Seed Money",
            answer: (
                <>
                    <strong>Purpose</strong>
                    <br />
                    The primary goal of this scheme is to support faculty members and researchers in developing research resources in their expertise through interdisciplinary approaches or methodologies.
                    <br /><br />

                    <strong>Objectives</strong>
                    <ul className="list-disc list-inside mt-2 mb-4">
                        <li>To promote a research-friendly environment.</li>
                        <li>To strengthen the research culture with clear guidelines.</li>
                        <li>To encourage socially and commercially relevant research work.</li>
                        <li>To help researchers work on real projects and gain scholarships.</li>
                        <li>To promote collaboration among different departments.</li>
                        <li>To attract new and talented researchers.</li>
                        <li>To support innovation and product development.</li>
                    </ul>

                    <strong>Who Can Apply?</strong>
                    <br />
                    The faculty members who have been appointed as Assistant Professor, Associate Professor, and Professor at Kalinga University.
                    <br /><br />

                    <strong>Amount</strong>
                    <br />
                    Up to INR 100,000/- and in exceptional cases up to INR 300,000/-
                    <br /><br />

                    <strong>Process</strong>
                    <br />
                    The applicant has to fill in the details related to the projects along with his/her details in the format given in Kalinga University Seed Money Policy and submit the form at the Office of Vice Chancellor, Kalinga University, Raipur after getting signed by the concerned HoD and Dean Research.
                </>
            ),
            buttons: [
                {
                    label: "Seed Money Policy",
                    onClick: () =>
                        window.open(
                            "https://cdn.kalingauniversity.ac.in/research-resources/Seed+Money+Policy.pdf",
                            "_blank",
                            "noopener,noreferrer"
                        ),
                },
                {
                    label: "Download Form",
                    onClick: () =>
                        window.open(
                            "https://cdn.kalingauniversity.ac.in/research-resources/Seed+money+format.pdf",
                            "_blank",
                            "noopener,noreferrer"
                        ),
                },
            ],
        }

        ,
        {
            id: 2,
            question: "Our Plagiarism Software",
            answer:
                "We use DrillBit to check plagiarism and originality in the research work. It is a cloud-based plagiarism-detection software that identifies copied or AI-generated content in academic and professional writing, and is successfully used by educational institutions, students, researchers, and publishers worldwide. This helps our researchers avoid duplicate content, ensuring the work they submit is self-generated and of high quality.",
            buttons: [
                {
                    label: "Know More",
                    onClick: () =>
                        window.open(
                            "https://www.drillbitplagiarism.com/",
                            "_blank",
                            "noopener,noreferrer"
                        ),
                },
            ],
        },
        {
            id: 3,
            question: "Our Plagiarism Policy",
            answer:
                "We strictly follow our anti-plagiarism rules and copying someone else’s work is not allowed in our University. We believe that our research scholars produce original work and do not copy it from somewhere else. They are required to give references for each topic and must follow ethical writing practices. We maintain high standards in research practices and appreciate their unique ideas.",
            buttons: [
                {
                    label: "Download PDF",
                    onClick: () =>
                        window.open(
                            "https://cdn.kalingauniversity.ac.in/research-resources/PLAGIARISM-FILE-POLICY.pdf",
                            "_blank",
                            "noopener,noreferrer"
                        ),
                },
            ],
        },
    ];

    return (
        <FAQ
            items={defaultFAQItems}
            variant="button"
            title=""
            subtitle=""
        />
    );
}
