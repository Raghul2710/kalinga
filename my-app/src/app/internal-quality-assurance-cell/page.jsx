"use client";

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import MainIntro from '../components/about/main_intro'
import DeptHeadIntro from '../components/department/dept_head_intro'
import ISOCertificateSection from '../components/iqac/iso_certificate_section'
import ContactSection from '../components/cif/contact_section'
import AdmissionCareer from '../components/general/admission_cta'
import IQACTabSection from '../components/iqac/iqac_tab_section'
import QuickLinks from "../components/general/quick_links";
import StudentActivities from "@/app/components/department/student_activities";
import Gallery from "@/app/components/general/gallery";
import TwoLogo from "../components/iqac/two-logo";
import CareerPath from '@/app/components/course/career_path'
const IQACPage = () => {
  const pathname = usePathname();



  const MentorIntroProps = [
    {
      id: 1,
      title: "Dr. Vijayalaxmi Biradar",
      subtitle: "A Message From the Director",
      department: "Director, IQAC",
      quote:
        "Quality is built daily through reflection, feedback, and continuous improvement.",
      message: `
        <p>Kalinga University's Internal Quality Assurance Cell is committed to maintaining and improving the quality of teaching practices, learning, and research work through continuous audits, teacher training programs, and feedback from students. Through open communication between university members and students, we keep a close watch on the overall performance of the institute. Our team members perform some of the main functions, like quality checks in academic and administrative activities, organise workshops and seminars, and closely monitor the university's infrastructure resources.</p>
        
        <p>The IQAC is committed to ensuring the effectiveness of the curriculum in terms of industry requirements and technology through its regular updation and evaluation. We also ensure compliance with the accreditation standards to maintain the credibility of the university. With all these measures, the IQAC of KU becomes one of the most important components that meet institutional progress and enrich its students' educational experience.</p>
      `,
      logos: [
        {
          src: "https://cdn.kalingauniversity.ac.in/accreditation/nirf-new.webp",
          alt: "NAAC",
          name: "NAAC",
          width: 1000,
          height: 80
        },
        {
          src: "https://cdn.kalingauniversity.ac.in/accreditation/naac-new.webp",
          alt: "NIRF",
          name: "NIRF",
          width: 150,
          height: 80
        }
      ],
      contentWrapperClassName: "lg:!pt-0",
    },
  ];



  const relatedInitiativesLinks = [
    {
      id: 1,
      icon: "",
      title: "UBA",
      description: "Unnat Bharat Abhiyan (UBA) was launched by the Ministry of Education in 2014, which aims to address pressing challenges of rural India and connect them with higher education institutions for their holistic growth and development. Inspired by Gandhiji’s vision in Hind Swaraj, UBA supports the growth of self-sustained villages using eco-friendly and community-based technologies. The conceptualisation of Unnat Bharat Abhiyan started with the initiative of a group of dedicated faculty members of the Indian Institute of Technology (IIT) Delhi, working for a long time in the area of rural development and appropriate technology. India’s 70% of the population lives in rural areas, and this initiative will meet their needs of life, like food, energy, sanitation, education, health, and livelihood, reducing their migration towards their cities and improving growth and job opportunities in their areas.",
      href: "/unnat-bharat-abhiyan"
    },
    {
      id: 2,
      icon: "",
      title: "IIC",
      description: "In 2018, the Ministry of Education (MoE), through the MoE’s Innovation Cell (MIC), launched the Institution’s Innovation Council (IIC) in collaboration with AICTE for Higher Educational Institutions (HEIs) to promote the culture of innovation and start-up ecosystem in educational institutions. The main objective of IIC is to engage a large number of faculty members and students in various entrepreneurship and innovation-related activities. It includes IPR, Ideathon, Proof of Concept Development, Design Thinking, and project handling and management at the pre-incubation level. The IIC model enables HEIs to address key challenges such as limited people’s involvement, occasional or unplanned Innovation and Entrepreneurship (I&E) activities, limited engagement of top leaders, poor coordination, weak resource planning, and underutilization of students’ creative potential.",
      href: "/institution-innovation-council"
    },
    {
      id: 3,
      icon: "",
      title: "Kalinga Journal",
      description: "Kalinga Journal is a peer-reviewed academic publication that showcases research, scholarly articles, and academic contributions from faculty members and researchers, promoting academic excellence and knowledge dissemination.",
      href: "/research"
    }
  ];
  const skillsContent = {
    title: "Other Quality Initiatives",
    description: "",
    careers: [
      // {
      //   id: 1,
      //   title: "Other Quality inititaives",
      //   description: "",
      //   imageSrc: "https://cdn.kalingauniversity.ac.in/IQAC/service.svg",
      //   imageAlt: "Other Quality inititaives",
      // },
      {
        id: 2,
        title: "Setting a robust Feedback System",
        description: "",
        imageSrc: "https://cdn.kalingauniversity.ac.in/IQAC/Feedback+System.svg",
        imageAlt: "Setting a robust Feedback System",
      },
      {
        id: 3,
        title: "Setting an Audit System",
        description: "",
        imageSrc: "https://cdn.kalingauniversity.ac.in/IQAC/Audit+System.svg",
        imageAlt: "Setting an Audit System",
      },
      {
        id: 4,
        title: "Applying for Rankings",
        description: "",
        imageSrc: "https://cdn.kalingauniversity.ac.in/IQAC/ranking.svg",
        imageAlt: "Applying for Rankings",
      },
      {
        id: 5,
        title: "Workshops/Seminars",
        description: "",
        imageSrc: "https://cdn.kalingauniversity.ac.in/IQAC/Seminars.svg",
        imageAlt: "Workshops/Seminars",
      },
      {
        id: 6,
        title: "Building a POCO Software",
        description: "",
        imageSrc: "https://cdn.kalingauniversity.ac.in/IQAC/POCO+Software.svg",
        imageAlt: "Building a POCO Software",
      },
    ]
  };
  return (
    <>
      <MainIntro
        title="About IQAC"
        description={["In pursuance of the National Action Plan of the National Assessment and Accreditation Council (NAAC) for performance evaluation, assessment and accreditation, and quality upgradation of institutions of higher education, NAAC proposes that every accredited institution should have an Internal Quality Assurance Cell (IQAC) as a post-accreditation quality sustenance measure. With this aim, Kalinga University established its internal quality assurance cell on 5th July 2016.",
          "The primary motto of our IQAC is to continuously monitor and improve the quality of every activity and propose new improvements with the cooperation of all the stakeholders. It will channelise the overall performance of the institute towards academic excellence. Our IQAC produces quality reports on various institutional activities, enabling committee members to take rational and informed decisions for continuous improvement."
        ]}
        imageUrl="https://cdn.kalingauniversity.ac.in/IQAC/banner.webp"
        imageAlt="IQAC"
        descriptionClassName="text-[var(--foreground)]"
        sectionClassName="bg-white !py-0 !pb-0"
      />
      <TwoLogo logos={MentorIntroProps[0].logos} />
      {/* <PublicationGrid stats={publicationStats} /> */}
      <DeptHeadIntro items={MentorIntroProps} className="pt-10 pb-20" />
      <CareerPath
        title={skillsContent.title}
        description={skillsContent.description}
        careers={skillsContent.careers}
      />
      <IQACTabSection />
      <ISOCertificateSection description="Kalinga University is committed to maintaining the highest standards of quality in all its academic and administrative processes. Our ISO 9001:2015 certification demonstrates our dedication to continuous improvement and excellence in education, ensuring that we meet international quality benchmarks and provide the best possible learning experience to our students" />
      {/* <QuickLinks
        slider={true}
        links={relatedInitiativesLinks}
        title="Related Initiatives"
        titleClassName="!text-white"
        showReadMore={true}
        showDescriptionReadMore={true}
        description=""
      /> */}

      <StudentActivities
        title="News & Events"
        fallbackToGlobal={true}
      />
      <Gallery title="Glimpses" />
      <ContactSection
        mail="iqac@kalingauniversity.ac.in"
        phone=""
        address=""
      />
      <AdmissionCareer />
    </>
  )
}

export default IQACPage