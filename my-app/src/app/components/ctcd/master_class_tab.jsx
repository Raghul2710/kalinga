'use client';

import { useState } from 'react';
import StudentActivities from '../department/student_activities';
import Gallery from '../general/gallery';
import SectionHeading from '../general/SectionHeading';
// Default Masterclass Activities for Tab 1 (2024-25)
const defaultTab1Activities = [
  {
    id: 1,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/master-class.webp",
    imageAlt: "Grow As a Leader: A Program For First-Time Managers",
    title: "Grow As a Leader: A Program For First-Time Managers",
    description: "Resource Person: Mr. Amar Pathak",
    buttonText: "Read More",
    date: "17.08.2024",
  },
  {
    id: 2,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd.png",
    imageAlt: "Maximising Fund-Raising Resource For CSR",
    title: "Maximising Fund-Raising Resource For CSR",
    description: "Resource Person: Prof. Sanjay Vanani",
    buttonText: "Read More",
    date: "19.10.2024",
  },
  {
    id: 3,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd.png",
    imageAlt: "Crack The Code: Gen Z Connection Guide For Teachers and Parents",
    title: "Crack The Code: Gen Z Connection Guide For Teachers and Parents",
    description: "Resource Person: Dr. Sunayna Shukla",
    buttonText: "Read More",
    date: "21.12.2024",
  },
  {
    id: 4,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd.png",
    imageAlt: "AI-Driven Benefits for Manufacturing & Operations",
    title: "AI-Driven Benefits for Manufacturing & Operations",
    description: "Resource Person: Ms. Rajashree Rajadhya",
    buttonText: "Read More",
    date: "08.03.2025",
  },
  {
    id: 5,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd.png",
    imageAlt: "HR Analytics: Leveraging AI & Data for Strategic HR",
    title: "HR Analytics: Leveraging AI & Data for Strategic HR",
    description: "Resource Person: Saurabh Saxena",
    buttonText: "Read More",
    date: "03.05.2025",
  },
  {
    id: 6,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd.png",
    imageAlt: "Master Your Market: Sales, Marketing & Negotiating Strategies",
    title: "Master Your Market: Sales, Marketing & Negotiating Strategies",
    description: "",
    buttonText: "Read More",
    date: "26.07.2025",
  },
  {
    id: 7,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd.png",
    imageAlt: "Masterclass 7",
    title: "Masterclass 7",
    description: "",
    buttonText: "Read More",
    date: "TBD",
  },
  {
    id: 8,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd.png",
    imageAlt: "Masterclass 8",
    title: "Masterclass 8",
    description: "",
    buttonText: "Read More",
    date: "TBD",
  },
  {
    id: 9,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd.png",
    imageAlt: "Masterclass 9",
    title: "Masterclass 9",
    description: "",
    buttonText: "Read More",
    date: "TBD",
  },
  {
    id: 10,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd.png",
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
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd.png",
    imageAlt: "Masterclass 2025-26 Event 1",
    title: "Masterclass 2025-26 Event 1",
    description: "",
    buttonText: "Read More",
    date: "TBD",
  },
  {
    id: 2,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd.png",
    imageAlt: "Masterclass 2025-26 Event 2",
    title: "Masterclass 2025-26 Event 2",
    description: "",
    buttonText: "Read More",
    date: "TBD",
  },
  {
    id: 3,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd.png",
    imageAlt: "Masterclass 2025-26 Event 3",
    title: "Masterclass 2025-26 Event 3",
    description: "",
    buttonText: "Read More",
    date: "TBD",
  },
  {
    id: 4,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd.png",
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
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/master-class.webp",
    alt: "Masterclass 2024-25 Glimpse 1"
  },
  {
    id: 2,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/master-class-2.webp",
    alt: "Masterclass 2024-25 Glimpse 2"
  },
  {
    id: 3,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/masterclass-3.webp",
    alt: "Masterclass 2024-25 Glimpse 3"
  },
];

// Default Gallery Images for Tab 2
const defaultTab2Gallery = [
  {
    id: 1,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/master-class.webp",
    alt: "Masterclass 2025-26 Glimpse 1"
  },
  {
    id: 2,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/master-class-2.webp",
    alt: "Masterclass 2025-26 Glimpse 2"
  },
  {
    id: 3,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/masterclass-3.webp",
    alt: "Masterclass 2025-26 Glimpse 3"
  },
  {
    id: 4,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/master-class.webp",
    alt: "Masterclass 2025-26 Glimpse 4"
  },
];

export default function MasterClassTab({
  tab1Activities = defaultTab1Activities,
  tab1Gallery = defaultTab1Gallery,
  tab1GalleryTitle = "Annual Masterclass 2024-25 Glimpse",
  tab2Activities = defaultTab2Activities,
  tab2Gallery = defaultTab2Gallery,
  tab2GalleryTitle = "Annual Masterclass Calendar 2025-26 Glimpse",
}) {
  const [activeTab, setActiveTab] = useState('tab1');

  // Ensure we use defaults if null/undefined/empty arrays are passed
  const activities1 = (tab1Activities && tab1Activities.length > 0) ? tab1Activities : defaultTab1Activities;
  const activities2 = (tab2Activities && tab2Activities.length > 0) ? tab2Activities : defaultTab2Activities;
  const gallery1 = (tab1Gallery && tab1Gallery.length > 0) ? tab1Gallery : defaultTab1Gallery;
  const gallery2 = (tab2Gallery && tab2Gallery.length > 0) ? tab2Gallery : defaultTab2Gallery;

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
              className={`font-plus-jakarta-sans text-sm md:text-base lg:text-lg px-4 md:px-8 lg:px-10 py-3 md:py-4 rounded-lg transition-all duration-200 whitespace-normal md:whitespace-nowrap ${
                activeTab === tab.id
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
              <StudentActivities
                title=""
                subtitle=""
                activities={activities1}
                paddingClassName="py-0"
              />
              <Gallery
                title={tab1GalleryTitle}
                images={gallery1}
                backgroundColor="bg-white"
                paddingClassName="py-0"
                titleClassName="font-plus-jakarta-sans text-lg font-bold sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10 mt-5 text-[var(--foreground)] text-center"
                forceSliderOnMobile={true}
              />
            </>
          )}
          {activeTab === 'tab2' && (
            <>
              <StudentActivities
                title=""
                subtitle=""
                activities={activities2}
                paddingClassName="py-0"
              />
              <Gallery
                title={tab2GalleryTitle}
                images={gallery2}
                backgroundColor="bg-white"
                paddingClassName="py-0"
                titleClassName="font-plus-jakarta-sans text-lg font-bold sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10 text-[var(--foreground)] text-center mt-10"
                forceSliderOnMobile={true}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
