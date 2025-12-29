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
import { useLayoutEffect } from "react";


// Just define your breadcrumb data as a const - Breadcrumb will automatically use it
// No imports needed for breadcrumb! Just define the const and it works.
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/kif-banner.webp",
  pageTitle: "Corporate Social Responsibility",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'CSR', href: '/csr' }
  ]
};

export default function KIFPage({
    visionMissionData: visionMissionDataProp,
    boxItems: boxItemsProp,
    
    centres: centresProp,
} = {}) {
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
          text: "To provide training in technical and vocational education"
        },
        {
          id: 2,
          text: "To plant trees for environmental improvement"
        },
        {
          id: 3,
          text: "To organise social, cultural, and religious programs"
        },
        {
          id: 4,
          text: "To develop rural areas "
        },
        {
          id: 5,
          text: "To provide training in industries related to the Khadi Village Industry"
        },
        {
          id: 6,
          text: "Promote advanced agricultural techniques and provide their training in rural areas "
        }
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
        imageAlt: "Student Activities",
        title: "Startup Day Celebration 16th January 2025",
        buttonText: "Read More",
        date: "August 25 - 2025",
      },
      {
        id: 2,
        imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/image-2.png",
        imageAlt: "Student Activities",
        title: "Visit by Dr. Laxmikant Dwivedi, President, Sanskar Bharti Chhattisgarh",
          buttonText: "Read More",
        date: "August 25 - 2025",
      },
      {
        id: 3,
        imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/image-3.png",
        imageAlt: "Student Activities",
        title: "FDP Organised by AICTE & the Ministry of Education’s Innovation Cell",
         buttonText: "Read More",
        date: "August 25 - 2025",
      },
      {
        id: 4,
        imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/chart+(18).webp",
        imageAlt: "Student Activities",
        title: "Evaluation of the Screening Session of CSVTU for MSME Ideathon",
         buttonText: "Read More",
        date: "August 25 - 2025",
      },
      {
        id: 5,
        imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/chart+(21).webp",
        imageAlt: "Student Activities",
        title: "Kalinga Incubation Stall at SEML Establishment Day",
         buttonText: "Read More",
        date: "August 25 - 2025",
      },
      {
        id: 6,
        imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/chart+(19).webp",
        imageAlt: "Student Activities",
        title: "Field visit to Incubation Centre Under IIC Activity @ NIT Raipur",
         buttonText: "Read More",
        date: "August 25 - 2025",
      },
      {
        id: 7,
        imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/chart+(20).webp",
        imageAlt: "Student Activities",
        title: "TOT Program on Entrepreneur Development organised with CSIDC & EDII, Gandhi Nagar & CSIDC C.G",
         buttonText: "Read More",
        date: "August 25 - 2025",
      },
  ];
    const FAQItems = [
        {
          id: 1,
          question: "Target Groups",
          answer: [
            'Students',
            'Youth',
            'Women',
            'Underprivileged Communities',
            'School Students',
            'Industry Partners'
          ],
        },
        {
          id: 2,
          question: "Villages Adopted",
          answer: [
            'Kotni',
            'Palaud',
            'Tandul',
            'Kotara Bhantha',
            'Parsada',
            'Kuhera'
          ],
        },
        {
          id: 3,
          question: "Our Programs",
          answer: {
            type: 'table',
            headers: ['S.No', 'Program Name', 'CSR Initiatives'],
            rows: [
              { id: 1, program: 'STEM Education: STEM For Girls In India', description: 'The representation of women and girls in STEM fields (Science, Technology, Engineering, and Mathematics) is quite less in India, but we fulfil this gap by introducing STEM education to girls in rural areas.' },
              { id: 2, program: 'Rural Infrastructure Development', description: 'Improving the lives of rural people is essential in terms of education, healthcare, sanitation, infrastructure, road development, water supply, irrigation schemes, local markets, and telecommunication. We help corporates address rural development challenges with proper resource planning and employee volunteering, which will not only develop their village but will also generate employment opportunities for both men and women.' },
              { id: 3, program: 'Skill Development', description: 'Essential for both economic growth and social development, this program will turn youth into a future-ready workforce, as we will conduct skill-based training programs in economically weaker sections of society across India or establish centres on your behalf.' },
              { id: 4, program: 'Training of Women/Youth', description: 'Investment in skilling women in different sectors, such as helping them establish small businesses which they can run from the comfort of their home, will help them build long-term careers and will lead to sustainable change in the economy and help corporates take ethical responsibility.' },
              { id: 5, program: 'Road Safety', description: 'We will help you address one of the biggest issues in India, i.e, Road Safety. Under this CSR initiative, we will undertake activities like building roads, driving training, investment in R&D in road safety, road accident trauma care, and developing road safety curriculum for school children, inspection of used vehicles, driving testing, and much more.' },
              { id: 6, program: 'Encouragement of Sports in Rural Areas', description: 'To bring out the talent of the youth of rural areas, we will establish sports centres, provide training, and even organise local tournaments in economically backward areas and create opportunities for their growth too.' },
              { id: 7, program: 'Health Sector', description: 'Under this CSR initiative, we will establish medical institutions, organise healthcare camps and awareness programs, and vaccination drives to provide quality healthcare services to underserved communities of our nation.' },
              { id: 8, program: 'Sanitation', description: 'We support corporates in undertaking sanitation initiatives by promoting cleanliness and hygiene. Our programs will include campaigns on personal hygiene, public health, menstrual health for women, and waste management practices. We will also organise clean-up projects for rivers and ponds.' },
              { id: 9, program: 'Environment', description: 'Environmental pollution is growing at a fast rate as more companies are emitting heavy chemicals into the atmosphere, which makes it imperative for companies to invest their CSR funds in the same. We help companies with the following CSR activities:',
                listItems: [
                  'Recycling',
                  'Waste Reduction',
                  'Reduce Energy Use, water, and plastic consumption',
                  'Use renewable energy sources',
                  'Adopt sustainable solutions',
                  'Follow the strict guidelines and ethical practices of the government',
                ]
               },
              { id: 10, program: 'Cultural Preservation', description: 'Documenting and promoting local culture' },
              { id: 11, program: 'Disaster Relief', description: 'Emergency response and rehabilitation' },
              { id: 12, program: 'Elderly Care', description: 'Support for senior citizens' },
              { id: 13, program: 'Youth Development', description: 'Leadership and career guidance',
                listItems: [
                  'Plan and implement safe drinking water supply projects in rural areas',
                  'Conduct awareness campaigns on water hygiene and conservation',
                  'Promote rainwater harvesting and sustainable solutions',
                  'Focus on water accessibility in remote areas',
                  'Setting up testing labs to monitor the water quality of different areas',
                ]
               },
            ]
          }
        }
      ]

  // Set breadcrumb data when component mounts, clear when it unmounts
  // Use useLayoutEffect to ensure it's set before Breadcrumb component checks
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
    // Cleanup: clear breadcrumb data when component unmounts
    return () => {
      if (typeof window !== 'undefined') {
        delete window.__breadcrumbData;
      }
    };
  }, []);
      
  return (
    <div>
      <ImageContent 
        hasImage={false} 
        readmore={false} 
        className="items-center justify-center" 
        title="Corporate Social Responsibility (CSR)" 
        subtitleclassName="hidden" 
        description="Companies today understand the importance of giving back by being socially responsible towards society, but with a lack of time, planning, and expertise, they fail to develop effective programs. The Corporate Social Responsibility (CSR) initiatives at Kalinga come under Bhagwan Shri Bala Sai Educational and Charitable Society, which works on behalf of different organisations and assists them in staying ahead in sustainable and social welfare. It handles every project with transparency and accountability by identifying real social needs, developing solutions to address those challenges, working towards the cause, and measuring outcomes. The organization helps companies successfully channelise their CSR efforts by focusing on their business objectives and delivering measurable results."
      />    
     <MainIntro 
      title="About Bhagwan Shri Bala Sai Educational And Charitable Society"
      description={["It is a philanthropic organisation that is primarily involved in education and social welfare activities. The society works towards uplifting the underprivileged communities by offering them inclusive educational opportunities, healthcare facilities, and engaging in charitable activities. The society operates educational institutions, healthcare camps, scholarship programs, and other social welfare initiatives."]}
      imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/csr/csr-intro.png"
      imageAlt="Kalinga University campus"
      showKnowMore={false}
      showImage={true}
      />
      <VisionMission data={visionMissionData} showImg={false} />
      <ImageListItem items={Items} imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrc.webp" title="Objectives of the Organisation"  />

      <ImageContent hasImage={true} imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp" className="items-center justify-center" title="Career and Corporate Resource Centre" subtitleclassName="hidden" description="It is a philanthropic organisation that is primarily involved in education and social welfare activities. The society works towards uplifting the underprivileged communities by offering them inclusive educational opportunities, healthcare facilities, and engaging in charitable activities. The society operates educational institutions, healthcare camps, scholarship programs, and other social welfare initiatives." buttonLink="/career-and-corporate-resource-centre" />
      <FAQ 
        items={FAQItems} 
        title="" 
        subtitle=""
      />
      <CenterOfExcellence centres={centres} title="Startup Partners" description="Explore the spaces and partnerships that power the Kalinga Incubation Foundation." />
      <StudentActivities activities={activities} title="CSR Glimpse" subtitle="" />
      
      <AdmissionCareer />
     
    </div>
  );
}