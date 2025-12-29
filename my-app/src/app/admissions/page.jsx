"use client";

import { Suspense, useEffect } from "react";
import OurPrograms from "../components/admissions/our_programs";
import ScholarshipsSlider from "../components/admissions/scholarships_slider";
import AdmissionSteps from "../components/admissions/admission-steps";
import Facility from "../components/admissions/facility";
import EntranceExam from "../components/general/entrance_exam";
import QuickLinks from "../components/general/quick_links";
import FAQ from "../components/general/faq";
import AdmissionCareer from "../components/general/admission_cta";
import OrganogramOfKalinga from "../components/about/organogram_of_kalinga";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/student-gathered.webp",
  pageTitle: "Admissions",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Admissions', href: '/admissions' }
  ]
};

export default function Admissions() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
  }, []);
  // AdmissionSteps content
  const admissionStepsContent = {
    steps: [
      {
        id: 1,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-1.svg",
        stepNumber: "01",
        title: "Step 1",
        description: "Visit Website",
        backDescription: "Navigate to our official website and explore the admission section to understand the process and requirements.",
      },
      {
        id: 2,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-2.svg",
        stepNumber: "02",
        title: "Step 2",
        description: "Register for the entrance exam",
        backDescription: "Create your account and complete the registration form for the entrance examination. Ensure all personal details are accurate.",
      },
      {
        id: 3,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-3.svg",
        stepNumber: "03",
        title: "Step 3",
        description: "Take the computer-based exam and get shortlisted",
        backDescription: "Appear for the computer-based entrance exam on the scheduled date. Results will be announced, and shortlisted candidates will be notified.",
      },
      {
        id: 4,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-4.svg",
        stepNumber: "04",
        title: "Step 4",
        description: "Offer letter",
        backDescription: "Receive your offer letter based on your performance. Review the terms and conditions carefully before accepting.",
      },
      {
        id: 5,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-5.svg",
        stepNumber: "05",
        title: "Step 5",
        description: "Admission letter",
        backDescription: "Complete the admission formalities, submit required documents, and receive your official admission letter to begin your journey at Kalinga University.",
      },
    ],
    subtitle: "Admission Procedure",
    title: "Steps To Get Admission Into KU",
    showHeaderButton: true,
    ctaLabel: "Apply Now",
    showReadMore: true,
    showIcon: true,
  };

  // OrganogramOfKalinga content (first instance - with image)
  const entranceExamContent = {
    title: "Book Your Spot",
    description: [
      "Our KALSEE and KAL-MAT entrance tests open doors to unlimited academic programs. With no negative marking, flexible scheduling options, and exclusive scholarships, you can easily take the first step towards your dream career. So why wait?",
    ],
    buttonLabel: "Explore Now",
    cardBackgroundColor: "bg-[var(--dark-blue)]",
    showImage: true,
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/student-img.png",
    imageAlt: "Entrance exam",
    buttonClassName: "!bg-[var(--button-red)] !text-white",
    arrowClassName: "!bg-white",
    arrowIconClassName: "!text-[var(--button-red)]",
    textClassName: "!text-white",
    useContainer: true,
    href: "/entrance-exam",
  };

  // OrganogramOfKalinga content (second instance - without image)
  const admissionOrganogramContent = {
    title: "Proposed Fee Structure 2025-26 (For Indian Students)",
    description: [
      "Kalinga University follows a well-structured governance model to ensure smooth administration and institutional integrity. It begins with the Chancellor, followed by the Vice-Chancellor and Director General. Their roles and responsibilities are well-defined, enabling proper decision-making across all the departments of the university. ",
    ],
    buttonLabel: "Learn More",
    cardBackgroundColor: "bg-[var(--dark-blue)]",
    showImage: false,
    imageUrl: "",
    imageAlt: "",
    buttonClassName: "!bg-white !text-black",
    arrowClassName: "!bg-[var(--dark-orange-red)]",
    arrowIconClassName: "!text-white",
    textClassName: "!text-black",
    href: "/ku-fees",
  };

  // Facility content
  const facilityContent = {
    title: "Campus Facilities",
    subtitle: "World-Class Infrastructure",
    facilities: [
      {
        id: 1,
        name: "Hostel",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/hostel.webp",
      },
      {
        id: 2,
        name: "Library",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/library.webp",
      },
      {
        id: 3,
        name: "GYM",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/gym.webp",
      },
      {
        id: 4,
        name: "Playground",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/DSC00047.webp",
      },
      {
        id: 5,
        name: "Laboratories",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/labotories.webp",
      },
      {
        id: 6,
        name: "Cafeteria",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/canteen+mess.webp",
      },
    ],
  };

  // QuickLinks content
  const quickLinksContent = {
    title: "Quick Links",
    description: "Access important admission-related resources and information to help you through your admission journey.",
    links: [
      {
        id: 1,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
        title: "How to Apply",
        description: "Learn about the step-by-step admission process and apply easily for your preferred program through our online portal.",
        href: "/admissions#admission-steps"
      },
      {
        id: 2,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/Value+addition.svg",
        title: "Value Addition",
        description: "Gain a competitive edge with our value-added courses, workshops, and certifications designed to enhance your professional and personal development.",
        href: "/value-added-course"
      },
      {
        id: 3,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/covid.svg",
        title: "Hostel",
        description: "Fully-furnished separate hostels for girls and boys with round-the-clock security, clean rooms, and mess facilities in a safe, comfortable environment.",
        href: "/hostel"
      },
      {
        id: 4,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/scholarship.svg",
        title: "Transports",
        description: "Convenient, safe, and affordable transport service with 30+ buses and 4-wheelers covering pick-up and drop facilities across Raipur, up to 70 km each way.",
        href: "/transport-facility"
      },
      {
        id: 5,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/elgbility.svg",
        title: "Pay fees",
        description: "Pay your fees securely online through our payment portal using debit/credit cards or online banking. View detailed fee structure and payment options.",
        href: "/ku-fees"
      },
      {
        id: 6,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/admission+procedure.svg",
        title: "Admission Procedure",
        description: "Understand the complete admission process, document checklist, and important deadlines to ensure a smooth enrollment experience.",
        href: "/admissions#admission-steps"
      },
    ],
  };

  // FAQ content
  const faqContent = {
    title: "Frequently Asked Questions",
    items: [
      {
        id: 1,
        question: "What is the admission process at Kalinga University?",
        answer: "The admission process involves online registration, appearing for the entrance examination, document verification, and final admission confirmation. Detailed steps are available on our website and admission portal.",
      },
      {
        id: 2,
        question: "What are the eligibility criteria for admission?",
        answer: "Eligibility criteria vary by program. Generally, candidates need to have completed their 10+2 or equivalent examination with minimum required marks. Specific requirements for each program are listed in our admission brochure.",
      },
      {
        id: 3,
        question: "What documents are required for admission?",
        answer: "Required documents typically include mark sheets, certificates, identity proof, passport-size photographs, and category certificates (if applicable). A complete list is provided in the admission form.",
      },
      {
        id: 4,
        question: "How can I apply for scholarships?",
        answer: "Scholarship applications can be submitted along with your admission application. We offer merit-based, need-based, and special category scholarships. Details and application forms are available on our website.",
      },
      {
        id: 5,
        question: "What is the fee structure and payment options?",
        answer: "The fee structure varies by program and includes tuition fees, examination fees, and other charges. We offer flexible payment options including installments and various payment methods. Detailed fee structure is available in the admission brochure.",
      },
      {
        id: 6,
        question: "When does the admission process start?",
        answer: "Admission processes typically begin in the months leading up to the academic session. Important dates including registration deadlines, exam dates, and admission confirmation dates are published on our website and communicated through official channels.",
      },
    ],
  };

  return (
    <div>
      <Suspense fallback={
        <section className="py-16 bg-white">
          <div className="container mx-auto px-2">
            <div className="text-center">
              <p className="text-gray-600">Loading programs...</p>
            </div>
          </div>
        </section>
      }>
        <OurPrograms programCardTitleClassName="uppercase !text-base md:!text-lg lg:!text-xl" />
      </Suspense>
      <OrganogramOfKalinga
        title={entranceExamContent.title}
        description={entranceExamContent.description}
        buttonLabel={entranceExamContent.buttonLabel}
        cardBackgroundColor={entranceExamContent.cardBackgroundColor}
        showImage={entranceExamContent.showImage}
        imageUrl={entranceExamContent.imageUrl}
        imageAlt={entranceExamContent.imageAlt}
        buttonClassName={entranceExamContent.buttonClassName}
        arrowClassName={entranceExamContent.arrowClassName}
        arrowIconClassName={entranceExamContent.arrowIconClassName}
        textClassName={entranceExamContent.textClassName}
        useContainer={entranceExamContent.useContainer}
        href={entranceExamContent.href}
      />
      {/* <EntranceExam /> */}
      <div id="admission-steps">
        <AdmissionSteps
          steps={admissionStepsContent.steps}
          subtitle={admissionStepsContent.subtitle}
          title={admissionStepsContent.title}
          showHeaderButton={admissionStepsContent.showHeaderButton}
          ctaLabel={admissionStepsContent.ctaLabel}
          showReadMore={admissionStepsContent.showReadMore}
          showIcon={admissionStepsContent.showIcon}
          ctaHref="/admissions"
        />
      </div>
      <OrganogramOfKalinga
        title={admissionOrganogramContent.title}
        description={admissionOrganogramContent.description}
        buttonLabel={admissionOrganogramContent.buttonLabel}
        cardBackgroundColor={admissionOrganogramContent.cardBackgroundColor}
        showImage={admissionOrganogramContent.showImage}
        imageUrl={admissionOrganogramContent.imageUrl}
        imageAlt={admissionOrganogramContent.imageAlt}
        buttonClassName={admissionOrganogramContent.buttonClassName}
        arrowClassName={admissionOrganogramContent.arrowClassName}
        arrowIconClassName={admissionOrganogramContent.arrowIconClassName}
        textClassName={admissionOrganogramContent.textClassName}
        useContainer={true}
        href={admissionOrganogramContent.href}
      />
      <ScholarshipsSlider />
      <Facility
        title={facilityContent.title}
        subtitle={facilityContent.subtitle}
        facilities={facilityContent.facilities}
      />
      <QuickLinks
        title={quickLinksContent.title}
        description={quickLinksContent.description}
        links={quickLinksContent.links}
        titleClassName="text-white"
      />
      <FAQ
        title={faqContent.title}
        items={faqContent.items}
      />
      <AdmissionCareer />
    </div>
  );
}