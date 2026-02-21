"use client";

import { Suspense, useEffect } from "react";
import { usePathname } from "next/navigation";
import OurPrograms from "../components/admissions/our_programs";
import ScholarshipsSlider from "../components/admissions/scholarships_slider";
import AdmissionSteps from "../components/admissions/admission-steps";
import Facility from "../components/admissions/facility";
import EntranceExam from "../components/general/entrance_exam";
import QuickLinks from "../components/general/quick_links";
import FAQ from "../components/general/faq";
import AdmissionCareer from "../components/general/admission_cta";
import OrganogramOfKalinga from "../components/about/organogram_of_kalinga";

export default function Admissions() {
  const pathname = usePathname();



  // Handle scrolling to program search section when hash is present
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if hash is present in URL
      if (window.location.hash === '#program-search-section') {
        // Wait for component to render
        setTimeout(() => {
          const searchSection = document.getElementById('program-search-section');
          if (searchSection) {
            // Calculate header offset (100px on mobile, less on desktop)
            const headerOffset = window.innerWidth < 768 ? 100 : 80;
            const elementPosition = searchSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            // Focus on the search input after scrolling
            setTimeout(() => {
              const searchInput = searchSection.querySelector('input[type="text"]');
              if (searchInput) {
                searchInput.focus();
              }
            }, 500);
          }
        }, 300);
      }
    }
  }, []);
  // AdmissionSteps content
  const admissionStepsContent = {
    steps: [
      {
        id: 1,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-1.svg",
        stepNumber: "01",
        title: "Step Ⅰ",
        description: "Visit https://admissions.kalingauniversity.ac.in/",
        backDescription: "Visit https://admissions.kalingauniversity.ac.in/ to begin your admission process.",
      },
      {
        id: 2,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-2.svg",
        stepNumber: "02",
        title: "Step Ⅱ",
        description: "Register for the entrance exam (KALSEE/KAL-MAT)",
        backDescription: "Register for the entrance exam (KALSEE/KAL-MAT) by completing the registration form with accurate personal details.",
      },
      {
        id: 3,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-3.svg",
        stepNumber: "03",
        title: "Step Ⅲ",
        description: "Take the computer-based exam and get shortlisted",
        backDescription: "Take the computer-based exam on the scheduled date. Results will be announced, and shortlisted candidates will be notified.",
      },
      {
        id: 4,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-4.svg",
        stepNumber: "04",
        title: "Step Ⅳ",
        description: "Fill out the online admission form after selection",
        backDescription: "Fill out the online admission form after selection with all required information.",
      },
      {
        id: 5,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-5.svg",
        stepNumber: "05",
        title: "Step Ⅴ",
        description: "Attach self-attested copies with the admission form",
        backDescription: "Attach the following self-attested copies with the admission form:\n• Xerox copies of mark sheets (Class X, XII, UG/PG depending on your course)\n• Original Copies of TC, CC, Migration Certificate, and Gap Certificate (if any)\n• Proof of employment or self-employment (if working)",
      },
      {
        id: 6,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-3.svg",
        stepNumber: "06",
        title: "Step Ⅵ",
        description: "Pay your program fee within 10 days",
        backDescription: "Pay your program fee within 10 days after receiving the offer letter. Online/Offline payment options are available.",
      },
      {
        id: 7,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-4.svg",
        stepNumber: "07",
        title: "Step Ⅶ",
        description: "Welcome to Kalinga University!",
        backDescription: "Welcome to Kalinga University! Begin your journey with us.",
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
      "Kalinga University offers a transparent fee structure for 2025-26, including tuition, examination, prospectus, caution money, and uniform fees. Flexible payment options and detailed breakdowns for all programs are available.",
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
    title: "Explore More",
    description: "Access essential information and resources to support your academic journey.",
    links: [
      {
        id: 1,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
        title: "Value Added Courses",
        description: "Kalinga University offers a range of short-term value-added certification courses conducted by industry experts.",
        href: "/value-added-course"
      },
      {
        id: 2,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/Value+addition.svg",
        title: "Value Addition",
        description: "Gain a competitive edge with our value-added courses, workshops, and certifAcquire real-world knowledge and skills apart from the course curriculum and become confident, career-ready, and future-focused.",
        href: "/value-addition"
      },
      {
        id: 3,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/hotel.svg",
        title: "Hostel",
        description: "Fully-furnished separate hostels for girls and boys with round-the-clock security, clean rooms, and mess facilities in a safe, comfortable environment.",
        href: "/hostel"
      },
      {
        id: 4,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/transport.svg",
        title: "Transport",
        description: "Convenient, safe, and affordable transport service with 30+ buses and 4-wheelers covering pick-up and drop facilities across Raipur, up to 70 km each way.",
        href: "/transport-facility"
      },
      {
        id: 5,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/fees.svg",
        title: "KU Fees",
        description: "Pay your fees securely online through our payment portal using debit/credit cards or online banking. View detailed fee structure and payment options.",
        href: "/ku-fees"
      },
      {
        id: 6,
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/about+us.svg",
        title: "Why Kalinga",
        description: "From building a solid academic foundation to experiencing a diverse campus life, Kalinga University offers the best of both worlds.",
        href: "/about-us"
      },
    ],
  };

  // FAQ content
  const faqContent = {
    title: "Frequently Asked Questions",
    items: [
      {
        id: 1,
        question: "Am I eligible to take admission in Kalinga University?",
        answer: "It depends on the eligibility criteria of our academic programs. You need to meet the minimum eligibility criteria and clear the entrance exam of our University.",
      },
      {
        id: 2,
        question: "What is the admission procedure of Kalinga University?",
        answer: "Getting admission to our University is simple, transparent, and completely online. First, you need to register for the entrance exam, appear for the test, and complete the admission formalities after selection. Visit the admission procedure for more details.",
      },
      {
        id: 3,
        question: "Do I need to appear for the entrance exam before taking admission?",
        answer: "Yes, if you want to appear for BBA or MBA, then you need to take KAL-MAT - Kalinga Management Aptitude Test. If you want to pursue any other program apart from BBA or MBA, then you need to take KALSEE - Kalinga Scholastic Entrance Examination.",
      },
      {
        id: 4,
        question: "I am from another state. Can I still apply to Kalinga University?",
        answer: "Yes, it doesn't matter from which state or country you are; you'll be eligible to enrol in our academic programs once you meet the eligibility criteria of the program of your choice.",
      },
      {
        id: 5,
        question: "Will I get the hostel facility or accommodation?",
        answer: "Yes, we have separate boy's and girl's hostels at our campus, which offer all the basic amenities, a separate mess facility, and ensure the safety and privacy of all students with CCTV cameras and security.",
      },
      {
        id: 6,
        question: "Am I eligible for a scholarship?",
        answer: "We offer a wide range of scholarships to our students, but our admission counsellors will check your eligibility, and if you are found eligible, you can claim a scholarship on your tuition fee.",
      },
      {
        id: 7,
        question: "How can I pay my tuition fees?",
        answer: "Students can pay their fees via cash, UPI, Bank Transfer, or by cheque.",
      },
      {
        id: 8,
        question: "Are the programs of your University approved and recognised?",
        answer: "Yes, all our academic programs are approved and recognised by the relevant statutory and regulatory bodies.",
      },
    ],
  };

  return (
    <div className="pt-[100px] md:pt-0" id="course-finder">
      <Suspense fallback={
        <section className="py-16 bg-white">
          <div className="container mx-auto px-2">
            <div className="text-center">
              <p className="text-gray-600">Loading programs...</p>
            </div>
          </div>
        </section>
      }>
        <OurPrograms programCardTitleClassName=" !text-base md:!text-lg lg:!text-xl" />
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
          ctaHref="https://admissions.kalingauniversity.ac.in/"
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
        className="!pt-4 pb-16"
      />
      <QuickLinks
        title={quickLinksContent.title}
        description={quickLinksContent.description}
        links={quickLinksContent.links}
        titleClassName="text-white"
      />
      <FAQ
        title={faqContent.title}
        subtitle=""
        items={faqContent.items}
      />
      <AdmissionCareer />
    </div>
  );
}