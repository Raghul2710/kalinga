"use client";

import ImageContent from "../ccrc/imagecontent";

export default function ResearchLab() {
  return (
    <section className="research-lab-wrapper">
      {/* Scoped CSS to resize image */}
      <style jsx>{`
        .research-lab-wrapper :global(img) {
          width: 100% !important;
          max-width: 900px;
          height: 260px !important;
          object-fit: cover;
          border-radius: 16px;
        }

        .research-lab-wrapper :global(.image-container),
        .research-lab-wrapper :global(.relative) {
          display: flex;
          justify-content: center;
        }
      `}</style>

      <ImageContent
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
        title="Laboratories"
        subtitle={null}
        description="We have research labs, including the Central Instrumentation Facility (CIF), and computer labs that fulfill the research needs of students through advanced resources, tools, and technologies."
        buttonText="Read More"
        buttonLink="/laboratories"   // ✅ this will navigate
        readmore={true}              // ✅ keep button visible
        hasImage={true}
        additionalContent={[]}       // ✅ optional, keep empty
      />
    </section>
  );
}
