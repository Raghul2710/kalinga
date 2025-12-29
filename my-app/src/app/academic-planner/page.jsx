"use client";

import React from 'react'
import EventCalendar from "@/app/components/news_and_events/event_calendar";


const breadcrumbData = {
    heroImage:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-front-banner02.webp",
    pageTitle: "Academic Planner",
    customBreadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Academic Planner", href: "/academic-planner" },
    ],
  };
  
  if (typeof window !== "undefined") {
    window.__breadcrumbData = breadcrumbData;
  }


export default function Page() {
  return (
    <div>
      <EventCalendar />
    </div>
  )
}