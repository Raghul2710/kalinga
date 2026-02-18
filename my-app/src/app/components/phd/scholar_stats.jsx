"use client";
import React from 'react';
import DataTable from '../general/data-table';
import SectionHeading from '../general/SectionHeading';

const fellowshipTable = {
    columns: [
        { key: "slNo", label: "S.No.", width: "w-20" },
        { key: "schemeName", label: "Scheme Name", width: "w-1/4" },
        { key: "fullForm", label: "Scheme Full Form", width: "flex-1" }
    ],
    data: [
        { slNo: "1", schemeName: "CSIR", fullForm: "COUNCIL OF SCIENTIFIC AND INDUSTRIAL RESEARCH" },
        { slNo: "2", schemeName: "NET-JOINT-CSIR", fullForm: "JOINT COUNCIL OF SCIENTIFIC AND INDUSTRIAL RESEARCH" },
        { slNo: "3", schemeName: "UGC-NETJRF", fullForm: "NATIONAL ELIGIBILITY TEST" },
        // { slNo: "4", schemeName: "NFSC", fullForm: "NATIONAL FELLOWSHIP FOR SCHEDULED CASTE" },
        // { slNo: "5", schemeName: "NFST", fullForm: "NATIONAL FELLOWSHIP FOR SCHEDULED TRIBES" },
        // { slNo: "6", schemeName: "INSPIRE", fullForm: "INNOVATION IN SCIENCE PURSUIT FOR INSPIRED RESEARCH" },
    ]
};

const scholarsTable = {
    columns: [
        { key: "slNo", label: "S.No.", width: "w-16" },
        { key: "year", label: "Year", width: "w-24" },
        { key: "status", label: "Status", width: "w-24" },
        { key: "scheme", label: "Scheme", width: "w-24" },
        { key: "name", label: "Name of Scholar", width: "flex-1" },
        { key: "fatherName", label: "Fathers’ Name", width: "flex-1" },
        { key: "subject", label: "Subject", width: "w-32" },
        { key: "image", label: "Image", width: "w-32" },
    ],
    data: [
        {
            slNo: "1",
            year: "2025",
            status: "PENDING",
            scheme: "NETJRF",
            name: "ROBIN KUMAR VERMA",
            fatherName: "SANTOSH DAS",
            subject: "YOGA",
            image: (
                <img
                    src="https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/phd_scholar_1.jpg"
                    alt="ROBIN KUMAR VERMA"
                    className="w-[60px] h-[60px] object-cover rounded-lg mx-auto"
                />
            ),
        },
        {
            slNo: "2",
            year: "2025",
            status: "PENDING",
            scheme: "NETJRF",
            name: "SHUBHAM SINGH",
            fatherName: "VISHNU SINGH",
            subject: "YOGA",
            image: (
                <img
                    src="https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/phd_scholar_2.jpg"
                    alt="SHUBHAM SINGH"
                    className="w-[60px] h-[60px] object-cover rounded-lg mx-auto"
                />
            ),
        },
        {
            slNo: "3",
            year: "2025",
            status: "PENDING",
            scheme: "CSIR",
            name: "PRIYA",
            fatherName: "ASHOK MALIK",
            subject: "ZOOLOGY",
            image: (
                <img
                    src="https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Phd-scholar-priya.webp"
                    alt="PRIYA"
                    className="w-[60px] h-[60px] object-cover rounded-lg mx-auto"
                />
            ),
        },
        {
            slNo: "4",
            year: "2025",
            status: "PENDING",
            scheme: "NETJRF",
            name: "SHEETAL NAIK",
            fatherName: "GOURISHANKAR",
            subject: "ZOOLOGY",
            image: (
                <img
                    src="https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/phd_scholar_4.jpg"
                    alt="SHEETAL NAIK"
                    className="w-[60px] h-[60px] object-cover rounded-lg mx-auto"
                />
            ),
        },
    ]
};

export default function ScholarStats() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="University Registered Scholars in various Fellowship Programmes"
                    titleClassName="text-center mb-8"
                />

                <div className="space-y-8 max-w-6xl mx-auto">
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <DataTable
                            columns={fellowshipTable.columns}
                            data={fellowshipTable.data}
                            overflowX={true}
                            className="shadow-none rounded-none"
                        />
                    </div>

                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <DataTable
                            columns={scholarsTable.columns}
                            data={scholarsTable.data}
                            overflowX={true}
                            className="shadow-none rounded-none"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
