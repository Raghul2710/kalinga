"use client";

import React, { useState } from 'react';
import MainIntro from '../components/about/main_intro';
import ImageListItem from '../components/ccrc/imagelistitem';
import FAQ from '../components/general/faq';
import ProgramsOffered from '../components/department/programs-offered';
import OurPrograms from '../components/admissions/our_programs';
import MentorIntro from '../components/department/dept_head_intro';
import QuickLinks from '../components/general/quick_links';

const JournalOfLawAndAIPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const EditorialBoardModal = ({ isOpen, onClose, member }) => {
        if (!isOpen || !member) return null;
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[var(--dark-blue)] text-white">
                        <div className="flex flex-col">
                            <h2 className="text-xl md:text-2xl font-bold font-plus-jakarta-sans text-white">{member.shortName}</h2>
                            <p className="text-white/80 text-sm">{member.title}</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                    <div className="p-8 overflow-y-auto custom-scrollbar flex-1">
                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            {member.education && (
                                <div>
                                    <h3 className="text-sm font-bold text-[var(--button-red)] uppercase tracking-wider mb-1">Education</h3>
                                    <p className="text-gray-800 font-medium">{member.education}</p>
                                </div>
                            )}

                            {member.institution && (
                                <div>
                                    <h3 className="text-sm font-bold text-[var(--button-red)] uppercase tracking-wider mb-1">Institution</h3>
                                    <p className="text-gray-800">{member.institution}</p>
                                </div>
                            )}

                            {member.address && (
                                <div>
                                    <h3 className="text-sm font-bold text-[var(--button-red)] uppercase tracking-wider mb-1">Address</h3>
                                    <p className="text-gray-600 text-sm italic">{member.address}</p>
                                </div>
                            )}

                            {member.email && (
                                <div>
                                    <h3 className="text-sm font-bold text-[var(--button-red)] uppercase tracking-wider mb-1">Contact Email</h3>
                                    <a href={`mailto:${member.email}`} className="text-[var(--button-red)] hover:underline font-medium break-all">
                                        {member.email}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="p-6 border-t border-gray-100 flex justify-end">
                        <button onClick={onClose} className="px-6 py-2 bg-[var(--button-red)] text-white rounded-lg font-medium hover:bg-[var(--dark-orange-red)] transition-colors">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    };
    const aimsAndScopeItems = [
        { text: "To advance rigorous legal scholarship that responds to the societal, ethical, and technological challenges of the digital age." },
        { text: "To foster multidisciplinary dialogue among law, social sciences, humanities, computer science, and related fields." },
        { text: "To bridge theory and practice by offering insights relevant to scholars, practitioners, policymakers, and technologists." },
        { text: "Law, Technology, and Society" },
        { text: "Human Rights, Social Justice, and Digital Rights" },
        { text: "Environmental Law, Sustainability, and Emerging Technologies" },
        { text: "Economic, Corporate, and AI-Driven Governance" },
        { text: "Health Law, Bioethics, and AI in Healthcare" },
        { text: "International Relations, Global Governance, and Algorithmic Regulation" },
        { text: "Criminal Justice, Penal Reform, and Legal Automation" },
        { text: "Protection of Cultural Heritage and Intellectual Property in the Digital Age" },
        { text: "Family Law, Social Change, and Technology's Impact" },
        { text: "Legal Education, Professional Ethics, and the Challenges of AI" },
    ];

    const journalQuickLinks = [
        {
            id: 1,
            title: "Long Articles/Research Papers",
            description: "7000 to 9000 words, inclusive of footnotes.",
            icon: "https://cdn.kalingauniversity.ac.in/icons/Extensive+Research+Facilities.svg",
            href: "#"
        },
        {
            id: 2,
            title: "Short Articles/Short Notes",
            description: "4000 to 5000 words, inclusive of footnotes.",
            icon: "https://cdn.kalingauniversity.ac.in/kif/Entrepreneurial+Thinking.svg",
            href: "#"
        },
        {
            id: 3,
            title: "Book Reviews",
            description: "2000-3000 words, excluding footnotes.",
            icon: "https://cdn.kalingauniversity.ac.in/academics/icons/teachings.svg",
            href: "#"
        },
        {
            id: 4,
            title: "Case Comments",
            description: "1,500 and 2,500 words, excluding footnotes.",
            icon: "https://cdn.kalingauniversity.ac.in/icons/facility-management.svg",
            href: "#"
        },
    ];

    const consolidatedFAQItems = [
        {
            id: 1,
            question: "Format and Citation Guidelines",
            answer: `
                <p><strong>File Format:</strong> Please submit your manuscript in a Microsoft Word-compatible format (.doc or .docx is preferred).</p>
                <p><strong>Font Specifications:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Main Text:</strong> Use Times New Roman, 12-point font.</li>
                    <li><strong>Main Title:</strong> Should be centered, in full capitals, bold, and 14-point font.</li>
                    <li><strong>Below main title:</strong> mention the name of the author and co-author along with designation and institution, Capitalize each word, bold, and 12-point font.</li>
                    <li><strong>Sub-Titles:</strong> Should be bold, in sentence case, and 12-point font and aligned left</li>
                    <li><strong>Footnotes:</strong> Should be in Times New Roman, 10-point font.</li>
                    <li><strong>Citation Style:</strong> All citations must adhere to the OSCOLA Uniform Style of Citation (4th edition).</li>
                    <li><strong>Plagiarism:</strong> Ensure that the similarity index is below 10%.</li>
                </ul>
            `
        },
        {
            id: 2,
            question: "Submission Procedure",
            answer: `
                <p><strong>Submission Format:</strong> Submit your manuscript at <a href="mailto:legal.writing@kalingauniversity.ac.in" class="text-[var(--button-red)] hover:underline">legal.writing@kalingauniversity.ac.in</a></p>
                <p><strong>File Naming:</strong> The file name should include the Name of the Author(s) followed by the Title of the Submission.</p>
                <p><strong>Google Form Links:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>For PG Students (Kalinga University): <a href="https://forms.gle/Rj1fbKFP58EJgX627" target="_blank" class="text-[var(--button-red)] hover:underline">https://forms.gle/Rj1fbKFP58EJgX627</a></li>
                    <li>For UG students (Kalinga University): <a href="https://forms.gle/N77FPt187xKoKrYWA" target="_blank" class="text-[var(--button-red)] hover:underline">https://forms.gle/N77FPt187xKoKrYWA</a></li>
                    <li>For Others: <a href="https://forms.gle/8TWD7SKB8ic7R5Js7" target="_blank" class="text-[var(--button-red)] hover:underline">https://forms.gle/8TWD7SKB8ic7R5Js7</a></li>
                </ul>
                <p><strong>Paper Processing and Publication charges:</strong> 1500 INR</p>
            `
        },
        {
            id: 3,
            question: "Publication Policy",
            answer: `
                <p><strong>Originality and Exclusivity:</strong> Submissions must be the original work of the author(s) and must not have been published elsewhere. Any submission found to contain plagiarized content or facing copyright issues will be promptly rejected.</p>
                <p><strong>Copyright Assignment:</strong> By submitting their work to the Kalinga Journal of Law and Interdisciplinary Studies, the author(s) agree to transfer exclusive copyright to Kalinga University. The university will have the right to publish and reproduce the submission, in whole or in part, in any manner it deems appropriate, with proper acknowledgment to the author(s), subject to the doctrine of fair use as outlined in the Copyright Act.</p>
                <p><strong>Editorial Rights:</strong> The editors retain the right to make necessary edits to submissions, in whole or in part, for publication purposes without seeking further permission from or providing additional notice to the author(s).</p>
                <p><strong>Peer review policy:</strong> Submissions that pass the initial screening will undergo a double-blind peer review process in which the identity of both the reviewer and author are always concealed from both parties. The final selection for publication will be based on the outcomes of this review procedure.</p>
            `
        },
        {
            id: 4,
            question: "Call for Papers- Volume I, Issue 2",
            answer: `
                <p>The Journal of Law and Artificial Intelligence invites submissions for Volume I, Issue 2 on the themes:</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <p class="font-bold underline mb-2">LAW AND SOCIETY: NAVIGATING INTERDISCIPLINARY PERSPECTIVES</p>
                        <p class="font-semibold mb-1 italic">Sub-themes:</p>
                        <ul class="list-disc pl-5 space-y-1 text-sm">
                            <li>Law and Technology</li>
                            <li>Human Rights and Social Justice</li>
                            <li>Environmental Law and Sustainability</li>
                            <li>Economic and Corporate Law</li>
                            <li>Health Law and Bioethics</li>
                            <li>International Relations and Global Governance</li>
                            <li>Criminal Justice and Penal Reform</li>
                            <li>Protection of Cultural Heritage and Intellectual Property rights in the Digital age</li>
                            <li>Family Law and Social Change</li>
                            <li>Legal Education and Professional Ethics</li>
                        </ul>
                    </div>
                    <div>
                        <p class="font-bold underline mb-2">AI AND THE FUTURE OF RIGHTS, REGULATION, AND RESPONSIBILITY</p>
                        <p class="font-semibold mb-1 italic">Sub-themes:</p>
                        <ul class="list-disc pl-5 space-y-1 text-sm">
                            <li>Data Privacy and Protection in the Age of AI</li>
                            <li>Algorithmic Bias and Discrimination</li>
                            <li>Accountability and Liability for AI-Driven Decisions</li>
                            <li>AI in Criminal Justice</li>
                            <li>Regulating Autonomous Systems: Vehicles, Weapons, and Beyond</li>
                            <li>Ethical Design and Human Oversight in AI Development</li>
                            <li>AI Computing & Data Infrastructure</li>
                            <li>Corporate Responsibility and AI Governance in the Private Sector</li>
                            <li>Global Approaches to AI Regulation</li>
                        </ul>
                    </div>
                </div>
                <p class="mt-4">Note: The above sub-themes are only illustrative. The Journal of Law and Artificial Intelligence would welcome papers on other topics related to the main theme.</p>
            `
        }
    ];

    const archivesData = [
        {
            id: 1,
            shortName: "Frontmatter",
            title: "Vol. 1, Issue 1 | January 2025",
            duration: "Page range: i-iv",
            level: "VOL 1",
            slug: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/departments/journal-of-law-and-artificial-intelligence/Front+matter.pdf"
        },
        {
            id: 2,
            shortName: "Comparative Analysis Of Remand Provisions Under The Crpc And The Bnss",
            title: "Dr. Tauheed Alam, Prof. (Dr.) Afkar Ahmad",
            duration: "Page range: 1-27",
            level: "ARCHIVE",
            slug: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/departments/journal-of-law-and-artificial-intelligence/1.+Afkar+ahmed.pdf"
        },
        {
            id: 3,
            shortName: "From Vernacular to Spectacular Politics",
            title: "Debasis Poddar",
            duration: "Page range: 28-46",
            level: "ARCHIVE",
            slug: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/departments/journal-of-law-and-artificial-intelligence/2.+Debasis+Poddar.pdf"
        },
        {
            id: 4,
            shortName: "The Admissibility and Authentication of Electronic Evidence",
            title: "Krishnaja Olappamanna, Dr. Aneesh V Pillai, Dr. Sanjith S",
            duration: "Page range: 47-66",
            level: "ARCHIVE",
            slug: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/departments/journal-of-law-and-artificial-intelligence/3.+Dr.+Aneesh+Pillai.pdf"
        },
        {
            id: 5,
            shortName: "Rendezvous of Law and Interdisciplinary Research",
            title: "Dr. Kaumudhi Challa",
            duration: "Page range: 67-77",
            level: "ARCHIVE",
            slug: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/departments/journal-of-law-and-artificial-intelligence/4.+Dr.+Kaumudhi+Challa.pdf"
        },
        {
            id: 6,
            shortName: "From Black Box Paradox to Open Ledger",
            title: "Mr. Pankaj Chhuttani",
            duration: "Page range: 78-90",
            level: "ARCHIVE",
            slug: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/departments/journal-of-law-and-artificial-intelligence/5.+Mr.+Pankaj+Chhuttani.pdf"
        }
    ];

    const editorialBoardData = [
        {
            id: 1,
            shortName: "Prof. (Dr.) Azim Khan Pathan",
            title: "Editor-in-chief",
            specialization: "Faculty of Law, Kalinga University",
            education: "LL.B., LLM and PhD",
            institution: "Dean, Faculty of Law, Kalinga University",
            address: "Near Mantralaya, Kotni, Atal Nagar-Nava Raipur, Chhattisgarh 492101",
            email: "prof.azimkhan@kalingauniversity.ac.in",
            type: "BOARD",
            coursePageUrl: "https://kalingauniversity.ac.in/Faculty-of-Law/Faculty-Profile.php",
            exploreLinkText: "View Profile",
            hideScholarshipLink: true,
            hideDuration: true
        },
        {
            id: 2,
            shortName: "Prof. (Dr.) Manoj Kumar Sinha",
            title: "Editor",
            specialization: "Vice Chancellor, Dharmashastra National Law University",
            education: "Doctorate in International Law from JNU, LL.M. from University of Nottingham, LL.B. from University of Delhi",
            institution: "Vice Chancellor, Dharmashastra National Law University",
            address: "South Civil Lines, Pachpedi, Lekha Nagar, Jabalpur, Madhya Pradesh 482001, India",
            email: "vc@mpdnlu.ac.in",
            type: "BOARD",
            coursePageUrl: "https://www.nujs.edu/faculty/dr-manoj-kumar-sinha/",
            exploreLinkText: "View Profile",
            hideScholarshipLink: true,
            hideDuration: true
        },
        {
            id: 3,
            shortName: "Prof. (Dr.) V.K. Ahuja",
            title: "Editor",
            specialization: "Director, Indian Law Institute",
            education: "Ph.D. and LL.M. Degrees from University of Delhi and M.Phil. Degree from JNU, New Delhi",
            institution: "Director, Indian Law Institute",
            address: "Bhagwan Das Rd, opp. Supreme Court of India, Government Officers Colony, India Gate, New Delhi, Delhi 110001, India",
            email: "director@ili.ac.in",
            type: "BOARD",
            coursePageUrl: "http://www.ili.ac.in/details.php?catid=18",
            exploreLinkText: "View Profile",
            hideScholarshipLink: true,
            hideDuration: true
        },
        {
            id: 4,
            shortName: "Prof. (Dr.) Tabrez Ahmad",
            title: "Editor",
            specialization: "Founding Dean & Professor, Department of Law, MANUU",
            education: "Ph.D. (Cyberlaw & IPR), Founding Dean & Professor, Department of Law, MANUU",
            institution: "Maulana Azad National Urdu University (MANUU)",
            address: "MANUU Gowdown, Weaker Section Colony, Khajaguda, Hyderabad, Telangana 500032, India",
            email: "dean.law@manuu.edu.in",
            type: "BOARD",
            coursePageUrl: "https://manuu.edu.in/University/Law/People/1108",
            exploreLinkText: "View Profile",
            hideScholarshipLink: true,
            hideDuration: true
        },
        {
            id: 5,
            shortName: "Prof. (Dr.) S. G. Sreejith",
            title: "Editor",
            specialization: "Professor & Executive Dean, Jindal Global Law School",
            education: "LL.B.; M.B.L. (University of Kerala), M.Phil. (JNU), LL.D. (University of Lapland)",
            institution: "Professor & Executive Dean, Jindal Global Law School",
            address: "Sonipat Narela Road, Near Jagdishpur Village, Sonipat, Haryana 131001, India",
            email: "sgsreejith@jgu.edu.in",
            type: "BOARD",
            coursePageUrl: "https://jgu.edu.in/jgls/faculty/prof-dr-s-g-sreejith",
            exploreLinkText: "View Profile",
            hideScholarshipLink: true,
            hideDuration: true
        },
        {
            id: 6,
            shortName: "Ms. Ekta Chandrakar",
            title: "Editor",
            specialization: "Assistant Professor, Faculty of Law, Kalinga University",
            education: "BA. LL.B, LLM, Pursuing PhD (MNLU, Nagpur)",
            institution: "Assistant Professor, Faculty of Law, Kalinga University",
            address: "Near Mantralaya, Kotni, Atal Nagar-Nava Raipur, Chhattisgarh 492101",
            email: "ekta.chandrakar@kalingauniversity.ac.in",
            type: "BOARD",
            coursePageUrl: "https://kalingauniversity.ac.in/Faculty-of-Law/Faculty-Profile.php",
            exploreLinkText: "View Profile",
            hideScholarshipLink: true,
            hideDuration: true
        },
        {
            id: 7,
            shortName: "Ms. Meenakshi Rani Agarwal",
            title: "Editor",
            specialization: "Assistant Professor, Faculty of Law, Kalinga University",
            education: "BA. LL.B, LLM",
            institution: "Assistant Professor, Faculty of Law, Kalinga University",
            address: "Near Mantralaya, Kotni, Atal Nagar-Nava Raipur, Chhattisgarh 492101",
            email: "meenakshi.agarwal@kalingauniversity.ac.in",
            type: "BOARD",
            coursePageUrl: "https://kalingauniversity.ac.in/Faculty-of-Law/Faculty-Profile.php",
            exploreLinkText: "View Profile",
            hideScholarshipLink: true,
            hideDuration: true
        }
    ];

    const contactInfo = {
        title: "Editorial Board Office",
        subtitle: "Contact Us",
        department: "For Any Query and Clarifications, Contact Us At:",
        quote: "<strong>Address:</strong> Editor-in-chief, Kalinga University, Near Mantralaya, Kotni, Atal Nagar-Naya Raipur, Chhattisgarh 492101",
        contactInfo: {
            email: "jlai@jlai@kalingauniversity.ac.in",
            phone: "+917024116971"
        },
        imageSrc: "https://cdn.kalingauniversity.ac.in/laboratories/laboratories-mainintro.webp",
        showQuotes: false
    };

    return (
        <div className="pt-[100px] md:pt-0">
            <MainIntro
                title="Journal of Law and Artificial Intelligence"
                subtitle="Faculty of Law"
                description={[
                    "The Journal of Law and Artificial Intelligence is a pioneering, peer-reviewed, bi-annual academic publication dedicated to examining the evolving relationship between law and artificial intelligence. At the forefront of contemporary scholarship, JLAI serves as a premier platform for critical inquiry, innovative research, and interdisciplinary dialogue at the intersection of legal studies and emerging technologies.",
                    "In a rapidly transforming digital world, artificial intelligence is reshaping legal systems, regulatory frameworks, and notions of justice. JLAI seeks to explore these transformative impacts by fostering an inclusive and intellectually vibrant space where scholars, practitioners, technologists, and policymakers can converge. Our mission is to advance legal scholarship that not only engages with the implications of AI and machine learning but also contextualizes their role within broader societal, ethical, and economic dimensions.",
                    "The journal welcomes submissions that offer original research, critical analysis, case studies, and comprehensive reviews on a wide array of topics, including but not limited to AI regulation, algorithmic governance, digital rights, legal automation, ethics in AI, and the future of legal practice in the age of intelligent systems.",
                    "By embracing an interdisciplinary approach, JLAI aims to bridge traditional legal paradigms with insights from computer science, philosophy, economics, sociology, and data science. We believe that understanding the legal challenges posed by AI technologies requires not only legal expertise but also the perspectives of adjacent disciplines.",
                    "We invite scholars and professionals to contribute to this timely and vital discourse. Join us in shaping the future of legal thought and innovation through the lens of artificial intelligence.",
                    "Frequency: Bi-Annual | Medium: Online Only | Subject focus: Multidisciplinary Subject | Language: English only"
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/research/research-main-content.webp"
                imageAlt="Journal of Law and Artificial Intelligence"
                showKnowMore={true}
                knowMoreLabel="Editorial Board"
                knowMoreHref="#"
                onKnowMore={(e) => {
                    e.preventDefault();
                    setSelectedMember(editorialBoardData[0]); // Default to Editor-in-chief
                    setIsModalOpen(true);
                }}
                initialVisibleParagraphs={2}
            />

            <ImageListItem
                items={aimsAndScopeItems}
                imageSrc="https://cdn.kalingauniversity.ac.in/campus-life/whywork.webp"
                title="Aims and Scope"
                description="Starting year of the Publication: 2025. The Journal is dedicated to examining the evolving intersections of law, technology, and society across the globe. The Journal of Law and Artificial Intelligence is a peer-reviewed, bi-annual academic publication dedicated to examining the evolving intersections of law, technology, and society. It provides a dynamic platform for multidisciplinary scholarship that critically engages with how law and artificial intelligence are reshaping legal systems, rights, responsibilities, and governance across the globe."
                buttonText="Read More"
                className="!bg-white"
                textClassName="text-gray-700"
                titleTextColor="text-[var(--foreground)]"
                headingClassName=""
            />

            <FAQ
                title="Format, Citation & Policy"
                subtitle="Guidelines"
                items={consolidatedFAQItems}
            />

            <QuickLinks
                title="Journal Policies & Information"
                description="Explore the standards and processes that govern the Journal of Law and Artificial Intelligence."
                links={journalQuickLinks}
                backgroundColor="bg-[var(--dark-blue)]"
                textColorClassName="text-white"
                titleClassName="text-white"
            />

            <ProgramsOffered
                title="Archives"
                description="Explore past volumes and issues of the Journal of Law and Artificial Intelligence."
                programs={archivesData}
                exploreLabel="Download PDF"
                searchPlaceholder="Search Archives...."
                hideSearch={false}
                backgroundImage="https://cdn.kalingauniversity.ac.in/international-students/student-cell.webp"
                backgroundColor="bg-white"
                textColor="text-gray-700"
                titleColor="text-[var(--foreground)]"
            />

            <OurPrograms
                customPrograms={editorialBoardData.map(p => ({ ...p, hideApplyNow: true }))}
                customTitle="Editorial Board Members"
                customSubtitle="Our distinguished members"
                hideSearchFilter={true}
                backgroundColor="bg-white"
                onExploreProgramClick={(program) => {
                    setSelectedMember(program);
                    setIsModalOpen(true);
                }}
                onCheckEligibility={(program) => {
                    setSelectedMember(program);
                    setIsModalOpen(true);
                }}
            />

            <MentorIntro {...contactInfo} />

            <EditorialBoardModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                member={selectedMember}
            />
        </div>
    );
};

export default JournalOfLawAndAIPage;
