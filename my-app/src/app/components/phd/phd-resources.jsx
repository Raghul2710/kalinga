"use client";

import { useMemo, useState } from "react";
import SectionHeading from "@/app/components/general/SectionHeading";

function LinkItem({ label, href }) {
  return (
    <li className="list-none">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={[
          "group inline-flex items-center gap-3",
          "rounded-full px-5 py-2 text-sm font-semibold",
          "border border-[#8B2C2C]",
          "bg-[#8B2C2C] text-white",
          "shadow-sm transition-all duration-200 ease-out",
          "hover:bg-[#F6E1CF] hover:text-[#8B2C2C]",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B2C2C]/40",
        ].join(" ")}
      >
        <span className="whitespace-nowrap transition-colors duration-200">
          {label}
        </span>

        <span
          className={[
            "inline-flex h-8 w-8 items-center justify-center rounded-lg",
            "bg-white transition-all duration-200 ease-out",
            "group-hover:bg-[#8B2C2C]",
          ].join(" ")}
          aria-hidden="true"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={[
              "text-[#8B2C2C]",
              "transition-all duration-200 ease-out",
              "group-hover:text-white",
              "group-hover:translate-x-0.5",
              "group-hover:rotate-45",
            ].join(" ")}
          >
            <path
              d="M6.2 3.5H12.5V9.8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 3.5L3.5 12.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>
    </li>
  );
}

function FaqStyledTable({ columns = [], rows = [] }) {
  return (
    <div className="w-full overflow-x-auto rounded-lg">
      <table
        className="min-w-full w-max"
        style={{ borderSpacing: 0, borderCollapse: "separate" }}
      >
        <thead>
          <tr className="bg-[#1e3a8a]">
            {columns.map((c, idx) => (
              <th
                key={c}
                className={[
                  "border-gray-300 border-b border-r border-t p-3 text-left",
                  "font-plus-jakarta-sans font-semibold text-sm text-white",
                  idx === 0 ? "border-l rounded-tl-lg" : "",
                  idx === columns.length - 1 ? "rounded-tr-lg" : "",
                  "whitespace-nowrap",
                ].join(" ")}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="border-gray-300 border-b border-r border-l p-8 text-center text-gray-500 font-plus-jakarta-sans rounded-b-lg"
              >
                No data available
              </td>
            </tr>
          ) : (
            rows.map((r, rowIdx) => {
              const isLastRow = rowIdx === rows.length - 1;
              return (
                <tr
                  key={rowIdx}
                  className={rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  {r.map((cell, cidx) => (
                    <td
                      key={cidx}
                      className={[
                        "border-gray-300 border-b border-r p-3",
                        "text-gray-700 font-plus-jakarta-sans text-sm align-top",
                        cidx === 0 ? "border-l" : "",
                        isLastRow && cidx === 0 ? "rounded-bl-lg" : "",
                        isLastRow && cidx === r.length - 1
                          ? "rounded-br-lg"
                          : "",
                        cidx === r.length - 1 ? "text-center align-middle" : "",
                      ].join(" ")}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default function PhdResourcesAccordion({ className = "" }) {
  const sections = useMemo(
    () => [
      {
        title: "Ph.D. Ordinance",
        body: (
          <ul className="flex flex-wrap gap-3">
            <LinkItem
              label="Ordinance No. 48"
              href="https://cdn.kalingauniversity.ac.in/phd/Ordinance+No.+48+(16.09.2013).pdf"
            />
            <LinkItem
              label="Revised Ordinance No. 48"
              href="https://cdn.kalingauniversity.ac.in/phd/Amended+Ordinance+No.+48+(18.02.2022).pdf"
            />
          </ul>
        ),
      },
      {
        title: "Thesis Format",
        body: (
          <ul className="flex flex-wrap gap-3">
            <LinkItem
              label="Cover Page Format"
              href="https://cdn.kalingauniversity.ac.in/phd/Kalinga+University-+Cover+Page+-Thesis.pdf"
            />
            <LinkItem
              label="Synopsis Format"
              href="https://cdn.kalingauniversity.ac.in/phd/Kalinga+University+-Synopsis+Format+-Cover+Page+(1).pdf"
            />
            <LinkItem
              label="Summary Format"
              href="https://cdn.kalingauniversity.ac.in/phd/Kalinga+University+-Summary+Format-+Cover+page.pdf"
            />
            <LinkItem
              label="Arrangement of Thesis Content"
              href="https://cdn.kalingauniversity.ac.in/phd/ARRANGEMENT+OF+THESIS+CONTENTS.pdf"
            />
            <LinkItem
              label="Thesis Chapterization"
              href="https://cdn.kalingauniversity.ac.in/phd/Kalinga+University-+Thesis+Chapterization_Final.pdf"
            />
          </ul>
        ),
      },
      {
        title: "Ph.D. Admission Policy",
        body: (
          <ul className="flex flex-wrap gap-3">
            <LinkItem
              label="Ph.D. Admission Policy"
              href="https://cdn.kalingauniversity.ac.in/phd/2.+Admission+poilcy+(1).pdf"
            />
          </ul>
        ),
      },
      {
        title: "Detailed Syllabus of Research Methodology",
        body: (
          <ul className="flex flex-wrap gap-3">
            <LinkItem
              label="Detailed Syllabus"
              href="https://cdn.kalingauniversity.ac.in/phd/Detailed+Syllabus.pdf"
            />
          </ul>
        ),
      },
      {
        title: "Fellowship Scholarship Policy for Ph.D. Scholars",
        body: (
          <ul className="flex flex-wrap gap-3">
            <LinkItem
              label="Fellowship Scholarship Policy"
              href="https://cdn.kalingauniversity.ac.in/phd/3.+Fellowship+Scholarship+Policy+for+Ph.D.+Scholars.pdf"
            />
          </ul>
        ),
      },
      {
        title: "Policy for the Grievance Redress Mechanism of Scholars",
        body: (
          <ul className="flex flex-wrap gap-3">
            <LinkItem
              label="Grievance Redress Policy"
              href="https://cdn.kalingauniversity.ac.in/phd/6+POLICY+FOR+GRIEVANCE+REDRESS+MECHANISM+OF+SCHOLARS.pdf"
            />
          </ul>
        ),
      },
      {
        title: "Ph.D. Process Improvement",
        body: (
          <ul className="flex flex-wrap gap-3">
            <LinkItem
              label="Best Practices & Process Improvement"
              href="https://cdn.kalingauniversity.ac.in/phd/Best+Practices+%26+Process+Improvement+(1).pdf"
            />
          </ul>
        ),
      },
      {
        title: "UGC Regulations",
        body: (
          <ul className="flex flex-wrap gap-3">
            <LinkItem
              label="2022"
              href="https://cdn.kalingauniversity.ac.in/phd/UGC+Regulation+2022+(1).pdf"
            />
            <LinkItem
              label="2016"
              href="https://cdn.kalingauniversity.ac.in/phd/UGC+Regulations+2016+(1).pdf"
            />
            <LinkItem
              label="2018"
              href="https://cdn.kalingauniversity.ac.in/phd/UGCNotification_Plagiarism_2018.pdf"
            />
          </ul>
        ),
      },
      {
        title: "Ph.D. Notification 2025-26",
        body: (
          <ul className="flex flex-wrap gap-3">
            <LinkItem
              label="Ph.D. Notification 2025-26"
              href="https://cdn.kalingauniversity.ac.in/phd/Ph.+D.+2025+Notification+26-07-2025.pdf"
            />
          </ul>
        ),
      },
      {
        title: "Details of Currently Enrolled Ph.d. Scholars and Supervisors",
        body: (
          <ul className="flex flex-wrap gap-3">
            <LinkItem
              label="Open Page"
              href="/research"
            />
          </ul>
        ),
      },
      {
        title: "University Register Scholar In Various Fellowship Programmes",
        body: (
          <div className="space-y-6">
            <div className="rounded-lg border border-neutral-200 bg-white/60 p-3 sm:p-4 phd-table-scope">
              <FaqStyledTable
                columns={["S.No.", "Scheme Name", "Scheme Full Form"]}
                rows={[
                  ["1", "CSIR", "COUNCIL OF SCIENTIFIC AND INDUSTRIAL RESEARCH"],
                  [
                    "2",
                    "NET-JOINT-CSIR",
                    "JOINT COUNCIL OF SCIENTIFIC AND INDUSTRIAL RESEARCH",
                  ],
                  ["3", "UGC-NETJRF", "NATIONAL ELIGIBILITY TEST"],
                  // ["4", "NFSC", "NATIONAL FELLOWSHIP FOR SCHEDULED CASTE"],
                  // ["5", "NFST", "NATIONAL FELLOWSHIP FOR SCHEDULED TRIBES"],
                  // [
                  //   "6",
                  //   "INSPIRE",
                  //   "INNOVATION IN SCIENCE PURSUIT FOR INSPIRED RESEARCH",
                  // ],
                ]}
              />
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white/60 p-3 sm:p-4 phd-table-scope">
              <FaqStyledTable
                columns={[
                  "S.No.",
                  "Year",
                  "Status",
                  "Scheme",
                  "Name of Scholar",
                  "Fathers’ Name",
                  "Subject",
                  "Image",
                ]}
                rows={[
                  [
                    "1",
                    "2025",
                    "PENDING",
                    "NETJRF",
                    "ROBIN KUMAR VERMA",
                    "SANTOSH DAS",
                    "YOGA",
                    <img
                      key="img1"
                      src="https://cdn.kalingauniversity.ac.in/phd/phd_scholar_1.jpg"
                      alt="ROBIN KUMAR VERMA"
                    />,
                  ],
                  [
                    "2",
                    "2025",
                    "PENDING",
                    "NETJRF",
                    "SHUBHAM SINGH",
                    "VISHNU SINGH",
                    "YOGA",
                    <img
                      key="img2"
                      src="https://cdn.kalingauniversity.ac.in/phd/phd_scholar_2.jpg"
                      alt="SHUBHAM SINGH"
                    />,
                  ],
                  [
                    "3",
                    "2025",
                    "PENDING",
                    "CSIR",
                    "PRIYA",
                    "ASHOK MALIK",
                    "ZOOLOGY",
                    <img
                      key="img3"
                      src="https://cdn.kalingauniversity.ac.in/phd/Phd-scholar-priya.webp"
                      alt="PRIYA"
                    />,
                  ],
                  [
                    "4",
                    "2025",
                    "PENDING",
                    "NETJRF",
                    "SHEETAL NAIK",
                    "GOURISHANKAR",
                    "ZOOLOGY",
                    <img
                      key="img4"
                      src="https://cdn.kalingauniversity.ac.in/phd/phd_scholar_4.jpg"
                      alt="SHEETAL NAIK"
                    />,
                  ],
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        title: "Undertaking",
        body: (
          <ul className="flex flex-wrap gap-3">
            <LinkItem
              label="Undertaking"
              href="https://cdn.kalingauniversity.ac.in/phd/Undertaking+(1).pdf"
            />
          </ul>
        ),
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={`bg-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8 flex justify-center">
          <SectionHeading
            title="Ph.D. Resources"
            subtitle={null}
            titleClassName="leading-tight text-center text-[#8B2C2C]"
            subtitleClassName="text-center"
          />
        </div>

        <div className="w-full max-w-6xl mx-auto space-y-4">
          {sections.map((sec, idx) => {
            const isOpen = idx === openIndex;

            return (
              <div
                key={sec.title}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className={[
                    "w-full flex items-center justify-between p-4 transition-colors",
                    isOpen
                      ? "bg-[#8B2C2C] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200",
                  ].join(" ")}
                >
                  <h3 className="text-left text-lg font-plus-jakarta-sans font-semibold pr-4">
                    {sec.title}
                  </h3>

                  <span className="flex-shrink-0">
                    <span
                      className={["inline-flex h-8 w-8 items-center justify-center rounded", "bg-white"].join(
                        " "
                      )}
                      aria-hidden="true"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#8B2C2C]"
                      >
                        <path
                          d={isOpen ? "M4 10L8 6L12 10" : "M4 6L8 10L12 6"}
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="p-4 sm:p-5 md:p-6 bg-[var(--lite-sand)]">
                    {sec.body}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ✅ ONLY for uniform images inside your tables */}
      <style jsx global>{`
        .phd-table-scope table td:last-child {
          text-align: center;
          vertical-align: middle;
        }
        .phd-table-scope table img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 8px;
          display: block;
          margin: 0 auto;
        }
          /* Center-align only "Scheme Full Form" column */
  .phd-table-scope table th:nth-child(3),
  .phd-table-scope table td:nth-child(3) {
    text-align: center;
  }
      `}</style>
    </section>
  );
}
