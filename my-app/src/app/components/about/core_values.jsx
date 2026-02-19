"use client";

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SectionHeading from '../general/SectionHeading';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

const coreValues = [
  {
    id: 1,
    title: "Holistic Development",
    subtitle: "We at Kalinga University are committed to all round development of each and every student. We believe that learning should not remain confined to the classroom but aim at holistic development.",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/values/tree-with-many-leaves.svg"
  },
  {
    id: 2,
    title: "Team Spirit & Bonding",
    subtitle: "Kalinga University is an extended family where students are integrated into one family with a close bond and team spirit.",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/values/partners.svg"
  },
  {
    id: 3,
    title: "Multicultural Environment",
    subtitle: "We believe that students should learn in multicultural and multinational environment as their train of thought is broadened and they are exposed to different ideologies, practices and culture.",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/values/tree-new.svg"
  },
  {
    id: 4,
    title: "Global Diversity",
    subtitle: "We warmly welcome students from all over the world and offer them a safe and nurturing place to live, study and also get engaged in a community that is multinational.",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/values/citizens.svg"
  },
  {
    id: 5,
    title: "Illuminating The World With Light Of Knowledge",
    subtitle: "We aim to support learning that will advance human knowledge to develop and educate the leaders of tomorrow and research that tackles the most pressing problems of the global community.",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/values/ideas.svg"
  }
];

export default function CoreValues() {
  const [activeId, setActiveId] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderCard = (value, index, isActive) => (
    <div
      key={value.id}
      className={`
        relative overflow-hidden cursor-pointer
        transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)]
        ${isMobile
          ? 'w-full lg:h-[450px] md:h-[575px] h-[420px] rounded-xl'
          : `lg:min-w-[100px] md:min-w-[90px] min-w-[80px] p-5 m-2.5 ${isActive
            ? 'flex-[10000] scale-100 m-0 rounded-xl'
            : 'flex-1 rounded-lg'
          }`
        }
        ${!isMobile && index === 4 ? 'max-[718px]:hidden' : ''}
        ${!isMobile && index === 3 ? 'max-[638px]:hidden' : ''}
        ${!isMobile && index === 2 ? 'max-[558px]:hidden' : ''}
        ${!isMobile && index === 1 ? 'max-[478px]:hidden' : ''}
      `}
      style={{
        backgroundColor: isActive || isMobile ? 'white' : 'var(--button-red)'
      }}
      onClick={() => !isMobile && setActiveId(value.id)}
    >
      {isActive || isMobile ? (
        <div className="w-full h-full lg:p-5 md:p-2 p-5 transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)]">
          <div className="flex justify-center items-center lg:w-32 lg:h-32 w-20 h-20 rounded-full bg-gray-200 mb-4">
            <Image
              src={value.icon}
              alt={value.title}
              width={32}
              height={32}
              className="object-contain lg:w-20 lg:h-20 md:w-16 md:h-16 w-10 h-10"
            />
          </div>
          <div className="flex flex-col text-black core-value-title">
            <h2 className=" mb-2 md:text-4xl text-2xl transition-all duration-500 ease-out">
              {value.title}
            </h2>
            <p className="text-base opacity-100 transition-all duration-500 ease-out delay-100">
              {value.subtitle}
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          <div className="flex justify-center items-center w-16 h-16 rounded-full bg-white flex-shrink-0">
            <Image
              src={value.icon}
              alt={value.title}
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <h3
            className="text-white text-[20px] leading-[1.2] text-left flex-1"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
              wordBreak: 'break-word',
              overflowWrap: 'break-word'
            }}
          >
            {value.title}
          </h3>
        </div>
      )}
    </div>
  );

  return (
    <section className="py-16 bg-[var(--dark-blue)] mx-2 rounded-xl">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-5">
          <SectionHeading
            title="Our Core Values"
            titleClassName="!text-white text-center"

          />
        </div>

        {isMobile ? (
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: ".core-values-swiper-button-next",
                prevEl: ".core-values-swiper-button-prev",
              }}
              className="lg:h-[450px] md:h-[575px] h-[420px] core-values-swiper"
            >
              {coreValues.map((value, index) => (
                <SwiperSlide key={value.id}>
                  {renderCard(value, index, true)}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button className="cursor-pointer core-values-swiper-button-prev bg-[var(--button-red)] hover:bg-[#a2a2a2] w-10 h-10 rounded-lg flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
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

              <button className="cursor-pointer core-values-swiper-button-next bg-[var(--button-red)] hover:bg-[#a2a2a2] w-10 h-10 rounded-lg flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
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
        ) : (
          <div className="flex flex-row items-stretch overflow-hidden w-full lg:h-[450px] md:h-[575px] h-[420px]">
            {coreValues.map((value, index) => {
              const isActive = activeId === value.id;
              return renderCard(value, index, isActive);
            })}
          </div>
        )}
      </div>
    </section>
  );
}
