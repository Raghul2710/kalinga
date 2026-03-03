'use client'

import React from 'react'
import Image from 'next/image'

const items = [
  { id: 1, img: 'https://cdn.kalingauniversity.ac.in/Home/social-media-1.png', alt: 'Campus speaker' },
  { id: 2, img: 'https://cdn.kalingauniversity.ac.in/Home/social-media-2.png', alt: 'Students chatting' },
  { id: 3, img: 'https://cdn.kalingauniversity.ac.in/Home/social-media-3.png', alt: 'Lecture' },
  { id: 4, img: 'https://cdn.kalingauniversity.ac.in/Home/social-media-4.png', alt: 'Career guidance' },
  { id: 4, img: 'https://cdn.kalingauniversity.ac.in/Home/insta-6.png', alt: 'Career guidance' },
  { id: 4, img: 'https://cdn.kalingauniversity.ac.in/Home/int-7.png', alt: 'Career guidance' },
  { id: 4, img: 'https://cdn.kalingauniversity.ac.in/Home/int-8.png', alt: 'Career guidance' },
  { id: 4, img: 'https://cdn.kalingauniversity.ac.in/Home/int-9.png', alt: 'Career guidance' },
]

export default function SocialThumbs({ className = '' }) {
  return (
    <section className={`w-full py-16 ${className}`} suppressHydrationWarning={true}>
      <div className="px-2">
        {/* Title */}
        <div className="flex justify-center mb-4 sm:mb-2 text-center">
          <h2 className="!text-[50px] md:!text-[100px] leading-[50px] md:leading-[100px] font-stix text-transparent [-webkit-text-stroke:1.57px_var(--button-red)] font-normal  mb-10">Social Media Presence</h2>
        </div>

        {/* Images gallery - Marquee slider */}
        <div className="overflow-hidden mb-6 sm:mb-8 md:mb-1">
          <div className="flex animate-marquee gap-3 sm:gap-4 md:gap-6">
            {[...items, ...items].map((it, idx) => (
              <div
                key={`${it.id}-${idx}`}
                className="relative overflow-hidden shadow-lg hover:shadow-2xl transition duration-200 rounded-[9.66px] flex-shrink-0 w-[220px] sm:w-[260px] md:w-[300px] h-[240px] sm:h-[280px] md:h-[320px]"
              >
                <Image src={it.img} alt={it.alt} fill sizes="100vw" className="object-cover" />
                <a
                  href="https://www.instagram.com/kalinga_university/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-2 bottom-2 rounded-full p-2 shadow-md hover:opacity-80 transition-opacity"
                  aria-label="Follow us on Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 md:w-8 md:h-8 text-[var(--background)]" fill="currentColor" aria-hidden>
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z" />
                    <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM17.75 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                  </svg>
                </a>
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
            animation: marquee 30s linear infinite;
          }
        `}</style>

        {/* Instagram follow button - positioned at bottom, centered */}
        <div className="flex justify-center mt-2 sm:mt-8">
          <a
            href="https://www.instagram.com/kalinga_university/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[var(--button-red)] hover:opacity-90 text-white px-6 py-2 rounded-[10px] font-semibold text-sm transition-colors shadow-md"
          >
            <span className="font-light">Follow Us Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z" />
              <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM17.75 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
