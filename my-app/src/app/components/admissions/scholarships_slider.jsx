"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import ScholarshipCard from "../general/scholarship-card";
import SectionHeading from "../general/SectionHeading";

import GlobalArrowButton from "../general/global-arrow_button";
import Image from "next/image";


const scholarships = [
  {
    id: 1,
    title: "Social Scholarships",
    description: "Scholarships supporting special categories and social causes (as per KU policy).",
    icon: "https://cdn.kalingauniversity.ac.in/logos/book-logo.png",
  },
  {
    id: 2,
    title: "Merit Scholarships",
    description: "Scholarships based on aggregate percentage in qualifying examination.",
    icon: "https://cdn.kalingauniversity.ac.in/admission/merit.svg",
  },
  {
    id: 3,
    title: "Entrance Exam Scholarships",
    description: "Scholarships based on percentile in national/state entrance & competitive exams.",
    icon: "https://cdn.kalingauniversity.ac.in/admission/social.svg",
  },
  {
    id: 4,
    title: "Culture & Achievers Scholarships",
    description: "Scholarships for cultural excellence and exceptional achievements (case-to-case).",
    icon: "https://cdn.kalingauniversity.ac.in/admission/scholarship/scholarship-2.png",
  },
  {
    id: 5,
    title: "Siblings Scholarships",
    description: "Scholarships for direct blood relations of current KU students (as per policy).",
    icon: "https://cdn.kalingauniversity.ac.in/admission/scholarship/scholarship-3.png",
  },
  {
    id: 6,
    title: "Sports Scholarships",
    description: "Scholarships for participation at District/State/National/International levels.",
    icon: "https://cdn.kalingauniversity.ac.in/admission/scholarship/sports-bg.png",
  },
  {
    id: 7,
    title: "Social Media Scholarships",
    description: "Scholarships for strong social media presence involved in knowledge dissemination.",
    icon: "https://cdn.kalingauniversity.ac.in/admission/scholarship/social_media-bg.png",
  },
  {
    id: 8,
    title: "Innovation & Research Scholarships",
    description: "Scholarships for research publications, books, startups, and product innovation.",
    icon: "https://cdn.kalingauniversity.ac.in/admission/scholarship/research-bg.png",
  },
  {
    id: 9,
    title: "Other Scholarships",
    description: "Additional KU-specific scholarships as per scholarship committee/policy.",
    icon: "https://cdn.kalingauniversity.ac.in/admission/scholarship/scholarship-10bg.png",
  },

];

export default function ScholarshipsSlider({
  title = "Scholarships",
  description = "Explore scholarship opportunities available at Kalinga University.",
  ctaText = "Explore Now",
  ctaHref = "/scholarships",
  items = scholarships,
  navId = "scholarships", // ✅ unique id if you reuse this component multiple times in same page
  className = "bg-white",
  titleClassName = "",
}) {
  return (
    <section className={`py-16 relative ${className}`}>
      <div className="container mx-auto p x-2">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12 gap-4">
          <div className="flex-1">
            <SectionHeading
              title={title}
              titleClassName={`${titleClassName}`}
            />
            <p className="max-w-3xl">
              {description}
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link href={ctaHref} className="inline-flex">
              <GlobalArrowButton>{ctaText}</GlobalArrowButton>
            </Link>
          </div>
        </div>

        {/* Slider */}
        <div className="relative pt-8 rounded-xl">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
            }}
            navigation={{
              nextEl: `.${navId}-swiper-button-next`,
              prevEl: `.${navId}-swiper-button-prev`,
            }}
            className="scholarships-swiper !p-6 [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex [&_.swiper-wrapper]:overflow-visible [&_.swiper-slide]:overflow-visible"
            loop={false}
            autoHeight={false}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="h-full w-full overflow-visible">
                  <div className="bg-white rounded-xl p-1 h-full relative min-h-[220px] max-w-[380px] mx-auto overflow-visible">
                    <ScholarshipCard
                      title={item.title}
                      description={item.description}
                      icon={
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={180}
                          height={180}
                          className="object-contain"
                        />
                      }
                    />

                    <div className="absolute bottom-6 right-6">
                      <button className="w-8 h-8 bg-[var(--button-red)] hover:bg-[#c41e3a] rounded-lg flex items-center justify-center transition-colors shadow-md">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-end items-center gap-3 pr-6">
            <button className={`${navId}-swiper-button-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md`}>
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="text-white hover:text-[var(--button-red)] transition-colors">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button className={`${navId}-swiper-button-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md`}>
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="text-white hover:text-[var(--button-red)] transition-colors">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
