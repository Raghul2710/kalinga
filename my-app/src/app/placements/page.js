"use client"
import { useEffect } from "react";
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
import Placements from "../components/home/placements";
import Partner from "../components/ccrc/partner";


// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/alumini/alumini.webp",
  imageposition: "object-center",
  pageTitle: "Placements",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Placements', href: '/placements' }
  ]
};


export default function Research() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
  }, []);
  
  const blueItems = [
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/infosys.webp",
      imageAlt: "Infosys",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/byjus.webp",
      imageAlt: "Byjus",
    },
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
      href: "/value-added-course",
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
      description: "MBU Student",
    },
    {
      id: 5,
      name: "Laxmi Bharti",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Laxmi+Bharti+CCRC+Placement+Video.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Laxmi+Bharti.jpg",
      description: "MBU Student",
    },
    {
      id: 6,
      name: "Prachi Sahu",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Prachi+Sahu+CCRC+Placement+Video.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Prachi+Sahu.jpg",
      description: "MBU Student",
    },
    {
      id: 7,
      name: "Shiwangi Sinha",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Shiwangi+Sinha+CCRC+Placement+Video.mp4",
      description: "Pharmachy department",
    },
  ];
  return (
    <>
      <MainIntro 
        title="Placement Overview" 
        description={[
          "The Career and Corporate Centre of Kalinga University is a hub for career guidance and training, and corporate partnerships. With modern infrastructure and resources, the centre meets industry standards and has even received appreciation from top organisations. The Kalinga University campus placements support cell introduces you to the professional world. We don't just prepare you for the corporate world, but give you a 360-degree training so that you can turn out to be a confident individual who is ready to tackle any challenge in life.",
          "With our personalised training programs, expert-led sessions, and interview preparation, you will be well-prepared to clear any job interview according to your skill set. Our expert mentors go beyond and guide you with skills that companies are looking for in the current job market, and even update the training modules accordingly. Apart from this, we also keep the database of job openings in various companies up-to-date, so that our students don't miss out on any opportunities. With our strong industry connections, we conduct campus drives each year, ensuring that our graduates are placed in leading companies with competitive salary packages."
        ]}
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
        footerText="Trusted by 500+ Global Recruiters"
        noContainer={true}
      />
      <QuickLinks 
        links={links} 
        title="Training Initiatives Of Kalinga’s TnP Cell" 
        description="Kalinga University's placement program bridges academia and industry with 400+ recruitment partners, comprehensive training, and dedicated support to prepare students for successful careers in top companies."
        backgroundColor="bg-white" 
        textColorClassName="text-black" 
        showReadMore={true} 
      />
      <Placements hideMarquee={true} hideMilestones={true} bgColor="bg-[var(--light-gray)] mx-2 rounded-xl" marginClassName="mb-0"/>
      <MediaCardSlider
        categoryTitle="Video Interviews"
        title="Hear From Our Success Stories"
        videoItems={videoItems}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        descriptionTextClass=""
        swiperClassName="ccrc-video-slider"
      />
      <QuickLinks title="Entrepreneurship & Startup Support" titleClassName="text-white" links={links2} description="We're here to put your entrepreneurial ideas into action. Here, you will not just dream but build something real that solves people's problems." showReadMore={false}/>
      <FAQ 
        title="Placement Records"
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
      <AdmissionCareer />
    </>
  );        
}