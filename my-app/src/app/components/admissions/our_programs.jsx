"use client";
import { useState } from "react";
import SectionHeading from "../general/SectionHeading";
import ProgramCard from "../general/program-card";
const programsData = [
  {
    title: "B.Tech",
    specialization: "C.S in AI & ML in collaboration with IBM",
    duration: "3 Year",
    type: "UG"
  },
  {
    title: "B.Tech",
    specialization: "(Electrical, Mechanical & Civil)",
    duration: "3 Year",
    type: "UG"
  },
  {
    title: "B.Tech",
    specialization: "(Electrical, Mechanical & Civil)",
    duration: "3 Year",
    type: "UG"
  },
  {
    title: "B.Tech",
    specialization: "(Electrical, Mechanical & Civil)",
    duration: "3 Year",
    type: "UG"
  },
  {
    title: "B.Tech",
    specialization: "(Electrical, Mechanical & Civil)",
    duration: "3 Year",
    type: "UG"
  },
  {
    title: "B.Tech",
    specialization: "(Electrical, Mechanical & Civil)",
    duration: "3 Year",
    type: "UG"
  },
  
];

export default function OurPrograms() {
  const [selectedDiploma, setSelectedDiploma] = useState("Diploma");
  const [selectedFaculty, setSelectedFaculty] = useState("Faculty of Engineering & Technology");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrograms = programsData.filter((program) => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;
    return (
      program.title.toLowerCase().includes(query) ||
      program.specialization.toLowerCase().includes(query) ||
      program.type.toLowerCase().includes(query) ||
      program.duration.toLowerCase().includes(query)
    );
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-2">
        {/* Title and Subtitle */}
        <div className="text-center mb-5">
          <SectionHeading
            subtitle="Explore Our Programs"
            title="Discover a World of Learning Opportunities"
            subtitleClassName="text-center text-[var(--button-red)]"
            titleClassName="text-center"
            subtitleTextColor="text-center"
          />
        </div>

        {/* Programs Container */}
        <div className="bg-[var(--dark-blue)] rounded-2xl p-5 relative overflow-hidden">
          {/* Search and Filter Section - Single White Bar */}
          <div className="bg-[var(--light-gray)] border border-white rounded-lg flex flex-col md:flex-row items-stretch mb-8 relative z-20 overflow-hidden">
            {/* Diploma Dropdown - Left Section */}
            <div className="relative flex-shrink-0 md:w-32 lg:w-36 border-r border-gray-200">
              <select
                value={selectedDiploma}
                onChange={(e) => setSelectedDiploma(e.target.value)}
                className="w-full bg-transparent px-4 py-3 text-[var(--button-red)] text-sm md:text-base font-medium appearance-none pr-8 focus:outline-none cursor-pointer"
              >
                <option value="Diploma">Diploma</option>
                <option value="Degree">Degree</option>
                <option value="Certificate">Certificate</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="var(--button-red)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Faculty Dropdown - Middle Section */}
            <div className="relative flex-1 border-r border-gray-200">
              <select
                value={selectedFaculty}
                onChange={(e) => setSelectedFaculty(e.target.value)}
                className="w-full bg-transparent px-4 py-3 text-[var(--foreground)] text-sm md:text-base appearance-none pr-10 focus:outline-none cursor-pointer"
              >
                <option value="Faculty of Engineering & Technology">Faculty of Engineering & Technology</option>
                <option value="Faculty of Management">Faculty of Management</option>
                <option value="Faculty of Science">Faculty of Science</option>
                <option value="Faculty of Arts">Faculty of Arts</option>
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none bg-[var(--background)] rounded p-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="var(--button-red)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Search Bar - Right Section (Red) */}
            <div className="relative flex-1 bg-[var(--button-red)] border border-white rounded-lg">
              <input
                type="text"
                placeholder="Search Programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent px-4 py-3 pr-12 text-white placeholder-white text-sm md:text-base focus:outline-none"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-5">
            {filteredPrograms.length === 0 && (
              <div className="col-span-full text-center text-white/80">
                No programs match your search.
              </div>
            )}
            {filteredPrograms.map((program, index) => (
              <ProgramCard
                key={index}
                program={program}
                onCheckEligibility={(program) => console.log('Check Eligibility', program)}
                onApplyNow={(program) => console.log('Apply Now', program)}
                onScholarshipsClick={(program) => console.log('Scholarships', program)}
                onExploreProgramClick={(program) => console.log('Explore Program', program)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

