"use client";

import { useState } from "react";
import GlobalArrowButton from "../general/global-arrow_button";
import DataTable from "../general/data-table";
import { useFlipbook } from "../general/FlipbookContext";
import APITable from "../general/api-table";

const defaultButtons = [
  {
    id: 56,
    text: "Active MoUs",
    href: "",
    isTable: true,
    tableType: "mou",
  },
  {
    id: 8,
    text: "Our Plagiarism Policy",
    href: "",
    isContent: true,
  },
  // Left Column
  {
    id: 1,
    text: "Research, Consultancy & IPR Policy",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/Research+Consultacy_compressed+(1).pdf",
  },
  {
    id: 2,
    text: "Ethics Committee Constitution",
    href: "",
    isTable: true,
    tableType: "ethics",
  },
  {
    id: 3,
    text: "Software used for Plagiarism",
    href: "",
    isContent: true,
    contentType: "software",
  },
  {
    id: 4,
    text: "Research Policy",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/1.+Research+Policy+(2).pdf",
  },
  {
    id: 5,
    text: "Constitution of the Ethics Board for Maintaining Research Integrity",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/5.+CONSTITUTION+OF+ETHICS+BOARD+FOR+MAINTAINING+RESEARCH+INTEGRITY.pdf"
  },
  {
    id: 6,
    text: "Conferences",
    href: "/research-conferences",
  },

  // Right Column
  {
    id: 7,
    text: "Research Advisory Committee",
    href: "",
    isTable: true,
    tableType: "research",
  },
  {
    id: 7,
    text: "Research Advisory Committee",
    href: "",
    isTable: true,
    tableType: "research",
  },
  {
    id: 10,
    text: "Research Integrity & Ethics Policy",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/RESEARCH+Ethics.pdf",
  },
  {
    id: 11,
    text: "Constitution of the Research Advisory Committee",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Constitution+of+Research+Advisory+Committee.pdf",
  },
  // {
  //   id: 12,
  //   text: "Doctoral Research Committee",
  //   href: "/phd",
  // },
  {
    id: 13,
    text: "Seed Money",
    href: "",
    isContent: true,
    contentType: "seed-money",
  },
  {
    id: 14,
    text: "Research Paper",
    href: "",
    isTable: true,
    tableType: "papers",
  },
  {
    id: 15,
    text: "Book / Book Chapters",
    href: "/book-chapters",
  },
  {
    id: 16,
    text: "Patents",
    href: "/patents",
  },
  {
    id: 17,
    text: "Chairs and their Activities",
    href: "/chairs-and-their-activities",
  },
  // {
  //   id: 18,
  //   text: "IPR Cell",
  //   href: "/ipr-cell",
  // },
  {
    id: 19,
    text: "Conferences",
    href: "/research-conferences",
  },

];

// Research Advisory Committee Table Data
const researchAdvisoryCommitteeData = [
  { slNo: 1, name: "Dr. Sushma Dubey", designation: "Associate Professor", department: "Biotechnology" },
  { slNo: 2, name: "Dr. Suchitra Ku Panigrahy", designation: "Assistant Professor", department: "Biotechnology" },
  { slNo: 3, name: "Dr. Deepa Biswas", designation: "Associate Professor", department: "Botany" },
  { slNo: 4, name: "Dr. Shilpi Shrivastava", designation: "Professor", department: "Chemistry" },
  { slNo: 5, name: "Dr. Preeti Pandey", designation: "Assistant Professor", department: "Chemistry" },
  { slNo: 6, name: "Dr. Eshwara Raghvendra Rao", designation: "Professor", department: "Civil Engineering" },
  { slNo: 7, name: "Dr. Shinki Katyayani Pandey", designation: "Assistant Professor", department: "Commerce And Management" },
  { slNo: 8, name: "Dr. Deepti Patnaik", designation: "Assistant Professor", department: "Commerce And Management" },
  { slNo: 9, name: "Dr. Anupa Sinha", designation: "Assistant Professor", department: "Computer Science And Engineering" },
  { slNo: 10, name: "Dr. R. Udaya Kumar", designation: "Professor", department: "Computer Science And Engineering" },
  { slNo: 11, name: "Dr. Chandra Saha Roy", designation: "Assistant Professor", department: "Economics" },
  { slNo: 12, name: "Dr. Harsha Patil", designation: "Associate Professor", department: "Education" },
  { slNo: 13, name: "Dr. Shraddha Verma", designation: "Associate Professor", department: "Education" },
  { slNo: 14, name: "Dr. Manoj Kumar Nigam", designation: "Professor", department: "Electrical Engineering" },
  { slNo: 15, name: "Dr. Vijayalaxmi Biradar", designation: "Professor", department: "Electronics And Communication" },
  { slNo: 16, name: "Dr. Shilpi Bhattacharya", designation: "Professor", department: "English" },
  { slNo: 17, name: "Dr. A. Vijayanand", designation: "Assistant Professor", department: "English" },
  { slNo: 18, name: "Dr. A. Rajshekhar", designation: "Professor", department: "Geography" },
  { slNo: 19, name: "Dr. Ajay Kumar Shukla", designation: "Professor", department: "Hindi" },
  { slNo: 20, name: "Dr. Shraddha Hirkane", designation: "Assistant Professor", department: "Hindi" },
  { slNo: 21, name: "Dr. Dolamani Sahu", designation: "Associate Professor", department: "History" },
  { slNo: 22, name: "Dr. Sanjana Singh", designation: "Professor", department: "History" },
  { slNo: 23, name: "Dr. Yogesh Vaishnaw", designation: "Assistant Professor", department: "Journalism And Mass Communication" },
  { slNo: 24, name: "Dr. Azim Khan", designation: "Professor", department: "Law" },
  { slNo: 25, name: "Dr. Narendra Kumar Singh", designation: "Associate Professor", department: "Law" },
  { slNo: 26, name: "Dr. R. Jayakumar", designation: "Professor", department: "Life Sciences" },
  { slNo: 27, name: "Dr. Byju John", designation: "Professor", department: "Management" },
  { slNo: 28, name: "Dr. G. V. V. Jagannadha Rao", designation: "Assistant Professor", department: "Mathematics" },
  { slNo: 29, name: "Dr. Tejaswini Pradhan", designation: "Assistant Professor", department: "Mathematics" },
  { slNo: 30, name: "Dr. Vinay Chandra Jha", designation: "Professor", department: "Mechanical Engineering" },
  { slNo: 31, name: "Dr. Rahul Mishra", designation: "Assistant Professor", department: "Mechanical Engineering" },
  { slNo: 32, name: "Dr. Kalidoss", designation: "Associate Professor", department: "Physical Education" },
  { slNo: 33, name: "Dr. Sanjeev Kumar Yadav", designation: "Assistant Professor", department: "Physical Education" },
  { slNo: 34, name: "Dr. Aloke Verma", designation: "Assistant Professor", department: "Physics" },
  { slNo: 35, name: "Dr. Anita Verma", designation: "Assistant Professor", department: "Physics" },
  { slNo: 36, name: "Dr. Anita Samal", designation: "Professor", department: "Political Science" },
  { slNo: 37, name: "Dr. Sandhya Tiwari", designation: "Professor", department: "Political Science" },
  { slNo: 38, name: "Dr. Manoj Mathew P", designation: "Assistant Professor", department: "Social Work/Sociology" },
  { slNo: 39, name: "Dr. Esha Chatterjee", designation: "Assistant Professor", department: "Social Work/Sociology" },
  { slNo: 40, name: "Dr. Manoj Singh", designation: "Assistant Professor", department: "Zoology" },
  { slNo: 41, name: "Dr. Ajay Kumar Harit", designation: "Associate Professor", department: "Zoology" },
];

const researchAdvisoryCommitteeColumns = [
  { key: "slNo", label: "S.No.", width: "w-20" },
  { key: "name", label: "Name of the Member", width: "flex-1" },
  { key: "designation", label: "Designation", width: "w-48" },
  { key: "department", label: "Department", width: "flex-1" },
];

// Ethics Committee Constitution Table Data
const ethicsCommitteeData = [
  { slNo: 1, designation: "Vice-Chancellor and Chairperson of the Committee" },
  { slNo: 2, designation: "Director of Research and Member Secretary of the Committee" },
  { slNo: 3, designation: "Director IQAC" },
  { slNo: 4, designation: "Registrar" },
  { slNo: 5, designation: "Dean, Faculty of Arts & Humanities" },
  { slNo: 6, designation: "Dean, Faculty of Education" },
  { slNo: 7, designation: "Dean, Faculty of Law" },
  { slNo: 8, designation: "Dean, Faculty of IT" },
  { slNo: 9, designation: "Dean, Faculty of Science" },
  { slNo: 10, designation: "Dean, Faculty of Engineering" },
  { slNo: 11, designation: "Dean, Faculty of Pharmacy" },
  { slNo: 12, designation: "Coordinator, Research Faculty" },
];

const ethicsCommitteeColumns = [
  { key: "slNo", label: "S.No.", width: "w-20" },
  { key: "designation", label: "Designation", width: "flex-1" },
];

export default function ResearchSixGridButtons({ buttons = defaultButtons }) {
  const { openFlipbook } = useFlipbook();
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [isContentModalOpen, setIsContentModalOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedTableType, setSelectedTableType] = useState(null);
  const [selectedContentType, setSelectedContentType] = useState(null);

  const isPdfLink = (href) => {
    return href && href.startsWith("http") && href.toLowerCase().endsWith(".pdf");
  };

  const handleButtonClick = (e, button) => {
    // Check if this button is a content modal trigger
    if (button.isContent) {
      e.preventDefault();
      setSelectedTitle(button.text);
      setSelectedContentType(button.contentType || "policy");
      setIsContentModalOpen(true);
      return;
    }

    // Check if this button should show a table modal
    if (button.isTable) {
      e.preventDefault();
      setSelectedTitle(button.text);
      setSelectedTableType(button.tableType || "research");
      setIsTableModalOpen(true);
      return;
    }

    // Check if this is a PDF link
    if (isPdfLink(button.href)) {
      e.preventDefault();
      openFlipbook(button.href, button.text);
    }
    // For non-PDF links, let the default anchor behavior handle it
  };

  const handleCloseTableModal = () => {
    setIsTableModalOpen(false);
    setSelectedTitle("");
    setSelectedTableType(null);
  };

  const handleCloseContentModal = () => {
    setIsContentModalOpen(false);
    setSelectedContentType(null);
  };
  return (
    <>
      <section className="pt-16 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {buttons.map((button) => {
              const isPdf = isPdfLink(button.href);
              const isTable = button.isTable;
              const isContent = button.isContent;
              return (
                <div key={button.id} className="block">
                  {isPdf || isTable || isContent ? (
                    <GlobalArrowButton
                      onClick={(e) => handleButtonClick(e, button)}
                      className="!w-full h-[60px] justify-between"
                      arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                      arrowSize={29}
                    >
                      {button.text}
                    </GlobalArrowButton>
                  ) : (
                    <a
                      href={button.href}
                      className="block"
                      target={button.href ? (button.href.startsWith("http") ? "_blank" : undefined) : undefined}
                      rel={button.href ? (button.href.startsWith("http") ? "noopener noreferrer" : undefined) : undefined}
                    >
                      <GlobalArrowButton
                        className="!w-full h-[60px] justify-between"
                        arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                        arrowSize={29}
                      >
                        {button.text}
                      </GlobalArrowButton>
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Modal for Plagiarism Policy */}
      {isContentModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={handleCloseContentModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden relative shadow-2xl p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-stix text-2xl font-bold text-[var(--foreground)]">
                Plagiarism Policy
              </h3>
              <button
                onClick={handleCloseContentModal}
                className="rounded-full border border-black/10 w-8 h-8 flex items-center justify-center hover:bg-black/5 transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Content Body */}
            <div className="space-y-4 text-gray-700 leading-relaxed font-lora max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
              {selectedContentType === "software" ? (
                <>
                  <p>
                    We use DrillBit to check plagiarism and originality in the research work. It is a cloud-based plagiarism-detection software that identifies copied or AI-generated content in academic and professional writing, and is successfully used by educational institutions, students, researchers, and publishers worldwide. This helps our researchers avoid duplicate content, ensuring the work they submit is self-generated and of high quality.
                  </p>
                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => {
                        window.open("https://www.drillbitplagiarism.com/", "_blank");
                        handleCloseContentModal();
                      }}
                      className="bg-[#3A3B7B] hover:bg-[#4B4C9D] text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
                    >
                      Know More
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </>
              ) : selectedContentType === "seed-money" ? (
                <>
                  <div className="space-y-4">
                    <div>
                      <strong className="text-[var(--foreground)]">Purpose</strong>
                      <p className="mt-1">
                        The primary goal of this scheme is to support faculty members and researchers in developing research resources in their expertise through interdisciplinary approaches or methodologies.
                      </p>
                    </div>

                    <div>
                      <strong className="text-[var(--foreground)]">Objectives</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>To promote a research-friendly environment.</li>
                        <li>To strengthen the research culture with clear guidelines.</li>
                        <li>To encourage socially and commercially relevant research work.</li>
                        <li>To help researchers work on real projects and gain scholarships.</li>
                        <li>To promote collaboration among different departments.</li>
                        <li>To attract new and talented researchers.</li>
                        <li>To support innovation and product development.</li>
                      </ul>
                    </div>

                    <div>
                      <strong className="text-[var(--foreground)]">Who Can Apply?</strong>
                      <p className="mt-1">
                        The faculty members who have been appointed as Assistant Professor, Associate Professor, and Professor at Kalinga University.
                      </p>
                    </div>

                    <div>
                      <strong className="text-[var(--foreground)]">Amount</strong>
                      <p className="mt-1">
                        Up to INR 100,000/- and in exceptional cases up to INR 300,000/-
                      </p>
                    </div>

                    <div>
                      <strong className="text-[var(--foreground)]">Process</strong>
                      <p className="mt-1">
                        The applicant has to fill in the details related to the projects along with his/her details in the format given in Kalinga University Seed Money Policy and submit the form at the Office of Vice Chancellor, Kalinga University, Raipur after getting signed by the concerned HoD and Dean Research.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 pb-8 flex flex-wrap gap-4 justify-end">
                    <button
                      onClick={() => {
                        openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/research-resources/Seed+Money+Policy.pdf", "Seed Money Policy");
                        handleCloseContentModal();
                      }}
                      className="bg-[#3A3B7B] hover:bg-[#4B4C9D] text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
                    >
                      Seed Money Policy
                    </button>
                    <button
                      onClick={() => {
                        openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/research-resources/Seed+money+format.pdf", "Seed Money Format");
                        handleCloseContentModal();
                      }}
                      className="border-2 border-[#3A3B7B] text-[#3A3B7B] hover:bg-[#3A3B7B] hover:text-white px-6 py-2.5 rounded-full font-medium transition-all flex items-center gap-2"
                    >
                      Download Form
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p>
                    We strictly follow our anti-plagiarism rules, and copying someone else’s work is not allowed in our University. We believe that our research scholars produce original work and do not copy it from somewhere else. They are required to give references for each topic and must follow ethical writing practices. We maintain high standards in research practices and appreciate their unique ideas.
                  </p>
                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => {
                        openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/research/PLAGIARISM-FILE-POLICY.pdf", "Plagiarism Policy");
                        handleCloseContentModal();
                      }}
                      className="bg-[#3A3B7B] hover:bg-[#4B4C9D] text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
                    >
                      DrillBit
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Table Modal */}
      {isTableModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={handleCloseTableModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-2xl w-full max-w-6xl max-h-[70vh] overflow-hidden relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200">
              <h3 className="font-stix text-xl md:text-2xl text-[var(--foreground)] pr-4">
                {selectedTitle}
              </h3>
              <button
                onClick={handleCloseTableModal}
                className="rounded-full border border-black/10 px-3 py-1 text-sm hover:bg-black/5 transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Table Content */}
            <div className="w-full max-h-[calc(90vh-100px)] overflow-y-auto p-4 md:p-6 pb-12">
              {selectedTableType === "ethics" ? (
                <DataTable
                  columns={ethicsCommitteeColumns}
                  data={ethicsCommitteeData}
                  overflowX={true}
                  className="mt-4"
                />
              ) : selectedTableType === "mou" ? (
                <APITable tableId="56" nested={true} overflowX={true} />
              ) : selectedTableType === "papers" ? (
                <APITable tableId="57" nested={true} overflowX={true} />
              ) : (
                <DataTable
                  columns={researchAdvisoryCommitteeColumns}
                  data={researchAdvisoryCommitteeData}
                  overflowX={true}
                  className="mt-4"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
