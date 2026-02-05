'use client'

import React, { useState, useRef, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import GlobalArrowButton from '../general/global-arrow_button'
import GlobalRedPlainButton from '../general/global-red_plain_button'
import SectionHeading from '../general/SectionHeading'
import { renderProgramCard } from '../general/program-cards-slider'
import { fetchAllDepartmentsCourses, fetchAllCourseAbout } from '@/app/lib/api'
import { rankAndSortPrograms } from "@/app/lib/search-utils";

// Helper function to format course name (BSE, BTech format - uppercase first few letters, then lowercase)
const formatCourseName = (name) => {
  if (!name) return ""
  const match = name.match(/^([A-Za-z]+)(.*)$/)
  if (match) {
    const firstPart = match[1].toUpperCase()
    const rest = match[2]
    return firstPart + rest
  }
  return name
}

// Helper function to get study level from program_type
const getStudyLevel = (programType) => {
  if (!programType) return "UG"
  const type = programType.toLowerCase()
  if (type === "pg" || type === "postgraduate") return "PG"
  if (type === "phd" || type === "doctorate") return "Ph.D"
  if (type === "diploma") return "Diploma"
  return "UG"
}

// Helper function to format duration
const formatDuration = (course) => {
  if (!course) return "3 Year"
  const duration = course.duration
  const durationNum = typeof duration === 'number' ? duration : parseInt(duration)
  let formattedDuration = "3 Year"

  if (!isNaN(durationNum)) {
    formattedDuration = `${durationNum} Year${durationNum > 1 ? 's' : ''}`
  } else if (duration && typeof duration === 'string') {
    formattedDuration = duration
  }

  return formattedDuration
}

// Diverse placeholder images to be used sequentially
const PROGRAM_PLACEHOLDERS = [
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/computer.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/information.png',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/MBA.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/Phd-mba.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/computer.webp', // Add more if available, otherwise cycle
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/information.png'
]

const Programs = () => {
  const [activeTab, setActiveTab] = useState('UG')
  const [query, setQuery] = useState('')
  const [iamA, setIamA] = useState('')
  const [iamLookingFor, setIamLookingFor] = useState('')
  const [allCourses, setAllCourses] = useState([])
  const [courseAboutMap, setCourseAboutMap] = useState(new Map())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  // Fetch all courses and course-about data from API
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        setError(null)

        // Fetch all courses and course-about data in parallel
        const [coursesResponse, courseAboutData] = await Promise.all([
          fetchAllDepartmentsCourses(null),
          fetchAllCourseAbout().catch(err => {
            console.warn('Failed to fetch course-about data:', err)
            return []
          })
        ])

        // Create a map of course ID to image URL
        // Handle multiple entries per course by keeping the first one
        const aboutMap = new Map()
        if (Array.isArray(courseAboutData)) {
          courseAboutData.forEach(item => {
            if (item.course && item.image) {
              // Convert course ID to number for consistent matching
              const courseId = typeof item.course === 'number' ? item.course : parseInt(item.course)

              if (!aboutMap.has(courseId) && item.image) {
                aboutMap.set(courseId, item.image)
              }
            }
          })
        }
        setCourseAboutMap(aboutMap)

        if (coursesResponse && coursesResponse.courses) {
          const coursesData = Array.isArray(coursesResponse.courses)
            ? coursesResponse.courses.map(course => ({
              ...course,
              departmentId: course.department?.id || course.departmentId,
              departmentName: course.department?.name || course.departmentName || '',
              departmentSlug: course.department?.slug || course.departmentSlug || '',
            }))
            : []

          setAllCourses(coursesData)
        } else {
          setAllCourses([])
        }
      } catch (err) {
        console.error('Failed to load programs:', err)
        setError(err.message || 'Failed to load programs')
        setAllCourses([])
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  // Handle form submission - filter programs based on selection
  const handleDiscoverProgram = () => {
    if (iamLookingFor) {
      // Map form selection to program type
      const typeMap = {
        'ug': 'UG',
        'pg': 'PG',
        'phd': 'Ph.D',
        'diploma': 'Diploma'
      }
      const selectedType = typeMap[iamLookingFor]
      if (selectedType) {
        setActiveTab(selectedType)
        // Scroll to programs section
        setTimeout(() => {
          const programsSection = document.querySelector('.programs-swiper')
          if (programsSection) {
            programsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
    }
  }

  // Filter and format programs based on active tab and search query
  const visiblePrograms = useMemo(() => {
    if (loading) return []

    let filtered = allCourses
    const isSearchActive = query.trim().length > 0;

    // Only apply Level filter if search is NOT active
    if (!isSearchActive) {
      // Filter by study level (active tab)
      if (activeTab && activeTab !== 'All') {
        filtered = filtered.filter(course => {
          const programType = course.program_type
          if (!programType) {
            return activeTab === "UG"
          }
          const level = getStudyLevel(programType)
          return level === activeTab
        })
      }
    } else {
      // Global search mode: Search across all programs Irrespective of filters
      filtered = rankAndSortPrograms(filtered, query, { includeDept: true });
    }

    // Format courses for renderProgramCard
    let placeholderCounter = 0
    return filtered.map(course => {
      const courseName = course.name || ""
      const programType = course.program_type
      const mappedLevel = getStudyLevel(programType)
      const courseSlug = course.slug || course.name?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")

      // Get image from course-about API, fallback to sequential placeholder
      const courseId = typeof course.id === 'number' ? course.id : parseInt(course.id)
      let courseImage = courseAboutMap.get(courseId)

      if (!courseImage) {
        // Use sequential placeholder if API image is missing
        courseImage = PROGRAM_PLACEHOLDERS[placeholderCounter % PROGRAM_PLACEHOLDERS.length]
        placeholderCounter++
      }

      return {
        id: course.id,
        title: courseName,
        type: mappedLevel,
        img: courseImage,
        summary: `Explore ${courseName} program with comprehensive curriculum and industry exposure.`,
        scholarships: 'Check eligibility',
        courseSlug: courseSlug,
        duration: formatDuration(course)
      }
    })
  }, [allCourses, activeTab, query, loading, courseAboutMap])


  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-2 md:pt-16">
        {/* Two column layout */}
        <div className="mb-4 sm:mb-5 lg:mb-6 text-center">
          <SectionHeading
            subtitle="Explore Our Programs"
            title="Learn Without Limits. Grow Without Boundaries."
          />
          <p className="text-[var(--light-text-gray)] text-sm md:text-sm max-w-3xl mx-auto">Explore future-focused programs that combine academic excellence with hands-on industry exposure, preparing you for success in a connected, global world.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-6 sm:mb-8 lg:mb-10 items-center">
          {/* Left column: Text and Tabs */}
          <div className="flex flex-col justify-around">
            {/* Header text */}
            <div className="mb-4 sm:mb-5 lg:mb-6 hidden">
              <SectionHeading
                subtitle="Explore Our Programs"
                title="Learn Without Limits. Grow Without Boundaries."
              />
              <p className="text-[var(--light-text-gray)] text-sm md:text-sm max-w-3xl mx-auto">Explore future-focused programs that combine academic excellence with hands-on industry exposure, preparing you for success in a connected, global world.</p>
            </div>

            {/* Tabs */}
            <div className={`flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-2 transition-opacity duration-200 ${query.trim().length > 0 ? 'opacity-50 grayscale' : ''}`}>
              <button
                onClick={() => setActiveTab('Diploma')}
                disabled={query.trim().length > 0}
                className={`font-stix px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg transition-all text-[clamp(20px,4vw,30px)] leading-tight ${activeTab === 'Diploma' ? 'bg-[var(--button-red)] text-white shadow-md' : 'text-[var(--dark-blue)] hover:bg-gray-100'} ${query.trim().length > 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                Diploma
              </button>
              <button
                onClick={() => setActiveTab('UG')}
                disabled={query.trim().length > 0}
                className={`font-stix px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg transition-all text-[clamp(20px,4vw,30px)] leading-tight ${activeTab === 'UG' ? 'bg-[var(--button-red)] text-white shadow-md' : 'text-[var(--dark-blue)] hover:bg-gray-100'} ${query.trim().length > 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                UG
              </button>
              <button
                onClick={() => setActiveTab('PG')}
                disabled={query.trim().length > 0}
                className={`font-stix px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg transition-all text-[clamp(20px,4vw,30px)] leading-tight ${activeTab === 'PG' ? 'bg-[var(--button-red)] text-white shadow-md' : 'text-[var(--dark-blue)] hover:bg-gray-100'} ${query.trim().length > 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                PG
              </button>
              <button
                onClick={() => setActiveTab('Ph.D')}
                disabled={query.trim().length > 0}
                className={`font-stix px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg transition-all text-[clamp(20px,4vw,30px)] leading-tight ${activeTab === 'Ph.D' ? 'bg-[var(--button-red)] text-white shadow-md' : 'text-[var(--dark-blue)] hover:bg-gray-100'} ${query.trim().length > 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                Ph.D
              </button>
            </div>
          </div>

          {/* Right column: Form and Search */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 items-start lg:items-end w-full lg:w-auto">
            {/* Red form card */}
            <div className="hidden bg-[var(--dark-blue)] p-6 sm:p-8 lg:p-10 shadow-xl w-full lg:w-full max-w-[560px] h-auto min-h-[230px] sm:min-h-[250px] lg:min-h-[300px] rounded-[10px]">
              <div className="space-y-6 sm:space-y-8">
                {/* I am a */}
                <div className="flex items-center gap-3 sm:gap-4 relative">
                  <span className="text-white font-stix text-2xl sm:text-3xl lg:text-4xl whitespace-nowrap">I am a</span>
                  <div className="flex-1 relative">
                    <select
                      value={iamA}
                      onChange={(e) => setIamA(e.target.value)}
                      className="w-full bg-transparent text-white font-stix text-lg sm:text-xl lg:text-2xl appearance-none focus:outline-none cursor-pointer border-b-2 border-white pb-2 pr-8"
                    >
                      <option value="" className="text-gray-400 bg-[var(--button-red)]">Please select</option>
                      <option value="student" className="text-white bg-[var(--button-red)]">Student</option>
                      <option value="professional" className="text-white bg-[var(--button-red)]">Professional</option>
                      <option value="parent" className="text-white bg-[var(--button-red)]">Parent</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-white font-stix text-4xl sm:text-5xl lg:text-6xl opacity-80">&</span>
                </div>

                {/* I am looking for */}
                <div className="flex items-center gap-3 sm:gap-4 relative">
                  <span className="text-white font-stix text-2xl sm:text-3xl lg:text-4xl whitespace-nowrap">I am looking for</span>
                  <div className="flex-1 relative">
                    <select
                      value={iamLookingFor}
                      onChange={(e) => setIamLookingFor(e.target.value)}
                      className="w-full bg-transparent text-white font-stix text-lg sm:text-xl lg:text-2xl appearance-none focus:outline-none cursor-pointer border-b-2 border-white pb-2 pr-8"
                    >
                      <option value="" className="text-gray-400 bg-[var(--button-red)]">Please select</option>
                      <option value="ug" className="text-white bg-[var(--button-red)]">UG Programs</option>
                      <option value="pg" className="text-white bg-[var(--button-red)]">PG Programs</option>
                      <option value="phd" className="text-white bg-[var(--button-red)]">Ph.D Programs</option>
                      <option value="diploma" className="text-white bg-[var(--button-red)]">Diploma Programs</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-6 sm:mt-8">
                <GlobalArrowButton
                  className="!bg-white !text-black"
                  arrowClassName="!bg-[var(--button-red)]"
                  arrowIconClassName="!text-white"
                  textClassName="!text-black"
                  onClick={handleDiscoverProgram}
                >
                  Discover Your Program
                </GlobalArrowButton>
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
          {loading ? (
            <div className="w-full bg-[var(--lite-sand)] border border-gray-200 rounded-lg p-6 text-center text-[var(--light-text-gray)]">
              Loading programs...
            </div>
          ) : error ? (
            <div className="w-full bg-[var(--lite-sand)] border border-gray-200 rounded-lg p-6 text-center text-[var(--light-text-gray)]">
              {error}
            </div>
          ) : visiblePrograms.length > 0 ? (
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
          <Link href="/admissions">
            <GlobalArrowButton
              className="!bg-white !text-black shadow-none"
              arrowClassName="!bg-[var(--button-red)]"
              arrowIconClassName="!text-white"
              textClassName="!text-black text-xs sm:text-base"
            >
              Explore Programs
            </GlobalArrowButton>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Programs
