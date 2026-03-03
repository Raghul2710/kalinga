"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const NIRFRankings = ({
    title = "NIRF Rankings",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    rankings = [
        { year: "2021", range: "151-200" },
        { year: "2022", range: "101-150" },
        { year: "2023", range: "101-150" },
        { year: "2024", range: "101-150" },
        { year: "2025", range: "101-150" },
    ]
}) => {
    const isSlider = rankings.length > 5;

    const renderCard = (item, index) => (
        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 h-full">
            <div className="flex flex-col items-center justify-center flex-1 w-full p-4">
                <div className="bg-[var(--button-red)] w-full py-1 text-white font-medium text-lg tracking-wider rounded-xl mb-2">
                    {item.year}
                </div>
                <p className="text-black tracking-widest mb-3">Ranked in top</p>
                <h2 className="font-stix text-black mb-3 tracking-tighter">
                    {item.range}
                </h2>
                <p className="text-black">universities</p>
            </div>
        </div>
    );

    return (
        <section className="py-12 px-6 md:px-12 bg-[#003366] rounded-[40px] my-12 mx-4 md:mx-10 relative overflow-hidden shadow-2xl">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
                <div className="flex-1">
                    <h2 className="text-white font-stix mb-6 tracking-tight">{title}</h2>
                    <p className="leading-relaxed max-w-3xl text-white">{description}</p>
                </div>
                <div className="bg-white p-5 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300 self-center md:self-start">
                    <img
                        src="https://cdn.kalingauniversity.ac.in/accreditation/nirf-logo-new.jpeg"
                        alt="NIRF Logo"
                        className="h-24 md:h-24 object-contain"
                    />
                </div>
            </div>

            <div className="container mx-auto">
                {isSlider ? (
                    <div className="relative pb-12">
                        <Swiper
                            spaceBetween={24}
                            slidesPerView={1}
                            loop={rankings.length > 5}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Autoplay, Navigation]}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                                1280: { slidesPerView: 5 },
                            }}
                            className="nirf-swiper !pb-12"
                        >
                            {rankings.map((item, index) => (
                                <SwiperSlide key={index} className="h-auto">
                                    {renderCard(item, index)}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <style jsx global>{`
                            .nirf-swiper .swiper-pagination-bullet {
                                background: white;
                                opacity: 0.5;
                            }
                            .nirf-swiper .swiper-pagination-bullet-active {
                                opacity: 1;
                                background: white;
                            }
                            .nirf-swiper .swiper-button-next,
                            .nirf-swiper .swiper-button-prev {
                                color: white;
                                transform: scale(0.6);
                            }
                        `}</style>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {rankings.map((item, index) => renderCard(item, index))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default NIRFRankings;
