"use client";

import React from 'react'
import { useEffect } from 'react'
import LibraryIntro from '../components/library/library-intro'
import LibraryHeadMessage from '../components/library/library-head-intro'
import LibraryGrid from '../components/library/library-feature'
import LibraryResource from '../components/library/library-resource'

import LibraryEAccess from '../components/library/library-login'

import AdmissionCareer from '../components/general/admission_cta'
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/Library-1.webp",
  pageTitle: "KU Library",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "KU Library", href: "/library" },
  ],
};
const page = () => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
  }, []);
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
      <LibraryGrid />
      <LibraryHeadMessage />
      <LibraryResource />
      <LibraryEAccess />
      <AdmissionCareer />
    </>
  )
}

export default page