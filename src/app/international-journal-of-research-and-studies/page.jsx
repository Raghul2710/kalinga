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
            slug: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/1.+Experimental+Analysis+and+Modelling+of+Solar+Panel+-+Naya+Raipur+(1)+(1).pdf"
        },
        {
            id: 2,
            shortName: "Green Finance and Its Impact on Business Models in Emerging Markets",
            title: "Sweta Srivastav and Dr. Deepti Patnaik",
            duration: "Page range: 11-21 | Jan - March 2026",
            level: "VOL 1",
            slug: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/2.+Green+Finance+and+Its+Impact+on+Business+Models+in+Emerging+Markets_Updated+(1)+(1)+-+sweta+srivastav+(1)+(1).pdf"
        },
        {
            id: 3,
            shortName: "Impact of Artificial Intelligence on Rwandan Educational Sustainability",
            title: "Niyitanga gilbert beco",
            duration: "Page range: 22-33 | Jan - March 2026",
            level: "VOL 1",
            slug: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/3.+Impact+of+Artificial+Intelligence+on+Rwandan+Educational+Sustainability+(1)+(1).pdf"
        },
        {
            id: 4,
            shortName: "Design and Modelling of Autonomous Quad Copter",
            title: "Vijayalaxmi Biradar, Sarat Chandra Mohanty",
            duration: "Page range: 34-39 | Jan - March 2026",
            level: "VOL 1",
            slug: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/4.+Manuscript-Drone+_Modified+(1)+(1).pdf"
        },
        {
            id: 5,
            shortName: "Assistive Technology:- An Alternative for Locomotion Disability...",
            title: "Vijayalaxmi Biradar, Sarat Chandra Mohanty",
            duration: "Page range: 40-45 | Jan - March 2026",
            level: "VOL 1",
            slug: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/5.+IEEE+Manuscript-1+Assistive+Technology+(1)+(1).pdf"
        },
        {
            id: 6,
            shortName: "Hybrid Nano fluid: An Overview on preparation methods, properties, and its application",
            title: "Priyanshu Mahanti, Shailesh Singh Thakur",
            duration: "Page range: 46-56 | Jan - March 2026",
            level: "VOL 1",
            slug: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/6.+Hybrid+Nano+fluid+An+Overview+on+preparation+methods%2C+properties%2C+and+its+application+(1)+(1).pdf"
        }
    ];

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
        imageSrc: "https://cdn.kalingauniversity.ac.in/laboratories/laboratories-mainintro.webp",
        showQuotes: false
    };

    return (
        <div className="pt-[100px] md:pt-0">
            <MainIntro
                title="Univista: International Journal of Research and Studies"
                subtitle="About the Journal"
                description={[
                    "Univista: International Journal of Research and Studies is a peer-reviewed, multidisciplinary journal committed to advancing knowledge across diverse fields of study. The journal provides a platform for scholars, researchers, and practitioners from around the world to share innovative research, critical analyses, and evidence-based insights. By embracing a broad spectrum of disciplines, UIJRS encourages dialogue and collaboration that transcend traditional academic boundaries, encouraging holistic and integrative approaches to research.",
                    "The journal publishes original research articles, research papers, review papers, and case studies that contribute to the understanding of complex global, social, and scientific challenges. Emphasizing both conceptual and applied research, UIJRS seeks to bridge the gap between theory and practice, promoting knowledge that is both academically rigorous and socially relevance.",
                    "UIJRS is dedicated to upholding the highest standards of academic integrity and ethical scholarship. All submissions undergo a thorough peer-review process to ensure originality, methodological soundness, and contribution to the field. The journal values diversity of thought and perspective, welcoming contributions from researchers at all career stages, from early-career scholars to established experts.",
                    "As an international platform, UIJRS encourages cross-cultural and interdisciplinary collaboration, recognizing that complex problems often require solutions that draw on multiple fields of expertise. By publishing high-quality research that spans disciplines, regions, and methodologies, Univista: International Journal of Research & Studies aims to inspire innovation, promote critical thinking, and advance global knowledge.",
                    "Medium: Online Only | Subject Focus: Multidisciplinary | Language: English | Frequency: Quarterly | Starting Year of Journal: 2026"
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
                programs={archivesData}
                exploreLabel="Download PDF"
                searchPlaceholder="Search Archives...."
                hideSearch={false}
                backgroundImage="https://cdn.kalingauniversity.ac.in/international-students/international-students-intro.jpg"
                backgroundColor="bg-white"
                textColor="text-gray-700"
                titleColor="text-[var(--foreground)]"
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
