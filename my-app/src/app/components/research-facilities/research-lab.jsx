"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ImageContent from "../ccrc/imagecontent";

const researchHighlights = [
  {
    id: 1,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research-facilities/researchfacilities-labimage.webp",
    title: "Research Facilities",
    description: "Turn your research work into impactful discoveries through our state-of-the-art laboratories, high-tech instrumentation, and dedicated research centers equipped with cutting-edge tools for groundbreaking research across all disciplines.",
    buttonText: "Know More",
    buttonLink: "/laboratories",
  },
  {
    id: 2,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/assocham.webp",
    title: "",
    description: "Kalinga University has received prestigious awards from ASSOCHAM for its remarkable contribution towards research and academic excellence. Awarded Best University in Promoting Research, East Zone by ASSOCHAM in 2022. Awarded Best Private University in Central India by ASSOCHAM in Feb 2020.",
    buttonText: null,
    buttonLink: null,
  }
];

export default function ResearchLab() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <section className="research-lab-wrapper py-8 relative">
      <style jsx global>{`
        /* Restore original design overrides */
        .research-lab-wrapper img {
          width: 100% !important;
          max-width: 900px;
          height: 260px !important;
          border-radius: 16px;
        }
        .research-lab-wrapper .image-container,
        .research-lab-wrapper .relative {
          display: flex;
          justify-content: center;
        }
      `}</style>

      <div className="container mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{ prevEl, nextEl }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="research-lab-swiper"
        >
          {researchHighlights.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="px-0">
                <ImageContent
                  imageSrc={item.imageSrc}
                  title={item.title}
                  subtitle={null}
                  description={item.description}
                  buttonText={item.buttonText || ""}
                  buttonLink={item.buttonLink}
                  readmore={!!item.buttonLink} // Only show button if link exists
                  hasImage={true}
                  imageWidth={900}
                  imageHeight={260}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-end items-center gap-3 px-4 w-full">
          <button
            ref={(node) => setPrevEl(node)}
            className="research-swiper-button-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#c41e3a] flex items-center justify-center hover:opacity-90 transition-all shadow-md cursor-pointer"
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            ref={(node) => setNextEl(node)}
            className="research-swiper-button-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#c41e3a] flex items-center justify-center hover:opacity-90 transition-all shadow-md cursor-pointer"
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
                strokeWidth="1.5"
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
