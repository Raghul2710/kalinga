"use client";

import React from "react";
import ImageContent from "../components/ccrc/imagecontent";
import MainIntro from "../components/about/main_intro";
import SdgImageGrid from "../components/sdg-cell/sdg-image-grid";
import GlobalArrowButton from "../components/general/global-arrow_button";
import { useRouter } from "next/navigation";
import SectionHeading from "../../../my-app/src/app/components/general/SectionHeading";

export default function SDGCell() {
  const router = useRouter();

  const sdgPages = [
    { label: "Good Health and Well-being", href: "/sustainability/good-health-and-well-being" },
    { label: "Water Conservation", href: "/sustainability/water-conservation" },
    { label: "Energy Conservation", href: "/sustainability/energy-conservation" },
    { label: "Waste Management", href: "/sustainability/waste-management" },
    { label: "Sustainable Initiatives for a Green Campus", href: "/sustainability/sustainable-initiatives-for-a-green-campus" },
    { label: "Partnerships for the Goals", href: "/sustainability/partnerships-for-the-goals" }
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      <SectionHeading title="Centre of Excellence for Sustainable Development Goals"
        subTitle=""
        titleClassName="text-center pb-12 pt-6"
      />
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
        imageUrl="https://cdn.kalingauniversity.ac.in/sdg-cell/sdg-logo.png"
        imageAlt="SDG Goals"
        showKnowMore={true}
        initialVisibleParagraphs={1}
        disableClipPath={false}
        imageObjectFit="contain"
      />

      <SdgImageGrid />

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl text-center mb-12 font-serif">
          Out Initiatives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {sdgPages.map((page, index) => (
            <GlobalArrowButton
              key={index}
              onClick={() => router.push(page.href)}
              className="!w-full min-h-[60px] h-auto justify-between !rounded-xl"
              arrowClassName="p-[3px] !px-2 mr-2 !py-1"
              arrowSize={29}
            >
              {page.label}
            </GlobalArrowButton>
          ))}
        </div>
      </section>
    </div>
  );
}
