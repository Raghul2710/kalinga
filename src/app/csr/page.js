import CSRClient from "./CSRClient";


export const metadata = {
  title: "Corporate Social Responsibility (CSR) | Social Initiative | Kalinga University",
  description: "Explore the CSR initiatives at Kalinga University. Our commitment to community welfare, sustainable development, and social impact through education and empowerment.",
  keywords: "CSR initiatives Kalinga University, social welfare Raipur, sustainable development Chhattisgarh, community empowerment India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/csr",
  },
};

export default function CSRPage() {
  const Items = [
    { id: 1, text: "To provide skill development and industry-aligned trainings" },
    { id: 2, text: "To provide training in technical and vocational education" },
    { id: 3, text: "To plant trees for environmental improvement" },
    { id: 4, text: "To organise social, cultural, and religious programs " },
    { id: 5, text: "To develop rural areas" },
  ];

  const targetGroups = [
    { title: "Students", icon: "Global.svg" },
    { title: "Youth", icon: "Holistic+Development.svg" },
    { title: "Women", icon: "Emotional+Well-Being.svg" },
    { title: "Underprivileged Communities", icon: "Community+Services.svg" },
    { title: "School Students", icon: "Career+Counseling.svg" },
    { title: "Industry Partners", icon: "Networking+Opportunities.svg" },
  ];

  const villagesAdopted = [
    { title: "Kotni", icon: "university.svg" },
    { title: "Palaud", icon: "facility-management.svg" },
    { title: "Tandul", icon: "Industrial+Visits.svg" },
    { title: "Kotara Bhantha", icon: "campus+life.svg" },
    { title: "Parsada", icon: "Educational+Tours.svg" },
    { title: "Kuhera", icon: "Extensive+Research+Facilities.svg" },
  ];

  const whyStudyItems = [
    { id: 1, title: 'STEM Education', body: 'Introducing STEM education to girls in rural areas.', variant: 'gray', image: 'https://cdn.kalingauniversity.ac.in/icons/Extensive+Research+Facilities.svg' },
  ];

  const aboutQuickLinks = [
    { id: 1, title: "Transport Subsidy", description: "Subsidised rates for students.", icon: "https://cdn.kalingauniversity.ac.in/admission/transport.svg", href: "/campus-life" },
  ];



  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "CSR - Kalinga University",
    "description": "Our commitment to social welfare and community development.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "CSR", "item": "https://kalingauniversity.ac.in/csr" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CSRClient
        Items={Items}
        whyStudyItems={whyStudyItems}
        aboutQuickLinks={aboutQuickLinks}
        targetGroups={targetGroups}
        villagesAdopted={villagesAdopted}
        FAQItems={[]}
      />
    </>
  );
}