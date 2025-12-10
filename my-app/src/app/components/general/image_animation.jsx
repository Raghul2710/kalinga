'use client'

import React, { useState, useEffect, useRef } from 'react'

export default function GalleryAll() {
    const [isInView, setIsInView] = useState(false)
    const sectionRef = useRef(null)

    const images = [
        { id: 1, src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/social-media-1.png', alt: 'Campus speaker' },
        { id: 2, src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/social-media-2.png', alt: 'Students chatting' },
        { id: 3, src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/social-media-3.png', alt: 'Lecture' },
        { id: 4, src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/social-media-4.png', alt: 'Career guidance' },
        { id: 5, src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/sports.webp', alt: 'Sports facility' },
        { id: 6, src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/library.webp', alt: 'Library' },
        { id: 7, src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/canteen.webp', alt: 'Canteen' },
        { id: 8, src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/placements-silder-1.webp', alt: 'Campus life' },
        { id: 9, src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/about-kalinga.webp', alt: 'Students' },
        { id: 10, src: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/students-say-2.webp', alt: 'Student testimonial' },
    ]

    useEffect(() => {
        if (!sectionRef.current) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true)
                    }
                })
            },
            { threshold: 0.2 }
        )

        observer.observe(sectionRef.current)

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    return (
        <section ref={sectionRef} className="relative w-full py-6 sm:py-8 md:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Mobile: Title above grid */}
                <div className="md:hidden mb-6 text-center transition-all duration-700"
                    style={{
                        transitionDelay: isInView ? '100ms' : '0ms',
                        opacity: isInView ? 1 : 0,
                        transform: isInView ? 'translateY(0)' : 'translateY(-20px)'
                    }}>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black leading-tight"
                        style={{
                            fontFamily: 'STIX Two Math',
                            fontWeight: 400,
                            fontStyle: 'Regular',
                            lineHeight: '1.2',
                            letterSpacing: '0%',
                        }}>
                        Life at Kalinga — Beyond Classrooms
                    </h2>
                </div>

                <div className="relative bg-white">
                    {/* Scattered image gallery */}
                    <div className="relative h-auto md:h-[700px] bg-white">
                        <div className="relative w-full h-full md:min-h-[820px]">
                            {/* Mobile: Grid layout for images */}
                            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 md:hidden">
                                {images.map((img, idx) => (
                                    <div
                                        key={img.id}
                                        className={`relative aspect-square rounded-lg overflow-hidden shadow-md transition-all duration-500 ${
                                            isInView 
                                                ? 'opacity-100 scale-100' 
                                                : 'opacity-0 scale-75'
                                        }`}
                                        style={{
                                            transitionDelay: isInView ? `${idx * 80}ms` : '0ms'
                                        }}
                                    >
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Desktop: Scattered image positioning */}
                            <div className="hidden md:block relative w-full h-full">
                                {(() => {
                                    const positions = [
                                        'top-8 left-16 w-32 h-32',
                                        'top-4 left-1/3 transform -translate-x-1/2 w-44 h-44',
                                        'top-2 right-52 w-30 h-30',
                                        'top-20 right-12 w-36 h-36',
                                        'bottom-32 left-24 w-32 h-32',
                                        'bottom-45 left-1/2 transform -translate-x-1/2 w-36 h-36',
                                        'bottom-27 right-24 w-28 h-28',
                                        'top-56 left-40 w-30 h-30',
                                        'top-90 right-36 w-28 h-28',
                                    ]

                                    return images.map((img, idx) => {
                                        const pos = positions[idx] || positions[idx % positions.length]
                                        return (
                                            <div
                                                key={img.id}
                                                className={`absolute ${pos} z-10 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300 ${
                                                    isInView 
                                                        ? 'opacity-100 scale-100 animate-popup' 
                                                        : 'opacity-0 scale-75'
                                                }`}
                                                style={{
                                                    animationDelay: isInView ? `${idx * 150}ms` : '0ms',
                                                    transitionDelay: isInView ? `${idx * 150}ms` : '0ms'
                                                }}
                                            >
                                                <img
                                                    src={img.src}
                                                    alt={img.alt}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )
                                    })
                                })()}
                            </div>

                            {/* Desktop: Center title and yellow banner */}
                            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 w-full px-4 sm:px-6 transition-all duration-700"
                            style={{
                                transitionDelay: isInView ? `${images.length * 150 + 200}ms` : '0ms',
                                opacity: isInView ? 1 : 0,
                            }}>
                                {/* <div className="bg-[#FFE311] py-2 sm:py-3 px-4 sm:px-6 mb-4 sm:mb-6 rounded-lg shadow-lg inline-block max-w-[90%] sm:max-w-none">
                                    <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-black leading-tight"
                                        style={{
                                            fontFamily: 'STIX Two Math',
                                            fontWeight: 400,
                                            fontStyle: 'Regular',
                                            fontSize: '13px',
                                            lineHeight: '15px',
                                            letterSpacing: '0%',
                                            textAlign: 'center',
                                            padding: '10px',
                                        }}>
                                        Check Scroll Animation flow for this section{' '}
                                        <br />
                                        <a href="#" className="underline font-bold hover:text-gray-700">
                                            Click here
                                        </a>
                                    </p>
                                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full hidden md:block">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 12l-6-6h12l-6 6z" />
                                        </svg>
                                    </div>
                                </div> */}
                                <h2 className="!text-[40px] font-serif font-bold text-black leading-tight max-w-2xl mx-auto px-2 "
                                    style={{
                                        fontFamily: 'STIX Two Math',
                                        fontWeight: 400,
                                        fontStyle: 'Regular',
                                        fontSize: '40px',
                                        lineHeight: '47px',
                                        letterSpacing: '0%',
                                        textAlign: 'center',
                                    }}>
                                    Life at Kalinga — Beyond Classrooms
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Scroll indicator or pagination dots */}
                    {/* <div className="flex justify-center gap-2 mt-8">
          <div className="w-3 h-3 rounded-full bg-[#c94a3a]"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div> */}
                </div>
            </div>
            
            <style jsx>{`
                @keyframes popup {
                    0% {
                        opacity: 0;
                        transform: scale(0.5) translateY(20px);
                    }
                    50% {
                        transform: scale(1.1) translateY(-5px);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                .animate-popup {
                    animation: popup 0.6s ease-out forwards;
                }
            `}</style>
        </section>
    )
}
