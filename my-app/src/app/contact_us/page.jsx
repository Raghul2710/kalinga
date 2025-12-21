"use client";

import React from "react";
import GetInTouch from "@/app/components/contact_us/get_in_touch";
import AdmissionCareer from "@/app/components/general/admission_cta";
import FollowUs from "@/app/components/contact_us/follow_us";
import Map from "@/app/components/contact_us/map_section";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
  pageTitle: "Contact Us",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Contact Us', href: '/contact_us' }
  ]
};

// Register breadcrumb data globally
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}

const ContactUs = () => {
  return (
    <>
      <GetInTouch />
      <FollowUs />
      <Map />
      <AdmissionCareer />
    </>
  );
};

export default ContactUs;