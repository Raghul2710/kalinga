'use client'

import { useState, useEffect, useRef } from 'react';
import SectionHeading from '../general/SectionHeading';

// Testimonials data array
const defaultTestimonialsData = [
        {
            id: 1,
            name: "David Chen",
            role: "Founder, TechFlow",
            quote: "The mentorship I received was transformative. They didn't just help me refine my pitch; they helped me reshape my entire business model for scalability.",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/students-say-2.webp",
            theme: "orange"
        },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "CEO, InnovateDaily",
        quote: "Kalinga Incubation Centre gave me a perfect platform where I turned my business idea into a successful startup. I am extremely grateful for their guidance.",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/diploma.webp",
        theme: "red"
    },
    {
        id: 3,
        name: "Marcus Ray",
        role: "Director, SwiftStart",
        quote: "The network effects here are real. Being surrounded by other ambitious founders pushed us to iterate faster and aim higher than we thought possible.",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/student-say-3.webp",
        theme: "amber"
    },
    {
        id: 5,
        name: "Thomas Wright",
        role: "CTO, FutureScale",
        quote: "Finding technical co-founders was my biggest challenge. This community bridged that gap immediately.",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/student-say-1.webp",
        theme: "amber"
    }
];

export default function     Testimonials({ testimonials = [], className = "", subtitle = "Real Stories. Real Success.", title = "Stories that define our Kalinga spirit.", titleClassName = "", subtitleClassName = "", subtitleTextColor = "" }) {
    const testimonialsData = testimonials.length > 0 ? testimonials : defaultTestimonialsData;
    const [activeIndex, setActiveIndex] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const [sliderHeight, setSliderHeight] = useState(500);
    const cardRefs = useRef({});

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const recalculateHeight = () => {
        const isMobileCheck = window.innerWidth < 768;
        let maxHeight = isMobileCheck ? 400 : 500;
        Object.values(cardRefs.current).forEach((ref) => {
            if (ref && ref.current) {
                const cardHeight = ref.current.offsetHeight;
                if (cardHeight > maxHeight) {
                    maxHeight = cardHeight;
                }
            }
        });
        const padding = isMobileCheck ? 80 : 100;
        setSliderHeight(Math.max(maxHeight + padding, isMobileCheck ? 400 : 500));
    };

    useEffect(() => {
        // Calculate after images load
        const timer = setTimeout(recalculateHeight, 200);
        
        // Recalculate on window resize
        window.addEventListener('resize', recalculateHeight);
        
        // Recalculate when active index changes
        recalculateHeight();

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', recalculateHeight);
        };
    }, [activeIndex, isMobile]);

    // Autoplay functionality
    useEffect(() => {
        const autoplayInterval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
        }, 4000); // Change slide every 4 seconds

        return () => {
            clearInterval(autoplayInterval);
        };
    }, [testimonialsData.length]);

    const getSlideStyles = (index) => {
        const total = testimonialsData.length;
        let diff = (index - activeIndex) % total;
        
        if (diff < -total / 2) diff += total;
        if (diff > total / 2) diff -= total;

        let styles = {
            zIndex: 0,
            opacity: 0,
            transform: 'translate(-50%, -50%) scale(0.8)',
            bgColor: '#fff',
            borderColor: 'transparent',
            pointerEvents: 'none',
            contentOpacity: 0
        };

        if (diff === 0) {
            // Active Slide
            styles.zIndex = 30;
            styles.opacity = 1;
            styles.transform = 'translate(-50%, -50%) scale(1)';
            styles.bgColor = '#ffffff';
            styles.borderColor = '#f1f5f9';
            styles.pointerEvents = 'auto';
            styles.contentOpacity = 1;
        } else if (diff === -1) {
            // Prev Slide (Left)
            styles.zIndex = 20;
            styles.opacity = isMobile ? 0 : 1;
            styles.transform = isMobile 
                ? 'translate(-50%, -50%) scale(0.85) translateZ(-50px)' 
                : 'translate(-62%, -50%) scale(0.92)';
            styles.bgColor = '#FBBF58'; // Dark Yellow
            styles.contentOpacity = isMobile ? 0 : 0.4;
            styles.pointerEvents = isMobile ? 'none' : 'auto';
        } else if (diff === 1) {
            // Next Slide (Right)
            styles.zIndex = 20;
            styles.opacity = isMobile ? 0 : 1;
            styles.transform = isMobile 
                ? 'translate(-50%, -50%) scale(0.85) translateZ(-50px)' 
                : 'translate(-38%, -50%) scale(0.92)';
            styles.bgColor = '#FEDCB0'; // Light Yellow
            styles.contentOpacity = isMobile ? 0 : 0.6;
            styles.pointerEvents = isMobile ? 'none' : 'auto';
        } else {
            // Hidden / Stacked behind
            styles.zIndex = 10;
            styles.opacity = 0;
        }

        return styles;
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    };

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className={`flex flex-col items-center justify-center overflow-x-hidden selection:bg-orange-100 selection:text-orange-900 py-16 rounded-xl mx-2 ${className}`}>
            <style jsx>{`
                ::-webkit-scrollbar { display: none; }
            `}</style>

            {/* Main Container */}
            <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
                {/* Section Heading */}
                <h5 className="text-gray-600 text-center leading-tight text-xs sm:text-sm md:text-base">
                    <SectionHeading 
                        subtitleClassName={`text-center ${subtitleClassName}`}
                        titleClassName={`text-center ${titleClassName}`}
                        subtitle={subtitle}
                        title={title}
                        subtitleTextColor={subtitleTextColor || "text-[var(--button-red)]"}
                    />
                </h5>
                {/* Slider Track */}
                <div 
                    className="relative w-full flex items-center justify-center" 
                    style={{ 
                        perspective: '1000px',
                        minHeight: `${sliderHeight}px`,
                        height: `${sliderHeight}px`
                    }}
                >
                    {testimonialsData.map((item, index) => {
                        const styles = getSlideStyles(index);
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={item.id}
                                className="absolute top-1/2 left-1/2 w-full max-w-[95%] sm:max-w-[90%] md:max-w-4xl p-1 sm:p-2 transition-all duration-[600ms] origin-center"
                                style={{
                                    zIndex: styles.zIndex,
                                    opacity: styles.opacity,
                                    transform: styles.transform,
                                    pointerEvents: styles.pointerEvents,
                                    cursor: !isActive ? 'pointer' : 'default',
                                    transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)'
                                }}
                                onClick={() => !isActive && goToSlide(index)}
                            >
                                <div
                                    ref={(el) => {
                                        if (el) cardRefs.current[`card-${item.id}`] = { current: el };
                                    }}
                                    className="w-full overflow-hidden relative transition-colors duration-500  rounded-xl sm:rounded-2xl"
                                    style={{
                                        backgroundColor: styles.bgColor,
                                        borderColor: isActive ? '#f1f5f9' : 'transparent',
                                    }}
                                >
                                    <div
                                        className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-12 p-4 sm:p-6 md:p-10 pb-4 transition-opacity  rounded-xl sm:rounded-2xl duration-500 border-2 border-gray-300"
                                        style={{ opacity: styles.contentOpacity }}
                                    >
                                        {/* Image */}
                                        <div className="w-full md:w-5/12 flex-shrink-0 relative">
                                            <div className="aspect-[3/4] sm:aspect-[4/5] w-full bg-white rounded-xl sm:rounded-2xl border-2 sm:border-4 md:border-[6px] border-white relative overflow-hidden">
                                                <img 
                                                    src={item.image} 
                                                    className="w-full h-full object-cover" 
                                                    alt={item.name}
                                                    onLoad={() => {
                                                        // Recalculate height when image loads
                                                        setTimeout(recalculateHeight, 100);
                                                    }}
                                                />
                                            </div>
                                        </div>
                    
                                        {/* Text Content */}
                                        <div className="flex-1 flex flex-col relative pt-2">
                                            <div className={`mb-4 sm:mb-6 ${item.theme === 'red' ? 'text-red-500' : 'text-orange-500'}`}>
                                                <div className="flex gap-1">
                                                    <svg viewBox="0 0 26 41" xmlns="http://www.w3.org/2000/svg" className="h-8 sm:h-10 md:h-12" fill="#FEC071">
                                                        <path d="M18.2832 40.0727C19.6607 40.0727 20.7877 38.9457 20.7877 37.5682C20.7877 36.6916 20.412 35.9402 19.6607 35.5645C19.5355 35.4393 19.5355 35.4393 19.4102 35.3141C13.1489 31.1816 12.7732 26.2977 13.9002 22.5409H22.5409C23.9184 22.5409 25.0455 21.4139 25.0455 20.0364V2.50455C25.0455 1.12705 23.9184 0 22.5409 0H2.50455C1.12705 0 0 1.12705 0 2.50455V24.795C0 27.9257 1.00182 31.0564 2.88023 33.5609C5.13432 36.5663 9.6425 39.9475 18.2832 40.0727Z" fill="#FEC071"/>
                                                    </svg>
                                                    <svg viewBox="0 0 26 41" xmlns="http://www.w3.org/2000/svg" className="h-8 sm:h-10 md:h-12" fill="#F58220">
                                                        <path d="M18.2832 40.0727C19.6607 40.0727 20.7877 38.9457 20.7877 37.5682C20.7877 36.6916 20.412 35.9402 19.6607 35.5645C19.5355 35.4393 19.5355 35.4393 19.4102 35.3141C13.1489 31.1816 12.7732 26.2977 13.9002 22.5409H22.5409C23.9184 22.5409 25.0455 21.4139 25.0455 20.0364V2.50455C25.0455 1.12705 23.9184 0 22.5409 0H2.50455C1.12705 0 0 1.12705 0 2.50455V24.795C0 27.9257 1.00182 31.0564 2.88023 33.5609C5.13432 36.5663 9.6425 39.9475 18.2832 40.0727Z" fill="#F58220"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="text-slate-800 leading-relaxed md:leading-loose font-normal">
                                                {item.quote}
                                            </p>
                                            <div className="mt-6 sm:mt-8 md:mt-auto pt-4 sm:pt-6">
                                                <h4 className="text-[var(--red)] text-xl sm:text-2xl font-medium">{item.name}</h4>
                                                <p className="text-xs sm:text-sm mt-1 max-w-[80%]">{item.role}</p>
                                            </div>
                                            <div className="flex justify-end gap-1 mt-4 sm:mt-0 relative top-[-65px]">
                                                <svg viewBox="0 0 26 41" xmlns="http://www.w3.org/2000/svg" className="h-8 sm:h-10 md:h-12 rotate-0 rotate-y-180" fill="#FEC071">
                                                    <path d="M18.2832 40.0727C19.6607 40.0727 20.7877 38.9457 20.7877 37.5682C20.7877 36.6916 20.412 35.9402 19.6607 35.5645C19.5355 35.4393 19.5355 35.4393 19.4102 35.3141C13.1489 31.1816 12.7732 26.2977 13.9002 22.5409H22.5409C23.9184 22.5409 25.0455 21.4139 25.0455 20.0364V2.50455C25.0455 1.12705 23.9184 0 22.5409 0H2.50455C1.12705 0 0 1.12705 0 2.50455V24.795C0 27.9257 1.00182 31.0564 2.88023 33.5609C5.13432 36.5663 9.6425 39.9475 18.2832 40.0727Z" fill="#FEC071"/>
                                                </svg>
                                                <svg viewBox="0 0 26 41" xmlns="http://www.w3.org/2000/svg" className="h-8 sm:h-10 md:h-12 rotate-0 rotate-y-180" fill="#F58220">
                                                    <path d="M18.2832 40.0727C19.6607 40.0727 20.7877 38.9457 20.7877 37.5682C20.7877 36.6916 20.412 35.9402 19.6607 35.5645C19.5355 35.4393 19.5355 35.4393 19.4102 35.3141C13.1489 31.1816 12.7732 26.2977 13.9002 22.5409H22.5409C23.9184 22.5409 25.0455 21.4139 25.0455 20.0364V2.50455C25.0455 1.12705 23.9184 0 22.5409 0H2.50455C1.12705 0 0 1.12705 0 2.50455V24.795C0 27.9257 1.00182 31.0564 2.88023 33.5609C5.13432 36.5663 9.6425 39.9475 18.2832 40.0727Z" fill="#F58220"/>
                                                </svg>
                                            </div>
                                        </div>
                            </div>
                    </div>                  
                </div>
                        );
                    })}
        </div>

                {/* Navigation Controls (Bottom) */}
                <div className="md:-mt-6 flex items-center justify-center gap-3 sm:gap-4 z-50 relative top-[-50px]">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="cursor-pointer w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg bg-[var(--button-red)] text-white flex items-center justify-center hover:bg-[#A2A2A2] transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="cursor-pointer w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg bg-[var(--button-red)] text-white flex items-center justify-center hover:bg-[#A2A2A2] transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                </div>
            </div>
        </div>
    );
}
