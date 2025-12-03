"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import GlobalArrowButton from "../general/global-arrow_button";

const stepData = [
  {
    title: "Step 1",
    description: "Visit Website",
  },
  {
    title: "Step 2",
    description: "Register for the entrance exam",
  },
  {
    title: "Step 3",
    description: "Take the computer-based exam and get shortlisted",
  },
  {
    title: "Step 4",
    description: "Offer letter",
  },
  {
    title: "Step 5",
    description: "Admission letter",
  },
];

const admissionSteps = stepData.map((step, index) => ({
  id: index + 1,
  stepNumber: String(index + 1).padStart(2, "0"),
  title: step.title,
  description: step.description,
  image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/step1.png",
}));

export default function AdmissionSteps() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--light-gray)]">
      <style dangerouslySetInnerHTML={{__html: `
        .admission-steps-swiper .swiper-slide-active .step-card-inner {
          background-color: #F5E6D3;
          color: var(--foreground);
        }
        .admission-steps-swiper .swiper-slide:not(.swiper-slide-active) .step-card-inner {
          background-color: var(--button-red);
          color: white;
        }
        .admission-steps-swiper .swiper-slide-active .step-number {
          color: #9ca3af;
        }
        .admission-steps-swiper .swiper-slide:not(.swiper-slide-active) .step-number {
          color: white;
        }
        .admission-steps-swiper .swiper-slide-active .step-title {
          color: var(--foreground);
        }
        .admission-steps-swiper .swiper-slide:not(.swiper-slide-active) .step-title {
          color: white;
        }
        .admission-steps-swiper .swiper-slide-active .step-description {
          color: var(--light-text-gray);
        }
        .admission-steps-swiper .swiper-slide:not(.swiper-slide-active) .step-description {
          color: white;
        }
        .admission-steps-swiper .swiper-slide-active .step-button {
          background-color: white;
        }
        .admission-steps-swiper .swiper-slide-active .step-button:hover {
          background-color: #f3f4f6;
        }
        .admission-steps-swiper .swiper-slide:not(.swiper-slide-active) .step-button {
          background-color: rgba(255, 255, 255, 0.2);
        }
        .admission-steps-swiper .swiper-slide:not(.swiper-slide-active) .step-button:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }
        .admission-steps-swiper .swiper-slide-active .step-button-icon {
          stroke: black;
        }
        .admission-steps-swiper .swiper-slide:not(.swiper-slide-active) .step-button-icon {
          stroke: white;
        }
      `}} />
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12 gap-4">
          <div>
            <h3 className="text-[var(--button-red)] text-lg md:text-xl font-semibold mb-2">
              Admission Procedure
            </h3>
            <h2 className="font-stix text-[var(--foreground)] text-3xl md:text-4xl lg:text-5xl">
              Steps To Get Admission Into KU
            </h2>
          </div>
          <div className="flex-shrink-0">
            <GlobalArrowButton className="!w-full md:!w-auto">
              Explore Now
            </GlobalArrowButton>
          </div>
        </div>
      </div>

      {/* Steps Slider - Edge to Edge */}
      <div className="relative pl-0 md:pl-[50px]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            grabCursor={true}
            loop={false}
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
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            navigation={{
              nextEl: ".admission-steps-button-next",
              prevEl: ".admission-steps-button-prev",
            }}
            className="admission-steps-swiper !pb-12 [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:!items-stretch [&_.swiper-slide]:!h-auto"
          >
            {admissionSteps.map((step, index) => (
              <SwiperSlide key={step.id} className="!h-auto">
                <div className="relative h-full flex">
                  {/* Connecting Line - Between cards */}
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-[24px] w-[24px] h-0.5 bg-gray-400 transform -translate-y-1/2 z-20 pointer-events-none"></div>
                  )}
                  
                  {/* Step Card */}
                  <div className="bg-white rounded-xl p-1 flex-1 flex flex-col">
                  <div
                    className="step-card-inner h-full min-h-[185px] md:min-h-[185px] flex-1 flex flex-col min-w-full rounded-xl p-4 relative overflow-hidden"
                  >
                    {/* Background Number */}
                    <div className="step-number absolute top-4 right-4 text-7xl md:text-8xl font-bold leading-none opacity-20 font-stix">
                      {step.stepNumber}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon and Text Row */}
                      <div className="flex items-end gap-4 flex-1 pt-4">
                        {/* Icon Image */}
                        {step.image && (
                          <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
                            <Image
                              src={step.image}
                              alt={step.title}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}

                        {/* Title and Description */}
                        <div className="flex-1">
                          {/* Title */}
                          <h4 className="step-title text-lg md:text-xl mb-1">
                            {step.title}
                          </h4>

                          {/* Description */}
                          <p className="step-description text-sm md:text-base">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Button - Separate div with justify-end */}
                      <div className="flex justify-end">
                        <button className="step-button w-8 h-8 rounded-lg flex items-center justify-center transition-colors shadow-md">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="step-button-icon"
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
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Buttons */}
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-end items-center gap-3 mt-4">
            <button className="admission-steps-button-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
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
            <button className="admission-steps-button-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
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
    </section>
  );
}

