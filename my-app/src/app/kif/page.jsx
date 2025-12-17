import Image from "next/image";
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


// Model breradcrumb

const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  pageTitle: "Kalinga Incubation Facility",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Kif', href: '/kif' }
  ]
};

// Register it globally (no import needed - this pattern works automatically)
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}


const defaultMission = [
  'The primary purpose of Kalinga University is to become a global education hub in which faculty, staff, and students can discover, examine critically, preserve, and transmit the knowledge, wisdom, and values that will ensure the survival of future generations and improve the quality of life for all.',
  'The University seeks to help students develop an understanding and appreciation for the complex cultural and physical worlds in which they live and to realise their highest potential of intellectual, physical, and human development.',
]

export default function KIFPage({
    visionMissionData: visionMissionDataProp,
    boxItems: boxItemsProp,
    testimonials: testimonialsProp,
    links: linksProp,
    kifSteps: kifStepsProp,
    organogram: organogramProp,
    centres: centresProp,
} = {}) {
    const visionMissionData = visionMissionDataProp ?? [{
        visionTitle: "Vision",
        missionTitle: "Mission",
        visionText: "Kalinga University's incubation centre promotes an incubation ecosystem for new-age entrepreneurs who are contributing to the social and economic development of India. The primary vision is to facilitate a resource-rich platform for our budding entrepreneurs so that they can commence their startup business at minimum risk. Our multidisciplinary incubators, technological assistance, and research facilitations encourage young enthusiasts to take advantage of our full-fledged startup ecosystem.   ",
        missionText: ["We empower the next-gen entrepreneurs in solving the pressing challenges of our society.",  
          "KIF significantly contributes to supporting student-led startups, employment generation, designing sustainable business models, and economic growth.", 
          "We facilitate extensive networking opportunities, connecting young entrepreneurs with highly knowledgeable people.", 
          "We identify and nurture unique business ideas of students with all the necessary resources, tools, and mentorship.", 
          ],
        imageAlt: "Vision and Mission",
        className: "",
        showImage: true,
    }];
    const boxItems = boxItemsProp ?? [{
        title: "Startup Incubation",
        description: "Got an idea? We’ll turn it into a successful company.",
        icon: (
          <Image 
            src="https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/incubator.svg" 
            alt="Startup Incubation" 
            width={40} 
            height={40}
            className="h-10 w-10"
          />
        ),
    },{
        title: "Expert Mentorship",
        description: "Get insider tips from our experienced team members and industry experts.",
        icon: (
          <Image 
            src="https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Expert+Mentorship.svg" 
            alt="Expert Mentorship" 
            width={40} 
            height={40}
            className="h-10 w-10"
          />
        ),
    },{
        title: "Prototype Development Lab",
        description: "Plan, design, test, and experiment with your ideas in our incubation lab. ",
        icon: (
          <Image 
            src="https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Prototype+Development+Lab.svg" 
            alt="Prototype Development Lab" 
            width={40} 
            height={40}
            className="h-10 w-10"
          />
        ),
    },{
        title: "Funding Support",
        description: "Learn to pitch your ideas to industry experts and get financial assistance.",
        icon: (
          <Image 
            src="https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Funding+Support.svg" 
            alt="Funding Support" 
            width={40} 
            height={40}
            className="h-10 w-10"
          />
        ),
    },{
        title: "Co-Working Space",
        description: "Work on your startup ideas in our buzzing workspace with strong Wi-Fi connectivity.",
        icon: (
          <Image 
            src="https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Co-Working+Space.svg" 
            alt="Co-Working Space" 
            width={40} 
            height={40}
            className="h-10 w-10"
          />
        ),
    },{
        title: "Marketing Assistance",
        description: "Learn useful tips related to branding and promotion, and launch your startup like a pro.",
        icon: (
          <Image 
            src="https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Marketing+Assistance.svg" 
            alt="Marketing Assistance" 
            width={40} 
            height={40}
            className="h-10 w-10"
          />
        ),
    },
    {
        title: "Technology Support",
        description: "Unsure about tech? We’ll help you choose the right tools and guide you through each step.",
        icon: (
          <Image 
            src="https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Technology+Support.svg" 
            alt="Technology Support" 
            width={40} 
            height={40}
            className="h-10 w-10"
          />
        ),
    },
    {
        title: "Legal & Compliance",
        description: "From registration to IP rights, we’ll make your paperwork process stress-free.  ",
        icon: (
          <Image 
            src="https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Legal+%26+Compliance.svg" 
            alt="Legal & Compliance" 
            width={40} 
            height={40}
            className="h-10 w-10"
          />
        ),
    },];
    const boxItems1 = boxItemsProp ?? [{
      title: "Diverse Ecosystem",
      description: "Whether it’s technology, healthcare, medicine, sustainable products, or social impact, KIF supports startups across different domains. Our ecosystem prompts cross-pollination of ideas and innovation.",
      icon: (
        <Image 
          src="https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/incubator.svg" 
          alt="Startup " 
          width={40} 
          height={40}
          className="h-10 w-10"
        />
      ),
  },
  {
      title: "Commitment to Innovation",
      description: "We embrace fresh ideas of our champions, offering resources and mentorship to turn them into a powerful business.",
      icon: (
        <Image 
          src="https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Technology+Support.svg" 
          alt="Technology Support" 
          width={40} 
          height={40}
          className="h-10 w-10"
        />
      ),
  },
  {
      title: "Passionate Team of Incubators",
      description: "Our passionate team members, who come from different backgrounds, will constantly support you in your dreams at each step in your new journey.  ",
      icon: (
        <Image 
          src="https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Legal+%26+Compliance.svg" 
          alt="Legal & Compliance" 
          width={40} 
          height={40}
          className="h-10 w-10"
        />
      ),
  },];
    const testimonials = testimonialsProp ?? [{
        id: 1,
        name: "",
        role: "",
        quote: "Kalinga Incubation Centre gave me a perfect platform where I turned my business idea into a successful startup, apart from my course curriculum. I have received an outstanding mentorship from them until I execute my plan. I am extremely grateful for their guidance and support. ",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/diploma.webp",
        theme: "red"
    },
    {
        id: 2,
        name: "",
        role: "",
        quote: "I am running a successful startup business just because of the guidance of experts at Kalinga University. From idea generation to its execution, I have received great support from them. They also conducted workshops, seminars, and guest lectures from time to time, which gave me a broader perspective and detailed knowledge about my business. Their personalised mentorship was truly a game-changer for me.",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/students-say-2.webp",
        theme: "red"
    },
    {
        id: 3,
        name: "",
        role: "",
        quote: "I sincerely thank KIF team members, as they have helped me in establishing my startup business by working with me in planning and providing me with valuable industry insights. Their resources were extremely helpful for me in refining my business strategies.",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/student-say-3.webp",
        theme: "red"
    }

];

    const kifSteps = kifStepsProp ?? [
        {
            id: 1,
            stepNumber: "01",
            title: "Step 1",
            description: "Brainstorm Unique Ideas",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/step1.png",
        },
        {
            id: 2,
            stepNumber: "02",
            title: "Step 2",
            description: "Polish Your Startup Plan",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/step1.png",
        },
        {
            id: 3,
            stepNumber: "03",
            title: "Step 3",
            description: "Build a Solid Business Plan",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/step1.png",
        },
        {
            id: 4,
            stepNumber: "04",
            title: "Step 4",
            description: "Develop Your Product",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/step1.png",
        },
        {
            id: 5,
            stepNumber: "05",
            title: "Step 5",
            description: "Get Expert Mentorship",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/step1.png",
        },
        {
            id: 6,
            stepNumber: "06",
            title: "Step 6",
            description: "Test & Improve",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/step1.png",
        },
        {
            id: 7,
            stepNumber: "07",
            title: "Step 7",
            description: "Launch Your Product/Service",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/step1.png",
        },
        {
            id: 8,
            stepNumber: "08",
            title: "Step 8",
            description: "Pitch and Raise Funds",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/step1.png",
        }
    ];

    const links = linksProp ?? [
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

    const organogram = organogramProp ?? {
        title: "Join Us on Your Entrepreneurial Journey",
        description: [
            "Unlock resources, mentorship, and structured support to turn your ideas into reality."
        ],
        buttonLabel: "Download PTS Application Form",
        readMoreLabel: "Read More",
        readLessLabel: "Show Less",
    };

    const centres = centresProp ?? [
        {
            id: 1,
            name: "Siyaa Organics",
            title: "",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Siyaa+Organics.webp",
        },
        {
            id: 2,
            name: "Shree Sudarshan Drone",
            title: "",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Shree+Sudarshan+Drone.webp",
        },
        {
            id: 3,
            name: "SQ7 Communications Pvt.Ltd.",
            title: "",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/SQ7+Communications+Pvt.+Ltd.webp",
        },
        {
            id: 4,
            name: "Insight Catalyst India Pvt.Ltd.",
            title: "",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Insight+Catalyst+India+Pvt+Ltd.webp",
        },
        {
            id: 5,
            name: "Nyson AI Solutions",
            title: "",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Nyson+AI+Solutions.webp",
        },
        {
            id: 6,
            name: "Master G Academy NIIRA Educom",
            title: "Nitesh Jha",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Master+G+Academy+NIIRA+Educom.webp",
        },
        {
            id: 7,
            name: "Graeon.ai",
            title: "Shubham Bhartiya",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Graeon.ai.webp",
        }
    ];
    const activities = [
        {
          id: 1,
          imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
          imageAlt: "Student Activities",
          title: "Lorem ipsum dolor sit amet, consectetur",
          buttonText: "Read More",
          date: "August 25 - 2025",
        },
        {
          id: 2,
          imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
          imageAlt: "Student Activities",
          title: "Lorem ipsum dolor sit amet, consectetur",
            buttonText: "Read More",
          date: "August 25 - 2025",
        },
        {
          id: 3,
          imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
          imageAlt: "Student Activities",
          title: "Lorem ipsum dolor sit amet, consectetur",
           buttonText: "Read More",
          date: "August 25 - 2025",
        },
    ];
      
  const kifAdditionalContent = [
    "Our incubation managers and support members transform their raw ideas into real ventures. With expert guidance, research-related infrastructure, pitch trainings, workshops, guest lectures, industrial visits, and presentation trainings, our incubation centre will guide you at every stage of your startup journey. In line with the Startup India Policy and the Chhattisgarh State Startup & Incubation Policy, KIF ensures that its incubation model is closely aligned with both national and regional priorities. Through industrial insights, networking opportunities, and seed funding support, KIF will fast-track your entrepreneurial journey. Whether you are building a new app or solving a real-world problem, it will provide you with an environment where your innovative ideas will be executed in the right direction.",
  ];

  const selectionCriteria = [
    "Validation of Unique Ideas",
    "Your Solution/Product",
    "Scalability Potential",
    "Strong and well-rounded team members"
  ];

  return (
    <div>
      <ImageContent 
        title="Kalinga Incubation Foundation" 
        subtitle="About KIF" 
        description="KIF was established in 2023, where students' bold and unique ideas are supported so that their entrepreneurial ambitions can be turned into ACTION. Recognised as a Host Institute under the Ministry of MSME, Government of India, and structured as a Section 8, not-for-profit company under the Ministry of Corporate Affairs (MCA), Government of India, its motive is to promote the spirit of research, innovation, and entrepreneurship among students and faculty members of our University." 
        additionalContent={kifAdditionalContent}
        certificateLink="https://drive.google.com/file/d/1Lz-kMpsQjxyPBScXs5mpQ3-RYEpF4g89/view?usp=drive_link"
        certificateLinkText="Ministry of Corporate Affairs Certificate"
        selectionCriteria={selectionCriteria}
      />
      <VisionMission data={visionMissionData} showImg={false} />
      <ImageListItem textClassName="hidden" listItemTextClassName="text-black"  imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/kif/kif.webp" boxItems={boxItems} title="Our Key Offerings" subtitle="About KIF" description="Kalinga Incubation Foundation (KIF) is a platform for students to incubate their ideas and turn them into reality." />
      <QuickLinks links={links} title="What Awaits You At KIF?" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid"
       backgroundColor="bg-white" textColorClassName="text-black" showReadMore={false} />
      <ImageContent title="Career and Corporate Resource Centre" subtitle="About CCRC" description="The Career and Corporate Resource Centre (CCRC) of Kalinga University bridges academic learning and industrial knowledge through collaborations and customised solutions. Our services include: Corporate Trainings & Psychometric Analysis, Consultancy Services: 360 Degree PMS & HRIS, Corporate Social Responsibility, Training and Placements, and Incubation support."  imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp" imageAlt="CCRC Banner" buttonLink="/career-and-corporate-resource-centre" buttonText="Read More" />
      <AdmissionSteps
        steps={kifSteps}
     subtitleClassName="hidden"
        title="Your Step-By-Step Startup Process"
        ctaLabel="Apply Now"
        showReadMore={false}
        showHeaderButton={false}
        showIcon={false}
        showImage={false}
      />
      <ImageListItem textClassName="text-white" listItemTextClassName="text-black" imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/kif/kif.webp" boxItems={boxItems1} title="Join Us on Your Entrepreneurial Journey" subtitle="About KIF" description="We transform young innovators' ideas into scalable and profitable ventures. ." />

      <Testimonials testimonials={testimonials} />

      
      <CenterOfExcellence
        centres={centres}
        title="Startup Partners"
        description="Explore the spaces and partnerships that power the Kalinga Incubation Foundation."
      />
      <StudentActivities activities={activities} subtitle="" title="KIF  Glimpse" />
      <AdmissionCareer />

     
    </div>
  );
}