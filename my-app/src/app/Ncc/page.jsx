"use client";
import React, { useEffect } from 'react'
import NccIntro from '../components/Ncc/ncc-intro'
import NccBenefits from '../components/Ncc/ncc-benefits'
import NccHeadMessage from '../components/Ncc/ncc-coordinator-message'
import NccVisionMission from '../components/Ncc/ncc-visionmission'
import NccEvents from '../components/Ncc/ncc-events'
import AdmissionCareer from '../components/general/admission_cta';
import UpcomingConferences from '../components/research/upcoming_conference';
import RaipurVideoSection from '../components/about-raipur/raipurvideo';
import Ncctopvideo from '../components/Ncc/ncc-topvideo';
import Nccvideos from '../components/Ncc/ncc-videos';
import Gallerys from '../components/campuslife/campusgallery';
import StudentActivities from "@/app/components/department/student_activities";
import PublicationCard from "../components/general/PublicationCard";
import SectionHeading from "../components/general/SectionHeading";

const page = () => {

  const nccgallery = [
    {
      id: 1,
      src: "https://cdn.kalingauniversity.ac.in/ncc/01.jpg",
    },
    {
      id: 2,
      src: "https://cdn.kalingauniversity.ac.in/ncc/02.jpg",
    },
    {
      id: 3,
      src: "https://cdn.kalingauniversity.ac.in/ncc/03.jpg",
    },
    {
      id: 4,
      src: "https://cdn.kalingauniversity.ac.in/ncc/04.jpg",
    },
    {
      id: 5,
      src: "https://cdn.kalingauniversity.ac.in/ncc/05.jpg",
    },
    {
      id: 6,
      src: "https://cdn.kalingauniversity.ac.in/ncc/06.jpg",
    },
    {
      id: 7,
      src: "https://cdn.kalingauniversity.ac.in/ncc/07.jpg",
    },
    {
      id: 8,
      src: "https://cdn.kalingauniversity.ac.in/ncc/08.jpg",
    },
    {
      id: 9,
      src: "https://cdn.kalingauniversity.ac.in/ncc/09.jpg",
    },
    {
      id: 10,
      src: "https://cdn.kalingauniversity.ac.in/ncc/10.jpg",
    },
    {
      id: 11,
      src: "https://cdn.kalingauniversity.ac.in/ncc/11.jpg",
    }
  ];

  const nccAchievements = [
    {
      id: 1,
      variant: "achievement",
      imageSrc: "https://cdn.kalingauniversity.ac.in/ncc/01.jpg",
      name: "Zaheen E Fatema",
      degree: "BSC BT 2021-24",
      status: "cleared",
      badge: "NCC \"B\"",
      exam: "Certificate Examination",
    },
    {
      id: 2,
      variant: "achievement",
      imageSrc: "https://cdn.kalingauniversity.ac.in/ncc/02.jpg",
      name: "Lt Vibha Chandrakar",
      degree: "NCC Coordinator",
      status: "Special Achievement",
      badge: "NCC \"C\"",
      exam: "Certificate Excellence",
    }
  ];

  return (
    <>
      <style jsx global>{`
      .absolute.inset-0 > img {
        object-position: center 10% !important;
      }
    
      @media (max-width: 768px) {
        .absolute.inset-0 > img {
          object-position: center 5% !important;
        }
      }
    `}</style>

      <NccIntro />
      <RaipurVideoSection
        videoId="u2yYHsX52Y"
        thumbnail="https://cdn.kalingauniversity.ac.in/about/about-banner.webp"
        title=""
        description="" // optional
        alt="Video thumbnail"
        heightClass="h-[380px] sm:h-[420px] md:h-[520px]" // optional, keep default
        className="" // optional wrapper class
      />
      <NccBenefits />
      <Nccvideos />
      <NccVisionMission />
      <NccHeadMessage />

      {/* Reused Publication Card Section */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <SectionHeading
          title="NCC Achievers"
          description=""
          titleClassName="text-center font-stix "
          descriptionClassName="text-center mt-4"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto mt-12">
          {nccAchievements.map((achievement) => (
            <PublicationCard key={achievement.id} data={achievement} className="bg-card-sandal" />
          ))}
        </div>
      </section>
      <StudentActivities
        title="Events & Activities"
        subtitle="Experience Campus Life Beyond Academics"
        categoryId={2}
        fallbackToGlobal={true}
      />
      <Gallerys
        title="Glimpses"
        subtitle=""
        images={nccgallery}
      />
      <AdmissionCareer />
    </>
  )
}

export default page