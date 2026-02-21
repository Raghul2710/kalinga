'use client';

import ImageContent from "@/app/components/ccrc/imagecontent";
import VisionMission from "@/app/components/about/vision-mission";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import Testimonials from "@/app/components/home/Testimonials";
import QuickLinks from "@/app/components/general/quick_links";
import AdmissionSteps from "@/app/components/admissions/admission-steps";
import OrganogramOfKalinga from "@/app/components/about/organogram_of_kalinga";
import CenterOfExcellence from "@/app/components/about/center_of_excellence";
import StudentActivities from "@/app/components/department/student_activities";
import AdmissionCareer from "@/app/components/general/admission_cta";
import MainIntro from "@/app/components/about/main_intro";
import FAQ from "@/app/components/general/faq";
import DataTable from "@/app/components/general/data-table";
import Image from "next/image";
import SectionHeading from "@/app/components/general/SectionHeading";
import WhyStudy from "@/app/components/department/why-study";
import Gallery from "@/app/components/general/gallery";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";
import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CsrForm from "../components/forms/csr-form";

export default function CSRPage({
  visionMissionData: visionMissionDataProp,
  boxItems: boxItemsProp,

  centres: centresProp,
} = {}) {
  const pathname = usePathname();


  const visionMissionData = visionMissionDataProp ?? [{
    visionTitle: "Core Values",
    missionTitle: "Mission",
    visionText: [
      "Holistic Development,",
      "lluminating the World with Light of Knowledge ,",
      "Global Diversity,",
      "Multicultural Environment,",
      "Team Spirit & Bonding",
    ],
    missionText:
      "Bhagwan Shri Bala Sai Educational and Charitable Society aims to be an outstanding institution for Talent Development and Knowledge Creation for a vibrant and inclusive society.",
    imageAlt: "Vision and Mission",
    className: "",
    showImage: false,
  }];

  const Items = [
    {
      id: 1,
      text: "To provide skill development and industry-aligned trainings"
    },
    {
      id: 2,
      text: "To provide training in technical and vocational education"
    },
    {
      id: 3,
      text: "To plant trees for environmental improvement"
    },
    {
      id: 4,
      text: "To organise social, cultural, and religious programs "
    },
    {
      id: 5,
      text: "To develop rural areas"
    },
  ]

  const centres = centresProp ?? [
    {
      id: 1,
      name: "Insight Catalyst India Private Limited",
      title: "",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/our-patners.webp",
    },
    {
      id: 2,
      name: "WANFENG Aluminium Wheel (INDIA) Pvt. Ltd.",
      title: "",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/our-patners-2.webp",
    },
    {
      id: 3,
      name: "Rajasthan Global Security Pvt. Ltd.",
      title: "",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/our-clients-3.webp",
    },
  ];
  const activities = [
    {
      id: 1,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/image-1.png",
      imageAlt: " Events and Activities",
      title: "Startup Day Celebration 16th January 2025",
      buttonText: "Read More",
      date: "August 25 - 2025",
    },
    {
      id: 2,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/image-2.png",
      imageAlt: " Events and Activities",
      title: "Visit by Dr. Laxmikant Dwivedi, President, Sanskar Bharti Chhattisgarh",
      buttonText: "Read More",
      date: "August 25 - 2025",
    },
    {
      id: 3,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/image-3.png",
      imageAlt: " Events and Activities",
      title: "FDP Organised by AICTE & the Ministry of Education’s Innovation Cell",
      buttonText: "Read More",
      date: "August 25 - 2025",
    },
    {
      id: 4,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/chart+(18).webp",
      imageAlt: " Events and Activities",
      title: "Evaluation of the Screening Session of CSVTU for MSME Ideathon",
      buttonText: "Read More",
      date: "August 25 - 2025",
    },
    {
      id: 5,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/chart+(21).webp",
      imageAlt: " Events and Activities",
      title: "Kalinga Incubation Stall at SEML Establishment Day",
      buttonText: "Read More",
      date: "August 25 - 2025",
    },
    {
      id: 6,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/chart+(19).webp",
      imageAlt: " Events and Activities",
      title: "Field visit to Incubation Centre Under IIC Activity @ NIT Raipur",
      buttonText: "Read More",
      date: "August 25 - 2025",
    },
    {
      id: 7,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/chart+(20).webp",
      imageAlt: " Events and Activities",
      title: "TOT Program on Entrepreneur Development organised with CSIDC & EDII, Gandhi Nagar & CSIDC C.G",
      buttonText: "Read More",
      date: "August 25 - 2025",
    },
  ];
  // Target Groups Data
  const targetGroups = [
    { title: "Students", icon: "Global.svg" },
    { title: "Youth", icon: "Holistic+Development.svg" },
    { title: "Women", icon: "Emotional+Well-Being.svg" },
    { title: "Underprivileged Communities", icon: "Community+Services.svg" },
    { title: "School Students", icon: "Career+Counseling.svg" },
    { title: "Industry Partners", icon: "Networking+Opportunities.svg" },
  ];

  // Villages Adopted Data
  const villagesAdopted = [
    { title: "Kotni", icon: "university.svg" },
    { title: "Palaud", icon: "facility-management.svg" },
    { title: "Tandul", icon: "Industrial+Visits.svg" },
    { title: "Kotara Bhantha", icon: "campus+life.svg" },
    { title: "Parsada", icon: "Educational+Tours.svg" },
    { title: "Kuhera", icon: "Extensive+Research+Facilities.svg" },
  ];

  // Helper function to render card grid
  const renderCardGrid = (items) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {items.map((item, idx) => (
        <div key={idx} className="bg-[var(--card-skin)] p-6 rounded-xl flex flex-col items-center text-center gap-4 hover:shadow-lg transition-all duration-300 group cursor-pointer border border-transparent hover:border-[var(--button-red)]/20">
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
  );

  // CSR Initiatives table data
  const csrInitiativesTableData = [
    {
      slNo: 1,
      initiative: "Transport Subsidy",
      description: "The transport fees provided to the students (who avail the facility) are at subsidised rates. The bus route covers distances of up to 70 KM (one way) to facilitate students who live far from the university."
    },
    {
      slNo: 2,
      initiative: "Scholarships",
      description: "The university provides scholarships under different categories. Click to know more: https://kalinga-university.s3.ap-south-1.amazonaws.com/csr/SCHOLARSHIP_25-26+(4).pdf"
    },
    {
      slNo: 3,
      initiative: "Financial Support",
      description: "Absorption of fees or providing appropriate sponsor(s) to those students who are discontinuing or leaving their education midway due to financial difficulties (on a case-by-case basis)."
    },
    {
      slNo: 4,
      initiative: "Environmental Initiatives",
      description: "Taking environmental initiatives from time to time by planting 1000+ plants and trees on and around the campus."
    },
    {
      slNo: 5,
      initiative: "Renewable Energy",
      description: "We have installed Rooftop Solar Power Panels that convert sunlight into electricity, which reduces the usage of traditional power sources. LED lights have been installed throughout the campus, which minimises energy consumption and enhances lighting quality."
    },
    {
      slNo: 6,
      initiative: "Waste Management",
      description: "An MoU has been signed with certified vendors, which ensures that waste materials have been carefully disposed of and recycled."
    },
    {
      slNo: 7,
      initiative: "Water Conservation",
      description: "Every building on our campus is equipped with a rainwater harvesting system that is linked to recharge wells. We have also planted less water-consuming plants on our campus to minimise water usage and to improve biodiversity."
    },
    {
      slNo: 8,
      initiative: "Green Campus",
      description: "Kalinga's green campus promotes sustainable practices through vermicomposting, apiculture, organic farming, nursery, greenhouse, and electric vehicles."
    },
    {
      slNo: 9,
      initiative: "Healthcare Camps",
      description: "The University's Life Science and Pharmacy Departments undertake various Blood Donation camps that conduct periodic visits to villages in the state for free medical consultations."
    },
    {
      slNo: 10,
      initiative: "Legal Aid",
      description: "The University's Law Department consists of the Legal Aid Cell that provides free legal consultancy to needy people."
    },
    {
      slNo: 11,
      initiative: "Khadi Promotion",
      description: "The University's Fashion Design and Interior Design departments have taken various initiatives to promote Khadi within the state of Chhattisgarh."
    },
    {
      slNo: 12,
      initiative: "Knowledge Programs",
      description: "Our various departments conduct free Faculty Development Programs (FDP), Management Development Programs (MDP) and knowledge dissemination programs at various schools, colleges, government departments, corporate and defence institutions."
    }
  ];

  const aboutQuickLinks = [
    {
      id: 1,
      title: "Transport Subsidy",
      description: "The transport fees provided to the students (who avail the facility) are at subsidised rates. The bus route covers distances of up to 70 KM (one way) to facilitate students who live far from the university.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/transport.svg",
      href: "/campus-life"
    },

    {
      id: 3,
      title: "Financial Support",
      description: "Absorption of fees or providing appropriate sponsor(s) to those students who are discontinuing or leaving their education midway due to financial difficulties (on a case-by-case basis).",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/fees.svg",
      href: "/admissions"
    },
    {
      id: 4,
      title: "Environmental Initiatives",
      description: "Taking environmental initiatives from time to time by planting 1000+ plants and trees on and around the campus.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Flagship+Events.svg",
      href: "#"
    },
    {
      id: 5,
      title: "Renewable Energy",
      description: "We have installed Rooftop Solar Power Panels that convert sunlight into electricity, which reduces the usage of traditional power sources. LED lights have been installed throughout the campus, which minimises energy consumption and enhances lighting quality.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Extensive+Research+Facilities.svg",
      href: "#"
    },
    {
      id: 6,
      title: "Waste Management",
      description: "An MoU has been signed with certified vendors, which ensures that waste materials have been carefully disposed of and recycled.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Educational+Tours.svg",
      href: "#"
    },
    {
      id: 7,
      title: "Water Conservation",
      description: "Every building on our campus is equipped with a rainwater harvesting system that is linked to recharge wells. We have also planted less water-consuming plants on our campus to minimise water usage and to improve biodiversity.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/facility-management.svg",
      href: "#"
    },
    {
      id: 8,
      title: "Green Campus",
      description: "Kalinga’s green campus promotes sustainable practices through vermicomposting, apiculture, organic farming, nursery, greenhouse, and electric vehicles.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/campus+life.svg",
      href: "#"
    },
    {
      id: 9,
      title: "Healthcare Camps",
      description: "The University's Life Science and Pharmacy Departments undertake various Blood Donation camps that conduct periodic visits to villages in the state for free medical consultations.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Emotional+Well-Being.svg",
      href: "#"
    },
    {
      id: 10,
      title: "Legal Aid",
      description: "The University's Law Department consists of the Legal Aid Cell that provides free legal consultancy to needy people.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Mentor-Mentee+System.svg",
      href: "#"
    },
    {
      id: 11,
      title: "Khadi Promotion",
      description: "The University's Fashion Design and Interior Design departments have taken various initiatives to promote Khadi within the state of Chhattisgarh.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Cultural+Celebrations.svg",
      href: "#"
    },
    {
      id: 12,
      title: "Knowledge Programs",
      description: "Our various departments conduct free Faculty Development Programs (FDP), Management Development Programs (MDP) and knowledge dissemination programs at various schools, colleges, government departments, corporate and defence institutions.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Career+Counseling.svg",
      href: "#"
    }
  ];

  // Table columns configuration
  const csrTableColumns = [
    { key: "slNo", label: "S.No", width: "w-20" },
    { key: "initiative", label: "Initiative", width: "w-64" },
    { key: "description", label: "Description", width: "flex-1" }
  ];

  // Render CSR Initiatives Table component
  const renderCSRInitiativesTable = () => (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-[var(--button-red)]/10 to-transparent p-6 rounded-lg border-l-4 border-[var(--button-red)]">
        <p className="text-sm text-gray-700 leading-relaxed">
          Corporate Social Responsibility (CSR) at Kalinga University aims to make a positive social and environmental impact beyond academics. Over the years, our students and faculty members have actively participated in various programs that contribute to the welfare of society. It includes healthcare camps, blood donation camps, environmental initiatives, sustainable initiatives, community-based projects, conducting educational camps or providing employment opportunities in nearby villages, maintaining a fair student policy, promoting social equality, and much more. We ensure that our students and staff members become responsible citizens and inspire others.
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4 text-[var(--foreground)]">Our Initiatives</h3>
        <DataTable
          columns={csrTableColumns}
          data={csrInitiativesTableData}
          overflowX={false}
          headerBgColor="bg-[var(--dark-blue)]"
          headerTextColor="text-white"
        />
      </div>
    </div>
  );

  const whyStudyItems = [
    {
      id: 1,
      title: 'STEM Education: STEM For Girls In India',
      body: 'The representation of women and girls in STEM fields (Science, Technology, Engineering, and Mathematics) is quite less in India, but we fulfil this gap by introducing STEM education to girls in rural areas.',
      variant: 'gray',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Extensive+Research+Facilities.svg'
    },
    {
      id: 2,
      title: 'Rural Infrastructure Development',
      body: 'Improving the lives of rural people is essential in terms of education, healthcare, sanitation, infrastructure, road development, water supply, irrigation schemes, local markets, and telecommunication. We help corporates address rural development challenges with proper resource planning and employee volunteering, which will not only develop their village but will also generate employment opportunities for both men and women.',
      variant: 'amber',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Networking+Opportunities.svg'
    },
    {
      id: 3,
      title: 'Skill Development',
      body: 'Essential for both economic growth and social development, this program will turn youth into a future-ready workforce, as we will conduct skill-based training programs in economically weaker sections of society across India or establish centres on your behalf.',
      variant: 'gray',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/Value+addition.svg'
    },
    {
      id: 4,
      title: 'Training of Women/Youth',
      body: 'Investment in skilling women in different sectors, such as helping them establish small businesses which they can run from the comfort of their home, will help them build long-term careers and will lead to sustainable change in the economy and help corporates take ethical responsibility.',
      variant: 'amber',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Career+Counseling.svg'
    },
    {
      id: 5,
      title: 'Road Safety',
      body: 'We will help you address one of the biggest issues in India, i.e, Road Safety. Under this CSR initiative, we will undertake activities like building roads, driving training, investment in R&D in road safety, road accident trauma care,  developing road safety curriculum for school children, inspection of used vehicles, driving testing, and much more.',
      variant: 'gray',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/transport.svg'
    },
    {
      id: 6,
      title: 'Encouragement of Sports in Rural Areas',
      body: 'To bring out the talent of the youth of rural areas, we will establish sports centres, provide training, and even organise local tournaments in economically backward areas and create opportunities for their growth too.',
      variant: 'amber',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Flagship+Events.svg'
    },
    {
      id: 7,
      title: 'Health Sector',
      body: 'Under this CSR initiative, we will establish medical institutions, organise healthcare camps and awareness programs, and vaccination drives to provide quality healthcare services to underserved communities of our nation.',
      variant: 'gray',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/about-raipur/healthcare.svg'
    },
    {
      id: 8,
      title: 'Sanitation',
      body: 'We support corporates in undertaking sanitation initiatives by promoting cleanliness and hygiene. Our programs will include campaigns on personal hygiene, public health, menstrual health for women, and waste management practices. We will also organise clean-up projects for rivers and ponds.',
      variant: 'amber',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Holistic+Development.svg'
    },
    {
      id: 9,
      title: 'Environment',
      body: 'Environmental pollution is growing at a fast rate as more companies are emitting heavy chemicals into the atmosphere, which makes it imperative for companies to invest their CSR funds in the same. We help companies with the following CSR activities: Recycling, Waste Reduction, Reduce Energy Use, water, and plastic consumption, Use renewable energy sources, Adopt sustainable solutions, Follow the strict guidelines and ethical practices of the government.',
      variant: 'gray',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/university.svg'
    },
    {
      id: 10,
      title: 'Animal Welfare',
      body: 'We assist companies in actively contributing towards animal welfare initiatives. Our projects under this CSR will focus on building animal shelters, organising vaccination drives, running rescue operations, and other awareness campaigns.',
      variant: 'amber',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Mentor-Mentee+System.svg'
    },
    {
      id: 11,
      title: 'Gender Equality, Women\'s Empowerment',
      body: 'Although several NGOs and self-help groups are working for women empowerment, corporates too can work in this area and uplift women and remove discrimination from society. We will provide livelihood opportunities to women in rural areas by organising various skill-based training programs that will uplift them in terms of communication, confidence, self-esteem, and personality development. This will help them develop an entrepreneurial mindset or take up jobs in handloom weaving, pottery designing, painting, candle making, eco-friendly product designing, product packaging and labelling, and more.',
      variant: 'gray',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Mental+Health+Support.svg'
    },
    {
      id: 12,
      title: 'Old Age Home',
      body: 'From planning to infrastructure design, we encourage corporates in undertaking sustainable old-age home projects so that every senior citizen who doesn\'t have shelter, food, and other basic necessities of life feels cared for and valued.',
      variant: 'amber',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Emotional+Well-Being.svg'
    },
    {
      id: 13,
      title: 'Safe Drinking Water',
      body: 'This is one of the major challenges, especially in rural areas, where water usually contains harmful and toxic chemicals. This leads to poor health conditions of those who cannot even afford proper healthcare facilities. Under this CSR initiative, we perform the following activities: Plan and implement safe drinking water supply projects in rural areas, Conduct awareness campaigns on water hygiene and conservation, Promote rainwater harvesting and sustainable solutions, Focus on water accessibility in remote areas, Setting up testing labs to monitor the water quality of different areas.',
      variant: 'gray',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Industrial+Visits.svg'
    },
  ];

  const FAQItems = [
    {
      id: 4,
      question: "CSR at Kalinga University",
      answer: {
        type: 'component',
        component: renderCSRInitiativesTable()
      },
    },
    // {
    //   id: 3,
    //   question: "Our Programs",
    //   answer: {
    //     type: 'table',
    //     headers: ['S.No', 'Program Name', 'CSR Initiatives'],
    //     rows: [
    //       { id: 1, program: 'STEM Education: STEM For Girls In India', description: 'The representation of women and girls in STEM fields (Science, Technology, Engineering, and Mathematics) is quite less in India, but we fulfil this gap by introducing STEM education to girls in rural areas.' },
    //       { id: 2, program: 'Rural Infrastructure Development', description: 'Improving the lives of rural people is essential in terms of education, healthcare, sanitation, infrastructure, road development, water supply, irrigation schemes, local markets, and telecommunication. We help corporates address rural development challenges with proper resource planning and employee volunteering, which will not only develop their village but will also generate employment opportunities for both men and women.' },
    //       { id: 3, program: 'Skill Development', description: 'Essential for both economic growth and social development, this program will turn youth into a future-ready workforce, as we will conduct skill-based training programs in economically weaker sections of society across India or establish centres on your behalf.' },
    //       { id: 4, program: 'Training of Women/Youth', description: 'Investment in skilling women in different sectors, such as helping them establish small businesses which they can run from the comfort of their home, will help them build long-term careers and will lead to sustainable change in the economy and help corporates take ethical responsibility.' },
    //       { id: 5, program: 'Road Safety', description: 'We will help you address one of the biggest issues in India, i.e, Road Safety. Under this CSR initiative, we will undertake activities like building roads, driving training, investment in R&D in road safety, road accident trauma care, and developing road safety curriculum for school children, inspection of used vehicles, driving testing, and much more.' },
    //       { id: 6, program: 'Encouragement of Sports in Rural Areas', description: 'To bring out the talent of the youth of rural areas, we will establish sports centres, provide training, and even organise local tournaments in economically backward areas and create opportunities for their growth too.' },
    //       { id: 7, program: 'Health Sector', description: 'Under this CSR initiative, we will establish medical institutions, organise healthcare camps and awareness programs, and vaccination drives to provide quality healthcare services to underserved communities of our nation.' },
    //       { id: 8, program: 'Sanitation', description: 'We support corporates in undertaking sanitation initiatives by promoting cleanliness and hygiene. Our programs will include campaigns on personal hygiene, public health, menstrual health for women, and waste management practices. We will also organise clean-up projects for rivers and ponds.' },
    //       {
    //         id: 9, program: 'Environment', description: 'Environmental pollution is growing at a fast rate as more companies are emitting heavy chemicals into the atmosphere, which makes it imperative for companies to invest their CSR funds in the same. We help companies with the following CSR activities:',
    //         listItems: [
    //           'Recycling',
    //           'Waste Reduction',
    //           'Reduce Energy Use, water, and plastic consumption',
    //           'Use renewable energy sources',
    //           'Adopt sustainable solutions',
    //           'Follow the strict guidelines and ethical practices of the government',
    //         ]
    //       },
    //       { id: 10, program: 'Animal Welfare', description: 'We assist companies in actively contributing towards animal welfare initiatives. Our projects under this CSR will focus on building animal shelters, organising vaccination drives, running rescue operations, and other awareness campaigns.' },
    //       { id: 11, program: 'Gender Equality, Women\'s Empowerment', description: 'Although several NGOs and self-help groups are working for women empowerment, corporates too can work in this area and uplift women and remove discrimination from society. We will provide livelihood opportunities to women in rural areas by organising various skill-based training programs that will uplift them in terms of communication, confidence, self-esteem, and personality development. This will help them develop an entrepreneurial mindset or take up jobs in handloom weaving, pottery designing, painting, candle making, eco-friendly product designing, product packaging and labelling, and more.' },
    //       { id: 12, program: 'Old Age Home', description: 'From planning to infrastructure design, we encourage corporates in undertaking sustainable old-age home projects so that every senior citizen who doesn\'t have shelter, food, and other basic necessities of life feels cared for and valued.' },
    //       {
    //         id: 13, program: 'Safe Drinking Water', description: 'This is one of the major challenges, especially in rural areas, where water usually contains harmful and toxic chemicals. This leads to poor health conditions of those who cannot even afford proper healthcare facilities. Under this CSR initiative, we perform the following activities:',
    //         listItems: [
    //           'Plan and implement safe drinking water supply projects in rural areas',
    //           'Conduct awareness campaigns on water hygiene and conservation',
    //           'Promote rainwater harvesting and sustainable solutions',
    //           'Focus on water accessibility in remote areas',
    //           'Setting up testing labs to monitor the water quality of different areas',
    //         ]
    //       },
    //     ]
    //   }
    // },

  ]

  return (
    <div>
      <ImageContent
        hasImage={true}
        readmore={false}
        className="items-center justify-center"
        title="Corporate Social Responsibility (CSR)"
        subtitleclassName="hidden"
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/csr/bhagawan-sri.webp"
        description={
          <>
            Companies today understand the importance of giving back by being socially responsible towards society, but with a lack of time, planning, and expertise, they fail to develop effective programs. The Corporate Social Responsibility (CSR) initiatives at Kalinga come under <b>Bhagwan Shri Bala Sai Educational and Charitable Society</b>, which works on behalf of different organisations and assists them in staying ahead in sustainable and social welfare. It handles every project with transparency and accountability by identifying real social needs, developing solutions to address those challenges, working towards the cause, and measuring outcomes. The organization helps companies successfully channelise their CSR efforts by focusing on their business objectives and delivering measurable results.
          </>
        }
      />
      <MainIntro
        title="About Bhagwan Shri Bala Sai Educational and Charitable Society"
        description={["It is a philanthropic organisation that is primarily involved in education and social welfare activities. The society works towards uplifting the underprivileged communities by offering them inclusive educational opportunities, healthcare facilities, and engaging in charitable activities. The society operates educational institutions, healthcare camps, scholarship programs, and other social welfare initiatives."]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/csr/csr-intro.png"
        imageAlt="Kalinga University campus"
        showKnowMore={false}
        showImage={true}
      />
      {/* <VisionMission data={visionMissionData} showImg={false} /> */}
      <ImageListItem items={Items} description="" imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/csr/chart-3.webp" title="Objectives of the Organisation" />

      {/* <ImageContent hasImage={true} imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp" className="items-center justify-center" title="Career and Corporate Resource Centre" subtitleclassName="hidden" description="It is a philanthropic organisation that is primarily involved in education and social welfare activities. The society works towards uplifting the underprivileged communities by offering them inclusive educational opportunities, healthcare facilities, and engaging in charitable activities. The society operates educational institutions, healthcare camps, scholarship programs, and other social welfare initiatives." buttonLink="/career-and-corporate-resource-centre" /> */}
      <WhyStudy
        items={whyStudyItems}
        sectionTitle="Our Programs"
        breakpoints={{
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      />
      <QuickLinks
        slider={true}
        links={aboutQuickLinks}
        title="CSR at Kalinga University"
        titleClassName="!text-white"
        showReadMore={false}
        description="Corporate Social Responsibility (CSR) at Kalinga University aims to make a positive social and environmental impact beyond academics. Over the years, our students and faculty members have actively participated in various programs that contribute to the welfare of society. It includes healthcare camps, blood donation camps, environmental initiatives, sustainable initiatives, community-based projects, conducting educational camps or providing employment opportunities in nearby villages, maintaining a fair student policy, promoting social equality, and much more. We ensure that our students and staff members become responsible citizens and inspire others."
      >
        <Link
          href="https://kalinga-university.s3.ap-south-1.amazonaws.com/csr/SCHOLARSHIP_25-26+(4).pdf"
          target="_blank"
        >
          <GlobalArrowButton>
            Click to know more
          </GlobalArrowButton>
        </Link>
      </QuickLinks>
      {/* Target Groups Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <SectionHeading
            title="Target Groups"
            subtitle="Who We Serve"
            subtitleTextColor="!text-[var(--button-red)]"
          />
          {renderCardGrid(targetGroups)}
        </div>
      </section>

      {/* Villages Adopted Section */}
      <section className="py-16 px-4 bg-[var(--background)]">
        <div className="container mx-auto text-center">
          <SectionHeading
            title="Villages Adopted"
            subtitle="Community Impact"
            subtitleTextColor="!text-[var(--button-red)]"
          />
          {renderCardGrid(villagesAdopted)}
        </div>
      </section>
      {/* FAQ Section */}
      <FAQ
        items={FAQItems}
        title=""
        subtitle=""
      />
      <StudentActivities
        title="Events and Activities"
        subtitle="Experience Campus Life Beyond Academics"
        fallbackToGlobal={true}
      />
      <CsrForm />
      {/* <CenterOfExcellence centres={centres} title="Startup Partners" description="Explore the spaces and partnerships that power the Kalinga Incubation Foundation." /> */}
      <Gallery title=" Glimpses" paddingClassName="py-20" />
      <AdmissionCareer />

    </div>
  );
}