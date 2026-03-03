"use client";

import { useEffect, useState } from "react";
import MainIntro from "@/app/components/about/main_intro";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import DataTable from "@/app/components/general/data-table";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";
import AdmissionCareer from "@/app/components/general/admission_cta";
import GrievanceForm from "@/app/components/forms/GrievanceForm";



const aboutP1 =
  "The Grievance Redressal Cell is established at KU as per the UGC guidelines to record the complaints of students and staff members regarding academic, administrative, discrimination, harassment, examination, finance, facilities, and infrastructure-related issues.";

const aboutP2 =
  "The dedicated committee members look after the seriousness of the problems and take necessary action.";

const functionsList = [
  { id: 1, text: "To accept written complaints from students and staff members" },
  { id: 2, text: "To follow a proper procedure set by the committee to fairly handle issues" },
  { id: 3, text: "To listen, record, and examine the grievances, and immediately take necessary action" },
  { id: 4, text: "To send evidence and suggestions to higher authorities in case of serious matters or beyond control" },
  { id: 5, text: "To identify if the complaints are genuine or not" },
  { id: 6, text: "To conduct regular meetings to discuss the status of complaints" },
  { id: 7, text: "To keep a follow-up for each case until they are completely resolved" },
  { id: 8, text: "To maintain the confidentiality of the complaints, if needed" },
];

const committeeMembers = [
  { sno: 1, name: "Dr. Rahul Mishra", position: "Dean, Academic Affairs – Chairperson of the Committee" },
  { sno: 2, name: "Dr. Sandeep Gandhi", position: "Registrar" },
  { sno: 3, name: "Dr. Lincy Roy", position: "Deputy Registrar" },
  { sno: 4, name: "Dr. C. P. Jawahar", position: "Dean, Faculty of Technology" },
  { sno: 5, name: "Dr. Shilpi Bhattacharya", position: "Dean, Faculty of Arts & Humanities" },
  { sno: 6, name: "Dr. A. Vijayanand", position: "Chief Proctor" },
  { sno: 7, name: "Dr. Shilpi Shrivastava", position: "HoD, Dept. of Chemistry" },
  { sno: 8, name: "Ms. Mariyan Ahmed", position: "Student Representative" },
  { sno: 9, name: "Mrs. Shilpi Nishant Tanwani", position: "Academic Officer" },
  { sno: 10, name: "Mr. Manish Singh", position: "Administration Head" },
  { sno: 11, name: "Mr. Rajesh Saini", position: "Accounts Head" },
  { sno: 12, name: "Dr. D. M. Sahu", position: "Transport In-charge" },
  { sno: 13, name: "Dr. Honey Gaur", position: "Dy COE" },
  { sno: 14, name: "Mrs. T. Gayatri Murty", position: "Assistant Registrar - Admissions" },
  { sno: 15, name: "Ms. Priyanka Singh", position: "Student Coordinator" },
];


export default function GrievanceRedressalPage() {


  const columns = [
    { key: "sno", label: "S. No.", width: "w-24" },
    { key: "name", label: "Name Of Member", width: "flex-1" },
    { key: "position", label: "Position", width: "w-[420px]" },
  ];

  const data = committeeMembers.map((m) => ({
    sno: m.sno,
    name: m.name,
    position: m.position,
  }));

  return (
    <main className="bg-white font-plus-jakarta-sans">
      <MainIntro
        title="Grievance Redressal Cell"
        description={[aboutP1, aboutP2]}
        imageUrl="https://cdn.kalingauniversity.ac.in/grievance/grievance-main-intro.webp"
        imageAlt="Grievance Redressal Cell"
        showKnowMore={true}
        initialVisibleParagraphs={2}
      />

      <ImageListItem
        title="Functions"
        subtitle=""
        items={functionsList}
        imageSrc="https://cdn.kalingauniversity.ac.in/grievance/grievance-functions.webp"
        description=""
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl text-[var(--title-color)] font-stix">
            <center>Grievance Redressal Committee</center>
          </h2>

          <div className="mt-10 max-w-4xl mx-auto">
            <DataTable columns={columns} data={data} overflowX={true} />
          </div>
        </div>
      </section>

      <GrievanceForm />
      <AdmissionCareer />

      {/* Existing breadcrumb image position override + font harmoniser */}
      <style jsx global>{`
        .absolute.inset-0 > img {
          object-position: center 35% !important;
        }

        @media (max-width: 768px) {
          .absolute.inset-0 > img {
            object-position: center 5% !important;
          }
        }

        main.font-plus-jakarta-sans p,
        main.font-plus-jakarta-sans li,
        main.font-plus-jakarta-sans label,
        main.font-plus-jakarta-sans input,
        main.font-plus-jakarta-sans textarea,
        main.font-plus-jakarta-sans table {
          font-family: var(--font-plus-jakarta-sans), ui-sans-serif, system-ui !important;
        }

        main.font-plus-jakarta-sans h1,
        main.font-plus-jakarta-sans h2,
        main.font-plus-jakarta-sans h3 {
          font-family: var(--font-stix), ui-serif, Georgia, serif;
        }
      `}</style>
    </main>
  );
}
