"use client";

import React from 'react'
import MainIntro from '../components/about/main_intro'
import PublicationGrid from '../components/research/publication-grid'
import DeptHeadIntro from '../components/department/dept_head_intro'
import ISOCertificateSection from '../components/iqac/iso_certificate_section'
import ContactSection from '../components/cif/contact_section'
import AdmissionCareer from '../components/general/admission_cta'
import IQACTabSection from '../components/iqac/iqac_tab_section'

// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/about-banner.webp",
  pageTitle: "Internal Quality Assurance Cell",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'IQAC', href: '/internal-quality-assurance-cell' }
  ]
};

// Register breadcrumb data globally
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}

const IQACPage = () => {

  const MentorIntroProps = [
    {
      id: 1,
      title: "IQAC",
      subtitle: "Internal Quality Assurance Cell",
      department: "Ensuring continuous quality enhancement across the university.",
      quote:
        "The Internal Quality Assurance Cell (IQAC) at Kalinga University is committed to fostering a culture of excellence in teaching, learning, and research. Through systematic planning, monitoring, and feedback, IQAC ensures that quality benchmarks are met and continuously improved in every academic and administrative process.",
      message: [
        "The Internal Quality Assurance Cell (IQAC) functions as a nodal agency for coordinating and implementing quality-related initiatives within Kalinga University. It facilitates the adoption of best practices, prepares and maintains institutional documentation for accreditation and ranking, and promotes a learner-centric environment.",
        "IQAC regularly organises workshops, orientation programs, and review meetings to ensure that departments align with institutional goals of excellence. It also collects feedback from stakeholders—students, faculty, alumni, and industry partners—to drive evidence-based improvements in curricula, evaluation methods, research activities, and support services.",
      ],
    },
  ];

  const publicationStats = [
    {
        id: 1,
        title: "Publications",
        value: 100,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Journals",
      value: 50,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {   
      id: 3,
      title: "Books",
      value: 30,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "Patents",
      value: 10,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]
  return (
    <>
    <MainIntro 
    title="About IQAC"
    description="In pursuance of the National Action Plan of the National Assessment and Accreditation Council (NAAC) for performance evaluation, assessment and accreditation, and quality upgradation of institutions of higher education, NAAC proposes that every accredited institution should have an Internal Quality Assurance Cell (IQAC) as a post-accreditation quality sustenance measure. With this aim, Kalinga University established its internal quality assurance cell on 5th July 2016."
    imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/banner.webp"
    imageAlt="IQAC"
    descriptionClassName="text-[var(--foreground)]"
    />
    <PublicationGrid stats={publicationStats} />
    <DeptHeadIntro items={MentorIntroProps} />
    <IQACTabSection />
    <ISOCertificateSection />
    <ContactSection />
    <AdmissionCareer />
    </>
  )
}

export default IQACPage