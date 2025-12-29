'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import SectionHeading from './SectionHeading';

export default function KalseeMilestone({ imageSrc, milestones: customMilestones }) {
  const defaultMilestones = [
    {
      value: '4 LPA',
      label: 'Average Package',
    },
    {
      value: '12L +',
      label: 'Highest Package',
    },
    {
      value: '400 +',
      label: 'Recruitment Partners',
    },
  ];

  const milestones = customMilestones || defaultMilestones;
  const defaultImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/kalsee-cta-img.png";
  const finalImageSrc = imageSrc || defaultImageSrc;

  // State for animated values
  const [animatedValues, setAnimatedValues] = useState(milestones.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Extract numeric value and suffix from milestone value string
  const parseMilestoneValue = (valueStr) => {
    const str = valueStr.toString();
    // Extract first number from string
    const match = str.match(/\d+/);
    const number = match ? parseInt(match[0], 10) : 0;
    // Extract suffix (everything after the number)
    const suffix = str.replace(match ? match[0] : '', '').trim();
    return { number, suffix };
  };

  // Count-up animation function
  const animateValue = (start, end, duration, index) => {
    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(start + (end - start) * progress);
      
      setAnimatedValues(prev => {
        const newValues = [...prev];
        newValues[index] = current;
        return newValues;
      });
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  // Intersection Observer to trigger animation when section is in view
  useEffect(() => {
    if (hasAnimated || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate each milestone
            milestones.forEach((milestone, index) => {
              const { number } = parseMilestoneValue(milestone.value);
              if (number > 0) {
                animateValue(0, number, 2000, index);
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated, milestones]);

  // Helper function to format animated value with suffix
  const getAnimatedValue = (milestone, index) => {
    const { suffix } = parseMilestoneValue(milestone.value);
    const animatedNumber = animatedValues[index];
    
    // Format based on suffix
    if (suffix.includes('LPA')) {
      return `${animatedNumber} ${suffix}`;
    } else if (suffix.includes('L')) {
      return `${animatedNumber}${suffix}`;
    } else {
      return `${animatedNumber}${suffix}`;
    }
  };

  return (
    <section ref={sectionRef} className="relative px-2 py-2">
      <div className="">
        
        {/* Dark Blue Banner */}
        <div className="relative bg-[var(--dark-blue)] rounded-2xl overflow-visible min-h-[280px] md:min-h-[140px]">
          <div className="container mx-auto relative flex flex-col md:flex-row items-center justify-center md:justify-between h-full pt-6 md:pt-0 gap-4 sm:gap-2 md:gap-6 lg:gap-8">
            {/* First Milestone */}
            <div className="flex flex-col items-center md:items-start z-10 w-full md:w-auto">
              <SectionHeading
                title={hasAnimated ? getAnimatedValue(milestones[0], 0) : milestones[0].value}
                titleClassName="!text-[var(--dark-orange-red)] mb-1 sm:mb-2 text-center md:text-left"
              />
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-stix text-center md:text-left">
                {milestones[0].label}
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-16 bg-[var(--dark-orange-red)] self-center"></div>

            {/* Second Milestone */}
            <div className="flex flex-col items-center md:items-start z-10 w-full md:w-auto">
              <SectionHeading
                title={hasAnimated ? getAnimatedValue(milestones[1], 1) : milestones[1].value}
                titleClassName="!text-[var(--dark-orange-red)] mb-1 sm:mb-2 text-center md:text-left"
              />
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-stix text-center md:text-left">
                {milestones[1].label}
              </p>
            </div>

            {/* Student Image - Between 2nd and 3rd, top extends above banner */}
            <div className="relative flex-shrink-0 z-20 mt-4 sm:-mt-8 md:-mt-12 lg:-mt-50 order-last md:order-none self-center md:self-start">
              <div className="relative w-28 h-40 sm:w-36 sm:h-64 md:w-48 md:h-80 lg:w-56 lg:h-96">
                <Image
                  src={finalImageSrc}
                  alt="Student"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-16 bg-[var(--dark-orange-red)] self-center"></div>

            {/* Third Milestone */}
            <div className="flex flex-col items-center md:items-start z-10 w-full md:w-auto">
              <SectionHeading
                title={hasAnimated ? getAnimatedValue(milestones[2], 2) : milestones[2].value}
                titleClassName="!text-[var(--dark-orange-red)] mb-1 sm:mb-2 text-center md:text-left"
              />
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-stix text-center md:text-left">
                {milestones[2].label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

