'use client';

import { useState, useEffect } from 'react';

const defaultTabs = [
  { id: 'about', label: 'About' },
  { id: 'eligibility', label: 'Eligibility Criteria' },
  { id: 'career', label: 'Career Pathways' },
  { id: 'specialization', label: 'Specialization' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'activities', label: ' Events and Activities' },
];

export default function CourseNavigation({
  tabs = defaultTabs,
  activeTab = 'about',
  onTabClick = null,
}) {
  const [currentActive, setCurrentActive] = useState(activeTab);

  useEffect(() => {
    setCurrentActive(activeTab);
  }, [activeTab]);

  const handleTabClick = (tabId) => {
    setCurrentActive(tabId);
    if (onTabClick) {
      onTabClick(tabId);
    } else {
      // Default behavior: scroll to section with offset for header
      const element = document.getElementById(tabId);
      if (element) {
        const headerOffset = 100; // Adjust based on header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="z-50 pt-8 pb-4 md:py-12 bg-white">
      <div className="container mx-auto px-4 md:px-2">
        <div className="bg-[var(--lite-sand)]/50 backdrop-blur-sm rounded-3xl md:rounded-full px-2 py-2 md:px-4 md:py-4 overflow-x-auto scrollbar-hide border border-[var(--dark-blue)]/5" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="flex md:flex-wrap md:items-center md:justify-center gap-1 md:gap-4 min-w-max md:min-w-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`font-plus-jakarta-sans text-sm md:text-base lg:text-lg px-3 md:px-4 py-1.5 md:py-2 transition-colors duration-200 whitespace-nowrap flex-shrink-0 cursor-pointer ${currentActive === tab.id
                  ? 'text-[var(--button-red)] font-semibold'
                  : 'text-[var(--foreground)] font-medium hover:text-[var(--button-red)]'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

