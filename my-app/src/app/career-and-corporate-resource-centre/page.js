"use client"
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import ImageContent from "@/app/components/ccrc/imagecontent";
import Cards from "@/app/components/ccrc/cards";
import Hearfrom from "@/app/components/ccrc/Hearfrom";
import Partner from "@/app/components/ccrc/partner";
import AccreditationRanking from "@/app/components/home/AccreditationRanking";
import UpcomingConferences from "@/app/components/research/upcoming_conference";
import Gallery from "@/app/components/general/gallery";
import DeptHeadIntro from "@/app/components/department/dept_head_intro";
import AdmissionCareer from "@/app/components/general/admission_cta";
import MediaCardSlider from "@/app/components/general/media-card-slider";
import { title } from "process";
import SectionHeading from "../components/general/SectionHeading";

const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/kif-banner.webp",
  pageTitle: "Career and Corporate Resource Centre",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Career and Corporate Resource Centre', href: '/career-and-corporate-resource-centre' }
  ]
};

// Register it globally (no import needed - this pattern works automatically)
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}



const cards = [
  {
    title: "Corporate Training And Consultancy Division (CTCD)",
    description: "Due to increasing competition in the domestic and international markets, political influence, and technological advancements, organisations find it difficult to compete in the marketplace.",
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ctcd.png",
    logoSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/logo-ctcd.svg",
    subtitle: "CORPORATE TRAINING & CONSULTANCY DIVISION",
    href: "/corporate-training-and-consultancy-division",
  },
  {
    title: "Corporate Social Responsibility (CSR) ",
    description: "Companies today understand the importance of giving back by being socially responsible towards society, but with a lack of time, planning, and expertise, they fail to develop effective programs.",
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/csr.png",
    logoSrc: "",
    subtitle: "CORPORATE TRAINING & CONSULTANCY DIVISION",
    href: "/csr",
  },
  {
    title: "Kalinga Incubation Foundation (KIF)",
    description: "KIF was established in 2023, where students' bold and unique ideas are supported so that their entrepreneurial ambitions can be turned into ACTION.",
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/IMG-20250409-WA0055.jpg",
    logoSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/logo-kif.svg",
    subtitle: "CORPORATE TRAINING & CONSULTANCY DIVISION",
    href: "/kif",
  },
  {
    title: "Training & Placements",
    description: "The Career and Corporate Centre of Kalinga University is a hub for career guidance, training and corporate partnerships. With modern infrastructure and resources, the centre meets industry standards and has even received appreciation from top organisations.",
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/placement.png",
    logoSrc: "",
    subtitle: "CORPORATE TRAINING & CONSULTANCY DIVISION",
    href: "/training-and-placement-cell",
  },
]


const sliderItems = [
  {
    id: 1,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/hear-clients-1.webp",
    text: "Goeld"
  },
  {
    id: 2,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/Jayaswal+Neco+Industries+Ltd.webp",
    text: "Jayaswal Neco Industries Ltd"
  },
  {
    id: 3,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/hear-clients-3.webp",
    text: "पुलिस प्रशिक्षण विद्यालय"
  },
  {
    id: 4,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/hear-clients-4.webp",
    text: "Real Ispat and Power Ltd."
  },
  {
    id: 5,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/Ramkrishna+Care+Hospitals.webp",
    text: "Ramkrishna Care Hospitals "
  },
  {
    id: 6,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/Sarda+Energy+%26+Minerals+Ltd..webp",
    text: "Sarda Energy & Minerals Ltd."
  },
  {
    id: 7,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/TMC.webp",
    text: "TMC"
  },
  {
    id: 8,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/94.3+MY+FM.webp",
    text: "94.3 MY FM"
  },
  {
    id: 9,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/Technoviz+Automation.webp",
    text: "Technoviz Automation"
  },
  {
    id: 10,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/from-clients-12.webp",
    text: "छत्तीसगढ़ पर्यावरण संरक्षण मंडल"
  }
]
const Items = [
  {
    id: 1,
    text: "Improved performance and output"
  },
  {
    id: 2,
    text: "Better decision-making"
  },
  {
    id: 3,
    text: "Enhanced employee engagement rate"
  },
  {
    id: 4,
    text: "Increased competitiveness"
  },
  {
    id: 5,
    text: "Improved leadership and team collaboration"
  },
  {
    id: 6,
    text: "Improved client/customer satisfaction"
  },
  {
    id: 7,
    text: "Stronger work culture and long-term profitability"
  }
]
const blueItems = [
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/abbott.png",
    imageAlt: "abbott",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/ag-enterprise.png",
    imageAlt: "ag-enterprise",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/central+bank+of+india.png",
    imageAlt: "central bank of india",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/cisco.png",
    imageAlt: "cisco",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/denso.png",
    imageAlt: "denso",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/edunet.png",
    imageAlt: "edunet",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/glenmarl.png",
    imageAlt: "glenmarl",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/godwari.png",
    imageAlt: "godwari",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/Group+75.png",
    imageAlt: "CCRC Logo-9",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/Group+83.png",
    imageAlt: "CCRC Logo-10",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/paytm.png",
    imageAlt: "paytm",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/saint-gobin.png",
    imageAlt: "saint-gobin",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/subros.png",
    imageAlt: "subros",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/suzuki.png",
    imageAlt: "suzuki",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/techonviz.png",
    imageAlt: "techonviz",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/industry/veterans.png",
    imageAlt: "veterans",
  }
]
const redItems = [
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/agenterprise.png",
    imageAlt: "agenterprise",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/care.png",
    imageAlt: "care",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/central+bank+of+india.png",
    imageAlt: "central bank of india",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/cisco.png",
    imageAlt: "cisco",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/edunet.png",
    imageAlt: "denso",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/eduskills.png",
    imageAlt: "eduskills",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/godwari.png",
    imageAlt: "godwari",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/Group+86.png",
    imageAlt: "mou",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/ibm.png",
    imageAlt: "ibm",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/incube.png",
    imageAlt: "incube",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/just.png",
    imageAlt: "just",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/singhania.png",
    imageAlt: "singhania",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/subros.png",
    imageAlt: "subros",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/techoviz.png",
    imageAlt: "techoviz",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/utkarsh.png",
    imageAlt: "utkarsh",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/veterans.png",
    imageAlt: "veterans",
  },
]
const accreditations = [
  { id: 1, name: 'clients-1', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-1.webp' },
  { id: 2, name: 'clients-2', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-2.webp' },
  { id: 3, name: 'clients-3', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-3.webp' },
  { id: 4, name: 'clients-4', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-4.webp' },
  { id: 5, name: 'clients-5', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-5.webp' },
  { id: 6, name: 'clients-6', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-6.webp' },
  { id: 7, name: 'clients-7', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-7.webp' },
  { id: 8, name: 'Clients-8', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-8.webp' },
  { id: 9, name: 'Clients-9', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-9.webp' },
  { id: 10, name: 'Clients-10', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-10.webp' },
  { id: 11, name: 'Clients-11', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/clients-we/clients-11.webp' },
]
const videoItems = [
  {
    id: 1,
    title: "Rajiv Chawla",
    description: "Integrated Association of MSME of India",
    thumbnail: "https://img.youtube.com/vi/Fy4fnnqU238/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=Fy4fnnqU238",
  },
  {
    id: 2,
    title: "Dr. Sumit Mitra",
    description: "Global Business Services & Tesco Bengal",
    thumbnail: "https://img.youtube.com/vi/lflHA63O7FQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=lflHA63O7FQ",
  },
  {
    id: 3,
    title: "Amar Pathak",
    description: "Resource Person",
    thumbnail: "https://img.youtube.com/vi/6otNYEFKnek/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=6otNYEFKnek",
  },
  {
    id: 4,
    title: "Prateek Singh",
    description: "Lead Corporate Affairs & Media Relations",
    thumbnail: "https://img.youtube.com/vi/hi2yJ5OPM5k/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=hi2yJ5OPM5k",
  },
]

const MentorIntroProps = [
  {
    cardClassName: "",
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/kif/Mr.+Pankaj+Tiwari.webp",
    title: "Mr. Pankaj Tiwari",
    subtitle: "Message from CCRC Head",
    department: "Director, Career & Corporate Resource Centre",
    message: [
      "CCRC is a platform where learning meets leadership, the right skillset meets industry requirements, and innovation turns into transformation. As the Head of the Career and Corporate Resource Centre (CCRC) at Kalinga University, it is my privilege to empower our students on their journey into the professional world and support corporates and working professionals in achieving maximum output.",
      "Beyond providing interview opportunities in our campus placement drives, we also ensure that every candidate is ready to confidently clear different interview rounds and get placed at top companies. Through aptitude training, resume-building sessions, expert-led workshops, industrial visits, live projects, mock interview preparation, and industry-focused curriculum, we make them ready for the global job market.",
      "Apart from training and placements, we offer customised solutions in multiple dimensions like corporate training, consultancy services, HRIS development, CSR initiatives, and incubation solutions for budding entrepreneurs.",
      "We approach every project with excellence and commitment. I sincerely thank all our recruitment partners for turning the aspirations of our students into rewarding careers and corporate partners for their continued trust and collaboration. I warmly welcome more companies and organisations to work with us and generate capable future leaders."
    ],
    quote: "Where Learning Transforms into Leadership and Skills Drive Corporate Success.",
  }
]
export default function CCRCPage() {
  return <>

    <ImageContent
      imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp"
      description="The Career and Corporate Resource Centre (CCRC) of Kalinga University bridges academic learning and industrial knowledge through collaborations and customised solutions. Our services include: Corporate Trainings & Psychometric Analysis, Consultancy Services: 360 Degree PMS & HRIS, Corporate Social Responsibility, Training and Placements, and Incubation support."
      additionalContent={[
        "With skill-based training programs, workshops, guest lectures, corporate mentorship, industrial visits, soft skill trainings, personality development workshops, internships, industrial training, campus placement drives, and industry-certified programs, we're able to maximise the output and save the time of students and working professionals, and build a future-ready workforce. The Centre features state-of-the-art infrastructure and resources that meet industry standards and has earned high appreciation from leading organisations across India and abroad. With experiential learning strategies and an updated curriculum, our students are placed at top companies, and corporate professionals have learned to deliver maximum output and maintain consistent performance."
      ]}
    />
    <ImageListItem items={Items} description="" imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-intro.jpg" title="Benefits for Organisations" />
    <DeptHeadIntro items={MentorIntroProps} />
    <SectionHeading
      title="Our Domains"
      titleClassName="text-center mt-10"
    />
    <Cards cards={cards} />
    <Hearfrom items={sliderItems} title="From Our Clients" />
    <MediaCardSlider
      categoryTitle=""
      title="Video Interviews"
      description=""
      videoItems={videoItems}
      cardBgClass="bg-white"
      nameTextClass="text-[var(--button-red)]"
      descriptionTextClass=""
      swiperClassName="ccrc-video-slider"
    />
    <Partner
      blueTitle="Industry Partner"
      redTitle="MoU Partners"
      blueItems={blueItems}
      redItems={redItems}
      ccrcLogo="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp"
    />
    <AccreditationRanking
      heading="Clients We Served"
      accreditations={accreditations}
    />
    <UpcomingConferences
      categoryIds={['']}
      title="Conferences & Events"
      fallback="all"
      limit={5}
      backgroundColor="bg-[var(--light-gray)]"
      backgroundColorcard="bg-white"
      href="/contact-us"
    />
    <Gallery title=" CCRC  Glimpse" paddingClassName="py-20" />

    <AdmissionCareer />


    {/* <CCrcContent /> */}
  </>;
}