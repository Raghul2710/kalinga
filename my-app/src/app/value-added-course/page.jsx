"use client";
import { useState } from "react";
import MainIntro from "../components/about/main_intro";
import MediaCardSlider from "../components/general/media-card-slider";
import SectionHeading from "../components/general/SectionHeading";

/* ---------------- Breadcrumb ---------------- */
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/international-students-banner.webp",
  pageTitle: "Value Added Courses",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Value Added Courses", href: "/value-added-courses" },
  ],
};
// Register breadcrumb data globally
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}
/* ---------------- Video Data ---------------- */
const videoItems = [
  {
    id: 1,
    name: "Sujjal Saraf",
    description: "BBA",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_856d6f87-40aa-4311-9bd2-a4c2854b83b2+(1).mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_856d6f87-40aa-4311-9bd2-a4c2854b83b2+(1).mp4",
  },
  {
    id: 2,
    name: "Sadiq Isa Yusuf",
    description: "MBA",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/students-video-1.mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/students-video-1.mp4",
  },
  {
    id: 3,
    name: "Debraj Debnath",
    description: "B.Tech CS",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_5112c405-c05e-42cd-a9f2-6f043d3d2181.mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_5112c405-c05e-42cd-a9f2-6f043d3d2181.mp4",
  },
  {
    id: 4,
    name: "Surya Kumar Srivastava",
    description: "B.Tech CS (AIML)",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_8b1b9390-247c-4ca7-b120-29a1e6e2d85d.mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_8b1b9390-247c-4ca7-b120-29a1e6e2d85d.mp4",
  },
  {
    id: 5,
    name: "Naman Kumar",
    description: "MCA",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/Value+Added+Byte+08+(1)+(1).mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/Value+Added+Byte+08+(1)+(1).mp4",
  },
  {
    id: 6,
    name: "Karda Karwolor",
    description: "BCS AI ML",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_d95ed852-87bb-43b3-b52e-95c23b096a02.mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_d95ed852-87bb-43b3-b52e-95c23b096a02.mp4",
  },
  {
    id: 7,
    name: "Alex Teo",
    description: "MBA",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/Value+Added+Byte+07+(1)+(1).mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/Value+Added+Byte+07+(1)+(1).mp4",
  },
  {
    id: 9,
    name: "Abubakar",
    description: "MCOM BF",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_85b47a2b-6778-43cc-b817-929a4beaf67c+(2)+(1).mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_85b47a2b-6778-43cc-b817-929a4beaf67c+(2)+(1).mp4",
  },
];

/* ---------------- PDF Data ---------------- */
const pdfData = {
  "2024-25":
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/vac/2024-25.pdf",
  "2023-24":
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/vac/2023-24.pdf",
  "2022-23":
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/vac/2022-23.pdf",
  "2021-22":
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/vac/2021-22.pdf",
  "2020-21":
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/vac/20-21.pdf",
  "2019-20":
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/vac/19-20.pdf",
  "2018-19":
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/vac/18-19.pdf",
};

export default function ValueAddedPage() {
  const years = Object.keys(pdfData);
  const [activeYear, setActiveYear] = useState(years[0]);

  return (
    <>
    <section className="research-welfare-intro">
        <MainIntro
          breadcrumbData={breadcrumbData}
          title="Value Added Courses"
          description={[
            "Emerging trends in technical and professional education call for value addition, i.e., students must acquire something more than what is provided in the curriculum and develop skills in their chosen field of study.",
            " Kalinga University offers a range of short-term certificate courses, which are conducted after class hours or during semester breaks. These courses are conducted by professionals and industry experts who help students stand out in the job market.",
          ]}
          imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/banner+(1).webp"
          imageAlt="Value-Added"
          initialVisibleParagraphs={3}
          showKnowMore={false}
        />
      </section>

     {/* ---------- YEAR WISE PDF SECTION ---------- */}
<section className="py-14">
  <div className="mx-auto max-w-6xl rounded-3xl bg-[#0d4a75] p-6">
    {/* <h3 className="text-white mb-6">
      
    </h3> */}

    {/* Tabs */}
    <div className="flex flex-wrap gap-3 mb-6">
      {years.map((year) => {
        const isActive = activeYear === year;
        return (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={[
              "whitespace-nowrap rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-[var(--button-red)] text-white border-white/10"
                : "bg-white text-[var(--foreground)] border-white/30 hover:bg-white/95",
            ].join(" ")}
          >
            {year}
          </button>
        );
      })}
    </div>

   

    {/* PDF Preview */}
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <iframe
        src={pdfData[activeYear].replace("/view", "/preview")}
        className="w-full h-[600px]"
        allow="autoplay"
      />
    </div>
  </div>
</section>


      {/* Video Slider */}
      <div className="px-2 md:px-0">
        <MediaCardSlider
          categoryTitle="Our Student Experiences"
          videoItems={videoItems}
          nameTextClass="text-[#A61E1E]"
          swiperClassName="value-added-video-slider"
        />
      </div>
    </>
  );
}
