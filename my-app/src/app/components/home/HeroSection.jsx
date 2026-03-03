'use client';

import Link from 'next/link';
import GlobalArrowButton from '../general/global-arrow_button';
const HeroSection = () => {
  return (
    <section suppressHydrationWarning={true} className="-mt-[80px] relative h-[500px] md:h-[600px] lg:h-[700px] md:mx-2 mx-0 md:rounded-2xl">
      {/* Background Image */}
      <div
        suppressHydrationWarning={true}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat  h-full w-full md:rounded-2xl"
        style={{
          backgroundImage: `url('https://cdn.kalingauniversity.ac.in/kalingabanner.webp')`,
          backgroundColor: '#e6e9f2', // fallback color
        }}
      >
        <div suppressHydrationWarning={true} className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent  rounded-4xl"></div>
      </div>
      <div suppressHydrationWarning={true} className="container relative z-1 mx-auto h-full flex flex-col items-center justify-center text-center text-white gap-4 md:w-10/12 w-full">
        <h1>India's Leading Private University</h1>
        <p className="md:text-base text-xs md:w-8/12 w-11/12">Step into a World of Educational Excellence. A Rising Hub of Innovation, Diversity, and Future-Ready Education.</p>
        <Link href="/about-us" className="inline-flex">
          {/* <GlobalArrowButton
            as="span"
            className="!bg-white !text-black"
            arrowClassName="!bg-[var(--button-red)]"
            arrowIconClassName="!text-white"
            textClassName="!text-black"
          >
            Learn More
          </GlobalArrowButton> */}
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
