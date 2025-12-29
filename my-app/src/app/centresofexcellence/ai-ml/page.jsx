"use client";

import { useLayoutEffect } from "react";
import ImageContent from "@/app/components/ccrc/imagecontent";
import CareerPath from "@/app/components/course/career_path";
import StudentActivities from "@/app/components/department/student_activities";
import AdmissionCareer from "@/app/components/general/admission_cta";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/aiml/aiml-banner.webp",
  pageTitle: "AI & ML Courses Training Centre",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Centres of Excellence", href: "/centres-of-excellence" },
    { label: "AI & ML Courses Training Centre", href: "/centres-of-excellence/ai-ml" },
  ],
};

const aboutCentreDescription = [
  "IBM is a global leader in technology and innovation, and we have partnered with the IBM Innovation Centre for Education to offer a specialised course on B.Tech CS in AI-ML. Their industry-relevant curriculum empowers students to excel in the booming tech industry and get jobs in high-demand roles.",
  "With this CoE, students of this program get hands-on learning experience through real-world projects, case studies and internship programs. They also get the opportunity to interact with IBM subject matter experts in expert-led sessions held at Kalinga University.",
];

const learnCards = [
  {
    id: 1,
    title: "",
    description: "Programming languages & tools for AI & ML",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/aiml/ai-1.svg",
  },
  {
    id: 2,
    title: "",
    description: "Deep understanding of Artificial Intelligence & Machine Learning",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/aiml/ai-2.svg",
  },
  {
    id: 3,
    title: "",
    description: "Algorithm & model development",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/aiml/ai-3.svg",
  },
  {
    id: 4,
    title: "",
    description: "Management of large data sets",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/aiml/ai-4.svg",
  },
  {
    id: 5,
    title: "",
    description: "Deep learning & neural networks",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/aiml/ai-5.svg",
  },
  {
    id: 6,
    title: "",
    description: "Designing intelligent systems & software",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/aiml/ai-1.svg",
  },
];

const glimpses = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/aiml/aiml-glimpse1.webp",
    imageAlt: "AI & ML Glimpse",
    title: "Lab Session Glimpse",
    buttonText: "Read More",
    date: "August 25 - 2025",
  },
  {
    id: 2,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/aiml/aiml-glimpse2.webp",
    imageAlt: "AI & ML Glimpse",
    title: "Project Showcase",
    buttonText: "Read More",
    date: "September 10 - 2025",
  },
  {
    id: 3,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/aiml/aiml-glimpse3.webp",
    imageAlt: "AI & ML Glimpse",
    title: "Expert-led Workshop",
    buttonText: "Read More",
    date: "October 05 - 2025",
  },
];

export default function AIMLCentrePage() {
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
            AI &amp; ML Courses Training Centre
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            In collaboration with the IBM Innovation Centre for Education
          </p>
        </div>
      </section>

      <ImageContent
        title="AI & ML Courses Training Centre"
        subtitle="In collaboration with the IBM Innovation Centre for Education"
        description={aboutCentreDescription}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/coe/coe-ibm.webp"
        imageAlt="Centre Banner"
        readmore={false}
      />

      <CareerPath careers={learnCards} title="What You’ll Learn" description="" />

      {/* <StudentActivities title="Glimpses" subtitle="" activities={glimpses} /> */}

      <AdmissionCareer />
    </>
  );
}
