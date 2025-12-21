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
    singleColumn = false,
    milestones = null,
    description = "Organizations that have participated in skill development and professional training initiatives",
}) {
  // Duplicate items for seamless scrolling
  const duplicatedBlueItems = blueItems.length > 0 ? [...blueItems, ...blueItems] : [];
  const duplicatedRedItems = redItems.length > 0 ? [...redItems, ...redItems] : [];
  
  // Combine items for single column layout
  const combinedItems = singleColumn ? [...blueItems, ...redItems] : [];

  // Render partner grid
  const renderPartnerGrid = (items, isBlue = true, isSingleColumn = false) => {
    if (!items || items.length === 0) {
      return <p className="text-white/70 text-center py-8">No partners to display</p>;
    }

    const gridClass = isSingleColumn 
      ? "grid grid-cols-4 md:grid-cols-8 gap-3 sm:gap-4" 
      : "grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4";

    if (isSingleColumn) {
      // Single grid with marquee scroll for single column layout
      const duplicatedItems = [...items, ...items]; // Duplicate items for seamless loop
      return (
        <div className="partner-marquee-container overflow-hidden">
          <div className="animate-marquee-vertical partner-marquee-wrapper">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3 sm:gap-4">
              {duplicatedItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center bg-white rounded-xl h-20 w-full shadow-sm hover:shadow-md transition-shadow"
                >
                  {item.imageSrc && (
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt || item.text || `Partner logo ${idx + 1}`}
                      width={isBlue ? 140 : 120}
                      height={isBlue ? 140 : 48}
                      className="object-contain h-16 max-w-full"
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Two grids for scrolling effect (two column layout)
    return (
      <div className="partner-marquee-container">
        <div className="animate-marquee-vertical partner-marquee-wrapper flex flex-col gap-1">
          {/* First set */}
          <div className={gridClass}>
            {items.map((item, idx) => (
              <div
                key={`first-${idx}`}
                className="flex items-center justify-center bg-white rounded-xl h-20 w-full shadow-sm hover:shadow-md transition-shadow"
              >
                {item.imageSrc && (
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt || item.text || `Partner logo ${idx + 1}`}
                    width={isBlue ? 140 : 120}
                    height={isBlue ? 140 : 48}
                    className="object-contain h-16 max-w-full"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
          {/* Duplicated set for seamless loop */}
          <div className={gridClass}>
            {items.map((item, idx) => (
              <div
                key={`second-${idx}`}
                className="flex items-center justify-center bg-white rounded-xl h-20 w-full shadow-sm hover:shadow-md transition-shadow"
              >
                {item.imageSrc && (
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt || item.text || `Partner logo ${idx + 1}`}
                    width={isBlue ? 140 : 120}
                    height={isBlue ? 140 : 48}
                    className="object-contain h-16 max-w-full"
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
    <section className={` mx-2   y-16 !rounded-xl !px-0 ${className}`}>
      {singleColumn ? (
        // Single Column Layout
        <div className="grid grid-cols-1 !rounded-xl">
          <div className="bg-[var(--dark-blue)] py-16 rounded-xl">
            <div className="flex flex-col container mx-auto">
              {/* Top Section: Title on Left, Milestones on Right */}
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8 items-center">
                {/* Left: Title */}
                <div className="flex flex-col">
                  <SectionHeading title={blueTitle} titleClassName="!py-2 text-white text-left" />
                  <p className="text-white text-left text-sm mt-2 max-w-md">{description}</p>
                </div>
                
                {/* Right: Milestones */}
                {milestones && (
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 text-white">
                    {milestones.map((milestone, idx) => (
                      <div key={idx} className="flex-1 flex items-center md:items-start w-full md:w-auto">
                        <div className="flex-1">
                          <h3 className="!text-3xl sm:!text-[35px] md:!text-[40px] text-white mb-1 sm:mb-2">{milestone.value} +</h3>
                          <h6 className="text-sm sm:text-base text-white font-stix">{milestone.label}</h6>
                        </div>
                        {idx < milestones.length - 1 && (
                          <div className="hidden md:block self-stretch w-px bg-white/30 mx-3 lg:mx-5" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
      
              {/* Partners Grid with Vertical Marquee */}
              {renderPartnerGrid(combinedItems.length > 0 ? combinedItems : blueItems, true, true)}
            </div>
          </div>
        </div>
      ) : (
        // Two Column Layout (Original)
        <div className="grid grid-cols-1 md:grid-cols-2 !rounded-xl ">
          {/* Blue Background Grid - Left */}
          <div className="bg-[var(--dark-blue)] md:p-8 lg:p-12 p-6 py-10 pr-8 md:pr-10 lg:pr-12">
            <div className="flex flex-col ">
              {/* Section Title */}
              <SectionHeading title={blueTitle} titleClassName="!py-2 text-white text-center" />
              <p className="text-white text-center text-sm pb-5 max-w-md mx-auto">Organizations that have participated in skill development and professional training initiatives</p>
      
              {/* Partners Grid with Vertical Marquee */}
              {renderPartnerGrid(blueItems, true)}
            </div>
          </div>

          {/* Red Background Grid - Right */}
          <div className="bg-[var(--button-red)] md:p-8 lg:p-12 p-6 py-10 pr-8 md:pr-10 lg:pr-12">
            <div className="flex flex-col ">
                      {/* Section Title */}
                      <SectionHeading title={redTitle} titleClassName="!py-2 text-white text-center" />
                      <p className="text-white text-center text-sm pb-5 max-w-md mx-auto"> Companies partnered with CCRC through MoUs for training and collaboration</p>
              
              {/* Partners Grid with Vertical Marquee */}
              {renderPartnerGrid(redItems, false)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}