"use client";

import { useState } from "react";

const IQAC_TABS = [
  { id: "minutes", label: "IQAC Minutes Of Meeting" },
  { id: "initiatives", label: "IQAC Initiatives" },
  { id: "feedback", label: "Feedback Analysis & Action Taken Report" },
  { id: "committee", label: "IQAC Committee" },
  { id: "satisfaction", label: "Student Satisfaction Survey" },
  { id: "strategic", label: "Strategic Plan & Deployment" },
  { id: "naac", label: "NAAC SSR" },
  { id: "financial", label: "Financial Audited Statements" },
  { id: "feedback-form", label: "Feedback Form" },
];

// IQAC Committee Data
const IQAC_COMMITTEE = [
  { sno: 1, designation: "Vice-Chancellor", position: "Chairperson" },
  { sno: 2, designation: "Director General", position: "Member" },
  { sno: 3, designation: "Registrar", position: "Member" },
  { sno: 4, designation: "Director IQAC", position: "Director IQAC" },
  { sno: 5, designation: "Dean, Academic Affairs", position: "Member" },
  { sno: 6, designation: "Deputy Registrar", position: "Member" },
  { sno: 7, designation: "Dean, Faculty of Technology", position: "Member" },
  { sno: 8, designation: "Dean, Faculty of CS & IT", position: "Member" },
  { sno: 9, designation: "Dean, Faculty of Science", position: "Member" },
  { sno: 10, designation: "Dean, Faculty of Arts & Humanities", position: "Member" },
  { sno: 11, designation: "Dean, Faculty of Education", position: "Member" },
  { sno: 12, designation: "Dean, Faculty of Pharmacy", position: "Member" },
  { sno: 13, designation: "Dean, Faculty of Commerce & Management", position: "Member" },
  { sno: 14, designation: "Dean, Faculty of Law", position: "Member" },
  { sno: 15, designation: "Director Corporate Relations", position: "Member" },
  { sno: 16, designation: "IQAC Coordinator", position: "Member" },
  { sno: 17, designation: "IQAC Coordinator", position: "Member" },
  { sno: 18, designation: "IQAC Coordinator", position: "Member" },
  { sno: 19, designation: "IQAC Coordinator", position: "Member" },
  { sno: 20, designation: "Research Associate", position: "Member" },
  { sno: 21, designation: "IQAC Office Assistant", position: "Member" },
  { sno: 22, designation: "IQAC Office Assistant", position: "Member" },
];

// IQAC Initiatives Data
const IQAC_INITIATIVES = {
  "2023-24": [
    { sno: 1, initiative: "Academic Audit", year: "2023-24" },
    { sno: 2, initiative: "Initiated the installation of a Biogas plant in the University", year: "2023-24" },
    { sno: 3, initiative: "Audit of Non-teaching Departments", year: "2023-24" },
    { sno: 4, initiative: "Conduction of activities and reporting of IIC 5.0 & IIC 6.0", year: "2023-24" },
    { sno: 5, initiative: "Initiated Project/ live model exhibition for all departments", year: "2023-24" },
    { sno: 6, initiative: "Updation of Patents to receive funds under the KAPILA Scheme", year: "2023-24" },
    { sno: 7, initiative: "NABL-related work for CIF Lab", year: "2023-24" },
    { sno: 8, initiative: "Provided training on PO, CO, PSO mapping and use of POCO software to newly joined faculty.", year: "2023-24" },
    { sno: 9, initiative: "Initiation towards Kalinga University Journal", year: "2023-24" },
    { sno: 10, initiative: "Participated in GU Ranking, London", year: "2023-24" },
    { sno: 11, initiative: "Conducted Laboratory Internal Re Audit for checking compliance", year: "2023-24" },
    { sno: 12, initiative: "Participated in College Dunia Excellence Ranking", year: "2023-24" },
    { sno: 13, initiative: "Conducted Training on MS Office for the government. employees", year: "2023-24" },
    { sno: 14, initiative: "Ensuring effective maintenance of department-level files", year: "2023-24" },
    { sno: 15, initiative: "Criteria-wise maintenance of data and files for NAAC", year: "2023-24" },
    { sno: 16, initiative: "Collection and maintenance of monthly data from departments", year: "2023-24" },
    { sno: 17, initiative: "Updation/revision of various policies", year: "2023-24" },
    { sno: 18, initiative: "Updation of the Environment, Health and Safety policy at the University", year: "2023-24" },
    { sno: 19, initiative: "Formulated a strategy for fire and natural hazards", year: "2023-24" },
    { sno: 20, initiative: "Guidance and maintenance of research-related data", year: "2023-24" },
    { sno: 21, initiative: "Collection of department-level club activity reports", year: "2023-24" },
    { sno: 22, initiative: "Maintenance of the University-level conference proceedings", year: "2023-24" },
    { sno: 23, initiative: "Collection and analysis of feedback", year: "2023-24" },
  ],
  "2022-23": [
    { sno: 24, initiative: "Teaching Faculty Audit", year: "2022-23" },
    { sno: 25, initiative: "Conducted Laboratory Internal Audit", year: "2022-23" },
    { sno: 26, initiative: "Conducted a 2-Day NAAC-sponsored workshop entitled \"Role of IQAC in achieving quality and excellence in higher education by promoting Research, Innovation and Extension activities\"", year: "2022-23" },
    { sno: 27, initiative: "Formed department-level IQAC coordinators", year: "2022-23" },
    { sno: 28, initiative: "Collection and maintenance of monthly data from departments", year: "2022-23" },
    { sno: 29, initiative: "Involved in research work and publications", year: "2022-23" },
    { sno: 30, initiative: "Guest Lecture on \"NEEDO Education\"", year: "2022-23" },
    { sno: 31, initiative: "Audit of Non-Teaching Departments", year: "2022-23" },
    { sno: 32, initiative: "Initiated a green and energy audit for the campus", year: "2022-23" },
    { sno: 33, initiative: "Development of CO-PO-PSO mapping software", year: "2022-23" },
    { sno: 34, initiative: "Audit of e-content", year: "2022-23" },
    { sno: 35, initiative: "Update of Innovation-related activities in the IIC portal", year: "2022-23" },
    { sno: 36, initiative: "Initiated rainwater harvesting on the campus", year: "2022-23" },
    { sno: 37, initiative: "Applied for the India Today Ranking", year: "2022-23" },
    { sno: 38, initiative: "Initiated the process of CSR funding", year: "2022-23" },
    { sno: 39, initiative: "Conducted a session on \"Preparation of Department-level Files\"", year: "2022-23" },
    { sno: 40, initiative: "Unnat Bharat Abhiyan", year: "2022-23" },
    { sno: 41, initiative: "Infrastructure (basic amenities) development of the Government Schools in rural areas", year: "2022-23" },
    { sno: 42, initiative: "Feedback collection and analysis of conferences", year: "2022-23" },
    { sno: 43, initiative: "Feedback collection and analysis of Campus Recruitment Training", year: "2022-23" },
    { sno: 44, initiative: "Standardisation of event report format", year: "2022-23" },
    { sno: 45, initiative: "NEP-2020 implementation", year: "2022-23" },
  ],
  "2021-22": [
    { sno: 46, initiative: "One-Week FDP on Outcome-Based Education in collaboration with VMedulife", year: "2021-22" },
    { sno: 47, initiative: "Development of Research Ecosystem", year: "2021-22" },
    { sno: 48, initiative: "Conducted a workshop on NAAC accreditation", year: "2021-22" },
    { sno: 49, initiative: "Applied for ARIIA-2022", year: "2021-22" },
    { sno: 50, initiative: "Initiated Institution Innovation Council (IIC)", year: "2021-22" },
    { sno: 51, initiative: "Modification of the question paper format as per OBE", year: "2021-22" },
    { sno: 52, initiative: "Started working on the NBA accreditation of the CSE department", year: "2021-22" },
    { sno: 53, initiative: "Mentoring other HEIs towards accreditation", year: "2021-22" },
    { sno: 54, initiative: "Implementation of Seed money", year: "2021-22" },
    { sno: 55, initiative: "AQAR submission", year: "2021-22" },
  ],
  "2020-21": [
    { sno: 56, initiative: "Faculty Development Programme on Outcome-Based Education (24th- 29th August 2020)", year: "2020-21" },
    { sno: 57, initiative: "Faculty Development Programme on Research Methodology & Latest Advances in Teaching Methodologies (29th June-12th July 2021)", year: "2020-21" },
    { sno: 58, initiative: "Webinar on How to Write a Research Paper (16th March 2021)", year: "2020-21" },
    { sno: 59, initiative: "Webinar on \"Research Paper Writing Skills\" (20th March 2021)", year: "2020-21" },
    { sno: 60, initiative: "Seminar on Implementation of New Education Policy 2020 Under AICTE Theme \"Reinvigorating Human Capital Through Excellence in Education and Multilingualism\" (11th May 2021)", year: "2020-21" },
  ],
  "2019-20": [
    { sno: 61, initiative: "Training Program on Time Management and Stress Management", year: "2019-20" },
    { sno: 62, initiative: "Training Program on Best Practices in Office Administration", year: "2019-20" },
    { sno: 63, initiative: "Training Program on skill development: To implement self-management, develop interpersonal & managerial skills and enhance the administrative capabilities", year: "2019-20" },
    { sno: 64, initiative: "Training Program on Use of animation & presentation skills", year: "2019-20" },
    { sno: 65, initiative: "Training Program on the use of IT in the workplace", year: "2019-20" },
    { sno: 66, initiative: "Adopted the semester pattern for the forthcoming session", year: "2019-20" },
    { sno: 67, initiative: "Started conducting remedial classes for weak learners and competitive coaching classes.", year: "2019-20" },
    { sno: 68, initiative: "As an IQAC initiative, it was discussed and accepted to go for NAAC accreditation in the forthcoming session", year: "2019-20" },
    { sno: 69, initiative: "Adoption of five villages in and around the University was done", year: "2019-20" },
  ],
  "2018-19": [
    { sno: 70, initiative: "Establishment of a medicinal garden on the university campus", year: "2018-19" },
    { sno: 71, initiative: "An MoU with Career Launcher was signed to promote awareness amongst students regarding competitive exams", year: "2018-19" },
    { sno: 72, initiative: "Extension activities in nearby villages", year: "2018-19" },
    { sno: 73, initiative: "Publishing University journals", year: "2018-19" },
    { sno: 74, initiative: "Procured e-resources like Delnet and Manupatra for library enrichment", year: "2018-19" },
    { sno: 75, initiative: "Started advanced English coaching for remedial classes", year: "2018-19" },
    { sno: 76, initiative: "The student grievance cell was directed to make a decision regarding grievances at the earliest", year: "2018-19" },
    { sno: 77, initiative: "Established rainwater harvesting system", year: "2018-19" },
    { sno: 78, initiative: "MoUs with various companies were signed for waste disposal", year: "2018-19" },
    { sno: 79, initiative: "Feedback from parents was taken regarding the University", year: "2018-19" },
    { sno: 80, initiative: "The form for UGC 12B was filled out and applied for approval", year: "2018-19" },
  ],
  "2017-18": [
    { sno: 81, initiative: "Procurement of ERP", year: "2017-18" },
    { sno: 82, initiative: "The mass plantation drive was initiated", year: "2017-18" },
    { sno: 83, initiative: "Celebrate World Ozone Day every year", year: "2017-18" },
    { sno: 84, initiative: "Organised National and International-level seminars, conferences and workshops to enhance the research environment in the University", year: "2017-18" },
    { sno: 85, initiative: "Increased the guest lectures in each department, and expert faculty members were invited from various walks of life", year: "2017-18" },
    { sno: 86, initiative: "Procured the advanced software for the computer laboratories", year: "2017-18" },
    { sno: 87, initiative: "Procurement of computers with higher configurations to match the student-to-computer ratio", year: "2017-18" },
    { sno: 88, initiative: "Provided incentives to the faculty for research paper publication to promote research activity in the University", year: "2017-18" },
    { sno: 89, initiative: "Student feedback regarding curriculum, faculty and facilities on campus", year: "2017-18" },
    { sno: 90, initiative: "Procurement of more research journals and textbooks for the library", year: "2017-18" },
  ],
  "2016-17": [
    { sno: 91, initiative: "Heads of Department and faculty members of the university were given autonomy in academics and related activities", year: "2016-17" },
    { sno: 92, initiative: "Academic and administrative activities were strictly monitored by the IQAC", year: "2016-17" },
    { sno: 93, initiative: "Review of the teaching learning process and methods of operation", year: "2016-17" },
    { sno: 94, initiative: "The bi-annual meetings of the IQAC were initiated", year: "2016-17" },
    { sno: 95, initiative: "Celebration of Pharmacy Week, along with health check-up camps and a model-making workshop", year: "2016-17" },
  ],
};

// Minutes of Meeting Data
const MINUTES_OF_MEETING = {
  "2022-23": [
    { title: "Minutes of Meeting (18-09-2022)", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/18-09-2022-mom.pdf" },
  ],
  "2021-22": [],
  "2020-21": [],
  "2019-20": [
    { title: "Minutes of Meeting (16-01-2020)", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/16-01-2020-mom.pdf" },
    { title: "Minutes of Meeting (23-07-2019)", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/23-07-2019-mom.pdf" },
  ],
  "2018-19": [
    { title: "Minutes of Meeting 2018-19", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/iqac+minutes-+2018-19-mom.pdf" },
  ],
  "2017-18": [
    { title: "Minutes of Meeting 2018-19", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/iqac+minutes-+2017-18-mom.pdf" },
  ],
  "2016-17": [
    { title: "Minutes of Meeting 2016-17", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/iqac+minutes-2016-17-mom.pdf" },
  ],
};

// Feedback Analysis Data
const FEEDBACK_ANALYSIS = {
  "2023-24": [
    { title: "Students Feedback Report 2023-2024", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Students+Feedback+Report-2023-2024.pdf" },
    { title: "Faculty Feedback 2023-2024", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Faculty+Feedback-2023-2024.pdf" },
    { title: "Employer Feedback Report 2023-2024", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Employer+Feedback+Report-2023-2024.pdf" },
    { title: "Alumni Feedback Report 2023-2024", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Alumni+Feedback+Report-2023-2024.pdf" },
  ],
  "2022-23": [
    { title: "Students Feedback Report 2022-23", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Students-Feedback-2022-23.pdf" },
    { title: "Faculty Feedback 2022-23", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Faculty-Feedback-2022-23.pdf" },
    { title: "Employer Feedback 2022-23", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Employer-Feedback-2022-23.pdf" },
    { title: "Alumni Feedback 2022-23", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Alumni-Feedback-2022-23.pdf" },
  ],
  "2021-22": [
    { title: "Student Feedback Report 2021-22", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Student-Feedback-Report-2021-22.pdf" },
    { title: "Faculty Feedback 2021-22", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Faculty-Feedback-2021-22.pdf" },
    { title: "EMPLOYER FEEDBACK updated 2021-22", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/EMPLOYER-FEEDBACK-updated-2021-22.pdf" },
    { title: "ALUMNI FEEDBACK REPORT 2021-22", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/ALUMNI-FEEDBACK-REPORT-2021-22.pdf" },
  ],
  "2020-21": [
    { title: "1.4.1 STUDENT 2020-2021", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/1.4.1-STUDENT-2020-2021.pdf" },
    { title: "1.4.1 FACULTY 2020-2021", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/1.4.1-FACULTY-2020-2021.pdf" },
    { title: "1.4.1 EMPLOYER 2020-2021", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/1.4.1-EMPLOYER-2020-2021.pdf" },
    { title: "1.4.1 ALUMNI 2020-2021", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/1.4.1-ALUMNI-2020-2021.pdf" },
  ],
  "2019-20": [
    { title: "Student Feedback Report 2019-20", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Student-Feedback-Report-2019-20.pdf" },
    { title: "Faculty Feedback 2019-20", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Faculty-Feedback-2019-20.pdf" },
    { title: "EMPLOYER FEEDBACK updated 2019-20", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/EMPLOYER-FEEDBACK-updated-2019-20.pdf" },
    { title: "ALUMNI FEEDBACK REPORT 2019-20", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/ALUMNI-FEEDBACK-REPORT-2019-20.pdf" },
  ],
  "2018-19": [
    { title: "STUDENT 2018-19", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/STUDENT2018-19.pdf" },
    { title: "FACULTY 2018-19", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/FACULTY2018-19.pdf" },
    { title: "EMPLOYER 2018-19", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/EMPLOYER2018-19.pdf" },
    { title: "ALUMNI 2018-19", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/ALUMNI-2018-19.pdf" },
  ],
  "2017-18": [
    { title: "STUDENT 2017-18", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/STUDENT-2017-18.pdf" },
    { title: "FACULTY 2017-18", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/FACULTY-2017-18.pdf" },
    { title: "EMPLOYER 2017-18", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/EMPLOYER-2017-18.pdf" },
    { title: "ALUMNI 2017-18", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/ALUMNI-2017-18.pdf" },
  ],
  "2016-17": [
    { title: "STUDENT 2016-17", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/STUDENT2016-17-2-5.pdf" },
    { title: "FACULTY 2016-17", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/FACULTY-2016-17.pdf" },
    { title: "EMPLOYER 2016-17", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/EMPLOYER-2016-17-7-16.pdf" },
    { title: "ALUMNI 2016-17", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/ALUMNI-2016-17-17-18.pdf" },
  ],
  "2015-16": [
    { title: "STUDENT 2015-16", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/STUDENT-2015-16.pdf" },
    { title: "Faculty 2015-16", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Faculty-2015-16.pdf" },
    { title: "EMPLOYER 2015-16", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/EMPLOYER-2015-16.pdf" },
    { title: "ALUMNI 2015-16", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/ALUMNI-2015-16.pdf" },
  ],
  "2014-15": [
    { title: "STUDENT 2014-15", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/STUDENT-14-15.pdf" },
    { title: "FACULTY 2014-15", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/FACULTY-2014-15-4.pdf" },
    { title: "EMPLOYER 2014-15", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/EMPLOYER-2014-15-5-14.pdf" },
    { title: "ALUMANI 2014-15", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/ALUMANI-2014-15-15.pdf" },
  ],
};

// Strategic Plan Content
const STRATEGIC_PLAN_CONTENT = `Kalinga University promotes knowledge development through innovation & research, hands-on learning, and student startups. It provides a platform for students to experiment, work on real-world projects, and bring their innovative ideas. It has also established an incubation centre to support and transform the brilliant startup ideas of young students into successful businesses.

KU is supporting people from five villages, including Kotni, Palaud, Kuhera, Parsada, and Kotrabhata, and provides effective teaching and learning in model classrooms. Scholarships for SC/ST/OBC students improve the knowledge pool and inclusivity in the nearby communities. The university is also utilising its talent pool through Skill Pathshala in Kotni Village, where youth are trained in cooking, sewing, and security services. Kalinga also offers employment opportunities to people from nearby areas for their career growth.

These initiatives prove the University's commitment to expanding its horizons and developing social responsibility.`;

export default function IqacTabSection() {
  const [activeTab, setActiveTab] = useState("initiatives");
  const [expandedYears, setExpandedYears] = useState({
    "2023-24": true,
    "2022-23": false,
    "2021-22": false,
    "2020-21": false,
    "2019-20": false,
    "2018-19": false,
    "2017-18": false,
    "2016-17": false,
  });

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const toggleYear = (year) => {
    setExpandedYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }));
  };

  // Get available years based on active tab
  const getAvailableYears = () => {
    if (activeTab === "initiatives") {
      return ["2023-24", "2022-23", "2021-22", "2020-21", "2019-20", "2018-19", "2017-18", "2016-17"];
    } else if (activeTab === "minutes") {
      return ["2022-23", "2021-22", "2020-21", "2019-20", "2018-19", "2017-18", "2016-17"];
    } else if (activeTab === "feedback") {
      return ["2023-24", "2022-23", "2021-22", "2020-21", "2019-20", "2018-19", "2017-18", "2016-17", "2015-16", "2014-15"];
    }
    return [];
  };

  return (
    <section className="w-full py-4 px-2">
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="">
        <div className="flex flex-col lg:flex-row gap-4 bg-[var(--dark-blue)] py-16 md:px-10 px-4 rounded-xl">
          {/* Vertical Tabs on Left (Horizontal Scroll on Mobile) */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="rounded-[16px] bg-[var(--dark-blue)]">
              <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
                {IQAC_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`
                        flex-shrink-0 lg:w-full text-left px-4 py-5 rounded-[8px] 
                        font-plus-jakarta-sans text-sm md:text-base whitespace-nowrap
                        transition-all duration-200
                        ${
                          isActive
                            ? "bg-[var(--button-red)] text-white font-semibold"
                            : "bg-[var(--lite-sand)] text-[var(--foreground)] hover:opacity-90"
                        }
                      `}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content Area - White Background */}
          <div className="flex-1 w-full">
            <div className="rounded-[16px] bg-white p-4 md:p-5 shadow-sm h-full flex flex-col">
              {/* IQAC Committee Tab */}
              {activeTab === "committee" && (
                <div className="flex-1">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4 text-center mt-3">
                    IQAC Committee
                  </h2>
                  <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-gray-200 rounded-lg">
                    <table className="w-full border-collapse min-w-[600px]">
                      <thead className="sticky top-0 z-10">
                        <tr className="bg-[var(--dark-blue)] text-white">
                          <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                            S.No.
                          </th>
                          <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                            Designation
                          </th>
                          <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                            Position in IQAC
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {IQAC_COMMITTEE.map((member) => (
                          <tr
                            key={member.sno}
                            className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white"
                          >
                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">
                              {member.sno}
                            </td>
                            <td className="px-4 py-3 text-[var(--foreground)]">
                              {member.designation}
                            </td>
                            <td className="px-4 py-3 text-[var(--foreground)]">
                              {member.position}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* IQAC Initiatives Tab */}
              {activeTab === "initiatives" && (
                <div className="flex-1 text-center">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4">
                    IQAC Initiatives
                  </h2>
                  <div className="space-y-2 text-left">
                    {getAvailableYears().map((year) => {
                      const isExpanded = expandedYears[year] || false;
                      const initiatives = IQAC_INITIATIVES[year] || [];
                      return (
                        <div key={year} className="border-b border-[var(--button-red)] pb-2 last:border-b-0">
                          <button
                            onClick={() => toggleYear(year)}
                            className="w-full flex items-center gap-2 py-1 hover:opacity-80 transition-opacity justify-between pr-3"
                            aria-label={`Toggle ${year}`}
                          >
                            <h3 className="font-plus-jakarta-sans text-sm md:text-base text-[var(--foreground)]">
                              {year}
                            </h3>
                            <div className={`text-[var(--background)] bg-[var(--button-red)] rounded-sm p-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </button>
                          {isExpanded && initiatives.length > 0 && (
                            <div className="mt-2 overflow-x-auto overflow-y-auto max-h-[300px] border border-gray-200 rounded-lg">
                              <table className="w-full border-collapse min-w-[600px]">
                                <thead className="sticky top-0 z-10">
                                  <tr className="bg-[var(--dark-blue)] text-white">
                                    <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                      S.No
                                    </th>
                                    <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                      IQAC Initiatives
                                    </th>
                                    <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                      Year
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {initiatives.map((item) => (
                                    <tr key={item.sno} className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                      <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">{item.sno}</td>
                                      <td className="px-4 py-3 text-[var(--foreground)]">{item.initiative}</td>
                                      <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">{item.year}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Minutes of Meeting Tab */}
              {activeTab === "minutes" && (
                <div className="flex-1">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4 text-center mt-3">
                    IQAC Minutes Of Meeting
                  </h2>
                  <div className="space-y-2 text-left">
                    {getAvailableYears().map((year) => {
                      const isExpanded = expandedYears[year] || false;
                      const minutes = MINUTES_OF_MEETING[year] || [];
                      return (
                        <div key={year} className="border-b border-[var(--button-red)] pb-2 last:border-b-0">
                          <button
                            onClick={() => toggleYear(year)}
                            className="w-full flex items-center gap-2 py-1 hover:opacity-80 transition-opacity justify-between pr-3"
                            aria-label={`Toggle ${year}`}
                          >
                            <h3 className="font-plus-jakarta-sans text-sm md:text-base text-[var(--foreground)]">
                              {year}
                            </h3>
                            <div className={`text-[var(--background)] bg-[var(--button-red)] rounded-sm p-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </button>
                          {isExpanded && (
                            <div className="mt-2 space-y-2">
                              {minutes.length > 0 ? (
                                minutes.map((minute, idx) => (
                                  <a
                                    key={idx}
                                    href={minute.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-[var(--foreground)] border border-gray-200"
                                  >
                                    <span className="font-plus-jakarta-sans text-sm md:text-base">{minute.title}</span>
                                  </a>
                                ))
                              ) : (
                                <p className="px-4 py-2 text-[var(--foreground)]/60 text-sm">No minutes available for this year.</p>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Feedback Analysis Tab */}
              {activeTab === "feedback" && (
                <div className="flex-1">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4 text-center mt-3">
                    Feedback Analysis & Action Taken Report
                  </h2>
                  <div className="space-y-2 text-left">
                    {getAvailableYears().map((year) => {
                      const isExpanded = expandedYears[year] || false;
                      const feedbacks = FEEDBACK_ANALYSIS[year] || [];
                      return (
                        <div key={year} className="border-b border-[var(--button-red)] pb-2 last:border-b-0">
                          <button
                            onClick={() => toggleYear(year)}
                            className="w-full flex items-center gap-2 py-1 hover:opacity-80 transition-opacity justify-between pr-3"
                            aria-label={`Toggle ${year}`}
                          >
                            <h3 className="font-plus-jakarta-sans text-sm md:text-base text-[var(--foreground)]">
                              {year}
                            </h3>
                            <div className={`text-[var(--background)] bg-[var(--button-red)] rounded-sm p-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </button>
                          {isExpanded && (
                            <div className="mt-2 space-y-2">
                              {feedbacks.length > 0 ? (
                                feedbacks.map((feedback, idx) => (
                                  <a
                                    key={idx}
                                    href={feedback.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-[var(--foreground)] border border-gray-200"
                                  >
                                    <span className="font-plus-jakarta-sans text-sm md:text-base">{feedback.title}</span>
                                  </a>
                                ))
                              ) : (
                                <p className="px-4 py-2 text-[var(--foreground)]/60 text-sm">No feedback reports available for this year.</p>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Strategic Plan Tab */}
              {activeTab === "strategic" && (
                <div className="flex-1">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4 text-center mt-3">
                    Strategic Plan & Deployment
                  </h2>
                  <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Placeholder for 3 images */}
                    {[1, 2, 3].map((num) => (
                      <div key={num} className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Image {num}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-left space-y-4">
                    {STRATEGIC_PLAN_CONTENT.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Student Satisfaction Survey Tab */}
              {activeTab === "satisfaction" && (
                <div className="flex-1">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4 text-center mt-3">
                    Student Satisfaction Survey
                  </h2>
                  <div className="flex justify-center mt-6">
                    <a
                      href="https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Students+Satisfaction+Survey+2021-22.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-[var(--button-red)] text-white rounded-lg hover:bg-[var(--button-red)]/90 transition-colors font-plus-jakarta-sans text-sm md:text-base font-semibold"
                    >
                      View Student Satisfaction Survey 2021-22
                    </a>
                  </div>
                </div>
              )}

              {/* Placeholder content for other tabs */}
              {!["committee", "initiatives", "minutes", "feedback", "strategic", "satisfaction"].includes(activeTab) && (
                <div className="flex-1">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4 text-center mt-3">
                    {IQAC_TABS.find((tab) => tab.id === activeTab)?.label}
                  </h2>
                  <p className="text-[var(--foreground)] font-plus-jakarta-sans text-center">
                    Content for this section will be added here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
