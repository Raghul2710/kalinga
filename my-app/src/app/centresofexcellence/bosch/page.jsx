"use client";

import { useEffect } from "react";
import ImageContent from "@/app/components/ccrc/imagecontent";
import CareerPath from "@/app/components/course/career_path";
import AdmissionCareer from "@/app/components/general/admission_cta";
import Gallery from "@/app/components/general/gallery";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-banner.webp",
  pageTitle: "BRIDGE Courses Training Centre",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Centres of Excellence", href: "/centresofexcellence" },
    {
      label: "BRIDGE Courses Training Centre",
      href: "/centresofexcellence/bosch",
    },
  ],
};

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
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-1.svg",
  },
  {
    id: 2,
    title: "",
    description: "Problem Identification & Troubleshooting",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-2.svg",
  },
  {
    id: 3,
    title: "",
    description: "Industry-Relevant Vocational Training",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-3.svg",
  },
  {
    id: 4,
    title: "",
    description: "Hands-On Technical Training",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-4.svg",
  },
  {
    id: 5,
    title: "",
    description: "Analytical & Problem-Solving Skills",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-5.svg",
  },
  {
    id: 6,
    title: "",
    description: "Workplace & Communication Skills",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-6.svg",
  },
];

const glimpses = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-glimpse1.webp",
    imageAlt: "BRIDGE Training Glimpse",
    title: "Training Session Glimpse",
  },
  {
    id: 2,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-glimpse2.webp",
    imageAlt: "BRIDGE Training Glimpse",
    title: "Skill Development Activity",
  },
  {
    id: 3,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-glimpse3.webp",
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
  useEffect(() => {
    if (typeof window !== "undefined") window.__breadcrumbData = breadcrumbData;
    return () => {
      if (typeof window !== "undefined") delete window.__breadcrumbData;
    };
  }, []);

  return (
    <main className="bg-white">
      <ImageContent
        title="BRIDGE Courses Training Centre"
        subtitle="In collaboration with BOSCH"
        description={aboutCentreDescription}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002989.png"
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
