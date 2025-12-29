"use client";

import { useMemo, useState, useEffect } from "react";
import MainIntro from "../components/about/main_intro";
import VisionMission from "../components/about/vision-mission";
import ImageListItem from "../components/ccrc/imagelistitem";
import DataTable from "@/app/components/general/data-table";
import GlobalArrowButton from "../components/general/global-arrow_button";
import Gallery from "../components/campuslife/campusgallery";
/* ---------------- BREADCRUMB CONFIG ---------------- */

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/academics-banner.webp",
  pageTitle: "Anti-Ragging Cell",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Anti Ragging Cell", href: "/anti-ragging-cell" },
  ],
};

/* ---------------- VISION & MISSION ---------------- */

const visionMissionData = [
  {
    visionTitle: "Vision",
    missionTitle: "Mission",
    visionText:
      "To create a ragging-free environment by promoting democratic values, compassion, empathy, and kindness among students so that they become responsible citizens.",
    missionText:
      "Kalinga University is dedicated to creating a safe, secure, and inclusive environment for its students. Our goal is to eliminate all forms of ragging that cause mental and physical harm to our students.",
    imageAlt: "",
    showImage: false,
  },
];

/* ---------------- OBJECTIVES ---------------- */

const objectives = [
  { text: "Any Act of Indiscipline, Teasing, or Handling with Rudeness." },
  { text: "Any Act that prevents or disrupts the Regular Academic Activity." },
  { text: "Any Activity which is likely to cause Annoyance or Hardship." },
  { text: "Psychological Harm or Creates Fear or Apprehension." },
  { text: "Any Act of Financial Extortion or Forceful Expenditure." },
  {
    text: "Any Act of Physical Abuse causing Assault, Harm, or Danger to Health.",
  },
  {
    text: "Any Act of Abuse by Spoken Words, Emails, SMS, or Public Insult, etc.",
  },
  {
    text: "Any Act of Injury or Infringement of the Fundamental Right to Human Dignity.",
  },
  {
    text: "Any Act of Wrongful Confinement, Kidnapping, Molesting or Committing Unnatural Offences, use of Criminal Forces, Trespass or Intimidation.",
  },
  {
    text: "Any Unlawful Assembly or Conspiracy to Ragging. Any student or group of students found guilty of ragging on the campus or even outside the campus shall be liable to punishment(s).",
  },
];

 const annualReportButtons = [
  {
    id: 1,
    text: "Anti-Ragging UGC Policy",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/anti-ragging-cell/Ugc_Anti_ragging_Regulations.pdf",
  },
   {
    id: 2,
    text: "National Ragging Prevention Programme",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/anti-ragging-cell/website-homepage-antiragging-information.pdf",
  },
];
const AntiImages = [
    {
      id: 1,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/anti-ragging-cell/anti-ragging(1).webp",
      alt: "anti(1)",
    },
    {
      id: 2,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/anti-ragging-cell/anti-ragging(2).webp",
      alt: "anti(2)",
    },
    {
      id: 3,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/anti-ragging-cell/anti-ragging(3).webp",
      alt: "anti(3)",
    },
    {   
        id: 4,
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/anti-ragging-cell/anti-ragging(4).webp",
        alt: "anti(4)",
    },
    {           
        id: 5,
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/anti-ragging-cell/anti-ragging(5).webp",
        alt: "anti(5)",
    },
    {           
        id: 6,
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/anti-ragging-cell/anti-ragging(6).webp",
        alt: "anti(6)",
    },
     {           
        id: 7,
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/anti-ragging-cell/anti-ragging(7).webp",
        alt: "anti(7)",
    },
     {           
        id: 8,
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/anti-ragging-cell/anti-ragging(8).webp",
        alt: "anti(8)",
    },
     {           
        id: 9,
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/anti-ragging-cell/anti-ragging(9).webp",
        alt: "anti(9)",
    },
     {           
        id: 10,
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/anti-ragging-cell/anti-ragging(10).webp",
        alt: "anti(10)",
    },
     {           
        id: 11,
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/anti-ragging-cell/anti-ragging(11).webp",
        alt: "anti(11)",
    },
  ];
/* ---------------- PAGE COMPONENT ---------------- */

export default function Page() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.__breadcrumbData = breadcrumbData;
    }
  }, []);

  return (
    <>
      <MainIntro
        title="Anti-Ragging Cell"
        subtitle={false}
        subtitleClassName="!text-blue"
        showReadMore={false}
        description={[
          "Ragging is ruining the lives and careers of innocent students and even harming their health. Ragging is completely banned on our campus, and we take strict action against any student who is found guilty of ragging. Our cell ensures that every student pursues their education without the fear of harassment or bullying. As per the order of the Supreme Court of India, UGC guidelines, and State Government instructions, Kalinga University is following the “Zero-Tolerance Policy” towards ragging.",
        ]}
        readMoreLabel="Read More"
        readLessLabel="Read Less"
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/student-gathered.webp"
        imageAlt="Anti-Ragging Cell - Kalinga University"
        showKnowMore={false}
        initialVisibleParagraphs={1}
      />

      <VisionMission data={visionMissionData} showImg={false} />

      <ImageListItem
        items={objectives}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-students-2.jpg"
        title="Anti-Ragging Policy"
        description="Students will be punished on the following grounds:"
      />

      <SportsFacilitiesTabs />

      <section className="pt-16 pb-16 bg-white">
              <div className="container mx-auto px-6">
      
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
              <Gallery
                title="Anti-Ragging Week - 2024" 
                description="It was an interactive session organised for newcomers in which they were informed about the university's commitment to maintaining a ragging-free campus. Senior students shared their positive experiences in the University regarding this matter and even encouraged them to report any issue to the anti-ragging cell."
                images={AntiImages.map(img => ({ id: img.id, src: img.image, alt: img.alt }))}
                paddingClassName="py-0"
                titleClassName="text-[var(--foreground)] text-center"
                forceSliderOnMobile={true}
              />
    </>
  );
}


 function SportsFacilitiesTabs() {
  const tabs = useMemo(
    () => [
      { id: "y2024", label: "Anti-Ragging Committee" },
      { id: "y2023", label: "Anti-Ragging Squad" },
     
    ],
    []
  );

  const [activeTab, setActiveTab] = useState("y2024");

  const toggleAccordion = (id) => {
    setActiveTab((prev) => (prev === id ? "" : id));
  };

  const renderTabContent = (tabId) => {
    if (tabId === "y2024")
      return <EventsTable title="Anti-Ragging Committee (2023-24)" data={events2024} />;

    if (tabId === "y2023")
      return <EventsTable title="Anti-Ragging Squad (2023-24)
" data={events2023} />;

    
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
      key: "sno",
      label: "S. No.",
      width: "w-20",
    },
    {
      key: "name",
      label: "Name",
      width: "flex-1",
    },
    {
      key: "designation",
      label: "Designation",
      width: "w-56",
    },
    {
      key: "area",
      label: "Area",
      width: "w-56",
    },
  ];

  return (
    <div>
      <h2 className="text-center mb-[20px]">
        {title}
      </h2>

      <div className="max-h-[450px] overflow-y-auto">
        <DataTable
          columns={columns}
          data={data}
          overflowX={true}
        />
      </div>
    </div>
  );
}

const events2024 = [
  { sno: 1, name: "Dr. A. Vijayanand", designation: "Head of the Committee", area: "Chief Proctor" },
  { sno: 2, name: "Mr. Badrinath Kesharwani", designation: "Member", area: "Civil Representative" },
  { sno: 3, name: "Mr. Gopal Krishna Agrawal", designation: "Member", area: "NGO Representative" },
  { sno: 4, name: "Mr. Lallan Singh", designation: "Member", area: "Police Representative" },
  { sno: 5, name: "Mr. Kailash Agrawal", designation: "Member", area: "Local Media" },
  { sno: 6, name: "Mr. Sarvan Droliya", designation: "Member", area: "Social Worker" },
  { sno: 7, name: "Dr. Rahul Mishra", designation: "Member", area: "Faculty Member" },
  { sno: 8, name: "Dr. Sushma Dubey", designation: "Member", area: "Faculty Member" },
  { sno: 9, name: "Dr. Amit Joshi", designation: "Member", area: "Faculty Member" },
  { sno: 10, name: "Mr. Suresh Sinha", designation: "Member", area: "Parents Representative" },
  { sno: 11, name: "Ms. Lavanya Bilesiya", designation: "Member", area: "Student Representative" },
  { sno: 12, name: "Mr. Vishal Kr. Singh", designation: "Member", area: "Student Representative" },
];
const events2023 = [
  { sno: 1, name: "Dr. Sandeep Gandhi", designation: "Head of the Committee", area: "Registrar" },
  { sno: 2, name: "Dr. A. Vijayanand", designation: "Member", area: "Chief Proctor" },
  { sno: 3, name: "Mr. Manish Singh", designation: "Member", area: "Faculty" },
  { sno: 4, name: "Dr. C. P. Jawahar", designation: "Member", area: "Faculty" },
  { sno: 5, name: "Dr. Manoj Singh", designation: "Member", area: "Faculty" },
  { sno: 6, name: "Ms. Urvashi Sharma", designation: "Member", area: "Student" },
  { sno: 7, name: "Ms. Leena Chandrakar", designation: "Member", area: "Student" },
  { sno: 8, name: "Mr. Tarun Sahu", designation: "Member", area: "Student" },
  { sno: 9, name: "Mr. Bhojraj Sahu", designation: "Member", area: "Student" },
  { sno: 10, name: "Mr. Surendra Kumar Sahu", designation: "Member", area: "Student" },
];

