'use client';

import ImageContent from "@/app/components/ccrc/imagecontent";
import VisionMission from "@/app/components/about/vision-mission";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import Testimonials from "@/app/components/home/Testimonials";
import QuickLinks from "@/app/components/general/quick_links";
import AdmissionSteps from "@/app/components/admissions/admission-steps";
import OrganogramOfKalinga from "@/app/components/about/organogram_of_kalinga";
import CenterOfExcellence from "@/app/components/about/center_of_excellence";
import StudentActivities from "@/app/components/department/student_activities";
import AdmissionCareer from "@/app/components/general/admission_cta";
import MainIntro from "@/app/components/about/main_intro";
import FAQ from "@/app/components/general/faq";
import { useLayoutEffect } from "react";


// Just define your breadcrumb data as a const - Breadcrumb will automatically use it
// No imports needed for breadcrumb! Just define the const and it works.
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  pageTitle: "Corporate a Sociala Responsibility",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'CSaR', href: '/csr' }
  ]
};

export default function KIFPage({
    visionMissionData: visionMissionDataProp,
    boxItems: boxItemsProp,
    
    centres: centresProp,
} = {}) {
    const visionMissionData = visionMissionDataProp ?? [{
        visionTitle: "Core Values",
        missionTitle: "Mission",
        visionText: [
            "Holistic Development",
            "lluminating the World with Light of Knowledge ",
            "Third vision point",
            "Global Diversity",
            "Multicultural Environment ",  
            "Team Spirit & Bonding",
        ],
        missionText: 
            "Bhagwan Shri Bala Sai Educational and Charitable Society aims to be an outstanding institution for Talent Development and Knowledge Creation for a vibrant and inclusive society.",
        imageAlt: "Vision and Mission",
        className: "",
        showImage: false,
    }];

    const Items = [
        {
          id: 1,
          text: "Improved performance and output"
        },
        {
          id: 2,
          text: "Better decision-making"
        },
        {
          id: 3,
          text: "Enhanced employee engagement rate"
        },
        {
          id: 4,
          text: "Increased competitiveness"
        },
        {
          id: 5,
          text: "Improved leadership and team collaboration"
        },
        {
          id: 6,
          text: "Improved client/customer satisfaction"
        },
        {
          id: 7,
          text: "Stronger work culture and long-term profitability"
        }
      ]

    const centres = centresProp ?? [
        {
            id: 1,
            name: "Startup Incubation Lab",
            title: "Rapid prototyping & mentoring",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/godawari.png",
        },
        {
            id: 2,
            name: "Innovation Garage",
            title: "Hands-on builds with tooling support",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/godawari.png",
        },
        {
            id: 3,
            name: "Pitch Studio",
            title: "Investor-ready decks and mock pitches",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/godawari.png",
        },
        {
            id: 4,
            name: "Pitch Studio",
            title: "Investor-ready decks and mock pitches",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/godawari.png",
        },
    ];
    const activities = [
        {
          id: 1,
          imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
          imageAlt: "Student Activities",
          title: "Lorem ipsum dolor sit amet, consectetur",
          buttonText: "Read More",
          date: "August 25 - 2025",
        },
        {
          id: 2,
          imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
          imageAlt: "Student Activities",
          title: "Lorem ipsum dolor sit amet, consectetur",
            buttonText: "Read More",
          date: "August 25 - 2025",
        },
        {
          id: 3,
          imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
          imageAlt: "Student Activities",
          title: "Lorem ipsum dolor sit amet, consectetur",
           buttonText: "Read More",
          date: "August 25 - 2025",
        },
    ];
    const FAQItems = [
        {
          id: 1,
          question: "What is the admission process?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
          id: 2,
          question: "What are the eligibility criteria?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
          id: 3,
          question: "What documents are required?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
          id: 4,
          question: "How can I apply for scholarships?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
          id: 5,
          question: "What is the fee structure?",
          answer: " amlLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }
      ]

  // Set breadcrumb data when component mounts, clear when it unmounts
  // Use useLayoutEffect to ensure it's set before Breadcrumb component checks
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
    // Cleanup: clear breadcrumb data when component unmounts
    return () => {
      if (typeof window !== 'undefined') {
        delete window.__breadcrumbData;
      }
    };
  }, []);
      
  return (
    <div>
      <ImageContent hasImage={false} className="items-center justify-center" title="Corporate Social Responsibility (CSR)" subtitleclassName="hidden" description="Companies today understand the importance of giving back by being socially responsible towards society, but with a lack of time, planning, and expertise, they fail to develop effective programs. The Corporate Social Responsibility (CSR) initiatives at Kalinga come under Bhagwan Shri Bala Sai Educational and Charitable Society, which works on behalf of different organisations and assists them in staying ahead in sustainable and social welfare." />
    <MainIntro 
      title="About Bhagwan Shri Bala Sai Educational And Charitable Society "
      description={["Companies today understand the importance of giving back by being socially responsible towards society, but with a lack of time, planning, and expertise, they fail to develop effective programs. The Corporate Social Responsibility (CSR) initiatives at Kalinga come under Bhagwan Shri Bala Sai Educational and Charitable Society, which works on behalf of different organisations and assists them in staying ahead in sustainable and social welfare."]}
      imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
      imageAlt="Kalinga University campus"
   
      showKnowMore={false}
      showImage={false}
      />
      <VisionMission data={visionMissionData} showImg={false} />
      <ImageListItem items={Items} imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrc.webp" title="Benefits for Organisations"  />

        <ImageContent hasImage={false} className="items-center justify-center" title="Corporate Social Responsibility (CSR)" subtitleclassName="hidden" description="Companies today understand the importance of giving back by being socially responsible towards society, but with a lack of time, planning, and expertise, they fail to develop effective programs. The Corporate Social Responsibility (CSR) initiatives at Kalinga come under Bhagwan Shri Bala Sai Educational and Charitable Society, which works on behalf of different organisations and assists them in staying ahead in sustainable and social welfare." />
    
      <CenterOfExcellence
        centres={centres}
        title="Startup Partners"
        description="Explore the spaces and partnerships that power the Kalinga Incubation Foundation."
      />
      <StudentActivities activities={activities} title="KIF  Glimpse" subtitle="" />
      <FAQ items={FAQItems}     />
      <AdmissionCareer />
     
    </div>
  );
}