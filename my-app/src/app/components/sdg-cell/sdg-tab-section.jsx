"use client";

import { useState } from "react";
import FlipbookTrigger from "../general/FlipbookTrigger";
import Image from "next/image";

const SDG_TABS = [
    { id: "measures", label: "Our Initiatives" },
    { id: "waste", label: "Waste Management" },
    { id: "water", label: "Water Management" },
    { id: "environmental", label: "Environmental Sustainability" },
    { id: "initiatives", label: "Green Initiatives" },
    { id: "audits", label: "Quality Audits" },
    { id: "equity", label: "Gender Equity" },
    { id: "disabled", label: "Disabled-Friendly Environment" },
    { id: "obligations", label: "Constitutional Obligations" },
    { id: "celebrations", label: "Important Day Celebrations" },
    { id: "conduct", label: "Code Of Conduct" },
    { id: "promotion", label: "Environmental Promotion and Sustainability Activities" },
    { id: "social", label: "Institutional Social Responsibility (ISR) and Extension Activities" },
    { id: "csr", label: "CSR at Kalinga University" },
    { id: "bp1", label: "Best Practice - 1" },
    { id: "bp2", label: "Best Practice - 2" },
    // { id: "contributions", label: "Our Contributions in Sustainable and Social Development" },
];

const ENERGY_CONSERVATION_MEASURES = [
    "We have installed Rooftop Solar Power Panels that convert sunlight into electricity, which reduces the usage of traditional power sources.",
    "LED lights have been installed throughout the campus, which minimises energy consumption and enhances lighting quality.",
    "We conduct workshops and awareness programs throughout the year, educating students and staff members about sustainable solutions.",
];

const WASTE_MANAGEMENT_MEASURES = [
    "Our Waste Management System focuses on biodegradable and non-biodegradable waste materials, including the collection of waste paper, chemicals, and biomedical waste.",
    "An MoU has been signed with certified vendors, ensuring that waste materials are carefully disposed of and recycled.",
    "Our students practice waste classification outside the classroom, helping them develop sustainable habits.",
];

const WATER_MANAGEMENT_MEASURES = [
    "With our Water Management Policy, we continuously monitor and minimise the consumption of water and use alternative solutions like rainwater harvesting.",
    "Every building on our campus is equipped with a rainwater harvesting system that is linked to recharge wells.",
    "We have planted less water-consuming plants on our campus to minimise water usage and to improve biodiversity.",
];

const WATER_MANAGEMENT_PDF = {
    title: "Water Management Action Plan (PDF)",
    url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Water+Management/water-mgmt.pdf",
};

const ENVIRONMENTAL_SUSTAINABILITY_CONTENT = `
We’re committed to maximising positive environmental impact by incorporating sustainability lessons into our academic programs, encouraging research work related to eco-friendly solutions, promoting sustainable practices in day-to-day activities, and working towards our short-term and long-term environmental goals. 
`;

const ENVIRONMENTAL_SUSTAINABILITY_PDF = {
    title: "Policy Guidelines For Environmental Sustainability (PDF)",
    url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Environmental+Sustainability+/Environmental-Sustainability.pdf",
};

const GREEN_INITIATIVES_CONTENT = `
Kalinga’s green campus promotes sustainable practices and develops a sense of awareness and responsibility among young students. It uses sustainable practices like vermicomposting, apiculture, organic farming, nursery, greenhouse, and electric vehicles. 
`;

const QUALITY_AUDITS_CONTENT = `
We regularly conduct Green Audits and promote environmental ethics to ensure that our campus is using sustainable practices in the most efficient manner. We even encourage our students and staff members to adopt sustainable habits and become responsible citizens. 
`;

const AUDIT_REPORTS = [
    { title: "Audit Report 2022-23", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Audit+Reports/2022-23.pdf" },
    { title: "Audit Report 2021-22", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Audit+Reports/2021-22.pdf" },
    { title: "Audit Report 2020-21", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Audit+Reports/2020-21.pdf" },
    { title: "Audit Report 2019-20", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Audit+Reports/2019-20.pdf" },
    { title: "Audit Report 2018-19", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Audit+Reports/2018-19.pdf" },
];

const GENDER_EQUITY_CONTENT = `
Our education system includes the concept of gender sensitivity to eliminate gender discrimination and provide equal opportunities to our students. Our inclusive programs challenge stereotypes and create a supportive learning environment for both male and female candidates, where they learn and grow with a positive attitude and behaviour. We have designed a curriculum that recognises the needs of men and women and meets their rights and needs in terms of content, language, and teaching style. Female child are supported with additional funding and materials to ensure their full participation. 
`;

const GENDER_EQUITY_PROGRAMS = {
    "2024-25": [
        { sno: 1, event: "CATC-134 & TSC-I", category: "Camp", date: "16.06.2025 to 25.06.2025", department: "NCC" },
        { sno: 2, event: "CATC-02, Selection Shooting Training & Launch Camp", category: "Camp", date: "15.05.2025 to 24.05.2025", department: "NCC" },
        { sno: 3, event: "ANO Duty as Committee Member for the Selection of ANO", category: "Camp", date: "24.03.2025", department: "NCC" },
        { sno: 4, event: "International Women’s Day", category: "Guest Lecture", date: "08.03.2025", department: "IEEE & DSW" },
        { sno: 5, event: "NCC “B” Certificate Exam", category: "Other", date: "01.03.2025 to 02.03.2025", department: "NCC" },
        { sno: 6, event: "NCC “B” Certificate Exam Practice Session", category: "Other", date: "25.02.2025", department: "NCC" },
        { sno: 7, event: "NCC “C” Certificate Exam", category: "Other", date: "15.02.2025 to 16.02.2025", department: "NCC" },
        { sno: 8, event: "Asmita Khelo India Pencak Silat Women’s League (East Zone)", category: "Sports", date: "31.01.2025 to 02.02.2025", department: "Sports" },
        { sno: 9, event: "KAWACH - An Awareness Program on Self Defence", category: "Awareness", date: "24.01.2025", department: "DSW" },
        { sno: 10, event: "Trainers Training Certification Course on the Prevention of Sexual Harassment (POSH) Act, 2013", category: "Training", date: "11.01.2025 to 02.02.2025", department: "Law" },
        { sno: 11, event: "NCC Rank Ceremony 2024-25", category: "Other", date: "10.10.2024", department: "NCC" },
        { sno: 12, event: "Workshop on Self-Defence Techniques", category: "Workshop", date: "19.09.2024", department: "NCC" },
        { sno: 13, event: "NCC Selection Process Day", category: "Other", date: "17.09.2024", department: "NCC" },
        { sno: 14, event: "Awareness session on Fundamental Right", category: "Awareness", date: "14.09.2024", department: "Law" },
        { sno: 15, event: "IGC - Best Cadet Camp", category: "Other", date: "21.08.2024 to 30.08.2024", department: "NCC" },
        { sno: 16, event: "Working mechanism of Usha Sewing Machine", category: "Training", date: "28.08.2024", department: "FD" },
        { sno: 17, event: "CATC-XI CAMP", category: "Camp", date: "12.08.2024 to 21.08.2024", department: "8CG Girls Battalion, Kota" },
        { sno: 18, event: "ANOs & CTOs Conference (2024-25)", category: "Camp", date: "31.07.2025", department: "8CG Girls Battalion, Kota" },
        { sno: 19, event: "ANO Duty as Committee Member for the Selection of ANO", category: "Camp", date: "29.07.2025", department: "8CG Girls Battalion, Kota" },
        { sno: 20, event: "Redefining Menstrual Stigma as a Matter of Menstrual Health Hygiene: Behaviour Shift to Empower Skilful Youth", category: "Guest Lecture", date: "15.07.2024", department: "Arts & Humanities" },
        { sno: 21, event: "One Day State Level Women Program Officer Training Workshop", category: "Workshop", date: "10.07.2024", department: "NSS" },
        { sno: 22, event: "CATC-VIII (Group Level TSC Selection Camp)", category: "Camp", date: "02.07.2024 to 12.07.2024", department: "NCC" },
    ],

    "2023-24": [
        { sno: 1, event: "International Women's Day", category: "Cultural", date: "10.03.2024", department: "DSW" },
        { sno: 2, event: "A Talk on Cervical Cancer", category: "Guest Lecture", date: "01.07.2023", department: "DSW" },
        { sno: 3, event: "Cancer Awareness talk and screening Camp", category: "Guest Lecture", date: "18.11.2023", department: "DSW" },
        { sno: 4, event: "International Girls Child Day", category: "Guest Lecture", date: "11.10.2023", department: "NSS Unit of Kalinga" },
        { sno: 5, event: "Unrecognised Areas Relating to Same-Sex Couples: A Way Forward", category: "Guest Lecture", date: "09.08.2023", department: "Faculty of Law" },
        { sno: 6, event: "CATC-XII CAMP", category: "Camp", date: "18.08.2023 to 27.08.2023", department: "NCC Army Wing" },
        { sno: 7, event: "CATC-XI CAMP", category: "Camp", date: "21.07.2023 to 30.07.2023", department: "NCC Army Wing" },
        { sno: 8, event: "Attempt Guinness Book World Records", category: "Sports", date: "11.09.2023", department: "DSW" },
        { sno: 9, event: "Two Days Workshop on Mental Health aspects of Gender Based Violence", category: "Workshop", date: "14.07.2023 to 15.07.2023", department: "NIMHANS, Bangalore" },
    ],

    "2022-23": [
        { sno: 1, event: "Global Tribal Queen Contest 2022", category: "Cultural", date: "13.10.2022 to 15.10.2022", department: "DSW" },
        { sno: 2, event: "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013", category: "Other", date: "29.10.2022", department: "Law" },
        { sno: 3, event: "Cricket Knockout Matches Girls", category: "Sport", date: "13.02.2023", department: "Sport/DSW" },
        { sno: 4, event: "Cricket Knockout Matches Girls", category: "Sport", date: "14.02.2023", department: "Sport/DSW" },
        { sno: 5, event: "Cricket Knockout Matches Girls", category: "Sport", date: "15.02.2023", department: "Sport/DSW" },
        { sno: 6, event: "State Level Workshop on Creating Awareness about State Women Commission, Cyber Crime, Human Trafficking and Sexual Victimization of Women at Works Place", category: "Workshop", date: "12.03.2023", department: "Forensic Science" },
        { sno: 7, event: "Guest Lecture: From Tradition to Modernity: The Changing Role of Women in India", category: "Guest Lecture", date: "17.04.2023", department: "Arts & Humanities" },
    ],

    "2021-22": [
        { sno: 1, event: "Walk a Cause for Zero Tolerance towards Crime Against Women", category: "Walkathon", date: "13.03.2022", department: "DSW" },
        { sno: 2, event: "WINGS: Women Ideation Network for Growth & Support", category: "Startup Ideas", date: "01.04.2022, 15.04.2022, 22.04.2022", department: "Commerce & Management" },
        { sno: 3, event: "Professional Awards \"Naari Shakti Ko Salam\" on International Women's Day", category: "Cultural", date: "07.03.2022", department: "Anil Jotsinghani" },
    ],

    "2020-21": [
        { sno: 1, event: "Aarogyam - a way to a healthy life - Health Talk", category: "Other", date: "19.02.2021", department: "Women Cell" },
        { sno: 2, event: "Panel Discussion: Indian Women's Emergence to Uprising, Celebrating International Women's Day", category: "Important Day Celebration", date: "08.03.2021", department: "Women Cell" },
        { sno: 3, event: "National Webinar on Women Empowerment on When Dreams Come True", category: "Webinar", date: "03.04.2021", department: "Women Cell" },
        { sno: 4, event: "A Legal Session on The Shadow Pandemic: Exploring the Intersectional impact of Covid on Girls and Women", category: "Webinar", date: "24.04.2021", department: "Women Cell" },
        { sno: 5, event: "Webinar on Women Feed the World-Disseminating Women's Role in Agriculture", category: "Webinar", date: "15.05.2021", department: "Women Cell" },
    ],

    "2019-20": [
        { sno: 1, event: "Dazzling Divas - A Fashion Show, Ambuja Mall, City Centre Mall, Raipur", category: "Cultural", date: "18.08.2019", department: "DSW" },
        { sno: 2, event: "Fashion Workshop at SIDI Campus, VIP Estate, Raipur (Mr. Kanwaljeet Singh)", category: "Cultural", date: "15.10.2019", department: "DSW" },
        { sno: 3, event: "Participation in Design (Workshop for design aspirants), Hotel Maurya, Patna", category: "Cultural", date: "17.11.2019", department: "DSW" },
        { sno: 4, event: "Mr. & Miss Face of Central India 2019, Auditorium Kalinga University", category: "Cultural", date: "20.11.2019", department: "DSW" },
        { sno: 5, event: "Fashionista exhibition visit at Hotel Sayaji, Raipur", category: "Other", date: "17.01.2020 to 19.01.2020", department: "FD" },
        { sno: 6, event: "Health Awareness Programme \"Healthy Heart\" organised by NSS Unit of Kalinga University", category: "NSS", date: "14.02.2020", department: "NSS" },
        { sno: 7, event: "Nail Arts Session by Ms. Anubhooti Khanna at Seminar Hall", category: "Seminar/Workshop", date: "05.03.2020", department: "FD" },
        { sno: 8, event: "Celebration of International Women's Day, Auditorium, Kalinga University", category: "Celebration", date: "08.03.2020", department: "DSW" },
    ],

    "2018-19": [
        { sno: 1, event: "Dazzling Divas - A Fashion Show", category: "Cultural", date: "18.08.2019", department: "DSW" },
        { sno: 2, event: "Fashion Workshop at SIDI Campus (Mr. Kanwaljeet Singh)", category: "Cultural", date: "15.10.2019", department: "DSW" },
        { sno: 3, event: "Participation in Design (Workshop for design aspirants), Hotel Maurya, Patna", category: "Cultural", date: "17.11.2019", department: "DSW" },
        { sno: 4, event: "Mr. & Miss Face of Central India 2019, Auditorium Kalinga University", category: "Cultural", date: "20.11.2019", department: "DSW" },
        { sno: 5, event: "Fashionista exhibition visit at Hotel Sayaji, Raipur", category: "Other", date: "17.01.2020 to 19.01.2020", department: "FD" },
        { sno: 6, event: "Health Awareness Programme \"Healthy Heart\" organised by NSS Unit of Kalinga University", category: "NSS", date: "14.02.2020", department: "NSS" },
        { sno: 7, event: "Nail Arts Session by Ms. Anubhooti Khanna at Seminar Hall", category: "Seminar/Workshop", date: "05.03.2020", department: "FD" },
        { sno: 8, event: "Celebration of International Women's Day, Auditorium, Kalinga University", category: "Celebration", date: "08.03.2020", department: "DSW" },
    ],
};

const GENDER_SENSITISATION_PDF = {
    title: "Gender Sensitisation Action Plan (PDF)",
    url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Gender-Equity.pdf",
};


const getGenderYears = () =>
    Object.keys(GENDER_EQUITY_PROGRAMS).sort((a, b) => b.localeCompare(a));

const DISABLED_FRIENDLY_CONTENT =
    "Our inclusive learning environment ensures the well-being of every individual, including those with special needs and disabilities. We align our practices with the Rights of Persons with Disabilities Act, 2016, United Nations Convention on the Rights of Persons with Disabilities (UNCRPD), 2007, and the National Trust Act, 1999. From admissions to placements, these acts mandate facilities, concessions, exemptions, and reservations, and we strictly adhere to their guidelines. We recognise and certify a range of disabilities, including but not limited to blindness, low vision, hearing impairment, locomotor disability, intellectual disability, mental illness, autism spectrum disorder, and others.";

const DISABLED_FRIENDLY_POINTS = [
    "Our infrastructure facilities include lifts, ramps, and disabled-friendly washrooms.",
    "A flexible curriculum that supports all learners.",
    "Use of advanced technologies.",
    "Staff training and awareness programs to meet the needs of learners.",
    "Library facilities include reserved schemes for book lending, extra days for book lending, software for Braille output, and the signature of authorised classmates.",
];

const DISABILITY_GUIDELINES_PDF = {
    title: "Disability Guidelines",
    url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Disability+Guidelines.pdf",
};

const CONSTITUTIONAL_OBLIGATIONS_POINTS = [
    "Apart from building a strong academic foundation, we go one step beyond to make our students responsible citizens by organising various activities and programs.",
    "Students and faculty members actively participate in Blood Donation Camps, Free Health Check-Up Camps, Swachcha Bharat Abhiyan, Tree Plantation, and campaigns against tobacco and alcohol consumption.",
    "To develop patriotic values, we celebrate Independence Day, Republic Day, Sadbhawana Diwas, Ekta Diwas, and other important days with great pride.",
    "The Faculty of Law celebrates Constitution Day and conducts legal awareness camps every year in nearby villages on topics like Consumer Rights, Right to Information, FIR, Rights of a Person, Free Legal Aid, Dowry, Lok Adalat, Right to Education, and more.",
];

const IMPORTANT_DAY_CELEBRATIONS = {
    "2024-25": [
        { sno: 1, event: "हिन्दी दिवस समारोह 2024", date: "13.08.2024" },
        { sno: 2, event: "78th Independence Day Celebration 2024", date: "15.08.2024" },
        { sno: 3, event: "Raksha Bandhan Celebration 2024", date: "18.08.2024" },
        { sno: 4, event: "Teacher's Day Celebration", date: "05.09.2024" },
        { sno: 5, event: "International Day of Clean air for Blue Skies", date: "07.09.2024" },
        { sno: 6, event: "World Ozone Day, 2024", date: "13.09.2024" },
        { sno: 7, event: "Vishwakarma Day Puja", date: "17.09.2024" },
        { sno: 8, event: "World Tourism Day Festival 2024", date: "27.09.2024" },
        { sno: 9, event: "Diwali Exhibition Cum Sale", date: "21.10.2024 to 22.10.2024" },
        { sno: 10, event: "Diwali Milan Celebration", date: "25.10.2024" },
        { sno: 11, event: "Constitution Day Celebration", date: "26.11.2024" },
        { sno: 12, event: "Constitution Day Celebration", date: "26.11.2024" },
        { sno: 13, event: "Christmas and New Year Party Celebration 2024", date: "21.12.2024" },
        { sno: 14, event: "International Women's Day", date: "08.03.2025" },
    ],

    "2023-24": [
        { sno: 1, event: "Diwali Milan Ceremony", date: "07.11.2023" },
        { sno: 2, event: "Diwali Exhibition cum Sale", date: "08.11.2023" },
        { sno: 3, event: "Christmas Eve & New Year Celebration", date: "23.12.2023" },
        { sno: 4, event: "Constitution Day Celebration", date: "05.12.2023" },
        { sno: 5, event: "World Ozone Day", date: "15.09.2023" },
        { sno: 6, event: "Teachers' Day Celebration", date: "05.09.2023" },
        { sno: 7, event: "Independence Day Celebration", date: "15.08.2023" },
        { sno: 8, event: "Hindi Diwas Samaroh", date: "14.09.2023" },
        { sno: 9, event: "Vishwakarma Day Puja", date: "17.09.2023" },
        { sno: 10, event: "Doctor's Day Celebration", date: "01.07.2023" },
        { sno: 11, event: "International Women's Day", date: "10.03.2024" },
    ],

    "2022-23": [
        { sno: 1, event: "Doctors Honoured by Kalinga University on Doctors' Day", date: "01.07.2022" },
        { sno: 2, event: "World Population Day", date: "11.07.2022" },
        { sno: 3, event: "Webinar on the Occasion of “World Hepatitis Day”", date: "29.07.2022" },
        { sno: 4, event: "Independence Day Celebration", date: "15.08.2022" },
        { sno: 5, event: "Celebration Teacher's Day", date: "05.09.2022" },
        { sno: 6, event: "International Literacy Day (Kuhera Govt. School) - street play & gifts", date: "08.09.2022" },
        { sno: 7, event: "Hindi Diwas Celebrated", date: "14.09.2022" },
        { sno: 8, event: "Celebration of World Ozone Day", date: "16.09.2022" },
        { sno: 9, event: "World Ozone Day 2022 (Dept. of Zoology & Green Club)", date: "16.09.2022" },
        { sno: 10, event: "Vishwakarma Puja Celebration (Royal Mechanical Club)", date: "17.09.2022" },
        { sno: 11, event: "World Pharmacist Day Celebration 2022", date: "30.09.2022" },
        { sno: 12, event: "Run with Tiranga", date: "26.01.2023" },
        { sno: 13, event: "74th Republic Day Celebration", date: "26.01.2023" },
        { sno: 14, event: "Saraswati Puja, Basant Panchami", date: "26.01.2023" },
        { sno: 15, event: "World Haemophilia Day", date: "17.04.2023" },
        { sno: 16, event: "Webinar on Creativity and Innovation Driving Modern Business", date: "21.04.2023" },
        { sno: 17, event: "World Thalassaemia Day", date: "08.05.2023" },
        { sno: 18, event: "National Technology Day", date: "11.05.2023" },
        { sno: 19, event: "World Anti-Tobacco Day", date: "31.05.2023" },
        { sno: 20, event: "International Yoga Day Celebration", date: "21.06.2023" },
    ],

    "2021-22": [
        { sno: 1, event: "Felicitation of Doctors on Doctors' Day", date: "01.07.2021" },
        { sno: 2, event: "World Tribal Day Celebration", date: "09.08.2021" },
        { sno: 3, event: "Celebration of 75th Independence Day", date: "15.08.2021" },
        { sno: 4, event: "Webinar on Photography in Journalism (World Photography Day)", date: "18.08.2021" },
        { sno: 5, event: "Sadbhawna Diwas Celebration", date: "23.08.2021" },
        { sno: 6, event: "Engineer's Day Celebration", date: "15.09.2022" },
        { sno: 7, event: "60th National Pharmacy Week", date: "22.11.2021" },
        { sno: 8, event: "73rd Republic Day Celebration at University Campus", date: "26.01.2022" },
        { sno: 9, event: "Online Quiz (World Wetland Day)", date: "02.02.2022" },
        { sno: 10, event: "Maha Kavi Nirala Jayanti (Basant Panchami Festival)", date: "05.02.2022" },
        { sno: 11, event: "Singing competition (International Mother Language Day)", date: "21.02.2022" },
        { sno: 12, event: "Debate Competition (National Science Day)", date: "28.02.2022" },
        { sno: 13, event: "International Women's Day Celebration (Sanjeevani CBCC USA Cancer Hospital)", date: "08.03.2022" },
        { sno: 14, event: "Program under Shaheed Veernarayan Singh Shodhpeeth", date: "23.03.2022" },
        { sno: 15, event: "World Water Day", date: "31.03.2022" },
        { sno: 16, event: "Essay Writing Competition (World Health Day)", date: "07.04.2022" },
        { sno: 17, event: "Blood Donation Camp (World Haemophilia Day) with RIMS", date: "18.04.2022" },
        { sno: 18, event: "Awareness Program (World Hypertension Day)", date: "17.05.2022" },
        { sno: 19, event: "One-Day Workshop On Environment Day", date: "05.06.2022" },
        { sno: 20, event: "International Yoga Day 2022", date: "21.06.2022" },
    ],

    "2020-21": [
        { sno: 1, event: "Independence Day Celebration", date: "15.08.2020" },
        { sno: 2, event: "NCC Constitution Day", date: "22.11.2020 to 24.11.2020" },
        { sno: 3, event: "Republic Day Camp by 3 CG NCC Air Wing", date: "26.01.2021" },
        { sno: 4, event: "72nd Republic Day Celebration at our Campus", date: "26.01.2021" },
        { sno: 5, event: "Worlds Wetlands Day", date: "02.02.2021" },
        { sno: 6, event: "Celebration of International Women's Day", date: "08.03.2021" },
        { sno: 7, event: "NARI SHAKTI KO SALAAM' (Women's Day)", date: "07.03.2021" },
        { sno: 8, event: "International Women's Day - Choose to Challenge", date: "09.03.2021" },
        { sno: 9, event: "International Day of Yoga", date: "21.06.2021" },
    ],

    "2019-20": [
        { sno: 1, event: "Friendship Day Celebration \"Mujhse Dosti Karoge\" (Ambuja City Centre Mall)", date: "04.08.2019" },
        { sno: 2, event: "Independence Day Celebration - 2019 at Kalinga University Campus", date: "15.08.2019" },
        { sno: 3, event: "Jana Gana Mana Independence Day Celebration (Ambuja Mall)", date: "15.08.2019" },
        { sno: 4, event: "Teacher's Day Celebration, Civil Dept.", date: "04.09.2019" },
        { sno: 5, event: "Teacher's Day Celebration, Biotechnology Dept.", date: "04.09.2019" },
        { sno: 6, event: "Teacher's Day Celebration, Law Dept.", date: "04.09.2019" },
        { sno: 7, event: "Teacher's Day Celebration, Applied Science Dept.", date: "04.09.2019" },
        { sno: 8, event: "BA LLB 3rd Sem Fresher's Party (Dept. Law)", date: "08.09.2019" },
    ],

    "2018-19": [
        { sno: 1, event: "Independence Day Celebration", date: "15.08.2018" },
        { sno: 2, event: "Teacher Day Celebration - 2018", date: "05.09.2018" },
        { sno: 3, event: "Hindi Diwas celebration by the Arts and Humanities Department", date: "14.09.2018" },
        { sno: 4, event: "NSS Day Celebration at Pt. R.S.S.U. Raipur (C.G.)", date: "23.09.2018 to 24.09.2018" },
        { sno: 5, event: "Formation of Kalinga-Bhumi Club & Celebration of Deen Utsav-2018", date: "24.10.2018" },
        { sno: 6, event: "World Children's Day Celebrations, UNICEF & NSS, Pt. Ravishankar Shukla University", date: "20.12.2018" },
        { sno: 7, event: "Celebration of World Tobacco Day (Kalinga University, Naya Raipur)", date: "31.05.2019" },
        { sno: 8, event: "Celebration of International Yoga Day (KU Campus, Naya Raipur)", date: "21.06.2019" },
        { sno: 9, event: "Celebration of International Yoga Day (Govt. Nagarjuna PG College of Science, Raipur)", date: "21.06.2019" },
    ],
};

const getCelebrationYears = () =>
    Object.keys(IMPORTANT_DAY_CELEBRATIONS).sort((a, b) => b.localeCompare(a));

const CODE_OF_CONDUCT_CONTENT =
    "The university is building a community that develops the values of integrity, diversity, respect, and responsibility.";

const CODE_OF_CONDUCT_POINTS = [
    "The code of conduct defines our principles, mission, values, principles, and expectations that contribute to a positive and inclusive learning environment.",
    "It encourages students to actively participate in engaging discussions regarding ethical principles, preparing them to face real-world challenges.",
    "Our Code of Conduct serves as a benchmark for individual and organisational performance.",
    "It acts as a comprehensive guide that helps students find documents, resources, and services, ensuring they have access to all the important information they need.",
];

const CODE_OF_CONDUCT_PDFS = [
    {
        title: "Code Of Conduct Handbook",
        url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Code+of+Conduct.pdf",
    },
    {
        title: "Student Attributes",
        url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Code+of+Conduct1.pdf",
    },
];

const ENVIRONMENT_PROMOTION_ACTIVITIES = {
    "2024-25": [
        { sno: 1, event: "Report on Live Model Exhibition on “Rainwater Harvesting”", date: "10.04.2025" },
        { sno: 2, event: "Public Awareness on Water Conservation", date: "26.03.2025" },
        { sno: 3, event: "International Conference on “Innovations in Clean & Sustainable Energy Technologies for Tribal & Rural Regions”", date: "27.02.2025 to 28.02.2025" },
        { sno: 4, event: "Science Carnival", date: "27.02.2025" },
        { sno: 5, event: "Community Engagement Program – Clean & Green Society Drive", date: "30.01.2025" },
        { sno: 6, event: "Excursion cum industrial visit to Shree Dhanwantari Herbals, Amritsar", date: "08.01.2025" },
        { sno: 7, event: "Street Play on Clean Chhattisgarh – Good Governance", date: "16.12.2024" },
        { sno: 8, event: "Industrial Visit to Wildlife Health & Forensic Centre, Durg", date: "21.11.2024" },
        { sno: 9, event: "Discovery of new therapeutics via computational biology", date: "21.11.2024" },
        { sno: 10, event: "Waste Optimization", date: "18.11.2024" },
        { sno: 11, event: "Poster Making Competition – World Science Day for Peace & Development", date: "11.11.2024" },
        { sno: 12, event: "Tree Plantation Drive", date: "12.10.2024 to 13.10.2024" },
        { sno: 13, event: "2 Days Nature Camp at Keshkal – Wildlife Week 2024", date: "05.10.2024" },
        { sno: 14, event: "Industrial Visit – Fisheries College, Kawardha", date: "05.10.2024" },
        { sno: 15, event: "World Wildlife Week – Rangoli Making Competition", date: "02.10.2024" },
        { sno: 16, event: "Industrial Visit – Fisheries College, Kawardha", date: "30.09.2024" },
        { sno: 17, event: "One Day Seminar on Exploration of Science in New Era", date: "30.09.2024" },
        { sno: 18, event: "World Tourism Day Festival 2024", date: "27.09.2024" },
        { sno: 19, event: "Guest Lecture on Crafting Effective Lesson Plans", date: "26.09.2024" },
        { sno: 20, event: "World Ozone Day 2024 Celebration", date: "13.09.2024" },
        { sno: 21, event: "International Day of Clean Air for Blue Skies", date: "07.09.2024" },
        { sno: 22, event: "Tree Plantation Drive by Green Army, Lions Club & Unnat Bharat Abhiyan", date: "20.07.2024" },
    ],

    "2023-24": [
        { sno: 1, event: "Walkathon – Go Green with Olive Green", date: "02.06.2024" },
        { sno: 2, event: "Emerging Trends & Scope on Start-up and Entrepreneurship in Biotechnology", date: "14.03.2024 to 15.03.2024" },
        { sno: 3, event: "World Wetlands Day", date: "02.02.2024" },
        { sno: 4, event: "Harmony with Nature: Cultivating a Greener Tomorrow", date: "21.11.2023" },
        { sno: 5, event: "International Day for Disaster Risk Reduction", date: "13.10.2023" },
        { sno: 6, event: "Animal Experimentation & Experimental Animal Research", date: "12.10.2023 to 13.10.2023" },
        { sno: 7, event: "Preparation of Household Sanitizers and Disinfectants", date: "04.10.2023 to 05.10.2023" },
        { sno: 8, event: "Bharat: A Treasure Trove of Biodiversity", date: "03.10.2023" },
        { sno: 9, event: "Termites and Birds Identification", date: "02.10.2023 to 03.10.2023" },
        { sno: 10, event: "World Ozone Day", date: "15.09.2023" },
        { sno: 11, event: "Application & Analysis of Geographic Information Systems (GIS)", date: "28.08.2023" },
        { sno: 12, event: "Tree Plantation Drive", date: "04.08.2023" },
    ],

    "2022-23": [
        { sno: 1, event: "Tree Plantation – NSS Unit at Anganwadi School, Kotni", date: "06.08.2022" },
        { sno: 2, event: "Slide Power – Green Technologies in Construction", date: "12.09.2022" },
        { sno: 3, event: "Tree Plantation with a Slogan", date: "24.09.2022" },
        { sno: 4, event: "Visit to Gangrel Dam – Green Energy", date: "16.11.2022" },
        { sno: 5, event: "Visit to STP, Water Purification & Solid Waste Management Plant", date: "09.02.2023" },
        { sno: 6, event: "Pollution Awareness Program", date: "13.02.2023" },
        { sno: 7, event: "Visit to Barnawapara Wildlife Sanctuary", date: "16.03.2023" },
        { sno: 8, event: "World Environment Day 2023 – Eco Cartoon Contest", date: "18.05.2023" },
        { sno: 9, event: "Workshop on Leadership of Youth in Climate & Energy", date: "27.05.2023" },
    ],

    "2021-22": [
        { sno: 1, event: "Science & Green Club Orientation", date: "13.08.2021" },
        { sno: 2, event: "NSS Tree Plantation at KU Campus", date: "15.08.2021" },
        { sno: 3, event: "Polythene Awareness Programme – Paloud Village", date: "13.09.2021" },
        { sno: 4, event: "National Webinar on Ozone for Life", date: "16.09.2021" },
        { sno: 5, event: "Guest Lecture on Transgenic Plants", date: "09.10.2021" },
        { sno: 6, event: "National Webinar on Wildlife Conservation", date: "09.10.2021" },
        { sno: 7, event: "Poster Presentation – Green & Clean Environment", date: "08.01.2022" },
        { sno: 8, event: "Talk on Plant Transformation Technology", date: "26.03.2022" },
        { sno: 9, event: "World Water Day Celebration", date: "31.03.2022" },
        { sno: 10, event: "Industrial Visit – Sewage Water Treatment Plant", date: "18.04.2022" },
        { sno: 11, event: "Webinar on Genetic Engineering in Crop Improvement", date: "07.05.2022" },
        { sno: 12, event: "One-Day Workshop on Environment Day", date: "05.06.2022" },
    ],

    "2020-21": [
        { sno: 1, event: "National Webinar on Genetic Engineering & Transgenic Plants", date: "27.11.2020" },
        { sno: 2, event: "International Webinar on Microbes & Global Agriculture", date: "30.11.2020" },
        { sno: 3, event: "National Virtual Workshop on Biofertiliser Formulation", date: "02.12.2020" },
        { sno: 4, event: "National Webinar on Commercial Plants of Central India", date: "05.12.2020" },
        { sno: 5, event: "Online PPT on Environmental Issues in Chhattisgarh", date: "12.12.2020" },
        { sno: 6, event: "International Webinar on Wetlands & Water Conservation", date: "02.02.2021" },
        { sno: 7, event: "Online Exhibition Competition – Wealth from Waste", date: "19.02.2021" },
        { sno: 8, event: "Expert Lecture Series – World Wildlife Conservation", date: "08.03.2021" },
        { sno: 9, event: "National Webinar on Hydroponics & Greenhouse Technology", date: "27.03.2021" },
        { sno: 10, event: "Virtual Training on Mushroom Production", date: "28.04.2021 to 30.04.2021" },
        { sno: 11, event: "World Environment Day – Join Hands to Save Environment", date: "05.06.2021" },
        { sno: 12, event: "Selfie Competition – World Environment Day", date: "06.06.2021" },
    ],

    "2019-20": [
        { sno: 1, event: "Jal Shakti Abhiyaan – NSS at Village Kotni", date: "22.07.2019 to 28.07.2019" },
        { sno: 2, event: "Tree Plantation Programme at KU Campus", date: "23.08.2019" },
        { sno: 3, event: "Educational Tour to Nandanvan Jungle Safari", date: "29.09.2019" },
        { sno: 4, event: "Wildlife Week Celebration – Dept. of Zoology", date: "05.10.2019" },
        { sno: 5, event: "Visit to Gangrel Dam – Green Energy", date: "15.11.2019" },
        { sno: 6, event: "Educational Tour to Dehradun, Mussoorie, Rishikesh & Haridwar", date: "01.01.2020 to 08.01.2020" },
        { sno: 7, event: "2nd International Conference on Renewable Energy & Sustainable Development", date: "30.01.2020 to 31.01.2020" },
    ],

    "2018-19": [
        { sno: 1, event: "Tree Plantation at KU Campus", date: "09.08.2018" },
        { sno: 2, event: "Eco-friendly Car: Folcon Car", date: "18.08.2018" },
        { sno: 3, event: "Visit to Jungle Safari", date: "14.11.2018" },
        { sno: 4, event: "One-week Educational Trip to Shimla, Chandigarh & Manali", date: "06.12.2018" },
        { sno: 5, event: "Visit to Gangrel Dam – Green Energy", date: "27.02.2019" },
    ],
};

const ENVIRONMENT_PROMOTION_IMAGES = [
    { src: "", alt: "Environmental promotion activity 1" },
    { src: "", alt: "Environmental promotion activity 2" },
    { src: "", alt: "Environmental promotion activity 3" },
    { src: "", alt: "Environmental promotion activity 4" },
];

const getPromotionYears = () =>
    Object.keys(ENVIRONMENT_PROMOTION_ACTIVITIES).sort((a, b) => b.localeCompare(a));

const ISR_INTRO =
    "KU promotes holistic development and sustained community development by organising community outreach programs. Our students and faculty members actively participate in various awareness programs like tree plantation, cleanliness, hygiene, women's empowerment, road safety, gender equality, and more. Our NSS, NCC, YI wing of CII, and other academic departments organise all these programs to develop a sense of social and community responsibility among our students.";

const ISR_READ_MORE =
    "We also provide extended support in five nearby villages, i.e., Kotni, Palaud, Kuhera, Parsada, and Kotrabhata, and provide them with employment opportunities, and also guide them on how they can choose various self-employment activities. We also teach them the benefits of maintaining personal hygiene and drinking clean water. Apart from this, we have also conducted various educational programs, provided them with a library, and broadband facility.";

const ISR_ACTIVITIES = [
    { title: "Tobacco Awareness", imageNo: 2, src: "" },
    { title: "Paryavaran Diwas", imageNo: 3, src: "" },
    { title: "Traffic Awareness", imageNo: 4, src: "" },
    { title: "Safai Abhiyan", imageNo: 5, src: "" },
    { title: "Shram Daan", imageNo: 6, src: "" },
    { title: "Legal Aid Camp", imageNo: 7, src: "" },
    { title: "Swachchha Bharat Abhiyan", imageNo: 8, src: "" },
    { title: "Health & Hygiene Camp", imageNo: 9, src: "" },
    { title: "Beti Bachao – Beti Padhao", imageNo: 10, src: "" },
    { title: "Digital Literacy Campaign", imageNo: 11, src: "" },
    { title: "Nadi Bachao Abhiyan", imageNo: 12, src: "" },
    { title: "Jal Sanrakshan Abhiyan", imageNo: 13, src: "" },
    { title: "Blood Donation", imageNo: 14, src: "" },
];

// helper to generate blank image slots
const generateImages = (count, label) =>
    Array.from({ length: count }, (_, i) => ({
        src: "",
        alt: `${label} image ${i + 1}`,
    }));

const CSR_INTRO =
    "Corporate Social Responsibility (CSR) at Kalinga University aims to make a positive social and environmental impact beyond academics. Over the years, our students and faculty members have actively participated in various programs that contribute to the welfare of society. These initiatives ensure that our students and staff become responsible citizens and inspire positive change.";

const CSR_INITIATIVES = [
    "Transport fees for students availing university transport are provided at subsidised rates, covering routes up to 70 KM (one way) to support students living far from campus.",
    "The university provides scholarships under different categories to support meritorious and deserving students.",
    "Absorption of fees or sponsorship support is provided on a case-by-case basis for students discontinuing education due to financial difficulties.",
    "Environmental initiatives such as planting 1000+ plants and trees on and around the campus.",
    "Installation of Rooftop Solar Power Panels and LED lighting systems to reduce energy consumption.",
    "MoUs with certified vendors for proper disposal and recycling of waste materials.",
    "Rainwater harvesting systems linked to recharge wells across all buildings and plantation of low water-consumption plants.",
    "Promotion of sustainable practices through vermicomposting, apiculture, organic farming, nursery, greenhouse facilities, and electric vehicles.",
    "Life Science and Pharmacy departments conduct regular blood donation camps and free medical consultations in nearby villages.",
    "The Law Department’s Legal Aid Cell provides free legal consultancy to those in need.",
    "Fashion Design and Interior Design departments actively promote Khadi within Chhattisgarh.",
    "Various departments conduct free FDPs, MDPs, and knowledge dissemination programs for schools, colleges, government bodies, corporate, and defence institutions.",
];

const BP1_TITLE =
    "Harmony in Action: Implementing Sustainable Development Goals for a Better World";

const BP1_INTRO = (
    <div className="space-y-4">
        <p>The SDG Cell at Kalinga University was established on 12.04.2022 to promote, implement, and monitor initiatives related to the SDGs. The cell serves as a dynamic hub dedicated to advancing the principles and objectives outlined in the United Nations 2030 Agenda for Sustainable Development. This specialised unit operates at the intersection of education, research, and community engagement, embodying the University’s commitment to providing a more sustainable and equitable world.</p>
        <p>One of the primary functions of this cell is to cultivate awareness and advocacy for the SDGs within the university community. Through targeted campaigns, educational programs, and outreach initiatives, the cell endeavours to instil a deep understanding of the global challenges addressed by the SDGs and the imperative for collective action.</p>
        <p>Integral to its mission is the integration of sustainable development principles into the university’s academic landscape. The SDGs cell collaborates with faculty to infuse relevant content into diverse courses, ensuring that students from various disciplines are equipped with the knowledge and skills needed to contribute meaningfully to sustainable development.</p>
    </div>
);

const BP1_SDG_GOALS = [
    { title: "No Poverty", icon: "Community+Services.svg" },
    { title: "Zero Hunger", icon: "Holistic+Development.svg" },
    { title: "Good Health and Well-being", icon: "Emotional+Well-Being.svg" },
    { title: "Quality Education", icon: "Career+Counseling.svg" },
    { title: "Gender Equality", icon: "Mental+Health+Support.svg" },
    { title: "Clean Water and Sanitation", icon: "facility-management.svg" },
    { title: "Affordable and Clean Energy", icon: "Extensive+Research+Facilities.svg" },
    { title: "Decent Work and Economic Growth", icon: "Networking+Opportunities.svg" },
    { title: "Industry, Innovation and Infrastructure", icon: "Industrial+Visits.svg" },
    { title: "Reduced Inequality", icon: "Global.svg" },
    { title: "Sustainable Cities and Communities", icon: "campus+life.svg" },
    { title: "Responsible Consumption and Production", icon: "Educational+Tours.svg" },
    { title: "Climate Action", icon: "Flagship+Events.svg" },
    { title: "Life Below Water", icon: "international.svg" },
    { title: "Life on Land", icon: "Cultural+Celebrations.svg" },
    { title: "Peace, Justice and Strong Institutions", icon: "Mentor-Mentee+System.svg" },
    { title: "Partnership for the Goals", icon: "Wide+Range+of+Programs.svg" },
];

const BP1_OBJECTIVES = [
    "To provide a Holistic Sustainability Strategy",
    "To introduce programs to promote good health and well-being",
    "To provide quality education among students and also spread education to society",
    "To offer courses to educate on gender equity",
    "To generate and utilise green energy",
    "To incorporate a culture of innovation",
    "To spread awareness on climate change and sustainability",
    "To promote peace, justice, and educate people about various laws",
    "To establish collaborations with industries and academia in meeting the SDGs",
];

const BP1_PRACTICE = [
    "The university adopts a comprehensive sustainability strategy that aligns with and contributes to various SDGs, including those related to environmental protection, social equity, and economic development.",
    "The University has implemented energy-efficient buildings, green roofs, and sustainable landscaping practices. It has also integrated renewable energy sources, such as solar panels, to reduce the carbon footprint of campus operations. Besides, the biogas plant on the campus helps the effective utilisation of food waste. The green and clean campus provides fresh air to the staff and students.",
    "Kalinga University promotes sustainable transportation options, including cycling infrastructure, electric vehicles, etc. Such initiatives are taken to reduce the carbon emissions associated with commuting and campus-related travel.",
    "Integrated sustainability principles into the curriculum across various academic disciplines. Introduced courses focused on sustainability studies, environmental science, and social responsibility.",
    "The University has taken initiatives to address SDGs through various projects in line with at least one of the 17 SDGs. Faculty members are encouraged to prepare research projects which will find solutions to any of the SDGs. Collaboration with industry and government agencies is involved in preparing some of the research projects.",
    "Implemented various community-based projects that directly contribute to SDGs, addressing local challenges. IEEE Kalinga University Student Branch, Unnat Bharat Abhiyan, etc., are some of the bodies that are working towards this. Kalinga University regularly hosts awareness campaigns, workshops, and events to involve the broader community in sustainability initiatives.",
    "The University has adopted an ethical and sustainable procurement system for campus supplies and services. The University gives priority to environmentally friendly and fair trade products when purchasing any products.",
    "The University has a provision of mental health resources and counselling services for students and staff. Programs related to stress management, healthy heart, etc., are regularly conducted for the well-being of staff and students.",
    "The University is organising various conferences, symposiums, and summits to address global needs, especially in climate change and sustainability, peace, justice and strong institutions, etc."
];

const BP1_ECONOMIC_EMPOWERMENT = [
    "The University received funding from various agencies, like IEEE, for addressing global needs in the form of Smart Dustbins. Intervention of technology was a part of the project where students and faculty members extended their efforts. These were distributed to schools in nearby villages to maintain a green campus.",
    "The University provided seed funding to work on a pond cleaning robot. The robot is used for preventing the accumulation of organic matter, which could otherwise lead to water quality issues.",
    "Faculty members and students developed a model of e-loader from waste materials in and around the campus. The rickshaw is used for the transportation of lightweight materials inside the university campus. For executing this project, the University has provided seed funding.",
    "Various government bodies, like NABARD, extended their support with funds in organising a conference to address climate change and sustainability issues. Participants published papers with solutions to various challenges related to climate change nowadays.",
    "IEEE Kalinga University Student Branch organised an International Leadership Summit where leaders like Innovators, Scientists, and Entrepreneurs working towards sustainable development presented their thoughts to bring a better future.",
];

const BP1_IMAGES = [
    { title: "Sustainability Infrastructure", src: "" },
    { title: "Community Skill Development", src: "" },
    { title: "Green Energy & Innovation", src: "" },
    { title: "SDGs Awareness & Outreach", src: "" },
];

const BP2_TITLE =
    "Women’s Empowerment and Skill Mastery in Rural Landscapes in Raipur, Chhattisgarh";

const BP2_INTRO =
    "Kalinga University, Naya Raipur, is committed to community development by introducing a skill development centre for rural women. The University has adopted five nearby villages and continuously works towards their development through skill development and capacity building initiatives.";

const BP2_OBJECTIVES = [
    "To provide economic empowerment",
    "To improve the quality of life of rural people through poverty alleviation",
    "To enhance education and knowledge among village women",
    "To support community development",
    "To develop entrepreneurial skills",
];

const BP2_PRACTICE =
    "The Rural Women’s Empowerment and Skill Development Initiative envisions empowered, self-reliant rural women who actively participate in their communities. By investing in skills, education, and capacity building, Kalinga University contributes to sustainable rural development and resilience among women.";

const BP2_ECONOMIC_EMPOWERMENT = [
    "Generate livelihood opportunities through agriculture, handicrafts, tailoring, garment industries, and small-scale entrepreneurship.",
    "Enhance employability by imparting vocational skills aligned with local economic needs.",
];

const BP2_POVERTY_ALLEVIATION = [
    "Encourage income diversification through multiple skill-based economic activities.",
    "Provide financial literacy training to promote economic independence.",
];

const BP2_EDUCATION = [
    "Basic literacy and numeracy programs to bridge educational gaps.",
    "Digital literacy training to improve access to information and technology.",
];

const BP2_COMMUNITY_DEVELOPMENT = [
    "Leadership skill development for participation in governance and decision-making.",
    "Active engagement in community programs and sustainability initiatives.",
];

const BP2_ENTREPRENEURSHIP = [
    "Training in business planning, marketing, and financial management.",
    "Facilitating market linkages for rural women’s products and services.",
];

const BP2_INITIATIVES = [
    "Preparation of Hand Sanitisers",
    "Tailoring",
    "Mushroom Cultivation",
    "Lotus Fibre Production for Fabrics",
    "Traditional Hand Embroidery",
    "General Housekeeping Training",
    "Electrical Technician Training",
];

const BP2_EVIDENCE = [
    "Hand sanitiser and mask production during COVID-19 created income opportunities.",
    "Fashion Design department trained women in cloth mask making.",
    "Faculty acted as trainers under Jan Shikshan Sansthan for multiple skill programs.",
    "Lotus fibre innovation training empowered women through Train-the-Trainer models.",
    "Strong market demand for handloom and embroidery products in Raipur.",
    "Electrical and electronic repair skills enabled sustainable income sources.",
    "Tailoring and embroidery programs provided dignified livelihoods.",
    "Gas safety and energy-saving training in collaboration with Oil India Ltd.",
    "Domestic care skill training enhanced employability with practical exposure.",
];

const BP2_IMAGES = [
    { src: "" },
    { src: "" },
    { src: "" },
    { src: "" },
];

const CONTRIBUTIONS_INTRO =
    "Kalinga University actively contributes to sustainable and social development through a wide range of social works, campaigns, and awareness programs. These initiatives aim to create social awareness, promote responsible citizenship, and address key societal challenges. Students and faculty members participate in various outreach activities such as cleanliness drives, health camps, environmental campaigns, and social awareness programs, fostering a strong sense of community engagement and social responsibility.";

const CONTRIBUTIONS_AREAS = [
    "Social welfare campaigns and community outreach programs",
    "Health awareness camps and blood donation drives",
    "Environmental awareness initiatives and cleanliness drives",
    "Awareness programs on social issues, sustainability, and public health",
];

const CONTRIBUTIONS_IMAGES = [
    { src: "" },
    { src: "" },
    { src: "" },
    { src: "" },
];


/** ✅ IMAGE PROVISIONS (leave src blank, you will fill) */
const ENERGY_IMAGES = [
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/sgd-ecm-solar.webp", alt: "Energy measure image 1" },
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/sgd-ecm-bulb.webp", alt: "Energy measure image 2" },
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/sdg-ecm-workshop.webp", alt: "Energy measure image 3" },
];

const WASTE_IMAGES = [
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Waste+Management/sdg-wsmgmt-1.webp", alt: "Waste management image 1" },
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Waste+Management/sdg-wsmgmt-2.webp", alt: "Waste management image 2" },
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Waste+Management/sdg-wsmgmt-3.webp", alt: "Waste management image 3" },
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Waste+Management/sdg-wsmgmt-4.webp", alt: "Waste management image 4" },
];

const WATER_IMAGES = [
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Water+Management/sdg-wa-mgmt-1.webp", alt: "Water management image 1" },
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Water+Management/sdg-wtmgmt-2.webp", alt: "Water management image 2" },
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Water+Management/sdg-wtmgmt-3.webp", alt: "Water management image 3" },
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Water+Management/sdg-wtmgmt-4.webp", alt: "Water management image 4" },
];

const ENVIRONMENT_IMAGES = [
    { src: "", alt: "ES image 1" },
    { src: "", alt: "ES image 2" },
    { src: "", alt: "ES image 3" },
    { src: "", alt: "ES image 4" },
    { src: "", alt: "ES image 5" },
    { src: "", alt: "ES image 6" },
];

const GREEN_INITIATIVES_IMAGES = [
    { src: "", alt: "GI image 1" },
    { src: "", alt: "GI image 2" },
    { src: "", alt: "GI image 3" },
    { src: "", alt: "GI image 4" },
    { src: "", alt: "GI image 5" },
    { src: "", alt: "GI image 6" },
    { src: "", alt: "GI image 7" },
];

const GENDER_EQUITY_IMAGES = [
    { src: "", alt: "GE image 1" },
];

const DISABLED_IMAGES = [
    { src: "", alt: "Disabled-friendly facility image 1" },
];

const CONSTITUTIONAL_OBLIGATIONS_IMAGES = [
    { src: "", alt: "Constitutional obligations image 1" },
    { src: "", alt: "Constitutional obligations image 2" },
    { src: "", alt: "Constitutional obligations image 3" },
];

const IMPORTANT_DAY_IMAGES = [
    { src: "", alt: "Important day celebration image 1" },
    { src: "", alt: "Important day celebration image 2" },
    { src: "", alt: "Important day celebration image 3" },
    { src: "", alt: "Important day celebration image 4" },
];

const CSR_IMAGES = [
    { title: "Community Welfare Programs", src: "" },
    { title: "Environmental Initiatives", src: "" },
    { title: "Healthcare & Blood Donation Camps", src: "" },
    { title: "Sustainable Campus Practices", src: "" },
];

/** Reusable Image Grid */
function ImageGrid({ images = [] }) {
    const visibleImages = images.filter((img) => img?.src?.trim()); // only show if you filled URL

    // If you haven't filled any URLs yet, show placeholders (optional)
    if (visibleImages.length === 0) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className="w-full h-[180px] md:h-[200px] rounded-xl bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm"
                    >
                        Image {idx + 1}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, idx) => {
                const hasSrc = img?.src?.trim();
                return hasSrc ? (
                    <div key={idx} className="w-full overflow-hidden rounded-xl border border-gray-200">
                        <img
                            src={img.src}
                            alt={img.alt || `Image ${idx + 1}`}
                            className="w-full h-[180px] md:h-[200px] object-cover"
                            loading="lazy"
                        />
                    </div>
                ) : (
                    <div
                        key={idx}
                        className="w-full h-[180px] md:h-[200px] rounded-xl bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm"
                    >
                        Image {idx + 1}
                    </div>
                );
            })}
        </div>
    );
}

export default function SdgTabSection() {
    const [activeTab, setActiveTab] = useState("measures");

    const [expandedYears, setExpandedYears] = useState({});

    const toggleYear = (year) => {
        setExpandedYears((prev) => {
            const isOpen = !!prev[year];
            const next = {};
            Object.keys(prev).forEach((k) => (next[k] = false));
            if (!isOpen) next[year] = true;
            return next;
        });
    };

    return (
        <section className="w-full py-4 px-2">
            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--button-red);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a31d1d;
        }
      `}</style>

            <div className="flex flex-col lg:flex-row gap-4 bg-[var(--dark-blue)] py-16 md:px-10 px-4 rounded-xl lg:h-[900px]">
                {/* Left Tabs */}
                <div className="w-full lg:w-80 flex-shrink-0 lg:h-full lg:overflow-y-auto scrollbar-hide">
                    <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
                        {SDG_TABS.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                    flex-shrink-0 lg:w-full text-left px-4 py-5 rounded-[8px]
                    font-plus-jakarta-sans text-sm md:text-base font-semibold
                    transition-all duration-200
                    ${isActive
                                            ? "bg-[var(--button-red)] text-white"
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

                {/* Right Content */}
                <div className="flex-1 w-full lg:h-full flex flex-col">
                    <div className="rounded-[16px] bg-white p-4 md:p-6 shadow-sm flex-1 overflow-y-auto custom-scrollbar">
                        <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-6 text-center">
                            {SDG_TABS.find((t) => t.id === activeTab)?.label}
                        </h2>

                        {/* Energy Conservation */}
                        {activeTab === "measures" && (
                            <div className="space-y-6">
                                <ul className="list-disc pl-6 space-y-3 text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {ENERGY_CONSERVATION_MEASURES.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>

                                {/* ✅ 3 Images */}
                                <ImageGrid images={ENERGY_IMAGES} />
                            </div>
                        )}

                        {/* Waste Management */}
                        {activeTab === "waste" && (
                            <div className="space-y-6">
                                <ul className="list-disc pl-6 space-y-3 text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {WASTE_MANAGEMENT_MEASURES.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>

                                {/* ✅ 4 Images */}
                                <ImageGrid images={WASTE_IMAGES} />
                            </div>
                        )}

                        {/* Water Management */}
                        {activeTab === "water" && (
                            <div className="space-y-6">
                                <ul className="list-disc pl-6 space-y-3 text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {WATER_MANAGEMENT_MEASURES.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>

                                {/* ✅ PDF Link */}
                                <div className="pt-2">
                                    <FlipbookTrigger pdfUrl={WATER_MANAGEMENT_PDF.url} title={WATER_MANAGEMENT_PDF.title}>
                                        <a
                                            href={WATER_MANAGEMENT_PDF.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--button-red)] text-white font-plus-jakarta-sans text-sm md:text-base font-semibold hover:opacity-90 transition"
                                        >
                                            View Water Management Action Plan
                                            <span aria-hidden="true">↗</span>
                                        </a>
                                    </FlipbookTrigger>
                                </div>

                                {/* ✅ 5 Images */}
                                <ImageGrid images={WATER_IMAGES} />
                            </div>
                        )}

                        {/* Environmental Sustainability */}
                        {activeTab === "environmental" && (
                            <div className="space-y-6">
                                <p className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {ENVIRONMENTAL_SUSTAINABILITY_CONTENT}
                                </p>

                                {/* ✅ PDF Link */}
                                <div className="pt-2">
                                    <FlipbookTrigger pdfUrl={ENVIRONMENTAL_SUSTAINABILITY_PDF.url} title={ENVIRONMENTAL_SUSTAINABILITY_PDF.title}>
                                        <a
                                            href={ENVIRONMENTAL_SUSTAINABILITY_PDF.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--button-red)] text-white font-plus-jakarta-sans text-sm md:text-base font-semibold hover:opacity-90 transition"
                                        >
                                            Policy Guidelines For Environmental Sustainability
                                            <span aria-hidden="true">↗</span>
                                        </a>
                                    </FlipbookTrigger>
                                </div>

                                {/* ✅ 6 Images */}
                                <ImageGrid images={ENVIRONMENT_IMAGES} />
                            </div>
                        )}

                        {/* Green Initiatives */}
                        {activeTab === "initiatives" && (
                            <div className="space-y-6">
                                <p className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {GREEN_INITIATIVES_CONTENT}
                                </p>

                                {/* ✅ 7 Images */}
                                <ImageGrid images={GREEN_INITIATIVES_IMAGES} />
                            </div>
                        )}

                        {/* Quality Audits */}
                        {activeTab === "audits" && (
                            <div className="space-y-8">
                                <p className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {QUALITY_AUDITS_CONTENT}
                                </p>

                                <div className="space-y-4">
                                    <h3 className="font-plus-jakarta-sans text-lg md:text-xl font-semibold text-[var(--foreground)]">
                                        Audit Reports
                                    </h3>
                                    {AUDIT_REPORTS.length > 0 ? (
                                        <div className="space-y-3">
                                            {AUDIT_REPORTS.map((report, idx) => (
                                                <FlipbookTrigger key={idx} pdfUrl={report.url} title={report.title}>
                                                    <a
                                                        href={report.url || "#"}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`block px-4 py-3 rounded-lg border font-plus-jakarta-sans text-sm md:text-base transition
                ${report.url?.trim()
                                                                ? "bg-gray-50 hover:bg-gray-100 border-gray-200 text-[var(--foreground)]"
                                                                : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed pointer-events-none"
                                                            }`}
                                                    >
                                                        {report.title}
                                                    </a>
                                                </FlipbookTrigger>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-center text-[var(--foreground)]/70 font-plus-jakarta-sans text-sm md:text-base">
                                            No audit reports added yet.
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Gender Equity */}
                        {activeTab === "equity" && (
                            <div className="space-y-8">
                                <p className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {GENDER_EQUITY_CONTENT}
                                </p>

                                {/* Images */}
                                <ImageGrid images={GENDER_EQUITY_IMAGES} />

                                <div className="space-y-6">
                                    <h3 className="font-plus-jakarta-sans text-lg md:text-xl font-semibold text-[var(--foreground)]">
                                        Gender Equity Programs Held At KU
                                    </h3>
                                    {/* Accordion */}
                                    <div className="space-y-2 text-left">
                                        {getGenderYears().map((year) => {
                                            const isExpanded = expandedYears[year] || false;
                                            const rows = GENDER_EQUITY_PROGRAMS[year] || [];

                                            return (
                                                <div key={year} className="border-b border-[var(--button-red)] pb-2 last:border-b-0">
                                                    <button
                                                        onClick={() => toggleYear(year)}
                                                        className="w-full flex items-center gap-2 py-1 hover:opacity-80 transition-opacity justify-between pr-3"
                                                        aria-label={`Toggle ${year}`}
                                                    >
                                                        <h3 className="font-plus-jakarta-sans text-sm md:text-base text-[var(--foreground)]">
                                                            {year}
                                                        </h3>
                                                        <div
                                                            className={`text-[var(--background)] bg-[var(--button-red)] rounded-sm p-3 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""
                                                                }`}
                                                        >
                                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                    </button>

                                                    {isExpanded && rows.length > 0 && (
                                                        <div className="mt-2 overflow-x-auto overflow-y-auto max-h-[350px] border border-gray-200 rounded-lg">
                                                            <table className="w-full border-collapse min-w-[900px]">
                                                                <thead className="sticky top-0 z-10">
                                                                    <tr className="bg-[var(--dark-blue)] text-white">
                                                                        <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                                                            S.No.
                                                                        </th>
                                                                        <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                                                            Event
                                                                        </th>
                                                                        <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                                                            Category
                                                                        </th>
                                                                        <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                                                            Date
                                                                        </th>
                                                                        <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                                                            Department / Managed by
                                                                        </th>
                                                                    </tr>
                                                                </thead>

                                                                <tbody>
                                                                    {rows.map((r) => (
                                                                        <tr key={`${year}-${r.sno}`} className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">{r.sno}</td>
                                                                            <td className="px-4 py-3 text-[var(--foreground)]">{r.event}</td>
                                                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">{r.category}</td>
                                                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">{r.date}</td>
                                                                            <td className="px-4 py-3 text-[var(--foreground)]">{r.department}</td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    )}

                                                    {isExpanded && rows.length === 0 && (
                                                        <p className="px-4 py-2 text-[var(--foreground)]/60 text-sm">
                                                            No records available for this year.
                                                        </p>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* PDF */}
                                    <div className="flex justify-center mt-6">
                                        <FlipbookTrigger pdfUrl={GENDER_SENSITISATION_PDF.url} title={GENDER_SENSITISATION_PDF.title}>
                                            <a
                                                href={GENDER_SENSITISATION_PDF.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--button-red)] text-white font-plus-jakarta-sans text-sm md:text-base font-semibold hover:opacity-90 transition"
                                            >
                                                View Gender Sensitisation Action Plan
                                                <span aria-hidden="true">↗</span>
                                            </a>
                                        </FlipbookTrigger>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* DISABLED FRIENDLY */}
                        {activeTab === "disabled" && (
                            <div className="space-y-6">
                                <p className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {DISABLED_FRIENDLY_CONTENT}
                                </p>

                                <div>
                                    <h3 className="font-plus-jakarta-sans text-base md:text-lg font-semibold text-[var(--foreground)] mb-3">
                                        Key facilities and support
                                    </h3>

                                    <ul className="list-disc pl-6 space-y-3 text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                        {DISABLED_FRIENDLY_POINTS.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* PDF */}
                                <div className="pt-2">
                                    <FlipbookTrigger pdfUrl={DISABILITY_GUIDELINES_PDF.url} title={DISABILITY_GUIDELINES_PDF.title}>
                                        <a
                                            href={DISABILITY_GUIDELINES_PDF.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--button-red)] text-white font-plus-jakarta-sans text-sm md:text-base font-semibold hover:opacity-90 transition"
                                        >
                                            {DISABILITY_GUIDELINES_PDF.title}
                                            <span aria-hidden="true">↗</span>
                                        </a>
                                    </FlipbookTrigger>
                                </div>

                                {/* Images */}
                                <ImageGrid images={DISABLED_IMAGES} />
                            </div>
                        )}

                        {/* Constitutional Obligations */}
                        {activeTab === "obligations" && (
                            <div className="space-y-6">
                                <p className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {CONSTITUTIONAL_OBLIGATIONS_POINTS[0]}
                                </p>
                                <ul className="list-disc pl-6 space-y-3 text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {CONSTITUTIONAL_OBLIGATIONS_POINTS.slice(1).map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>

                                {/* 3 Images */}
                                <ImageGrid images={CONSTITUTIONAL_OBLIGATIONS_IMAGES} />
                            </div>
                        )}

                        {/* Important Day Celebrations */}
                        {activeTab === "celebrations" && (
                            <div className="flex-1">

                                <div className="space-y-2 text-left">
                                    {getCelebrationYears().map((year) => {
                                        const isExpanded = expandedYears[year] || false;
                                        const rows = IMPORTANT_DAY_CELEBRATIONS[year] || [];

                                        return (
                                            <div key={year} className="border-b border-[var(--button-red)] pb-2 last:border-b-0">
                                                <button
                                                    onClick={() => toggleYear(year)}
                                                    className="w-full flex items-center gap-2 py-1 hover:opacity-80 transition-opacity justify-between pr-3"
                                                    aria-label={`Toggle ${year}`}
                                                >
                                                    <h3 className="font-plus-jakarta-sans text-sm md:text-base text-[var(--foreground)]">
                                                        {year}
                                                    </h3>
                                                    <div
                                                        className={`text-[var(--background)] bg-[var(--button-red)] rounded-sm p-3 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""
                                                            }`}
                                                    >
                                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                </button>

                                                {isExpanded && rows.length > 0 && (
                                                    <div className="mt-2 overflow-x-auto overflow-y-auto max-h-[350px] border border-gray-200 rounded-lg">
                                                        <table className="w-full border-collapse min-w-[650px]">
                                                            <thead className="sticky top-0 z-10">
                                                                <tr className="bg-[var(--dark-blue)] text-white">
                                                                    <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                                                        S.No.
                                                                    </th>
                                                                    <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                                                        Event
                                                                    </th>
                                                                    <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                                                        Date
                                                                    </th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                {rows.map((r) => (
                                                                    <tr key={`${year}-${r.sno}`} className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">{r.sno}</td>
                                                                        <td className="px-4 py-3 text-[var(--foreground)]">{r.event}</td>
                                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">{r.date}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )}

                                                {isExpanded && rows.length === 0 && (
                                                    <p className="px-4 py-2 text-[var(--foreground)]/60 text-sm">
                                                        No records available for this year.
                                                    </p>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* 4 Images */}
                                <div className="mt-6">
                                    <ImageGrid images={IMPORTANT_DAY_IMAGES} />
                                </div>
                            </div>
                        )}

                        {/* Code of Conduct */}
                        {activeTab === "conduct" && (
                            <div className="space-y-6">
                                <p className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {CODE_OF_CONDUCT_CONTENT}
                                </p>

                                <ul className="list-disc pl-6 space-y-3 text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {CODE_OF_CONDUCT_POINTS.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>

                                {/* PDFs */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                    {CODE_OF_CONDUCT_PDFS.map((pdf, idx) => (
                                        <FlipbookTrigger key={idx} pdfUrl={pdf.url} title={pdf.title}>
                                            <a
                                                href={pdf.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[var(--button-red)] text-white font-plus-jakarta-sans text-sm md:text-base font-semibold hover:opacity-90 transition w-full sm:w-fit"
                                            >
                                                {pdf.title}
                                                <span aria-hidden="true">↗</span>
                                            </a>
                                        </FlipbookTrigger>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Environmental Promotion and Sustainability Activities */}
                        {activeTab === "promotion" && (
                            <div className="flex-1">


                                <div className="space-y-2 text-left">
                                    {getPromotionYears().map((year) => {
                                        const isExpanded = expandedYears[year] || false;
                                        const rows = ENVIRONMENT_PROMOTION_ACTIVITIES[year] || [];

                                        return (
                                            <div key={year} className="border-b border-[var(--button-red)] pb-2 last:border-b-0">
                                                <button
                                                    onClick={() => toggleYear(year)}
                                                    className="w-full flex items-center justify-between pr-3 py-1 hover:opacity-80 transition-opacity"
                                                >
                                                    <h3 className="font-plus-jakarta-sans text-sm md:text-base text-[var(--foreground)]">
                                                        {year}
                                                    </h3>
                                                    <div className={`bg-[var(--button-red)] text-white p-3 rounded-sm transition-transform ${isExpanded ? "rotate-180" : ""}`}>
                                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" />
                                                        </svg>
                                                    </div>
                                                </button>

                                                {isExpanded && (
                                                    <div className="mt-2 overflow-x-auto max-h-[350px] border border-gray-200 rounded-lg">
                                                        <table className="w-full min-w-[650px] border-collapse">
                                                            <thead className="sticky top-0 bg-[var(--dark-blue)] text-white">
                                                                <tr>
                                                                    <th className="px-4 py-3 text-left">S.No.</th>
                                                                    <th className="px-4 py-3 text-left">Event</th>
                                                                    <th className="px-4 py-3 text-left">Date</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {rows.map((r) => (
                                                                    <tr key={`${year}-${r.sno}`} className="border-b hover:bg-gray-50">
                                                                        <td className="px-4 py-3">{r.sno}</td>
                                                                        <td className="px-4 py-3">{r.event}</td>
                                                                        <td className="px-4 py-3 whitespace-nowrap">{r.date}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* 4 Images */}
                                <div className="mt-6">
                                    <ImageGrid images={ENVIRONMENT_PROMOTION_IMAGES} />
                                </div>
                            </div>
                        )}

                        {/* Social Responsibility */}

                        {/* Institutional Social Responsibility (ISR) and Extension Activities */}
                        {activeTab === "social" && (
                            <div className="space-y-8">
                                {/* Intro */}
                                <div className="space-y-4">
                                    <p className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                        {ISR_INTRO}
                                    </p>

                                    <details className="group">
                                        <summary className="cursor-pointer select-none text-[var(--button-red)] font-plus-jakarta-sans font-semibold flex items-center gap-2 w-fit">
                                            Read More
                                            <span className="transition-transform group-open:rotate-180">🠋</span>
                                        </summary>

                                        <p className="mt-3 text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                            {ISR_READ_MORE}
                                        </p>
                                    </details>
                                </div>

                                {/* Activities as tiles */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {ISR_ACTIVITIES.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="rounded-xl overflow-hidden bg-gray-50 border border-gray-200 hover:shadow-md transition"
                                        >
                                            {/* Image tile */}
                                            <div className="aspect-[4/3] bg-gray-200">
                                                {item.src && (
                                                    <img
                                                        src={item.src}
                                                        alt={`${item.title} (Image ${item.imageNo})`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                )}
                                            </div>

                                            {/* Title under image */}
                                            <div className="p-4 text-center">
                                                <h3 className="font-plus-jakarta-sans text-sm md:text-base font-semibold text-[var(--foreground)]">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* CSR at Kalinga University */}
                        {activeTab === "csr" && (
                            <div className="space-y-8">
                                {/* Intro */}
                                <p className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {CSR_INTRO}
                                </p>

                                {/* Initiatives */}
                                <div>
                                    <h3 className="font-plus-jakarta-sans text-lg md:text-xl font-semibold text-[var(--foreground)] mb-4">
                                        Our Initiatives
                                    </h3>

                                    <ul className="list-disc pl-6 space-y-3 text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                        {CSR_INITIATIVES.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Images as tiles */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {CSR_IMAGES.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="rounded-xl overflow-hidden bg-gray-50 border border-gray-200 hover:shadow-md transition"
                                        >
                                            <div className="aspect-[4/3] bg-gray-200">
                                                {item.src && (
                                                    <img
                                                        src={item.src}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                )}
                                            </div>

                                            <div className="p-4 text-center">
                                                <h4 className="font-plus-jakarta-sans text-sm md:text-base font-semibold text-[var(--foreground)]">
                                                    {item.title}
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}


                        {/* Best Practice - 1 */}
                        {activeTab === "bp1" && (
                            <div className="space-y-8">
                                {/* Title */}
                                <h2 className="font-plus-jakarta-sans text-xl md:text-3xl font-semibold text-[var(--foreground)] text-center">
                                    {BP1_TITLE}
                                </h2>

                                {/* Intro */}
                                <p className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {BP1_INTRO}
                                </p>

                                {/* SDGs Covered */}
                                <div>
                                    <h3 className="font-plus-jakarta-sans text-lg md:text-xl font-semibold mb-3">
                                        17 Sustainable Development Goals
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
                                        {BP1_SDG_GOALS.map((item, index) => (
                                            <div key={index} className="bg-[var(--card-skin)] p-6 rounded-xl flex flex-col items-center text-center gap-4 hover:shadow-lg transition-all duration-300 group cursor-pointer border border-transparent hover:border-[var(--button-red)]/20">
                                                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                                    <Image
                                                        src={`https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/${item.icon}`}
                                                        alt={item.title}
                                                        width={40}
                                                        height={40}
                                                        className="w-10 h-10 object-contain"
                                                    />
                                                </div>
                                                <span className="font-semibold text-[var(--foreground)] text-lg leading-tight">
                                                    {item.title}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Objectives */}
                                <div>
                                    <h3 className="font-plus-jakarta-sans text-lg md:text-xl font-semibold mb-3">
                                        Objectives of the Practice
                                    </h3>
                                    <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                                        {BP1_OBJECTIVES.map((obj, idx) => (
                                            <li key={idx}>{obj}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* The Practice */}
                                <div>
                                    <h3 className="font-plus-jakarta-sans text-lg md:text-xl font-semibold mb-3">
                                        The Practice
                                    </h3>
                                    <ol className="list-decimal pl-6 space-y-2 text-sm md:text-base">
                                        {BP1_PRACTICE.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ol>
                                </div>

                                {/* Economic Empowerment */}
                                <div>
                                    <h3 className="font-plus-jakarta-sans text-lg md:text-xl font-semibold mb-3">
                                        Economic Empowerment
                                    </h3>
                                    <ol className="list-decimal pl-6 space-y-2 text-sm md:text-base">
                                        {BP1_ECONOMIC_EMPOWERMENT.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ol>
                                </div>

                                {/* Images */}

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {BP1_IMAGES.map((img, idx) => (
                                        <div
                                            key={idx}
                                            className="rounded-xl overflow-hidden bg-gray-200 border border-gray-200 hover:shadow-md transition"
                                        >
                                            <div className="aspect-[4/3] bg-gray-300">
                                                {img.src && (
                                                    <img
                                                        src={img.src}
                                                        alt="Best Practice 1 Image"
                                                        className="w-full h-full object-cover"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Best Practice - 2 */}
                        {activeTab === "bp2" && (
                            <div className="space-y-8">
                                {/* Title */}
                                <h2 className="font-plus-jakarta-sans text-xl md:text-3xl font-semibold text-[var(--foreground)] text-center">
                                    {BP2_TITLE}
                                </h2>

                                {/* Intro */}
                                <p className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {BP2_INTRO}
                                </p>

                                {/* Objectives */}
                                <div>
                                    <h3 className="font-plus-jakarta-sans text-lg md:text-xl font-semibold mb-3">
                                        Objectives of the Practice
                                    </h3>
                                    <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                                        {BP2_OBJECTIVES.map((obj, idx) => (
                                            <li key={idx}>{obj}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* The Practice */}
                                <div>
                                    <h3 className="font-plus-jakarta-sans text-lg md:text-xl font-semibold mb-3">
                                        The Practice
                                    </h3>
                                    <p className="text-sm md:text-base leading-relaxed">
                                        {BP2_PRACTICE}
                                    </p>
                                </div>

                                {/* Economic Empowerment */}
                                <div>
                                    <h3 className="font-plus-jakarta-sans text-lg md:text-xl font-semibold mb-3">
                                        Economic Empowerment
                                    </h3>
                                    <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                                        {BP2_ECONOMIC_EMPOWERMENT.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Poverty Alleviation */}
                                <div>
                                    <h3 className="font-plus-jakarta-sans text-lg md:text-xl font-semibold mb-3">
                                        Poverty Alleviation
                                    </h3>
                                    <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                                        {BP2_POVERTY_ALLEVIATION.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Education & Knowledge */}
                                <div>
                                    <h3 className="font-plus-jakarta-sans text-lg md:text-xl font-semibold mb-3">
                                        Education and Knowledge Enhancement
                                    </h3>
                                    <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                                        {BP2_EDUCATION.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Community Development */}
                                <div>
                                    <h3 className="font-plus-jakarta-sans text-lg md:text-xl font-semibold mb-3">
                                        Community Development
                                    </h3>
                                    <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                                        {BP2_COMMUNITY_DEVELOPMENT.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Entrepreneurship */}
                                <div>
                                    <h3 className="font-plus-jakarta-sans text-lg md:text-xl font-semibold mb-3">
                                        Entrepreneurship Development
                                    </h3>
                                    <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                                        {BP2_ENTREPRENEURSHIP.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Initiatives */}
                                <div>
                                    <h3 className="font-plus-jakarta-sans text-lg md:text-xl font-semibold mb-3">
                                        Initiatives
                                    </h3>
                                    <ol className="list-decimal pl-6 space-y-1 text-sm md:text-base">
                                        {BP2_INITIATIVES.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ol>
                                </div>

                                {/* Evidence of Success */}
                                <div>
                                    <h3 className="font-plus-jakarta-sans text-lg md:text-xl font-semibold mb-3">
                                        Evidence of Success
                                    </h3>
                                    <ol className="list-decimal pl-6 space-y-2 text-sm md:text-base">
                                        {BP2_EVIDENCE.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ol>
                                </div>

                                {/* Images – image-only grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {BP2_IMAGES.map((img, idx) => (
                                        <div
                                            key={idx}
                                            className="rounded-xl overflow-hidden bg-gray-200 border border-gray-200 hover:shadow-md transition"
                                        >
                                            <div className="aspect-[4/3] bg-gray-300">
                                                {img.src && (
                                                    <img
                                                        src={img.src}
                                                        alt="Best Practice 2 Image"
                                                        className="w-full h-full object-cover"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Our Contributions in Sustainable and Social Development */}
                        {activeTab === "contributions" && (
                            <div className="space-y-8">
                                {/* Paragraph */}
                                <p className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {CONTRIBUTIONS_INTRO}
                                </p>

                                {/* Key Focus Areas */}
                                <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base">
                                    {CONTRIBUTIONS_AREAS.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>

                                {/* Images – Social Works / Campaigns / Awareness Camps */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                                    {CONTRIBUTIONS_IMAGES.map((img, idx) => (
                                        <div
                                            key={idx}
                                            className="rounded-xl overflow-hidden bg-gray-200 border border-gray-200 hover:shadow-md transition"
                                        >
                                            <div className="aspect-[4/3] bg-gray-300">
                                                {img.src && (
                                                    <img
                                                        src={img.src}
                                                        alt="Social Work and Awareness Activity"
                                                        className="w-full h-full object-cover"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}



                        {/* Placeholder for other tabs */}
                        {!["measures", "waste", "water", "environmental", "initiatives", "audits", "reports", "equity", "programs", "disabled", "obligations", "celebrations", "conduct", "promotion", "social", "csr", "bp1", "bp2", "contributions"].includes(activeTab) && (
                            <p className="text-center text-[var(--foreground)]/70 font-plus-jakarta-sans text-sm md:text-base">
                                Content will be added for this section.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}