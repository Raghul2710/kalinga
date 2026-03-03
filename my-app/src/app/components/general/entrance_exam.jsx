"use client"
import React from 'react'
import Image from 'next/image'
import GlobalArrowButton from './global-arrow_button'

const EntranceExam = ({
  title = "Entrance exam",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi",
  buttonText = "Explore Now",
  imageUrl = "https://cdn.kalingauniversity.ac.in/common/student.jpg",
  imageAlt = "Student with books",
  backgroundColor = "bg-[var(--dark-blue)]"
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-2">
        <div className={`${backgroundColor} rounded-xl overflow-hidden`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center">
              {/* Title */}
              <h2 className="font-stix text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6">
                {title}
              </h2>

              {/* Description */}
              <p className="text-white text-sm sm:text-base md:text-lg mb-6 sm:mb-8 font-plus-jakarta-sans leading-relaxed">
                {description}
              </p>

              {/* Button */}
              <div className="flex justify-start">
                <GlobalArrowButton
                  className="!bg-[var(--button-red)] !text-white hover:!bg-white hover:!text-[var(--button-red)]"
                  arrowClassName="!bg-white group-hover:!bg-[var(--button-red)]"
                  arrowIconClassName="!text-[var(--button-red)] group-hover:!text-white"
                  textClassName="!text-white group-hover:!text-[var(--button-red)]"
                >
                  {buttonText}
                </GlobalArrowButton>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EntranceExam

