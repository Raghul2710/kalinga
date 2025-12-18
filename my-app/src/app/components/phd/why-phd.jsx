"use client";

import WhyStudy from "../department/why-study";
// 👆 update this import path to your actual WhyStudy file location

const phdWhyChooseItems = [
  {
    id: 1,
    title: "",
    body:
      "Learn from highly experienced faculty who have vast experience and knowledge and excel in both academic and research fields.",
    variant: "gray",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  },
  {
    id: 2,
    title: "",
    body:
      "Get an opportunity to collaborate with multi-national industries and institutions for project work, internship, and exposure.",
    variant: "amber",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  },
  {
    id: 3,
    title: "",
    body:
      "Our dedicated research cell supports students at every step until they obtain their Ph.D. degree.",
    variant: "gray",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  },
  {
    id: 4,
    title: "",
    body:
      "We provide complete research support through funding, grants, book publication, and patent and IPR support to deserving candidates.",
    variant: "amber",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  },
  {
    id: 5,
    title: "",
    body:
      "Our extensive library facilitates researchers with physical and digital resources, including different subject books, journals, research papers, a global database, and academic repositories.",
    variant: "gray",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  },
  {
    id: 6,
    title: "",
    body: "We provide access to research-related tools and plagiarism detection tools.",
    variant: "amber",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  },
  {
    id: 7,
    title: "",
    body:
      "With 90 + labs, including a computer lab and a CIF lab, scholars can easily conduct research work using advanced equipment.",
    variant: "gray",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  },
  {
    id: 8,
    title: "",
    body:
      "We frequently organise seminars, workshops, conferences, industrial visits, and guest lectures led by industry experts.",
    variant: "amber",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  },
  {
    id: 9,
    title: "",
    body:
      "With our collaborative learning environment, we promote a spirit of teamwork among researchers, enabling them to produce high-impact research outcomes.",
    variant: "gray",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  },
];

export default function WhyChoosePhd() {
  return (
    <WhyStudy
      items={phdWhyChooseItems}
      sectionTitle="Why Choose Kalinga For Ph.D.?"
      backgroundImage="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
    />
  );
}
