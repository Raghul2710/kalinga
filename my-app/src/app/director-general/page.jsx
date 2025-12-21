"use client";

import React from "react";
import ChairmanMessage from "../components/leadership/chairman_message";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-front-banner02.webp",
  pageTitle: "Director-general",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Director-general", href: "/director-general" },
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
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/about/Leadership/Byju+John.png"
        imageAlt="Dr. Byju John"
        name="Dr. Byju John"
        title="Director General"
       
        quote="Education is not merely about degrees, but about shaping character, leadership, and purpose for a better tomorrow."
        message={[
  "It gives me immense pleasure to welcome you all to Kalinga University.",
  "Not just education, but quality education is an important factor in the growth and development of any country and its people.",
  "It is a powerful tool to combat challenges through informed decision-making.",
  "Kalinga University stands as a pillar in providing robust knowledge and academic experience, preparing students for a rapidly evolving world.",
  "Our focus is not on quantitative learning but on delivering quality and value-based education to nurture global leaders.",
  "We meet the educational aspirations of our students by offering 130+ industry-relevant programs supported by world-class infrastructure, updated curricula, and a student-friendly environment.",
  "Our efforts create an atmosphere that fosters both academic excellence and professional growth.",
  "Students are encouraged not only to find answers but also to question, explore, and view concepts from their own perspectives.",
  "From recreation centres to centres of excellence, every aspect of our campus is thoughtfully designed to support a fulfilling academic journey.",
  "As modern organizations demand more than knowledge and grades, we emphasize holistic personality development to meet contemporary challenges.",
  "I invite you to prepare yourself for the opportunities of the new millennium at Kalinga University, with its blend of strong academics and new-age programs in emerging areas."
]
}
      />
    </>
  );
}
