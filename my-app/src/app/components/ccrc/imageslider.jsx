"use client"
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ImageSlider({ 
  items = [],
  className = "" 
}) {
  // Default items if none provided
  const defaultItems = [
    {
      id: 1,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      id: 2,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      id: 3,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
      text: "Ut enim ad minim veniam, quis nostrud exercitation"
    },
    {
      id: 4,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
      text: "Ut enim ad minim veniam, quis nostrud exercitation"
    }
  ];

  const slides = items.length > 0 ? items : defaultItems;

  return (
    <div className={`relative ${className}`}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}   
        loop={false}
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
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={{
          nextEl: ".ccrc-image-slider-button-next",
          prevEl: ".ccrc-image-slider-button-prev",
        }}
        className="ccrc-image-slider"
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id || item.image}>
            <div className="flex flex-col h-full">
              {/* Image */}
              <div className="relative w-full aspect-[9/12] rounded-lg overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.text || "Slide image"}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Text below image */}
              <p className="text-base text-white text-center px-2">
                {item.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="flex justify-end items-center gap-3 mt-6">
        <button 
          className="ccrc-image-slider-button-prev w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
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
          className="ccrc-image-slider-button-next w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
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
  );
}
