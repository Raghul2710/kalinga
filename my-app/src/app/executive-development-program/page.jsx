"use client";

import React from "react";
import MainIntro from "@/app/components/about/main_intro";

const breadcrumbData = {
    heroImage:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
    pageTitle: " Executive Development Program",
    customBreadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Executive Development Program", href: "/executive-development-program" },
    ],
  };
  
  // Register breadcrumb data globally
  if (typeof window !== "undefined") {
    window.__breadcrumbData = breadcrumbData;
  }

  export default function Radio() {
    return (
      <div>
        <MainIntro
          title="Executive Development Program"
          subtitle=""
          description="In today’s growing economy, business leaders are being tested in unimaginable ways. Thus, it becomes imperative to prepare for new challenges ahead by developing new business skills, leadership capabilities, and identifying new ideas and innovative business solutions during uncertainty or rapid change. Kalinga University prepares rising executives towards high-potential and successful leaders who are ready to face the challenges by using the latest knowledge, skills, and best practices. The 1-year program focuses on the practical application of their knowledge and how to effectively utilise decision-making and leadership skills in a real business environment to improve organisational performance and growth. "
          imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/students-5.webp"
          imageAlt="Executive Development Program"
          />
          </div>
    );
  }