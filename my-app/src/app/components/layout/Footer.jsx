import React from 'react'
import Image from 'next/image'
import { getLogoSrc, getLogoAlt } from '../../config/contact-info'

export default function Footer() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .footer-decorative-text {
          font-size: 10vw;
          max-width: 100%;
          line-height: 1.1;
        }
        @media (min-width: 640px) {
          .footer-decorative-text {
            font-size: 6vw;
          }
        }
        @media (min-width: 768px) {
          .footer-decorative-text {
            font-size: 12vw;
            white-space: nowrap;
          }
        }
      `}} />
    <footer className="text-white mt-5 px-2">
      <div className="relative bg-[var(--dark-blue)] rounded-[10px] sm:rounded-[15px]">
          <div className="px-4 sm:px-4 md:px-6 lg:px-12 py-6 sm:py-6 md:py-8 lg:py-10 !pb-0 relative z-10">
        {/* Top Row: Logo and Follow Us */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-4 md:gap-0 mb-6 sm:mb-6 md:mb-8 lg:mb-10">
          {/* Logo Section - Left */}
          <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3">
            <div className="relative h-[40px] sm:h-[45px] md:h-[49px] lg:h-12 w-[120px] sm:w-[140px] md:w-[200px]">
              <Image 
                src={getLogoSrc('primary')}
                alt={getLogoAlt('primary')}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Main Content: Three Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 sm:gap-6 md:gap-8 lg:gap-10">
          {/* Quick Link - 2 columns */}
          <div className="sm:col-span-1 md:col-span-4 mb-6 sm:mb-0">
            <h4 className="text-sm sm:text-base lg:text-lg font-stix mb-4 sm:mb-4 lg:mb-6 flex items-end gap-2">
              <span className="text-white font-stix">Quick Links</span>
              <span className="flex-1 border-t border-thick border-white/70 relative bottom-2"></span>
            </h4>
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-12 gap-y-2.5 sm:gap-y-3 font-plus-jakarta-sans text-xs sm:text-[14px] leading-relaxed sm:leading-[25px] font-normal">
              <ul className="text-white/80 space-y-2 sm:space-y-3">
                <li><a className="hover:text-white transition-colors" href="/admissions">About</a></li>
                <li><a className="hover:text-white transition-colors" href="/academics">Academics</a></li>
                <li><a className="hover:text-white transition-colors" href="/students/campus-life">Admissions</a></li>
                <li><a className="hover:text-white transition-colors" href="/students/campus-life">Research</a></li>
                <li><a className="hover:text-white transition-colors" href="/students/campus-life">Placements</a></li>
              </ul>
              <ul className="text-white/80 space-y-2 sm:space-y-3">
                <li><a className="hover:text-white transition-colors" href="/students/campus-life">Departments</a></li>
                <li><a className="hover:text-white transition-colors" href="/students/campus-life">Campus Life</a></li>
                <li><a className="hover:text-white transition-colors" href="/students/campus-life">Facilities</a></li>
                <li><a className="hover:text-white transition-colors" href="/students/campus-life">Labs</a></li>
                <li><a className="hover:text-white transition-colors" href="/students/campus-life">Events</a></li>
              </ul>
            </div>
          </div>

          {/* Important Links - 2 columns */}
          <div className="sm:col-span-1 md:col-span-4 mb-6 sm:mb-0">
            <h4 className="text-sm sm:text-base lg:text-lg font-normal mb-4 sm:mb-6 flex items-end gap-2">
              <span className="text-white font-stix">Important Links</span>
              <span className="flex-1 border-t border-white/70 relative bottom-2"></span>
            </h4>
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-12 gap-y-2.5 sm:gap-y-3 font-plus-jakarta-sans text-xs sm:text-[14px] leading-relaxed sm:leading-[25px] font-normal">
              <ul className="text-white/80 space-y-2 sm:space-y-3">
                <li><a className="hover:text-white transition-colors" href="/privacy-policy">Privacy Policy</a></li>
                <li><a className="hover:text-white transition-colors" href="/terms-conditions">Terms & Conditions</a></li>
                <li><a className="hover:text-white transition-colors" href="/refund-policy">Refund Policy</a></li>
                <li><a className="hover:text-white transition-colors" href="/accessibility">Accessibility</a></li>
                <li><a className="hover:text-white transition-colors" href="/downloads">Downloads</a></li>
              </ul>
              <ul className="text-white/80 space-y-2 sm:space-y-3">
                <li><a className="hover:text-white transition-colors" href="/grievance">Grievance</a></li>
                <li><a className="hover:text-white transition-colors" href="/rti">RTI</a></li>
                <li><a className="hover:text-white transition-colors" href="/nirf-ranking">NIRF Ranking</a></li>
                <li><a className="hover:text-white transition-colors" href="/iqac-documents">IQAC Documents</a></li>
                <li><a className="hover:text-white transition-colors" href="/mandatory-disclosures">Mandatory Disclosures</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
            <div className="sm:col-span-2 md:col-span-4 mt-0 md:mt-[-75px] md:ml-[75px] ml-[0px]">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-6">
              {/* Follow Us Section */}
              <div className="text-left">
                <div className="grid grid-cols-1 gap-3 ">
                  <h4 className="text-sm sm:text-base lg:text-lg font-normal text-white font-stix">
                    Follow Us
                  </h4>
                  <div className="flex items-center justify-start gap-2.5 sm:gap-2.5 lg:gap-3">
                    <a href="https://www.facebook.com/kalingauniversity/" aria-label="facebook" className="text-white hover:text-orange-400 transition-colors"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z"/></svg></a>
                    <a href="https://twitter.com/Kalingaraipur" aria-label="x (twitter)" className="text-white hover:text-orange-400 transition-colors"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                    <a href="https://www.youtube.com/@KalingaUniversityRaipurIndia" aria-label="youtube" className="text-white hover:text-orange-400 transition-colors"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 00-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 001.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"/></svg></a>
                    <a href="https://www.linkedin.com/school/kalinga-university-raipur/" aria-label="linkedin" className="text-white hover:text-orange-400 transition-colors"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
                    <a href="https://www.instagram.com/kalinga_university/" aria-label="instagram" className="text-white hover:text-orange-400 transition-colors"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                  </div>
                </div>
              </div>

              {/* Contact Us Section */}
              <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:gap-6">
                <h4 className="text-sm sm:text-base lg:text-lg font-normal text-white font-stix">Contact us</h4>
                <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-xs sm:text-xs lg:text-sm text-white/80 pb-10 md:pb-0">
              <div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-[var(--dark-orange-red)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                  <div>
                    <p className="font-medium text-white text-xs sm:text-sm">Kalinga University</p>
                    <p className="text-[10px] sm:text-xs leading-relaxed">Kotni, Near Mantralaya,<br/>Naya Raipur - 492101, Chhattisgarh, India</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--dark-orange-red)] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <a href="tel:+91-9907252100" className="text-[10px] sm:text-xs break-all">+91-9907252100</a>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--dark-orange-red)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:registrar@kalingauniversity.ac.in" className="text-[10px] sm:text-xs break-all">registrar@kalingauniversity.ac.in</a>
              </div>
              <div className="flex justify-start sm:justify-end">
                <a href="#" className="inline-flex items-center gap-2 text-xs sm:text-sm text-white hover:text-white/80 transition-colors">
                  Get Direction 
                  <span className="inline-flex items-center justify-center bg-white text-[#972B28] rounded w-4 h-4 sm:w-5 sm:h-5 text-[10px] sm:text-xs">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-3 sm:h-3">
                      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 7H17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Copyright */}
        {/* <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-gray-400">
          © 2015 Kalinga University
        </div> */}
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none pb-4 sm:pb-8 lg:pb-0 overflow-x-hidden px-4 sm:px-0"
          >   
            <h2
              className="footer-decorative-text leading-none lg:pb-0 text-center max-w-full"
               style={{
                    color: 'transparent',
                    WebkitTextStroke: '1px #FFFFFF',
                    fontWeight: 400,
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word'
                  }}
            >
              Kalinga University
            </h2>
          </div>
      </div>
      <div className="text-center py-2   text-black">
        <p className="text-xs">© 2025 Kalinga University. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}
