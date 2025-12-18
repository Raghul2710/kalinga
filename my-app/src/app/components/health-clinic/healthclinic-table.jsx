"use client";

import React from "react";
import DataTable from "../general/data-table"; 

export default function HealthClinicTable({
  title = "Our Hospital Tie-Ups",
  className = "",
}) {
  const columns = [
    { key: "slNo", label: "S.No", width: "w-20" },
    { key: "hospital", label: "Hospitals", width: "w-80" },
    { key: "address", label: "Address", width: "flex-1" },
  ];

  const data = [
    {
      slNo: 1,
      hospital: "Sadbhavna Hospital",
      address: "Plot C1, Sector 30, Nava Raipur - 492101",
    },
    {
      slNo: 2,
      hospital: "Shri Medishine Hospital",
      address: "Amlidih, New rajendra nagar, Raipur C.G. - 492015",
    },
    {
      slNo: 3,
      hospital: "Saptgiri Hospital",
      address:
        "Mandir Hasaud, Chowk, Naya Raipur, Raipur, Chhattisgarh, - 492101",
    },
    {
      slNo: 4,
      hospital: "VY Hospital",
      address: "Sector - 12, Kamal Vihar Raipur C.G.",
    },
    {
      slNo: 5,
      hospital:
        "Balco Medical Centre (A Unit Of Vedanta Medical Research Centre)",
      address: "Naya Raipur C.G.",
    },
    {
      slNo: 6,
      hospital: "NH MMI, Narayana Multispecialty Hospital",
      address: "Lalpur, Raipur C.G. - 492001",
    },
    {
      slNo: 7,
      hospital:
        "Urmila Memorial Hospital (A Unit Of Adityaraj Medical Care Pvt. Ltd.)",
      address:
        "Near New Bus Stand Circle, Nahar Road, Bhatagaon Raipur C.G. - 492015",
    },
    {
      slNo: 8,
      hospital: "City Eye Care Hospital",
      address:
        "Beside MM Silver Plaza, Infront of Udyog Bhavan, Mahaveer Nagar, Raipur, Chhattisgarh",
    },
    {
      slNo: 9,
      hospital: "Shri Ganesh Vinayak Eye Hospital",
      address:
        "Infront of Colors Mall ,Ganga Dignostics , Near Muskan Residency, Lalpur, Pachpedi Naka, New Dhamtari Road, Raipur C.G.",
    },
    {
      slNo: 10,
      hospital: "Ramkrishna Care Hospital",
      address:
        "Aurobindo Enclave, Dhamtari Road, Pachpedi Naka, Raipur, Chhattisgarh",
    },
  ];

  return (
    <section className={`bg-white py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-center mb-8 text-[var(--button-red)]">
            {title}
          </h2>
        )}

        <DataTable
          columns={columns}
          data={data}
          overflowX={true}
          className="!shadow-none"
          headerBgColor="bg-[var(--button-red)]"
          headerTextColor="text-white"
          evenRowBg="bg-white"
          oddRowBg="bg-gray-50"
          borderColor="border-gray-200"
        />
      </div>
    </section>
  );
}
