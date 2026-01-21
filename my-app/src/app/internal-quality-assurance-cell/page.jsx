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
      title: "Dr. Vijayalaxmi Biradar",
      subtitle: "A Message From the Director",
      department: "Director, IQAC",
      quote:
        "Quality is built daily through reflection, feedback, and continuous improvement.",
      message: [
        "Kalinga University's Internal Quality Assurance Cell is committed to maintaining and improving the quality of teaching practices, learning, and research work through continuous audits, teacher training programs, and feedback from students. Through open communication between university members and students, we keep a close watch on the overall performance of the institute. Our team members perform some of the main functions, like quality checks in academic and administrative activities, organise workshops and seminars, and closely monitor the university's infrastructure resources.",
        "The IQAC is committed to ensuring the effectiveness of the curriculum in terms of industry requirements and technology through its regular updation and evaluation. We also ensure compliance with the accreditation standards to maintain the credibility of the university. With all these measures, the IQAC of KU becomes one of the most important components that meet institutional progress and enrich its students' educational experience.",
        {
          type: 'section',
          title: 'Objectives Of IQAC',
          items: [
            'To ensure continuous improvement in the entire operations of the University.',
            'To build confidence among stakeholders, including students, parents, staff members, funding agencies, and society, regarding the dedication of the university towards quality and integrity.'
          ]
        },
        {
          type: 'section',
          title: 'Functions Of IQAC',
          items: [
            'To propose policies and strategies for significant contributions to the overall development of the University.',
            'To collect and organise feedback responses from students, faculty members, alumni, and recruiters to improve quality-related institutional processes.',
            'To develop and apply innovative practices in various programs/activities to enhance the educational standards.',
            'To check various parameters under academic and administrative activities through regular visits to classrooms and organising meetings with students and faculty members.',
            'To monitor class work and activities related to academics.',
            'To conduct periodic visits to different departments and do departmental audits.',
            'To verify and review the effectiveness of quality parameters.',
            'To implement suggestions that are put forward in the meetings by the committee members of the IQAC, after taking necessary approvals from the management.',
            'To review the teaching-learning processes and methods of operation from time to time.',
            'To document the various programs/activities that contribute to quality improvement and educational excellence.'
          ]
        },
        {
          type: 'section',
          title: 'Strategies Of IQAC',
          items: [
            'IQAC of Kalinga University will adopt a participatory approach among the staff of the University.',
            'IQAC proposes to meet the quality and effectiveness of all the functions of the university.',
            {
              text: 'IQAC will develop its mechanisms and procedures to:',
              subitems: [
                'Ensure timely, efficient, and progressive performance of academic, administrative, and financial tasks.',
                'Maintain relevance and standards of academic and research programs.',
                'Ensure equitable access and affordability of our academic programs for various sections of society.',
                'Optimise and integrate modern teaching and learning methodologies.',
                'Maintain a comprehensive Student Information System.',
                'Improve the transparency and credibility of evaluation procedures.',
                'Ensure the adequacy, maintenance, and functioning of the support systems and services.',
                'Improve research activities and networking with other institutions in India and abroad.'
              ]
            }
          ]
        },
        {
          type: 'section',
          title: 'Benefits Of IQAC',
          items: [
            'Brings clarity and focus to various institutional functions, improving the quality of higher education.',
            'Improves the coordination among various activities of the institute and establishes effective practices to maintain the standards.',
            'Provides a strong foundation for informed decision-making at every step.',
            'Promotes innovation and research activities for academic advancement.',
            'Enhances the internal communication among different departments and stakeholders to ensure transparency at all levels.'
          ]
        }
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
          src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/nirf-details.png",
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
      value: "510+",
    },
  ]
  return (
    <>
      <MainIntro
        title="About IQAC"
        description={["In pursuance of the National Action Plan of the National Assessment and Accreditation Council (NAAC) for performance evaluation, assessment and accreditation, and quality upgradation of institutions of higher education, NAAC proposes that every accredited institution should have an Internal Quality Assurance Cell (IQAC) as a post-accreditation quality sustenance measure. With this aim, Kalinga University established its internal quality assurance cell on 5th July 2016.",
          "The primary motto of our IQAC is to continuously monitor and improve the quality of every activity and propose new improvements with the cooperation of all the stakeholders. It will channelise the overall performance of the institute towards academic excellence. Our IQAC produces quality reports on various institutional activities, enabling committee members to take rational and informed decisions for continuous improvement."
        ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/banner.webp"
        imageAlt="IQAC"
        descriptionClassName="text-[var(--foreground)]"
      />
      {/* <PublicationGrid stats={publicationStats} /> */}
      <DeptHeadIntro items={MentorIntroProps} />
      <IQACTabSection />
      <ISOCertificateSection description="Kalinga University is committed to maintaining the highest standards of quality in all its academic and administrative processes. Our ISO 9001:2015 certification demonstrates our dedication to continuous improvement and excellence in education, ensuring that we meet international quality benchmarks and provide the best possible learning experience to our students" />
      <ContactSection />
      <AdmissionCareer />
    </>
  )
}

export default IQACPage