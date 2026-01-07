"use client";

import { useEffect } from "react";
import AboutHero from "../components/about/AboutHero";
import MainIntro from "../components/about/main_intro";
import VisionMission from "../components/about/vision-mission";
import WhoWeAre from "../components/about/who_we_are";
import OurJourney from "../components/about/our_journey";
import CenterOfExcellence from "../components/about/center_of_excellence";
import Leadership from "../components/about/leadership";
import Facility from "../components/admissions/facility";
import AccreditationRanking from "../components/home/AccreditationRanking";
import OrganogramOfKalinga from "../components/about/organogram_of_kalinga.jsx";
import AdmissionCareer from "../components/general/admission_cta";
import FeatureCards from "../components/home/featurecard";
import GlobalPresence from "../components/home/global_presence";
import AwardsScrollbar from "../components/home/awards-scrollbar";
import Map from "../components/home/global_presence-new";
import CoreValues from "../components/about/core_values";
import QuickLinks from "../components/general/quick_links";
import FAQ from "../components/general/faq";
// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/about-banner.webp",
  pageTitle: "About Kalinga",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About Kalinga', href: '/about-us' }
  ]
};

const aboutFaqData = [
  {
    id: 1,
    title: "Academic Council",
    columns: [
      { key: "slNo", label: "S. No.", width: "w-20" },
      { key: "member", label: "Members", width: "flex-1" }
    ],
    data: [
      { slNo: 1, member: "Vice-Chancellor, Kalinga University – Chairman of the Committee" },
      { slNo: 2, member: "Deans of Eight Faculty - Members" },
      { slNo: 3, member: "All Professors of the University Teaching Department - Members" },
      { slNo: 4, member: "Three Professors of the State/Central Universities / IITs nominated by the Chancellor - Members" },
      { slNo: 5, member: "Three representatives from amongst the Scientists/Educationalists/Technologists/Industrialists nominated by the Chancellor - Members" }
    ]
  },
  {
    id: 2,
    title: "Governing Body",
    columns: [
      { key: "slNo", label: "S. No.", width: "w-20" },
      { key: "body", label: "List Of Governing Body", width: "flex-1" }
    ],
    data: [
      { slNo: 1, body: "Chairman of the Committee - Chancellor, Kalinga University" },
      { slNo: 2, body: "Member - Vice-Chancellor, Kalinga University" },
      { slNo: 3, body: "Three Members - Nominated by the Honourable Governor of CG" },
      { slNo: 4, body: "Two Members - Nominated by the Sponsoring Body" },
      { slNo: 5, body: "Member Secretary - Registrar, Kalinga University" }
    ]
  },
  {
    id: 3,
    title: "Board Of Management",
    columns: [
      { key: "slNo", label: "S. No.", width: "w-20" },
      { key: "member", label: "Members", width: "flex-1" }
    ],
    data: [
      { slNo: 1, member: "Chairman of the Committee - Vice-Chancellor, Kalinga University" },
      { slNo: 2, member: "One Member - Nominated by Hon’ble Governor of CG" },
      { slNo: 3, member: "Three Members- Nominated by Sponsoring Body" },
      { slNo: 4, member: "Member Secretary - Registrar, Kalinga University" }
    ]
  }
];

const aboutFeatureCards = [
  {
    id: 1,
    title: 'Industry-Relevant Curriculum',
    body: 'Our curriculum is aligned with the New Education Policy 2020. All our educational programs match industry standards that equip our students with essential practical skills and updated industrial knowledge.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Industry-Relevant+Curriculum.svg',
    variant: 'gray',
  },
  {
    id: 2,
    title: 'Extensive Research Facilities',
    body: 'With 90 + Labs, including IT Labs and CIF labs, we’re Chhattisgarh’s No. 1 institute, committed to innovation and groundbreaking research facilities.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Extensive+Research+Facilities.svg',
    variant: 'amber',
  },
  {
    id: 3,
    title: 'Experienced Faculties',
    body: 'Learn from highly experienced professors of KU who are from across India and abroad. Their expertise helps students become future leaders.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Experienced+Faculties.svg',
    variant: 'gray',
  },
  {
    id: 4,
    title: 'Our Flagship Events',
    body: 'Every year, we organise memorable events and competitions where students showcase their creativity and talent and win amazing prizes. It includes: First Step Induction Programs, Science Working Model Competition, Anand Mela, Moot Court Competitions, Hackathons, Ideathons, Kalinga Utsav, Sports Fest, Toppers Felicitation Ceremony, Convocation Ceremony, Best HEI Teachers’ Award, and more...',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Flagship+Events.svg',
    variant: 'amber',
  },
  {
    id: 5,
    title: 'Internships & Industrial Visits',
    body: 'All Kalinga University students are provided with internship opportunities and are encouraged to work on practical projects and visit industrial sites.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/international.svg',
    variant: 'gray',
  },
  {
    id: 6,
    title: 'Networking Opportunities',
    body: 'Connect with industry leaders, alumni, and working professionals through our workshops, seminars, National and International conferences, and future-proof your career.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Networking+Opportunities.svg',
    variant: 'amber',
  },
  {
    id: 7,
    title: 'Cultural Celebrations',
    body: 'Become a part of a campus that celebrates both National and International events. Cultural fests, concerts, talent shows, sports day, Kalinga Utsav, and open mic competitions are some of our lively events that unite our students.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Cultural+Celebrations.svg',
    variant: 'gray',
  },
  {
    id: 8,
    title: 'Community Services',
    body: 'You will not just graduate from Kalinga with a degree, but you’ll become a socially responsible citizen too. Join our NCC and NSS team and become a part of a community that serves the Nation.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Community+Services.svg',
    variant: 'amber',
  },
  {
    id: 9,
    title: 'National & International Tours',
    body: 'Our educational tours are all about a fun learning experience. From visiting top industries across India to exploring mega-infrastructure in Dubai, we’ve planned more exciting tours in the coming years.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Educational+Tours.svg',
    variant: 'gray',
  },
  {
    id: 10,
    title: 'Emotional Well-Being',
    body: 'To cope with academic stress, mental health issues, or social anxiety, we organise well-being programs for our students according to their needs so that their voices can be heard and acted upon.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Emotional+Well-Being.svg',
    variant: 'amber',
  },
  {
    id: 11,
    title: 'Prominent Personalities Visit',
    body: 'We organise special guest visits where industry leaders, Padma Bhushan award winners, popular sportspersons, actors, social media influencers, and other National award winners interact with our students.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Mentor-Mentee+System.svg',
    variant: 'gray',
  },
];

const aboutAccreditations = [
  { id: 4, name: "Outlook", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/outlook.webp" },
  { id: 5, name: "NIRF", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002974.png" },
  { id: 6, name: "NIRF", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002953.png" },
  { id: 7, name: "NIRF", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002975.png" },
  { id: 8, name: "NIRF", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002976.png" },
  // { id: 11, name: "NIRF", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002979.png" },
  { id: 13, name: "NIRF", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002981.png" },
  { id: 14, name: "NIRF", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ieee.jpeg" },
  { id: 15, name: "NIRF", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/uba.jpg" },
  { id: 16, name: "NIRF", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/cii.png" },
  { id: 17, name: "NIRF", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/nss.jpg" },
  { id: 18, name: "NIRF", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ncc.jpg" },
  { id: 19, name: "NIRF", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-2.png" },

];

const aboutApproval = [
  { id: 3, name: "UGC Grant", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/ugc.webp" },
  { id: 10, name: "NCTE", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002978.png" },
  { id: 12, name: "PCI", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002980.png" },
  { id: 12, name: "BCI", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/bci.webp" },
  { id: 12, name: "ACITE", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/acite.webp" },
  { id: 12, name: "CGG", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/cg-government.webp" },
]

const aboutQuickLinks = [
  {
    id: 1,
    title: "Student-First Approach",
    description: "Our students are always our top priority, and we are always committed to their well-being, growth, and success. We take their suggestions and concerns seriously and immediately work on them to create a supportive learning environment.",
  },
  {
    id: 2,
    title: "New-Age Programs",
    description: "Our next-gen programs, like Cinematography, Stock Market Trading, Advanced IoT Applications, and Microsoft Power Business Intelligence (Power BI) will prepare you for future career roles in the tech and creative world.",
  },
  {
    id: 3,
    title: "Value Added Courses",
    description: "We provide short-term skill enhancement certification courses in different fields of study, empowering students to upskill their knowledge and boost their employability. These affordable courses cover specialised topics that will serve as a supplement to the traditional academic programs. It covers practical skills apart from theoretical knowledge.",
  },
  {
    id: 4,
    title: "Central Instrumentation Facility",
    description: "Facilitating researchers and students with high-end instruments in basic, applied, and life sciences.",
  },
  {
    id: 5,
    title: "Incubation Center",
    description: "Kalinga Incubation Foundation supports students’ innovative business ideas and turns them into successful business ventures.",
  },
  {
    id: 6,
    title: "CCRC",
    description: "Our Career and Corporate Resource Centre (CCRC) prepares students and corporate employees for a successful career through experiential learning methods.",
  },
  {
    id: 7,
    title: "Academic Clubs",
    description: "Our department’s clubs will give you real practical exposure through hands-on training programs, guest lectures, workshops, project work, case studies, industrial visits, and creative works.",
  },
  {
    id: 8,
    title: "Career Counseling",
    description: "Our primary aim is to navigate your journey towards the right direction by providing career guidance and support at every step until you land your dream job.",
  },
  {
    id: 9,
    title: "100% Automation",
    description: "Right from your admission till graduation, get a seamless digital experience through our student ERP system. We generate an ERP account for every student, which contains all the necessary information like academic curriculum, time tables, notices, exam date sheets, transportation details, event details, results, holiday calendar, forms, and other important updates.",
  },
];

export default function AboutUs() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
  }, []);
  return (
    <div>
      <MainIntro
        title="Where Education and Purpose Align"
        subtitle="Overview of Kalinga"
        subtitleClassName="!text-blue"
        showReadMore={false}
        description={["Kalinga University, established in 2013, stands out as one of the leading private institutions that has consistently ranked among the top 101–150 universities in India under the NIRF Rankings 2025 for the fourth consecutive year. It has also received a NAAC B+ accreditation, continuously shining on the horizons of high-quality education.",
          "Kalinga University has students from across India and 29 + countries. It offers Diploma, Undergraduate, Postgraduate, and Doctoral programs in Arts and Humanities, Commerce and Management, Education, Information Technology, Law, Pharmacy, Science, and Technology. With highly-qualified and experienced faculty members, the University strongly emphasizes research, innovation, and hands-on learning. "
          , "The University is home to students from over 29+ countries, creating a vibrant, multicultural environment that promotes collaboration and cross-cultural understanding. Through partnerships with global leaders such as IBM, Cisco, Bosch, and Microsoft, Kalinga University integrates academic learning with practical industry experience."
          , "Spread across 50 + acres eco-friendly campus, the University offers an indoor and outdoor sports centre, Moot Court, Incubation Centre, Corporate Training and Consultancy Division, Centres of Excellence, a library with a collection of over 80,000 books and digital content, and 90 + labs, including Central Instrumentation Facility, language labs, and computer labs. Moreover, the University has developed strong connections with leading companies through MoUs to offer corporate training, and internship and placement opportunities to students."
          , "With an industry-relevant curriculum aligned to the New Education Policy 2020, students are well-prepared to meet modern career demands.  Students get a platform where they dont just study but collaborate, make new connections, learn new languages, and participate in multi-cultural programs. We help students build communication skills, leadership qualities, problem-solving abilities, time management, critical thinking, emotional intelligence, and teamwork, so that you can turn out to be a powerful individual."
        ]}
        readMoreLabel="Read More"
        readLessLabel="Read Less"

        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
        imageAlt="Kalinga University campus"
        showKnowMore={true}
        initialVisibleParagraphs={1}
      />
      <AccreditationRanking
        heading="Accreditations & Associations"
        secondHeading=""
        accreditations={aboutAccreditations}
      />
      <CoreValues />
      <VisionMission />
      <WhoWeAre />
      <Leadership />
      <AccreditationRanking
        heading="Approvals & Recognitions"
        secondHeading=""
        accreditations={aboutApproval}
      />
      <OurJourney />
      <CenterOfExcellence />
      {/* <OrganogramOfKalinga
        title="Organogram of Kalinga University"
        description={[
          "Kalinga University follows a well-defined governance structure that ensures smooth administration, transparency, and institutional excellence.The framework begins with the Chancellor, followed by the Vice-Chancellor and Director General, who oversee the academic, administrative, and strategic functions of the University.",
        ]}
        buttonLabel="Explore Now"
        href="/organogram"
        buttonClassName="!bg-white !text-black"
        arrowClassName="!bg-[var(--dark-orange-red)]"
        arrowIconClassName="!text-white"
        textClassName="!text-black"
        cardBackgroundColor="bg-[var(--button-red)]"
        useContainer={true}
      /> */}
      <QuickLinks
        slider={true}
        links={aboutQuickLinks}
        title="What makes us Unique"
        titleClassName="!text-white"
        showReadMore={false}
        description="At KU, you will get to explore more than just academics. Here, we don’t just talk about subjects, but we help our students in launching their startups or performing groundbreaking research work."
      />
      <AwardsScrollbar />
      <FeatureCards
        title="Discover Kalinga Advantage"
        subtitle="Best Private University In India"
        description="From building a solid academic foundation to experiencing a diverse campus life, Kalinga University offers the best of both worlds and stands as one of the top private university. With students from all across the world, our campus gives a global vibe through cultural exchange, collaborations, fresh ideas, and lifelong connections."
        cards={aboutFeatureCards}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
        titleClassName="!text-left"
        subtitleClassName="!text-left"
      />
      <Facility />
      {/* <GlobalPresence
      subtitle="Global Presence"
      title="Expanding Horizons Through Global Partnerships"
      description="Kalinga University is home to students from 29+ countries, fostering a truly international learning environment. Through academic exchange programs, research collaborations, and strategic global alliances, the University prepares students to become globally competent professionals and leaders."
      logos={['Infosys','Citi','Microsoft','Adobe','Cognizant','PayPal']}
      imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/globe-skin-color.png"
      imageAlt="Kalinga University global presence map"
      subtitleColor="text-[var(--button-red)]"
      titleColor="text-[var(--foreground)]"
      descriptionColor="text-gray-600"
      backgroundColor="bg-transparent"
      subtitleClassName="text-center"
      titleClassName="text-center"
      subtitleTextColor="!text-[var(--button-red)]"
      sectionClassName="py-0 pb-16"
    /> */}
      <Map />
      <FAQ variant="table-display" tableSections={aboutFaqData} items={[]} subtitle="" title="Governance Structure" />
      <AdmissionCareer />
    </div>
  );
}

