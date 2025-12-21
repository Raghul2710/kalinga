'use client';

import Link from 'next/link';
import GlobalArrowButton from '../general/global-arrow_button';
import Image from 'next/image';
const HeroSectionTwo = () => {
  return (
    <section className="-mt-[80px] relative min-h-[500px] md:h-[600px] lg:h-[700px] md:mx-2 mx-0 mb-8 md:mb-0 pb-8 md:pb-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat  rounded-xl sm:rounded-4xl h-full w-full"
        style={{
          backgroundImage: `url('https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/kif-banner.webp')`,
          backgroundColor: '#e6e9f2', // fallback color
        }} 
      >
        {/* Background overlay layer with 80% opacity */}
        <div className="absolute inset-0 bg-[var(--foreground)]/40 rounded-xl sm:rounded-4xl"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent  rounded-4xl"></div>
      </div>
      <div className="container relative z-1 mx-auto h-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full px-4 pt-20 pb-8 md:pb-10">
        {/* Left Side - Text Content */}
        <div className="flex flex-col items-start justify-center text-left text-white gap-4 md:w-1/2 w-full">
        <Image src="https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd-1.png" alt="CTCD" width={100} height={100} />
          <h2>Corporate Training And Consultancy Division (CTCD)</h2>
          <p className="md:text-base text-xs"> Due to increasing competition in the domestic and international markets, political influence, and technological advancements, organisations find it difficult to compete in the marketplace. Corporate Training and Consultancy Division (CTCD) at Kalinga helps businesses effectively utilise their most valuable asset, i.e., THEIR PEOPLE.</p>
          <Link href="/about-us" passHref legacyBehavior>
            <a className="inline-flex">
              <GlobalArrowButton
                className="!bg-white !text-black"
                arrowClassName="!bg-[var(--button-red)]"
                arrowIconClassName="!text-white"
                textClassName="!text-black"
              >
                Learn More
              </GlobalArrowButton>
            </a>
          </Link>
        </div>
        
        {/* Right Side - Form */}
        <div className="flex flex-col items-center md:items-end justify-center md:w-1/2 w-full mt-4">
          <form className="bg-white/95 backdrop-blur-sm rounded-lg p-6 md:p-8 w-full max-w-md shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)] focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)] focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)] focus:border-transparent"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)] focus:border-transparent resize-none"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--button-red)] text-white py-3 px-6 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default HeroSectionTwo;
