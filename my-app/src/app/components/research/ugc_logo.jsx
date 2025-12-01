"use client";
import Image from "next/image";
import { useState } from "react";
import GlobalRedPlainButton from "../general/global-red_plain_button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function UGCLogo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const logos = [
    {
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-1.png",
      alt: "Survey of India",
    },
    {
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-2.png",
      alt: "NCTE",
    },
    {
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-3.png",
      alt: "Council of Science & Technology",
      isCenter: true,
    },
    {
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-4.png",
      alt: "Association of Indian Universities",
    },
    {
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-5.png",
      alt: "Pharmacy Council of India",
    },
  ];

  return (
    <div className="container mx-auto pt-12 pb-16 px-6">
      {/* Mobile & Tablet Slider View */}
      <div className="lg:hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".ugc-swiper-button-next",
            prevEl: ".ugc-swiper-button-prev",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="relative !p-5"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex flex-col items-center">
                <div
                  className={`relative ${
                    activeIndex === index
                      ? "ring-1 shadow-[0_0_25px_8px_rgba(59,130,246,0.4)]"
                      : ""
                  } rounded-full overflow-hidden transition-all duration-300 bg-white`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={100}
                    className="rounded-full object-contain w-[100px] h-[100px] mx-auto"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button className="ugc-swiper-button-prev w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[var(--button-red)]"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="ugc-swiper-button-next w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[var(--button-red)]"
            >
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Common Button for All Logos */}
        <div className="flex flex-col items-center w-full px-4 mt-6">
          <div className="w-px h-8 border-2 border-dashed border-gray-500"></div>
          <div className="mt-3 w-full">
            <GlobalRedPlainButton className="w-full text-sm px-4 py-3">
              University Grants Commission
            </GlobalRedPlainButton>
          </div>
        </div>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden lg:flex flex-wrap justify-around items-start gap-6 md:gap-8 lg:gap-12">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center ${
              logo.isCenter ? "transform scale-110 z-10" : ""
            }`}
          >
            <div
              className={`relative ${
                logo.isCenter
                  ? "ring-1 shadow-[0_0_25px_8px_rgba(59,130,246,0.4)]"
                  : ""
              } rounded-full overflow-hidden transition-all duration-300 bg-white`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                className="rounded-full object-contain w-[100px] h-[100px]"
              />
            </div>

            {/* Dashed line and button for center logo */}
            {logo.isCenter && (
              <div className="flex flex-col items-center">
                <div className="w-px h-10 border-2 border-dashed border-gray-500"></div>
                <div className="mt-3">
                  <GlobalRedPlainButton>
                    University Grants Commission
                  </GlobalRedPlainButton>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

