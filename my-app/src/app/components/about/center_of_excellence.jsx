"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LeadershipCard from "../general/leadership-card";

const centresOfExcellence = [
  {
    id: 1,
    name: "Electric Vehicles Training Centre",
    title: "In collaboration with Godawari Electric Motors Pvt. Ltd. (Eblu)",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/godawari.png",
  },
  {
    id: 2,
    name: "IIoT Training Centre",
    title: "In collaboration with Technoviz Automation",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002977.png",
  },
  {
    id: 3,
    name: "BRIDGE Courses Training Centre",
    title: "In collaboration with BOSCH",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002989.png",
  },
  {
    id: 4,
    name: "Robotics, Coding, & Drone Training Centre",
    title: "In collaboration with BDS Education",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002988.png",
  },
  {
    id: 5,
    name: "MSME Training Centre",
    title: "In collaboration with IamSMEofIndia",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/smeindia.webp",
  },
  {
    id: 6,
    name: "AI & ML Courses Training Centre",
    title: "In collaboration with the IBM Innovation Centre for Education",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/ibm.webp",
  },
  {
    id: 7,
    name: "Automobile Training Centre",
    title: "In collaboration with JustAuto Solutions",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/justauto.webp",
  }
];

export default function CenterOfExcellence({
  centres = centresOfExcellence,
  title = "Centres of Excellence",
  description = "At Kalinga, we'll not just build your future with only classroom-based studies, but there's something more to it that will make your learning experience fun and exciting. Presenting to you our Centres of Excellence that will introduce you to the future of technologies.",
  nameOnly = false, // variant: show only name centered, no image or title
  showDescription = true,
}) {
  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-2">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
      <h2 className="font-stix text-[var(--foreground)] text-2xl md:text-3xl lg:text-4xl mb-4">
            {title}
          </h2>
          {showDescription && (
            <p className="text-[var(--light-text-gray)] max-w-4xl mx-auto"> 
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Slider Section - Edge to Edge */}
      <div className="relative pl-0 md:pl-[50px]">
          <style dangerouslySetInnerHTML={{__html: `
            .centres-swiper .centres-card-wrapper {
              background-color: #F5E6D3 !important;
              min-height: 280px !important;
              border-radius: 12px !important;
             
            }
            .centres-swiper .centres-card-wrapper > div {
              background-color: #F5E6D3 !important;
              min-height: 280px !important;
              border-radius: 12px !important;
            }
            .centres-swiper .centres-card-wrapper div[class*="relative"][class*="w-full"][class*="mb-4"] {
              height: 180px !important;
              background-color: white !important;
              border-radius: 12px;
              padding: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .centres-swiper .centres-card-wrapper div[class*="relative"][class*="w-full"][class*="mb-4"] img {
              object-fit: contain !important;
              max-width: 80% !important;
              max-height: 80% !important;
              margin: 0 auto;
              position: absolute;
              top: 10% !important;
              left: 50% !important;
              transform: translateX(-50%);
              padding: 10px;
            }
            .centres-swiper .centres-card-wrapper p:first-of-type {
              font-family: plus-jakarta-sans, sans-serif;
              font-size: 16px !important;
              font-weight: 400;
              color: var(--button-red);
              margin-bottom: 8px;
            }
            .centres-swiper .centres-card-wrapper p:last-of-type {
              font-family: plus-jakarta-sans, sans-serif;
              font-size: 13px;
              font-weight: 400;
              color: var(--foreground);
              margin-bottom: 16px;
            }

          `}} />
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            grabCursor={true}
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
                slidesPerView: 3.5,
                spaceBetween: 24,
              },
            }}
            navigation={{
              nextEl: ".centres-swiper-button-next",
              prevEl: ".centres-swiper-button-prev",
            }}
            className={`centres-swiper [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex ${centres.length <= 3 ? 'md:[&_.swiper-wrapper]:justify-center' : ''}`}
            loop={false}
            autoHeight={false}
          >
            {centres.map((centre) => (
              <SwiperSlide key={centre.id}>
                <div className="h-full w-full">
                  <div className="bg-white rounded-xl p-1 h-full relative">
                    <div className="centres-card-wrapper h-full flex flex-col">
                      {nameOnly ? (
                        <div className="flex-1 flex items-center justify-center text-center px-6 py-8">
                          <h3 className="font-jakarta text-lg md:text-xl font-medium text-[var(--foreground)]">
                            {centre.name}
                          </h3>
                        </div>
                      ) : (
                        <LeadershipCard
                          name={centre.name}
                          title={centre.title}
                          image={centre.image}
                          usePTagForName={true}
                        />
                      )}
                    </div>
                    {/* Button - Positioned at bottom right */}
                    <div className="absolute bottom-6 right-6 hidden">
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

        </div>

        {/* Navigation Buttons */}
        <div className="container mx-auto px-2">
          <div className="flex justify-end items-center gap-3 mt-5">
            <button className="centres-swiper-button-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
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
            <button className="centres-swiper-button-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
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

