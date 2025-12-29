"use client";

import React from "react";
import MainIntro from "@/app/components/about/main_intro";
import ResearchSixGridButtons from "@/app/components/research/research_six_grid-buttons";

// Disable static generation to prevent SSR issues
export const dynamic = 'force-dynamic';

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
  pageTitle: " Kalinga Buzz",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Kalinga Buzz", href: "/kalinga-buzz" },
  ],
};

// Register breadcrumb data globally
if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

export default function KalingaBuzz() {

  const buttons = [
    {
      id: 1,
      text: "Kalinga Buzz July 2019",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/buzz/July+2019.pdf",
    },
    {
      id: 2,
      text: "Kalinga Buzz August 2019",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/buzz/Aug+2019.pdf",
    },
    {
      id: 3,
      text: "Kalinga Buzz September 2019",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/buzz/Sep+2019.pdf",
    },
    {
      id: 4,
      text: "Kalinga Buzz October 2019",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/buzz/Oct+2019.pdf",
    },
    {
      id: 5,
      text: "Kalinga Buzz November 2019",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/buzz/Nov+2019.pdf",
    },
    {
      id: 6,
      text: "Kalinga Buzz December 2019",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/buzz/Dec+2019.pdf",
    },
  ];

  const buttons2 = [
    {
      id: 1,
      text: "Kalinga Buzz January 2020",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/buzz/Kalinga+Buzz+Jan+2020.pdf",
    },
    {
      id: 2,
      text: "Kalinga Buzz February 2020",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/buzz/Kalinga+Buzz+Feb+2020.pdf",
    },
    {
      id: 3,
      text: "Kalinga Buzz March 2020",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/buzz/Kalinga+Buzz+March+2020.pdf",
    },
    {
      id: 4,
      text: "Kalinga Buzz April 2020",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/buzz/Kalinga+Buzz+April+2020.pdf",
    },
    {
      id: 5,
      text: "Kalinga Buzz May 2020",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/buzz/Kalinga+Buzz+May+2020.pdf",
    },
    {
      id: 6,
      text: "Kalinga Buzz June 2020",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/buzz/Kalinga+Buzz+June+2020.pdf",
    },
    {
      id: 7,
      text: "Kalinga Buzz July 2020",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/buzz/Kalinga+Buzz+July+2020.pdf",
    },
    {
      id: 8,
      text: "Kalinga Buzz September 2020",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/buzz/Kalinga+Buzz+September+2020.pdf",
    },
    {
      id: 10,
      text: "Kalinga Buzz November 2020",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/buzz/Kalinga+Buzz+November+2020.pdf",
    },
    {
      id: 11,
      text: "Kalinga Buzz December 2020",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/buzz/Kalinga+Buzz+Dec+2020.pdf",
    },
  ];

  const buttons3 = [
    {
      id: 1,
      text: "Kalinga Buzz January 2021",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/buzz/Kalinga+Buzz+jan+2021.pdf",
    },
    {
      id: 2,
      text: "Kalinga Buzz February 2021",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/buzz/Kalinga+Buzz+Feb+2021.pdf",
    },
    {
      id: 3,
      text: "Kalinga Buzz April 2021",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/buzz/Kalinga+Buzz+april+2021.pdf",
    },
    
  ];

  const buttons4 = [
    {
      id: 1,
      text: "Kalinga Buzz January 2025",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/buzz/Buzz+January+2025.pdf",
    },
  ];

  return (
    <>
      <MainIntro
        title="Kalinga Buzz"
        subtitle="An Initiative By Kalinga University"
        description={["Stay connected and updated with our monthly newsletters! It highlights cultural events, ceremonies, research breakthroughs, sports achievements, academic achievements, students' and faculty achievements, and much more.",
        
      ]}
      imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-buzz.webp"
      imageAlt="Kalinga University Buzz"
      />
      <h2 className="text-2xl text-center">Kalinga Buzz 2019</h2>
      <ResearchSixGridButtons
      buttons={buttons}
      />
      <h2 className="text-2xl text-center">Kalinga Buzz 2020</h2>
      <ResearchSixGridButtons
      buttons={buttons2}
      />
      <h2 className="text-2xl text-center">Kalinga Buzz 2021</h2>
      <ResearchSixGridButtons
      buttons={buttons3}
      />
      <h2 className="text-2xl text-center">Kalinga Buzz 2025</h2>
      <ResearchSixGridButtons
      buttons={buttons4}
      />
    </>
  );
}