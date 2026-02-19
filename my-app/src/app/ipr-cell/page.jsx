"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ImageContent from "@/app/components/ccrc/imagecontent";
import MentorIntro from "@/app/components/department/dept_head_intro";
import DataTable from "@/app/components/general/data-table";
import Link from "next/link";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";
import AdmissionCareer from "@/app/components/general/admission_cta";
import FlipbookTrigger from "@/app/components/general/FlipbookTrigger";
import APITable from "../components/general/api-table";
import CtcdTrainingTabs from "../components/ctcd/ctcd_training_tabs";

const aboutP1 = (
  <>
    The National IPR Policy was launched by the Government of India on 12
    <sup>th</sup> May 2016, which lays down seven objectives, including the
    Administration and Management of IPRs. It endeavours to promote a stable IP
    regime in the country and encourages innovation to achieve the country’s
    industrial and economic development goals.
  </>
);

const aboutP2 =
  "The IPR Cell at Kalinga University extends its initiatives for spreading awareness about the concepts among academicians, scholars, and students for taking steps to implement the objectives of the national IPR Policy, including strengthening IPR management and ensuring ease of access to the IP system for all stakeholders.";

const MentorIntroProps = [
  {
    id: 1,
    title: "Dr R Udaya Kumar",
    subtitle: "Message from HoD",
    department: "Head - IPR Cell",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/ipr/ipr-sir.webp",
    imageAlt: "Dean - IPR Cell",

    quote: "Where unique ideas are protected, innovation flourishes.",

    message: [
      "We understand that creativity and innovation are part of academic excellence and national progress. Kalinga University believes that your powerful ideas need to be recognised and protected.  Our IPR cell works towards protecting the creations of students, researchers, and faculty members. Whether you’re working on a research paper, app design, or other research-related work, we’re here to protect your work, file patents, trademarks, copyrights, or any other IP. We want every research scholar to feel confident about their rights and valuable work. Through workshops and seminars, we encourage legal empowerment, encouraging all innovators to discover new horizons in their field of study.",
    ],
  },
];

const committeeMembers = [
  {
    sno: 1,
    name: "Dr. Vijayalaxmi Biradar, Professor, Dept. of Engineering, Director IQAC",
    position: "Head",
  },
  {
    sno: 2,
    name: "Dr. Rahul Mishra, Professor, Dept. of Engineering, DAA & COE",
    position: "Member",
  },
  {
    sno: 3,
    name: "Dr. Sushma Dubey, Head Dept. of Biotechnology",
    position: "Member",
  },
  {
    sno: 4,
    name: "Dr. Amit Joshi, Asst. Professor, Dept. Biotechnology, Asst. COE",
    position: "Member",
  },
  {
    sno: 5,
    name: "Dr. R. Uday Kumar, Dean CS & IT",
    position: "Member",
  },
];

const IPR_READMORE_PDF =
  "https://drive.google.com/file/d/1cWxnWUWoh6d470GLwo8cMtnAvSKJFtiP/view";

export default function IPRCellPage() {
  const pathname = usePathname();



  const columns = [
    { key: "sno", label: "S. No.", width: "w-24" },
    { key: "name", label: "Name of member", width: "flex-1" },
    { key: "position", label: "Category", width: "w-40" },
  ];

  const data = committeeMembers.map((m) => ({
    sno: m.sno,
    name: m.name,
    position: m.position,
  }));

  const yearlyTabs = Array.from({ length: 12 }, (_, i) => {
    const id = 14 + i; // 14 to 25
    const yearStart = 2024 - i; // 2024 to 2013
    const yearEnd = yearStart + 1;
    const label = `${yearStart}-${yearEnd}`;

    return {
      value: `year-${id}`,
      label,
      content: (
        <APITable
          tableId={id.toString()}
          title={label}
          className="py-16"
          overflowX={true}
        />
      ),
    };
  });

  return (
    <main className="bg-white font-jakarta">
      <ImageContent
        title="Intellectual Property Rights (IPR) Cell"
        subtitle="Intellectual Property Rights"
        description={
          <>
            {aboutP1} {aboutP2}
          </>
        }
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ipr/ipr-cell-logo.webp"
        imageAlt="IPR Cell Logo"
        readmore={true}
        buttonText="Download Research,Consultancy, and IPR Policy"
        buttonLink={IPR_READMORE_PDF}
      />

      <div className="-mt-16 md:-mt-20">
        <MentorIntro items={MentorIntroProps} />
      </div>

      <section className="pb-12">
        <div className="container mx-auto px-4">
          <h2 className="!font-stix text-4xl">Our IPR Committee</h2>

          <div className="mt-6">
            <DataTable columns={columns} data={data} overflowX={true} />
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-4 flex justify-center">
          <FlipbookTrigger
            pdfUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/ipr/KU_REF_CITATION.pdf"
            title="KU Ref. Citation"
          >
            <Link
              href="https://kalinga-university.s3.ap-south-1.amazonaws.com/ipr/KU_REF_CITATION.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GlobalArrowButton variant="default">
                KU Ref. Citation
              </GlobalArrowButton>
            </Link>
          </FlipbookTrigger>
        </div>
      </section>

      <CtcdTrainingTabs customTabs={yearlyTabs} />
      <AdmissionCareer />
    </main>
  );
}
