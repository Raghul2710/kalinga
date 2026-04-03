"use client"

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import RaipurMainIntro from '@/app/components/about-raipur/raipur_main_intro'
import NewRaipur from '@/app/components/about-raipur/new_raipur'
import Highlights from '@/app/components/about-raipur/highlights'
import AdmissionCareer from '../components/general/admission_cta'
import RaipurVideo from '../components/about-raipur/raipurvideo'
import Newraipurvideos from '../components/about-raipur/newraipurvideos'
import Gallery from '../components/general/gallery'

function page() {
  const pathname = usePathname();

  const raipurGalleryData = [
    {
      id: 1,
      image: "https://cdn.kalingauniversity.ac.in/about-raipur/gallery/raipur-images-1.jpg",
    },
    {
      id: 2,
      image: "https://cdn.kalingauniversity.ac.in/about-raipur/gallery/raipur-images-2.jpg",
    },
    {
      id: 3,
      image: "https://cdn.kalingauniversity.ac.in/about-raipur/gallery/raipur-images-3.jpg",
    },
    {
      id: 4,
      image: "https://cdn.kalingauniversity.ac.in/about-raipur/gallery/raipur-images-4.jpg",
    },
    {
      id: 5,
      image: "https://cdn.kalingauniversity.ac.in/about-raipur/gallery/raipur-images-5.jpg",
    },
  ];


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
      <RaipurMainIntro
        knowMoreLabel=''
        knowMoreHref='' />
      <RaipurVideo />
      <NewRaipur />
      <Newraipurvideos />
      <Highlights />
      <Gallery
        images={raipurGalleryData}
        title="Glimpses" paddingClassName="py-16" />
      <AdmissionCareer />
    </>
  )
}

export default page
