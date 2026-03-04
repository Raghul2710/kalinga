import StudentWelfareClient from "./StudentWelfareClient";

export const metadata = {
    title: "Student Welfare | Activities, Sports & NSS | Kalinga University",
    description: "Learn about student welfare initiatives at Kalinga University, including sports, cultural activities, NSS, NCC, and young Indians (Yi) activities. Supporting our students' holistic development.",
    keywords: "student welfare Kalinga University, sports activities university Raipur, NSS Kalinga, NCC university Chhattisgarh, university cultural events India",
    alternates: {
        canonical: "https://kalingauniversity.ac.in/student-welfare",
    },
};

export default function StudentWelfarePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Student Welfare - Kalinga University",
        "description": "Comprehensive student welfare programs focusing on sports, culture, social service, and leadership development.",
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
                { "@type": "ListItem", "position": 2, "name": "Student Welfare", "item": "https://kalingauniversity.ac.in/student-welfare" }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <StudentWelfareClient />
        </>
    );
}
