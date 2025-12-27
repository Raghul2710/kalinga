"use client";

import React from "react";
import StudentWelfareIntro from "../components/student-welfare/studentwelfare-intro";
import SwdeanIntro from "../components/student-welfare/swdean-into";
import SwCards from "../components/student-welfare/sw-cards";
import FAQ from "../components/general/faq";
import ImageContent from "@/app/components/ccrc/imagecontent";
import { useMemo, useState } from "react";
import Gallery from "../components/general/gallery";
import SectionHeading from "../components/general/SectionHeading";
import DataTable from "@/app/components/general/data-table";

const page = () => {
  const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/alumini/alumini.webp",
  pageTitle: "Student Welfare",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Student Welfare', href: '/student-welfare' }
  ]
};

// Register breadcrumb data globally
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}


  const kifAdditionalContent = [
    "The Yi membership includes young progressive Indians between the ages of 25 & 40 years. The members comprise entrepreneurs, professionals, and progressive achievers from different walks of life. “To become the voice of young Indians globally” is the vision of Yi, which provides a platform for young Indians to participate in and contribute by becoming an integral part of the Indian growth story.",
  ];

  const selectionCriteria = [
    "Get a Chance to interact with other successful Young Indians.",
    "An opportunity to start thinking and working for India.",
    "An experience in leadership and team building.",
    "Invaluable motivations for young minds to see how other Young achievers are making a difference.",
    "A unique networking opportunity with peers across the country.",
    "An opportunity to participate & get actively involved in the programmes organised by Yi at the Regional, National, and International levels.",
  ];

 const defaultGalleryImages = [
  {
    id: 5,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/sports5.jpg",
    alt: "Gallery-5"
  },
  {
    id: 3,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/sports(10).webp",
    alt: "Gallery-3"
  },
  {
    id: 12,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/activities3.jpeg",
    alt: "Gallery-10"
  },
  {
    id: 1,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/banner-std-welfare.jpg",
    alt: "Gallery-1"
  },
  {
    id: 9,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/sports2.jpg",
    alt: "Gallery-8"
  },
  {
    id: 14,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/activities5.jpeg",
    alt: "Gallery-10"
  },
  {
    id: 7,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/sports(9).webp",
    alt: "Gallery-7"
  },
  {
    id: 4,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/sports.jpg",
    alt: "Gallery-4"
  },
  {
    id: 11,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/activities1.jpeg",
    alt: "Gallery-10"
  },
  {
    id: 2,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/sports3.png",
    alt: "Gallery-2"
  },
  {
    id: 10,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/sports4.png",
    alt: "Gallery-10"
  },
  {
    id: 6,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/Pic3.jpeg",
    alt: "Gallery-6"
  },
  {
    id: 13,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/activities4.jpeg",
    alt: "Gallery-10"
  },
  {
    id: 8,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/sports6.jpg",
    alt: "Gallery-8"
  }
];

  return (
    <>
    
      <StudentWelfareIntro />
      <SwdeanIntro />
      <SwCards />
       
      {/* Image Content Section */}
      <ImageContent
        title="Young Indians"
        subtitle={false}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/young-indian.webp"
      
        imageAlt="Young Indians"
        hasImage={true}
        description="Young Indians (Yi) is an integral part of the Confederation of Indian Industry (CII), India’s premier business association, formed in the year 2002, with an objective of creating a platform for young Indians to realise the dream of a developed nation. YI has over 1300 direct members in 40 city chapters. Yi has 160 members in 3 corporate chapters and engages another 12,000 members through its district chapter, Farmer Nets, and Student Nets."
        additionalContent={kifAdditionalContent}
        certificateLink={false}
        certificateLinkText={false}
        selectionCriteria={selectionCriteria}
      /> 
    <SectionHeading title="Sports & Cultural Activities"
    titleClassName="text-center" />
      <SportsFacilitiesTabs />
     <FAQ
  title="Activities & Events"
  
  subtitleClassName="!hidden"
  variant="table-display"
  items={[]}
  



  tableSections={[
    {
      id: 1,
      title: "Academic Year 2024–25",
      columns: [
        { key: "activity", label: "Name of the Activity", width: "w-[40%]" },
        { key: "unit", label: "Organising Unit / Forum / Agency", width: "w-[25%]" },
        { key: "year", label: "Year of the Activity", width: "w-[20%]" },
        { key: "students", label: "Number of Students Participated", width: "w-[15%]" }
      ],
      data: [
        { activity: "Friendship Day Celebration", unit: "DSW", year: "2024–2025", students: "100" },
        { activity: "Ratri Before Navratri", unit: "DSW", year: "2024–2025", students: "137" },
        { activity: "Garba Night", unit: "DSW", year: "2024–2025", students: "—" },
        { activity: "Diwali Milan Celebration", unit: "DSW", year: "2024–2025", students: "378" },
        { activity: "Christmas Day Celebration", unit: "DSW", year: "2024–2025", students: "595" },
        { activity: "NCC Mountaineering Expedition 2024", unit: "NCC", year: "2024–2025", students: "1" },
        { activity: "CATC – VII Group Level TSC Selection Camp", unit: "NCC", year: "2024–2025", students: "1" },
        { activity: "Report on ANO Duty as Committee Member for the Selection of ANO", unit: "NCC", year: "2024–2025", students: "15" },
        { activity: "Report on Biometric Registration (For 2nd & 3rd Year Cadets)", unit: "NCC", year: "2024–2025", students: "30" },
        { activity: "Report on ANOs & CTOs Conference (2024–25)", unit: "NCC", year: "2024–2025", students: "42" },
        { activity: "CATC – XI CAMP", unit: "NCC", year: "2024–2025", students: "32" },
        { activity: "Report on IGC – Best Cadet Camp", unit: "NCC", year: "2024–2025", students: "1" },
        { activity: "NCC Selection Process Day", unit: "NCC", year: "2024–2025", students: "2" },
        { activity: "Report on Workshop on Self-Defence Techniques", unit: "NCC", year: "2024–2025", students: "70" },
        { activity: "Know Your Army Mela", unit: "NCC", year: "2024–2025", students: "12" },
        { activity: "NCC Rank Ceremony 2024–24", unit: "NCC", year: "2024–2025", students: "21" },
        { activity: "One Day State Level Women Program Officer Training Workshop", unit: "NSS", year: "2024–2025", students: "265" },
        { activity: "Green Army, Lions Club & Unnat Bharat Abhiyan – Tree Plantation Drive", unit: "NSS", year: "2024–2025", students: "26" },
        { activity: "Tree Plantation Drive", unit: "DSW & NSS", year: "2024–2025", students: "45" },
        { activity: "Constitution Day Celebration", unit: "NSS", year: "2024–2025", students: "142" },
        { activity: "Street Play on ‘Clean Chhattisgarh – Good Governance of Government’", unit: "NSS", year: "2024–2025", students: "37" },
        { activity: "ORINA-2024 Sports Fest, AIIMS Raipur", unit: "Sports", year: "2024–2025", students: "38" },
        { activity: "Yuva Utsav 3.0", unit: "YI & CII", year: "2024–2025", students: "193" },
        { activity: "IDE Lectures on Startup Ideas", unit: "IEEE & YI", year: "2024–2025", students: "168" },
        { activity: "IEEE-MOVE Outreach India – Promoting Climate Change & Sustainability", unit: "IEEE KU SB & IEEE SIGHT", year: "2024–2025", students: "40" },
        { activity: "IEEE-MOVE Outreach India – Promoting Climate Change & Sustainability", unit: "IEEE KU SB & IEEE SIGHT", year: "2024–2025", students: "50" },
        { activity: "IEEE-MOVE Outreach India – Promoting Climate Change & Sustainability", unit: "IEEE KU SB & IEEE SIGHT", year: "2024–2025", students: "92" },
        { activity: "IEEE-MOVE Outreach India – Promoting Climate Change & Sustainability", unit: "IEEE KU SB & IEEE SIGHT", year: "2024–2025", students: "73" },
        { activity: "IEEE-MOVE Outreach India – Promoting Climate Change & Sustainability", unit: "IEEE KU SB & IEEE SIGHT", year: "2024–2025", students: "45" }
      ]
      
    },{
  id: 2,
  title: "Academic Year 2023–24",
  columns: [
    { key: "activity", label: "Name of the Activity", width: "w-[40%]" },
    { key: "unit", label: "Organising Unit / Forum / Collaborating Agency", width: "w-[25%]" },
    { key: "year", label: "Year of the Activity", width: "w-[20%]" },
    { key: "students", label: "Number of Students Participated", width: "w-[15%]" }
  ],
  data: [
    { activity: "CATC-XI CAMP", unit: "NCC", year: "2023–2024", students: "10" },
    { activity: "Tree Plantation Drive", unit: "DSW", year: "2023–2024", students: "200" },
    { activity: "Certification Training Program Jan Shikshan Sansthan (JSS)", unit: "DSW", year: "2023–2024", students: "20" },
    { activity: "1-day Capacity Building Workshop for Educators", unit: "CCRC", year: "2023–2024", students: "120" },
    { activity: "Report on CATC-XII CAMP", unit: "NCC", year: "2023–2024", students: "21" },
    { activity: "Issues and Challenges of Professional Development of Teachers in Secondary School", unit: "Education", year: "2023–2024", students: "10" },
    { activity: "Awareness and training program aimed to educate students on how to operate Electronic Voting Machines (EVMs)", unit: "DSW", year: "2023–2024", students: "57" },
    { activity: "Inclusive Walkthon, Telibandha Talab, Raipur", unit: "DSW", year: "2023–2024", students: "99" },
    { activity: "Training Session on CPR & Emergency Roadside Responders", unit: "YI", year: "2023–2024", students: "38" },
    { activity: "Painting competition for school students celebrate World Ozone Day", unit: "Zoology", year: "2023–2024", students: "140" },
    { activity: "Yuva Utsav 2.0", unit: "YI", year: "2023–2024", students: "350" },
    { activity: "NSS Foundation Day Celebration at IGKV Raipur", unit: "NSS", year: "2023–2024", students: "25" },
    { activity: "Free Eye Checkup Camp – World Pharmacist Day", unit: "Pharmacy", year: "2023–2024", students: "242" },
    { activity: "G20 University Connect Event", unit: "Commerce and Management", year: "2023–2024", students: "109" },
    { activity: "Nature camp and workshop on termites and birds identification", unit: "Zoology", year: "2023–2024", students: "40" },
    { activity: "National Seminar Strengthening Women Entrepreneur", unit: "Arts & Humanities", year: "2023–2024", students: "150" },
    { activity: "Smart Garbage Monitoring System in Government Schools", unit: "NSS", year: "2023–2024", students: "42" },
    { activity: "Youth to Youth connect House to hold Connect", unit: "Engineering", year: "2023–2024", students: "156" },
    { activity: "Anand Mela", unit: "Commerce & Management", year: "2023–2024", students: "225" },
    { activity: "Donation Drive: Donate to Make a Difference", unit: "Arts & Humanities", year: "2023–2024", students: "13" },
    { activity: "Cancer awareness Talk and Screening Camp", unit: "Chief Proctor", year: "2023–2024", students: "40" },
    {
      activity:
        "Foundation Day Celebration – State Foundation Day where Chhattisgarhi & Haryanvi Folk Dance Represented by Kalinga University under Ek Bharat Shreshtha Bharat Programme at Rajbhawan Darbar Hall",
      unit: "DSW",
      year: "2023–2024",
      students: "10"
    },
    {
      activity:
        "Foundation Day Celebration of Assam & Nagaland under G-20 Ek Bharat Shreshtha Bharat Programme at Rajbhawan Darbar Hall",
      unit: "DSW",
      year: "2023–2024",
      students: "6"
    },
    { activity: "A Report on Workshop on Scientific Toy", unit: "IQAC", year: "2023–2024", students: "50" }
  ]
},{
  id: 3,
  title: "Academic Year 2022–23",
  columns: [
    { key: "activity", label: "Name of the Activity", width: "w-[40%]" },
    { key: "unit", label: "Organising Unit / Agency / Collaborating Agency", width: "w-[25%]" },
    { key: "year", label: "Year of the Activity", width: "w-[20%]" },
    { key: "students", label: "Number of Students Participated", width: "w-[15%]" }
  ],
  data: [
    { activity: "One-day workshop on survey", unit: "NSS", year: "2022–2023", students: "42" },
    { activity: "Tree Plantation, by NSS Unit at Anganwadi School, Kotni", unit: "NSS", year: "2022–2023", students: "130" },
    { activity: "Seminar on HIV/AIDS- Awareness", unit: "NSS", year: "2022–2023", students: "48" },
    { activity: "Pollution awareness program", unit: "NSS", year: "2022–2023", students: "65" },
    { activity: "Awareness program on PCOD (Polycystic ovarian disease)", unit: "NSS", year: "2022–2023", students: "84" },
    { activity: "Traffic Safety Awareness Program and Licence Camp", unit: "NSS", year: "2022–2023", students: "177" },
    { activity: "International Yoga Day Celebration", unit: "NSS & NCC", year: "2022–2023", students: "67" },
    { activity: "World Population Day", unit: "NSS", year: "2022–2023", students: "20" },
    { activity: "8-Day Camp Duty in Lakholi by the NCC Army Wing", unit: "NCC", year: "2022–2023", students: "9" },
    { activity: "CATC Camp", unit: "NCC", year: "2022–2023", students: "9" },
    { activity: "Free Health Care camp", unit: "NCC", year: "2022–2023", students: "171" },
    { activity: "Poster Making Competition", unit: "NCC", year: "2022–2023", students: "15" },
    { activity: "Essay Writing Competition", unit: "NCC", year: "2022–2023", students: "15" },
    { activity: "Report on Basic Mountaineering Course", unit: "NCC", year: "2022–2023", students: "5" },
    { activity: "Doctors Honoured by Kalinga University on Doctors’ Day", unit: "DSW", year: "2022–2023", students: "2" },
    { activity: "Webinar on the Occasion of World Hepatitis Day", unit: "Pharmacy", year: "2022–2023", students: "59" },
    { activity: "Yoga & Meditation session", unit: "Pharmacy", year: "2022–2023", students: "88" },
    { activity: "Free of Cost Booster Dose (3rd dose) for Covid-19 Vaccination", unit: "Chief Proctor", year: "2022–2023", students: "315" },
    {
      activity:
        "Celebration of International Literacy Day at Kuhera Govt. School with street play and Gifts for school children",
      unit: "Commerce & Management",
      year: "2022–2023",
      students: "140"
    },
    { activity: "Hindi Diwas celebrations", unit: "Arts & Humanities", year: "2022–2023", students: "90" },
    {
      activity: "Celebration of World Ozone Day",
      unit: "Commerce & Management, Department of Zoology & Green Club",
      year: "2022–2023",
      students: "266"
    },
    { activity: "Tree plantation with slogan (online)", unit: "Education", year: "2022–2023", students: "26" },
    { activity: "World Pharmacist Day Celebration 2022", unit: "Pharmacy", year: "2022–2023", students: "100" },
    {
      activity:
        'Guest session on "Mental Health with YPV Sadhna" on the occasion of World Mental Health Day',
      unit: "Commerce & Management",
      year: "2022–2023",
      students: "228"
    },
    { activity: "Global Tribal Queen Contest 2022", unit: "Social Work", year: "2022–2023", students: "115" },
    {
      activity: "Badhte Kadam organisation for Clothes Distribution and NGO Visit",
      unit: "Social Work",
      year: "2022–2023",
      students: "22"
    },
    {
      activity:
        "Rural and household survey conducted in adopted villages by Kalinga University",
      unit: "Social Work",
      year: "2022–2023",
      students: "68"
    },
    { activity: "Road Safety Awareness", unit: "Law", year: "2022–2023", students: "134" },
    {
      activity:
        "A visit to Sanjeevani Cancer Hospital on National Cancer Awareness Day",
      unit: "Social Work",
      year: "2022–2023",
      students: "20"
    },
    { activity: "Free Health Check-up Camp", unit: "Social Work", year: "2022–2023", students: "110" },
    {
      activity: "Celebration of Constitution Day",
      unit: "Pro Bono Club",
      year: "2022–2023",
      students: "87"
    },
    {
      activity: "Extension Activity of IT Awareness (Govt. Middle School Kotni)",
      unit: "Social Work",
      year: "2022–2023",
      students: "55"
    },
    { activity: "Bharatiya Bhasha Utsav -2022", unit: "Social Work", year: "2022–2023", students: "200" },
    {
      activity: "Yuva Orientation Session for Yuva Students EC Members",
      unit: "Young Indians (YI)",
      year: "2022–2023",
      students: "35"
    },
    { activity: "74th Republic Day Celebration", unit: "DSW", year: "2022–2023", students: "300" },
    { activity: "World Haemophilia Day", unit: "Pharmacy", year: "2022–2023", students: "58" },
    {
      activity:
        "G-20 Events – Quiz Competition on the theme “One Earth, One Family, One Future”",
      unit: "Commerce & Management",
      year: "2022–2023",
      students: "75"
    },
    { activity: "World Thalassaemia Day", unit: "Pharmacy", year: "2022–2023", students: "25" },
    {
      activity:
        "A visit to Sankalp Sanskritik Samiti-Nasha Mukti Kendra for observing World No-Tobacco Day and an NGO Visit",
      unit: "Social Work",
      year: "2022–2023",
      students: "15"
    },
    { activity: "World Anti-Tobacco Day", unit: "Yoga Department", year: "2022–2023", students: "50" },
    {
      activity:
        "Two-day workshop on Aeromodelling for girl students from Government schools",
      unit: "IEEE WIE AG Kalinga University Student Branch",
      year: "2022–2023",
      students: "50"
    },
    {
      activity: 'Workshop on "Teaching Science holistically: Rural School Teachers"',
      unit: "IQAC, Kalinga University",
      year: "2022–2023",
      students: "49"
    },
    {
      activity: 'Hands-on Training on "Drone Technology"',
      unit: "IEEE WIE AG Kalinga University Student Branch",
      year: "2022–2023",
      students: "50"
    },
    {
      activity: 'Hands-on Training on "Robotics"',
      unit: "IEEE KU SB",
      year: "2022–2023",
      students: "55"
    },
    {
      activity: 'Hands-on Training on "Foldscope"',
      unit: "Regional Science Centre (RSC) in collaboration with Kalinga University",
      year: "2022–2023",
      students: "52"
    },
    {
      activity: 'Hands-on Training on "Best out of waste"',
      unit: "Regional Science Centre (RSC) in collaboration with Kalinga University",
      year: "2022–2023",
      students: "42"
    }
  ]
},{
  id: 4,
  title: "Academic Year 2021–22",
  columns: [
    { key: "activity", label: "Name of the Activity", width: "w-[40%]" },
    { key: "unit", label: "Organising Unit / Forum / Collaborating Agency", width: "w-[25%]" },
    { key: "year", label: "Year of the Activity", width: "w-[20%]" },
    { key: "students", label: "Number of Students Participated", width: "w-[15%]" }
  ],
  data: [
    { activity: "Felicitation of Doctors on Doctors' Day", unit: "NSS", year: "2021–2022", students: "12" },
    { activity: "Celebration of South Sudan Independence Day", unit: "NSS", year: "2021–2022", students: "35" },
    { activity: "Women's Health Awareness Program by NSS", unit: "NSS", year: "2021–2022", students: "14" },
    { activity: "Kargil Vijay Diwas at 3CG Girls Battalion, Raipur", unit: "NSS", year: "2021–2022", students: "20" },
    { activity: "Free Health Check-Up Camp", unit: "NSS", year: "2021–2022", students: "60" },
    { activity: "World Tribal Day Celebration", unit: "NSS", year: "2021–2022", students: "25" },
    { activity: "International Youth Day by NSS", unit: "NSS", year: "2021–2022", students: "22" },
    { activity: "Celebration of 75th Independence Day", unit: "NSS", year: "2021–2022", students: "60" },
    {
      activity:
        "NSS Activity - Tree Plantation at Kalinga University Campus, Mr. Rajesh Tiwari, Under Secretary, Social Welfare Department, Government of Chhattisgarh, Raipur",
      unit: "NSS",
      year: "2021–2022",
      students: "20"
    },
    {
      activity:
        'NSS Activity "Swatch Bharat Abhiyaan" to Ensure “Parthenium – Free Campus” at Kalinga University',
      unit: "NSS",
      year: "2021–2022",
      students: "20"
    },
    { activity: "Sadbhawna Diwas Celebration", unit: "NSS", year: "2021–2022", students: "38" },
    {
      activity: "Polythene awareness programme at the adopted village, Paloud",
      unit: "NSS",
      year: "2021–2022",
      students: "15"
    },
    { activity: "Engineer's Day Celebration", unit: "NSS", year: "2021–2022", students: "101" },
    {
      activity:
        "Celebration of NSS foundation day at Pt Din Dayal Upadhyaya Auditorium, Raipur, organised by the Chhattisgarh Government and Ravishankar Shukla University",
      unit: "NSS",
      year: "2021–2022",
      students: "3"
    },
    { activity: "Activity on Fit India run by NCC", unit: "3CG NCC", year: "2021–2022", students: "8" },
    {
      activity: "Yoga Awareness Program 3CG Air SQN & 8 CG Girls BN",
      unit: "3CG NCC",
      year: "2021–2022",
      students: "34"
    },
    {
      activity: "Inauguration of Skill India Initiative as Social Extension Activity",
      unit: "NSS",
      year: "2021–2022",
      students: "43"
    },
    { activity: "23rd Blood Donation Camp", unit: "NSS", year: "2021–2022", students: "15" },
    {
      activity: "Quiz Activity on Vaccination Awareness",
      unit: "NSS",
      year: "2021–2022",
      students: "13"
    },
    { activity: "YOGA SESSION FOR FACULTIES", unit: "NSS", year: "2021–2022", students: "83" },
    {
      activity: "The state-level NCC camp is going on the Kalinga University campus",
      unit: "NCC",
      year: "2021–2022",
      students: "200 Cadets"
    },
    {
      activity:
        "Inauguration Ceremony of the Institute of Driving and Traffic Research, NSS Unit",
      unit: "NSS",
      year: "2021–2022",
      students: "74"
    },
    {
      activity: "Two Days Free Medical Camp, Medical Room (NBGF 08)",
      unit: "NSS",
      year: "2021–2022",
      students: "42"
    },
    { activity: "Firing Practice", unit: "NCC", year: "2021–2022", students: "300" },
    {
      activity:
        "Kalinga University staff members took a pledge to drive safely and follow all traffic rules diligently",
      unit: "NSS",
      year: "2021–2022",
      students: "162"
    },
    {
      activity:
        "An observational visit to Sneha Sampada Vidyalaya, Bhilai, was successfully organised by the Department of Social Work",
      unit: "Social Work",
      year: "2021–2022",
      students: "13"
    },
    {
      activity:
        "Poster Presentation Competition on the Topic Green and Clean Environment",
      unit: "Pharmacy",
      year: "2021–2022",
      students: "62"
    },
    {
      activity:
        "International Women's Day Celebration in collaboration with Sanjeevani CBCC USA Cancer Hospital",
      unit: "NSS",
      year: "2021–2022",
      students: "45"
    },
    {
      activity: "ICT and e-learning platform at the government school Paloud",
      unit: "NSS",
      year: "2021–2022",
      students: "63"
    },
    {
      activity:
        "Essay Writing Competition on the occasion of World Health Day",
      unit: "NSS",
      year: "2021–2022",
      students: "16"
    },
    { activity: "Visit to NGO (Akshaya Patra)", unit: "NSS", year: "2021–2022", students: "30" },
    {
      activity:
        'Blood Donation Camp on "World Hemophilia Day" in Association with Raipur Institute of Medical Sciences (RIMS), Chhattisgarh',
      unit: "NSS",
      year: "2021–2022",
      students: "50"
    },
    {
      activity: "Workshop on Skilling the youth of Chhattisgarh",
      unit: "NSS",
      year: "2021–2022",
      students: "10"
    },
    {
      activity:
        "State-level Yoga competition by Chhattisgarh Yoga Ayog, Raipur",
      unit: "NSS",
      year: "2021–2022",
      students: "7"
    },
    {
      activity:
        "Awareness Program on World Hypertension Day at Auditorium",
      unit: "NSS",
      year: "2021–2022",
      students: "50"
    },
    {
      activity: "8 Years of Achievements (Impact on Women and Children)",
      unit: "NCC",
      year: "2021–2022",
      students: "50"
    },
    {
      activity: "One-day workshop on Environment Day",
      unit: "NSS",
      year: "2021–2022",
      students: "20"
    },
    {
      activity: "International Yoga Day 2022",
      unit: "NCC",
      year: "2021–2022",
      students: "23"
    }
  ]
},{
  id: 5,
  title: "Academic Year 2020–21",
  columns: [
    { key: "activity", label: "Name of the Activity", width: "w-[40%]" },
    { key: "unit", label: "Organising Unit / Forum / Collaborating Agency", width: "w-[25%]" },
    { key: "year", label: "Year of the Activity", width: "w-[20%]" },
    { key: "students", label: "Number of Students Participated", width: "w-[15%]" }
  ],
  data: [
    {
      activity: "Fit India moment NCC Airwing",
      unit: "NCC Airwing & Fit India Mission",
      year: "2020–2021",
      students: "687"
    },
    {
      activity: "Online Camp Ek Bharat Shreshtha Bharat",
      unit: "NCC Airwing",
      year: "2020–2021",
      students: "873"
    },
    {
      activity: "NCC Constitution Day",
      unit: "National Cadet Corps (NCC), National Service Scheme (NSS), Nehru Yuva Kendra Sangathan (NYKS)",
      year: "2020–2021",
      students: "852"
    },
    {
      activity: "Orientation TRG of CTOS",
      unit: "MP & CG DTE",
      year: "2020–2021",
      students: "780"
    },
    {
      activity: "Orientation TRG for caretakers at NCC unit Rohinipuram Raipur (C.G)",
      unit: "NCC unit Rohinipuram Raipur (C.G)",
      year: "2020–2021",
      students: "931"
    },
    {
      activity:
        "3 Chhattisgarh Air Squadron NCC Raipur Administrative and Joining Instructions NCC Cadre (CATC-XVI) for SD/SW Cadets",
      unit: "NCC unit Rohinipuram Raipur (C.G)",
      year: "2020–2021",
      students: "454"
    }
  ]
},{
  id: 6,
  title: "Academic Year 2019–20",
  columns: [
    { key: "activity", label: "Name of the Activity", width: "w-[40%]" },
    { key: "unit", label: "Organising Unit / Forum / Collaborating Agency", width: "w-[25%]" },
    { key: "year", label: "Year of the Activity", width: "w-[20%]" },
    { key: "students", label: "Number of Students Participated", width: "w-[15%]" }
  ],
  data: [
    {
      activity: "Jal Shakti Abhiyaan 2019 by NSS, at Village Kotni",
      unit: "NSS",
      year: "2019–2020",
      students: "185"
    },
    {
      activity: "Kargil Vijay Diwas, 3G Air AQN NCC Raipur, National Cadet Corps",
      unit: "NCC Air Wing",
      year: "2019–2020",
      students: "219"
    },
    {
      activity: "Tree Plantation by Kalinga University in the Adjoining Areas, organised by NSS",
      unit: "NSS",
      year: "2019–2020",
      students: "164"
    },
    {
      activity: "NCC Air Wing Camp, Shankracharya Institution of Technology, Raipur",
      unit: "NCC Air Wing",
      year: "2019–2020",
      students: "74"
    },
    {
      activity: "Foundation of NSS at Din Dayal Upadhyay Auditorium, Raipur",
      unit: "NSS",
      year: "2019–2020",
      students: "175"
    },
    {
      activity: "Blood Donation Camp NSS, Kalinga University",
      unit: "NSS",
      year: "2019–2020",
      students: "98"
    },
    {
      activity: "NCC Camp at Shankracharya College, Raipur",
      unit: "NCC",
      year: "2019–2020",
      students: "110"
    },
    {
      activity:
        "Sanrakshan Awareness rally for water augmentation at the joint event of National Service Scheme and Green Army, Raipur",
      unit: "NSS",
      year: "2019–2020",
      students: "98"
    },
    {
      activity:
        "Saksharta Mission Drive by NSS & Students of Kalinga at Village Tandul",
      unit: "NSS",
      year: "2019–2020",
      students: "68"
    },
    {
      activity: "Tobacco awareness program",
      unit: "NSS",
      year: "2019–2020",
      students: "140"
    },
    {
      activity: "Digital Literacy Campaign at Village Kotni by NSS",
      unit: "NSS",
      year: "2019–2020",
      students: "121"
    },
    {
      activity: "Health & Hygiene awareness camp in Village Kuhera by NSS",
      unit: "NSS",
      year: "2019–2020",
      students: "135"
    },
    {
      activity:
        "Domestic Violence Against Women Awareness Program organised by NSS",
      unit: "NSS",
      year: "2019–2020",
      students: "130"
    },
    {
      activity:
        "Social Harassment at Workplace - An Analysis program conducted by NSS & students of Kalinga",
      unit: "NSS",
      year: "2019–2020",
      students: "150"
    },
    {
      activity:
        "No Alcohol Consumption Campaign at Village Kotni by NCC Kalinga & Students",
      unit: "NCC",
      year: "2019–2020",
      students: "145"
    },
    {
      activity: "Free Health Checkup Camp, NSS Kalinga University",
      unit: "NSS",
      year: "2019–2020",
      students: "290"
    },
    {
      activity:
        "Legal Aid Camp by Law Deptt., organised by NSS Kalinga & Students at Village Kuhera",
      unit: "NSS",
      year: "2019–2020",
      students: "88"
    },
    {
      activity:
        "Free Health Check-up Camp, NSS Office (NBGF -14) & Medical Room (NBGF -09) Kalinga University",
      unit: "NSS",
      year: "2019–2020",
      students: "355"
    },
    {
      activity:
        'Health Awareness Programme "Healthy Heart" organised by NSS Unit of Kalinga University, Auditorium Dr. Javed Ali Khan',
      unit: "NSS",
      year: "2019–2020",
      students: "80"
    },
    {
      activity:
        "NSS unit of Kalinga University is organising a Blood Donation Camp, Dr. Drija Pathak, Medical Officer, In-Charge, Ramkrishan Care Hospital, Raipur",
      unit: "NSS",
      year: "2019–2020",
      students: "90"
    },
    {
      activity: "Prayavaran Diwas",
      unit: "NSS",
      year: "2019–2020",
      students: "78"
    },
    {
      activity: "No Plastic Drive by Kalinga University Student & NSS Team",
      unit: "NSS",
      year: "2019–2020",
      students: "95"
    },
    {
      activity: "International Yoga Day Celebration by NSS & NCC",
      unit: "NCC & NSS",
      year: "2019–2020",
      students: "210"
    },
    {
      activity:
        "Nutrition and Health Awareness Drive by NSS Unit of Kalinga University",
      unit: "NSS",
      year: "2019–2020",
      students: "180"
    },
    {
      activity:
        "Free Health Camp for Villagers of Kotni by Pharmacy Student & NCC Team",
      unit: "NCC & TEAM",
      year: "2019–2020",
      students: "163"
    },
    {
      activity:
        "Shram Daan by NSS Unit at Village - Kotni for Swachchhata Abhiyan",
      unit: "NSS",
      year: "2019–2020",
      students: "98"
    }
  ]
},{
  id: 7,
  title: "Academic Year 2018–19",
  columns: [
    { key: "activity", label: "Name of the Activity", width: "w-[40%]" },
    { key: "unit", label: "Organising Unit / Forum / Collaborating Agency", width: "w-[25%]" },
    { key: "year", label: "Year of the Activity", width: "w-[20%]" },
    { key: "students", label: "Number of Students Participated", width: "w-[15%]" }
  ],
  data: [
    { activity: "Blood donation camp", unit: "NSS / RED CROSS", year: "2018–2019", students: "39" },
    { activity: "Tobacco awareness program", unit: "NSS", year: "2018–2019", students: "32" },
    { activity: "Prayavaran Diwas", unit: "NSS", year: "2018–2019", students: "33" },
    { activity: "Remote Control flying plan training", unit: "NCC", year: "2018–2019", students: "45" },
    { activity: "Safai Abhiyan", unit: "NCC", year: "2018–2019", students: "70" },
    { activity: "Ekta Diwas", unit: "NSS", year: "2018–2019", students: "76" },
    { activity: "Digital Literacy Campaign at Village Kotni by NSS", unit: "NSS", year: "2018–2019", students: "29" },
    {
      activity: "Workshop on the Topic: Building self-esteem and assertiveness at Kalinga University",
      unit: "NCC",
      year: "2018–2019",
      students: "72"
    },
    { activity: "Aeromodeling show at Kalinga University", unit: "NCC", year: "2018–2019", students: "73" },
    {
      activity: 'Workshop on the topic "Building self-esteem and assertiveness" by NSS at Kalinga University',
      unit: "NSS",
      year: "2018–2019",
      students: "31"
    },
    {
      activity:
        'Regarding the 34th Inter University Central Zone Youth Festival "JUAN PARVE" at Sambalpur University, Odisha, by NSS',
      unit: "NSS",
      year: "2018–2019",
      students: "30"
    },
    {
      activity: "Legal Aid Camp by Students of Law and NCC at Village Kotni",
      unit: "NCC",
      year: "2018–2019",
      students: "19"
    },
    { activity: "Tobacco Awareness Program at our Campus conducted", unit: "NSS", year: "2018–2019", students: "61" },
    {
      activity: "Fire and Evacuation drill conducted by NCC at Kalinga University",
      unit: "NCC",
      year: "2018–2019",
      students: "65"
    },
    { activity: "Blood donation camp", unit: "NCC / RED CROSS", year: "2018–2019", students: "62" },
    { activity: "Tobacco Awareness Camp", unit: "NSS", year: "2018–2019", students: "60" },
    {
      activity: "The Recent Gang Rape and the Clamour for the Change in Law (Panel Discussion)",
      unit: "KALINGA UNIVERSITY",
      year: "2018–2019",
      students: "58"
    },
    {
      activity: "Women's Rights and Access to the Criminal Justice System",
      unit: "KALINGA UNIVERSITY",
      year: "2018–2019",
      students: "43"
    },
    {
      activity: "Legal Awareness about Women-Related Law",
      unit: "KALINGA UNIVERSITY",
      year: "2018–2019",
      students: "29"
    },
    {
      activity: "Woman Empowerment: Rhetoric Versus Reality",
      unit: "KALINGA UNIVERSITY",
      year: "2018–2019",
      students: "61"
    },
    { activity: "Blood donation camp", unit: "NSS / Red Cross Society", year: "2018–2019", students: "29" },
    { activity: "Tobacco awareness program", unit: "NSS", year: "2018–2019", students: "72" },
    { activity: "Paryavaran Diwas", unit: "NSS", year: "2018–2019", students: "64" },
    { activity: "Swachchha Bharat Abhiyan", unit: "NCC", year: "2018–2019", students: "77" },
    {
      activity: "26th January Celebration of Republic Day on Campus",
      unit: "NCC & NSS",
      year: "2018–2019",
      students: "57"
    },
    { activity: "Ekta Diwas", unit: "NSS", year: "2018–2019", students: "74" },
    {
      activity: "Health & Hygiene Awareness Camp in Village Kuhera by NSS",
      unit: "NSS",
      year: "2018–2019",
      students: "55"
    },
    {
      activity: "Swasthya Shivir by Pharmacy Student & NSS Team at Village - Kotni",
      unit: "NSS",
      year: "2018–2019",
      students: "66"
    },
    {
      activity: "Workshop on Nutrition and Health by NSS Students at Village Kuhera",
      unit: "NSS",
      year: "2018–2019",
      students: "30"
    },
    {
      activity:
        "Tobacco Awareness Program at our Campus conducted by NSS for the youths of nearby Villages",
      unit: "NSS",
      year: "2018–2019",
      students: "57"
    },
    {
      activity: "International Yoga Day Celebration by NSS & NCC",
      unit: "NCC & NSS",
      year: "2018–2019",
      students: "34"
    },
    {
      activity:
        "Tree Plantation by Kalinga University in the adjoining areas, organised by NSS",
      unit: "NSS",
      year: "2018–2019",
      students: "61"
    },
    {
      activity: "No Alcohol Consumption Campaign at Village Kotni by NCC",
      unit: "NCC",
      year: "2018–2019",
      students: "75"
    },
    {
      activity:
        "Shram Daan by NCC Unit Kalinga & Students at Village - Kuhera for Swachchhata Abhiyan",
      unit: "NCC",
      year: "2018–2019",
      students: "57"
    },
    {
      activity: "No Plastic Drive by Kalinga University Student & NSS Team",
      unit: "NSS",
      year: "2018–2019",
      students: "73"
    },
    {
      activity:
        "Health & Hygiene awareness camp in Village Kuhera by NCC, Kalinga & Students",
      unit: "NCC",
      year: "2018–2019",
      students: "76"
    },
    {
      activity:
        "No Vehicle Day Celebrated, NSS Students. Nagar Nigam Office Raipur",
      unit: "NSS",
      year: "2018–2019",
      students: "73"
    },
    {
      activity:
        "Health & Hygiene awareness camp in Village Palaud by NCC Kalinga & Students",
      unit: "NCC",
      year: "2018–2019",
      students: "61"
    },
    { activity: "Blood Donation Camp by the Red Cross Society", unit: "RED CROSS", year: "2018–2019", students: "29" },
    {
      activity:
        "Health & Hygiene awareness camp in Village Kotni by NSS Kalinga & Students",
      unit: "NSS",
      year: "2018–2019",
      students: "67"
    },
    {
      activity: "Digital Literacy Campaign at Village Kuhera by NSS",
      unit: "NSS",
      year: "2018–2019",
      students: "24"
    },
    {
      activity:
        "Shram Daan by NSS Unit of Kalinga at Village - Palaud for Swachchhata Abhiyan",
      unit: "NSS",
      year: "2018–2019",
      students: "86"
    },
    {
      activity:
        "Domestic Violence Against Women Awareness Program organised by NSS",
      unit: "NSS",
      year: "2018–2019",
      students: "21"
    },
    {
      activity:
        "Fire and Evacuation drill conducted by NSS at Kalinga University",
      unit: "NSS",
      year: "2018–2019",
      students: "89"
    },
    {
      activity:
        "Social Harassment at Workplace - An Analysis Program Conducted by NSS & Students of Kalinga",
      unit: "NSS",
      year: "2018–2019",
      students: "56"
    },
    {
      activity:
        "Workshop on Nutrition and Health by NSS Kalinga & Students at Village Kuhera",
      unit: "NSS",
      year: "2018–2019",
      students: "51"
    },
    {
      activity:
        "Swachchha Bharat Abhiyan Rally by students of Kalinga with NSS Team at Naya Raipur",
      unit: "NSS",
      year: "2018–2019",
      students: "60"
    },
    {
      activity:
        "Legal Aid Camp by Law Dept., organised by NSS at Village Kuhera",
      unit: "NSS",
      year: "2018–2019",
      students: "48"
    },
    {
      activity:
        "Legal Awareness in Vulnerable Sections of Society at Palaud Village by NCC Kalinga & Students",
      unit: "NCC",
      year: "2018–2019",
      students: "43"
    },
    { activity: "Blood Donation Camp by the Red Cross Society", unit: "RED CROSS", year: "2018–2019", students: "18" },
    { activity: "Voluntary Services given at Blind School, Raipur", unit: "NSS", year: "2018–2019", students: "39" },
    {
      activity:
        "Shram Daan by NSS Unit at Village - Kotni for Swachchhata Abhiyan",
      unit: "NSS",
      year: "2018–2019",
      students: "88"
    },
    {
      activity:
        "Free Health Camp for Villagers of Kotni by Pharmacy Student & NCC Team",
      unit: "NCC & TEAM",
      year: "2018–2019",
      students: "58"
    },
    {
      activity:
        "No Plastic Drive by Kalinga University Students & NSS Team at Naya Raipur",
      unit: "NSS",
      year: "2018–2019",
      students: "85"
    },
    {
      activity:
        "Saksharta Mission Rally by NSS & Students of Kalinga at Village Tandul",
      unit: "NSS",
      year: "2018–2019",
      students: "55"
    },
    {
      activity:
        "NSS One-day Workshop on promoting Chhattisgarh Culture at Purkhauti Muktangan, Naya Raipur",
      unit: "NSS",
      year: "2018–2019",
      students: "66"
    },
    {
      activity:
        "Camp for Awareness on Organ Donation at Kalinga University",
      unit: "NCC",
      year: "2018–2019",
      students: "56"
    },
    {
      activity:
        "Rally for No Tobacco Usage Awareness in Naya Raipur",
      unit: "NCC",
      year: "2018–2019",
      students: "64"
    },
    {
      activity:
        "Health & Hygiene awareness rally in Naya Raipur by NSS",
      unit: "NSS",
      year: "2018–2019",
      students: "67"
    },
    {
      activity:
        "Legal Awareness Camp at Kalinga University Campus",
      unit: "NCC",
      year: "2018–2019",
      students: "69"
    },
    {
      activity:
        "15th August - Celebration of Independence Day at Kalinga University",
      unit: "NCC & NSS with Students",
      year: "2018–2019",
      students: "53"
    },
    {
      activity:
        "Legal Aid Camp by Law Dept., organised by NSS Kalinga & Students at Village Kuhera",
      unit: "NSS",
      year: "2018–2019",
      students: "62"
    },
    {
      activity:
        "Digital Literacy Campaign at Village Kuhera by NSS Kalinga & Students",
      unit: "NSS",
      year: "2018–2019",
      students: "41"
    },
    {
      activity:
        "Saksharta Mission Rally by NCC & Students of Kalinga at Village Kotra Bhata",
      unit: "NSS",
      year: "2018–2019",
      students: "57"
    },
    {
      activity:
        "No Vehicle Day Celebrated, NSS Students at Kalinga University",
      unit: "NSS",
      year: "2018–2019",
      students: "58"
    },
    {
      activity:
        "Nutrition and Health Awareness drive by NSS Students at Naya Raipur Sec 27 & 29",
      unit: "NSS",
      year: "2018–2019",
      students: "59"
    },
    {
      activity:
        "Domestic Violence Against Women Rally organised by NSS Kalinga & Students in Naya Raipur",
      unit: "NSS",
      year: "2018–2019",
      students: "62"
    },
    {
      activity:
        "Sadbhavana Divas Celebration by NCC & NSS in Kalinga Campus",
      unit: "NCC & NSS",
      year: "2018–2019",
      students: "74"
    },
    {
      activity:
        "Rights of Women and Children. A Violation of Human Rights awareness drive organised by NCC Kalinga & Students in Sector 27, Naya Raipur",
      unit: "NCC",
      year: "2018–2019",
      students: "56"
    },
    {
      activity:
        "No Alcohol Consumption Campaign at Village Kotni by NCC Kalinga & Students",
      unit: "NCC",
      year: "2018–2019",
      students: "66"
    },
    { activity: "Blood Donation Camp by the Red Cross Society", unit: "RED CROSS", year: "2018–2019", students: "23" },
    {
      activity:
        "Beti Bachao - Beti Padhao Rally organised by NCC Kalinga & Students at Village Kotra Bhata",
      unit: "NCC",
      year: "2018–2019",
      students: "62"
    },
    {
      activity:
        "Tree Plantation at Kalinga University Campus by NSS Kalinga & Students",
      unit: "NSS",
      year: "2018–2019",
      students: "73"
    },
    {
      activity:
        "Rally for Energy Saving by NCC & NSS at Kalinga University Campus and Nearby Villages",
      unit: "NCC & NSS",
      year: "2018–2019",
      students: "58"
    },
    {
      activity:
        "Legal Aid Camp by Law Dept., organised by NSS at Village Tandul",
      unit: "NSS",
      year: "2018–2019",
      students: "48"
    },
    {
      activity:
        "No Plastic Drive by Kalinga University Student & NSS Team",
      unit: "NSS",
      year: "2018–2019",
      students: "24"
    },
    {
      activity:
        "Plantation Drive organised by NSS at Village Kuhera",
      unit: "NSS",
      year: "2018–2019",
      students: "48"
    },
    {
      activity:
        "No Alcohol Consumption Campaign at Village Kuhera by NCC Kalinga & Students",
      unit: "NCC",
      year: "2018–2019",
      students: "65"
    }
  ]
}



    
  ]}
  overflowX={false}

/>

      
       <Gallery images={defaultGalleryImages} />
    </>
  );
};

export default page;

/* ===================== ADDED COMPONENT ===================== */



/* ---------------- MAIN COMPONENT ---------------- */

 function SportsFacilitiesTabs() {
  const tabs = useMemo(
    () => [
      { id: "y2024", label: "2024–25" },
      { id: "y2023", label: "2023–24" },
      { id: "y2022", label: "2022–23" },
      { id: "y2021", label: "2021–22" },
      { id: "y2020", label: "2020–21" },
      { id: "y2019", label: "2019–20" },
       {id: "y2018", label: "2018–19" },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState("y2024");

  const toggleAccordion = (id) => {
    setActiveTab((prev) => (prev === id ? "" : id));
  };

  const renderTabContent = (tabId) => {
    if (tabId === "y2024")
      return <EventsTable title="Academic Year 2024–25" data={events2024} />;

    if (tabId === "y2023")
      return <EventsTable title="Academic Year 2023–24" data={events2023} />;

    if (tabId === "y2022")
      return <EventsTable title="Academic Year 2022–23" data={events2022} />;

    if (tabId === "y2021")
      return <EventsTable title="Academic Year 2021–22" data={events2021} />;

    if (tabId === "y2020")
      return <EventsTable title="Academic Year 2020-21" data={events2020} />;

    if (tabId === "y2019")
      return <EventsTable title="Academic Year 2019-20" data={events2019} />;

    if (tabId === "y2018")
      return <EventsTable title="Academic Year 2018-19" data={events2018} />;

    return null;
  };

  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#0d4a75] p-4 md:p-6">
        {/* ---------------- DESKTOP TABS (md+) ---------------- */}
        <div className="hidden md:flex gap-3 overflow-x-auto pb-2">
          {tabs.map((t) => {
            const isActive = t.id === activeTab;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                className={[
                  "whitespace-nowrap rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[var(--button-red)] text-white border-white/10"
                    : "bg-white text-[var(--foreground)] border-white/30 hover:bg-white/95",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* White inner card */}
        <div className="mt-4 rounded-2xl bg-white p-6 md:p-10">
          {/* ---------------- MOBILE ACCORDION (<md) ---------------- */}
          <div className="md:hidden space-y-3">
            {tabs.map((t) => {
              const isOpen = t.id === activeTab;
              return (
                <div
                  key={t.id}
                  className="rounded-xl border border-black/10 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(t.id)}
                    className={[
                      "w-full flex items-center justify-between px-4 py-3 text-left transition-colors",
                      isOpen ? "bg-black/5" : "bg-white",
                    ].join(" ")}
                  >
                    <span className="font-plus-jakarta-sans font-semibold text-[var(--foreground)]">
                      {t.label}
                    </span>

                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className={[
                        "transition-transform",
                        isOpen ? "rotate-180" : "rotate-0",
                      ].join(" ")}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="px-4 py-6">
                      {renderTabContent(t.id)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ---------------- DESKTOP CONTENT (md+) ---------------- */}
          <div className="hidden md:block">
            {renderTabContent(activeTab)}
          </div>
        </div>
      </div>
    </section>
  );
}

function EventsTable({ title, data }) {
  const columns = [
    {
      key: "date",
      label: "Date of Event / Competition",
      width: "w-48",
    },
    {
      key: "name",
      label: "Name of Event / Competition",
      width: "flex-1",
    },
  ];

  const tableData = data.map((item) => ({
    date: item.date,
    name: item.name,
  }));

  return (
    <div>
      <h2 className="text-center mb-[20px]">
        {title}
      </h2>

    
      <div className="max-h-[450px] overflow-y-auto">
        <DataTable
          columns={columns}
          data={tableData}
          overflowX={true}
        />
      </div>
    </div>
  );
}
/* ---------------- DATA (YEAR-WISE) ---------------- */
const events2024 = [
  { date: "15.07.2025", name: "Redefining Menstrual Stigma as a matter of Menstrual Hygiene: Behavior Shift to Empower Skillful Youth" },
  { date: "17.04.2025", name: "Online Seminar on Six Sigma" },
  { date: "15.04.2025", name: "Prototype/Process Design and Development SDG" },
  { date: "14.04.2025", name: "Constitution of India: Foundation, Right and Governance in association with Pro Bono Club and Legal Aid Cell, Kalinga University" },
  { date: "12.04.2025", name: "Foundation Day Celebration of Arunachal Pradesh, Rajasthan and Odisha states under ‘Ek Bharat Shreshtha Bharat’." },
  { date: "10.04.2025", name: "Live Model Exhibition on “Rainwater Harvesting”" },
  { date: "08.04.2025", name: "Workshop on “Raising Capital & Managing Finance”" },
  { date: "07.04.2025", name: "TLM Exhibition Related to SDG" },
  { date: "06.04.2025 to 11.04.2025", name: "AIU Drop Ball Tournament" },
  { date: "24.03.2025", name: "Online Workshop on Business Model Canvas" },
  { date: "24.03.2025", name: "Guest Lecture Related to SDG" },
  { date: "22.03.2025 to 26.03.2025", name: "19th Senior & 13th Sub Junior National Woodball Championship -2024-25" },
  { date: "21.03.2025 to 23.03.2025", name: "Technovate Intercollege/University Sports fest 2025" },
  { date: "27.02.2025", name: "Model making Competition Related to SDG" },
  { date: "27.02.2025", name: "Model Making Competition" },
  { date: "25.02.2025", name: "IEEE Membership Benefits Awareness-2025" },
  { date: "24.02.2025", name: "Woodball Selection Trial among Ku Students (Men & Women)" },
  { date: "22.02.2025 to 23.01.2025", name: "SAMARTH Intercollegiate/University Sports Fest 2025" },
  { date: "13.02.2025 to 14.02.2025", name: "KU-Hackathon 2025" },
  { date: "11.02.2025 to 22.02.2025", name: "AIU - East Zone Inter University Cricket Championship 2024-25" },
  { date: "08.02.2025", name: "Gully Cricket Tournament for Hostel Students" },
  { date: "08.02.2025", name: "FIT INDIA Fitness Program for Hostel Students" },
  { date: "07.02.2025 to 10.02.2025", name: "AIU - All India Interuniversity Woodball (Men & Women) Championship-2024-25" },
  { date: "07.02.2025", name: "Poster making competition on the constitution of India" },
  { date: "04.02.2025", name: "Inter University Cultural Competition" },
  { date: "31.01.2025 to 02.02.2025", name: "Asmita Khelo India Pencak Silat Women’s League (East Zone)" },
  { date: "28.01.2025 to 14.02.2025", name: "38th National Games of India (NET Ball)" },
  { date: "26.01.2025", name: "Republic Day Celebration" },
  { date: "25.01.2025", name: "One Day Hands-on Training: Python, Coding & Robotics" },
  { date: "25.01.2025", name: "Indoor games for hostel students" },
  { date: "24.01.2025", name: "Coding Competition" },
  { date: "23.01.2025 to 26.01.2025", name: "SAMARTH Intercollegiate/University Sports Fest 2025" },
  { date: "18.01.2025", name: "Tug of War (Men & Women) competition for hostel students" },
  { date: "14.01.2025 to 17.01.2025", name: "AIU - All India Interuniversity Wrestling Championship (Women) -2024-25" },
  { date: "10.01.2025 to 12.01.2025", name: "Tribal Global Fest -2025 at Rama Devi Womens University Bhubaneshwar, Odisha" },
  { date: "07.01.2025", name: "State Foundation, Uttrakhand, Rajbhavan at Raipur" },
  { date: "05.01.2025 to 12.01.2025", name: "AIU - All India Interuniversity Wrestling Championship (Men) -2024-25" },
  { date: "21.12.2024", name: "Seminar on Writing an Effective IEEE Proposal for Funding" },
  { date: "21.12.2024", name: "Christmas Day Celebration" },
  { date: "29.11.2024 to 01.12.2024", name: "5th Senior Open State Woodball Championship -2024" },
  { date: "22.11.2024 to 23.11.2024", name: "ESG & Sustainability Symposium IDEATHON 4.0" },
  { date: "20.11.2024", name: "Inter-College Quiz Competition ‘Brain Brawl’" },
  { date: "14.11.2024 to 17.11.2024", name: "Oriana Intercollegiate/University Sports Fest 2024" },
  { date: "06.11.2024 to 10.11.2024", name: "AIU - All India Interuniversity Fencing Championship -2024-25" },
  { date: "25.10.2024", name: "Diwali Milan Celebration" },
  { date: "19.10.2024", name: "Cricket Selection Trial among Ku Students (Men & Women)" },
  { date: "18.10.2024 to 20.10.2024", name: "Colossus Intercollegiate/University Sports Fest 2024" },
  { date: "11.10.2024", name: "Garba Night" },
  { date: "07.10.2024", name: "Quiz Competition “Departmental IQ Duel”" },
  { date: "30.09.2024", name: "IEEE MP Section Branch Counsellors Meet (For Chhattisgarh Region)" },
  { date: "30.09.2024", name: "Guest Lecture on High Rise Buildings, Issues and Concerns Organised" },
  { date: "29.09.2024", name: "Ratri Before Navratri" },
  { date: "28.09.2024", name: "Kabaddi Selection Trial among Ku Students (Men & Women)" },
  { date: "25.09.2024", name: "Celebrating World Pharmacist Day. Rangoli competition, Poster making competition and Quiz competition" },
  { date: "21.09.2024", name: "Volleyball Selection Trial among Ku Students (Men)" },
  { date: "21.09.2024", name: "Basketball Selection Trial among Ku Students (Men & Women)" },
  { date: "17.09.2024", name: "Celebrating Vishwakarma puja" },
  { date: "16.09.2024 to 20.09.2024", name: "One Week Hands-on-Training on ROBOTICS" },
  { date: "15.09.2024", name: "Intra University Football Championship" },
  { date: "14.09.2024", name: "Awareness Session on Fundamental Right" },
  { date: "13.09.2024", name: "World Ozone Day-2024" },
  { date: "12.09.2024 to 18.09.2024", name: "Niraj Agarwal Memorial Inter Collegiate Football Championship 2024" },
  { date: "07.09.2024", name: "Speech and Essay Writing Competition on Occasion of ICDABS" },
  { date: "31.08.2024", name: "Inter Hostel Kabaddi (Men & Women) Competition" },
  { date: "30.08.2024", name: "Football Selection Trial among Ku Students (Men)" },
  { date: "24.08.2024", name: "Inter Hostel Volleyball (Men) & Basketball (Men & Women) Competitions" },
  { date: "22.08.2024", name: "Club Activity (Quiz Competition)" },
  { date: "17.08.2024", name: "JUDEX 2.0 - Surana & Surana National Human Rights Moot Court Competition" },
  { date: "17.08.2024", name: "Tug of War (Men & Women) competition for hostel students" },
  { date: "18.08.2024", name: "“Raksha Bandhan Celebration 2024”" },
  { date: "15.08.2024 to 25.08.2024", name: "26th World Para –Arm-wrestling Championship -2024" },
  { date: "15.08.2024", name: "78th Independence Day Celebration" },
  { date: "12.08.2024", name: "Fuel cell for Electric Vehicle Applications" },
  { date: "05.08.2024 to 09.08.2024", name: "Hands on IOT Training: Exposing Rural Students to Opportunities in STEM" },
  { date: "04.08.2024", name: "Friendship Day Celebration" },
  { date: "10.05.2024", name: "Badminton Selection Trial among Ku Students (Men)" },
  { date: "01.04.2024 to 09.04.2024", name: "Skill Development Workshop: Micro Teaching" }
];
const events2023 = [
  { date: "06.06.2024 to 10.06.2024", name: "Para Armwrestling Championship 2024 at Nagpur Maharashtra" },
  
  { date: "02.06.2024", name: "Mango Fest 2024" },
  { date: "16.05.2024 to 20.05.2024", name: "All India Inter-University Drop Ball Competition" },
  { date: "08.05.2024 to 10.05.2024", name: "AIU Zonal Inter University Woodball (M&W) Tournament 2023-2024 at Bhopal" },
  { date: "15.04.2024", name: "Blood Donation Camp" },
  { date: "23.03.2024", name: "Holi Milan Celebration" },
  { date: "09.03.2024", name: "Annual Fest Kalinga Utsav 2023-24" },
  { date: "27.02.2024", name: "Foundation Day Celebration under Ek Bharat Shrestha Bharat Abhiyan at Durbar Hall Raj Bhavan" },
  { date: "25.02.2024", name: "Inter College Fest 2024" },
  { date: "14.02.2024", name: "Awareness Session" },
  { date: "03.02.2024", name: "Pride of India" },
  { date: "24.01.2024", name: "Foundation Day Programme of organise at Darbar Hall, Raj Bhavan, Raipur" },

  { date: "27.11.2023", name: "Induction Programme 'First- Step 2023 for Students B.Ed 1st Year" },
  { date: "07.11.2023", name: "Diwali Milan Ceremony" },
  { date: "02.11.2023", name: "Inter University Events AIIMS" },
  { date: "05.11.2023", name: "" },
  { date: "27.10.2023", name: "Hidayatullah National Law University, Raipur" },
  { date: "29.10.2023", name: "Ras Garba at Hotel Grand Imperia VIP Road, Raipur" },
  { date: "21.10.2023", name: "" },
  { date: "20.10.2023", name: "Garba Night, Kalinga Campus" },
  { date: "08.10.2023", name: "Ratri before Navratri" },

  { date: "13.09.2023", name: "Day 2 Induction Programme 'First- Step 2023 for Students CS & IT 1st Year" },
  { date: "12.09.2023", name: "Induction Programme 'First- Step 2023 for Students CS & IT 1st Year" },
  { date: "08.09.2023", name: "Day 2 Induction Programme 'First- Step 2023 for Students Science 1st Year" },
  { date: "06.09.2023", name: "Induction Programme 'First- Step 2023 for Students Science 1st Year" },
  { date: "31.08.2023", name: "Day 2 Induction Programme 'First- Step 2023 for Students Arts & Humanities 1st Year" },
  { date: "29.08.2023", name: "Induction Programme 'First- Step 2023 for Students Arts & Humanities 1st Year" },
  { date: "25.08.2023", name: "Day 2 Induction Programme 'First- Step 2023 for Students Pharmacy 1st Year" },
  { date: "24.08.2023", name: "Induction Programme 'First- Step 2023 for Students Pharmacy 1st Year" },
  { date: "24.08.2023", name: "Day 2 Departmental Induction Programme 'First- Step 2023 for Students Law 1st Year" },
  { date: "23.08.2023", name: "Induction Programme 'First- Step 2023 for Students Law 1st Year" },
  { date: "22.08.2023", name: "Induction Programme 'First- Step 2023 for Students Engineering & Technology 1st Year" },
  { date: "18.08.2023", name: "Day 2 Induction Programme 'First- Step 2023 for Students B.Com 1st Year" },
  { date: "17.08.2023", name: "Induction Programme 'First- Step 2023 for Students B.Com 1st Year" },
  { date: "10.08.2023", name: "Day 2 Departmental Induction Programme 'First- Step 2023 for Students BBA and MBA 1st Year" },
  { date: "09.08.2023", name: "Induction Programme 'First- Step 2023 for Students BBA and MBA 1st Year" },
  { date: "02.08.2023", name: "Induction Programme 'First- Step 2023 for Credit Transfer & Lateral Entry Students" }
];
const events2022 = [
  { date: "06.06.2024 to 10.06.2024", name: "Para Armwrestling Championship 2024 at Nagpur Maharashtra" },
  { date: "02.06.2024", name: "Mango Fest 2024" },
  { date: "16.05.2024 to 20.05.2025", name: "All India Inter-University Drop Ball Competition" },
  { date: "08.05.2024 to 10.05.2024", name: "AIU Zonal Inter University Woodball (M&W) Tournament 2023-2024 at Bhopal" },
  { date: "15.04.2024", name: "Blood Donation Camp" },
  { date: "23.03.2024", name: "Holi Milan Celebration" },
  { date: "09.03.2024", name: "Annual Fest Kalinga Utsav 2023-24" },
  { date: "27.02.2024", name: "Foundation Day Celebration under Ek Bharat Shrestha Bharat Abhiyan at Durbar Hall Raj Bhavan" },
  { date: "25.02.2024", name: "Inter College Fest 2024" },
  { date: "14.02.2024", name: "Awareness Session" },
  { date: "03.02.2024", name: "Pride of India" },
  { date: "24.01.2024", name: "Foundation Day Programme of organise at Darbar Hall, Raj Bhavan, Raipur" },

  { date: "27.11.2023", name: "Induction Programme 'First- Step 2023 for Students B. Ed 1st Year" },
  { date: "07.11.2023", name: "Diwali Milan Ceremony" },
  { date: "02.11.2023", name: "Inter University Events AIIMS" },
  { date: "05.11.2023", name: "" },
  { date: "27.10.2023", name: "Hidayatullah National Law University, Raipur" },
  { date: "29.10.2023", name: "Ras Garba at Hotel Grand Imperia VIP Road, Raipur" },
  { date: "21.10.2023", name: "" },
  { date: "20.10.2023", name: "Garba Night, Kalinga Campus" },
  { date: "08.10.2023", name: "Ratri before Navratri" },

  { date: "13.09.2023", name: "Day 2 Induction Programme 'First- Step 2023 for Students CS & IT 1st Year" },
  { date: "12.09.2023", name: "Induction Programme 'First- Step 2023 for Students CS & IT 1st Year" },
  { date: "08.09.2023", name: "Day 2 Induction Programme 'First- Step 2023 for Students Science 1st Year" },
  { date: "06.09.2023", name: "Induction Programme 'First- Step 2023 for Students Science 1st Year" },
  { date: "31.08.2023", name: "Day 2 Induction Programme 'First- Step 2023 for Students Arts & Humanities 1st Year" },
  { date: "29.08.2023", name: "Induction Programme 'First- Step 2023 for Students Arts & Humanities 1st Year" },
  { date: "25.08.2023", name: "Day 2 Induction Programme 'First- Step 2023 for Students Pharmacy 1st Year" },
  { date: "24.08.2023", name: "Induction Programme 'First- Step 2023 for Students Pharmacy 1st Year" },
  { date: "24.08.2023", name: "Day 2 Departmental Induction Programme 'First- Step 2023 for Students Law 1st Year" },
  { date: "23.08.2023", name: "Induction Programme 'First- Step 2023 for Students Law 1st Year" },
  { date: "22.08.2023", name: "Induction Programme 'First- Step 2023 for Students Engineering & Technology 1st Year" },
  { date: "18.08.2023", name: "Day 2 Induction Programme 'First- Step 2023 for Students B. Com 1st Year" },
  { date: "17.08.2023", name: "Induction Programme 'First- Step 2023 for Students B. Com 1st Year" },
  { date: "10.08.2023", name: "Day 2 Departmental Induction Programme 'First- Step 2023 for Students BBA and MBA 1st Year" },
  { date: "09.08.2023", name: "Induction Programme 'First- Step 2023 for Students BBA and MBA 1st Year" },
  { date: "02.08.2023", name: "Induction Programme 'First- Step 2023 for Credit Transfer & Lateral Entry Students" }
];

const events2021 = [
  { date: "20.06.2023", name: "Goa and Telangana folk dance under the Ek Bharat Shreshth Bharat Program at Darbar Hall, Rajbhawan" },
  { date: "27.05.2023", name: "Exhibition of Sambalpuri Sarees" },
  { date: "21.05.2023", name: "MOM & ME Kids Fashion Show Competition" },
  { date: "21.05.2023", name: "Himachal Pradesh & Sikkim State Foundation Day Celebration at Rajbhawan Darbar Hall" },
  { date: "23.04.2023 to 24.04.2023", name: "National Wrestling Tournament 2023" },
  { date: "20.04.2023", name: "IEEE Day Celebrations" },
  { date: "19.04.2023", name: "Intra University Song & Dance Competition" },
  { date: "02.04.2023 to 06.04.2023", name: "AIU Inter University Woodball Tournament at Suresh Gyan Vihar University, Jaipur, Rajasthan" },
  { date: "13.03.2023", name: "Grand Film Festival and Award Night" },
  { date: "23.02.2023", name: "7th Annual Sports Fest 2023" },
  { date: "23.02.2023", name: "7th Annual Sports Fest 2023" },
  { date: "21.02.2023", name: "7th Annual Sports Fest 2023" },
  { date: "15.02.2023", name: "Cricket Knockout Matches Girls" },
  { date: "14.02.2023", name: "Cricket Knockout Matches Girls" },
  { date: "13.02.2023", name: "Cricket Knockout Matches Girls" },
  { date: "11.02.2023", name: "Pride of India" },
  { date: "11.02.2023", name: "Cricket Knockout Matches Boys" },
  { date: "08.02.2023", name: "Chhattisgarh ka Sanskritik Vaibhav" },
  { date: "04.02.2023", name: "Cricket Knockout Matches Boys" },
  { date: "26.01.2023", name: "74th Republic Day Celebration" },
  { date: "26.01.2023", name: "Run with Tiranga" },
  { date: "22.01.2023", name: "Kite Fest" },

  { date: "21.11.2022", name: "Kathak Dance in collaboration with Jan Shikshan Sansthan, Raipur" },
  { date: "19.11.2022", name: "Kalinga Utsav 2022: A Cultural Bonanza!" },
  { date: "01.11.2022", name: "The Football, Cricket and Basketball teams participate in the AIIMS Raipur Sports Fest" },
  { date: "13.10.2022 to 15.10.2022", name: "Global Tribal Queen Contest 2022" },
  { date: "07.10.2022", name: "Induction Program First-Step 2022 for Students of Engineering and Technology, Bachelor of Design, BA in Film Making, M.Pharmacy and M.Design 1st Year" },
  { date: "04.10.2022", name: "Garba Night" },
  { date: "03.10.2022", name: "Inauguration of Film Studio for BA Film Making" },
  { date: "02.10.2022", name: "Kalinga University participated in “RAS GARBA 2022” at Grand Emperia" },
  { date: "26.09.2022", name: "Induction Program First-Step 2022 for Students of CS & IT, FD, ID and Science 1st Year" },
  { date: "25.09.2022", name: "Ratri before Navratri" },
  { date: "22.09.2022", name: "Induction Program First-Step 2022 for Students of BA, BSW and BA (J&MC)" },
  { date: "20.09.2022", name: "AD MAD show by the Department of Fashion Design" },
  { date: "15.09.2022", name: "Induction Program First-Step 2022 for Students of B.Com., B.Com. Honours with Banking and Finance and B.Com. Honours (with CA/CS) ICWA COACHING 1st Year" },
  { date: "14.09.2022", name: "Induction Program First-Step 2022 for Students of LLB, LLM, BA LLB and BBA LLB 1st Year" },
  { date: "13.09.2022", name: "Induction Program First-Step 2022 for Students BA LLB and BBA LLB 1st Year" },
  { date: "13.09.2022", name: "Shera Football Tournament, Raipur, Chhattisgarh" },
  { date: "09.09.2022", name: "Induction Program First-Step 2022 for Students B.Pharmacy 1st Year" },
  { date: "05.09.2022", name: "Celebration Teachers’ Day" },
  { date: "25.08.2022 & 26.08.2022", name: "ITM Chess Cup 2022 (Open state level)" },
  { date: "26.08.2022", name: "Induction Program First-Step 2022 for Students D.Pharmacy 1st Year" },
  { date: "25.08.2022", name: "Departmental Induction organised by the Faculty of Commerce & Management" },
  { date: "24.08.2022", name: "Induction Program First-Step 2022 for Students BBA and MBA 1st Year" }
];
const events2020 = [
  { date: "27.06.2022 to 30.06.2022", name: "Kalinga University is participating in the All India Inter University Woodball (Boys & Girls) Competition, at Jagannath University, Jaipur, from 27th to 30th June 2022" },
  { date: "25.06.2022", name: "Screening for Tribal Queen Global Contest, 2022 on 25th June 2022, Kalinga University, Naya Raipur" },
  { date: "25.05.2022", name: "Celebration Africa Day organises a Football match, Kalinga FC VS Champion FC Raipur" },
  { date: "19.05.2022 to 21.05.2022", name: "Sports Festival organised by BIT Raipur" },
  { date: "13.05.2022", name: "Musical Event to Inspire Students to Learn Music" },
  { date: "06.05.2022 to 07.05.2022", name: "Basketball & Football 2022 Competition" },
  { date: "28.04.2022 to 07.05.2022", name: "AIU Men’s Cricket Tournament at Bhubaneswar, Odisha" },
  { date: "28.04.2022", name: "Farewell by B.Pharmacy 6th Sem. The Hotel Dive, Colours Mall, Raipur" },
  { date: "26.04.2022", name: "Fresher’s Party of the Department of Fashion Design at Ambuja Mall" },
  { date: "18.04.2022", name: "Fresher party at Hotel Sheetal International" },
  { date: "14.04.2022", name: "Felicitation ceremony organised by UNICEF and CMSR Foundation at Hotel Courtyard - The Marriott" },
  { date: "14.04.2022", name: "Fresher Party at IP Club, New Raipur" },
  { date: "12.04.2022", name: "Fresher Party by Biotechnology, B.Sc. Biotechnology at Daiichi Hotels, Raipur" },
  { date: "11.04.2022", name: "Advertisement analysis competition" },
  { date: "01.04.2022 to 02.04.2022", name: "Badminton Tournament" },
  { date: "01.04.2022", name: "Fresher party by Computer Science BCA 2nd, 4th & 6th Sem, B.Sc. (CS) 2nd, 4th & 6th Sem, MCA 2nd & 4th Sem, M.Sc (CS) 4th Sem at The Spring Arena, Raipur" },

  { date: "22.03.2022", name: "National Level Sports Quiz Competition" },
  { date: "15.03.2022", name: "Hand Made Creativity Competition. Express your knowledge by picturisation - Waste out of Best from Expired Medicine" },
  { date: "11.03.2022", name: "Red Bull Campus Cricket Selection trials" },
  { date: "10.03.2022", name: "Poster making competition" },
  { date: "07.03.2022", name: "Professional Awards \"Naari Shakti Ko Salam\" on International Women’s Day" },
  { date: "05.03.2022", name: "Launching of Kalinga Online Radio App" },
  { date: "25.02.2022 to 27.02.2022", name: "National Woodball League - 2022, organised by the Woodball Association of Maharashtra, under the Aegis of Woodball Association of India" },
  { date: "10.02.2022", name: "Offline Induction Program First-Step 2021 for International 1st Year Students" },
  { date: "05.02.2022", name: "Maha Kavi Nirala Jayanti" },
  { date: "05.02.2022", name: "Saraswati Puja on the occasion of Basant Panchami at Kalinga University campus" },
  { date: "26.01.2022", name: "73rd Republic Day Celebration at University Campus" },
  { date: "24.01.2022", name: "Induction Program First-Step 2021 for B.Ed. 1st Year Students" },
  { date: "14.01.2022", name: "SWOT Analysis Competition for students of B.Com. & BBA 1st Year" },

  { date: "25.12.2021", name: "Kalinga University Celebrates Christmas with Great Zeal" },
  { date: "11.12.2021", name: "Debate Competition" },
  { date: "27.11.2021", name: "Poster Presentation" },
  { date: "27.11.2021", name: "Mathematics Quiz Competition" },
  { date: "26.11.2021 to 27.11.2021", name: "Ideathon Business Plan Competition" },
  { date: "13.11.2021", name: "Student Newspaper Department of Chemistry" },
  { date: "12.11.2021", name: "Induction Program First-Step 2021 for LLM First Year Students" },
  { date: "29.10.2021", name: "Induction Program First-Step 2021 for M.Com. (B & F) First Year Students" },
  { date: "28.10.2021", name: "Induction Program First-Step 2021 for B. Design First Year Students" },
  { date: "28.10.2021", name: "Academic activity on “Article Writing – Fashion Communication”" },
  { date: "28.10.2021", name: "Student PPT Presentation by M.Sc. 3rd Semester Mathematics" },
  { date: "27.10.2021", name: "Induction Program First-Step 2021 for B.Sc. & M.Sc. Science First Year Students" },
  { date: "26.10.2021", name: "Induction Program First-Step 2021 for Engineering & Technology (CS & IT) First Year Students" },
  { date: "25.10.2021", name: "National Webinar on Woodball – An Introduction" },
  { date: "23.10.2021", name: "Induction Program First-Step 2021 for Bachelor of Science (Fashion Design & Interior Design) First Year Students" },
  { date: "22.10.2021", name: "Induction Program First-Step 2021 for Arts & Humanities (BA, BJMC, BSW, MA (Geography & Education)) First Year Students" },
  { date: "21.10.2021", name: "Online Induction Program First-Step 2021 for BA LLB and BBA LLB First Year Students" },
  { date: "13.10.2021", name: "Online Induction Program First-Step 2021 for M.Tech (Civil) First Year Students" },
  { date: "11.10.2021", name: "Online Quiz Competition Phase – II" },
  { date: "09.10.2021", name: "Poster Making Fashion Safety" },
  { date: "06.10.2021", name: "Online Induction Program First-Step 2021 for MBA First Year Students" },
  { date: "03.10.2021", name: "Online Induction Program First-Step 2021 for B.Pharmacy First Year Students" },
  { date: "03.10.2021", name: "Dazzling Divas Fashion Show, dated 3rd October 2021, by the Fashion Design Department at Magneto Mall" },
  { date: "01.10.2021", name: "Poster Making Competition" },
  { date: "29.09.2021", name: "Online Induction Program First-Step 2021 for DCA & PGDCA First Year Students" },
  { date: "28.09.2021", name: "Online Induction Program First-Step 2021 for MCA First Year Students" },
  { date: "27.09.2021", name: "Online Quiz Competition Phase – I" },
  { date: "23.09.2021", name: "Online Induction Program First-Step 2021 for LLB 1st Year Students" },
  { date: "21.09.2021", name: "Online Induction Program First-Step 2021 for B.Com. 1st Year Students" },
  { date: "17.09.2021", name: "Vishwakarma Puja Celebration" },
  { date: "14.09.2021", name: "Dialogue competition \"Apni Baat\"" },
  { date: "14.09.2021", name: "Online Induction Program First-Step 2021 for D.Pharmacy 1st Year Students" },
  { date: "10.09.2021", name: "SLIDE HUNT (PPT Making Competition)" },
  { date: "07.09.2021", name: "General Quiz Competition" },
  { date: "02.09.2021", name: "Online Induction Program First-Step 2021 for BBA 1st Year Students" },
  { date: "27.08.2021 to 28.08.2021", name: "Experiential Learning Advertisement Review & Its Impact competition" },
  { date: "26.08.2021", name: "Article writing and presentation on Application of Sequences & Series" },
  { date: "21.08.2021", name: "Article Writing Competition" },
  { date: "21.08.2021", name: "Book Review Competition under Professor Amartya Sen Chair" },
  { date: "18.08.2021", name: "Activity on “National Leader Role Play Competition”" },
  { date: "14.08.2021", name: "Inauguration of Pharma Club" },
  { date: "13.08.2021", name: "Science & Green Club Orientation" },
  { date: "10.08.2021", name: "Inauguration Ceremony - 'SWAGAT 2021' - Avishkar Club of Civil Engineering" },
  { date: "07.08.2021", name: "Quiz Competition" },
  { date: "29.07.2021", name: "Woodball players felicitated with Gold Medals and certificates" }
];
const events2019 = [
  { date: "10.04.2021", name: "Online Cultural Programs (Induction) to Welcome Newly Admitted Students of the B.Ed. First Year Students" },
  { date: "08.03.2021", name: "Online Cultural Programs (Induction) to Welcome Newly Admitted Students of Education" },
  { date: "16.02.2021", name: "“Basant Panchami” Saraswati Puja" },

  { date: "01.12.2020", name: "Online Cultural Programs (Induction) to Welcome Newly Admitted Students of BPED, LLB & LLM departments" },
  { date: "30.11.2020", name: "Online Cultural Programs (Induction) to Welcome Newly Admitted Students of the Department of All PG" },
  { date: "24.11.2020", name: "Online Cultural Programs (Induction) to Welcome Newly Admitted Engineering Students (MTCE/MTCS)" },
  { date: "18.11.2020", name: "Online Cultural Programs (Induction) to Welcome Newly Admitted Students of the Department of Pharmacy" },
  { date: "14.10.2020", name: "Online Cultural Programs (Induction) to Welcome Newly Admitted Students of the Department of Law" },
  { date: "07.10.2020", name: "Online Cultural Programs (Induction) to Welcome Newly Admitted Students of the Department of Science" },
  { date: "05.10.2020", name: "Online Cultural Programs (Induction) to Welcome Newly Admitted Students of all B.Tech and Diploma Engineering" },
  { date: "01.10.2020", name: "Online Cultural Programs (Induction) to Welcome Newly Admitted International Students" },
  { date: "28.09.2020", name: "Online Cultural Programs (Induction) to Welcome newly admitted students of the Department of Arts & Humanities" },
  { date: "21.09.2020", name: "Online Cultural Programs (Induction) to Welcome Newly Admitted Students of BBA & B.Com." },

  { date: "08.03.2020", name: "Celebration of International Women's Day Auditorium, Kalinga University, Guest Speaker for this Program: Dr. Indira Mishra, Retired officer (CG)" },
  { date: "28.02.2020 to 01.03.2020", name: "Colossus - 2020 The Cultural and Sports Fest of HNLU Raipur" },
  { date: "28.02.2020", name: "Essay competition Department of Arts and Humanities" },
  { date: "19.02.2020 to 21.02.2020", name: "Kalinga University 6th Annual Sports Fest-2020" },
  { date: "17.02.2020 to 18.02.2020", name: "Kalinga University 1st Inter College Sports Tournament Sports Fest 2020" },
  { date: "09.02.2020", name: "Mujhse Dosti Karoge, A Pre Celebration of Valentine's Day" },
  { date: "04.02.2020", name: "World Cancer Day Program organised at NHMMI Narayana Multispeciality Hospital, Raipur" },
  { date: "26.01.2020", name: "71st Republic Day Celebration" },
  { date: "25.01.2020", name: "A guest visit by Mr. Rajesh Pandey from Nepal" },
  { date: "17.01.2020 to 19.01.2020", name: "Fashionista Exhibition visit at Hotel Sayaji, Raipur" },
  { date: "11.01.2020", name: "Kavi Sammelan by Dr. Jagbir Rathi" },
  { date: "08.01.2020 to 10.01.2020", name: "Visit of International Delegates, Mrs. Bola Taiwo Asha & Mr. Sanjay Ghimire" },
  { date: "04.01.2020 to 07.01.2020", name: "AIU Woodball Tournament Chandigarh Mohali" },

  { date: "27.11.2019", name: "3rd Convocation Ceremony 2019, Kalinga University, Naya Raipur" },
  { date: "17.11.2019", name: "Regarding Participation in Design (A workshop for design aspirants), Hotel Maurya Fresher Road, Patna" },
  { date: "11.11.2019", name: "Celebration of National Education Day Program" },
  { date: "10.11.2019", name: "Regarding Participation in Design (A workshop for design aspirants) Hotel Capitol Hill, Main Road, Ranchi" },
  { date: "08.11.2019", name: "Induction Program First-Step 2019 for National & International students" },
  { date: "20.10.2019", name: "Induction Programs First-Step 2019 For the Department of International Students" },
  { date: "17.10.2019 to 20.10.2019", name: "Kurukshetra-2019 Sports Week by All India Institute of Medical Sciences, Raipur" },
  { date: "15.10.2019", name: "Fashion Workshop by Celebrity Fashion Designer Mr. Kanwaljeet Singh" },
  { date: "10.10.2019", name: "Visit of Bollywood film actor Mr. Bhavesh Kumar for promotion of 'P' se Pyaar 'F' Se Faraar" },
  { date: "02.10.2019", name: "Mai Bhago Cricket Tournament at Raipur Green" },
  { date: "30.09.2019", name: "Fresher's Party, D.Pharmacy 2nd Year at Hotel Club Tattava" },
  { date: "29.09.2019", name: "Fresher's Party by the Department of Civil for B.Tech CE" },
  { date: "28.09.2019", name: "NH Walkathon 2019 by NH MMI Narayan Multispeciality Hospital" },
  { date: "28.09.2019", name: "Fresher's Party by the Department of Zoology for M.Sc. Zoology 2nd Year" },
  { date: "27.09.2019", name: "Fresher's Party by CS & IT Department for BCA 3rd & 1st Sem" },
  { date: "27.09.2019", name: "Fresher's Party by the Department of Botany for M.Sc. 2nd Year" },
  { date: "27.09.2019", name: "Fresher's Party by Commerce & Management for B.Com. 2nd Year" },
  { date: "25.09.2019", name: "Academic activity (Quiz Competition) by the Department of Zoology" },
  { date: "25.09.2019", name: "World Pharmacist Day Celebration" },
  { date: "21.09.2019", name: "10th Jagran Film Festival" },
  { date: "21.09.2019", name: "Induction Programs First-Step 2019 For the Department of Education" },
  { date: "20.09.2019", name: "Freshers & Farewell Party for the Departments of Fashion Design and Journalism & Mass Communication" },
  { date: "19.09.2019", name: "Fresher's Party by the Department of Pharmacy for B.Pharmacy" },
  { date: "18.09.2019", name: "45th State Level Inter College Football Tournament, Raipur" },
  { date: "16.09.2019", name: "Engineers Day Program at Kalinga University Auditorium" },
  { date: "14.09.2019", name: "Hindi Diwas Program Kalinga University" },
  { date: "14.09.2019", name: "Fresher's Party by the Department of Physics for M.Sc. Physics 2nd Year" },
  { date: "08.09.2019", name: "\"Fashion Stories\" for the FD & ID Department" },
  { date: "08.09.2019", name: "JCI, Youth Fest, Dignity Cup" },
  { date: "08.09.2019", name: "Fresher's Party for the Department of Law" },
  { date: "07.09.2019", name: "North-East Fresher's Party" },
  { date: "04.09.2019", name: "Teacher's Day Celebration Applied Science Dept." },
  { date: "04.09.2019", name: "Teacher's Day Celebration Law Dept." },
  { date: "04.09.2019", name: "Teacher's Day Celebration, Biotechnology Dept." },
  { date: "04.09.2019", name: "Teacher's Day Celebration, Civil Dept." },
  { date: "30.08.2019", name: "Wedding Sutra Exhibition" },
  { date: "30.08.2019", name: "Visit of a Guest from Afghanistan at Kalinga University Campus (Mr. Sediqullah Sahar - Education Attache, Afghanistan Embassy, India)" },
  { date: "22.08.2019", name: "Headstart - Startup Conclave" },
  { date: "21.08.2019", name: "Induction Programs “First-Step 2019” For the Department of All PG" },
  { date: "19.08.2019", name: "Induction Programs “First-Step 2019” For the Department of Pharmacy" },
  { date: "18.08.2019", name: "Dazzling Divas - A Fashion Show" },
  { date: "15.08.2019", name: "Jana Gana Mana Independence Day Celebration" },
  { date: "15.08.2019", name: "Independence Day Celebration - 2019 at Kalinga University Campus" },
  { date: "13.08.2019", name: "Induction Programs “First-Step 2019” For the Department of Engineering, IT/CS/FD/ID, Journalism" },
  { date: "10.08.2019", name: "Induction Programs “First-Step 2019” For the Department of Engineering" },
  { date: "06.08.2019", name: "Induction Programs “First-Step 2019” For the Department of Science" },
  { date: "05.08.2019", name: "Induction Programs “First-Step 2019” For the Department of Law" },
  { date: "04.08.2019", name: "Friendship Day Celebration \"Mujhse Dosti Karoge\"" },
  { date: "30.07.2019", name: "Induction Programs “First-Step 2019” For the Department of Commerce" },
  { date: "29.07.2019", name: "Induction Programs “First-Step 2019” For the Department of Management" },
  { date: "14.07.2019 to 17.07.2019", name: "17th National Woodball Championship 2019" }
];

const events2018 = [
  { date: "21.06.2019", name: "Celebration Of International Yoga Day" },
  { date: "20.06.2019", name: "Movie Festival for Kalinga University students at City Centre 36 Mall, Raipur" },
  { date: "18.06.2019", name: "World Cup Woodball Championship-2019 Uganda" },
  { date: "08.06.2019", name: "Visit To Purkhauti Muktangan For Cultural Awareness Of C.G." },
  { date: "11.05.2019", name: "Kalinga’s Students Performed ‘Yoga’" },
  { date: "28.04.2019", name: "Movie Festival for Kalinga University students at Ambuja Mall, Raipur" },
  { date: "23.04.2019", name: "17th National Woodball Championship 2019 At Nagpur (Maharashtra)" },
  { date: "06.03.2019 To 12.03.2019", name: "All India Inter University Championship Drop-Ro-Ball Team In Lovely Professional University" },
  { date: "01.03.2019", name: "“Fashion Show” Event At Ambuja Mall" },
  { date: "18.02.2019", name: "Best Performance Of Kalinga University Students In Inter College Fest, Sports Event At Hidaytullah National Law University" },
  { date: "26.01.2019", name: "Celebration of Republic Day" },
  { date: "22.01.2019 to 24.01.2019", name: "All India Inter Woodball (Men & Women) Championship" },
  { date: "06.01.2019", name: "Participated in the 34th Inter University Central Zone Youth Festival \"Juan Parve\"" },

  { date: "27.12.2018", name: "Salad Decoration Competition by Students of Kalinga University" },
  { date: "26.12.2018", name: "Rangoli Competition By Staff & Students Of Kalinga University" },
  { date: "26.12.2018", name: "Mehndi Competition Between Staff & Students Of Kalinga University" },
  { date: "24.12.2018", name: "Conducted A Fashion Show And Interior Design Exhibition At Hotel Panache, Patna" },
  { date: "20.12.2018", name: "Children’s Day Celebration" },
  { date: "08.12.2018", name: "World Earth Day Celebration At Raipur City Participated In Cycle Rally" },
  { date: "27.11.2018 To 29.11.2018", name: "Annual Sports Meet 2018" },
  { date: "14.11.2018", name: "Visit to Purkhauti Muktangan for Understanding Chhattisgarhi Culture by the Department of Pharmacy" },
  { date: "01.11.2018", name: "CG Foundation Day Celebration At Naya Raipur" },
  { date: "01.11.2018", name: "Visit to Sirpur for Understanding Ancient Buddhist Tradition and Culture by the Department of Applied Science" },
  { date: "27.10.2018", name: "Participation In Inter University Kabaddi (M) Tournament/Championship In AIIMS Raipur (CG)" },
  { date: "26.10.2018", name: "Visit to Sirpur for Understanding Ancient Buddhist Tradition and Culture by the Department of Art And Humanities" },
  { date: "25.10.2018", name: "Visit to Purkhauti Muktangan for Understanding Chhattisgrhi Culture by the Department of Botany" },
  { date: "13.10.2018", name: "Square Foot Event" },
  { date: "10.10.2018", name: "“Fashion Show” Event At Ambuja Mall" },
  { date: "10.10.2018", name: "Movie Festival For Kalinga University Students At Ambuja Mall, Raipur" },
  { date: "06.10.2018", name: "Visit to Purkhauti Muktangan for Understanding Chhattisgarhi Culture by the Department of Civil Engineering" },
  { date: "04.10.2018", name: "Exhibition on Gandhi's Life NSS at Raj Bhawan, Raipur" },
  { date: "02.10.2018", name: "Gandhi Jayanti, NSS Kalinga Joined Swachta Mission At Pt. RSU, Raipur" },
  { date: "25.09.2018", name: "World Pharmacy Day" },
  { date: "23.09.2018 to 24.09.2018", name: "NSS Day Celebration At Pt. R.S.S.U. Raipur" },
  { date: "22.09.2018", name: "Swachhta Abhiyan" },
  { date: "17.09.2018", name: "Vishwakarma Jayanti Celebration by the Engineering Department" },
  { date: "15.09.2018", name: "Engineering Day Celebration" },
  { date: "14.09.2018", name: "Celebration of Hindi Diwas" },
  { date: "14.09.2018", name: "Hindi Diwas Celebration – Arts & Humanities Department" },
  { date: "09.09.2018 To 18.09.2018", name: "First RDC Selection Camp+CATC XIII Camp has been organised by the 8 CG Girls Battalion at Sejbahar, Raipur" },
  { date: "09.09.2018", name: "Movie Festival For Kalinga University Students At City Centre 36 Mall, Raipur" },
  { date: "07.09.2018", name: "Movie Festival For Kalinga University Students At City Centre 36 Mall, Raipur" },
  { date: "07.09.2018", name: "Visit to Purkhauti Muktangan for Understanding Chhattisgarhi Culture by the Department of Chemistry" },
  { date: "07.09.2018", name: "Report on “Fashion Show” Event at Ambuja Mall" },
  { date: "07.09.2018", name: "Receiving the Teacher Shree Award" },
  { date: "05.09.2018", name: "Teacher Day Celebration" },
  { date: "01.09.2018", name: "Miss India Khadi For Kalinga University Students At Deen Dayal Upadhyay Auditorium, Raipur" },
  { date: "31.08.2018", name: "Talent Round Miss India Khadi 2018" },
  { date: "31.08.2018", name: "Movie Festival for Kalinga University Students at City Centre 36 Mall, Raipur" },
  { date: "29.08.2018", name: "Visit to Purkhauti Muktangan for Understanding Chhattisgrhi Culture by the Department of Zoology" },
  { date: "21.08.2018", name: "Indo-China Relationship and Its Culture and Awareness for MBA First Year Students by Ms. Shriya Ambhaikar (Final Year Student Of MBBS From China)" },
  { date: "19.08.2018", name: "CG Youth Entrepreneurship Summit At Kite College" },
  { date: "15.08.2018", name: "Independence Day Celebration" },
  { date: "10.08.2018", name: "Miss India Khadi -2018 Audition For Kalinga Students Deendyal Updhyay Auditorium Raipur" },
  { date: "05.08.2018", name: "Report On “Fashion Show” Event At Ambuja Mall" },
  { date: "05.08.2018", name: "Movie Festival for Kalinga University students at Ambuja Mall, Raipur" },
  { date: "03.08.2018", name: "Visit to Purkhauti Muktangan for Understanding Chhattisgarhi Culture by the Department of Mechanical Engineering" },
  { date: "31.07.2018", name: "Munshi Premchand Jayanti Celebration" },
  { date: "30.07.2018", name: "Mobile Sanchar Kranti Yojna Ku Solo Performance By Ms. Shreya Mallic" }
];

