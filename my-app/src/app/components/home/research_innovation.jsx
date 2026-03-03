'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import GlobalArrowButton from '../general/global-arrow_button'
import SectionHeading from '../general/SectionHeading'

export default function ResearchInnovation() {
  const sectionRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [researchPublications, setResearchPublications] = useState(0)
  const [startups, setStartups] = useState(0)
  const [researchLabs, setResearchLabs] = useState(0)
  const [citations, setCitations] = useState(0)
  const [patents, setPatents] = useState(0)
  const [hIndex, setHIndex] = useState(0)

  const stats = [
    { label: 'Research Publications', value: '3360+', variant: 'white', targetValue: 3360, setter: setResearchPublications },
    { label: 'Startups', value: '6+', variant: 'white', targetValue: 6, setter: setStartups },
    { label: 'Research Labs', value: '90+', variant: 'white', targetValue: 90, setter: setResearchLabs },
    { label: 'Citations', value: '2136+', variant: 'white', targetValue: 2136, setter: setCitations },
    { label: 'Patents', value: '510+', variant: 'white', targetValue: 510, setter: setPatents },
    { label: 'H-Index', value: '19+', variant: 'white', targetValue: 19, setter: setHIndex },
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
            stats.forEach(stat => {
              animateValue(0, stat.targetValue, 2000, stat.setter)
            })
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
      'Patents': patents,
      'H-Index': hIndex,
    }
    const animatedValue = animatedValues[stat.label]
    // Check if the original value has a space before the +
    const hasSpace = stat.value.includes(' +')
    return `${(animatedValue ?? 0).toLocaleString()}${hasSpace ? ' +' : '+'}`
  }

  return (
    <section ref={sectionRef} className="py-16 bg-white overflow-x-hidden" suppressHydrationWarning={true}>
      <div className="container mx-auto px-2">
        {/* Top section: Text and Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center mb-5">
          {/* Left content */}
          <div className="pt-4 sm:pt-6 md:pt-12">
            <SectionHeading
              subtitle="Research At Kalinga"
              title="A Hub of Innovation and Discovery"
              titleClassName="text-[var(--foreground)]"
            />
            <p className="text-[var(--foreground)] mt-2 sm:mt-4">
              Empowering researchers with the most advanced research labs, including a Central Instrumentation Facility featuring exclusive instruments for cutting-edge experiments. Our 90+ Research Labs and an active IPR cell will accelerate your research work.
            </p>
            <div className="mt-4 sm:mt-6">
              <Link href="/research">
                <GlobalArrowButton >
                  Explore More
                </GlobalArrowButton>
              </Link>
            </div>
          </div>

          {/* Right side with image */}
          <div className="relative flex justify-center md:justify-end items-center mt-6 md:mt-0">
            <div className="relative w-full h-[400px] rounded-[10px] overflow-hidden shadow-2xl">
              <Image
                src="https://cdn.kalingauniversity.ac.in/Home/staff-guiding.png"
                alt="Research & Innovation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom section: Statistics Cards in Dark Blue Container */}
        <div className="bg-[var(--dark-blue)] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-7 relative group">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={stats.length > 4}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="research-stats-swiper !pb-2"
          >
            {stats.map((stat, index) => (
              <SwiperSlide key={index} className="h-full">
                <div
                  className={`rounded-xl p-4 sm:p-4 flex flex-col justify-between transition-colors duration-300 h-full min-h-[160px] ${stat.variant === 'orange' ? 'bg-[var(--button-red)]' : 'bg-[var(--light-gray)] hover:bg-[var(--card-skin)]'}`}
                >
                  <div>
                    <h3 className={`text-lg sm:text-xl font-stix border-b pb-4 ${stat.variant === 'orange' ? 'text-white border-white/30' : 'text-[var(--foreground)] border-black'}`}>
                      {stat.label}
                    </h3>
                  </div>
                  <div>
                    <h2 className={`font-stix mt-2 ${stat.variant === 'orange' ? 'text-white' : 'text-[var(--foreground)]'}`}>
                      {getAnimatedValue(stat)}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
