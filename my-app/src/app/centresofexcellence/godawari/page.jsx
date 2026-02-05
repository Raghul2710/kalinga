"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ImageContent from "@/app/components/ccrc/imagecontent";
import CareerPath from "@/app/components/course/career_path";
import AdmissionCareer from "@/app/components/general/admission_cta";
import Gallery from "@/app/components/general/gallery";

const aboutCentreDescription = [
  "Eblu by Godawari Electric Motors Pvt. Ltd. is one of the leading electric vehicle brands, offering a wide range of EVs, including E-Auto, E-Cycle, E-Scooter, and E-Cargo vehicles. They design these vehicles from scratch by focusing on consumer needs such as safety, comfort, and performance. ",
  "With this CoE, students get the opportunity to learn one of the most futuristic skills, the A-Z manufacturing and functioning of two-wheeler and three-wheeler electric vehicles from their industry experts through practical training sessions. This helps them build essential EV knowledge and stand out in the industry.",
];

const learnCards = [
  {
    id: 1,
    title: "",
    description: "Complete Electric Vehicle Architecture",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/godawari/godawari-1.svg",
  },
  {
    id: 2,
    title: "",
    description: "Battery Technology & Management Systems",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/godawari/godawari-2.svg",
  },
  {
    id: 3,
    title: "",
    description: "Motor & Controller Operations",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/godawari/godawari-3.svg",
  },
  {
    id: 4,
    title: "",
    description: "EV Diagnostics & Troubleshooting",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/godawari/godawari-4.svg",
  },
  {
    id: 5,
    title: "",
    description: "Assembly & Disassembly of EV Components",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/godawari/godawari-5.svg",
  },
  {
    id: 6,
    title: "",
    description: "Safety, Maintenance & Repair Techniques",
    imageUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/godawari/godawari-6.svg",
  },
];

const glimpses = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/godawari/godawari-glimpse1.webp",
    imageAlt: "EV Training Glimpse",
    title: "Practical Training Session",
  },
  {
    id: 2,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/godawari/godawari-glimpse2.webp",
    imageAlt: "EV Training Glimpse",
    title: "Hands-on Diagnostics Glimpse",
  },
  {
    id: 3,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/godawari/godawari-glimpse3.webp",
    imageAlt: "EV Training Glimpse",
    title: "Expert-led Workshop",
  },
];

const galleryImages = glimpses.map((g) => ({
  id: g.id,
  image: g.imageSrc,
  alt: g.imageAlt || g.title || "Gallery image",
}));

export default function ElectricVehiclesTrainingCentrePage() {
  const pathname = usePathname();

  useEffect(() => {
    const breadcrumbData = {
      pathname: pathname,
      heroImage:
        "https://kalinga-university.s3.ap-south-1.amazonaws.com/godawari/godawari-banner.webp",
      pageTitle: "Electric Vehicles Training",
      customBreadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Centres of Excellence", href: "/centresofexcellence" },
        {
          label: "Electric Vehicles Training Centre",
          href: "/centresofexcellence/godawari",
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
        title="Electric Vehicles Training Centre"
        subtitle="In collaboration with Godawari Electric Motors Pvt. Ltd. (Eblu)"
        description={aboutCentreDescription}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/godawari.png"
        imageAlt="Electric Vehicles Training Centre"
        readmore={false}
      />

      <CareerPath careers={learnCards} title="What You’ll Learn" description="" />

      <Gallery
        images={galleryImages}
        title="Glimpses of Electric Vehicles Training Centre"
      />

      <AdmissionCareer />
    </main>
  );
}
