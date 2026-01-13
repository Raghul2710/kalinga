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
import NewsEvents from "../components/home/news_and_events";
import CenterOfExcellence from "../components/about/center_of_excellence";
import AwardsScrollbar from "../components/home/awards-scrollbar";
import ResearchCE from '../components/research-facilities/research-coe'

const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/reserarch-banner.webp",
  pageTitle: "Research",
  imageposition: "object-center",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' }
  ]
};

if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

export default function Research() {

  const newsConferences = [
    {
      id: 1,
      title: "Scopus Workshop: Research Impact",
      date: "Nov 28, 2025 · 10:00 A.M.",
      category: "Academic Event",
      description: "Hybrid workshop on Scopus analytics and publishing insights with experts.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Pic1+(1).jpeg",
      href: "/contact-us"
    }
  ];
  const centres = [
    {
      id: 1,
      name: "Rajasthan Global Security Pvt. Ltd.",

      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/Rajasthan+Global+Security+Pvt.+Ltd..png",
    },
    {
      id: 2,
      name: "WANFENG Aluminium Wheel (INDIA) Pvt. Ltd.",

      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/WANFENG+Aluminium+Wheel+(INDIA)+Pvt.+Ltd+(2).png",
    },
    {
      id: 3,
      name: "Real Care Foundation",

      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/Real+Care+Foundation.png",
    },

  ];
  const awards = [
    {
      id: 1,
      year: "2024-25",
      link: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Awards+2024-25+(1).pdf",
      active: true,
    },
    {
      id: 2,
      year: "2023-24",
      link: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Awards+2023-24+(1).pdf",
      active: true,
    },
    {
      id: 3,
      year: "2022-23",
      link: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/2022-23+(2).pdf",
      active: true,
    },
    {
      id: 4,
      year: "2021-22",
      link: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/2021-22+(2).pdf",
      active: true,
    },
    {
      id: 5,
      year: "2020-21",
      link: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/2020-21+(2).pdf",
      active: true,
    },
    {
      id: 6,
      year: "2019-20",
      link: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/2019-20+(2).pdf",
      active: true,
    },
    {
      id: 7,
      year: "2018-19",
      link: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/2018-19+(2)+(1).pdf",
      active: true,
    },
  ];

  return (
    <div>
      <MainIntro
        title="Research and Innovation"
        description={[
          "Kalinga University promotes research through a knowledge-sharing mechanism that goes beyond textbooks and classroom-based studies. The primary aim of our research department is to make the outcome impactful by collaborating with renowned universities and R&D institutions. Our research-ready curriculum is constantly updated with innovative programs to tackle real-world challenges, encouraging interdisciplinary and multidisciplinary education.",
          "Our IPR cell supports patent filing, technology development, and commercialisation, while our incubation cell connects us with local/national industry, research labs & institutions, civil society, and the Government. We conduct research work under our well-designed research policy, and to promote that, we have ample online study material, SPSS tools for research, and Drillbit to check plagiarism in research. We have extensive CIF labs with all the high-tech instruments that are not available anywhere else in Chhattisgarh. We don't just encourage students to ask questions, but we support them in finding answers on their own."
        ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/research/research-main-content.webp"
        imageAlt="Kalinga University Research"
        showButton={false}
        showKnowMore={true}
        initialVisibleParagraphs={1}
      />

      <PublicationGrid />
      <OrganogramOfKalinga
        title="Apply Now for Ph.D. Admissions"
        description="Begin your research journey with world-class faculty, advanced labs, and a structured research ecosystem."
        buttonLabel="Apply Now"
        href="/phd"
        useContainer={true}

      />
      {/* <UGCLogo /> */}
      <QuickLinks
        title="Research Facilities and Resources"
        titleClassName="text-white"
        description="We provide a conducive environment for research work through our advanced laboratories, IPR cell, Central Instrumentation Facility labs, and library."
        links={[
          {
            id: 1,
            href: "/ipr-cell",
            icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Entrepreneurial+Thinking.svg",
            title: "IPR Cell",
            description: "Whether you are developing an app or a gadget, our IPR cell will always guide you in protecting your unique work, providing patents, and launching them on different platforms.",
          },
          {
            id: 2,
            href: "/laboratories",
            icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/facility-management.svg",
            title: "Laboratories",
            description: "Our laboratories offer all-around facilities with modern machines, helping young researchers acquire complete practical knowledge and support in their research pursuits.",
          },
          {
            id: 3,
            href: "/career-and-corporate-resource-centre",
            icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Extensive+Research+Facilities.svg",
            title: "Central Instrumentation Facility Labs",
            description: "Convert your bold ideas into a great discovery! Our CIF Labs are packed with high-end instruments like an X-Ray Diffractometer, 3D Printer, Bio-Chemistry Analyser, Scanning Electron Microscope, and more.",
          },
          {
            id: 4,
            href: "/library",
            icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/icons/teachings.svg",
            title: "Library",
            description: "Curious minds, get ready to explore the pool of resources! Our library houses vast academic materials in both physical and digital forms, where students gain new knowledge at every stage of their research journey.",
          },
          {
            id: 5,
            href: "/research-resources",
            icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/Build+Networks.svg",
            title: "Research Resources",
            description: "Kalinga University is one of the best Research-Intensive University as it is more than just your academic curriculum; it's about generating curiosity, creativity, and a continuous learning environment.",
          },
          {
            id: 6,
            href: "/research-facilities",
            icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Experienced+Faculties.svg",
            title: "Research Facilities",
            description: "State-of-the-art laboratories, high-tech instrumentation, and dedicated research centers equipped with cutting-edge tools for groundbreaking research across all disciplines.",
          },
        ]}
        showReadMore={true}
        showDescriptionReadMore={false}
      />

      <MentorIntro imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/research/chart-1.webp"
        title="Dr. Harsha Patil"
        subtitle="A Message From the Dean"
        department="HoD - Research"
        quote="Research is the foundation of academic excellence, where curiosity transforms into innovation and knowledge advances society."
        message="Research is the soul of academic excellence, and Kalinga University strives to develop a rich research ecosystem that generates curiosity, problem-solving, and inspiration among young researchers and faculty. With our advanced research labs, high-tech instruments, updated policy guidelines, IPR facilitation, CIF labs, and connections with national and international organisations, our research scholars work together toward societal progress. With hands-on training opportunities, workshops, and seminars on how to use modern machines, students learn to lead in their field. Our faculty members support students in publishing their research papers, filing patents, and presenting their work on different platforms."
      />

      {/* <FAQ
        title="Conferences"
        subtitleClassName="!hidden"
        variant="table-display"
        items={[]}
        tableSections={[
          {
            id: 1,
            title: "List of Conferences Held At KU",
            columns: [
              { key: "slNo", label: "S. No.", width: "w-20" },
              { key: "faculty", label: "Faculty", width: "w-48" },
              { key: "conferenceName", label: "Name of The Conference", width: "w-80" },
              { key: "type", label: "National/ International", width: "w-40" },
              { key: "date", label: "Date", width: "w-64" },
              { key: "year", label: "Year", width: "w-24" }
            ],
            data: [
              { slNo: 1, faculty: "IEEE", conferenceName: "2025 World Conference on Communication & Computing (WCONF)", type: "International", date: "25.07.2025 to 27.07.2025", year: "2025" },
              { slNo: 2, faculty: "Faculty of CS IT", conferenceName: "Recent Trends in Emerging Technologies for Sustainable Innovation, Management and Development (ICRETE SIMD 2025)", type: "International", date: "27.03.2025 to 28.03.2025", year: "2025" },
              { slNo: 3, faculty: "Faculty of Pharmacy", conferenceName: "Emerging Perspectives and Future Trends in Pharmaceutical and Allied Sciences For Global Health and Wellbeing", type: "International", date: "25.03.2025 to 26.03.2025", year: "2025" },
              { slNo: 4, faculty: "Faculty of Arts & Humanities", conferenceName: "Viksit Bharat @2047: Progress and Development", type: "National", date: "21.03.2025 to 22.03.2025", year: "2025" },
              { slNo: 5, faculty: "Faculty of Law", conferenceName: "2-Days Global Conference on \"Recent Trends in Law, Arbitration, Meditation, Economy & Society\"", type: "International", date: "28.02.2025 to 01.03.2025", year: "2025" },
              { slNo: 6, faculty: "Faculty of Commerce & Management", conferenceName: "2-Days International Conference on \"International Conference on Innovative Management Techniques for Sustainable Development\" (IMTSD)", type: "International", date: "21.02.2025 to 22.02.2025", year: "2025" },
              { slNo: 7, faculty: "Faculty of Education", conferenceName: "2-Days International Conference on \"Innovative Education Strategies NEP 2020 in Chhattisgarh and Beyond\".", type: "International", date: "21.01.2025 to 22.01.2025", year: "2025" },
              { slNo: 8, faculty: "IEEE", conferenceName: "2024 World Conference on Communication & Computing (WCONF)", type: "International", date: "12.07.2024 to 14.07.2024", year: "2024" },
              { slNo: 9, faculty: "Faculty of Science", conferenceName: "Future Aspects of Science & Technology", type: "International", date: "03.04.2024 to 04.04.2024", year: "2024" },
              { slNo: 10, faculty: "Faculty of Pharmacy", conferenceName: "Current challenges and Novel strategies in global Adverse drug reaction (ADR) Monitoring", type: "International", date: "15.03.2024 to 16.03.2024", year: "2024" },
              { slNo: 11, faculty: "Faculty of Law", conferenceName: "Constitutionalism and the Present Democracy: The Challenges Ahead", type: "International", date: "27.10.2023 to 28.10.2023", year: "2023" },
              { slNo: 12, faculty: "Faculty of Arts & Humanities", conferenceName: "Strengthening women entrepreneurship for achieving sustainable development goals", type: "National", date: "06.10.2023 to 07.10.2023", year: "2023" },
              { slNo: 13, faculty: "IEEE", conferenceName: "2023 World Conference on Communication & Computing (WCONF)", type: "International", date: "14.07.2023 to 16.07.2023", year: "2023" },
              { slNo: 14, faculty: "Faculty of Commerce & Management", conferenceName: "The New Normal-Recent trends in Business and Management", type: "National", date: "27.05.2023 to 28.05.2023", year: "2023" },
              { slNo: 15, faculty: "Faculty of Science", conferenceName: "International Conference on Climate Change, Sustainable Development & Smart Agriculture", type: "International", date: "06.04.2023 to 07.04.2023", year: "2023" },
              { slNo: 16, faculty: "Faculty of Science", conferenceName: "National Climate Change Conference on Suggestions and recommendations for fostering Adaptation and Resilience", type: "National", date: "17.03.2023", year: "2023" },
              { slNo: 17, faculty: "Faculty of Science", conferenceName: "Hodiernal Aspect of Science and Technology", type: "International", date: "24.02.2023 to 25.02.2023", year: "2023" },
              { slNo: 18, faculty: "Faculty of Education", conferenceName: "National Conference on Intellectual Property Rights", type: "National", date: "15.02.2023 to 17.02.2023", year: "2023" },
              { slNo: 19, faculty: "Faculty of Technology", conferenceName: "National Conference on Advance Approaches in Pure and Applied Mathematics", type: "National", date: "14.02.2023 to 15.02.2023", year: "2023" },
              { slNo: 20, faculty: "Faculty of Arts & Humanities", conferenceName: "Global Crisis in the Present Scenario", type: "International", date: "02.12.2022 to 03.12.2022", year: "2022" },
              { slNo: 21, faculty: "Faculty of Commerce & Management", conferenceName: "Emerging Business and Technology Issues with Emergence of Industry 4.0", type: "National", date: "29.11.2022 to 30.11.2022", year: "2022" },
              { slNo: 22, faculty: "Faculty of Pharmacy", conferenceName: "Current Scenario and Innovation in Pharma Industry for Drug Discovery and Development", type: "National", date: "24.11.2022", year: "2022" },
              { slNo: 23, faculty: "Faculty of Law", conferenceName: "Rights of Differently Abled Person in India", type: "National", date: "23.11.2022 to 24.11.2022", year: "2022" },
              { slNo: 24, faculty: "Faculty of Technology", conferenceName: "Recent Innovations In Emerging Computing Technologies", type: "National", date: "14.11.2022 to 15.11.2022", year: "2022" },
              { slNo: 25, faculty: "Faculty of Technology", conferenceName: "Recent Innovations in Engineering & Technology", type: "National", date: "06.05.2022", year: "2022" },
              { slNo: 26, faculty: "Faculty of CS & IT", conferenceName: "Recent Advancements in Engineering & Computing Technologies", type: "National", date: "04.05.2022 to 05.05.2022", year: "2022" },
              { slNo: 27, faculty: "Faculty of Education", conferenceName: "Indian Culture And Modern Challenges of Education", type: "International", date: "02.05.2022 to 03.05.2022", year: "2022" },
              { slNo: 28, faculty: "Faculty Arts & Humanities", conferenceName: "Women Leadership in Contemporary Scenario", type: "International", date: "25.04.2022 to 26.04.2022", year: "2022" },
              { slNo: 29, faculty: "Faculty Arts & Humanities", conferenceName: "Over The Horizon Introspecting The Self in Flux", type: "National", date: "15.11.2019 to 16.11.2019", year: "2019" },
              { slNo: 30, faculty: "Faculty of Science", conferenceName: "Advanced Material & Environmental Science", type: "National", date: "14.10.2019 to 15.10.2019", year: "2019" }
            ]
          }
        ]}
        overflowX={false}
      /> */}

      <ResearchSixGridButtons />


      {/* 
        categoryId="RESEARCH_ID" is a placeholder. 
        Since this ID presumably doesn't exist, it will fallback to showing ALL events (fallback='all' by default).
        Once a real Research category ID exists, it will filter correctly.
      */}
      {/* <NewsEvents categoryId="RESEARCH_ID" title="Upcoming Conferences & Events" /> */}
      {/* <UpcomingConferences
        categoryIds={['5']}
        title="Conferences & Events"
        fallback="all"
        limit={5}
      /> */}
      {/* <CenterOfExcellence
        centres={centres}
        title=" Collaborative Activities/MoU"
        description="Explore the spaces and partnerships that power the Kalinga Incubation Foundation."
      /> */}
      <ResearchCE />
      <AwardsScrollbar
        title="Awards Received for Research & Innovation"
        awards={awards}
        hideTitle={false}
        headerButtonLabel="View All Awards"
        onHeaderButtonClick={() => console.log('View all awards clicked')}
        hideTopLeaves={true}
        showLeavesAroundButton={true}
        dottedLineTop="top-[200px] sm:top-[70px]"
      />
      <AdmissionCareer />
    </div>
  );
}