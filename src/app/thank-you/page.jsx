import ThankYouClient from "./ThankYouClient";

export const metadata = {
    title: "Thank You | Submission Received | Kalinga University",
    description: "Thank you for contacting Kalinga University. Your submission has been received successfully, and our team will get back to you shortly.",
    keywords: "thank you Kalinga University, submission successful Raipur, contact university Chhattisgarh",
    alternates: {
        canonical: "https://kalingauniversity.ac.in/thank-you",
    },
    robots: {
        index: false,
        follow: true,
    }
};

export default function ThankYouPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Thank You - Kalinga University",
        "description": "Confirmation page for successful form submissions.",
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
                { "@type": "ListItem", "position": 2, "name": "Thank You", "item": "https://kalingauniversity.ac.in/thank-you" }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ThankYouClient />
        </>
    );
}
