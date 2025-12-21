"use client";

import { useMemo, useState } from "react";
import SectionHeading from "@/app/components/general/SectionHeading";

function LinkItem({ label, href }) {
  return (
    <li className="text-sm text-neutral-700">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="hover:underline break-words"
      >
        {label}
      </a>
    </li>
  );
}

function FaqStyledTable({ columns = [], rows = [] }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="text-neutral-700">
          <tr className="border-b border-neutral-200 bg-white/60">
            {columns.map((c) => (
              <th key={c} className="py-3 px-3 font-semibold whitespace-nowrap">
                {c}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-neutral-700">
          {rows.map((r, idx) => (
            <tr
              key={idx}
              className="border-b border-neutral-200 last:border-b-0"
            >
              {r.map((cell, cidx) => (
                <td key={cidx} className="py-3 px-3 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
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
          <ul className="space-y-2">
            <LinkItem
              label="Ordinance No. 48 (16.09.2013)"
              href="https://drive.google.com/file/d/1UDgaoHsULXWseDmT_j7qcvaPu7P6Kmnh/view?usp=drive_link"
            />
            <LinkItem
              label="Revised Ordinance No. 48 (18.02.2022)"
              href="https://drive.google.com/file/d/1fLV_cdfFiTfBC-t2NSMVmjxz3e0grAjF/view?usp=drive_link"
            />
          </ul>
        ),
      },
      {
        title: "Thesis Format",
        body: (
          <ul className="space-y-2">
            <LinkItem
              label="Cover Page Format"
              href="https://drive.google.com/file/d/1xoTLDsrIdlYXKbEN91RLjkdY_sHsfoaf/view?usp=drive_link"
            />
            <LinkItem
              label="Synopsis Format"
              href="https://drive.google.com/file/d/1DYa7_p2ApN5ob2GkkKXra2ASx0lZo4tY/view?usp=drive_link"
            />
            <LinkItem
              label="Summary Format"
              href="https://drive.google.com/file/d/1d2waUAP38daCljZaViYJUT9hrD0JGUb-/view?usp=drive_link"
            />
            <LinkItem
              label="Arrangement of Thesis Content"
              href="https://drive.google.com/file/d/1-KToXxcakDN31gKWhRfuzC-B2Muj4aWk/view?usp=drive_link"
            />
            <LinkItem
              label="Thesis Chapterization"
              href="https://drive.google.com/file/d/1POGsmWwPTzjVmJj49xwdSeq8qNgJTlaI/view?usp=drive_link"
            />
          </ul>
        ),
      },
      {
        title: "Ph.D. Admission Policy",
        body: (
          <ul className="space-y-2">
            <LinkItem
              label="Ph.D. Admission Policy"
              href="https://drive.google.com/file/d/1PY2DPdW5y8NIRGS1kxpV-HpDks6urnHv/view?usp=drive_link"
            />
          </ul>
        ),
      },
      {
        title: "Detailed Syllabus of Research Methodology",
        body: (
          <ul className="space-y-2">
            <LinkItem
              label="Detailed Syllabus of Research Methodology"
              href="https://drive.google.com/file/d/1XHA6eFFLLk8f-cp5p48a8r7m1wdmQNZt/view?usp=drive_link"
            />
          </ul>
        ),
      },
      {
        title: "Fellowship Scholarship Policy for Ph.D. Scholars",
        body: (
          <ul className="space-y-2">
            <LinkItem
              label="Fellowship Scholarship Policy for Ph.D. Scholars"
              href="https://drive.google.com/file/d/1KN9LAtkWoEgcqgSYms7ysFPo6_7jxu62/view?usp=drive_link"
            />
          </ul>
        ),
      },
      {
        title: "Policy for the Grievance Redress Mechanism of Scholars",
        body: (
          <ul className="space-y-2">
            <LinkItem
              label="Policy for the Grievance Redress Mechanism of Scholars"
              href="https://drive.google.com/file/d/1eEZqj7DiHoPA-B1AnbBFfZKUTfYbztDW/view?usp=drive_link"
            />
          </ul>
        ),
      },
      {
        title: "Ph.D. Process Improvement",
        body: (
          <ul className="space-y-2">
            <LinkItem
              label="Best Practices & Process Improvement"
              href="https://drive.google.com/file/d/1r6bX9pGWSCDRmianMZf-NyomwUWR6JHO/view?usp=drive_link"
            />
          </ul>
        ),
      },
      {
        title: "UGC Regulations",
        body: (
          <ul className="space-y-2">
            <LinkItem
              label="2022"
              href="https://drive.google.com/file/d/1vwJuvNnvZRaHV_ietszBmNKewzL24Jmb/view?usp=drive_link"
            />
            <LinkItem
              label="2016"
              href="https://drive.google.com/file/d/1b5MkzeaUdGEKbInuxlgN58QGJz9C16ZQ/view?usp=drive_link"
            />
            <LinkItem
              label="2018"
              href="https://drive.google.com/file/d/1YBPW_WoCo6F-flyjt0Mg6qTAPsc4MypO/view?usp=drive_link"
            />
          </ul>
        ),
      },
      {
        title: "Ph.D. Notification 2025-26",
        body: (
          <ul className="space-y-2">
            <LinkItem
              label="Ph.D. Notification 2025-26"
              href="https://drive.google.com/file/d/1I0ZAdSzxqSP52EYVILtNreyQAVs0KVzk/view?usp=drive_link"
            />
          </ul>
        ),
      },
      {
        title: "Details of Currently Enrolled Ph.d. Scholars and Supervisors",
        body: (
          <ul className="space-y-2">
            <LinkItem
              label="Details of Currently Enrolled Ph.d. Scholars and Supervisors"
              href="https://kalingauniversity.ac.in/research/Details-Of-Currently-Enrolled-Ph.d.-Scholars-And-Details-Of-Supervisor.php"
            />
          </ul>
        ),
      },
      {
        title: "University Register Scholar In Various Fellowship Programmes",
        body: (
          <div className="space-y-6">
            <div className="rounded-lg border border-neutral-200 bg-white/60 p-3 sm:p-4">
              <FaqStyledTable
                columns={["S.No.", "Scheme Name", "Scheme Full Form"]}
                rows={[
                  ["1", "CSIR", "COUNCIL OF SCIENTIFIC AND INDUSTRIAL RESEARCH"],
                  ["2", "NET-JOINT-CSIR", "JOINT COUNCIL OF SCIENTIFIC AND INDUSTRIAL RESEARCH"],
                  ["3", "UGC-NETJRF", "NATIONAL ELIGIBILITY TEST"],
                  ["4", "NFSC", "NATIONAL FELLOWSHIP FOR SCHEDULED CASTE"],
                  ["5", "NFST", "NATIONAL FELLOWSHIP FOR SCHEDULED TRIBES"],
                  ["6", "INSPIRE", "INNOVATION IN SCIENCE PURSUIT FOR INSPIRED RESEARCH"],
                ]}
              />
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white/60 p-3 sm:p-4">
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
                  ["1", "2025", "PENDING", "NETJRF", "ROBIN KUMAR VERMA", "SANTOSH DAS", "YOGA", <img src={"https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/phd_scholar_1.jpg"}/>],
                  ["2", "2025", "PENDING", "NETJRF", "SHUBHAM SINGH", "VISHNU SINGH", "YOGA", <img src={"https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/phd_scholar_2.jpg"}/>],
                  ["3", "2025", "PENDING", "CSIR", "PRIYA", "ASHOK MALIK", "ZOOLOGY", ""],
                  ["4", "2025", "PENDING", "NETJRF", "SHEETAL NAIK", "GOURISHANKAR", "ZOOLOGY", <img src={"https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/phd_scholar_4.jpg"}/>],
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        title: "Undertaking",
        body: (
          <ul className="space-y-2">
            <LinkItem
              label="Undertaking"
              href="https://drive.google.com/file/d/1fRF91mXBJGf_KbVlHJPWTFcziLn6Ifor/view?usp=drive_link"
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
      {/* ✅ Match FAQ container behavior (full width, consistent padding) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* ✅ Center heading like FAQ */}
        <div className="mb-8 flex justify-center">
          <SectionHeading
            title="Ph.D. Resources"
            subtitle={null}
            titleClassName="leading-tight text-center text-[#8B2C2C]"
            subtitleClassName="text-center"
          />
        </div>

        {/* ✅ Full width accordion list like FAQ */}
        <div className="w-full max-w-6xl mx-auto space-y-4">
          {sections.map((sec, idx) => {
            const isOpen = idx === openIndex;

            return (
              <div
                key={sec.title}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                {/* ✅ Header CSS like FAQ */}
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

                  {/* ✅ Right square icon like FAQ */}
                  <span className="flex-shrink-0">
                    <span
                      className={[
                        "inline-flex h-8 w-8 items-center justify-center rounded",
                        "bg-white",
                      ].join(" ")}
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

                {/* ✅ Body CSS like FAQ */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
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
    </section>
  );
}
