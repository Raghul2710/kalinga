"use client";

import React from 'react'
import MainIntro from '../components/about/main_intro'



/// Breadcrumb configuration
const breadcrumbData = {
    heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
    pageTitle: "Transport Facility",
    customBreadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Transport Facility', href: '/transport-facility' }
    ]
  };
  
  // Register breadcrumb data globally
  if (typeof window !== 'undefined') {
    window.__breadcrumbData = breadcrumbData;
  }

export default function TransportFacilityPage() {
  return (
    <>
    <MainIntro
    title="Transport Facility"
    subtitle=""
    description="We provide transportation facilities to our students, staff members, and visitors to ensure their convenience, safety, reliability, and punctuality. We have 30+ buses and 4-wheel vehicles that provide pick-up and drop-off facilities with a comfortable travelling experience. The transport facility provided to the students is at minimal rates (included in the fee structure). Teachers are given proctorial duties both in the morning and evening for the safety of students. Our buses and cars cover distances of up to 70 KM (one way) to facilitate those who reside far from the university. "
    imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/transport-3.webp"
    imageAlt="Transport Facility"
    showKnowMore={true}
    knowMoreLabel="Bus Route Details"
    knowMoreHref="#"
    />
    </>
  )
}