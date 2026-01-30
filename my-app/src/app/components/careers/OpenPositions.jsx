'use client'

import { useState } from "react";
import Image from "next/image";
import GlobalArrowButton from "../general/global-arrow_button";
import SectionHeading from "../general/SectionHeading";
import Link from "next/link";
const jobData = {
  teaching: [
    {
      title: "1. Professor (Academics)",
      departments: "Commerce & Management, Civil, Mechanical, Electrical, Computer Science, English, Hindi, Political Science, History, Economics, Sociology, Physical Education, Education, Physics, Chemistry, Biotechnology, Botany, Zoology, Mathematics, Law, Pharmacy, Library Science, Fashion Design, Interior Design",
      location: "Raipur, Chhattisgarh",
      qualification: "Ph.D. & Post Graduate with 55%",
      experience: "10 Years",
      skills: ["Strong Research & Development", "Good number of Publications", "Experience in conducting Seminars, Workshops & Conferences (National & International)"]
    },
    {
      title: "2. Associate Professor (Academics)",
      departments: "Same as Professor",
      location: "Raipur, Chhattisgarh",
      qualification: "Ph.D. & Post Graduate with 55%",
      experience: "5 Years",
      skills: ["Strong Research & Development", "Good number of Publications", "Experience in conducting Seminars, Workshops & Conferences (National & International)"]
    },
    {
      title: "3. Assistant Professor (Academics – General)",
      departments: "Pharmacy, Law, Management & Commerce, Interior Design, Civil, Electrical",
      location: "Raipur, Chhattisgarh",
      qualification: "Post Graduation with 55% & NET Qualified (if required)",
      experience: "2 Years",
      skills: ["Strong Subject Knowledge", "Presentable", "Good Teaching Skills", "Research Publications"]
    },
    {
      title: "4. Assistant Professor (Detailed Academic Listing)",
      departments: "Engineering (Electrical, Computer Science, Mining), Science (Microbiology, Biotechnology, Mathematics), Pharmacy (Pharmaceutics, Pharmaceutical Chemistry, Pharmacology, Pharmacognosy, Pharmaceutical Analysis), Commerce & Management (HR, Marketing, Finance, Commerce), Education (Education, Physical Education)",
      location: "Raipur",
      qualification: "Post Graduation with 55% & NET Qualified",
      experience: "Minimum 2 Years",
      salary: "As per UGC / AICTE / PCI Norms",
      gender: "Male / Female",
      responsibilities: [
        "Design and implement innovative teaching methods",
        "Teach undergraduate and postgraduate students",
        "Prepare daily lesson plans and academic targets",
        "Mentor students on academic progress",
        "Guide research students in projects",
        "Assess and evaluate student performance",
        "Assist senior professors",
        "Publish research in high-quality journals and books",
        "Support departmental activities",
        "Participate and lead externally funded research projects"
      ]
    },
    {
      title: "5. Dean",
      departments: "Arts & Humanities, Science, Law, Engineering, Commerce & Management, Pharmacy, Information Technology, Education",
      qualification: "Ph.D. in relevant discipline, NET Qualified",
      experience: "Minimum 10 Years Post-Ph.D. Experience in Educational Institutions",
      location: "Raipur",
      salary: "As per UGC / AICTE / PCI Norms",
      gender: "Male / Female",
      responsibilities: [
        "Oversee curriculum design and program development",
        "Ensure compliance with academic quality standards",
        "Promote innovative teaching and learning practices",
        "Foster critical thinking and academic discourse",
        "Supervise student projects, field trips and placements",
        "Conduct assessments and provide feedback",
        "Ensure equal opportunity policies",
        "Introduce new teaching technologies",
        "Create a strong research environment",
        "Increase Google citation profiles",
        "Promote experiential learning (case studies, role plays, co-curricular activities)",
        "Knowledge of Bloom’s Taxonomy, CBCS, PO-CO Mapping",
        "Experience with NAAC, NBA & NIRF frameworks"
      ]
    },
    {
      title: "6. Counselor (Academic Role)",
      post: "Assistant Professor (Counselor)",
      qualification: "Graduate / Post Graduate with 55% & NET Qualified",
      location: "Raipur & Bhilai",
      salary: "Best in Industry",
      gender: "Female",
      skills: ["Excellent Communication & Convincing Skills", "Strong Networking Ability"],
      responsibilities: [
        "Conduct career guidance seminars",
        "Maintain student databases",
        "Cold calling and counselling",
        "Resolve student and parent queries",
        "Arrange campus visits",
        "Handle admission process",
        "Coordinate with admission department",
        "Meet consultants and follow up for admissions",
        "Collect student data from multiple sources"
      ]
    }
  ],
  nonTeaching: [
    {
      title: "1. Human Resource",
      post: "Recruiter / Operations",
      qualification: "MBA (HR)",
      experience: "2 Years",
      location: "Raipur",
      skills: ["Good Communication", "Clerical & Administrative Support", "Networking Ability", "Strong Human Relations", "Document Verification", "Interpersonal Skills"]
    },
    {
      title: "2. Training & Placement",
      post: "Assistant",
      qualification: "MBA",
      experience: "5 Years",
      location: "Raipur",
      skills: ["Strong Industry Relations", "Experience in similar role"]
    },
    {
      title: "3. Transport",
      post: "Assistant",
      qualification: "Graduate",
      experience: "1 Year",
      location: "Raipur",
      skills: ["Supervisory Skills", "Honest & Punctual"]
    },
    {
      title: "4. Computer Operator / Data Entry / MIS",
      post: "Data Operator",
      qualification: "Graduate",
      experience: "1 Year",
      location: "Raipur",
      skills: ["Fast Typing (Hindi & English)", "Advanced Excel Knowledge"]
    },
    {
      title: "5. Accounts (Assistant)",
      qualification: "Graduate",
      experience: "1 Year",
      location: "Raipur",
      skills: ["Accounting Knowledge", "Tally", "MS-Office"]
    },
    {
      title: "6. Executive – Accounts",
      qualification: "B.Com / M.Com or Equivalent",
      experience: "Any (Freshers can apply)",
      location: "Raipur & Faridabad",
      salary: "Best in Industry",
      preferredGender: "Male",
      responsibilities: [
        "Accounting & Financial Statements",
        "AR / AP / Invoice Processing",
        "Petty Cash & Cash Management",
        "Bank Reconciliation",
        "Tax Computation & Filing (IT, GST, TDS)",
        "Inventory & Stock in Tally",
        "Vendor Payments",
        "Trial Balance, P&L & Balance Sheet",
        "Monthly MIS Reports"
      ]
    },
    {
      title: "7. International Office",
      post: "Coordinator",
      qualification: "Graduate",
      experience: "1 Year",
      location: "Raipur",
      skills: ["Good Communication", "MS-Office"]
    },
    {
      title: "8. Administration",
      post: "Assistant",
      qualification: "Graduate",
      experience: "1 Year",
      location: "Raipur",
      skills: ["Good Communication", "MS-Office"]
    },
    {
      title: "9. Marketing – Tele Counsellor",
      qualification: "Graduate",
      experience: "1 Year / Fresher",
      location: "Raipur",
      languages: "Hindi, Oriya, Tamil, Malayalam, Kannada, Telugu, Bengali, Marathi",
      skills: ["Excellent Communication", "MS-Office Knowledge", "Presentable"]
    },
    {
      title: "10. Marketing Executive",
      qualification: "Post Graduate",
      experience: "Any (Freshers can apply)",
      location: "Raipur & Bhilai",
      salary: "Best in Industry",
      preferredGender: "Male",
      responsibilities: [
        "Career guidance seminars",
        "Branding & promotional activities",
        "Marketing campaigns & events",
        "Consultant meetings & admission follow-ups",
        "Student data collection",
        "Newspaper insert supervision",
        "Counselling students & parents"
      ]
    }
  ]
};

export default function OpenPositions({
  title = "Discover Career Opportunities that Match your Passion and Expertise",
  subtitle = "Open Positions",
  description = null,
  positions = [
    {
      title: "Teaching Positions",
      description:
        "Join our team of distinguished faculty members committed to academic excellence and innovation. We seek educators who inspire learning, foster research, and shape the leaders of tomorrow.",
      type: 'teaching',
      knowMoreButton: "Know More"
    },
    {
      title: "Non–Teaching Positions",
      description:
        "Be a part of Kalinga University's dynamic administrative and operational teams. We value professionals who bring expertise, efficiency, and integrity to support our academic mission.",
      type: 'nonTeaching',
      knowMoreButton: "Know More"
    },
  ],
  useCourseCardLayout = false,
  initialVisibleCount = null,
  hideCheckEligibility = false,
  titleClassName = "text-white",
  cardTitleClassName = "font-semibold",
  skillsLabel = "Key Skills And Learning Outcome"
}) {
  const itemsPerPage = initialVisibleCount || positions.length;
  const totalPages = Math.ceil(positions.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleKnowMore = (position) => {
    setSelectedPosition(position);
  };

  const handleCloseModal = () => {
    setSelectedPosition(null);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visiblePositions = positions.slice(startIndex, endIndex);

  return (
    <section className="w-full px-2">
      <div className="bg-[var(--dark-blue)] rounded-2xl py-16 px-2">

        <div className="container mx-auto text-center mb-12">
          <SectionHeading
            subtitle={subtitle}
            title={title}
            subtitleClassName=""
            titleClassName={titleClassName}
            subtitleTextColor="!text-[var(--dark-orange-red-light)]"
          />
          {description && (
            <p className="text-white mt-4 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="container mx-auto space-y-6">
          {visiblePositions.map((position, index) => (
            <div key={index} className={`bg-[var(--background)] rounded-[15px] shadow-lg border-3 border-gray-200 shadow-lg sticky top-24 ${useCourseCardLayout ? 'p-0 overflow-hidden' : 'p-6 sm:p-8'}`}>
              {useCourseCardLayout ? (
                // Course Promotion Card Layout
                <div className={`p-8 ${(position.imageUrl || position.knowMoreButton || position.registrationButton) ? 'flex flex-col lg:flex-row items-center' : 'w-full'}`}>
                  {/* Left Section - Text Content */}
                  <div className={position.imageUrl || position.knowMoreButton || position.registrationButton ? "flex-1" : "w-full"}>
                    {/* Title - Training Program */}
                    <h3 className={`text-lg sm:text-xl lg:text-2xl font-plus-jakarta-sans text-[var(--button-red)] mb-4 font-semibold ${cardTitleClassName}`}>
                      {position.title}
                    </h3>

                    {/* Date/Duration */}
                    {position.startDate && (
                      <div className="text-gray-500 text-[15px] mb-4 font-plus-jakarta-sans">
                        <p>{position.showDateLabel !== false ? `Date: ${position.startDate}` : position.startDate}{position.endDate ? ` End Date : ${position.endDate}` : ''}</p>
                      </div>
                    )}

                    {/* Eligibility Criteria */}
                    {position.eligibility && (
                      <div className="text-gray-600 text-[15px] mb-4 font-plus-jakarta-sans">
                        <div className="flex gap-1.5 flex-wrap ">
                          <span className="font-semibold text-gray-700 ">Eligibility:</span>
                          <div
                            className="[&_a]:text-[var(--button-red)] [&_a]:underline [&_a]:font-bold [&_a]:hover:text-[var(--dark-orange-red)] transition-colors [&_p]:inline"
                            dangerouslySetInnerHTML={{ __html: position.eligibility }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Price - Registration Fee */}
                    {position.price && (
                      <div className="mb-4">
                        <p className="text-2xl sm:text-3xl lg:text-2xl text-black">
                          {position.price.includes('(Per Semester)') ? (
                            <>
                              {position.price.replace(' (Per Semester)', '')}
                              <span className="text-base sm:text-lg lg:text-base"> (Per Semester)</span>
                            </>
                          ) : (
                            position.price
                          )}
                        </p>
                      </div>
                    )}

                    {/* Key Skills and Learning Outcome */}
                    {position.skills && position.skills.length > 0 && (
                      <div className="mb-0">
                        <h4 className="text-lg font-plus-jakarta-sans font-semibold text-[var(--button-red)] mb-2">
                          {position.skillsLabel || skillsLabel}
                        </h4>
                        <p className="text-[15px] text-gray-800 leading-relaxed font-plus-jakarta-sans">
                          {position.skills.join(", ")}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right Section - Image and Buttons */}
                  {(position.imageUrl || position.knowMoreButton || position.registrationButton) && (
                    <div className="flex-1 flex flex-col items-end justify-center w-full lg:w-auto">
                      {/* Image */}
                      {position.imageUrl && (
                        <div className="relative w-full max-w-[450px] h-48 sm:h-56 lg:h-64 mb-4">
                          <Image
                            src={position.imageUrl}
                            alt={position.imageAlt || position.title}
                            fill
                            className="object-cover rounded-xl"
                          />
                        </div>
                      )}

                      {/* Buttons - Full width to match image */}
                      {(position.knowMoreButton || position.registrationButton) && (
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-[450px]">
                          {position.knowMoreButton && (
                            <GlobalArrowButton
                              className="!bg-[var(--dark-orange-red)] !text-white hover:!bg-[var(--dark-orange-red)]/90 flex-1 justify-between w-full"
                              arrowClassName="!bg-white"
                              arrowIconClassName="!text-[var(--button-red)]"
                              onClick={() => handleKnowMore(position)}
                            >
                              {position.knowMoreButton}
                            </GlobalArrowButton>
                          )}
                          {position.registrationButton && (
                            position.registrationLink ? (
                              <a
                                href={position.registrationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 w-full"
                              >
                                {/* <GlobalArrowButton
                                  className="!bg-[var(--button-red)] !text-white hover:!bg-[var(--button-red)]/90 flex-1 justify-between w-full"
                                  arrowClassName="!bg-white"
                                  arrowIconClassName="!text-[var(--button-red)]"
                                  onClick={position.onRegistrationClick}
                                >
                                  {position.registrationButton}
                                </GlobalArrowButton> */}
                              </a>
                            ) : (
                              <GlobalArrowButton
                                className="!bg-[var(--button-red)] !text-white hover:!bg-[var(--button-red)]/90 flex-1 justify-between w-full"
                                arrowClassName="!bg-white"
                                arrowIconClassName="!text-[var(--button-red)]"
                                onClick={position.onRegistrationClick}
                              >
                                {position.registrationButton}
                              </GlobalArrowButton>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                // Original Layout
                <div className="flex flex-col lg:flex-row items-start md:items-center lg:justify-between gap-6">

                  <div className="flex-1">
                    <h3 className={`text-[var(--button-red)] mb-4 ${cardTitleClassName}`}>
                      {position.title}
                    </h3>
                    <p className="leading-relaxed max-w-[650px]">
                      {position.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {!hideCheckEligibility && (
                      <GlobalArrowButton
                        className="!bg-[var(--dark-orange-red)] hover:!bg-[var(--background)] hover:!text-[var(--dark-orange-red)]"
                        onClick={() => handleKnowMore(position)}
                      >
                        Know More
                      </GlobalArrowButton>
                    )}
                    <Link href={position.applyNowLink || "#careerform"}>
                      <GlobalArrowButton>Apply Now</GlobalArrowButton>
                    </Link>
                  </div>

                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="container mx-auto mt-8">
            <div className="flex items-center justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-lg transition-colors ${currentPage === page
                    ? "bg-[var(--button-red)] text-white"
                    : "bg-white text-[var(--button-red)] hover:bg-gray-200"
                    }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedPosition && (
        <div
          className="fixed inset-0 bg-[#00000094] bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
              <h2 className="text-2xl font-bold text-[var(--button-red)]">{selectedPosition.title}</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-8">
              {selectedPosition.type && jobData[selectedPosition.type] ? (
                // Render List of Jobs
                <div className="space-y-8">
                  {jobData[selectedPosition.type].map((job, idx) => (
                    <div key={idx} className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
                      <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">{job.title}</h3>

                      <div className="grid grid-cols-1 gap-4">
                        {job.post && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <span className="font-semibold text-gray-700">Post:</span>
                            <span className="md:col-span-2 text-gray-600">{job.post}</span>
                          </div>
                        )}
                        {job.departments && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <span className="font-semibold text-gray-700">Departments:</span>
                            <span className="md:col-span-2 text-gray-600">{job.departments}</span>
                          </div>
                        )}
                        {job.location && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <span className="font-semibold text-gray-700">Location:</span>
                            <span className="md:col-span-2 text-gray-600">{job.location}</span>
                          </div>
                        )}
                        {job.qualification && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <span className="font-semibold text-gray-700">Qualification:</span>
                            <span className="md:col-span-2 text-gray-600">{job.qualification}</span>
                          </div>
                        )}
                        {job.experience && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <span className="font-semibold text-gray-700">Experience:</span>
                            <span className="md:col-span-2 text-gray-600">{job.experience}</span>
                          </div>
                        )}
                        {job.salary && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <span className="font-semibold text-gray-700">Salary:</span>
                            <span className="md:col-span-2 text-gray-600">{job.salary}</span>
                          </div>
                        )}
                        {job.gender && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <span className="font-semibold text-gray-700">Gender:</span>
                            <span className="md:col-span-2 text-gray-600">{job.gender}</span>
                          </div>
                        )}
                        {job.preferredGender && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <span className="font-semibold text-gray-700">Preferred Gender:</span>
                            <span className="md:col-span-2 text-gray-600">{job.preferredGender}</span>
                          </div>
                        )}
                        {job.languages && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <span className="font-semibold text-gray-700">Languages Required:</span>
                            <span className="md:col-span-2 text-gray-600">{job.languages}</span>
                          </div>
                        )}
                      </div>

                      {/* Skills */}
                      {job.skills && job.skills.length > 0 && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-[var(--button-red)] mb-2">Required Skills:</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                            {job.skills.map((skill, sIdx) => (
                              <li key={sIdx}>{skill}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Responsibilities */}
                      {job.responsibilities && job.responsibilities.length > 0 && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-[var(--button-red)] mb-2">Roles & Responsibilities:</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                            {job.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                // Fallback for Training Program or other layouts
                <div>
                  {/* Training Program Title */}
                  {selectedPosition.applications && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[var(--button-red)] mb-2">
                        Applications
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedPosition.applications}
                      </p>
                    </div>
                  )}

                  {/* Who Can Participate */}
                  {selectedPosition.participants && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[var(--button-red)] mb-2">
                        Who Can Participate?
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedPosition.participants}
                      </p>
                    </div>
                  )}

                  {/* Resource Person */}
                  {selectedPosition.resourcePerson && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[var(--button-red)] mb-2">
                        Resource Person
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedPosition.resourcePerson}
                      </p>
                    </div>
                  )}

                  {/* Skills */}
                  {selectedPosition.skills && selectedPosition.skills.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[var(--button-red)] mb-2">
                        Key Skills And Learning Outcome
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {selectedPosition.skills.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Date and Price */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    {selectedPosition.startDate && (
                      <div>
                        <span className="text-sm font-semibold text-gray-600">Date: </span>
                        <span className="text-gray-700">
                          {selectedPosition.startDate}
                          {selectedPosition.endDate ? ` - ${selectedPosition.endDate}` : ''}
                        </span>
                      </div>
                    )}
                    {selectedPosition.eligibility && (
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 italic">
                        <span className="text-sm font-semibold text-gray-600 not-italic block mb-1">Eligibility Criteria:</span>
                        <div
                          className="text-gray-700 [&_a]:text-[var(--button-red)] [&_a]:underline [&_a]:font-bold [&_a]:hover:text-[var(--dark-orange-red)] transition-colors"
                          dangerouslySetInnerHTML={{ __html: selectedPosition.eligibility }}
                        />
                      </div>
                    )}
                    {selectedPosition.price && (
                      <div>
                        <span className="text-sm font-semibold text-gray-600">Price: </span>
                        <span className="text-gray-700">{selectedPosition.price}</span>
                      </div>
                    )}
                  </div>

                  {/* Registration Link Button */}
                  {selectedPosition.registrationLink && (
                    <div className="pt-4 border-t border-gray-200">
                      <a
                        href={selectedPosition.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <GlobalArrowButton
                          className="!bg-[var(--button-red)] !text-white hover:!bg-[var(--button-red)]/90"
                          arrowClassName="!bg-white"
                          arrowIconClassName="!text-[var(--button-red)]"
                        >
                          {selectedPosition.registrationButton || "Register Now"}
                        </GlobalArrowButton>
                      </a>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
