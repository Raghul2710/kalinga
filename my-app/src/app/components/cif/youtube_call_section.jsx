"use client";

import React from "react";
import SectionHeading from "@/app/components/general/SectionHeading";

export default function CifYoutubeCallSection({ videoUrl = "" }) {
  // Convert YouTube URL to embed format
  const getEmbedUrl = (url) => {
    if (!url) return "";
    
    // Handle youtu.be format
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Handle youtube.com format
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

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <SectionHeading
            title="CIF In Action"
            subtitle=""
            titleClassName="text-center"
            subtitleClassName="text-center text-sm sm:text-base text-[var(--light-text-gray)] max-w-3xl mx-auto"
          />
          <p className="">Check out the experience of our research scholars performing groundbreaking research using our advanced research tools.</p>
        </div>

        <div className="w-full rounded-2xl bg-[var(--light-gray)] border border-gray-200 overflow-hidden">
          {/* 16:9 responsive iframe wrapper */}
          <div className="relative w-full pb-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={embedUrl}
              title="CIF In Action"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}


