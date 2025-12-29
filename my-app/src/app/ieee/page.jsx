"use client";

import React from "react";
import dynamic from "next/dynamic";
import FAQ from "@/app/components/general/faq";

/* ---------------- DYNAMIC IMPORT ---------------- */

const Gallery = dynamic(
  () => import("@/app/components/general/gallery"),
  { ssr: false }
);

/* ---------------- GALLERY IMAGES ---------------- */

const galleryImages = [
  { id: 1, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(1).webp", alt: "IEEE(1)" },
  { id: 2, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(2).webp", alt: "IEEE(2)" },
  { id: 3, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(3).webp", alt: "IEEE(3)" },
  { id: 4, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(4).webp", alt: "IEEE(4)" },
  { id: 5, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(5).webp", alt: "IEEE(5)" },
  { id: 6, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(6).webp", alt: "IEEE(6)" },
  { id: 7, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(7).webp", alt: "IEEE(7)" },
  { id: 8, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(8).webp", alt: "IEEE(8)" },
  { id: 9, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(9).webp", alt: "IEEE(9)" },
  { id: 10, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(10).webp", alt: "IEEE(10)" },
  { id: 11, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(11).webp", alt: "IEEE(11)" },
  { id: 12, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(12).webp", alt: "IEEE(12)" },
  { id: 13, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(13).webp", alt: "IEEE(13)" },
  { id: 14, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(14).webp", alt: "IEEE(14)" },
  { id: 15, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(15).webp", alt: "IEEE(15)" },
  { id: 16, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(16).webp", alt: "IEEE(16)" },
  { id: 17, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(17).webp", alt: "IEEE(17)" },
  { id: 18, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(18).webp", alt: "IEEE(18)" },
  { id: 19, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(19).webp", alt: "IEEE(19)" },
  { id: 20, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(20).webp", alt: "IEEE(20)" },
  { id: 21, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(21).webp", alt: "IEEE(21)" },
  { id: 22, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(22).webp", alt: "IEEE(22)" },
  { id: 23, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(23).webp", alt: "IEEE(23)" },
  { id: 24, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(24).webp", alt: "IEEE(24)" },
  { id: 25, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IEEE/IEEE(25).webp", alt: "IEEE(25)" },
];

/* ---------------- BREADCRUMB DATA ---------------- */

const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/alumini/alumini.webp",
  pageTitle: "The Institute of Electrical and Electronics Engineers (IEEE)",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "IEEE", href: "/ieee" },
  ],
};

if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

/* ---------------- IIC COMMITTEE TABLE ---------------- */
const ieeeMembers = [
  { sno: 1, name: "Dr. Vijayalaxmi Biradar", designation: "Faculty", membershipId: "92478983" },
  { sno: 2, name: "Dr. Sanyogita Shahi", designation: "Faculty", membershipId: "97528578" },
  { sno: 3, name: "Dr. Rahul Mishra", designation: "Faculty", membershipId: "98299084" },
  { sno: 4, name: "Dr. Smita Premanand", designation: "Faculty", membershipId: "98478199" },
  { sno: 5, name: "Mr. Pankaj Tiwari", designation: "Faculty", membershipId: "98635286" },
  { sno: 6, name: "Dr. Anu G. Pillai", designation: "Faculty", membershipId: "98754085" },
  { sno: 7, name: "Dr. Anita Verma", designation: "Faculty", membershipId: "99682747" },
  { sno: 8, name: "Dr. Praveen Kumar Yadaw", designation: "Faculty", membershipId: "99982254" },
  { sno: 9, name: "Mr. Abhishek Kumar Singh", designation: "Faculty", membershipId: "100826965" },
  { sno: 10, name: "Mr. Abhishek Gupta", designation: "Faculty", membershipId: "100827345" },

  { sno: 11, name: "Md. Arsh Khan", designation: "Faculty", membershipId: "101147721" },
  { sno: 12, name: "Dr. Shraddha Verma", designation: "Faculty", membershipId: "101280406" },

  { sno: 13, name: "Koda Aayushi Rao", designation: "Student", membershipId: "100043089" },
  { sno: 14, name: "Vedant Raj", designation: "Student", membershipId: "100057335" },
  { sno: 15, name: "Piyush Srivastava", designation: "Student", membershipId: "100057465" },
  { sno: 16, name: "Priyanshu Singh", designation: "Student", membershipId: "100071524" },
  { sno: 17, name: "Shibam Khadanga", designation: "Student", membershipId: "100489296" },
  { sno: 18, name: "Balwant Kumar Sahani", designation: "Student", membershipId: "100489427" },
  { sno: 19, name: "Sneha Khetan", designation: "Student", membershipId: "100489433" },
  { sno: 20, name: "Shalini Kodopi", designation: "Student", membershipId: "100489474" },
  { sno: 21, name: "Shreya Kumari", designation: "Student", membershipId: "100497667" },
  { sno: 22, name: "Shreyaanshi Pandey", designation: "Student", membershipId: "100500239" },
  { sno: 23, name: "Simpi Kumari", designation: "Student", membershipId: "100511898" },
  { sno: 24, name: "Ayush Yadav", designation: "Student", membershipId: "100514845" },
  { sno: 25, name: "Dehuti Dhruw", designation: "Student", membershipId: "100532703" },
  { sno: 26, name: "Prajjval Vyas", designation: "Student", membershipId: "100638125" },
  { sno: 27, name: "Somnath Jha", designation: "Student", membershipId: "100658317" },
  { sno: 28, name: "Komal Sahu", designation: "Student", membershipId: "100658347" },
  { sno: 29, name: "Alisha Meher", designation: "Student", membershipId: "100658472" },
  { sno: 30, name: "Priti Karmakar", designation: "Student", membershipId: "100658513" },
  { sno: 31, name: "Md. Aiman Shafi", designation: "Student", membershipId: "100664029" },
  { sno: 32, name: "Luckey Kumar", designation: "Student", membershipId: "100665820" },
  { sno: 33, name: "Haripriya Bag", designation: "Student", membershipId: "100666045" },
  { sno: 34, name: "Chilikuri Shivani", designation: "Student", membershipId: "100666290" },
  { sno: 35, name: "Nikhil", designation: "Student", membershipId: "100669552" },
  { sno: 36, name: "Aditya Shekhar", designation: "Student", membershipId: "100669618" },
  { sno: 37, name: "Ananya Shahi", designation: "Student", membershipId: "100672248" },
  { sno: 38, name: "Himanshu Jha", designation: "Student", membershipId: "100672305" },
  { sno: 39, name: "Nivruti Sharma", designation: "Student", membershipId: "100672352" },
  { sno: 40, name: "Bhargavi", designation: "Student", membershipId: "100672380" },
  { sno: 41, name: "Apurva Sharma", designation: "Student", membershipId: "100672865" },
  { sno: 42, name: "Chetna Kaushik", designation: "Student", membershipId: "100708131" },
  { sno: 43, name: "Md. Tawis Ansari", designation: "Student", membershipId: "100887194" },
  { sno: 44, name: "Namala Mahesh", designation: "Student", membershipId: "101129647" },
  { sno: 45, name: "Goon Shah", designation: "Student", membershipId: "101177641" },
  { sno: 46, name: "Vishesh Satapathy", designation: "Student", membershipId: "101181975" },
  { sno: 47, name: "Vishal Raj", designation: "Student", membershipId: "101182019" },
  { sno: 48, name: "J Ayushman Prusty", designation: "Student", membershipId: "101182745" },
  { sno: 49, name: "Raj Kumar Banjare", designation: "Student", membershipId: "101202293" },
  { sno: 50, name: "Nikhil Dewangan", designation: "Student", membershipId: "101202330" },
  { sno: 51, name: "Mukund Raj", designation: "Student", membershipId: "101251546" },
  { sno: 52, name: "Chandan Kumar", designation: "Student", membershipId: "101285129" },
  { sno: 53, name: "Amit Kumar", designation: "Student", membershipId: "101285213" },
  { sno: 54, name: "Prathmesh Ravi Geeta Rathod", designation: "Student", membershipId: "101285308" },
  { sno: 55, name: "Harshita Chandrakar", designation: "Student", membershipId: "101285061" },
  { sno: 56, name: "Bhavana Sharma", designation: "Student", membershipId: "101285159" },
  { sno: 57, name: "Sai Smita Sarangi", designation: "Student", membershipId: "101244263" },
  { sno: 58, name: "Bhumika Patel", designation: "Student", membershipId: "101299924" },
  { sno: 59, name: "Punyaswetha Pattjoshi", designation: "Student", membershipId: "101300025" },
  { sno: 60, name: "Sarvesh Bhardwaj", designation: "Student", membershipId: "101304885" },
  { sno: 61, name: "Ashutosh Singh", designation: "Student", membershipId: "101304984" },
  { sno: 62, name: "Aniket Kumar", designation: "Student", membershipId: "101305124" },
  { sno: 63, name: "Reetika Kumari", designation: "Student", membershipId: "101322037" },
  { sno: 64, name: "Ishanvi Isha", designation: "Student", membershipId: "101322077" },
  { sno: 65, name: "Rakhi Kumari", designation: "Student", membershipId: "101394320" },
];

const ieeeSection = [
  {
    id: 1,
    title: "IEEE KU SB Members",
    columns: [
      { key: "sno", label: "S. No.", width: "w-20" },
      { key: "name", label: "Name", width: "w-80" },
      { key: "designation", label: "Designation", width: "w-40" },
      { key: "membershipId", label: "Membership ID", width: "w-40" },
    ],
    data: ieeeMembers,
  },
];


/* ---------------- PAGE COMPONENT ---------------- */

export default function Page() {
  return (
    <>
      <Gallery title="Glimpse" images={galleryImages} />

      {/* ✅ LAST SECTION – FAQ TABLE */}
      <FAQ
        title="IIC Committee"
        showHeading={false}
        variant="table-display"
        items={[]}
        tableSections={ieeeSection}
        overflowX={false}
      />
    </>
  );
}
