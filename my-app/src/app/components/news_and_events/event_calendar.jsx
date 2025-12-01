"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import GlobalArrowButton from "../general/global-arrow_button";

const events = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "November 3 - 2025",
    dateObj: { day: 3, month: "November" },
    category: "Academic",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "November 2 - 2025",
    dateObj: { day: 2, month: "November" },
    category: "Academic",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
  },
  {
    id: 3,
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "November 1 - 2025",
    dateObj: { day: 1, month: "November" },
    category: "Cultural",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
  },
  {
    id: 4,
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "October 30 - 2025",
    dateObj: { day: 30, month: "October" },
    category: "Sports",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
  },
  {
    id: 5,
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "October 29 - 2025",
    dateObj: { day: 29, month: "October" },
    category: "Academic",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
  },
  {
    id: 6,
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "October 28 - 2025",
    dateObj: { day: 28, month: "October" },
    category: "Cultural",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
  },
  {
    id: 7,
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "October 27 - 2025",
    dateObj: { day: 27, month: "October" },
    category: "Sports",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
  },
  {
    id: 8,
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "October 26 - 2025",
    dateObj: { day: 26, month: "October" },
    category: "Academic",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
  },
  {
    id: 9,
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "October 25 - 2025",
    dateObj: { day: 25, month: "October" },
    category: "Cultural",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
  },
  {
    id: 10,
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "October 24 - 2025",
    dateObj: { day: 24, month: "October" },
    category: "Sports",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
  },
];

const newsItems = [
  {
    id: 1,
    date: "12 July 2023",
    title: "Lorem ipsum dolor sit amet, consectetur",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
  },
  {
    id: 2,
    date: "20 July 2023",
    title: "Lorem ipsum dolor sit amet, consectetur",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
  },
  {
    id: 3,
    date: "27 July 2023",
    title: "Lorem ipsum dolor sit amet, consectetur",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
  },
  {
    id: 4,
    date: "27 July 2023",
    title: "Lorem ipsum dolor sit amet, consectetur",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
  },
  {
    id: 5,
    date: "37 July 2023",
    title: "Lorem ipsum dolor sit amet, consectetur",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
  },
];

export default function EventCalendar() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Extract unique dates from events and get the latest 6
  const extractDates = () => {
    const uniqueDates = [];
    const seenDates = new Set();
    
    events.forEach((event) => {
      const dateKey = `${event.dateObj.day}-${event.dateObj.month}`;
      if (!seenDates.has(dateKey)) {
        seenDates.add(dateKey);
        uniqueDates.push(event.dateObj);
      }
    });
    
    // Sort by month and day (latest first)
    const monthOrder = { "November": 11, "October": 10, "September": 9, "August": 8 };
    uniqueDates.sort((a, b) => {
      const monthDiff = (monthOrder[b.month] || 0) - (monthOrder[a.month] || 0);
      if (monthDiff !== 0) return monthDiff;
      return b.day - a.day;
    });
    
    // Return latest 6 dates
    return uniqueDates.slice(0, 6);
  };

  const dates = extractDates();
  
  // Filter events based on selected date and category
  const getFilteredEvents = () => {
    let filtered = events;

    // Filter by date
    if (selectedDate !== null && selectedDate !== undefined && selectedDate >= 0 && selectedDate < dates.length) {
      const selectedDateObj = dates[selectedDate];
      if (selectedDateObj) {
        filtered = filtered.filter((event) => 
          event.dateObj.day === selectedDateObj.day && 
          event.dateObj.month === selectedDateObj.month
        );
      }
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== "Event Category") {
      filtered = filtered.filter((event) => 
        event.category === selectedCategory
      );
    }

    return filtered;
  };

  const filteredEvents = getFilteredEvents();
  
  // Pagination: 3 events per page
  const eventsPerPage = 3;
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const currentEvents = filteredEvents.slice(startIndex, endIndex);

  // Reset to page 1 when date selection changes
  const handleDateSelect = (index) => {
    setSelectedDate(index);
    setCurrentPage(1);
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section className="py-16 pb-16 mx-auto container">
      {/* Header Section */}
      <div className="bg-[var(--dark-blue)] py-4 rounded-xl">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Event Calendar Title */}
            <h2 className="text-white !text-[35px]">Event Calendar</h2>

            {/* Date Navigation */}
            <div className="flex items-center gap-2 md:gap-4 flex-1 justify-center">
              <button className="date-nav-prev text-white hover:opacity-80 transition-opacity flex-shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 12L6 8L10 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="flex-1 max-w-md">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={8}
                  slidesPerView={3}
                  breakpoints={{
                    640: {
                      slidesPerView: 4,
                      spaceBetween: 12,
                    },
                    768: {
                      slidesPerView: 6,
                      spaceBetween: 12,
                    },
                  }}
                  navigation={{
                    nextEl: ".date-nav-next",
                    prevEl: ".date-nav-prev",
                  }}
                  className="date-swiper"
                >
                  {dates.map((date, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className={`flex flex-col items-center cursor-pointer transition-all px-2 py-2 rounded-lg ${
                          selectedDate === index
                            ? "bg-[var(--dark-orange-red-light)]"
                            : "text-white hover:bg-[var(--dark-orange-red-light)] hover:bg-opacity-10"
                        }`}
                        onClick={() => handleDateSelect(index)}
                      >
                        <span className={`text-base md:text-lg font-semibold ${selectedDate === index ? "text-black" : "text-white"}`}>
                          {date.day}
                        </span>
                        <span className={`text-xs ${selectedDate === index ? "text-black" : "text-white opacity-80"}`}>
                          {date.month}
                        </span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <button className="date-nav-next text-white hover:opacity-80 transition-opacity flex-shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 4L10 8L6 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Event Category Dropdown */}
            <div className="relative">
              <select 
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="bg-[var(--light-gray)] px-4 py-2 rounded-lg text-sm appearance-none pr-8 focus:outline-none cursor-pointer"
              >
                <option value="">Event Category</option>
                <option value="Academic">Academic</option>
                <option value="Cultural">Cultural</option>
                <option value="Sports">Sports</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-8">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-8">
            {/* Latest Events - Left Column (2/3 width) */}
            <div className="lg:col-span-2 flex flex-col h-full">
              <h2 className="mb-6">Latest Events</h2>

              <div className="space-y-6 flex-grow min-h-0">
                {currentEvents.map((event) => (
                  <div key={event.id} className="bg-[var(--light-gray)] rounded-lg shadow-sm overflow-hidden flex items-center flex-wrap md:flex-nowrap">
                    <div className="relative p-5">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={800}
                        height={400}
                        className="w-full h-[250px] md:h-[200px] object-cover rounded-lg"
                      />
                      <div className="absolute bottom-6 right-7 bg-[var(--dark-orange-red-light)] bg-opacity-90 px-3 py-1.5 rounded text-black text-sm font-medium">
                        {event.date}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 font-stix">
                        {event.title}
                      </h3>
                      <p className="text-[var(--text-gray)] mb-4">
                        {event.description}
                      </p>
                      <GlobalArrowButton
                        className="w-fit !bg-[var(--light-gray)] !shadow-none hover:!shadow-none gap-3 !px-0"
                        textClassName="!text-[var(--button-red)] !text-base !ml-0 !px-0"
                        arrowClassName="p-[3px] !px-1 mr-2 !py-1 !bg-[var(--button-red)]"
                        arrowIconClassName="!text-white"
                      >
                        Read More
                      </GlobalArrowButton>
                    </div>
                  </div>
                ))}
                          {/* Pagination */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg transition-colors ${
                    currentPage === page
                      ? "bg-[var(--button-red)] text-white"
                      : "bg-[var(--light-gray)] text-gray-600 hover:bg-gray-300"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                if (currentPage < totalPages) {
                  setCurrentPage(currentPage + 1);
                }
              }}
              disabled={currentPage >= totalPages}
              className={`px-5 py-2 rounded-lg transition-opacity flex items-center justify-center gap-4 ${
                currentPage >= totalPages
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-[var(--button-red)] text-white hover:opacity-90"
              }`}
            >
              <span>Next</span>
              <div className="flex items-center -space-x-[10px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 4L10 8L6 12"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 4L10 8L6 12"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
              </div>
            </div>

            {/* Latest News - Right Column (1/3 width) */}
            <div className="lg:col-span-1 flex h-[85%] mt-[78px]">
              <div className="bg-[var(--dark-blue)] rounded-lg p-6 w-full flex flex-col h-full">
                <div className="flex justify-center">
                <h2 className="text-white !text-[35px] mb-6 pt-3">Latest News</h2>
                </div>
                <div className="space-y-4 mb-6 flex-grow overflow-y-auto flex flex-col justify-between">
                  {newsItems.map((news, index) => (
                    <div key={news.id} className={`flex gap-3 items-center pb-4 ${index !== newsItems.length - 1 ? 'border-b border-white' : ''}`}>
                      <div className="flex-shrink-0">
                        <Image
                          src={news.image}
                          alt={news.title}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs mb-1 opacity-80">{news.date}</p>
                        <p className="text-white text-sm leading-relaxed">{news.title}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex-shrink-0 flex justify-center">
                <GlobalArrowButton
                        className="w-fit !bg-[var(--dark-blue)] !shadow-none hover:!shadow-none gap-3 !px-0"
                        textClassName="!text-white !text-base !ml-0 !px-0"
                        arrowClassName="p-[3px] !px-1 mr-2 !py-1 !bg-[var(--button-red)]"
                        arrowIconClassName="!text-white"
                      >
                        Explore More
                      </GlobalArrowButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

