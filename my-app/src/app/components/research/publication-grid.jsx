"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function PublicationGrid({ 
  stats = [
    {
      title: "Research Publications",
      value: "3360 +",
      description: "Kalinga University has produced a strong body of research publications in reputed national and international journals, reflecting academic depth and innovation.",
    },
    // {
    //   title: "Startups",
    //   value: "6 +",
    //   description: "Through a strong incubation ecosystem, the university has nurtured multiple startups that promote entrepreneurship, innovation, and industry impact.",
    // },
    {
      title: "Patents",
      value: "510 +",
      description: "Our institution actively supports patent filing and innovation, resulting in numerous granted and filed patents that translate research into real-world solutions.",
    },
    {
      title: "H-Index",
      value: "19 +",
      description: "A healthy H-Index highlights the quality, consistency, and global impact of research contributions by our faculty and scholars.",
    },
    {
      title: "Research Labs",
      value: "90 +",
      description: "Equipped with state-of-the-art infrastructure, our research labs provide hands-on exposure and advanced experimentation facilities across disciplines.",
    },
    {
      title: "Citations",
      value: "2136 +",
      description: "High citation counts demonstrate the relevance, credibility, and global recognition of research carried out at Kalinga University.",
    },
  ]
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const desktopPrevRef = useRef(null);
  const desktopNextRef = useRef(null);
  const mobileSwiperRef = useRef(null);
  const desktopSwiperRef = useRef(null);
  const useSwiper = stats.length > 4;

  useEffect(() => {
    // Update navigation after refs are ready
    const updateNavigation = () => {
      if (mobileSwiperRef.current && prevRef.current && nextRef.current) {
        if (mobileSwiperRef.current.navigation) {
          mobileSwiperRef.current.params.navigation.prevEl = prevRef.current;
          mobileSwiperRef.current.params.navigation.nextEl = nextRef.current;
          mobileSwiperRef.current.navigation.init();
          mobileSwiperRef.current.navigation.update();
        }
      }
      if (desktopSwiperRef.current && desktopPrevRef.current && desktopNextRef.current) {
        if (desktopSwiperRef.current.navigation) {
          desktopSwiperRef.current.params.navigation.prevEl = desktopPrevRef.current;
          desktopSwiperRef.current.params.navigation.nextEl = desktopNextRef.current;
          desktopSwiperRef.current.navigation.init();
          desktopSwiperRef.current.navigation.update();
        }
      }
    };

    const timer = setTimeout(updateNavigation, 400);
    window.addEventListener('resize', updateNavigation);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateNavigation);
    };
  }, [stats]);

  const StatCard = ({ stat, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
      if (textRef.current) {
        const lineHeight = parseInt(window.getComputedStyle(textRef.current).lineHeight);
        const height = textRef.current.scrollHeight;
        const lines = Math.round(height / lineHeight);
        setShowButton(lines > 2);
      }
    }, [stat.description]);

    return (
      <div
        key={index}
        className="bg-[var(--light-gray)] min-h-[320px] hover:bg-[var(--dark-skin)] rounded-lg p-4 text-left transition-colors flex flex-col justify-between"
      >
        <div>
          <h3 className="mb-2">{stat.title}</h3>
          <div className="w-full h-px bg-black mb-4"></div>
        </div>
        <div>
          <h3 className="!text-6xl mb-3">{stat.value}</h3>
          <p 
            ref={textRef}
            className={`text-[var(--light-text-gray)] ${!isExpanded ? 'line-clamp-2' : ''}`}
          >
            {stat.description}
          </p>
          {showButton && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[var(--button-red)] text-sm font-semibold mt-2 hover:underline transition-all"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-2 py-16">
      {/* Mobile Swiper */}
      <div className="md:hidden relative">
        <Swiper
          onSwiper={(swiper) => {
            mobileSwiperRef.current = swiper;
          }}
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={1.2}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
            enabled: true,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onInit={(swiper) => {
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="publication-swiper"
        >
          {stats.map((stat, index) => (
            <SwiperSlide key={index}>
              <StatCard stat={stat} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons - Bottom */}
        <div className="flex justify-end items-center gap-3 mt-4">
          <button
            ref={prevRef}
            className="publication-swiper-button-prev w-10 h-10 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
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
            className="publication-swiper-button-next w-10 h-10 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
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

      {/* Desktop - Swiper if more than 4, Grid if 4 or less */}
      {useSwiper ? (
        <div className="hidden md:block relative">
          <Swiper
            onSwiper={(swiper) => {
              desktopSwiperRef.current = swiper;
            }}
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={4}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
            navigation={{
              prevEl: desktopPrevRef.current,
              nextEl: desktopNextRef.current,
              enabled: true,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = desktopPrevRef.current;
              swiper.params.navigation.nextEl = desktopNextRef.current;
            }}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="publication-swiper-desktop"
          >
            {stats.map((stat, index) => (
              <SwiperSlide key={index}>
                <StatCard stat={stat} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons - Bottom */}
          <div className="flex justify-end items-center gap-3 mt-4">
            <button
              ref={desktopPrevRef}
              className="publication-swiper-desktop-button-prev w-10 h-10 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
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
              ref={desktopNextRef}
              className="publication-swiper-desktop-button-next w-10 h-10 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
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
      ) : (
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}