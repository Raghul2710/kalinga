"use client";

import React from "react";
import ChairmanMessage from "../components/leadership/chairman_message";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-front-banner02.webp",
  pageTitle: "Vice-Chancellor",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Vice-Chancellor", href: "/vice-chancellor" },
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
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/about/Leadership/Shridhar.png"
        imageAlt="Dr. R. Shridhar"
        name="Dr. R. Shridhar"
        title="Vice-Chancellor"
        
        quote="Education is not merely about degrees, but about shaping character, leadership, and purpose for a better tomorrow."
        message={[
 "It is a matter of honour and immense pleasure to lead Kalinga University.",
  "KU aims to offer high-quality education to students and a scholastic learning environment that encourages research and innovation with an urge to achieve academic excellence.",
  "Our highly qualified and experienced faculty members have enriched the university over the years.",
  "The primary objective of the university is to provide higher education that meets global standards, and hence, we have designed industry-relevant programs that focus on current industry scenarios.",
  "We continuously develop new pedagogical techniques through research and development, faculty development programs, and by establishing national and international tie-ups.",
  "By nurturing the goals and ambitions of our students, we have provided them a platform where they meet ample opportunities to grow and explore their interests to their full potential.",
  "Whether you have chosen engineering, science, arts & humanities, law, or commerce and management, our academic initiatives will make you a well-rounded professional.",
  "Internship opportunities, conferences, workshops, seminars, and hands-on training programs ensure that our students turn into professional graduates and have all the necessary skills and potential to make a positive change in the world.",
  "Keeping every student’s learning requirements in mind, we focus on giving them the best of everything.",
  "From digital classrooms and laboratories to offering a personalised learning experience, we support them at every stage of their journey.",
  "Please feel free to approach and speak with your teachers and mentors, and share your suggestions and feedback on how we can make your experience even more enrichin"
]}
      />
    </>
  );
}
