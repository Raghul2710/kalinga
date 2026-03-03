"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ScholarshipCard from "@/app/components/general/scholarship-card";
import Image from "next/image";

const defaultItems = [
  {
    id: 1,
    title: "Fundamentals of 2 & 3-Wheeler Systems",
    description: "",
    icon: "https://cdn.kalingauniversity.ac.in/common/placeholder-img.png",
  },
  {
    id: 2,
    title: "Diagnostic Skills Using Modern Tools",
    description: "",
    icon: "https://cdn.kalingauniversity.ac.in/common/placeholder-img.png",
  },
  {
    id: 3,
    title: "Engine Service & Maintenance",
    description: "",
    icon: "https://cdn.kalingauniversity.ac.in/common/placeholder-img.png",
  },
  {
    id: 4,
    title: "Repair Procedures for 2 & 3 Wheelers",
    description: "",
    icon: "https://cdn.kalingauniversity.ac.in/common/placeholder-img.png",
  },
  {
    id: 5,
    title: "Preventive & Predictive Maintenance Techniques",
    description: "",
    icon: "https://cdn.kalingauniversity.ac.in/common/placeholder-img.png",
  },
  {
    id: 6,
    title: "Exposure to Emerging Technologies in Mobility",
    description: "",
    icon: "https://cdn.kalingauniversity.ac.in/common/placeholder-img.png",
  },
];

export default function WhatYouLearnSlider({
  title = "What You’ll Learn Here",
  subtitle = "Skill-based training designed to make you industry-ready.",
  items = defaultItems,
}) {
  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-2">
        {/* Header Section */}
        <div className="flex flex-col gap-3 mb-8 md:mb-12">
          <h2 className="font-stix text-[var(--foreground)] text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>

          {subtitle ? (
            <p className="text-[var(--light-text-gray)] max-w-6xl">
              {subtitle}
            </p>
          ) : null}
        </div>

        {/* Slider Section */}
        <div className="relative pt-2 rounded-xl">
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
              nextEl: ".what-you-learn-swiper-button-next",
              prevEl: ".what-you-learn-swiper-button-prev",
            }}
            className="what-you-learn-swiper !p-6 [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex [&_.swiper-wrapper]:overflow-visible [&_.swiper-slide]:overflow-visible"
            loop={false}
            autoHeight={false}
          >
            {items.map((it) => (
              <SwiperSlide key={it.id}>
                <div className="h-full w-full overflow-visible">
                  <div className="bg-white rounded-xl p-1 h-full relative min-h-[220px] max-w-[380px] mx-auto overflow-visible">
                    <ScholarshipCard
                      title={it.title}
                      description={it.description || " "}
                      icon={
                        <Image
                          src={it.icon}
                          alt={it.title}
                          width={180}
                          height={180}
                          className="object-contain"
                        />
                      }
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-end items-center gap-3 pr-6">
            <button className="what-you-learn-swiper-button-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
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

            <button className="what-you-learn-swiper-button-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
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
