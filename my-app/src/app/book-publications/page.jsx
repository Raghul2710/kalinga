"use client";
import React from "react";
import SectionHeading from "../components/general/SectionHeading";
import PublicationCard from "../components/general/PublicationCard";


if (typeof window !== 'undefined') {

}

export default function Page() {
  const books = [
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(1).webp",
      title: "Beyond the WOMB",
      author: "Snehashish Sarkar",
      designation: "Assistant Professor",
      faculty: "Faculty of Arts and Humanities",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(2).webp",
      title: "Protection Of Plant Varieties & Farmers' Rights",
      author: "Ms. Akanksha Chaudhary",
      designation: "Assistant Professor",
      faculty: "Faculty of Law",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(27).webp",
      title: "NARI SHAKTI: The Catalyst For A Vikshit Bharat KALINGA",
      author: "Mr. Tushar Ranjan Barik",
      designation: "Assistant Professor",
      faculty: "Faculty of Commerce & Management",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(28).webp",
      title: "Cybersecurity Essentials",
      author: "Dr. Deepti Pattnaik",
      designation: "Assistant Professor",
      faculty: "Faculty of Commerce & Management",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(29).webp",
      title: "Beyond the Womb",
      author: "Mr. Kamlesh Kumar Yadav",
      designation: "Assistant Professor",
      faculty: "Faculty of CS & IT",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(3).webp",
      title: "Protection Of Plant Varieties & Farmers' Rights",
      author: "Ms.Surbhi Agarwal",
      designation: "Assistant Professor",
      faculty: "Faculty of Law",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(31).webp",
      title: "Micro Economics",
      author: "Mr. Sandeep ROy",
      designation: "Assistant Professor",
      faculty: "Faculty of Engineering and Technology",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(32).webp",
      title: "Synchronous and Induction Machines",
      author: "Mrs. Ashu Nayak",
      designation: "Assistant Professor",
      faculty: "Faculty of CS & IT",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(4).webp",
      title: "Advanced Engineering Mathematics",
      author: "Ms. Srishti Shriwastava",
      designation: "Associate Professor",
      faculty: "Faculty of Law",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(5).webp",
      title: "Modern Physics for Engineers",
      author: "Mr. Soumyadeep Chakrabarti",
      designation: "Assistant Professor",
      faculty: "Faculty of Law",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(6).webp",
      title: "Principles of Management",
      author: "Mr. Ranjan Kumar Ray",
      designation: "Assistant Professor",
      faculty: "Faculty of Law",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(7).webp",
      title: "Data Structures using C",
      author: "Dr. Anupa Sinha",
      designation: "Assistant Professor",
      faculty: "Faculty of IT",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(8).webp",
      title: "Introduction to Biotechnology",
      author: "Dr. Sushma Dubey",
      designation: "Associate Professor",
      faculty: "Faculty of Science",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(9).webp",
      title: "Pharmaceutical Inorganic Chemistry",
      author: "Dr. Preeti Pandey",
      designation: "Assistant Professor",
      faculty: "Faculty of Pharmacy",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(10).webp",
      title: "Environmental Science and Engineering",
      author: "Dr. Deepa Biswas",
      designation: "Associate Professor",
      faculty: "Faculty of Engineering",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(11).webp",
      title: "Business Communication Skills",
      author: "Dr. Shilpi Bhattacharya",
      designation: "Professor",
      faculty: "Faculty of Arts & Humanities",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(13).webp",
      title: "Consumer Behaviour",
      author: "Dr. Shinki Pandey",
      designation: "Assistant Professor",
      faculty: "Faculty of Management",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(14).webp",
      title: "Network Security and Cryptography",
      author: "Dr. R. Udaya Kumar",
      designation: "Professor",
      faculty: "Faculty of Engineering",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(15).webp",
      title: "Constitutional Law of India",
      author: "Dr. Azim Khan",
      designation: "Professor",
      faculty: "Faculty of Law",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(16).webp",
      title: "Organic Chemistry for Beginners",
      author: "Dr. Preeti Pandey",
      designation: "Assistant Professor",
      faculty: "Faculty of Science",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(17).webp",
      title: "Software Engineering Principles",
      author: "Dr. Manoj Kumar Nigam",
      designation: "Professor",
      faculty: "Faculty of IT",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(18).webp",
      title: "Digital Electronics and Logic Design",
      author: "Dr. Vijayalaxmi Biradar",
      designation: "Professor",
      faculty: "Faculty of Engineering",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(19).webp",
      title: "English Literature: A Critical History",
      author: "Dr. A. Vijayanand",
      designation: "Assistant Professor",
      faculty: "Faculty of Arts & Humanities",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(20).webp",
      title: "Physical Geography of India",
      author: "Dr. A. Rajshekhar",
      designation: "Professor",
      faculty: "Faculty of Science",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(21).webp",
      title: "Modern Indian History",
      author: "Dr. Sanjana Singh",
      designation: "Professor",
      faculty: "Faculty of Arts & Humanities",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(22).webp",
      title: "Media Law and Ethics",
      author: "Dr. Yogesh Vaishnaw",
      designation: "Assistant Professor",
      faculty: "Faculty of Journalism",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(23).webp",
      title: "Criminal Procedure Code",
      author: "Dr. Narendra Singh",
      designation: "Associate Professor",
      faculty: "Faculty of Law",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(24).webp",
      title: "Evolutionary Biology",
      author: "Dr. R. Jayakumar",
      designation: "Professor",
      faculty: "Faculty of Science",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(25).webp",
      title: "Marketing Management Trends",
      author: "Dr. Byju John",
      designation: "Professor",
      faculty: "Faculty of Management",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(26).webp",
      title: "Discrete Mathematics",
      author: "Dr. Jagannadha Rao",
      designation: "Assistant Professor",
      faculty: "Faculty of Science",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(30).webp",
      title: "Thermodynamics and Heat Transfer",
      author: "Dr. Vinay Chandra Jha",
      designation: "Professor",
      faculty: "Faculty of Engineering",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(33).webp",
      title: "Social Work and Community Development",
      author: "Dr. Manoj Mathew P",
      designation: "Assistant Professor",
      faculty: "Faculty of Arts & Humanities",
    },
    {
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/book-publications/banner(12).webp",
      title: "Advances in Zoology",
      author: "Dr. Ajay Kumar Harit",
      designation: "Associate Professor",
      faculty: "Faculty of Science",
    },
  ];


  return (
    <div className="bg-white min-h-screen">
      {/* <SectionHeading
        title={
          <>
            Book Publications
            <br />
            <span className="mt-2 text-sm md:text-base font-plus-jakarta-sans text-gray-600 font-normal">
              Remarkable Publications of Our Faculty Members
            </span>
          </>
        }
        titleClassName="text-center text-3xl md:text-5xl lg:text-6xl font-stix mt-16 md:mt-24"
      /> */}

      {/* Image Grid Section */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {books.map((book, index) => (
            <PublicationCard key={index} data={book} />
          ))}
        </div>
      </section>
    </div>
  );
}
