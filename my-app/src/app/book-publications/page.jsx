"use client";
import React from "react";
import SectionHeading from "../components/general/SectionHeading";
import PublicationCard from "../components/general/PublicationCard";


if (typeof window !== 'undefined') {

}

export default function Page() {
  const books = [
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(1).webp",
      title: "Beyond the Womb",
      author: "Snehashish Sarkar",
      designation: "Assistant Professor",
      faculty: "Faculty of Arts and Humanities",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(2).webp",
      title: "Protection Of Plant Varieties & Farmers' Rights",
      author: "Ms. Akanksha Chaudhary",
      designation: "Assistant Professor",
      faculty: "Faculty of Law",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(27).webp",
      title: "NARI SHAKTI: The Catalyst For A Vikshit Bharat",
      author: "Mr. Tushar Ranjan Barik",
      designation: "Assistant Professor",
      faculty: "Faculty of Commerce & Management",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(28).webp",
      title: "NARI SHAKTI: The Catalyst For A Vikshit Bharat",
      author: "Dr. Deepti Pattnaik",
      designation: "Assistant Professor",
      faculty: "Faculty of Commerce & Management",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(29).webp",
      title: "Cybersecurity Essentials",
      author: "Mr. Kamlesh Kumar Yadav",
      designation: "Assistant Professor",
      faculty: "Faculty of CS & IT",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(3).webp",
      title: "Protection Of Plant Varieties & Farmers' Rights",
      author: "Ms.Surbhi Agarwal",
      designation: "Assistant Professor",
      faculty: "Faculty of Law",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(31).webp",
      title: "Synchronous and Induction Machines",
      author: "Mr. Sandeep Roy",
      designation: "Assistant Professor",
      faculty: "Faculty of Engineering and Technology",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(32).webp",
      title: "Cybersecurity Essentials",
      author: "Mrs. Ashu Nayak",
      designation: "Assistant Professor",
      faculty: "Faculty of CS & IT",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(4).webp",
      title: "Protection Of Plant Varieties & Farmers' Rights",
      author: "Ms. Srishti Shriwastava",
      designation: "Associate Professor",
      faculty: "Faculty of Law",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(5).webp",
      title: "Protection Of Plant Varieties & Farmers' Rights",
      author: "Ms. Itishri Upadhyay",
      designation: "Assistant Professor",
      faculty: "Faculty of Law",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(6).webp",
      title: "Protection Of Plant Varieties & Farmers' Rights",
      author: "Mr. Soumyadeep Chakrabarti",
      designation: "Assistant Professor",
      faculty: "Faculty of Law",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(7).webp",
      title: "Protection Of Plant Varieties & Farmers' Rights",
      author: "Mr. Ranjan Kumar Ray",
      designation: "Assistant Professor",
      faculty: "Faculty of IT",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(8).webp",
      title: "Research Methodology",
      author: "Dr. D. Kalidoss",
      designation: "Associate Professor cum Director Sports",
      faculty: "",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(9).webp",
      title: "Micro Economics",
      author: "Dr. Chandra Bhoosan Singh",
      designation: "Assistant Professor",
      faculty: "Faculty of Commerce and Management",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(10).webp",
      title: "Technical Analysis",
      author_1: "Dr. Chandra Bhoosan Singh",
      author_2: "Dr. Deepti Pattnaik",
      designation: "",
      faculty: "Faculty of Commerce and Management",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(11).webp",
      title: "Taxation and GST in India",
      author: "Dr. Chandra Bhoosan Singh",
      designation: "Assistant Professor",
      faculty: "Faculty of Commerce and Management",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(13).webp",
      title: "Synchronous and Induction Machines",
      author: "Dr. Manoj Kumar Nigam",
      designation: "Professor and Head",
      faculty: "Faculty of Engineering and Technology",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(14).webp",
      title: "Geography of Bharat",
      author: "Dr. A. Rajshekar",
      designation: "Professor",
      faculty: "Faculty of Arts and Humanities",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(15).webp",
      title: "Cybersecurity Essentials",
      author: "Dr. Anupa Sinha",
      designation: "Assistant Professor",
      faculty: "Faculty of CS & IT",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(16).webp",
      title: "Nai Talim: An Experiential Learning",
      author_1: "Dr. Lubhawani Tripathi",
      author_2: "Dr. Harsha Sharma",
      designation_1: "Associate Professor",
      designation_2: "Assistant Professor",
      faculty: "Faculty of Education",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(17).webp",
      title: "Research Methodology",
      author: "Dr. Lubhawani Tripathi",
      designation: "Associate Professor",
      faculty: "Faculty of Education",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(18).webp",
      title: "Whispers of Wonderland",
      author: "Dr. Papri Mukhopadhyay",
      designation: "Assistant Professor",
      faculty: "Faculty of Arts & Humanities",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(19).webp",
      title: "",
      author: "Dr. Shraddha Hirkane",
      designation: "Associate Professor",
      faculty: "Faculty of Arts & Humanities",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(20).webp",
      title: "Railway Engineering",
      author_1: "Dr. Ruchi Chandrakar",
      author_2: "Dr. Swati Agarwal",
      author_3: "Dr. Akshit Lamba",
      author_4: "Ashutosh Pandey",
      designation_1: "Assistant Professor",
      designation_2: "Assistant Professor",
      designation_3: "Assistant Professor",
      designation_4: "Assistant Professor",
      faculty: "Faculty of Technology",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(21).webp",
      title: "Wisdom of the Ages",
      author: "Dr. Amit Joshi",
      designation: "Assistant Professor",
      faculty: "Faculty of Science",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(22).webp",
      title: "Gender and Society",
      author: "Esha Chatterjee",
      designation: "Assistant Professor",
      faculty: "Faculty of Arts and Humanities",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(23).webp",
      title: "Innovative Education strategies",
      author_1: "Dr. Shraddha Verma",
      author_2: "Dr. Saroj Nayyar",
      designation_1: "Dean",
      designation_2: "Assistant Professor",
      faculty: "Faculty of Education",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(24).webp",
      title: "Next Generation Biotechnology",
      author_1: "Dr. R. Jayakumar",
      author_2: "Dr. Megha Chaturvedi",
      designation_1: "Professor & Dean",
      designation_2: "Assistant Professor",
      faculty: "Faculty of Science",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(25).webp",
      title: "Exam Hand Pharmacist and Drug Inspector",
      author: "Dr. Sandip prasad Tiwari",
      designation: "Principal",
      faculty: "Faculty of Pharmacy",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(26).webp",
      title: "Challenges of NEP-2020",
      author: "Dr. Saroj Nayyar",
      designation: "Assistant Professor",
      faculty: "Faculty of Education",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(30).webp",
      title: "Cybersecurity and Essentials",
      author: "Mr. Omprakash Dewangan",
      designation: "Hod(Incharge)",
      faculty: "Faculty of CS & IT",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(33).webp",
      title: "Indian Contract Act",
      author: "Mrs. Saloni Tyagi Shrivastava",
      designation: "Assistant Professor",
      faculty: "Faculty of Law",
    },
    {
      img: "https://cdn.kalingauniversity.ac.in/book-publications/banner(12).webp",
      title: "Starlit Blueprint",
      author: "Dr. Satvik Jain",
      designation: "Assistant Professor",
      faculty: "Faculty of Commerce & Management",
    },
  ];

  const BookCard = ({ book }) => {
    const authors = book.author
      ? [book.author]
      : [book.author_1, book.author_2, book.author_3, book.author_4].filter(
        Boolean
      );

    const authorText =
      authors.length > 1
        ? authors.slice(0, -1).join(", ") + " & " + authors.slice(-1)
        : authors[0] || "";

    const designations = book.designation
      ? [book.designation]
      : [
        book.designation_1,
        book.designation_2,
        book.designation_3,
        book.designation_4,
      ].filter(Boolean);

    const uniqueDesignations = [...new Set(designations)];
    const designationText = uniqueDesignations.join(", ");

    return (
      <div className="bg-[#eef2f5] rounded-xl p-4 flex gap-7 hover:shadow-lg transition-all duration-300 flex-wrap md:flex-nowrap">
        {/* Left side: Image */}
        <div className="w-full md:w-2/5 flex-shrink-0 max-h-52 overflow-hidden rounded-lg shadow-sm border border-black/5">
          <img
            src={book.img}
            alt={book.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right side: Metadata */}
        <div className="md:w-3/5 flex flex-col py-1 justify-around">
          <h3 className="font-stix text-[#a34439] text-base md:text-lg lg:text-xl font-medium leading-tight font-plus-jakarta-sans">
            {book.title}
            <div className="w-16 h-px bg-gray-300 my-3"></div>
          </h3>

          <div className="space-y-1">
            <p className="font-stix text-lg md:text-xl font-medium text-gray-800">
              By {authorText}
            </p>
            <p className="text-xs md:text-sm">{designationText}</p>
            <p className="text-xs tracking-tight mt-1">{book.faculty}</p>
          </div>
        </div>
      </div>
    );
  };

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
