"use client";

import React from 'react';
import MainIntro from '../components/about/main_intro';
import SectionHeading from '../components/general/SectionHeading';
import { AccordionItem } from '../components/general/accordion';
import ImageListItem from '../components/ccrc/imagelistitem';
import FAQ from '../components/general/faq';

const KUHackathon2027Page = () => {

    // Why Participate list
    const whyParticipateItems = [
        { id: 1, text: "Showcase your technical talent on a national-level platform" },
        { id: 2, text: "Apply your coding skills to solve real-world problems" },
        { id: 3, text: "Explore emerging technologies through hands-on building" },
        { id: 4, text: "Develop problem-solving and teamwork skills over 24 non-stop hours" },
        { id: 5, text: "Receive guidance from industry experts and mentors" },
        { id: 6, text: "Build software prototypes and innovative technology solutions" },
        { id: 7, text: "Win cash prizes worth INR 42,500/- across winning and consolation positions" }
    ];

    // Domains (select any one)
    const domainItems = [
        { id: 1, text: "Smart Automation" },
        { id: 2, text: "Smart City" },
        { id: 3, text: "Green Technology" },
        { id: 4, text: "Block Chain Technology" }
    ];

    // Rules and Regulations
    const rulesItems = [
        { id: 1, text: "A team can have a maximum of 2 students, excluding the mentor" },
        { id: 2, text: "The mentor can be a faculty member from your respective university/college" },
        { id: 3, text: "Mentors can guide the participants during the hackathon" },
        { id: 4, text: "The mentor is optional" },
        { id: 5, text: "Mentors will not be assigned by the organising committee" },
        { id: 6, text: "Food and Accommodation Charges of INR 500/- for the mentor" }
    ];

    // Presentation requirements (accordion groups)
    const presentationGroupsLeft = [
        {
            title: "Team & Domain Details",
            items: [
                "Details of Team Leader and Members, including College/University Name, Branch & Semester, E-mail Address and Contact Number",
                "Name of Domain",
                "Mentor Details"
            ]
        },
        {
            title: "Problem Definition",
            items: [
                "Problem Statement",
                "Abstract",
                "Objectives"
            ]
        }
    ];

    const presentationGroupsRight = [
        {
            title: "Proposed Solution",
            items: [
                "Scope",
                "Innovative Solution for the Problem Statement",
                "Prototype"
            ]
        },
        {
            title: "Wrap Up",
            items: [
                "Conclusion"
            ]
        }
    ];

    // Deadlines, prizes and fees (table sections)
    const registrationTableSections = [
        {
            id: "important-dates",
            title: "Deadlines",
            columns: [
                { key: "activity", label: "Activity", width: "flex-1" },
                { key: "date", label: "Date", width: "w-56" }
            ],
            data: [
                { activity: "Submission of PPT along with registration fee of INR 100/- per Member (2 Members per Team)", date: "30th November 2026" },
                { activity: "Announcement of shortlisted teams for the Final Round", date: "10th December 2026" },
                { activity: "Hackathon Dates", date: "18th & 19th February 2027" }
            ]
        },
        {
            id: "prizes",
            title: "Prizes",
            columns: [
                { key: "position", label: "Position", width: "flex-1" },
                { key: "prize", label: "Prize", width: "w-56" }
            ],
            data: [
                { position: "Position 1", prize: "INR 15,000/-" },
                { position: "Position 2", prize: "INR 10,000/-" },
                { position: "Position 3", prize: "INR 7,500/-" },
                { position: "Consolation Prize (2 Teams)", prize: "INR 5,000/-" }
            ]
        },
        {
            id: "registration-fees",
            title: "Registration Fees",
            columns: [
                { key: "category", label: "Category", width: "flex-1" },
                { key: "fee", label: "Fee", width: "w-56" }
            ],
            data: [
                { category: "For the First Round (Max 2 Members per Team)", fee: "INR 100/- per Member" },
                { category: "After Selection (Max 2 Members per Team)", fee: "INR 1,000/- per Member" },
                { category: "On-the-Spot Registration (Each Category, Additional)", fee: "INR 200/-" }
            ]
        }
    ];

    // Notes, important points and registration steps
    const registrationInfoItems = [
        {
            id: "fee-notes",
            question: "Note",
            answer: [
                "50% Concession to participants from Kalinga University and Colleges having an MoU with Kalinga University, Naya Raipur.",
                "Accommodation will be provided at the Participants' request. (Charges Applicable)",
                "Registration Fees include a Conference Kit, High Tea, Lunch and Snacks for both days."
            ]
        },
        {
            id: "important-points",
            question: "Important Points",
            answer: [
                "Teams shortlisted for the final round must pay a fee of INR 1,000/- per Member (2 Members per Team) before the event for food and accommodation on campus. They shall have to give presentations in the Offline/Online mode on 18th and 19th February 2027.",
                "Accommodation and meals will be provided in the University Hostels.",
                "No travel allowance will be provided."
            ]
        },
        {
            id: "registration-steps",
            question: "Steps for Registration",
            answer: `
                <p class="font-semibold mb-2">Step 1: Participants have to make payment on the given bank details:</p>
                <ul class="list-disc list-inside space-y-1 mb-4">
                    <li>Account Name: Kalinga University Faculty of Information Technology</li>
                    <li>Bank Name: Punjab National Bank</li>
                    <li>A/c No.: 1744100100003519</li>
                    <li>IFSC Code No.: PUNB0174410</li>
                </ul>
                <p class="font-semibold mb-2">Step 2: Take a screenshot of the payment &amp; send it to <a class="text-[var(--button-red)] underline" href="mailto:csit@kalingauniversity.ac.in">csit@kalingauniversity.ac.in</a></p>
                <p class="font-semibold">Step 3: Fill out the registration form with all the necessary information.</p>`
        }
    ];

    // Contacts (card-display)
    const contactSections = [
        {
            id: "convenor",
            title: "Convenor",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" },
                { key: "contact", label: "Contact" }
            ],
            data: [
                { name: "Dr. Anupa Sinha", designation: "HOD, Department of CS & Faculty of IT", contact: "+91-7697143480" }
            ]
        },
        {
            id: "program-coordinator",
            title: "Program Coordinator",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" },
                { key: "contact", label: "Contact" }
            ],
            data: [
                { name: "Dr. Ayaz Ahmad Faridi", designation: "Assistant Professor, Department of CS & Faculty of IT", contact: "+91-9755742726" }
            ]
        }
    ];

    return (
        <>
            {/* Hero */}
            <section className="py-12 md:py-16 text-center bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <h5 className="font-bold text-[var(--button-red)] titlecase tracking-[0.2em] text-sm md:text-base mb-2">
                        FACULTY OF INFORMATION TECHNOLOGY &amp; DEPARTMENT OF COMPUTER SCIENCE
                    </h5>
                    <p className="font-bold text-gray-400 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-8">
                        ORGANISES
                    </p>
                    <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-4">
                        KU Hackathon 2027
                    </h1>
                    <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-800 leading-tight mb-6 titlecase max-w-4xl mx-auto">
                        A 24-Hour Non-Stop Innovation Challenge
                    </h2>
                    <p className="font-stix text-lg md:text-2xl text-[var(--button-red)] italic max-w-3xl mx-auto mb-10">
                        “Code. Build. Solve. In 24 Hours.”
                    </p>

                    {/* Event quick facts */}
                    <div className="flex flex-wrap justify-center items-stretch gap-4 md:gap-5 max-w-5xl mx-auto">
                        <div className="flex-1 min-w-[150px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                            <p className="text-2xl mb-1">🗓️</p>
                            <p className="font-semibold text-[var(--foreground)]">18th &amp; 19th February 2027</p>
                        </div>
                        <div className="flex-1 min-w-[150px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                            <p className="text-2xl mb-1">🕓</p>
                            <p className="font-semibold text-[var(--foreground)]">11:00 A.M. to 11:00 A.M. (24 Hours)</p>
                        </div>
                        <div className="flex-1 min-w-[150px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                            <p className="text-2xl mb-1">📍</p>
                            <p className="font-semibold text-[var(--foreground)]">Campus, Kalinga University</p>
                        </div>
                        <div className="flex-1 min-w-[150px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                            <p className="text-2xl mb-1">💻</p>
                            <p className="font-semibold text-[var(--foreground)]">Mode: Hybrid</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About the hackathon */}
            <MainIntro
                title="A National-Level Platform To Turn Ideas Into Working Prototypes"
                subtitle=""
                description={[
                    "The Department of Computer Science and the Faculty of Information Technology are organizing Hackathon-2027, a 24-hour non-stop innovation challenge at Kalinga University starting at 11:00 A.M. on the 18th February and ending at 11:00 A.M. on the 19th February 2027.",
                    "Students from schools across India are encouraged to bring their ideas to a national-level platform and work individually or in teams to solve real-world problems using technology and develop software prototypes and innovative technology solutions. It is a competitive platform for students to showcase their technical talent, apply their coding skills, explore emerging technologies, develop problem-solving skills, and receive guidance from industry experts."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/course/student-computer.webp"
                imageAlt="KU Hackathon 2027 - 24-hour innovation challenge"
            />

            {/* Why Participate */}
            <ImageListItem
                items={whyParticipateItems}
                imageSrc="https://cdn.kalingauniversity.ac.in/gallery/UG/Bachelor-of-Computer-Applications-in-Artificial-Intelligence-and-Machine-Learning.jpg"
                title="Why Participate?"
                subtitle=""
                description=""
            />

            {/* Domains */}
            <ImageListItem
                items={domainItems}
                imageSrc="https://cdn.kalingauniversity.ac.in/departments/programs-offered.webp"
                title="Domains"
                subtitle=""
                description="Select any one domain:"
                reverseLayout={true}
            />

            {/* Presentation */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Presentation"
                        subtitle="It should be available in the form of a PPT, which includes:"
                        titleClassName="text-center mb-3"
                        subtitleClassName="text-center mb-12"
                    />
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            {/* Left Column */}
                            <div className="flex-1 flex flex-col gap-4 w-full">
                                {presentationGroupsLeft.map((group, idx) => (
                                    <AccordionItem
                                        key={idx}
                                        title={group.title}
                                        titleClassName="font-stix text-[18px] md:text-[20px] leading-tight text-[var(--button-red)]"
                                        bgClassName="bg-[var(--card-sandal)] p-4 md:p-5"
                                    >
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700 font-plus-jakarta-sans py-4 text-sm">
                                            {group.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </AccordionItem>
                                ))}
                            </div>

                            {/* Right Column */}
                            <div className="flex-1 flex flex-col gap-4 w-full">
                                {presentationGroupsRight.map((group, idx) => (
                                    <AccordionItem
                                        key={idx}
                                        title={group.title}
                                        titleClassName="font-stix text-[18px] md:text-[20px] leading-tight text-[var(--button-red)]"
                                        bgClassName="bg-[var(--card-sandal)] p-4 md:p-5"
                                    >
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700 font-plus-jakarta-sans py-4 text-sm">
                                            {group.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </AccordionItem>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rules and Regulations */}
            <ImageListItem
                items={rulesItems}
                imageSrc="https://cdn.kalingauniversity.ac.in/campus-life/whywork.webp"
                title="Rules and Regulations"
                subtitle=""
                description=""
            />

            {/* Deadlines, Prizes, Fees & Registration */}
            <FAQ
                id="registration-details"
                title="Deadlines, Prizes & Registration"
                subtitle="Dates, Prizes & Fees"
                variant="table-display"
                tableSections={registrationTableSections}
                items={registrationInfoItems}
                pyClassName="py-12"
            />

            {/* Contacts */}
            <FAQ
                id="hackathon-contacts"
                title="Contacts"
                subtitle="Reach Out To Us"
                variant="card-display"
                tableSections={contactSections}
                items={[]}
                pyClassName="py-8 md:py-12"
            />
        </>
    );
};

export default KUHackathon2027Page;
