"use client";

import React from "react";
import MainIntro from "@/app/components/about/main_intro";


// Breadcrumb configuration
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
  pageTitle: "Kalinga Podcast",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Podcast", href: "/podcast" },
  ],
};

// Register breadcrumb data globally
if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}


const Podcast = () => {
  return (
    <div>
      <MainIntro
        title="Kalinga Podcast"
        subtitle="An Initiative By Kalinga University"
        description={["Big Ideas, Bold Voices, and Conversations that Inspire - Welcome to Kalinga Podcast!",
"A platform that shapes the voice of our students, faculty members, alumni, and industry leaders. From inspiring talks to engaging conversations, experience a whole new vibe at our podcast studio. Our students don’t just learn by listening, but they also learn how to create and host their own podcasts. ",
"So, plug in your earphones and discover new stories and ideas that will inspire you.",
]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/podcast.webp"
        imageAlt="Kalinga University Podcast"
        showKnowMore={false}
        showButton={false}
        initialVisibleParagraphs={5}
      />
    </div>
  );
};

export default Podcast; 