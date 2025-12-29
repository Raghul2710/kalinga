import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GlobalArrowButton from './global-arrow_button'

const defaultContent = {
  left: {
    title: "Step Into Your Future",
    description:
      "Discover 130+ career-driven programs and world-class learning at Kalinga University. Your journey to success starts today",
    buttonLabel: "Apply Now",
    tag: "Admission",
  },
  right: {
    title: "Work. Inspire. Achieve.",
    description:
      "Kalinga University offers a collaborative environment for educators and professionals to grow and make an impact.",
    buttonLabel: "Contact Us",
    tag: "Career",
  },
  image: {
    src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/student.webp",
    alt: "Student",
  },
};

const AdmissionCareer = ({
  leftTitle = defaultContent.left.title,
  leftDescription = defaultContent.left.description,
  leftButtonLabel = defaultContent.left.buttonLabel,
  leftTag = defaultContent.left.tag,
  rightTitle = defaultContent.right.title,
  rightDescription = defaultContent.right.description,
  rightButtonLabel = defaultContent.right.buttonLabel,
  rightTag = defaultContent.right.tag,
  imageSrc = defaultContent.image.src,
  imageAlt = defaultContent.image.alt,
}) => {
  return (
    <section className="pt-16 bg-white px-2">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
        {/* Left Panel - Admission */}
        <div className="w-full bg-[var(--dark-orange-red)] md:rounded-l-lg rounded-lg p-5 sm:p-7 md:p-12 text-white flex flex-col  justify-center items-start">
          <h1>{leftTitle}</h1>
          <h5 className="mt-4 sm:mt-6 md:mt-8 leading-tight sm:leading-normal font-stix leading-[32px] sm:leading-[40px] pr-4 sm:pr-8 md:pr-15">
            {leftDescription}
          </h5>
          <div className="mt-3 sm:mt-5 w-full sm:w-[211px] self-start">
            <Link href="/admissions">
              <GlobalArrowButton
                className="!bg-white !text-black"
                arrowClassName="!bg-[var(--button-red)]"
                arrowIconClassName="!text-white"
                textClassName="!text-black"
              >
                {leftButtonLabel}
              </GlobalArrowButton>
            </Link>
          </div>
          <h2
            className="font-stix !text-[50px] md:!text-[100px] mt-4 sm:mt-5 leading-none whitespace-nowrap self-start -ml-0 md:-ml-5 sm:-ml-6 md:-ml-10 -mb-6 sm:-mb-10"
            style={{
              color: 'transparent',
              WebkitTextStroke: '0.5px #FFFFFF',
            }}
          >
            {leftTag}
          </h2>
        </div>

        {/* Center - Image (visible only on large screens) */}
        <div className="hidden lg:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[582px] object-contain h-full z-2">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain scale-120 rounded-xl shadow-7xl"
          />
        </div>

        {/* Right Panel - Career */}
        <div className="w-full bg-[var(--button-red)] md:rounded-r-lg rounded-lg p-5 sm:p-7 md:p-12 text-white md:text-right text-left flex flex-col md:items-end items-start md:justify-end justify-start">
          <h1>{rightTitle}</h1>
          <h5 className="mt-4 sm:mt-6 md:mt-8 leading-tight sm:leading-normal font-stix leading-[32px] sm:leading-[40px] pb-4 md:pl-20">
            {rightDescription}
          </h5>
          <Link href="/contact-us">
            <GlobalArrowButton
              className="!bg-white !text-black"
              arrowClassName="!bg-[var(--button-red)]"
              arrowIconClassName="!text-white"
              textClassName="!text-black"
            >
              {rightButtonLabel}
            </GlobalArrowButton>
          </Link>

          <h2
            className="font-stix leading-none whitespace-nowrap !text-[50px] md:!text-[100px] mt-4 sm:mt-5 self-start sm:self-end -mr-5 sm:-mr-6 md:-mr-8 -mb-6 sm:-mb-10"
            style={{
              color: 'transparent',
              WebkitTextStroke: '0.5px #FFFFFF',
            }}
          >
            {rightTag}
          </h2>
        </div>
      </div>
    </section>
  )
}

export default AdmissionCareer