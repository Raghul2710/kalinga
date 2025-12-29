"use client";

import React from "react";
import MainIntro from "@/app/components/about/main_intro";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
  pageTitle: " Kalinga Radio",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Kalinga Radio", href: "/radio" },
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
        title="Kalinga Radio"
        subtitle="An Initiative By Kalinga University"
        description={[<strong key="radio-intro">Tune in to Kalinga Radio & never miss a moment!</strong>,
            "From college happenings, trending news, live shows, and important information on examinations or on upcoming events and activities, Kalinga Radio will always keep you connected and stay updated. It offers students a great platform where they can conduct shows, host interviews, and hear inspiring stories from alumni, faculty members, and special guests. Be a part of the campus conversation - anytime, anywhere.", 
]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-radio.webp"
        imageAlt="Kalinga University Radio"
        showKnowMore={true}
        knowMoreHref="https://kalinga.vercel.app/radio"
        knowMoreLabel="Download Now"
        initialVisibleParagraphs={2}   
        />
        </div>
  );
}
