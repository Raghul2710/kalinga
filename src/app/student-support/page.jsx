import StudentSupportClient from "./StudentSupportClient";

export const metadata = {
  title: "Student Support Services | Academic & Emotional Guidance | Kalinga University",
  description: "Explore the comprehensive student support services at Kalinga University. From academic counseling to emotional well-being, we ensure our students have the resources they need to thrive.",
  keywords: "student support Kalinga University, academic counseling Raipur, emotional well-being university Chhattisgarh, student services India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/student-support",
  },
};

export default function StudentSupportPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Student Support - Kalinga University",
    "description": "Dedicated support services for the holistic development and well-being of students at Kalinga University.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Student Support", "item": "https://kalingauniversity.ac.in/student-support" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StudentSupportClient />
    </>
  );
}