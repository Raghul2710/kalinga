"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ImageContent from "@/app/components/ccrc/imagecontent";
import CareerPath from "@/app/components/course/career_path";
import AdmissionCareer from "@/app/components/general/admission_cta";
import Gallery from "@/app/components/general/gallery";

const aboutCentreDescription = [
  "Technoviz Automation is one of the leading technology companies that provides industrial automation, software development, and Industrial Internet of Things (IIoT) solutions.",
  "The IIoT Training Centre at Kalinga University, in partnership with Technoviz Automation, gives students a platform to explore next-gen industrial connectivity and automation processes. With this CoE, students understand how smart factories function by exploring their tools, such as industrial sensors, cloud interfaces, automation systems, and live dashboards. Their experts conduct practical training sessions on campus, preparing students to lead in the world of digital transformation.",
];

const learnCards = [
  {
    id: 1,
    title: "",
    description: "Understanding of Industrial IoT Architecture",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/iiot/iiot-1.svg",
  },
  {
    id: 2,
    title: "",
    description: "Working of Industrial Sensors & Devices",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/iiot/iiot-2.svg",
  },
  {
    id: 3,
    title: "",
    description: "Real-Time Data Monitoring & Analysis",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/iiot/iiot-3.svg",
  },
  {
    id: 4,
    title: "",
    description: "Cloud Connectivity & Data Integration",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/iiot/iiot-4.svg",
  },
  {
    id: 5,
    title: "",
    description: "IIoT Communication Protocols",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/iiot/iiot-5.svg",
  },
  {
    id: 6,
    title: "",
    description: "Dashboard & Visualization Tools",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/iiot/iiot-6.svg",
  },
];

const glimpses = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/iiot/iiot-glimpse1.webp",
    imageAlt: "IIoT Training Session",
    title: "Training Session Glimpse",
  },
  {
    id: 2,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/iiot/iiot-glimpse2.webp",
    imageAlt: "IIoT Live Dashboard",
    title: "Live Dashboard Demo",
  },
  {
    id: 3,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/iiot/iiot-glimpse3.webp",
    imageAlt: "IIoT Industry Interaction",
    title: "Industry Expert Interaction",
  },
];

const galleryImages = glimpses.map((g) => ({
  id: g.id,
  image: g.imageSrc,
  alt: g.imageAlt || g.title || "Gallery image",
}));

export default function IIoTTrainingCentrePage() {
  const pathname = usePathname();

  useEffect(() => {
    const breadcrumbData = {
      pathname: pathname,
      heroImage:
        "https://kalinga-university.s3.ap-south-1.amazonaws.com/iiot/iiot-banner.webp",
      pageTitle: "IIoT Training",
      customBreadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Centres of Excellence", href: "/centresofexcellence" },
        {
          label: "IIOT Training Centre",
          href: "/centresofexcellence/iiot",
        },
      ],
    };

    if (typeof window !== "undefined") {
      window.__breadcrumbData = breadcrumbData;
    }

    return () => {
      if (typeof window !== "undefined" && window.__breadcrumbData?.pathname === pathname) {
        delete window.__breadcrumbData;
      }
    };
  }, [pathname]);

  return (
    <main className="bg-white">
      <ImageContent
        title="Industrial Internet of Things (IIoT) Training Centre"
        subtitle="In collaboration with Technoviz Automation"
        description={aboutCentreDescription}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002977.png"
        imageAlt="IIoT Training Centre"
        readmore={false}
      />

      <CareerPath careers={learnCards} title="What You’ll Learn" description="" />

      <Gallery
        images={galleryImages}
        title="Glimpses of IIoT Training Centre Activities"
      />

      <AdmissionCareer />
      <style jsx global>{`
  .absolute.inset-0 > img {
    object-position: center 30% !important;
  }

  @media (max-width: 768px) {
    .absolute.inset-0 > img {
      object-position: center 5% !important;
    }
  }
`}</style>
    </main>
  );
}
