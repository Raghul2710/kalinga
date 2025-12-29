"use client";
import { useState } from "react";
import Image from "next/image";

export default function ChairmanMessage({
  imageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/Leadership/Rajeev+Kumar.png",
  imageAlt = "Dr. Rajeev Kumar",
  name = "Dr. Rajeev Kumar",
  title = "Chairman",
  department = "",
  messageHeading = "Chairman's Message",
  quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  message = [
    "It gives me immense pleasure to welcome you to the Kalinga University, where we believe that education is not just about classroom learning but about inspiring learners to achieve lifelong knowledge.",
    "Due to globalization, the competition has tremendously increased in every field including education. To cope with that, we have developed a robust curriculum that turns students into job-ready professionals. We focus on imparting a holistic learning experience to make them well-rounded in emotional, intellectual, and ethical standards.",
    "With an aim to deliver quality education, we are proud to inform you that we are in between 101-150 top universities in India under the NIRF Rankings, 2023. We are also NAAC B+ accredited university, proving our commitment to academic excellence.",
    "We have a multi-cultural campus environment with students from 24 countries, 20 different range of programs, a sustainable campus, an interdisciplinary teaching environment, centers of excellence, advanced research labs, expert faculty members, an industry-ready curriculum, and impeccable career development cell.",
    "Academics are just one part of our university, but we also emphasize co-curricular, extracurricular, and community service. We just don't nurture young minds, but we also prepare responsible global citizens. Every leader is encouraged to go beyond their boundaries, discover their strengths and weaknesses, and become a responsible citizen.",
    "At KU, students don't just earn degrees; they graduate with confidence and purpose to make a thoughtful change in society. As you step into a new journey with us, we assure you that you'll always feel motivated and inspired every single day of your life.",
    "I welcome you all to Kalinga University and wish all the best in your career and life."
  ]
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleParagraphs = isExpanded ? message : message.slice(0, 2);
  const hasMoreContent = message.length > 2;

  return (
    <section className="bg-white pt-8 md:pt-20 lg:pt-50 pb-8 md:pb-16">
      <div className="px-2">
        <div className="bg-[var(--dark-blue)] rounded-xl p-4 md:p-6 lg:p-8 xl:p-10 relative overflow-visible pb-8 md:pb-6 lg:pb-10">
          {/* Top Section - Portrait, Name, and Quote */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 relative lg:top-[-170px] md:top-[-125px] top-4 md:top-0 z-30">
            {/* Left - Portrait */}
            <div className="md:col-span-4 order-1 md:order-1 mb-4 md:mb-0">
              <div className="bg-[var(--lite-sand)] rounded-2xl p-3 md:p-4 w-full max-w-[280px] md:max-w-[450px] mx-auto">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right - Name, Title, and Quote Box */}
            <div className="md:col-span-8 flex flex-col gap-3 md:gap-4 lg:gap-3 order-2 md:order-2">
              {/* Name and Title */}
              <div className="text-center md:text-left pl-0 md:pl-[45px] mb-2 md:mb-0">
                {name && (
                  <h2 className="font-stix mb-2 text-white md:text-[var(--foreground)] text-xl md:text-2xl lg:text-3xl !py-2">
                    {name}
                  </h2>
                )}
                {title && (
                  <h5 className="text-white md:text-[var(--foreground)] text-sm md:text-base lg:text-lg xl:text-xl font-plus-jakarta-sans font-medium mb-2 md:mb-4">
                    {title}
                  </h5>
                )}
                {department && (
                  <p className="text-white font-plus-jakarta-sans mt-2 text-sm md:text-base">
                    {department}
                  </p>
                )}
              </div>

              {/* Quote Box with Dark Blue Background */}
              <div className="bg-[var(--dark-blue)] md:bg-transparent rounded-xl p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-14 relative overflow-hidden mt-2 md:mt-0">
                {/* Decorative Quotation Marks - Top Left */}
                <div className="absolute top-2 left-2 md:top-4 md:left-4 lg:top-6 lg:left-6 xl:top-10 xl:left-10">
                  <div className="flex gap-1">
                    <svg width="16" height="24" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[20px] md:h-[32px] lg:w-[26px] lg:h-[41px]">
                      <path d="M18.2832 40.0727C19.6607 40.0727 20.7877 38.9457 20.7877 37.5682C20.7877 36.6916 20.412 35.9402 19.6607 35.5645C19.5355 35.4393 19.5355 35.4393 19.4102 35.3141C13.1489 31.1816 12.7732 26.2977 13.9002 22.5409H22.5409C23.9184 22.5409 25.0455 21.4139 25.0455 20.0364V2.50455C25.0455 1.12705 23.9184 0 22.5409 0H2.50455C1.12705 0 0 1.12705 0 2.50455V24.795C0 27.9257 1.00182 31.0564 2.88023 33.5609C5.13432 36.5663 9.6425 39.9475 18.2832 40.0727Z" fill="white"/>
                    </svg>
                    <svg width="16" height="24" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[20px] md:h-[32px] lg:w-[26px] lg:h-[41px]">
                      <path d="M18.2832 40.0727C19.6607 40.0727 20.7877 38.9457 20.7877 37.5682C20.7877 36.6916 20.412 35.9402 19.6607 35.5645C19.5355 35.4393 19.5355 35.4393 19.4102 35.3141C13.1489 31.1816 12.7732 26.2977 13.9002 22.5409H22.5409C23.9184 22.5409 25.0455 21.4139 25.0455 20.0364V2.50455C25.0455 1.12705 23.9184 0 22.5409 0H2.50455C1.12705 0 0 1.12705 0 2.50455V24.795C0 27.9257 1.00182 31.0564 2.88023 33.5609C5.13432 36.5663 9.6425 39.9475 18.2832 40.0727Z" fill="white"/>
                    </svg>
                  </div>
                </div>

                {/* Quote Text */}
                <div className="relative z-10">
                  <p className="text-white leading-relaxed pt-6 md:pt-10 lg:pt-12 pb-3 md:pb-6 font-plus-jakarta-sans text-sm md:text-base">
                    {quote}
                  </p>
                  {/* Attribution */}
                  <div className="mt-2 md:mt-4 pt-2 md:pt-4 border-t border-white/20">
                    <p className="text-white text-xs md:text-sm lg:text-base font-semibold font-plus-jakarta-sans">- {name}</p>
                    <p className="text-white/80 text-xs md:text-sm font-plus-jakarta-sans">{title}</p>
                  </div>
                </div>

                {/* Decorative Quotation Marks - Bottom Right */}
                <div className="flex items-end justify-end relative z-10">
                  <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 lg:bottom-6 lg:right-6 xl:bottom-0 xl:right-0">
                    <div className="flex justify-end gap-1">
                      <svg width="16" height="24" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[20px] md:h-[32px] lg:w-[26px] lg:h-[41px]">
                        <path d="M6.76369 40.0727C5.26097 39.9475 4.25915 38.57 4.5096 37.1925C4.63483 36.4411 5.01051 35.815 5.63665 35.3141C11.898 31.1816 12.2737 26.2977 11.1466 22.5409H2.50597C1.12847 22.5409 0.00142097 21.4139 0.00142097 20.0364V2.50454C0.00142097 1.12705 1.12847 0 2.50597 0H22.5423C23.9198 0 25.0469 1.12705 25.0469 2.50454V24.795C25.0469 27.9257 24.0451 31.0564 22.1666 33.5609C19.9126 36.5664 15.4044 39.9475 6.76369 40.0727Z" fill="white"/>
                      </svg>
                      <svg width="16" height="24" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[20px] md:h-[32px] lg:w-[26px] lg:h-[41px]">
                        <path d="M6.76369 40.0727C5.26097 39.9475 4.25915 38.57 4.5096 37.1925C4.63483 36.4411 5.01051 35.815 5.63665 35.3141C11.898 31.1816 12.2737 26.2977 11.1466 22.5409H2.50597C1.12847 22.5409 0.00142097 21.4139 0.00142097 20.0364V2.50454C0.00142097 1.12705 1.12847 0 2.50597 0H22.5423C23.9198 0 25.0469 1.12705 25.0469 2.50454V24.795C25.0469 27.9257 24.0451 31.0564 22.1666 33.5609C19.9126 36.5664 15.4044 39.9475 6.76369 40.0727Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Section - Message */}
          <div className="bg-white rounded-lg p-4 md:p-6 lg:p-10 relative lg:top-[-140px] md:top-[-60px] top-6 md:top-0 mt-4 md:mt-0 z-20">
              <h2 className="font-stix text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-[var(--foreground)] mb-3 md:mb-4 lg:mb-6 xl:mb-8">
                {messageHeading}
              </h2>
              <div>
                {/* Desktop: Show all paragraphs */}
                <div className="hidden md:block space-y-4 lg:space-y-6">
                  {message.map((paragraph, index) => (
                    <p key={index} className="text-[var(--foreground)] leading-relaxed font-plus-jakarta-sans text-sm md:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* Mobile: Show limited paragraphs with Read More */}
                <div className="md:hidden space-y-3">
                  {visibleParagraphs.map((paragraph, index) => (
                    <p key={index} className="text-[var(--foreground)] leading-relaxed font-plus-jakarta-sans text-sm">
                      {paragraph}
                    </p>
                  ))}
                  {hasMoreContent && (
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-3 text-[var(--button-red)] font-semibold font-plus-jakarta-sans hover:underline transition-all text-sm"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

