"use client";

import React from "react";
import ResearchSixGridButtons from "../components/research/research_six_grid-buttons";

const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
  pageTitle: "Pay Online",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Pay Online', href: '/pay-online' }
  ]
};

// Register breadcrumb data globally
if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

const buttons = [
  {
    id: 1,
    text: "National Online Payment",
    href: "https://kuerp.in/",
  },
  {
    id: 2,
    text: "International Online Payment ",
    href: "https://kuerp.in/",
  },
];  
export default function KalingaBuzz() {
  return (
    <>  
      <ResearchSixGridButtons buttons={buttons} />
    </>
  );
}