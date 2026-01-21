"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../general/tab";
import SectionHeading from "../general/SectionHeading";

const defaultVisaPoints = [
  "Students should immediately apply for a student visa at the Indian Embassy / High Commission once the Admission Letter/Visa Letter has been issued by the University.",
  "Students have to ensure that their student visa is endorsed for Kalinga University.",
  "Students have to make sure that they have applied for a visa well in advance and in time. It generally takes 3–8 weeks to get the Indian Visa; thus, it is advisable to apply for the visa accordingly and consult the Indian High Commission/Embassy, if required.",
  "Students have to make sure that if they have entered India based on a Student Visa endorsed to Kalinga University, then it is their responsibility to ensure that they directly join and report to the University. The Visa endorsed in the name of the University or obtained based on University documents cannot be used for any other purpose, like employment, admission to any other University/College/Institute/Academy, etc., or for non-regular (distance/online) mode of education.",
  "After reaching the University Campus, students have to get the visa verified by the University and have to deposit a copy of the valid visa with the International Student Coordinator. It is the responsibility of the students to ensure that throughout his/her study period, students are on a valid visa.",
];

const defaultExtensionPoints = [
  "It is mandatory for all International students except those from Nepal and Bhutan to get their student visa registered at the nearest FRRO/FRO within 14 days of arrival in India.",
  "The ISC Department of Kalinga University will guide and assist students with all the required processes needed for FRO/FRRO Registration.",
  "All international students except those from Nepal and Bhutan have to fill out an online application for Registration Certificate (RC) & Residential Permit (RP) on arrival in India.",
  "In case the initial visa is not endorsed for the complete duration of the program or the student has to extend the stay because he/she is not able to complete the program in the stipulated time, then the student should apply for the extension of the visa before it expires.",
  "A visa extension can be applied for only when the student is present at the University.",
  "Government charges may apply for a visa extension, which differs from country to country.",
  "Students travelling outside India must carry NOC approval from the local FRRO or a valid exit permit.",
  "Students travelling within India have to carry original documents like a Passport, RP, Stay VISA, etc., and the reason for travel has to be informed to the local FRRO.",
];

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-3 leading-relaxed">
      <svg
        fill="none"
        height="24"
        className="md:h-6 md:w-6 h-6 w-9 bg-[var(--card-skin)] fill-black rounded-md p-1 flex-shrink-0 mt-0.5"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m19 5.50049v10.99951c0 .2761-.2239.5-.5.5s-.5-.2239-.5-.5v-9.79289l-12.14645 12.14649c-.19526.1952-.51184.1952-.7071 0-.19527-.1953-.19527-.5119 0-.7072l12.14645-12.1464h-9.7929c-.27614 0-.5-.22386-.5-.5s.22386-.5.5-.5h11c.1316 0 .2578.05186.3514.14426l.0022.00219c.0879.0879.1397.20518.1458.32876.0004.00824.0006.01699.0006.02528z"></path>
      </svg>
      <span className="text-sm leading-7 text-[var(--light-text-gray)]">{children}</span>
    </li>
  );
}

const preArrivalGuidelines = [
  "An Offer letter/Admission letter will be issued to the International student, which provides vital information about the student, such as Name, Gender, Date of Birth, Passport and Visa Number, and Name of the Program, which is required to be submitted at the Indian Embassy or High Commission of India to get the visa.",
  "Students need to book their air tickets to Raipur, Chhattisgarh, after taking a valid Student Visa from the Indian Embassy/High Commission.",
  "Students have to make sure that they have taken all the required vaccinations, like Yellow Fever, Typhoid Vaccine, Hepatitis Vaccine, etc., to avoid medical complications while they are in India.",
  "Students have to inform the University of the Airport pickup at least one week prior to arrival, and also need to provide their complete flight details.",
  "Students have to bring the Admission Letter issued by the University along with all the Certificates/Degrees, Transcripts (in original), and 20 passport-size photographs.",
  "Students need to carry money in the form of US dollars (as permitted by Indian Laws), which can be easily exchanged at the University or at foreign exchange offices and banks, or can also use International Debit / Credit Cards.",
  "Students have to note that the temperature here ranges between 30 and 45 degrees Celsius during summer and 15 and 25 degrees Celsius during winter. Here, the winter season starts around November, so warm clothes (blankets, quilts, woollens, etc.) can be carried accordingly.",
  "Whilst everything is available in India, students must try to get all that they would require during the initial few days. All the essentials can be availed from the University tuck shops as well as markets available around a range of 5 km from the University Campus.",
  "The electric standard in India works on 240 V. So, ensure that you have an adapter for your mobile or laptop adjustable to that in case you operate on a different voltage in your country. Also, the electric sockets are 2 or 3 pin, so ensure that you carry a converter if required."
];

const postArrivalGuidelines = [
  "Kalinga University is just a 15-minute drive from Raipur Airport. We arrange pickup for students once they land in Raipur. It is applicable for students who have shared their flight details with the International Counsellors (IC) beforehand.",
  "Free accommodation at the University guest house will be given for a maximum of 3 days from the arrival date till the student completes his/her admission procedure.",
  "The student will report to the International Counsellors along with all the required documents and can interact with the reporting officer for further processing.",
  "The International Counsellors will assist students in the following activities: Document Verification: The documents provided by the students will be checked and verified by our counsellors. Students will then fill out the admission form and submit the required documents after reading them carefully to get registered in the respective programmes. Campus Tour: A campus tour would be provided to the students, and they would also be introduced to the concerned higher authorities. Induction: An induction session would be provided to the students to make them familiar with the University. Hostel: Hostel room allocations and introducing students to the concerned hostel wardens would be taken care of. Introduction with Concerns: IC staff will introduce the student to the International Students Coordinator (ISC) for further assistance.",
  "The International Student Coordinator (ISC) will assist the student in the following activities: General Introduction: ISC will arrange an introduction of the student to the concerned faculty members and will also explain the academic culture. Student Visa Registration: ISC will guide and assist the student with the student visa registration process. All the international students except those from Nepal and Bhutan must get their student visa registered at the nearest FRRO/FRO within 14 days of arrival in India. FRRO Documentation: It is the prime responsibility of international students to visit the ISC department on time to complete the required FRRO documentation, so that no fine is imposed against him/her. Visa Extension: The ISC department will guide and assist students with visa extension. Others: ISC will help in solving any problems students encounter and will provide complete guidance and support."
];

const leaveBankSimGuidelines = [

  "The students need to submit an application to the International Student Coordinator Department before booking the travel ticket, and have to mention the proposed duration of the visit with a proper reason.",
  "Student should inform the ISC department in writing at least 7 days before their travel.",
  "Approval from the accounts department is mandatory.",
  "Approval from the University Management is mandatory. Further, the University will take approval from the parents/guardians of the students before approving leave.",
  "Approval for NOC from the local FRRO is mandatory before travel."

]

export default function VisaFroFrroGuidelines({
  viewAllHref = "#",
  title = "Guidelines and Policies",
  tabs = null,
  showModal = true,
  modalContent = null,
  backgroundClassName = "bg-[var(--card-gray)]"
}) {
  // Use provided tabs or fallback to default Visa content
  const activeTabs = tabs || [
    {
      id: "visa",
      title: "Guidelines For a Visa",
      content: (
        <>
          <h3 className="font-stix text-[var(--foreground)] hidden md:block">
            Guidelines For a Visa
          </h3>
          <ul className={`space-y-4 ${tabs ? '' : 'mt-5'}`}>
            {defaultVisaPoints.map((t, i) => <Bullet key={i}>{t}</Bullet>)}
          </ul>
        </>
      )
    },
    {
      id: "ext",
      title: "Guidelines For Visa Extension And FRO/FRRO",
      content: (
        <>
          <h3 className="font-stix text-2xl text-[var(--foreground)] hidden md:block">
            Guidelines For Visa Extension And FRO/FRRO
          </h3>
          <ul className={`space-y-4 ${tabs ? '' : 'mt-5'}`}>
            {defaultExtensionPoints.map((t, i) => <Bullet key={i}>{t}</Bullet>)}
          </ul>
        </>
      )
    },
    {
      id: "prearrival",
      title: "Pre-Arrival Guidelines",
      content: (
        <>
          <h3 className="font-stix text-2xl text-[var(--foreground)] hidden md:block">
            Pre-Arrival Guidelines
          </h3>
          <ul className={`space-y-4 ${tabs ? '' : 'mt-5'}`}>
            {preArrivalGuidelines.map((t, i) => <Bullet key={i}>{t}</Bullet>)}
          </ul>
        </>
      )
    },
    {
      id: "postarrival",
      title: "Post-Arrival Guidelines",
      content: (
        <>
          <h3 className="font-stix text-2xl text-[var(--foreground)] hidden md:block">
            Post-Arrival Guidelines
          </h3>
          <ul className={`space-y-4 ${tabs ? '' : 'mt-5'}`}>
            {postArrivalGuidelines.map((t, i) => <Bullet key={i}>{t}</Bullet>)}
          </ul>
        </>
      )
    },
    {
      id: "leavebank",
      title: "Leave / Sim / Bank A/C Policies",
      content: (
        <>
          <h3 className="font-stix text-2xl text-[var(--foreground)] hidden md:block">
            Leave / Sim / Bank A/C Policies
          </h3>
          <ul className={`space-y-4 ${tabs ? '' : 'mt-5'}`}>
            {leaveBankSimGuidelines.map((t, i) => <Bullet key={i}>{t}</Bullet>)}
          </ul>
        </>
      )
    }
  ];

  const [openAccordion, setOpenAccordion] = useState(activeTabs[0]?.id || null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleAccordion = (value) => {
    setOpenAccordion(openAccordion === value ? null : value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="w-full py-16">
      <div className="mx-auto w-full container px-4">
        <SectionHeading
          title={title}
          titleClassName="text-center text-[var(--foreground)]"
        />

        <div className={`mt-8 rounded-2xl p-5 md:p-7 ${backgroundClassName}`}>
          {/* Mobile Accordion */}
          <div className="block md:hidden space-y-4">
            {activeTabs.map((tab) => (
              <div key={tab.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleAccordion(tab.id)}
                  className={`w-full flex items-center justify-between p-4 transition-colors text-left ${openAccordion === tab.id
                    ? "bg-[var(--button-red)] text-white"
                    : "bg-white text-[var(--foreground)] hover:bg-gray-50"
                    }`}
                >
                  <h3 className="font-stix text-base font-semibold">
                    {tab.title}
                  </h3>
                  <svg
                    className={`w-5 h-5 transition-transform ${openAccordion === tab.id ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openAccordion === tab.id && (
                  <div className="p-4 bg-white">
                    {tab.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:block">
            <Tabs defaultValue={activeTabs[0]?.id}>
              <TabsList className="gap-0">
                {activeTabs.map((tab) => (
                  <TabsTrigger key={tab.id} value={tab.id}>{tab.title}</TabsTrigger>
                ))}
              </TabsList>

              {activeTabs.map((tab) => (
                <TabsContent key={tab.id} value={tab.id} className="pt-7">
                  {tab.content}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>

        {/* {showModal && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 font-semibold text-[var(--foreground)] hover:text-[var(--button-red)] transition-colors cursor-pointer"
            >
              <span>View all Guidelines</span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-[var(--button-red)] text-white">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                  <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z" />
                </svg>
              </span>
            </button>
          </div>
        )} */}
      </div>

      {/* Modal - only render if showModal is true and open */}
      {showModal && isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          onMouseDown={closeModal}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          <div
            className="relative w-full max-w-4xl rounded-2xl bg-white p-6 md:p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <h2 className="font-stix text-2xl md:text-3xl text-[var(--button-red)]">
                {modalContent ? "Additional Details" : "Pre-Arrival & Post-Arrival Guidelines"}
              </h2>

              <button
                type="button"
                onClick={closeModal}
                className="rounded-full border border-black/10 px-3 py-1 text-sm hover:bg-black/5 flex-shrink-0"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {modalContent ? modalContent : (
              <div className="space-y-8">
                {/* Pre-Arrival Guidelines */}
                <div>
                  <h3 className="font-stix text-xl md:text-2xl text-[var(--foreground)] mb-4">
                    Pre-Arrival Guidelines
                  </h3>
                  <p className="text-sm text-[var(--light-text-gray)] mb-4 leading-relaxed">
                    Students are advised to take care of the following points before leaving their home country:
                  </p>
                  <ul className="space-y-4">
                    {preArrivalGuidelines.map((guideline, index) => (
                      <Bullet key={index}>{guideline}</Bullet>
                    ))}
                  </ul>
                </div>

                {/* Post-Arrival Guidelines */}
                <div>
                  <h3 className="font-stix text-xl md:text-2xl text-[var(--foreground)] mb-4">
                    Post-Arrival Guidelines
                  </h3>
                  <p className="text-sm text-[var(--light-text-gray)] mb-4 leading-relaxed">
                    Students need to take care of the following points after they arrive in the country and upon joining the University:
                  </p>
                  <ul className="space-y-4">
                    {postArrivalGuidelines.map((guideline, index) => (
                      <Bullet key={index}>{guideline}</Bullet>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="rounded-lg bg-[var(--button-red)] px-5 py-2 text-sm font-medium text-white hover:bg-[var(--button-red)]/90 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
