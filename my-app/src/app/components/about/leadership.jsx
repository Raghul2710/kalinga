"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LeadershipCard from "../general/leadership-card";
import SectionHeading from "../general/SectionHeading";

const leadership = [
  {
    id: 1,
    name: "Dr. Rajeev Kumar",
    title: "Chairman",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/omprakash.png",
  },
  {
    id: 2,
    name: "Dr. Sandeep Arora",
    title: "Chancellor",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/omprakash.png",
  },
  {
    id: 3,
    name: "Mr. Sajjan Singh",
    title: "Pro-Chancellor",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/omprakash.png",
  },
  {
    id: 4,
    name: "Dr. R. Shridhar",
    title: "Vice-Chancellor",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/omprakash.png",
  },
  {
    id: 5,
    name: "Dr. Byju John",
    title: "Director General",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/omprakash.png",
  },
  {
    id: 6,
    name: "Dr. Sandeep Gandhi",
    title: "Registrar",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/omprakash.png",
  },
];

export default function Leadership() {
  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 lg:px-5">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          
          <SectionHeading title="Our Leadership" titleClassName="!py-2" />
        </div>

        {/* Slider Section */}
        <div className="relative">
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
              nextEl: ".leadership-swiper-button-next",
              prevEl: ".leadership-swiper-button-prev",
            }}
            className="leadership-swiper  [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex"
            loop={false}
            autoHeight={false}
          >
            {leadership.map((person) => (
              <SwiperSlide key={person.id}>
                <div className="h-full w-full">
                  <div className="bg-white rounded-xl p-1 h-full relative">
                    <LeadershipCard
                      name={person.name}
                      title={person.title}
                      image={person.image}
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
            <button className="leadership-swiper-button-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
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
            <button className="leadership-swiper-button-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
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

