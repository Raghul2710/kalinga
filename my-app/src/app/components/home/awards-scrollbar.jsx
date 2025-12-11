"use client"

import React from "react"
import Image from "next/image"
import SectionHeading from "../general/SectionHeading"

const defaultAwards = [
  {
    id: 1,
    year: "2024",
    title: "Appreciation Certificate as delegate in International Conference on 'Impact of Artificial intelligence in revolutionizing pharmaceutical education and Research'",
    subtitle: "Kalinga University, Raipur (Chhattisgarh) by Association of Pharmacy Professionals Chhattisgarh Branch",
    active: false,
  },
  {
    id: 2,
    year: "2024",
    title: "Appreciation award",
    subtitle: "City Center & Lion's club of Raipur",
    active: true,
  },
  {
    id: 3,
    year: "2024",
    title: "Appreciation award",
    subtitle: "Choice Consultancy Services Pvt. Ltd.",
    active: true,
  },
  {
    id: 4,
    year: "2024",
    title: "Appreciation award",
    subtitle: "Inter Departmental Lead Agency",
    active: true,
  },
  {
    id: 5,
    year: "2023-24",
    title: "Appreciation award",
    subtitle: "Sambhav Doot Foundation (Ayra)",
    active: true,
  },
  {
    id: 6,
    year: "2022-23",
    title: "हिंदी महोत्सव",
    subtitle: "श्री नाथ विश्वविद्यालय, आदित्यपुर, जमशेदपुर (झारखण्ड)",
    active: true,
  },
  {
    id: 7,
    year: "2022-23",
    title: "Yuva Utsav 2022",
    subtitle: "Yi Young India",
    active: true,
  },
  {
    id: 8,
    year: "2020-21",
    title: "Walk-a-cause Award by",
    subtitle: "Raipur Police, Chhattishgarh",
    active: true,
  },
  {
    id: 9,
    year: "2020-21",
    title: "Chhattishgarh Youth by",
    subtitle: "Chhattishgarh Youth",
    active: true,
  },
  {
    id: 10,
    year: "2020-21",
    title: "Jan Shikshan Sansthan",
    subtitle: "Jan Shikshan Sansthan",
    active: true,
  },
  {
    id: 11,
    year: "2020-21",
    title: "Youth Development for Contributuing works and pre-career guidance",
    subtitle: "OCBOS",
    active: true,
  },
  {
    id: 12,
    year: "2020-21",
    title: "Best in Social and Community services Award by",
    subtitle: "Auropath",
    active: true,
  },
  {
    id: 13,
    year: "2020-21",
    title: "Surakshya Sandhan Award by",
    subtitle: "International Academic and Management Association",
    active: true,
  },
  {
    id: 14,
    year: "2020-21",
    title: "National Education Award 2020 by",
    subtitle: "ASSOCHAM",
    active: true,
  },
  {
    id: 15,
    year: "2019-20",
    title: "Knowledge Partner in",
    subtitle: "Chhattisgarh Youth Parliament -II",
    active: true,
  },
  {
    id: 16,
    year: "2019-20",
    title: "Shiksha Bandhan",
    subtitle: "IAMA",
    active: true,
  },
  {
    id: 17,
    year: "2019-20",
    title: "Best Private University Award by",
    subtitle: "ASSOCHAM National Educational Awards 2020",
    active: true,
  },
  {
    id: 18,
    year: "2018-19",
    title: "Best Research And Innovation University Award by",
    subtitle: "Globel Leaders Award",
    active: true,
  },
  {
    id: 19,
    year: "2018-19",
    title: "Excellence Work In Educational Sector by",
    subtitle: "National Majesty Awards",
    active: true,
  },
  {
    id: 20,
    year: "2018-19",
    title: "Educational Inculcation Award by",
    subtitle: "Prayag Foundation",
    active: true,
  },
];

export default function AwardsScrollbar({
  awards = defaultAwards,
  title = "Awards and Accolades ",
  subtitle = "",
}) {
  return (
    <section className="py-10 sm:py-14 bg-white px-4 lg:px-5">
      <div className="">
        {/* Header */}
         <div className="text-left md:text-center mb-6 sm:mb-8">
          <SectionHeading title={title} subtitle={subtitle} titleClassName="!py-2" />
         
        </div>

        {/* Scrollable timeline */}
          <div className="relative overflow-hidden">
          {/* dashed connector line */}
            <div className="absolute top-[62px] sm:top-[138px] left-[260px] right-[260px] border-b border-dashed border-gray-500 pointer-events-none z-0" />

            <div className="flex gap-6 sm:gap-10 overflow-x-auto pb-6 pt-4 px-8 scrollbar-hide relative z-10 awards-scrollbar">
             {awards.map((award) => award.active && (
               <div key={award.id} className="flex flex-col items-center flex-shrink-0 min-w-[200px] sm:min-w-[220px]">
                 {/* Icon + texts with leaf images */}
                 <div className="flex items-center justify-center gap-2 mb-2">
                   <Image
                     src="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/awards-leaf.png"
                     alt="Award leaf left"
                     width={50}
                     height={50}
                     className="object-contain"
                   />
                  <div className="flex flex-col items-center text-[var(--foreground)] text-center max-w-[200px]">
                    <h3 className="!text-[18px] font-stix break-words leading-tight">
                      {award.title}
                    </h3>
                    <p className="!text-[12px] sm:text-xs text-gray-500 font-plus-jakarta-sans">{award.subtitle}</p>
                  </div>
                   <Image
                     src="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/awards-leaf.png"
                     alt="Award leaf right"
                     width={50}
                     height={50}
                    className="object-contain -scale-x-100"
                   />
                 </div>

                 {/* Year pill */}
                 <div
                   className={`mt-2 rounded-md px-5 py-3 text-xs sm:text-sm font-stix ${
                     award.active
                       ? "bg-[var(--button-red)] text-white shadow-md"
                       : "bg-[#e6e6e6] text-[var(--foreground)]"
                   }`}
                 >
                   {award.year}
                 </div>
               </div>
             ))}
           </div>
         </div>

        {/* scrollbar styling */}
        <style jsx global>{`
          .awards-scrollbar::-webkit-scrollbar {
            height: 4px;
          }
          .awards-scrollbar::-webkit-scrollbar-track {
            background: #f5f5f5;
            border-radius: 9999px;
          }
          .awards-scrollbar::-webkit-scrollbar-thumb {
            background: var(--dark-orange-red);
            border-radius: 9999px;
          }
          .awards-scrollbar {
            scrollbar-color: var(--dark-orange-red) #f5f5f5;
            scrollbar-width: thin;
          }
        `}</style>
      </div>
    </section>
  )
}

