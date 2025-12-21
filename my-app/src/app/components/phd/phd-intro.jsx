"use client";

import React from "react";
import MainIntro from "../about/main_intro";

export default function PhdIntro() {
  return (
    <section className="phd-intro-wrapper">
      {/* Scoped CSS to justify description text */}
      <style jsx>{`
        .phd-intro-wrapper :global(p) {
          text-align: justify;
          text-justify: inter-word;
        }
      `}</style>

      <MainIntro
        title="Ph.D. [Full-Time / Part-Time]"
        subtitle="Empowering Scholars To Lead With A Purpose"
        description={[
          "Pursuing a doctoral program can be a transformative step for the growth of your career and to earn a name and recognition in society. It will not just provide you with in-depth knowledge, but you will also get an opportunity to contribute to research and development. A Ph.D. degree will make you stand out in both the academic and corporate worlds, and you will be considered first in different high-profile job roles.",
          "We stand out as one of the best research universities as we encourage interdisciplinary research in pursuit of knowledge exchange among our research scholars. Our full-time Ph.D. enthusiasts work on different ongoing research projects of our University, gaining practical knowledge apart from theoretical studies. By working on these projects, they don’t just contribute to their domain but also develop a competency to perform research work individually or in a group.",
        ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
        imageAlt="Kalinga University Research"
        readMoreLabel="Read More"
        readLessLabel="Show Less"
        initialVisibleParagraphs={1}
        showKnowMore={true}
      />
    </section>
  );
}
