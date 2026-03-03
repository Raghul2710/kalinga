"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "../general/SectionHeading";

// Tab definitions
const CTCD_TABS = [
  { id: "benefits", label: "Benefits for Organisations" },
  { id: "services", label: "Service Offerings" },
  { id: "consultancy", label: "Consultancy Areas" },
  { id: "pms", label: "Performance Management System" },
  { id: "technical", label: "Industrial Technical Consultancy" },
  { id: "clients", label: "Our Clients" },
];

// Benefits for Organisations
const BENEFITS = [
  "Improved workflow across different departments",
  "Better employee management with optimised HR processes",
  "Improved performance management systems",
  "Cost-cutting and reduced wastage of resources",
  "Improved efficiency in day-to-day processes",
  "Seamless integration of digital tools",
  "Long-term growth and profitability",
];

// Service Offerings
const SERVICE_OFFERINGS = [
  {
    id: 1,
    title: "Process benchmarking",
    description: "Facilitate the design and adoption of best practices for holistic transformation, covering HR processes in an organisation.",
    image: "https://cdn.kalingauniversity.ac.in/ctcd/process.webp",
  },
  {
    id: 2,
    title: "Operational Excellence through HR Processes",
    description: "Assess and understand business needs and design integrated HR Processes to create ongoing improvement in the company's strategic, competitive performance through employee efficiency programmes and productivity improvement.",
    image: "https://cdn.kalingauniversity.ac.in/ctcd/operation.webp",
  },
  {
    id: 3,
    title: "Capability improvement",
    description: "Assess competencies and design a framework, and build customised interventions to develop employee & team capabilities through various developmental programmes.",
    image: "https://cdn.kalingauniversity.ac.in/ctcd/capability.webp",
  },
];

// Consultancy Areas content
const CONSULTANCY_AREAS_CONTENT = `We help companies improve their productivity and employee engagement by streamlining their processes with our customised solutions. Some of our core consultancy areas include: designing and implementing HRIS and HRMS, workforce planning strategies, automation of HR systems, digital tools for maintaining employee registries and compliance, management of contract labours, integration of IoT and AI & ML in manufacturing processes, development of employee engagement surveys and action plans, designing employee wellness programs, building recruitment strategies, designing customized training modules, hybrid workforce management, and much more.`;

const CONSULTANCY_IMAGE = "https://cdn.kalingauniversity.ac.in/ctcd/consultancy.webp";

// Performance Management System
const PMS_CONTENT = `We design and implement a Performance Management System (PMS) that helps companies track the performance of their employees and identify ways for performance improvement. Our system simplifies HR solutions and makes work easier, ensuring that every employee contributes towards the organisation's objectives.`;

const PMS_IMAGE = "https://cdn.kalingauniversity.ac.in/ctcd/execution.webp";

// Industrial Technical Consultancy Solutions
const TECHNICAL_SOLUTIONS = [
  "Lean Manufacturing and Six Sigma",
  "Industrial Automation and Robotics",
  "Industry 4.0 and IoT",
  "Advanced Manufacturing Technologies",
  "Quality Management Systems",
  "Supply Chain Management & Logistics",
  "Sustainability & Green Manufacturing",
  "Advanced Materials and Nanotech",
  "Cybersecurity for Manufacturing",
  "Data Analytics and Big Data",
];

// Client Case Studies
const CLIENT_CASE_STUDIES = [
  {
    id: 1,
    name: "N.H. Goel",
    image: "https://cdn.kalingauniversity.ac.in/ctcd/goel.webp",
    description: "Consultancy on Psychometric Test followed by Career Counselling for IX and X students",
  },
  {
    id: 2,
    name: "WANFENG Aluminium Wheel (INDIA) Pvt. Ltd.",
    image: "https://cdn.kalingauniversity.ac.in/ctcd/wanfeng.webp",
    description: "Consultancy on PMS Implementation for the top 50 Employees",
  },
  {
    id: 3,
    name: "RAMA TMT Bars",
    image: "https://cdn.kalingauniversity.ac.in/ctcd/rama.webp",
    description: "Job Description (JD), KRA, KPI & Performance Management System",
  },
  {
    id: 4,
    name: "Techno Blast Mining",
    image: "https://cdn.kalingauniversity.ac.in/ctcd/tmc.webp",
    description: "Consultancy on a Job Description, Key Result Areas (KRA) Structure & Performance Management System (PMS) Process",
  },
  {
    id: 5,
    name: "Jayaswal Neco Industries Ltd",
    image: "https://cdn.kalingauniversity.ac.in/ctcd/jayaswal.webp",
    description: "360 Degree Appraisal Program",
  },
  {
    id: 6,
    name: "Kamlakant Shukla Institute",
    image: "https://cdn.kalingauniversity.ac.in/ctcd/kamlakant.webp",
    description: "Consultancy Service for training and placement Activities",
  },
  {
    id: 7,
    name: "Institute of Advanced Research (IAR)",
    image: "https://cdn.kalingauniversity.ac.in/ctcd/innovation.webp",
    description: "External Assessment of Non-teaching Staff of IAR Gandhi Nagar",
  },
];

export default function CTCDConsultancyTabSection() {
  const [activeTab, setActiveTab] = useState("benefits");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
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
      <div className="" id="ctcd-consultancy-tab-section">
        <div className="flex flex-col lg:flex-row gap-4 bg-[var(--dark-blue)] py-16 md:px-10 px-4 rounded-xl">
          {/* Vertical Tabs on Left (Horizontal Scroll on Mobile) */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="rounded-[16px] bg-[var(--dark-blue)]">
              <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
                {CTCD_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`
                        flex-shrink-0 lg:w-full text-left px-4 py-5 rounded-[8px] 
                        font-plus-jakarta-sans text-sm md:text-base font-semibold
                        transition-all duration-200
                        ${isActive
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
            <div className="rounded-[16px] bg-white p-4 md:p-8 shadow-sm h-full flex flex-col">
              {/* Benefits for Organisations Tab */}
              {activeTab === "benefits" && (
                <div className="flex-1">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-6 font-semibold">
                    {CTCD_TABS.find((t) => t.id === activeTab)?.label}
                  </h2>
                  <ul className="list-disc pl-6 space-y-3 text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                    {BENEFITS.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Service Offerings Tab */}
              {activeTab === "services" && (
                <div className="flex-1">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-6 font-semibold">
                    {CTCD_TABS.find((t) => t.id === activeTab)?.label}
                  </h2>
                  <div className="space-y-8">
                    {SERVICE_OFFERINGS.map((service) => (
                      <div key={service.id} className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-full md:w-2/5 flex-shrink-0">
                          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-plus-jakarta-sans text-lg md:text-xl text-[var(--foreground)] mb-3 font-semibold">
                            {service.title}
                          </h3>
                          <p className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Consultancy Areas Tab */}
              {activeTab === "consultancy" && (
                <div className="flex-1">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-6 font-semibold">
                    {CTCD_TABS.find((t) => t.id === activeTab)?.label}
                  </h2>
                  <div className="space-y-6">
                    <p className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                      {CONSULTANCY_AREAS_CONTENT}
                    </p>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden mt-6">
                      <Image
                        src={CONSULTANCY_IMAGE}
                        alt="Consultancy Areas"
                        fill
                        className="object-contain"
                        sizes="100vw"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Performance Management System Tab */}
              {activeTab === "pms" && (
                <div className="flex-1">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-6 font-semibold">
                    {CTCD_TABS.find((t) => t.id === activeTab)?.label}
                  </h2>
                  <div className="space-y-6">
                    <p className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                      {PMS_CONTENT}
                    </p>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden mt-6">
                      <Image
                        src={PMS_IMAGE}
                        alt="Performance Management System"
                        fill
                        className="object-contain"
                        sizes="100vw"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Industrial Technical Consultancy Tab */}
              {activeTab === "technical" && (
                <div className="flex-1">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-6 font-semibold">
                    Our Industrial Technical Consultancy Solutions
                  </h2>
                  <ul className="list-disc pl-6 space-y-3 text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                    {TECHNICAL_SOLUTIONS.map((solution, idx) => (
                      <li key={idx}>{solution}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Our Clients Tab */}
              {activeTab === "clients" && (
                <div className="flex-1">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-6 font-semibold">
                    {CTCD_TABS.find((t) => t.id === activeTab)?.label}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {CLIENT_CASE_STUDIES.map((client) => (
                      <div key={client.id} className="flex flex-col gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                        <div className="relative w-full h-32 md:h-40 rounded-lg overflow-hidden bg-white">
                          <Image
                            src={client.image}
                            alt={client.name}
                            fill
                            className="object-contain p-2"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <div>
                          <h3 className="font-plus-jakarta-sans text-lg text-[var(--foreground)] mb-2 font-semibold">
                            {client.name}
                          </h3>
                          <p className="text-[var(--foreground)] font-plus-jakarta-sans text-sm leading-relaxed">
                            {client.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
