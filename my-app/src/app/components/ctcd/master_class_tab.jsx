'use client';

import { useState, useRef, useEffect } from 'react';
import StudentActivities from '../department/student_activities';
import Gallery from '../general/gallery';
import SectionHeading from '../general/SectionHeading';
import Image from 'next/image';
import GlobalArrowButton from '../general/global-arrow_button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// Default Masterclass Activities for Tab 1 (2024-25)
const defaultTab1Activities = [
  {
    id: 1,
    imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/master-class.webp",
    imageAlt: "Grow As a Leader: A Program For First-Time Managers",
    title: "Grow As a Leader: A Program For First-Time Managers",
    description: "Resource Person: Mr. Amar Pathak",
    buttonText: "Read More",
    date: "17.08.2024",
  },
  {
    id: 2,
    imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/ctcd.png",
    imageAlt: "Maximising Fund-Raising Resource For CSR",
    title: "Maximising Fund-Raising Resource For CSR",
    description: "Resource Person: Prof. Sanjay Vanani",
    buttonText: "Read More",
    date: "19.10.2024",
  },
  {
    id: 3,
    imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/ctcd.png",
    imageAlt: "Crack The Code: Gen Z Connection Guide For Teachers and Parents",
    title: "Crack The Code: Gen Z Connection Guide For Teachers and Parents",
    description: "Resource Person: Dr. Sunayna Shukla",
    buttonText: "Read More",
    date: "21.12.2024",
  },
  {
    id: 4,
    imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/ctcd.png",
    imageAlt: "AI-Driven Benefits for Manufacturing & Operations",
    title: "AI-Driven Benefits for Manufacturing & Operations",
    description: "Resource Person: Ms. Rajashree Rajadhya",
    buttonText: "Read More",
    date: "08.03.2025",
  },
  {
    id: 5,
    imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/ctcd.png",
    imageAlt: "HR Analytics: Leveraging AI & Data for Strategic HR",
    title: "HR Analytics: Leveraging AI & Data for Strategic HR",
    description: "Resource Person: Saurabh Saxena",
    buttonText: "Read More",
    date: "03.05.2025",
  },
  {
    id: 6,
    imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/ctcd.png",
    imageAlt: "Master Your Market: Sales, Marketing & Negotiating Strategies",
    title: "Master Your Market: Sales, Marketing & Negotiating Strategies",
    description: "",
    buttonText: "Read More",
    date: "26.07.2025",
  },
  {
    id: 7,
    imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/ctcd.png",
    imageAlt: "Masterclass 7",
    title: "Masterclass 7",
    description: "",
    buttonText: "Read More",
    date: "TBD",
  },
  {
    id: 8,
    imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/ctcd.png",
    imageAlt: "Masterclass 8",
    title: "Masterclass 8",
    description: "",
    buttonText: "Read More",
    date: "TBD",
  },
  {
    id: 9,
    imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/ctcd.png",
    imageAlt: "Masterclass 9",
    title: "Masterclass 9",
    description: "",
    buttonText: "Read More",
    date: "TBD",
  },
  {
    id: 10,
    imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/ctcd.png",
    imageAlt: "Masterclass 10",
    title: "Masterclass 10",
    description: "",
    buttonText: "Read More",
    date: "TBD",
  },
];

// Default Masterclass Activities for Tab 2 (2025-26)
const defaultTab2Activities = [
  {
    id: 1,
    imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/ctcd.png",
    imageAlt: "Masterclass 2025-26 Event 1",
    title: "Masterclass 2025-26 Event 1",
    description: "",
    buttonText: "Read More",
    date: "TBD",
  },
  {
    id: 2,
    imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/ctcd.png",
    imageAlt: "Masterclass 2025-26 Event 2",
    title: "Masterclass 2025-26 Event 2",
    description: "",
    buttonText: "Read More",
    date: "TBD",
  },
  {
    id: 3,
    imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/ctcd.png",
    imageAlt: "Masterclass 2025-26 Event 3",
    title: "Masterclass 2025-26 Event 3",
    description: "",
    buttonText: "Read More",
    date: "TBD",
  },
  {
    id: 4,
    imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/ctcd.png",
    imageAlt: "Masterclass 2025-26 Event 4",
    title: "Masterclass 2025-26 Event 4",
    description: "",
    buttonText: "Read More",
    date: "TBD",
  },
];

// Default Gallery Images for Tab 1
const defaultTab1Gallery = [
  {
    id: 1,
    image: "https://cdn.kalingauniversity.ac.in/ctcd/master-class.webp",
    alt: "Masterclass 2024-25 Glimpse 1"
  },
  {
    id: 2,
    image: "https://cdn.kalingauniversity.ac.in/ctcd/master-class-2.webp",
    alt: "Masterclass 2024-25 Glimpse 2"
  },
  {
    id: 3,
    image: "https://cdn.kalingauniversity.ac.in/ctcd/masterclass-3.webp",
    alt: "Masterclass 2024-25 Glimpse 3"
  },
];

// Default Gallery Images for Tab 2
const defaultTab2Gallery = [
  {
    id: 1,
    image: "https://cdn.kalingauniversity.ac.in/ctcd/master-class.webp",
    alt: "Masterclass 2025-26 Glimpse 1"
  },
  {
    id: 2,
    image: "https://cdn.kalingauniversity.ac.in/ctcd/master-class-2.webp",
    alt: "Masterclass 2025-26 Glimpse 2"
  },
  {
    id: 3,
    image: "https://cdn.kalingauniversity.ac.in/ctcd/masterclass-3.webp",
    alt: "Masterclass 2025-26 Glimpse 3"
  },
  {
    id: 4,
    image: "https://cdn.kalingauniversity.ac.in/ctcd/master-class.webp",
    alt: "Masterclass 2025-26 Glimpse 4"
  },
];

// Annual Masterclass Calendar Data 2025-26
const masterclassCalendar = [
  {
    id: 1,
    month: "November 2025",
    topic: "Operational Excellence with Six Sigma: Driving Productivity & Cost Efficiency",
    audience: "Manufacturing, Steel, Mining, Operations, BFSI"
  },
  {
    id: 2,
    month: "January 2026",
    topic: "HR in the Age of AI: Reimagining People, Performance & Potential",
    audience: "HR Professionals, Business Leaders, Administrators, Educators"
  },
  {
    id: 3,
    month: "March 2026",
    topic: "Sustainable Industry Practices: Green Technologies & Compliance",
    audience: "Energy, Mining, Manufacturing, Packaging, Govt. Officers"
  },
  {
    id: 4,
    month: "April 2026",
    topic: "Future-Ready Classrooms: AI & Digital Tools in Education and Beyond",
    audience: "Schools, Colleges, Training Institutions, Corporates"
  },
  {
    id: 5,
    month: "June 2026",
    topic: "AI & Data for Industrial Efficiency: From Buzzword to Business Value",
    audience: "Industry 4.0, Smart Manufacturing, MSMEs, IT, Analysts"
  },
  {
    id: 6,
    month: "August 2026",
    topic: "Life Skills & Emotional Intelligence for the 21st Century Professional",
    audience: "Corporate Employees, Healthcare, NGOs, Students, Teachers"
  }
];

// Detailed content for each masterclass
const masterclassDetails = {
  1: {
    title: "Grow As a Leader: A Program For First-Time Managers",
    pdfUrl: "https://cdn.kalingauniversity.ac.in/ctcd/Masterclass+(Dark+Maroon).pdf",
    date: "17.08.2024",
    resourcePerson: "Mr. Amar Pathak",
    keyDeliverables: [
      "Fundamental differences between management and leadership",
      "Self-awareness, Self-Assessment, and emotional intelligence",
      "Effective communication skills and conflict resolution",
      "Effective decision-making and problem-solving skills",
      "Team building and strategies to motivate team members",
      "Skills to lead and manage change effectively",
      "Art of Delegation and Time Management"
    ],
    whoAttended: "Managers, Team Leaders, Supervisors, Project Leads, and Academicians, Students"
  },
  2: {
    title: "Maximising Fund-Raising Resource For CSR",
    pdfUrl: "https://cdn.kalingauniversity.ac.in/ctcd/Maximizing+Fund+Raising+(Print).pdf",
    date: "19.10.2024",
    resourcePerson: "Prof. Sanjay Vanani",
    keyDeliverables: [
      "CSR Ecosystem",
      "Legal Document Preparation",
      "Do's and Don'ts in Proposal Writing",
      "Proposal and Program Development Cycle",
      "Rafting High-Impact Project Designs",
      "Eligibility for CSR Fundings",
      "Opportunities for Social Startup with CSR",
      "11 Easy-to-Follow Strategic Actionable Points",
      "Current CSR Partnership Opportunities"
    ],
    whoAttended: "Corporate Leaders, CSR Managers, Representatives from NGOs, Government Officials, and Academicians and Researchers"
  },
  3: {
    title: "Crack The Code: Gen Z Connection Guide For Teachers and Parents",
    pdfUrl: "https://cdn.kalingauniversity.ac.in/ctcd/MASTERCLASS-+SUNAYANA+WKS+UA.pdf",
    date: "21.12.2024",
    resourcePerson: "Dr. Sunayna Shukla",
    keyDeliverables: [
      "Understanding child psychology across different age groups",
      "Balancing left and right brain development",
      "Building conscious connections with children",
      "Self-regulation techniques",
      "Mastering Praise and Constructive Criticism"
    ],
    whoAttended: "School Teachers, University Professors, Parents, Representatives from Coaching Institutes, and Educational Technologists"
  },
  4: {
    title: "AI-Driven Benefits for Manufacturing & Operations",
    pdfUrl: "https://cdn.kalingauniversity.ac.in/ctcd/Master+Class+on+AI-Driven+Benefits+for+Manufacturing+%26+Operations.pdf",
    date: "08.03.2025",
    resourcePerson: "Ms. Rajashree Rajadhya",
    keyDeliverables: [
      "AI for Process Optimisation & Predictive Maintenance",
      "AI Applications in Operations & Supply Chain Management",
      "Hands-on Demonstration of AI Tools",
      "AI Implementation & Strategy Planning"
    ],
    whoAttended: "Managers, CEOs, and representatives from manufacturing, operations, supply chain, and IT & Digital companies"
  },
  5: {
    title: "HR Analytics: Leveraging AI & Data for Strategic HR",
    pdfUrl: "https://cdn.kalingauniversity.ac.in/ctcd/HR+Analytics.pdf",
    date: "03.05.2025",
    resourcePerson: "Saurabh Saxena",
    keyDeliverables: [
      "Understanding HR Analytics & AI",
      "HR Metrics & Data Utilisation",
      "AI Tools in HR Analytics",
      "Predictive HR Analytics",
      "Best Practices & Industry Applications",
      "Hands-On Learning & Case Studies"
    ],
    whoAttended: "HR Professionals, HRIS Professionals, Talent Acquisition Partners, Managers, CEOs, Academicians, and Students"
  },
  6: {
    title: "Master Your Market: Sales, Marketing & Negotiating Strategies",
    pdfUrl: "https://cdn.kalingauniversity.ac.in/ctcd/Master+Class+Sales+Strategies.pdf",
    date: "26.07.2025",
    resourcePerson: "Meenakshi Ravi Shankar",
    keyDeliverables: [
      "Introduction & expectation mapping",
      "Persuasion & building seeking behaviour",
      "Introduction to Buying and Selling Process",
      "Understanding & Developing customer needs",
      "Objection Handling & Closure Skills",
      "Identifying the right stakeholder at the client's place",
      "Negotiation Skills",
      "Application of the learnings"
    ],
    whoAttended: "Sales Professionals, Marketing Professionals, Business Development managers, and Startup Owners"
  }
};

export default function MasterClassTab({
  tab1Activities = defaultTab1Activities,
  tab1Gallery = defaultTab1Gallery,
  tab1GalleryTitle = "Annual Masterclass 2024-25 Glimpse",
  tab2Activities = defaultTab2Activities,
  tab2Gallery = defaultTab2Gallery,
  tab2GalleryTitle = "Annual Masterclass Calendar 2025-26 Glimpse",
  tab2GalleryclassName = "",
}) {
  const [activeTab, setActiveTab] = useState('tab1');
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedMasterclass, setSelectedMasterclass] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const mobilePrevRef = useRef(null);
  const mobileNextRef = useRef(null);
  const mobileSwiperRef = useRef(null);

  // Ensure we use defaults if null/undefined/empty arrays are passed
  const activities1 = (tab1Activities && tab1Activities.length > 0) ? tab1Activities : defaultTab1Activities;
  const activities2 = (tab2Activities && tab2Activities.length > 0) ? tab2Activities : defaultTab2Activities;
  const gallery1 = (tab1Gallery && tab1Gallery.length > 0) ? tab1Gallery : defaultTab1Gallery;
  const gallery2 = (tab2Gallery && tab2Gallery.length > 0) ? tab2Gallery : defaultTab2Gallery;

  const showAsSlider = activities1 && activities1.length > 3;

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
  }, [activities1]);

  const tabs = [
    { id: 'tab1', label: 'Our Successful Masterclasses 2024-25' },
    { id: 'tab2', label: 'Annual Masterclass Calendar 2025-26' },
  ];

  return (
    <section className="bg-white py-16">
      <SectionHeading title="Masterclasses" titleClassName="text-center mb-5" />
      <div className="px-4 lg:px-6">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 md:mb-12 gap-4 md:gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-plus-jakarta-sans text-sm md:text-base lg:text-lg px-4 md:px-8 lg:px-10 py-3 md:py-4 rounded-lg transition-all duration-200 whitespace-normal md:whitespace-nowrap ${activeTab === tab.id
                ? 'bg-[var(--button-red)] text-white font-semibold shadow-md'
                : 'bg-[var(--lite-sand)] text-gray-800 font-normal hover:opacity-90'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'tab1' && (
            <>
              {/* Custom Masterclass Cards with Read More */}
              <div className="container mx-auto px-2 mt-5">
                {/* Masterclass Card Component */}
                {(() => {
                  const MasterclassCard = ({ activity }) => {
                    const details = masterclassDetails[activity.id];
                    return (
                      <div className="bg-[var(--light-gray)] rounded-lg p-5 flex flex-col h-full">
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
                          <p className="m-0 text-sm">
                            {activity.description}
                          </p>
                        </div>
                        {activity.buttonText && activity.button === "true" && (
                          <div className="mt-4">
                            <GlobalArrowButton
                              onClick={() => setSelectedMasterclass(details)}
                              className="w-fit !bg-[var(--light-gray)] !shadow-none hover:!shadow-none gap-3 !px-0"
                              textClassName="!text-[var(--button-red)] !px-0"
                              arrowClassName="p-[3px] !px-1 mr-2 !py-1 !bg-[var(--button-red)]"
                              arrowIconClassName="!text-white"
                            >
                              {activity.buttonText}
                            </GlobalArrowButton>
                          </div>
                        )}
                      </div>
                    );
                  };

                  return (
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
                          {activities1.map((activity) => (
                            <SwiperSlide key={activity.id}>
                              <MasterclassCard activity={activity} />
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
                              loop={activities1.length > 1}
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
                              {activities1.map((activity) => (
                                <SwiperSlide key={activity.id}>
                                  <div className="w-full h-full flex">
                                    <MasterclassCard activity={activity} />
                                  </div>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>

                          {/* Desktop Grid - Hidden on mobile */}
                          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                            {activities1.map((activity) => (
                              <div
                                key={activity.id}
                                className="w-full max-w-md h-full flex"
                              >
                                <MasterclassCard activity={activity} />
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  );
                })()}
              </div>
              <Gallery
                title={tab1GalleryTitle}
                images={gallery1}
                backgroundColor="bg-white"
                paddingClassName="py-0"
                titleClassName="font-plus-jakarta-sans text-lg font-medium sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10 mt-5 text-[var(--foreground)] text-center"
                forceSliderOnMobile={true}
              />
            </>
          )}
          {activeTab === 'tab2' && (
            <>
              {/* View Calendar Button */}
              <div className="flex justify-center mb-8">
                <button
                  onClick={() => setShowCalendar(true)}
                  className="bg-[var(--button-red)] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 shadow-md"
                >
                  View Annual Masterclass Calendar 2025-26
                </button>
              </div>

              <StudentActivities
                title=""
                subtitle=""
                activities={activities2}
                paddingClassName="py-0"
                cardHeightClass="h-max"
              />
              <Gallery
                title={tab2GalleryTitle}
                images={gallery2}
                backgroundColor="bg-white"
                paddingClassName={`py-0 ${tab2GalleryclassName}`}
                titleClassName="font-plus-jakarta-sans text-lg font-medium sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10 text-[var(--foreground)] text-center mt-10"
                forceSliderOnMobile={true}
              />

              {/* Calendar Modal */}
              {showCalendar && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                  onClick={() => setShowCalendar(false)}
                >
                  <div
                    className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setShowCalendar(false)}
                      className="sticky top-4 right-4 float-right bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg z-10"
                      aria-label="Close"
                    >
                      ✕
                    </button>

                    {/* Calendar Header */}
                    <div className="text-center pt-8 pb-6 px-6">
                      <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-2">
                        Annual Masterclass Calendar
                      </h2>
                      <p className="text-xl text-gray-600">2025-2026</p>
                      <p className="text-sm text-gray-500 mt-2">Kalinga University, Raipur, India</p>
                    </div>

                    {/* Calendar Content */}
                    <div className="px-6 pb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {masterclassCalendar.map((item) => (
                          <div
                            key={item.id}
                            className="bg-gradient-to-br from-[var(--lite-sand)] to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                          >
                            <div className="mb-3">
                              <span className="inline-block bg-[var(--button-red)] text-white px-4 py-1 rounded-full text-sm font-semibold">
                                {item.month}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-[var(--foreground)] mb-3 leading-tight">
                              {item.topic}
                            </h3>
                            <div className="border-t border-gray-300 pt-3">
                              <p className="text-xs font-semibold text-gray-700 mb-1">WHO SHOULD ATTEND:</p>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {item.audience}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Footer Note */}
                      <div className="mt-8 text-center text-sm text-gray-500">
                        <p>For more information, please contact Kalinga University</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Masterclass Details Modal */}
      {selectedMasterclass && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMasterclass(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMasterclass(null)}
              className="sticky top-4 right-4 float-right bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg z-10"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4">
                {selectedMasterclass.title}
              </h2>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="font-semibold text-gray-700">Date: </span>
                  <span className="text-gray-600">{selectedMasterclass.date}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Resource Person: </span>
                  <span className="text-gray-600">{selectedMasterclass.resourcePerson}</span>
                </div>
                {selectedMasterclass.pdfUrl && (
                  <div>
                    <a
                      href={selectedMasterclass.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--button-red)] hover:underline font-semibold"
                    >
                      View PDF Brochure →
                    </a>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">Key Deliverables:</h3>
                <ul className="space-y-2 text-gray-700 list-none">
                  {selectedMasterclass.keyDeliverables.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">➤</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">Who Attended?</h3>
                <p className="text-gray-700">{selectedMasterclass.whoAttended}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
