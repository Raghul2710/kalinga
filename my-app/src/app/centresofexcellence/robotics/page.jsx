"use client";

import { useLayoutEffect } from "react";
import ImageContent from "@/app/components/ccrc/imagecontent";
import CareerPath from "@/app/components/course/career_path";
import StudentActivities from "@/app/components/department/student_activities";
import AdmissionCareer from "@/app/components/general/admission_cta";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/robotics/robotics-banner.webp",
  pageTitle: "Robotics, Coding, & Drones Training Centre",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Centres of Excellence", href: "/centres-of-excellence" },
    {
      label: "Robotics, Coding, & Drones Training Centre",
      href: "/centres-of-excellence/robotics-coding-drones-training-centre",
    },
  ],
};

const aboutCentreDescription = [
  "BDS Education stands at the forefront of tech education by providing training to students in futuristic skills such as AI, coding, robotics, and drones. Their Teach It Yourself (TIY) model and Knowledge-Through-Projects approach empower educators and inspire students to become innovators and real-world problem solvers.",
  "With a mission to support NEP 2020, Kalinga University has partnered with BDS Education to offer training to students in skills that are in high demand. With this CoE, our students acquire the latest technical knowledge through their industry-relevant curriculum and practical training programs.",
];

const learnCards = [
  {
    id: 1,
    title: "",
    description: "Programming languages used in robotics & automation tasks",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/robotics/robotics-1.svg",
  },
  {
    id: 2,
    title: "",
    description: "Robotics mechanisms & control systems",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/robotics/robotics-2.svg",
  },
  {
    id: 3,
    title: "",
    description: "Drone mechanisms & safe flying practices",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/robotics/robotics-3.svg",
  },
  {
    id: 4,
    title: "",
    description: "Artificial Intelligence principles used in smart gadgets",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/robotics/robotics-4.svg",
  },
  {
    id: 5,
    title: "",
    description: "Project-based learning & experimentation",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/robotics/robotics-5.svg",
  },
  {
    id: 6,
    title: "",
    description: "Develop and prototype your own tech-based ideas",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/robotics/robotics-6.svg",
  },
];

const glimpses = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/robotics/robotics-glimpse1.webp",
    imageAlt: "Robotics & Drones Glimpse",
    title: "Training Session Glimpse",
    buttonText: "Read More",
    date: "August 25 - 2025",
  },
  {
    id: 2,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/robotics/robotics-glimpse2.webp",
    imageAlt: "Robotics & Drones Glimpse",
    title: "Project Demonstration",
    buttonText: "Read More",
    date: "September 10 - 2025",
  },
  {
    id: 3,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/robotics/robotics-glimpse3.webp",
    imageAlt: "Robotics & Drones Glimpse",
    title: "Drone Practice Glimpse",
    buttonText: "Read More",
    date: "October 05 - 2025",
  },
];

export default function RoboticsCodingDronesTrainingCentrePage() {
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
            Robotics, Coding, &amp; Drones Training Centre
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            In collaboration with BDS Education
          </p>
        </div>
      </section>

      <ImageContent
        title="Robotics, Coding, & Drones Training Centre"
        subtitle="In collaboration with BDS Education"
        description={aboutCentreDescription}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/coe/coe-robotics.webp"
        imageAlt="Robotics, Coding, & Drones Training Centre"
        readmore={false}
      />

      <CareerPath careers={learnCards} title="What You’ll Learn" description="" />

      {/* <StudentActivities title="Glimpses" subtitle="" activities={glimpses} /> */}

      <AdmissionCareer />
    </main>
  );
}
