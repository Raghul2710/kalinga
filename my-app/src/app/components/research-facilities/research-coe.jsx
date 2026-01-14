"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import CenterOfExcellence from "../about/center_of_excellence";

export default function ResearchCE() {
  const router = useRouter();

  // ✅ Content definitions
  const centres = useMemo(
    () => [
      {
        id: 1,
        name: "Electric Vehicles Training Centre",
        title: "Students learn the A-Z manufacturing and functioning of two-wheeler and three-wheeler electric vehicles from industry experts.",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research-facilities/researchfacilities-godawari.jpg",
        href: "/centresofexcellence/godawari",
      },
      {
        id: 2,
        name: "IIoT Training Centre",
        title: "The IIoT training centre provides students with a practical learning experience in IoT applications and big data analysis.",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research-facilities/researchfacilities-technoviz.jpg",
        href: "/centresofexcellence/iiot",
      },
      {
        id: 3,
        name: "Robotics, Coding, & Drones Training Centre",
        title: "Students master futuristic skills like coding, robotics, AI, and drone systems.",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research-facilities/researchfacilities-bds.jpg",
        href: "/centresofexcellence/robotics",
      },
      {
        id: 4,
        name: "MSME Training Centre",
        title: "It trains students to develop business strategies for small-scale and large-scale enterprises.",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research-facilities/researchfacilities-iamsmeofindia.jpg",
        href: "/centresofexcellence/msme",
      },
      {
        id: 5,
        name: "BRIDGE Courses Training Centre",
        title: "We have signed an MoU with Bosch to offer BRIDGE Courses for school dropout students (18-25 years) in their academic campus.",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research-facilities/researchfacilities-bosch.jpg",
        href: "/centresofexcellence/bosch",
      },
      {
        id: 6,
        name: "AI-ML Courses Training Centre",
        title: "We have partnered with a leading technology company that offers a specialised course on B.Tech CS in AI-ML.",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research-facilities/researchfacilities-IBM.jpg",
        href: "/centresofexcellence/ai-ml",
      },
      {
        id: 7,
        name: "Automobile Training Centre",
        title: "We have signed an MoU with an ISO-certified company that provides training in the repair & maintenance of 2 & 3-wheelers.",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research-facilities/researchfacilities-justauto.jpg",
        href: "/centresofexcellence/automobile",
      },
    ],
    []
  );

  // ✅ Click handler (bubble phase is enough since buttons stop propagation)
  const handleCardClick = (href) => {
    if (href) router.push(href);
  };

  return (
    <div className="research-ce-wrapper">
      <style jsx global>{`
        /* Whole slide cursor */
        .centres-swiper .swiper-slide {
          cursor: pointer;
        }
      `}</style>

      <CenterOfExcellence
        title="Introducing Our Centres of Excellence (CoE)"
        description="To align academic learning with industrial knowledge, we have partnered with seven leading companies that offer skill-based training to students in various high-demanding sectors like electric vehicles, drone technology, AI, cybersecurity, automobiles, and many more. We’re a leading research university, empowering students to go from textbooks to real-world innovation and become ready to stand out in the competitive job market."
        centres={centres.map(c => ({
          ...c,
          // Custom onClick per card
          onClick: () => handleCardClick(c.href)
        }))}
        showReadMore={true}
      />
    </div>
  );
}
