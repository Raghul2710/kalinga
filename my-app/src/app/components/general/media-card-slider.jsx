"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import dynamic from "next/dynamic";


// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div className="text-white">Loading player...</div>
    </div>
  )
});

export default function MediaCardSlider({
  title = "Testimonials",
  categoryTitle = "",
  description = "",
  imageItems = [

  ],
  videoItems = [

  ],
  cardBgClass = "bg-white",
  nameTextClass = "text-[var(--button-red)]",
  descriptionTextClass = "text-gray-600",
  thumbnail = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  className = "",
  backgroundColor = "bg-white",
  swiperClassName = "media-card-slider",
}) {
  // Determine which items to use - prioritize video if both provided
  const items = videoItems.length > 0 ? videoItems : imageItems;
  const isVideo = videoItems.length > 0;

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openVideoModal = (videoUrl, videoName) => {
    setCurrentVideo({ url: videoUrl, name: videoName });
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
    // Restore body scroll
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

    // Handle youtu.be format
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Handle youtube.com/watch?v= format
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // If already in embed format, return as is
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
    // Check if it's an image first - if so, it's not a video
    if (imageExtensions.some(ext => lowerUrl.includes(ext))) {
      return false;
    }
    // Check for video extensions
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
    <section className={` py-16 ${backgroundColor} relative ${className}`}>
      <div className="container mx-auto px-2">
        {/* Header Section */}
        <div className="text-center">

          <SectionHeading title={title} subtitle={categoryTitle} titleClassName="!py-3" />
          {description && (
            <p className={` ${descriptionTextClass} mb-10`}>
              {description}
            </p>
          )}
        </div>

        {/* Slider Section */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            navigation={{
              nextEl: `.${swiperClassName}-button-next`,
              prevEl: `.${swiperClassName}-button-prev`,
            }}
            className={`${swiperClassName} !pb-5 [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex`}
            loop={false}
            autoHeight={false}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id || item.name}>
                <div className="h-full w-full">
                  <div className={`${cardBgClass} rounded-xl p-4 h-full flex flex-col border border-gray-300 border-2 transition-shadow ${isVideo && item.videoUrl ? 'cursor-pointer hover:shadow-xl' : ''}`}>
                    {/* Media Container */}
                    <div
                      className="relative w-full h-[250px] md:h-[380px] mb-4 rounded-lg overflow-hidden bg-gray-200"
                      onClick={() => {
                        if (isVideo && item.videoUrl) {
                          openVideoModal(item.videoUrl, item.name || item.title);
                        }
                      }}
                    >
                      {isVideo ? (
                        <>
                          {/* Show thumbnail if available */}
                          {item.thumbnail && !isDirectVideoUrl(item.thumbnail) ? (
                            // Check if it's a YouTube thumbnail (img.youtube.com) - use regular img tag
                            isYouTubeUrl(item.thumbnail) || item.thumbnail.includes('img.youtube.com') ? (
                              <img
                                src={item.thumbnail}
                                alt={item.name || item.title || "Video thumbnail"}
                                className="absolute inset-0 w-full h-full object-cover object-center"
                              />
                            ) : (
                              // Use Next.js Image component for other image thumbnails
                              <Image
                                src={item.thumbnail}
                                alt={item.name || item.title || "Video thumbnail"}
                                fill
                                className="object-cover object-top brightness-100"
                                priority
                              />
                            )
                          ) : !isYouTubeUrl(item.videoUrl) && item.videoUrl && isDirectVideoUrl(item.videoUrl) ? (
                            // Fallback: use video element if no thumbnail image but videoUrl exists (non-YouTube)
                            <video
                              src={item.videoUrl}
                              className="absolute inset-0 w-full h-full object-cover object-top"
                              preload="metadata"
                              muted
                              playsInline
                            />
                          ) : (
                            // Placeholder for videos without thumbnails
                            <div className="w-full h-full bg-gray-300" />
                          )}
                          {/* Play Button Overlay */}
                          {item.videoUrl && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all hover:scale-110 pointer-events-auto shadow-lg cursor-pointer">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  className="text-gray-700 ml-1"
                                >
                                  <path
                                    d="M8 5v14l11-7z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        // Image Display
                        <Image
                          src={item.image || item.thumbnail}
                          alt={item.name || item.title || "Image"}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col items-center text-center">
                      {/* Title */}
                      {item.title && (
                        <h3 className={`text-lg md:text-xl font-semibold mb-2 font-plus-jakarta-sans ${nameTextClass}`}>
                          {item.title}
                        </h3>
                      )}

                      {/* Subtitle */}
                      {item.subtitle && (
                        <p className="text-sm md:text-base text-gray-700 mb-2">
                          {item.subtitle}
                        </p>
                      )}

                      {/* Description */}
                      {item.description && (
                        <p className={`text-sm md:text-base ${descriptionTextClass}`}>
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-end items-center gap-3">
            <button className={`${swiperClassName}-button-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md`}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white hover:text-[var(--button-red)] transition-colors"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className={`${swiperClassName}-button-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md`}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white hover:text-[var(--button-red)] transition-colors"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
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
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full transition-colors shadow-lg"
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
                // Native HTML5 Video Player for AWS/Direct URLs
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
                // Use iframe for YouTube videos (more reliable than ReactPlayer)
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`${getYouTubeEmbedUrl(currentVideo.url)}?autoplay=1&rel=0`}
                  title={currentVideo.name || "YouTube video"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                // ReactPlayer for other video platforms (Vimeo, etc.)
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
    </section>
  );
}

