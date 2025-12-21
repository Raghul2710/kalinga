"use client"
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
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-banner.webp",
  pageTitle: "Placements",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Placements', href: '/placements' }
  ]
};
// Register breadcrumb data globally
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}


export default function Research() {
  
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
    {
      id: 4,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Trainings+%26+Workshops.svg",
      title: "Trainings & Workshops",
      description: "To develop an entrepreneurial spirit among young students, we organise various hands-on training programs where they learn to build a plan, product, learn selling and marketing tactics, and lead like a true leader. ",
    },
    {
      id: 5,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Fundraising.svg",
      title: "Fundraising",
      description: "At Kalinga, you’ll not just learn to raise money but also to pitch ideas with power and purpose in our fundraising master class sessions. ",
    },
    {
      id: 6,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Business+Plan+Development.svg",
      title: "Business Plan Development",
      description: "We will guide you in building a strategic business plan from the idea stage to the launch stage, helping you grow the right way.",
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
      />
      <QuickLinks links={links} title="Placement Overview" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid"
       backgroundColor="bg-white" textColorClassName="text-black" showReadMore={false} />
      <Placements hideMarquee={true} hideMilestones={true} bgColor="bg-[var(--light-gray)] mx-2 rounded-xl" marginClassName="mb-0"/>
      <MediaCardSlider
        categoryTitle="Video Interviews"
        title="Lorem ipsum dolor sit amet, consectetur"
        videoItems={videoItems}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        descriptionTextClass=""
        swiperClassName="ccrc-video-slider"
      />
      <QuickLinks titleClassName="text-white" links={links2} />
      <FAQ 
        variant="button"
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