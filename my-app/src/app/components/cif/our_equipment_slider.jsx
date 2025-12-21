"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SectionHeading from "@/app/components/general/SectionHeading";

const equipments = [
  {
    id: 1,
    title: "Scanning Electron Microscope (SEM)",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-1.webp",
  },
  {
    id: 2,
    title: "High Performance Liquid Chromatography (HPLC)",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-1.webp",
  },
  {
    id: 3,
    title: "FT-IR Spectrophotometer",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-1.webp",
  },
  {
    id: 4,
    title: "X-Ray Diffractometer (XRD)",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-1.webp",
  },
  {
    id: 5,
    title: "PCR (Thermal Cycler)",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-1.webp",
  },
  {
    id: 6,
    title: "UV-Visible Double Beam Spectrophotometer",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-1.webp",
  },
  {
    id: 7,
    title: "3D Printer",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-1.webp",
  },
  {
    id: 8,
    title: "Bio-Chemistry Analyzer",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-1.webp",
  },
  {
    id: 9,
    title: "Autoclave (Portable)",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-1.webp",
  },
  {
    id: 10,
    title: "DNA Gel Electrophoresis Setup",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-1.webp",
  },
  {
    id: 11,
    title: "Rotary Tablet Press",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-1.webp",
  },
  {
    id: 12,
    title: "UV Transilluminator",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-1.webp",
  },
  {
    id: 13,
    title: "Viscometer (Touch Screen)",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-1.webp",
  },
  {
    id: 14,
    title: "Viscometer (Digital)",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-1.webp",
  },
  {
    id: 15,
    title: "Hot Air Oven",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-1.webp",
  },
];

export default function OurEquipmentSlider() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 sm:mb-10">
          <SectionHeading
            title="Explore Our Equipment"
            subtitle=""
            titleClassName="text-center"
            subtitleClassName="text-center text-sm sm:text-base text-[var(--light-text-gray)] max-w-3xl mx-auto"
          />
          <p className="max-w-3xl mx-auto">The CIF at Kalinga University is well-equipped with advanced research facilities that produce accurate measurements in the biological, physical, and chemical sciences.</p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 18 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            navigation={{
              nextEl: ".cif-equipment-next",
              prevEl: ".cif-equipment-prev",
            }}
            className="cif-equipment-swiper !pb-6 [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex"
            loop={false}
          >
            {equipments.map((eq) => (
              <SwiperSlide key={eq.id} className="py-6 sm:py-8 !h-auto !flex">
                <div className="relative h-full w-full flex items-start justify-center">
                  <div className="w-full">
                    {/* Image card */}
                    <div className="relative w-full h-52 sm:h-60 md:h-64 rounded-xl overflow-hidden shadow-md">
                      <Image
                        src={eq.image}
                        alt={eq.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Title card overlapping image and slightly outside bottom */}
                    <div className="absolute left-1/2 bottom-[-10%] -translate-x-1/2 w-[90%] bg-white rounded-lg shadow-md border border-gray-200 px-3 py-3 sm:px-4 sm:py-4 text-center">
                      <p className="text-xs sm:text-sm md:text-base text-[var(--foreground)] font-medium">
                        {eq.title}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <div className="flex justify-end items-center gap-3">
            <button className="cif-equipment-prev w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
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
            <button className="cif-equipment-next w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
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


