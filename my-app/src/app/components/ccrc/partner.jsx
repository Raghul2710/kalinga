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
  return (
    <section className={` mx-5   y-16 !rounded-xl gradient-background  !px-0 ${className}`}>
        <div className="container md:rounded-none rounded-xl !p-0">
      <div className="grid grid-cols-1 md:grid-cols-2 !rounded-xl ">
        {/* Blue Background Grid - Left */}
        <div className="bg-[var(--dark-blue)] md:p-8 lg:p-12 p-6 py-10 pr-8 md:pr-10 lg:pr-12">
          <div className="flex flex-col ">
            {/* Section Title */}
            <SectionHeading title={blueTitle} titleClassName="!py-2 text-white text-center" />
            <p className="text-white text-center text-sm pb-5   ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    
            
            {/* Partners Grid */}
            {blueItems && Array.isArray(blueItems) && blueItems.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {blueItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center bg-white rounded-xl p-4 sm:p-6  h-24 sm:h-28 w-full shadow-sm hover:shadow-md transition-shadow"
                  >
                    {item.imageSrc && (
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt || item.text || `Partner logo ${idx + 1}`}
                        width={120}
                        height={48}
                        className="object-contain h-12 max-w-full"
                        loading="lazy"
                      />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white/70 text-center py-8">No partners to display</p>
            )}
          </div>
        </div>

        {/* Red Background Grid - Right */}
        <div className="bg-[var(--button-red)] md:p-8 lg:p-12 p-6 py-10 pr-8 md:pr-10 lg:pr-12">
          <div className="flex flex-col ">
                    {/* Section Title */}
                    <SectionHeading title={redTitle} titleClassName="!py-2 text-white text-center" />
                    <p className="text-white text-center text-sm pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            {/* Partners Grid */}
            {redItems && Array.isArray(redItems) && redItems.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {redItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center bg-white rounded-xl p-4 sm:p-6  h-24 sm:h-28 w-full shadow-sm hover:shadow-md transition-shadow"
                  >
                    {item.imageSrc && (
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt || item.text || `Partner logo ${idx + 1}`}
                        width={120}
                        height={48}
                        className="object-contain h-12 max-w-full"
                        loading="lazy"
                      />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white/70 text-center py-8">No partners to display</p>
            )}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}