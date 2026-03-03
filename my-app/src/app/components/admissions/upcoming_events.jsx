"use client"
import React from 'react'
import FeaturedNewsCard from '../general/featured_news_card'
import SectionHeading from '../general/SectionHeading'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const UpcomingEvents = ({ events }) => {
  // Use passed events or fallback (although we expect events to be passed now)
  const displayEvents = events || [
    {
      id: 1,
      image: 'https://cdn.kalingauniversity.ac.in/common/student.jpg',
      alt: 'Event 1',
      badgeText: 'Day 5 Highlights',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
    },
    // ... add more fallbacks if really needed, or just empty array
  ];

  if (!events || events.length === 0) return null; // Or return fallback if prefered, but usually hide if no data.


  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-2">
        {/* Title */}
        <SectionHeading
          title="Upcoming Events"
          titleClassName="text-center mb-6 sm:mb-8 md:mb-10"
        />

        {/* Events Slider */}
        <div className="relative group">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              nextEl: '.upcoming-events-next',
              prevEl: '.upcoming-events-prev',
            }}
            className="upcoming-events-swiper !pb-12"
          >
            {events.map((event) => (
              <SwiperSlide key={event.id}>
                <FeaturedNewsCard
                  image={event.image}
                  alt={event.alt}
                  badgeText={event.badgeText}
                  title={event.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button className="upcoming-events-prev w-12 h-12 rounded-full bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-all shadow-md transform hover:scale-105 active:scale-95 z-20">
              <svg
                width="24"
                height="24"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="upcoming-events-next w-12 h-12 rounded-full bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-all shadow-md transform hover:scale-105 active:scale-95 z-20">
              <svg
                width="24"
                height="24"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents

