import AllFormsClient from "./AllFormsClient";

export const metadata = {
    title: "All Forms | Centralized Registration & Inquiry | Kalinga University",
    description: "Access all Kalinga University forms in one place. Centralized access to application, registration, alumni, and inquiry forms for students and staff.",
    keywords: "Kalinga University forms, university application Raipur, student registration Chhattisgarh, inquiry forms India",
    alternates: {
        canonical: "https://kalingauniversity.ac.in/all-forms",
    },
};

export default function AllFormsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "All Forms - Kalinga University",
        "description": "Comprehensive list of all institutional forms for Kalinga University.",
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
                { "@type": "ListItem", "position": 2, "name": "All Forms", "item": "https://kalingauniversity.ac.in/all-forms" }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AllFormsClient />
        </>
    );
}
