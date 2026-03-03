"use client";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import GlobalArrowButton from "../general/global-arrow_button";
import { parseHtmlToText } from "../../lib/api";

export default function EventCalendar({ items = [], departments = [], showNews = true, categories = [], hideNewsCategory = false }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null); // Stores the full date string
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const eventsPerPage = 3;

  // Filter categories based on hideNewsCategory prop
  const filteredCategories = hideNewsCategory
    ? [{ id: '', name: 'All Categories' }, ...categories.filter(cat => cat.name !== 'News' && cat.id !== '1')]
    : [{ id: '', name: 'All Categories' }, ...categories];

  // 1. Extract Unique Dates for the Strip
  const dates = useMemo(() => {
    const uniqueDates = [];
    const seenDates = new Set();

    // Sort items by date descending first?
    const sortedItems = [...items].sort((a, b) => new Date(b.date) - new Date(a.date));

    sortedItems.forEach((item) => {
      if (!item.date) return;
      // Assuming item.date is parseable (e.g. "YYYY-MM-DD" or "12 July 2023")
      // We need to group by date string.
      if (!seenDates.has(item.date)) {
        seenDates.add(item.date);
        const d = new Date(item.date);
        if (!isNaN(d)) {
          uniqueDates.push({
            fullDate: item.date,
            day: d.getDate(),
            month: d.toLocaleString('default', { month: 'long' }), // Full month for sorting/logic
            shortMonth: d.toLocaleString('default', { month: 'short' }) // For display? Original used full? Original used "November"
          });
        }
      }
    });

    // Prepend 'All' option
    return [{ fullDate: 'ALL', day: 'All', shortMonth: '' }, ...uniqueDates];
  }, [items]);

  // 2. Filter Items (The "Left Column" Content)
  const filteredEvents = useMemo(() => {
    let filtered = items;

    // Filter by Department
    if (selectedDepartment) {
      filtered = filtered.filter(item => String(item.department) === String(selectedDepartment));
    }

    // Filter by Category
    if (selectedCategory && selectedCategory !== "") {
      // Map dropdown name/id to item category. 
      // Dropdown above uses IDs '1', '2'. Item has `category` ID or `category_name`.
      // Let's assume we match against what's in the item.
      // If selectedCategory is a number-string ('1'), match item.category.
      filtered = filtered.filter(item => String(item.category) === String(selectedCategory));
    }

    // Filter by Date
    if (selectedDate) {
      filtered = filtered.filter(item => item.date === selectedDate);
    }

    // Original design was "Latest Events", implies sorting by date?
    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [items, selectedDepartment, selectedCategory, selectedDate]);


  // 3. Side Bar "Latest News" (Fixed logic: Top 5 items with category 'News' or just top 5 recent?)
  // User wanted "Latest News" on right.
  const latestNews = useMemo(() => {
    // Try to find items with category 'News' (id 1 or name 'News')
    const newsOnly = items.filter(item => item.category_name === 'News' || item.category === 1);
    // Fallback to just all items if no explicit 'News' found? Or show nothing?
    // Let's show top 5 items excluding the ones currently visible on left? No, usually independent.
    // const list = newsOnly.length > 0 ? newsOnly : items; // Fallback
    return newsOnly.slice(0, 5);
  }, [items]);


  // Pagination Logic
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const currentEvents = filteredEvents.slice(startIndex, startIndex + eventsPerPage);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedDate, selectedCategory, selectedDepartment]);


  // Handler for Date Click
  const handleDateSelect = (fullDate) => {
    // Toggle
    if (fullDate === 'ALL' || selectedDate === fullDate) {
      setSelectedDate(null);
    } else {
      setSelectedDate(fullDate);
    }
  };

  return (
    <section className="py-16 pb-0 mx-auto container">
      {/* Header Section */}
      <div className="bg-[var(--dark-blue)] py-4 sm:py-5 md:py-6 rounded-xl px-3">
        <div className="container mx-auto px-2">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 flex-wrap">
            {/* Event Calendar Title */}
            <h2 className="text-white text-2xl sm:text-3xl md:text-[32px] lg:!text-[35px] w-full md:w-auto text-center md:text-left font-stix">Event Calendar</h2>

            {/* Date Navigation */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 justify-center w-full md:w-auto max-w-full overflow-hidden">
              <button className="date-nav-prev text-white hover:opacity-80 transition-opacity flex-shrink-0 p-1.5 md:p-2">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-5 md:w-6 md:h-6">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="flex-1 max-w-[200px] sm:max-w-[300px] md:max-w-[400px]">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={6}
                  slidesPerView={3}
                  breakpoints={{
                    480: { slidesPerView: 4, spaceBetween: 8 },
                    640: { slidesPerView: 5, spaceBetween: 10 },
                    768: { slidesPerView: 5, spaceBetween: 12 },
                    1024: { slidesPerView: 5, spaceBetween: 12 },
                  }}
                  navigation={{
                    nextEl: ".date-nav-next",
                    prevEl: ".date-nav-prev",
                  }}
                  className="date-swiper"
                >
                  {dates.map((dateObj, index) => {
                    const isActive = (selectedDate === null && dateObj.fullDate === 'ALL') || (selectedDate === dateObj.fullDate);
                    return (
                      <SwiperSlide key={index}>
                        <div
                          className={`flex flex-col items-center cursor-pointer transition-all px-1.5 sm:px-2 md:px-2.5 py-1.5 sm:py-2 md:py-2.5 rounded-lg ${isActive
                            ? "bg-[var(--dark-orange-red-light)]"
                            : "text-white hover:bg-[var(--dark-orange-red-light)] hover:bg-opacity-10"
                            }`}
                          onClick={() => handleDateSelect(dateObj.fullDate)}
                        >
                          <span className={`text-sm sm:text-base md:text-lg font-semibold ${isActive ? "text-black" : "text-white"}`}>
                            {dateObj.day}
                          </span>
                          {dateObj.shortMonth && (
                            <span className={`text-[10px] sm:text-xs md:text-xs uppercase ${isActive ? "text-black" : "text-white opacity-80"}`}>
                              {dateObj.shortMonth}
                            </span>
                          )}
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </div>

              <button className="date-nav-next text-white hover:opacity-80 transition-opacity flex-shrink-0 p-1.5 md:p-2">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-5 md:w-6 md:h-6">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Filters Group (Department + Category) */}
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              {/* Department Dropdown */}
              <div className="relative w-full sm:w-auto">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="bg-[var(--light-gray)] px-3 py-2 rounded-lg text-xs sm:text-sm appearance-none pr-8 focus:outline-none cursor-pointer w-full sm:w-[150px]"
                >
                  <option value="">All Departments</option>
                  {departments.map(dep => (
                    <option key={dep.id} value={dep.id}>{dep.name}</option>
                  ))}
                </select>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Category Dropdown */}
              <div className="relative w-full sm:w-auto">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-[var(--light-gray)] px-3 py-2 rounded-lg text-xs sm:text-sm appearance-none pr-8 focus:outline-none cursor-pointer w-full sm:w-[150px]"
                >
                  {filteredCategories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content Split View */}
      <div className="container mx-auto pt-8">
        <div className="flex flex-col">
          <div className={`grid grid-cols-1 ${showNews ? 'lg:grid-cols-3' : ''} gap-6 items-stretch mb-8`}>

            {/* Left Column: Filtered List */}
            <div className={`${showNews ? 'lg:col-span-2' : ''} flex flex-col h-full`}>
              {/* <h2 className="mb-6 text-3xl font-stix font-semibold">Latest Events</h2> */}

              {currentEvents.length > 0 ? (
                <div className="space-y-6 flex-grow min-h-0">
                  {currentEvents.map((item) => {
                    // Truncation logic helper for fallback content
                    const getTruncatedContent = (content) => {
                      const plainText = parseHtmlToText(content || '');
                      const words = plainText.split(/\s+/);
                      if (words.length <= 18) return plainText;
                      return words.slice(0, 18).join(" ") + " ....";
                    };

                    const shortDesc = item.short_para ? parseHtmlToText(item.short_para) : getTruncatedContent(item.content);

                    return (
                      <div key={item.id} className="bg-[var(--light-gray)] rounded-lg shadow-sm overflow-hidden flex items-center flex-wrap md:flex-nowrap">
                        <div className="relative p-3 md:p-5 w-full md:w-auto flex-shrink-0">
                          <div className="relative w-full md:w-[280px] h-[200px] md:h-[200px] !bg-[var(--light-sand)]">
                            <Image
                              src={item.images?.[0]?.image || "https://cdn.kalingauniversity.ac.in/common/student.jpg"}
                              alt={item.heading}
                              fill
                              sizes="(max-width: 768px) 100vw, 280px"
                              className="object-contain rounded-lg !bg-[var(--lite-sand)]"
                            />
                            {item.date && (
                              <div className="absolute bottom-4 right-4 bg-[var(--dark-orange-red-light)] bg-opacity-90 px-3 py-1.5 rounded text-black text-xs font-bold">
                                {item.date}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="p-4 md:p-6 w-full">
                          <h3 className="text-xl md:text-2xl  mb-3 font-stix leading-tight">
                            {item.heading}
                          </h3>
                          <p className="text-[var(--text-gray)] mb-4 text-sm leading-relaxed">
                            {shortDesc}
                          </p>

                          <Link href={`/news-and-events/${item.slug}`}>
                            <GlobalArrowButton
                              className="w-fit !bg-[var(--light-gray)] !shadow-none hover:!shadow-none gap-3 !px-0"
                              textClassName="!text-[var(--button-red)] !text-base !ml-0 !px-0 font-bold"
                              arrowClassName="p-[3px] !px-1 mr-2 !py-1 !bg-[var(--button-red)]"
                              arrowIconClassName="!text-white"
                            >
                              Read More
                            </GlobalArrowButton>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="py-16 text-center text-gray-500 bg-gray-50 rounded-lg">
                  No events found matching your filters.
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between flex-wrap gap-2 mt-8">
                  <div className="flex items-center gap-2">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      // Simple logic to show first 5 pages or so. 
                      // For full complex pagination, we'd need more logic. 
                      // Keeping it simple as per original
                      const p = i + 1;
                      return (
                        <button
                          key={p}
                          onClick={() => setCurrentPage(p)}
                          className={`w-10 h-10 rounded-lg transition-colors font-semibold ${currentPage === p
                            ? "bg-[var(--button-red)] text-white"
                            : "bg-[var(--light-gray)] text-gray-600 hover:bg-gray-300"
                            }`}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => {
                      if (currentPage < totalPages) setCurrentPage(c => c + 1);
                    }}
                    disabled={currentPage >= totalPages}
                    className={`px-5 py-2 rounded-lg transition-opacity flex items-center justify-center gap-4 ${currentPage >= totalPages
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-[var(--button-red)] text-white hover:opacity-90"
                      }`}
                  >
                    <span className="font-semibold">Next</span>
                    <div className="flex items-center -space-x-[10px]">
                      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Latest News Sidebar - Only show if showNews is true */}
            {showNews && (
              <div className="lg:col-span-1 flex h-full">
                <div className="bg-[var(--dark-blue)] rounded-lg p-6 w-full flex flex-col h-[600px] sticky top-24">
                  <div className="flex justify-center border-b border-white/20 pb-4 mb-4">
                    <h2 className="text-white !text-[30px] font-stix">Latest News</h2>
                  </div>

                  <div className="space-y-4 mb-6 flex-grow overflow-y-auto pr-2 custom-scrollbar">
                    {latestNews.map((news, index) => (
                      <Link href={`/news-and-events/${news.slug}`} key={news.id} className="block group">
                        <div className={`flex gap-3 items-start pb-4 ${index !== latestNews.length - 1 ? 'border-b border-white/20' : ''}`}>
                          <div className="flex-shrink-0 pt-1">
                            <Image
                              src={news.images?.[0]?.image || "https://cdn.kalingauniversity.ac.in/common/student.jpg"}
                              alt={news.heading}
                              width={80}
                              height={80}
                              className="w-20 h-20 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[var(--dark-orange-red-light)] text-xs mb-1 font-semibold">{news.date}</p>
                            <p className="text-white text-sm leading-snug group-hover:text-gray-200 transition-colors line-clamp-3">
                              {news.heading}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* <div className="mt-auto flex-shrink-0 flex justify-center pt-2">
                    <Link href="/news-and-events?category=1">
                      <GlobalArrowButton
                        className="w-fit !bg-[var(--dark-blue)] !shadow-none hover:!shadow-none gap-3 !px-0"
                        textClassName="!text-white !text-base !ml-0 !px-0 font-bold"
                        arrowClassName="p-[3px] !px-1 mr-2 !py-1 !bg-[var(--button-red)]"
                        arrowIconClassName="!text-white"
                      >
                        Explore More
                      </GlobalArrowButton>
                    </Link>
                  </div> */}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </section>
  );
}
