"use client";

import React from 'react';
import OpenPositions from '../careers/OpenPositions';

const Specialization = ({
  title = "Specialization",
  subtitle = "Choose a specialisation of your choice and master what's trending.",
  description = "",
  items = [],
  className = "",
}) => {
  // Transform items to positions format for OpenPositions
  const positions = items.map((item) => ({
    title: item.title || item.courseTitle || "",
    startDate: item.duration || "",
    showDateLabel: false, // Hide "Date:" label for duration
    price: item.fees || "",
    skills: item.careerOpportunities || item.skills || [],
    imageUrl: item.imageUrl || "",
    imageAlt: item.imageAlt || item.title || "",
    // No buttons needed - explicitly set to undefined/null to hide them
    knowMoreButton: undefined,
    registrationButton: undefined,
    registrationLink: undefined,
    applications: item.applications || "",
    participants: item.participants || "",
    resourcePerson: item.resourcePerson || "",
    eligibility: item.eligibility || "",
  }));

  if (positions.length === 0) {
    return null;
  }

  return (
    <section className={`${className}`}>
      <OpenPositions
        subtitle={title}
        title={subtitle}
        description={description}
        positions={positions}
        useCourseCardLayout={true}
        initialVisibleCount={null}
        hideCheckEligibility={true}
        titleClassName="text-white max-w-4xl mx-auto  "
        cardTitleClassName="font-plus-jakarta-sans text-[var(--button-red)]"
        skillsLabel="Career Opportunities"
      />
    </section>
  );
};

export default Specialization;
