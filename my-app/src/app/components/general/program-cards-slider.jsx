'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GlobalArrowButton from './global-arrow_button'
import Stack from '../gsap/Stack'

// Export card rendering function for standalone use
export const renderProgramCard = (program) => {
  const imageCard = (
    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">
      <Image src={program.img} alt={program.title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-5 left-8 right-3 text-white">
        <h3 className="font-stix text-lg sm:text-xl leading-snug drop-shadow">{program.title}</h3>
      </div>
    </div>
  )

  const overviewCard = (
    <div className="w-full h-full rounded-xl overflow-hidden shadow-xl p-4 sm:p-4 lg:p-4 flex flex-col" style={{ backgroundColor: 'rgba(254, 192, 113, 1)' }}>
      <div>
        <h3 className="font-stix !text-[25px] leading-tight mb-3 sm:mb-4">Overview</h3>
        <p className="font-plus-jakarta-sans text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 !text-gray-800">
          {program.summary || 'Learn more about this program and its opportunities.'}
        </p>
      </div>
      <ul className="text-sm sm:text-base font-plus-jakarta-sans space-y-2.5 sm:space-y-3 mb-4 sm:mb-5">
        {program.scholarships && (
          <li className="flex items-start gap-2">
            <Image
              src="https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/hand-graduation-icon.png"
              alt="Scholarships icon"
              width={20}
              height={20}
              className="mt-0.5"
            />
            <span className="text-gray-800"><span className="font-stix text-[20px] text-black">Scholarships :</span> {program.scholarships}</span>
          </li>
        )}
        {program.programs && (
          <li className="flex items-start gap-2">
            <Image
              src="https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/hand-graduation-icon.png"
              alt="Programs icon"
              width={20}
              height={20}
              className="mt-0.5"
            />
            <span className="text-gray-800"><span className="font-stix text-[20px] text-black">Programs :</span> {program.programs}</span>
          </li>
        )}
      </ul>

      <div className="mt-auto flex items-center justify-between gap-2 sm:gap-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href={`/courses/${program.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}>
            <GlobalArrowButton className="!bg-transparent !shadow-none !text-[#1a1a1a] !px-0 !py-0 !h-auto text-sm sm:text-base" arrowClassName="!bg-transparent" arrowIconClassName="!text-[#1a1a1a]">
              Know More
            </GlobalArrowButton>
          </Link>
          <Link href="/admissions">
            <GlobalArrowButton className="!bg-white !text-black"
              arrowClassName="!bg-[var(--button-red)]"
              arrowIconClassName="!text-white"
              textClassName="!text-black"
            >Apply More</GlobalArrowButton>
          </Link>
        </div>
      </div>
    </div>
  )

  // Keep image on top initially: place overview first, image last in the stack array
  const cards = [overviewCard, imageCard]

  return (
    <div className="flex justify-center">
      <div className="h-[340px] sm:h-[380px] md:h-[400px] lg:h-[420px] w-[300px] sm:w-[340px] md:w-[360px] lg:w-[380px]">
        <Stack
          cards={cards}
          randomRotation={false}
          sendToBackOnClick
          pauseOnHover
          autoplay={false}
          mobileClickOnly
        />
      </div>
    </div>
  )
}

