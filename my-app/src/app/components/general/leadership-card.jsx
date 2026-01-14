"use client";

import Image from "next/image";
import { useState } from "react";

export default function LeadershipCard({
  name,
  title,
  image,
  usePTagForName = false,
  imageFit = "cover",
  imageContainerClassName = "h-[350px]",
  showArrowButton = false,
  buttonText = "Know More",
  showReadMore = false
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const NameTag = usePTagForName ? 'p' : 'h3';

  return (
    <div className="bg-[var(--lite-sand)] rounded-xl p-4 h-full flex flex-col relative overflow-hidden group">
      {/* Image */}
      <div className={`relative w-full ${imageContainerClassName} mb-4 rounded-lg overflow-hidden`}>
        <Image
          src={image}
          alt={name}
          fill
          className={`object-${imageFit}`}
        />
      </div>

      {/* Name */}
      <NameTag className="!text-[16px] text-[var(--foreground)] font-plus-jakarta-sans font-semibold">
        {name}
      </NameTag>

      {/* Title / Description */}
      <div className="flex-1">
        <p className={`text-[var(--light-text-gray)] text-sm mb-2 ${showReadMore && !isExpanded ? "line-clamp-2" : ""
          }`}>
          {title}
        </p>

        {showReadMore && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="text-[var(--button-red)] text-[13px] font-semibold underline cursor-pointer hover:opacity-80 transition-opacity mb-4 block"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>

      {/* BADGE BUTTON */}
      {showArrowButton && (
        <div className="absolute bottom-6 right-6">
          <div className="w-10 h-10 bg-[var(--button-red)] group-hover:bg-[#c41e3a] rounded-lg flex items-center justify-center transition-colors shadow-md">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}


