"use client";

import React from "react";
import SectionHeading from "@/app/components/general/SectionHeading";

const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/school/kalinga-university-raipur/",
    icon: (
      <svg
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[var(--button-red)]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/kalinga_university/",
    icon: (
      <svg
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[var(--button-red)]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@KalingaUniversityRaipurIndia",
    icon: (
      <svg
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[var(--button-red)]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 00-1.766 1.778C2 8.748 2 12 2 12s0 3.264.403 4.818a2.56 2.56 0 001.767 1.779C5.737 19.993 12 20 12 20s6.265-.007 7.831-.403a2.506 2.506 0 001.762-1.766C22 15.264 22 12 22 12s0-3.252-.407-4.797zM10 15.5v-7l6 3.5-6 3.5z" />
      </svg>
    ),
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/kalingauniversity/",
    icon: (
      <svg
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[var(--button-red)]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
      </svg>
    ),
  },
  {
    id: "twitter",
    label: "X (Twitter)",
    href: "https://twitter.com/Kalingaraipur",
    icon: (
      <svg
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[var(--button-red)]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function FollowUs() {
  return (
    <section className="py-16 bg-white mt-12 sm:mt-16">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <SectionHeading
          title="Follow us"
          subtitle=""
          titleClassName="text-center mb-4"
          subtitleClassName="text-center text-sm sm:text-base text-[var(--light-text-gray)] mb-6"
        />
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-around p-3 sm:p-4 w-24 h-24 sm:w-50 sm:h-40 rounded-[12px] bg-[var(--lite-sand)] hover:bg-[var(--button-red)] hover:shadow-md transition-all duration-300"
            >
              <div className="mb-1 sm:mb-2 [&_svg]:transition-colors [&_svg]:duration-300 group-hover:[&_svg]:text-white">
                {item.icon}
              </div>
              <span className="text-[11px] sm:text-xs md:!text-[22px] text-[var(--foreground)] font-medium group-hover:text-white transition-colors duration-300">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
