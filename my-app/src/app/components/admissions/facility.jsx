"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SectionHeading from "../general/SectionHeading";
const defaultFacilities = [
  {
    id: 1,
    name: "Hostel",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/hostel.webp",
  },
  {
    id: 2,
    name: "Library",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/library.webp",
  },
  {
    id: 3,
    name: "GYM",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/gym.webp",
  },
  {
    id: 4,
    name: "Playground",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/DSC00047.webp",
  },
  {
    id: 5,
    name: "LAB",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/labotories.webp",
  },
  {
    id: 6,
    name: "Canteen",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/canteen+mess.webp",
  },
];

export default function Facility({
  title = "A Campus That Defines Possibilities",
  subtitle = "Real Stories. Real Success.",
  description = " Kalinga University offers a state-of-the-art campus that redefines the student experience. Our cutting-edge labs, expansive library, modern hostels, and recreational facilities ensure a balanced environment where learning and lifestyle go hand in hand.",
  titleClassName = "text-center",
  subtitleClassName = "text-center !text-[var(--button-red)]",
  facilities = defaultFacilities,
}) {
  return (
    <section className="py-16 bg-white relative">
      <div className="px-2">
        {/* Header Section */}
        <SectionHeading 
                        subtitleClassName={subtitleClassName}
                        titleClassName={titleClassName}
                        subtitle={subtitle}
                        title={title}
                    />
                    {description && (
                      <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4 mb-8">
                        {description}
                      </p>
                    )}
        {/* Slider Section */}
        <div className="relative overflow-visible">
          <Swiper 
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 24,
              },
            }}
            navigation={{
              nextEl: ".facility-swiper-button-next",
              prevEl: ".facility-swiper-button-prev",
            }}
            className="facility-swiper !pb-5 pt-5 [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:items-stretch [&_.swiper-wrapper]:overflow-visible [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex [&_.swiper-slide]:overflow-visible p-5"
            loop={false}
            autoHeight={false}
          >
            {facilities.map((facility) => (
              <SwiperSlide key={facility.id} className="!overflow-visible">
                <div className="h-full w-full">
                  <div className="bg-white rounded-xl overflow-visible h-full group-hover:z-[50] relative transition-all duration-300 cursor-pointer group group-hover:shadow-xl">
                    {/* Image Container - Fixed wrapper with padding for upward growth (250px visible + 50px padding = 300px total) */}
                    <div className="relative w-full min-h-[300px] overflow-hidden rounded-xl">
                      {/* Image - Positioned at bottom, grows upward on hover */}
                      <div className="absolute bottom-0 left-0 right-0 h-[250px] group-hover:h-[300px]  transition-all duration-300">
                        <Image
                          src={facility.image}
                          alt={facility.name}
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>
                      {/* Label - Overlaid on image */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white px-4 py-3 m-3 rounded-lg z-10 group-hover:bg-[var(--button-red)] transition-all duration-300">
                        <p className="text-[var(--foreground)] font-semibold text-center group-hover:text-white transition-all duration-300">
                          {facility.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-end items-center gap-3">
            <button className="cursor-pointer facility-swiper-button-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
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
            <button className="cursor-pointer facility-swiper-button-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
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

