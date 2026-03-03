import React from 'react'
import Image from 'next/image'
import GlobalArrowButton from '../general/global-arrow_button'


export default function CampusTour() {
  return (
    <section className="py-16" suppressHydrationWarning={true}>
      <div className="px-2">
        <div className="relative bg-cover bg-center rounded-2xl overflow-hidden shadow-xl mx-auto w-full h-[500px] sm:h-[500px] md:h-[600px] lg:h-[653px]" style={{
          backgroundImage: `url('https://cdn.kalingauniversity.ac.in/Home/college-ful-image.png')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Center Image */}
          <div className="absolute inset-0 z-5 flex items-center justify-center">
            <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[173px] md:h-[173px] md:opacity-100 opacity-30">
              <Image
                src="https://cdn.kalingauniversity.ac.in/logos/360-degrees+2.png"
                alt="Campus Tour 360"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className="container mx-auto relative z-10 h-full flex flex-col justify-center md:justify-end p-4 md:p-5 !pb-16">
            {/* Top: 360 Badge */}
            <div className="flex items-center gap-2 w-fit">
              {/* <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur border-2 border-white flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>  */}
              {/* <div className="text-white">b
                <div className="text-sm font-bold">360°</div>
              </div> */}
            </div>

            {/* Bottom: Content and CTA */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
              {/* Left: Title and Description */}
              <div className="flex-1 space-y-2 sm:space-y-3">
                <h2 className="font-stix font-medium text-white leading-tight">
                  Step Into the Heart of Our Campus
                </h2>
                <p className="text-white leading-relaxed max-w-3xl">
                  Take a 360° virtual tour of our luscious green campus and explore our world-class infrastructure.
                </p>
              </div>

              {/* Right: CTA Button */}
              <div className="flex items-center gap-3">
                <a href="https://virtualtour.kalingauniversity.ac.in/">
                  <GlobalArrowButton className="!bg-white !text-black"
                    arrowClassName="!bg-[var(--button-red)]"
                    arrowIconClassName="!text-white"
                    textClassName="!text-black"
                  >Explore Now</GlobalArrowButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
