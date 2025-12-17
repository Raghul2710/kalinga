"use client";
import SectionHeading from "../general/SectionHeading";
import Image from "next/image";

export default function Partner({
    blueTitle = "Our Partners",
    redTitle = "Our Partners",
    blueItems = [],
    redItems = [],
    ccrcLogo = null,
    className = "",
}) {
  // Duplicate items for seamless scrolling
  const duplicatedBlueItems = blueItems.length > 0 ? [...blueItems, ...blueItems] : [];
  const duplicatedRedItems = redItems.length > 0 ? [...redItems, ...redItems] : [];

  // Render partner grid
  const renderPartnerGrid = (items, isBlue = true) => {
    if (!items || items.length === 0) {
      return <p className="text-white/70 text-center py-8">No partners to display</p>;
    }

    return (
      <div className="partner-marquee-container">
        <div className="animate-marquee-vertical partner-marquee-wrapper">
          {/* First set */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {items.map((item, idx) => (
              <div
                key={`first-${idx}`}
                className="flex items-center justify-center bg-white rounded-xl p-3 h-20 w-full shadow-sm hover:shadow-md transition-shadow"
              >
                {item.imageSrc && (
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt || item.text || `Partner logo ${idx + 1}`}
                    width={isBlue ? 140 : 120}
                    height={isBlue ? 140 : 48}
                    className="object-contain h-12 max-w-full"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
          {/* Duplicated set for seamless loop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {items.map((item, idx) => (
              <div
                key={`second-${idx}`}
                className="flex items-center justify-center bg-white rounded-xl p-3 h-20 w-full shadow-sm hover:shadow-md transition-shadow"
              >
                {item.imageSrc && (
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt || item.text || `Partner logo ${idx + 1}`}
                    width={isBlue ? 140 : 120}
                    height={isBlue ? 140 : 48}
                    className="object-contain h-12 max-w-full"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={` mx-2   y-16 !rounded-xl gradient-background  !px-0 ${className}`}>
        <div className="container md:rounded-none rounded-xl !p-0">
      <div className="grid grid-cols-1 md:grid-cols-2 !rounded-xl ">
        {/* Blue Background Grid - Left */}
        <div className="bg-[var(--dark-blue)] md:p-8 lg:p-12 p-6 py-10 pr-8 md:pr-10 lg:pr-12">
          <div className="flex flex-col ">
            {/* Section Title */}
            <SectionHeading title={blueTitle} titleClassName="!py-2 text-white text-center" />
            <p className="text-white text-center text-sm pb-5   ">Organizations that have participated in skill development and professional training initiatives</p>
    
            {/* Partners Grid with Vertical Marquee */}
            {renderPartnerGrid(blueItems, true)}
          </div>
        </div>

        {/* Red Background Grid - Right */}
        <div className="bg-[var(--button-red)] md:p-8 lg:p-12 p-6 py-10 pr-8 md:pr-10 lg:pr-12">
          <div className="flex flex-col ">
                    {/* Section Title */}
                    <SectionHeading title={redTitle} titleClassName="!py-2 text-white text-center" />
                    <p className="text-white text-center text-sm pb-5"> Companies partnered with CCRC through MoUs for training and collaboration</p>
            
            {/* Partners Grid with Vertical Marquee */}
            {renderPartnerGrid(redItems, false)}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}