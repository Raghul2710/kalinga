"use client"
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useFlipbook } from "../components/general/FlipbookContext";
import PublicationGrid from "../components/research/publication-grid";
import UGCLogo from "../components/research/ugc_logo";
import UpcomingConference from "../components/research/upcoming_conference";
import ProgramsOffered from "../components/department/programs-offered";
import OrganogramOfKalinga from "../components/about/organogram_of_kalinga";
import MainIntro from "../components/about/main_intro";
import QuickLinks from "../components/general/quick_links";
import FAQ from "../components/general/faq";
import ResearchSixGridButtons from "../components/research/research_six_grid-buttons";
import AdmissionCareer from "../components/general/admission_cta";
import UpcomingConferences from "../components/research/upcoming_conference";
import MentorIntro from "../components/department/dept_head_intro";
import CenterOfExcellence from "../components/about/center_of_excellence";
import AwardsScrollbar from "../components/home/awards-scrollbar";
import MediaCardSlider from "@/app/components/general/media-card-slider";
import Gallery from '../components/campuslife/campusgallery';
import Placements from "../components/home/placements";
import Partner from "../components/ccrc/partner";
import ImageListItem from '@/app/components/ccrc/imagelistitem'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/components/general/tab'
import CareerPath from '@/app/components/course/career_path'
import ImageContent from '@/app/components/ccrc/imagecontent'
import APITable from "../components/general/api-table";
import GlobalArrowButton from "../components/general/global-arrow_button";
import FlipbookTrigger from "../components/general/FlipbookTrigger";

export default function Research() {
  const { openFlipbook } = useFlipbook();
  const pathname = usePathname();



  const blueItems = [
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/infosys.webp",
      imageAlt: "Infosys",
    },
    // {
    //   imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/byjus.webp",
    //   imageAlt: "Byjus",
    // },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/capgemini.webp",
      imageAlt: "Capgemini",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/airtel.webp",
      imageAlt: "Airtel",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/amul.webp",
      imageAlt: "Amul",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/cipla.webp",
      imageAlt: "Cipla",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/wipro.webp",
      imageAlt: "Wipro",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/adani.webp",
      imageAlt: "Adani",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/bosch.webp",
      imageAlt: "Bosch",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/biocon.webp",
      imageAlt: "Biocon",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/apollo.webp",
      imageAlt: "Apollo",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/asahi.webp",
      imageAlt: "Asahi",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/axis.webp",
      imageAlt: "Axis",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/cognizant.webp",
      imageAlt: "Cognizant",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/suzuki.webp",
      imageAlt: "Suzuki",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/himalaya.webp",
      imageAlt: "Himalaya",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/decathlon.webp",
      imageAlt: "Decathlon",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/force.webp",
      imageAlt: "Force",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/goorej.webp",
      imageAlt: "Godrej",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/genpact.webp",
      imageAlt: "Genpact",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/hdfc.webp",
      imageAlt: "HDFC",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/jio.webp",
      imageAlt: "Jio",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/justdail.webp",
      imageAlt: "Justdial",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/lg.webp",
      imageAlt: "LG",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/nestle.webp",
      imageAlt: "Nestle",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/sail.webp",
      imageAlt: "SAIL",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/tata-motors.webp",
      imageAlt: "Tata Motors",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/tech+mahindra.webp",
      imageAlt: "Tech Mahindra",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ultratech.webp",
      imageAlt: "UltraTech",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/agenterprise.png",
      imageAlt: "AG Enterprise",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/care.png",
      imageAlt: "CARE",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/central+bank+of+india.png",
      imageAlt: "Central Bank of India",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/cisco.png",
      imageAlt: "Cisco",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/edunet.png",
      imageAlt: "EduNet",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/eduskills.png",
      imageAlt: "EduSkills",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/godwari.png",
      imageAlt: "Godwari",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/Group+86.png",
      imageAlt: "MoU Partner",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/ibm.png",
      imageAlt: "IBM",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/incube.png",
      imageAlt: "InCube",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/just.png",
      imageAlt: "Just",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/singhania.png",
      imageAlt: "Singhania",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/subros.png",
      imageAlt: "Subros",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/techoviz.png",
      imageAlt: "Techoviz",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/utkarsh.png",
      imageAlt: "Utkarsh",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/mou/veterans.png",
      imageAlt: "Veterans",
    },
  ]
  const skillsContent = {
    title: "Preparing You With Relevant Skills",
    description: "We stand as one of the highest campus placement universities in Chhattisgarh, as we strategically work at every step until students land their dream job.",
    careers: [
      {
        id: 1,
        title: "Aptitude Training",
        description: "We conduct classes on logical reasoning, quantitative aptitude, and analytical skills, which prepare students for pre-employment tests.",
        imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/icons/Aptitude+Training.svg",
        imageAlt: "Aptitude Training",
      },
      {
        id: 2,
        title: "Certification Programs",
        description: "We offer short-term and skill-oriented certification programs that will introduce them to trending tools and technologies so that they can impress the interviewers.",
        imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/icons/Certification+Programs.svg",
        imageAlt: "Certification Programs",
      },
      {
        id: 3,
        title: "Communication Skills",
        description: "Our T&P cell conducts personalised sessions on English speaking skills, email writing, and presentation skills.",
        imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/icons/Communication+Skills.svg",
        imageAlt: "Communication Skills",
      },
      {
        id: 4,
        title: "Resume Building",
        description: "Our workshops guide students in preparing a well-structured resume that highlights their strengths, skills, projects, and internships.",
        imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/icons/Resume+Building.svg",
        imageAlt: "Resume Building",
      },
      {
        id: 5,
        title: "Interview Preparation",
        description: "A special session is conducted where students are trained with mock interviews and group discussions so that they can clear each round without any hesitation.",
        imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/icons/Interview+Preparation.svg",
        imageAlt: "Interview Preparation",
      },
    ]
  }
  const milestones = [
    { value: "400", label: "Recruitment Partners" },
    { value: "12 L ", label: "Highest Package" },
    { value: "4 Lakh ", label: "Average Package" },
  ]

  const links = [
    {
      id: 7,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/elgbility.svg",
      title: "Career Counselling",
      description: "We strongly emphasise career counselling for students, and thus, we have a team of counsellors who provide students with a roadmap on how they can achieve their career goals. They help them identify their interests first, and according to that, they introduce them to our programs. They will always guide students at any stage of their journey at KU until they get placed.",
      href: "/training-and-placement-cell",
    },
    {
      id: 8,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/Value+addition.svg",
      title: "Soft Skills Development",
      description: "Apart from degrees, a student must know communication skills, interpersonal skills, decision-making skills, problem-solving abilities, emotional intelligence, and career-focused skills for overall personality development. Our soft skills training programs are inclusive of all the above skill sets and are a part of our curriculum.",
      href: "/value-added-course",
    },
    {
      id: 9,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/icons/Curriculum.svg",
      title: "Language Lab",
      description: "The English language lab gives students a profound learning experience where they can work on key areas like listening, speaking, reading, writing, grammar, and vocabulary. It improves their confidence and fluency, enabling them to communicate clearly.",
      href: "/academic-facilities",
    },
    {
      id: 10,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/Value+addition.svg",
      title: "Bridge Courses",
      description: "We provide bridge courses in subjects like Physics, Chemistry, Maths, English, and more to students who come from different academic backgrounds. The well-defined syllabus helps to grasp the essential concepts of different subjects.",
      href: "/international-students#bridge-course",
    },
    {
      id: 11,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/scholarship.svg",
      title: "Competitive Exams Coaching",
      description: "We prepare our students to compete in various National and International level competitive exams like GATE, GRE, GMAT, CAT, IAS, UPSC, IELTS, TOEFL, IBPS, PSC, SSC, NET, etc.",
      href: "/entrance-exam",
    },
    {
      id: 12,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/elgbility.svg",
      title: "Remedial Coaching",
      description: "We support every learner's needs through remedial coaching. Slow learners receive extra classes and assignments, while fast learners are encouraged to do research work and take up challenging projects.",
      href: "/training-and-placement-cell",
    },
  ]
  const links2 = [
    {
      id: 1,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Entrepreneurial+Thinking.svg",
      title: "Entrepreneurial Thinking ",
      description: "We’re here to put your entrepreneurial ideas into action. Here, you will not just dream but build something real that solves people's problems.",
    },
    {
      id: 2,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Backed+By+Powerful+Resources.svg",
      title: "Backed By Powerful Resources",
      description: "You won’t need to hassle anywhere to build your company; get complete support under one roof. From brainstorming ideas to product selling, you are free to utilise our in-house resources at any time.",
    },
    {
      id: 3,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Build+Networks.svg",
      title: "Build Networks",
      description: "We organise industrial visits, seminars, guest lectures, and industrial talks every week, which help our young minds build new connections and clarity in launching their businesses.",
    },

  ]
  const videoItems = [
    {
      id: 1,
      name: "Anant Jha",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Anant+Jha+CCRC+Placement+Video.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Anant+Jha.jpg",
      description: "Pharmachy department",
    },
    {
      id: 2,
      name: "Ashley Christina Thomas",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Ashley+Christina+Thomas+CCRC+Placement+Video.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Ashley+Christina+Thomas.jpg",
      description: "Pharmachy department",
    },
    {
      id: 3,
      name: "David Kisku",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/David+Kisku+CCRC+Placement+Video.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/David+Kisku.jpg",
      description: "Pharmachy department",
    },
    {
      id: 4,
      name: "Hrithik Kumar Sharma",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Hrithik+Kumar+Sharma+CCRC+Placement+Video.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Hrithik+Kumar+Sharma.jpg",
      description: "MBA Student",
    },
    {
      id: 5,
      name: "Laxmi Bharti",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Laxmi+Bharti+CCRC+Placement+Video.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Laxmi+Bharti.jpg",
      description: "MBA Student",
    },
    {
      id: 6,
      name: "Prachi Sahu",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Prachi+Sahu+CCRC+Placement+Video.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Prachi+Sahu.jpg",
      description: "MBA Student",
    },
    {
      id: 7,
      name: "Shiwangi Sinha",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Shiwangi+Sinha+CCRC+Placement+Video.mp4",
      description: "Pharmachy department",
    },
  ]
  const videoItems3 = [
    {
      id: 1,
      name: "Anant Jha",
      videoUrl: "",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Aditi+singh.jpeg",
      description: "Aditya Birla Fashion Retail Ltd.",
      title: "Aditi Singh - BBA",
    },
    {
      id: 2,
      name: "Ashley Christina Thomas",
      videoUrl: "",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Maryam+Nasiru.jpeg",
      description: "Artemis Hospital, Gurugram",
      title: "Maryam Nasiru - BPHARMA",

    },
    {
      id: 3,
      name: "David Kisku",
      videoUrl: "",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Nayna.jpeg",
      description: "Tata Steel Ltd.",
      title: "Nayna Chakhiyar - BCOM B&F",
    },
    {
      id: 4,
      name: "Hrithik Kumar Sharma",
      videoUrl: "",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Trupti+Ranjan+Sahu.jpeg",
      description: "Aditya Birla Group",
      title: "Trupti Ranjan Sahu - MBA",
    },
  ]
  const videoItems2 = [
    {
      id: 1,
      name: "SGS Technical Services Pvt Ltd ",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/rec-1.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/rec-1.png",
      description: "Abhijeet Lal - IndusInd Bank Ltd",
    },
    {
      id: 2,
      name: "9M India Limited",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/rec-2.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/rec-2.png",
      description: "Abhinav Khandelwal - B Plan Advisors",
    },
    {
      id: 3,
      name: "Hirojet Campus Drive",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/rec-3.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/rec-3.png",
      description: "Abhishek Doijode - TCS",
    },
    {
      id: 4,
      name: "Airtel Campus Drive",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/rec-4.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/rec-4.png",
      description: "Nikhil Rao - Shelar",
    },
    {
      id: 5,
      name: "Airtel Campus Drive",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/rec-5.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/rec-5.png",
      description: "Sneha Shinde - Justdial",
    },
  ];

  const videoItems1 = [
    {
      id: 1,
      name: "SGS Technical Services Pvt Ltd ",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Campus+Drives/SGS+Technical+services+Pvt.+ltd+Campus+Drive.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Campus+Drives/campus-1.png",
      description: "SGS Technical Services Pvt Ltd",
    },
    {
      id: 2,
      name: "9M India Limited",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Campus+Drives/9M+india+limited+Campus+Drive+CCRC.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Campus+Drives/campus-2.png",
      description: "9M India Limited",
    },
    {
      id: 3,
      name: "Hirojet Campus Drive",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Campus+Drives/Hirojet+Campus+Drive.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Campus+Drives/campus-3.png",
      description: "Hirojet",
    },
    {
      id: 4,
      name: "Airtel Campus Drive",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Campus+Drives/Airtel+Campus+Drive.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Campus+Drives/campus-4.png",
      description: "Airtel",
    },
  ];

  const items = [
    {
      id: 1,
      text: "To provide career counselling services for skill development and better job opportunities"
    },
    {
      id: 2,
      text: "To organise pre-placement training, which includes soft skills, group discussions, resume writing, and mock interviews"
    },
    {
      id: 3,
      text: "To organise guest lectures, seminars, workshops, industrial visits, and certification programs"
    },
    {
      id: 4,
      text: "To invite companies for campus placements drives"
    },
    {
      id: 5,
      text: "To facilitate internships and job opportunities through campus placement drives"
    },
    {
      id: 6,
      text: "To promote entrepreneurial skills among students"
    },
    {
      id: 7,
      text: "To maintain an updated record of students' skills to match them with current industry requirements for better placement opportunities"
    },
    {
      id: 8,
      text: "To regularly monitor placement activities and generate feedback to improve students' performance in interviews"
    },
  ]

  const placementColumns = [
    { key: "slNo", label: "S.No", width: "w-16" },
    { key: "name", label: "Name of Student", width: "w-64" },
    { key: "program", label: "Program Name", width: "w-64" },
    { key: "session", label: "Session", width: "w-32" },
    { key: "company", label: "Company Name", width: "flex-1" }
  ];

  const placementData = [
    { slNo: 1, name: "Ritesh Tiwari", program: "B. Computer Science AI & ML", session: "2023-2026", company: "TTEC" },
    { slNo: 2, name: "Prachi Sahu", program: "MBA", session: "2023-2025", company: "Bharti Airtel" },
    { slNo: 3, name: "Kriti Rajput", program: "B.Tech Civil Engineering", session: "2021-2025", company: "Ultratech Cement" },
    { slNo: 4, name: "Aashutosh Mishra", program: "LLB", session: "2022-2025", company: "Piramal Foundation" },
    { slNo: 5, name: "Kashish Bawne", program: "BSc Computer Science", session: "2022-2025", company: "Accenture" },
    { slNo: 6, name: "Aryan Prakash Gupta", program: "MBA", session: "2023-2025", company: "TCS" },
    { slNo: 7, name: "Ashley Christeena Thomas", program: "B. Pharma", session: "2021-2025", company: "Boston Scientific" },
    { slNo: 8, name: "Anisha Hussain", program: "MBA", session: "2023-2025", company: "Haleon" },
    { slNo: 9, name: "Ajay Sharma", program: "BCA", session: "2022-2025", company: "Prodesk IT & Engineering Services" },
    { slNo: 10, name: "Sayyad Sinwan Awez", program: "B.Tech Computer Science Engineering", session: "2021-2025", company: "Quality Kiosk" },
    { slNo: 11, name: "Jigyasa Sahu", program: "BA Journalism & Mass Communication", session: "2022-2025", company: "Brandcom PR" },
    { slNo: 12, name: "Sanskar Dewangan", program: "B Pharma", session: "2021-2025", company: "9M India Limited" },
    { slNo: 13, name: "Supriya Kadti", program: "MBA", session: "2023-2025", company: "Univesto Capital" },
    { slNo: 14, name: "Anish Dewangan", program: "MBA", session: "2023-2025", company: "ITSA Hospitals" },
    { slNo: 15, name: "Nitin Yadav", program: "MBA", session: "2023", company: "Wangfeng Wheels Pvt Ltd" },
    { slNo: 16, name: "Nupur Mourya", program: "BA Journalism & Mass Communication", session: "2024", company: "HITACHI - CHENNAI & NOIDA" },
    { slNo: 17, name: "Abhinandan Kumar", program: "B.Tech Mechanical Engineering", session: "2023", company: "Piaggio" },
    { slNo: 18, name: "Priyata Roy", program: "M Pharma", session: "2024", company: "Genpact" },
    { slNo: 19, name: "Swati Dewangan", program: "M.Tech Civil Engineering", session: "2023", company: "Cummins India Ltd" },
    { slNo: 20, name: "Amar Kumar", program: "B.Tech Civil Engineering", session: "2023", company: "Ultratech Cement Pvt Ltd" },
    { slNo: 21, name: "Anjali Gajghate", program: "MCA", session: "2023", company: "Fiducia Labs Pvt Ltd" },
    { slNo: 22, name: "Hrishabh Biswas", program: "B.Tech Civil Engineering", session: "2023", company: "Adani Group" },
    { slNo: 23, name: "Ayush", program: "Diploma Electrical Engineering", session: "2023", company: "SUBROS LTD" },
    { slNo: 24, name: "Tejas Nahargadkar", program: "B.Tech Computer Science Engineering", session: "2023", company: "Cisco Systems (India) Pvt. Ltd." },
    { slNo: 25, name: "Ritesh Kumar", program: "B. Sc", session: "2022", company: "Wipro Ltd." },
    { slNo: 26, name: "DIVESH PANDEY", program: "B.Pharma", session: "2022", company: "ALEMBIC PHARMA" },
    { slNo: 27, name: "Madhuri Singh", program: "B.ED.", session: "2022", company: "KPS Raipur" },
    { slNo: 28, name: "Shibani Dey", program: "BA Journalism & Mass Communication", session: "2022", company: "Paharaa TV" },
    { slNo: 29, name: "Palash Mandal", program: "M.Sc Chemistry", session: "2022", company: "Aurobindo Pharma Ltd." },
    { slNo: 30, name: "Namita Sharma", program: "B.Sc Biotechnology", session: "2023", company: "BALCO MEDICAL CENTRE" },
    { slNo: 31, name: "Ankit Yadav", program: "Diploma Mechanical Engineering", session: "2022", company: "DIXON TECHNOLOGIES INDIA LTD" },
    { slNo: 32, name: "Vaishnav Santosh", program: "B.Tech Computer Science Engineering", session: "2024", company: "TechMahindra" },
    { slNo: 33, name: "Ankita Shrivastava", program: "LLM", session: "2020", company: "Ernst & Young LLP" },
    { slNo: 34, name: "Abhishek Namdeo", program: "B.Com", session: "2021", company: "Godrej & Boyce Mfg. Co. Ltd." },
    { slNo: 35, name: "Dolly Bagal", program: "MBA", session: "2019", company: "LG Electronics India Pvt. Ltd." },
    { slNo: 36, name: "Harish Jaiswal", program: "B.Pharma", session: "2020", company: "Lex Process Outsourcing Pvt. Ltd." },
    { slNo: 37, name: "Himanshi Bedi", program: "MBA", session: "2020", company: "Chegg India" },
    { slNo: 38, name: "NISHA KUMARI", program: "MBA", session: "", company: "Nestle" },
    { slNo: 39, name: "Aditi Choudhary", program: "MBA", session: "2023", company: "Mahindra Finance" },
    { slNo: 40, name: "Khushboo Taank", program: "LLB", session: "2022", company: "RBP LAW CHAMBERS" },
    { slNo: 41, name: "Rahul Agrawal", program: "MBA", session: "2023-2025", company: "VE Commercial Vehicles" },
  ];

  const internshipTables = [
    { id: 44, title: "Training & Internship for Session 2024-25" },
    { id: 43, title: "Training & Internship for Session 2023-24" },
    { id: 42, title: "Training & Internship for Session 2022-23" },
    { id: 45, title: "Training & Internship for Session 2021-22" },
  ];

  const annualReportButtons = [
    {
      id: 1,
      text: "Annual Report 2022–23 (Volume I)",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/Annual-Report-2022-23-(Vol-1).pdf",
    },
    {
      id: 2,
      text: "Annual Report 2022–23 (Volume II)",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/Annual+Report+2022-23+(Vol.+2).pdf",
    },
    {
      id: 3,
      text: "Annual Report 2021–22 (Volume I)",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/Annual+Report-2021-22+(Vol.+1).pdf",
    },
    {
      id: 4,
      text: "Annual Report 2021–22 (Volume II)",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/Annual-Report-2021-22-(Vol-2).pdf",
    },
    {
      id: 5,
      text: "Annual Report 2020–21",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/Annual-Report-2020-21.pdf",
    },
    {
      id: 6,
      text: "Annual Report 2019–20",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/FINAL+ANNUAL+REPORT+2019-20_09-01-2021.pdf",
    },
    {
      id: 7,
      text: "Annual Report 2018–19",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/FINAL+ANNUAL+REPORT+2018-19_15-01-2021.pdf",
    },
    {
      id: 8,
      text: "Annual Report 2017–18",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/FINAL+ANNUAL+REPORT+2017-18_18-01-2021.pdf",
    },
    {
      id: 9,
      text: "Annual Report 2016–17",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/FINAL+ANNUAL+REPORT_2016-17_18-01-2021.pdf",
    },
    {
      id: 10,
      text: "Annual Report 2015–16",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/FINAL+ANNUAL+REPORT_2015-16_18-01-2021.pdf",
    },
    {
      id: 11,
      text: "Annual Report 2014–15",
      href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/FINAL+ANNUAL+REPORT_2014-15_18-01-2021.pdf",
    },
  ];

  const internshipFAQItems = internshipTables.map(item => ({
    id: item.id,
    question: item.title,
    component: (
      <APITable
        tableId={item.id.toString()}
        className="py-0"
        overflowX={true}
        showTableTitle={false}
        nested={true}
        maxHeight="max-h-[600px]"
        excludeColumns={["Certificate No.", "Certificate No"]}
      />
    )
  }));
  return (
    <>
      <MainIntro
        title="Shaping Your Career with the Right Opportunities"
        subtitle="Successful Placement Track Record"
        description={[
          "Your journey from the classroom to the corporate world begins at Kalinga University. KU offers personalised training and conducts campus drives each year so that you can begin your professional journey right after you graduate. We just don’t teach you the curriculum, but we train, guide, and connect you with industry leaders. We help students build confidence to clear any interview by securing top positions and packages in leading companies."]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-intro.jpg"
        imageAlt="Kalinga University Research"
        initialVisibleParagraphs={1}
        showKnowMore={true}
      />
      <Partner
        blueTitle="Best Campus Placement University in Chhattisgarh"
        redTitle="MoU Partners"
        blueItems={blueItems}
        ccrcLogo="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp"
        singleColumn={true}
        milestones={milestones}
        description="Maintaining the track record of providing students with the best job opportunities and rewarding salary packages at top companies."
        footerText="Trusted by 400+ Global Recruiters"
        noContainer={true}
      />
      <MediaCardSlider
        categoryTitle=""
        title="Campus Drives"
        videoItems={videoItems1}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        descriptionTextClass=""
        swiperClassName="ccrc-video-slider"
      />
      <QuickLinks
        links={links}
        title="Training Initiatives Of Kalinga’s TnP Cell"
        description="Kalinga University's placement program bridges academia and industry with 400+ recruitment partners, comprehensive training, and dedicated support to prepare students for successful careers in top companies."
        backgroundColor="bg-white"
        textColorClassName="text-black"
        showReadMore={true}
      />

      <MainIntro
        title="Objectives of Training"
        description={[
          "The Career and Corporate Centre of Kalinga University is a hub for career guidance and training, and corporate partnerships. With modern infrastructure and resources, the centre meets industry standards and has even received appreciation from top organisations. The Kalinga University campus placements support cell introduces you to the professional world. We don't just prepare you for the corporate world, but give you a 360-degree training so that you can turn out to be a confident individual who is ready to tackle any challenge in life.",
          "With our personalised training programs, expert-led sessions, and interview preparation, you will be well-prepared to clear any job interview according to your skill set. Our expert mentors go beyond and guide you with skills that companies are looking for in the current job market, and even update the training modules accordingly. Apart from this, we also keep the database of job openings in various companies up-to-date, so that our students don't miss out on any opportunities. With our strong industry connections, we conduct campus drives each year, ensuring that our graduates are placed in leading companies with competitive salary packages."
        ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/placemnt-intro.webp"
        imageAlt="Objectives"
        initialVisibleParagraphs={1}
        showKnowMore={true}
        reverseLayout={true}
        applyTransform3dSlant={false}
      />

      <ImageListItem items={items} description="" imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/placement-intro-2.webp" title="Training And Placement Cell" />
      <div className="container mx-auto mt-8 rounded-2xl bg-[var(--card-gray)] p-5 md:p-7">
        <Tabs defaultValue="tab1">
          <TabsList className="gap-0">
            <TabsTrigger value="tab1">Training Programs</TabsTrigger>
            <TabsTrigger value="tab2">Student Training Initiatives</TabsTrigger>
          </TabsList>

          <TabsContent value="tab1" className="pt-7">
            <div className="space-y-8">
              <div>
                <h3 className="font-stix text-2xl text-[var(--foreground)] mb-4">
                  Campus Recruitment Training (CRT)
                </h3>
                <p className="text-[var(--light-text-gray)] leading-relaxed">
                  Companies today look for graduates who don't just excel in academics but also possess some real workplace skills like problem-solving, communication, and confidence. Our Campus Recruitment Training (CRT) offers a 100-hour training cycle on attitude (50 hours) and aptitude (50 hours) and prepares students for early success. It aligns their career goals with employer expectations, making them job-ready. It includes behavioural and personality development skills and training in relevant tools and techniques, preparing students for initial corporate screenings.
                </p>
              </div>

              <div>
                <h4 className="font-stix text-xl  text-[var(--foreground)] mb-3">
                  Learning Methodology
                </h4>
                <p className="text-[var(--light-text-gray)] mb-3">
                  The CRT training follows the "Learn, Practice & Apply" model through:
                </p>
                <ul className="list-disc list-inside text-[var(--light-text-gray)] space-y-2 ml-4">
                  <li>Interactive classroom sessions</li>
                  <li>Role plays and case studies</li>
                  <li>Mock interviews</li>
                  <li>One-on-one feedback sessions</li>
                  <li>Self-assessment exercises</li>
                </ul>
              </div>

              <div>
                <h3 className="font-stix text-2xl text-[var(--foreground)] mb-4">
                  Corporate Employment Assessment Test (CEAT)
                </h3>
                <p className="text-[var(--light-text-gray)] leading-relaxed">
                  Want to know if you are ready for interviews or if your skills match recruiters' requirements?
                </p>
                <p className="text-[var(--light-text-gray)] leading-relaxed text-justifymt-3">
                  Introducing Corporate Employability Assessment Test (CEAT)! A test that is designed to evaluate students' job-readiness by measuring their aptitude, technical skills, and communication skills as per industry standards. This test further helps our experts pinpoint the student skill gaps, enabling us to design tailored training programs and make them ready to ace job interviews.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tab2" className="pt-7">
            <div className="space-y-8">
              <div>
                <h3 className="font-stix text-2xl text-[var(--foreground)] mb-4">
                  Our Student Training Initiatives
                </h3>
                <p className="text-[var(--light-text-gray)] leading-relaxed">
                  The training and placement cell takes the conventional idea of campus training to a whole new dimension where learnings are transformed into employability. Our student training initiatives are designed to make you confident, skilled, and emotionally intelligent, qualities that companies actively seek. With the winning combination of "Qualification + Skills", you'll be prepared not just for your first job but for a lifetime of success.
                </p>
              </div>

              <div>
                <h4 className="font-stix text-xl  text-[var(--foreground)] mb-3">
                  Meta Skills Training
                </h4>
                <p className="text-[var(--light-text-gray)] leading-relaxed text-justifymb-4">
                  Built on the principle that employability is not taught but developed, this program covers 350+ hours of structured training on job-ready skills and maximises students' career potential. Through behavioural training, experiential learning, and corporate simulations, this Empowerment for Employability and Entrepreneurship (EEE) model bridges the gap between theoretical knowledge and corporate expectations.
                </p>

                <div className="mb-4">
                  <h5 className="font-stix text-lg  text-[var(--foreground)] mb-2">
                    Core Objectives:
                  </h5>
                  <ul className="list-disc list-inside text-[var(--light-text-gray)] space-y-2 ml-4">
                    <li>Conducted alongside academic semesters</li>
                    <li>Credit-based structured modules</li>
                    <li>Includes classroom sessions, workshops, and live projects</li>
                    <li>Continuous evaluation based on participation, assignments, and projects</li>
                    <li>Step-by-step professional development of students</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h5 className="font-stix text-lg  text-[var(--foreground)] mb-2">
                    Methodology:
                  </h5>
                  <p className="text-[var(--light-text-gray)] mb-3">
                    The module combines industrial learning with personalised mentorship through:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className=" text-[var(--foreground)] mb-1">Industry-Focused Approach -</p>
                      <ul className="list-disc list-inside text-[var(--light-text-gray)] space-y-1 ml-4">
                        <li>Experiential activities, role-plays, and group discussions</li>
                        <li>Mentorship from industry experts</li>
                        <li>Self-assessment exercises and one-on-one feedback sessions</li>
                      </ul>
                    </div>
                    <div>
                      <p className=" text-[var(--foreground)] mb-1">Individual-Focused Approach -</p>
                      <ul className="list-disc list-inside text-[var(--light-text-gray)] space-y-1 ml-4">
                        <li>Identifying their strengths, challenges, and interests</li>
                        <li>Setting personalised career paths and actionable goals</li>
                        <li>Mentorship on future-ready skills</li>
                        <li>Evaluation and progress monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-stix text-lg  text-[var(--foreground)] mb-2">
                    Year-Wise Development Modules:
                  </h5>
                  <ul className="list-disc list-inside text-[var(--light-text-gray)] space-y-2 ml-4">
                    <li><strong>First-Year Foundation Module</strong> - Development of goals, life skills, self-awareness, and confidence building</li>
                    <li><strong>Mid-Year Orientation Module</strong> - Customised training on leadership, mental and emotional well-being, communication skills, presentation skills, problem-solving skills, and personality development</li>
                    <li><strong>Final-Year Nirvana Module</strong> - Focused training on core industry skills, people skills, networking opportunities, managerial skills, business development, and creative and technology skills</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-stix text-xl  text-[var(--foreground)] mb-3">
                  Apti Mitra Module
                </h4>
                <p className="text-[var(--light-text-gray)] leading-relaxed">
                  It is an aptitude training program that focuses on quantitative, logical, analytical, and verbal reasoning, preparing students for placement tests and other competitive exams.
                </p>
              </div>

              <div>
                <h4 className="font-stix text-xl  text-[var(--foreground)] mb-3">
                  Outbound Training
                </h4>
                <p className="text-[var(--light-text-gray)] leading-relaxed">
                  This training program will take your learning outside the classroom and step you into real-world situations. Through team-building exercises and industrial visits, students develop qualities like leadership, collaboration, and problem-solving, making them professionals who are ready for placement in top companies and lifelong success.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <CareerPath
        title={skillsContent.title}
        description={skillsContent.description}
        careers={skillsContent.careers}
      />
      {/* <ImageContent
        hasImage={false}
        buttonText={false}
        buttonLink=""
        className="items-center justify-center"
        title="Internship Opportunities At KU"
        subtitleclassName="hidden"
        description={
          <>
            At KU, you don’t have to wait till graduation, but we’ll help you get a sneak peek into the practical world with our internship programs, which will also make your CV stand out during your job interviews.
          </>
        }
      /> */}
      <Placements hideMarquee={true} hideMilestones={true} bgColor="bg-[var(--light-gray)] mx-2 rounded-xl" marginClassName="mb-0" />
      <MediaCardSlider
        categoryTitle="Video Interviews"
        title="Hear From Our Success Stories"
        videoItems={videoItems}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        descriptionTextClass=""
        swiperClassName="ccrc-video-slider"
      />
      <QuickLinks title="Entrepreneurship & Startup Support" titleClassName="text-white" links={links2} description="We're here to put your entrepreneurial ideas into action. Here, you will not just dream but build something real that solves people's problems." showReadMore={false} />
      <MediaCardSlider
        categoryTitle=""
        title="Recruiters Testimonials"
        videoItems={videoItems2}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        descriptionTextClass=""
        swiperClassName="ccrc-video-slider"
        imageObjectPosition="object-bottom"
      />
      <section className="pt-16 pb-16 bg-white">
        <div className="container mx-auto px-6">

          {/* ✅ PAGE HEADING */}
          <div className="mb-10 text-center">
            <h2 >
              Annual Reports
            </h2>
            <p className="text-[16px] text-[#555] leading-relaxed">
              Our annual reports will give you a detailed overview of the University’s growth and achievements.
              These reports show transparency, academic excellence, and overall institutional development.
            </p>
          </div>

          {/* ✅ BUTTON GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {annualReportButtons.map((item) => (
              <FlipbookTrigger key={item.id} pdfUrl={item.href} title={item.text}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <GlobalArrowButton
                    className="!w-full h-[60px] justify-between"
                    arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                    arrowSize={29}
                  >
                    {item.text}
                  </GlobalArrowButton>
                </a>
              </FlipbookTrigger>
            ))}
          </div>

        </div>
      </section>
      <FAQ
        title="Our Successful Placement Record"
        variant="button"
        subtitle=""
        buttons={[
          {
            id: 1,
            title: "Placements 2022-2023",
            description: "Annual placement reports and detailed placement statistics for the academic year 2022-2023.",
            buttons: [
              {
                label: "Annual Report",
                onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/KALINGA+Placement+Annaul+Report_2022-23.pdf", "_blank")
              },
              {
                label: "Placement Details",
                onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement+Details+(2022-23).pdf", "_blank")
              }
            ]
          },
          {
            id: 2,
            title: "Placements 2021-2022",
            description: "Annual placement reports and detailed placement statistics for the academic year 2021-2022.",
            buttons: [
              {
                label: "Annual Report",
                onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/KALINGA+Placement+Annual+Report_2021-22.pdf", "_blank")
              },
              {
                label: "Placement Details",
                onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement+Details+(2021-22).pdf", "_blank")
              }
            ]
          },
          {
            id: 3,
            title: "Placements 2020-2021",
            description: "Annual placement reports and detailed placement statistics for the academic year 2020-2021.",
            buttons: [
              {
                label: "Annual Report",
                onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/KALINGA+Placement+Annual+Report_2020-21.pdf", "_blank")
              },
              {
                label: "Placement Details",
                onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement+Details+(2020-21).pdf", "_blank")
              }
            ]
          },
          {
            id: 4,
            title: "Placements 2019-2020",
            description: "Annual placement reports and detailed placement statistics for the academic year 2019-2020.",
            buttons: [
              {
                label: "Annual Report",
                onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/KALINGA+Placement+Annual+Report_2019-20.pdf", "_blank")
              },
              {
                label: "Placement Details",
                onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement+Details+(2019-20).pdf", "_blank")
              }
            ]
          },
          {
            id: 5,
            title: "Placements 2018-2019",
            description: "Annual placement reports and detailed placement statistics for the academic year 2018-2019.",
            buttons: [
              {
                label: "Annual Report",
                onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/KALINGA+Placement+Annual+Report_2018-19.pdf", "_blank")
              },
              {
                label: "Placement Details",
                onClick: () => window.open("https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement+Details(2018-19).pdf", "_blank")
              }
            ]
          }
        ]}
      />
      <MediaCardSlider
        categoryTitle=""
        title="Internship Opportunities At KU"
        description="At KU, you don’t have to wait till graduation, but we’ll help you get a sneak peek into the practical world with our internship programs, which will also make your CV stand out during your job interviews."
        videoItems={videoItems3}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        descriptionTextClass=""
        swiperClassName="ccrc-video-slider"
      />

      <FAQ
        items={internshipFAQItems}
        title=""
        showHeading={false}
        variant="default"
        pyClassName=""
      />
      <Gallery
        title="Industrial Visit"
        description=""
        images={[
          { id: 1, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-glimple-1.webp", alt: "Training and Placement Gallery 1" },
          { id: 2, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-glimple-2.webp", alt: "Training and Placement Gallery 2" },
          { id: 3, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-glimple-3.webp", alt: "Training and Placement Gallery 3" },
          { id: 4, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-glimple-4.webp", alt: "Training and Placement Gallery 4" },
          { id: 5, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-glimple-5.webp", alt: "Training and Placement Gallery 5" },
          { id: 6, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-1.jpeg", alt: "International Students Introduction" },
          { id: 7, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-2.jpeg", alt: "Why Choose Kalinga University" },
          { id: 8, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-3.jpeg", alt: "International Students Group" },
          { id: 9, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-4.jpg", alt: "Campus Safety and Security" },
          { id: 10, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-5.jpg", alt: "International Students Banner" },
          { id: 11, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-6.jpg", alt: "International Students Banner" },
          { id: 12, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-7.jpg", alt: "International Students Banner" },
          { id: 13, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-8.jpg", alt: "International Students Banner" },
          { id: 14, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-9.jpg", alt: "International Students Banner" },
          { id: 15, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-10.jpg", alt: "International Students Banner" },
          { id: 16, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-11.jpg", alt: "International Students Banner" },
          { id: 17, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-12.jpg", alt: "International Students Banner" },
          { id: 18, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-13.jpg", alt: "International Students Banner" },
          { id: 19, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-14.jpg", alt: "International Students Banner" },
          { id: 20, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-15.jpg", alt: "International Students Banner" },
          { id: 21, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-16.jpg", alt: "International Students Banner" },
          { id: 22, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-17.jpg", alt: "International Students Banner" },
          { id: 23, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-18.jpg", alt: "International Students Banner" },
          { id: 24, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-19.jpg", alt: "International Students Banner" },
        ]}
      />
      <AdmissionCareer />
    </>
  );
}