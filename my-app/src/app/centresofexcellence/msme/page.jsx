"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ImageContent from "@/app/components/ccrc/imagecontent";
import AdmissionCareer from "@/app/components/general/admission_cta";
import CareerPath from "@/app/components/course/career_path";
import Gallery from "@/app/components/general/gallery";
import RaipurVideoSection from "@/app/components/about-raipur/raipurvideo";

const learnCards = [
  {
    id: 1,
    title: "",
    description: "Understanding of MSME Business Models & Industrial Practices",
    imageUrl:
      "https://cdn.kalingauniversity.ac.in/msme/msme-icon-new.svg",
  },
  {
    id: 2,
    title: "",
    description: "Real-Time Methods Used by Successful MSMEs",
    imageUrl:
      "https://cdn.kalingauniversity.ac.in/msme/msme-2.svg",
  },
  {
    id: 3,
    title: "",
    description: "Effective Strategy Planning & Decision-Making Skills",
    imageUrl:
      "https://cdn.kalingauniversity.ac.in/msme/msme-3.svg",
  },
  {
    id: 4,
    title: "",
    description: "Market Research & Opportunity Identification",
    imageUrl:
      "https://cdn.kalingauniversity.ac.in/msme/msme-4.svg",
  },
  {
    id: 5,
    title: "",
    description: "Financial Planning & Risk Management",
    imageUrl:
      "https://cdn.kalingauniversity.ac.in/msme/msme-5.svg",
  },
  {
    id: 6,
    title: "",
    description: "Communication & Negotiation Skills",
    imageUrl:
      "https://cdn.kalingauniversity.ac.in/msme/msme-6.svg",
  },
];

const glimpsesImageItems = [
  {
    id: 1,
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/msme/msme-glimpse1.webp",
    imageAlt: "MSME Training Centre Glimpse 1",
    title: "MSME Centre Glimpse",
  },
  {
    id: 2,
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/msme/msme-glimpse2.webp",
    imageAlt: "MSME Training Centre Glimpse 2",
    title: "MSME Centre Glimpse",
  },
  {
    id: 3,
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/msme/msme-glimpse3.webp",
    imageAlt: "MSME Training Centre Glimpse 3",
    title: "MSME Centre Glimpse",
  },
];

const galleryImages = glimpsesImageItems.map((g) => ({
  id: g.id,
  image: g.imageSrc,
  alt: g.imageAlt || g.title || "Gallery image",
}));

export default function MSMETrainingCentrePage() {
  const pathname = usePathname();



  return (
    <main className="bg-white">
      <ImageContent
        imageSrc="https://cdn.kalingauniversity.ac.in/about/smeindia.webp"
        title="Micro, Small, and Medium Enterprises (MSME) Training Centre"
        subtitle="In collaboration with IamSMEofIndia"
        description={[
          "We have partnered with India’s first and only “Gold” Category accredited MSME association that provides a wide range of business solutions to MSMEs across India. Their Tried, Tested, Credible, Affordable, and Ready-made solutions help companies save their time, energy, and cost.",
          "Kalinga University has partnered with IamSMEofIndia to train students in developing effective business strategies through their workshops and seminars, in which they provide them with the latest industrial knowledge and develop an entrepreneurial spirit among them. Their industry experts prepare students to make informed business decisions and to understand how companies can overcome their hurdles in the competitive business world.",
        ]}
        readmore={false}
      />

      <CareerPath careers={learnCards} title="What You’ll Learn" description="" />

      <Gallery images={galleryImages} title="Glimpses of MSME Centre Activities" />

      <RaipurVideoSection
        videoId="lqO-cvAVMvc"
        thumbnail="https://cdn.kalingauniversity.ac.in/coe/msme-thumbnail.jpg"
        title="I am SME of India Chairman Rajiv Chawla on Kalinga University's MSME Session & Centre of Excellence"
        description="" // optional
        alt="Video thumbnail"
        heightClass="h-[380px] sm:h-[420px] md:h-[520px]" // optional, keep default
        className="" // optional wrapper class
      />

      <AdmissionCareer />
      <style jsx global>{`
  .absolute.inset-0 > img {
    object-position: center 20% !important;
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
