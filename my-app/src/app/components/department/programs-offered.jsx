"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { normalizeString, rankAndSortPrograms } from "@/app/lib/search-utils";

const defaultPrograms = [
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
  {
    id: 6,
    title: "Master of Technology (M.Tech)",
    duration: "2 Year",
    level: "PG",
  },
  {
    id: 6,
    title: "Master of Technology (M.Tech)",
    duration: "2 Year",
    level: "PG",
  },
];

export default function ProgramsOffered({
  programs = defaultPrograms,
  title = "Programs Offered",
  description = "Explore our diverse academic programs designed to empower your future.",
  backgroundImage = "https://cdn.kalingauniversity.ac.in/aiml/aiml-banner.webp",
  imageAlt = "Students",
  hideSearch = false
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrograms = useMemo(() => {
    return rankAndSortPrograms(programs, searchQuery, { includeDept: false });
  }, [programs, searchQuery]);

  return (
    <section className="bg-[var(--dark-blue)] relative mx-2 rounded-xl pt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-15">
          {/* Left Column */}
          <div className="flex flex-col gap-6 order-1 lg:order-1">
            <div >
              <h2 className="text-white mb-4">{title}</h2>
              <div
                className="text-white leading-relaxed pr-10 [&_a]:text-white [&_a]:underline [&_a]:font-bold transition-colors"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
            <div className="pb-5">
              <Image
                src={backgroundImage}
                alt={imageAlt}
                width={800}
                height={600}
                className="rounded-lg object-cover w-full h-[300px] md:h-[400px] lg:h-[500px]"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center order-2 lg:order-2">
            {/* Search Bar */}
            {!hideSearch && (
              <div className="relative pb-4 px-3 lg:px-0">
                <input
                  type="text"
                  placeholder="Search Programs...."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[var(--button-red)] text-white placeholder-white px-4 py-5 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <svg
                  className="absolute right-4 top-[42%] transform -translate-y-1/2 w-7 h-7 text-white mr-5"
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
            )}

            {/* Program List */}
            <div className="max-h-[620px] overflow-y-auto custom-scrollbar p-3">
              {filteredPrograms.length === 0 && (
                <div className="text-white/70 text-center py-10 bg-white/5 rounded-lg border border-white/10">
                  No programs found matching your search.
                </div>
              )}
              {filteredPrograms.map((program) => (
                <div
                  key={program.id}
                  className="bg-white rounded-lg p-6 mb-4 relative border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
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
                      {/* Red Heading - Short Name */}
                      <h3 className="text-[var(--button-red)] text-xl md:text-2xl lg:text-3xl !font-medium mb-1 font-plus-jakarta-sans normal-case  !text-base md:!text-lg lg:!text-xl">
                        {program.shortName || program.title}
                      </h3>

                      {/* Full Name - Next line */}
                      {program.shortName && (
                        <p className="text-gray-600 text-xs md:text-sm font-medium mb-3 font-plus-jakarta-sans">
                          {program.title}
                        </p>
                      )}

                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-[var(--light-text-gray)] !font-[500]">
                          Duration: {program.duration}
                        </p>
                        <Link
                          href={program.slug ? `/courses/${program.slug}` : "/admissions"}
                          className="font-[500] flex items-center gap-1 hover:gap-2 transition-all md:ml-4 text-[var(--foreground)] hover:text-[var(--button-red)]/80"
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
                        </Link>
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

