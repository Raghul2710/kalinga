'use client'
import React from 'react'
import Image from 'next/image'
import SectionHeading from '../general/SectionHeading'
const GlobalPresence = ({ 
  subtitle = "Global Presence",
  title = "Supporting Global Students at Every Step",
  description = "Your home away from home ,Our International Students Cell guides you from admission to graduation. From visa support to cultural integration, we ensure a smooth transition.Learn, grow, and thrive in a truly global community at Kalinga University.",
  logos = ['Infosys','Citi','Microsoft','Adobe','Cognizant'],
  imageUrl = "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/globe-skin-color.png",
  imageAlt = "Global map",
  subtitleColor = "text-white",
  titleColor = "!text-white",
  descriptionColor = "text-white/80",
  backgroundColor = "bg-[var(--dark-blue)]",
  subtitleClassName = "",
  titleClassName = "!text-white",
  subtitleTextColor = "!text-white",
  sectionClassName = "py-16",
}) => {
  return (
    <section className={sectionClassName}>
      <div className="px-4 lg:px-6">
        <div className={`mx-auto ${backgroundColor} rounded-xl px-4 text-center text-white relative w-full h-auto min-h-[500px] sm:min-h-[500px] md:h-[500px]`}>
        <div className="max-w-4xl mx-auto pt-16">
        <SectionHeading
          subtitle={subtitle}
          title={title}
          subtitleClassName={subtitleClassName}
          titleClassName={titleClassName}
          subtitleTextColor={subtitleTextColor}
        />
          <p className={`text-sm ${descriptionColor} leading-relaxed px-2 sm:px-4 font-plus-jakarta-sans text-left md:text-center text-center`}>
            {description}
          </p>
        </div>

        {/* globe graphic */}
        <div className="mt-6 sm:mt-8">
          <div className="mx-auto w-full max-w-[729px] h-auto min-h-[200px] sm:min-h-[250px] md:h-[289px] relative -mb-8 sm:-mb-12 md:-mb-17 z-0 px-4">
            <div className="relative w-full h-[289px]">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-contain mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Logos inside background */}
        <div className="w-full z-4 relative px-4">
          {/* Mobile: Marquee */}
          <div className="sm:hidden overflow-hidden w-full">
            <div className="flex animate-marquee gap-3">
              {[...logos, ...logos].map((l, idx) => (
                <div key={`${l}-${idx}`} className="bg-white text-gray-700 rounded-md px-4 py-2 shadow text-xs font-medium w-[160px] flex-shrink-0 h-[75px] border-[4px] border-white flex items-center justify-center">
                  {l}
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop: Flex wrap */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {logos.map((l) => (
              <div key={l} className="bg-white text-gray-700 rounded-md px-4 sm:px-6 py-2 sm:py-3 shadow text-xs sm:text-sm font-medium w-[160px] md:w-[160px] h-[75px] border-[4px] sm:border-[6px] border-white flex items-center justify-center">
                {l}
              </div>
            ))}
          </div>
        </div>
        
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}</style>
        </div>
      </div>
    </section>
  )
}

export default GlobalPresence
