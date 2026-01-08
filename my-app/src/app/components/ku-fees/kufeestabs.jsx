"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import HostelFeeTabs from "../hostel/hosteltabs";

/** -----------------------------
 *  TABS (UPDATED)
 *  ----------------------------*/
const IQAC_TABS = [
    // ✅ 8 Faculties alphabetically
    { id: "arts", label: "Faculty of Arts & Humanities" },
    { id: "commerce", label: "Faculty of Commerce & Management" },
    { id: "education", label: "Faculty of Education" },
    { id: "engineering", label: "Faculty of Engineering & Technology" },
    { id: "it", label: "Faculty of Information Technology" },
    { id: "law", label: "Faculty of Law" },
    { id: "pharmacy", label: "Faculty of Pharmacy" },
    { id: "science", label: "Faculty of Science" },

    // ✅ Then Research
    { id: "research", label: "Faculty of Research" },

    // ✅ Then Hostel
    { id: "hostel", label: "Hostel Fees" },

    // ✅ Separate tabs
    { id: "scholarship", label: "Scholarships" },
    { id: "transport", label: "Transport" },

    // ✅ Other Charges (only lateral entry)
    { id: "other", label: "Other Charges" },

    // ✅ Value Additions (DON'T REMOVE)
    { id: "value", label: "Value Additions" },
];

const FEES_COMMERCE = {
    title: "Faculty of Commerce & Management",
    columns: [
        "S.No.",
        "Course",
        "Tenure (Years)",
        "Sem",
        "Proposed Tuition Fee Per Sem (INR)",
        "Prospectus/ KLSEE Fees (One Time) (INR)",
        "Personal Interview Fee (INR)",
        "Caution Money (One Time) Refundable (INR)",
        "Uniform Fee (One Time) (INR)",
        "Exam Fees (Per Sem) (INR)",
        "Total Fees (INR)",
    ],
    rows: [
        {
            "S.No.": 1,
            Course: "MBA** (Dual Specialisations)",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "1,25,000/-",
            "Prospectus/ KLSEE Fees (One Time) (INR)": "2,000/-",
            "Personal Interview Fee (INR)": "1,500/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "5,15,950/-",
        },
        {
            "S.No.": 2,
            Course: "BBA* (Single Specialisation)",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "55,000/-",
            "Prospectus/ KLSEE Fees (One Time) (INR)": "1,000/-",
            "Personal Interview Fee (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "3,48,350/-",
        },
        {
            "S.No.": 3,
            Course: "Master of Commerce (M. Com. Pass)",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "30,000/-",
            "Prospectus/ KLSEE Fees (One Time) (INR)": "1,400/-",
            "Personal Interview Fee (INR)": "-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,30,400/-",
        },
        {
            "S.No.": 4,
            Course: "Master of Commerce (M. Com.) (Banking & Finance)",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "35,000/-",
            "Prospectus/ KLSEE Fees (One Time) (INR)": "1,400/-",
            "Personal Interview Fee (INR)": "-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,50,400/-",
        },
        {
            "S.No.": 5,
            Course: "Bachelor of Commerce (B. Com. Pass)",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "25,000/-",
            "Prospectus/ KLSEE Fees (One Time) (INR)": "1,400/-",
            "Personal Interview Fee (INR)": "-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,68,350/-",
        },
        {
            "S.No.": 6,
            Course: "B. Com. (Banking & Finance)",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "35,000/-",
            "Prospectus/ KLSEE Fees (One Time) (INR)": "1,400/-",
            "Personal Interview Fee (INR)": "-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "2,28,350/-",
        },
    ],
    notes: [
        "MBA Specialisations (Select any Two): Banking & Insurance, Business Analytics, Digital Marketing & E-Commerce, Finance, Healthcare & Hospital Management, Hotel & Hospitality Management, Human Resource Management, Information Technology, International Business, Logistics & Supply Chain Management, Marketing Management, NGO Management.",
        "BBA Specialisations (Select any One): Airline & Airport Operations Management, Digital Marketing & E-Commerce, Event Management & Public Relations, Family Business & Startups, Finance, Fintech, Hospital Administration, Human Resource Management, Marketing Management, Aviation.",
    ],
};

const FEES_ENGINEERING = {
    title: "Faculty of Engineering & Technology",
    columns: [
        "S.No.",
        "Course",
        "Tenure (Years)",
        "Sem",
        "Proposed Tuition Fee Per Sem (INR)",
        "Prospectus/ KALSEE Fees (One Time) (INR)",
        "Caution Money (One Time) Refundable (INR)",
        "Uniform Fee (One Time) (INR)",
        "Exam Fees (Per Sem) (INR)",
        "Total Fees (INR)",
    ],
    rows: [
        {
            "S.No.": 1,
            Course: "M.Tech",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "45,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,90,400/-",
        },
        {
            "S.No.": 2,
            Course: "B.Tech",
            "Tenure (Years)": 4,
            Sem: 8,
            "Proposed Tuition Fee Per Sem (INR)": "65,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "5,41,350/-",
        },
        {
            "S.No.": 3,
            Course: "B.Tech CS in AI & ML (IBM Collaboration)",
            "Tenure (Years)": 4,
            Sem: 8,
            "Proposed Tuition Fee Per Sem (INR)": "75,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "6,21,350/-",
        },
        {
            "S.No.": 4,
            Course: "B.Tech (Electrical, Mechanical & Civil)",
            "Tenure (Years)": 4,
            Sem: 8,
            "Proposed Tuition Fee Per Sem (INR)": "50,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "4,21,350/-",
        },
        {
            "S.No.": 5,
            Course: "B.Tech CS (Lateral Entry)",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "65,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "4,08,350/-",
        },
        {
            "S.No.": 6,
            Course: "B.Tech (Electrical, Mechanical & Civil) (Lateral Entry)",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "50,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "3,18,350/-",
        },
        {
            "S.No.": 7,
            Course: "M.Design with Imagin XP (User Experience)",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "70,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "2,95,350/-",
        },
        {
            "S.No.": 8,
            Course: "B.Design with Imagin XP (User Experience)",
            "Tenure (Years)": 4,
            Sem: 8,
            "Proposed Tuition Fee Per Sem (INR)": "60,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "5,01,350/-",
        },
        {
            "S.No.": 9,
            Course: "Diploma in Engineering",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "30,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,98,350/-",
        },
        {
            "S.No.": 10,
            Course: "Diploma in Engineering (Lateral Entry)",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "30,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,35,350/-",
        },
    ],
    notes: [
        "M.Tech Specialisations: Mechanical, Electrical, Computer Science, Civil",
        "Sub-Specialisation for M.Tech: Mechanical (Machine Design, Production Technology, Thermal Engineering), Electrical (Instrumentation & Control, Power System Control), CS (Multimedia Technology, OOSD, AI & ML), Civil (Highway Engineering, Structural Engineering).",
        "B.Tech CS Specialisation with IBM: Artificial Intelligence and Machine Learning (AIML).",
        "Diploma in Engineering Specialisations: Mechanical, Civil, Electrical, Computer Science & Mining.",
    ],
};

const FEES_IT = {
    title: "Faculty of Information Technology",
    columns: [
        "S.No.",
        "Course",
        "Tenure (Years)",
        "Sem",
        "Proposed Tuition Fee Per Sem (INR)",
        "Prospectus/ KALSEE Fees (One Time) (INR)",
        "Caution Money (One Time) (INR)",
        "Uniform Fee (One Time) (INR)",
        "Exam Fees (Per Sem) (INR)",
        "Total Fees (INR)",
    ],
    rows: [
        {
            "S.No.": 1,
            Course: "M. CS in AI & ML and Cyber Security",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "40,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,70,400/-",
        },
        {
            "S.No.": 2,
            Course: "Master in Computer Application (MCA)",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "32,500/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,40,400/-",
        },
        {
            "S.No.": 3,
            Course: "MCA Lateral Entry (2nd to 3rd Semester)",
            "Tenure (Years)": 1,
            Sem: 2,
            "Proposed Tuition Fee Per Sem (INR)": "32,500/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "72,400/-",
        },
        {
            "S.No.": 4,
            Course: "Master of Animation & Visual Effects (M. An & Vfx)",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "65,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "2,70,400/-",
        },
        {
            "S.No.": 5,
            Course: "Master in Data Science",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "50,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "2,10,400/-",
        },
        {
            "S.No.": 6,
            Course: "Bachelor of Animation & Visual Effects (B. An & Vfx)",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "60,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "3,78,350/-",
        },
        {
            "S.No.": 7,
            Course: "PGDCA",
            "Tenure (Years)": 1,
            Sem: 2,
            "Proposed Tuition Fee Per Sem (INR)": "10,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "27,400/-",
        },
        {
            "S.No.": 8,
            Course: "B. CS in AI & ML and Cyber Security",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "37,500/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "2,43,350/-",
        },
        {
            "S.No.": 9,
            Course: "Bachelor in Computer Application (BCA)",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "55,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "3,48,350/-",
        },
        {
            "S.No.": 10,
            Course: "BCA in AI & ML",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "60,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "3,78,350/-",
        },
        {
            "S.No.": 11,
            Course: "Diploma in Computer Application (DCA)",
            "Tenure (Years)": 1,
            Sem: 2,
            "Proposed Tuition Fee Per Sem (INR)": "7,500/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "22,400/-",
        },
    ],
    notes: [
        "MCA Specialisations (iNURTURE Collaboration): Artificial Intelligence and Machine Learning; Cloud Technology and Information Security.",
        "BCA Specialisations (iNURTURE Collaboration): Data Science; Artificial Intelligence and Machine Learning (AI & ML); Cloud Technology and Information Security; Information Security and Cyber Forensics.",
    ],
};

const FEES_SCIENCE = {
    title: "Faculty of Science",
    columns: [
        "S.No.",
        "Course",
        "Tenure (Years)",
        "Sem",
        "Proposed Tuition Fee Per Sem (INR)",
        "Prospectus/ KALSEE Fees (One Time) (INR)",
        "Caution Money (One Time) Refundable (INR)",
        "Uniform Fee (One Time) (INR)",
        "Exam Fees (Per Sem) (INR)",
        "Total Fees (INR)",
    ],
    rows: [
        {
            "S.No.": 1,
            Course: "Master of Science",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "30,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,30,400/-",
        },
        {
            "S.No.": 2,
            Course: "B. Sc. (Medical - ZCB) / (Non Medical - PCM)",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "25,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,68,350/-",
        },
        {
            "S.No.": 3,
            Course: "B.Sc. (Biotechnology)",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "35,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "2,28,350/-",
        },
        {
            "S.No.": 4,
            Course: "Master of Science (Forensic Science)",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "60,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "2,50,400/-",
        },
        {
            "S.No.": 5,
            Course: "Bachelor of Science (Forensic Science)",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "60,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "3,78,350/-",
        },
        {
            "S.No.": 6,
            Course: "Master of Library & Information Science (M. Lib.)",
            "Tenure (Years)": 1,
            Sem: 2,
            "Proposed Tuition Fee Per Sem (INR)": "16,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "39,400/-",
        },
        {
            "S.No.": 7,
            Course: "Bachelor of Library & Information Science (B. Lib.)",
            "Tenure (Years)": 1,
            Sem: 2,
            "Proposed Tuition Fee Per Sem (INR)": "16,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "39,400/-",
        },
        {
            "S.No.": 8,
            Course: "Master in Fashion Design (M.FD)",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "35,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,50,400/-",
        },
        {
            "S.No.": 9,
            Course: "Master in Interior Design (M.ID)",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "35,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,50,400/-",
        },
        {
            "S.No.": 10,
            Course: "Bachelors in Fashion Design (B.FD)",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "30,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,98,350/-",
        },
        {
            "S.No.": 11,
            Course: "Bachelors in Interior Design (B.ID)",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "30,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,750/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,98,350/-",
        },
        {
            "S.No.": 12,
            Course: "Bachelors in Fashion Design (B.FD) (Lateral Entry)",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "30,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,35,350/-",
        },
        {
            "S.No.": 13,
            Course: "Bachelors in Interior Design (B.ID) (Lateral Entry)",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "30,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,35,350/-",
        },
        {
            "S.No.": 14,
            Course: "MSc Yoga",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "27,500/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,20,400/-",
        },
        {
            "S.No.": 15,
            Course: "Diploma in Yoga",
            "Tenure (Years)": 1,
            Sem: 2,
            "Proposed Tuition Fee Per Sem (INR)": "17,500/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "42,400/-",
        },
        {
            "S.No.": 16,
            Course: "PG Diploma in Yoga",
            "Tenure (Years)": 1,
            Sem: 2,
            "Proposed Tuition Fee Per Sem (INR)": "20,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "47,400/-",
        },
        {
            "S.No.": 17,
            Course: "BSc Yoga",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "20,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,38,350/-",
        },
    ],
    notes: [
        "Specialisations of M.Sc.: Physics, Chemistry, Botany, Mathematics, Zoology, Microbiology, Biochemistry, Bioinformatics, Biotechnology",
        "Forensic Science Specialisations: Forensic Biology & Serology, Forensic Chemistry & Toxicology, Questioned Document & Fingerprint Examination, Forensic Physical Science",
    ],
};

const FEES_ARTS = {
    title: "Faculty of Arts & Humanities",
    columns: [
        "S.No.",
        "Course",
        "Tenure (Years)",
        "Sem",
        "Proposed Tuition Fee Per Sem (INR)",
        "Prospectus/ KALSEE Fees (One Time) (INR)",
        "Caution Money (One Time) Refundable (INR)",
        "Uniform Fee (One Time) (INR)",
        "Exam Fees (Per Sem) (INR)",
        "Total Fees (INR)",
    ],
    rows: [
        {
            "S.No.": 1,
            Course: "MA (PSC Coaching)",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "20,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "90,400/-",
        },
        {
            "S.No.": 2,
            Course: "BA (PSC Coaching)",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "25,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,68,350/-",
        },
        {
            "S.No.": 3,
            Course: "MSW with PSC Coaching",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "25,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,10,400/-",
        },
        {
            "S.No.": 4,
            Course: "BSW with PSC Coaching",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "20,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,38,350/-",
        },
        {
            "S.No.": 5,
            Course: "MA (J & MC) with PSC Coaching",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "27,500/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,20,400/-",
        },
        {
            "S.No.": 6,
            Course: "BA (J & MC) with PSC Coaching",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "27,500/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,20,400/-",
        },
        {
            "S.No.": 7,
            Course: "MA Film Making",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "40,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,70,400/-",
        },
        {
            "S.No.": 8,
            Course: "BA Film Making",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "40,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "2,58,350/-",
        },
    ],
    notes: [
        "Subjects for MA: Economics, English, Geography, Hindi, History, Mathematics, Political Science, Sociology, Psychology, Public Administration & Economics",
        "Subjects for BA: Choose any 3 from Political Science, Public Administration, Sociology, History, Geography, Psychology, Economics (English & Hindi / Advanced English compulsory)",
    ],
};

const FEES_LAW = {
    title: "Faculty of Law",
    columns: [
        "S.No.",
        "Programme",
        "Tenure (Years)",
        "Sem",
        "Proposed Tuition Fee Per Sem (INR)",
        "Prospectus/ KALSEE Fees (One Time) (INR)",
        "Caution Money (One Time) Refundable (INR)",
        "Uniform Fee (One Time) (INR)",
        "Exam Fees (Per Sem) (INR)",
        "Total Fees (INR)",
    ],
    rows: [
        {
            "S.No.": 1,
            Programme: "LL. B.",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "32,500/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "2,08,400/-",
        },
        {
            "S.No.": 2,
            Programme: "LLM (Dual Specialisation)",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "32,500/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,40,400/-",
        },
        {
            "S.No.": 3,
            Programme: "BA LLB",
            "Tenure (Years)": 5,
            Sem: 10,
            "Proposed Tuition Fee Per Sem (INR)": "55,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "5,74,350/-",
        },
        {
            "S.No.": 4,
            Programme: "BBA LLB",
            "Tenure (Years)": 5,
            Sem: 10,
            "Proposed Tuition Fee Per Sem (INR)": "55,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "5,74,350/-",
        },
    ],
    notes: [
        "Specialisations for LLM (Select any 2): Cyber Law, Crime and Torts, Business and Corporate Law, Intellectual Property Rights (IPR), Constitutional & Administrative Law, Labour Law",
    ],
};

const FEES_PHARMACY = {
    title: "Faculty of Pharmacy",
    columns: [
        "S.No.",
        "Programme",
        "Tenure (Years)",
        "Sem",
        "Proposed Tuition Fee Per Sem (INR)",
        "Prospectus/ KALSEE Fees (One Time) (INR)",
        "Caution Money (One Time) Refundable (INR)",
        "Uniform Fee (One Time) (INR)",
        "Exam Fees (Per Sem) (INR)",
        "Total Fees (INR)",
    ],
    rows: [
        {
            "S.No.": 1,
            Programme: "M. Pharmacy",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "60,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "2,500/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "2,56,450/-",
        },
        {
            "S.No.": 2,
            Programme: "Pharma D",
            "Tenure (Years)": 6,
            Sem: 12,
            "Proposed Tuition Fee Per Sem (INR)": "65,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "2,500/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "8,08,450/-",
        },
        {
            "S.No.": 3,
            Programme: "B. Pharmacy",
            "Tenure (Years)": 4,
            Sem: 8,
            "Proposed Tuition Fee Per Sem (INR)": "60,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "2,500/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "5,02,450/-",
        },
        {
            "S.No.": 4,
            Programme: "B. Pharmacy (Lateral Entry)",
            "Tenure (Years)": 3,
            Sem: 6,
            "Proposed Tuition Fee Per Sem (INR)": "60,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "2,500/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "3,79,450/-",
        },
        {
            "S.No.": 5,
            Programme: "D. Pharmacy",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "50,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "2,500/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "2,13,450/-",
        },
        {
            "S.No.": 6,
            Programme: "B. Pharma Practice",
            "Tenure (Years)": 2,
            Sem: 4,
            "Proposed Tuition Fee Per Sem (INR)": "60,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "2,500/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "2,53,450/-",
        },
    ],
    notes: ["Specialisations for M.Pharmacy: Pharmacology, Pharmaceutical Chemistry, Pharmaceutics"],
};

const FEES_EDUCATION = {
    title: "Faculty of Education",
    columns: [
        "S.No.",
        "Course",
        "Tenure (Years)",
        "Sem",
        "Tuition Fee Per Sem / Year (INR)",
        "Prospectus/ KALSEE Fees (One Time) (INR)",
        "Caution Money (One Time) Refundable (INR)",
        "Uniform Fee (One Time) (INR)",
        "Exam Fees (Per Sem) (INR)",
        "Total Fees (INR)",
    ],
    rows: [
        {
            "S.No.": 1,
            Course: "Bachelor of Education",
            "Tenure (Years)": 2,
            Sem: 4,
            "Tuition Fee Per Sem / Year (INR)": "33,970/- (Yearly)",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "NA",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "4,950/-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "78,890/-",
        },
        {
            "S.No.": 2,
            Course: "Bachelor of Physical Education",
            "Tenure (Years)": 2,
            Sem: 4,
            "Tuition Fee Per Sem / Year (INR)": "35,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,400/-",
            "Caution Money (One Time) Refundable (INR)": "3,000/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "1,50,400/-",
        },
        {
            "S.No.": 3,
            Course: "MA (Education)",
            "Tenure (Years)": 2,
            Sem: 4,
            "Tuition Fee Per Sem / Year (INR)": "18,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,200/-",
            "Caution Money (One Time) Refundable (INR)": "2,500/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "81,700/-",
        },
        {
            "S.No.": 4,
            Course: "MA (Physical Education)",
            "Tenure (Years)": 2,
            Sem: 4,
            "Tuition Fee Per Sem / Year (INR)": "18,000/-",
            "Prospectus/ KALSEE Fees (One Time) (INR)": "1,200/-",
            "Caution Money (One Time) Refundable (INR)": "2,500/-",
            "Uniform Fee (One Time) (INR)": "-",
            "Exam Fees (Per Sem) (INR)": "1,500/-",
            "Total Fees (INR)": "81,700/-",
        },
    ],
    notes: [],
};

const FEES_RESEARCH = {
    title: "Faculty of Research",
    columns: [
        "S.No.",
        "Course",
        "Year",
        "Sem",
        "Fee Sem-1 (INR)",
        "Fee Sem-2 (INR)",
        "Fee Sem-3 (INR)",
        "Fee Sem-4 (INR)",
        "Fee Sem-5 (INR)",
        "Fee Sem-6 (INR)",
        "Fee Sem-7 (INR)",
        "Fee Sem-8 (INR)",
        "KALSEE Fees (One Time) (INR)",
        "Total Fees (INR)",
    ],
    rows: [
        {
            "S.No.": 1,
            Course: "Ph. D. (Part Time)",
            Year: 4,
            Sem: 8,
            "Fee Sem-1 (INR)": "50,000",
            "Fee Sem-2 (INR)": "50,000",
            "Fee Sem-3 (INR)": "50,000",
            "Fee Sem-4 (INR)": "50,000",
            "Fee Sem-5 (INR)": "50,000",
            "Fee Sem-6 (INR)": "50,000",
            "Fee Sem-7 (INR)": "50,000",
            "Fee Sem-8 (INR)": "50,000",
            "KALSEE Fees (One Time) (INR)": "3,000",
            "Total Fees (INR)": "4,03,000/-",
        },
        {
            "S.No.": 2,
            Course: "Ph. D. (Full Time)",
            Year: 3,
            Sem: 6,
            "Fee Sem-1 (INR)": "80,000",
            "Fee Sem-2 (INR)": "80,000",
            "Fee Sem-3 (INR)": "80,000",
            "Fee Sem-4 (INR)": "60,000",
            "Fee Sem-5 (INR)": "50,000",
            "Fee Sem-6 (INR)": "50,000",
            "Fee Sem-7 (INR)": "NA",
            "Fee Sem-8 (INR)": "NA",
            "KALSEE Fees (One Time) (INR)": "3,000",
            "Total Fees (INR)": "4,03,000/-",
        },
    ],
    notes: [],
};

const VALUE_ADDITIONS = [
    "Semester Co-Curricular Activities - Spoken English, Grooming, Public Speaking, Research Paper Presentation, Industrial Visit, Presentation Skill, Seminars, Conferences, Student Research Policy Incentives, Innovation Incentive & Credits, Innovation & Start Up Policy Credits.",
    "Business Quiz/Competition, Business plan presentation & Ad Mad Show for Commerce & Management Students.",
    "Semester Extra Curricular Activities – Indoor & Outdoor Games, Campus Band, NCC, NSS, Gymnasium membership, Inter College Sports Tournament, Cultural Fest.",
    "Free Coaching (Choose any one): Preparation for CAT, MAT, Banking & other competitive exams; State Public Service Commission (PSC) Competitive Exam Coaching; UGC NET Coaching for PG Students; Graduate Aptitude Test in Engineering (GATE) Coaching for Engineering Students; CSIR NET Coaching for PG Students; GPAT Coaching for B. Pharma Final Year students.",
    "Apart from the Scheduled Internship Program (Mandatory), the Short Term Internship Program is based upon Opportunities from Business & Industry (Optional).",
    "Certification Program on Personal Computer Application Course in association with First Edu India Ltd.",
    "Training & Joint Certification on E-Commerce from First Edu India Ltd.",
    "Design Level 2D & 3D Training for Engineering students in association with First Edu India Ltd.",
    "Robotics Training in association with First Edu India Ltd. for Engineering & IT Students.",
    "Web Development Training in association with First Edu India Ltd. for IT Students.",
    "Training on Tally in association with First Edu India Ltd. for Commerce Students.",
    "Foreign Trip for all courses (Optional with charges).",
    "Certification course of AIML/Data Science for IT & Engineering students with First Edu India Ltd.",
    "Certification course on Photography, Videography & Graphic Design with First Edu India Ltd.",
    "Certification courses on Financial Planning, Self Finance Planning & Stock Market with First Edu India Ltd.",
];

const OTHER_CHARGES = {
    lateralEntryFee: "One Time - Rs. 3,000/-",
    creditTransfer: "(One time) - Rs. 5,000/-",
    transport: [
        { route: "From Dhamtari", fee: "INR 38,000/- Per Year" },
        { route: "From Kurud", fee: "INR 32,000/- Per Year" },
        { route: "From Bhilai", fee: "INR 33,000/- Per Year" },
        { route: "From Patan, Siltara, Urla & Mandhar", fee: "INR 31,000/- Per Year" },
        { route: "From Durg, Tilda & Simga", fee: "INR 34,000/- Per Year" },
        { route: "From Mahasamund", fee: "INR 33,000/- Per Year" },
        { route: "From Bhansoj", fee: "INR 25,000/- Per Year" },
        { route: "From Rajim & Beergaon", fee: "INR 30,000/- Per Year" },
        { route: "From Raipur City", fee: "INR 25,000/- Per Year" },
        { route: "From Arang & Abhanpur", fee: "INR 24,000/- Per Year" },
        {
            route:
                "From New Raipur (Sector – 27, 29, 17, Chicha, CO Hospital, Stadium, Palaud, Kotni)",
            fee: "INR 18,000/- Per Year",
        },
        { route: "From Mandir Hasaud", fee: "INR 18,000/- Per Year" },
    ],
    scholarship:
        "Scholarships (General, Merit & Girl Student) are available on Tuition Fees. The above scholarships are not applicable to Pharmacy, Education, and Research Programs.",
    uniformDetails: "Uniform Includes - 2 Trousers, 2 Shirts, 1 Blazer, 1 T-Shirt, 1 Lower, 1 Tie, 1 Bag",
};

/** -----------------------------
 *  Reusable table wrapper
 *  ----------------------------*/
function ScrollTable({ columns, rows }) {
    return (
        <div className="mt-2 border border-gray-200 rounded-lg overflow-hidden">
            <div className="w-full max-w-full overflow-x-auto overflow-y-auto max-h-[520px] scrollbar-hide">
                <table className="w-max min-w-full border-collapse">
                    <thead className="sticky top-0 z-10">
                        <tr className="bg-[var(--dark-blue)] text-white">
                            {columns.map((c) => (
                                <th
                                    key={c}
                                    className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap"
                                >
                                    {c}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((r, idx) => (
                            <tr
                                key={r["S.No."] ?? idx}
                                className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white"
                            >
                                {columns.map((col) => (
                                    <td
                                        key={col}
                                        className="px-4 py-3 text-[var(--foreground)] whitespace-normal break-words align-top min-w-[140px]"
                                    >
                                        {r[col] ?? "-"}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function Notes({ items = [] }) {
    if (!items?.length) return null;

    return (
        <div className="mt-4 text-left space-y-2">
            <h4 className="font-plus-jakarta-sans font-semibold text-[var(--foreground)]">Notes</h4>
            <ul className="list-disc pl-5 space-y-1">
                {items.map((t, i) => (
                    <li
                        key={i}
                        className="text-sm md:text-base text-[var(--foreground)] font-plus-jakarta-sans whitespace-normal break-words"
                    >
                        {t}
                    </li>
                ))}
            </ul>
        </div>
    );
}

/** -----------------------------
 *  MAIN COMPONENT
 *  ----------------------------*/
export default function FeesTabSection() {
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState("arts");

    useEffect(() => {
        const tabParam = searchParams?.get("tab");
        if (tabParam && IQAC_TABS.some((tab) => tab.id === tabParam)) {
            setActiveTab(tabParam);
        }
    }, [searchParams]);

    const faculty = useMemo(() => {
        if (activeTab === "commerce") return FEES_COMMERCE;
        if (activeTab === "engineering") return FEES_ENGINEERING;
        if (activeTab === "it") return FEES_IT;
        if (activeTab === "science") return FEES_SCIENCE;
        if (activeTab === "arts") return FEES_ARTS;
        if (activeTab === "law") return FEES_LAW;
        if (activeTab === "pharmacy") return FEES_PHARMACY;
        if (activeTab === "education") return FEES_EDUCATION;
        if (activeTab === "research") return FEES_RESEARCH;
        if (activeTab === "hostel") return { title: "Hostel Fees" };
        return null;
    }, [activeTab]);

    // ✅ These tabs have their own custom content (so fallback should NEVER appear for them)
    const CUSTOM_TABS = ["hostel", "scholarship", "transport", "other", "value"];

    return (
        <section className="w-full py-4 px-2 overflow-x-hidden">
            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        :global(.fees-hostel-compact section.py-14) {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }

        :global(.fees-hostel-compact .rounded-3xl) {
          padding: 12px !important;
        }

        :global(.fees-hostel-compact .rounded-2xl.bg-white) {
          padding: 16px !important;
        }

        @media (min-width: 768px) {
          :global(.fees-hostel-compact .rounded-2xl.bg-white) {
            padding: 24px !important;
          }
        }
      `}</style>

            <div className="flex flex-col lg:flex-row gap-4 bg-[var(--dark-blue)] py-16 md:px-10 px-4 rounded-xl overflow-x-hidden items-stretch">
                {/* Tabs */}
                <div className="w-full lg:w-80 flex-shrink-0">
                    <div className="rounded-[16px] bg-[var(--dark-blue)]">
                        <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
                            {IQAC_TABS.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`
                      flex-shrink-0 lg:w-full text-left px-4 py-5 rounded-[8px]
                      font-plus-jakarta-sans text-sm md:text-base
                      whitespace-normal break-words
                      transition-all duration-200
                      ${isActive
                                                ? "bg-[var(--button-red)] text-white font-semibold"
                                                : "bg-[var(--lite-sand)] text-[var(--foreground)] hover:opacity-90"
                                            }
                    `}
                                    >
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex-1 w-full min-w-0 flex flex-col">
                    <div className="rounded-[16px] bg-white shadow-sm overflow-hidden h-full flex flex-col">
                        <div className="flex-1 overflow-y-auto px-4 md:px-5 pt-4 md:pt-5 pb-8">
                            {/* Faculty Tables */}
                            {faculty &&
                                activeTab !== "hostel" &&
                                !["scholarship", "transport", "other", "value"].includes(activeTab) && (
                                    <div>
                                        <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4 text-center mt-1">
                                            {faculty.title}
                                        </h2>

                                        <ScrollTable columns={faculty.columns} rows={faculty.rows} />
                                        <Notes items={faculty.notes} />
                                    </div>
                                )}

                            {/* Hostel Tab */}
                            {activeTab === "hostel" && (
                                <div className="w-full">
                                    <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4 text-center mt-1">
                                        Hostel Fees
                                    </h2>

                                    <div className="fees-hostel-compact">
                                        <HostelFeeTabs />
                                    </div>
                                </div>
                            )}

                            {/* Scholarships Tab */}
                            {activeTab === "scholarship" && (
                                <div>
                                    <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4 mt-1 text-center">
                                        Scholarships
                                    </h2>

                                    <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                                        <div className="font-semibold mb-2">Scholarship Details</div>
                                        <p className="whitespace-normal break-words text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base">
                                            {OTHER_CHARGES.scholarship}{" "}
                                            <a
                                                href="https://kalinga-university.s3.ap-south-1.amazonaws.com/scholarships/SCHOLARSHIP_25-26+(4)+(1).pdf"
                                                className="text-[var(--button-red)] underline font-semibold ml-1"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                View scholarship details
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Transport Tab */}
                            {activeTab === "transport" && (
                                <div>
                                    <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4 mt-1 text-center">
                                        Transport Charges (To &amp; From)
                                    </h2>

                                    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                                        <div className="w-full max-w-full overflow-x-auto overflow-y-auto max-h-[520px] scrollbar-hide">
                                            <table className="w-max min-w-full border-collapse">
                                                <thead className="sticky top-0 z-10">
                                                    <tr className="bg-[var(--dark-blue)] text-white">
                                                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                                                            Route
                                                        </th>
                                                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                                                            Fee
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {OTHER_CHARGES.transport.map((t, i) => (
                                                        <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                                                            <td className="px-4 py-3 whitespace-normal break-words min-w-[280px]">
                                                                {t.route}
                                                            </td>
                                                            <td className="px-4 py-3 whitespace-nowrap">{t.fee}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Other Charges Tab */}
                            {activeTab === "other" && (
                                <div>
                                    <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4 mt-1 text-center">
                                        Other Charges
                                    </h2>

                                    <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                                        <div className="font-semibold mb-2">Other Charges</div>
                                        <ul className="list-disc pl-5 space-y-1 text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base">
                                            <li>Lateral Entry Fees: {OTHER_CHARGES.lateralEntryFee}</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 mt-4 rounded-lg border border-gray-200 bg-white">
                                        <div className="font-semibold mb-2">Uniform Details</div>
                                        <p className="whitespace-normal break-words text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base">
                                            {OTHER_CHARGES.uniformDetails}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* ✅ Value Additions (FIXED: no extra fallback now) */}
                            {activeTab === "value" && (
                                <div>
                                    <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4 text-center mt-1">
                                        Value Additions
                                    </h2>

                                    <ul className="list-disc pl-5 space-y-2 text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base">
                                        {VALUE_ADDITIONS.map((v, i) => (
                                            <li key={i} className="whitespace-normal break-words">
                                                {v}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* ✅ fallback (FIXED: will NOT run for value additions anymore) */}
                            {!faculty && !CUSTOM_TABS.includes(activeTab) && (
                                <div>
                                    <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4 text-center mt-1">
                                        {IQAC_TABS.find((t) => t.id === activeTab)?.label}
                                    </h2>
                                    <p className="text-[var(--foreground)] font-plus-jakarta-sans text-center">
                                        Content will be added here.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
