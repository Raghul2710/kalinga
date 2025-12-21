'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import GlobalArrowButton from '../general/global-arrow_button'
import GlobalRedPlainButton from '../general/global-red_plain_button'
import SectionHeading from '../general/SectionHeading'
import { renderProgramCard } from '../general/program-cards-slider'

// Program Preview Images
const programPreviewImages = [
  {
    id: 1,
    src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/computer.webp',
    alt: 'Computer Programs'
  },
  {
    id: 2,
    src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/busniess.png',
    alt: 'Business Programs'
  },
  {
    id: 3,
    src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/MBA.webp',
    alt: 'MBA Programs'
  },
  {
    id: 4,
    src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/biotechnology.webp',
    alt: 'Biotechnology Programs'
  }
]

const Programs = () => {
  const [activeTab, setActiveTab] = useState('UG')
  const [query, setQuery] = useState('')
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const previewPrevRef = useRef(null)
  const previewNextRef = useRef(null)
  const previewSwiperRef = useRef(null)

  const programs = [
    { id: 1, title: 'Diploma in Computer Applications', type: 'Diploma', img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/computer.webp', summary: 'Build fundamentals in programming, networking, and databases for entry-level IT roles.', scholarships: 'Check eligibility', qualification: 'Pass in Higher Secondary Examinations of (10+2.' },
    { id: 2, title: 'Diploma in Hospitality', type: 'Diploma', img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/diploma.webp', summary: 'Front office, F&B and operations with hands-on hotel training.', scholarships: 'Check eligibility', qualification: 'Pass in Higher Secondary Examinations of (10+2)' },
    { id: 3, title: 'Diploma in Graphic Design', type: 'Diploma', img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/graphic.webp', summary: 'Visual communication, branding, and digital tools to craft compelling designs.', scholarships: 'Check eligibility', qualification: 'Pass in Higher Secondary Examinations of (10+2)' },
    { id: 4, title: 'Diploma in Hotel Management', type: 'Diploma', img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/hotel.webp', summary: 'Front office, F&B and operations with hands-on hotel training.', scholarships: 'Check eligibility', qualification: 'Pass in Higher Secondary Examinations of (10+2)' },

    { id: 5, title: 'Law', type: 'UG', img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/law.png', summary: 'Explore constitutional, corporate, and criminal law with moot courts and internships.', scholarships: 'Check eligibility', qualification: 'Pass in Higher Secondary Examinations of (10+2)' },
    { id: 6, title: 'Information Technology', type: 'UG', img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/information.png', summary: 'Software, data, and cloud fundamentals with project-based learning and labs.', scholarships: 'Check eligibility', qualification: 'Pass in Higher Secondary Examinations of (10+2)' },
    { id: 7, title: 'Business Administration', type: 'UG', img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/busniess.png', summary: 'Managerial, marketing, and entrepreneurial skills through cases and projects.', scholarships: 'Check eligibility', qualification: 'Pass in Higher Secondary Examinations of (10+2)' },

    { id: 8, title: 'MBA', type: 'PG', img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/MBA.webp', summary: 'Leadership, strategy, finance, and analytics with industry mentors.', scholarships: 'Check eligibility', qualification: 'Pass in Higher Secondary Examinations of (10+2)' },
    { id: 9, title: 'M.Sc Biotechnology', type: 'PG', img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/biotechnology.webp', summary: 'Advanced genetics, molecular biology, and lab techniques for research roles.', scholarships: 'Check eligibility', qualification: 'Pass in Higher Secondary Examinations of (10+2)' },
    { id: 10, title: 'MCA', type: 'PG', img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/mca.webp', summary: 'Advanced programming, data structures, and application architecture.', scholarships: 'Check eligibility', qualification: 'Pass in Higher Secondary Examinations of (10+2)' },

    { id: 11, title: 'Ph.D in Management', type: 'Ph.D', img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/Phd-mba.webp', summary: 'Research on leadership, strategy, and organizational behavior with faculty guidance.', scholarships: 'Check eligibility', qualification: 'Pass in Higher Secondary Examinations of (10+2)' },
    { id: 12, title: 'Ph.D in Computer Science', type: 'Ph.D', img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/Phd-cs.webp', summary: 'AI, data science, and systems research with publications and lab residencies.', scholarships: 'Check eligibility', qualification: 'Pass in Higher Secondary Examinations of (10+2)' },
    { id: 13, title: 'Ph.D in Biotechnology', type: 'Ph.D', img: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/phd-biotechnology-n.webp', summary: 'Genomics, proteomics, and bioinformatics research with advanced lab work.', scholarships: 'Check eligibility', qualification: 'Pass in Higher Secondary Examinations of (10+2)' },
  ]

  const normalizedQuery = query.trim().toLowerCase()
  const visiblePrograms = programs.filter((p) => {
    const matchesTab = p.type === activeTab
    if (!normalizedQuery) return matchesTab
    const matchesQuery =
      p.title.toLowerCase().includes(normalizedQuery) ||
      p.summary.toLowerCase().includes(normalizedQuery)
    return matchesTab && matchesQuery
  })


  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-2 md:pt-16">
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-6 sm:mb-8 lg:mb-10">
          {/* Left column: Text and Tabs */}
          <div className="flex flex-col justify-around">
            {/* Header text */}
            <div className="mb-4 sm:mb-5 lg:mb-6">
              <SectionHeading
                subtitle="Explore Our Programs"
                title="Learn Without Limits. Grow Without Boundaries."
              />
              <p className="text-[var(--light-text-gray)] text-sm md:text-sm max-w-3xl mx-auto">Explore future-focused programs that combine academic excellence with hands-on industry exposure, preparing you for success in a connected, global world.</p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-2 pt-4 sm:pt-6 md:pt-10 lg:pt-12">
              <button
                onClick={() => setActiveTab('Diploma')}
                className={`font-stix px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg transition-all text-[clamp(20px,4vw,30px)] leading-tight ${activeTab === 'Diploma' ? 'bg-[var(--button-red)] text-white shadow-md' : 'text-[var(--dark-blue)] hover:bg-gray-100'}`}
              >
                Diploma
              </button>
              <button
                onClick={() => setActiveTab('UG')}
                className={`font-stix px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg transition-all text-[clamp(20px,4vw,30px)] leading-tight ${activeTab === 'UG' ? 'bg-[var(--button-red)] text-white shadow-md' : 'text-[var(--dark-blue)] hover:bg-gray-100'}`}
              >
                UG
              </button>
              <button
                onClick={() => setActiveTab('PG')}
                className={`font-stix px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg transition-all text-[clamp(20px,4vw,30px)] leading-tight ${activeTab === 'PG' ? 'bg-[var(--button-red)] text-white shadow-md' : 'text-[var(--dark-blue)] hover:bg-gray-100'}`}
              >
                PG
              </button>
              <button
                onClick={() => setActiveTab('Ph.D')}
                className={`font-stix px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg transition-all text-[clamp(20px,4vw,30px)] leading-tight ${activeTab === 'Ph.D' ? 'bg-[var(--button-red)] text-white shadow-md' : 'text-[var(--dark-blue)] hover:bg-gray-100'}`}
              >
                Ph.D
              </button>
            </div>
          </div>

          {/* Right column: Blue card and Search */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 items-start lg:items-end w-full lg:w-auto">
            {/* Blue card */}
            <div className="bg-[var(--dark-blue)] p-4 sm:p-5 lg:p-6 shadow-xl w-full lg:w-full max-w-[560px] h-auto min-h-[230px] sm:min-h-[200px] lg:h-[300px] rounded-[10px]">
              <div className="bg-white/90 rounded-lg h-[200px] sm:h-[150px] lg:h-[200px] mb-3 sm:mb-4 lg:mb-4 relative overflow-hidden">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={8}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    prevEl: previewPrevRef.current,
                    nextEl: previewNextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = previewPrevRef.current;
                    swiper.params.navigation.nextEl = previewNextRef.current;
                  }}
                  onSwiper={(swiper) => {
                    previewSwiperRef.current = swiper;
                    setTimeout(() => {
                      if (swiper && previewPrevRef.current && previewNextRef.current) {
                        swiper.params.navigation.prevEl = previewPrevRef.current;
                        swiper.params.navigation.nextEl = previewNextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                      }
                    }, 0);
                  }}
                  className="program-preview-swiper h-full"
                >
                  {programPreviewImages.map((img) => (
                    <SwiperSlide key={img.id} className="h-full">
                      <div className="relative w-full h-full rounded-lg overflow-hidden">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* Navigation buttons for preview slider */}
                <button
                  ref={previewPrevRef}
                  className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-opacity"
                  aria-label="Previous image"
                >
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-white">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  ref={previewNextRef}
                  className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-opacity"
                  aria-label="Next image"
                >
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-white">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="flex justify-center">
              <GlobalArrowButton className="!bg-white !text-black"
                arrowClassName="!bg-[var(--button-red)]"
                arrowIconClassName="!text-white"
                textClassName="!text-black"
                >Discover Your Program</GlobalArrowButton>
              </div>
            </div>

            {/* Search input */}
            <div className="w-full lg:w-full max-w-[560px] py-1 sm:py-2 h-auto">
              <div className="flex items-center bg-[var(--light-gray)] rounded-lg px-3 sm:px-4 lg:px-5 py-3 sm:py-3.5 shadow-sm border border-gray-200">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search Programs...."
                  className="bg-transparent outline-none flex-1 text-[clamp(12px,2vw,25px)] font-plus-jakarta-sans font-medium text-black"
                />
                <button className="text-[var(--button-red)] ml-1 sm:ml-2" aria-label="search">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-[29px] lg:w-[29px]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cards row using Stack inside Swiper */}
        <div className="relative">
          {visiblePrograms.length > 0 ? (
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
                enabled: true,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current
                swiper.params.navigation.nextEl = nextRef.current
              }}
              onInit={(swiper) => {
                swiper.navigation.init()
                swiper.navigation.update()
              }}
              slidesPerView={1.05}
              spaceBetween={16}
              breakpoints={{
                640: { slidesPerView: 1.2, spaceBetween: 18 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              className="programs-swiper"
            >
              {visiblePrograms.map((p, idx) => (
                <SwiperSlide key={p.id || idx} className="py-2 sm:py-3">
                  {renderProgramCard(p)}
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="w-full bg-[var(--lite-sand)] border border-gray-200 rounded-lg p-6 text-center text-[var(--light-text-gray)]">
              No programs found for this search.
            </div>
          )}

          {/* Navigation Buttons - Bottom Right Corner */}
          <div className="absolute right-0 flex gap-2 sm:gap-3 z-20">
            <button
              ref={prevRef}
              className="programs-btn-prev w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white hover:text-[var(--button-red)] transition-colors"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              ref={nextRef}
              className="programs-btn-next w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white hover:text-[var(--button-red)] transition-colors"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <style jsx global>{`
            /* Hide default Swiper arrows, we use custom buttons */
            .programs-swiper .swiper-button-prev,
            .programs-swiper .swiper-button-next {
              display: none !important;
            }
          `}</style>
        </div>

        {/* Explore Programs Button */}
        <div className="relative flex items-center justify-center mt-4 px-2 sm:px-0">
          <GlobalArrowButton
            className="!bg-white !text-black shadow-none"
            arrowClassName="!bg-[var(--button-red)]"
            arrowIconClassName="!text-white"
            textClassName="!text-black text-xs sm:text-base"
          >
            Explore Programs
          </GlobalArrowButton>
        </div>
      </div>
    </section>
  )
}

export default Programs
