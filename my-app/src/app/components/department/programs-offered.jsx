"use client";
import Image from "next/image";
import { useState } from "react";

const programs = [
  {
    id: 1,
    title: "Bachelor of Computer Application (BCA)",
    duration: "3 Year",
    level: "UG",
  },
  {
    id: 2,
    title: "Bachelor of Science (Computer Science)",
    duration: "3 Year",
    level: "UG",
  },
  {
    id: 3,
    title: "Diploma in Computer Application",
    duration: "1 Year",
    level: "Diploma",
  },
  {
    id: 4,
    title: "Master in Computer Application",
    duration: "2 Year",
    level: "PG",
  },
  {
    id: 5,
    title: "Bachelor of Technology (B.Tech)",
    duration: "4 Year",
    level: "UG",
  },
  {
    id: 6,
    title: "Master of Technology (M.Tech)",
    duration: "2 Year",
    level: "PG",
  },
];

export default function ProgramsOffered() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrograms = programs.filter((program) =>
    program.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-[var(--dark-blue)] relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="lg:pt-30">
              <h2 className="text-white mb-4">Programs Offered</h2>
              <p className="text-white leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidi
              </p>
            </div>
            <div className="mt-auto">
              <Image
                src="https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/programs-offered.webp"
                alt="Students"
                width={500}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col py-16 order-1 lg:order-2">
            {/* Search Bar */}
            <div className="relative p-4 px-4">
              <input
                type="text"
                placeholder="Search Programs...."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[var(--button-red)] text-white placeholder-white px-4 py-3 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white mr-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Program List */}
            <div className="p-4 max-h-[550px] overflow-y-auto custom-scrollbar">
              {filteredPrograms.map((program) => (
                <div
                  key={program.id}
                  className="bg-white rounded-lg p-5 mb-4 relative border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Background Level Text */}
                  <div className="absolute inset-0 flex items-end justify-end pointer-events-none px-3">
                    <h2 className="text-gray-200 opacity-40">
                      {program.level}
                    </h2>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-[var(--button-red)] font-semibold mb-2 text-lg font-plus-jakarta-sans">
                        {program.title}
                      </h3>
                      <div className="flex items-center gap-2">
                      <p className="text-[var(--light-text-gray)] !font-[500]">
                        Duration: {program.duration}
                      </p>
                      <a
                      href="#"
                      className="font-[500] flex items-center gap-1 hover:gap-2 transition-all ml-4"
                    >
                      Explore Program
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[var(--button-red)]"
                      >
                        <path
                          d="M4 12L12 4M12 4H6M12 4V10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

