"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const facilities = [
  {
    id: 1,
    name: "Hostel",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/library.webp",
  },
  {
    id: 2,
    name: "Library",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/library.webp",
  },
  {
    id: 3,
    name: "GYM",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/library.webp",
  },
  {
    id: 4,
    name: "Playground",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/library.webp",
  },
  {
    id: 5,
    name: "LAB",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/library.webp",
  },
  {
    id: 5,
    name: "LAB",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/library.webp",
  },
];

export default function Facility() {
  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-stix text-[var(--button-red)] text-3xl md:text-4xl lg:text-5xl mb-4">
            Kalinga Facilities
          </h2>
          <p className="font-stix text-[var(--foreground)] text-lg md:text-xl">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>

        {/* Slider Section */}
        <div className="relative py-8">
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
            className="facility-swiper !pb-12 [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex p-5"
            loop={false}
            autoHeight={false}
          >
            {facilities.map((facility) => (
              <SwiperSlide key={facility.id}>
                <div className="h-full w-full">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden h-full hover:scale-105 hover:shadow-sm transition-all duration-300 cursor-pointer">
                    {/* Image */}
                    <div className="relative w-full h-[200px] md:h-[250px]">
                      <Image
                        src={facility.image}
                        alt={facility.name}
                        fill
                        className="object-cover"
                      />
                      {/* Label - Overlaid on image */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white px-4 py-3 m-3 rounded-lg">
                        <p className="text-[var(--foreground)] font-semibold text-center">
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
          <div className="flex justify-end items-center gap-3 mt-4">
            <button className="facility-swiper-button-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
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
            <button className="facility-swiper-button-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
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

