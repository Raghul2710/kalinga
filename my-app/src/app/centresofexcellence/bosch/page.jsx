"use client";

import { useEffect } from "react";
import ImageContent from "@/app/components/ccrc/imagecontent";
import CareerPath from "@/app/components/course/career_path";
import AdmissionCareer from "@/app/components/general/admission_cta";
import Gallery from "@/app/components/general/gallery";



const aboutCentreDescription = [
  "BOSCH is a globally renowned leader in engineering and electronics, and we have partnered with them to offer programs for school dropout students (18–25 years) that bridge their educational gaps on their academic campus.",
  "BRIDGE Courses Training Centre at Kalinga University focuses on two major aspects—skill development and employability—by teaching industry-relevant skills and providing placement opportunities in the automotive and manufacturing sectors.",
];

const learnCards = [
  {
    id: 1,
    title: "",
    description: "Automotive & Manufacturing Fundamentals",
    imageUrl:
      "https://cdn.kalingauniversity.ac.in/bosch/bosch-1.svg",
  },
  {
    id: 2,
    title: "",
    description: "Problem Identification & Troubleshooting",
    imageUrl:
      "https://cdn.kalingauniversity.ac.in/bosch/bosch-2.svg",
  },
  {
    id: 3,
    title: "",
    description: "Industry-Relevant Vocational Training",
    imageUrl:
      "https://cdn.kalingauniversity.ac.in/bosch/bosch-3.svg",
  },
  {
    id: 4,
    title: "",
    description: "Hands-On Technical Training",
    imageUrl:
      "https://cdn.kalingauniversity.ac.in/bosch/bosch-4.svg",
  },
  {
    id: 5,
    title: "",
    description: "Analytical & Problem-Solving Skills",
    imageUrl:
      "https://cdn.kalingauniversity.ac.in/bosch/bosch-5.svg",
  },
  {
    id: 6,
    title: "",
    description: "Workplace & Communication Skills",
    imageUrl:
      "https://cdn.kalingauniversity.ac.in/bosch/bosch-6.svg",
  },
];

const glimpses = [
  {
    id: 1,
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/bosch/bosch-glimpse1.webp",
    imageAlt: "BRIDGE Training Glimpse",
    title: "Training Session Glimpse",
  },
  {
    id: 2,
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/bosch/bosch-glimpse2.webp",
    imageAlt: "BRIDGE Training Glimpse",
    title: "Skill Development Activity",
  },
  {
    id: 3,
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/bosch/bosch-glimpse3.webp",
    imageAlt: "BRIDGE Training Glimpse",
    title: "Practical Lab Glimpse",
  },
];

const galleryImages = glimpses.map((g) => ({
  id: g.id,
  image: g.imageSrc,
  alt: g.imageAlt || g.title || "Gallery image",
}));

export default function BridgeCentrePage() {


  return (
    <main className="bg-white">
      <ImageContent
        title="BRIDGE Courses Training Centre"
        subtitle="In collaboration with BOSCH"
        description={aboutCentreDescription}
        imageSrc="https://cdn.kalingauniversity.ac.in/about/accerdation/Group+1000002989.png"
        imageAlt="BRIDGE Centre Banner"
        readmore={false}
      />

      <CareerPath careers={learnCards} title="What You’ll Learn" description="" />

      <Gallery
        images={galleryImages}
        title="Glimpses of BRIDGE Courses Training Centre"
      />

      <AdmissionCareer />
    </main>
  );
}
