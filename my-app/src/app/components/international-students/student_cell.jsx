"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import SectionHeading from "../general/SectionHeading";
import GlobalArrowButton from "../general/global-arrow_button";

export default function StudentCell({
  imageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/student-cell.webp",
  imageAlt = "International students",
  tag = "International Students Cell",
  title = "Supporting Global Students At Every Step",
  description = "The International Students Cell at Kalinga University has been established to streamline the academic processes of our global students, helping them seize the best opportunities and resources of our University. The members of our cell take utmost care of our students from their arrival and admission into our programs to providing support and guidance until they receive their degree. Not just academically, but they also provide details of events, competitions, and training programs, and encourage them to actively participate in events outside the classroom. They even provide complete immigration support, make accommodation arrangements, and arrange language classes. From organising BRIDGE Classes to providing counselling sessions for academic and personal growth, their aim is to make every student feel at home.",
  ctaLabel = "Read More",
  ctaHref = "#",
  subtitle = "International Students Cell",
  subtitleClassName = "",
  titleClassName = "!text-white",
  subtitleTextColor = "text-[var(--dark-orange-red)]",
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsReadMore, setNeedsReadMore] = useState(false);
  const textRef = useRef(null);
  const measureRef = useRef(null);

  useEffect(() => {
    const checkIfNeedsReadMore = () => {
      if (!textRef.current || !measureRef.current || isExpanded) return;
      
      const visibleWidth = textRef.current.offsetWidth;
      if (measureRef.current.style.width !== `${visibleWidth}px`) {
        measureRef.current.style.width = `${visibleWidth}px`;
      }
      
      const styles = window.getComputedStyle(textRef.current);
      const fontSize = parseFloat(styles.fontSize);
      const lineHeightValue = styles.lineHeight;
      
      let lineHeight;
      if (lineHeightValue === 'normal') {
        lineHeight = fontSize * 1.5;
      } else if (lineHeightValue.includes('px')) {
        lineHeight = parseFloat(lineHeightValue);
      } else {
        lineHeight = fontSize * parseFloat(lineHeightValue);
      }
      
      const fourLinesHeight = lineHeight * 4;
      const fullTextHeight = measureRef.current.scrollHeight;
      
      setNeedsReadMore(fullTextHeight > fourLinesHeight);
    };
    
    const rafId = requestAnimationFrame(() => {
      checkIfNeedsReadMore();
      setTimeout(checkIfNeedsReadMore, 100);
    });
    
    window.addEventListener('resize', checkIfNeedsReadMore);
    
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', checkIfNeedsReadMore);
    };
  }, [description, isExpanded]);

  return (
    <section className="mx-2">
      <div className="bg-[var(--dark-blue)] text-white rounded-2xl shadow-lg overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-16">
            <div className="relative w-full h-[300px] md:h-[500px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="rounded-2xl"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>

            <div className="flex flex-col">
              <SectionHeading
                subtitle={subtitle}
                title={title}
                subtitleClassName={subtitleClassName}
                titleClassName={titleClassName}
                subtitleTextColor={subtitleTextColor}
              />
              <div className="relative">
                {/* Hidden element to measure full text height */}
                <p 
                  ref={measureRef}
                  className="text-sm md:text-base text-white/80 leading-relaxed"
                  style={{ 
                    position: 'absolute',
                    visibility: 'hidden',
                    opacity: 0,
                    pointerEvents: 'none',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    whiteSpace: 'normal',
                    wordWrap: 'break-word'
                  }}
                >
                  {description}
                </p>
                
                {/* Visible text */}
                <p 
                  ref={textRef}
                  className={`text-sm md:text-base text-white/80 leading-relaxed ${
                    !isExpanded && needsReadMore ? 'line-clamp-4' : ''
                  }`}
                >
                  {description}
                </p>
              </div>
              {needsReadMore && (
                <GlobalArrowButton
                  className="!bg-[var(--dark-blue)] !text-white shadow-none !p-0 mt-2"
                  arrowClassName="!bg-[var(--button-red)]"
                  arrowIconClassName="!text-white"
                  textClassName="!text-white text-xs sm:text-base !pl-0"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Read Less" : ctaLabel}
                </GlobalArrowButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
