"use client";

import { useLayoutEffect } from "react";
import ImageContent from "@/app/components/ccrc/imagecontent";
import CareerPath from "@/app/components/course/career_path";
import StudentActivities from "@/app/components/department/student_activities";
import AdmissionCareer from "@/app/components/general/admission_cta";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/iiot/iiot-banner.webp",
  pageTitle: "IIoT Training Centre",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Centres of Excellence", href: "/centres-of-excellence" },
    { label: "IIoT Training Centre", href: "/centres-of-excellence/iiot-training-centre" },
  ],
};

const aboutCentreDescription = [
  "Technoviz Automation is one of the leading technology companies that provides industrial automation, software development, and Industrial Internet of Things (IIoT) solutions.",
  "The IIoT Training Centre at Kalinga University, in partnership with Technoviz Automation, gives students a platform to explore next-gen industrial connectivity and automation processes. With this CoE, students understand how smart factories function by exploring their tools, such as industrial sensors, cloud interfaces, automation systems, and live dashboards. Their experts conduct practical training sessions on campus, preparing students to lead in the world of digital transformation.",
];

const learnCards = [
  {
    id: 1,
    title: "",
    description: "Understanding of industrial IoT architecture",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com//iiot/iiot-1.svg",
  },
  {
    id: 2,
    title: "",
    description: "Working of industrial sensors & devices",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com//iiot/iiot-2.svg",
  },
  {
    id: 3,
    title: "",
    description: "Real-time data monitoring & analysis",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com//iiot/iiot-3.svg",
  },
  {
    id: 4,
    title: "",
    description: "Cloud connectivity & data integration",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com//iiot/iiot-4.svg",
  },
  {
    id: 5,
    title: "",
    description: "IIoT communication protocols",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com//iiot/iiot-5.svg",
  },
  {
    id: 6,
    title: "",
    description: "Dashboard & visualization tools",
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/iiot/iiot-6.svg",
  },
];

const glimpses = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/iiot/iiot-glimpse1.webp",
    imageAlt: "IIoT Glimpse",
    title: "Training Session Glimpse",
    buttonText: "Read More",
    date: "August 25 - 2025",
  },
  {
    id: 2,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/iiot/iiot-glimpse2.webp",
    imageAlt: "IIoT Glimpse",
    title: "Live Dashboard Demo",
    buttonText: "Read More",
    date: "September 10 - 2025",
  },
  {
    id: 3,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/iiot/iiot-glimpse3.webp",
    imageAlt: "IIoT Glimpse",
    title: "Industry Expert Interaction",
    buttonText: "Read More",
    date: "October 05 - 2025",
  },
];

export default function IIoTTrainingCentrePage() {
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
            IIoT Training Centre
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            In collaboration with Technoviz Automation
          </p>
        </div>
      </section>

      <ImageContent
        title="IIoT Training Centre"
        subtitle="In collaboration with Technoviz Automation"
        description={aboutCentreDescription}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/coe/coe-iiot.webp"
        imageAlt="IIoT Training Centre"
        readmore={false}
      />

      <CareerPath careers={learnCards} title="What You’ll Learn" description="" />

      {/* <StudentActivities title="Glimpses" subtitle="" activities={glimpses} /> */}

      <AdmissionCareer />
    </main>
  );
}
