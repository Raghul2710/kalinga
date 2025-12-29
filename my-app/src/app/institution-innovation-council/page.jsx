"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import DataTable from "@/app/components/general/data-table";
import ImageContent from "@/app/components/ccrc/imagecontent";
import ImageListItem from "../components/ccrc/imagelistitem";
import FAQ from "../components/general/faq";
import SectionHeading from "../components/general/SectionHeading";
import GlobalArrowButton from "../components/general/global-arrow_button";
import MasterClassTab from "../components/ctcd/master_class_tab";
import Gallery from "@/app/components/general/gallery";

/* ---------------- Breadcrumb ---------------- */
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/kif-banner.webp",
  pageTitle: "Institution Innovation Council",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Institution Innovation Council", href: "/institution-innovation-council" },
  ],
};

if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

/* ---------------- Goals ---------------- */
const objectives = [
  { text: "To conduct various innovation and entrepreneurship-related activities prescribed by MIC." },
  { text: "Identify and reward innovations and share success stories." },
  { text: "Organise periodic workshops/seminars/interactions with entrepreneurs, investors, professionals and create a mentor pool for student innovators." },
  { text: "Network with peers and national entrepreneurship development organisations." },
  { text: "Create an Institution’s Innovation portal to highlight innovative projects carried out by the institution’s faculty and students." },
  { text: "Organise Hackathons, Ideathons, idea competitions, innovative project expo, mini-challenges, etc." },
];

/* ---------------- About IIC ---------------- */
const aboutText = `
The Institution’s Innovation Council (IIC) is an initiative of the Ministry of Education (MoE), Government of India, launched through the MoE’s Innovation Cell (MIC) in collaboration with AICTE to promote a strong culture of innovation and a startup ecosystem in Higher Educational Institutions (HEIs).

At Kalinga University, the Institution’s Innovation Council (IIC) was established in 2018–19 with the mission of fostering an innovative mindset among students, researchers, and faculty members across disciplines. The council encourages, nurtures, and inspires individuals by supporting their ideas and transforming them into practical, real-world solutions.

IIC engages a large number of students and faculty members in entrepreneurship and innovation-related activities including Intellectual Property Rights (IPR), Ideation, Proof of Concept Development, Design Thinking, and project handling at the pre-incubation level. The IIC model enables institutions to overcome challenges such as limited participation, weak coordination, and underutilization of creative potential.
`;

/* ---------------- Innovation Ecosystem ---------------- */
const innovationParagraph = `
The Institution’s Innovation Council at Kalinga University regularly organises innovation-driven activities, programs, and initiatives to develop problem-solving and entrepreneurial skills. These activities help students convert ideas into impactful solutions and promote research-based startups, social innovation, and technology-driven entrepreneurship. Through workshops, hackathons, mentorship, and incubation support, IIC creates a strong innovation ecosystem across the university.
`;

/* ---------------- IIC Committee Table ---------------- */
const iicCommitteeTable = [
  { memberType: "Director IQAC", role: "IIC President & ARIIA Coordinator" },
  { memberType: "Director KIF", role: "Vice President" },
  { memberType: "Asst. Professor", role: "Convenor" },
  { memberType: "Asst. Professor", role: "Start-Up Activity Coordinator" },
  { memberType: "Director Admission", role: "Social Media Convenor" },
  { memberType: "Asst. Professor", role: "Innovation Activity Coordinator" },
  { memberType: "TPO", role: "Internship Activity Coordinator" },
  { memberType: "Research Associate", role: "IPR Activity Coordinator" },
  { memberType: "Asst. Registrar", role: "NIRF Coordinator" },
  { memberType: "Student", role: "Social Media Convenor" },
  { memberType: "Student", role: "Innovation Activity Coordinator" },
  { memberType: "Student", role: "Innovation Coordinator, Member" },
  { memberType: "Student", role: "Innovation Coordinator, Member" },
  { memberType: "Student", role: "IPR Activity Coordinator" },
  { memberType: "Student", role: "Member, Innovation Cell" },
  { memberType: "Student", role: "Start-Up Activity Coordinator" },
  { memberType: "External Member", role: "Member" },
  { memberType: "External Member", role: "Member" },
  { memberType: "Student", role: "Internship Activity Coordinator" },
  { memberType: "Student", role: "Member" },
];

const iicCommitteeSection = [
  {
    id: 1,
    title: "IIC Committee",
    columns: [
      { key: "memberType", label: "Member Type", width: "w-1/2" },
      { key: "role", label: "Key Role / Position Assigned in IIC", width: "w-1/2" },
    ],
    data: iicCommitteeTable,
  },
];
 const annualReportButtons = [
  {
    id: 1,
    text: "2021-22",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/IIC_Appreciation_Letter_AY_2021_22.+(2).pdf",
  },
  {
    id: 2,
    text: "2022-23",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/IIC_Appreciation_Letter_AY_2022_23.pdf",
  },
  {
    id: 3,
    text: "2023-24",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/IIC_Appreciation_Letter_AY_2023_24+(1).pdf",
  },
];
const certificates = [
  {
    id: 1,
    src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/chart+(5).png",
    alt: "IIC Star Rating 2022-23",
  },
  {
    id: 2,
    src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/chart+(6).png",
    alt: "IIC Star Rating 2023-24",
  },
];

// ================= MASTERCLASS DATA =================

// 2024–25 Masterclasses
const masterclassActivities = [
  {
    id: 1,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/1+(1).png",
    imageAlt: "Grow As a Leader",
   
  },
  {
    id: 2,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/2+(1).png",
    imageAlt: "CSR Fund Raising",
  },
  {
    id: 3,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/3+(1).png",
    imageAlt: "Gen Z",
 
  },
];

// 2025–26 Masterclasses
const masterclassActivities2 = [
  {
    id: 1,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/4.png",
    imageAlt: "Six Sigma",
   
  },
  {
    id: 2,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/5+(1).png",
    imageAlt: "HR AI",
  
  },
  {
    id: 3,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/6.png",
    imageAlt: "Green Industry",
   
  },
];


// ================= IIC TRAINING ACHIEVEMENTS =================
const iicTrainingAchievements = [
  {
    id: 1,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/chart+(7).png",
    alt: "IIC Training Achievement 1",
  },
  {
    id: 2,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/chart+(8).png",
    alt: "IIC Training Achievement 2",
  },
  {
    id: 3,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/chart+(9).png",
    alt: "IIC Training Achievement 3",
  },
  {
    id: 4,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/chart+(10).png",
    alt: "IIC Training Achievement 4",
  },
];

const annualReportButtons2 = [
  {
    id: 1,
    text: "Session - 1",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/Report-on-IIC-Impact-Lecture-Series-I-(Session-1)-(2)+(2)+(1).pdf",
  },
  {
    id: 2,
    text: "Session - 2",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/Report-on-IIC-Impact-Lecture-Series-I-(Session-1)-(2)+(2).pdf",
  },
];


export default function InstitutionInnovationCouncil() {
  return (
    <div className="bg-white">

      {/* About IIC */}
      <ImageContent
        title="Institution Innovation Council"
        subtitle="About IIC"
        description={aboutText}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/research/research-main-content.webp"
        imageAlt="Institution Innovation Council"
      />

      {/* Innovation Section */}
      <section className="py-16 bg-[var(--light-gray)]">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image
              src="https://kalinga-university.s3.ap-south-1.amazonaws.com/institution-innovation-council/chart+(2).png"
              alt="Innovation & Startups"
              width={500}
              height={400}
              className="rounded-xl shadow-md object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4">
              Driving Innovation & Entrepreneurship
            </h2>
            <p className="text-[var(--light-text-gray)] leading-relaxed">
              {innovationParagraph}
            </p>
          </div>
        </div>
      </section>

      {/* IIC Functions */}
      <ImageListItem
        items={objectives}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-students-2.jpg"
        title="Functions of IIC at Kalinga University"
        description={false}
      />

      {/* IIC Committee (Last Section) */}
      <FAQ
        title="IIC Committee"
        showHeading={false}
        variant="table-display"
        items={[]}
        tableSections={iicCommitteeSection}
        overflowX={false}
      />
{/* ---------------- Kalinga Incubation Foundation ---------------- */}
<ImageContent
  title="Kalinga Incubation Foundation"
  subtitle="About KIF"
  description="Kalinga Incubation Foundation (KIF) is the incubation and startup support arm of Kalinga University, created to nurture student and faculty-led innovations. KIF supports bold ideas and helps transform them into scalable and sustainable startups."
  imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/chart+(4).png"
  imageAlt="Kalinga Incubation Foundation"
  hasImage={true}
  additionalContent={[
    "KIF provides incubation support through expert mentoring, infrastructure, startup funding guidance, pitch training, workshops, industrial visits, and research-driven innovation.",
    "It acts as a bridge between innovation and entrepreneurship by converting raw ideas into viable business ventures and socially impactful solutions."
  ]}
/>
   
      
<SportsFacilitiesTabs />
<section className="py-16 bg-white">
        <div className="container mx-auto px-2">

          <div className="text-center mb-12">
            <SectionHeading
              title="IIC Star Rating"
              titleClassName="text-3xl md:text-4xl lg:text-5xl mb-6"
            />
           
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((img) => (
              <div key={img.id} className="flex flex-col items-center">
                <div className="relative w-full max-w-md aspect-[4/3] border-4 border-[var(--button-red)] rounded-2xl overflow-hidden shadow-lg bg-white">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain"
                    priority={img.id === 1}
                  />
                </div>

                <p className="mt-4 font-semibold text-lg text-center">
                  {img.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pt-16 pb-16 bg-white">
              <div className="container mx-auto px-6">
      
                {/* ✅ PAGE HEADING */}
                <div className="mb-10 text-center">
                  <h2 >Letter of Appreciation
                  </h2>
               
                </div>
      
                {/* ✅ BUTTON GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {annualReportButtons.map((item) => (
                    <a
                      key={item.id}
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
                  ))}
                </div>
      
              </div>
            </section>
       <MasterClassTab
  tab1Title="Foundation level"
  tab2Title="Advanced level"

  tab1Activities={masterclassActivities}
  tab2Activities={masterclassActivities2}
  

/>
{/* ---------------- IIC Training Achievements ---------------- */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-6">
    <SectionHeading
      title="IIC Training Achievements"
      titleClassName="text-center mb-10"
      subtitle={false}
     
    />

    <Gallery
      images={iicTrainingAchievements}
      backgroundColor="bg-white"
      paddingClassName="py-0"
      forceSliderOnMobile={true}
       title={false}
    />
  </div>
</section>
   <ImageContent 
        hasImage={false} 
        readmore={false} 
        className="items-center justify-center" 
        title="Impact Lecture Series" 
        subtitleclassName="hidden" 
        description=" The IIC Impact Lecture Series aims to promote innovation and entrepreneurship among students of higher education institutions across India. The lecture enables students to learn from leading experts on topics like start-ups, intellectual property rights, innovation, and entrepreneurship challenges and solutions. 
Kalinga University hosted its first session of the Impact Lecture Series on 15th April 2024 in an offline mode. Students learned to become successful entrepreneurs, learned from real-life experiences, and received guidance on how to think and act creatively and innovatively by setting goals in the right direction. "
      />  

  <section className="pt-16 pb-16 bg-white">
  <div className="container mx-auto px-6">

    {/* ===== TOP REPORTS ===== */}
    <div className="mb-10 text-center">
      <h2>IIC Annual Reports</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {annualReportButtons2.map((item) => (
        <a
          key={item.id}
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
      ))}
    </div>

  

  </div>
</section>
     <Gallery 
        title="Glimpse" 
       
        images={[
          { id: 1, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/DSC06210.jpg", alt: "International Students Introduction" },
          { id: 2, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/Vikshit+Bharat.jpg", alt: "Why Choose Kalinga University" },
          { id: 3, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/Q1.7.png", alt: "International Students Group" },
          { id: 4, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/Q1.6.png", alt: "Campus Safety and Security" },
          { id: 5, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/Machine+Learning+2.jpeg", alt: "International Students Banner" },
          { id: 6, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/IIC+Meet.jpeg", alt: "International Students Banner" },
          { id: 7, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/Hackathon+2.jpeg", alt: "International Students Banner" },
          { id: 8, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IIC/Hackathon+1.jpg", alt: "International Students Banner" },
        ]}
      /> 
    </div>
  );
}


function SportsFacilitiesTabs() {
  const tabs = useMemo(
    () => [
      { id: "y2024", label: "2022–23 " },
      { id: "y2023", label: "2023–24(QUATER 1)" },
      { id: "y2022", label: "2023–24 (QUATER 2)" },
      { id: "y2021", label: "2024–25 (QUATER 1)" },
      { id: "y2020", label: "2024–25 (QUATER 2)" },
      { id: "y2019", label: "2024–25 (QUATER 3)" },
       {id: "y2018", label: "2024–25 (QUATER 4)" },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState("y2024");

  const toggleAccordion = (id) => {
    setActiveTab((prev) => (prev === id ? "" : id));
  };

  const renderTabContent = (tabId) => {
    if (tabId === "y2024")
      return <EventsTable title="Activities Performed During the Calendar Year 2022-23" data={events2024} />;
    if (tabId === "y2023")
      return <EventsTable title="Activities Performed During Quarter 1 of Calendar Year 2023-24" data={events2023} />;

    if (tabId === "y2022")
      return <EventsTable title="Activities Performed During Quarter 2 of Calendar Year 2023-24" data={events2022} />;

    if (tabId === "y2021")
      return <EventsTable title="Activities Performed During Quarter 1 of Calendar year 2024-25" data={events2021} />;

    if (tabId === "y2020")
      return <EventsTable title="Activities Performed During Quarter 2 of Calendar year 2024-25" data={events2020} />;

    if (tabId === "y2019")
      return <EventsTable title="Activities Performed During Quarter 3 of Calendar year 2024-25" data={events2019} />;

    if (tabId === "y2018")
      return <EventsTable title="Activities Performed During Quarter 4 of Calendar year 2024-25" data={events2018} />;

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
    { key: "sno", label: "S. No.", width: "w-20" },
    { key: "name", label: "Name of the Activity", width: "flex-1" },
    { key: "date", label: "Date of the Activity", width: "w-48" },
  ];

  const limitedData = data.slice(0, 35);   

  const tableData = limitedData.map((item, index) => ({
    sno: index + 1,
    name: item.name,
    date: item.date,
  }));

  return (
    <div>
      <h2 className="text-center mb-[20px]">{title}</h2>

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

const events2024 = [
  { date: "16-09-2022", name: "Building an Innovation Repository as Part of the YUKTI" },
  { date: "23-09-2022", name: "National Education Policy" },
  { date: "19-09-2022 to 22-09-2022", name: "Barklays Life Skills Training Program" },
  { date: "13-10-2022", name: "Workshop on Research Paper Writing" },
  { date: "14-10-2022", name: "College Making – Science for Sustainable Development" },
  { date: "14-10-2022", name: "Research Policy Orientation" },
  { date: "20-10-2022", name: "Seminar on Artificial Intelligence, Law and Future" },
  { date: "21-10-2022", name: "How to Write a Research Article" },
  { date: "04-11-2022 to 05-11-2022", name: "J Hackathon 2022 (Victory & Joint Innovation)" },
  { date: "14-11-2022", name: "Ideathon 2.0" },
  { date: "23-11-2022", name: "CII – YI Annual Meet 2022" },
  { date: "12-01-2023", name: "National Youth Day Poster Making Competition" },
  { date: "16-01-2023", name: "National Start-up Day – Promoting Innovation & Entrepreneurship at Kalinga University" },
  { date: "01-02-2023 & 02-02-2023", name: "Workshop on Design Thinking, Critical Thinking and Innovation Design" },
  { date: "03-02-2023", name: "Field Visit to Pre-Incubation Units such as Gita Fab Lab, Makers Space, Design Centre, D.P. Works Cluster, Workshop, etc." },
  { date: "11-02-2023", name: "Pride of India Event" },
  { date: "12-02-2023", name: "National Pollution Control Day" },
  { date: "28-02-2023", name: "National Science Day" },
  { date: "03-03-2023 to 04-03-2023", name: "Smart City Hackathon – 2023" },
  { date: "16-03-2023", name: "Expert Talk on Process of Innovative Development, Technology Readiness Level (TRL), Commercialization of Technologies and Tech Transfer" },
  { date: "20-03-2023", name: "Science Model and Poster Exhibition" },
  { date: "13-04-2023", name: "Attitude and Behaviour for Being a Successful Entrepreneur" },
  { date: "17-04-2023", name: "Global Peace and Sustainable Development Summit, 2023" },
  { date: "21-04-2023", name: "Webinar on Creativity and Innovation During Modern Business" },
  { date: "26-04-2023", name: "Impact of Artificial Intelligence on Intellectual Property Rights" },
  { date: "26-04-2023", name: "Research Methodology" },
  { date: "28-04-2023 & 29-04-2023", name: "Role of IQAC in Achieving Quality and Excellence in Higher Education by Promoting Research, Innovation and Extension Activities" },
  { date: "11-05-2023", name: "Debate Competition on the topic 'Does Technology make People Lazy' on the occasion of National Technology Day" },
  { date: "21-06-2023", name: "International Yoga Day Celebration" },
  { date: "22-06-2023 & 23-06-2023", name: "Science & Technology Project Exhibition" },
  { date: "04-07-2023", name: "Start-Up Talk on Innovations" },
  { date: "12-07-2023 & 13-07-2023", name: "Workshop on Machine Learning for Optimal Process Design and Development – Techniques and Tools in Python" },
  { date: "10-08-2023 & 11-08-2023", name: "KU Hackathon" },
  { date: "15-08-2023", name: "Independence Day" },
  { date: "25-08-2023 & 26-08-2023", name: "Expert Talk & Panel Discussion on Innovations" }
];

const events2023 = [
  {
    date: "15-09-2023",
    name: "Celebration of Engineer’s Day by the Faculty of Technology"
  },
  {
    date: "27-10-2023",
    name: "Exposure and Field Visit for Problem Identification in Slums"
  },
  {
    date: "09-11-2023",
    name: "Entrepreneurship and Innovation as Career Opportunity"
  },
  {
    date: "16-11-2023",
    name: "Slogan Symposium: Harmonising Education for National Education Day"
  },
  {
    date: "21-11-2023",
    name: "Poster Making Competition on the theme 'Harmony with Nature: Cultivating a Greener Tomorrow'"
  },
  {
    date: "21-11-2023",
    name: "One-day online guest lecture on 'MATLAB Applications in Engineering'"
  }
];

const events2022 = [
  {
    date: "11-12-2023",
    name: "Viksit Bharat @ 2047 Utsav"
  },
  {
    date: "14-12-2023",
    name: "Poster Making Competition"
  },
  {
    date: "04-01-2024",
    name: "भाषायी सांस्कृतिक प्रदर्शनी"
  },
  {
    date: "12-01-2024",
    name: "National Youth Day"
  },
  {
    date: "22-02-2024",
    name: "Craft & DIY"
  },
  {
    date: "22-02-2024 to 23-02-2024",
    name: "2-Day Visit to SFSL, Raipur"
  },
  {
    date: "26-02-2024",
    name: "Cyber Security of Power Network"
  }
];

const events2021 = [
  {
    date: "19-10-2024",
    name: "Master Class on IPR with Kalinga University"
  },
  {
    date: "19-09-2024",
    name: "One-day Industrial Visit at Sarda Energy & Minerals Limited, Raipur"
  },
  {
    date: "15-11-2024",
    name: "Poster Presentation Competition"
  },
  {
    date: "14-11-2024",
    name: "Workshop on Entrepreneurship & Innovation as a Career Opportunity"
  },
  {
    date: "22-11-2024 to 23-11-2024",
    name: "Ideathon 4.0"
  },
  {
    date: "01-10-2024",
    name: "Guest Lecture on Start-up Ideas"
  },
  {
    date: "14-10-2024",
    name: "Alumni Talk – Pathways to Success: Alumni Share Their Journey"
  }
];

const events2020 = [
  {
    date: "18-02-2025",
    name: "Workshop on Design Thinking, Critical Thinking & Innovation Design"
  },
  {
    date: "07-02-2025",
    name: "Innovation & Entrepreneur Outreach Program in Schools"
  },
  {
    date: "13-02-2025",
    name: "E-Commerce & Effective Sales & Marketing Strategies for Entrepreneurs / Start-ups"
  },
  {
    date: "28-02-2025",
    name: "Achieving Problem-Solution Fit and Product-Market Fit"
  },
  {
    date: "25-02-2025",
    name: "Field / Exposure Visit to AICTE Idea Lab, SSIPMT Raipur"
  },
  {
    date: "13-02-2025 to 14-02-2025",
    name: "KU-Hackathon 2025"
  },
  {
    date: "29-01-2025",
    name: "Poster Presentation Competition"
  }
];

const events2019 = [
  {
    date: "24-03-2025",
    name: "Online Workshop on Business Model Canvas"
  },
  {
    date: "26-03-2025",
    name: "Field Visit to Incubation Center, NIT Raipur"
  },
  {
    date: "08-04-2025",
    name: "Workshop on ‘Raising Capital and Managing Finance for Startups’"
  },
  {
    date: "11-04-2025",
    name: "Webinar on ‘Title – Innovation for Impact: Institutional Business Plan Contest & YUKTI Repository Recognition’"
  },
  {
    date: "25-04-2025",
    name: "Entrepreneurship & Jagriti Yatra"
  },
  {
    date: "15-04-2025",
    name: "Online Workshop on Intellectual Property Rights (IPR) & Patents and Design Filing"
  },
  {
    date: "15-04-2025",
    name: "Workshop on Prototype / Process Design and Development"
  },
  {
    date: "17-04-2025",
    name: "Lectures on Business Plan and Entrepreneurship in Science"
  }
];
const events2018 = [
  {
    date: "12-08-2025",
    name: "Innovation & Entrepreneurship Outreach Program"
  },
  {
    date: "13-08-2025",
    name: "Lean Start-up & Minimum Viable Product (MVP) Business Boot Camp / Mentoring Session"
  },
  {
    date: "25-08-2025",
    name: "Business Plan and Entrepreneurship Lecture"
  },
  {
    date: "28-08-2025",
    name: "Startup Summit: Demo Day / Exhibition of Startups & Linkage with Innovation Ambassadors / Experts for Mentorship Support"
  },
  {
    date: "29-08-2025",
    name: "Innovation / Prototype Validation – Converting Innovation into a Start-up"
  },
  {
    date: "29-08-2025",
    name: "Angel Investment / VC Funding Opportunity for Early-Stage"
  }
];
 