"use client"
import React from 'react'
import QuickLinkCard from './quick_link_card'
import SectionHeading from "../general/SectionHeading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const defaultQuickLinks = [
  {
    id: 1,
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
    title: "Conferences",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
    title: "IPR",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
    title: "Patents",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
    title: "Book Chapters",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 5,
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
    title: "Research Papers",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 6,
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
    title: "Awards",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
]

const QuickLinks = ({
  links = defaultQuickLinks,
  title = "Quick Links",
  description,
  backgroundColor = "bg-[var(--dark-blue)]",
  cardBackgroundColor = "bg-[var(--lite-sand)]",
  textColorClassName = "text-white/80",
  showReadMore = true,
  showDescriptionReadMore = true,
  titleClassName = "",
  gridClassName = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10",
  slider = false,
}) => {
  // Default description only if not provided
  const displayDescription = description;

  return (
    <section className={`${backgroundColor} py-16 rounded-xl md:mx-2 relative`}>
      <div className="container mx-auto px-2">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <SectionHeading title={title} titleClassName={titleClassName} />
          {displayDescription && (
            <p className={`text-sm md:text-base max-w-6xl mx-auto font-plus-jakarta-sans mt-4 ${textColorClassName}`}>
              {displayDescription}
            </p>
          )}
        </div>

        {/* Content */}
        {slider ? (
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                nextEl: '.quick-next',
                prevEl: '.quick-prev',
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="!pb-6 [&_.swiper-wrapper]:!items-stretch"
            >
              {links.map((link) => (
                <SwiperSlide key={link.id} className="!h-auto">
                  <div className="h-full">
                    <QuickLinkCard
                      icon={link.icon}
                      title={link.title}
                      description={link.description}
                      cardBackgroundColor={cardBackgroundColor}
                      showReadMore={showReadMore}
                      showDescriptionReadMore={showDescriptionReadMore}
                      href={link.href}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex justify-end items-center gap-3 mt-5 px-2">
              <button className="quick-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
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
              <button className="quick-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
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
          </div>
        ) : (
          <div className={gridClassName}>
            {links.map((link) => (
              <QuickLinkCard
                key={link.id}
                icon={link.icon}
                title={link.title}
                description={link.description}
                cardBackgroundColor={cardBackgroundColor}
                showReadMore={showReadMore}
                showDescriptionReadMore={showDescriptionReadMore}
                href={link.href}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default QuickLinks

