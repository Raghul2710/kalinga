"use client";
import { useState } from "react";
import MainIntro from "../components/about/main_intro";
import MediaCardSlider from "../components/general/media-card-slider";
import SectionHeading from "../components/general/SectionHeading";
import FlipbookTrigger from "../components/general/FlipbookTrigger";
import { useFlipbook } from "../components/general/FlipbookContext";
import GlobalArrowButton from "../components/general/global-arrow_button";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/banner+(1).webp",
  pageTitle: "Value Added Courses",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Value Added Courses", href: "/value-added-course" },
  ],
};

// Register breadcrumb data globally
if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}
/* ---------------- Video Data ---------------- */
const videoItems = [
  {
    id: 1,
    title: "Sujjal Saraf",
    subtitle: "BBA",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_856d6f87-40aa-4311-9bd2-a4c2854b83b2+(1).mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_856d6f87-40aa-4311-9bd2-a4c2854b83b2+(1).mp4",
  },
  {
    id: 2,
    title: "Sadiq Isa Yusuf",
    subtitle: "MBA",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/students-video-1.mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/students-video-1.mp4",
  },
  {
    id: 3,
    title: "Debraj Debnath",
    subtitle: "B.Tech CS",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_5112c405-c05e-42cd-a9f2-6f043d3d2181.mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_5112c405-c05e-42cd-a9f2-6f043d3d2181.mp4",
  },
  {
    id: 4,
    title: "Surya Kumar Srivastava",
    subtitle: "B.Tech CS (AIML)",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_8b1b9390-247c-4ca7-b120-29a1e6e2d85d.mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_8b1b9390-247c-4ca7-b120-29a1e6e2d85d.mp4",
  },
  {
    id: 5,
    title: "Naman Kumar",
    subtitle: "MCA",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/Value+Added+Byte+08+(1)+(1).mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/Value+Added+Byte+08+(1)+(1).mp4#t=3",
  },
  {
    id: 6,
    title: "Karda Karwolor",
    subtitle: "BCS AI ML",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_d95ed852-87bb-43b3-b52e-95c23b096a02.mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_d95ed852-87bb-43b3-b52e-95c23b096a02.mp4",
  },
  {
    id: 7,
    title: "Alex Teo",
    subtitle: "MBA",
    videoUrl:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/Value+Added+Byte+07+(1)+(1).mp4",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/Value+Added+Byte+07+(1)+(1).mp4#t=3",
  },
  {
    id: 9,
    title: "Abubakar",
    subtitle: "MCOM BF",
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
  const { openFlipbook } = useFlipbook();

  return (
    <>
      <section className="research-welfare-intro">
        <MainIntro
          breadcrumbData={breadcrumbData}
          title="Get Ready To Future-Proof Your Resumes With Industry-Ready Skills"
          description={[
            "Emerging trends in technical and professional education call for value addition, i.e., students must acquire something more than what is provided in the curriculum and develop skills in their chosen field of study. Kalinga University offers a range of short-term value added certificate courses in trending topics like Foreign Exchange Market, Strategic Corporate Communication, Entrepreneurship in Teacher Education, Cloud Infrastructure, Full Stack Development, Health & Nutrition, Law of Right to Information, Apiclture, and more. These courses are conducted by professionals and industry experts who help students stand out in the job market",
          ]}
          imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/banner+(1).webp"
          imageAlt="Value-Added"
          initialVisibleParagraphs={3}
          showKnowMore={false}
        />
      </section>

      {/* ---------- YEAR WISE PDF SECTION ---------- */}
      <SectionHeading
        title="Our Value Added Courses"
        titleClassName="text-center mt-10"
      />
      <section className="py-14">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#0d4a75] p-4">
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-3">
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


          {/* Flipbook Button */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg p-8 flex flex-col items-center justify-center min-h-[400px]">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4 text-center">
              Value Added Courses {activeYear}
            </h3>
            <p className="text-gray-600 mb-6 text-center max-w-2xl">
              Click below to view the complete list of value-added courses offered during the academic year {activeYear}
            </p>
            <FlipbookTrigger
              pdfUrl={pdfData[activeYear]}
              title={`Value Added Courses ${activeYear}`}
            >
              <GlobalArrowButton
                onClick={() => openFlipbook(pdfData[activeYear], `Value Added Courses ${activeYear}`)}
                className="!w-auto !px-8 !py-3"
              >
                View {activeYear} Courses
              </GlobalArrowButton>
            </FlipbookTrigger>
          </div>
        </div>
      </section>


      {/* Video Slider */}
      <div className="px-2 md:px-0">
        <MediaCardSlider
          categoryTitle=""
          title="Our Student Experiences"
          videoItems={videoItems}
          nameTextClass="text-[#A61E1E]"
          swiperClassName="value-added-video-slider"
        />
      </div>
    </>
  );
}
