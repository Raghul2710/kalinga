"use client";

import React from "react";
import ChairmanMessage from "../components/leadership/chairman_message";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-front-banner02.webp",
  pageTitle: "pro-Chancellor",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "pro-chancellor", href: "/pro-chancellor" },
  ],
};

// Register breadcrumb data globally
if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

export default function Leadership() {
  return (
    <>
      <ChairmanMessage
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/about/Leadership/Sajjan+Singh.png"
        imageAlt="Mr. Sajjan Singh"
        name="Mr. Sajjan Singh"
        title="Pro-Chancellor"
        
        quote="Education is not merely about degrees, but about shaping character, leadership, and purpose for a better tomorrow."
        message={[
"As you begin a new journey of academic exploration, I extend a heartfelt welcome to all our students joining Kalinga University.","It gives me immense pleasure to be part of Kalinga University as the Pro Chancellor and to welcome students from India and across the globe into our undergraduate, postgraduate, and research programs.",

"We strive to provide a supportive learning environment that fosters innovation, sustainability, diversity, and prepares our graduates to lead businesses, society, and the nation.",
"From onboarding to graduation, our students are trained with the right mindset and practical skills to confidently face real-life challenges.",

"The successful placement of our meritorious students in reputed companies reflects their dedication and reinforces the university’s commitment to quality education and strong core values.",

"Through our dedicated Career and Corporate Resource Centre, we equip students with essential communication skills, professional grooming, interview preparation, and resume-building expertise.",

"With its serene and pollution-free campus, Kalinga University offers an ideal environment for focused learning, holistic development, and active participation in extracurricular activities.",

"I am confident that the updated knowledge imparted at our university will empower students to become employable citizens and contribute meaningfully to the nation’s development.",

"May your journey at Kalinga University be filled with growth, success, and lasting achievement."
        ]}
      />
    </>
  );
}
