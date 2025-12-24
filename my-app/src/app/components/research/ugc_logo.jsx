"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import GlobalRedPlainButton from "../general/global-red_plain_button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function UGCLogo() {
  const [activeIndex, setActiveIndex] = useState(2); // Start with center logo (index 2)
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);
  const logos = [
    {
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-1.png",
      alt: "Survey of India",
      name: "Survey of India",
    },
    {
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-2.png",
      alt: "NCTE",
      name: "NCTE",
    },
    {
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-3.png",
      alt: "Council of Science & Technology",
      name: "University Grants Commission",
    },
    {
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-4.png",
      alt: "Association of Indian Universities",
      name: "Association of Indian Universities",
    },
    {
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-5.png",
      alt: "Pharmacy Council of India",
      name: "Pharmacy Council of India",
    },
    {
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-1.png",
      alt: "Survey of India",
      name: "Survey of India",
    },
    {
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-2.png",
      alt: "NCTE",
      name: "NCTE",
    },
    {
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-3.png",
      alt: "Council of Science & Technology",
      name: "University Grants Commission",
    },
    {
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-4.png",
      alt: "Association of Indian Universities",
      name: "Association of Indian Universities",
    },
    {
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-5.png",
      alt: "Pharmacy Council of India",
      name: "Pharmacy Council of India",
    },
  ];

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
      swiperRef.current.updateSlides();
      swiperRef.current.updateSlidesClasses();
    }
    
    // Check if mobile on mount and resize
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 1024);
      }
    };
    checkMobile();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  return (
    <div className="container mx-auto py-16 px-6">
      {/* Slider View for All Screen Sizes */}
      <div className="relative">
        <style dangerouslySetInnerHTML={{__html: `
          .ugc-swiper-wrapper .swiper-wrapper {
            transition-duration: 800ms !important;
          }
          .ugc-swiper-wrapper .swiper-slide.center-highlight > div > div {
            outline: 1px solid rgba(59, 130, 246, 0.5);
            box-shadow: 0 0 15px 3px rgba(59, 130, 246, 0.4) !important;
            transform: scale(1.1) !important;
            z-index: 10;
          }
        `}} />
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          loopAdditionalSlides={2}
          speed={800}
          allowTouchMove={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
              loopAdditionalSlides: 5,
            },
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          onInit={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.realIndex);
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="relative !p-5 ugc-swiper-wrapper"
        >
          {logos.map((logo, index) => {
            // Calculate which slide should be highlighted as center
            // On mobile (1 slide): center is the active slide itself
            // On desktop (5 slides): center is 2 positions ahead
            const originalLogoIndex = index % 5;
            const centerOffset = isMobile ? 0 : 2;
            const centerIndex = (activeIndex + centerOffset) % 5;
            const isCenter = originalLogoIndex === centerIndex;
            
            return (
              <SwiperSlide key={index} className={isCenter ? "center-highlight" : ""}>
                <div className="relative flex flex-col items-center">
                  <div className="relative rounded-full overflow-hidden transition-all duration-300 bg-white">
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
            );
          })}
        </Swiper>

        {/* Dynamic Button for Active Logo */}
        <div className="flex flex-col items-center w-full px-4 mt-6">
          <div className="w-px h-8 border-2 border-dashed border-gray-500"></div>
          <div className="mt-3 w-full max-w-md">
            <GlobalRedPlainButton className="w-full text-sm px-4 py-3">
              {logos[activeIndex]?.name || "University Grants Commission"}
            </GlobalRedPlainButton>
          </div>
        </div>
      </div>
    </div>
  );
}

