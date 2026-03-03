"use client";
import { useState } from "react";
import Image from "next/image";
import SectionHeading from "../general/SectionHeading";

const DEFAULT_IMAGE_SRC = "https://cdn.kalingauniversity.ac.in/IQAC/kalinga.webp";
const DEFAULT_TITLE = "Contact Details";
const DEFAULT_SUBTITLE = "Head of Department";
const DEFAULT_DEPARTMENT = "Faculty of Information Technology";
const DEFAULT_QUOTE = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const DEFAULT_EMAIL = "cif@kalingauniversity.ac.in";
const DEFAULT_PHONE = "+91-9109179430";
const DEFAULT_ADDRESS = "Central Instrumentation Facility, Kalinga University, Kotni, Near Mantralaya, Naya Raipur, CG - 492101";

function MentorCard({
  cardClassName = "",
  imageSrc = DEFAULT_IMAGE_SRC,
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  department = DEFAULT_DEPARTMENT,
  quote = DEFAULT_QUOTE,
  message = "",
  mail = DEFAULT_EMAIL,
  phone = DEFAULT_PHONE,
  phone2 = null,
  address = DEFAULT_ADDRESS,
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const cleanPhone = (num) => {
    if (typeof num !== "string") return "";
    // Clean number to keep only digits and + for dialer
    return num.replace(/[^\d+]/g, "");
  };

  return (
    <>
      <div className={`grid grid-cols-1 lg:grid-cols-12 items-center gap-5 lg:gap-0 ${cardClassName}`}>
        <div className="lg:col-span-4 z-20 h-full">
          <div className="relative z-20 bg-[var(--lite-sand)] rounded-2xl p-2 w-full">
            <Image
              src={imageSrc}
              alt={title}
              width={500}
              height={500}
              className="w-full h-[320px] md:h-full object-cover rounded-2xl"
            />
            {message && (
              <div className="absolute right-4 bottom-4 z-30">
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="w-10 h-10 rounded-lg bg-[var(--button-red)] hover:opacity-80 cursor-pointer  flex items-center justify-center transition-colors shadow-md"
                  aria-label="Open message"
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M4 12L12 4M12 4H6M12 4V10"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-6 relative lg:left-[-25px] lg:pt-35 lg:pt-0 z-10">

          {/* Contact Details Section */}
          <div className="bg-[var(--dark-blue)] rounded-xl md:p-14 p-6 relative overflow-hidden md:pl-16 z-10">
            <div className="relative z-10">
              <h3 className="text-white text-xl sm:text-2xl font-stix mb-6">{title}</h3>
              <div className="grid grid-cols-1 gap-4 sm:gap-6 text-white/80">
                {mail && (
                  typeof mail === "string" ? (
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[var(--dark-orange-red)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <a href={`mailto:${mail}`} className="text-sm sm:text-base hover:text-white transition-colors underline">
                        {mail}
                      </a>
                    </div>
                  ) : (
                    mail
                  )
                )}
                {(phone || phone2) && (
                  <div className="flex flex-col gap-4">
                    {phone && (
                      typeof phone === "string" ? (
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-[var(--dark-orange-red)] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <a href={`tel:${cleanPhone(phone)}`} className="text-sm sm:text-base hover:text-white transition-colors">
                            {phone}
                          </a>
                        </div>
                      ) : (
                        phone
                      )
                    )}
                    {phone2 && (
                      typeof phone2 === "string" ? (
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-[var(--dark-orange-red)] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <a href={`tel:${cleanPhone(phone2)}`} className="text-sm sm:text-base hover:text-white transition-colors">
                            {phone2}
                          </a>
                        </div>
                      ) : (
                        phone2
                      )
                    )}
                  </div>
                )}
                {address && (
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--dark-orange-red)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm sm:text-base leading-relaxed">
                      {address}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default function MentorIntro({ items, ...restProps }) {
  const entries = Array.isArray(items) && items.length > 0 ? items : [restProps];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-2 space-y-12">
        {entries.map((item, idx) => (
          <MentorCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}

