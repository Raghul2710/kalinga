'use client'

import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import GlobalArrowButton from '../general/global-arrow_button'
import SectionHeading from '../general/SectionHeading'

const achievements = [
  {
    id: 1,
    title: 'Students',
    number: '8000+',
    description: 'Learners across diverse disciplines.',
  },
  {
    id: 2,
    title: 'International Students',
    number: '600+',
    description: 'From 29+ countries.',
  },
  {
    id: 3,
    title: 'Scholarships Distributed',
    number: 'INR 3Cr+',
    description: 'Enabling access and excellence.',
  },
  {
    id: 4,
    title: 'Programs',
    number: '130+',
    description: 'Undergraduate, postgraduate, and doctoral.',
  },
  {
    id: 5,
    title: 'Recruitment Partners',
    number: '400+',
    description: 'Leading organizations and firms.',
  },
  {
    id: 6,
    title: 'Research Publications',
    number: '3360+',
    description: 'Peer-reviewed contributions.',
  },
  {
    id: 7,
    title: 'Patents',
    number: '510+',
    description: 'Innovations protected.',
  },
  {
    id: 8,
    title: 'Sponsored Research Projects',
    number: '160+',
    description: 'Industry and government funded.',
  },
  {
    id: 9,
    title: 'Consultancy Projects',
    number: '130+',
    description: 'Applied solutions for partners.',
  },
  {
    id: 10,
    title: 'MoUs Signed',
    number: '200+',
    description: 'Strategic academic collaborations.',
  },
  {
    id: 11,
    title: 'Centres of Excellence',
    number: '7',
    description: 'Specialized research and innovation hubs.',
  },
  {
    id: 12,
    title: 'Laboratories',
    number: '90+',
    description: 'State-of-the-art lab facilities.',
  },
]

export default function Achievements() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .achievements-swiper .swiper-slide > div {
          transition: all 0.4s ease-in-out !important;
        }
        .achievements-swiper .swiper-slide-active > div {
          min-height: 320px !important;
          background-color: var(--dark-skin) !important;
        }
        .achievements-swiper .swiper-slide:not(.swiper-slide-active) > div {
          min-height: 280px !important;
          background-color: var(--light-gray) !important;
        }
        @media (min-width: 640px) {
          .achievements-swiper .swiper-slide-active > div {
            min-height: 360px !important;
            background-color: var(--dark-skin) !important;
          }
          .achievements-swiper .swiper-slide:not(.swiper-slide-active) > div {
            min-height: 300px !important;
            background-color: var(--light-gray) !important;
          }
        }
        .achievements-nav-buttons {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
          margin-top: 16px;
        }
        .achievements-swiper {
          padding-bottom: 60px !important;
          min-height: 320px !important;
        }
        @media (min-width: 640px) {
          .achievements-swiper {
            padding-bottom: 0 !important;
            min-height: 360px !important;
          }
          .achievements-swiper-wrapper {
            position: relative;
          }
          .achievements-nav-buttons {
            position: absolute;
            bottom: 0;
            left: calc(50% + 10px);
            transform: none;
            margin-top: 0;
            z-index: 1;
          }
        }
        @media (min-width: 1024px) {
          .achievements-nav-buttons {
            left: calc(50% + 12px);
          }
        }
      `}} />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Heading and Button */}
            <div className="flex flex-col justify-center">
              <SectionHeading
                title="Our Growth Story in Numbers"
                titleClassName="text-[var(--foreground)] mb-6 lg:mb-8"
              />
              <div>
                <Link href="/about-us" className="inline-flex">
                  <GlobalArrowButton className="w-full sm:w-[160px] h-[44px] justify-between"> 
                    Learn More
                    </GlobalArrowButton>
                </Link>
              </div>
            </div>

            {/* Right Side - Swiper Slider */}
            <div className="relative">
              {/* Navigation Buttons - Positioned below 2nd card, aligned to left */}
              <div className="achievements-nav-buttons flex items-center gap-3 justify-center sm:justify-start pointer-events-auto !z-[9]">
                <div className="bg-white p-[2px] shadow-lg rounded-lg pointer-events-none">
                  <button
                    type="button"
                    className="achievements-swiper-button-prev w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer pointer-events-auto relative z-20"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
                <div className="bg-white p-[2px] shadow-lg rounded-lg pointer-events-none">
                  <button
                    type="button"
                    className="achievements-swiper-button-next w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] text-white flex items-center justify-center hover:bg-[#A2A2A2] transition-colors cursor-pointer pointer-events-auto relative"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  nextEl: '.achievements-swiper-button-next',
                  prevEl: '.achievements-swiper-button-prev',
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                }}
                className="achievements-swiper [&_.swiper-wrapper]:!items-start [&_.swiper-slide]:!h-auto"
              >
                {achievements.map((achievement) => (
                  <SwiperSlide key={achievement.id} className="!h-auto">
                    <div className="bg-[var(--light-gray)] rounded-xl p-10 md:p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg sm:text-xl font-stix  text-[var(--foreground)] mb-4">
                          {achievement.title}
                        </h3>
                        <div className="w-full h-px bg-[var(--foreground)] mb-4"></div>
                      </div>
                      <div>
                        <h2 className="font-stix  text-[var(--foreground)] mb-4">
                          {achievement.number}
                        </h2>
                        <p className="text-[var(--light-text-gray)] leading-relaxed font-plus-jakarta-sans">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

