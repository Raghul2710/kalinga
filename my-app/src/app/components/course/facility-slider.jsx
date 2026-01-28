'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

import GlobalArrowButton from '../general/global-arrow_button';

export default function FacilitySlider({
    title = "Moot Court",
    subtitle = "Legal Skills into Trials",
    description = "Our law students get a real courtroom experience with our Moot Court, where they put their legal skills into trials and participate in competitions, and gain confidence.",
    images = [
        "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/mootcourt.webp",
        "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/seminar-rooms.webp",
        "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/audiovisualcentre.webp"
    ],
    ctaText,
    ctaLink = "#",
    className = ""
}) {
    return (
        <div className={`w-full container mx-auto h-auto md:h-[400px] flex flex-col md:block relative mt-16 ${className}`}>

            {/* Content Box - Left Side */}
            <div className="bg-[var(--card-sandal)] rounded-2xl p-6 md:p-8 shadow-md w-full md:w-[55%] md:min-h-[330px] md:absolute md:left-0 md:top-[35px] flex flex-col justify-center z-0">
                <h3 className="mb-2 font-serif text-[var(--foreground)]">{title}</h3>
                {subtitle && (
                    <p className="mb-4">
                        {subtitle}
                    </p>
                )}
                <p className="leading-relaxed md:w-3/4 w-full">
                    {description}
                </p>
                {ctaText && (
                    <div className="mt-6">
                        <GlobalArrowButton href={ctaLink}>
                            {ctaText}
                        </GlobalArrowButton>
                    </div>
                )}
            </div>

            {/* Image Slider - Right Side */}
            <div className="md:absolute md:bottom-[80px] md:right-0 md:w-[55%] w-full mt-6 md:mt-0 z-10">
                <div className="relative h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg w-full">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            el: '.custom-pagination',
                            bulletClass: 'swiper-pagination-bullet !bg-[var(--button-red)] !w-3 !h-2 !rounded-full transition-all duration-300',
                            bulletActiveClass: '!bg-[var(--button-red)] !w-8'
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="w-full h-full"
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index} className="w-full h-full">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={img}
                                        alt={`${title} - Image ${index + 1}`}
                                        fill
                                        className="object-cover object-center"
                                        priority={index === 0}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Custom Pagination Container */}
                <div className="custom-pagination mt-4 flex justify-center gap-2 w-full"></div>
            </div>
        </div>
    );
}
