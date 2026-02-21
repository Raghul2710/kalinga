'use client'

import React, { useState, useRef, useEffect, useMemo } from 'react'
import Stack from '../gsap/Stack'
import LogoLoop from '../gsap/LogoLoop'
import SectionHeading from '../general/SectionHeading'

const logos = [
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/infosys.webp',
  // 'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/byjus.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/capgemini.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/airtel.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/amul.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/cipla.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/wipro.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/adani.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/bosch.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/biocon.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/apollo.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/asahi.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/axis.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/cognizant.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/suzuki.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/himalaya.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/decathlon.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/force.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/goorej.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/genpact.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/hdfc.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/jio.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/justdail.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/lg.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/nestle.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/sail.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/tata-motors.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/tech+mahindra.webp',
  'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ultratech.webp'
]

const Placements = ({ hideMarquee = false, hideMilestones = false, bgColor = "bg-[var(--light-gray)]", marginClassName = "-mb-28", placementData }) => {
  const stackRef = useRef(null)
  const sectionRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  // Extract data from placementData or use defaults - memoized to prevent recreation
  const placementInfo = useMemo(() => placementData?.placement_info?.[0] || null, [placementData?.placement_info])
  const placementStats = useMemo(() => placementData?.placement_statistics || [], [placementData?.placement_statistics])
  const placementPhotos = useMemo(() => placementData?.placement_student_photos || [], [placementData?.placement_student_photos])

  const [studentsPlaced, setStudentsPlaced] = useState(0)
  const [recruiters, setRecruiters] = useState(0)
  const [internships, setInternships] = useState(0)

  // Get statistics values - memoized to prevent recreation
  const getStatValue = React.useCallback((name) => {
    const stat = placementStats.find(s =>
      s.name?.toLowerCase().includes(name.toLowerCase())
    )
    return stat ? parseInt(stat.number) || 0 : 0
  }, [placementStats])

  // Use API images if available, otherwise fallback to default
  const placementImages = placementPhotos.length > 0
    ? placementPhotos.map(photo => photo.image).filter(Boolean)
    : [
      'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/placement1.webp',
      'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/placement2.webp',
      'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/placement3.webp',
      'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/placement4.webp',
      'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/placement5.webp',
      'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/placement6.webp',
      'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/place-1.png',
      'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/place-2.png',
      'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/place-3.png',
      'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/place-4.png',
      'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/place-5.png'
    ]

  // Get title and description from API or use defaults
  const title = placementInfo?.heading || "A Proven Placement Track Record"
  const description = placementInfo?.description || "Kalinga University has a strong placement ecosystem that bridges academic excellence with real-world opportunities. With structured industry-oriented training, internship programs, and campus placement drives, our graduates are building successful careers across industries worldwide."

  // Convert logo URLs to image elements for LogoLoop
  const logoLoopItems = logos.map((logo, index) => ({
    node: (
      <img
        src={logo}
        alt={`Company logo ${index + 1}`}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    ),
    title: `Company logo ${index + 1}`
  }))

  // Count-up animation function
  const animateValue = (start, end, duration, setter) => {
    const startTime = performance.now()
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(start + (end - start) * progress)
      setter(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }

  // Update stat values when placementData changes
  useEffect(() => {
    if (hasAnimated) {
      // If already animated, just set the values directly
      // Use API data if available, otherwise use default values
      // const studentsValue = getStatValue('students placed') || 8000
      const recruitersValue = getStatValue('corporate recruiters') || 400
      const internshipsValue = getStatValue('internships') || 1200

      // setStudentsPlaced(studentsValue)
      setRecruiters(recruitersValue)
      setInternships(internshipsValue)
    }
  }, [placementStats.length, hasAnimated, getStatValue])

  // Intersection Observer to trigger animation when section is in view
  useEffect(() => {
    if (hasAnimated || !sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            // Use API data if available, otherwise use default values
            // const studentsValue = getStatValue('students placed') || 8000
            const recruitersValue = getStatValue('corporate recruiters') || 400
            const internshipsValue = getStatValue('internships') || 1200

            // if (studentsValue > 0) {
            //   animateValue(0, studentsValue, 2000, setStudentsPlaced)
            // }
            if (recruitersValue > 0) {
              animateValue(0, recruitersValue, 2000, setRecruiters)
            }
            if (internshipsValue > 0) {
              animateValue(0, internshipsValue, 2000, setInternships)
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasAnimated, getStatValue])

  return (
    <>
      <section ref={sectionRef} className={`py-16 ${bgColor}`}>
        <div className="container mx-auto px-2">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 items-center md:items-center">
            {/* Left: title + stats */}
            <div className="w-full">

              <SectionHeading
                subtitle="Student Placements"
                title={title}

              />
              <p className="text-xs sm:text-sm md:text-[15px] text-gray-600 max-w-xl mb-4 sm:mb-5 lg:mb-6 font-plus-jakarta-sans leading-relaxed sm:leading-normal lg:leading-[25px]">
                {description}
              </p>

              {!hideMilestones && (
                <div className="grid grid-cols-2 sm:flex sm:flex-row items-start gap-4 sm:gap-3 lg:gap-5 text-gray-800">
                  {studentsPlaced > 0 && (
                    <>
                      <div className="w-full sm:w-auto sm:flex-1">
                        <h3 className="!text-3xl sm:!text-[35px] md:!text-[40px] text-[var(--button-red)] mb-1 sm:mb-2">{studentsPlaced.toLocaleString()} +</h3>
                        <h6 className="text-sm sm:text-base text-[var(--foreground)] font-stix">Students Placed</h6>
                      </div>
                      {(recruiters > 0 || internships > 0) && <div className="hidden sm:block self-stretch border-r border-gray-500" />}
                    </>
                  )}

                  {recruiters > 0 && (
                    <>
                      <div className="w-full sm:w-auto sm:flex-1">
                        <h3 className="!text-3xl sm:!text-[35px] md:!text-[40px] text-[var(--button-red)] mb-1 sm:mb-2">{recruiters.toLocaleString()} +</h3>
                        <h6 className="text-sm sm:text-base text-[var(--foreground)] font-stix">Corporate Recruiters</h6>
                      </div>
                      {internships > 0 && <div className="hidden sm:block self-stretch border-r border-gray-500" />}
                    </>
                  )}

                  {internships > 0 && (
                    <div className="w-full sm:w-auto sm:flex-1 col-span-2 sm:col-span-1">
                      <h3 className="!text-3xl sm:!text-[35px] md:!text-[40px] text-[var(--button-red)] mb-1 sm:mb-2">{internships.toLocaleString()} +</h3>
                      <h6 className="text-sm sm:text-base text-[var(--foreground)] font-stix">Internships Offered</h6>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right: Stack card component */}
            <div className={`flex justify-center md:justify-end mt-6 md:mt-0 z-2 ${marginClassName}`}>
              <div className="w-full max-w-[530px]">
                <div style={{ width: '100%', height: '480px' }}>
                  <Stack
                    ref={stackRef}
                    randomRotation={false}
                    sensitivity={180}
                    sendToBackOnClick={false}
                    autoplay={true}
                    cards={placementImages.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`placement-${i + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ))}
                  />
                </div>
                <div className="flex justify-center gap-3 -mt-10 mb-10 z-10 relative">
                  <button
                    type="button"
                    onClick={() => stackRef.current?.triggerNext('left')}
                    className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-[var(--button-red)] text-white flex items-center justify-center hover:bg-[#A2A2A2] transition-colors shadow-md"
                    aria-label="Previous placement"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => stackRef.current?.triggerNext('right')}
                    className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-[var(--button-red)] text-white flex items-center justify-center hover:bg-[#A2A2A2] transition-colors shadow-md"
                    aria-label="Next placement"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logos strip */}
        {!hideMarquee && (
          <div className="mt-20 lg:mt-8 px-2">
            <div className="bg-[var(--dark-blue)] py-4 sm:py-5 md:py-6 lg:py-8 items-center justify-center overflow-hidden relative w-full h-auto min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:h-[200px] rounded-xl flex">
              {/* Text stacked above logos */}
              <div className="flex flex-col items-center text-left gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full">
                <h5
                  className="font-plus-jakarta-sans text-sm sm:text-base md:text-lg leading-tight sm:leading-[25px] text-white text-left w-full px-4 sm:px-6 lg:px-12"
                >
                  {placementInfo?.recruiters_logo_slider_overview || "Our Top Recruiters"}
                </h5>

                <div className="w-full overflow-hidden relative px-2">
                  <LogoLoop
                    logos={logoLoopItems}
                    speed={30}
                    direction="left"
                    logoHeight={70}
                    gap={16}
                    pauseOnHover={true}
                    ariaLabel="Company recruiters logos"
                    renderItem={(item, key) => (
                      <div className="flex-shrink-0 bg-white rounded-lg px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 shadow-sm text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-medium text-gray-700 flex items-center justify-center w-[60px] h-[45px] sm:w-[70px] sm:h-[50px] md:w-[80px] md:h-[55px] lg:w-[90px] lg:h-[60px] xl:w-[110px] xl:h-[70px]"
                        style={{
                          borderRadius: '10px'
                        }}
                      >
                        {item.node}
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Placements
