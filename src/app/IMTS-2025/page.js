"use client";
import { useState, useEffect, useMemo } from "react";
import MainIntro from "@/app/components/about/main_intro";
import ImageContent from "../components/ccrc/imagecontent";
import SectionHeading from "../components/general/SectionHeading";
import ImageListItem from '../components/ccrc/imagelistitem';
import KeyDates from "../components/general/key_dates";
import DataTable from "../components/general/data-table";
import FAQ from "../components/general/faq";
import ContactSection from '../components/cif/contact_section'
import GlobalArrowButton from "../components/general/global-arrow_button";

export default function IMTS2025() {
    const mainIntroContent = {
        title: "About The Faculty Of Commerce And Management",
        description: "The Department of Commerce creates a stimulating environment for the academic growth of its students and provides them with a thorough understanding of a range of subjects such as business organisation, financial accounting, corporate law, economic theory and business communication. The faculty members of the Department are known for their expertise in finance and organisational behaviour and impart practical knowledge of the discipline of auditing, company law and income tax. Interwoven into teaching practices is the goal of fostering in students a sense of responsibility towards society as well. In line with this emphasis, the classroom space is democratic and one in which differences in opinions are respected. Most importantly, teachers remain available to students at all times.",
        description2: "To foster student learning, several initiatives are taken beyond classroom teaching; these include workshops, talks, paper presentations, field trips, etc. The Department of Management focuses on management education more than just business management. The commitment is thought leadership with a deep understanding of business. The approach to pedagogy combines fieldwork, case studies, research and instrumented feedback with a strong emphasis on concepts and theory. We, as a Department of Management, are training our students to cope with the pressure of fierce competition. Our education is a fair blend of human behaviour, organisational psychology & behaviour, human resource management, economics, quantitative methods, finance & accounts, marketing, production & operations, and information technology. Students are given ample opportunity to cultivate creativity and exploit innovations in the work culture. Visits of personnel from the corporate world and academia are part of our curriculum to apprise the students of the corporate needs and the latest developments in theory. Industrial visits and training are arranged to simulate the ground realities of corporate work and culture in their minds. Lack of communication skills and ethics poses many problems in our day-to-day work, which becomes serious with the passage of time. Therefore, the students are being given due attention to embedding these so that they can come up to the expectations of the customers, organisations and society in a sustainable manner and add value to their jobs",
        imageUrl: "https://cdn.kalingauniversity.ac.in/imts-2025/About.jpeg",
        imageAlt: "IMTS-2025",
    }

    const mainIntroContent1 = {
        title: "About The Two Days International Conference",
        description: "The conference aims to provide a plat form for academicians, researchers, scientists, and industry leaders to come together and conjure & deliberate ideas, inventions, and models on the theme. The Innovative Management Techniques for Sustainable Development As a consequence, the business has also undergone various changes, and the way of doing business has seen major changes. This requires that new ways are discovered to manage the business and its various dimensions. The aim of the conference is to focus on such dimensions and bring to light the issues and the possible solutions for them.",
        imageUrl: "https://cdn.kalingauniversity.ac.in/imts-2025/Two-days-International-conference.jpg",
        imageAlt: "Two Days International Conference",
    }
    const mainIntroContent2 = {
        title: "Awards",
        description: [
            "1. Certificate / E - Certificate will be provided to every Participant",
            "2. Certificate of Merit will be provided for 3 Best Paper Presentations in every track.",
            "3. The 10 best - selected papers will be published in reputed journals(UGC care group - 2 or Scopus Indexed).",
            "4. Other Selected Papers will be published in an edited book with an ISBN number.",
            "5. Conference proceedings will be released at the inauguration of the Conference.",
            "Note:",
            "(1) The author has to pay the Fee for the publication in the journal.",
            "(2) A soft copy of the book/proceeding shall be provided to the authors.",
            "* Hard copy will be provided on request with applicable charges.",
        ],
        imageUrl: "https://cdn.kalingauniversity.ac.in/imts-2025/About.jpeg",
        imageAlt: "Awards",
    }

    const mainIntroContent3 = {
        title: "Publication",
        description: [
            "All the papers will be included in the conference proceedings with ISBN as E-Book. Selected papers will be published in the UGC / ABDC / Scopus indexed journals with applicable charges determined by the respective journals.",
            "Book of abstract with ISBN No.",
            "Edited books with ISBN No.",
            "Korea Review of International Studies (ABDC Listed).",
            "Accountancy Business and the Public Interest (ABDC Listed).",
            "International Journal of Multidisciplinary Studies (Peer Reviewed).",
            "Business and Organisation Studies E-Journal (BOSeJ)."
        ],
        imageUrl: "https://cdn.kalingauniversity.ac.in/imts-2025/About.jpeg",
        imageAlt: "Awards",
    }
    const boxItems = [
        {
            id: 1,
            title: "Sub-theme 1",
            description: "Smart Cities and Urban Planning",
        },
        {
            id: 2,
            title: "Sub-theme 2",
            description: "Internet of Things (IoT) for Environmental Monitoring",
        },
        {
            id: 3,
            title: "Sub-theme 3",
            description: "Renewable Energy and Smart Grids",
        },
        {
            id: 4,
            title: "Sub-theme 4",
            description: "Sustainable Transportation Systems",
        },
        {
            id: 5,
            title: "Sub-theme 5",
            description: "Smart Agriculture and Precision Farming",
        }
    ]

    const boxItems1 = [
        {
            id: 1,
            title: "Sub-theme 1",
            description: "Omni Channel Retailing",
        },
        {
            id: 2,
            title: "Sub-theme 2",
            description: "Digital Marketing Strategies",
        },
        {
            id: 3,
            title: "Sub-theme 3",
            description: "E-commerce Platforms and Technologies",
        },
        {
            id: 4,
            title: "Sub-theme 4",
            description: "Mobile Commerce and AppBased Shopping",
        }
    ]

    const boxItems2 = [
        {
            id: 1,
            title: "Sub-theme 1",
            description: "Corporate Sustainability Strategies",
        },
        {
            id: 2,
            title: "Sub-theme 2",
            description: "Sustainable Supply Chain Management",
        },
        {
            id: 3,
            title: "Sub-theme 3",
            description: "Green Finance and Investment",
        },
        {
            id: 4,
            title: "Sub-theme 4",
            description: "Social Responsibility and Ethical Business Practices",
        },
        {
            id: 5,
            title: "Sub-theme 5",
            description: "Eco-entrepreneurship and Innovation",
        }
    ]
    const boxItems3 = [
        {
            id: 1,
            title: "Sub-theme 1",
            description: "Startup Ecosystems",
        },
        {
            id: 2,
            title: "Sub-theme 2",
            description: "Innovation Strategies",
        },
        {
            id: 3,
            title: "Sub-theme 3",
            description: "Venture Capital and Angel Investing",
        },
        {
            id: 4,
            title: "Sub-theme 4",
            description: "Scaling and Growth of Small Businesses",
        }
    ]
    const boxItems4 = [
        {
            id: 1,
            title: "Sub-theme 1",
            description: "Science-policy Interface for Sustainable Development",
        },
        {
            id: 2,
            title: "Sub-theme 2",
            description: "Interdisciplinary Research for Complex Sustainability Challenges",
        },
        {
            id: 3,
            title: "Sub-theme 3",
            description: "Engaging Communities in Green Initiatives",
        },
        {
            id: 4,
            title: "Sub-theme 4",
            description: "Role of Government, Industry, and Academia in Collaboration",
        },
        {
            id: 5,
            title: "Sub-theme 5",
            description: "International Partnerships for Global Sustainable Goals",
        }
    ]
    const items = [
        {
            text: "An abstract may have a maximum of 300 words and a maximum of 5 keywords.",
        },
        {
            text: "Abstract and Full Papers should be submitted to QR Code.",
        },
        {
            text: "The length of the paper should be between 3000-5000 words.",
        },
        {
            text: "The full paper must be formatted as an MS Word document in Times New Roman, 12-point font size.",
        },
        {
            text: "Registration is compulsory for all the participants, authors and co-authors with the Transaction ID number and Payment Receipt in pdf format.",
        },
        {
            text: "Registration without transaction ID number and receipt will not be considered.",
        },
    ];

    const items1 = [
        {
            text: "No abstract or full paper shall be accepted after the last date of submission.",
        },
        {
            text: "Only the selected abstracts will be permitted for presentation.",
        },
        {
            text: "Co-authorship is permitted, and at least one author must attend the Conference to present the paper.",
        },
        {
            text: "All submissions must be the author's original and unpublished work.",
        },
        {
            text: "More than 10% similarity will attract immediate disqualification.",
        }
    ];

    const keyDatesData = [
        { day: "31", superscript: "st", month: "Jan", year: "2025", title: "Last Date of Submission of Abstract", isPrimary: true },
        { day: "05", superscript: "th", month: "Feb", year: "2025", title: "Notification of Acceptance of Abstract", isPrimary: false },
        { day: "15", superscript: "th", month: "Feb", year: "2025", title: "Last Date for Registration and Payment", isPrimary: false },
        { day: "15", superscript: "th", month: "Feb", year: "2025", title: "Submission of Full Paper", isPrimary: false },
        { day: "21-22", superscript: "", month: "Feb", year: "2025", title: "International Conference", isPrimary: false },
    ];

    const registrationFeesColumns = [
        { key: "category", label: "Category", width: "w-2/3" },
        { key: "fee", label: "Fee (inclusive of taxes)", width: "w-1/3" }
    ];

    const mainRegistrationFees = [
        { category: "Faculty & Other Educators", fee: "INR 1500/-" },
        { category: "Research Scholars", fee: "INR 1500/-" },
        { category: "UG+PG Students", fee: "INR 1200/-" },
        { category: "Industry Experts", fee: "INR 2500/-" },
        { category: "International Participants", fee: "USD 50/-" }
    ];

    const lateRegistrationFees = [
        { category: "Each Category", fee: "INR 250/- additional" },
        { category: "International Participants", fee: "USD 20/- additional" }
    ];

    const spotRegistrationFees = [
        { category: "Each Category", fee: "INR 500/- additional" }
    ];

    const chiefpatrons = {
        id: "section-chief-patrons",
        title: "Chief Patrons",
        columns: [
            { key: "slNo", label: "S.No.", width: "w-16" },
            { key: "name", label: "Name Of Member", width: "flex-1" },
            { key: "position", label: "Position", width: "flex-1" },
        ],
        data: [
            { slNo: "1", name: "Dr. Rajiv Kumar", position: "Chairman, Kalinga University, Naya Raipur" },
            { slNo: "2", name: "Dr. Sandeep Arora", position: "Chancellor, Kalinga University, Naya Raipur" },
        ],
    };

    const patrons = {
        id: "section-patrons",
        title: "Patrons",
        columns: [
            { key: "slNo", label: "S.No.", width: "w-16" },
            { key: "name", label: "Name Of Member", width: "flex-1" },
            { key: "position", label: "Position", width: "flex-1" },
        ],
        data: [
            { slNo: "1", name: "Prof. (Dr.) R. Shridhar", position: "Vice-Chancellor, Kalinga University, Naya Raipur" },
            // { slNo: "2", name: "Dr. Byju John", position: "Director General, Kalinga University, Naya Raipur" },
            { slNo: "3", name: "Dr. Sandeep Gandhi", position: "Registrar, Kalinga University, Naya Raipur" },
            { slNo: "4", name: "Dr. Rahul Mishra", position: "Dean Academic Affairs, Kalinga University, Naya Raipur" },
            { slNo: "5", name: "Dr. Vijayalaxmi", position: "Director IQAC, Kalinga University, Naya Raipur" },
        ],
    };

    const convenors = {
        id: "section-convenors",
        title: "Convenors",
        columns: [
            { key: "slNo", label: "S.No.", width: "w-16" },
            { key: "name", label: "Name Of Member", width: "flex-1" },
            { key: "position", label: "Position", width: "flex-1" },
        ],
        data: [
            { slNo: "1", name: "Dr. Shinki K. Pandey", position: "HoD, Faculty of Commerce & Management, Kalinga University, Naya Raipur" },
            { slNo: "2", name: "Dr. Saket Jeswani", position: "Dean, Kalinga University, Naya Raipur" },
            { slNo: "3", name: "Dr. Deepti Patnaik", position: "Assistant Professor, Kalinga University, Naya Raipur" },
        ],
    };

    const coconvenors = {
        id: "section-co-convenors",
        title: "Co-convenors",
        columns: [
            { key: "slNo", label: "S.No.", width: "w-16" },
            { key: "name", label: "Name Of Member", width: "flex-1" },
            { key: "position", label: "Position", width: "flex-1" },
        ],
        data: [
            { slNo: "1", name: "Dr. Nishtha Sharma", position: "Kalinga University, Naya Raipur" },
            { slNo: "2", name: "Dr. Sandeep Kumar", position: "Career Point University, Kota" },
            { slNo: "3", name: "Dr. Jyotsna Dwivedi", position: "Kalinga University, Naya Raipur" },
        ],
    };

    const keynotespeakers = {
        id: "section-keynote-speakers",
        title: "Keynote Speakers",
        columns: [
            { key: "slNo", label: "S.No.", width: "w-16" },
            { key: "name", label: "Name Of Member", width: "flex-1" },
            { key: "position", label: "Position", width: "flex-1" },
        ],
        data: [
            { slNo: "1", name: "Dr. Punya Prasanna Paltani", position: "Associate Professor, IIIT, Naya Raipur" },
            { slNo: "2", name: "Mr. Anurag Kumar", position: "Strategist - TenneT TSO Arnhem, Gelderland, Netherlands" },
            { slNo: "3", name: "Dr. David Boohene", position: "Lecturer, Economist, Life Coach, Corporate Trainer and Research Consultant, University of Energy and Natural Resources, Sunyani Ghana, West Africa" },
        ],
    };

    const organizingmembers = {
        id: "section-organizing-members",
        title: "Organizing Members",
        columns: [
            { key: "slNo", label: "S.No.", width: "w-16" },
            { key: "name", label: "Name Of Member", width: "flex-1" },
            { key: "position", label: "Position", width: "flex-1" },
        ],
        data: [
            { slNo: "1", name: "Dr. Chandra Bhooshan Singh", position: "Assistant Professor, Kalinga University, Naya Raipur" },
            { slNo: "2", name: "Ms. Shivangi Makade", position: "Assistant Professor, Kalinga University, Naya Raipur" },
            { slNo: "3", name: "Mr. Shubham Singh Chandel", position: "Assistant Professor, Kalinga University, Naya Raipur" },
            { slNo: "4", name: "Ms. Anushree Shrivastava", position: "Assistant Professor, Kalinga University, Naya Raipur" },
            { slNo: "5", name: "Dr. Satvik Jain", position: "Assistant Professor, Kalinga University, Naya Raipur" },
            { slNo: "6", name: "Ms. Deepshikha Patel", position: "Assistant Professor, Kalinga University, Naya Raipur" },
            { slNo: "7", name: "Ms. Parika Sharma", position: "Assistant Professor, Kalinga University, Naya Raipur" },
            { slNo: "8", name: "Ms. Dawakit Lepcha", position: "Assistant Professor, Kalinga University, Naya Raipur" },
            { slNo: "9", name: "Ms. Kanchan Thakur", position: "Assistant Professor, Kalinga University, Naya Raipur" },
            { slNo: "10", name: "Dr. Anivilla Shrikant", position: "Assistant Professor" },
            { slNo: "11", name: "Mr. Rakshak Bharti", position: "Assistant Professor, Kalinga University, Naya Raipur" },
            { slNo: "12", name: "Ms. Angel Mary Xess", position: "Assistant Professor, Kalinga University, Naya Raipur" },
            { slNo: "13", name: "Mr. Kalyan Tankala Kumar", position: "Assistant Professor, Kalinga University, Naya Raipur" },
        ],
    };

    const advisorycommittee = {
        id: "section-advisory-committee",
        title: "Advisory Committee",
        columns: [
            { key: "slNo", label: "S.No.", width: "w-16" },
            { key: "name", label: "Name Of Member", width: "flex-1" },
            { key: "position", label: "Position", width: "flex-1" },
        ],
        data: [
            { slNo: "1", name: "Dr. Felix Chavez", position: "Advisor, JMC & BC, Philippines" },
            { slNo: "2", name: "Dr. Georgios Mamanis", position: "Business Consultant, ICT Sector, Greece" },
            { slNo: "3", name: "Dr. Sanjeev Prashar", position: "IIM, Raipur" },
            { slNo: "4", name: "Dr. Bijayananda Patnaik", position: "NIT, Raipur" },
            { slNo: "5", name: "Dr. Amit Agrawal", position: "IIIT, Raipur" },
            { slNo: "6", name: "Dr. Miklesh Prasad Yadav", position: "Amity University, Noida" },
            { slNo: "7", name: "Dr. Stephan Das", position: "Josephs Business School, SHUATS, U.P." },
            { slNo: "8", name: "Dr. Reeta Saxsena", position: "Career Point University, Kota" },
            { slNo: "9", name: "Prof. (Dr.) Anita Patra", position: "Registrar, CUTM" },
            { slNo: "10", name: "Dr. Josefina D Ortega", position: "VP for International Affairs, JMC, Philippines" },
            { slNo: "11", name: "Dr. Deepika Gupta", position: "IIM, Vishakhapatnam" },
            { slNo: "12", name: "Prof. Shailendra Singh Bhadouria", position: "Indira Gandhi National Tribal University, Amarkantak" },
            { slNo: "13", name: "Dr. Amit Manglani", position: "Guru Ghasidas University, Bilaspur" },
            { slNo: "14", name: "Dr. Noopur", position: "Assistant Professor, IIIT, Ranchi" },
            { slNo: "15", name: "Dr. Parul Sharda", position: "Medicaps University, Indore" },
            { slNo: "16", name: "Dr. Sangeeta Mathur", position: "Career Point University, Kota" },
            { slNo: "17", name: "Dr. Meenakshi Sharma", position: "Mangalmay Institute of Management and Technology, Noida" },
            { slNo: "18", name: "Prof. (Dr.) R. C Mohanty", position: "Dean Research, CUTM" },
            { slNo: "19", name: "Dr. Aayush Mangal", position: "Vice Chairman, Mangalmay Group Of Institutions" },
            { slNo: "20", name: "Dr. John Vianne Murci", position: "Director Research and Accreditation - JMC, Philippines" },
            { slNo: "21", name: "Dr. Rajhans Mishra", position: "IIM, Indore" },
            { slNo: "22", name: "Prof. Ashish Mathur", position: "Central University of Haryana, Mahendragarh" },
            { slNo: "23", name: "Dr. Punya Prasanna Paltani", position: "IIIT, Raipur" },
            { slNo: "24", name: "Dr. Ajay Jain", position: "Research Foundation of India, Indore" },
            { slNo: "25", name: "Dr. Regina John", position: "Josephs Business School, SHUATS, U.P." },
            { slNo: "26", name: "Dr. Lalit Kumar Sharma", position: "Galgotia University, Noida" },
            { slNo: "27", name: "Dr. Amiya Kumar Mohapatra", position: "Jaipuria Institute of Management, Indore" },
            { slNo: "28", name: "Dr. Pushkar Dubey", position: "Pt. Sundarlal Sharma Open University, Bilaspur" },
        ],
    };

    const technicalcommittee = {
        id: "section-technical-committee",
        title: "Technical Committee",
        columns: [
            { key: "slNo", label: "S.No.", width: "w-16" },
            { key: "name", label: "Name Of Member", width: "flex-1" },
            { key: "position", label: "Position", width: "flex-1" },
        ],
        data: [
            { slNo: "1", name: "Dr. Subhas C. Patnaik", position: "Central University of Odisha, Koraput" },
            { slNo: "2", name: "Dr. Shibani Pattanayak", position: "SOA University, Bhubaneswar" },
            { slNo: "3", name: "Dr. Asish Jorasia", position: "Career Point University, Kota" },
            { slNo: "4", name: "Dr. G. Henry James", position: "ANITS, Andhra Pradesh" },
            { slNo: "5", name: "Dr. Aditi Gaur", position: "Career Point University, Kota" },
            { slNo: "6", name: "Dr. Pratima Rawal", position: "Career Point University, Kota" },
            { slNo: "7", name: "Dr. Maitrayee Rout", position: "GIET, Bhubaneswar" },
            { slNo: "8", name: "Dr. Somesh Kr. Sinha", position: "RBS, Kochi" },
            { slNo: "9", name: "Dr. Meenakshi Sharma", position: "MGI, Greater Noida" },
            { slNo: "10", name: "Dr. Subhasis Das", position: "GIET University, Gunpur" },
            { slNo: "11", name: "Dr. Debasis Mohanty", position: "OPJU, Raigarh" },
            { slNo: "12", name: "Dr. Rekha Attri", position: "Jaipuria Institute of Management, Indore" },
            { slNo: "13", name: "Dr. Piyush Gupta", position: "University of Allahabad, Prayagraj" },
            { slNo: "14", name: "Dr. Divya", position: "Central University of Haryana, Mahendragarh" },
            { slNo: "15", name: "Dr. Abhiruchi Udayan", position: "MIT Vishwashanti Gurukul World School, Pune" },
            { slNo: "16", name: "Dr. Nisha Dubey", position: "Bhakt Mata Karma Govt. College, Samoda" },
            { slNo: "17", name: "Dr. Sunita Dixit", position: "Swami Vivekanand University, Sagar" },
            { slNo: "18", name: "Dr. Swati Tiwari", position: "SSGR Govt. College, Mungeli" },
        ],
    };

    const organizingsecretary = {
        id: "section-organizing-secretary",
        title: "Organizing Secretary",
        columns: [
            { key: "slNo", label: "S.No.", width: "w-16" },
            { key: "name", label: "Name Of Member", width: "flex-1" },
            { key: "position", label: "Position", width: "flex-1" },
        ],
        data: [
            { slNo: "1", name: "Ms. Mariyam Ahmed", position: "Assistant Professor, Kalinga University, Naya Raipur" },
            { slNo: "2", name: "Ms. Alpana Sharma", position: "Assistant Professor, Kalinga University, Naya Raipur" },
            { slNo: "3", name: "Mr. Tushar Ranjan Barik", position: "Assistant Professor, Kalinga University, Naya Raipur" },
        ],
    };

    const tableSections1 = [
        chiefpatrons,
        patrons,
        convenors,
        coconvenors,
        keynotespeakers,
        organizingmembers,
        advisorycommittee,
        technicalcommittee,
        organizingsecretary,
    ];

    const associationsRef = [
        {
            title: "In Association with",
            image: "https://cdn.kalingauniversity.ac.in/imts-2025/imts-images-2.jpeg",
        }
    ];

    const collaborationsRef = [
        {
            title: "In Collaboration with",
            image: "https://cdn.kalingauniversity.ac.in/imts-2025/imts-images-1.jpeg",
        }
    ];

    const registrationFeesFAQItems = [
        {
            id: 1,
            question: "Delegate Category & Registration Fee",
            component: (
                <DataTable
                    columns={registrationFeesColumns}
                    data={mainRegistrationFees}
                    className="shadow-none border-0"
                    disableContainer={true}
                />
            )
        },
        {
            id: 2,
            question: "Late Registration Charges (After Registration Dates)",
            component: (
                <DataTable
                    columns={registrationFeesColumns}
                    data={lateRegistrationFees}
                    className="shadow-none border-0"
                    disableContainer={true}
                />
            )
        },
        {
            id: 3,
            question: "On the Spot Registration Fees",
            component: (
                <div className="space-y-6">
                    <DataTable
                        columns={registrationFeesColumns}
                        data={spotRegistrationFees}
                        className="shadow-none border-0"
                        disableContainer={true}
                    />
                    <div className="border-t border-[var(--border-gray)] pt-6 space-y-4 text-sm text-[var(--light-text-gray)] font-plus-jakarta-sans">
                        <div className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--button-red)] mt-2 shrink-0"></span>
                            <p><strong>50% Concession</strong> to participants from Kalinga University and Colleges having MoU with Kalinga University, Naya Raipur.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--button-red)] mt-2 shrink-0"></span>
                            <p>Accommodation will be provided at the Participants' request. <strong>(Charges Applicable)</strong>.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--button-red)] mt-2 shrink-0"></span>
                            <p>Registration Fees include a <strong>Conference Kit, High Tea, Lunch and Snacks</strong> for both days.</p>
                        </div>
                    </div>
                </div>
            )
        },

    ];

    const sponsorshipColumns = [
        { key: "slNo", label: "Sl. No.", width: "w-16" },
        { key: "level", label: "Sponsorship Levels", width: "w-48" },
        { key: "amount", label: "Amount", width: "w-32" },
        { key: "benefits", label: "Exclusive Sponsorship Benefits", width: "flex-1" }
    ];

    const sponsorshipData = [
        {
            slNo: "01.",
            level: "Platinum Sponsorship",
            amount: "INR 1,00,000/-",
            benefits: (
                <ul className="list-disc pl-5 space-y-1">
                    <li>5 Complimentary Delegates Passes.</li>
                    <li>4 Complimentary Standee/Banner.</li>
                    <li>Address to the audience of 5 Minutes.</li>
                    <li>Dedicated space to display products, etc.</li>
                    <li>Prominent Display of Logo on Conference Materials.</li>
                    <li>Inserts/Flyers will be put in Conference Kits.</li>
                    <li>4 Full-page ads in our Conference Proceedings.</li>
                    <li>5 Minutes promotional video.</li>
                    <li>Conference Kit and Memento.</li>
                </ul>
            )
        },
        {
            slNo: "02.",
            level: "Diamond Sponsorship",
            amount: "INR 50,000/-",
            benefits: (
                <ul className="list-disc pl-5 space-y-1">
                    <li>3 Complimentary Delegates Passes.</li>
                    <li>1 Complimentary Standee/Banner.</li>
                    <li>Prominent Display of Logo on Conference Materials.</li>
                    <li>Inserts/Flyers will be put in Conference Kits.</li>
                    <li>2 Full-page ads in our Conference Proceedings.</li>
                    <li>5 Minutes promotional video.</li>
                    <li>Conference Kit and Memento.</li>
                </ul>
            )
        },
        {
            slNo: "03.",
            level: "Gold Sponsorship",
            amount: "INR 25,000/-",
            benefits: (
                <ul className="list-disc pl-5 space-y-1">
                    <li>2 Complimentary Delegates Passes.</li>
                    <li>Display of Logo on Conference Materials.</li>
                    <li>1 Full-page ad in our Conference Proceedings.</li>
                    <li>Conference Kit and Memento.</li>
                </ul>
            )
        },
        {
            slNo: "04.",
            level: "Silver Sponsorship",
            amount: "INR 15,000/-",
            benefits: (
                <ul className="list-disc pl-5 space-y-1">
                    <li>1 Complimentary Delegate Pass.</li>
                    <li>Display of Logo on Conference Materials.</li>
                    <li>Conference Kit and Memento.</li>
                </ul>
            )
        },
        {
            slNo: "05.",
            level: "Bronze Sponsorship",
            amount: "INR 10,000/-",
            benefits: (
                <ul className="list-disc pl-5 space-y-1">
                    <li>Display of Logo on Conference Materials.</li>
                </ul>
            )
        }
    ];

    const sponsorshipFAQItems = [
        {
            id: 1,
            question: "Sponsorship Opportunities",
            component: (
                <DataTable
                    columns={sponsorshipColumns}
                    data={sponsorshipData}
                    className="shadow-none border-0"
                    disableContainer={true}
                    headerBgColor="bg-[var(--dark-blue)]"
                    headerTextColor="text-white"
                />
            )
        }
    ];

    return (
        <>
            <section className="relative overflow-hidden bg-[var(--card-gray)] py-16 text-[var(--foreground)] text-center">
                <div className="container relative z-10 mx-auto px-4">
                    <h2 className="mb-6 text-2xl md:text-4xl text-[var(--foreground)]">
                        Faculty Of Commerce And Management
                    </h2>

                    <div className="flex flex-col items-center justify-center gap-8 md:flex-row mb-12">
                        {/* Association logos box */}
                        <div className="flex flex-col items-center">
                            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#006D85] opacity-90">In Association With</p>
                            <div className="rounded-[20px] bg-white p-4 shadow-xl">
                                <img
                                    src="https://cdn.kalingauniversity.ac.in/imts-2025/imts-images-2.jpeg"
                                    alt="In Association Icons"
                                    className="h-auto max-w-full md:max-w-[400px]"
                                />
                            </div>
                        </div>

                        {/* Collaboration logos box */}
                        <div className="flex flex-col items-center">
                            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#006D85] opacity-90">In Collaboration With</p>
                            <div className="rounded-[20px] bg-white p-4 shadow-xl overflow-hidden">
                                <img
                                    src="https://cdn.kalingauniversity.ac.in/imts-2025/imts-images-1.jpeg"
                                    alt="Collaboration and Sponsors Grid"
                                    className="h-auto max-w-full md:max-w-[500px]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 mb-12">
                        <h4 className="text-lg font-semibold uppercase tracking-widest text-[#006D85] font-plus-jakarta-sans">Organises</h4>
                        <h3 className="text-2xl md:text-4xl font-stix">Two Days International Conference</h3>
                        <p className="text-xl font-medium opacity-80">On</p>
                        <h2 className="mx-auto max-w-5xl text-xl leading-tight md:text-3xl font-stix text-[var(--foreground)]">
                            Innovative Management Techniques For Sustainable Development <br className="hidden md:block" /> (IMTS-2025)
                        </h2>
                        <div className="pt-4">
                            <p className="text-base font-bold tracking-widest uppercase font-plus-jakarta-sans text-[#006D85]">
                                DATE: 21<sup className="text-xs">TH</sup> – 22<sup className="text-xs">ND</sup> FEBRUARY 2025
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row mb-16">
                        <GlobalArrowButton
                            as="a"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfDZN20-gqQIqqWIyuwCH3Ogvo46tVEMkN6fM0KVJZUgVmlQw/closedform"
                            className="text-base"
                        >
                            REGISTER NOW
                        </GlobalArrowButton>
                        {/* <GlobalArrowButton
                            variant="transparent"
                            as="button"
                            className="text-base"
                        >
                            ABOUT THE CONFERENCE
                        </GlobalArrowButton> */}
                    </div>
                </div>
            </section>

            <MainIntro title={mainIntroContent.title}
                description={[mainIntroContent.description, mainIntroContent.description2]}
                imageUrl={mainIntroContent.imageUrl}
                imageAlt={mainIntroContent.imageAlt}
                showKnowMore={true}
                initialVisibleParagraphs={1}
                descriptionClassName="text-[var(--light-text-gray)] font-plus-jakarta-sans"
            />

            <MainIntro title={mainIntroContent1.title}
                description={[mainIntroContent1.description]}
                imageUrl={mainIntroContent1.imageUrl}
                imageAlt={mainIntroContent1.imageAlt}
                showKnowMore={true}
                initialVisibleParagraphs={1}
                descriptionClassName="text-[var(--light-text-gray)] font-plus-jakarta-sans"
                reverseLayout={true}
            />
            <ImageContent
                title="Call for Papers"
                subtitle=""
                imageSrc=""
                description="The International Conference on Innovative Management Techniques for Sustainable Development (IMTS-2025) organised by the Faculty of Commerce and Management, Kalinga University, Naya Raipur, will be held on 21 st - 22nd February 2025. The Conference invites contributions in the form of full-length scholarly papers documenting original and substantial research work."
                hasImage={false}
            />
            <SectionHeading
                title="Themes & Sub-Themes"
                subtitle=""
                description=""
                titleClassName="text-center mt-20"
            />
            <ImageListItem
                imageSrc="https://cdn.kalingauniversity.ac.in/imts-2025/Theme-1.jpg"
                boxItems={boxItems}
                title="Theme 1: Smart Technologies for Sustainable Development"
                subtitle=""
                description=""
                className="bg-white"
                textClassName=""
                headingClassName=""
                cardBackgroundColor="bg-[var(--button-red)]"
                cardTitleClassName="text-white"
                listItemTextClassName="text-white"
                hideIcons={true}
            />
            <ImageListItem
                imageSrc="https://cdn.kalingauniversity.ac.in/imts-2025/Theme-2.jpg"
                boxItems={boxItems1}
                title="Theme 2: E-commerce and Digital Transformation"
                subtitle=""
                description=""
                className="bg-white"
                textClassName=""
                headingClassName=""
                cardBackgroundColor="bg-[var(--button-red)]"
                cardTitleClassName="text-white"
                listItemTextClassName="text-white"
                hideIcons={true}
                reverseLayout={true}
            />
            <ImageListItem
                imageSrc="https://cdn.kalingauniversity.ac.in/imts-2025/Theme-3.jpg"
                boxItems={boxItems2}
                title="Theme 3: Green Technologies in Business and Management Practices"
                subtitle=""
                description=""
                className="bg-white"
                textClassName=""
                headingClassName=""
                cardBackgroundColor="bg-[var(--button-red)]"
                cardTitleClassName="text-white"
                listItemTextClassName="text-white"
                hideIcons={true}
            />
            <ImageListItem
                imageSrc="https://cdn.kalingauniversity.ac.in/imts-2025/Theme-4.jpg"
                boxItems={boxItems3}
                title="Theme 4: Entrepreneurship and Innovation"
                subtitle=""
                description=""
                className="bg-white"
                textClassName=""
                headingClassName=""
                cardBackgroundColor="bg-[var(--button-red)]"
                cardTitleClassName="text-white"
                listItemTextClassName="text-white"
                hideIcons={true}
                reverseLayout={true}
            />
            <ImageListItem
                imageSrc="https://cdn.kalingauniversity.ac.in/imts-2025/Theme-5.jpg"
                boxItems={boxItems4}
                title="Theme 5: Cross-disciplinary Collaboration for Sustainability"
                subtitle=""
                description=""
                className="bg-white"
                textClassName=""
                headingClassName=""
                cardBackgroundColor="bg-[var(--button-red)]"
                cardTitleClassName="text-white"
                listItemTextClassName="text-white"
                hideIcons={true}
            />
            <ImageListItem
                items={items}
                imageSrc="https://cdn.kalingauniversity.ac.in/imts-2025/Abstract-submission.jpg"
                title="Submission Guidelines"
                description=""
                buttonText="Read More"
                className="!bg-[var(--background)]"
                textClassName="text-[var(--foreground)]"
                headingClassName="text-[var(--foreground)]"
                reverseLayout={true}
            />
            <ImageListItem
                items={items1}
                imageSrc="https://cdn.kalingauniversity.ac.in/imts-2025/Participation.jpeg"
                title="Rules For Participation"
                description=""
                buttonText="Read More"
                className="!bg-[var(--background)]"
                textClassName="text-[var(--foreground)]"
                headingClassName="text-[var(--foreground)]"
            />
            <KeyDates
                title="Key Dates"
                dates={keyDatesData}
                secondaryText="Mode Of The Conference - Hybrid"
                className="py-16 bg-[var(--background)]"
            />
            <ImageContent
                title="Fee Payment"
                subtitle=""
                imageSrc="https://cdn.kalingauniversity.ac.in/imts-2025/ku-images.jpg"
                description={
                    <div className="space-y-4 text-left mt-2">
                        <p className="font-semibold text-[var(--foreground)] text-base">Step 1 : Participants have to make payment on the given bank details:</p>
                        <ul className="list-none space-y-2 text-sm bg-white p-5 rounded-xl shadow-[0_2px_15px_rgb(0,0,0,0.04)] border border-gray-100">
                            <li className="flex items-start"><strong className="w-24 shrink-0 text-gray-700">Merchant:</strong> <span>KALINGA UNIVERSITY</span></li>
                            <li className="flex items-start"><strong className="w-24 shrink-0 text-gray-700">A/c Name:</strong> <span>KALINGA UNIVERSITY FACULTY OF COMMERCE &amp; MANAGEMENT</span></li>
                            <li className="flex items-start"><strong className="w-24 shrink-0 text-gray-700">A/c No.:</strong> <span className="font-mono text-base font-medium">1744100100003494</span></li>
                            <li className="flex items-start"><strong className="w-24 shrink-0 text-gray-700">IFSC Code:</strong> <span className="font-mono text-base font-medium">PUNB0174410</span></li>
                            <li className="flex items-start"><strong className="w-24 shrink-0 text-gray-700">Branch:</strong> <span>RAKHI NAYA RAIPUR, RAIPUR, CHHATTISGARH, INDIA</span></li>
                        </ul>
                        <p className="font-semibold text-[var(--foreground)] text-base pt-2">Step 2 : Fill out the registration form with all the necessary information and add the screenshot of the payment details.</p>
                    </div>
                }
            />
            <ImageContent
                title="Submission Process"
                subtitle=""
                imageSrc="https://cdn.kalingauniversity.ac.in/imts-2025/image.png"
                description="The submission link for the full paper and payment will be shared through Email only to the participants whose abstract will be selected. Participants who want to attend the conference without a paper presentation will be sent a final registration link."
                buttonText="Register Now"
                buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSfDZN20-gqQIqqWIyuwCH3Ogvo46tVEMkN6fM0KVJZUgVmlQw/closedform"
                className="mt-20 mb-20"
            />

            <section id="registration-fees">
                <FAQ
                    title="Registration Fees"
                    subtitle=""
                    showHeading={true}
                    items={registrationFeesFAQItems}
                    variant="default"
                    backgroundColor="bg-white"
                    pyClassName="py-16"
                />
            </section>

            <MainIntro title={mainIntroContent2.title}
                description={mainIntroContent2.description}
                imageUrl={mainIntroContent2.imageUrl}
                imageAlt={mainIntroContent2.imageAlt}
                showKnowMore={true}
                initialVisibleParagraphs={5}
                descriptionClassName="text-[var(--light-text-gray)] font-plus-jakarta-sans"
                reverseLayout={true}
            />
            <MainIntro title={mainIntroContent3.title}
                description={mainIntroContent3.description}
                imageUrl={mainIntroContent3.imageUrl}
                imageAlt={mainIntroContent3.imageAlt}
                showKnowMore={true}
                initialVisibleParagraphs={7}
                descriptionClassName="text-[var(--light-text-gray)] font-plus-jakarta-sans"
                reverseLayout={false}
            />


            <FAQ
                title="Committees"
                subtitle=""
                variant="card-display"
                items={[]}
                tableSections={tableSections1}
                pyClassName="py-8 md:py-12"
            />
            <ContactSection
                title={
                    <div className="space-y-1">
                        <div className="text-white text-xl sm:text-2xl font-stix">Dr. Nishtha Sharma</div>
                        <div className="text-white/70 text-lg font-sans font-normal leading-tight">Assistant Professor</div>
                        <div className="text-white/60 text-xs sm:text-sm font-sans font-normal uppercase tracking-wider">Faculty of Commerce & Management</div>
                    </div>
                }
                mail="kucm@kalingauniversity.ac.in"
                phone="+91-7024116975"
                address=""
                className="!bg-[var(--background)]"
            />
            <FAQ
                title="Sponsorship Opportunities"
                subtitle="Partner with Us"
                showHeading={true}
                items={sponsorshipFAQItems}
                variant="default"
                backgroundColor="bg-white"
                pyClassName="py-16"
            />
            <p className="text-center text-gray-600 text-base mb-8">By becoming a sponsor, your organisation will benefit from prominent visibility and recognition among our attendees, speakers, and partners.</p>
        </>
    );
}