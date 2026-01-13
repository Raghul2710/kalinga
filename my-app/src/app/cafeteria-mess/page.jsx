"use client";
import React from 'react'
import AboutCafeteria from '../components/cafeteria-mess/about-cafeteria-mess'
import AdmissionCareer from '../components/general/admission_cta';
import CanteenMess from '../components/cafeteria-mess/cafeteria-facility-mess';
import Page from '../components/campuslife/featuresection';

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/canteen-and-mess/canteen+mess+(6).webp",
  pageTitle: "Cafeteria & Mess",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Cafeteria & Mess", href: "/cafeteria-mess" },
  ],
};

if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

const page = () => {

  return (
    <>
      <style jsx global>{`
      .absolute.inset-0 > img {
        object-position: center 40% !important;
      }
    
      @media (max-width: 768px) {
        .absolute.inset-0 > img {
          object-position: center 5% !important;
        }
      }
    `}</style>
      <AboutCafeteria />
      <CanteenMess />
      <AdmissionCareer />

    </>
  )
}

export default page