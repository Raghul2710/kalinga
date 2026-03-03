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
    image: "https://cdn.kalingauniversity.ac.in/campus-life/Infrastructure2.webp",
  },
  {
    id: 2,
    name: "Solar-Powered Campus",
    image: "https://cdn.kalingauniversity.ac.in/Home/02+C1.png",
  },
  {
    id: 3,
    name: "Smart Classrooms",
    image: "https://cdn.kalingauniversity.ac.in/academic-facilities/digitalclassrooms.webp",
  },
  {
    id: 4,
    name: "Laboratories",
    image: "https://cdn.kalingauniversity.ac.in/academic-facilities/modernlabrotary.webp",
  },
  {
    id: 5,
    name: "IT Labs",
    image: "https://cdn.kalingauniversity.ac.in/academic-facilities/elearning.webp",
  },
  {
    id: 6,
    name: "Sports Centre (Indoor/Outdoor)",
    image: "https://cdn.kalingauniversity.ac.in/facilities/DSC00047.webp",
  },
  {
    id: 7,
    name: "Auditorium",
    image: "https://cdn.kalingauniversity.ac.in/academic-facilities/seminar-rooms.webp",
  },
  {
    id: 8,
    name: "Moot Court",
    image: "https://cdn.kalingauniversity.ac.in/academic-facilities/mootcourt.webp",
  },
  {
    id: 9,
    name: "Counseling Rooms",
    image: "https://cdn.kalingauniversity.ac.in/academic-facilities/conselling.webp",
  },
  {
    id: 10,
    name: "Board Rooms",
    image: "https://cdn.kalingauniversity.ac.in/academic-facilities/businesslab.webp",
  },
  {
    id: 11,
    name: "Well-Stocked Central Library",
    image: "https://cdn.kalingauniversity.ac.in/admission/library.webp",
  },
  {
    id: 12,
    name: "Green House",
    image: "https://cdn.kalingauniversity.ac.in/Home/green-house.webp",
  },
  {
    id: 13,
    name: "Animal House Facility",
    image: "https://cdn.kalingauniversity.ac.in/academic-facilities/animal+house.webp",
  },
  {
    id: 14,
    name: "Recreational Corners",
    image: "https://cdn.kalingauniversity.ac.in/campus-facilities/recreation.webp",
  },
  {
    id: 15,
    name: "Wi-Fi Campus",
    image: "https://cdn.kalingauniversity.ac.in/campus-facilities/wifienabledcampus.webp",
  },
  {
    id: 16,
    name: "24/7 Security",
    image: "https://cdn.kalingauniversity.ac.in/campus-life/security2.jpeg",
  },
  {
    id: 17,
    name: "University Health Clinic",
    image: "https://cdn.kalingauniversity.ac.in/health-clinic/health-clinic-1.webp",
  },
  {
    id: 18,
    name: "Fully-Equipped Gym",
    image: "https://cdn.kalingauniversity.ac.in/facilities/gym.webp",
  },
  {
    id: 19,
    name: "Mini Markets (Cafeterias, Stationery Shops, Salons, & Fruit Shops)",
    image: "https://cdn.kalingauniversity.ac.in/mini-market/snacks-shop-1.webp",
  },
  {
    id: 20,
    name: "Transportation Facility",
    image: "https://cdn.kalingauniversity.ac.in/campus-life/transport-3.webp",
  },
  {
    id: 21,
    name: "Banking & ATM Facility",
    image: "https://cdn.kalingauniversity.ac.in/mini-market/MiniMarket-ATM.webp",
  },
  {
    id: 22,
    name: "Selfie Points",
    image: "https://cdn.kalingauniversity.ac.in/common/student.jpg",
  },
  {
    id: 22,
    name: "Business Lab",
    image: "https://cdn.kalingauniversity.ac.in/departments/Faculty+of+Commerece+and+Management/01.webp",
  },
];

export default function Facility({
  title = "Step into a World-Class Infrastructure",
  subtitle = "An Environment That Empowers Students",
  description = " Step into an award-winning university designed to achieve academic excellence and empower next-gen learners. Our state-of-the-art facilities and encouraging campus environment boost students' academic success and personality development by promoting learning, research & development, and innovation.",
  titleClassName = "text-center",
  subtitleClassName = "text-center !text-[var(--button-red)]",
  facilities = defaultFacilities,
  className = "py-16",
}) {
  return (
    <section className={`${className} bg-white relative`}>
      <div className="px-2">
        {/* Header Section */}
        <SectionHeading
          subtitleClassName={subtitleClassName}
          titleClassName={titleClassName}
          subtitle={subtitle}
          title={title}
        />
        {description && (
          <p className="text-center text-gray-600 max-w-6xl mx-auto mt-4 mb-4">
            {description}
          </p>
        )}
        {/* Slider Section */}
        <div className="relative overflow-visible">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            centeredSlides={true}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
                centeredSlides: false,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 24,
                centeredSlides: true,
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
                      <div className="facility-image-container absolute bottom-0 left-0 right-0 h-[250px] group-hover:h-[300px] transition-all duration-300">
                        <Image
                          src={facility.image}
                          alt={facility.name}
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>
                      {/* Label - Overlaid on image */}
                      <div className="facility-label-container absolute bottom-0 left-0 right-0 bg-white px-4 py-3 m-3 rounded-lg z-10 group-hover:bg-[var(--button-red)] transition-all duration-300">
                        <p className="facility-label-text text-[var(--foreground)] font-semibold text-center group-hover:text-white transition-all duration-300">
                          {facility.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx global>{`
            .facility-swiper .swiper-slide-active .group {
              z-index: 50 !important;
              box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) !important;
            }
            .facility-swiper .swiper-slide-active .facility-image-container {
              height: 300px !important;
            }
            .facility-swiper .swiper-slide-active .facility-label-container {
              background-color: var(--button-red) !important;
            }
            .facility-swiper .swiper-slide-active .facility-label-text {
              color: white !important;
            }
          `}</style>

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

