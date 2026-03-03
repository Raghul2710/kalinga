"use client";

import { useEffect } from "react";
import ImageContent from "@/app/components/ccrc/imagecontent";
import CareerPath from "@/app/components/course/career_path";
import AdmissionCareer from "@/app/components/general/admission_cta";
import Gallery from "@/app/components/general/gallery";
import RaipurVideoSection from "@/app/components/about-raipur/raipurvideo";



const aboutCentreDescription = [
  "BDS Education stands at the forefront of tech education by providing training to students in futuristic skills such as AI, coding, robotics, and drones. Their Teach It Yourself (TIY) model and Knowledge-Through-Projects approach empower educators and inspire students to become innovators and real-world problem solvers.",
  "With a mission to support NEP 2020, Kalinga University has partnered with BDS Education to offer training to students in skills that are in high demand. With this CoE, our students acquire the latest technical knowledge through their industry-relevant curriculum and practical training programs.",
];

const learnCards = [
  {
    id: 1,
    title: "",
    description: "Programming Languages used in robotics & automation tasks",
    imageUrl:
      "https://cdn.kalingauniversity.ac.in/robotics/robotics-1.svg",
  },
  {
    id: 2,
    title: "",
    description: "Robotics Mechanisms & Control",
    imageUrl:
      "https://cdn.kalingauniversity.ac.in/robotics/robotics-2.svg",
  },
  {
    id: 3,
    title: "",
    description: "Drone Mechanisms & Safe Flying Practices",
    imageUrl:
      "https://cdn.kalingauniversity.ac.in/robotics/robotics-3.svg",
  },
  {
    id: 4,
    title: "",
    description: "AI Principles Used in Smart Gadgets",
    imageUrl:
      "https://cdn.kalingauniversity.ac.in/robotics/robotics-4.svg",
  },
  {
    id: 5,
    title: "",
    description: "Project-Based Learning & Experimentation",
    imageUrl:
      "https://cdn.kalingauniversity.ac.in/robotics/robotics-5.svg",
  },
  {
    id: 6,
    title: "",
    description: "Develop Your Own Tech-Based Ideas",
    imageUrl:
      "https://cdn.kalingauniversity.ac.in/robotics/robotics-6.svg",
  },
];

const glimpses = [
  {
    id: 1,
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/robotics/robotics-glimpse1.webp",
    imageAlt: "Robotics & Drones Glimpse - Training Session",
    title: "Training Session Glimpse",
  },
  {
    id: 2,
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/robotics/robotics-glimpse2.webp",
    imageAlt: "Robotics & Drones Glimpse - Project Demonstration",
    title: "Project Demonstration",
  },
  {
    id: 3,
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/robotics/robotics-glimpse3.webp",
    imageAlt: "Robotics & Drones Glimpse - Drone Practice",
    title: "Drone Practice Glimpse",
  },
];

const galleryImages = glimpses.map((g) => ({
  id: g.id,
  image: g.imageSrc,
  alt: g.imageAlt || g.title || "Gallery image",
}));

export default function RoboticsCodingDronesTrainingCentrePage() {


  return (
    <main className="bg-white">
      <ImageContent
        title="Robotics, Coding, & Drones Training Centre"
        subtitle="In collaboration with BDS Education"
        description={aboutCentreDescription}
        imageSrc="https://cdn.kalingauniversity.ac.in/about/accerdation/Group+1000002988.png"
        imageAlt="Robotics, Coding, & Drones Training Centre"
        readmore={false}
      />

      <CareerPath careers={learnCards} title="What You’ll Learn" description="" />

      <Gallery
        images={galleryImages}
        title="Glimpses of Robotics, Coding & Drones Centre Activities"
      />

      <RaipurVideoSection
        videoId="XZ8gVVzu8Ts"
        thumbnail="https://cdn.kalingauniversity.ac.in/coe/bds-thumbnail.jpg"
        title="Empowering Students with AI and Robotics: A Tour of Kalinga University's Centre of Excellence Lab"
        description="" // optional
        alt="Video thumbnail"
        heightClass="h-[380px] sm:h-[420px] md:h-[520px]" // optional, keep default
        className="" // optional wrapper class
      />

      <AdmissionCareer />
      <style jsx global>{`
  .absolute.inset-0 > img {
    object-position: center 70% !important;
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
