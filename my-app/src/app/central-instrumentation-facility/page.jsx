"use client";

import React from 'react'
import MainIntro from '../components/about/main_intro'
import VisionMission from '../components/about/vision-mission'
import ImageListItem from '../components/ccrc/imagelistitem'
import OurEquipmentSlider from '../components/cif/our_equipment_slider'
import CifYoutubeCallSection from '../components/cif/youtube_call_section'
import QuickLinks from '../components/general/quick_links'
import ContactSection from '../components/cif/contact_section'
import CareerApplicationForm from '../components/careers/CareerApplicationForm'
import Gallery from '../components/general/gallery'
import AdmissionCareer from '../components/general/admission_cta'
import Testimonials from '../components/home/Testimonials'
import OpenPositions from '../components/careers/OpenPositions';
import SampleTesting from '../components/cif/sample_testing';
import ProgramsTabs from '../components/cif/programs_tabs';
// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/about-banner.webp",
  pageTitle: "Central Instrumentation Facility",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Central Instrumentation Facility', href: '/central-instrumentation-facility' }
  ]
};

// Register breadcrumb data globally
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}

const CentralInstrumentationFacilityPage = () => {
  
  const quickLinks = [
    {
      id: 1,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      title: "Advanced Instrumentation Access",
      description: "CIF at KU offers access to modern instruments that support advanced research work that needs high precision across multiple disciplines.",
    },
    {
      id: 2,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      title: "Quick And Reliable Results",
      description: "Our time-tested machines minimise the time in delivering outcomes while maintaining accuracy and consistency in every analysis.",
    },
    {
      id: 3,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      title: "Customised Research Solutions",
      description: "To help researchers with diverse academic and industry needs, we provide personalised research support and guidance in complex data analysis and sample testing.",
    },
    {
      id: 4,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      title: "Skill Development Programs",
      description: "We conduct workshops, certification courses, and training programs to promote research culture apart from offering access to instruments.",
    },
    {
      id: 5,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      title: "Dedicated CIF Experts",
      description: "Our committed research faculty members and coordinators work rigorously to provide researchers with complete guidance and support.",
    },
    {
      id: 6,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      title: "Collaborative Research Partnerships",
      description: "We partner with researchers across various industries to work on a joint project and produce impactful research results.",
    },
  ]
  const items = [
    {
      text: "To motivate students to pursue research work by providing them with highly advanced instruments.",
    },
    {
      text: "To assist research scholars, faculty members, and UG/PG/PhD students in their projects or dissertations as part of their curriculum.",
    },
    {
      text: "To promote academics and industry collaboration.",
    },
    {
      text: "To provide reliable research outcomes that can be used for patenting and publishing.",
    },
    {
      text: "To analyse samples of researchers for KU and other institutes.",
    },
    {
      text: "To sign MoUs with organisations and industries for collaborative research work.",
    },
    {
      text: "To provide training and guidance on how to operate a machine, data collection, and data analysis.",
    },
    {
      text: "To organise hands-on training programs, workshops, seminars, conferences, and symposia.",
    },
    {
      text: "To conduct certification programs in advanced instrumentation technologies.",
    },
    {
      text: "To create networking opportunities with research organisations for collaborative growth.",
    },
  ];

  const cifTestimonials = [
    {
      id: 1,
      name: "Sandeep Rajak",
      role: "Dr. C. V. Raman Institute of Pharmacy, Kota, Bilaspur, CG",
      quote:"Thank you for a great training session. Great presentation style with lots of opportunities to ask questions and connect them with real-life examples, which all made for an enjoyable and informative training.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/CIF/chart+(4).webp",
      theme: "orange"
    },
    
    {
      id: 2,
      name: "Priya Jyoti",
      role: "Dr. C. V. Raman University, Kargi Road, Kota, Bilaspur, CG",
      quote: "I believe that the environment created by the teachers and all the staff was excellent during the training process. They helped a lot throughout the program, and I am really thankful to all the teachers for their immense support and guidance.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/CIF/chart+(3).webp",
      theme: "red"
    },
    {
      id: 3,
      name: "Twinkle Sharma",
      role: "Dr. C. V. Raman Institute of Pharmacy, Kota, Bilaspur, CG",
      quote: "The training session was presented in an enthusiastic way. The content can be related not only to theories but also to events and situations in daily life. I can highly recommend these training sessions. Thank you!!",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/CIF/chart+(7).webp",
      theme: "amber"
    },
    {
      id: 4,
      name: "Mumuksha Yadav",
      role: "Govt. Nagarjuna Post Graduate College of Science, Raipur, Chhattisgarh",
      quote: "It was a good experience for me, I learnt so many things from the workshop. I attended the workshop held on the HPLC biochemistry analyser, and so on. I also mentioned that the resource persons are knowledgeable and explain both practical and theoretical parts.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/CIF/chart+(1).webp",
      theme: "amber"
    }
  ];

  return (
    <>
    <MainIntro 
    title="About the Central Instrumentation Facility"
    description={[
      "To fulfil the research needs in science and technology at a higher level, Central Instrumentation Facility labs are established at Kalinga University for students, faculty members, and research scholars. A wide range of advanced instruments, including an X-Ray Diffractometer (XRD), 3D Printer, Bio-Chemistry Analyser, and many more, are available for in-depth experimentation work under one roof. We also welcome researchers from other universities, organisations, and NGOs, promoting collaboration across different departments.",
      "Managed by a team of technical experts, KU ensures that researchers are well-supported through hands-on training programs and workshops, which not only teach them how to operate an instrument but also ways to analyse and manage data effectively. We aim to expand our sophisticated list of machines to become a National Leader in research excellence."
    ]}
    imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-+intro.webp"
    imageAlt="Central Instrumentation Facility"
    showKnowMore={true}
    initialVisibleParagraphs={1}
    />
    <VisionMission
      visionTitle="Vision"
      missionTitle="Mission"
      visionText="To position our Central Instrumentation Facility at the top in research standards in the field of basic and applied sciences. The aim is to facilitate researchers with high-end tools and technologies so that they can explore new horizons and address complex challenges. "
      missionText="To build a resource-rich environment where researchers can work with modern instruments, receive technical guidance, and produce impactful research outcomes that can be published in reputed journals."
      imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
      imageAlt="Central Instrumentation Facility"
      showImage={false}
      className="bg-white"
    />
    <ImageListItem
      items={items}
      imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/CIF/cif-objectives+(1).webp"
      title="Objectives Of Our CIF"
      description="Explore state-of-the-art instruments that support advanced research across disciplines."
      buttonText="Read More"
      className="!bg-[var(--light-gray)]"
      textClassName="text-[var(--foreground)]"
      headingClassName="text-[var(--foreground)]"
    />
    <OpenPositions 
        title="Hands-On Training Programs 2025-26" 
        subtitle=""
        description=""
        useCourseCardLayout={true}
        initialVisibleCount={3}
        positions={[
          {
            title: "Google SketchUp for 3D Developments",
            startDate: "20 - 09 - 2025",
            price: "INR 1,000/-",
            applications: "Architecture & Construction, Interior Design, Product Prototyping, Landscape Design, Urban Planning, Engineering Projects",
            skills: [
              "Project visualisation",
              "3D Modelling",
              "texturing",
              "rendering",
              "layouts",
              "material mapping",
              "shadow effects",
              "professional project presentation"
            ],
            participants: "Civil Engineering, Interior Design, Product Design, or other related fields",
            resourcePerson: "Ar. Jayant Agrawal",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-2.webp",
            imageAlt: "Google SketchUp Course",
            knowMoreButton: "Know More",
            registrationButton: "Registration Now",
            registrationLink: "https://forms.gle/azFEvsHhhg12uFtu5"
          },
          {
            title: "SEM & Microscopy",
            startDate: "27 - 09 - 2025",
            price: "INR 1,000/-",
            applications: "Material Science & Engineering, Nanotechnology Research, Biomedical & Life Sciences, Forensic Science, Electronics Manufacturing",
            skills: [
              "SEM Principles",
              "Sample Preparation Methods",
              "Elemental Composition Analysis",
              "Image Capturing"
            ],
            participants: "Biotechnology, Material Science, Physics, and Engineering Students, Researchers, Industry Professionals",
            resourcePerson: "Dr. Abhishek Kumar Pandey",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-2.webp",
            imageAlt: "SEM & Microscopy Course",
            knowMoreButton: "Know More",
            registrationButton: "Registration Now",
            registrationLink: "https://forms.gle/WJCVBNZNoYPzeZUG9"
          },
          {
            title: "Mastering the Art of Literature Review: A Hands-On Training For Aspiring Researchers",
            startDate: "04-10-2025",
            price: "INR 1,000/-",
            applications: "Research Proposal Development, Identifying Research Gaps, Systematic Literature Reviews, Publication & Journal Writing",
            skills: [
              "Advanced Literature Search Techniques",
              "Evaluation of Sources",
              "Citation Tools",
              "Structuring Literature",
              "Best Practices"
            ],
            participants: "Any undergraduate, postgraduate, or PhD Student, Research Scholars, Faculty Members, and Industry Professionals",
            resourcePerson: "Dr. Azim Khan",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-2.webp",
            imageAlt: "Literature Review Course",
            knowMoreButton: "Know More",
            registrationButton: "Registration Now",
            registrationLink: "https://forms.gle/kJNVJbsYwKK72B2J9"
          },
          {
            title: "Stock Market Trading",
            startDate: "08 - 11 - 2025",
            price: "INR 1,000/-",
            applications: "Personal Investments, Wealth Management, Fintech & Banking Sector, Corporate Finance, Financial Consultancy Roles",
            skills: [
              "Stock Market Basics",
              "Portfolio Building",
              "Live Trading Strategies",
              "Entry and Exit",
              "Risk Management",
              "Technical Knowledge"
            ],
            participants: "Students (From any Academic Background), Professionals, Startup Founders, Business Owners, Investors, and Traders",
            resourcePerson: "Dr. Shinki K. Pandey, Dr. Deepti Pattnaik",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-2.webp",
            imageAlt: "Stock Market Trading Course",
            knowMoreButton: "Know More",
            registrationButton: "Registration Now",
            registrationLink: "https://surli.cc/vxybhb"
          },
          {
            title: "Artificial Intelligence (AI) for Future Teachers",
            startDate: "15-11-2025",
            price: "INR 1,000/-",
            applications: "Smart Classrooms, Personalised Learning, Automated Assessment, Performance Analysis, Educational Content Creation",
            skills: [
              "AI Fundamentals",
              "Hands-on Training with AI Tools",
              "AI-Powered Teaching Methods",
              "Interpreting AI Information",
              "Creating Interactive Learning Content",
              "Ethical Use of AI in Education"
            ],
            participants: "Aspiring Teachers, School & College Teachers, EdTech Enthusiasts",
            resourcePerson: "Dr. Shradha Verma",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-2.webp",
            imageAlt: "AI for Future Teachers Course",
            knowMoreButton: "Know More",
            registrationButton: "Registration Now",
            registrationLink: "https://forms.gle/wu14sWWTFw2x7Jji8"
          },
          {
            title: "Protein Estimation & Biochemistry Analyser",
            startDate: "22 - 11 - 2025",
            price: "INR 1,000/-",
            applications: "Clinical Diagnostics, Pharmaceutical Research, Food and Beverage Industry, Biotechnology, Agricultural and Veterinary Sciences",
            skills: [
              "Protein Quantification Techniques",
              "Biochemical Assay Handling",
              "Enzyme Activity Measurement",
              "Analyser Operation"
            ],
            participants: "Biotechnology, Pharmacy, Biochemistry, Microbiology, Life Sciences, Researchers, Industry Professionals, Healthcare Professionals",
            resourcePerson: "Dr. Manoj Singh & Dr. Abhishek Ku. Pandey",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-2.webp",
            imageAlt: "Protein Estimation Course",
            knowMoreButton: "Know More",
            registrationButton: "Registration Now",
            registrationLink: "https://forms.gle/wBik5u8s8PqDGpH18"
          },
          {
            title: "Entrepreneurship in Biotechnology",
            startDate: "17 - 01 - 2026",
            price: "INR 1,000/-",
            applications: "Biotech Startups, Healthcare and Phara Ventures, Agricultural and Food Biotechnology, Environmental Biotechnology, Global Biotech Ecosystem",
            skills: [
              "Identify and Develop Innovative Solutions for Biotech-Based Problems",
              "Build Sustainable Business Models",
              "Product Development and Commercialisation"
            ],
            participants: "Biotechnology, Pharmacy, Life Sciences, and MBA Students, Aspiring Entrepreneurs, Researchers, Industry Professionals",
            resourcePerson: "Prof. R. Shridhar",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-2.webp",
            imageAlt: "Entrepreneurship in Biotechnology Course",
            knowMoreButton: "Know More",
            registrationButton: "Registration Now",
            registrationLink: "https://forms.gle/etCwbWopxmboF4366"
          },
          {
            title: "3D Printing",
            startDate: "31 - 01 - 2026",
            price: "INR 1,000/-",
            applications: "Rapid Prototyping, Medical Implants, Automotive Design, Industrial Manufacturing Solutions",
            skills: [
              "Introduction to 3D Printing Technologies",
              "CAD Modelling",
              "Material Selection",
              "Post-Processing Techniques",
              "Design Optimisation"
            ],
            participants: "Engineering, Architecture, Design Students, Product Designers, Researchers, Industry Professionals",
            resourcePerson: "Dr. V. C. Jha, Mr. Swapnil Shukla",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-2.webp",
            imageAlt: "3D Printing Course",
            knowMoreButton: "Know More",
            registrationButton: "Registration Now",
            registrationLink: "https://forms.gle/x3wqSGyN3JVVSGkM9"
          },
          {
            title: "Molecular Techniques (PCR, Electrophoresis, UV Transilluminator)",
            startDate: "07 - 02 - 2026",
            price: "INR 1,000/-",
            applications: "Genetic Research, Clinical Diagnostics, Forensic Analysis, Drug Discovery Studies, Industrial Research",
            skills: [
              "Polymerase Chain Reaction Techniques",
              "Gel Electrophoresis & DNA Separation",
              "UV Transilluminator Handling",
              "Molecular Data Interpretation",
              "DNA & RNA Extraction and Quantification"
            ],
            participants: "Biotechnology, Microbiology, Genetics, Molecular Biology, and Pharmacy Students, Researchers, Healthcare Professionals, Pharmacy Professionals, Forensic Experts",
            resourcePerson: "Dr. Sushma Dubey",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-2.webp",
            imageAlt: "Molecular Techniques Course",
            knowMoreButton: "Know More",
            registrationButton: "Registration Now",
            registrationLink: "https://forms.gle/RaXN6W95vH4QbCYd9"
          },
          {
            title: "Electrical Vehicle",
            startDate: "14-02-2026",
            price: "INR 1,000/-",
            applications: "EV Design and Development, Charging Infrastructure, Battery Technology, EV Maintenance",
            skills: [
              "Fundamentals of EVs",
              "Hands-On Training with EV Components",
              "Charging Systems",
              "Motor Control",
              "Safety Standards"
            ],
            participants: "Electrical, Mechanical, Electronics, and Automotive Engineering Students, Industry Professionals",
            resourcePerson: "Mr. Gaurav Tamrakar",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-2.webp",
            imageAlt: "Electrical Vehicle Course",
            knowMoreButton: "Know More",
            registrationButton: "Registration Now",
            registrationLink: "https://forms.gle/bjz6uvkksWoivMBH8"
          },
          {
            title: "Advanced Instrumentation & Water Analysis",
            startDate: "21 - 02 - 2026",
            price: "INR 1,000/-",
            applications: "Environmental Monitoring, Industrial Labs, Chemical Industries, Water Resource Management, R&D",
            skills: [
              "Water Quality Testing",
              "Spectroscopy Techniques",
              "Equipment Calibration",
              "Data Collection and Interpretation"
            ],
            participants: "Chemistry, Biotechnology, Environmental Science, and Chemical Engineering Students, Research Scholars, Industry Professionals",
            resourcePerson: "Dr. Sandip Prasad Tiwari & Dr. Preeti Pandey",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-2.webp",
            imageAlt: "Advanced Instrumentation Course",
            knowMoreButton: "Know More",
            registrationButton: "Registration Now",
            registrationLink: "https://forms.gle/RcuhamUeTnxTCkSNA"
          },
          {
            title: "High-Performance Liquid Chromatography",
            startDate: "28 - 02 - 2026",
            price: "INR 1,000/-",
            applications: "Pharmaceutical Quality Control, Forensic Science, Food Safety, Biotechnology, Environmental Monitoring, R&D",
            skills: [
              "Principles of HPLC",
              "Instrument Setup",
              "Sample Preparation",
              "Method Development",
              "and Data Interpretation Techniques"
            ],
            participants: "Pharmacy, Forensic Science, Food Technology, Biotechnology, and Chemistry Students, Research Scholars, Industry Professionals",
            resourcePerson: "Ms. Khushboo Gupta",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-2.webp",
            imageAlt: "HPLC Course",
            knowMoreButton: "Know More",
            registrationButton: "Registration Now",
            registrationLink: "https://forms.gle/PUCnH3ckUDLnuuQk9"
          },
          {
            title: "Microsoft Power Business Intelligence",
            startDate: "14 - 03 - 2026",
            price: "INR 1,000/-",
            applications: "Business Analytics Performance Tracking, Data-Driven Decision Making, KPI Monitoring",
            skills: [
              "Power BI Tools",
              "Data Visualisation",
              "Automation",
              "Dashboard Designing",
              "Business Intelligence Integration"
            ],
            participants: "Management, IT, and Commerce, Business Analysts, Business Consultants, Industry Professionals, Research Scholars",
            resourcePerson: "Dr. Shinki K. Pandey, Dr. Deepti Pattnaik",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-2.webp",
            imageAlt: "Power BI Course",
            knowMoreButton: "Know More",
            registrationButton: "Registration Now",
            registrationLink: "https://surl.lu/gcokdr"
          },
          {
            title: "X-Ray Diffractometer",
            startDate: "11 - 04 - 2026",
            price: "INR 1,000/-",
            applications: "Crystal Structure Analysis, Nanotechnology, Material Testing, and Geological Research",
            skills: [
              "XRD Principles",
              "Diffraction Pattern Analysis",
              "Sample Preparation",
              "Phase Identification Techniques"
            ],
            participants: "Physics, Chemistry, Material Science, and Geology Students, Industry Professionals, Research Scholars",
            resourcePerson: "Dr. Swapnil Jain, Mr. Abhishek Sahu",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/cif-2.webp",
            imageAlt: "X-Ray Diffractometer Course",
            knowMoreButton: "Know More",
            registrationButton: "Registration Now",
            registrationLink: "https://forms.gle/gCgSQEyedH43aiBt7"
          }
        ]}
      />
    <OurEquipmentSlider />
    <CifYoutubeCallSection videoUrl="https://youtu.be/BrpxFN8iZeQ?si=_lm5M6SYKZjxVRvV" />
    <QuickLinks 
    title="What Do We Offer?"
    description=""
    links={quickLinks}
    titleClassName="text-white"
    />
    <SampleTesting />
    <ProgramsTabs />
    <ContactSection />
    <CareerApplicationForm
          heading="Application Form"
          description="Share your details to stay connected with Kalinga University, receive updates, and participate in alumni activities and events."
          backgroundClass="bg-[var(--button-red)]"
          hideTabs={true}
          submitLabel="Submit Alumni Details"
          useArrowSubmitButton={true}
          arrowSubmitVariant="white"
        />
    <Testimonials
        testimonials={cifTestimonials}
        className="bg-[var(--light-gray)] mt-16"
        subtitle="CIF Testimonials"
        title="Proudly Presenting the Remarkable Achievements of Kalinga University Alumni"
        titleClassName="!text-[var(--foreground)]"
        subtitleClassName="!text-[var(--button-red)]"
        subtitleTextColor="!text-[var(--button-red)]"
      />
    <Gallery />
    <AdmissionCareer />
    </>
  )
}

export default CentralInstrumentationFacilityPage