import React from 'react'
import Image from 'next/image'
import GlobalArrowButton from './global-arrow_button'

const AdmissionCareer = () => {
  return (
    <section className="pt-16 bg-white px-4 sm:px-5">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">

        {/* Left Panel - Admission */}
        <div className="w-full bg-[var(--dark-orange-red)] rounded-l-lg p-5 sm:p-7 md:p-12 text-white flex flex-col items-center justify-center">

        <h3 className="mt-6 sm:mt-10 md:mt-14 leading-tight sm:leading-normal font-stix leading-[32px] sm:leading-[40px] pr-4 sm:pr-8 md:pr-15">Discover 130+ career-driven programs and world-class learning at Kalinga University. Your journey to success starts today</h3>
          <div className="mt-3 sm:mt-5 w-full sm:w-[211px] self-start">
          <GlobalArrowButton className="!bg-white !text-black"
                arrowClassName="!bg-[var(--button-red)]"
                arrowIconClassName="!text-white"
                textClassName="!text-black"
                >Admission Open</GlobalArrowButton>
          </div>
        <h2
          className="font-stix !text-[50px] md:!text-[100px] mt-4 sm:mt-5 leading-none whitespace-nowrap self-start -ml-0 md:-ml-5 sm:-ml-6 md:-ml-10 -mb-6 sm:-mb-10"
           style={{
                color: 'transparent',
                WebkitTextStroke: '0.2px #FFFFFF',
              }}
        >
          Admission
        </h2>
         
        </div>

        {/* Center - Image (visible only on large screens) */}
        <div className="hidden lg:block absolute bottom-0 left-1/2  transform -translate-x-1/2 w-[582px] object-contain h-full z-2">
        
            <Image 
              src="https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/student.webp" 
              alt="Student" 
              fill
              className="object-contain scale-120 rounded-xl shadow-7xl" 
            />
       
        </div>

        {/* Right Panel - Career */}
        <div className="w-full bg-[var(--button-red)] rounded-r-lg p-5 sm:p-7 md:p-12 text-white text-right flex flex-col items-end justify-end">
        <h3 className="mt-6 sm:mt-10 md:mt-14 leading-tight sm:leading-normal font-stix leading-[32px] sm:leading-[40px] pb-4 pl-4 sm:pl-8 md:pl-20">Kalinga University offers a collaborative environment for educators and professionals to <br /> grow and make an impact.</h3>
        <GlobalArrowButton className="!bg-white !text-black"
                arrowClassName="!bg-[var(--button-red)]"
                arrowIconClassName="!text-white"  
                textClassName="!text-black"
                >Contact Us</GlobalArrowButton>

<h2
  className="font-stix leading-none whitespace-nowrap !text-[50px] md:!text-[100px] mt-4 sm:mt-5 self-start sm:self-end -mr-5 sm:-mr-6 md:-mr-8 -mb-6 sm:-mb-10" 
   style={{
        color: 'transparent',
        WebkitTextStroke: '0.2px #FFFFFF',
      }}
>
  Career
</h2>
 
</div>
      </div>
    </section>
  )
}

export default AdmissionCareer