'use client';

import Link from 'next/link';
import GlobalArrowButton from '../general/global-arrow_button';
import Image from 'next/image';
import SectionHeading from '../general/SectionHeading';

const HeroSectionTwo = ({
  backgroundImage = 'https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/kif-banner.webp',
  logoImage,
  logoAlt = '',
  title = 'Corporate Training And Consultancy Division (CTCD)',
  subtitle = 'Admission Open 2026-2027',
  description = 'Due to increasing competition in the domestic and international markets, political influence, and technological advancements, organisations find it difficult to compete in the marketplace. Corporate Training and Consultancy Division (CTCD) at Kalinga helps businesses effectively utilise their most valuable asset, i.e., THEIR PEOPLE.',
  buttonText = 'Learn More',
  buttonLink = '/about-us',
  showForm = true,
  customForm = null,
  id = null,
  subtitleTextColor = 'text-white md:text-[var(--button-red)]',
  subtitleClassName = '',
  showBlackOverlay = false,
  titleTextColor = 'md:text-[var(--foreground)] text-white md:!text-[40px] !text-4xl',
  hideBorder = false,
  subtitleImage = null,
  subtitleImageAlt = '',
}) => {
  return (
    <section id={id || undefined} className="relative min-h-[500px] md:h-[600px] lg:h-[100vh] md:mx-2 mx-0 mb-8 md:mb-0 pb-8 md:pb-0">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat rounded-xl h-full w-full ${hideBorder ? '' : 'border-4 border-[var(--dark-green)]'}`}
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundColor: '', // fallback color
        }} 
      >
        {/* Background overlay layer with 80% opacity */}
        {showBlackOverlay && (
          <>
            <div className="absolute inset-0 bg-[var(--foreground)]/40 rounded-xl sm:rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent  rounded-4xl"></div>
          </>
        )}
      </div>
      <div className="container  relative z-1 mx-auto h-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full py-12 md:py-0">
        {/* Left Side - Text Content */}
        <div className={`flex flex-col items-start justify-center text-left ${titleTextColor} gap-4 md:w-1/2 w-full`}>
          {logoImage && (
            <Image src={logoImage} alt={logoAlt} width={100} height={100} />
          )}
          {subtitleImage ? (
            <>
              <div className="mb-4">
                <Image src={subtitleImage} alt={subtitleImageAlt} width={120} height={30} className="object-contain" />
              </div>
              <SectionHeading 
                title={title}
                subtitle=""
                titleClassName={`${titleTextColor} max-w-md text-[50px]`}
              />
            </>
          ) : (
            <SectionHeading 
              title={title}
              subtitle={subtitle}
              titleClassName={`${titleTextColor} max-w-md text-[50px]`}
              subtitleTextColor={subtitleTextColor}
              subtitleClassName={subtitleClassName}
            />
          )}
          {/* <p className="md:text-base text-xs text-[var(--foreground)] ">{description}</p> */}
          <Link href={buttonLink} className="inline-flex">
            <GlobalArrowButton
                className="!bg-white !text-black"
                arrowClassName="!bg-[var(--button-red)]"
                arrowIconClassName="!text-white"
                textClassName="!text-black"
              >
                {buttonText}
              </GlobalArrowButton>
          </Link>
        </div>
        
        {/* Right Side - Form */}
        {(showForm || customForm) && (
          customForm ? (
            <div className="flex flex-col items-center md:items-end justify-center md:w-1/2 w-full">
              {customForm}
            </div>
          ) : (
            <div className="flex flex-col items-center md:items-end justify-center md:w-1/2 w-full">
              <form className="bg-white/95 backdrop-blur-sm rounded-lg p-6 md:p-8 w-full max-w-md shadow-xl">
                {/* <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h2> */}
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
          )
        )}
      </div>
    </section>
  );
}

export default HeroSectionTwo;
