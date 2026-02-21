"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import CareerPath from "@/app/components/course/career_path";
import MainIntro from "@/app/components/about/main_intro";
import VisionMission from "@/app/components/about/vision-mission";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import Gallery from "@/app/components/general/gallery";
import Gallerys from '../components/campuslife/campusgallery';
import MentorIntro from "@/app/components/department/dept_head_intro";
import WeStandOut from "@/app/components/department/we_stand_out";
import AdmissionCareer from "@/app/components/general/admission_cta";
import NewsEvents from "@/app/components/home/news_and_events";
import StudentActivities from "@/app/components/department/student_activities";
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
    visionText:
      "To inspire students to become disciplined and socially responsible citizens who make a real difference in society with unity.",
    missionText:
      "To encourage equality, diversity, and active participation in community-based programs and develop values like empathy, transparency, freedom, honesty, and respect. ",
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

const benefitIconMap = {
  1: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-icon-1.svg",
  2: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-icon-2.svg",
  3: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-icon-3.svg",
  4: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-icon-new.svg",
  5: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-icon-5.svg",
  6: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-icon-6.svg",
  7: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-icon-7.svg",
  8: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-icon-8.svg",
};

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

const MentorIntroProps = [
  {
    id: 1,
    title: "Dr Harsha Sharma",
    subtitle: "A Message From the Coordinator",
    department: "NSS Coordinator",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/NSS+Coordinator.png",
    imageAlt: "Harsha Sharma",

    quote:
      "Transforming students into mindful citizens and changemakers.",

    message: [
      "At Kalinga University, education goes beyond textbook knowledge as it's a place where students learn to step out, engage with people of different societies and communities, and understand their challenges and discover the power of giving back. Through our outreach programs like cleanliness campaigns, teaching underprivileged children, digital literacy, awareness sessions, tree plantation, road safety, and more, students learn to become responsible and mindful citizens. With every initiative, they learn to bring meaningful change through their collective efforts. By participating in NSS, students learn to solve challenging problems that guide them in life beyond University.",
    ],
  },
];

const objectiveItems = objectives.map((t, idx) => ({
  id: idx + 1,
  text: t,
}));

const learningOutcomeCards = [
  { id: 1, description: "Learn the importance of community service", imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/communities.svg" },
  { id: 2, description: "Become a responsible and socially aware citizen", imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/customer-care.svg" },
  { id: 3, description: "Identify sustainable solutions to social problems", imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/relationship.svg" },
  { id: 4, description: "Learn to plan, organise, and execute social issues", imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/social-media-management-2.svg" },
  { id: 5, description: "Become confident while making correct decisions", imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/social-services.svg" },
];

export default function NSSPage() {
  const pathname = usePathname();



  return (
    <>
      <MainIntro
        subtitle="National Service Scheme"
        title="About NSS At KU"
        description={[aboutP1, aboutP2]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nns-logo.webp"
        imageAlt="NSS at Kalinga University"
        showKnowMore={true}
        knowMoreLabel="Read More"
        initialVisibleParagraphs={1}
      />

      <ImageListItem
        title="Objectives"
        items={objectiveItems}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/nss/nss-benefits-new.webp"
        imageAlt="NSS Objectives"
        description=""
      />



      <div className="-mt-16 md:-mt-20">
        <MentorIntro items={MentorIntroProps} />
      </div>
      <VisionMission data={visionMissionData} />
      <div className="nss-benefits-equal-height">
        <ImageListItem
          title="Benefits Of Joining Our NSS Team"
          imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/students-3.jpg"
          imageAlt="NSS Benefits"
          boxItems={benefitsBoxItems}
          description=""
          reverseLayout={true}
        />
      </div>

      <CareerPath careers={learningOutcomeCards} title="Learning Outcomes" description="" />

      {/* <Gallery images={[]} title="NSS Activities Gallery" /> */}
      <StudentActivities
        title="Events & Activities"
        subtitle="Experience Campus Life Beyond Academics"
        categoryId={2}
        fallbackToGlobal={true}
      />
      <Gallerys />
      <AdmissionCareer />

      {/* ✅ FIXED + WORKING GLOBAL CSS */}
      <style jsx global>{`
        /* ---------- NSS benefits equal height ---------- */
        .nss-benefits-equal-height .grid {
          align-items: stretch !important;
        }

        /* IMPORTANT: limit to the left image inside ImageListItem only */
        .nss-benefits-equal-height img {
          height: 100% !important;
          object-fit: cover !important;
        }

        /* ---------- Breadcrumb / Hero banner alignment ---------- */
        /*
          Your breadcrumb hero uses a wrapper like: .absolute.inset-0 > img
          Make sure the dot is present and the block is properly closed.
        */
        .absolute.inset-0 > img {
          object-position: center 10% !important;
        }

        @media (max-width: 500px) {
          .absolute.inset-0 > img {
            object-position: center 10% !important;
          }
        }
      `}</style>
    </>
  );
}
