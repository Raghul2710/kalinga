
"use client"
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Image from "next/image";
import dynamic from "next/dynamic";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import("react-player"), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="text-white">Loading player...</div>
        </div>
    )
});

const defaultVideoInterviews = [
    {
        id: 1,
        title: "The Moment Kalinga Utsav Turned Into a Festival of Beats",
        videoUrl: "https://youtu.be/aR7VkLpeAu4?si=QM8XiVq1Zv9AEWRl",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/news-and-events/kailnga-events-1.png",
    },
    {
        id: 2,
        title: "Kalinga Utsav’s Showstopper | This Group Dance",
        videoUrl: "https://youtu.be/2agwhwY3OuY?si=pN2UxmLkRKQFN_D1",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/news-and-events/kailnga-events-2.png",
    },
    {
        id: 3,
        title: "Kalinga University Science Model Competition 4.0",
        videoUrl: "https://youtu.be/BrpxFN8iZeQ?si=bnrbf8TTw3onq_Kb",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/news-and-events/kailnga-science.png",
    },
    {
        id: 4,
        title: "98.20% Secured in CGBSE with Grit and Passion! Akhil Sen’s",
        videoUrl: "https://youtu.be/qAjXv54M99g?si=2rx3yeUq4p_2vWYT",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/news-and-events/topper.png",
    },
    {
        id: 5,
        title: "The Moment Kalinga Utsav Turned Into a Festival of Beats",
        videoUrl: "https://youtu.be/aR7VkLpeAu4?si=QM8XiVq1Zv9AEWRl",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/news-and-events/kailnga-events-1.png",
    },
    {
        id: 6,
        title: "Kalinga Utsav’s Showstopper | This Group Dance",
        videoUrl: "https://youtu.be/2agwhwY3OuY?si=pN2UxmLkRKQFN_D1",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/news-and-events/kailnga-events-2.png",
    },
    {
        id: 7,
        title: "Kalinga University Science Model Competition 4.0",
        videoUrl: "https://youtu.be/BrpxFN8iZeQ?si=bnrbf8TTw3onq_Kb",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/news-and-events/kailnga-science.png",
    },
    {
        id: 8,
        title: "98.20% Secured in CGBSE with Grit and Passion! Akhil Sen’s",
        videoUrl: "https://youtu.be/qAjXv54M99g?si=2rx3yeUq4p_2vWYT",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/news-and-events/topper.png",
    }
];

// Video Card Component
function VideoCardSlider({
    image,
    title = "",
    isActive = false,
    onPlay
}) {
    const playButtonSize = isActive ? 60 : 50;
    // Same border for mobile, different for desktop
    const borderClass = isActive
        ? "border border-gray-300 md:border-1 md:border-[var(--button-red)]"
        : "border border-gray-300";

    // Active card has higher z-index, inactive cards scale down to go behind active card (desktop only)
    const transformClass = isActive
        ? "relative md:z-50"
        : "md:scale-95 relative md:z-0";

    // Active card is smaller, inactive cards are larger
    // Normal size for mobile, special sizes for desktop
    const sizeClass = isActive
        ? "w-full max-w-[90%] mx-auto h-[230px] md:w-[250px] md:h-[33%]"
        : "w-full max-w-[90%] mx-auto h-[230px] md:w-[400px] md:h-[330px]";

    return (
        <div
            className={`bg-[var(--lite-sand)] rounded-[10px] overflow-hidden transition-all duration-300 ${sizeClass} flex flex-col ${borderClass} ${transformClass}`}>
            {/* Video Thumbnail */}
            <div className="relative w-full flex-1 flex-shrink-0 p-3 pb-0 box-border group cursor-pointer" onClick={onPlay}>
                <div className="relative w-full h-full">
                    <Image
                        src={image || "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Anant+Jha.jpg"}
                        alt={title}
                        fill
                        className="rounded-[20px] !object-cover"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        <div className="transform transition-transform duration-300 group-hover:scale-110 drop-shadow-lg">
                            <svg
                                width={playButtonSize}
                                height={playButtonSize}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <circle cx="12" cy="12" r="11" fill="white" fillOpacity="0.8" />
                                <path d="M9.5 8L16.5 12L9.5 16V8Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {/* Card Title */}
            <div className={`${isActive ? 'p-2 !pt-5 md:p-4 md:!pt-3 pl-[12px] pr-[25px]' : 'p-3'} `}>
                <h3 className={`text - left leading - tight ${isActive ? '!text-[12px] !leading-[15px]' : 'text-xs'} `}>
                    {title}
                </h3>
            </div>
        </div>
    );
}

export default function SustainableSlider({
    videos = defaultVideoInterviews,
    subtitle = "",
    title = "Campus Moments in Action",
    description = "Where learning, celebration, and campus life come alive.",
    backgroundColor = "bg-[var(--light-gray)]",
    showPagination = true,
    showNavigation = true
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    const openVideoModal = (videoUrl, videoName) => {
        setCurrentVideo({ url: videoUrl, name: videoName });
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeVideoModal = () => {
        setIsModalOpen(false);
        setCurrentVideo(null);
        document.body.style.overflow = 'unset';
    };

    // Check if URL is a YouTube URL
    const isYouTubeUrl = (url) => {
        if (!url) return false;
        return url.includes('youtube.com') || url.includes('youtu.be');
    };

    // Convert YouTube URL to embed format
    const getYouTubeEmbedUrl = (url) => {
        if (!url) return "";
        if (url.includes("youtu.be/")) {
            const videoId = url.split("youtu.be/")[1].split("?")[0];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        if (url.includes("youtube.com/watch?v=")) {
            const videoId = url.split("v=")[1].split("&")[0];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        if (url.includes("youtube.com/embed/")) {
            return url;
        }
        return url;
    };

    // Check if URL is a direct video file (AWS S3 or other direct URLs)
    const isDirectVideoUrl = (url) => {
        if (!url) return false;
        const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv'];
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
        const lowerUrl = url.toLowerCase();
        if (imageExtensions.some(ext => lowerUrl.includes(ext))) return false;
        return videoExtensions.some(ext => lowerUrl.includes(ext));
    };

    // Handle ESC key to close modal
    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape' && isModalOpen) {
                closeVideoModal();
            }
        };
        if (isModalOpen) {
            document.addEventListener('keydown', handleEscKey);
            return () => document.removeEventListener('keydown', handleEscKey);
        }
    }, [isModalOpen]);

    return (
        <section className={`${backgroundColor} pt-16`}>
            <div className="w-full container mx-auto my-0">
                {/* Heading Section */}
                <div className="text-center px-4">
                    {subtitle && (
                        <h5 className="text-[var(--button-red)] !sm:text-lg md:!text-xl !lg:text-[25px] font-plus-jakarta-sans mb-2">
                            {subtitle}
                        </h5>
                    )}
                    {title && (
                        <h2 className="font-stix text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] mb-4">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto font-plus-jakarta-sans mb-0">
                            {description}
                        </p>
                    )}
                </div>

                <div className="swiper-container h-[350px] md:h-[600px] relative !m-0 p-0 !-mt-8 md:!-mt-15">
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        speed={500}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={showPagination ? {
                            clickable: true,
                            dynamicBullets: false,
                            el: '.three-card-pagination',
                        } : false}
                        navigation={showNavigation ? {
                            nextEl: '.three-card-button-next',
                            prevEl: '.three-card-button-prev',
                        } : false}
                        modules={[Pagination, Autoplay, Navigation]}
                        className="sustainable-swiper h-full"
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 16,
                            },
                            768: {
                                slidesPerView: 2.75,
                                spaceBetween: 0,
                            },
                            1080: {
                                slidesPerView: 3,
                                spaceBetween: 0,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 0,
                            },
                        }}
                    >
                        {videos.map((video, index) => (
                            <SwiperSlide key={`video-${video.id}-${index}`}>
                                <div className="relative overflow-hidden transition-all duration-700 transform h-full flex items-center justify-center">
                                    <VideoCardSlider
                                        image={video.image}
                                        title={video.title}
                                        isActive={activeIndex === index}
                                        onPlay={() => openVideoModal(video.videoUrl, video.title)}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons - Positioned over middle card */}
                    {showNavigation && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] md:bottom-[80px] flex justify-center items-center gap-3 z-50">
                            <button
                                className="three-card-button-prev w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] hover:bg-white text-white hover:text-black flex items-center justify-center transition-opacity shadow-md"
                                aria-label="Previous slide"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                className="three-card-button-next w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--button-red)] hover:bg-white text-white hover:text-black flex items-center justify-center transition-opacity shadow-md border border-gray-300"
                                aria-label="Next slide"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

                {/* Video Modal */}
                {isModalOpen && currentVideo && (
                    <div
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={closeVideoModal}
                    >
                        <div
                            className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeVideoModal}
                                className="absolute top-15 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full transition-colors shadow-lg"
                                aria-label="Close video"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="text-gray-700"
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

                            {/* Video Title */}
                            {currentVideo.name && (
                                <div className="absolute top-4 left-4 z-10 bg-black/70 px-4 py-2 rounded-lg">
                                    <h3 className="text-white font-semibold text-lg">
                                        {currentVideo.name}
                                    </h3>
                                </div>
                            )}

                            {/* Video Player */}
                            <div className="relative pt-[56.25%] bg-black">
                                {isDirectVideoUrl(currentVideo.url) ? (
                                    <video
                                        className="absolute top-0 left-0 w-full h-full"
                                        controls
                                        autoPlay
                                        controlsList="nodownload"
                                        onContextMenu={(e) => e.preventDefault()}
                                    >
                                        <source src={currentVideo.url} type="video/mp4" />
                                        <source src={currentVideo.url} type="video/webm" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : isYouTubeUrl(currentVideo.url) ? (
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src={`${getYouTubeEmbedUrl(currentVideo.url)}?autoplay=1&rel=0`}
                                        title={currentVideo.name || "YouTube video"}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                ) : (
                                    <div className="absolute top-0 left-0 w-full h-full">
                                        <ReactPlayer
                                            url={currentVideo.url}
                                            width="100%"
                                            height="100%"
                                            controls={true}
                                            playing={true}
                                            light={false}
                                            config={{
                                                vimeo: {
                                                    playerOptions: { controls: true }
                                                }
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <style jsx global>{`
                .swiper-container {
                    width: 100%;
                    padding: 10px 20px;
                }
                @media (max-width: 768px) {
                    .swiper-container {
                        padding: 10px;
                    }
                }
                .sustainable-swiper .swiper-pagination-bullet {
                    background: var(--button-red);
                    opacity: 0.5;
                    width: 10px;
                    height: 10px;
                }
                .sustainable-swiper .swiper-pagination-bullet-active {
                    opacity: 1;
                    background: var(--button-red);
                }
                .sustainable-swiper .swiper-slide {
                    opacity: 1;
                    overflow: hidden;
                    transition: .5s;
                    border-radius: 16px;
                    height: 100%;
                }
                .sustainable-swiper .swiper-slide-active {
                    opacity: 1;
                    z-index: 1;
                    transform: scale(2);
                }
                @media (max-width: 639px) {
                    .sustainable-swiper .swiper-slide-active {
                        transform: scale(1);
                    }
                }
                @media (min-width: 640px) and (max-width: 768px) {
                    .sustainable-swiper .swiper-slide-active {
                        transform: scale(2);
                    }
                }
                .sustainable-swiper .swiper-slide img {
                    width: 100%;
                    object-fit: contain;
                    border-radius: 10px;
                    position: relative !important;
                    
                }
                .sustainable-swiper .swiper-wrapper {
                    align-items: center;
                    height: 100%;
                }
                .sustainable-swiper {
                    height: 100%;
                }
                .three-card-button-prev.swiper-button-disabled,
                .three-card-button-next.swiper-button-disabled {
                    opacity: 0.35;
                    cursor: not-allowed;
                }
                .sustainable-swiper .swiper-slide-next img{
                    height: 280px !important;
                    object-position: center !important;
                }
                .sustainable-swiper .swiper-slide-prev img{
                    height: 280px !important;
                    object-position: center !important;
                }
                .sustainable-swiper .swiper-slide-active img{
                    height: 130px !important;
                    object-position: center !important;
                }
                @media (max-width: 600px) {
                    .sustainable-swiper .swiper-slide-active img{
                        height: 180px !important;
                        object-position: center !important;
                    }
                }
            `}</style>
            </div>
        </section>
    );
}