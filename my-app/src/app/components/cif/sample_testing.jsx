"use client";

import React, { useState } from "react";
import Image from "next/image";

import DataTable from "../general/data-table";
import OrganogramOfKalinga from "../about/organogram_of_kalinga";
import Modal from "../general/Modal";




export default function SampleTesting({
  title = "Sample Testing",
  description = "At our CIF, we provide sample testing services using our advanced instruments to obtain accurate outcomes. These are available for university students, research scholars, organisations, and industries at minimal rates. Charges may vary depending on the type of equipment.",
  subtitle = "Cost Of Sample Analysis",
  instruction,
  note,
  tableColumns,
  tableData,
  imageUrl = "https://cdn.kalingauniversity.ac.in/CIF/cif-image-9.webp",
  imageAlt = "Sample Testing"
}) {
  const defaultTableColumns = [
    { key: "slNo", label: "S.No.", width: "w-20" },
    { key: "facilities", label: "Facilities", width: "w-64" },
    { key: "students", label: "Students", width: "w-48" },
    { key: "otherInstitutions", label: "Other Educational Institutions", width: "w-64" },
    { key: "rndLabs", label: "R & D Labs", width: "w-48" },
    { key: "industries", label: "Industries", width: "w-48" }
  ];

  const defaultTableData = [
    {
      slNo: 1,
      facilities: "X-Ray Diffractometer",
      students: "INR 500/- per Sample",
      otherInstitutions: "INR 800/- per Sample",
      rndLabs: "INR 1000/- per Sample",
      industries: "INR 2000/- per Sample"
    },
    {
      slNo: 2,
      facilities: "Scanning Electron Microscope (SEM)",
      students: "INR 500/- per Sample",
      otherInstitutions: "INR 800/- per Sample",
      rndLabs: "INR 1000/- per Sample",
      industries: "INR 1500/- per Sample"
    },
    {
      slNo: 3,
      facilities: "High-Performance Liquid Chromatography",
      students: "INR 500/- per Sample",
      otherInstitutions: "INR 800/- per Sample",
      rndLabs: "INR 1000/- per Sample",
      industries: "INR 1500/- per Sample"
    },
    {
      slNo: 4,
      facilities: "Thermal Cycler (PCR)",
      students: "INR 500/- per 10 Samples",
      otherInstitutions: "INR 800/- per 10 Samples",
      rndLabs: "INR 1000/- per 10 Samples",
      industries: "INR 1500/- per 10 Samples"
    },
    {
      slNo: 5,
      facilities: "Horizontal Mini Gel Chromatography",
      students: "INR 200/- per 10 Samples",
      otherInstitutions: "INR 250/- per 10 Samples",
      rndLabs: "INR 500/- per 10 Samples",
      industries: "INR 800/- per 10 Samples"
    },
    {
      slNo: 6,
      facilities: "UV Transilluminator",
      students: "INR 100/- per 10 Samples",
      otherInstitutions: "INR 150/- per 10 Samples",
      rndLabs: "INR 200/- per 10 Samples",
      industries: "INR 250/- per 10 Samples"
    },
    {
      slNo: 7,
      facilities: "FT-IR Spectrophotometer",
      students: "INR 250/- per Sample",
      otherInstitutions: "INR 300/- per Sample",
      rndLabs: "INR 350/- per Sample",
      industries: "INR 400/- per Sample"
    },
    {
      slNo: 8,
      facilities: "Bio-Chemistry Analyzer",
      students: "INR 150/- per Sample",
      otherInstitutions: "INR 200/- per Sample",
      rndLabs: "INR 200/- per Sample",
      industries: "INR 300/- per Sample"
    },
    {
      slNo: 9,
      facilities: "Touch Screen Viscometer",
      students: "INR 50/- per Sample",
      otherInstitutions: "INR 100/- per Sample",
      rndLabs: "INR 150/- per Sample",
      industries: "INR 200/- per Sample"
    },
    {
      slNo: 10,
      facilities: "Digital Viscometer",
      students: "INR 50/- per Sample",
      otherInstitutions: "INR 100/- per Sample",
      rndLabs: "INR 150/- per Sample",
      industries: "INR 200/- per Sample"
    },
    {
      slNo: 11,
      facilities: "UV-Visible Spectrophotometer",
      students: "INR 50/- per Sample",
      otherInstitutions: "INR 100/- per Sample",
      rndLabs: "INR 150/- per Sample",
      industries: "INR 200/- per Sample"
    },
    {
      slNo: 12,
      facilities: "Digital Turbidity Meter",
      students: "INR 50/- per Sample",
      otherInstitutions: "INR 100/- per Sample",
      rndLabs: "INR 150/- per Sample",
      industries: "INR 200/- per Sample"
    },
    {
      slNo: 13,
      facilities: "Digital Flame Photometer",
      students: "INR 50/- per Sample",
      otherInstitutions: "INR 100/- per Sample",
      rndLabs: "INR 150/- per Sample",
      industries: "INR 200/- per Sample"
    },
    {
      slNo: 14,
      facilities: "Rotary Tablet Press",
      students: "INR 100/- per Sample",
      otherInstitutions: "INR 150/- per Sample",
      rndLabs: "INR 200/- per Sample",
      industries: "INR 250/- per Sample"
    }
  ];

  const finalTableColumns = tableColumns || defaultTableColumns;
  const finalTableData = tableData || defaultTableData;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <OrganogramOfKalinga
        title={title}
        description={[instruction, description].filter(Boolean)}
        useContainer={true}
        onClick={() => setIsModalOpen(true)}
        href={null}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
      >
        <div className="container mx-auto">
          {/* Subtitle */}
          {subtitle && (
            <div className="text-center mb-8">
              <h3 className="font-stix text-2xl md:text-3xl text-[var(--foreground)]">
                {subtitle}
              </h3>
            </div>
          )}

          {/* Table */}
          <DataTable
            columns={finalTableColumns}
            data={finalTableData}
            overflowX={true}
            headerBgColor="bg-[var(--button-red)]"
            headerTextColor="text-white"
            evenRowBg="bg-gray-50"
            oddRowBg="bg-white"
            borderColor="border-gray-200"
          />

          {/* Note */}
          {note && (
            <div className="mt-6 text-center">
              <p className="text-sm md:text-base text-[var(--light-text-gray)] font-semibold">
                {note}
              </p>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}

