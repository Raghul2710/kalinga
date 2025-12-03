"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ScholarshipCard from "../general/scholarship-card";
import GlobalArrowButton from "../general/global-arrow_button";
import Image from "next/image";

const scholarships = [
  {
    id: 1,
    title: "Social Scholarships",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/book-logo.png",
  },
  {
    id: 2,
    title: "Merit Scholarships",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/book-logo.png",
  },
  {
    id: 3,
    title: "Social Scholarships",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/book-logo.png",
  },
  {
    id: 3,
    title: "Social Scholarships",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/book-logo.png",
  },
];

export default function ScholarshipsSlider() {
  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12 gap-4">
          <div className="flex-1">
            <h2 className="font-stix text-[var(--foreground)] text-3xl md:text-4xl lg:text-5xl mb-4">
              Scholarships
            </h2>
            <p className="text-[var(--light-text-gray)] max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex-shrink-0">
            <GlobalArrowButton className="!w-full md:!w-auto">
              Explore Now
            </GlobalArrowButton>
          </div>
        </div>

        {/* Slider Section - Inside Container with Beige Background */}
        <div className="relative py-8 rounded-xl">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          navigation={{
            nextEl: ".scholarships-swiper-button-next",
            prevEl: ".scholarships-swiper-button-prev",
          }}
          className="scholarships-swiper !pb-12 !pt-8 [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex [&_.swiper-wrapper]:overflow-visible [&_.swiper-slide]:overflow-visible"
          loop={false}
          autoHeight={false}
        >
          {scholarships.map((scholarship) => (
            <SwiperSlide key={scholarship.id}>
              <div className="h-full w-full overflow-visible">
                <div className="bg-white rounded-xl p-1 h-full relative min-h-[220px] max-w-[380px] mx-auto overflow-visible">
                  <ScholarshipCard
                    title={scholarship.title}
                    description={scholarship.description}
                    icon={
                      <Image
                        src={scholarship.icon}
                        alt={scholarship.title}
                        width={180}
                        height={180}
                        className="object-contain"
                      />
                    }
                  />
                  {/* Button - Positioned at bottom right */}
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
        <div className="flex justify-end items-center gap-3 mt-4">
            <button className="scholarships-swiper-button-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
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
            <button className="scholarships-swiper-button-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
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
      </div>
    </section>
  );
}
