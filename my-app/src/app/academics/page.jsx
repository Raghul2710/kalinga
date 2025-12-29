'use client'

import { useState, useEffect } from 'react'
import SectionHeading from '../components/general/SectionHeading'
import { renderProgramCard } from '../components/general/program-cards-slider'
import AdmissionCareer from '../components/general/admission_cta'
import QuickLinks from "../components/general/quick_links";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/academics-banner.webp",
  pageTitle: "Academics",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Academics', href: '/academics' }
  ]
};

export default function Academics() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
  }, []);
  const [searchQuery, setSearchQuery] = useState('')

  // Academics content - 9 faculty cards
  const academicsContent = {
    subtitle: "Explore Academics",
    title: "Our Academic Faculties",
    programs: [
      {
        id: 1,
        title: "Faculty of Arts & Humanities",
        img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/arts.webp",
        summary: "The Faculty of Arts and Humanities at Kalinga University is a vibrant community of students studying language, culture, history, media, politics, sociology, and psychology, learning to raise their voices and make a difference in society.",
        scholarships: "Check eligibility",
        programs: "11",
      },
      {
        id: 2,
        title: "Faculty Of Commerce & Management",
        img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/commerce-management.webp",
        summary: "The Department of Commerce focuses on imparting the highest quality of education and exposure related to the economy and business to produce next-gen leaders.",
        scholarships: "Check eligibility",
        programs: "11",
      },
      {
        id: 3,
        title: "Faculty Of Education",
        img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/education.webp",
        summary: "Teachers are the guiding light behind every success story as they encourage students to learn, grow, and develop into better individuals.",
        scholarships: "Check eligibility",
        programs: "2",
      },
      {
        id: 4,
        title: "Faculty Of Information Technology",
        img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/computer.webp",
        summary: "Tech is running the world, and the demand for coders is increasing at lightning speed. Whether it's Artificial Intelligence, Machine Learning, Cybersecurity, Data Science, Gaming, or Cloud Computing, careers in IT are booming.",
        scholarships: "Check eligibility",
        programs: "9",
      },
      {
        id: 7,
        title: "Faculty Of Law",
        img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/law.png",
        summary: "The faculty of law at Kalinga University is a time-tested department offering excellence in the field of legal education and fulfilling the demands of young aspirants by making them employable in the legal sector.",
        scholarships: "Check eligibility",
        programs: "4",
      },
      {
        id: 5,
        title: "Faculty Of Pharmacy",
        img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/phd-bio.webp",
        summary: "Do you know that pharmacists are equally important as doctors? The pharmaceutical industry is growing as more people look for affordable and effective medicines.",
        scholarships: "Check eligibility",
        programs: "5",
      },
      {
        id: 9,
        title: "Ph.D",
        img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/MBA.webp",
        summary: "Pursue advanced research and doctoral studies across various disciplines. Work with renowned faculty on groundbreaking research projects and contribute to academic knowledge.",
        scholarships: "Check eligibility",
        programs: "-",
      },
      {
        id: 6,
        title: "Faculty Of Science",
        img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/science.webp",
        summary: "Do you think Science is only about wearing lab coats or solving equations? Well, think again; it goes far beyond your imagination. The Faculty of Science at Kalinga University not only focuses on classroom knowledge, but it will also make you question WHY and HOW through every fieldwork and experimentation.",
        scholarships: "Check eligibility",
        programs: "15",
      },
      {
        id: 7,
        title: "Faculty Of Technology",
        img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/information.png",
        summary: "Explore engineering disciplines including computer science, electronics, mechanical, and civil engineering. Gain hands-on experience with modern technology and innovation.",
        scholarships: "Check eligibility",
        programs: "5",
      },
      
    ],
  }

  // Filter programs based on search query
  const filteredPrograms = academicsContent.programs.filter((program) => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) return true
    return program.title.toLowerCase().includes(query)
  })

  // QuickLinks content
  const quickLinks = [
    {
      id: 1,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/icons/Programs.svg",
      title: "Student Clubs",
      description: "Our vibrant clubs motivate students to learn and grow with confidence inside and outside their classrooms.",
      href: "/student-clubs",
    },
    {
      id: 2,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/icons/teachings.svg",
      title: "Value Added Courses",
      description: "Explore a wide range of short-term value-added certification courses conducted by industry experts at the University. ",
      href: "/value-added-course",
    },
    {
      id: 3,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/icons/Curriculum.svg",
      title: "Industrial Visits",
      description: "To understand the industry dynamics, we conduct industrial visits where students interact with industry professionals and explore real-world applications.",
      href: "/campuslife",
    },
    {
      id: 4,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Industrial+Visits.svg",
      title: "Internships & Placement",
      description: "Get an on-campus or off-campus internship opportunity and get placed in top companies through our Campus Placement Drives.",
      href: "/training-and-placement-cell",
    },
    {
      id: 5,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/elgbility.svg",
      title: "Academic Facilities",
      description: "Our top-notch academic facilities will support your dreams by giving an all-around practical exposure at every step of your journey.",
      href: "/academic-facilities",
    },
    {
      id: 6,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/icons/Events.svg",
      title: "Conferences & Events",
      description: "Discover various National and International conferences held at Kalinga University, offering a dynamic platform for knowledge sharing.",
      href: "/conferences-and-events",
    },
  ]

  return (
    <>
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-2">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <SectionHeading
            subtitle={academicsContent.subtitle}
            title={academicsContent.title}
            subtitleClassName="text-center !text-[var(--button-red)]"
            titleClassName="text-center"
          />
        </div>

        {/* Search Bar */}
        <div className="mb-5">
          <div className="flex items-center bg-[var(--light-gray)] rounded-lg px-3 sm:px-4 lg:px-5 py-3 sm:py-3.5 shadow-sm border border-gray-200">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Programs...."
              className="bg-transparent outline-none flex-1 text-sm sm:text-base font-plus-jakarta-sans font-medium text-black"
            />
            <button className="text-[var(--button-red)] ml-1 sm:ml-2" aria-label="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="flex justify-center">
              {renderProgramCard(program)}
            </div>
          ))}
        </div>
      </div>
    </section>
    <QuickLinks title="Quick Links" description="Kalinga University offers a comprehensive academic experience beyond the classroom. From student clubs and value-added courses to industrial visits, internships, and placement opportunities, we provide students with the resources and support needed to excel academically and professionally. Our state-of-the-art academic facilities, conferences, and events create an enriching environment for holistic learning and growth." links={quickLinks} titleClassName="text-white" showReadMore={true} />
    <AdmissionCareer />
    </>
  )
}
