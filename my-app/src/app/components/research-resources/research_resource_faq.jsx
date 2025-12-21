"use client";

import FAQ from "@/app/components/general/faq";

export default function ResearchResourceFaqClient() {
    const FAQItems = [
        {
            id: 1,
            question: "Seed Money",
            answer: (
                <div className="space-y-4">
                    <div>
                        <p className="font-semibold text-[var(--foreground)]">Purpose</p>
                        <p className="text-[var(--foreground)]">
                            The primary goal of this scheme is to support faculty members and researchers in developing research resources in their expertise through interdisciplinary approaches or methodologies.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-[var(--foreground)]">Objectives</p>
                        <ul className="list-disc pl-5 space-y-2 text-[var(--foreground)]">
                            <li>To promote a research-friendly environment.</li>
                            <li>To strengthen the research culture with clear guidelines.</li>
                            <li>To encourage socially and commercially relevant research work.</li>
                            <li>To help researchers work on real projects and gain scholarships.</li>
                            <li>To promote collaboration among different departments.</li>
                            <li>To attract new and talented researchers.</li>
                            <li>To support innovation and product development.</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold text-[var(--foreground)]">Who Can Apply?</p>
                        <p className="text-[var(--foreground)]">
                            The faculty members who have been appointed as Assistant Professor, Associate Professor, and Professor at Kalinga University.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-[var(--foreground)]">Amount</p>
                        <p className="text-[var(--foreground)]">
                            Up to INR 100,000/- and in exceptional cases up to INR 300,000/-.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-[var(--foreground)]">Process</p>
                        <p className="text-[var(--foreground)]">
                            The applicant has to fill in the details related to the projects along with his/her details in the format given in Kalinga University Seed Money Policy and submit the form at the Office of Vice Chancellor, Kalinga University, Raipur after getting signed by the concerned HoD and Dean Research.
                        </p>
                    </div>
                </div>
            ),
            buttons: [
                {
                    label: "SEED Money Policy",
                    onClick: () =>
                        window.open(
                            "https://drive.google.com/file/d/1i_dDThysngC6valk868HhjcfWrrP4a0i/view?usp=drive_link",
                            "_blank"
                        ),
                },
            ],
        },
        {
            id: 2,
            question: "Our Plagiarism Software",
            answer:
                "We use DrillBit to check plagiarism and originality in the research work. It is a cloud-based plagiarism-detection software that identifies copied or AI-generated content in academic and professional writing, and is successfully used by educational institutions, students, researchers, and publishers worldwide. This helps our researchers avoid duplicate content, ensuring the work they submit is self-generated and of high quality.",
        },
        {
            id: 3,
            question: "Our Plagiarism Policy",
            answer:
                "We strictly follow our anti-plagiarism rules and copying someone else’s work is not allowed in our University. We believe that our research scholars produce original work and do not copy it from somewhere else. They are required to give references for each topic and must follow ethical writing practices. We maintain high standards in research practices and appreciate their unique ideas.",
            buttons: [
                {
                    label: "Know More",
                    onClick: () =>
                        window.open(
                            "https://drive.google.com/file/d/1FmMP0-jyR7WemCE6TRGih-6fBjPGnwvT/view?usp=drive_link",
                            "_blank"
                        ),
                },
            ],
        },
    ];

    const buttonItems = FAQItems.map((item) => ({
        id: item.id,
        title: item.title ?? item.question ?? "",
        description: item.description ?? item.answer ?? "",
        buttons: Array.isArray(item.buttons) ? item.buttons : [],
    }));

    return (
        <FAQ
            variant="button"
            title=""
            subtitle=""
            buttons={buttonItems}
        />
    );
}