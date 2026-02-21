"use client";

import React from 'react'
import { useEffect } from 'react'
import LibraryIntro from '../components/library/library-intro'
import LibraryHeadMessage from '../components/library/library-head-intro'
import LibraryGrid from '../components/library/library-feature'
import LibraryResource from '../components/library/library-resource'

import LibraryEAccess from '../components/library/library-login'
import Gallery from '../components/campuslife/campusgallery';
import AdmissionCareer from '../components/general/admission_cta'
import RaipurVideoSection from '../components/about-raipur/raipurvideo';
import StudentActivities from "@/app/components/department/student_activities";

const page = () => {


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

      <LibraryIntro />
      <RaipurVideoSection
        videoId="llHISVPRkxI"
        thumbnail="https://kalinga-university.s3.amazonaws.com/kalinga_backend/files/department/about/FacultyofCommerceAndMangement-AboutDept.webp"
        title="Explore the Vast World of Knowledge: Tour of Kalinga University Library"
        description="" // optional
        alt="Video thumbnail"
        heightClass="h-[380px] sm:h-[420px] md:h-[520px]" // optional, keep default
        className="" // optional wrapper class
      />
      <LibraryGrid />
      <LibraryHeadMessage />
      <LibraryResource />
      <RaipurVideoSection
        videoId="hdL0Eeb6Moc"
        thumbnail="https://kalinga-university.s3.ap-south-1.amazonaws.com/library/student-experience-library.webp"
        title="Student highlights quality education and library"
        description="" // optional
        alt="Video thumbnail"
        heightClass="h-[380px] sm:h-[420px] md:h-[520px]" // optional, keep default
        className="" // optional wrapper class
      />
      <StudentActivities
        title="Events & Activities"
        subtitle="Experience Campus Life Beyond Academics"
        categoryId={2}
        fallbackToGlobal={true}
      />
      <LibraryEAccess />
      <Gallery />
      <AdmissionCareer />
    </>
  )
}

export default page