"use client";

import { useLayoutEffect } from "react";
import ImageContent from "@/app/components/ccrc/imagecontent";
import MentorIntro from "@/app/components/department/dept_head_intro";
import DataTable from "@/app/components/general/data-table";
import Link from "next/link";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";
import AdmissionCareer from "@/app/components/general/admission_cta";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ipr/IPR-banner.webp",
  pageTitle: "Intellectual Property Rights Cell",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "IPR Cell", href: "/ipr-cell" },
  ],
};

const aboutP1 =
  "The National IPR Policy was launched by the Government of India on 12th May 2016, which lays down seven objectives, including the Administration and Management of IPRs. It endeavours to promote a stable IP regime in the country and encourages innovation to achieve the country’s industrial and economic development goals.";

const aboutP2 =
  "The IPR Cell at Kalinga University extends its initiatives for spreading awareness about the concepts among academicians, scholars, and students for taking steps to implement the objectives of the national IPR Policy, including strengthening IPR management and ensuring ease of access to the IP system for all stakeholders.";

const MentorIntroProps = [
  {
    id: 1,
    title: "A Message From the Dean",
    subtitle: "Dr R Udaya Kumar",
    department: "Dean/HoD - IPR Cell",
    imageSrc:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Dean - IPR Cell",
    quote:
      "We understand that creativity and innovation are part of academic excellence and national progress. KU believes that your powerful ideas need to be recognised and protected. Our IPR cell works towards protecting the creations of students, researchers, and faculty members. Whether you’re working on a research paper, app design, or other research-related work, we’re here to protect your work, file patents, trademarks, copyrights, or any other IP. We want every research scholar to feel confident about their rights and valuable work. Through workshops and seminars, we encourage legal empowerment, encouraging all innovators to discover new horizons in their field of study.",
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

export default function IPRCellPage() {
  useLayoutEffect(() => {
    if (typeof window !== "undefined") window.__breadcrumbData = breadcrumbData;
    return () => {
      if (typeof window !== "undefined") delete window.__breadcrumbData;
    };
  }, []);

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

  return (
    <main className="bg-white font-jakarta">
      <ImageContent
        title="Intellectual Property Rights (IPR) Cell"
        subtitle="About IPR Cell"
        description={`${aboutP1} ${aboutP2}`}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ipr/ipr-cell-logo.webp"
        imageAlt="IPR Cell Logo"
        readmore={false}
      />

      {/* ✅ Reduce the big gap below ImageContent */}
      <div className="-mt-16 md:-mt-20">
        <MentorIntro items={MentorIntroProps} />
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--title-color)]">
            Our IPR Committee
          </h2>

          <div className="mt-6">
            <DataTable columns={columns} data={data} overflowX={true} />
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-4 flex justify-center">
          <Link
            href="https://kalinga-university.s3.ap-south-1.amazonaws.com/ipr/KU_REF_CITATION.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlobalArrowButton
              variant="outline"
              className="border-[var(--button-red)] text-[var(--button-red)] hover:bg-[var(--button-red)] hover:text-white"
            >
              KU Ref. Citation
            </GlobalArrowButton>
          </Link>
        </div>
      </section>

      <AdmissionCareer />
    </main>
  );
}
