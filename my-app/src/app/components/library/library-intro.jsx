"use client";

import React from "react";
import MainIntro from "../about/main_intro";

export default function LibraryIntro() {
  return (
    <section className="library-intro-wrapper">
      {/* Scoped CSS to justify description text */}
      <style jsx>{`
        .library-intro-wrapper :global(p) {
          text-align: justify;
          text-justify: inter-word;
        }
      `}</style>

      <MainIntro
        title="KU Library"
        subtitle="A Silent Powerhouse Of Knowledge"
        description={[
          "The Library at Kalinga University, Naya Raipur, is the biggest learning platform that offers a large number of books, magazines, Indian & International journals, and other online resources, providing students and faculty members with an outstanding learning experience. It has a reading room capacity for 400 students, which is divided into 2 halls of 200 students each. With modern infrastructure and facilities, students get the highest level of comfort and academic support throughout their journey.",
          "Our library is packed with the latest collection of resources in the form of books, journals, research papers, digital resources, magazines, and newspapers designed to provide up-to-date information. With our collaborative learning environment, students can share their ideas, work on projects, and grow together in a group. We also provide them with free access to e-resources through their ERP portal.",
        ]}
        readMoreLabel="Read More"
        readLessLabel="Read Less"
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
        showKnowMore={true}
        initialVisibleParagraphs={1}
      />
    </section>
  );
}
