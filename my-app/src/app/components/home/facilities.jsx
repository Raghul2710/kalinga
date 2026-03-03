'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import SectionHeading from '../../components/general/SectionHeading'

export default function Facilities() {
  const SLIDE_DURATION = 4000
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)
  const slideStartRef = useRef(Date.now())
  const rafRef = useRef(null)

  const facilities = [
    {
      id: 1,
      title: 'Library',
      image: 'https://cdn.kalingauniversity.ac.in/facilities/library-new.webp',
      description: 'Quiet, inviting, and rich with resources — our library is a favorite spot for learners. With thousands of books, journals, digital materials, and peaceful study corners, it encourages deep focus and academic excellence. It’s where ideas grow and curiosity thrives.'
    },
    {
      id: 2,
      title: 'Canteen',
      image: 'https://cdn.kalingauniversity.ac.in/facilities/canteen+mess.webp',
      description: 'The KU canteen offers more than just food — it offers comfort. Fresh, hygienic meals and a variety of snacks keep students energized throughout the day. Whether you’re grabbing a quick bite between classes or relaxing with friends, the canteen is a space everyone loves.'
    },
    {
      id: 3,
      title: 'Sports',
      image: 'https://cdn.kalingauniversity.ac.in/facilities/DSC00047.webp',
      description: 'Sports at KU go beyond just play - they build teamwork, discipline, and confidence. With spacious grounds, indoor arenas, and trained coaches, students get the perfect space to unwind, compete, and stay active. Whether you\'re into football, cricket, athletics, or indoor games, there\'s a place for everyone.'
    },
    {
      id: 4,
      title: 'Gym',
      image: 'https://cdn.kalingauniversity.ac.in/facilities/gym.webp',
      description: 'Our campus gym helps students prioritize both physical and mental well-being. Equipped with modern machines and guided by trained staff, it offers a supportive environment for workouts, fitness routines, and stress relief after a busy day of classes.'
    },
    {
      id: 5,
      title: 'Labs',
      image: 'https://cdn.kalingauniversity.ac.in/facilities/labotories.webp',
      description: 'Learning at KU is deeply practical. Our modern, well-equipped laboratories allow students to experiment, explore, and put theory into action. Every lab session is guided by experienced faculty, helping students build confidence, clarity, and industry-ready skills.'
    }
    ,
    {
      id: 6,
      title: 'Hostel',
      image: 'https://cdn.kalingauniversity.ac.in/facilities/hostel.webp',
      description: 'Our hostels are designed to feel like a second home. Clean, well-furnished rooms, round-the-clock security, and a friendly residential atmosphere ensure comfort and safety. Students get the perfect blend of privacy, community living, and support to focus on their academic journey without worries.'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % facilities.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + facilities.length) % facilities.length)
  }

  const getVisibleSlides = () => {
    const slides = []
    for (let i = 0; i < facilities.length; i++) {
      slides.push(facilities[i])
    }
    return slides
  }

  // Autoplay with progress tracking based on elapsed time to avoid skipping slides
  useEffect(() => {
    const animate = () => {
      const elapsed = Date.now() - slideStartRef.current
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100)
      setProgress(pct)

      if (elapsed >= SLIDE_DURATION) {
        slideStartRef.current = Date.now()
        setProgress(0)
        setCurrentSlide((prevSlide) => (prevSlide + 1) % facilities.length)
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [facilities.length, SLIDE_DURATION])

  // When slide changes (manual or autoplay), restart the timer baseline
  useEffect(() => {
    slideStartRef.current = Date.now()
    setProgress(0)
  }, [currentSlide])

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .facilities-title-text {
          font-size: 30px !important;
        }
        @media (min-width: 640px) {
          .facilities-title-text {
            font-size: 40px !important;
          }
        }
        @media (min-width: 768px) {
          .facilities-title-text {
            font-size: 50px !important;
          }
        }
        @media (min-width: 1024px) {
          .facilities-title-text {
            font-size: 100px !important;
          }
        }
        @media (min-width: 1280px) {
          .facilities-title-text {
            font-size: 100px !important;
          }
        }
        .facilities-image-slider::-webkit-scrollbar {
          display: none;
        }
        .facilities-image-slider {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .facility-thumbnail {
          width: calc((100% - 8px) / 3);
          min-width: calc((100% - 8px) / 3);
        }
        @media (min-width: 640px) {
          .facility-thumbnail {
            width: calc((100% - 16px) / 5);
            min-width: calc((100% - 16px) / 5);
          }
        }
      `}} />
      <section suppressHydrationWarning={true}
        className="relative w-full py-8 sm:py-12 md:py-16"
        aria-label="Facilities section"
      >
        <div suppressHydrationWarning={true} className="px-2">
          {/* Main content area with selected facility */}
          <div
            suppressHydrationWarning={true}
            className="relative w-full rounded-xl sm:rounded-2xl overflow-visible shadow-lg h-[400px] sm:h-[400px] md:h-[580px] lg:h-[648px]"
            style={{
              backgroundImage: `url(${facilities[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
              transition: 'background-image 0.6s ease-in-out',
              imageRendering: 'crisp-edges',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
            }}
          >
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/60 rounded-2xl transition-opacity duration-300"></div>
            <div suppressHydrationWarning={true} className="container mx-auto px-5" >
              <div suppressHydrationWarning={true} className="relative z-10 h-full py-4 sm:py-6 md:py-8 lg:py-12 xl:py-30 flex flex-col justify-between">
                {/* Top Section - Heading */}
                <div className="text-white">
                  <div className="sm:-mt-6 md:-mt-8 lg:-mt-10 xl:-mt-12">
                    <SectionHeading title="Facilities" subtitle="Life at Kalinga — Beyond Classrooms" titleClassName="text-white" subtitleClassName="text-white" />
                  </div>
                </div>

                {/* Bottom Section - Counter, Title, and Description */}
                <div className="text-white mt-auto md:!mt-[85px]">
                  {/* Slide Counter */}
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <span className="transition-all duration-300 text-lg sm:text-xl md:text-2xl lg:!text-3xl xl:md:text-[30px] text-white font-plus-jakarta-sans font-normal leading-tight sm:leading-[47px] text-left block">
                      0{currentSlide + 1}
                      <span className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] font-plus-jakarta-sans font-normal leading-tight sm:leading-[47px] text-left">
                        /0{facilities.length}
                      </span>
                    </span>
                  </div>

                  {/* Title and Description */}
                  <div className="flex md:items-end items-start flex-col md:flex-row gap-4 md:gap-8">
                    <div className="flex-grow">
                      <h3 className="facilities-title-text font-light font-stix leading-none tracking-tight capitalize transition-all duration-500 ease-in-out text-white" style={{ willChange: 'contents' }}>{facilities[currentSlide].title}</h3>
                    </div>
                    <div className="flex flex-col justify-end">
                      <p className="max-w-full lg:max-w-md text-[11px] sm:text-xs md:text-sm lg:text-[14px] font-plus-jakarta-sans leading-relaxed sm:leading-[25px] duration-300 z-10 !text-white">
                        {facilities[currentSlide].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Horizontal scrollable image slider - shows 3 on mobile, 5 on tablet+ */}
              {/* On mobile: positioned below, on desktop: overlapping inside image */}
              {/* Desktop overlay slider */}
              <div className="hidden lg:block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:mt-0 lg:-translate-y-16 xl:-translate-y-20 lg:-bottom-12 xl:-bottom-16 lg:z-30 lg:w-[90%]">
                <div
                  suppressHydrationWarning={true}
                  className="flex gap-1 sm:gap-1.5 md:gap-2 overflow-x-auto pb-2 facilities-image-slider"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch'
                  }}
                >
                  {getVisibleSlides().map((facility, idx) => {
                    const isActive = idx === currentSlide
                    const progressForBar = idx < currentSlide ? 100 : idx === currentSlide ? progress : 0
                    return (
                      <div
                        suppressHydrationWarning={true}
                        key={facility.id}
                        className="flex flex-col gap-0.5 sm:gap-1 flex-shrink-0 facility-thumbnail"
                      >
                        {/* progress accent bar synced with slide timing */}
                        <div className="w-full h-0.5 sm:h-1 md:h-2 mb-0.5 sm:mb-1 bg-white/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-500"
                            style={{
                              width: `${progressForBar}%`,
                              willChange: 'width',
                              transform: 'translateZ(0)',
                              transition: progressForBar === 0 ? 'width 0ms' : 'none'
                            }}
                          />
                        </div>
                        <button
                          onClick={() => {
                            slideStartRef.current = Date.now()
                            setCurrentSlide(idx)
                            setProgress(0)
                          }}
                          className={`relative flex-shrink-0 rounded-md sm:rounded-lg overflow-hidden transition-all duration-500 ease-out w-full h-12 sm:h-14 md:h-18 lg:h-24 xl:h-28 hover:opacity-90 hover:scale-105 shadow-md sm:shadow-lg ${isActive ? 'ring-1 sm:ring-2 ring-white scale-90' : ''
                            }`}
                          aria-label={facility.title}
                        >
                          <div className="relative w-full h-full">
                            <Image
                              src={facility.image}
                              alt={facility.title}
                              fill
                              sizes="(max-width: 1024px) 33vw, 20vw"
                              className="object-cover"
                              loading="eager"
                            />
                            <div className="absolute inset-0 bg-black/40"></div>
                          </div>
                          {isActive && (
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-1 sm:p-1.5 md:p-2 transition-opacity duration-300">
                              <div className="text-white text-[9px] sm:text-[10px] md:text-xs font-medium text-center capitalize leading-tight">{facility.title}</div>
                            </div>
                          )}
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>
              {/* Mobile slider placed below the panel */}
              <div className="block lg:hidden w-full pt-8">
                <div
                  className="flex gap-1 sm:gap-1.5 md:gap-2 overflow-x-auto pb-2 facilities-image-slider"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch'
                  }}
                >
                  {getVisibleSlides().map((facility, idx) => {
                    const isActive = idx === currentSlide
                    const progressForBar = idx < currentSlide ? 100 : idx === currentSlide ? progress : 0
                    return (
                      <div
                        key={facility.id}
                        className="flex flex-col gap-0.5 sm:gap-1 flex-shrink-0 facility-thumbnail"
                      >
                        {/* progress accent bar synced with slide timing */}
                        <div className="w-full h-0.5 sm:h-1 md:h-2 mb-0.5 sm:mb-1 bg-white/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-500"
                            style={{
                              width: `${progressForBar}%`,
                              willChange: 'width',
                              transform: 'translateZ(0)',
                              transition: progressForBar === 0 ? 'width 0ms' : 'none'
                            }}
                          />
                        </div>
                        <button
                          onClick={() => {
                            slideStartRef.current = Date.now()
                            setCurrentSlide(idx)
                            setProgress(0)
                          }}
                          className={`relative flex-shrink-0 rounded-md sm:rounded-lg overflow-hidden transition-all duration-500 ease-out w-full h-12 sm:h-14 md:h-18 lg:h-24 xl:h-28 hover:opacity-90 hover:scale-105 shadow-md sm:shadow-lg ${isActive ? 'ring-1 sm:ring-2 ring-white scale-105' : ''
                            }`}
                          aria-label={facility.title}
                        >
                          <div className="relative w-full h-full">
                            <Image
                              src={facility.image}
                              alt={facility.title}
                              fill
                              sizes="(max-width: 1024px) 33vw, 20vw"
                              className="object-cover"
                              loading="eager"
                            />
                            <div className="absolute inset-0 bg-black/40"></div>
                          </div>
                          {isActive && (
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-1 sm:p-1.5 md:p-2 transition-opacity duration-300">
                              <div className="text-white text-[9px] sm:text-[10px] md:text-xs font-medium text-center capitalize leading-tight">{facility.title}</div>
                            </div>
                          )}
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
