'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GlobalArrowButton from "../general/global-arrow_button";

const defaultContent = {
  title: "Transforming futures with knowledge & innovation",
  description: [
    "Kalinga University blends rigorous academics with hands-on learning, ensuring students are industry-ready from day one. Our curriculum aligns with NEP 2020, supported by experienced faculty, modern labs, and strong industry partnerships.",
    "With students from 50+ countries, a green smart campus, and vibrant clubs, we nurture global citizens who thrive in research, entrepreneurship, and community impact.",
  ],
  imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/about-banner.webp",
  imageAlt: "Kalinga University campus",
  buttonLabel: "Read More",
};

export default function MainIntro({
  title = defaultContent.title,
  description = defaultContent.description,
  imageUrl = defaultContent.imageUrl,
  imageAlt = defaultContent.imageAlt,
  buttonLabel = defaultContent.buttonLabel,
  showButton = true,
  initialVisibleParagraphs = 2,
  knowMoreLabel = "Know More",
  knowMoreHref = null,
  onKnowMore = null,
}) {
  const descriptionArray = Array.isArray(description) ? description : [description];
  const [showAll, setShowAll] = useState(false);
  const visibleParagraphs = showAll
    ? descriptionArray
    : descriptionArray.slice(0, initialVisibleParagraphs);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto pl-4 lg:pl-4 pr-4 lg:pr-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1 lg:pl-0 lg:pr-4">
            <h2 className="font-stix text-[var(--foreground)] leading-tight">
              {title}
            </h2>
            
            <div className="space-y-4">
              {visibleParagraphs.map((paragraph, idx) => {
                const isLastVisible = idx === visibleParagraphs.length - 1;
                return (
                  <p key={idx} className="text-[var(--light-text-gray)] leading-relaxed">
                    {paragraph}
                    {isLastVisible && showButton && buttonLabel && descriptionArray.length > initialVisibleParagraphs && (
                      <button
                        type="button"
                        onClick={() => setShowAll(!showAll)}
                        className="ml-2 text-[var(--foreground)] font-semibold hover:text-[var(--button-red)] transition-colors inline-flex items-center"
                      >
                        {showAll ? "Show Less" : buttonLabel}
                      </button>
                    )}
                  </p>
                );
              })}

              {knowMoreLabel && (
                <div className="pt-2">
                  {knowMoreHref ? (
                    <Link href={knowMoreHref} className="inline-flex">
                      <GlobalArrowButton
                        className="w-fit !bg-white !text-white gap-2 !px-0 !py-0"
                        textClassName="!text-[var(--button-red)] !font-semibold !px-0"
                        arrowClassName="p-[3px] !px-1 mr-2 !py-1 !bg-[var(--button-red)]"
                        arrowIconClassName="!text-white"
                      >
                        {knowMoreLabel}
                      </GlobalArrowButton>
                    </Link>
                  ) : (
                    <GlobalArrowButton
                      className="w-fit !bg-white !text-white gap-2 !px-0 !py-0"
                      textClassName="!text-[var(--button-red)] !font-semibold !px-0"
                      arrowClassName="p-[3px] !px-1 mr-2 !py-1 !bg-[var(--button-red)]"
                      arrowIconClassName="!text-white"
                      onClick={onKnowMore || (() => {})}
                    >
                      {knowMoreLabel}
                    </GlobalArrowButton>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="order-1 lg:order-2 lg:pl-4 lg:pr-8">
            <div className="relative w-full overflow-visible">
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl shadow-lg transform-3d-slant"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}