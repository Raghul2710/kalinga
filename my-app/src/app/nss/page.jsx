"use client";

import { useLayoutEffect } from "react";
import Image from "next/image";

import MainIntro from "@/app/components/about/main_intro";
import VisionMission from "@/app/components/about/vision-mission";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import WeStandOut from "@/app/components/department/we_stand_out";
import AdmissionCareer from "@/app/components/general/admission_cta";

const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-banner.webp",
  pageTitle: "National Service Scheme",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "NSS", href: "/nss" },
  ],
};

const aboutP1 =
  "The National Service Scheme has been promoted by the Sports Ministry & Youth Welfare Department, Government of India, and was initiated with the hope that the students engaged in higher education ought to have a sense of respect towards labour with self-motivated discipline. The motto of NSS is “Not Me, But You”, which means putting the community’s needs before individual needs.";

const aboutP2 =
  "We have an active unit of 100 + NSS Volunteers, including both Boys and Girls. NSS at KU is a platform that proves our commitment to community engagement and social responsibility. It encourages students to actively participate in community service or social service activities. With initiatives like healthcare camps, environmental cleanliness and conservation, and educational projects in underprivileged areas, they develop a sense of responsibility and social awareness.";

const objectives = [
  "To understand the community in which they will work",
  "To identify the problems of that community and make efforts to solve them",
  "To develop a sense of social and civic responsibility",
  "To utilise the volunteer’s knowledge and come up with collective solutions",
  "To develop a capacity to deal with natural disasters or emergencies",
  "To build skills that encourage active people's participation",
  "To practice national integration and social harmony",
  "To develop leadership and fair decision-making skills",
];

const visionMissionData = [
  {
    visionTitle: "Vision",
    missionTitle: "Mission",
    visionText: "To inspire students to become disciplined and socially responsible citizens.",
    missionText:
      "To encourage equality, diversity, and active participation in community-based programs.",
    showImage: true,
  },
];

const benefitsItems = [
  { id: 1, text: "Develop teamwork, leadership skills, and discipline" },
  { id: 2, text: "Improve confidence and build a positive attitude" },
  { id: 3, text: "Participate in community service programs" },
  { id: 4, text: "Participate in state-level and national-level camps" },
  { id: 5, text: "Participate in adventurous camps" },
  { id: 6, text: "Earn an NSS volunteer certificate" },
  { id: 7, text: "Connect with people from different cultures" },
  { id: 8, text: "Get more preference in job interviews" },
];

// ✅ Your 8 icons (mapped to 8 benefits)
const benefitIconMap = {
  1: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-icon-1.svg",
  2: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-icon-2.svg",
  3: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-icon-3.svg",
  4: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-icon-4.svg",
  5: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-icon-5.svg",
  6: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-icon-6.svg",
  7: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-icon-7.svg",
  8: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-icon-8.svg",
};

// ✅ Box items WITH icons (ImageListItem expects item.icon as JSX)
const benefitsBoxItems = benefitsItems.map((b) => ({
  id: b.id,
  title: b.text,
  icon: (
    <Image
      src={benefitIconMap[b.id]}
      alt={`Benefit icon ${b.id}`}
      width={56}
      height={56}
      className="object-contain"
    />
  ),
}));

const objectiveItems = objectives.map((t, idx) => ({
  id: idx + 1,
  text: t,
}));

const learningOutcomeCards = [
  { id: 1, text: "Learn the importance of community service" },
  { id: 2, text: "Become a responsible and socially aware citizen" },
  { id: 3, text: "Identify sustainable solutions to social problems" },
  { id: 4, text: "Learn to plan, organise, and execute social issues" },
  { id: 5, text: "Become confident while making correct decisions" },
];

export default function NSSPage() {
  useLayoutEffect(() => {
    if (typeof window !== "undefined") window.__breadcrumbData = breadcrumbData;
    return () => {
      if (typeof window !== "undefined") delete window.__breadcrumbData;
    };
  }, []);

  return (
    <>
      {/* About NSS */}
      <MainIntro
        title="About NSS At KU"
        description={[aboutP1, aboutP2]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-main-intro.webp"
        imageAlt="NSS at Kalinga University"
        showKnowMore={true}
        knowMoreLabel="Read More"
        initialVisibleParagraphs={1}
      />

      {/* Objectives */}
      <ImageListItem
        title="Objectives"
        items={objectiveItems}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-objectives.webp"
      />

      {/* Vision & Mission */}
      <VisionMission data={visionMissionData} />

      {/* Benefits (✅ now with your 8 custom icons) */}
      <div className="nss-benefits-equal-height">
        <ImageListItem
          title="Benefits Of Joining Our NSS Team"
          imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-benefits.webp"
          boxItems={benefitsBoxItems}
        />
      </div>


      {/* Learning Outcomes */}
      <WeStandOut title="Learning Outcomes" cards={learningOutcomeCards} />

      {/* CTA */}
      <AdmissionCareer />
      <style jsx global>{`
  /* NSS Benefits – force equal height for image & content */
  .nss-benefits-equal-height .grid {
    align-items: stretch !important;
  }

  .nss-benefits-equal-height img {
    height: 100% !important;
    object-fit: cover !important;
  }
`}</style>
    </>
  );
}
