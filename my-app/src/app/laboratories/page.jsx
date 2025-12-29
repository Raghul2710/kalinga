"use client";

import { useLayoutEffect } from "react";
import MainIntro from "@/app/components/about/main_intro";
import FAQ from "@/app/components/general/faq"; // adjust path if your FAQ is elsewhere
import Gallery from "@/app/components/general/gallery";
import AdmissionCareer from "@/app/components/general/admission_cta";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/laboratories/laboratories-heroimage.webp", // (Cover Image - 1)
  pageTitle: "Laboratories",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Laboratories", href: "/laboratories" },
  ],
};

const aboutP1 =
  "Kalinga University has research labs, including the Central Instrumentation Facility (CIF), Language Lab, Business Lab, and computer Labs that will fulfil all the research needs by providing students and research scholars with comprehensive resources, tools, and technologies.";

const aboutP2 =
  "Experience practical learning like never before. Explore the advanced tools, instruments, and facilities of our labs across different fields of study, designed for you to experiment, explore, perform research, and obtain findings that will make you future-ready professionals.";

const labFaqItems = [
  {
    id: 1,
    question: "Faculty Of Science",
    answer: [
      "Fashion Design Lab",
      "Interior Designing Lab",
      "Zoology Lab",
      "Botany Lab",
      "Biotechnology Lab",
      "Chemistry Lab",
      "Physics Lab",
      "Bioinformatics Lab",
      "Biochemistry Lab",
      "Microbiology Lab",
      "Forensic Science Lab",
    ],
  },
  {
    id: 2,
    question: "Faculty Of Technology – Mechanical Engineering Lab",
    answer: [
      "Machine Drawing Lab",
      "Material Testing Lab",
      "Engineering Thermodynamics Lab",
      "Mechanical Measurement & Metrology Lab",
      "Fluid Mechanics Lab",
      "Thermodynamics Lab",
      "Kinematics of Machines Lab",
      "Numerical Analysis & Computer Programming Lab (C & C++)",
      "Machine Design Lab",
      "Computer-Aided Design Lab",
      "Dynamics of Machines Lab",
      "Fluid Machinery Lab",
      "Internal Combustion Engines Lab",
      "Energy Conversion Systems Lab",
      "Industrial Engineering Lab",
      "Automobile Engineering Lab",
      "Heat & Mass Transfer Lab",
      "Robotics Lab",
      "Refrigeration & Air Conditioning Lab",
      "Production Management Lab",
    ],
  },
  {
    id: 3,
    question: "Faculty Of Technology – Civil Engineering Lab",
    answer: [
      "Fluid Mechanics Lab",
      "Surveying Field Work Lab",
      "Materials Testing Lab",
      "Engineering Geology Lab",
      "Civil Engineering Drawing",
      "Transportation Engineering Lab",
      "Structural Engineering Drawing Lab",
      "Geotech Engineering Lab",
      "Numerical Methods and Computer Programming Lab",
      "Environmental Engineering Lab",
      "Concrete Lab",
      "Quantity Surveying and Cost Evaluation Lab",
      "Water Resources Engineering Drawing Lab",
      "Computer Applications in Civil Engineering Lab",
    ],
  },
  {
    id: 4,
    question: "Faculty Of Technology – Electrical Engineering Lab",
    answer: [
      "Basic Electronics Laboratory",
      "Electric Circuits Laboratory",
      "Electrical Machines Lab",
      "Electrical Workshop Laboratory",
      "EMMI Lab",
      "Analog Electronics",
      "DELD Lab",
      "Electronic Instrumentation Lab",
      "Integrated Circuits & Applications Lab",
      "Control System Lab",
      "Power System Analysis Lab",
      "Power System Protection & Switchgear Lab",
      "Power Electronics Lab",
      "Microprocessors Lab",
      "High Voltage Engineering Lab",
      "Electric Machine Design Lab",
      "Installation, Maintenance & Testing of Electrical Equipment Lab",
      "Utilisation of Electrical Energy Lab",
      "Computer Simulation Lab",
    ],
  },
  {
    id: 5,
    question: "Computer Science",
    answer: [
      "Basic Electronics Lab",
      "Data Structures Using C Lab",
      "Computer Organisation Lab",
      "Discrete Structure & Logic Lab",
      "Operating Systems Lab",
      "Microprocessor-Lab",
      "Python Language Programming Lab",
      "Principles of Communication System Lab",
      "Database Management System Lab",
      "Software Technology Lab",
      "Computer Networks Lab",
      "Computer Graphics Lab",
      "UNIX and SHELL Programming Lab",
      "Soft Computing Lab",
      "Network Programming Lab",
      "Artificial Intelligence & Expert Systems Lab",
      "Network Security Lab",
    ],
  },
  {
    id: 6,
    question: "Faculty of Information Technology",
    answer: ["Computer Lab"],
  },
  {
    id: 7,
    question: "Faculty of Education",
    answer: ["Teaching Aid Lab", "Psychology Lab", "Computer Lab (E.T. Lab)"],
  },
  {
    id: 8,
    question: "Faculty of Law",
    answer: ["Moot Court", "Legal Aid Clinic"],
  },
  {
    id: 9,
    question: "Faculty of Arts & Humanities",
    answer: ["Geography Lab", "Media Studio Lab"],
  },
  {
    id: 10,
    question: "Faculty of Commerce & Management",
    answer: ["Business Lab"],
  },
  {
    id: 11,
    question: "Faculty of Pharmacy",
    answer: [
      "Pharmaceutics - I, II, & III Lab",
      "Pharmaceutical Chemistry - I, II, & III Lab",
      "Pharmaceutical Analysis Lab",
      "Pharmacology - I, II, & III Lab",
      "Pharmacognosy Lab",
      "Central Instrument Room",
      "Machine Room",
      "Pharmacy Practice Lab",
    ],
  },
];

const galleryImages = [
  {
    id: 1,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/laboratories/laboratories-glimpse1.webp",
    alt: "Laboratories Glimpse 1",
  },
  {
    id: 2,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/laboratories/laboratories-glimpse2.webp",
    alt: "Laboratories Glimpse 2",
  },
  {
    id: 3,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/laboratories/laboratories-glimpse3.webp",
    alt: "Laboratories Glimpse 3",
  },
  {
    id: 4,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/laboratories/lab-1.webp",
    alt: "Laboratories Glimpse 4",
  },
  {
    id: 5,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/laboratories/lab-2.webp",
    alt: "Laboratories Glimpse 5",
  },
  {
    id: 6,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/laboratories/lab-3.webp",
    alt: "Laboratories Glimpse 6",
  }
];

export default function LaboratoriesPage() {
  useLayoutEffect(() => {
    if (typeof window !== "undefined") window.__breadcrumbData = breadcrumbData;
    return () => {
      if (typeof window !== "undefined") delete window.__breadcrumbData;
    };
  }, []);

  return (
    <main className="bg-white">


      {/* 1) Main Intro */}
      <MainIntro
        title="About Our Cutting-Edge Laboratories"
        description={[aboutP1, aboutP2]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/laboratories/laboratories-mainintro.webp"
        imageAlt="Laboratories"
        showKnowMore={true}
        knowMoreLabel="Read More"
        initialVisibleParagraphs={1}
      />

      {/* 2) FAQ dropdown */}
      <FAQ
        title="Introducing Our Labs"
        subtitle=""
        items={labFaqItems}
        allowMultipleOpen={false}
        backgroundColor="bg-white"
        titleClassName="text-center"
      />

      {/* Glimpses */}
      <Gallery 
        title="Glimpses" 
        images={galleryImages} 
      />

      <AdmissionCareer />
    </main>
  );
}
