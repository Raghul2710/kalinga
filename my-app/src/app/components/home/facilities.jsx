'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

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
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/library.webp',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    { 
      id: 2, 
      title: 'study room', 
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo'
    },
    { 
      id: 3, 
      title: 'Sports', 
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    { 
      id: 4, 
      title: 'Classroom', 
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    { 
      id: 5, 
      title: 'Laboratories', 
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/library.webp',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    { 
      id: 6, 
      title: 'Laboratories', 
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/library.webp',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
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
      <style dangerouslySetInnerHTML={{__html: `
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
      <section
        className="relative w-full py-8 sm:py-12 md:py-16"
        aria-label="Facilities section"
      >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* Main content area with selected facility */}
        <div
          className="relative w-full rounded-xl sm:rounded-2xl overflow-visible shadow-lg h-[600px] sm:h-[500px] md:h-[580px] lg:h-[648px]"
        style={{
          backgroundImage: `url(${facilities[currentSlide].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-start h-full py-4 sm:py-6 md:py-8 lg:py-12 xl:py-20">
          {/* Left content */}
          <div className="text-white px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 pt-2 sm:pt-4 md:pt-6 lg:pt-8 space-y-3 sm:space-y-4 md:space-y-6 relative flex flex-col h-full">
            <div className="sm:-mt-6 md:-mt-8 lg:-mt-10 xl:-mt-12">
              {/* <div className="w-12 h-1 bg-orange-500 mb-4"></div> */}
              <h6 className="text-white mb-3 sm:mb-5 md:mb-7 !text-lg sm:!text-xl md:!text-[25px] font-plus-jakarta-sans">Facilities</h6>
              <h2 className="font-stix text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[50px] leading-tight">Lorem ipsum dolor sit amet, consectetur</h2>
            </div>

            <div className="flex flex-col justify-around flex-grow pb-4 sm:pb-6 md:pb-8 lg:pb-12">
              <div className="relative">
                <span className="transition-all duration-300 text-lg sm:text-xl md:text-2xl lg:!text-3xl xl:md:text-[30px] font-plus-jakarta-sans font-normal leading-tight sm:leading-[47px] text-left mb-4 sm:mb-6 md:mb-8 lg:mb-10 block -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10">
                  0{currentSlide + 1}
                  <span className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] font-plus-jakarta-sans font-normal leading-tight sm:leading-[47px] text-left">
                    /0{facilities.length}
                  </span>
                </span>
                <h3 className="facilities-title-text font-light font-stix leading-none tracking-tight capitalize transition-all duration-500 ease-in-out" style={{ willChange: 'contents' }}>{facilities[currentSlide].title}</h3>
              </div>
            </div>
          </div>

          {/* Right column with description text */}
          <div className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 text-white flex flex-col justify-end h-full pb-4 sm:pb-6 md:pb-8 lg:pb-12">
            <p className="max-w-full lg:max-w-md text-[11px] sm:text-xs md:text-sm lg:text-[14px] font-extralight font-plus-jakarta-sans leading-relaxed sm:leading-[25px] mb-4 sm:mb-6 md:mb-8 lg:mb-10 transition-opacity duration-300">
              {facilities[currentSlide].description}
            </p>
          </div>
        </div>

        {/* Horizontal scrollable image slider - shows 3 on mobile, 5 on tablet+ */}
        {/* On mobile: positioned below, on desktop: overlapping inside image */}
        <div className="static lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 mt-4 lg:mt-0 lg:-translate-y-16 xl:-translate-y-20 lg:-bottom-12 xl:-bottom-16 z-20 w-full lg:w-[90%]">
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
                      className="h-full bg-yellow-500 transition-[width] duration-100 ease-linear"
                      style={{ width: `${progressForBar}%` }}
                    />
                  </div>
                  <button 
                    onClick={() => {
                      slideStartRef.current = Date.now()
                      setCurrentSlide(idx)
                      setProgress(0)
                    }}
                    className={`relative flex-shrink-0 rounded-md sm:rounded-lg overflow-hidden transition-all duration-300 w-full h-12 sm:h-14 md:h-18 lg:h-24 xl:h-28 hover:opacity-90 hover:scale-105 shadow-md sm:shadow-lg ${
                      isActive ? 'ring-1 sm:ring-2 ring-white scale-105' : ''
                    }`}
                    aria-label={facility.title}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={facility.image}
                        alt={facility.title}
                        fill
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
    </section>
    </>
  )
}
