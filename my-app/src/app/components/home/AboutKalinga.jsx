"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import GlobalArrowButton from '../general/global-arrow_button'
import Link from 'next/link'
const AboutKalinga = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const fullText = "Established in 2013, Kalinga University, Raipur stands as one of the best private universities in Chhattisgarh, strategically located in the Smart City of New Raipur.With a 50-acre green campus, Centres of Excellence, and strong industry placement partnerships, Kalinga University is dedicated to nurturing global leaders through innovation, inclusivity, and excellence.Home to students from over 29+countries, the University offers state-of-the-art education in Arts & Humanities, Commerce & Management,Education,IT mention full form of this, Law, Pharmacy,Science and Technology supported by global collaborations with IBM, Cisco, Bosch, and more."
  
  const truncateLimit = 200
  const truncatedText = fullText.length > truncateLimit ? fullText.slice(0, truncateLimit) + '...' : fullText
  const hiddenText = fullText.length > truncateLimit ? fullText.slice(truncateLimit) : ''
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .about-kalinga-text {
          font-size: 50px !important;
        }
        @media (min-width: 768px) {
          .about-kalinga-text {
            font-size: 100px !important;
          }
        }
        @media (min-width: 1024px) {
          .about-kalinga-text {
            font-size: 130px !important;
          }
        }
      `}} />
      <section className={`py-10 ${isExpanded ? 'pb-16 md:pb-10' : 'pb-10'}`}>
        <div className="px-2 flex justify-center relative">
          {/* Single dark blue panel with overlapping image */}
          <div
            className={`relative bg-[var(--dark-blue)] rounded-2xl py-5 md:py-16 text-white overflow-visible shadow-2xl w-full transition-all duration-300 ${isExpanded ? 'pb-8 md:pb-16' : 'pb-5 md:pb-16'} ${isExpanded ? 'md:h-[650px]' : 'md:h-[550px]'}`}
            style={{ height: isExpanded ? 'auto' : undefined, minHeight: isExpanded ? undefined : '550px' }}
          >
            <div className="container mx-auto" >
            <div className={`grid md:grid-cols-2 gap-6 items-start relative z-1 transition-all duration-300`}>                {/* Left: Title and button */}
              <div className="space-y-6">
                <h2 className="font-stix text-3xl md:text-4xl lg:text-5xl leading-tight">
                Kalinga University — The Pride of Central India
                </h2>
                <div className="mt-4">
                <Link href="/about-us" className="inline-flex">
                <GlobalArrowButton className="!bg-white !text-black"
                arrowClassName="!bg-[var(--button-red)]"
                arrowIconClassName="!text-white"
                textClassName="!text-black"
                >Learn More</GlobalArrowButton>
                </Link>
                </div>
              </div>

              {/* Right: Body text */}
              <div className="text-sm md:text-base text-white/90 leading-relaxed space-y-3">
                <p>
                  {isExpanded ? fullText : truncatedText}
                  {fullText.length > truncateLimit && (
                    <>
                      {' '}
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors cursor-pointer underline underline-offset-2"
                      >
                        {isExpanded ? 'Read Less' : 'Read More'}
                      </button>
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Decorative large outlined "About Kalinga" text (panel-relative and visible) */}
            <div className="pointer-events-none absolute bottom-6 md:bottom-15   opacity-100 select-none z-2">
              <h2
                className="font-stix about-kalinga-text leading-none whitespace-nowrap md:opacity-100 opacity-0"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1.57px #FFFFFF',
                  fontWeight: 400,
                  fontStyle: 'normal'
                }}
              >
                About Kalinga
              </h2>
            </div>

          {/* Desktop image aligned via normal grid flow */}
          <div className="hidden md:grid grid-cols-2 gap-6 items-start">
            <div />
            <div className="flex justify-end">
              <div
                className="relative w-[555px] h-[452px] rounded-[10px] overflow-hidden shadow-2xl"
                style={{ transform: `translateY(${isExpanded ? '10px' : '-70px'})` }}
              >
                <Image
                  src="https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/about-kalinga.webp"
                  alt="Students"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mobile: show image below on small screens */}
          <div className={`mt-8 md:hidden flex justify-center ${isExpanded ? 'mb-8' : 'mb-0'}`}>
            <div className="relative w-full max-w-[320px] h-[230px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/about-kalinga.webp"
                alt="Students"
                fill
                className="object-cover"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default AboutKalinga
