"use client";

import { useLayoutEffect } from "react";
import ImageContent from "@/app/components/ccrc/imagecontent";
import CareerPath from "@/app/components/course/career_path";
import StudentActivities from "@/app/components/department/student_activities";
import AdmissionCareer from "@/app/components/general/admission_cta";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/automobile/automobile-banner.webp",
  pageTitle: "Automobile Training Centre",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Centres of Excellence", href: "/centres-of-excellence" },
    {
      label: "Automobile Training Centre",
      href: "/centres-of-excellence/automobile-training-centre",
    },
  ],
};

const aboutText = [
  "JustAuto Solutions Pvt. Ltd. is an ISO-certified company that specialises in automotive training and the supply of tools and equipment. Kalinga University has partnered with JustAuto Solutions to provide industry-focused training in the repair and maintenance of 2 & 3-wheelers.",
  "Through hands-on practice, expert-led sessions, and certification-based learning, students gain practical technical exposure and become employable in the fast-growing automobile industry.",
];

const learnCards = [
  {
    id: 1,
    title: "",
    description: "Fundamentals of 2 & 3-Wheeler systems",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/automobile/auto-1.svg",
  },
  {
    id: 2,
    title: "",
    description: "Diagnostic skills using modern tools",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/automobile/auto-2.svg",
  },
  {
    id: 3,
    title: "",
    description: "Engine service & maintenance",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/automobile/auto-3.svg",
  },
  {
    id: 4,
    title: "",
    description: "Repair procedures for 2 & 3 wheelers",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/automobile/auto-4.svg",
  },
  {
    id: 5,
    title: "",
    description: "Preventive & predictive maintenance techniques",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/automobile/auto-5.svg",
  },
  {
    id: 6,
    title: "",
    description: "Exposure to emerging technologies in mobility",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/automobile/auto-6.svg",
  },
];

const glimpses = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/automobile/automobile-glimpse1.webp",
    imageAlt: "Automobile Training Glimpse",
    title: "Workshop Session / Training Glimpse",
    buttonText: "Read More",
    date: "August 25 - 2025",
  },
  {
    id: 2,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/automobile/automobile-glimpse2.webp",
    imageAlt: "Automobile Training Glimpse",
    title: "Industry Expert Talk",
    buttonText: "Read More",
    date: "September 10 - 2025",
  },
  {
    id: 3,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/automobile/automobile-glimpse3.webp",
    imageAlt: "Automobile Training Glimpse",
    title: "Hands-on Diagnostic Practice",
    buttonText: "Read More",
    date: "October 05 - 2025",
  },
];

export default function AutomobileTrainingCentrePage() {
  useLayoutEffect(() => {
    if (typeof window !== "undefined") window.__breadcrumbData = breadcrumbData;
    return () => {
      if (typeof window !== "undefined") delete window.__breadcrumbData;
    };
  }, []);

  return (
    <>
      <section className="pt-10 pb-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-semibold text-[var(--title-color)]">
            Automobile Training Centre
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            In collaboration with JustAuto Solutions
          </p>
        </div>
      </section>

      <ImageContent
        title="Automobile Training Centre"
        subtitle="In collaboration with JustAuto Solutions"
        description={aboutText}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/coe/coe-automobile.webp"
        imageAlt="Automobile Training Centre"
        readmore={false}
      />

      <CareerPath careers={learnCards} title="What You’ll Learn Here" description="" />

      {/* <StudentActivities title="Glimpses" subtitle="" activities={glimpses} /> */}

      <AdmissionCareer />
    </>
  );
}
