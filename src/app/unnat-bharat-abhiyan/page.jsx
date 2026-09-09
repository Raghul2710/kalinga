import UBAClient from "./UBAClient";

export const metadata = {
  title: "Unnat Bharat Abhiyan (UBA) | Rural Development | Kalinga University",
  description: "Kalinga University actively participates in Unnat Bharat Abhiyan to transform rural India. Explore our adopted villages, rural development initiatives, and community engagement.",
  keywords: "Unnat Bharat Abhiyan university Raipur, UBA Kalinga University, Rural development initiatives Chhattisgarh, Village adoption program India higher education",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/unnat-bharat-abhiyan",
  },
};

export default function UnnatBharatAbhiyanPage() {
  const ubaSteps = [
    { id: 1, stepNumber: "01", title: "Palaud", icon: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/check-box.png" },
    { id: 2, stepNumber: "02", title: "Kotni", icon: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/check-box.png" },
    { id: 3, stepNumber: "03", title: "Tandul", icon: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/check-box.png" },
    { id: 4, stepNumber: "04", title: "Kuhera", icon: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/check-box.png" },
    { id: 5, stepNumber: "05", title: "Parsada", icon: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/check-box.png" },
    { id: 6, stepNumber: "06", title: "Kotara Bhantha", icon: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/check-box.png" },
  ];

  const visionMissionData = [
    {
      visionTitle: "Vision",
      missionTitle: "Mission",
      visionText: "Unnat Bharat Abhiyan is inspired by the vision of transformational change in rural development processes by leveraging knowledge institutions to help build the architecture of an Inclusive India.",
      missionText: "The Mission of Unnat Bharat Abhiyan is to enable higher educational institutions to work with the people of rural India in identifying development challenges and evolving appropriate solutions for accelerating sustainable growth. It also aims to create a virtuous cycle between society and an inclusive academic system by providing knowledge and practices for emerging professions and to upgrade the capabilities of both the public and the private sectors in responding to the development needs of rural India.",
      showImage: false,
    },
  ];

  const objectives = [
    { text: "To build an understanding of the development agenda within institutions of Higher Education and an institutional capacity and training relevant to national needs, especially those of rural India." },
    { text: "To re-emphasise the need for field work, stakeholder interactions and design for societal objectives as the basis of higher education." },
    { text: "To stress rigorous reporting and useful outputs as central to developing new professions." },
    { text: "To provide rural India and regional agencies with access to the professional resources of the institutes of higher education, especially those that have acquired academic excellence in the fields of science, engineering, technology, and management." },
    { text: "To improve development outcomes as a consequence of this research. To develop new professions and new processes to sustain and absorb the outcomes of research." },
    { text: "To foster a new dialogue within the larger community on science, society, and the environment, and to develop a sense of dignity and collective destiny." },
  ];

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

  const ubaEventDetails = [
    { slNo: 1, event: "Field Visit and Interaction with Women Self-Help Group (SHG) Members of Village Palaud for Assessing Livelihood and Market-Linkage Challenges", date: "02.07.2026 to 03.07.2026" },
    { slNo: 2, event: "A field visit was conducted to Kuhera Village, Tilda Block, Raipur District, Chhattisgarh Regarding - Solar-Powered Smart Automatic Water Dispenser for Hygienic and Sustainable Drinking Water Management in Rural Communities", date: "24.05.2026" },
    { slNo: 3, event: "Summer Camp on Robotics, AI & STEM Education", date: "23.04.2026 to 05.05.2026" },
    { slNo: 4, event: "Training Program on Robotics & STEM Education", date: "04.04.2026 to 14.04.2026" },
    { slNo: 5, event: "Celebration of Four Successful Years of IEEE Kalinga University Student Branch", date: "04.04.2026" },
    { slNo: 6, event: "STEM Demonstration at Bangur Public School, SRCP", date: "28.03.2026" },
    { slNo: 7, event: "9-Day STEM Summer Camp on AI & Robotics", date: "09.03.2026 to 20.03.2026" },
    { slNo: 8, event: "Bootcamp on Data Empowerment for Local Innovation and Entrepreneurship", date: "27.01.2026 to 31.01.2026" },
    { slNo: 9, event: "STEM Showcase at Anand Mela 2025", date: "22.11.2025" },
    { slNo: 10, event: "Cybersecurity Extravaganza 2025 for School Students", date: "26.09.2025 to 27.09.2025" },
    { slNo: 11, event: "IEEE MOVE Outreach India: Promoting Climate Change and Sustainability", date: "08.09.2025" },
    { slNo: 12, event: "STEM Awareness Session at Blossom School", date: "02.09.2025" },
    { slNo: 13, event: "IEEE MOVE Outreach India: Promoting Climate Change and Sustainability", date: "30.08.2025" },
    { slNo: 14, event: "Gram Sabha (Labour Day) under Unnat Bharat Abhiyan", date: "01.05.2025" },
    { slNo: 15, event: "“IEEE-MOVE Outreach India Promoting Climate Change & Sustainability”", date: "24.12.2024" },
    { slNo: 16, event: "“IEEE-MOVE Outreach India Promoting Climate Change & Sustainability”", date: "19.12.2024" },
    { slNo: 17, event: "“IEEE-MOVE Outreach India Promoting Climate Change & Sustainability”", date: "16.12.2024" },
    { slNo: 18, event: "“IEEE-MOVE Outreach India Promoting Climate Change & Sustainability”", date: "07.12.2024" },
    { slNo: 19, event: "“IEEE-MOVE Outreach India Promoting Climate Change & Sustainability”", date: "05.12.2024" },
    { slNo: 20, event: "One week hands on training : Exposing rural students to opportunities in stem", date: "05.08.2024 - 09.08.2024" },
    { slNo: 21, event: "Production of Lotus Yarn from lotus fuber as an aquifiber, an innovation in Handloom Industry", date: "6.6.2024" },
    { slNo: 22, event: "Donation Drive: Donate to Make a Difference", date: "8.11.2023" },
    { slNo: 23, event: "Smart Garbage Monitoring System in Government Schools", date: "03.10.2023 - 07.10.2023" },
    { slNo: 24, event: "Two day workshop on aero-modeling for girls students from government school", date: "17.06.2023 - 18.06.2023" },
    { slNo: 25, event: "Guest lecture on “Funding Opportunities on Humanitarian Projects to Meet SDG’s through IEEE”, NIT Durgapur", date: "20.03.2023" },
    { slNo: 26, event: "Guest lecture on “Funding Opportunities on Humanitarian Projects to Meet SDG’s through IEEE”", date: "23.02.2023" },
    { slNo: 27, event: "Guest lecture on “Funding Opportunities on Humanitarian Projects to Meet SDG’s through IEEE”, NIT Raipur", date: "23.02.2023" },
    { slNo: 28, event: "Village/household surveys in the Kalinga University UBA adopted villages", date: "03.11.2022 - 09.08.2022" },
    { slNo: 29, event: "Infrastructure (Basic Amenities) development of Government Schools", date: "22.08.2022 - 27.08.2022" },
  ];

  const ubaImages = [
    { id: 1, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/1.jpg", alt: "UBA Activity 1" },
    { id: 2, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/2.jpg", alt: "UBA Activity 2" },
    { id: 3, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/3.jpg", alt: "UBA Activity 3" },
    { id: 4, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/4.jpg", alt: "UBA Activity 4" },
    { id: 5, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/5.jpg", alt: "UBA Activity 5" },
    { id: 6, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/6.jpg", alt: "UBA Activity 6" },
    { id: 7, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/7.jpg", alt: "UBA Activity 7" },
    { id: 8, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/8.jpg", alt: "UBA Activity 8" },
    { id: 9, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/9.jpg", alt: "UBA Activity 9" },
    { id: 10, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/10.jpg", alt: "UBA Activity 10" },
    { id: 11, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/11.jpg", alt: "UBA Activity 11" },
  ];

  const CARD_TEXT_CLASSNAME = "mt-[10px] text-[var(--foreground)]";
  const SECTION_TITLE_CLASSNAME = "font-stix text-1xl md:text-[30px] text-[var(--foreground)]";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Unnat Bharat Abhiyan (UBA) - Kalinga University",
    "description": "Information about the university's participation in UBA, adopted villages, committee members, and community development activities.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "UBA", "item": "https://kalingauniversity.ac.in/unnat-bharat-abhiyan" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UBAClient
        ubaSteps={ubaSteps}
        visionMissionData={visionMissionData}
        objectives={objectives}
        ubaTeamTable={ubaTeamTable}
        ubaEventDetails={ubaEventDetails}
        ubaImages={ubaImages}
        CARD_TEXT_CLASSNAME={CARD_TEXT_CLASSNAME}
        SECTION_TITLE_CLASSNAME={SECTION_TITLE_CLASSNAME}
      />
    </>
  );
}