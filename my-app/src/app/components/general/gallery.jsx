"use client"
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import SectionHeading from './SectionHeading'

const defaultGalleryImages = [
  {
    id: 1,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/glimpse/IMG-20250409-WA0108.jpg",
    alt: "Gallery-1"
  },
  {
    id: 7,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/glimpse/IMG-20250328-WA0039.jpg",
    alt: "Gallery-7"
  },
  {
    id: 2,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/glimpse/IMG-20250409-WA0144.jpg",
    alt: "Gallery-2"
  },
  {
    id: 9,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/glimpse/glimpse-2.jpeg",
    alt: "Gallery-8"
  },
  {
    id: 3,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/glimpse/IMG-20250409-WA0079.jpg",
    alt: "Gallery-3"
  },
  {
    id: 4,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/glimpse/cs1.jpg",
    alt: "Gallery-4"
  },
  {
    id: 5,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/glimpse/IMG-20250409-WA0135.jpg",
    alt: "Gallery-5"
  },
  {
    id: 6,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/glimpse/IMG-20250328-WA0045.jpg",
    alt: "Gallery-6"
  },
  {
     id: 8,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/glimpse/IMG-20250409-WA0102.jpg",
    alt: "Gallery-8"
  },
  {
     id: 10,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/glimpse/glimpse-1.jpeg",
    alt: "Gallery-10"
  }
]

const Gallery = ({ 
  images = defaultGalleryImages,
  title = "Gallery",
  backgroundColor = "bg-white",
  paddingClassName = "py-16",
  titleClassName = "",
  forceSliderOnMobile = false
}) => {
  const useSlider = images.length > 4 || forceSliderOnMobile
  
  // Determine title alignment based on titleClassName
  const titleAlignment = titleClassName.includes('text-left') ? 'text-left' : 
                        titleClassName.includes('text-right') ? 'text-right' : 
                        'text-center';

  return (
    <section className={`${backgroundColor} ${paddingClassName}`}>
      <div className="px-2">
        {/* Title */}
        <div className={`mb-6 sm:mb-8 md:mb-10 ${titleAlignment}`}>
          <SectionHeading title={title} titleClassName={titleClassName} />
        </div>

        {useSlider ? (
          /* Slider Layout - when more than 4 images */
          <div className="relative">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={16}
              slidesPerView={2}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              className="gallery-swiper"
            >
              {images.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="relative overflow-hidden shadow-lg hover:shadow-2xl transition duration-200 rounded-[10px] aspect-square group cursor-pointer">
                    <Image 
                      src={item.image} 
                      alt={item.alt} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-300" 
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          /* Grid Layout - when 4 or fewer images */
          <>
            {/* Mobile Slider - if forceSliderOnMobile is true */}
            {forceSliderOnMobile && (
              <div className="md:hidden relative">
                <Swiper
                  modules={[Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={16}
                  slidesPerView={1.2}
                  className="gallery-swiper"
                >
                  {images.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="relative overflow-hidden shadow-lg hover:shadow-2xl transition duration-200 rounded-[10px] aspect-square group cursor-pointer">
                        <Image 
                          src={item.image} 
                          alt={item.alt} 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-300" 
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
            {/* Desktop Grid - always show for grid layout */}
            <div className={`flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 ${forceSliderOnMobile ? 'hidden md:flex' : ''}`}>
              {images.map((item) => (
                <div 
                  key={item.id} 
                  className="relative overflow-hidden shadow-lg hover:shadow-2xl transition duration-200 rounded-[10px] aspect-square group cursor-pointer w-[calc(50%-6px)] sm:w-[calc(50%-8px)] md:w-[calc(25%-18px)] max-w-[300px]"
                >
                  <Image 
                    src={item.image} 
                    alt={item.alt} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Gallery

