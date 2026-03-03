"use client";

import { useRef } from "react";
import Image from "next/image";
import SectionHeading from "../general/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const certificates = [
  {
    id: 1,
    src: "https://cdn.kalingauniversity.ac.in/IQAC/certificate-1.webp",
    alt: "Kalinga University ISO 9001:2015 Certificate",
  },
  {
    id: 2,
    src: "https://cdn.kalingauniversity.ac.in/IQAC/certificate-2.webp",
    alt: "Kalinga University ISO 9001:2015 Certificate",
  },
];

export default function ISOCertificateSection({ description = "" }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-2">
        {/* Header Section */}
        <div className="text-center mb-12">
          <SectionHeading
            title="ISO Certificate"
            titleClassName="text-3xl md:text-4xl lg:text-5xl mb-6"
          />
          {description && (
            <p className="max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Certificates - Swiper for Mobile, Grid for Desktop */}
        <div className="max-w-6xl mx-auto">
          {/* Mobile Swiper */}
          <div className="md:hidden relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              onInit={(swiper) => {
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              className="iso-certificate-swiper !pb-6"
              loop={false}
            >
              {certificates.map((certificate) => (
                <SwiperSlide key={certificate.id}>
                  <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-md aspect-[3/4]">
                      <Image
                        src={certificate.src}
                        alt={certificate.alt}
                        fill
                        className="object-contain"
                        sizes="80vw"
                        priority={certificate.id === 1}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation buttons */}
            <div className="flex justify-end items-center gap-3 mt-4">
              <button
                ref={prevRef}
                className="iso-certificate-prev w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
                aria-label="Previous slide"
              >
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
              <button
                ref={nextRef}
                className="iso-certificate-next w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
                aria-label="Next slide"
              >
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

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-[3/4]">
                  <Image
                    src={certificate.src}
                    alt={certificate.alt}
                    fill
                    className="object-cover rounded-2xl border-4 border-[var(--button-red)]"
                    sizes="400px"
                    priority={certificate.id === 1}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

