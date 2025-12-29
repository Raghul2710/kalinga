"use client";

import React, { useEffect } from 'react'
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

const IQACPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
  }, []);

  const MentorIntroProps = [
    {
      id: 1,
      title: "IQAC",
      subtitle: "Message From Internal Quality Assurance Cell",
      department: "Ensuring continuous quality enhancement across the university.",
      quote:
        "The Internal Quality Assurance Cell (IQAC) at Kalinga University is committed to fostering a culture of excellence in teaching, learning, and research. Through systematic planning, monitoring, and feedback, IQAC ensures that quality benchmarks are met and continuously improved in every academic and administrative process.",
      message: [
        "Kalinga University's Internal Quality Assurance Cell is committed to maintaining and improving the quality of teaching practices, learning, and research work through continuous audits, teacher training programs, and feedback from students. Through open communication between university members and students, we keep a close watch on the overall performance of the institute. Our team members perform some of the main functions, like quality checks in academic and administrative activities, organise workshops and seminars, and closely monitor the university's infrastructure resources.",
        "The IQAC is committed to ensuring the effectiveness of the curriculum in terms of industry requirements and technology through its regular updation and evaluation. We also ensure compliance with the accreditation standards to maintain the credibility of the university. With all these measures, the IQAC of KU becomes one of the most important components that meet institutional progress and enrich its students' educational experience.",
      ],
      logos: [
        {
          src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/naac.webp",
          alt: "NAAC",
          name: "NAAC",
          width: 120,
          height: 80
        },
        {
          src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/nirf.webp",
          alt: "NIRF",
          name: "NIRF",
          width: 120,
          height: 80
        }
      ],
      contentWrapperClassName: "lg:!pt-0",
    },
  ];

  const publicationStats = [
    {
        id: 1,
        title: "Publications",
        value: "100+",

    },
    {
      id: 2,
      title: "Journals",
      value: "50+",
    },
    {   
      id: 3,
      title: "Books",
      value: "30+",
    },
    {
      id: 4,
      title: "Patents",
      value: "10+",
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