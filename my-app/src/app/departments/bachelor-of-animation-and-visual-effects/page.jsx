"use client";

import MainIntro from "../../components/about/main_intro";
import PublicationGrid from "../../components/research/publication-grid";
import Facility from "../../components/admissions/facility";
import StudentActivities from "../../components/department/student_activities";
import EligibilityCriteria from "../../components/course/eligibility_criteria";
import CareerPath from "../../components/course/career_path";
import BoardStudies from "../../components/course/board-studies";
import WhyStudy from "@/app/components/department/why-study";
import OrganogramOfKalinga from "@/app/components/about/organogram_of_kalinga";
import FAQ from "@/app/components/general/faq";
import AdmissionCareer from "@/app/components/general/admission_cta";
import CourseNavigation from "@/app/components/general/course-navigation";
import QuickLinks from "@/app/components/general/quick_links";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/course/student-computer.webp",
  pageTitle: "Bachelor of Animation and Visual Effects",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Departments', href: '/departments' },
    { label: 'Bachelor of Animation and Visual Effects', href: '/departments/bachelor-of-animation-and-visual-effects' }
  ]
};

// Register breadcrumb data globally
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}

function Courses() {
  // MainIntro content
  const mainIntroContent = {
    title: "Have you ever wondered how impossible visuals are used in movies and games?",
    subtitle: "About The Program",
    description: [
      "A Bachelor of Animation & Visual Effects (B.An & VFX) program is a magical career option for individuals interested in bringing their unique ideas to the screen. The program focuses on creating moving images and visuals for the entertainment industry, utilising various artistic and technical skills for games, films, television, and other digital platforms.",
      "Students will learn 2D and 3D animation techniques, character design, VFX simulations, storyboarding, and the tools and software used in the industry.",
    ],
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    imageAlt: "Kalinga University campus",
  };

  // PublicationGrid content
  const publicationStats = [
    {
      title: "Publications",
      value: "1250 +",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      title: "Startups",
      value: "12 +",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      title: "Awards",
      value: "63 +",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      title: "Conferences",
      value: "78 +",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
  ];

  // EligibilityCriteria content
  const eligibilityContent = {
    imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/course/course_page.webp",
    imageAlt: "Students",
    duration: "3 Years (6 Semesters)",
    title: "Eligibility Criteria",
    criteria: [
      "The candidate should be a 12th pass with 45% aggregate marks.",
      'Take the Entrance Test: <a href="/kalsee" class="text-white hover:underline inline-flex items-center gap-1">KALSEE<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[var(--dark-orange-red)]"><path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></a>',
    ],
    admissionTitle: "Start Your Creative Journey in Animation & Visual Effects Today",
    admissionButtonLabel: "Admission Open",
    href: "/admissions",
  };

  // CareerPath content
  const careerPathContent = {
    title: "Career Pathway",
    description: "Get ready to turn your unique ideas into reality in the world of tech and design with limitless career opportunities.",
    careers: [
      {
        id: 1,
        title: "3D Animator",
        description: "Create 3D space, characters, and objects using advanced animation techniques.",
        imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/course/icons/3D-Animator.svg",
      },
      {
        id: 2,
        title: "VFX Artist",
        description: "Create realistic effects like a transformation or an explosion by combining footage.",
        imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/course/icons/vfx.svg",
      },
      {
        id: 3,
        title: "Storyboard Artist",
        description: "Plan camera angles, shots, and scenes before production begins.",
        imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/course/icons/storyboard.svg",
      },
      {
        id: 4,
        title: "Motion Graphics Designer",
        description: "Create animated visuals by combining animation, graphic design, and storytelling.",
        imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/course/icons/graphic-designer.svg",
      },
      {
        id: 5,
        title: "Character Designer",
        description: "Bring characters to life through sketches, digital arts, and 3D models.",
        imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/course/icons/Character+Designer.svg",
      },
      {
        id: 6,
        title: "Video Editor",
        description: "Convert raw footage into a final polished video using different editing software.",
        imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/course/icons/Video+Editor.svg",
      },
      {
        id: 7,
        title: "Game Animator",
        description: "Use animation software to develop characters, objects, and creatures.",
        imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/course/icons/Game+Animator.svg",
      },
      {
        id: 8,
        title: "Compositing Artist",
        description: "Combine multiple visual elements and create a realistic final image.",
        imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/course/icons/Compositing+Artist.svg",
      },
      {
        id: 9,
        title: "Texturing Artist",
        description: "Create and apply textures to 3D models in games, movies, and animations.",
        imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/course/icons/Texturing+Artist.svg",
      },
    ],
  };

  // WhyStudy content
  const whyStudyContent = {
    sectionTitle: "Specialization",
    backgroundImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/why-this-course-1.webp",
    items: [
      {
        id: 1,
        title: "Become Tech-Savvy",
        body: "The world needs new technologies, and companies are hunting for skilled professionals who generate code or are good problem solvers. We'll help you turn your ideas into a viral application.",
        variant: "gray",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Global.svg",
      },
      {
        id: 2,
        title: "Industry-Ready Programs",
        body: "We design programs with the latest tools and industry practices so you graduate with the skills employers seek and the confidence to build real-world solutions.",
        variant: "amber",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/university.svg",
      },
      {
        id: 3,
        title: "Future-Proof Skills",
        body: "Learn critical thinking, communication, and collaboration alongside core tech so you can adapt quickly and lead in fast-changing digital environments.",
        variant: "gray",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Career+Counseling.svg",
      },
    ],
  };

  // FAQ content
  const faqContent = {
    title: "Frequently Asked Questions",
    items: [
      {
        id: 1,
        question: "What is the admission process?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      {
        id: 2,
        question: "What are the eligibility criteria?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      {
        id: 3,
        question: "What documents are required?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      {
        id: 4,
        question: "How can I apply for scholarships?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      {
        id: 5,
        question: "What is the fee structure?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
    ],
  };

  // QuickLinks content
  const quickLinksContent = {
    title: "Beyond The Curriculum ",
    description: "",
    links: [
      {
        id: 1,
        // icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
        title: "Kalinga Incubation Foundation (KIF)",
        description: "KIF converts students' bold and unique entrepreneurial ideas into ACTION by providing all-around support.",
      },
      {
        id: 2,
        // icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/scholarship.svg",
        title: "Corporate Training And Consultancy Division (CTCD)",
        description: "CTCD offers customised training programs to junior, middle, and senior levels of management of different companies.",
      },
      {
        id: 3,
        // icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/elgbility.svg",
        title: "Career Development Centre",
        description: "It connects students with different companies and trains them in essential skills, helping them achieve their personal and professional goals.",
      },
    ],
  };

  // Course Navigation Tabs
  const navigationTabs = [
    { id: 'about', label: 'Program details' },
    { id: 'specialization', label: 'Specialization' },
    { id: 'career', label: 'Career Pathway' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'fees', label: 'Fees' },
    { id: 'syllabus', label: 'Syllabus' },
  ];

  return (
    <div>
      <CourseNavigation tabs={navigationTabs} />
      <div id="about">
        <MainIntro 
          title={mainIntroContent.title}
          subtitle={mainIntroContent.subtitle}
          description={mainIntroContent.description}
          imageUrl={mainIntroContent.imageUrl}
          imageAlt={mainIntroContent.imageAlt}
          showKnowMore={false}
        />
      </div>
      <PublicationGrid stats={publicationStats} />
      <div id="eligibility">
        <EligibilityCriteria 
          imageUrl={eligibilityContent.imageUrl}
          imageAlt={eligibilityContent.imageAlt}
          duration={eligibilityContent.duration}
          title={eligibilityContent.title}
          criteria={eligibilityContent.criteria}
          admissionTitle={eligibilityContent.admissionTitle}
          admissionButtonLabel={eligibilityContent.admissionButtonLabel}
          href={eligibilityContent.href}
        />
      </div>
      <div id="career">
        <CareerPath 
          title={careerPathContent.title}
          description={careerPathContent.description}
          careers={careerPathContent.careers}
        />
      </div>
      <div id="specialization">
        <WhyStudy 
          sectionTitle={whyStudyContent.sectionTitle}
          backgroundImage={whyStudyContent.backgroundImage}
          items={whyStudyContent.items}
        />
      </div>
      <div id="syllabus">
        <OrganogramOfKalinga
          title="Scheme & Syllabus 2024-2025"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ."
          buttonLabel="Explore Now"
          href="/about-us"
          buttonClassName="!bg-white !text-black"
          arrowClassName="!bg-[var(--dark-orange-red)]"
          arrowIconClassName="!text-white"
          textClassName="!text-black"
          cardBackgroundColor="bg-[var(--button-red)]"
          useContainer={false}
        />
      </div>
      <div id="fees">
        {/* Fees section - Add your fees content here */}
      </div>
      <div id="facilities">
        <Facility />
      </div>
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
      {/* <BoardStudies /> */}
      <div id="activities">
        <StudentActivities />
      </div>
      <AdmissionCareer />
    </div>
  );
}

export default Courses;