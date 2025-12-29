"use client";

import { useLayoutEffect } from "react";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import DataTable from "@/app/components/general/data-table";
import StudentActivities from "@/app/components/department/student_activities";
import AdmissionCareer from "@/app/components/general/admission_cta";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/conferences/conferences-banner.webp",
  pageTitle: "Conferences & Events",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Conferences & Events", href: "/conferences-and-events" },
  ],
};

const whyAttendItems = [
  { id: 1, text: "Present your research paper to a wide audience." },
  { id: 2, text: "Get inspired by the industrial leaders/guest speakers." },
  { id: 3, text: "Obtain participation certificates and cash prizes." },
  { id: 4, text: "Build networks with peers, industry leaders, and research scholars." },
  { id: 5, text: "Stay updated with the latest technology trends." },
  { id: 6, text: "Strengthen your research work with valuable feedback from experts." },
];

const conferencesHeldAtKU = [
  { slNo: 1, faculty: "IEEE", conferenceName: "2025 World Conference on Communication & Computing (WCONF)", level: "International", date: "25.07.2025 to 27.07.2025", year: 2025 },
  { slNo: 2, faculty: "Faculty of CS & IT", conferenceName: "Recent Trends in Emerging Technologies for Sustainable Innovation, Management and Development (ICRETE SIMD 2025)", level: "International", date: "22.03.2025 to 23.03.2025", year: 2025 },
  { slNo: 3, faculty: "Faculty of Pharmacy", conferenceName: "Training Programme on “Research Methodology and Allied Sciences for the Improvement and Skill Enhancement of the Young Researchers”", level: "National", date: "20.03.2025 to 22.03.2025", year: 2025 },
  { slNo: 4, faculty: "Faculty of Arts & Humanities", conferenceName: "Two-day National Seminar on “The Human Rights and Constitution”", level: "National", date: "19.03.2025 to 20.03.2025", year: 2025 },
  { slNo: 5, faculty: "Faculty of Law", conferenceName: "National Seminar on “Challenges and Issues of Cyber Crime & Cyber Laws in India”", level: "National", date: "18.03.2025", year: 2025 },
  { slNo: 6, faculty: "Faculty of Commerce & Management", conferenceName: "2 Days International Conference on “Innovative Strategies for Business and Management”", level: "International", date: "24.02.2025 to 25.02.2025", year: 2025 },
  { slNo: 7, faculty: "Faculty of Education", conferenceName: "2-Days International Conference on “Innovative Education Strategies NEP 2020 in Chhattisgarh and Beyond”.", level: "International", date: "21.01.2025 to 22.01.2025", year: 2025 },
  { slNo: 8, faculty: "IEEE", conferenceName: "2024 World Conference on Communication & Computing (WCONF)", level: "International", date: "12.07.2024 to 14.07.2024", year: 2024 },
  { slNo: 9, faculty: "Faculty of Science", conferenceName: "Future Aspects of Science & Technology", level: "International", date: "03.04.2024 to 04.04.2024", year: 2024 },
  { slNo: 10, faculty: "Faculty of Pharmacy", conferenceName: "Current challenges and Novel emerging in global healthcare management", level: "International", date: "16.03.2024 to 18.03.2024", year: 2024 },
  { slNo: 11, faculty: "Faculty of Law", conferenceName: "Constitutionalism and the Future: Democracy in The Changing World", level: "International", date: "12.01.2024", year: 2024 },
  { slNo: 12, faculty: "Faculty of Commerce & Management", conferenceName: "2 Days International Conference on “Biodiversity Management and Strategies for Sustainable Development (BMSD)”", level: "International", date: "05.01.2024 to 06.01.2024", year: 2024 },
  { slNo: 13, faculty: "Faculty of Education", conferenceName: "2 Days International Conference on “Challenges and Holistic Strategies for 21st Century Pedagogy”", level: "International", date: "22.12.2023", year: 2023 },
  { slNo: 14, faculty: "Faculty of Technology", conferenceName: "National Conference on “Innovations in Emerging Engineering Technologies”", level: "National", date: "18.12.2023 to 19.12.2023", year: 2023 },
  { slNo: 15, faculty: "Faculty of Arts & Humanities", conferenceName: "Human Values and Ethics", level: "National", date: "07.12.2023", year: 2023 },
  { slNo: 16, faculty: "Faculty of Commerce & Management", conferenceName: "International Conference on “Recent Trends in E- Banking and Finance”", level: "International", date: "25.11.2023 to 26.11.2023", year: 2023 },
  { slNo: 17, faculty: "Faculty of Pharmacy", conferenceName: "Recent Innovations In Drug Discovery & Development", level: "National", date: "02.11.2023", year: 2023 },
  { slNo: 18, faculty: "Faculty of Law", conferenceName: "Reforms in Contemporary Legal Education", level: "National", date: "10.04.2023", year: 2023 },
  { slNo: 19, faculty: "Faculty of Technology", conferenceName: "National Conference on Advances in Engineering, Science & Applied Mathematics", level: "National", date: "14.02.2023 to 15.02.2023", year: 2023 },
  { slNo: 20, faculty: "Faculty of Arts & Humanities", conferenceName: "Global Crisis in the Contemporary Scenario", level: "International", date: "02.12.2022 to 03.12.2022", year: 2022 },
  { slNo: 21, faculty: "Faculty of Commerce & Management", conferenceName: "Emerging Business Opportunities of Industry 4.0", level: "National", date: "29.11.2022 to 30.11.2022", year: 2022 },
  { slNo: 22, faculty: "Faculty of Pharmacy", conferenceName: "Current Scenario and Innovations in Drug Discovery and Development", level: "National", date: "24.11.2022", year: 2022 },
  { slNo: 23, faculty: "Faculty of Law", conferenceName: "Rights of Differently Abled Person in India", level: "National", date: "23.11.2022 to 24.11.2022", year: 2022 },
  { slNo: 24, faculty: "Faculty of Technology", conferenceName: "Recent Innovations In Emerging Technologies", level: "National", date: "14.11.2022 to 15.11.2022", year: 2022 },
  { slNo: 25, faculty: "Faculty of Technology", conferenceName: "Recent Innovations in Engineering & Technology", level: "National", date: "06.05.2022", year: 2022 },
  { slNo: 26, faculty: "Faculty of CS & IT", conferenceName: "Recent Advancements in Engineering Technologies", level: "National", date: "04.05.2022 to 05.05.2022", year: 2022 },
  { slNo: 27, faculty: "Faculty of Education", conferenceName: "Indian Culture And Modern Challenges in Education", level: "International", date: "02.05.2022 to 03.05.2022", year: 2022 },
  { slNo: 28, faculty: "Faculty Arts & Humanities", conferenceName: "Women Leadership in Contemporary Scenario", level: "International", date: "25.04.2022 to 26.04.2022", year: 2022 },
  { slNo: 29, faculty: "Faculty Arts & Humanities", conferenceName: "Over The Horizon: Introspective Self in Flux", level: "National", date: "15.11.2019 to 16.11.2019", year: 2019 },
  { slNo: 30, faculty: "Faculty of Science", conferenceName: "Advanced Material & Environmental Science", level: "National", date: "14.10.2019 to 15.10.2019", year: 2019 },
];


const upcomingConferences = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "Upcoming Conference",
    title: "Upcoming Conference Title",
    buttonText: "Read More",
    date: "2025",
  },
  {
    id: 2,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "Upcoming Conference",
    title: "Upcoming Conference Title",
    buttonText: "Read More",
    date: "2025",
  },
  {
    id: 3,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "Upcoming Conference",
    title: "Upcoming Conference Title",
    buttonText: "Read More",
    date: "2025",
  },
];

const upcomingEvents = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "Upcoming Event",
    title: "Upcoming Event Title",
    buttonText: "Read More",
    date: "2025",
  },
  {
    id: 2,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "Upcoming Event",
    title: "Upcoming Event Title",
    buttonText: "Read More",
    date: "2025",
  },
  {
    id: 3,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "Upcoming Event",
    title: "Upcoming Event Title",
    buttonText: "Read More",
    date: "2025",
  },
];

export default function ConferencesAndEventsPage() {
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      window.__breadcrumbData = breadcrumbData;
    }
    return () => {
      if (typeof window !== "undefined") {
        delete window.__breadcrumbData;
      }
    };
  }, []);

  return (
    <>
      {/* <section className="pt-10 pb-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-semibold text-[var(--title-color)]">
            Conferences &amp; Events
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            Learn More than Just a Degree
          </p>
        </div>
      </section> */}

      <section className="pt-10 pb-6">
        <ImageListItem
          items={whyAttendItems}
          imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/conferences/conferences-objective.webp"
          title="Why Attend Our Conferences and Events?"
        />
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl mt-15 font-semibold text-[var(--title-color)]">
            Conferences Held At KU
          </h2>

          <div className="mt-6">
            <DataTable
              overflowX
              headerBgColor="bg-[var(--dark-blue)]"
              columns={[
                { key: "slNo", label: "S. No.", width: "w-24" },
                { key: "faculty", label: "Faculty", widthPx: 220 },
                { key: "conferenceName", label: "Name of The Conference", widthPx: 520 },
                { key: "level", label: "National/International", widthPx: 220 },
                { key: "date", label: "Date", widthPx: 220 },
                { key: "year", label: "Year", width: "w-28" },
              ]}
              data={conferencesHeldAtKU}
            />
          </div>
        </div>
      </section>
      <AdmissionCareer />
    </>
  );
}
