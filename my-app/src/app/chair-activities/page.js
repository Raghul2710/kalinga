"use client"

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import MainIntro from "../components/about/main_intro";
import DataTable from "../components/general/data-table";
import SectionHeading from "../components/general/SectionHeading";

import CenterOfExcellence from "../components/about/center_of_excellence";

const listStyle = { fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px' }

const chairsData = [
  {
    id: 1,
    name: "Shaheed Veer Narayan Singh Chair",
    title: "In-charge: Dr. Ajay Shukla",
    image: "https://cdn.kalingauniversity.ac.in/about/shaheed.webp",
  },
  {
    id: 2,
    name: "Amartya Sen Chair",
    title: "In-charge: Dr. Chandra Bhooshan Singh",
    image: "https://cdn.kalingauniversity.ac.in/about/amartya.webp",
  },
  {
    id: 3,
    name: "Weng Ming Hui Chair",
    title: "In-charge: Dr. Kali doss",
    image: "https://cdn.kalingauniversity.ac.in/about/weng.webp",
  },
];

const tableColumns1 = [
  { key: "slNo", label: "Sl. No", width: "w-20" },
  { key: "title", label: "Title of Program", width: "w-64" },
  { key: "action", label: "Faculty Coordinator", width: "w-32" },
  { key: "date", label: "Date of Event", width: "w-32" },
  { key: "time", label: "Time of Event", width: "w-32" },
  { key: "event", label: "Event Type", width: "w-32" },
  { key: "venue", label: "Venue", width: "w-32" },
  { key: "objective", label: "Objective", width: "w-80" },
  { key: "program", label: "Program-outcome", width: "w-80" },


];

const tableData1 = [
  {
    slNo: 1,
    title: "Role of Industrial Sector in Viksit Bharat",
    action: "Dr. Chandra Bhooshan Singh",
    date: "31-01-2025",
    time: "2:30 P.M. to 03:30 P.M.",
    event: "Guest Lecture",
    venue: "Kalinga University, Naya Raipur",
    objective: (
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>To enable participants understand the role of the industrial sector in achieving sustainable economic growth and development</li>
        <li>To enable students understand the contribution of the industrial sector in innovation, infrastructure development, and economic progress, aligned with SDG - 9.</li>
        <li>To introduce students to industrial policies, advancements, challenges, and best practices</li>
        <li>To offer a platform where they can share their ideas, ask questions, and exchange ideas related to the future of industrial development</li>
      </ul>
    ),
    program: (
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>Developed an in-depth understanding of the industrial sector’s role in Viksit Bharat</li>
        <li>Students learned about the real-world industrial challenges and opportunities</li>
        <li>Developed analytical thinking abilities through interactive discussions and insights</li>
        <li>Students understand the economic growth strategies and industrial policies</li>
      </ul>
    ),
  },
  {
    slNo: 2,
    title: "Poverty, Inequality, and Social Justice in India",
    action: "Dr. Chandra Bhooshan Singh",
    date: "25-08-2023",
    time: "11:00 A.M. to 01:30 P.M.",
    event: "Debate Competition",
    venue: "Kalinga University, Naya Raipur",
    objective: (
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>To encourage students to evaluate poverty, inequality, and social justice from economic, political, and ethical perspectives</li>
        <li>To provide a platform for students where they can practice public speaking, persuasion, and argumentation skills</li>
        <li>To complement classroom learning with participative activities and encourage students' involvement</li>
      </ul>
    ),
    program: (
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>Enhanced analytical reasoning and evidence-based argumentation skills</li>
        <li>Strengthened public speaking, confidence, and communication skills</li>
        <li>Increased awareness about social justice and its role in nation-building</li>
      </ul>
    ),
  },
  {
    slNo: 3,
    title: "Invest-Verse Certification - Certification Sponsored by HDFC Mutual Fund",
    action: "Dr. Komal Gupta",
    date: "11-11-2022",
    time: "10:30 A.M. to 01:30 P.M.",
    event: "Workshop",
    venue: "Kalinga University, Naya Raipur",
    objective: (
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>To introduce students to investment planning, mutual funds, and wealth creation strategies</li>
        <li>To provide a hands-on learning experience sponsored by HDFC Mutual Fund and facilitated by NSE Academy</li>
        <li>To motivate students to explore responsible investment practices</li>
      </ul>
    ),
    program: (
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>Participants learned real-life investment strategies and financial decision-making skills through practical training</li>
        <li>Provided industry-level certificates to participants to strengthen employability</li>
      </ul>
    ),
  }


]


export default function Kalingachair() {
  const pathname = usePathname();


  return (
    <>


      <MainIntro
        title="Chairs"
        subtitle=""
        description={["At the heart of Kalinga University’s research and innovation, our distinguished chairs play a crucial role in knowledge advancement in different areas and in creating solutions that remove societal challenges. The chairs offer a platform to students, faculty members, researchers, and experts where they can share their unique ideas and conduct project works, presentations, competitions, guest lectures, training, and workshops. They not only contribute to the growth of the institution but also to the overall betterment of society.",

        ]}
        imageUrl="https://cdn.kalingauniversity.ac.in/common/student.jpg"
        imageAlt="Kalinga University chairs"
      />

      <CenterOfExcellence
        centres={chairsData}
        title="List of Chairs"
        description=""
        showDescription={false}
        className="bg-white"
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 0 },
        }}
      />
      <section className="container mx-auto px-6 py-16">
        <div>
          <SectionHeading
            title="Details & Activities"
            subtitle=""
            titleClassName="text-center"
            subtitleClassName=""
          />
          <h3 className='text-2xl pt-6'>Amartya Sen Chair</h3>
          <ul className='list-disc list-inside mt-6' style={listStyle}>
            <li><strong>About the Chair</strong></li>
            <p>In collaboration with Hira Group, the Faculty of Commerce and Management at Kalinga University established the Amartya Sen Chair to promote research, activities and programs, capacity building, and collaboration.</p>
          </ul>
          <ul className='list-disc list-inside mt-6' style={listStyle}>
            <li><strong>Objective of the Chair</strong></li>
            <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
              <li>To promote high-quality research work in areas like economics, finance, taxation, corporate governance, management, and more</li>
              <li>To organize workshops, seminars, guest lectures, and conferences for research scholars, commerce and management students, and entrepreneurs</li>
              <li>To align academic research with corporate and societal needs</li>
              <li>To publish high-impact research papers, policy briefs, case studies, and books</li>
              <li>To improve student employability and skill development through industry-linked programs</li>
            </ul>
          </ul>
        </div>
      </section>
      <DataTable
        title="Activities"
        columns={tableColumns1} data={tableData1}
        overflowX={true}
      />
    </>
  );
}