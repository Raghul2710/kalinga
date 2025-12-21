"use client";

import MainIntro from "../about/main_intro";

const hcIntroContent = {
  imageUrl:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  title: "Health Clinic",
  description: [
    "Our on-campus health clinic has an experienced doctor and nurse who ensure the well-being of our staff members and students by providing them with general consultation, counselling, and emergency support. Our health clinic has 4 beds, a first-aid facility, and also provides ambulance service.",
    "",
    "For advanced medical care, we have tied up several hospitals and clinics. KU’s medical team prioritises the well-being of its students and faculty members by providing quality and timely healthcare support.",
  ],
};

export default function HCIntro() {
  return (
    <section className="hc-intro-wrapper">
      {/* ✅ Scoped CSS override for description alignment */}
      <style jsx>{`
        /* Justify only paragraph text inside MainIntro description */
        .hc-intro-wrapper :global(p) {
          text-align: justify;
        }
      `}</style>

      <MainIntro
        title={hcIntroContent.title}
        description={hcIntroContent.description}
        imageUrl={hcIntroContent.imageUrl}
        readMoreLabel="Read More"
        readLessLabel="Read Less"
        showKnowMore={true}
        initialVisibleParagraphs={1}
      />
    </section>
  );
}
