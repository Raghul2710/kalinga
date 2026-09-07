"use client";

import React, { useState } from 'react';
import MainIntro from '../components/about/main_intro';
import ImageListItem from '../components/ccrc/imagelistitem';
import FAQ from '../components/general/faq';
import ProgramsOffered from '../components/department/programs-offered';
import OurPrograms from '../components/admissions/our_programs';
import MentorIntro from '../components/department/dept_head_intro';
import QuickLinks from '../components/general/quick_links';
import StandardFormatFAQ from '../components/general/standard-format-faq';
import PublicationCard from "../components/general/PublicationCard";
import SectionHeading from "../components/general/SectionHeading";
import { editorialBoardData } from './editorialBoardData';

const UnivistaJournalPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState(null);

    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    // Archives tabs: Volume 1 Issue 1 / Issue 2
    const [activeArchiveTab, setActiveArchiveTab] = useState("issue1");

    const handleExploreMember = (member) => {
        setSelectedMember(member);
        setIsProfileModalOpen(true);
    };

    const boardDataWithHandler = editorialBoardData.map(member => ({
        ...member,
        title: member.name,
        subtitle: member.designation,
        designation: null,
        department: member.email,
        onExplore: handleExploreMember
    }));

    const EditorialMemberModal = ({ isOpen, onClose, member }) => {
        if (!isOpen || !member) return null;
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose}>
                <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
                    onClick={(e) => e.stopPropagation()}>
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[var(--dark-blue)] text-white">
                        <div className="flex flex-col">
                            <h2 className="text-xl md:text-2xl font-bold font-plus-jakarta-sans text-white">{member.name}</h2>
                            <p className="text-white/80 text-sm">{member.designation}</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                    <div className="p-8 overflow-y-auto custom-scrollbar flex-1 flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/3 flex flex-col gap-4">
                            <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 bg-gray-50 flex items-center justify-center p-2">
                                <img src={member.img} alt={member.name} className="w-full max-h-64 object-contain rounded-lg" />
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-3 text-sm">
                                <div><strong className="text-[var(--dark-blue)]">Affiliation:</strong><br />{member.affiliation}</div>
                                <div><strong className="text-[var(--dark-blue)]">Email:</strong><br /><a href={`mailto:${member.email}`} className="text-[var(--button-red)] hover:underline break-all">{member.email}</a></div>
                                {member.scopus && member.scopus !== "NA" && <div><strong className="text-[var(--dark-blue)]">Scopus ID:</strong><br />{member.scopus}</div>}
                                {member.orcid && member.orcid !== "NA" && <div><strong className="text-[var(--dark-blue)]">ORCID:</strong><br />{member.orcid}</div>}
                                {member.irins && member.irins !== "NA" && <div><strong className="text-[var(--dark-blue)]">IRINS/Vidwan ID:</strong><br />{member.irins}</div>}
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h3 className="text-lg font-bold text-[var(--button-red)] mb-4 border-b border-gray-200 pb-2">Expertise & Biography</h3>
                            <div className="text-gray-700 leading-relaxed font-plus-jakarta-sans whitespace-pre-wrap">
                                {member.expertise}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const ThemeModal = ({ isOpen, onClose, theme }) => {
        if (!isOpen || !theme) return null;
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[var(--dark-blue)] text-white">
                        <div className="flex flex-col">
                            <h2 className="text-xl md:text-2xl font-bold font-plus-jakarta-sans text-white">{theme.shortName}</h2>
                            <p className="text-white/80 text-sm">{theme.title}</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                    <div className="p-8 overflow-y-auto custom-scrollbar flex-1">
                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            <div>
                                <h3 className="text-sm font-bold text-[var(--button-red)] uppercase tracking-wider mb-3">Sub-Themes</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-800">
                                    {theme.items && theme.items.map((item, index) => (
                                        <li key={index} className="leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            </div>
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
        { text: "Research Articles / Research Papers: Word Limit: 7,000 to 9,000 words, inclusive of footnotes. Submissions should present original, in-depth research with significant scholarly contribution." },
        { text: "Review Papers: Word Limit: 2,000 to 3,000 words, inclusive of footnote. Reviews should critically evaluate current literature and highlight developments or gaps in the field." },
        { text: "Case Studies: Word Limit: 1,500 to 2,500 words, excluding footnotes. Case studies should provide detailed analysis, practical insights, and implications for research or practice." },
        { text: "All submissions should follow academic standards for formatting, citations, and ethical research practices. Authors are encouraged to ensure originality, clarity, and relevance to multidisciplinary research." }
    ];

    const journalQuickLinks = [
        {
            id: 1,
            title: "Research Articles / Research Papers",
            description: "7,000 to 9,000 words, inclusive of footnotes.",
            icon: "https://cdn.kalingauniversity.ac.in/icons/Extensive+Research+Facilities.svg",
            href: "#"
        },
        {
            id: 2,
            title: "Review Papers",
            description: "2,000 to 3,000 words, inclusive of footnotes.",
            icon: "https://cdn.kalingauniversity.ac.in/kif/Entrepreneurial+Thinking.svg",
            href: "#"
        },
        {
            id: 3,
            title: "Case Studies",
            description: "1,500 to 2,500 words, excluding footnotes.",
            icon: "https://cdn.kalingauniversity.ac.in/academics/icons/teachings.svg",
            href: "#"
        }
    ];

    const consolidatedFAQItems = [
        {
            id: 1,
            question: "Format and Citation Guidelines",
            answer: `
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>File Format:</strong> Submit your manuscript in Microsoft Word format (.doc or .docx preferred).</li>
                    <li><strong>Main Title:</strong> Centered, bold, full capitals, 14-point font, Times New Roman.</li>
                    <li><strong>Author Details:</strong> Below the title, include author(s) name(s), designation(s), and institution(s). Capitalize Each Word, bold, 12-point Times New Roman, centered.</li>
                    <li><strong>Main Text:</strong> Times New Roman, 12-point font, 1.5 line spacing, justified alignment.</li>
                    <li><strong>Subtitles:</strong> Bold, sentence case, 12-point font, Times New Roman, left aligned.</li>
                    <li><strong>Footnotes:</strong> Times New Roman, 10-point font, single spacing.</li>
                    <li><strong>Citation Style:</strong> APA Citation Style.</li>
                    <li><strong>Plagiarism:</strong> Similarity index must be below 10%.</li>
                </ul>
            `
        },
        {
            id: 2,
            question: "Submission Procedure",
            answer: `
                <p><strong>Submission Email:</strong> Manuscripts must be submitted via email to: <a href="mailto:univista.journal@kalingauniversity.ac.in" class="text-[var(--button-red)] hover:underline">univista.journal@kalingauniversity.ac.in</a></p>
                <p class="mt-4"><strong>File Naming Convention:</strong> The manuscript file should be named using the Author’s Full Name followed by the Title of the Paper.</p>
            `
        },
        {
            id: 3,
            question: "Publication Policy",
            answer: `
                <div class="space-y-4">
                    <p><strong>Originality and Exclusivity:</strong> Submissions must be the original, unpublished work of the author(s) and should not be under consideration elsewhere. Any manuscript found to contain plagiarized material or infringing copyright laws will be immediately disqualified from publication.</p>
                    <p><strong>Copyright and Licensing:</strong> By submitting their manuscript to the Univista: International Journal of Research and Studies, the author(s) grant exclusive copyright to Kalinga University. The University reserves the right to publish, reproduce, and distribute the content in any format or medium, in full or in part, with due credit to the author(s), and in accordance with the provisions of fair use under the Copyright Act.</p>
                    <p><strong>Editorial Discretion:</strong> The editorial team reserves the right to make editorial changes to submissions for clarity, formatting, and language—either partially or fully—without requiring prior approval or further notice to the author(s), while ensuring the core content remains intact.</p>
                    <p><strong>Peer Review Process:</strong> All submissions that clear the preliminary editorial screening will undergo a double-blind peer review, ensuring anonymity of both the author(s) and reviewers. Final decisions regarding publication will be based on the recommendations received through this rigorous review process.</p>
                </div>
            `
        },
    ];

    const archivesData = [
        {
            id: 1,
            shortName: "Experimental Analysis and Modelling of Solar Panel of Two-Diode Model (TDM)...",
            title: "Praveen Kumar Yadaw, Mohammad Arsh Khan, Manoj Kumar Nigam",
            duration: "Page range: 1-10 | Jan - March 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/1.+Experimental+Analysis+and+Modelling+of+Solar+Panel+-+Naya+Raipur+(1)+(1).pdf"
        },
        {
            id: 2,
            shortName: "Green Finance and Its Impact on Business Models in Emerging Markets",
            title: "Sweta Srivastav and Dr. Deepti Patnaik",
            duration: "Page range: 11-21 | Jan - March 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/2.+Green+Finance+and+Its+Impact+on+Business+Models+in+Emerging+Markets_Updated+(1)+(1)+-+sweta+srivastav+(1)+(1).pdf"
        },
        {
            id: 3,
            shortName: "Impact of Artificial Intelligence on Rwandan Educational Sustainability",
            title: "Niyitanga gilbert beco",
            duration: "Page range: 22-33 | Jan - March 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/3.+Impact+of+Artificial+Intelligence+on+Rwandan+Educational+Sustainability+(1)+(1).pdf"
        },
        {
            id: 4,
            shortName: "Design and Modelling of Autonomous Quad Copter",
            title: "Vijayalaxmi Biradar, Sarat Chandra Mohanty",
            duration: "Page range: 34-39 | Jan - March 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/4.+Manuscript-Drone+_Modified+(1)+(1).pdf"
        },
        {
            id: 5,
            shortName: "Assistive Technology:- An Alternative for Locomotion Disability...",
            title: "Vijayalaxmi Biradar, Sarat Chandra Mohanty",
            duration: "Page range: 40-45 | Jan - March 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/5.+IEEE+Manuscript-1+Assistive+Technology+(1)+(1).pdf"
        },
        {
            id: 6,
            shortName: "Hybrid Nano fluid: An Overview on preparation methods, properties, and its application",
            title: "Priyanshu Mahanti, Shailesh Singh Thakur",
            duration: "Page range: 46-56 | Jan - March 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/6.+Hybrid+Nano+fluid+An+Overview+on+preparation+methods%2C+properties%2C+and+its+application+(1)+(1).pdf"
        }
    ];

    // Volume 1, Issue 2
    const archivesIssue2Data = [
        {
            id: 2,
            shortName: "Performance Evaluation Of Biodegradable Hydraulic Fluids In Industrial Actuators",
            title: "Kouakou Marius Kouakoul",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/2-marius-KK.pdf"
        },
        {
            id: 3,
            shortName: "Experimental Investigation Of Self-Compacting Concrete Using Rice Husk Ash",
            title: "Angel Lakra",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/3-Angel-Lakra.pdf"
        },
        {
            id: 4,
            shortName: "Causes Of Low Hydraulic Pressure In The Excavator Control Valve And Their Solutions",
            title: "Mr. Samuel P Zarwolo",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/4-Mr-Samuel-P-Zarwoloo.pdf"
        },
        {
            id: 5,
            shortName: "Building Construction: Planning, Structural Arrangement, And Execution Of A Healthcare Facility",
            title: "Ankit Yadav",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/5-Ankit-Yadav.pdf"
        },
        {
            id: 6,
            shortName: "The Comparison Of Resistance Of V-Groove Weld And Normal Butt Joint Weld In Metal",
            title: "Toure Natouyoman Julien",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/6-Toure-Natouyoman-Julien.pdf"
        },
        {
            id: 7,
            shortName: "Experimental Evaluation Of Construction Materials Used In Building Construction",
            title: "Rahul Raj Yadav",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/7-Rahul-raj.pdf"
        },
        {
            id: 8,
            shortName: "Analys Of Foundation Design Methods For Long-Life Road Pavements",
            title: "Evandra Bartolomeu",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/8-Evandra-Bartolomeu.pdf"
        },
        {
            id: 9,
            shortName: "Analysis Of Ambient Temperature Impact On Ev Battery Degradation",
            title: "SK Farid",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/9-SK-Farid-Final-Paper.pdf"
        },
        {
            id: 10,
            shortName: "Comprehensive Analysis Of Planning, Design, Construction, And Quality Control In Nh 748a Highway Project",
            title: "Rohan Tiwari",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/10-Rohan-Tiwari.pdf"
        },
        {
            id: 11,
            shortName: "Tracking And Digital Inspection Systems In Automotive Manufacturing",
            title: "Sahil Kumar Gupta",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/11-Sahil-Kumar-Gupta.pdf"
        },
        {
            id: 12,
            shortName: "A Comparative Review Of Performance Factors Affecting The Efficiency Of Solar Photovoltaic Systems",
            title: "Ankit Kumar Tirkey",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/12-Ankit-Kumar-Tirkey-Technology.pdf"
        },
        {
            id: 14,
            shortName: "The Roles Of Diagnostic Tools In A Honda Maintenance Workshop",
            title: "Jessian Tanaka Mutsago",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/14-Jessian.pdf"
        },
        {
            id: 15,
            shortName: "A Comparative Case Study On Photovoltaic Material Used In Solar Power Generation In Industries And The Efficiency Of The Materials",
            title: "Ayush Parmar",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/15-Ayush-Research-Paper.pdf"
        },
        {
            id: 16,
            shortName: "Execution Of Residential Building And Test For Quality Assurance",
            title: "Kwajok Jada Loloku",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/16-Kwajok-Jada-Loloku.pdf"
        },
        {
            id: 17,
            shortName: "Failure Analysis Of Collector Nozzle In Slide Gate System During Continuous Casting",
            title: "Shivam Prakash",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/17-Shivam-Prakash.pdf"
        },
        {
            id: 18,
            shortName: "Matlab-Based Analysis Of Condition Monitoring And Harmonic Mitigation In Industrial Motor Drives",
            title: "Saurabh Kumar",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/18-Saurabh-Kumar.pdf"
        },
        {
            id: 19,
            shortName: "Energy Efficiency, Thermodynamics, And Design Optimization In Internal Combution Engines: A Comprehensive Review",
            title: "Fokou Tchioffo Padoras",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/19-Fokou.pdf"
        },
        {
            id: 20,
            shortName: "Power Quality Improvement By Mitigation Of Harmonics Using Shunt Active Power Filter And Its Comparative Analysis",
            title: "Pradeep Kumar",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/20-Pradeep.pdf"
        },
        {
            id: 21,
            shortName: "Experiment The Effect Of Excessive Superplasticizer Dosage On Concrete Property",
            title: "Tashvendra dhruw",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/21-Tashvendra-dhruw.pdf"
        },
        {
            id: 23,
            shortName: "Experimental Study Of Use Of Waste Plastic In Road Construction",
            title: "Deepa Banerjee",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/23-Deepa.pdf"
        },
        {
            id: 24,
            shortName: "Fuzzy Logic-Based Prediction Of Weld Quality In Shielded Metal Arc Welding Of Mild Steel Joints",
            title: "Navin Shrivastava",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/24-Navin-Shrivastava.pdf"
        },
        {
            id: 25,
            shortName: "Design And Implementation Of Grid Connected To Solar Pv System",
            title: "Devwrath Telam",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/25-Devwrath-Telam.pdf"
        },
        {
            id: 26,
            shortName: "An Experimental Investigation On Plain And Reinforced Self - Curing Concrete",
            title: "Lokesh Verma",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/26-Lokesh.pdf"
        },
        {
            id: 27,
            shortName: "Impact Of Curing Techniques On Sustainable Concrete",
            title: "Piyush Kumar Dewangan",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/27-piyush.pdf"
        },
        {
            id: 28,
            shortName: "An Experimental Study On The Mechanical Properties Of High-Strength Self-Compacting Concrete Mixes",
            title: "Pankaj Singh Thakur",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/28-Pankaj-Singh.pdf"
        },
        {
            id: 29,
            shortName: "Experimental Investigation On The Use Of Fiber Reinforced Concrete In Rigid Pavement",
            title: "Anil Paikara",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/29-Anil.pdf"
        },
        {
           id: 30,
            shortName: "International Relations, Contemporary Issues, Challenges And Global Power Dynamics",
            title: "Prachi Pandey",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/1-Prachi-Pandey.pdf" 
        },
        {
           id: 31,
            shortName: "Indian Loanwords In Digital Culture And Social Media",
            title: "Saanvi Verma",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/2-Saanvi.pdf" 
        },
        {
           id: 32,
            shortName: "Meme Culture In Political Issues: An Examination Of Public Opinion, Political Communication, And Its Impact On Audience Perception In The Digital Era",
            title: "Anjali Sharma",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/3-anjali-sharma-research-paper.pdf" 
        },
        {
           id: 33,
            shortName: "Role Of Youtube Journalism In Shaping Public Opinion Among Youth",
            title: "Ank Pandey",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/4-Ank-pandey.pdf" 
        },
        {
           id: 34,
            shortName: "The Influence Of Environmental Science Journalism On Public Policy Discourse In India- An Analysis Of Media Framing And Agenda Setting",
            title: "Aadya Anuska Pani",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/5-Aadya.pdf" 
        },
        {
           id: 35,
            shortName: "Influence Of Short Videos (Reels/Shorts) On Youth’s News Understanding",
            title: "Nutan Chandrakar",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/6-Nutan-Chandrakar.pdf" 
        },
        {
           id: 36,
            shortName: "Citizen Journalism And Media Ethics: Challenges And Opportunities",
            title: "Garima Agrawal",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/7-Garima-Agrawal-JMS-A&H.pdf" 
        },
        {
           id: 37,
            shortName: "The Effect Of Ott Platforms On Television Advertising Revenue",
            title: "Geetanjali Naik",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/8-GEETANJALI-NAIK.pdf" 
        },
        {
           id: 38,
            shortName: "PR 2.0: Navigating The Artificial Revolution In Public Relations Practices In The Current Era",
            title: "Khushbu Shaw",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/9-Khushbu-Shaw.pdf" 
        },
        {
           id: 39,
            shortName: "Visual Storytelling Techniques In The Films Of Sanjay Leela Bhansali",
            title: "Sandili Singh",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/10-Sandili-Singh-Research-Paper-BAJMC.pdf" 
        },
        {
           id: 40,
            shortName: "Impact Of Instagram Usage On Self-Esteem Among University Students",
            title: "Thabo Donald Maholela",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/11-Thabo-Maholela-Research-Paper-BAJMC.pdf" 
        },
        {
           id: 41,
            shortName: "Community Radio As A Tool For Development Communication In Raipur",
            title: "Jiya Saluja",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/12%20JIYA%20SALUJA-RESEARCH%20PAPER.pdf" 
        },
        {
           id: 42,
            shortName: "A Study On The Exploring Online Media Trends In News Content",
            title: "Takunda John Dzikadza",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/13%20Takunda%20John%20Dzikadza%20BAJMC.pdf" 
        },
        {
           id: 43,
            shortName: "The Role Of Parenting Styles In Child Behavioral Development",
            title: "Barkha Jagat",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/14%20barkha.pdf" 
        },
        {
           id: 44,
            shortName: "Macro Behavioral Responses To Geopolitical Price Shocks: An Svar Analysis Of Imported Inflation In India",
            title: "Rahul Sindhu, Dr. Bikash Behera",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/15%20Rahul%20Sindhu%20o.pdf" 
        },
        {
           id: 45,
            shortName: "The Impact Of Social Media On University Students",
            title: "Dr Esha Chatterjee",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/16%20Dr%20Esha%20Chatterjee.pdf" 
        },
        {
           id: 46,
            shortName: "Cultural Harmony And Cross-Cultural Friendship In Rabindranath Tagore’s Kabuliwala",
            title: "Aakash Barik",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/17%20Aakash%20Barik.pdf" 
        },
        {
           id: 47,
            shortName: "Digital Social Media And News: A New Age Journalism",
            title: "Chetan Agrawal",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/18%20CHETAN%20AGRAWAL%20%20%20BAJMC%201.pdf" 
        },
        {
           id: 48,
            shortName: "Assesment On Political Campaign Among Youth Through Online Media Content",
            title: "Anjali Singh",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/20%20Anjali%20Singh%20MAJMC%20IV.pdf" 
        },
        {
           id: 49,
            shortName: "Spatial Patterns Of Urban Heat Island In Raipur City: An Analysis Based On Land Surface Temperature And Land Use Characteristics",
            title: "Anushka Raj",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/21%20Anushka%20Raj.pdf" 
        },
        {
           id: 50,
            shortName: "Impact Of Youtube Journalism On Traditional Journalism",
            title: "Priya Haldar",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/22%20RESEARCH%20PAPER%20PRIYA.pdf" 
        },
        {
           id: 51,
            shortName: "Rise Of Instagram News Pages And Youth Engagement: Patterns, Perceptions, And Implications",
            title: "Punam Kumari",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/23%20Poonam%20Kumari.pdf" 
        },
        {
           id: 52,
            shortName: "Impact Of Placebo On Variance Psychological Disorders A Secondary Data Analysis Of Published Research Datasets",
            title: "Mr. Avinash Khandel",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/25%20Mr.%20Avinash%20Khandel.pdf" 
        },
        {
           id: 53,
            shortName: "Economic Benefits Of European Integration (European Union)",
            title: "Ankita Subudhi",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/27%20Ankita%20Subudhi%20o.pdf" 
        },
        {
           id: 54,
            shortName: "The Effects Of Social Media On Mental Health Among Adolescents",
            title: "Ankita Rathore",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/28%20Ankita%20Rathore%20o.pdf" 
        },
        {
           id: 55,
            shortName: "Financial Performance Of The Mahatma Gandhi National Rural Employment Guarantee Act In Chhattisgarh",
            title: "Bipul Kumar Singh",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/29%20Bipul%20Kumar%20Singh%20o.pdf" 
        },
        {
           id: 56,
            shortName: "Social Structure And Cultural Interaction In India During The Delhi Sultanate 1206-1526",
            title: "Mohammad Aun Kamdar",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/30%20Mohammad%20Aun%20Kamdar%20o.pdf" 
        },
        {
           id: 57,
            shortName: "Rural Development In India: Challenges, Policies, And Prospects",
            title: "Alok Parihari",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/31%20Alok%20Parihari%20o.pdf" 
        },
        {
           id: 58,
            shortName: "Digital Payment Systems In India: Adoption, Growth, And Challenges",
            title: "Harsh Kumar Singh",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/32%20Harsh%20Kumar%20o.pdf" 
        },
        {
           id: 59,
            shortName: "Non-Banking Financial Corporations: Adoption, Growth & Challenges",
            title: "Abhirup Banerjee",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/33%20Abhirup%20Banerjee%20o.pdf" 
        },
        {
           id: 60,
            shortName: "Historical Background Of The Indian Constitution: From British Acts To Independence (1773–1947)",
            title: "Aastha Sahu",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/34%20Aastha%20Sahu%20o.pdf" 
        },
        {
           id: 61,
            shortName: "Foundations Of Indian Foreign Policy Under Jawaharlal Nehru (1947-1964)",
            title: "Veleena Sahu",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/35%20Veleena%20o.pdf" 
        },
        {
           id: 62,
            shortName: "Indian Loanwords In Digital Culture And Social Media",
            title: "Yamini Pal",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/36%20Yamini%20o.pdf" 
        },
        {
           id: 63,
            shortName: "The India–United Kingdom Comprehensive Economic And Trade Agreement",
            title: "Devanshi Singh",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/37%20Devanshi%20Singh%20o.pdf" 
        },
        {
           id: 64,
            shortName: "Effect Of Sleep Deprivation On Cognitive Functions & Decision Making",
            title: "Nidhi Garg",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/38%20Nidhi%20Garg%20o.pdf" 
        },
        {
           id: 65,
            shortName: "Impact Of Inflation On Economic Growth In India",
            title: "Rewant Mishra",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/39%20Renawat%20Mishra.pdf" 
        },
        {
           id: 66,
            shortName: "Re-Examining The 'Principled Distance': Constitutional Secularism In India And Its Contemporary Challenges",
            title: "Anuradha Yadav",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/40%20Anuradha%20o.pdf" 
        },
        {
           id: 67,
            shortName: "Mgnrega And Rural Livelihoods In India: A Decade-Long Empirical Assessment Of Employment, Wages, Poverty Reduction, And Social Equity (2014–2024)",
            title: "Dhanendra Sahu",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/41%20Dhanendra%20Sahu%20o.pdf" 
        },
        {
           id: 68,
            shortName: "Epistemic Rupture: Dalit Standpoint Theory And Counter-Historiography In Post-Colonial India",
            title: "Dipendra Singh Dhruw",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/42%20Dipendra%20Singh%20Dhruw.pdf" 
        },
        {
           id: 69,
            shortName: "Financial Inclusion In India Through The Pradhan Mantri Jan Dhan Yojana: A Decade Of Evidence (2014–2025)",
            title: "Diksha Edikar",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/43%20Diksha%20Edikar%20o.pdf" 
        },
        {
           id: 70,
            shortName: "A Comparative Study Of Mental Health Academic Stress Social Support And Well Being Among National And International University Students In Chhattisgarh",
            title: "Janet Ruben Samuel",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/44%20Janet%20Ruben%20Samuel%20o.pdf" 
        },
        {
            id: 78,
            shortName: "Customer Satisfaction And Service Quality Of Online Grocery Platforms In India",
            title: "Sourabh Singh Rajput",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/1+Sourabh+Singh+Rajput+o.pdf"
        },
        {
            id: 79,
            shortName: "Understanding Customer Perception And Usage Of Online Banking Services: Evidence From National Bank Of Malawi",
            title: "Faith Lusubilo Msonkho",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/2+FAITH+LUSUBILO+MSONKHO+o.pdf"
        },
        {
            id: 80,
            shortName: "Impact Of Digital Payment Systems On Consumer Buying Behavior In India",
            title: "Sajal",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/3+Sajal_Commerce+%26+Management+o.pdf"
        },
        {
            id: 81,
            shortName: "Management On Business Efficiency And Environmental Protection",
            title: "James Heah Wheeder",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/4+james_Heah_Wheeder+o.pdf"
        },
        {
            id: 82,
            shortName: "A Trend Analysis On Savings And Investment Patterns: Evidence From The Indian Economy",
            title: "Darsh Gandhi",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/5+Darsh_Gandhi+o.pdf"
        },
        {
            id: 83,
            shortName: "Concert Economy In India: A Conceptual Study",
            title: "Punya Prayas Mishra",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/6+PunyaPrayasMishra+o.pdf"
        },
        {
            id: 84,
            shortName: "The Role Of Green Procurement In Achieving Sustainable Supply Chains In Liberia",
            title: "James K. Davids",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/7+James+K.+Davids%2C+MBA%2C+o.pdf"
        },
        {
            id: 85,
            shortName: "Workplace Training And Employee Job Satisfaction: Empirical Evidence From Organisations In Chhattisgarh, India",
            title: "Ngurije Tjiroze",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/8+Ngurije+Tjiroze+o.pdf"
        },
        {
            id: 86,
            shortName: "Impact Of Equity, Diversity And Inclusion On Employee’s Engagement And Organizational Performance",
            title: "Alok Singh",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/9+Alok%2C+C%26M+o.pdf"
        },
        {
            id: 87,
            shortName: "Organizational Culture In The Indian Healthcare Sector",
            title: "Anushka Sharma",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/10+ANUSHKA+SHARMA-MBA+o.pdf"
        },
        {
            id: 88,
            shortName: "Does Psychological Safety Encourage Employee Learning: A Study Of Organizational Workplaces In India",
            title: "Krishna Sahu",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/11+KRISHNA+SHU+MBA+o.pdf"
        },
        {
            id: 89,
            shortName: "A Study On The Influence Of Leadership Styles On Team Performance",
            title: "Neha Netam",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/12+Neha+Netam++o.pdf"
        },
        {
            id: 90,
            shortName: "Evaluating Competency Based Training And Its Impact On Employee Performance",
            title: "Rupali Thakur",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/13+Rupali+thakur+o.pdf"
        },
        {
            id: 91,
            shortName: "Performance Management Systems In Marketing: Aligning HRM Practices With Marketing Objectives",
            title: "Anjali Sharma",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/14+Anjali-o.pdf"
        },
        {
            id: 92,
            shortName: "Role Of Digital Marketing In Increasing Retail Investors In The Share Market",
            title: "Kashish Santwani",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/15+KASHISH+SANTWANI+o.pdf"
        },
        {
            id: 93,
            shortName: "Cashless Payments But Continued Cash Dependency: A Sociocultural Analysis Of Small Retailers’ Reluctance Towards UPI In Raipur City",
            title: "Krish Agrawal",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/16+Krish+o.pdf"
        },
        {
            id: 94,
            shortName: "Capital Structure And Profitability Among Select Nifty-Listed Firms: A Five-Year Trend Study",
            title: "Rani Patel",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/17+Rani+Patel+o.pdf"
        },
        {
            id: 95,
            shortName: "A Study On Inventory Management Practices Of A Retail Store In Raipur",
            title: "Rishi Verma",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/18+Rishi+verma%2C+C%26M+o.pdf"
        },
        {
            id: 96,
            shortName: "Study On Patient Satisfaction And Its Impact On Hospital Performance In Private Hospitals",
            title: "Shaista Tanveer",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/19+Shaista+Tanveer+o.pdf"
        },
        {
            id: 97,
            shortName: "Impact Of Organizational Culture On The Job Performance Of Employees Working In Hospital",
            title: "Tasmiyah Naaz",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/20+Tasmiyah+Naaz+o.pdf"
        },
        {
            id: 98,
            shortName: "A Study On Young Employees’ Behavior And Mental Well-Being Concerns In The Corporate Environment",
            title: "Zaheen Fatima",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/21+Zaahen%2C+C%26M+o.pdf"
        },
        {
            id: 99,
            shortName: "Employee Retention Strategies And Their Impact On Organizational Growth",
            title: "Anjali Kumari",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/22+Anjali+kumari+MBA+o.pdf"
        },
        {
            id: 100,
            shortName: "Impact Of Social Media On Impulse Buying",
            title: "Purushottam Kumar Singh",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/23+Purushottam+Kumar+Singh+o.pdf"
        },
        {
            id: 101,
            shortName: "HR Innovation As A Catalyst For Sustainable Competitive Advantage In Modern Organizations: A Human-Centric Exploration",
            title: "Kumari Bharti",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/24+KUMARI+BHARTI_MBA+o.pdf"
        },
        {
            id: 102,
            shortName: "Impact Of Zomato’s Acquisitions On Financial Performance: A Pre- And Post-Merger Analysis",
            title: "Adarsh Vardhan Pattanaik",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/25+ADARSH%2C+C+%26+M+o.pdf"
        },
        {
            id: 103,
            shortName: "Employee Performance And Job Satisfaction In The Context Of India’s New Labour Codes: A Secondary Data Analysis",
            title: "Ambey Kumari",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/26+Ambey+kumari+o.pdf"
        },
        {
            id: 104,
            shortName: "Understanding How Brand Image Shapes Consumer Buying Behavior: Exploring Feelings, Perceptions, And Real-World Market Influences",
            title: "Ankitesh Kumar",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/27+Ankitesh+kumar+o.pdf"
        },
        {
            id: 105,
            shortName: "Inclusive Recruitment Practices And Hiring Of Persons With Disabilities In India: An Expanded Review Of Literature",
            title: "Gourav Das",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/28+Gourav+Das+mba+o.pdf"
        },
        {
            id: 106,
            shortName: "An Evaluation Of The Transformative Effect Of The UPI On The Indian Small Businesses: Financial Inclusion, Operational Efficiency, And Entrepreneurial Development In Digital Economy",
            title: "Sakshi Tandan",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/29+Sakshi%2C+BCOM+o.pdf"
        },
        {
            id: 107,
            shortName: "Patient Satisfaction: History, Myths, And Misinterpretations",
            title: "Mahak Khan",
            duration: "June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/Univista-Archives-2/30+Mahak+Khan%2CManagement+o.pdf"
        },

        {
            id: 108,
            shortName: "Study On Training Of Workforce, And Its Impact On Hospital Performance & Patient Satisfaction",
            title: "Priyanshi Lohchab",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/31-Priyanshi-Lohchab.pdf"
        },
        {
            id: 109,
            shortName: "Performance Evaluation Of Sector-Specific Mutual Fund Schemes In The Indian Capital Market",
            title: "Rahul Chaurasiya",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/32-Rahul-Chaurasiya.pdf"
        },
        {
            id: 110,
            shortName: "Analyzing Relationship Between HR Policies And Work Culture In Organization",
            title: "Ankita Kumari Shah",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/33-Ankita-Kumari-Shah.pdf"
        },
        {
            id: 111,
            shortName: "Role Of Leadership In Enhancing Employee Engagement In The Education Sector",
            title: "Rudrani Acharya",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/34-Rudrani-Acharya.pdf"
        },
        {
            id: 112,
            shortName: "The Impact Of Human Resource Planning On Organizational Performance",
            title: "Khushboo Sahu",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/35-Khushboo-sahu.pdf"
        },
        {
            id: 113,
            shortName: "Lean Manufacturing, Green Value Co-Creation, And Green Product Innovation: Establishing Conceptual Linkages",
            title: "Mayank Shukla",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/36-Mayank-Shukla.pdf"
        },
        {
            id: 114,
            shortName: "An Assessment Of Mental Health Among Hospital Employees: A Study Of Healthcare Workers In Raipur, Chhattisgarh",
            title: "Latika Dembani",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/37-Latika-Dembani.pdf"
        },
        {
            id: 115,
            shortName: "The Rise Of \"Career Cushioning\" And Its Impact On Employee Loyalty",
            title: "Shrutika Sharma",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/38-Shrutika-Sharma.pdf"
        },
        {
            id: 116,
            shortName: "Understanding How Work–Life Balance Shapes Employee Productivity In Indian Workplaces: Insights Into Well-Being, Stress, And Supportive HR Practices",
            title: "Rajashree Panda",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/39-Rajashree-Panda.pdf"
        },
        {
            id: 117,
            shortName: "Implications Of AI In Early Disease Detection: Opportunities And Challenges",
            title: "Rusali Mohanty",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/40-Rusali-Mohanty.pdf"
        },
        {
            id: 118,
            shortName: "Role Of HR Analytics In Decision Making: A Bibliometric Review",
            title: "Saurabh Kumar Tiwari",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/41-Saurabh-Kumar-Tiwari.pdf"
        },
        {
            id: 119,
            shortName: "Central Bank Digital Currency And The Future Of Banking In India: A Conceptual Perspective",
            title: "Shubham Kumar Singh",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/42-Shubham-Kumar-Singh.pdf"
        },
        {
            id: 120,
            shortName: "Customer Trust In The Wake Of Digital Banking Errors: A Study Of SBI Users In Ranchi",
            title: "Suhana Parasar",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/43-Suhana-Parasar.pdf"
        },
        {
            id: 121,
            shortName: "A Comprehensive Financial Performance Analysis Of Amul (GCMMF): A Study Of Profitability, Liquidity, And Solvency Trends",
            title: "Sujata Kumari",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/44-Sujata-Kumari.pdf"
        },
        {
            id: 122,
            shortName: "Last-Mile Delivery Challenges In Indian E-Commerce: A Consumer Perspective",
            title: "Tukeshwer Sahu",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/45-Tukeshwer-Sahu.pdf"
        },
        {
            id: 123,
            shortName: "A Study Of Consumer Adoption And Usage Behaviour Of UPI In Raipur, Chhattisgarh",
            title: "Vedant Chandrakar",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/46-Vedant-Chandrakar.pdf"
        },
        {
            id: 124,
            shortName: "How Corporate Governance Shapes A Petroleum Company In Juba City",
            title: "David Wani Sebit Ladu",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/47-David-Wani-Sebit-Ladu.pdf"
        },
        {
            id: 125,
            shortName: "Role Of HR Policies In Promoting Employee Wellbeing And Mental Health",
            title: "Jeenal Gautam",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/48-Jeenal-Gautam.pdf"
        },
        {
            id: 126,
            shortName: "Working Capital Management In Small Business",
            title: "Sujal Sarraf",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/49-Sujal-Sarraf.pdf"
        },
        {
            id: 127,
            shortName: "Effect Of Discounts And Offers On Customer Purchase Intention",
            title: "Bhoovan Sahu",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/50-Bhoovan-Sahu.pdf"
        },
        {
            id: 128,
            shortName: "The Role Of Automation In Modern Warehousing",
            title: "Harsh Kumar Sahu",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/51-Harsh-Kumar-Sahu.pdf"
        },
        {
            id: 129,
            shortName: "The Mediating Role Of Customer Experience Between Digital Marketing Strategies And Supply Chain Performance In E-Commerce Firms",
            title: "Gaurinandan Kashyap",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/52-Gaurinandan-Kashyap.pdf"
        },
        {
            id: 130,
            shortName: "Impact Of Foriegn Institutional Investment Inflow And Outflow On Indian Stock Market Returns",
            title: "Pawan Rai",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/53-Pawan-Rai.pdf"
        },
        {
            id: 131,
            shortName: "Impact Of Work Life Balance Practices On Employee Retention In Indian Organisations",
            title: "Harshita Pitroda",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/54-Harshita-Pitroda.pdf"
        },
        {
            id: 132,
            shortName: "A Bibliometric Analysis Of Diversity, Equity, And Inclusion Practices In Higher Education Institutions",
            title: "Shruti Singh",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/55-Shruti-Singh.pdf"
        },
        {
            id: 133,
            shortName: "Role Of Corporate Green Financing In Achieving Sustainability Goals",
            title: "Silvia Dwoki Ladu Laku",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/56-Silvia-Dwoki-Ladu-Laku.pdf"
        },
        {
            id: 134,
            shortName: "Influence Of Direct Marketing Strategies On Customer Perception And Purchase Intention: An Empirical Study Of Consumers In Raipur City",
            title: "Soumyadeep Sarkar",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/57-Soumyadeep-Sarkar.pdf"
        },
        {
            id: 135,
            shortName: "Evaluating The Role Of Digital Financial Services In Strengthening Trust, Accessibility, And Growth Across The Banking, Insurance, And Business Sectors In India",
            title: "Suraj Kumar Pandey",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/58-Suraj-Kumar-Pandey.pdf"
        },
        {
            id: 136,
            shortName: "Application Of Clustering Techniques For Customer Segmentation And Targeted Marketing Strategy",
            title: "Shubham Pradhan",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/59-Shubham-Pradhan.pdf"
        },
        {
            id: 137,
            shortName: "Liberia's Government Policies And Their Impact On The Startup Ecosystem",
            title: "Joseph K.M Benson",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/60-Joseph-KM-Benson.pdf"
        },
        {
            id: 138,
            shortName: "A Study On UPI Adoption In Raipur, Chhattisgarh",
            title: "Akanksha Patel",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/61-Akanksha-Patel.pdf"
        },
        {
            id: 139,
            shortName: "Impact Of Transportation Management On Logistics Performance",
            title: "Nishant Selukar",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/62-Nishant-Selukar.pdf"
        },
        {
            id: 140,
            shortName: "Impact Of Online Shopping On Consumer Preferences: A Study Of Behavioural Shifts, Platform Preferences, And Satisfaction Levels",
            title: "Damini Singh",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/63-Damini-Singh.pdf"
        },
        {
            id: 141,
            shortName: "Leadership And Organizational Culture: Exploring Their Synergistic Impact On Performance Of Employees",
            title: "Sneh Jain",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/64-Sneh-Jain.pdf"
        },
        {
            id: 142,
            shortName: "Efficiency Of Indian Stock Market: An Empirical Study",
            title: "Viranchi Kumar Neeraj",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/65-Viranchi-Kumar-Neeraj.pdf"
        },
        {
            id: 143,
            shortName: "The Study On Job Satisfaction On Young Employees",
            title: "Mercy Ritika Ekka",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/66-Mercy-Ritika-Ekka.pdf"
        },
        {
            id: 144,
            shortName: "Growth Of Mobile Commerce And Its Impact On E-Retailing",
            title: "Jaskiran Kaur, Natasha Millicent Gore",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/67-Jaskiran-Kaur-Natasha-Millicent-Gore.pdf"
        },
        {
            id: 145,
            shortName: "Effect Of Green HRM Practices On Sustainable Development Of Indian Banks",
            title: "S Harsh Kumar",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/68-S-Harsh-Kumar.pdf"
        },
        {
            id: 146,
            shortName: "Impact Of Digital Banking On Bank Efficiency",
            title: "Barkha Jain",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/69-Barkha-Jain.pdf"
        },
        {
            id: 147,
            shortName: "Role Of Social Media In Brand Visibility For Small Businesses",
            title: "Aman Tamboli",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/70-Aman-Tamboli.pdf"
        },
        {
            id: 148,
            shortName: "Impact Of Psychological Factors On Consumer Buying Decision-Making Process",
            title: "Sourav Kumar Singh",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/71-Sourav-Kumar-Singh.pdf"
        },
        {
            id: 149,
            shortName: "Impact Of Brand Image On Consumer Buying Intentions",
            title: "Aman Sharma",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/72-Aman-Sharma.pdf"
        },
        {
            id: 150,
            shortName: "Market Access And Marketing Constraints Of Tribal Products In Chhattisgarh",
            title: "Biswas Agrawalla",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/73-Biswas-Agrawalla.pdf"
        },
        {
            id: 151,
            shortName: "Ethical Pricing Strategies And Consumer Fairness Perception In Online Markets",
            title: "Deepanshu Bharti",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/74-Deepanshu-Bharti.pdf"
        },
        {
            id: 152,
            shortName: "Social Media Marketing On Consumer Buying Behaviour, A Study With Reference To Instagram Users",
            title: "Harsh Vardhan Gupta",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/75-Harsh-Vardhan-Gupta.pdf"
        },
        {
            id: 153,
            shortName: "The Relationship Between Perceived Content Authenticity And Brand Trust Among Generation Z Social Media Users",
            title: "Himanshu Sahu",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/76-Himanshu-Sahu.pdf"
        },
        {
            id: 154,
            shortName: "Financial Statement Analysis Of Selected SMEs In Raipur Region",
            title: "Manas Mahato",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/78-Manas-Mahato.pdf"
        },
        {
            id: 155,
            shortName: "The Impact Artificial Intelligence On Hiring Process",
            title: "Neha Das",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/79-Neha-Das.pdf"
        },
        {
            id: 156,
            shortName: "Dark Patterns In Digital Marketing Interfaces And Long-Term Brand Trust",
            title: "Nischal Kulukeria",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/80-Nischal-Kulukeria.pdf"
        },
        {
            id: 157,
            shortName: "Factors Influencing Decision Making In Stock Market.",
            title: "Payal Dahiya",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/81-Payal-Dahiya.pdf"
        },
        {
            id: 158,
            shortName: "A Study To Assess The Prevalence Of Waterborne Diseases And Their Impact On Healthcare Services Among The General Population In A Selected Urban Area Of Bilaspur (C.G.)",
            title: "Rahul Kumar Tiwari",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/82-Rahul-Kumar-Tiwari.pdf"
        },
        {
            id: 159,
            shortName: "Impact Of Human Resource Management On Productivity In The Pharamaceutical Industry",
            title: "Piyush Banjare",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/83-Piyush-Banjare.pdf"
        },
        {
            id: 160,
            shortName: "The Role Of Taxation In Strengthening ESG Compliance: A Study Of Policy Incentives And Corporate Behavior",
            title: "Trivendra Pandey",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/84-Trivendra-Pandey.pdf"
        },
        {
            id: 161,
            shortName: "The Role Of Pharmacy In Hospitals And Healthcare System",
            title: "Aliya Amroon An",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/85-Aliya-Amroon-An.pdf"
        },
        {
            id: 162,
            shortName: "Effect Of Work Environment On The Performance Of Nurses In Private Hospitals",
            title: "Reshma Hota",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/86-Reshma-Hota.pdf"
        },
        {
            id: 163,
            shortName: "A Study On Supply Chain Coodination And Its Impact On Business Performance",
            title: "Rohan Awasthi",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/87-Rohan-Awasthi.pdf"
        },
        {
            id: 164,
            shortName: "Study On The Effect Of Psychological Pricing On Consumer Purchasing Behaviour",
            title: "Aniket Gajbhiye",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/88-Aniket-Gajbhiye.pdf"
        },
        {
            id: 165,
            shortName: "Impact Of Discounts And Sales On Customer Purchase Decision In Raipur Retail Market",
            title: "Saorabh Tiwari",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/89-Saorabh-Tiwari.pdf"
        },
        {
            id: 166,
            shortName: "A Study On The Spending Patterns Of Generation Z In India",
            title: "Alisha Yadav",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/90-Alisha-Yadav.pdf"
        },
        {
            id: 167,
            shortName: "Role Of Green Finance In Promoting Sustainable Banking Practices In India",
            title: "Anjali Agrawal",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/91-Anjali-Agrawal.pdf"
        },
        {
            id: 168,
            shortName: "Psychological Capital: A Bibliometric Analysis",
            title: "Rukhmani Sahu",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/92-Rukhmani-Sahu.pdf"
        },
        {
            id: 169,
            shortName: "Impact Of Performance Appraisal Systems On Employee Motivation",
            title: "Adishri Singh",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/93-Adishri-Singh.pdf"
        },
        {
            id: 170,
            shortName: "The Impact Of Strategic Wellness Interventions On The Productivity And Performance Of The Multi-Generational Workforce (Gen Z And Millennials)",
            title: "Manupriya Khemka",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/94-Manupriya-Khemka.pdf"
        },
        {
            id: 171,
            shortName: "Role Of Business Analytics In Improving Organisational Performance: An Empirical Study",
            title: "Antra Agrawal",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/95-Antra-Agrawal.pdf"
        },
        {
            id: 172,
            shortName: "Understanding How Job Satisfaction Shapes Employee Performance: Real Experiences And Insights From Indian Workplaces",
            title: "Subhashree Subhasmita Panda",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/96-Subhashree-Subhasmita-Panda.pdf"
        },
        {
            id: 173,
            shortName: "Human Resource Practices For Managing Workplace Diversity And Building Inclusive Organizations",
            title: "Sreashree Das",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/97-Sreashree-Das.pdf"
        },
        {
            id: 174,
            shortName: "Impact Of Work-Life Balance On Employee Job Satisfaction",
            title: "Pragati Neura",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/98-Pragati-Neura.pdf"
        },
        {
            id: 175,
            shortName: "Personalized Promotions And Perceived Intrusiveness In Mobile Marketing",
            title: "Junaid Ansari",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/99-Junaid-Ansari.pdf"
        },
        {
            id: 176,
            shortName: "Role Of Social Media In Stock Market Investment Decisions",
            title: "Jayaditya Pratap Singh Chandel",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/100-Jayaditya-Pratap-Singh-Chandel.pdf"
        },
        {
            id: 177,
            shortName: "Customer Perception And Satisfaction Towards Digital Wallets In India",
            title: "Akriti Upadhyay",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "/univista/vol-1-issue-2/101-Akriti-Upadhyay.pdf"
        },
    ];

    // Derived values based on the selected archives tab
    const archiveTabs = [
        { key: "issue1", label: "Vol. 1, Issue 1" },
        { key: "issue2", label: "Vol. 1, Issue 2" }
    ];
    const activeArchivePrograms = activeArchiveTab === "issue1" ? archivesData : archivesIssue2Data;

    const callForPapersData = [
        {
            id: 1,
            shortName: "Sustainability and Development",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Climate change adaptation and mitigation",
                "Renewable energy and green technologies",
                "Sustainable urban planning and smart cities",
                "Environmental policy and governance",
                "Circular economy and waste management"
            ]
        },
        {
            id: 2,
            shortName: "Technology and Society",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Digital transformation and smart technologies",
                "Internet of Things (IoT) and society",
                "Ethical issues in emerging technologies",
                "Social media impact on communities",
                "Human-computer interaction"
            ]
        },
        {
            id: 3,
            shortName: "Health, Well-being, and Society",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Public health policy and management",
                "Mental health and psychosocial well-being",
                "Health equity and access to healthcare",
                "Nutrition and lifestyle interventions",
                "Pandemic preparedness and response"
            ]
        },
        {
            id: 4,
            shortName: "Law, Policy, and Governance",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Constitutional and human rights law",
                "Regulatory frameworks for technology",
                "Public policy and governance reforms",
                "International law and cross-border policy issues",
                "Anti-corruption and transparency measures"
            ]
        },
        {
            id: 5,
            shortName: "Education, Innovation, and Learning",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "E-learning and digital education",
                "Pedagogical innovations and teaching strategies",
                "Education policy and reform",
                "Lifelong learning and skill development",
                "STEM education and interdisciplinary learning"
            ]
        },
        {
            id: 6,
            shortName: "Business, Economics, and Entrepreneurship",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Global economic trends and policy",
                "Startups and entrepreneurship ecosystems",
                "Corporate social responsibility",
                "Digital economy and fintech innovations",
                "Sustainable business models"
            ]
        },
        {
            id: 7,
            shortName: "Media, Culture, and Communication",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Media ethics and freedom of expression",
                "Cultural heritage and preservation",
                "Digital storytelling and multimedia communication",
                "Social media and public opinion",
                "Social media and public opinion"
            ]
        },
        {
            id: 8,
            shortName: "Gender, Equity, and Inclusion",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Women’s empowerment and leadership",
                "Intersectionality and social justice",
                "Gender-based violence prevention strategies",
                "Workplace diversity and equality"
            ]
        },
        {
            id: 9,
            shortName: "Science, Research, and Innovation",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Interdisciplinary scientific research",
                "Emerging technologies and innovation",
                "Research ethics and reproducibility",
                "Scientific communication and outreach",
                "Collaborations in global research networks"
            ]
        },
        {
            id: 10,
            shortName: "Artificial Intelligence and Human Interaction",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "AI ethics and societal impact",
                "Human-AI collaboration in workplaces",
                "AI in healthcare, education, and governance",
                "Natural language processing and social applications",
                "AI policy and regulation"
            ]
        },
        {
            id: 11,
            shortName: "Arts, Humanities, and Social Change",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Literature, visual arts, and cultural critique",
                "Philosophy and ethics in contemporary society",
                "Performing arts and social activism",
                "Historical perspectives on social change",
                "Cultural narratives and identity formation"
            ]
        },
        {
            id: 12,
            shortName: "Rural and Urban Development",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Rural livelihoods and sustainable development",
                "Urbanization and smart city planning",
                "Infrastructure and transportation challenges",
                "Community engagement and participatory planning",
                "Rural-urban migration and social impact"
            ]
        },
        {
            id: 13,
            shortName: "Globalization and Cross-Cultural Perspectives",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Cross-cultural communication and diplomacy",
                "Global trade and economic interdependence",
                "Migration and transnational communities",
                "Cultural hybridization and identity",
                "Global governance and international cooperation"
            ]
        },
        {
            id: 14,
            shortName: "Security, Conflict, and Peace Studies",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Conflict resolution and peacebuilding",
                "Cybersecurity and digital threats",
                "International security and defense policies",
                "Humanitarian interventions and disaster response",
                "Community resilience and post-conflict reconstruction"
            ]
        },
        {
            id: 15,
            shortName: "Technology in Agriculture and Food Security",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Precision agriculture and smart farming",
                "Sustainable crop management",
                "Agricultural policy and rural development",
                "Food supply chains and logistics",
                "Agri-tech innovations and biotechnology",
                "Rural livelihoods and sustainable development",
                "Urbanization and smart city planning",
                "Infrastructure and transportation challenges",
                "Community engagement and participatory planning",
                "Rural-urban migration and social impact"
            ]
        }
    ];

    const contactInfo = {
        title: "Editorial Board Office",
        subtitle: "Contact Us",
        department: "For Any Query and Clarifications, Contact Us At:",
        quote: "<strong>Editorial Board Office:</strong> Kalinga University, Near Mantralaya, Kotni, Atal Nagar-Naya Raipur, Chhattisgarh 492101<br/><br/><strong>Address:</strong> Editor-in-chief, Kalinga University, Near Mantralaya, Kotni, Atal Nagar-Naya Raipur, Chhattisgarh 492101",
        contactInfo: {
            // email: "univista.journal@kalingauniversity.ac.in",
            phone: "+91-9754766411"
        },
        imageSrc: "https://cdn.kalingauniversity.ac.in/phd/Phd-Objectives.webp",
        showQuotes: false
    };

    return (
        <div className="pt-[100px] md:pt-0">
            <SectionHeading
                title="E-ISSN: 3139-0668"
                titleClassName="text-center mt-5 md:text-[40px]"
                titleTextColor="text-[#001f3f]"
            />
            <MainIntro
                title="Univista: International Journal of Research and Studies"
                subtitle="About the Journal"
                description={[
                    "<b style=\"color: #0d3b66\">Medium: Online Only | Subject Focus: Multidisciplinary | Language: English | Frequency: Quarterly | Starting Year of Journal: 2026</b>",
                    "Univista: International Journal of Research and Studies is a peer-reviewed, multidisciplinary journal committed to advancing knowledge across diverse fields of study. The journal provides a platform for scholars, researchers, and practitioners from around the world to share innovative research, critical analyses, and evidence-based insights. By embracing a broad spectrum of disciplines, UIJRS encourages dialogue and collaboration that transcend traditional academic boundaries, encouraging holistic and integrative approaches to research.",
                    "The journal publishes original research articles, research papers, review papers, and case studies that contribute to the understanding of complex global, social, and scientific challenges. Emphasizing both conceptual and applied research, UIJRS seeks to bridge the gap between theory and practice, promoting knowledge that is both academically rigorous and socially relevance.",
                    "UIJRS is dedicated to upholding the highest standards of academic integrity and ethical scholarship. All submissions undergo a thorough peer-review process to ensure originality, methodological soundness, and contribution to the field. The journal values diversity of thought and perspective, welcoming contributions from researchers at all career stages, from early-career scholars to established experts.",
                    "As an international platform, UIJRS encourages cross-cultural and interdisciplinary collaboration, recognizing that complex problems often require solutions that draw on multiple fields of expertise. By publishing high-quality research that spans disciplines, regions, and methodologies, Univista: International Journal of Research & Studies aims to inspire innovation, promote critical thinking, and advance global knowledge.",
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/research/research-main-content.webp"
                imageAlt="Univista: International Journal of Research and Studies"
                showKnowMore={true}
                initialVisibleParagraphs={2}
            />

            <ImageListItem
                items={aimsAndScopeItems}
                imageSrc="https://cdn.kalingauniversity.ac.in/campus-life/whywork.webp"
                title="Univista: International Journal Of Research And Studies Submission Guidelines, Format & Publication Policy"
                description="UIJRS welcomes submissions in the following formats: research articles, research papers, review papers, and case studies. Authors are requested to adhere to the following word limits for each submission type:"
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


            {/* <QuickLinks
                title="Journal Policies & Information"
                description="Explore the standards and processes that govern the Univista: International Journal of Research and Studies."
                links={journalQuickLinks}
                backgroundColor="bg-[var(--dark-blue)]"
                textColorClassName="text-white"
                titleClassName="text-white"
            /> */}

            <ProgramsOffered
                title="Archives"
                description="Explore past volumes and issues of the Univista: International Journal of Research and Studies."
                programs={activeArchivePrograms}
                exploreLabel="Download PDF"
                searchPlaceholder="Search Archives...."
                hideSearch={false}
                backgroundImage="https://cdn.kalingauniversity.ac.in/international-students/int-g-1.webp"
                backgroundColor="bg-white"
                textColor="text-gray-700"
                titleColor="text-[var(--foreground)]"
                topRightContent={
                    <div className="flex flex-wrap gap-2">
                        {archiveTabs.map((tab) => (
                            <button
                                key={tab.key}
                                type="button"
                                onClick={() => setActiveArchiveTab(tab.key)}
                                className={`px-5 py-2.5 rounded-lg font-plus-jakarta-sans font-semibold transition-colors ${
                                    activeArchiveTab === tab.key
                                        ? "bg-[var(--button-red)] text-white"
                                        : "bg-white text-[var(--button-red)] border border-[var(--button-red)] hover:bg-[var(--button-red)]/10"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                }
            />
            {/* Reused Publication Card Section */}
            <section className="bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 py-12">
                    <SectionHeading
                        title="Editorial Board Members"
                        description=""
                        titleClassName="text-center font-stix "
                        descriptionClassName="text-center mt-4"
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto mt-12">
                        {boardDataWithHandler.map((member) => (
                            <PublicationCard key={member.id} data={member} className="bg-card-sandal" />
                        ))}
                    </div>
                </div>
            </section>
            <OurPrograms
                customPrograms={callForPapersData}
                hideSearchFilter={true}
                customTitle="Research Themes & Sub-Themes"
                customSubtitle="Call for Papers"
                programCardTitleClassName="!text-xl"
                backgroundColor="bg-gray-50"
                onExploreProgramClick={(theme) => {
                    setSelectedTheme(theme);
                    setIsModalOpen(true);
                }}
            />

            <StandardFormatFAQ />
            <ThemeModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                theme={selectedTheme}
            />

            <EditorialMemberModal
                isOpen={isProfileModalOpen}
                onClose={() => setIsProfileModalOpen(false)}
                member={selectedMember}
            />

            <MentorIntro {...contactInfo} />

        </div>
    );
};

export default UnivistaJournalPage;
