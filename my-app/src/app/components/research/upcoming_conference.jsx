"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import GlobalArrowButton from "../general/global-arrow_button";

const conferences = [
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

export default function UpcomingConference() {
  return (
    <section className="bg-[var(--light-gray)] pt-16 pb-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center mb-10">Upcoming Conferences</h2>

        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1}
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
              <div className="bg-white rounded-2xl shadow-sm p-3 md:p-4 flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-2/5">
                  <Image
                    src={conf.image}
                    alt={conf.title}
                    width={420}
                    height={230}
                    className="rounded-xl object-cover w-full h-full"
                  />
                </div>

                <div className="w-full md:w-3/5 flex flex-col gap-6">
                  {/* Badges positioned at top right */}
                  <div className="flex justify-end gap-2 items-center">
                    <p className="inline-flex items-center px-2 md:px-3 py-1 rounded-lg bg-[var(--dark-green)] text-white text-xs whitespace-nowrap">
                      {conf.date}
                    </p>
                    <p className="inline-flex items-center px-2 md:px-3 py-1 rounded-lg bg-[var(--dark-blue)] text-white text-xs whitespace-nowrap">
                      {conf.category}
                    </p>
                  </div>

                  <div>
                    <h3 className="!text-4xl font-semibold mb-3">
                      {conf.title}
                    </h3>
                    <p className="text-[var(--light-text-gray)] text-sm">
                      {conf.description}
                    </p>
                  </div>

                  <GlobalArrowButton className="w-fit mt-1 text-sm">
                    Register Now
                  </GlobalArrowButton>
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


