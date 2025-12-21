"use client";

import React from "react";
import ChairmanMessage from "../components/leadership/chairman_message";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-front-banner02.webp",
  pageTitle: "Registrar",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Registrar", href: "/registrar" },
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
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/about/Leadership/Sandeep+Gandhi.png"
        imageAlt="Dr. Sandeep Gandhi"
        name="Dr. Sandeep Gandhi"
        title="Registrar"
        quote="Education is not merely about degrees, but about shaping character, leadership, and purpose for a better tomorrow."
        message={[
  "With great honour and pleasure, I welcome you to Kalinga University.",
  "As the Registrar of the university, I have the opportunity to lead with a clear vision and purpose, ensuring that we consistently deliver excellence in education in the years to come.",
  "The quality of education you receive at KU will not only open doors to job opportunities in reputed organizations but will also equip you with the skills required to launch your own startup and contribute economic value to the nation.",
  "We understand that today’s students must compete at an international level to secure opportunities in leading global companies, which requires the development of creative and innovative thinking.",
  "Keeping this in mind, we work closely with our students at every stage to help them achieve their future aspirations.",
  "Here, students are not only motivated and guided academically but also develop emotional intelligence essential for both personal and professional life.",
  "We believe that placements and internship opportunities are the need of the hour for every student.",
  "Accordingly, we provide internship opportunities from the first year itself and conduct campus recruitment drives with national and international hiring partners.",
  "With a blend of contemporary knowledge, skills, and values, we groom high-calibre thinkers to become morally upright, physically sound, and productive citizens in an ever-evolving society.",
  "I have complete trust in your immeasurable potential and wish you every success in your future endeavours."
]
}
      />
    </>
  );
}
