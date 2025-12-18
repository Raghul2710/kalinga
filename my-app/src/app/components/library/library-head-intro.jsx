"use client";

import MentorIntro from "../department/dept_head_intro";

export default function LibraryHeadMessage() {
  return (
    <div className="-mt-12 md:-mt-16">
      
      <MentorIntro
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
        title="Dr. Mohammad Nasir"
        subtitle="University Librarian"
        department="A Message From the Head Librarian"
        quote="I believe that a library is not just meant for reading, but it's a hub of exploration, research, and self-discovery. Kalinga University’s library offers a pool of resources to its faculty and students, providing them with informative resources in various disciplines. We constantly upgrade and expand our library’s online and offline materials, fulfilling the latest academic requirements of our students. It supports researchers with high-quality journals, research papers, and access to various digital libraries and databases. With our high-speed internet connection, students easily obtain the information they need. It is a space where they don’t just learn but get inspired to make a positive change in their lives. I welcome all students, faculty, and research scholars to make the most of our library."
      />
    </div>
  );
}
