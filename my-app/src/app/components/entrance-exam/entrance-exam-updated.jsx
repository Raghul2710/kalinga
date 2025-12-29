'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GlobalArrowButton from '../general/global-arrow_button';
import SectionHeading from '../general/SectionHeading';

const EntranceExamUpdated = () => {
  const exams = [
    {
      id: 'kalsee',
      title: 'KALSEE 2026-27',
      subtitle: 'Kalinga Scholarship & Entrance Exam',
      features: [
        'UG / PG / PhD Programs',
        'CBT (Computer Based Test) Mode',
        'Multiple Test Dates Available'
      ],
      buttonText: 'Apply For KALSEE',
      href: '/kalsee',
      studentImage: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/student-img.png'
    },
    {
      id: 'kal-mat',
      title: 'KAL-MAT 2026-27',
      subtitle: 'Kalinga Management Aptitude Test',
      features: [
        'BBA / MBA Programs',
        'Online Mode Examination',
        'Flexible Scheduling Options'
      ],
      buttonText: 'Apply For KAL-MAT',
      href: '/kalmat',
      studentImage: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/kalmat-person-img-new.png'
    }
  ];

  return (
    <section className="bg-[var(--background)] mx-2 py-12 md:py-20 rounded-xl">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <SectionHeading
            subtitle="Entrance Examinations"
            title="Choose your pathway to academic excellence"
            subtitleTextColor="text-[var(--dark-orange-red-light)]"
            subtitleClassName=""
            titleClassName="text-[var(--foreground)] "
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {exams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white rounded-xl overflow-visible shadow-xl relative"
            >
              {/* Card Content */}
              <div className="p-5 md:p-5 flex flex-col h-full relative overflow-hidden rounded-xl">
                {/* Title and Subtitle */}
                <div className="mb-4 md:mb-6 z-10">
                  <h3 className="text-[var(--button-red)] text-xl md:text-2xl font-medium mb-2 font-plus-jakarta-sans">
                    {exam.title}
                  </h3>
                  <p className="text-black text-sm md:text-base lg:text-lg">
                    {exam.subtitle}
                  </p>
                </div>

                {/* Features List */}
                <ul className="flex flex-col gap-2 md:gap-3 mb-4 md:mb-6 flex-grow z-10">
                  {exam.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 md:gap-3">
                      <div className="w-2 h-2 bg-[var(--dark-orange-red-light)] rounded-[1px] mt-2 flex-shrink-0" />
                      <span className="text-black text-xs md:text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button - positioned at bottom left */}
                <div className="mt-auto z-10 relative">
                  <Link href={exam.href}>
                    <GlobalArrowButton variant="default" className="text-sm md:text-base">
                      {exam.buttonText}
                    </GlobalArrowButton>
                  </Link>
                </div>

                {/* Orange Background - hidden on mobile, visible on desktop */}
                <div className="hidden md:block absolute bottom-0 right-0 w-[35%] h-[300px] flex items-end justify-end z-0">
                  <div className="bg-[var(--dark-orange-red-light)] rounded-tl-lg rounded-bl-lg w-full h-[100%] relative self-end"></div>
                </div>
              </div>

              {/* Image - hidden on mobile, visible on desktop */}
              <div className="hidden md:block absolute md:-top-9 md:-right-15 w-80 lg:w-96 h-[320px] z-0">
                <div className="relative w-full h-full">
                  <Image
                    src={exam.studentImage}
                    alt={`${exam.title} Student`}
                    fill
                    className="object-contain object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EntranceExamUpdated;
