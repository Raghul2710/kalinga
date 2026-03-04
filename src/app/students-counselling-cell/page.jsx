import CounsellingCellClient from "./CounsellingCellClient";

export const metadata = {
    title: "Students Counselling Cell | Wellness & Career Support | Kalinga University",
    description: "Kalinga University's Counselling Cell provides emotional, mental, and career support for students. Navigate your academic journey with confidence and clarity through our wellness programs.",
    keywords: "Students counselling Kalinga University, mental health support Raipur, career counselling university Chhattisgarh, student wellness India",
    alternates: {
        canonical: "https://kalingauniversity.ac.in/students-counselling-cell",
    },
};

export default function CounsellingCellPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Students Counselling Cell - Kalinga University",
        "description": "Dedicated counselling services for the emotional and holistic development of students at Kalinga University.",
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
                { "@type": "ListItem", "position": 2, "name": "Students Counselling Cell", "item": "https://kalingauniversity.ac.in/students-counselling-cell" }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <CounsellingCellClient />
        </>
    );
}
