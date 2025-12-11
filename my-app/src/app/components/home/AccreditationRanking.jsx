'use client'

import React from 'react'
import LogoLoop from '../gsap/LogoLoop'

const AccreditationRanking = ({ 
  heading = "Accreditation & Ranking",
  secondHeading = null,
  accreditations = null 
}) => {
  // Default accreditations if none provided
  const defaultAccreditations = [
           { id: 1, name: 'NIRF', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/nirf.webp' },
           { id: 2, name: 'NAAC B+', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/naac.webp' },
           { id: 2, name: 'UGC Grant', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/ugc.webp' },
           { id: 4, name: 'Outlook', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/outlook.webp' },
           { id: 5, name: 'Competition 3', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/competition.webp' },


    // { id: 1, name: 'Best Practices', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/best-prac.webp' },
    // { id: 2, name: 'Best Research', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/best-res.webp' },
    // { id: 3, name: 'Competition Success', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/comp-top.webp' },
    // { id: 4, name: 'Outlook', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/outlook.webp' },
    // { id: 5, name: 'Competition 3', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/comp-3.webp' },
    // { id: 6, name: 'UGC Grant', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-gra.webp' },
    // { id: 7, name: 'Competition', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/comp.webp' },
    // { id: 8, name: 'India Today', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/india-today.webp' },
    // { id: 9, name: 'Global', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/global.webp' },
    // { id: 10, name: 'NIRF', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/nirf.png' },
  ]

  const accreditationsList = accreditations || defaultAccreditations

  // Convert to LogoLoop format
  const logoLoopItems = accreditationsList.map(accred => ({
    src: accred.logo,
    alt: accred.name,
    title: accred.name
  }))

  return (
    <section className="py-16 ">
      <div className="">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-0.5">
          {/* Left title pill */}
          <div className="flex-none relative w-full md:w-auto md:left-[-130px] z-1">
            <div className="bg-[var(--button-red)] text-white rounded-[80px] sm:rounded-[100px] md:rounded-[120px] flex items-center justify-center shadow-lg w-full md:w-[574px] h-auto min-h-[100px] sm:min-h-[140px] md:h-[172px] px-4 sm:px-6 md:px-0">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-stix leading-tight text-left md:ml-25 py-2 sm:py-0">
                {heading}
                {secondHeading && (
                  <span className="block text-lg sm:text-xl md:text-2xl font-normal">
                    {secondHeading}
                  </span>
                )}
              </h2>
            </div>
          </div>

          {/* LogoLoop slider */}
          <div className="flex-1 w-full justify-center items-center md:w-auto md:ml-[-130px] overflow-hidden relative">
            <LogoLoop
              logos={logoLoopItems}
              speed={60}
              direction="left"
              logoHeight={120}
              gap={24}
              pauseOnHover={true}
              ariaLabel="Accreditation and ranking logos"
              renderItem={(item, key) => (
                <div className="flex-shrink-0 bg-[var(--light-gray)] rounded-[15px] sm:rounded-[20px] w-[180px] h-[140px] sm:w-[200px] sm:h-[160px] md:w-[231px] md:h-[181px] flex items-center justify-center shadow-sm overflow-hidden">
                  <div className="relative px-5 ">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="object-contain w-[30px] h-[30px] rounded-[20px]"
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccreditationRanking
