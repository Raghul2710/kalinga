'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import GlobalArrowButton from "../general/global-arrow_button";
import SectionHeading from "../general/SectionHeading";
import FlipbookTrigger from "../general/FlipbookTrigger";

const defaultContent = {
  title: "Transforming futures with knowledge & innovation",
  description: [
    "Kalinga University blends rigorous academics with hands-on learning, ensuring students are industry-ready from day one. Our curriculum aligns with NEP 2020, supported by experienced faculty, modern labs, and strong industry partnerships.",
    "With students from 50+ countries, a green smart campus, and vibrant clubs, we nurture global citizens who thrive in research, entrepreneurship, and community impact.",
  ],
  imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/careers/careers-about.webp",
  imageAlt: "Kalinga University campus",
};

export default function MainIntro({
  title = defaultContent.title,
  subtitle = null,
  description = defaultContent.description,
  points = null,
  imageUrl = defaultContent.imageUrl,
  imageAlt = defaultContent.imageAlt,
  initialVisibleParagraphs = 2,
  subtitleClassName = "text-left",
  titleClassName = "leading-tight !text-left",
  showImage = true,
  showKnowMore = true,
  knowMoreLabel = "Read More",
  knowMoreHref = null,
  onKnowMore = null,
  reverseLayout = false,
  applyTransform3dSlant = true,
  descriptionClassName = "text-[var(--light-text-gray)]",
  hidePointsUntilExpanded = false,
}) {
  const descriptionArray = Array.isArray(description) ? description : [description];
  const [showAll, setShowAll] = useState(false);
  const visibleParagraphs = showAll
    ? descriptionArray
    : descriptionArray.slice(0, initialVisibleParagraphs);
  const paragraphs = Array.isArray(description) ? description : [description];
  const [expanded, setExpanded] = useState(false);

  const visibleText = expanded
    ? paragraphs
    : paragraphs.slice(0, initialVisibleParagraphs);

  // Track if desktop view (for clipPath)
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if desktop on mount
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Check initially
    checkDesktop();

    // Add resize listener
    window.addEventListener('resize', checkDesktop);

    // Cleanup
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);


  return (
    <section className="md:py-16 bg-white py-16 !pb-20 ">
      {/* SVG ClipPath Definition */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <clipPath id="rounded-polygon-main" clipPathUnits="objectBoundingBox">
            <path d="M 0.08 0.143 L 0.96 0.01 Q 1.0 0.0 1.0 0.04 L 1.0 0.92 Q 1.0 0.96 0.96 0.96 L 0.08 0.847 Q 0.05 0.842 0.05 0.802 L 0.05 0.188 Q 0.05 0.148 0.08 0.143 Z"></path>
          </clipPath>
          <clipPath id="rounded-polygon-main-inverted" clipPathUnits="objectBoundingBox">
            <path d="M 0.0 0.04 Q 0.0 0.0 0.04 0.01 L 0.92 0.143 Q 0.95 0.148 0.95 0.188 L 0.95 0.802 Q 0.95 0.842 0.92 0.847 L 0.04 0.96 Q 0.0 0.96 0.0 0.92 L 0.0 0.04 Z"></path>
          </clipPath>
        </defs>
      </svg>
      <div className="container mx-auto px-2">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ${showAll ? 'items-start' : 'items-center'}`}>
          {/* Left Section - Text Content */}
          <div className={`flex flex-col order-2 ${reverseLayout ? 'lg:order-2' : 'lg:order-1'} lg:pl-0 lg:pr-4`}>
            <SectionHeading
              title={title}
              subtitle={subtitle}
              titleClassName={titleClassName}
              subtitleClassName={subtitleClassName}
            />

            <div className="space-y-4">
              {visibleParagraphs.map((paragraph, idx) => (
                <p key={idx} className={`${descriptionClassName} leading-relaxed break-words overflow-visible text-justify`}>
                  {paragraph}
                </p>
              ))}

              {/* Points List */}
              {points && Array.isArray(points) && points.length > 0 && (!hidePointsUntilExpanded || showAll) && (
                <ul className="space-y-3 mt-4">
                  {points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[var(--light-text-gray)] leading-relaxed">
                      <svg
                        fill="none"
                        height="24"
                        className="md:h-6 md:w-6 h-6 w-9 bg-[var(--card-skin)] fill-black rounded-md p-1 flex-shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m19 5.50049v10.99951c0 .2761-.2239.5-.5.5s-.5-.2239-.5-.5v-9.79289l-12.14645 12.14649c-.19526.1952-.51184.1952-.7071 0-.19527-.1953-.19527-.5119 0-.7072l12.14645-12.1464h-9.7929c-.27614 0-.5-.22386-.5-.5s.22386-.5.5-.5h11c.1316 0 .2578.05186.3514.14426l.0022.00219c.0879.0879.1397.20518.1458.32876.0004.00824.0006.01699.0006.02528z"></path>
                      </svg>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              )}

              {showKnowMore && (descriptionArray.length > initialVisibleParagraphs || (hidePointsUntilExpanded && points && points.length > 0) || (knowMoreHref && knowMoreHref !== "#")) && (
                <div className="pt-2">
                  {knowMoreHref && knowMoreHref !== "#" ? (
                    (() => {
                      const isPdf = knowMoreHref.toLowerCase().endsWith(".pdf");
                      const buttonEl = (
                        <GlobalArrowButton
                          className="w-fit !bg-white !text-white gap-2 !px-0 !py-0"
                          textClassName="!text-[var(--button-red)] !font-semibold !px-0"
                          arrowClassName="p-[3px] !px-1 mr-2 !py-1 !bg-[var(--button-red)]"
                          arrowIconClassName="!text-white"
                        >
                          {knowMoreLabel}
                        </GlobalArrowButton>
                      );

                      return isPdf ? (
                        <FlipbookTrigger pdfUrl={knowMoreHref} title={knowMoreLabel}>
                          <a
                            href={knowMoreHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onKnowMore}
                            className="inline-block"
                          >
                            {buttonEl}
                          </a>
                        </FlipbookTrigger>
                      ) : (
                        <a
                          href={knowMoreHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={onKnowMore}
                          className="inline-block"
                        >
                          {buttonEl}
                        </a>
                      );
                    })()
                  ) : (
                    <GlobalArrowButton
                      className="w-fit !bg-white !text-white gap-2 !px-0 !py-0"
                      textClassName="!text-[var(--button-red)] !font-semibold !px-0"
                      arrowClassName="p-[3px] !px-1 mr-2 !py-1 !bg-[var(--button-red)]"
                      arrowIconClassName="!text-white"
                      onClick={() => setShowAll(!showAll)}
                    >
                      {showAll ? "Show Less" : knowMoreLabel}
                    </GlobalArrowButton>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Image */}
          {showImage && (
            <div className={`order-1 ${reverseLayout ? 'lg:order-1' : 'lg:order-2'} lg:pl-4 lg:pr-8`}>
              <div className="relative w-full overflow-visible min-h-[400px]">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  width={500}
                  height={500}
                  className={`w-full h-[450px] object-cover rounded-2xl max-h-[500px]`}
                  style={isDesktop ? {
                    clipPath: applyTransform3dSlant ? 'url(#rounded-polygon-main)' : 'url(#rounded-polygon-main-inverted)',
                    WebkitClipPath: applyTransform3dSlant ? 'url(#rounded-polygon-main)' : 'url(#rounded-polygon-main-inverted)'
                  } : { borderRadius: '20px' }}
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}