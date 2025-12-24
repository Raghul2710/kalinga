"use client";

import { Suspense } from "react";
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

// Register breadcrumb data globally
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}

export default function Admissions() {
  // AdmissionSteps content
  const admissionStepsContent = {
    steps: [
      {
        id: 1,
        stepNumber: "01",
        title: "Step 1",
        description: "Visit Website",
        backDescription: "Navigate to our official website and explore the admission section to understand the process and requirements.",
      },
      {
        id: 2,
        stepNumber: "02",
        title: "Step 2",
        description: "Register for the entrance exam",
        backDescription: "Create your account and complete the registration form for the entrance examination. Ensure all personal details are accurate.",
      },
      {
        id: 3,
        stepNumber: "03",
        title: "Step 3",
        description: "Take the computer-based exam and get shortlisted",
        backDescription: "Appear for the computer-based entrance exam on the scheduled date. Results will be announced, and shortlisted candidates will be notified.",
      },
      {
        id: 4,
        stepNumber: "04",
        title: "Step 4",
        description: "Offer letter",
        backDescription: "Receive your offer letter based on your performance. Review the terms and conditions carefully before accepting.",
      },
      {
        id: 5,
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
    title: "Entrance exam",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi",
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
    title: "Admission Process Overview",
    description: [
      "Kalinga University follows a streamlined admission process designed to identify and welcome talented students from diverse backgrounds. Our admission team works diligently to ensure a smooth and transparent process from application to enrollment.",
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
    href: "/admissions",
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
      },
      {
        id: 2,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/Value+addition.svg",
        title: "Value Addition",
        description: "Gain a competitive edge with our value-added courses, workshops, and certifications designed to enhance your professional and personal development.",
      },
      {
        id: 3,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/covid.svg",
        title: "COVID Safety",
        description: "Your safety is our utmost priority. Discover the health and safety measures implemented on campus to ensure a secure learning environment.",
      },
      {
        id: 4,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/scholarship.svg",
        title: "Scholarships",
        description: "Explore a range of merit-based, need-based, and special category scholarships that support and reward academic excellence.",
      },
      {
        id: 5,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/elgbility.svg",
        title: "Eligibility Criteria",
        description: "Review the eligibility requirements for our undergraduate, postgraduate, and doctoral programs before submitting your application.",
      },
      {
        id: 6,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/admission+procedure.svg",
        title: "Admission Procedure",
        description: "Understand the complete admission process, document checklist, and important deadlines to ensure a smooth enrollment experience.",
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
        <OurPrograms />
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