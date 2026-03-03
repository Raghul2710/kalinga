"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function CareerCard({ title, description, icon, imageUrl, maxWords = null }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncateWords = (text, wordLimit) => {
    if (typeof text !== 'string') return text;
    const words = text.split(/\s+/);
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  const isTruncatable = maxWords && description && description.split(/\s+/).length > maxWords;

  return (
    <div className="bg-[var(--lite-sand)] rounded-xl p-6 h-full flex flex-col border border-red-200">
      {/* Icon */}
      <div className="mb-4">
        {icon ? (
          icon
        ) : imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${title} icon`}
            width={48}
            height={48}
            className="object-contain"
          />
        ) : (
          <Image
            src="https://cdn.kalingauniversity.ac.in/logos/check-icon.png"
            alt="Career icon"
            width={48}
            height={48}
            className="object-contain"
          />
        )}
      </div>

      {/* Title */}
      <h3 className="mb-3 !text-[22px] leading-none">{title}</h3>

      {/* Description */}
      <div
        className="text-[var(--foreground)] text-sm flex-grow [&_a]:text-[var(--button-red)] [&_a]:underline [&_a]:font-bold [&_a]:hover:text-[var(--dark-orange-red)] transition-colors"
        dangerouslySetInnerHTML={{ __html: isExpanded || !maxWords ? description : truncateWords(description, maxWords) }}
      />

      {isTruncatable && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[var(--button-red)] text-sm font-semibold mt-2 text-left hover:underline"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
}
