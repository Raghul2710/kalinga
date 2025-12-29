"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import GlobalArrowButton from "../general/global-arrow_button";

const defaultConferences = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet",
    date: "August 25 · 2025",
    category: "Upcoming Conferences",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-conference-1.png",
  },
  {
    id: 2,
    title: "Innovation & Research Summit",
    date: "September 02 · 2025",
    category: "Innovation",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-conference-2.png",
  },
  {
    id: 3,
    title: "Global Education Forum",
    date: "October 15 · 2025",
    category: "Education",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-conference-3.png",
  },
];

export default function UpcomingConference({ 
  conferences = defaultConferences,
  title = "Upcoming Conferences",
  backgroundColor = "bg-[var(--light-gray)]",
  backgroundColorcard = "bg-white",
  showCategory = true,
  showDate = true,
  imageWidth = 420,
  imageHeight = 230,
  imageContainerClass = "w-full md:w-2/5",
  href = null,
  
  categoryText = "Upcoming Conferences"
}) {
  return (
    <section className={`${backgroundColor} pt-16 pb-16 mx-2 rounded-xl`}>
      <div className="container mx-auto">
        <h2 className="text-center mb-10">{title}</h2>

        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          grabCursor={true}
          pagination={{
            clickable: true,
            el: ".conference-pagination",
          }}
          onSwiper={(swiper) => {
            if (swiper.params.pagination.el) {
              swiper.pagination.init();
              swiper.pagination.render();
              swiper.pagination.update();
            }
          }}
        >
          {conferences.map((conf) => (
            <SwiperSlide key={conf.id}>
              <div className={`${backgroundColorcard} rounded-2xl shadow-sm  flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center`}>
                <div className={`${imageContainerClass} rounded-xl overflow-hidden relative h-[350px] md:h-[${imageHeight}px]`}>
                  <Image
                    src={conf.image}
                    alt={conf.title}
                    fill
                    className="rounded-xl object-contain"
                    unoptimized
                  />
                </div>

                <div className="w-full md:w-3/5 flex flex-col gap-6 md:px-0 px-5 h-full justify-around pb-5">
                  {/* Badges positioned at top right */}
                  {(showDate || showCategory) && (
                    <div className="flex md:justify-end justify-start gap-5 items-center mr-4 flex-wrap">
                      {showDate && (
                        <p className="inline-flex font-light font-plus-jakarta-sans  items-center px-2 md:px-3 py-1 rounded-lg bg-[var(--dark-green)] text-white text-xs whitespace-nowrap">
                          {conf.date}
                        </p>
                      )}
                      {showCategory && (
                        <p className="inline-flex font-light font-plus-jakarta-sans items-center px-2 md:px-3 py-1 rounded-lg bg-[var(--dark-blue)] text-white text-xs whitespace-nowrap">
                          {conf.category}
                        </p>
                      )}
                    </div>
                  )}

                  <div className="px-3">
                    <h3 className="text-2xl md:text-4xl  mb-3">
                      {conf.title}
                    </h3>
                    <p className="text-[var(--light-text-gray)] text-sm">
                      {conf.description}
                    </p>
                  </div>

                  {(conf.href || href) ? (
                    <Link href={conf.href || href}>
                      <GlobalArrowButton className="w-fit mt-1 text-sm">
                      {conf.registerButtonText || "Register Now"}
                      </GlobalArrowButton>
                    </Link>
                  ) : (
                    <GlobalArrowButton className="w-fit mt-1 text-sm">
                      {conf.registerButtonText || "Register Now"}
                    </GlobalArrowButton>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="conference-pagination flex justify-center gap-3 mt-8" />
      </div>
    </section>
  );
}

