"use client";

import React from "react";
import ChairmanMessage from "../components/leadership/chairman_message";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-front-banner02.webp",
  pageTitle: "Chancellor",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Chancellor", href: "/chancellor" },
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
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/about/Leadership/Sandeep+Arora.png"
        imageAlt="Dr. Rajeev Kumar"
        name="Dr. Rajeev Kumar"
        title="Chancellor"
       
        quote="Education is not merely about degrees, but about shaping character, leadership, and purpose for a better tomorrow."
        message={[
          "It gives me immense pleasure to welcome you to Kalinga University, where education goes beyond classrooms and inspires lifelong learning.",
          "In today’s globalized environment, competition has increased across all fields, including education. To address this, we have built a robust curriculum that transforms students into industry-ready professionals.",
          "Kalinga University proudly ranks among the top 101–150 universities in India under the NIRF Rankings and holds NAAC B+ accreditation.",
          "Our multicultural campus includes students from over 24 countries, interdisciplinary programs, advanced research laboratories, and experienced faculty members.",
          "We emphasize co-curricular activities, ethics, and community engagement to nurture responsible global citizens.",
          "At Kalinga University, students do not just earn degrees; they graduate with confidence, clarity, and the ability to make meaningful contributions to society.",
          "I warmly welcome you to Kalinga University and wish you every success in your academic and professional journey.",
        ]}
      />
    </>
  );
}
