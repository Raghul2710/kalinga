"use client"
import React from 'react'
import SportsWellnessOverview from '@/app/components/sports-and-wellness-centre/sportsandwellnesshero'
import SportsandwellnessMainIntro from '@/app/components/sports-and-wellness-centre/sportsandwellness_main_intro'
import SportsFacilitiesTabs from '@/app/components/sports-and-wellness-centre/sportsfacilitiestabs'
import NewsEvents from '@/app/components/home/news_and_events'
import AdmissionCareer from '@/app/components/general/admission_cta'

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/sportsmain.webp",
  pageTitle: "Sports & Wellness Centre",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Sports & Wellness", href: "/sports-and-wellness-centre" },
  ],
};

if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

function Sportsandwellnesscentre() {

  return (
    <>
      <style jsx global>{`
  .absolute.inset-0 > img {
    object-position: center 60% !important;
  }

  @media (max-width: 768px) {
    .absolute.inset-0 > img {
      object-position: center 5% !important;
    }
  }
`}</style>
      <SportsandwellnessMainIntro />
      <SportsWellnessOverview />
      <div className="container py-10">
        <SportsFacilitiesTabs />
      </div>

      {/* Category ID 6 is Sports */}
      <NewsEvents categoryId="6" title="Sports Events" />

      <AdmissionCareer />
    </>
  )
}

export default Sportsandwellnesscentre
