"use client";

import React from 'react'
import MainIntro from '../components/about/main_intro'



if (typeof window !== 'undefined') {

}

export default function TransportFacilityPage() {
  return (
    <>
      <MainIntro
        title="Transport Facility"
        subtitle=""
        description="We provide transportation facilities to our students, staff members, and visitors to ensure their convenience, safety, reliability, and punctuality. We have 30+ buses and 4-wheel vehicles that provide pick-up and drop-off facilities with a comfortable travelling experience. The transport facility provided to the students is at minimal rates (included in the fee structure). Teachers are given proctorial duties both in the morning and evening for the safety of students. Our buses and cars cover distances of up to 70 KM (one way) to facilitate those who reside far from the university. "
        imageUrl="https://cdn.kalingauniversity.ac.in/campus-life/transport-3.webp"
        imageAlt="Transport Facility"
        showKnowMore={true}
        knowMoreLabel="Bus Route Details"
        knowMoreHref="https://cdn.kalingauniversity.ac.in/common/Bus+Route+Details.pdf"
      />
    </>
  )
}