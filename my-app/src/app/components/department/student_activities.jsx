"use client";

import Link from "next/link";
import Image from "next/image";
import GlobalArrowButton from "../general/global-arrow_button";
import SectionHeading from "../general/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect, useMemo, useState } from "react";
import { fetchNewsEvents, parseHtmlToText } from "@/app/lib/api";

const defaultActivities = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
    imageAlt: " Events and Activities",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Read More",
    date: "August 25 - 2025",
  },
  {
    id: 2,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
    imageAlt: " Events and Activities",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Read More",
    date: "August 25 - 2025",
  },
  {
    id: 3,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
    imageAlt: " Events and Activities",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Read More",
    date: "August 25 - 2025",
  },
];

function getPreviewText(desc) {
  const text = Array.isArray(desc) ? desc.join(" ") : (desc || "").toString();
  const words = text.trim().split(/\s+/);
  if (words.length <= 20) return text;
  return words.slice(0, 20).join(" ") + "...";
}


export default function StudentActivities({
  title = " Events and Activities",
  subtitle = "Experience Campus Life Beyond Academics",
  activities: providedActivities,
  departmentId,
  categoryId,
  limit,
  paddingClassName = "py-16",
  cardHeightClass = "h-full w-full",
  showReadMore = true,
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const mobilePrevRef = useRef(null);
  const mobileNextRef = useRef(null);
  const mobileSwiperRef = useRef(null);

  const [activities, setActivities] = useState(providedActivities || defaultActivities);
  const [loading, setLoading] = useState(!providedActivities);

  useEffect(() => {
    // If activities are provided via props, use them and don't fetch
    if (providedActivities) {
      setActivities(providedActivities);
      setLoading(false);
      return;
    }

    const loadActivities = async () => {
      try {
        setLoading(true);
        const params = {};
        if (departmentId) params.department = departmentId;
        if (categoryId) params.category = categoryId;

        // If limit is provided, we might need to handle slice here 
        // as the API might not support limit directly in list endpoint
        // based on previous analysis of api.js

        const data = await fetchNewsEvents(params);

        if (data && data.results) {
          let mappedActivities = data.results.map(item => ({
            id: item.id,
            title: item.heading,
            description: parseHtmlToText(item.content),
            imageSrc: item.primary_image?.image || item.images?.[0]?.image || "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
            imageAlt: item.primary_image?.alt || item.images?.[0]?.alt || item.heading || "Events & Activities",
            date: item.date,
            buttonText: "Read More",
            slug: item.slug
          }));

          if (limit && limit > 0) {
            mappedActivities = mappedActivities.slice(0, limit);
          }

          setActivities(mappedActivities);
        }
      } catch (err) {
        console.error("Failed to load  Events and Activities:", err);
        // Fallback to default activities if fetch fails? 
        // Or keep empty/error state? 
        // For now, if fetch fails, we might just show nothing or keep defaults if we want
        // But safer to show nothing or error message to avoid misleading UI
        setActivities([]);
      } finally {
        setLoading(false);
      }
    };

    loadActivities();
  }, [departmentId, categoryId, providedActivities, limit]);

  const showAsSlider = activities && activities.length > 3;

  const bindNavigation = (swiperInstance) => {
    if (!swiperInstance || !prevRef.current || !nextRef.current) return;
    swiperInstance.params.navigation.prevEl = prevRef.current;
    swiperInstance.params.navigation.nextEl = nextRef.current;
    if (swiperInstance.navigation) {
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      bindNavigation(swiperRef.current);
    }
  }, [activities]);

  const ActivityCard = ({ activity }) => {
    const preview = useMemo(
      () => getPreviewText(activity.description),
      [activity.description]
    );

    return (
      <div className={`bg-[var(--light-gray)] rounded-lg p-5 ${cardHeightClass} flex flex-col`}>
        <div className="relative w-full h-[250px]">
          <Image
            src={activity.imageSrc}
            alt={activity.imageAlt}
            fill
            className="rounded-lg object-cover"
          />
          {activity.date && (
            <div className="absolute bottom-3 right-3 bg-[var(--dark-orange-red-light)] px-3 py-1.5 rounded text-[#000] text-[11px] font-medium z-10">
              {activity.date}
            </div>
          )}
        </div>

        <h3 className="text-left text-lg mt-5 mb-2 leading-normal">
          {activity.title}
        </h3>

        <div className="text-left flex-grow text-neutral-800">
          <p className="m-0">
            {preview}
          </p>
        </div>

        {showReadMore && (activity.buttonText !== "" && activity.buttonText !== false) && (
          <div className="mt-2">
            <Link href={activity.slug ? `/news-and-events/${activity.slug}` : "#"} passHref className="inline-block">
              <GlobalArrowButton
                className="w-fit !bg-[var(--light-gray)] !shadow-none hover:!shadow-none gap-3 !px-0"
                textClassName="!text-[var(--button-red)] !px-0"
                arrowClassName="p-[3px] !px-1 mr-2 !py-1 !bg-[var(--button-red)]"
                arrowIconClassName="!text-white"
              >
                {activity.buttonText || "Read More"}
              </GlobalArrowButton>
            </Link>
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return <div className="py-16 text-center">Loading activities...</div>;
  }

  if (!activities || activities.length === 0) {
    return null; // Or return a "No activities found" message
  }

  return (
    <section className={`bg-white ${paddingClassName}`}>
      {(title || subtitle) && (
        <SectionHeading
          title={title}
          subtitle={subtitle}
          subtitleClassName="text-center"
          titleClassName="text-center"
        />
      )}

      <div
        className={`container mx-auto px-2 ${title || subtitle ? "mt-5" : ""
          }`}
      >
        <div className="relative">
          {showAsSlider ? (
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1.2}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setTimeout(() => bindNavigation(swiper), 0);
              }}
              onInit={(swiper) => {
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              className="student-activities-swiper [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex"
            >
              {activities.map((activity) => (
                <SwiperSlide key={activity.id}>
                  <ActivityCard activity={activity} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <>
              {/* Mobile Slider - Hidden on desktop */}
              <div className="block md:hidden">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={24}
                  slidesPerView={1}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={activities.length > 1}
                  navigation={{
                    prevEl: mobilePrevRef.current,
                    nextEl: mobileNextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = mobilePrevRef.current;
                    swiper.params.navigation.nextEl = mobileNextRef.current;
                  }}
                  onSwiper={(swiper) => {
                    mobileSwiperRef.current = swiper;
                    setTimeout(() => {
                      if (swiper && mobilePrevRef.current && mobileNextRef.current) {
                        swiper.params.navigation.prevEl = mobilePrevRef.current;
                        swiper.params.navigation.nextEl = mobileNextRef.current;
                        if (swiper.navigation) {
                          swiper.navigation.destroy();
                          swiper.navigation.init();
                          swiper.navigation.update();
                        }
                      }
                    }, 0);
                  }}
                  onInit={(swiper) => {
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
                  className="student-activities-swiper [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex"
                >
                  {activities.map((activity) => (
                    <SwiperSlide key={activity.id}>
                      <div className="w-full h-full flex">
                        <ActivityCard activity={activity} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Desktop Grid - Hidden on mobile */}
              <div className="hidden md:grid grid-cols-3 gap-6 justify-items-center">
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="w-full max-w-md h-full flex"
                  >
                    <ActivityCard activity={activity} />
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Navigation buttons - show for slider mode */}
          {showAsSlider && (
            <div className="flex justify-center items-center gap-3 mt-8">
              <button
                ref={prevRef}
                className="student-activities-swiper-button-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
              >
                <svg
                  width="25"
                  height="25"
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

              <button
                ref={nextRef}
                className="student-activities-swiper-button-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
              >
                <svg
                  width="25"
                  height="25"
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
          )}

          {/* Navigation buttons - show for mobile slider only */}
          {!showAsSlider && activities.length > 1 && (
            <div className="flex justify-center items-center gap-3 mt-8 md:hidden">
              <button
                ref={mobilePrevRef}
                className="student-activities-swiper-button-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
              >
                <svg
                  width="25"
                  height="25"
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

              <button
                ref={mobileNextRef}
                className="student-activities-swiper-button-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
              >
                <svg
                  width="25"
                  height="25"
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
          )}
        </div>
      </div>
    </section>
  );
}
