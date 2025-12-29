"use client";

import { useLayoutEffect } from "react";
import ImageContent from "@/app/components/ccrc/imagecontent";
import CareerPath from "@/app/components/course/career_path";
import StudentActivities from "@/app/components/department/student_activities";
import AdmissionCareer from "@/app/components/general/admission_cta";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-banner.webp",
  pageTitle: "BRIDGE Courses Training Centre",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Centres of Excellence", href: "/centres-of-excellence" },
    { label: "BRIDGE Courses Training Centre", href: "/centres-of-excellence/bridge" },
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
    description: "Automotive & manufacturing fundamentals",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-1.svg",
  },
  {
    id: 2,
    title: "",
    description: "Problem identification & troubleshooting",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-2.svg",
  },
  {
    id: 3,
    title: "",
    description: "Industry-relevant vocational training",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-3.svg",
  },
  {
    id: 4,
    title: "",
    description: "Hands-on technical training",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-4.svg",
  },
  {
    id: 5,
    title: "",
    description: "Analytical & problem-solving skills",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-5.svg",
  },
  {
    id: 6,
    title: "",
    description: "Workplace & communication skills",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-6.svg",
  },
];

const glimpses = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-glimpse1.webp",
    imageAlt: "BRIDGE Training Glimpse",
    title: "Training Session Glimpse",
    buttonText: "Read More",
    date: "August 25 - 2025",
  },
  {
    id: 2,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-glimpse2.webp",
    imageAlt: "BRIDGE Training Glimpse",
    title: "Skill Development Activity",
    buttonText: "Read More",
    date: "September 10 - 2025",
  },
  {
    id: 3,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-glimpse3.webp",
    imageAlt: "BRIDGE Training Glimpse",
    title: "Practical Lab Glimpse",
    buttonText: "Read More",
    date: "October 05 - 2025",
  },
];

export default function BridgeCentrePage() {
  useLayoutEffect(() => {
    if (typeof window !== "undefined") window.__breadcrumbData = breadcrumbData;
    return () => {
      if (typeof window !== "undefined") delete window.__breadcrumbData;
    };
  }, []);

  return (
    <main className="bg-white">
      <section className="pt-10 pb-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-semibold text-[var(--title-color)]">
            BRIDGE Courses Training Centre
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            In collaboration with BOSCH
          </p>
        </div>
      </section>

      <ImageContent
        title="BRIDGE Courses Training Centre"
        subtitle="In collaboration with BOSCH"
        description={aboutCentreDescription}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/coe/coe-bosch.webp"
        imageAlt="BRIDGE Centre Banner"
        readmore={false}
      />

      <CareerPath careers={learnCards} title="What You’ll Learn" description="" />

      {/* <StudentActivities title="Glimpses" subtitle="" activities={glimpses} /> */}

      <AdmissionCareer />
    </main>
  );
}
