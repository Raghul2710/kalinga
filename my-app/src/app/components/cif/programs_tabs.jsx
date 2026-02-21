"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ProgramCard from "../general/program-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../general/tab";
import GlobalArrowButton from "../general/global-arrow_button";
import SectionHeading from "../general/SectionHeading";

export default function ProgramsTabs() {
  const [activeTab, setActiveTab] = useState("45Days");
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  // Detailed information for 45 Days programs
  const programs45DaysDetails = {
    "Biotech Tools & Techniques": {
      about: "The main objective of this program is to encourage the bright and well-motivated students of self and different institutions to pursue innovative research and development of project work. This enables the trainees to gain first-hand knowledge, especially working skills with sophisticated instruments frequently used in research setups and the biotech industry.",
      advantages: [
        "Help the students develop the skills and employability competencies.",
        "It provides an opportunity for students to apply theoretical knowledge acquired in the classroom with the practical application of knowledge required to perform a task.",
        "It gives the students a feel of how their work environment will be when they join the company. Industrial training also exposes the students to the tools used in the industry.",
        "The development of hands-on biological science process skills enables students to better understand science and perform better during interviews. As practical, skilled knowledge is the most important aspect of technology-driven science, like Biotechnology or Bioinformatics.",
        "Internships provide students numerous perks: They gain experience, develop skills, make connections, strengthen their resumes, learn about a field, and assess their interests and abilities."
      ]
    },
    "Zoological Tools & Techniques": {
      about: "The main objective of this program is to encourage the bright and well-motivated students of self and different institutions to pursue innovative research and development of project work. This enables the trainees to gain first-hand knowledge, especially working skills with Zoological techniques frequently used.",
      advantages: [
        "It helps the students develop skills and employability competencies.",
        "It provides an opportunity for students to apply theoretical knowledge acquired in the classroom with the practical application of knowledge required to perform a task.",
        "It gives them a feel of how their work environment will be when they get employed. Industrial training also exposes students to the tools used in the industry.",
        "Developments of in-hand training in zoological tools and technical skills to enable students to better understand and perform during interviews. As practical, skilled knowledge is the most important aspect of technology-driven science.",
        "Internships provide students numerous perks: They gain experience, develop skills, make connections, strengthen their resumes, learn about a field, assess their interests & abilities and end up in the desired jobs."
      ]
    },
    "Physics Tools & Techniques": {
      about: "The main objective of this program is to encourage the bright and well-motivated students of Kalinga University and other institutions to pursue innovative research and development of project work. The purpose of this internship is to enrich the learning experience by immersing students in an international-level research activity, along with hands-on experience in certain aspects of Physics (Scientific research, laboratory work, scientific problem solving, and computer programming) for academic credit.",
      advantages: [
        "It helps the students develop skills and employability competencies.",
        "It provides an opportunity for students to apply theoretical knowledge acquired in the classroom with the practical application of knowledge required to perform a task.",
        "It will give them experience in the work environment and research activities. They will have exposure to concurrent research in the field of material science and astrophysics.",
        "Apart from theoretical knowledge, participants will learn about the statistical tools and techniques required to present the results.",
        "Internships provide students numerous perks: They gain experience, develop skills, make connections, strengthen their resumes, learn about a field, assess their interests & abilities and end up in the desired jobs."
      ]
    },
    "Pharmaceutical Techniques": {
      about: "The main objective of this program is to encourage bright and well-motivated students to pursue innovative research and development of project work. This enables the trainees to gain first-hand knowledge, especially working skills with sophisticated instruments frequently used in research setups in pharmaceutical industries.",
      advantages: [
        "Students will learn to operate advanced instruments that are used in pharma labs.",
        "They will be able to apply theoretical knowledge to practical lab experiments.",
        "From formulation to drug design, participants will explore different pharma areas.",
        "They will be able to add certified lab internship experience to their resume.",
        "Participants will explore software tools that are used in modern drug design."
      ]
    },
    "Applied Business Management": {
      about: "The internship program named \"Kalinga Eklavya\" is a 45-day internship intended to encourage innovative and creative minds to experiment with the concepts and practices of business management.\n\nTo prepare participants with the management skills required in the modern corporate world.\nTo infuse the practical and applied aspects of management in the participants.\nTo provide hands-on experience in the advanced fields of management.",
      advantages: [
        "Help the students develop skills and employability competencies.",
        "It provides an opportunity for students to apply theoretical knowledge acquired in the classroom with the practical application of knowledge required to perform a task.",
        "It gives them a feel of how their work environment will be when they get employed.",
        "Industrial training also exposes students to the tools used in the industry.",
        "Developments of in-hand business process skills to enable students to better understand business and perform better during interviews.",
        "Practical knowledge is the most important aspect of technology-driven modern business.",
        "Personality development and placement training form an inevitable part of the program."
      ]
    },
    "Botany & Microbiology Tools & Techniques": {
      about: "The main objective of this program is to encourage the bright and well-motivated students to self and different institutions to pursue innovative research and development of project work. This enables the trainees to gain first-hand knowledge, especially working skills with design tools & techniques frequently used in the Clinical, Pharma & Microbiology-based industry.",
      advantages: [
        "Help the students develop skills and employability competencies.",
        "It provides an opportunity for students to apply theoretical knowledge acquired in the classroom to the practical application of knowledge required to perform a task.",
        "It gives them a feel of how their work environment will be when they get employed. Industrial training also exposes students to the tools used in the industry.",
        "Developments of in-hand biological science process skills enable students to better understand science and perform better during interviews. As practical, skilled knowledge is the most important aspect of technology-driven science, such as Botany and Microbiology.",
        "Internships provide students numerous perks: They gain experience, develop skills, make connections, strengthen their resumes, learn about a field, assess their interests & abilities and end up in desired jobs."
      ]
    },
    "Chemistry Tools & Techniques": {
      about: "The main objective of this program is to encourage the bright and well-motivated students of Kalinga University and other institutions to pursue innovative research and development of project work. This enables the trainees to gain first-hand knowledge, especially working skills with sophisticated instruments frequently used in research setups and in Life Sciences.",
      advantages: [
        "Help the students develop their skills and employability competencies.",
        "It provides an opportunity for students to apply theoretical knowledge acquired in the classroom to the practical application of knowledge required to perform a task.",
        "It gives them a feel of how their work environment will be when they get employed. Industrial training also exposes students to the tools used in the industry.",
        "Developments of hands-on practical training skills. Enable students to better understand chemistry. As practical, skilled knowledge is the most important aspect of Chemical Science.",
        "Internships provide students numerous perks: They gain experience, develop skills, make connections, strengthen their resumes, learn about a field, assess their interests & abilities and end up in desired jobs."
      ]
    },
    "Artificial Intelligence & Machine Learning (AI & ML)": {
      about: "Most technological advancements as of now have components of Artificial Intelligence and Machine learning. This 45-Day Artificial Intelligence and Machine Learning Course is remarkably planned by Kalinga University with experts, to help you ace precisely what the Artificial Intelligence and Machine Learning needs to position market requests.",
      advantages: [
        "Internship Program in AI and Machine Learning will assist you in pursuing a career in AI, Computer Vision, Machine learning, and Deep Learning.",
        "Assemble ML models with NumPy and scikit-learn, construct and train supervised models for prediction & binary classification tasks (linear, logistic regression).",
        "Build & train a neural network with TensorFlow to perform multi-class classification, & build & use decision trees & tree ensemble methods.",
        "Apply best practices for ML development & use unsupervised learning techniques for unsupervised learning, including clustering & anomaly detection.",
        "Understand the definition of AI, its applications, and use cases, and explain terms like machine learning, deep learning and neural networks."
      ]
    },
    "Python and R Programming": {
      about: "Python and R are very popular programming languages today. They are widely used in various business sectors, such as programming, web development, machine learning, and data science. This Internship Program has been designed for beginners to help them understand the basics and the advanced concepts of Python and the R Programming Language. After completing this tutorial, you will find yourself at a great level of expertise in Python and R programming, from where you can take yourself to the next level to become a world-class Software Engineer or Data Scientist.",
      advantages: [
        "The Python language provides several job opportunities and promises high growth with huge salary prospects.",
        "Python's large open-source community means Pythonists can enjoy strong peer support and help documentation.",
        "Python's simple syntax, combined with its large set of libraries, helps us do more with fewer lines of code. This saves a lot of development time and is one of the reasons for Python's popularity"
      ]
    },
    "E-Vehicle": {
      about: "This internship program provides students with practical experience and an in-depth knowledge of one of the fastest-growing sectors. It covers all technical aspects like EV components and real-time project works. They will also get exposure to market trends, insights and sustainable solutions. It is a great opportunity for students who want to build their careers in green mobility.",
      advantages: [
        "Hands-on learning experience with EV tools and technologies",
        "Learn from industry experts and understand the future of transportation",
        "Networking Opportunities with industry professionals",
        "Opportunity to work on practical projects"
      ]
    },
    "Forensic Science": {
      about: "The main objective of this internship program is to encourage students of our university and other academic institutes to get engaged in innovative research and hands-on project work in the field of forensic science. This program aims to provide trainees with practical exposure to forensic methodologies, evidence handling protocols, and advanced analytical techniques.",
      advantages: [
        "Skill Development and Employability",
        "Application of Theoretical Knowledge",
        "Exposure to Professional Work Environment",
        "Hands-on Experience with Forensic Tools and Techniques",
        "Preparation for Competitive Careers",
        "Networking and Professional Connections",
        "Resume Strengthening and Career Assessment"
      ]
    }
  };

  // Detailed information for 6 Months programs
  const programs6MonthsDetails = {
    "Zoological Techniques": {
      about: "The main objective of this program is to encourage bright and well-motivated students of Kalinga University and other institutions to pursue innovative research and development of project work. This enables the trainees to gain first-hand knowledge, especially working skills with sophisticated instruments frequently used in research setups and in Life Sciences.",
      advantages: [
        "Students will be able to collect and analyse samples from biodiversity.",
        "They will learn to use advanced lab instruments that are used in environmental analysis.",
        "They will explore how animals, water systems, and soil interact with their surroundings.",
        "They will be able to use software tools for scientific writing and data analysis work.",
        "They will actively support scientific studies and participate in research projects.",
        "They will receive an internship certificate."
      ]
    },
    "Physics": {
      about: "The main objective of this program is to encourage bright and well-motivated students of Kalinga University and other institutions to pursue innovative research and development of project work.\n\nInternational level research activity, along with hands-on experience in certain aspects of physics (Scientific research, laboratory work, scientific problem solving, and computer programming) for academic credit.",
      advantages: [
        "Help the students develop skills and employability competencies.",
        "It provides an opportunity for students to apply theoretical knowledge acquired in the classroom with the practical application of knowledge required to perform a task.",
        "It will give them experience of the work environment in the research activities. They will have exposure to concurrent research in the field of material science and astrophysics.",
        "Apart from theoretical knowledge, participants will learn about statistical tools and techniques required to present the results and outcomes.",
        "Internships provide students numerous perks: They gain experience, develop skills, make connections, strengthen their resumes, learn about a field, assess their interests & abilities, and land desired jobs."
      ]
    },
    "Pharmaceutical Sciences": {
      about: "The main objective of this program is to encourage bright and well-motivated students to pursue innovative research and development of project work. This enables the trainees to gain first-hand knowledge, especially working skills with sophisticated instruments frequently used in research setups in pharmaceutical industries.",
      advantages: [
        "Students will learn to operate advanced instruments like HPLC, XRD, Biochemistry Analyser, and more.",
        "Students will be able to turn their theoretical knowledge into real-time practice with lab experiments.",
        "They will explore various pharmaceutical areas like Pharmacology, Pharmacognosy, pharmaceutical analysis, and more.",
        "They will learn the process of preparing and testing different drug dosage forms.",
        "They will understand animal-based screening techniques.",
        "They will understand how herbal medicines are prepared in the lab.",
        "They will receive an internship certificate."
      ]
    },
    "Interior Design": {
      about: "The primary goal of this program is to encourage bright and motivated students from Kalinga University and other institutions to pursue innovative research and project development. This enables the trainees to gain first-hand knowledge, especially working skills with design techniques frequently used in the interior design industry.",
      advantages: [
        "It helps the students develop skills and employability competencies.",
        "It provides an opportunity for students to apply theoretical knowledge acquired in the classroom with the practical application of knowledge required to perform a task.",
        "It gives a feel of how their work environment will be when they get employed. Research writing & case studies also give exposure to students on the tools used in the industry.",
        "Developments of in-hand design process skills enable students to better understand interior design and perform better during interviews. Practical, skilled knowledge is the most important aspect of technology-driven science.",
        "Internships provide students numerous perks: They gain experience, develop skills, make connections, strengthen their resumes, learn about a field, assess their interests & abilities, and land desired jobs."
      ]
    },
    "Fashion Design": {
      about: "The main objective of this program is to encourage bright and well-motivated students of Kalinga University and different institutions to pursue innovative research and development of project work. This enables the trainees to gain first-hand knowledge, especially working skills with design techniques frequently used in the Fashion & Apparel industry.",
      advantages: [
        "Help the students develop their skills and employability competencies.",
        "It provides an opportunity for students to apply theoretical knowledge acquired in the classroom with the practical application of knowledge required to perform a task.",
        "It gives them a feel of how their work environment will be when they get employed. Research writing & case studies also give exposure to students on the tools used in the industry.",
        "Developments of in-hand design process skills enable students to better understand the fashion and perform better during interviews. Practical, skilled knowledge is the most important aspect of technology-driven science, such as Fashion Design.",
        "Internships provide students numerous perks: They gain experience, develop skills, make connections, strengthen their resumes, learn about a field, assess their interests & abilities, and land desired jobs."
      ]
    },
    "Data Science Using R Programming": {
      about: "The main objective of this program is to encourage the bright and well-motivated students of Kalinga University and other institutions to pursue innovative research and development of project work. This enables the trainees to gain first-hand knowledge, especially working skills with sophisticated instruments frequently used in research setups and in Life Sciences.",
      advantages: [
        "Participants will learn R Programming fundamentals and effectively manage data using the language.",
        "They will learn to fetch and clean data from different web sources.",
        "They will learn to visualise and summarise data using statistical techniques.",
        "They will learn to create smart reports using R Markdown and Knitr.",
        "They will learn to analyse data using statistical concepts and real examples.",
        "They will learn to use GitHub and create visual analytics using ggplot2."
      ]
    },
    "Chemistry": {
      about: "The main objective of this program is to encourage bright and well-motivated students of Kalinga University and other institutions to pursue innovative research and development of project work. This enables the trainees to gain first-hand knowledge, especially working skills with practical techniques frequently used in Chemistry & Industrial Chemistry.",
      advantages: [
        "It helps the students develop skills and employability competencies.",
        "It provides an opportunity for students to apply theoretical knowledge acquired in the classroom to the practical application of knowledge required to perform a task.",
        "It gives a feel of how their work environment will be when they get employed. Research writing & case studies also expose students to the tools used in the industry.",
        "The development of the in-hand design process skills enables students to understand Chemistry better and perform better during interviews. Practical, skilled knowledge is the most important aspect of technology-driven science, such as biochemistry, pharmaceutical chemistry, and analytical chemistry."
      ]
    },
    "Botany & Microbiology": {
      about: "The main objective of this program is to encourage bright and well-motivated students of our institution, as well as different institutions, to pursue innovative research and development of project work.",
      advantages: [
        "Help the students develop their skills and employability competencies.",
        "It provides an opportunity for students to apply theoretical knowledge acquired in the classroom with the practical application of knowledge required to perform a task.",
        "It gives them a feel of how their work environment will be when they get employed. Industrial training also exposes students to the tools used in the industry.",
        "Developments of in-hand biological science process skills enable students to better understand science and perform better during interviews. As practical, skilled knowledge is the most important aspect of technology-driven science, like Biotechnology or Bioinformatics.",
        "Internships provide students with numerous perks: They gain experience, develop skills, make connections, strengthen their resumes, learn about a field, assess their interests & abilities and land in desired jobs."
      ]
    },
    "Biotechnology": {
      about: "The main objective of this program is to encourage bright and well-motivated students of Kalinga University and other institutions to pursue innovative research and development of project work. This enables the trainees to gain first-hand knowledge, especially working skills with sophisticated instruments frequently used in research setups and in Life Sciences.",
      advantages: [
        "Participants will get complete practical training in advanced lab tools and techniques.",
        "They will get the opportunity to work on innovative research projects.",
        "They will explore sustainable and eco-friendly biotech solutions.",
        "They will learn to formulate products like vitamins and herbal supplements.",
        "From raw material selection to final testing, they will understand the complete product cycle.",
        "They will receive an internship certificate."
      ]
    }
  };

  const programs45Days = [
    { id: 1, title: "Biotech Tools & Techniques", specialization: "Start Date: May | End Date: July", duration: "45 Days  ", checkEligibilityLink: "#cif-form", applyNowLink: "#cif-form", hideScholarshipLink: true, hideExploreLink: true },
    { id: 2, title: "Zoological Tools & Techniques", specialization: "Start Date: May | End Date: July", duration: "45 Days", checkEligibilityLink: "#cif-form", applyNowLink: "#cif-form", hideScholarshipLink: true, hideExploreLink: true },
    { id: 3, title: "Physics Tools & Techniques", specialization: "Start Date: May | End Date: July", duration: "45 Days", checkEligibilityLink: "#cif-form", applyNowLink: "#cif-form", hideScholarshipLink: true, hideExploreLink: true },
    { id: 4, title: "Pharmaceutical Techniques", specialization: "Start Date: May | End Date: July", duration: "45 Days", checkEligibilityLink: "#cif-form", applyNowLink: "#cif-form", hideScholarshipLink: true, hideExploreLink: true },
    { id: 5, title: "Applied Business Management", specialization: "Start Date: May | End Date: July", duration: "45 Days", checkEligibilityLink: "#cif-form", applyNowLink: "#cif-form", hideScholarshipLink: true, hideExploreLink: true },
    { id: 6, title: "Botany & Microbiology Tools & Techniques", specialization: "Start Date: May | End Date: July", duration: "45 Days", checkEligibilityLink: "#cif-form", applyNowLink: "#cif-form", hideScholarshipLink: true, hideExploreLink: true },
    { id: 7, title: "Chemistry Tools & Techniques", specialization: "Start Date: May | End Date: July", duration: "45 Days", checkEligibilityLink: "#cif-form", applyNowLink: "#cif-form", hideScholarshipLink: true, hideExploreLink: true },
    { id: 8, title: "Artificial Intelligence & Machine Learning (AI & ML)", specialization: "Start Date: May | End Date: July", duration: "45 Days", checkEligibilityLink: "#cif-form", applyNowLink: "#cif-form", hideScholarshipLink: true, hideExploreLink: true },
    { id: 9, title: "Python and R Programming", specialization: "Start Date: May | End Date: July", duration: "45 Days", checkEligibilityLink: "#cif-form", applyNowLink: "#cif-form", hideScholarshipLink: true, hideExploreLink: true },
    { id: 10, title: "E-Vehicle", specialization: "Start Date: May | End Date: July", duration: "45 Days", checkEligibilityLink: "#cif-form", applyNowLink: "#cif-form", hideScholarshipLink: true, hideExploreLink: true },
    { id: 11, title: "Forensic Science", specialization: "Start Date: May | End Date: July", duration: "45 Days", checkEligibilityLink: "#cif-form", applyNowLink: "#cif-form", hideScholarshipLink: true, hideExploreLink: true }
  ];

  const programs6Months = [
    { id: 1, title: "Zoological Techniques", specialization: "Start Date: Jan | End Date: June", duration: "6 Months", checkEligibilityLink: "#cif-form", applyNowLink: "#cif-form", hideScholarshipLink: true, hideExploreLink: true },
    { id: 2, title: "Physics", specialization: "Start Date: Jan | End Date: June", duration: "6 Months", checkEligibilityLink: "#cif-form", applyNowLink: "#cif-form", hideScholarshipLink: true, hideExploreLink: true },
    { id: 3, title: "Pharmaceutical Sciences", specialization: "Start Date: Jan | End Date: June", duration: "6 Months", checkEligibilityLink: "#cif-form", applyNowLink: "#cif-form", hideScholarshipLink: true, hideExploreLink: true },
    { id: 4, title: "Interior Design", specialization: "Start Date: Jan | End Date: June", duration: "6 Months", checkEligibilityLink: "#cif-form", applyNowLink: "#cif-form", hideScholarshipLink: true, hideExploreLink: true },
    { id: 5, title: "Fashion Design", specialization: "Start Date: Jan | End Date: June", duration: "6 Months", checkEligibilityLink: "#cif-form", applyNowLink: "#cif-form", hideScholarshipLink: true, hideExploreLink: true },
    { id: 6, title: "Data Science Using R Programming", specialization: "Start Date: Jan | End Date: June", duration: "6 Months", checkEligibilityLink: "#cif-form", applyNowLink: "#cif-form", hideScholarshipLink: true, hideExploreLink: true },
    { id: 7, title: "Chemistry", specialization: "Start Date: Jan | End Date: June", duration: "6 Months", checkEligibilityLink: "#cif-form", applyNowLink: "#cif-form", hideScholarshipLink: true, hideExploreLink: true },
    { id: 8, title: "Botany & Microbiology", specialization: "Start Date: Jan | End Date: June", duration: "6 Months", checkEligibilityLink: "#cif-form", applyNowLink: "#cif-form", hideScholarshipLink: true, hideExploreLink: true },
    { id: 9, title: "Biotechnology", specialization: "Start Date: Jan | End Date: June", duration: "6 Months", checkEligibilityLink: "#cif-form", applyNowLink: "#cif-form", hideScholarshipLink: true, hideExploreLink: true }
  ];

  const handleKnowMore = (program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProgram(null);
  };

  const getProgramDetails = (title) => {
    if (activeTab === "45Days") {
      return programs45DaysDetails[title] || null;
    } else {
      return programs6MonthsDetails[title] || null;
    }
  };

  return (
    <section className="bg-white">
      <div className="px-2">
        {/* Tabs Container */}
        <div className="bg-[var(--dark-blue)] rounded-2xl py-16">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <SectionHeading
                title="Internship Programs"
                subtitle=""
                titleClassName="text-white"
              />
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-8 justify-center">
                <TabsTrigger value="45Days" className="flex-1 min-w-[calc(50%-7px)] md:min-w-[200px]">
                  45 Days Internship Program
                </TabsTrigger>
                <TabsTrigger value="6Months" className="flex-1 min-w-[calc(50%-7px)] md:min-w-[200px]">
                  6 Months Internship Program
                </TabsTrigger>
              </TabsList>

              {/* Tab Content */}
              <TabsContent value="45Days" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {programs45Days.map((program) => (
                    <div key={program.id} className="bg-white flex items-center justify-between rounded-xl p-4 md:p-6 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      {/* Background Text */}
                      <div className="absolute top-2 right-2 md:top-4 md:right-4 text-6xl md:text-8xl !font-bold text-gray-200 leading-none opacity-50 z-0 font-stix">
                        {program.duration}
                      </div>

                      {/* Program Content */}
                      <div className="relative z-10 w-full">
                        <h3 className="text-[var(--button-red)] text-xl md:text-2xl lg:text-3xl !font-medium mb-2 font-plus-jakarta-sans normal-case">
                          {program.title}
                        </h3>

                        {program.specialization && (
                          <p className="text-[var(--button-red)] text-xs md:text-sm lg:text-base mb-3 md:mb-4 leading-relaxed font-plus-jakarta-sans">
                            {program.specialization}
                          </p>
                        )}

                        <div className="mb-4 md:mb-6">
                          <p className="whitespace-nowrap">
                            Duration : {program.duration}
                          </p>
                        </div>

                        {/* Know More Button Only */}
                        <div className="flex flex-row gap-2 md:gap-3">
                          <GlobalArrowButton
                            className="!bg-[var(--dark-orange-red)] !text-[var(--background)] whitespace-nowrap text-xs md:text-sm lg:text-base !h-[38px] md:!h-[40px] !rounded-lg !px-1"
                            arrowClassName="!bg-[var(--background)] !px-1"
                            arrowIconClassName="!text-[var(--button-red)]"
                            textClassName="!text-[12px] md:!text-[14px] !px-2 md:!px-3"
                            onClick={() => handleKnowMore(program)}
                          >
                            Know More
                          </GlobalArrowButton>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="6Months" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {programs6Months.map((program) => (
                    <ProgramCard
                      key={program.id}
                      program={program}
                      href={program.checkEligibilityLink || "/admissions"}
                      applyNowLink={program.applyNowLink || "#cif-application-form"}
                      exploreLinkText="Know More"
                      onCheckEligibility={(program) => {
                        handleKnowMore(program);
                      }}
                      onApplyNow={(program) => {
                        if (program.applyNowLink) {
                          if (program.applyNowLink.startsWith('#')) {
                            const element = document.querySelector(program.applyNowLink);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          } else {
                            router.push(program.applyNowLink);
                          }
                        }
                      }}
                      onScholarshipsClick={(program) => console.log('Scholarships', program)}
                      onExploreProgramClick={(program) => handleKnowMore(program)}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProgram && (
        <div
          className="fixed inset-0 bg-[#00000094] bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
              <h2 className="text-2xl font-bold text-[var(--button-red)]">{selectedProgram.title}</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-6">
              {(() => {
                const details = getProgramDetails(selectedProgram.title);
                if (!details) return null;

                return (
                  <>
                    {/* About Section */}
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--button-red)] mb-3">
                        About the Internship Program
                      </h4>
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {details.about}
                      </div>
                    </div>

                    {/* Advantages Section */}
                    {details.advantages && details.advantages.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--button-red)] mb-3">
                          Advantages
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                          {details.advantages.map((advantage, index) => (
                            <li key={index}>{advantage}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
