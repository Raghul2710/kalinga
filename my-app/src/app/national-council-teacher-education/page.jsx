"use client";

import React from "react";
import ResearchSixGridButtons from "@/app/components/research/research_six_grid-buttons";


const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
  pageTitle: "National Council For Teacher Education",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'National Council For Teacher Education', href: '/national-council-teacher-education' }
  ]
};

// Register breadcrumb data globally
if (typeof window !== "undefined") {
    window.__breadcrumbData = breadcrumbData;
  }


  const buttons = [
    {
      id: 1,
      text: "National Council for Teacher Education",
      href: "https://ncte.gov.in/Website/Index.aspx",
    },
    {
      id: 2,
      text: "Hyperlink of Council’s",
      href: "https://ncte.gov.in/Website/regulation.aspx",
    },
    {
      id: 3,
      text: "Details of Sanctioned Programme along with Annual Intake",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/national-council/List+of+Programmes+Running+in+KU.pdf",
    },
    {
      id: 4,
      text: "Details of Faculty",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/national-council/List+of+Teaching+Staff+of+Faculty+of+Education.pdf",
    },
    {
      id: 5,
      text: "Details of Students",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/national-council/List+of+Students+(Education+Deptt.)+2024-2026+%26+2023-2025.pdf",
    },
    {
      id: 6,
      text: "Details of Available Infrastructure Facilities",
      href: "#",
    },
    {
      id: 7,
      text: "Fees Details",
      href: "/ku-fees",
    },
    {
      id: 8,
      text: "Facilities Added During the Last Quarter",
      href: "#",
    },
    {
      id: 9,
      text: "Number of Books in the Library, Referred Journals Subscribed to, and Addition, if any, in the Last Quarter",
      href: "/library",
    },
    {
      id: 10,
      text: "Details of Instructional Facilities, such as the Laboratory and Library",
      href: "/laboratories",
    },
    {
      id: 11,
      text: "Balance Sheet as on the Last Date of the Last Financial Year",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/national-council/K.+Balance+Sheet.pdf",
    },
    {
      id: 12,
      text: "Income and Expenditure Account for the Last Financial Year",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/national-council/L.+Income+%26+Expenditure.pdf",
    },
    {
      id: 13,
      text: "Receipt and Payment Account for the Last Financial Year",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/national-council/M.+Receipt+%26+Payments.pdf",
    },
    {
      id: 14,
      text: "Details of biometric data",
      href: "#",
    },
    
  ];  
  export default function KalingaBuzz() {
    return (
      <>  
       
        <ResearchSixGridButtons buttons={buttons} />
      </>
    );
  }