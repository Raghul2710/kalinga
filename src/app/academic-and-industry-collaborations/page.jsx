import CollaborationsClient from "./CollaborationsClient";

export const metadata = {
  title: "Academic & Industry Collaborations | Global Partnerships | Kalinga University",
  description: "Explore Kalinga University's extensive academic and industry collaborations. Our global partnerships with MOU partners and international institutions enhance research and learning.",
  keywords: "university collaborations Kalinga University, industry partnerships Raipur, MOU partners university Chhattisgarh, international academic partnerships India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/academic-and-industry-collaborations",
  },
};

export default function CollaborationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Academic and Industry Collaborations - Kalinga University",
    "description": "Collaborative initiatives and partnerships with global academic and industrial organizations at Kalinga University.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Academic and Industry Collaborations", "item": "https://kalingauniversity.ac.in/academic-and-industry-collaborations" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CollaborationsClient />
    </>
  );
}
