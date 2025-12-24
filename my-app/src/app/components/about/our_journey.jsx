"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import SectionHeading from "../general/SectionHeading";

const journeyData = [
  {
    year: "2025",
    title: "Establishment of Centre of Excellence (JustAuto), NIRF Rank Band 101-150 for 4th Consecutive Year.",
    description: "",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/our-jounary-1.webp",
    cardBg: "bg-white"
  },
  {
    year: "2024",
    title: "Establishment of 2 Centres of Excellence (EBLU and MSME). MSME HI Recognition, NIRF  Rank Band 101-150 for third consecutive year, Launch of SDG Logo.",
    description: "",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/our-jounary-2.webp",
    cardBg: "bg-[var(--lite-sand)]"
  },
  {
    year: "2023",
    title: "SIRO Recognition. Establishment of Kalinga Incubation Foundation (KIF), Corporate Training & Consultancy Division, Centre Of Excellence (BDS). NIRF Rank Band 101–150, India Today Ranking (51).",
    description: "",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/library-new.webp",
    cardBg: "bg-white"
  },
  {
    year: "2022",
    title: "Establishment of Centre of Excellence (Technoviz), UBA, IEEE KU SB, MBSI, CCRC. NIRF Rank Band 101–150, Establishment of SDG Cell.",
    description: "",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/Phd-mba.webp",
    cardBg: "bg-[var(--lite-sand)]"
  },
  {
    year: "2021",
    title: "NIRF Rank Band 151–200, NAAC Accreditation",
    description: "",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/about-kalinga.webp",
    cardBg: "bg-white"
  },
  {
    year: "2020",
    title: "Establishment of Central Instrumentation Facility",
    description: "",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/phd-biotechnology-n.webp",
    cardBg: "bg-[var(--lite-sand)]"
  },
  {
    year: "2019",
    title: "Establishment of IIC, Kalinga University",
    description: "",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/mca.webp",
    cardBg: "bg-white"
  }
];

export default function OurJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const timelineContainerRef = useRef(null);
  const dotRefs = useRef([]);
  const [lineStyles, setLineStyles] = useState([]);

  useEffect(() => {
    const updateLinePositions = () => {
      if (timelineContainerRef.current && dotRefs.current.length > 0) {
        const container = timelineContainerRef.current;
        const containerRect = container.getBoundingClientRect();
        // Responsive gap: smaller on mobile, larger on desktop
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        const gap = isMobile ? 8 : isTablet ? 12 : 20;
        const newLineStyles = [];

        for (let i = 0; i < dotRefs.current.length - 1; i++) {
          const currentDot = dotRefs.current[i];
          const nextDot = dotRefs.current[i + 1];

          if (currentDot && nextDot) {
            const currentRect = currentDot.getBoundingClientRect();
            const nextRect = nextDot.getBoundingClientRect();

            // Calculate center positions relative to container
            const currentCenter = currentRect.left + currentRect.width / 2 - containerRect.left;
            const nextCenter = nextRect.left + nextRect.width / 2 - containerRect.left;

            // Line starts from current dot center + gap, ends at next dot center - gap
            const lineLeft = currentCenter + gap;
            const lineWidth = (nextCenter - currentCenter) - (gap * 2);

            newLineStyles.push({
              left: `${lineLeft}px`,
              width: `${lineWidth}px`,
            });
          }
        }

        setLineStyles(newLineStyles);
      }
    };

    const timer = setTimeout(updateLinePositions, 0);
    window.addEventListener('resize', updateLinePositions);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateLinePositions);
    };
  }, [activeIndex]);

  // Trigger animation on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      const firstSlide = document.querySelector('.journey-card-reveal');
      if (firstSlide) {
        firstSlide.classList.add('animate');
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-[var(--dark-blue)] relative overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        /* Desktop only - custom wide slides */
        @media (min-width: 1024px) {
          .journey-swiper .swiper-slide {
            width: 66.666% !important;
            overflow: visible !important;
          }
          .journey-swiper .swiper-wrapper {
            align-items: stretch;
            overflow: visible !important;
            padding-right: 33.333%;
          }
          .swiper-slide-next .journey-card-content , .swiper-slide-prev .journey-card-content {
            background-color: var(--lite-sand) !important;
          }
          .journey-swiper {
            overflow: visible !important;
          }
          .journey-swiper .swiper {
            overflow: visible !important;
          }
        }
        .timeline-dot-wrapper {
          position: relative;
        }
        .timeline-segment {
          position: absolute;
          top: 8px;
          height: 2px;
          background-color: rgba(162, 162, 162, 1);
          z-index: 0;
          transition: background-color 0.3s ease;
        }
        .timeline-segment.active {
          background-color: var(--dark-orange-red);
        }
        @media (max-width: 767px) {
          .timeline-segment {
            top: 5px;
            height: 1.5px;
          }
          .timeline-dot-wrapper {
            min-width: 40px;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .timeline-segment {
            top: 6.5px;
            height: 1.75px;
          }
        }
        .timeline-progress-line {
          position: absolute;
          top: 8px;
          left: 8px;
          height: 2px;
          background-color: var(--dark-orange-red);
          z-index: 1;
          transition: width 0.5s ease-in-out;
        }
        /* Card reveal animation - applied to full card */
        .journey-card-reveal {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .journey-card-reveal {
            overflow: visible !important;
          }
        }
        .journey-card-reveal.animate {
          clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          animation: rollFromLeft 2s ease-in-out forwards;
        }
        @keyframes rollFromLeft {
          from {
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          }
          to {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
        @media (min-width: 768px) {
          .journey-card-reveal.animate {
            clip-path: polygon(-20% 0, 0 0, 0 100%, -20% 100%);
            animation: rollFromLeftDesktop 2s ease-in-out forwards;
          }
          @keyframes rollFromLeftDesktop {
            from {
              clip-path: polygon(-20% 0, -20% 0, -20% 100%, -20% 100%);
            }
            to {
              clip-path: polygon(-20% 0, 100% 0, 100% 100%, -20% 100%);
            }
          }
        }
        .journey-card-content {
          overflow: hidden;
          width: 100%;
          height: 100%;
        }
        @media (min-width: 768px) {
          .journey-card-content {
            overflow: visible !important;
          }
        }
        .journey-card-content img {
          animation: scaleDown 2s ease-in-out forwards;
        }
        @keyframes scaleDown {
          from {
            transform: scale(1.5);
          }
          to {
            transform: scale(1);
          }
        }
      `}} />
      <div className="container mx-auto px-2 md:px-4">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <SectionHeading
            title="Our Journey"
            titleClassName="text-white"
          />
        </div>

        {/* Content Cards Swiper */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4 md:px-6 overflow-x-visible">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            speed={1000}
            
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 200,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 1.5,
                spaceBetween: 200,
                centeredSlides: false,
              },
            }}
            navigation={{
              nextEl: ".journey-swiper-button-next",
              prevEl: ".journey-swiper-button-prev",
            }}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
              // Reset animation by removing and re-adding animate class
              const slides = document.querySelectorAll('.journey-card-reveal');
              slides.forEach(slide => slide.classList.remove('animate'));
              setTimeout(() => {
                if (slides[swiper.realIndex]) {
                  slides[swiper.realIndex].classList.add('animate');
                }
              }, 10);
            }}
            className="journey-swiper"
          >
            {journeyData.map((item, index) => (
              <SwiperSlide key={index} className="md:overflow-visible">
                <div className={`journey-card-reveal relative rounded-2xl overflow-hidden shadow-lg h-full min-h-[280px] md:min-h-[400px] md:overflow-visible ${activeIndex === index ? 'animate' : ''}`}>
                  <div className="journey-card-content relative flex flex-col md:flex-row items-stretch h-full bg-[var(--background)] rounded-2xl overflow-hidden md:overflow-visible">
                    {/* Image - On Top (Mobile) / On Left (Desktop) */}
                    <div className="relative h-[180px] md:h-full min-h-[180px] md:min-h-[400px] w-full md:w-[50%] md:-ml-[20%] md:z-50">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded-t-2xl md:rounded-2xl md:mt-5 md:!h-[360px] md:relative md:z-50"
                      />
                    </div>

                    {/* Text Content - Below Image (Mobile) / On Right (Desktop) */}
                    <div className="rounded-b-2xl md:rounded-r-2xl p-3 md:p-5 lg:p-4 flex flex-col justify-center flex-1 md:z-10">
                      <div 
                        className="text-[var(--button-red)] font-stix text-3xl md:text-6xl font-bold mb-2 md:mb-4"
                        style={{
                          WebkitTextStroke: '1px var(--button-red)',
                          WebkitTextFillColor: 'transparent',
                          color: 'transparent',
                          fontWeight: '500',
                        }}
                      >
                        {item.year}
                      </div>
                      <h3 className="text-[var(--foreground)] font-stix font-medium text-base md:text-xl lg:text-[20px] mb-2 md:mb-4">
                        {item.title}
                      </h3>
                      <div className="space-y-1.5 md:space-y-3">
                        <p className="text-[var(--light-text-gray)] text-xs md:text-sm lg:text-base leading-relaxed line-clamp-2 md:line-clamp-none">
                          {item.description}
                        </p>
                        <p className="text-[var(--light-text-gray)] text-xs md:text-sm lg:text-base leading-relaxed line-clamp-2 md:line-clamp-none">
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Markers and Navigation */}
          <div className="relative flex items-center justify-between">
            {/* Previous Button */}
            <button className="cursor-pointer journey-swiper-button-prev bg-[var(--button-red)] hover:bg-[#a2a2a2] w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center relative top-[-6px] sm:top-[-8px] md:top-[-10px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white sm:w-5 sm:h-5 md:w-5 md:h-5"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Year Markers */}
            <div ref={timelineContainerRef} className="flex-1 flex items-center justify-between mx-2 sm:mx-4 md:mx-6 lg:mx-8 relative">
              {/* Timeline Segments */}
              {lineStyles.map((style, index) => (
                <div
                  key={index}
                  className={`timeline-segment ${index < activeIndex ? 'active' : ''}`}
                  style={style}
                />
              ))}

              {journeyData.map((item, index) => (
                <div
                  key={index}
                  className="timeline-dot-wrapper flex flex-col items-center cursor-pointer relative z-10"
                  onClick={() => {
                    if (swiperInstance) {
                      swiperInstance.slideTo(index);
                      setActiveIndex(index);
                    }
                  }}
                >
                  <div
                    ref={(el) => {
                      if (el) dotRefs.current[index] = el;
                    }}
                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full mb-1 sm:mb-1.5 md:mb-2 transition-all relative z-10 ${
                      activeIndex === index
                        ? "bg-[var(--button-red)] scale-125 sm:scale-110 md:scale-125"
                        : "bg-[#A2A2A2]"
                    }`}
                  ></div>
                  <span
                    className={`text-xs sm:text-sm md:text-base font-plus-jakarta-sans transition-colors ${
                      activeIndex === index
                        ? "text-white font-semibold"
                        : "text-white"
                    }`}
                  >
                    {item.year}
                  </span>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button className="cursor-pointer journey-swiper-button-next bg-[var(--button-red)] hover:bg-[#a2a2a2] w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center relative top-[-6px] sm:top-[-8px] md:top-[-10px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white sm:w-5 sm:h-5 md:w-5 md:h-5"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
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

