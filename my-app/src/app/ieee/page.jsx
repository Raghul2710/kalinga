"use client";

import React from "react";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import FAQ from "@/app/components/general/faq";
import ImageListItem from "../components/ccrc/imagelistitem";
import GlobalArrowButton from "../components/general/global-arrow_button";
import SectionHeading from "../components/general/SectionHeading";
import AccreditationRanking from "../components/home/AccreditationRanking";
import ContactSection from '../components/cif/contact_section'
import OrganogramOfKalinga from "../components/about/organogram_of_kalinga";
import VisaFroFrroGuidelines from "../components/international/visa_frofrro_guidelines";
import DataTable from "../components/general/data-table";
import ResearchSixGridButtons from "../components/research/research_six_grid-buttons";

/* ---------------- DYNAMIC IMPORT ---------------- */








const CARD_TEXT_CLASSNAME = "mt-[10px] text-white";
const SECTION_TITLE_CLASSNAME = "text-white";


const admissionOrganogramContent = {
  cardBackgroundColor: "bg-[var(--button-red)]",
  title: "IEEE Student Branch Magazine",
  description: "MINDROID is a reflection of IEEE KU Student Branch’s journey into technology, innovation, and research. It highlights student articles, futuristic tech topics, and hands-on learning experiences.",
  buttonLabel: "Explore MINDROID",
  onClick: null,
  href: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE-KU-SB-Magazine_Apr-Sept-2022.pdf",
  buttonClassName: "!bg-white !text-black",
  arrowClassName: "!bg-[var(--dark-orange-red)]",
  arrowIconClassName: "!text-white",
  textClassName: "!text-black",

  useContainer: false,
  buttons: null,
};





const Gallery = dynamic(
  () => import("@/app/components/general/gallery"),
  { ssr: false }
);

/* ---------------- GALLERY IMAGES ---------------- */

const galleryImages = [
  { id: 1, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(1).webp", alt: "IEEE(1)" },
  { id: 2, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(2).webp", alt: "IEEE(2)" },
  { id: 3, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(3).webp", alt: "IEEE(3)" },
  { id: 4, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(4).webp", alt: "IEEE(4)" },
  { id: 5, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(5).webp", alt: "IEEE(5)" },
  { id: 6, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(6).webp", alt: "IEEE(6)" },
  { id: 7, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(7).webp", alt: "IEEE(7)" },
  { id: 8, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(8).webp", alt: "IEEE(8)" },
  { id: 9, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(9).webp", alt: "IEEE(9)" },
  { id: 10, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(10).webp", alt: "IEEE(10)" },
  { id: 11, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(11).webp", alt: "IEEE(11)" },
  { id: 12, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(12).webp", alt: "IEEE(12)" },
  { id: 13, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(13).webp", alt: "IEEE(13)" },
  { id: 14, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(14).webp", alt: "IEEE(14)" },
  { id: 15, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(15).webp", alt: "IEEE(15)" },
  { id: 16, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(16).webp", alt: "IEEE(16)" },
  // { id: 17, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(17).webp", alt: "IEEE(17)" },
  { id: 18, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(18).webp", alt: "IEEE(18)" },
  { id: 19, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(19).webp", alt: "IEEE(19)" },
  // { id: 20, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(20).webp", alt: "IEEE(20)" },
  { id: 21, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(21).webp", alt: "IEEE(21)" },
  { id: 22, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(22).webp", alt: "IEEE(22)" },
  { id: 23, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(23).webp", alt: "IEEE(23)" },
  { id: 24, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(24).webp", alt: "IEEE(24)" },
  { id: 25, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(25).webp", alt: "IEEE(25)" },
];

/* ---------------- BREADCRUMB DATA ---------------- */

const objectives = [

  {
    text: "About IEEE - The Institute of Electrical and Electronics Engineers (IEEE) is a leading organisation for professionals in technology and engineering that aims to improve people’s lives through advancing technology."
  },
  {
    text: "History - Established in 1963 when the American Institute of Electrical Engineers (AIEE) and the Institute of Radio Engineers (IRE) merged."
  },
  {
    text: "Membership - IEEE membership is open to individuals who have shown professional competency in IEEE-related fields. IEEE members have access to a wide range of resources, including publications, conferences, networking opportunities, and professional development programs."
  },
  {
    text: "Publications - Publish high-quality research papers, journals, conference proceedings, standards, magazines, and articles in electrical and electronics engineering and computer science fields."
  },
  {
    text: "Conferences - Sponsors various events and conferences worldwide where tech professionals and practitioners present their work and exchange ideas on new technologies."
  },
  {
    text: "Standards - Renowned for its standards development activities that ensure reliability, quality, and compatibility in the field of telecommunications, computing, and networking."
  },
  {
    text: "Technical Societies - These societies organize conferences, publish journals, and provide networking opportunities according to their respective disciplines."
  },
  {
    text: "Education and Professional Development - Offers educational and professional development resources, including online courses, webinars, workshops, and certification programs."
  }
];

const researchSixGridButtons = [
  {
    id: 1,
    text: "Read More",
    onClick: null,
    href: "#",
  },
];

const aboutAccreditations = [
  { id: 1, name: "KU Logo", logo: "https://cdn.kalingauniversity.ac.in/IEEE/ku+sb+logo.jpeg" },
  { id: 2, name: "IEEE MP", logo: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE+MP+SECTION.jpg" },
  { id: 3, name: "IEEE CS", logo: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE-CS_LogoTM-black.png" },
  { id: 4, name: "WIE", logo: "https://cdn.kalingauniversity.ac.in/IEEE/WIE+logo.png" },
];

const aboutsponsors = [
  { id: 1, name: "A", logo: "https://cdn.kalingauniversity.ac.in/IEEE/A.png" },
  { id: 2, name: "IEEE HTB", logo: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE+HTB.png" },
  { id: 3, name: "IEEE CS", logo: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE+CS.png" },
  { id: 5, name: "Chhattisgarh", logo: "https://cdn.kalingauniversity.ac.in/IEEE/chhattisgarh.png" },
  { id: 6, name: "IEEE GGV", logo: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE+GGV.png" },
  { id: 7, name: "IEEE B", logo: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE+B.png" },
  { id: 8, name: "IEEE NRSB", logo: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE+NRSB.png" },
  { id: 9, name: "KU", logo: "https://cdn.kalingauniversity.ac.in/IEEE/KU.png" },
  { id: 10, name: "IEEE CT", logo: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE+CT.png" },
  { id: 11, name: "Global", logo: "https://cdn.kalingauniversity.ac.in/IEEE/global.png" },
];
/* ---------------- PAGE COMPONENT ---------------- */


// REQUIRED CONSTANTS
const imageSrc =
  "https://cdn.kalingauniversity.ac.in/IQAC/kalinga.webp";

const message =
  "For research collaboration, testing services, and technical support, please contact us.";


const defaultButtons = [
  {
    id: 1,
    text: "Edition 8 - Volume 4, Issue -2 July 2025 - December 2025",
    onClick: null,
    href: "https://cdn.kalingauniversity.ac.in/ieee/Vol4+issue+2.pdf",
  },
  {
    id: 2,
    text: "Edition 7 - Volume 4, Issue -1 January 2025 - June 2025",
    onClick: null,
    href: "https://cdn.kalingauniversity.ac.in/ieee/Vol4+issue+1.pdf",
  },
  {
    id: 3,
    text: "Edition 6 - Volume 3, Issue - 2 July - December 2024",
    onClick: null,
    href: "https://cdn.kalingauniversity.ac.in/ieee/vol3+issue+2.pdf",
  },
  {
    id: 4,
    text: "Edition 5 - Volume 3, Issue- 1 January - June 2024",
    onClick: null,
    href: "https://cdn.kalingauniversity.ac.in/ieee/vol3+issue+1.pdf",
  },
  {
    id: 5,
    text: "Edition 4 - Volume 2, Issue 2 July 2023-December 2023",
    onClick: null,
    href: "https://cdn.kalingauniversity.ac.in/ieee/vol+2+issue+2.pdf",
  },
  {
    id: 6,
    text: "Edition 3 - Volume 2, Issue 1 January - June 2023",
    onClick: null,
    href: "https://cdn.kalingauniversity.ac.in/ieee/vol+2+issue+1.pdf",
  },
  {
    id: 7,
    text: "Edition 2 - Volume 1, Issue 2 October –December 2022",
    onClick: null,
    href: "https://cdn.kalingauniversity.ac.in/ieee/vol+1+issue+2.pdf",
  },
  {
    id: 8,
    text: "Edition 1 - Volume 1, Issue 1 April-September 2022",
    onClick: null,
    href: "https://cdn.kalingauniversity.ac.in/ieee/vol1+issue+1.pdf",
  },
];

export default function Page() {
  return (
    <>
      <ImageListItem
        items={objectives}
        imageSrc="https://cdn.kalingauniversity.ac.in/IEEE/IEEE(12).webp"
        title="IEEE at a Glance"
        description={false}
        className="mt-16"
      />


      <FAQ
        title={false}
        subtitleClassName="!hidden"
        variant="table-display"
        items={[]}
        headerBgColor="bg-[var(--button-red)]"
        headerTextColor="text-white"
        evenRowBg="bg-white"
        oddRowBg="bg-gray-50"
        borderColor="border-gray-200"
        tableSections={[

          {
            id: 1,
            title: "About IEEE Kalinga University Student Branch (IEEE KU SB)",
            description: (
              <div className="space-y-3">
                <p>The IEEE student branch of Kalinga University is part of the IEEE Madhya Pradesh Section and was established on 4th April, 2022. The main objective of IEEE KU SB is to improve the learning experience of its students in the field of computer science and engineering and to develop a research environment. The branch conducts various technical activities for students, including workshops, seminars, and conferences that promote new learning. It also encourages members to take full advantage of their IEEE membership, which includes scholarships, competitions, and conference grants. The branch also encourages students to actively interact with other institutes, academicians, professionals, engineers, and scientists.</p>
                <p className="font-semibold">Student Branch Code: STB60204569</p>
              </div>
            ),
            columns: [
              { key: "slNo", label: "S. No.", width: "w-20" },
              { key: "name", label: "Name of Member", width: "w-[360px]" },
              { key: "designation", label: "Designation / Position", width: "w-[280px]" },
              { key: "memberId", label: "Member ID", width: "w-48" },
            ],
            data: [
              { slNo: 1, name: "Dr. Vijayalaxmi Biradar", designation: "IEEE KU SB Counsellor", memberId: "92478983" },
              { slNo: 2, name: "Dr. Anita Verma", designation: "Member", memberId: "99682747" },
              { slNo: 3, name: "Mrs. Apurva Sharma", designation: "Member", memberId: "100672865" },
              { slNo: 4, name: "Mr. Piyush Srivastava", designation: "Chairperson", memberId: "100057465" },
              { slNo: 5, name: "Mr. Vedant Raj", designation: "Vice Chairperson", memberId: "100057335" },
              { slNo: 6, name: "Ms. Simpi Kumari", designation: "Secretary", memberId: "100511898" },
              { slNo: 7, name: "Md. Aiman Shafi", designation: "Web Master", memberId: "100477950" },
            ],
          }
          , {
            id: 2,
            title: "About Kalinga University IEEE Women-in-Engineering Affinity Group (WIE AG)",
            description: (
              <div className="space-y-3">
                <p>The IEEE Women-in-Engineering Affinity Group (WIE AG) at Kalinga University was established on 18th May 2022 under the IEEE Student Branch. It aims to empower women in the field of engineering and technology. The group actively promotes innovation through networking events, workshops, conferences, mentorship, and outreach programs. Female students from STEM get a supportive platform to collaborate and connect with the global WIE community and make a significant contribution.</p>
                <p className="font-semibold">Student Branch Affinity Group Code: SBA60204569</p>
              </div>
            ),
            columns: [
              { key: "slNo", label: "S. No.", width: "w-20" },
              { key: "name", label: "Name", width: "w-[320px]" },
              { key: "designation", label: "Designation", width: "w-[280px]" },
              { key: "membershipId", label: "IEEE Membership Number", width: "w-48" },
            ],
            data: [
              {
                slNo: 1,
                name: "Dr. Vijayalaxmi Biradar",
                designation: "IEEE WIE AG Advisor",
                membershipId: "92478983",
              },
              {
                slNo: 2,
                name: "Ms. Aayushi Rao",
                designation: "Chairperson",
                membershipId: "100043089",
              },
              {
                slNo: 3,
                name: "Ms. Chilikuri Shivani",
                designation: "Vice Chairperson",
                membershipId: "100666290",
              },
            ],
          }
          ,
          {
            id: 3,
            title: "About Kalinga University IEEE Aerospace Electronics Systems Society (AESS)",
            description: (
              <div className="space-y-3">
                <p>The mission is to provide a responsive and relevant professional society that attracts, engages, aids, and retains a diverse set of members (age, culture, community - theoretical, managerial, and applications) worldwide in the areas of our fields of interest as defined in our constitution. AESS at KU will accomplish this through technical, chapter, and society activities through conferences, publications, education, technical operations, industry relations, and member services.</p>
                <p className="font-semibold">Student Branch Chapter Code: SBC60204569</p>
              </div>
            ),
            columns: [
              { key: "slNo", label: "S. No.", width: "w-20" },
              { key: "name", label: "Name", width: "w-[320px]" },
              { key: "designation", label: "Designation", width: "w-[280px]" },
              { key: "membershipId", label: "IEEE Membership Number", width: "w-48" },
            ],
            data: [
              {
                slNo: 1,
                name: "Dr. Vijayalaxmi Biradar",
                designation: "IEEE AESS Chapter Advisor",
                membershipId: "92478983",
              },
              {
                slNo: 2,
                name: "Mr. Priyanshu Singh",
                designation: "Chairperson",
                membershipId: "100071524",
              },
              {
                slNo: 3,
                name: "Ms. Goon Shah",
                designation: "Vice Chairperson",
                membershipId: "101177641",
              },
            ],
          }
          , {
            id: 4,
            title: "About IEEE Kalinga University Computer Society Chapter (CS)",
            description: (
              <div className="space-y-3">
                <p>Established on 13th June under the IEEE Student Branch, the IEEE Computer Society Chapter at Kalinga University promotes excellence in computing, software, and emerging technologies. It engages students through workshops, coding events, and technical activities, fostering innovation, collaboration, and professional growth. Dedicated to IEEE’s mission of “Advancing Technology for Humanity”, the society empowers members to contribute to impactful solutions in the field of computer science.</p>
                <p className="font-semibold">Student Branch Chapter Code: SBC60204569A</p>
              </div>
            ),
            columns: [
              { key: "slNo", label: "S. No.", width: "w-20" },
              { key: "name", label: "Name", width: "w-[320px]" },
              { key: "designation", label: "Designation", width: "w-[280px]" },
              { key: "membershipId", label: "IEEE Membership Number", width: "w-48" },
            ],
            data: [
              {
                slNo: 1,
                name: "Dr. Vijayalaxmi Biradar",
                designation: "IEEE CS Chapter Advisor",
                membershipId: "92478983",
              },
              {
                slNo: 2,
                name: "Mr. Vedant Raj",
                designation: "Chairperson",
                membershipId: "100057335",
              },
            ],
          }
          ,
          {
            id: 5,
            title: "IEEE KU SB Members",
            columns: [
              { key: "slNo", label: "S. No.", width: "w-20" },
              { key: "name", label: "Name", width: "w-80" },
              { key: "designation", label: "Designation", width: "w-48" },
              { key: "membershipId", label: "Membership ID", width: "w-48" },
            ],
            data: [
              { slNo: 1, name: "Dr. Vijayalaxmi Biradar", designation: "Faculty", membershipId: "92478983" },
              { slNo: 2, name: "Dr. Sanyogita Shahi", designation: "Faculty", membershipId: "97528578" },
              { slNo: 3, name: "Dr. Rahul Mishra", designation: "Faculty", membershipId: "98299084" },
              { slNo: 4, name: "Dr. Smita Premanand", designation: "Faculty", membershipId: "98478199" },
              { slNo: 5, name: "Mr.Pankaj Tiwari", designation: "Faculty", membershipId: "98635286" },
              { slNo: 6, name: "Dr. Anu G. Pillai", designation: "Faculty", membershipId: "98754085" },
              { slNo: 7, name: "Dr. Anita Verma", designation: "Faculty", membershipId: "99682747" },
              { slNo: 8, name: "Dr. Praveen Kumar Yadaw", designation: "Faculty", membershipId: "99982254" },
              { slNo: 9, name: "Mr. Abhishek Kumar Singh", designation: "Faculty", membershipId: "100826965" },
              { slNo: 10, name: "Mr.Abhishek Gupta", designation: "Faculty", membershipId: "100827345" },
              { slNo: 11, name: "Md. Arsh Khan", designation: "Faculty", membershipId: "101147721" },
              { slNo: 12, name: "Dr. Shraddha Verma", designation: "Faculty", membershipId: "101280406" },
              { slNo: 13, name: "Koda Aayushi Rao", designation: "Student", membershipId: "100043089" },
              { slNo: 14, name: "Vedant Raj", designation: "Student", membershipId: "100057335" },
              { slNo: 15, name: "Piyush Srivastava", designation: "Student", membershipId: "100057465" },
              { slNo: 16, name: "Priyanshu Singh", designation: "Student", membershipId: "100071524" },
              { slNo: 17, name: "Shibam Khadanga", designation: "Student", membershipId: "100489296" },
              { slNo: 18, name: "Balwant Kumar Sahani", designation: "Student", membershipId: "100489427" },
              { slNo: 19, name: "Sneha Khetan", designation: "Student", membershipId: "100489433" },
              { slNo: 20, name: "Shalini Kodopi", designation: "Student", membershipId: "100489474" },
              { slNo: 21, name: "Shreya Kumari", designation: "Student", membershipId: "100497667" },
              { slNo: 22, name: "Shreyaanshi Pandey", designation: "Student", membershipId: "100500239" },
              { slNo: 23, name: "Simpi Kumari", designation: "Student", membershipId: "100511898" },
              { slNo: 24, name: "Ayush Yadav", designation: "Student", membershipId: "100514845" },
              { slNo: 25, name: "Dehuti Dhruw", designation: "Student", membershipId: "100532703" },
              { slNo: 26, name: "Prajjval Vyas", designation: "Student", membershipId: "100638125" },
              { slNo: 27, name: "Somnath Jha", designation: "Student", membershipId: "100658317" },
              { slNo: 28, name: "Komal Sahu", designation: "Student", membershipId: "100658347" },
              { slNo: 29, name: "Alisha Meher", designation: "Student", membershipId: "100658472" },
              { slNo: 30, name: "Priti Karmakar", designation: "Student", membershipId: "100658513" },
              { slNo: 31, name: "Md. Aiman Shafi", designation: "Student", membershipId: "100664029" },
              { slNo: 32, name: "Luckey Kumar", designation: "Student", membershipId: "100665820" },
              { slNo: 33, name: "Haripriya Bag", designation: "Student", membershipId: "100666045" },
              { slNo: 34, name: "Chilikuri Shivani", designation: "Student", membershipId: "100666290" },
              { slNo: 35, name: "Nikhil", designation: "Student", membershipId: "100669552" },
              { slNo: 36, name: "Aditya Shekhar", designation: "Student", membershipId: "100669618" },
              { slNo: 37, name: "Ananya Shahi", designation: "Student", membershipId: "100672248" },
              { slNo: 38, name: "Himanshu Jha", designation: "Student", membershipId: "100672305" },
              { slNo: 39, name: "Nivruti Sharma", designation: "Student", membershipId: "100672352" },
              { slNo: 40, name: "Bhargavi", designation: "Student", membershipId: "100672380" },
              { slNo: 41, name: "Apurva Sharma", designation: "Student", membershipId: "100672865" },
              { slNo: 42, name: "Chetna Kaushik", designation: "Student", membershipId: "100708131" },
              { slNo: 43, name: "Md. Tawis Ansari", designation: "Student", membershipId: "100887194" },
              { slNo: 44, name: "Namala Mahesh", designation: "Student", membershipId: "101129647" },
              { slNo: 45, name: "Goon Shah", designation: "Student", membershipId: "101177641" },
              { slNo: 46, name: "Vishesh Satapathy", designation: "Student", membershipId: "101181975" },
              { slNo: 47, name: "Vishal Raj", designation: "Student", membershipId: "101182019" },
              { slNo: 48, name: "J Ayushman Prusty", designation: "Student", membershipId: "101182745" },
              { slNo: 49, name: "Raj Kumar Banjare", designation: "Student", membershipId: "101202293" },
              { slNo: 50, name: "Nikhil Dewangan", designation: "Student", membershipId: "101202330" },
              { slNo: 51, name: "Mukund Raj", designation: "Student", membershipId: "101251546" },
              { slNo: 52, name: "Chandan Kumar", designation: "Student", membershipId: "101285129" },
              { slNo: 53, name: "Amit Kumar", designation: "Student", membershipId: "101285213" },
              { slNo: 54, name: "Prathmesh Ravi Geeta Rathod", designation: "Student", membershipId: "101285308" },
              { slNo: 55, name: "Harshita Chandrakar", designation: "Student", membershipId: "101285061" },
              { slNo: 56, name: "Bhavana Sharma", designation: "Student", membershipId: "101285159" },
              { slNo: 57, name: "Sai Smita Sarangi", designation: "Student", membershipId: "101244263" },
              { slNo: 58, name: "Bhumika Patel", designation: "Student", membershipId: "101299924" },
              { slNo: 59, name: "Punyaswetha Pattjoshi", designation: "Student", membershipId: "101300025" },
              { slNo: 60, name: "Sarvesh Bhardwaj", designation: "Student", membershipId: "101304885" },
              { slNo: 61, name: "Ashutosh Singh", designation: "Student", membershipId: "101304984" },
              { slNo: 62, name: "Aniket Kumar", designation: "Student", membershipId: "101305124" },
              { slNo: 63, name: "Reetika Kumari", designation: "Student", membershipId: "101322037" },
              { slNo: 64, name: "Ishanvi Isha", designation: "Student", membershipId: "101322077" },
              { slNo: 65, name: "Rakhi Kumari", designation: "Student", membershipId: "101394320" },
            ],
          },
          {
            id: 6,
            title: "Funds Received For IEEE Activities",
            columns: [
              { key: "slNo", label: "S. No.", width: "w-20" },
              { key: "activity", label: "Name of the Activity", width: "w-[420px]" },
              { key: "coordinator", label: "Project / Event Coordinator", width: "w-[360px]" },
              { key: "organization", label: "Funding Organization", width: "w-[360px]" },
              { key: "amount", label: "Amount", width: "w-48" },
            ],
            data: [
              { slNo: 1, activity: "Teacher’s Congress- Towards Capacity Building", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE Region 10 Educational Activities Committee", amount: "USD 250" },
              { slNo: 2, activity: "Social Ideas Enterprise challenge", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE Region 10 Educational Activities Committee", amount: "USD 200" },
              { slNo: 3, activity: "Developing a video in Hindi Language of IEEE Resume Lab usage and access to build a professional resume", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE Region 10 Educational Activities Committee", amount: "USD 200" },
              { slNo: 4, activity: "Workshop On “Teaching Science Holistically: Rural School Teachers”", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE Region 10 Educational Activities Committee", amount: "USD 150" },
              { slNo: 5, activity: "IEEE Congress", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Pankaj Tiwari, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty", organization: "IEEE SPAx", amount: "USD 380" },
              { slNo: 6, activity: "IEEE Congress", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Pankaj Tiwari, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty", organization: "IEEE SPAA", amount: "Rs. 30,720" },
              { slNo: 7, activity: "Smart Garbage monitoring system", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE SPS/HAC", amount: "Rs. 82,180" },
              { slNo: 8, activity: "WIE ILS 2023", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE R10 WIE ILS 2023", amount: "Rs. 1,24,500" },
              { slNo: 9, activity: "WIE ILS 2023", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE MP Section", amount: "Rs. 5,00,000" },
              { slNo: 10, activity: "WIE ILS 2023", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Sponsorship- https://attend.ieee.org/wieils-raipur-2023/sponsorship/", amount: "Rs. 13,04,185" },
              { slNo: 11, activity: "2- days Workshop on Aeromodelling for Girl Students", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE", amount: "Rs. 16,600" },
              { slNo: 12, activity: "IEEE- Innovation Summit", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty", organization: "IEEE SPAx", amount: "Rs. 28,700" },
              { slNo: 13, activity: "MGA Student Operating Funds", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty", organization: "IEEE", amount: "Rs. 18,336" },
              { slNo: 14, activity: "AESS Student Chapter Rebate", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty", organization: "IEEE AESS", amount: "Rs. 20,500" },
              { slNo: 15, activity: "IEEE WiE Champion 2023", coordinator: "Dr. Vijayalaxmi Biradar", organization: "R10 IEEE WiE", amount: "Rs. 16,574" },
              { slNo: 16, activity: "IEEE WCONF Conference", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Sarat Chandra Mohanty, Mr. Anup Kumar Jana", organization: "IEEE", amount: "Rs. 83,450" },
              { slNo: 17, activity: "IEEE Robotics Competition 2024", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty, Mrs.Anu G Pillai, Dr.Anita Verma, Ms.Rupal Gupta", organization: "IEEE R10 / IEEE MP Section", amount: "$450 + $100 / Rs. 77,200" },
              { slNo: 18, activity: "IEEE Robotics Competition 2024", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty, Mrs.Anu G Pillai, Dr.Anita Verma, Ms.Rupal Gupta", organization: "IEEE GNDEC SB, Bidar / Sharnabasva University / S B Jain College IEEE SB", amount: "Rs. 17,000" },
              { slNo: 19, activity: "IEEE Climate Crisis event", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty, Mrs.Anu G Pillai, Dr.Anita Verma, Ms.Rupal Gupta", organization: "IEEE SPAx", amount: "Rs. 16,679" },
              { slNo: 20, activity: "One week Hands on training on Robotics", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty", organization: "-", amount: "Rs. 14,600" },
              { slNo: 21, activity: "Best out of Waste (Chhattisgarh Regional Science Centre)", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Chhattisgarh Regional Science Centre", amount: "Rs. 47,500" },
              { slNo: 22, activity: "Robotics Workshop (Chhattisgarh Regional Science Centre)", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Chhattisgarh Regional Science Centre", amount: "Rs. 50,000" },
              { slNo: 23, activity: "IEEE STEM Grant", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty, Mrs.Anu G Pillai, Dr.Anita Verma, Ms.Rupal Gupta", organization: "IEEE STEM", amount: "Rs. 78,389" },
              { slNo: 24, activity: "Mentoring of HEI's towards Accreditation (NAAC/NBA)", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE MP Section", amount: "Rs. 25,000" },
              { slNo: 25, activity: "IEEE SIGHT Seed Funding", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Seed Grant", amount: "Rs. 20,750" },
              { slNo: 26, activity: "IEEE 2nd WCONF 2024", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty, Mrs. Anu G Pillai, Dr. Anita Verma", organization: "SERB, IEEE, IEEE Xplore", amount: "Rs. 2,96,484" },
              { slNo: 27, activity: "IEEE Robotics Workshop 2024", coordinator: "Dr. Vijayalaxmi Biradar, Mrs. Anu G Pillai, Dr. Anita Verma", organization: "IEEE MP Section", amount: "Rs. 30,450" },
              { slNo: 28, activity: "IEEE Branch Counsellors Meet 2024", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE MP Section", amount: "Rs. 9,642" },
              { slNo: 29, activity: "IEEE MP Section Students & Leadership Congress - 2024", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE MP Section", amount: "Rs. 4,000" },
              { slNo: 30, activity: "ESG & Sustainability Symposium", coordinator: "Dr. Vijayalaxmi Biradar", organization: "NDIM, IEEE CS, IEEE HTB, SPAx, AG Enterprises, CG Tourism Board", amount: "Rs. 16,52,400" },
              { slNo: 31, activity: "Seminar on “Writing an Effective IEEE Proposal for Funding”", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Registration Fees", amount: "Rs. 7,500" },
              { slNo: 32, activity: "One-Day Hands-On Training on Python, Coding and Robotics", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Registration Fees", amount: "Rs. 49,250" },
              { slNo: 33, activity: "Launch of Magazine WeSmriti 2.0", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE MP Section", amount: "Rs. 6,000" },
              { slNo: 34, activity: "Two-Day Hands-On Training on Python, Coding and Robotics (SJMIT Chitradurga)", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Registration Fees", amount: "Rs. 70,000" },
              { slNo: 35, activity: "15-Day Summer Camp on Python, Coding and Robotics (MM School, Raipur)", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Registration Fees", amount: "Rs. 32,600" },
              { slNo: 36, activity: "10-Day Summer Camp on Python, Coding and Robotics", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Registration Fees", amount: "Rs. 31,000" },
              { slNo: 37, activity: "IEEE 3rd World Conference on Communication and Computing 2025", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Anusandhan National Research Foundation, Registration Fees", amount: "Rs. 3,53,800" },
              { slNo: 38, activity: "IEEE Workshop on Quality Conference", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE Region 10, IEEE MP Section, Registration Fees", amount: "Rs. 1,95,330" },
              { slNo: 39, activity: "Block Coding Bootcamp: Hands-On Training Workshop for Young Coders", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE TryEngineering STEM Grant", amount: "USD 960" },
              { slNo: 40, activity: "A Two-Day Cyber Security Extravaganza for School Students", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE Education Activities Committee", amount: "USD 545" },
              { slNo: 41, activity: "LifeSync (IEEE R10 WIE ATHEnA #1 Project 2025)", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE R10 WIE", amount: "USD 500" },
              { slNo: 42, activity: "Establishment of STEM Lab at Future Public School, Raipur", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Future Public School", amount: "Rs. 46,500" },
              { slNo: 43, activity: "R10 ACEI Event Funding", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE R10 ACEI", amount: "USD 200" },
            ],
          },
          {
            id: 7,
            title: "List of Activities and Events",
            description: "The following is the list of activities and events conducted by IEEE Kalinga University Student Branch in the year 2024-25:",
            columns: [
              { key: "slNo", label: "S. No.", width: "w-20" },
              { key: "event", label: "Name of the Event", width: "w-[520px]" },
              { key: "date", label: "Date of the Event", width: "w-64" },
            ],
            data: [
              { slNo: 1, event: "IEEE 3rd World Conference on Communication and Computing 2025", date: "25.07.2025 - 27.07.2025" },
              { slNo: 2, event: "IEEE Workshop on Quality Conference", date: "25.07.2025 - 26.07.2025" },
              { slNo: 3, event: "5-Day Faculty Development Program on “NextGen STEM Teaching with Python and Intelligent Machines” at Geethanjali College of Engineering and Technology, Hyderabad", date: "30.06.2025 - 04.07.2025" },
              { slNo: 4, event: "Dr. Vijayalaxmi attended IEEE Women in Engineering International Leadership Conference 2025 at San Jose, USA", date: "15.05.2025 - 16.05.2025" },
              { slNo: 5, event: "10-Day Summer Camp 2025 on Python, Coding and Robotics (VSS, Umariya, Naya Raipur)", date: "01.05.2025 - 10.05.2025" },
              { slNo: 6, event: "10-Day Summer Camp 2025 on Python, Coding and Robotics (Adarsh Vidyalaya, Tatibandh, Raipur)", date: "01.05.2025 - 10.05.2025" },
              { slNo: 7, event: "10-Day Summer Camp 2025 on Python, Coding and Robotics (Adarsh Vidyalaya, Mowa, Raipur)", date: "01.05.2025 - 10.05.2025" },
              { slNo: 8, event: "STEM Exploration at Adarsh Vidyalaya, Tatibandh", date: "12.04.2025" },
              { slNo: 9, event: "15-Day Summer Camp 2025 on Python, Coding and Robotics (MM School, Nakti, Raipur)", date: "20.03.2025 - 11.04.2025" },
              { slNo: 10, event: "Transformation through the NAAC Accreditation Process at Kingston Educational Institute, Kolkata", date: "10.04.2025" },
              { slNo: 11, event: "Faculty Development Program at SJM Institute of Technology, Chitradurga", date: "09.04.2025" },
              { slNo: 12, event: "Two-Day Hands-On Training on Python, Coding and Robotics at SJM Institute of Technology, Chitradurga", date: "04.04.2025 - 08.04.2025" },
              { slNo: 13, event: "IEEE KU SB 3rd Anniversary Celebration", date: "04.04.2025" },
              { slNo: 14, event: "Community Survey in Tandul", date: "29.03.2025" },
              { slNo: 15, event: "STEM Exploration at Standard Carnival, Palaud", date: "28.03.2025" },
              { slNo: 16, event: "Training on STEM Kit", date: "24.03.2025" },
              { slNo: 17, event: "Community Survey in Kuhera", date: "22.03.2025" },
              { slNo: 18, event: "International Women’s Day 2025 Celebration and Launch of Magazine WeSmriti 2.0", date: "08.03.2025" },
              { slNo: 19, event: "IEEE Membership Benefits Awareness 2025", date: "25.01.2025" },
              { slNo: 20, event: "One-Day Hands-On Training on Python, Coding and Robotics", date: "25.01.2025" },
              { slNo: 21, event: "Meeting for planning a One-Day Hands-On Training Session on Python, Coding and Robotics", date: "24.01.2025" },
              { slNo: 22, event: "STEM Exploration at Education Excellence Conclave, Babylon Capital, Raipur", date: "11.01.2025" },
              { slNo: 23, event: "STEM Exploration at Standard Carnival, Kalinga University", date: "07.01.2025" },
              { slNo: 24, event: "Unlocking IEEE Funding Opportunities: Tips, Tricks & Evaluation Insights", date: "26.12.2024" },
              { slNo: 25, event: "IEEE-MOVE Outreach India: Promoting Climate Change Awareness and Sustainability (MM School, Airport Road, Raipur)", date: "24.12.2024" },
              { slNo: 26, event: "Seminar on Writing an Effective IEEE Proposal for Funding", date: "21.12.2024" },
              { slNo: 27, event: "IEEE-MOVE Outreach India: Promoting Climate Change Awareness and Sustainability (Oriental Institute of Science & Technology, Bhopal)", date: "19.12.2024" },
              { slNo: 28, event: "IEEE-MOVE Outreach India: Promoting Climate Change Awareness and Sustainability (Saraswati Shishu Mandir Higher Sec. School Jagadish Mandir, Garhafatak, Jabalpur)", date: "16.12.2024" },
              { slNo: 29, event: "IEEE-MOVE Outreach India: Promoting Climate Change Awareness and Sustainability (Govt. Higher Sec. School, Uperwara, Naya Raipur)", date: "07.12.2024" },
              { slNo: 30, event: "STEM Exploration: Science working model competition 3.0", date: "07.12.2024" },
              { slNo: 31, event: "IEEE-MOVE Outreach India: Promoting Climate Change & Sustainability (Govt. Middle School, Kuhera, Naya Raipur)", date: "05.12.2024" },
              { slNo: 32, event: "ESG & Sustainability Symposium", date: "22.11.2024 - 23.11.2024" },
              { slNo: 33, event: "IEEE MP Section Branch Counsellors Meet", date: "30.09.2024" },
              { slNo: 34, event: "Hands on IOT Training: Exposing Rural Students to Opportunities in STEM", date: "05.08.2024 - 09.08.2024" },
              { slNo: 35, event: "Climate Crisis, Sustainable Solutions: Building a Resilient Future", date: "15.06.2024" },
              { slNo: 36, event: "Best Out of Waste workshop", date: "05.06.2024 - 07.06.2024" },
              { slNo: 37, event: "IEEE MP Robotech Quest (IEEE R10 Robotics Competition 2024-Stage 1)", date: "29.04.2024" },
              { slNo: 38, event: "Personality development session for students", date: "11.03.2024" },
              { slNo: 39, event: "Launch of WeSmriti Magazine", date: "07.03.2024" },
              { slNo: 40, event: "International Women’s Day Celebration", date: "07.03.2024" },
              { slNo: 41, event: "IEEE Membership Development Program", date: "19.02.2024" },
              { slNo: 42, event: "“Mentoring of HEI's towards Accreditation (NAAC/NBA)”", date: "22.12.2023 - 23.12.2023" },
              { slNo: 43, event: "“IEEE WIE AG Mentor-Mentee Event: How to make IEEE WIE AG self-sustainable”", date: "08.12.2023" },
              { slNo: 44, event: "“IEEE WIE AG Mentor-Mentee Event: Benefits of IEEE WIE AG Membership” launched under the R10 WIE Championship Initiative", date: "04.12.2023" },
              { slNo: 45, event: "Dr. Vijayalaxmi attended 2023 R10 Section Chapter Symposium", date: "01.12.2023 - 03.12.2023" },
              { slNo: 46, event: "WORKSHOP ON SCIENTIFIC TOY", date: "28.11.2023 - 30.11.2023" },
              { slNo: 47, event: "Dr. Vijayalaxmi Biradar invited as keynote speaker at the Returning Mothers Conference 2023", date: "27.10.2023" },
              { slNo: 48, event: "An Invited talk on “Hydrogen Fuel Cell Vehicle (HFCV): Revolution in Transportation” on the eve of IEEE Day 2023", date: "09.10.2023" },
              { slNo: 49, event: "Training on Smart Garbage Monitoring System for Govt. School students", date: "03.10.2023 - 07.10.2023" },
              { slNo: 50, event: "Participated in IEEE ICBDS 2023", date: "07.10.2023" },
              { slNo: 51, event: "Dr. Vijayalaxmi delivered a talk on “Unlocking Potential Opportunities & Benefits in WIE”", date: "11.09.2023" },
              { slNo: 52, event: "IEEE WIE ILS 2023, Raipur", date: "25.08.2023 - 26.08.2023" },
              { slNo: 53, event: "Expert talk on Funding Opportunities on Humanitarian Projects to Meet SDGs through IEEE to IEEE Vizag Section", date: "04.08.2023" },
              { slNo: 54, event: "WCONF 2023", date: "14.07.2023 - 16.07.2023" },
              { slNo: 55, event: "IEEE KU SB Annual Meet", date: "20.04.2023" },
              { slNo: 56, event: "Dr. Vijayalaxmi invited as Keynote speaker of 8th I2CT Conference 2023", date: "07.04.2023 - 09.04.2023" },
              { slNo: 57, event: "Branch Counsellor and ExCom members meet", date: "05.04.2023" },
              { slNo: 58, event: "One week Robotics Workshop (Hands-on Training) and a robotics competition", date: "20.03.2023 - 25.03.2023" },
              { slNo: 59, event: "Aeromodelling Workshop for rural Girl Students", date: "16.03.2023 - 17.03.2023" },
              { slNo: 60, event: "Students’ Internship at Godawari Electric Motors Pvt. Ltd.", date: "01.02.2023 - 28.02.2023" },
              { slNo: 61, event: "IEEE WIE CON ECE 2022 (Kalinga University sponsor; Dr. Vijayalaxmi served as Secretary and Keynote Speaker)", date: "30.12.2022 - 31.12.2022" },
              { slNo: 62, event: "Teaching Science Holistically Rural School Teacher", date: "02.09.2022 - 03.09.2022" },
              { slNo: 63, event: "Social Idea Enterprise Challenge", date: "29.08.2022" },
              { slNo: 64, event: "Incubation Project Exhibition", date: "05.07.2022" },
              { slNo: 65, event: "Workshop on IOT", date: "09.05.2022 - 13.05.2022" },
              { slNo: 66, event: "Seminar On IEEE Women In Engineering (WIE) - Towards Technology & Leadership", date: "27.04.2022" },
              { slNo: 67, event: "IEEE Logo Making Competition", date: "25.04.2022" },
              { slNo: 68, event: "IEEE KU SB Inauguration", date: "04.04.2022" },
            ],
          },
          {
            id: 8,
            title: "Awards, Achievements and Recognitions",
            columns: [
              { key: "slNo", label: "S. No.", width: "w-20" },
              { key: "award", label: "Name of Award / Achievement", width: "w-[520px]" },
              { key: "awardee", label: "Awardee / Member Achieved", width: "w-[360px]" },
              { key: "year", label: "Year", width: "w-32" },
            ],
            data: [
              { slNo: 1, award: "Selected as Secretary and WIE Chair of IEEE Madhya Pradesh Section", awardee: "Dr. Vijayalaxmi Biradar", year: "2025" },
              { slNo: 2, award: "Certificate of Appreciation for Contribution as a Judge of the 2025 IEEE WIE Awards", awardee: "Dr. Vijayalaxmi Biradar", year: "2025" },
              { slNo: 3, award: "IEEE R10 Professional Certification Grant 2025", awardee: "Dr. Vijayalaxmi Biradar", year: "2025" },
              { slNo: 4, award: "Program Committee Co-Chair – IEEE Women in Engineering International Leadership Conference during 15-16 May 2025, San Jose, USA", awardee: "Dr. Vijayalaxmi Biradar", year: "2025" },
              { slNo: 5, award: "Selection as Entrepreneurship Ambassador under IEEE Region 10 ACEI", awardee: "Dr. Vijayalaxmi Biradar", year: "2025" },
              { slNo: 6, award: "Induction as professional member in the Eta Chapter of the Board of Governors into IEEE-HKN", awardee: "Dr. Vijayalaxmi Biradar", year: "2025" },
              { slNo: 7, award: "IEEE India Council Sustainable Development Activity (SDA) Committee Member", awardee: "Dr. Vijayalaxmi Biradar", year: "2024" },
              { slNo: 8, award: "BIRAC - 1st Residential at Mussoorie", awardee: "Dr. Vijayalaxmi Biradar", year: "2024" },
              { slNo: 9, award: "BIRAC - 2nd Residential at New Delhi", awardee: "Dr. Vijayalaxmi Biradar", year: "2024" },
              { slNo: 10, award: "IEEE R10 WIE Outstanding Professional Volunteer Award 2024", awardee: "Dr. Vijayalaxmi Biradar", year: "2024" },
              { slNo: 11, award: "IEEE WIE Inspiring Member of the Year Award", awardee: "Dr. Vijayalaxmi Biradar", year: "2024" },
              { slNo: 12, award: "Felicitation at Returning Mothers Conference", awardee: "Dr. Vijayalaxmi Biradar", year: "2024" },
              { slNo: 13, award: "Elected as Joint Secretary & Chairperson WIE AG IEEE Madhya Pradesh Section", awardee: "Dr. Vijayalaxmi Biradar", year: "2024" },
              { slNo: 14, award: "Elected as Exe-Com Members of IEEE Madhya Pradesh Section", awardee: "Dr. Vijayalaxmi Biradar, Dr. Anita Verma, Dr. Anu G Pillai, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty", year: "2024" },
              { slNo: 15, award: "R10 IEEE WIE Education/Outreach Sub-committee Chair", awardee: "Dr. Vijayalaxmi Biradar", year: "2024" },
              { slNo: 16, award: "Elected as Chairperson IEEE WIE AG Madhya Pradesh Section", awardee: "Dr. Vijayalaxmi Biradar", year: "2023" },
              { slNo: 17, award: "IEEE Pre-University Champion", awardee: "Dr. Vijayalaxmi Biradar", year: "2023" },
              { slNo: 18, award: "Program Chair for IEEE Women in Engineering (WIE) International Leadership Summit at Raipur, Chhattisgarh", awardee: "Dr. Vijayalaxmi Biradar", year: "2023" },
              { slNo: 19, award: "IEEE STEM Champion", awardee: "Dr. Vijayalaxmi Biradar", year: "2023 Onwards" },
              { slNo: 20, award: "IEEE R10 WIE Champions as a Mentor to WIE IIIT Naya Raipur SB", awardee: "Dr. Vijayalaxmi Biradar", year: "2023" },
            ],
          },

        ]}

        overflowX={false}
        allowMultipleOpen={false}
      />

      <section className="mb-[80px]">
        <OrganogramOfKalinga
          title={admissionOrganogramContent.title}
          description={admissionOrganogramContent.description}
          buttonLabel={admissionOrganogramContent.buttonLabel}
          cardBackgroundColor={admissionOrganogramContent.cardBackgroundColor}
          showImage={admissionOrganogramContent.showImage}
          imageUrl={admissionOrganogramContent.imageUrl}
          imageAlt={admissionOrganogramContent.imageAlt}
          buttonClassName={admissionOrganogramContent.buttonClassName}
          arrowClassName={admissionOrganogramContent.arrowClassName}
          arrowIconClassName={admissionOrganogramContent.arrowIconClassName}
          textClassName={admissionOrganogramContent.textClassName}
          useContainer={true}
          href={admissionOrganogramContent.href}
        />
      </section>

      <ResearchSixGridButtons buttons={defaultButtons} />

      <SectionHeading
        title={
          <>
            High Impact Zonal Event on ESG & Sustainability Symposium
            <span className="block text-base mt-2">
              22/11/2024 to 23/11/2024
            </span>
          </>
        }
        titleClassName="text-center"
      />
      <AccreditationRanking
        heading="Organized By"
        secondHeading=""
        accreditations={aboutAccreditations}
      />


      <section className="w-full h-full container mx-auto  py-6">
        <img src="https://cdn.kalingauniversity.ac.in/IEEE/posters.jpeg" alt=" Symposium Poster" className="w-full h-auto object-cover" />
      </section>
      <AccreditationRanking
        heading="Sponsors"
        secondHeading=""
        accreditations={aboutsponsors}
      />
      {/* ================== UBA ACTIVITIES TABS ================== */}
      <VisaFroFrroGuidelines
        title={<>ESG & Sustainability Symposium</>}
        showModal={false}
        backgroundClassName="bg-[var(--dark-blue)]"
        tabs={[
          {
            id: "event",
            title: "Event Schedule",
            content: (
              <div className="space-y-6">
                <h3 className="text-white">
                  22/11/2024 to 23/11/2024 - Event Schedule
                </h3>
                <div className="overflow-x-auto rounded-xl border border-gray-300">
                  <table className="w-full border-collapse text-left">
                    <thead className="bg-[var(--dark-blue)] text-white">
                      <tr>
                        <th className="border border-gray-300 px-4 py-3">Date</th>
                        <th className="border border-gray-300 px-4 py-3">Time</th>
                        <th className="border border-gray-300 px-4 py-3">Particular</th>
                        <th className="border border-gray-300 px-4 py-3">Venue</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium align-middle" rowSpan={8}>
                          Day – 1<br />22-11-2024
                        </td>
                        <td className="border border-gray-300 px-4 py-3">10:00 AM – 10:30 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Physical Registration & Check-in</td>
                        <td className="border border-gray-300 px-4 py-3 align-middle font-medium" rowSpan={15}>
                          Kalinga University Auditorium
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">10:30 AM – 11:15 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Inauguration</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">11:15 AM – 11:30 AM</td>
                        <td className="border border-gray-300 px-4 py-3">High Tea</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">11:30 AM – 12:10 PM</td>
                        <td className="border border-gray-300 px-4 py-3">
                          Keynote Session by <strong>Mr. Shivam</strong><br />
                          Chairperson, New Initiative Committee IEEE CS, MGA Board
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">12:10 PM – 12:50 PM</td>
                        <td className="border border-gray-300 px-4 py-3">
                          Session 1: Dr. Sangmesh, Associate Professor, JNU New Delhi<br />
                          <strong>Topic:</strong> Sustainable Development: Role of Energy and Individuals
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">12:50 PM – 01:30 PM</td>
                        <td className="border border-gray-300 px-4 py-3">
                          Session 2: Mr. Rohit Raj, Founder & CEO, Techsics Technologies<br />
                          <strong>Topic:</strong> Navigating Startups, Robotics and the Future of Technology
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">01:30 PM – 02:30 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Networking Lunch</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">02:30 PM – 04:30 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Poster / Project Demonstration</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium align-middle" rowSpan={7}>
                          Day – 2<br />23-11-2024
                        </td>
                        <td className="border border-gray-300 px-4 py-3">10:00 AM – 11:00 AM</td>
                        <td className="border border-gray-300 px-4 py-3">
                          Session 3: Ms. Devina Kothari, Director – Zuan Design Labs LLP<br />
                          <strong>Topic:</strong> Beyond Sustainability: Shaping the Future with ESG 2.0 (2025–2050)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">11:00 AM – 11:15 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Tea Break</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">11:15 AM – 12:15 PM</td>
                        <td className="border border-gray-300 px-4 py-3">
                          Session 4: Dr. Vinamra Bhushan Sharma, Deputy Manager – Infrastructure & Sustainability<br />
                          <strong>Topic:</strong> Environmental Social Governance towards Sustainability
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">12:15 PM – 01:30 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Valedictory</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">01:40 PM – 02:15 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Networking Lunch</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">02:15 PM – 06:00 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Visit to Champaran</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          },
          {
            id: "inauguration",
            title: "Inauguration Schedule",
            content: (
              <div className="space-y-6">
                <h3 className="text-white">
                  22/11/2024 to 23/11/2024 - Inauguration Schedule
                </h3>
                <p className="mt-[10px] text-white">
                  <strong>Master of Ceremony: Dr. Anu G. Pillai</strong>
                  <br />Timing: 10:30 AM to 11:15 AM
                </p>
                <div className="overflow-x-auto rounded-xl border border-gray-300">
                  <table className="w-full border-collapse text-left">
                    <thead className="bg-[var(--dark-blue)] text-white">
                      <tr>
                        <th className="border border-gray-300 px-4 py-3">Time</th>
                        <th className="border border-gray-300 px-4 py-3">Particular</th>
                        <th className="border border-gray-300 px-4 py-3">Venue</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">10:30 AM to 10:32 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Welcome note by Master of Ceremony</td>
                        <td className="border border-gray-300 px-4 py-3 align-middle font-medium" rowSpan={11}>
                          Kalinga University Auditorium
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">10:32 AM to 10:35 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Lamp Lighting</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">10:35 AM to 10:38 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Welcome of guests and address by Master of Ceremony</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">10:38 AM to 10:40 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Address by Honourable Chairman</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">10:40 AM to 10:42 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Address by Honourable Chancellor</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">10:42 AM to 10:45 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Address by Honourable Vice Chancellor</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">10:45 AM to 10:50 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Welcome note by Dr. Vijayalaxmi, Director IQAC</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">10:50 AM to 10:55 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Address by Respected Registrar</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">10:55 AM to 11:15 AM</td>
                        <td className="border border-gray-300 px-4 py-3">
                          SDG – Logo Launching Ceremony and Inauguration of SDG Wall headed by Mrs. Saloni Tyagi, HoD Faculty of Law
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">11:15 AM to 11:30 AM</td>
                        <td className="border border-gray-300 px-4 py-3">High Tea</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          },
          {
            id: "poster",
            title: "Poster / Project Presentation",
            content: (
              <div className="space-y-6">
                <h3 className="text-white">
                  22/11/2024 - Poster / Project Presentation Schedule
                </h3>
                <p className="text-white">
                  <strong>Overall Coordinator: Dr. Anu G. Pillai</strong>
                  <br />Date of Event: 22/11/2024, <br />
                  Timing: 2:30 PM to 4:30 PM, Venue: Auditorium, Kalinga University
                </p>
                <div className="overflow-x-auto rounded-xl border border-gray-300">
                  <table className="w-full border-collapse text-left">
                    <thead className="bg-[var(--dark-blue)] text-white">
                      <tr>
                        <th className="border border-gray-300 px-4 py-3">Time</th>
                        <th className="border border-gray-300 px-4 py-3">Team No</th>
                        <th className="border border-gray-300 px-4 py-3">University / College</th>
                        <th className="border border-gray-300 px-4 py-3">Team Members</th>
                        <th className="border border-gray-300 px-4 py-3">Participation Type</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {[
                        { time: "2:30 PM – 2:39 PM", team: "TEAM-01", uni: "Kalinga University", members: "Md Tawis Ansari, Sanjana Kumari, Komal Sahu, Md Aiman Shafi, Vinay Manikpuri", type: "Offline" },
                        { time: "2:39 PM – 2:48 PM", team: "TEAM-02", uni: "IIIT Naya Raipur", members: "Nidhee Bhuwal, Chanchal Ijardar", type: "Offline" },
                        { time: "2:48 PM – 2:57 PM", team: "TEAM-03", uni: "Dr. C. V. Raman University", members: "Mr. Ravish Gupta, Dr. Shikha Singh", type: "Offline" },
                        { time: "2:57 PM – 3:06 PM", team: "TEAM-04", uni: "Dr. C. V. Raman University", members: "Dr. Ayaz Ahmed Faridi, Ravish Gupta, Adarsh Sharma", type: "Offline" },
                        { time: "3:06 PM – 3:15 PM", team: "TEAM-05", uni: "Dr. C. V. Raman University", members: "Rajesh, Dr. Ragini Shukla", type: "Offline" },
                        { time: "3:15 PM – 3:24 PM", team: "TEAM-06", uni: "BIT Durg", members: "Geetish Mahato, Anamika Dey", type: "Offline" },
                        { time: "3:24 PM – 3:33 PM", team: "TEAM-07", uni: "Guru Ghasidas University, Bilaspur", members: "Kumar Gulshan Raj, Aditya Raj, G Santhosh Nayak", type: "Offline" },
                        { time: "3:33 PM – 3:42 PM", team: "TEAM-08", uni: "IIIT Naya Raipur", members: "Manjistha Bidkar, Alankar Saxena, Sanjana Sori", type: "Offline" },
                        { time: "3:42 PM – 3:51 PM", team: "TEAM-09", uni: "Guru Ghasidas University, Bilaspur", members: "Kishan Sahu, Rustam, Rohit Saijare, Mansee Singh", type: "Online" },
                        { time: "3:51 PM – 4:00 PM", team: "TEAM-10", uni: "SJMIT Chitradurga", members: "Pallavi S A, Nikhitha P H, Manupriya P, Prof. Raghu S, Prof. Tanuja T", type: "Online" },
                        { time: "4:00 PM – 4:09 PM", team: "TEAM-11", uni: "IIIT Naya Raipur", members: "Thampula Kartheek, Vaduguru Sai Venu Satya Ramlalith", type: "Offline" },
                        { time: "4:09 PM – 4:18 PM", team: "TEAM-12", uni: "SJMIT Chitradurga", members: "Devika S, Divya B S, Hema B T, Purushotham T P, Sujith G R", type: "Online" },
                        { time: "4:18 PM – 4:27 PM", team: "TEAM-13", uni: "Guru Nanak Dev Engineering College, Bidar", members: "Kennath Jason, Abdul Aziz, Sheshank Sonji, Abhishek Patil", type: "Online" },
                        { time: "4:27 PM – 4:35 PM", team: "TEAM-14", uni: "Guru Ghasidas University, Bilaspur", members: "Shrey Anant Sandiman, Nipun Kumar Mishra, Laxmikant Dewangan", type: "Online" },
                      ].map((row, idx) => (
                        <tr key={idx}>
                          <td className="border border-gray-300 px-4 py-3">{row.time}</td>
                          <td className="border border-gray-300 px-4 py-3">{row.team}</td>
                          <td className="border border-gray-300 px-4 py-3">{row.uni}</td>
                          <td className="border border-gray-300 px-4 py-3">{row.members}</td>
                          <td className="border border-gray-300 px-4 py-3">{row.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          },
          {
            id: "valedictory",
            title: "Valedictory Schedule",
            content: (
              <div className="space-y-6">
                <h3 className="text-white">
                  23-11-2024 - Valedictory Schedule
                </h3>
                <div className="text-sm text-[var(--foreground)] leading-relaxed">
                  <p className="text-white">
                    <strong>Master of Ceremony: Dr. Anu G. Pillai</strong><br />
                    Date: 22/11/2024 to 23/11/2024<br />
                    Timing: 12:15 PM to 1:30 PM
                  </p>
                </div>
                <div className="overflow-x-auto rounded-xl border border-gray-300">
                  <table className="w-full border-collapse text-left">
                    <thead className="bg-[var(--dark-blue)] text-white">
                      <tr>
                        <th className="border border-gray-300 px-4 py-3">Time</th>
                        <th className="border border-gray-300 px-4 py-3">Particular</th>
                        <th className="border border-gray-300 px-4 py-3">Venue</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">12:15 PM to 12:20 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Welcome of guests and address by the Master of the Ceremony</td>
                        <td className="border border-gray-300 px-4 py-3 align-middle font-medium" rowSpan={7}>
                          Kalinga University Auditorium
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">12:20 PM to 12:50 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Address by Mr. Rahul Pinnamaneni, Founder & CEO, Polygon Geospatial, Hyderabad</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">12:50 PM to 1:20 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Address by Mr. Abhinav Gambhir, Event Lead – IEEE CS SYP High Impact Zonal Events</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">1:20 PM to 1:25 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Concluding note by Dr. Vijayalaxmi, Director IQAC</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">1:25 PM to 1:35 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Certificates & Prize Distribution</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">1:35 PM to 1:38 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Vote of Thanks by Dr. Anita Verma</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">1:38 PM</td>
                        <td className="border border-gray-300 px-4 py-3">National Anthem</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          },
        ]}
      />





      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-5 lg:gap-0 container pt-[50px]">
        <div className="lg:col-span-4 z-20 h-full">
          <div className="relative z-20 bg-[var(--lite-sand)] rounded-2xl p-2 w-full">
            <Image
              src={imageSrc}
              alt=""
              width={500}
              height={500}
              className="w-full h-[320px] md:h-full object-cover rounded-2xl"
            />
            {message && (
              <div className="absolute right-4 bottom-4 z-30">
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="w-10 h-10 rounded-lg bg-[var(--button-red)] hover:opacity-80 cursor-pointer  flex items-center justify-center transition-colors shadow-md"
                  aria-label="Open message"
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M4 12L12 4M12 4H6M12 4V10"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-6 relative lg:left-[-25px] lg:pt-35 lg:pt-0 z-10">

          {/* Contact Details Section */}
          <div className="bg-[var(--dark-blue)] rounded-xl md:p-14 p-6 relative overflow-hidden md:pl-16 z-10">
            <div className="relative z-10">
              <h3 className="text-white text-xl sm:text-2xl font-stix mb-6">Contact Details</h3>
              <div className="grid grid-cols-1 gap-4 sm:gap-6 text-white/80">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--dark-orange-red)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:ieeeku@kalingauniversity.ac.in" className="text-sm sm:text-base hover:text-white transition-colors underline">
                    ieeeku@kalingauniversity.ac.in

                  </a>
                </div>
                {/* <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--dark-orange-red)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>

                  <a href="http://www.kalingauniversity.ac.in/ieee/" className="text-sm sm:text-base hover:text-white transition-colors">
                    http://www.kalingauniversity.ac.in/ieee/
                  </a>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </div>




      <Gallery title="Glimpses" images={galleryImages} />
    </>
  );
}
