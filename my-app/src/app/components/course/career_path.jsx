"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CareerCard from "../general/career-card";

const careerPaths = [
  {
    id: 1,
    title: "3D Animator",
    description: "Create 3D space, characters, and objects using advanced animation techniques.",
  },
  {
    id: 2,
    title: "VFX Artist",
    description: "Create realistic effects like a transformation or an explosion by combining footage.",
  },
  {
    id: 3,
    title: "Storyboard Artist",
    description: "Plan camera angles, shots, and scenes before production begins.",
  },
  {
    id: 4,
    title: "Motion Graphics Artist",
    description: "Create engaging visual content and animated graphics for various media platforms.",
  },
  {
    id: 5,
    title: "Game Developer",
    description: "Create engaging games and interactive experiences for various platforms.",
  },
];

export default function CareerPath() {
  return (
    <section className="py-16 pb-16 bg-white relative">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="mb-4">Career Pathways</h2>
          <p className="text-[var(--light-text-gray)] max-w-3xl mx-auto">
            Get ready to turn your unique ideas into reality in the world of tech and design with limitless career opportunities.
          </p>
        </div>

        {/* Slider Section */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            navigation={{
              nextEl: ".career-swiper-button-next",
              prevEl: ".career-swiper-button-prev",
            }}
            className="career-swiper !pb-8 [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex"
            loop={true}
            autoHeight={false}
          >
            {careerPaths.map((career) => (
              <SwiperSlide key={career.id}>
                <div className="h-full w-full">
                  <CareerCard
                    title={career.title}
                    description={career.description}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-end items-center gap-3 mr-10">
            <button className="career-swiper-button-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
              <svg
                width="25"
                height="25"
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
            <button className="career-swiper-button-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
              <svg
                width="25"
                height="25"
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

