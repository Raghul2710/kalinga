'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import SectionHeading from '../general/SectionHeading'    
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function FeatureCards({ 
  isSlider = true,
  title = "Why is Kalinga University the Right Choice?",
  subtitle = "Why is Kalinga University the Right Choice?",
  description = null,
  cards = [
    { 
      id: 1, 
      title: 'Global Exposure', 
      body: 'Students from 29+ nationalities create a truly global learning environment. Collaborate, connect, and grow through multi-cultural programs and diverse perspectives.', 
      variant: 'gray',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Global.svg'
    },
    { 
      id: 2, 
      title: 'Vibrant Campus Life', 
      body: 'Experience an unforgettable college life filled with green spaces, lively events, and a dynamic student community.', 
      variant: 'amber',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/university.svg'
    },
    { 
      id: 3, 
      title: 'Career Counseling', 
      body: 'Get personalized guidance and support at every stage of your academic journey — from choosing the right path to landing your dream job.', 
      variant: 'gray',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Career+Counseling.svg'
    },
    { 
      id: 4, 
      title: 'Wide Range of Programs', 
      body: 'Choose from 130+ industry-relevant programs across disciplines — from Computer Science to Pharmacy — and unlock limitless career opportunities.', 
      variant: 'amber',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Wide+Range+of+Programs.svg'
    },
    { 
      id: 5, 
      title: 'Abundant Scholarships', 
      body: 'Avail up to 100% scholarships through merit, sports, cultural, and achiever categories — rewarding talent and ambition.', 
      variant: 'gray',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Abundant+Scholarships.svg' 
    },
    { 
      id: 6, 
      title: 'Industry-Relevant Curriculum', 
      body: 'Aligned with the New Education Policy 2020, our curriculum bridges classroom learning with real-world industry needs.', 
      variant: 'amber',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Industry-Relevant+Curriculum.svg'  
    },
    { 
      id: 7, 
      title: 'Holistic Development', 
      body: 'We focus on nurturing confident, well-rounded individuals ready to make informed life and career decisions.', 
      variant: 'gray',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Holistic+Development.svg'  
    },
    { 
      id: 8, 
      title: 'Extensive Research Facilities', 
      body: 'With 90+ advanced labs, including IT and CIF labs, Kalinga University leads in innovation and research excellence.', 
      variant: 'amber',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Extensive+Research+Facilities.svg'  
    },
    { 
      id: 9, 
      title: 'Experienced Faculties', 
      body: 'Learn from highly qualified professors from India and abroad who inspire and guide students toward leadership and success.', 
      variant: 'gray',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Experienced+Faculties.svg'  
    },
    { 
      id: 10, 
      title: 'Flagship Events', 
      body: 'Celebrate creativity and achievement through exciting events like Hackathons, Kalinga Utsav, Sports Fest, Moot Courts, and Convocation Ceremonies.', 
      variant: 'amber',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Flagship+Events.svg'  
    },
    { 
      id: 11, 
      title: 'Internships & Industrial Visits', 
      body: 'Gain real-world exposure with internship opportunities and industrial visits that build practical skills and confidence.', 
      variant: 'gray',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Industrial+Visits.svg'  
    },
    { 
      id: 12, 
      title: 'Improve Employability', 
      body: 'Develop skills employers value — communication, leadership, teamwork, problem-solving, and critical thinking — beyond academics.', 
      variant: 'amber',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Improve+Employability.svg'  
    },
    { 
      id: 13, 
      title: 'Campus Placement Drives', 
      body: 'With 400+ recruitment partners, students secure placements across top industries and leading organizations.', 
      variant: 'gary',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Campus+Placement+Drives.svg'  
    },
    { 
      id: 14, 
      title: 'Networking Opportunities', 
      body: 'Engage with industry leaders, alumni, and professionals through workshops, seminars, and conferences that strengthen your career network.', 
      variant: 'amber',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Networking+Opportunities.svg'  
    },
    { 
      id: 15, 
      title: 'Cultural Celebrations', 
      body: 'Enjoy a vibrant campus culture through festivals, concerts, talent shows, and open mic events that unite students from all backgrounds.', 
      variant: 'gray',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Cultural+Celebrations.svg'  
    },
    { 
      id: 16, 
      title: 'Community Services', 
      body: 'Join NCC and NSS initiatives and become a socially responsible citizen contributing to meaningful community work.', 
      variant: 'amber',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Community+Services.svg'  
    },
    { 
      id: 17, 
      title: 'Educational Tours', 
      body: 'Experience learning beyond classrooms through national and international educational tours, including visits to top industries and destinations like Dubai.', 
      variant: 'gray',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Educational+Tours.svg'  
    },
    { 
      id: 18, 
      title: 'Mentor-Mentee System', 
      body: 'Benefit from personalized guidance through one-on-one mentoring that supports your academic and personal growth.', 
      variant: 'amber',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Mentor-Mentee+System.svg'  
    },
    { 
      id: 19, 
      title: 'Emotional Well-Being', 
      body: 'Participate in wellness programs designed to support mental health, reduce stress, and promote a positive learning environment.', 
      variant: 'gray',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Emotional+Well-Being.svg'  
    },
    { 
      id: 20, 
      title: '100% Automation', 
      body: 'Access everything digitally through our student ERP system — from admissions and academics to results, schedules, and notifications.', 
      variant: 'amber',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/100%25+Automation.svg' 
    },
  ],
  fullText = "Spread across 50+ Acres of Land, the University offers fully equipped infrastructure with the most advanced curriculum that prepares students to compete in global opportunities. Every space on our campus generates curiosity and encourages motivation among young minds. We just don't focus on classroom-based learning, but our primary focus is to provide a holistic learning experience to our students so that they can become all-rounders in their personal and professional lives. With a supportive and inclusive learning environment, our students have achieved remarkable success and transformed their DREAMS into REALITY.",
  imageUrl = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  imageAlt = "Kalinga students celebrating"
}) {
  const effectiveFullText = description ?? fullText
  const [isExpanded, setIsExpanded] = useState(false)
  const [cardExpanded, setCardExpanded] = useState({})
  const swiperRef = useRef(null)
  
  const toggleCard = (id) => setCardExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
  const collapsedTextStyle = {
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  }

  // Dynamically calculate truncated and hidden text from fullText
  const truncateLimit = 200
  const truncatedText = effectiveFullText?.length > truncateLimit ? effectiveFullText.slice(0, truncateLimit) : effectiveFullText
  const hiddenText = effectiveFullText?.length > truncateLimit ? effectiveFullText.slice(truncateLimit) : ''
  const displayText = isExpanded ? effectiveFullText : truncatedText
 
  return (
    <section className="py-16 px-4">
      <div className="relative">
        {/* Main rounded dark panel */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[var(--dark-blue)] overflow-visible text-white shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 pt-10">
          
          {/* Top section: Image left, Text right */}
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 mb-6 sm:mb-8 md:mb-10">
            {/* Image on left - extending outside on top */}
            <div className="relative w-full h-[450px] -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24 p-8">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform-3d-slant-mirror">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text content on right */}
            <div className="flex flex-col justify-center">
              {(title || subtitle) && (
                <SectionHeading
                  subtitle={subtitle || undefined}
                  title={title || undefined}
                  titleClassName="text-white"
                  subtitleClassName="text-white/70"
                  subtitleTextColor="!text-[var(--dark-orange-red)]"                  />
              )}
              <p className="text-white leading-relaxed">
                {displayText}
                {!isExpanded && hiddenText && (
                  <>
                    {' '}
                    <button 
                      onClick={() => setIsExpanded(true)}
                      className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      Read More
                    </button>
                  </>
                )}
                {isExpanded && (
                  <>
                    {hiddenText}
                    {' '}
                    <button 
                      onClick={() => setIsExpanded(false)}
                      className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      Read Less
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Cards row - Grid or Slider */}
          {isSlider ? (
            <div className="relative">
              {/* Swiper Slider */}
              <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                }}
                navigation={{
                  nextEl: '.feature-cards-swiper-button-next',
                  prevEl: '.feature-cards-swiper-button-prev',
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper
                }}
                className="feature-cards-swiper container mx-auto !px-5"
              >
                {cards.map((c) => (
                  <SwiperSlide key={c.id} className="h-auto">
                    <div className="h-full">
                      <div className={`relative rounded-lg p-4 sm:p-5 md:p-5 lg:p-5 shadow-xl h-full flex items-center ${c.variant === 'amber' ? 'bg-[var(--card-sandal)] text-black' : 'bg-[var(--card-gray)] text-gray-800'}`} style={{ minHeight: '260px' }}>
                        <div className="flex flex-col gap-3 sm:gap-4 w-full h-full">
                          {c.image && (
                            <div className="flex-shrink-0">
                              <Image
                                src={c.image}
                                alt={c.title}
                                width={48}
                                height={48}
                                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain"
                                loading="lazy"
                              />
                            </div>
                          )}
                          <div className="flex-1 flex flex-col">
                            <h4 className="text-lg font-plus-jakarta-sans
                              mb-1.5 sm:mb-2">{c.title}
                            </h4>
                            <p
                              className="text-sm"
                              style={cardExpanded[c.id] ? undefined : collapsedTextStyle}
                            >
                              {c.body}
                            </p>
                            {c.body && (
                              <button
                                onClick={() => toggleCard(c.id)}
                                className="mt-2 text-[var(--button-red)] text-sm hover:opacity-80 transition-opacity self-start !text-[13px]"
                              >
                                {cardExpanded[c.id] ? 'Read Less' : 'Read More'}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Navigation buttons - bottom right */}
              <div className="container mx-auto flex justify-end items-center gap-3 mt-6 sm:mt-8">
                <button
                  className="feature-cards-swiper-button-prev w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
                  aria-label="Previous cards"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  className="feature-cards-swiper-button-next w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
                  aria-label="Next cards"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {cards.map((c) => (
                <div
                  key={c.id}
                  className={`relative rounded-lg p-4 sm:p-5 md:p-5 lg:p-6 shadow-xl flex ${c.variant === 'amber' ? 'bg-[var(--card-sandal)] text-black' : 'bg-[var(--card-gray)] text-gray-800'}`} style={{ minHeight: '260px' }}
                >
                  <div className="flex flex-col gap-3 sm:gap-4 w-full h-full">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/60 flex-shrink-0" />
                    <div className="p-6 sm:p-8 rounded-2xl h-full flex flex-col">
                      {c.image && (
                        <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                          <Image
                            src={c.image}
                            alt={c.title}
                            width={48}
                            height={48}
                            className="object-contain"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{c.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base flex-grow">{c.body}</p>
                      {c.body && (
                        <button
                          onClick={() => toggleCard(c.id)}
                          className="mt-2 text-[var(--button-red)] text-xs sm:text-sm font-semibold hover:opacity-80 transition-opacity self-start"
                        >
                          {cardExpanded[c.id] ? 'Read Less' : 'Read More'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
