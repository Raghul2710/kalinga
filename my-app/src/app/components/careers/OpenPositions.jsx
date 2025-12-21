'use client'

import { useState } from "react";
import Image from "next/image";
import GlobalArrowButton from "../general/global-arrow_button";
import SectionHeading from "../general/SectionHeading";

export default function OpenPositions({
  title = "Discover opportunities that match your passion and expertise.",
  subtitle = "Open Positions",
  description = null,
  positions = [
    {
      title: "Teaching Positions",
      description:
        "Join our team of distinguished faculty members committed to academic excellence and innovation. We seek educators who inspire learning, foster research, and shape the leaders of tomorrow."
    },
    {
      title: "Non–Teaching Positions",
      description:
        "Be a part of Kalinga University's dynamic administrative and operational teams. We value professionals who bring expertise, efficiency, and integrity to support our academic mission."
    },
  ],
  useCourseCardLayout = false,
  initialVisibleCount = null
}) {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount || positions.length);
  const showLoadMore = initialVisibleCount && positions.length > initialVisibleCount && visibleCount < positions.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + initialVisibleCount, positions.length));
  };

  const visiblePositions = positions.slice(0, visibleCount);

  return (
    <section className="w-full px-2">
      <div className="bg-[var(--dark-blue)] rounded-2xl py-16 px-2">

      <div className="container mx-auto text-center mb-12">
        <SectionHeading 
          subtitle={subtitle}
          title={title}
          subtitleClassName=""
          titleClassName="text-white"
          subtitleTextColor="!text-[var(--dark-orange-red-light)]"
        />
        {description && (
          <p className="text-white mt-4 text-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <div className="container mx-auto space-y-6">
        {visiblePositions.map((position, index) => (
          <div key={index} className={`bg-[var(--background)] rounded-[15px] shadow-lg ${useCourseCardLayout ? 'p-0 overflow-hidden' : 'p-6 sm:p-8'}`}>
            {useCourseCardLayout ? (
              // Course Promotion Card Layout
              <div className="flex flex-col lg:flex-row items-center">
                {/* Left Section - Text Content */}
                <div className="flex-1 p-6 lg:p-8 xl:p-10">
                  {/* Title - Training Program */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-plus-jakarta-sans text-[var(--button-red)] mb-4">
                    {position.title}
                  </h3>
                  
                  {/* Date */}
                  {position.startDate && (
                    <div className="text-gray-600 text-sm sm:text-base mb-6">
                      <p>Date: {position.startDate}{position.endDate ? ` End Date : ${position.endDate}` : ''}</p>
                    </div>
                  )}

                  {/* Price - Registration Fee */}
                  {position.price && (
                    <div className="mb-6">
                      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                        {position.price}
                      </p>
                    </div>
                  )}

                  {/* Key Skills and Learning Outcome */}
                  {position.skills && position.skills.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg sm:text-xl font-plus-jakarta-sans text-[var(--button-red)] mb-2">
                        Key Skills And Learning Outcome
                      </h4>
                      <p className="text-sm sm:text-base text-black leading-relaxed">
                        {position.skills.join(", ")}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Section - Image and Buttons */}
                <div className="flex-1 flex flex-col">
                  {/* Image */}
                  {position.imageUrl && (
                    <div className="relative w-full h-48 sm:h-56 lg:h-64">
                      <Image
                        src={position.imageUrl}
                        alt={position.imageAlt || position.title}
                        fill
                        className="object-cover p-[25px] rounded-[40px]"
                      />
                    </div>
                  )}

                  {/* Buttons - Always horizontal, directly below image */}
                  <div className="flex flex-row gap-4 px-4 sm:px-6 sm:pb-6 pb-4">
                    {position.knowMoreButton && (
                      <GlobalArrowButton
                        className="!bg-[var(--dark-orange-red)] !text-white hover:!bg-[var(--dark-orange-red)]/90 flex-1 !w-full justify-between"
                        arrowClassName="!bg-white"
                        arrowIconClassName="!text-[var(--button-red)]"
                        onClick={position.onKnowMoreClick}
                      >
                        {position.knowMoreButton}
                      </GlobalArrowButton>
                    )}
                    {position.registrationButton && (
                      <GlobalArrowButton
                        className="!bg-[var(--button-red)] !text-white hover:!bg-[var(--button-red)]/90 flex-1 !w-full justify-between"
                        arrowClassName="!bg-white"
                        arrowIconClassName="!text-[var(--button-red)]"
                        onClick={position.onRegistrationClick || (() => {
                          if (position.registrationLink) {
                            window.open(position.registrationLink, '_blank', 'noopener,noreferrer');
                          }
                        })}
                      >
                        {position.registrationButton}
                      </GlobalArrowButton>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              // Original Layout
              <div className="flex flex-col lg:flex-row items-start md:items-center lg:justify-between gap-6">
                
                <div className="flex-1">
                  <h3 className="text-[var(--button-red)] mb-4">
                    {position.title}
                  </h3>
                  <p className="leading-relaxed max-w-[650px]">
                    {position.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">

                 <GlobalArrowButton className="!bg-[var(--dark-orange-red)] hover:!bg-[var(--background)] hover:!text-[var(--dark-orange-red)]">
                   Check Eligibility
                 </GlobalArrowButton>

                <GlobalArrowButton>Apply Now</GlobalArrowButton>
                </div>

              </div>
            )}
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {showLoadMore && (
        <div className="container mx-auto mt-8 text-center">
          <button
            onClick={handleLoadMore}
            className="text-white cursor-pointer hover:underline"
          >
            Load More
          </button>
        </div>
      )}
      </div>

    </section>
  );
}
