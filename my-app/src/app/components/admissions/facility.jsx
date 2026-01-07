"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SectionHeading from "../general/SectionHeading";
const defaultFacilities = [
  {
    id: 1,
    name: "Sustainable Campus",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Infrastructure2.webp",
  },
  {
    id: 2,
    name: "Solar-Powered Campus",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/about-banner.webp",
  },
  {
    id: 3,
    name: "Smart Classrooms",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/digitalclassrooms.webp",
  },
  {
    id: 4,
    name: "Laboratories",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/modernlabrotary.webp",
  },
  {
    id: 5,
    name: "IT Labs",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/elearning.webp",
  },
  {
    id: 6,
    name: "Sports Centre (Indoor/Outdoor)",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/DSC00047.webp",
  },
  {
    id: 7,
    name: "Auditorium",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/seminar-rooms.webp",
  },
  {
    id: 8,
    name: "Moot Court",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/mootcourt.webp",
  },
  {
    id: 9,
    name: "Counseling Rooms",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/conselling.webp",
  },
  {
    id: 10,
    name: "Board Rooms",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/businesslab.webp",
  },
  {
    id: 11,
    name: "Well-Stocked Central Library",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/library.webp",
  },
  {
    id: 12,
    name: "Green House",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/laboratories/laboratories-glimpse1.webp",
  },
  {
    id: 13,
    name: "Farm / Medicinal Garden",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/animal+house.webp",
  },
  {
    id: 14,
    name: "Recreational Corners",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-facilities/recreation.webp",
  },
  {
    id: 15,
    name: "Wi-Fi Campus",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-facilities/wifienabledcampus.webp",
  },
  {
    id: 16,
    name: "24/7 Security",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/security2.jpeg",
  },
  {
    id: 17,
    name: "University Health Clinic",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Health+Clinic1.webp",
  },
  {
    id: 18,
    name: "Fully-Equipped Gym",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/gym.webp",
  },
  {
    id: 19,
    name: "Mini Markets (Cafeterias, Stationery Shops, Salons, & Fruit Shops)",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/mini-market/snacks-shop-1.webp",
  },
  {
    id: 20,
    name: "Transportation Facility",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/transport-3.webp",
  },
  {
    id: 21,
    name: "Banking & ATM Facility",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/mini-market/MiniMarket-ATM.webp",
  },
  {
    id: 22,
    name: "Selfie Points",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  },
];

export default function Facility({
  title = "Experience A World-Class Infrastructure",
  subtitle = "Real Stories. Real Success.",
  description = " Step into an award-winning university designed to achieve academic excellence and empower next-gen learners. Our state-of-the-art facilities and encouraging campus environment boost students' academic success and personality development by promoting learning, research & development, and innovation.",
  titleClassName = "text-center",
  subtitleClassName = "text-center !text-[var(--button-red)]",
  facilities = defaultFacilities,
}) {
  return (
    <section className="py-16 bg-white relative">
      <div className="px-2">
        {/* Header Section */}
        <SectionHeading
          subtitleClassName={subtitleClassName}
          titleClassName={titleClassName}
          subtitle={subtitle}
          title={title}
        />
        {description && (
          <p className="text-center text-gray-600 max-w-4xl mx-auto mt-4 mb-8">
            {description}
          </p>
        )}
        {/* Slider Section */}
        <div className="relative overflow-visible">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 24,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={1000}
            navigation={{
              nextEl: ".facility-swiper-button-next",
              prevEl: ".facility-swiper-button-prev",
            }}
            className="facility-swiper !pb-5 pt-5 [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:items-stretch [&_.swiper-wrapper]:overflow-visible [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex [&_.swiper-slide]:overflow-visible p-5"
            autoHeight={false}
          >
            {facilities.map((facility) => (
              <SwiperSlide key={facility.id} className="!overflow-visible">
                <div className="h-full w-full">
                  <div className="bg-white rounded-xl overflow-visible h-full group-hover:z-[50] relative transition-all duration-300 cursor-pointer group group-hover:shadow-xl">
                    {/* Image Container - Fixed wrapper with padding for upward growth (250px visible + 50px padding = 300px total) */}
                    <div className="relative w-full min-h-[300px] overflow-hidden rounded-xl">
                      {/* Image - Positioned at bottom, grows upward on hover */}
                      <div className="absolute bottom-0 left-0 right-0 h-[250px] group-hover:h-[300px]  transition-all duration-300">
                        <Image
                          src={facility.image}
                          alt={facility.name}
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>
                      {/* Label - Overlaid on image */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white px-4 py-3 m-3 rounded-lg z-10 group-hover:bg-[var(--button-red)] transition-all duration-300">
                        <p className="text-[var(--foreground)] font-semibold text-center group-hover:text-white transition-all duration-300">
                          {facility.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-end items-center gap-3">
            <button className="cursor-pointer facility-swiper-button-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
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
            <button className="cursor-pointer facility-swiper-button-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
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

