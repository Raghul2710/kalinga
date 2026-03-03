"use client";

import MainIntro from "../about/main_intro";

const hcIntroContent = {
  imageUrl:
    "https://cdn.kalingauniversity.ac.in/health-clinic/health-clinic-2.webp",
  title: "Doctor on call",
  description: [
    "Our on-campus health clinic has an experienced doctor available on call and nurse who ensures the well-being of our staff members and students by providing them with general consultation, counselling, and emergency support. Our health clinic has 4 beds, a first-aid facility, and also provides ambulance service.",
    "For advanced medical care, we have partnered with several hospitals and health clinics. KU’s medical team prioritises the well-being of its students and faculty members by providing quality and timely healthcare support.",
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
        showKnowMore={false}
        initialVisibleParagraphs={2}
      />
    </section>
  );
}
