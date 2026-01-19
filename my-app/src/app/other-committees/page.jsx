"use client";

import React, { useEffect } from "react";
import FAQ from "../components/general/faq";
import { useBreadcrumbData } from "../components/layout/BreadcrumbContext";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-front-banner02.webp",
  pageTitle: "Committees",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Other Committees", href: "/other-committees" },
  ],
};

export default function OtherCommittees() {
  useBreadcrumbData(breadcrumbData);

  // Internal Complaint Committee
  const internalComplaintCommittee = {
    id: 1,
    title: "Internal Complaint Committee",
    columns: [
      { key: "slNo", label: "S.No.", width: "w-16" },
      { key: "name", label: "Name Of Member", width: "flex-1" },
      { key: "position", label: "Position", width: "flex-1" },
    ],
    data: [
      { slNo: "1", name: "Dr. Rahul Mishra", position: "Dean, Academic Affairs - Chairperson of the Committee" },
      { slNo: "2", name: "Lt. Vibha Chandrakar", position: "In-Charge Dean, Student Welfare" },
      { slNo: "3", name: "Mrs. Saloni Tyagi", position: "In-Charge HoD, Faculty of Law" },
      { slNo: "4", name: "Dr. Shilpi Shrivastava", position: "HoD, Chemistry" },
      { slNo: "5", name: "Mr. Manish Singh", position: "Chief Warden" },
      { slNo: "6", name: "Dr. A. Vijayanand", position: "Chief Proctor" },
      { slNo: "7", name: "Dr. Naresh Kumar Khunte", position: "Assistant Professor, Faculty of Technology" },
      { slNo: "8", name: "Dr. Lincy Roy", position: "Head HR" },
    ],
  };

  // Grievance Redressal Committee
  const grievanceRedressalCommittee = {
    id: 2,
    title: "Grievance Redressal Committee",
    columns: [
      { key: "slNo", label: "S.No", width: "w-16" },
      { key: "name", label: "Name of Member", width: "flex-1" },
      { key: "position", label: "Position", width: "flex-1" },
    ],
    data: [
      { slNo: "1", name: "Dr. Rahul Mishra", position: "Dean, Academic Affairs – Chairperson of the Committee" },
      { slNo: "2", name: "Dr. Lincy Roy", position: "Deputy Registrar" },
      { slNo: "3", name: "Dr. C. P. Jawahar", position: "Dean, Faculty of Technology" },
      { slNo: "4", name: "Dr. Shilpi Bhattacharya", position: "Dean, Faculty of Arts & Humanities" },
      { slNo: "5", name: "Dr. A. Vijayanand", position: "Chief Proctor" },
      { slNo: "6", name: "Dr. Shilpi Shrivastava", position: "HoD, Dept. of Chemistry" },
      { slNo: "7", name: "Ms. Mariyan Ahmed", position: "Student Representative" },
      { slNo: "8", name: "Mrs. Shipli Nishant Tanwani", position: "Academic Officer" },
    ],
  };

  // Women Cell / Prevention of Sexual Harassment (POSH) Committee
  const womenCellCommittee = {
    id: 3,
    title: "Women Cell / Prevention of Sexual Harassment (POSH) Committee",
    columns: [
      { key: "slNo", label: "S.No.", width: "w-16" },
      { key: "name", label: "Name", width: "flex-1" },
      { key: "position", label: "Position", width: "flex-1" },
      { key: "designation", label: "Designation", width: "flex-1" },
    ],
    data: [
      { slNo: "1", name: "Dr. Lincy Roy", position: "Head of the Committee", designation: "Deputy Registrar & Head HR, Administration" },
      { slNo: "2", name: "Dr. A. Vijayanand", position: "Member", designation: "Chief Proctor" },
      { slNo: "3", name: "Ms. Saloni Tyagi", position: "Member", designation: "Assistant Professor, Faculty of Law" },
      { slNo: "4", name: "Ms. Mariyan Ahmed", position: "Member", designation: "Assistant Professor, Faculty of C&M" },
      { slNo: "5", name: "Mrs. Shilpi N. Tanwani", position: "Member", designation: "Academic Officer, Administration" },
      { slNo: "6", name: "Ms. Ankita Nihlani", position: "Member", designation: "Assistant Registrar, Administration" },
      { slNo: "7", name: "Ms. Alishiba Mahanand", position: "Member", designation: "Student Representative from B.Com." },
      { slNo: "8", name: "Ms. Arti Sinha", position: "Member", designation: "Student Representative from B.Ed." },
      { slNo: "9", name: "Dr. Naresh Sharma", position: "Member", designation: "Lawyer" },
    ],
  };

  // SC/ST Cell
  const scStCell = {
    id: 4,
    title: "SC/ST Cell",
    columns: [
      { key: "slNo", label: "S.No.", width: "w-16" },
      { key: "name", label: "Name", width: "flex-1" },
      { key: "designation", label: "Designation", width: "flex-1" },
      { key: "area", label: "Area", width: "w-32" },
    ],
    data: [
      { slNo: "1", name: "Dr. Nuresh Khunte", designation: "Head of the Committee", area: "Faculty" },
      { slNo: "2", name: "Dr. Harsha Patil", designation: "Member", area: "Faculty" },
      { slNo: "3", name: "Mr. Arun Kumar Lahre", designation: "Member", area: "Faculty" },
      { slNo: "4", name: "Mr. Aayush Gondale", designation: "Member", area: "Faculty" },
      { slNo: "5", name: "Mr. Sobharam Sonekar", designation: "Member", area: "Non-Teaching" },
      { slNo: "6", name: "Ms. Nikita Joshi", designation: "Member", area: "Assistant DSW" },
    ],
  };

  // OBC Cell
  const obcCell = {
    id: 5,
    title: "OBC Cell",
    columns: [
      { key: "slNo", label: "S.No.", width: "w-16" },
      { key: "name", label: "Name", width: "flex-1" },
      { key: "designation", label: "Designation", width: "flex-1" },
      { key: "area", label: "Area", width: "w-32" },
    ],
    data: [
      { slNo: "1", name: "Mr. Omprakash Dewangan", designation: "Head of the Committee", area: "Faculty" },
      { slNo: "2", name: "Dr. D. M. Sahu", designation: "Member", area: "Faculty" },
      { slNo: "3", name: "Dr. Sanjeev Yadav", designation: "Member", area: "Faculty" },
      { slNo: "4", name: "Mr. Gaurav Tamrakar", designation: "Member", area: "Faculty" },
      { slNo: "5", name: "Mr. Rajesh Vishwakarma", designation: "Member", area: "Non-Teaching" },
      { slNo: "6", name: "Ms. Anita Sahu", designation: "Member", area: "Non-Teaching" },
    ],
  };

  // Minority Cell
  const minorityCell = {
    id: 6,
    title: "Minority Cell",
    columns: [
      { key: "slNo", label: "S.No.", width: "w-16" },
      { key: "name", label: "Name", width: "flex-1" },
      { key: "designation", label: "Designation", width: "flex-1" },
      { key: "area", label: "Area", width: "w-32" },
    ],
    data: [
      { slNo: "1", name: "Dr. Mohd Nasir", designation: "Head of the Committee", area: "Head of Library" },
      { slNo: "2", name: "Dr. Dhananjay Jain", designation: "Member", area: "Faculty" },
      { slNo: "3", name: "Dr. Manoj Matthew", designation: "Member", area: "Faculty" },
      { slNo: "4", name: "Mrs. Sarvaree Bano", designation: "Member", area: "Faculty" },
      { slNo: "5", name: "Ms. Harleen Kaur", designation: "Member", area: "Faculty" },
      { slNo: "6", name: "Mrs. Nausheen", designation: "Member", area: "Non-Teaching" },
      { slNo: "7", name: "Mr. Thasbin Basheer", designation: "Member", area: "Non-Teaching" },
    ],
  };

  // Student Council
  const studentCouncil = {
    id: 7,
    title: "Student Council",
    columns: [
      { key: "slNo", label: "S.No.", width: "w-16" },
      { key: "post", label: "Post", width: "w-32" },
      { key: "name", label: "Name of Elected Candidate", width: "flex-1" },
      { key: "fathersName", label: "Father's Name", width: "flex-1" },
      { key: "course", label: "Course", width: "w-32" },
      { key: "yearSem", label: "Year/ Sem", width: "w-24" },
      { key: "remarks", label: "Remarks", width: "w-32" },
    ],
    data: [
      { slNo: "1", post: "President", name: "Ms. Mariyam Ahmed", fathersName: "Mr. Ainuddin Ahmed", course: "Ph.D.", yearSem: "2nd Yr.", remarks: "-" },
      { slNo: "2", post: "Vice President", name: "Ms. Bilesiya Lavanya", fathersName: "Mr. Prakash Bilesiya", course: "MBA", yearSem: "3rd Sem", remarks: "-" },
      { slNo: "3", post: "Secretory", name: "Mr. Surendra Sahu", fathersName: "Mr. Joidha Ram", course: "B.P.Ed.", yearSem: "3rd Sem", remarks: "-" },
      { slNo: "4", post: "Joint Secretary", name: "Ms. Muskan Singh", fathersName: "Mr. Ashok Singh", course: "MBA", yearSem: "3rd Sem", remarks: "Reserved for Girl Student" },
    ],
  };

  // FAQ items for committees with additional content
  const faqItems = [
    {
      id: 8,
      question: "Women Cell / Prevention of Sexual Harassment (POSH) Committee",
      answer: [
        "The Women's Cell or Sexual Harassment Prevention Committee has been constituted at Kalinga University under the guidelines issued by the UGC, NAAC, and the Supreme Court to consider complaints related to any sexual discrimination or harassment of girls or women within the University.",
        "Contact Details:",
        "Dr. Lincy Roy - Head of Committee",
        "Phone: +91-9303097012",
        "Email: lincy.roy@kalingauniversity.ac.in",
        "Regulation 2013 of Prevention, Prohibition and Redressal of Sexual Harassment of Women and Students in HEIs: https://kalinga-university.s3.ap-south-1.amazonaws.com/other-committees/Regulation+2013+of+Prevention%2C+Prohibition+and+Redressal+of+Sexual+Harassment+of+Women+and+Student+in+HEI's.pdf",
        "Regulation 2015 of Prevention, Prohibition and Redressal of Sexual Harassment of Women and Students in HEIs: https://kalinga-university.s3.ap-south-1.amazonaws.com/other-committees/Regulation+2015+of+Prevention%2C+Prohibition+and+Redressal+of+Sexual+Harassment+of+Women+and+Student+in+HEI's.pdf",
        "<b>Functions and Responsibilities of the Women's Cell & Prevention of Sexual Harassment (POSH) Committee:</b>",
        "Promote measures aimed at achieving gender equality, removal of gender bias or discrimination, sexual harassment and other acts of gender based violence.",
        "Organise awareness programmes and campaigns for the benefit of all members of the University on sexual harassment and gender based discrimination.",
        "Fulfil the directives of and guidelines issued by the Supreme Court to create an academic and work environment that is free of sexual harassment or gender-based discrimination.",
        "Receive and redress complaints received from any member of the University (including students, research scholars, staff, hostel residents and outsiders on University premises) alleging sexual harassment by another member(s) of the University.",
        "Take suo-moto cognisance of any act of sexual harassment or gender-based discrimination on the University campus and/or facilities and take further action in this regard.",
        "Conduct formal inquiry, investigate and take decisions upon each complaint and recommend appropriate punishment or action to be taken, by the appropriate authority, in each instance.",
        "Engage the services of a professional or other expert in the course of performing its functions.",
        "Ensure that all information pertaining to either complaints registered or the proceedings and findings of any inquiries and/or investigations is kept strictly confidential.",
      ],
    },
    {
      id: 9,
      question: "Fraud Awareness Guidelines",
      answer:
        "<b>Fraud Awareness Guidelines: </b> Kalinga goes to great lengths to protect our students from fraud. If you suspect having received fraudulent emails, SMS, or found a website or social media account that tries to pass off as official Kalinga University, we encourage you to let us know at your earliest convenience, so that we can quickly take action to stop the fraud. Please report all suspicious activity to our dedicated Anti-Abuse Mailbox at report@kalingauniversity.ac.in. We thoroughly investigate every report of suspected fraud, but generally, we do not respond to personal inquiries. Thank you for joining our effort to combat online fraud. <b>Fraudulent Use of Our Brand</b> Attempts have been made to defraud students online by the unauthorised use of the Kalinga University name and brand via email communications and graphics that appear, on the surface, to have originated from Kalinga University. Kalinga accepts no responsibility for any costs, charges, or payments made that were improperly incurred as a result of fraudulent activity.",
    },
  ];

  const tableSections = [
    internalComplaintCommittee,
    grievanceRedressalCommittee,
    womenCellCommittee,
    scStCell,
    obcCell,
    minorityCell,
    studentCouncil,
  ];

  return (
    <div className="min-h-screen bg-white pt-10">
      <FAQ
        title="List Of Important Committee Members"
        subtitle="Committees"
        variant="table-display"
        tableSections={tableSections}
        items={faqItems}
        pyClassName="py-8 md:py-12"
      />
    </div>
  );
}

