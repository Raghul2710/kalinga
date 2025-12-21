"use client";

import MainIntro from "../about/main_intro";

export default function ResearchFacilitiesIntro() {
  return (
    <section className="research-facilities-intro-wrapper">
      {/* Scoped CSS for justified text (kept for consistency / future use) */}
      <style jsx>{`
        .research-facilities-intro-wrapper :global(p) {
          text-align: justify;
          text-justify: inter-word;
        }
      `}</style>

      <MainIntro
        title="Research Facilities"
        subtitle="Explore | Experiment | Excel"
        description={[]}  
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
        readMoreLabel="Read More"
        readLessLabel="Read Less"
        showKnowMore={true}
        initialVisibleParagraphs={1}
      />
    </section>
  );
}
