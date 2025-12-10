"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function MediaCardSlider({
  title = "Media Gallery",
  categoryTitle = "",
  description = "",
  imageItems = [],
  videoItems = [],
  cardBgClass = "bg-white",
  nameTextClass = "text-[var(--button-red)]",
  descriptionTextClass = "text-gray-600",
  className = "",
  swiperClassName = "media-card-slider",
}) {
  // Determine which items to use - prioritize video if both provided
  const items = videoItems.length > 0 ? videoItems : imageItems;
  const isVideo = videoItems.length > 0;

  return (
    <section className={` py-16 bg-white relative ${className}`}>
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header Section */}
        <div className="text-center">
         
          <SectionHeading title={title} subtitle={categoryTitle} titleClassName="!py-3" />
          {description && (
            <p className={` ${descriptionTextClass}`}>
              {description}
            </p>
          )}
        </div>

        {/* Slider Section */}
        <div className="relative py-8">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
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
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            navigation={{
              nextEl: `.${swiperClassName}-button-next`,
              prevEl: `.${swiperClassName}-button-prev`,
            }}
            className={`${swiperClassName} !pb-12 [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex`}
            loop={false}
            autoHeight={false}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id || item.name}>
                <div className="h-full w-full">
                  <div className={`${cardBgClass} rounded-xl p-4 h-full flex flex-col border border-gray-300 border-2  transition-shadow`}>
                    {/* Media Container */}
                    <div className="relative w-full h-[250px] md:h-[350px] mb-4 rounded-lg overflow-hidden bg-gray-200">
                      {isVideo ? (
                        <>
                          {/* Video Thumbnail */}
                          {item.thumbnail ? (
                            <Image
                              src={item.thumbnail}
                              alt={item.name || "Video thumbnail"}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-300" />
                          )}
                          {/* Play Button Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 flex items-center justify-center">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="text-gray-700 ml-1"
                              >
                                <path
                                  d="M8 5v14l11-7z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                        </>
                      ) : (
                        // Image Display
                        <Image
                          src={item.image || item.thumbnail}
                          alt={item.name || "Image"}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col items-center text-center">
                      {/* Name/Title */}
                      {item.name && (
                       <SectionHeading subtitle={item.name} subtitleClassName="!py-2" />
                      )}
                      
                      {/* Description */}
                      {item.description && (
                        <p className={` ${descriptionTextClass}`}>
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-end items-center gap-3 mt-4">
            <button className={`${swiperClassName}-button-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md`}>
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
            <button className={`${swiperClassName}-button-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md`}>
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
      </div>
    </section>
  );
}

