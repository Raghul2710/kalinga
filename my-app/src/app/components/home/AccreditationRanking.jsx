'use client'

import React from 'react'
import LogoLoop from '../gsap/LogoLoop'

const AccreditationRanking = ({
  heading = "Approvals & Accreditations",
  secondHeading = null,
  accreditations = null,
  id
}) => {
  // Default accreditations if none provided
  const defaultAccreditations = [
    { id: 1, name: 'NIRF', logo: 'https://cdn.kalingauniversity.ac.in/accreditation/nirf-logo-new.jpeg' },
    { id: 2, name: 'NAAC B+', logo: 'https://cdn.kalingauniversity.ac.in/Home/naac.webp' },
    { id: 2, name: 'UGC Grant', logo: 'https://cdn.kalingauniversity.ac.in/Home/ugc.webp' },
    { id: 4, name: 'AICTE', logo: 'https://cdn.kalingauniversity.ac.in/about/accerdation/acite.webp' },
    { id: 5, name: 'NCTE', logo: 'https://cdn.kalingauniversity.ac.in/about/accerdation/Group+1000002978.png' },
    { id: 6, name: 'BCI', logo: 'https://cdn.kalingauniversity.ac.in/about/accerdation/bci.webp' },
    { id: 7, name: 'PCI', logo: 'https://cdn.kalingauniversity.ac.in/about/accerdation/Group+1000002980.png' },
    { id: 8, name: 'CG Government', logo: 'https://cdn.kalingauniversity.ac.in/about/accerdation/cg-government.webp' },




    // { id: 1, name: 'Best Practices', logo: 'https://cdn.kalingauniversity.ac.in/logos/best-prac.webp' },
    // { id: 2, name: 'Best Research', logo: 'https://cdn.kalingauniversity.ac.in/logos/best-res.webp' },
    // { id: 3, name: 'Competition Success', logo: 'https://cdn.kalingauniversity.ac.in/logos/comp-top.webp' },
    // { id: 4, name: 'Outlook', logo: 'https://cdn.kalingauniversity.ac.in/logos/outlook.webp' },
    // { id: 5, name: 'Competition 3', logo: 'https://cdn.kalingauniversity.ac.in/logos/comp-3.webp' },
    // { id: 6, name: 'UGC Grant', logo: 'https://cdn.kalingauniversity.ac.in/logos/ugc-gra.webp' },
    // { id: 7, name: 'Competition', logo: 'https://cdn.kalingauniversity.ac.in/logos/comp.webp' },
    // { id: 8, name: 'India Today', logo: 'https://cdn.kalingauniversity.ac.in/logos/india-today.webp' },
    // { id: 9, name: 'Global', logo: 'https://cdn.kalingauniversity.ac.in/logos/global.webp' },
    // { id: 10, name: 'NIRF', logo: 'https://cdn.kalingauniversity.ac.in/logos/nirf.png' },
  ]

  const accreditationsList = accreditations || defaultAccreditations

  // Convert to LogoLoop format
  const logoLoopItems = accreditationsList.map(accred => ({
    src: accred.logo,
    alt: accred.name,
    title: accred.name
  }))

  return (
    <section suppressHydrationWarning={true} id={id} className="py-16 ">
      <div suppressHydrationWarning={true} className="">
        <div suppressHydrationWarning={true} className="relative flex flex-col md:flex-row items-center md:items-center">
          {/* Left title pill */}
          <div suppressHydrationWarning={true} className="relative w-full md:w-auto z-10 md:mr-[-130px]">
            <div suppressHydrationWarning={true} className="bg-[var(--button-red)] text-white rounded-r-[80px] sm:rounded-r-[100px] md:rounded-r-[120px] flex items-center justify-center shadow-lg w-full md:w-[430px] h-auto min-h-[100px] sm:min-h-[140px] md:h-[172px] px-4 sm:px-6 md:px-0 md:md-0 mb-3">
              <h2 className="text-2xl sm:text-2xl md:text-4xl font-stix leading-tight text-left py-2 sm:py-0">
                {heading.split(' & ').map((part, index, array) => (
                  <span key={index} className="block font-stix">
                    {part}{index < array.length - 1 ? ' &' : ''}
                  </span>
                ))}
                {secondHeading && (
                  <span className="block font-stix">
                    {secondHeading}
                  </span>
                )}
              </h2>
            </div>
          </div>

          {/* LogoLoop slider */}
          <div suppressHydrationWarning={true} className="flex-1 w-full justify-center items-center md:pl-[130px] overflow-hidden relative">
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
                  <div className="relative bg-white mx-5 rounded-xl">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="object-contain w-[80px] h-[80px] rounded-[20px]"
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
