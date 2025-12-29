"use client";

import FAQ from "../components/general/faq";
import ImageContent from "@/app/components/ccrc/imagecontent";
import MainIntro from "../components/about/main_intro";
import VisionMission from "../components/about/vision-mission";
import ImageListItem from "../components/ccrc/imagelistitem";
import DeptHeadIntro from "@/app/components/department/dept_head_intro";

/* ---------------- Breadcrumb ---------------- */
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/kif-banner.webp",
  pageTitle: "Unnat Bharat Abhiyan",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Unnat Bharat Abhiyan", href: "/unnat-bharat-abhiyan" },
  ],
};

if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

/* ---------------- Vision & Mission ---------------- */
const visionMissionData = [
  {
    visionTitle: "Vision",
    missionTitle: "Mission",
    visionText:
      "Unnat Bharat Abhiyan is inspired by the vision of transformational change in rural development processes by leveraging knowledge institutions to help build the architecture of an Inclusive India.",
    missionText:
      "Enable higher educational institutions to work with rural communities, identify development challenges and create sustainable solutions, strengthen the link between society and academia, and upgrade the capabilities of the public and private sectors for rural development.",
    showImage: false,
  },
];

/* ---------------- Goals ---------------- */
const objectives = [
  { text: "To build an understanding of the development agenda within institutions of Higher Education and training relevant to national needs, especially those of rural India." },
  { text: "To re-emphasise the need for field work, stakeholder interactions, and design for societal objectives." },
  { text: "To stress rigorous reporting and useful outputs as central to developing new professions." },
  { text: "To provide rural India with access to professional resources of institutes of higher education." },
  { text: "To improve development outcomes through research and innovation." },
  { text: "To foster dialogue on science, society, and the environment." },
];

/* ---------------- Mentor ---------------- */
const MentorIntroProps = [
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/unnat-bharat-abhiyan/chart+(1).png",
    title: "Dr. Sandeep Gandhi",
    subtitle: "UBA PI Coordinator",
    department: "Registrar, Kalinga University",
    quote: `Registrar
Email: registrar@kalingauniversity.ac.in
Phone: +91-9303097043`,
    message: [],
  },
];

/* ---------------- UBA Team ---------------- */
const ubaTeamTable = [
  { slNo: 1, name: "Dr. Vijayalaxmi Biradar", designation: "Director IQAC", role: "Member" },
  { slNo: 2, name: "Dr. Smita Premanand", designation: "Assistant Professor, NSS Program Officer", role: "Member" },
  { slNo: 3, name: "Mr. Anup Kumar Jana", designation: "Assistant Professor", role: "Member" },
  { slNo: 4, name: "Mr. Sarat Chandra Mohanty", designation: "Assistant Professor", role: "Member" },
  { slNo: 5, name: "Dr. Anu G Pillai", designation: "Assistant Professor", role: "Member" },
  { slNo: 6, name: "Dr. Anita Verma", designation: "Assistant Professor", role: "Member" },
  { slNo: 7, name: "Ms. Rupal Gupta", designation: "Research Associate", role: "Member" },
  { slNo: 8, name: "Mr. Ashwan Kumar Sahu", designation: "IQAC Office Assistant", role: "Member" },
  { slNo: 9, name: "Mr. Hemant Kumar Sahu", designation: "IQAC Office Assistant", role: "Member" },
];

const ubaTeamTableSection = [
  {
    id: 1,
    title: "UBA Committee",
    columns: [
      { key: "slNo", label: "S. No.", width: "w-24" },
      { key: "name", label: "Name", width: "w-72" },
      { key: "designation", label: "Designation", width: "w-80" },
      { key: "role", label: "Role in UBA", width: "w-40" },
    ],
    data: ubaTeamTable,
  },
];

/* ---------------- Page ---------------- */
export default function UnnatBharatAbhiyanPage() {
  return (
    <div className="bg-white">

      <ImageContent
        title="Unnat Bharat Abhiyan"
        description="Unnat Bharat Abhiyan (UBA) was launched by the Ministry of Education in 2014 to address rural challenges and connect them with higher education institutions."
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/unnat-bharat-abhiyan/news-6047.webp"
        readmore={false}
      />

      <MainIntro
        title="Our Commitment Towards Rural Transformation"
        description={[
          "Kalinga University proudly participates in the Unnat Bharat Abhiyan to empower rural communities through knowledge and technology.",
        ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/students-3.jpg"
      />

      <VisionMission data={visionMissionData} showImg={false} />

      <ImageListItem
        items={objectives}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-students-2.jpg"
        title="Goals of Unnat Bharat Abhiyan"
        description={false}
      />

      <DeptHeadIntro items={MentorIntroProps} />

      {/* ✅ UBA Team Table */}
      <FAQ
        title="Our UBA Team Members"
        showHeading={false} 
        variant="table-display"
        items={[]}
        tableSections={ubaTeamTableSection}
        overflowX={false}
      />

    </div>
  );
}
