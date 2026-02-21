"use client";

import React from "react";
import ImageContent from "../components/ccrc/imagecontent";
import MainIntro from "../components/about/main_intro";
import SdgTabSection from "../components/sdg-cell/sdg-tab-section";
import FAQ from "../components/general/faq";
// import SpecializationCard from "../components/department/specialization-card";

// FAQ items for different sections
const faqItems = [
  {
    id: 1,
    title: "Sustainability Infrastructure",
    description: "Learn about Kalinga University's green campus initiatives, including solar power, rainwater harvesting, and waste management systems.",
    buttons: [
      { label: "Energy Policy", onClick: () => console.log("Energy Policy") },
      { label: "Water Management", onClick: () => console.log("Water Management") }
    ]
  },
  {
    id: 2,
    title: "Community Outreach",
    description: "Our commitment to community development through various social welfare campaigns and awareness programs.",
    buttons: [
      { label: "Women Empowerment", onClick: () => console.log("Women Empowerment") },
      { label: "Rural Development", onClick: () => console.log("Rural Development") }
    ]
  }
];

export default function SDGCell() {
  return (
    <div className="min-h-screen bg-white">
      <ImageContent
        hasImage={false}
        readmore={false}
        className="items-center justify-center"
        title="Every Small Action Can Make A Big Difference"
        subtitle="Every Small Action Can Make A Big Difference"
        subtitleclassName="hidden"
        description={
          <>
            Our University promotes sustainable and eco-friendly practices by taking initiatives that minimise environmental impact for the betterment of our planet and future generations. The goal is to make our students environmentally conscious and responsible towards society. They are being taught ways to reduce their carbon footprints and conserve natural resources. By practising the 3 R’s (Reduce, Recycle, and Reuse), our students and faculty members work together towards green initiatives and set new benchmarks in the field of sustainable education.
          </>
        }
      />
      <MainIntro
        title="KU’s Commitment Towards Sustainable Development Goals (SDGs)"
        description={[
          "The Sustainable Development Goals (SDGs), also known as the Global Goals, were adopted by the United Nations in 2015. The SDGs' 17 goals aim to protect the planet, end poverty, and ensure peace and prosperity by 2030. These goals are well-connected, so if one area progresses or struggles, it will impact others, too.",
          "The SDG Cell at Kalinga University was established on 12.04.2022 to promote and implement initiatives related to the cell. We adopted all 17 practices to address global challenges and work towards impactful solutions by balancing social, economic, and environmental challenges. We integrate sustainable practices into our University’s academic, social, cultural, research, administrative, and community engagement activities."
        ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/sdg-goals.webp"
        imageAlt="SDG Goals"
        showKnowMore={true}
        initialVisibleParagraphs={1}
        disableClipPath={false}
        imageObjectFit="contain"
      />
      <SdgTabSection />
      {/* <FacilitySlider /> */}
      {/* <SpecializationCard /> */}
      <FAQ
        title="SDG Cell Resources"
        subtitle=""
        variant="button"
        buttons={faqItems}
        pyClassName="py-8 md:py-12"
      />
    </div>
  );
}
