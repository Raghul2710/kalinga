"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import SectionHeading from "../general/SectionHeading";

const DEFAULT_IMAGE_SRC = "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/chart.webp";
const DEFAULT_TITLE = "Mr. Omprakash Dewangan";
const DEFAULT_SUBTITLE = "Head of Department";
const DEFAULT_DEPARTMENT = "Faculty of Information Technology";
const DEFAULT_QUOTE = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function MentorCard({
  cardClassName = "",
  imageSrc = DEFAULT_IMAGE_SRC,
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  department = DEFAULT_DEPARTMENT,
  quote = DEFAULT_QUOTE,
  message = "",
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isQuoteExpanded, setIsQuoteExpanded] = useState(false);
  const [needsReadMore, setNeedsReadMore] = useState(false);
  const quoteRef = useRef(null);

  useEffect(() => {
    // Check if quote text needs truncation
    const checkIfNeedsTruncation = () => {
      if (quoteRef.current && quote) {
        const element = quoteRef.current;
        
        // Create a temporary element to measure full text height
        const tempElement = document.createElement('p');
        tempElement.style.cssText = window.getComputedStyle(element).cssText;
        tempElement.style.position = 'absolute';
        tempElement.style.visibility = 'hidden';
        tempElement.style.display = 'block';
        tempElement.style.webkitLineClamp = 'none';
        tempElement.style.webkitBoxOrient = 'unset';
        tempElement.style.overflow = 'visible';
        tempElement.style.height = 'auto';
        tempElement.style.width = element.offsetWidth + 'px';
        tempElement.textContent = quote;
        
        document.body.appendChild(tempElement);
        const fullHeight = tempElement.offsetHeight;
        document.body.removeChild(tempElement);
        
        // Get line height from original element
        const lineHeight = parseFloat(getComputedStyle(element).lineHeight) || 24;
        const maxClampedHeight = lineHeight * 4; // 4 lines (WebkitLineClamp: 4)
        
        // Check if content actually exceeds 4 lines (with small buffer)
        setNeedsReadMore(fullHeight > maxClampedHeight + 2);
      }
    };

    // Check after initial render and on resize
    const timer = setTimeout(checkIfNeedsTruncation, 300);
    window.addEventListener('resize', checkIfNeedsTruncation);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkIfNeedsTruncation);
    };
  }, [quote]);

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
              className="w-full h-[320px] md:h-full object-cover rounded-2xl object-top"
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

      <div className="lg:col-span-8 flex flex-col gap-6 relative lg:left-[-25px] lg:pt-20 lg:pt-0 z-10">
        <div className="md:pl-14 pl-0">
          <SectionHeading title={title} subtitle={subtitle} titleClassName="!py-2" />
          <p className="text-gray-700 text-xl">
            {department}
          </p>
        </div>

        <div className="bg-[var(--dark-blue)] rounded-xl p-14 relative overflow-hidden pl-14 z-10">
          <div className="absolute top-10 left-12">
            <div className="flex gap-1">
              <svg width="26" height="41" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.2832 40.0727C19.6607 40.0727 20.7877 38.9457 20.7877 37.5682C20.7877 36.6916 20.412 35.9402 19.6607 35.5645C19.5355 35.4393 19.5355 35.4393 19.4102 35.3141C13.1489 31.1816 12.7732 26.2977 13.9002 22.5409H22.5409C23.9184 22.5409 25.0455 21.4139 25.0455 20.0364V2.50455C25.0455 1.12705 23.9184 0 22.5409 0H2.50455C1.12705 0 0 1.12705 0 2.50455V24.795C0 27.9257 1.00182 31.0564 2.88023 33.5609C5.13432 36.5663 9.6425 39.9475 18.2832 40.0727Z" fill="white"/>
              </svg>
              <svg width="26" height="41" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.2832 40.0727C19.6607 40.0727 20.7877 38.9457 20.7877 37.5682C20.7877 36.6916 20.412 35.9402 19.6607 35.5645C19.5355 35.4393 19.5355 35.4393 19.4102 35.3141C13.1489 31.1816 12.7732 26.2977 13.9002 22.5409H22.5409C23.9184 22.5409 25.0455 21.4139 25.0455 20.0364V2.50455C25.0455 1.12705 23.9184 0 22.5409 0H2.50455C1.12705 0 0 1.12705 0 2.50455V24.795C0 27.9257 1.00182 31.0564 2.88023 33.5609C5.13432 36.5663 9.6425 39.9475 18.2832 40.0727Z" fill="white"/>
              </svg>
            </div>
          </div>

          <div className="relative z-10">
            <p 
              ref={quoteRef}
              className="text-white text-base leading-relaxed pt-10 pb-8"
              style={!isQuoteExpanded ? {
                display: '-webkit-box',
                WebkitLineClamp: 4,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              } : {}}
            >
              {quote}
            </p>
            {needsReadMore && (
              <button
                onClick={() => setIsQuoteExpanded(!isQuoteExpanded)}
                className="text-white/80 hover:text-white text-sm font-plus-jakarta-sans mt-2 transition-colors underline"
              >
                {isQuoteExpanded ? 'Read Less' : 'Read More'}
              </button>
            )}
          </div>

          <div className="flex items-end justify-end relative z-10">
            <div className="absolute bottom-[-12px] md:bottom-0">
              <div className="flex justify-end gap-1 mt-6 sm:mt-0">
                <svg width="26" height="41" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.76369 40.0727C5.26097 39.9475 4.25915 38.57 4.5096 37.1925C4.63483 36.4411 5.01051 35.815 5.63665 35.3141C11.898 31.1816 12.2737 26.2977 11.1466 22.5409H2.50597C1.12847 22.5409 0.00142097 21.4139 0.00142097 20.0364V2.50454C0.00142097 1.12705 1.12847 0 2.50597 0H22.5423C23.9198 0 25.0469 1.12705 25.0469 2.50454V24.795C25.0469 27.9257 24.0451 31.0564 22.1666 33.5609C19.9126 36.5664 15.4044 39.9475 6.76369 40.0727Z" fill="white"/>
                </svg>
                <svg width="26" height="41" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.76369 40.0727C5.26097 39.9475 4.25915 38.57 4.5096 37.1925C4.63483 36.4411 5.01051 35.815 5.63665 35.3141C11.898 31.1816 12.2737 26.2977 11.1466 22.5409H2.50597C1.12847 22.5409 0.00142097 21.4139 0.00142097 20.0364V2.50454C0.00142097 1.12705 1.12847 0 2.50597 0H22.5423C23.9198 0 25.0469 1.12705 25.0469 2.50454V24.795C25.0469 27.9257 24.0451 31.0564 22.1666 33.5609C19.9126 36.5664 15.4044 39.9475 6.76369 40.0727Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Popup Modal */}
      {isPopupOpen && message && (
        <div
          className="fixed inset-0 bg-black/60  backdrop-blur-sm bg-opacity-50 z-50 flex items-end justify-center p-4"
          onClick={() => setIsPopupOpen(false)}
        >
          <div
            className="bg-white rounded-xl p-4 md:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close popup"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="">
              <h3 className="font-stix text-2xl md:text-3xl mb-4 text-[var(--foreground)]">
                {title}
              </h3>
              <div className="text-gray-700 leading-relaxed font-plus-jakarta-sans">
                {Array.isArray(message) ? (
                  message.map((paragraph, index) => (
                    <p key={index} className={index > 0 ? "mt-4" : ""}>
                      {paragraph}
                    </p>
                  ))
                ) : typeof message === 'string' ? (
                  <p>{message}</p>
                ) : Array.isArray(message) ? (
                  <div className="space-y-4">
                    {message.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                ) : (
                  message
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function MentorIntro({ items, ...restProps }) {
  const entries = Array.isArray(items) && items.length > 0 ? items : [restProps];
  return (
    <section className="py-16 bg-white md:pt-30">
      <div className="container mx-auto px-2 space-y-12">
        {entries.map((item, idx) => (
          <MentorCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}

