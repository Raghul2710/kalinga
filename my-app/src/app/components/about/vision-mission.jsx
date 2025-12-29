"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// ReadMoreParagraphs component - Shows text with 4-line limit and Read More
function ReadMoreParagraphs({ text, isArray = false }) {
  const [showAll, setShowAll] = useState(false);
  const [needsReadMore, setNeedsReadMore] = useState(false);
  const textRef = useRef(null);
  const measureRef = useRef(null);
  
  // If it's an array, join all paragraphs
  const fullText = isArray ? text.join(' ') : text;
  
  useEffect(() => {
    const checkIfNeedsReadMore = () => {
      if (!textRef.current || !measureRef.current || showAll) return;
      
      // Sync the width of measurement element with visible element
      const visibleWidth = textRef.current.offsetWidth;
      if (measureRef.current.style.width !== `${visibleWidth}px`) {
        measureRef.current.style.width = `${visibleWidth}px`;
      }
      
      // Get computed styles to calculate line height
      const styles = window.getComputedStyle(textRef.current);
      const fontSize = parseFloat(styles.fontSize);
      const lineHeightValue = styles.lineHeight;
      
      // Calculate line height (handle 'normal', px, or unitless values)
      let lineHeight;
      if (lineHeightValue === 'normal') {
        lineHeight = fontSize * 1.5; // Default line-height
      } else if (lineHeightValue.includes('px')) {
        lineHeight = parseFloat(lineHeightValue);
      } else {
        lineHeight = fontSize * parseFloat(lineHeightValue);
      }
      
      // 4 lines height
      const fourLinesHeight = lineHeight * 4;
      
      // Get the full text height from the measurement element
      const fullTextHeight = measureRef.current.scrollHeight;
      
      // Check if full text exceeds 4 lines
      setNeedsReadMore(fullTextHeight > fourLinesHeight);
    };
    
    // Use requestAnimationFrame to ensure DOM is ready
    const rafId = requestAnimationFrame(() => {
      checkIfNeedsReadMore();
      // Also check after a small delay to ensure layout is complete
      setTimeout(checkIfNeedsReadMore, 100);
    });
    
    // Check on window resize
    window.addEventListener('resize', checkIfNeedsReadMore);
    
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', checkIfNeedsReadMore);
    };
  }, [fullText, showAll]);
  
  return (
    <div className="space-y-3">
      <div className="relative">
        {/* Hidden element to measure full text height */}
        <p 
          ref={measureRef}
          className="text-[var(--foreground)] leading-relaxed text-sm"
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
          {fullText}
        </p>
        
        {/* Visible text with clamp */}
        {!showAll ? (
          <div className="flex flex-col  items-start gap-1">
            <p 
              ref={textRef}
              className={`text-[var(--foreground)] leading-relaxed text-sm flex-1 ${
                needsReadMore ? 'line-clamp-4' : ''
              }`}
            >
              {fullText}
            </p>
            {needsReadMore && (
              <button
                type="button"
                className="text-[var(--foreground)] !text-sm font-normal hover:text-[var(--button-red)] transition-colors flex-shrink-0 whitespace-nowrap"
                onClick={() => setShowAll(true)}
              >
                Read More
              </button>
            )}
          </div>
        ) : (
          <p className="text-[var(--foreground)] leading-relaxed text-sm">
            {fullText}
            {' '}
            <button
              type="button"
              className="text-[var(--foreground)] !text-sm font-normal hover:text-[var(--button-red)] transition-colors ml-1"
              onClick={() => setShowAll(false)}
            >
              Show Less
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

const defaultVision = `
  Kalinga University aims to be an outstanding institution for Talent Development and Knowledge Creation for a vibrant and inclusive society.
`.trim();

const defaultMission = [
  'The primary purpose of Kalinga University is to become a global education hub in which faculty, staff, and students can discover, examine critically, preserve, and transmit the knowledge, wisdom, and values that will ensure the survival of future generations and improve the quality of life for all.',
  'The University seeks to help students develop an understanding and appreciation for the complex cultural and physical worlds in which they live and to realise their highest potential of intellectual, physical, and human development.',
]


export default function VisionMission({
  data,
  visionTitle = "Vision",
  missionTitle = "Mission",
  visionText = defaultVision,
  missionText = defaultMission,
  imageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/student-img.png",
  imageAlt = "Vision and Mission",
  showImage = true,
  showImg, // Alias for showImage
  className = "",
}) {
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

  // Support data prop (array of objects) or individual props
  // Use showImg prop if provided, otherwise use showImage
  const finalShowImage = showImg !== undefined ? showImg : showImage;
  
  const entries = Array.isArray(data) && data.length > 0 
    ? data.map(entry => ({
        ...entry,
        showImage: showImg !== undefined ? showImg : (entry.showImage !== undefined ? entry.showImage : true)
      }))
    : [{
        visionTitle,
        missionTitle,
        visionText,
        missionText,
        imageSrc,
        imageAlt,
        showImage: finalShowImage,
        className,
      }];

  return (
    <>
      {/* SVG ClipPath Definition - Rendered once */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          {/* Mission Box - Left side cut */}
          <clipPath id="rounded-polygon" clipPathUnits="objectBoundingBox">
            <path d="M 0.08 0.143 
                     L 0.96 0.01 
                     Q 1.0 0.0 1.0 0.04 
                     L 1.0 0.92 
                     Q 1.0 0.96 0.96 0.96 
                     L 0.08 0.847 
                     Q 0.05 0.842 0.05 0.802 
                     L 0.05 0.188 
                     Q 0.05 0.148 0.08 0.143 
                     Z"></path>
          </clipPath>
          {/* Vision Box - Right side cut (inverted) */}
          <clipPath id="rounded-polygon-inverted" clipPathUnits="objectBoundingBox">
            <path d="M 0.0 0.04 
                     Q 0.0 0.0 0.04 0.01 
                     L 0.92 0.143 
                     Q 0.95 0.148 0.95 0.188 
                     L 0.95 0.802 
                     Q 0.95 0.842 0.92 0.847 
                     L 0.04 0.96 
                     Q 0.0 0.96 0.0 0.92 
                     L 0.0 0.04 
                     Z"></path>
          </clipPath>
        </defs>
      </svg>
      
      {entries.map((entry, idx) => {
        const {
          visionTitle: vt = "Vision",
          missionTitle: mt = "Mission",
          visionText: vtxt = defaultVision,
          missionText: mtxt = defaultMission,
          imageSrc: imgSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/student-img.png",
          imageAlt: imgAlt = "Vision and Mission",
          showImage: showImg = true,
          className: cls = "",
        } = entry;

        const gridCols = showImg ? "lg:grid-cols-13" : "lg:grid-cols-2";
        const visionCol = showImg
          ? "order-1 lg:order-1 lg:col-span-5"
          : "order-1 lg:order-1";
        const missionCol = showImg
          ? "order-2 lg:order-3 lg:col-span-5"
          : "order-2 lg:order-2 pb-5";

        // Helper function to render text with 4-line Read More
        const renderText = (text) => {
          // Always use ReadMoreParagraphs with 4-line limit
          const isArray = Array.isArray(text);
          return <ReadMoreParagraphs text={text} isArray={isArray} />;
        };

        return (
          <section id="vision-mission" key={idx} className={`pt-16 bg-white px-2 ${cls}`}>
            <div className="container mx-auto">
              <div className={`grid grid-cols-1 ${gridCols} gap-4 items-stretch`}>
                {/* Left - Vision Box */}
                <div className={`${visionCol} flex`}>
                  {/* Filter Wrapper for Drop Shadow */}
                  <div 
                    className="relative group w-full max-w-[900px] h-full transition-transform duration-500" 
                    style={{ filter: 'drop-shadow(0 25px 25px rgba(0,0,0,0.08))' }}
                  >
                    {/* The Clipped Card - Inverted */}
                    <div 
                      className="bg-[var(--dark-skin)] relative w-full h-full p-[25px] py-20 flex items-center justify-center"
                      style={isDesktop ? { 
                        clipPath: 'url(#rounded-polygon-inverted)',
                        WebkitClipPath: 'url(#rounded-polygon-inverted)'
                      } : {borderRadius: '20px'}}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-orange-900/5 pointer-events-none"></div>
                      
                      {/* Content Container */}
                      <div className="flex-1 flex flex-col items-center justify-center w-full relative z-10 pr-4 md:pr-6">
                        <h3 className="font-stix text-[var(--foreground)] mb-4 text-center !text-[35px]">
                          {vt}
                        </h3>
                        <div className="w-full">
                          {renderText(vtxt)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
                {/* Center - Person Image */}
                {showImg && (
                  <div className="order-3 lg:order-2 lg:col-span-3 flex justify-center items-end">
                    <div className="relative w-full max-w-[220px]">
                      <Image
                        src={imgSrc}
                        alt={imgAlt}
                        width={250}
                        height={550}
                        className="w-full h-auto object-contain"
                        priority
                      />
                    </div>
                  </div>
                )}

                {/* Right - Mission Box */}
                <div className={`${missionCol} flex`}>
                  {/* Filter Wrapper for Drop Shadow */}
                  <div 
                    className="relative group w-full max-w-[900px] h-full transition-transform duration-500" 
                    style={{ filter: 'drop-shadow(0 25px 25px rgba(0,0,0,0.08))' }}
                  >
                    {/* The Clipped Card */}
                    <div className={`${isDesktop ? 'r-3d' : 'rounded-[20px]'} bg-[var(--dark-skin)] relative w-full h-full p-[25px] py-20 flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-orange-900/5 pointer-events-none"></div>
                      
                      {/* Content Container */}
                      <div className="flex-1 flex flex-col items-center justify-center w-full relative z-10 pl-4 md:pl-6">
                        <h3 className="font-stix text-[var(--foreground)] mb-4 text-center !text-[35px]">
                          {mt}
                        </h3>
                        <div className="w-full">
                          {renderText(mtxt)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

