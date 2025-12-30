"use client"
import React from 'react'
import Hostelmainintro from '../components/hostel/hostelmainintro'
import AutoBreadcrumb from '../components/layout/BreadcrumbData'
import Hostelgrid from '../components/hostel/hostelgrid';
import Hostelfacilities from '../components/hostel/hostelfacilities';
import Hostelwarden from '../components/hostel/hostelwarden';
import AdmissionCareer from '../components/general/admission_cta';
import HostelFeeTabs from '../components/hostel/hosteltabs';
import Hostelrules from '../components/hostel/hostelrules';

function Hostel() {
    const breadcrumbData = {
        heroImage:
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/hostel.webp",
        pageTitle: "Hostel",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Hostel", href: "/hostel" },
        ],
    };
    return (
        <div>
            <style jsx global>{`
  .absolute.inset-0 > img {
    object-position: center 25% !important;
  }

  @media (max-width: 768px) {
    .absolute.inset-0 > img {
      object-position: center 5% !important;
    }
  }
`}</style>
            <AutoBreadcrumb data={breadcrumbData} />
            <Hostelmainintro />
            <Hostelgrid />
            <Hostelfacilities />
            <Hostelwarden />
            <HostelFeeTabs />
            <Hostelrules />
            <AdmissionCareer />
        </div>
    )
}

export default Hostel