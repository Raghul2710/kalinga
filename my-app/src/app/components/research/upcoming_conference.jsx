"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import GlobalArrowButton from "../general/global-arrow_button";
import { fetchNewsEvents, parseHtmlToText } from "../../lib/api";

// Fallback defaultConferences only if needed
const defaultConferences = [];

export default function UpcomingConference({
  conferences = defaultConferences,
  title = "Upcoming Conferences",
  backgroundColor = "bg-[var(--light-gray)]",
  backgroundColorcard = "bg-white",
  showCategory = true,
  showDate = true,
  imageWidth = 40,
  imageHeight = 400,
  imageContainerClass = "!w-[40%] object-cover",
  href = null,
  categoryText = "Upcoming Conferences",

  // Props for Dynamic Data
  categoryId,
  categoryIds,
  fallback = 'all', // 'all' or 'hide'
  limit,
  description,
  navigationType = "dots", // "dots" or "arrows"
}) {
  const [displayConferences, setDisplayConferences] = useState(conferences);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!categoryId && (!categoryIds || categoryIds.length === 0)) {
      setDisplayConferences(conferences);
      setLoading(false);
      return;
    }

    const loadDynamicEvents = async () => {
      try {
        const data = await fetchNewsEvents();
        if (data && data.results) {
          let results = data.results;

          let filteredResults = [];
          if (categoryIds && categoryIds.length > 0) {
            filteredResults = results.filter(item => categoryIds.includes(String(item.category)));
          } else if (categoryId) {
            filteredResults = results.filter(item => String(item.category) === String(categoryId));
          } else {
            filteredResults = results;
          }

          if (filteredResults.length === 0) {
            if (fallback === 'hide') {
              setIsVisible(false);
              setLoading(false);
              return;
            }
            filteredResults = results;
          }

          if (limit && filteredResults.length > limit) {
            filteredResults = filteredResults.slice(0, limit);
          }

          const mappedEvents = filteredResults.map(item => {
            const plainText = parseHtmlToText(item.content || '');
            const descText = plainText.length > 150 ? plainText.substring(0, 150) + '...' : plainText;

            return {
              id: item.id,
              title: item.heading,
              date: item.date,
              category: item.category_name,
              description: descText,
              image: item.images && item.images.length > 0 ? item.images[0].image : 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
              href: `/news-and-events/${item.slug}`,
              registerButtonText: "Read More"
            };
          });

          setDisplayConferences(mappedEvents);
        }
      } catch (error) {
        console.error("Failed to load dynamic conferences", error);
        if (fallback === 'hide') setIsVisible(false);
      } finally {
        setLoading(false);
      }
    };

    loadDynamicEvents();
  }, [categoryId, categoryIds, fallback, conferences]);

  if (!isVisible) return null;

  if (displayConferences.length === 0 && !loading) {
    if (fallback === 'hide') return null;
  }

  return (
    <section className={`${backgroundColor} pt-16 pb-16 mx-2 rounded-xl`}>
      <style jsx>{`
        .conference-nav-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: center;
          margin-top: 24px;
        }
        .conf-nav-btn {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          background: var(--button-red);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
          z-index: 10;
        }
        .conf-nav-btn:hover:not(.swiper-button-disabled) {
          background: #a31d1d;
          transform: translateY(-1px);
        }
        .conf-nav-btn:active:not(.swiper-button-disabled) {
          transform: translateY(0);
        }
        .conf-nav-btn.swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background: #ccc;
        }
      `}</style>
      <div className="container mx-auto">
        <h2 className="text-center mb-6">{title}</h2>
        {description && (
          <div
            className="text-center text-black max-w-3xl mx-auto mb-10 leading-relaxed font-plus-jakarta-sans [&_a]:text-[var(--button-red)] [&_a]:underline [&_a]:font-bold [&_a]:hover:text-[var(--dark-orange-red)] transition-colors"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}

        {displayConferences && displayConferences.length > 0 ? (
          <>
            <div className="relative group">
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={24}
                slidesPerView={1}
                grabCursor={true}
                pagination={navigationType === "dots" ? {
                  clickable: true,
                  el: ".conference-pagination",
                } : false}
                navigation={navigationType === "arrows" ? {
                  nextEl: '.conf-button-next',
                  prevEl: '.conf-button-prev',
                } : false}
                onSwiper={(swiper) => {
                  if (navigationType === "dots" && swiper.params.pagination.el) {
                    swiper.pagination.init();
                    swiper.pagination.render();
                    swiper.pagination.update();
                  }
                }}
              >
                {displayConferences.map((conf) => (
                  <SwiperSlide key={conf.id}>
                    <div className={`${backgroundColorcard} rounded-2xl shadow-sm flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center`}>
                      <Image
                        src={conf.image}
                        alt={conf.title}
                        width={600}
                        height={imageHeight}
                        className={`${imageContainerClass} rounded-xl object-contain`}
                        style={{
                          height: `${imageHeight}px`,
                          width: `${imageWidth}%`,
                        }}
                        unoptimized
                      />

                      <div className="w-full md:w-3/5 flex flex-col gap-6 md:px-0 px-5 h-full justify-around pb-5">
                        {(showDate || showCategory) && (
                          <div className="flex md:justify-end justify-start gap-5 items-center mr-4 flex-wrap">
                            {showDate && conf.date && (
                              <p className="inline-flex font-light font-plus-jakarta-sans items-center px-2 md:px-3 py-1 rounded-lg bg-[var(--dark-green)] text-white text-xs whitespace-nowrap">
                                {conf.date}
                              </p>
                            )}
                            {showCategory && conf.category && (
                              <p className="inline-flex font-light font-plus-jakarta-sans items-center px-2 md:px-3 py-1 rounded-lg bg-[var(--dark-blue)] text-white text-xs whitespace-nowrap">
                                {conf.category}
                              </p>
                            )}
                          </div>
                        )}

                        <div className="px-3">
                          <h3 className="text-2xl md:text-4xl mb-3">
                            {conf.title}
                          </h3>
                          <div
                            className="text-[var(--light-text-gray)] text-sm [&_a]:text-[var(--button-red)] [&_a]:underline [&_a]:font-bold [&_a]:hover:text-[var(--dark-orange-red)] transition-colors"
                            dangerouslySetInnerHTML={{ __html: conf.description }}
                          />
                        </div>

                        {(conf.href || href) ? (
                          <Link href={conf.href || href}>
                            <GlobalArrowButton className="w-fit mt-1 text-sm">
                              {conf.registerButtonText || "Register Now"}
                            </GlobalArrowButton>
                          </Link>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {navigationType === "dots" ? (
              <div className="conference-pagination flex justify-center gap-3 mt-8" />
            ) : (
              <div className="conference-nav-buttons">
                <button type="button" className="conf-nav-btn conf-button-prev">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button type="button" className="conf-nav-btn conf-button-next">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-gray-500 py-10">No upcoming events found.</div>
        )}
      </div>
    </section>
  );
}
