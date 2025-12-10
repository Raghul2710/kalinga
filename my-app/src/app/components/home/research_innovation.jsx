'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import GlobalArrowButton from '../general/global-arrow_button'

export default function ResearchInnovation() {
  const sectionRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [researchPublications, setResearchPublications] = useState(0)
  const [startups, setStartups] = useState(0)
  const [researchLabs, setResearchLabs] = useState(0)
  const [citations, setCitations] = useState(0)

  const stats = [
    { label: 'Research Publications', value: '3360+', variant: 'orange', targetValue: 3360, setter: setResearchPublications },
    { label: 'Startups', value: '6+', variant: 'white', targetValue: 6, setter: setStartups },
    { label: 'Research Labs', value: '90+', variant: 'white', targetValue: 90, setter: setResearchLabs },
    { label: 'Citations', value: '2136 +', variant: 'white', targetValue: 2136, setter: setCitations },
  ]

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

  // Intersection Observer to trigger animation when section is in view
  useEffect(() => {
    if (hasAnimated || !sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateValue(0, 3360, 2000, setResearchPublications)
            animateValue(0, 6, 2000, setStartups)
            animateValue(0, 90, 2000, setResearchLabs)
            animateValue(0, 2136, 2000, setCitations)
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
  }, [hasAnimated])

  // Helper function to get the animated value with suffix
  const getAnimatedValue = (stat) => {
    const animatedValues = {
      'Research Publications': researchPublications,
      'Startups': startups,
      'Research Labs': researchLabs,
      'Citations': citations,
    }
    const animatedValue = animatedValues[stat.label]
    // Check if the original value has a space before the +
    const hasSpace = stat.value.includes(' +')
    return `${animatedValue.toLocaleString()}${hasSpace ? ' +' : '+'}`
  }

  return (
    <section ref={sectionRef} className="py-16 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 lg:px-5">
        {/* Top section: Text and Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center mb-5">
          {/* Left content */}
          <div className="pt-4 sm:pt-6 md:pt-12">
            <h5 className="text-sm sm:text-base md:!text-[25px] text-[var(--button-red)] mb-2 sm:mb-2.5 lg:mb-3 font-plus-jakarta-sans font-medium leading-tight sm:leading-[25px]">
              Research At Kalinga
            </h5>
            <h2 className="font-stix text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight mb-4 sm:mb-6 text-[var(--foreground)]">
              Lorem ipsum dolor sit amet, consectetur
            </h2>
            <div className="mt-4 sm:mt-6">
              <GlobalArrowButton >
                Learn More
              </GlobalArrowButton>
            </div>
          </div>

          {/* Right side with image */}
          <div className="relative flex justify-center md:justify-end items-center mt-6 md:mt-0">
            <div className="relative w-full h-[400px] rounded-[10px] overflow-hidden shadow-2xl">
              <Image 
                src="https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/staff-guiding.png"
                alt="Research & Innovation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom section: Statistics Cards in Dark Blue Container */}
        <div className="bg-[var(--dark-blue)] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="rounded-xl p-4 sm:p-4 flex flex-col justify-between transition-colors duration-300 bg-[var(--light-gray)] hover:bg-[var(--card-skin)]"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-stix font-semibold text-[var(--foreground)] mb-4">
                    {stat.label}
                  </h3>
                  <div className="w-full h-px bg-[var(--foreground)] mb-4"></div>
                </div>
                <div>
                  <h2 className="font-stix font-bold text-[var(--foreground)]">
                    {getAnimatedValue(stat)}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
