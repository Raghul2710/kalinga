'use client'

import { useState } from "react";
import Image from "next/image";
import GlobalArrowButton from "../general/global-arrow_button";
import SectionHeading from "../general/SectionHeading";
import Link from "next/link";
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
  initialVisibleCount = null,
  hideCheckEligibility = false,
  titleClassName = "text-white",
  cardTitleClassName = ""
}) {
  const itemsPerPage = initialVisibleCount || positions.length;
  const totalPages = Math.ceil(positions.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleKnowMore = (position) => {
    setSelectedPosition(position);
  };

  const handleCloseModal = () => {
    setSelectedPosition(null);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visiblePositions = positions.slice(startIndex, endIndex);

  return (
    <section className="w-full px-2">
      <div className="bg-[var(--dark-blue)] rounded-2xl py-16 px-2">

      <div className="container mx-auto text-center mb-12">
        <SectionHeading 
          subtitle={subtitle}
          title={title}
          subtitleClassName=""
          titleClassName={titleClassName}
          subtitleTextColor="!text-[var(--dark-orange-red-light)]"
        />
        {description && (
          <p className="text-white mt-4 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <div className="container mx-auto space-y-6">
        {visiblePositions.map((position, index) => (
          <div key={index} className={`bg-[var(--background)] rounded-[15px] shadow-lg ${useCourseCardLayout ? 'p-0 overflow-hidden' : 'p-6 sm:p-8'}`}>
            {useCourseCardLayout ? (
              // Course Promotion Card Layout
              <div className="flex flex-col lg:flex-row items-center p-8">
                {/* Left Section - Text Content */}
                <div className="flex-1">
                  {/* Title - Training Program */}
                  <h3 className={`text-lg sm:text-xl lg:text-2xl font-plus-jakarta-sans text-[var(--button-red)] mb-4 ${cardTitleClassName}`}>
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
                      <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black">
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
                <div className="flex-1 flex flex-col items-end justify-center w-full lg:w-auto">
                  {/* Image */}
                  {position.imageUrl && (
                    <div className="relative w-full max-w-[450px] h-48 sm:h-56 lg:h-64 mb-4">
                      <Image
                        src={position.imageUrl}
                        alt={position.imageAlt || position.title}
                        fill
                        className="object-cover rounded-xl" 
                      />
                    </div>
                  )}

                  {/* Buttons - Full width to match image */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-[450px]">
                    {position.knowMoreButton && (
                      <GlobalArrowButton
                        className="!bg-[var(--dark-orange-red)] !text-white hover:!bg-[var(--dark-orange-red)]/90 flex-1 justify-between w-full"
                        arrowClassName="!bg-white"
                        arrowIconClassName="!text-[var(--button-red)]"
                        onClick={() => handleKnowMore(position)}
                      >
                        {position.knowMoreButton}
                      </GlobalArrowButton>
                    )}
                    {position.registrationButton && (
                      position.registrationLink ? (
                        <a
                          href={position.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 w-full"
                        >
                          <GlobalArrowButton
                            className="!bg-[var(--button-red)] !text-white hover:!bg-[var(--button-red)]/90 flex-1 justify-between w-full"
                            arrowClassName="!bg-white"
                            arrowIconClassName="!text-[var(--button-red)]"
                            onClick={position.onRegistrationClick}
                          >
                            {position.registrationButton}
                          </GlobalArrowButton>
                        </a>
                      ) : (
                        <GlobalArrowButton
                          className="!bg-[var(--button-red)] !text-white hover:!bg-[var(--button-red)]/90 flex-1 justify-between w-full"
                          arrowClassName="!bg-white"
                          arrowIconClassName="!text-[var(--button-red)]"
                          onClick={position.onRegistrationClick}
                        >
                          {position.registrationButton}
                        </GlobalArrowButton>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : (
              // Original Layout
              <div className="flex flex-col lg:flex-row items-start md:items-center lg:justify-between gap-6">
                
                <div className="flex-1">
                  <h3 className={`text-[var(--button-red)] mb-4 ${cardTitleClassName}`}>
                    {position.title}
                  </h3>
                  <p className="leading-relaxed max-w-[650px]">
                    {position.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                {!hideCheckEligibility && (
                  <Link href={position.checkEligibilityLink || "#careerform"}>
                   <GlobalArrowButton className="!bg-[var(--dark-orange-red)] hover:!bg-[var(--background)] hover:!text-[var(--dark-orange-red)]">
                     Check Eligibility
                   </GlobalArrowButton>
                   </Link>
                )}
                 <Link href={position.applyNowLink || "#careerform"}>
                <GlobalArrowButton>Apply Now</GlobalArrowButton>
                </Link>
                </div>

              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="container mx-auto mt-8">
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-lg transition-colors ${
                  currentPage === page
                    ? "bg-[var(--button-red)] text-white"
                    : "bg-white text-[var(--button-red)] hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      )}
      </div>

      {/* Modal */}
      {selectedPosition && (
        <div 
          className="fixed inset-0 bg-[#00000094] bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[70vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[var(--button-red)]">Training Program</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Training Program Title */}
              <div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                  {selectedPosition.title}
                </h3>
              </div>

              {/* Applications */}
              {selectedPosition.applications && (
                <div>
                  <h4 className="text-lg font-semibold text-[var(--button-red)] mb-2">
                    Applications
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedPosition.applications}
                  </p>
                </div>
              )}

              {/* Who Can Participate */}
              {selectedPosition.participants && (
                <div>
                  <h4 className="text-lg font-semibold text-[var(--button-red)] mb-2">
                    Who Can Participate?
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedPosition.participants}
                  </p>
                </div>
              )}

              {/* Resource Person */}
              {selectedPosition.resourcePerson && (
                <div>
                  <h4 className="text-lg font-semibold text-[var(--button-red)] mb-2">
                    Resource Person
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedPosition.resourcePerson}
                  </p>
                </div>
              )}

              {/* Skills */}
              {selectedPosition.skills && selectedPosition.skills.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-[var(--button-red)] mb-2">
                    Key Skills And Learning Outcome
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {selectedPosition.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Date and Price */}
              <div className="flex flex-wrap gap-4 mb-4">
                {selectedPosition.startDate && (
                  <div>
                    <span className="text-sm font-semibold text-gray-600">Date: </span>
                    <span className="text-gray-700">
                      {selectedPosition.startDate}
                      {selectedPosition.endDate ? ` - ${selectedPosition.endDate}` : ''}
                    </span>
                  </div>
                )}
                {selectedPosition.price && (
                  <div>
                    <span className="text-sm font-semibold text-gray-600">Price: </span>
                    <span className="text-gray-700">{selectedPosition.price}</span>
                  </div>
                )}
              </div>

              {/* Registration Link Button */}
              {selectedPosition.registrationLink && (
                <div className="pt-4 border-t border-gray-200">
                  <a
                    href={selectedPosition.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <GlobalArrowButton
                      className="!bg-[var(--button-red)] !text-white hover:!bg-[var(--button-red)]/90"
                      arrowClassName="!bg-white"
                      arrowIconClassName="!text-[var(--button-red)]"
                    >
                      {selectedPosition.registrationButton || "Register Now"}
                    </GlobalArrowButton>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
