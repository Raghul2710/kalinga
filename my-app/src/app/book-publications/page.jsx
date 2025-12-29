"use client";
import React from "react";
import SectionHeading from "../components/general/SectionHeading";


// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-front-banner02.webp",
  pageTitle: "Book Publications",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Book Publications', href: '/book-publications' }
  ]
};

// Register breadcrumb data globally
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}

export default function Page() {
  const images = [
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(1).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(2).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(27).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(28).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(29).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(3).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(31).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(32).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(4).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(5).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(6).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(7).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(8).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(9).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(10).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(11).webp",
  
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(13).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(14).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(15).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(16).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(17).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(18).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(19).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(20).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(21).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(22).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(23).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(24).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(25).webp",
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(26).webp",
  
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(30).webp",
  
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(33).webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(12).webp",
  ];

  return (
    <>
   <SectionHeading 
  title={
    <>
      Book Publications
      <br />
      <span className=" mt-2 text-sm  text-gray-600">
        Remarkable Publications of Our Faculty Members
      </span>
    </>
  }
  titleClassName="text-center text-2xl md:text-5xl font-stix mt-20"
/>


      {/* Image Grid Section */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-[350px] object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
