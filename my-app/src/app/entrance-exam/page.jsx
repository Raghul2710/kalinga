'use client';

import React from 'react'
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import ImageContent from "@/app/components/ccrc/imagecontent";
import EntranceExamFormCards from "@/app/components/entrance-exam/entrance-exam-cards";
import CareerApplicationForm from "@/app/components/careers/CareerApplicationForm";
import FaqSection from "@/app/components/general/faq";
import { useBreadcrumbData } from "@/app/components/layout/BreadcrumbContext";
import AdmissionCareer from "@/app/components/general/admission_cta";
import EntranceExamUpdated from "@/app/components/entrance-exam/entrance-exam-updated";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/banner.webp",
  imageposition: "object-top",
  pageTitle: "Entrance Exam",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Entrance Exam', href: '/entrance-exam' }
  ]
};

const EntranceExamPage = () => {
  // Register breadcrumb data
  useBreadcrumbData(breadcrumbData);
    const careerFAQs = [
        {
            id: 1,
            question: "What is the fee structure and payment options?",
            answer: "The fee structure varies by program and includes tuition fees, examination fees, and other charges. We offer flexible payment options including installments and various payment methods. Detailed fee structure is available in the admission brochure.",
        },
    ]
    const Items = [
        {
            id: 1,
            text: "Earn Scholarships: Up to 100%."
        },
        {
            id: 2,
            text: "Flexible Scheduling: Schedule the exam at your preferred time."
        },  
        {
            id: 3,
            text: "No Negative Marking: Attempt all questions with no worries."
        },
        {
            id: 4,
            text: "Fast-Track Your College Application Process: First-Come, First-Served Basis."
        },
        {
            id: 5,
            text: "Recognised Entrance Exam: A trusted online exam."
        },
        {
            id: 6,
            text: "Access to Premium Programs: Enroll in our world-class programs."
        },
    ]
  return (
    <>
        <ImageContent 
        hasImage={false} 
        readmore={false} 
        className="items-center justify-center" 
        title="Introducing A Shortcut To Success" 
        subtitleclassName="hidden" 
        description="Crack the KALSEE/KAL-MAT Exam and Join KU’s Prestigious Programs."
      />  
       <ImageListItem items={Items} imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrc.webp" title="Apply For KU Entrance Exams"  /> 
       {/* <EntranceExamFormCards /> */}
       <EntranceExamUpdated />
       <CareerApplicationForm
          heading="Entrance Exam Application Form"
          description="Share your details to stay connected with Kalinga University, receive updates, and participate in alumni activities and events."
          backgroundClass="bg-[var(--dark-blue)]"
          hideTabs={true}
          submitLabel="Submit Alumni Details"
          useArrowSubmitButton={true}
          arrowSubmitVariant="white"
        />  

        <FaqSection items={careerFAQs} showHeading={false} />
        <AdmissionCareer />
    </>
  )
}

export default EntranceExamPage