"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionHeading from "../general/SectionHeading";

export default function Hostelgrid() {
    const stats = [
        {
            id: 1,
            title: "Boys’ Accommodation",
            number: "930 +",
            description: "Comfortable hostel facilities for boys.",
        },
        {
            id: 2,
            title: "Girls’ Accommodation",
            number: "460 +",
            description: "Safe and secure hostel facilities for girls.",
        },
    ];

    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
          .hostel-swiper .swiper-slide > div {
            transition: all 0.4s ease-in-out !important;
          }
          .hostel-swiper .swiper-slide-active > div {
            min-height: 320px !important;
            background-color: var(--dark-skin) !important;
          }
          .hostel-swiper .swiper-slide:not(.swiper-slide-active) > div {
            min-height: 280px !important;
            background-color: var(--light-gray) !important;
          }
          @media (min-width: 640px) {
            .hostel-swiper .swiper-slide-active > div {
              min-height: 360px !important;
            }
            .hostel-swiper .swiper-slide:not(.swiper-slide-active) > div {
              min-height: 300px !important;
            }
          }
          .hostel-nav-buttons {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            z-index: 2;
            margin-top: 16px;
          }
          .hostel-swiper {
            padding-bottom: 60px !important;
            min-height: 320px !important;
          }
          @media (min-width: 640px) {
            .hostel-swiper {
              padding-bottom: 0 !important;
              min-height: 360px !important;
            }
            .hostel-nav-buttons {
              position: absolute;
              bottom: 0;
              left: calc(50% + 10px);
              transform: none;
              margin-top: 0;
            }
          }
        `,
                }}
            />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Side */}
                        <div className="flex flex-col justify-center">
                            <SectionHeading
                                title="Hostel Accommodation"
                                titleClassName="text-[var(--foreground)] mb-6 lg:mb-8"
                            />
                            <p className="text-[var(--light-text-gray)] max-w-xl">
                                Comfortable on-campus accommodation with a student-friendly
                                environment and essential amenities.
                            </p>
                        </div>

                        {/* Right Side - Swiper */}
                        <div className="relative">
                            {/* Nav buttons */}
                            <div className="hostel-nav-buttons flex items-center gap-3 justify-center sm:justify-start pointer-events-auto !z-[9]">
                                <div className="bg-white p-[2px] shadow-lg rounded-lg pointer-events-none">
                                    <button
                                        type="button"
                                        className="hostel-swiper-button-prev w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer pointer-events-auto relative z-20"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 19l-7-7 7-7"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <div className="bg-white p-[2px] shadow-lg rounded-lg pointer-events-none">
                                    <button
                                        type="button"
                                        className="hostel-swiper-button-next w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] text-white flex items-center justify-center hover:bg-[#A2A2A2] transition-colors cursor-pointer pointer-events-auto relative"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex items-center gap-3 mb-4">
                                <button
                                    type="button"
                                    className="hostel-swiper-button-prev w-10 h-10 rounded-lg bg-[var(--button-red)] text-white flex items-center justify-center"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M15 19l-7-7 7-7"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    className="hostel-swiper-button-next w-10 h-10 rounded-lg bg-[var(--button-red)] text-white flex items-center justify-center"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M9 5l7 7-7 7"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <Swiper
                                modules={[Navigation, Autoplay]}
                                navigation={{
                                    nextEl: ".hostel-swiper-button-next",
                                    prevEl: ".hostel-swiper-button-prev",
                                }}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                spaceBetween={24}
                                slidesPerView={1}
                                breakpoints={{
                                    640: { slidesPerView: 1, spaceBetween: 20 },
                                    1024: { slidesPerView: 2, spaceBetween: 24 },
                                }}
                                className="hostel-swiper [&_.swiper-wrapper]:!items-start [&_.swiper-slide]:!h-auto"
                            >
                                {stats.map((s) => (
                                    <SwiperSlide key={s.id} className="!h-auto">
                                        <div className="bg-[var(--light-gray)] rounded-xl p-10 md:p-6 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-lg sm:text-xl font-stix text-[var(--foreground)] mb-4">
                                                    {s.title}
                                                </h3>
                                                <div className="w-full h-px bg-[var(--foreground)] mb-4"></div>
                                            </div>
                                            <div>
                                                <h2 className="font-stix text-[var(--foreground)] mb-4">
                                                    {s.number}
                                                </h2>
                                                <p className="text-[var(--light-text-gray)] leading-relaxed font-plus-jakarta-sans">
                                                    {s.description}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
