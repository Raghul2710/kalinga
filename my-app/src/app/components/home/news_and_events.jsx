'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GlobalArrowButton from '../general/global-arrow_button'
import FeaturedNewsCard from '../general/featured_news_card'
import SectionHeading from '../general/SectionHeading'

import { fetchNewsEvents, parseHtmlToText } from '../../lib/api'

export default function NewsEvents({ categoryId, categoryIds, title, fallback = 'all', hideCalendar = false, titleClassName = '' }) {
  const [selectedDate, setSelectedDate] = useState(null)
  const [newsItems, setNewsItems] = useState([])
  const [featuredNews, setFeaturedNews] = useState(null)
  const [calendarEvents, setCalendarEvents] = useState([])
  const [dateItems, setDateItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const datesScrollRef = useRef(null)

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNewsEvents()
        if (data && data.results) {
          let results = data.results

          // --- 0. Filtering Logic Based on Props ---
          let filteredResults = results;

          if (categoryIds && categoryIds.length > 0) {
            // Filter by multiple IDs
            filteredResults = results.filter(item =>
              categoryIds.includes(String(item.category))
            );
          } else if (categoryId) {
            // Filter by single ID
            filteredResults = results.filter(item =>
              String(item.category) === String(categoryId)
            );
          }

          // --- Fallback Logic ---
          if (filteredResults.length === 0) {
            if (fallback === 'hide') {
              setIsVisible(false);
              setLoading(false);
              return; // Exit early
            } else {
              // fallback === 'all' (default)
              filteredResults = results;
            }
          }

          // Use the filtered (or fallback) results for the rest of the component
          results = filteredResults;


          // 1. Featured News Logic
          const featured = results.find(item => item.is_featured) || results[0]

          if (featured) {
            setFeaturedNews({
              id: featured.id,
              title: featured.heading,
              image: featured.images && featured.images.length > 0 ? featured.images[0].image : 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
              date: featured.date,
              badgeText: featured.category_name,
              slug: featured.slug
            })
          }

          // 2. News List Logic (Exclude featured, top 3, no desc)
          const listItems = results
            .filter(item => item.id !== featured?.id)
            .slice(0, 3)
            .map(item => ({
              id: item.id,
              date: item.date,
              title: item.heading,
              image: item.images && item.images.length > 0 ? item.images[0].image : 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
              slug: item.slug
            }))

          setNewsItems(listItems)

          // 3. Event Calendar Logic (Category 'Events' or all with dates)
          // Note: If we already filtered by Category (e.g. Sports), 'results' only has Sports.
          // So the calendar will show Sports events.
          // We SHOULD NOT strict filter by 'Events' category here if we represent other categories.
          // BUT original logic was: item.category_name === 'Events' || item.category === 2
          // If we are in "Research" mode, and research items have dates, they should show in calendar? Yes.
          // So we relax the calendar filter if specific category props are passed.

          let eventsData = [];
          if (categoryId || (categoryIds && categoryIds.length > 0)) {
            // If specific mode, show everything in results that has a date
            eventsData = results.map(item => ({
              id: item.id,
              date: item.date,
              title: item.heading,
              image: item.images && item.images.length > 0 ? item.images[0].image : 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
              slug: item.slug
            }));
          } else {
            // Default Home Page Logic: Filter for Events category
            eventsData = results
              .filter(item => item.category_name === 'Events' || item.category === 2)
              .map(item => ({
                id: item.id,
                date: item.date, // YYYY-MM-DD
                title: item.heading,
                image: item.images && item.images.length > 0 ? item.images[0].image : 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
                slug: item.slug
              }));
          }

          setCalendarEvents(eventsData)

          // Extract Unique Dates
          const uniqueDates = [...new Set(eventsData.map(e => e.date))].sort();
          const formattedDateItems = uniqueDates.map(dateStr => {
            const dateObj = new Date(dateStr);
            const day = dateObj.getDate();
            const month = dateObj.toLocaleString('default', { month: 'short' });
            return { day, month, fullDate: dateStr }
          });

          setDateItems(formattedDateItems);
        }
      } catch (error) {
        console.error("Failed to load news", error)
      } finally {
        setLoading(false)
      }
    }
    loadNews()
  }, [categoryId, categoryIds, fallback])

  // Filter events based on selectedDate
  const filteredEvents = selectedDate
    ? calendarEvents.filter(e => e.date === selectedDate)
    : calendarEvents;

  if (!isVisible && !loading) return null;

  const handlePrevDay = () => {
    if (datesScrollRef.current) {
      datesScrollRef.current.scrollBy({ left: -120, behavior: 'smooth' })
    }
  }

  const handleNextDay = () => {
    if (datesScrollRef.current) {
      datesScrollRef.current.scrollBy({ left: 120, behavior: 'smooth' })
    }
  }

  const handleDateClick = (fullDate) => {
    if (selectedDate === fullDate) {
      setSelectedDate(null);
    } else {
      setSelectedDate(fullDate);
    }
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .news-scrollbar-show::-webkit-scrollbar {
          width: 8px;
        }
        .news-scrollbar-show::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .news-scrollbar-show::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        .news-scrollbar-show::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        .news-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .news-scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .events-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .date-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .date-scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
      <section className="relative w-full py-16">
        <div className="container mx-auto px-2">
          {/* Main Layout: News section with title + Event Calendar */}
          <div className={`${hideCalendar ? 'flex justify-center' : 'grid grid-cols-1 md:grid-cols-[1.8fr_2.0fr_0.8fr]'} gap-6 sm:gap-6 items-end`}>
            {/* Left section: News & Events title and two cards */}
            <div className={`${hideCalendar ? 'w-full md:w-[82%]' : 'md:col-span-2'} flex flex-col`}>
              {/* Section title */}
              <SectionHeading
                title={title || "News & Events"}
                titleClassName={` ${titleClassName} text-[var(--foreground)] mb-5`}
              />

              {/* Two column grid for news cards: If single item and hiding calendar, use flex center */}
              <div className={`${(hideCalendar && newsItems.length === 0) ? 'flex justify-center' : 'grid grid-cols-1 md:grid-cols-2'} gap-6 sm:gap-6`}>
                {/* Column 1: Featured news */}
                {featuredNews ? (
                  <Link href={`/news-and-events/${featuredNews.slug}`} className={`${(hideCalendar && newsItems.length === 0) ? 'w-full md:w-[48%]' : 'block h-full'}`}>
                    <FeaturedNewsCard
                      image={featuredNews.image}
                      alt={featuredNews.title}
                      badgeText={featuredNews.badgeText || "Featured"}
                      title={featuredNews.title}
                    />
                  </Link>
                ) : (
                  <div className="h-full bg-gray-200 animate-pulse rounded-lg min-h-[300px]"></div>
                )}

                {/* Column 2: stacked news list - Hide if empty and hiding calendar */}
                {(!hideCalendar || newsItems.length > 0) && (
                  <div className={`${(hideCalendar && newsItems.length === 0) ? 'hidden' : 'w-full'}`}>
                    <div className="bg-[var(--light-gray)] rounded-lg shadow-lg w-full h-auto md:h-[380px] p-4 sm:p-5 flex flex-col">
                      {/* Items List - Fixed 3 items, no read more toggle */}
                      <div className="flex-1 space-y-4">
                        {newsItems.length > 0 ? (
                          newsItems.map((news) => (
                            <Link href={`/news-and-events/${news.slug}`} key={news.id} className="flex items-start gap-3 group">
                              <div className="relative w-22 h-22 rounded-lg overflow-hidden flex-shrink-0" style={{ borderRadius: '10px' }}>
                                <Image
                                  src={news.image}
                                  alt={news.title}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                              </div>
                              <div className="flex-1 pt-1">
                                <p className="text-xs text-gray-600 font-semibold !text-[12px]">{news.date}</p>
                                <h4 className="text-sm text-gray-800 !font-medium leading-tight mb-1 group-hover:text-[var(--dark-blue)] transition-colors line-clamp-2">{news.title}</h4>
                              </div>
                            </Link>
                          ))
                        ) : (
                          <div className="h-full flex items-center justify-center">
                            <p className="text-gray-500 text-center">No additional news found.</p>
                          </div>
                        )}
                      </div>

                      <div className="mt-2 flex justify-center flex-shrink-0">
                        <Link href="/news-and-events">
                          <GlobalArrowButton
                            variant="no-arrow"
                            className="w-fit !bg-[var(--light-gray)] !shadow-none hover:!shadow-none gap-3 !px-0"
                            textClassName="!text-[#000] !font-semibold !ml-0 !px-0"
                          >
                            Know More
                          </GlobalArrowButton>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Column 3: Event Calendar */}
            {!hideCalendar && (
              <div className="w-full max-w-[380px] md:max-w-[420px]">
                <div className="bg-[var(--dark-blue)] text-white overflow-hidden shadow-lg h-auto md:h-[470px] w-full rounded-[9px] p-4 sm:p-5">
                  <div className="pt-2 pb-6 flex justify-center">
                    <h3 className="!text-[30px] font-stix text-center font-medium ">Event Calendar</h3>
                  </div>

                  {/* Day selector */}
                  <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mt-[-30px] pt-3 border-b border-white pb-3">
                    <button
                      onClick={handlePrevDay}
                      className="w-8 h-8 sm:w-10 sm:h-10  bg-[var(--dark-blue)] flex items-center justify-center transition-colors flex-shrink-0"
                      aria-label="Previous day"
                    >
                      <img
                        src="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/arrow.png"
                        alt="Previous"
                        className="sm:w-10 sm:h-10 object-contain rotate-0"
                      />
                    </button>

                    <div
                      ref={datesScrollRef}
                      className="flex items-center gap-2 sm:gap-4 md:gap-6 overflow-x-auto date-scrollbar-hide flex-1 justify-between md:justify-center px-4 sm:px-6 first:ml-4"
                    >
                      {dateItems.map((item, idx) => {
                        // Highlight if matches selectedDate
                        const isActive = selectedDate === item.fullDate
                        return (
                          <button
                            key={idx}
                            onClick={() => handleDateClick(item.fullDate)}
                            className={`flex-shrink-0 flex flex-col items-center transition-all duration-200 md:first:ml-15 md:last:mr-2 ${isActive ? '' : 'text-white/70 hover:text-white'}`}
                          >
                            {isActive ? (
                              <div className={`bg-orange-500 text-white rounded-md w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex flex-col items-center justify-center font-bold shadow-md`}>
                                <span className="text-xl sm:text-2xl md:text-3xl">{item.day}</span>
                                <span className="text-[8px] sm:text-[10px] md:text-xs font-medium">{item.month}</span>
                              </div>
                            ) : (
                              <div className="flex flex-col items-center gap-0.5">
                                <span className="text-sm sm:text-base md:text-lg font-semibold">{item.day}</span>
                                <span className="text-[10px] sm:text-xs text-white/60">{item.month}</span>
                              </div>
                            )}
                          </button>
                        )
                      })}
                    </div>

                    <button
                      onClick={handleNextDay}
                      className="w-8 h-8 sm:w-10 sm:h-10  bg-[var(--dark-blue)] flex items-center justify-center shadow-sm  transition-colors flex-shrink-0"
                      aria-label="Next day"
                    >
                      <img
                        src="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/arrow.png"
                        alt="Next"
                        className="sm:w-10 sm:h-10 object-contain rotate-180"
                      />
                    </button>
                  </div>

                  {/* Events list */}
                  <div className="overflow-y-auto events-scrollbar-hide max-h-[280px] space-y-4">
                    {filteredEvents.length > 0 ? (
                      filteredEvents.map((event) => (
                        <Link href={`/news-and-events/${event.slug}`} key={event.id} className="flex items-start gap-3 group">
                          <div className="relative w-22 h-22 rounded-lg overflow-hidden flex-shrink-0" style={{ borderRadius: '10px' }}>
                            <Image
                              src={event.image}
                              alt={event.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-xs text-white/70 font-semibold !text-[12px]">{event.date}</p>
                            <p className="text-sm text-white !font-medium leading-relaxed line-clamp-2 group-hover:text-orange-300 transition-colors">{event.title}</p>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p className="text-center text-white/50 py-4">No events found for this date.</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
