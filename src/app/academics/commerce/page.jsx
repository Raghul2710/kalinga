"use client";

import { useState, useEffect, useMemo } from "react";
import MainIntro from "@/app/components/about/main_intro";
import VisionMissionUpdated from "@/app/components/about/vision-mission-updated";
import ProgramsOffered from "@/app/components/department/programs-offered";
import FAQ from "@/app/components/general/faq";
import StudentActivities from "@/app/components/department/student_activities";
import FacultyList from "@/app/components/department/faculty-list";
import DataTable from "@/app/components/general/data-table";
import SectionHeading from "@/app/components/general/SectionHeading";
import OrganogramOfKalinga from "@/app/components/about/organogram_of_kalinga";
import { fetchDepartmentCompleteDetail, fetchAllDepartmentsCourses } from "@/app/lib/api";
import Facility from "@/app/components/admissions/facility";
import Modal from "@/app/components/general/Modal";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";
import StudentCell from "@/app/components/international-students/student_cell";
import SurveyForm from "@/app/components/general/SurveyForm";
import UpcomingConference from "@/app/components/research/upcoming_conference";
import Placements from "@/app/components/home/placements";
import { AccordionItem } from "@/app/components/general/accordion";
import CourseNavigation from "@/app/components/general/course-navigation";

export default function CommerceDepartmentPage() {
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    const [feedbackModalConfig, setFeedbackModalConfig] = useState({ isOpen: false, category: "", title: "" });

    const handleOpenSurvey = (category, title) => {
        setFeedbackModalConfig({ isOpen: true, category, title });
    };

    const handleCloseSurvey = () => {
        setFeedbackModalConfig(prev => ({ ...prev, isOpen: false }));
    };

    const mainIntroContent = {
        title: "About the Department of Commerce",
        description: [
            "If you enjoy decoding numbers and helping businesses make financial decisions, choose commerce.",
            "The Department of Commerce focuses on imparting the highest quality of education and exposure related to the economy and businesses to produce next-gen leaders. Learn how to operate a business while exploring the impact of economic, social, cultural, political, and technological decisions positively or negatively on companies and society.",
            "With our innovative teaching pedagogy, students become well-equipped with various problem-solving skills through case studies and practical exposure. Our programs offer units that focus on key principles of commerce and their application in the industry. The vision of this department is to ensure that our students have an industry-relevant degree"
        ],
        imageUrl: "https://cdn.kalingauniversity.ac.in/common/kalinga-students-2.jpg",
        imageAlt: "Department of Commerce",
    };

    const [departmentData, setDepartmentData] = useState(null);
    const [departmentCourses, setDepartmentCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    const facultySlug = "faculty-of-commerce-and-management";

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const [details, coursesData] = await Promise.all([
                    fetchDepartmentCompleteDetail(facultySlug),
                    fetchAllDepartmentsCourses(null, facultySlug).catch(() => ({ courses: [] }))
                ]);
                setDepartmentData(details);
                if (coursesData && coursesData.courses) {
                    setDepartmentCourses(coursesData.courses);
                }
            } catch (error) {
                console.error("Error loading Commerce department data:", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const programsOffered = useMemo(() => {
        const sourceData = (departmentCourses && departmentCourses.length > 0)
            ? departmentCourses
            : (departmentData?.department_courses || []);

        if (!sourceData || sourceData.length === 0) return [];

        return sourceData
            .filter(course => {
                const name = (course.name || "").toUpperCase();
                const shortName = (course.short_name || "").toUpperCase();
                return (shortName.includes("BBA") ||
                    shortName.includes("BCOM") ||
                    shortName.includes("MCOM") ||
                    name.includes("COMMERCE")) &&
                    !shortName.includes("MBA");
            })
            .map(course => {
                let level = "UG";
                if (course.program_type) {
                    const type = course.program_type.toLowerCase();
                    if (type === "pg" || type === "postgraduate") level = "PG";
                    else if (type === "phd" || type === "doctorate") level = "PhD";
                    else if (type === "diploma") level = "Diploma";
                }

                const dNum = parseInt(course.duration);
                const duration = !isNaN(dNum) ? `${dNum} Year${dNum > 1 ? 's' : ''}` : (course.duration || "3 Years");

                return {
                    id: course.id,
                    title: course.name || "",
                    shortName: course.short_name || "",
                    duration: duration,
                    level: level,
                    slug: course.slug || null,
                };
            });
    }, [departmentCourses, departmentData]);

    const programSyllabusImage = departmentData?.program_syllabus_images?.[0];
    const programsImage = programSyllabusImage?.image || programSyllabusImage?.image_url || departmentData?.programs_image;
    const programsOverview = programSyllabusImage?.programs_offered_overview || departmentData?.programs_offered_overview || "Explore our commerce programs designed to empower your professional journey.";

    const visionMissionContent = {
        visionText: "Kalinga University aims to be an outstanding institution for Talent Development and Knowledge Creation for a vibrant and inclusive society.",
        missionText: {
            paragraphs: ["The primary purpose of Kalinga University is to become a global education hub in which faculty, staff, and students can discover, examine critically, preserve, and transmit the knowledge, wisdom, and values that will ensure the survival of future generations and improve the quality of life for all.",
                "The University seeks to help students develop an understanding and appreciation for the complex cultural and physical worlds in which they live and to realise their highest potential of intellectual, physical, and human development."],
            pointsHeading: "To fulfill our mission, we:",
            points: [
                "Offer broad and balanced academic programs that are mutually reinforcing and emphasise high-quality and creative instruction at the undergraduate, graduate, professional, and postgraduate levels.",
                "Generate new knowledge through a broad array of scholarly research and creative endeavours, which provide a foundation for dealing with the immediate and long-range needs of society.",
                "Achieve leadership in each discipline, strengthen interdisciplinary studies, and pioneer new fields of learning.",
                "Promote the use of new technologies in Teaching and Research.",
                "Inculcate the right values in students for their holistic development."
            ]
        }
    };

    const clubsData = useMemo(() => {
        if (!departmentData?.clubs || !Array.isArray(departmentData.clubs) || departmentData.clubs.length === 0) {
            return [];
        }

        return departmentData.clubs
            .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
            .map(club => ({
                id: club.id,
                title: club.name || "",
                description: club.description || "",
                image: club.logo || null,
                category: "Clubs",
            }));
    }, [departmentData?.clubs]);

    const commerceVideoItems = [
        {
            id: 1,
            name: "Aditi Singh",
            videoUrl: "",
            thumbnail: "https://cdn.kalingauniversity.ac.in/placement/Aditi+singh.jpeg",
            description: "Aditya Birla Fashion Retail Ltd.",
            title: "Aditi Singh - BBA",
        },
        {
            id: 2,
            name: "Nayna Chakhiyar",
            videoUrl: "",
            thumbnail: "https://cdn.kalingauniversity.ac.in/placement/Nayna.jpeg",
            description: "Tata Steel Ltd.",
            title: "Nayna Chakhiyar - BCOM B&F",
        },
        {
            id: 3,
            name: "Abhishek Namdeo",
            videoUrl: "",
            thumbnail: "https://cdn.kalingauniversity.ac.in/placement/student.jpg",
            description: "Godrej & Boyce Mfg. Co. Ltd.",
            title: "Abhishek Namdeo - B.Com",
        }
    ];

    const faqItems = [
        {
            id: 1,
            question: "Program Outcomes (POs)",
            component: (
                <div className="space-y-4">
                    <AccordionItem title="Bachelor Of Commerce" titleClassName="font-bold text-lg text-[var(--button-red)]" bgClassName="bg-white">
                        <ul className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                            <li>To create for the students of Kalinga University an additional avenue of self-employment and also to benefit Industries by providing them with suitable trained persons in the field of Commerce.</li>
                            <li>To prepare students to explore opportunities, being newly created, in the field of Commerce due to Globalization, Privatization and Liberalization.</li>
                            <li>To give an adequate exposure to operational environment in the field of Commerce.</li>
                            <li>To provide adequate basic understanding about the field of Commerce.</li>
                            <li>To inculcate training and practical approach among the students by using modern technologies in the field of Commerce.</li>
                            <li>The students are trained with the help of different presentations, projects and assignments to understand the dynamics of Trade in a better way.</li>
                            <li>This programme teaches the students how to move sequentially in order to solve a problem effectively</li>
                            <li>The curriculum is designed in such a way that the students are driven to develop an attitude of life-long learning.</li>
                            <li>The courses aim at instituting entrepreneurial skills in the students by instilling in them competencies needed to become an entrepreneur</li>
                            <li>The courses included in the programme teach the students to cultivate such characteristics keeping the larger societal goal in mind</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem title="Master Of Commerce" titleClassName="font-bold text-lg text-[var(--button-red)]" bgClassName="bg-white">
                        <ul className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                            <li>To create for the students of Kalinga University an additional avenue of self-employment and also to benefit Industries by providing them with suitable trained persons in the field of Commerce.</li>
                            <li>To prepare students to explore opportunities, being newly created, in the field of Commerce due to Globalization, Privatization and Liberalization.</li>
                            <li>To give an adequate exposure to operational environment in the field of Commerce.</li>
                            <li>To provide adequate basic understanding about the field of Commerce.</li>
                            <li>To inculcate training and practical approach among the students by using modern technologies in the field of Commerce.</li>
                            <li>The students are trained with the help of different presentations, projects and assignments to understand the dynamics of Trade in a better way.</li>
                            <li>This program enables the students to think of a given problem or situation from different perspectives like economic, financial, social, national, global etc. and broadens the horizon of their thought processes</li>
                            <li>This program enables the student to analyze the situation objectively and give effective arguments and judgments on the basis of the analysis being done.</li>
                            <li>This course broadens the horizons of the students by making them understand the intricacies of the business world and overall the economics of the country as well as the world</li>
                            <li>The courses aim at instituting entrepreneurial skills in the students by instilling in them competencies needed to become an entrepreneur. These would lead to develop an attitude of life-long learning.</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem title="Bachelor Of Business Administration" titleClassName="font-bold text-lg text-[var(--button-red)]" bgClassName="bg-white">
                        <ul className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                            <li><b>PO1: Management Knowledge:</b> Apply fundamental and advanced theoretical knowledge of management and business principles to address practical challenges in organizational and entrepreneurial contexts. </li>
                            <li><b>PO2: Communication Skills:</b> Demonstrate effective oral and written communication skills to convey ideas, arguments, and business strategies clearly and professionally. </li>
                            <li><b>PO3: Critical Thinking and Problem Solving:</b> Identify, analyze, and solve business problems using data-driven reasoning, logical analysis, and informed judgment. </li>
                            <li><b>PO4: Business Environment Analysis:</b> Articulate and critically evaluate Indian and global business environments and apply contextual understanding in decision-making. </li>
                            <li><b>PO5: Leadership and Managerial Skills:</b> Recognize and demonstrate leadership, managerial, and entrepreneurial capabilities for effective business management and team success. </li>
                            <li><b>PO6: Ethics and Professionalism:</b> Practice ethical standards, professional integrity, and responsible behaviour in business and organizational settings. </li>
                            <li><b>PO7: Teamwork and Collaboration:</b> Work effectively as an individual and as a member or leader in diverse teams, demonstrating respect for multi-cultural and cross-functional collaboration. </li>
                            <li><b>PO8: Creativity and Innovation:</b> Apply innovative thinking and creative problem-solving skills in business planning, product development, and strategic decision-making. </li>
                            <li><b>PO9: Emotional Intelligence and Decision-Making:</b> Demonstrate emotional intelligence, self-awareness, and the ability to make sound decisions in dynamic and complex business situations. </li>
                            <li><b>PO10: Lifelong Learning:</b> Engage in continuous learning and professional development to adapt to evolving business trends, tools, and technologies. </li>
                            <li><b>PO11: Research Aptitude:</b> Develop research skills and inquiry-based learning to conduct independent studies on Indian and global business challenges. </li>
                            <li><b>PO12: Social and Global Responsibility:</b> Exhibit civic responsibility and awareness of cultural, legal, environmental, and social issues, contributing meaningfully to national development and global citizenship. </li>
                        </ul>
                    </AccordionItem>
                    {/* <AccordionItem title="B.Com - Banking and Finance" titleClassName="font-bold text-lg text-[var(--button-red)]" bgClassName="bg-white">
                        <ul className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                            <li><b>PO1: Disciplinary Knowledge & Application:</b> Demonstrate a comprehensive understanding of concepts, principles, and practices in areas such as Accounting, Taxation, Finance, Auditing, and Business, with the ability to apply them in real-world business contexts.</li>
                            <li><b>PO2: Critical Thinking & Problem Solving:</b> Analyze, evaluate, and interpret business, financial, and economic issues using logical reasoning, quantitative tools, and strategic frameworks to propose innovative solutions.</li>
                            <li><b>PO3: Communication & Interpersonal Skills:</b> Exhibit effective oral and written communication skills and collaborate productively in diverse teams and professional environments.</li>
                            <li><b>PO4: Entrepreneurship & Innovation:</b> Identify and assess business opportunities, plan and manage entrepreneurial ventures, and contribute to economic development through innovative thinking.</li>
                            <li><b>PO5: Research Aptitude & Analytical Skills:</b> Apply research methodology, statistical tools, and data analysis techniques to conduct business research and inform decision-making.</li>
                            <li><b>PO6: Ethics, Responsibility & Sustainability:</b> Demonstrate ethical reasoning, social responsibility, and sensitivity to environmental and sustainability issues in personal and professional practices.</li>
                            <li><b>PO7: Digital & Technological Proficiency:</b> Utilize digital tools, platforms, and emerging technologies to enhance productivity and manage commerce-related functions effectively.</li>
                            <li><b>PO8: Global Outlook & Cross-Cultural Competence:</b> Develop awareness of global business, financial systems, and cross-cultural dynamics to operate effectively in international and multicultural environments.</li>
                            <li><b>PO9: Leadership & Teamwork:</b> Demonstrate leadership qualities, collaborative abilities, and conflict management skills to achieve organizational goals in dynamic business settings.</li>
                            <li><b>PO10: Lifelong Learning & Leadership:</b> Develop a growth mindset for lifelong learning, career development, and leadership roles in an evolving global business environment.</li>
                            <li><b>PO11: Quantitative & Financial Literacy:</b> Apply mathematical, statistical, and financial tools to analyze, interpret, and solve complex problems in banking, taxation, investment, and corporate finance.</li>
                            <li><b>PO12: Employability & Career Readiness:</b> Exhibit professional competence, career-oriented skills, and industry readiness to excel in corporate, banking, financial, and entrepreneurial careers.</li>
                        </ul>
                    </AccordionItem> */}
                    {/* <AccordionItem title="M.com - Banking and Finance" titleClassName="font-bold text-lg text-[var(--button-red)]" bgClassName="bg-white">
                        <ul className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                            <li>PO1: To create for the students of Kalinga University an additional avenue of self-employment and also to benefit Industries by providing them with suitable trained persons in the field of Commerce.</li>
                            <li>PO2: To prepare students to explore opportunities, being newly created, in the field of Commerce due to Globalization, Privatization and Liberalization.</li>
                            <li>PO3: To give an adequate exposure to operational environment in the field of Commerce.</li>
                            <li>PO4: To provide adequate basic understanding about the field of Commerce.</li>
                            <li>PO5: To inculcate training and practical approach among the students by using modern technologies in the field of Commerce.</li>
                            <li>PO6: The students are trained with the help of different presentations, projects and assignments to understand the dynamics of Trade in a better way.</li>
                        </ul>
                    </AccordionItem> */}
                </div>
            )
        },
        {
            id: 2,
            question: "Program Specific Outcomes (PSOs)",
            component: (
                <div className="space-y-4">
                    <AccordionItem title="Bachelor Of Commerce" titleClassName="font-bold text-lg text-[var(--button-red)]" bgClassName="bg-white">
                        <ul className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                            <li>Apply different concepts in starting and managing business and realize the social responsibilities, social realities and inculcate an essential value system</li>
                            <li>An ability to apply conceptual foundations of management to solve practical decision-making problems.</li>
                            <li>An ability to adapt to dynamic changes in an environment with an understanding of societal and ecological issues relevant to professional managerial practice through life-long experiential learning.</li>
                            <li>Develop excellent adaptability to function in the multi-disciplinary work environment, good interpersonal skills as a leader in a team in appreciation of professional ethics and societal responsibilities.</li>
                            <li>To ignite a passion for a multidisciplinary approach to problem solving, critical analysis, and decision making by giving due importance for lateral thanking so that management graduates see things from aa perspective that is not just simple but effective.</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem title="Master Of Commerce" titleClassName="font-bold text-lg text-[var(--button-red)]" bgClassName="bg-white">
                        <ul className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                            <li>Develop an ability to apply the knowledge acquired in problem-solving</li>
                            <li>Ability to work in teams with enhanced interpersonal skills and communication.</li>
                            <li>To develop an understanding of the conceptual framework of Management Accounting.</li>
                            <li>To inculcate the understanding of rules of measurement and reporting relating to various types of business entities.</li>
                            <li>To impart knowledge regarding strategic financial planning.</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem title="Bachelor Of Business Administration" titleClassName="font-bold text-lg text-[var(--button-red)]" bgClassName="bg-white">
                        <ul className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                            <li><b>PSO1: Functional Domain Expertise:</b> Apply analytical and conceptual knowledge across key functional areas of business (such as marketing, finance, HR, and operations) to contribute effectively to organizational performance. </li>
                            <li><b>PSO2: Strategic and Analytical Thinking:</b> Demonstrate strategic thinking, data interpretation, and problem-solving abilities to make informed and impactful business decisions in complex and dynamic environments. </li>
                            <li><b>PSO3: Ethical and Sustainable Practices:</b> Adopt and promote ethical, responsible, and sustainable business practices across various domains of business administration. </li>
                            <li><b>PSO4: Industry Readiness and Application:</b> Translate academic learning into practical solutions by engaging with industry practices, tools, and technologies relevant to contemporary business needs. </li>
                            <li><b>PSO5: Innovation and Value Creation:</b> Foster innovative thinking to create value-driven solutions that align with business goals and societal needs. </li>
                        </ul>
                    </AccordionItem>
                    {/* <AccordionItem title="B.Com - Banking and Finance" titleClassName="font-bold text-lg text-[var(--button-red)]" bgClassName="bg-white">
                        <ul className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                            <li><b>PSO1: Banking Operations and Regulatory Knowledge:</b> Demonstrate conceptual clarity and practical understanding of banking operations, financial services, risk management, and regulatory frameworks.</li>
                            <li><b>PSO2: Financial Systems, Investment, and Credit Management Expertise:</b> Apply knowledge of financial systems, investment strategies, and credit management to pursue careers in banking, financial institutions, or competitive financial roles.</li>
                            <li><b>PSO3: Accounting, Auditing, and Taxation for Financial Decision-Making:</b> Utilize accounting, auditing, taxation, and financial reporting skills to analyze organizational performance, ensure compliance, and support strategic financial decision-making.</li>
                            <li><b>PSO4: Digital Finance, FinTech, and Data Analytics Applications:</b> Integrate digital finance tools, FinTech applications, and data analytics techniques to improve efficiency, innovation, and decision-making in banking and financial services.</li>
                            <li><b>PSO5: Entrepreneurial Finance and Strategic Problem-Solving Skills:</b> Develop entrepreneurial thinking and financial problem-solving abilities to design business solutions, assess investment opportunities, and contribute to sustainable economic growth.</li>
                        </ul>
                    </AccordionItem> */}
                    {/* <AccordionItem title="M.Com - Banking and Finance" titleClassName="font-bold text-lg text-[var(--button-red)]" bgClassName="bg-white">
                        <ul className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                            <li>PSO1: The program is structured in such a way that it provides training in the field of finance, accounting, law, etc, among others.</li>
                            <li>PSO2: It covers the subjects of commerce, and communication skills. It also helps to train candidates how to efficiently handle technologies used in the field of Commerce.</li>
                            <li>PSO3: The main aim of this program is to provide students with a deep insight into the real world of Commerce through theory and practical sessions.</li>
                            <li>PSO4: It is structured to give a great career choice for those who wish to pursue their career in the Commerce field.</li>
                            <li>PSO5: It not only provides you with theoretical knowledge but also helps in its practical application and to provide ample exposure to students with market reforms, new policies and regulations.</li>
                        </ul>
                    </AccordionItem> */}
                </div>
            )
        },
        {
            id: 3,
            question: "Program Educational Objectives (PEOs)",
            component: (
                <div className="space-y-4">
                    <AccordionItem title="Bachelor Of Commerce" titleClassName="font-bold text-lg text-[var(--button-red)]" bgClassName="bg-white">
                        <ul className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                            <li>PEO1: To apply core business and management concepts effectively in real-world contexts, including entrepreneurial ventures and start-up initiatives.</li>
                            <li>PEO2: To demonstrate awareness and responsibility in areas such as safety, health, environmental sustainability, legal compliance, and cultural diversity to contribute positively to society. </li>
                            <li>PEO3: To pursue ongoing personal and professional growth through continuous learning, skill enhancement, and staying updated with industry standards and regulatory frameworks.</li>
                            <li>PEO4: To foster professionalism by actively collaborating with peers and stakeholders at local, national, and international levels to solve business challenges.</li>
                            <li>PEO5: To develop a global outlook and civic consciousness to effectively serve in diverse environments, upholding values that benefit both national interest and the broader global community. </li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem title="Bachelor Of Business Administration" titleClassName="font-bold text-lg text-[var(--button-red)]" bgClassName="bg-white">
                        <ul className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                            <li>PEO1: To apply core business and management concepts effectively in real-world contexts, including entrepreneurial ventures and start-up initiatives.</li>
                            <li>PEO2: To demonstrate awareness and responsibility in areas such as safety, health, environmental sustainability, legal compliance, and cultural diversity to contribute positively to society. </li>
                            <li>PEO3: To pursue ongoing personal and professional growth through continuous learning, skill enhancement, and staying updated with industry standards and regulatory frameworks. </li>
                            <li>PEO4: To foster professionalism by actively collaborating with peers and stakeholders at local, national, and international levels to solve business challenges. </li>
                            <li>PEO5: To develop a global outlook and civic consciousness to effectively serve in diverse environments, upholding values that benefit both national interest and the broader global community. </li>
                        </ul>
                    </AccordionItem>

                    <AccordionItem title="Master of Commerce" titleClassName="font-bold text-lg text-[var(--button-red)]" bgClassName="bg-white">
                        <ul className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                            <li>PEO-1: To provide knowledge and skills for being successful entrepreneurs and finance professionals in the field of Banking, Insurance, Manufacturing, Transport, Telecom, Service, Hospitality, IT and Academics. </li>
                            <li>PEO-2: To equip student with quantitative, qualitative, cognitive and analytical skills for identifying, analysing, designing and creating business opportunities in a global dynamic environment. </li>
                            <li>PEO-3: To make competent professionals with ethics, humility and societal needs through their holistic development. </li>
                            <li>PEO-4: To transform graduates capable of thinking strategically and to lead, motivate and manage multi-disciplinary teams thereby enhancing managerial effectiveness under all circumstances.</li>
                            <li>PEO-5: To prepare committed professionals with a sense of ‘giving back to the society’ through display of professional ethics, human dignity, empathy and humility in their professional and personal life.</li>
                        </ul>
                    </AccordionItem>
                    {/* <AccordionItem title="B.Com - Banking and Finance" titleClassName="font-bold text-lg text-[var(--button-red)]" bgClassName="bg-white">
                        <ul className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                            <li>PEO1: To equip students with in-depth knowledge and understanding of Banking and Finance, enabling them to build successful careers in accounting, taxation, financial management, entrepreneurship, and corporate sectors.</li>
                            <li>PEO2: To develop the ability to apply analytical, logical, and critical thinking skills to identify, analyze, and solve real-world business problems using appropriate tools, technologies, and research methodologies.</li>
                            <li>PEO3: To nurture leadership, ethical values, and interpersonal competencies among students, preparing them to work effectively in diverse teams and dynamic environments across domestic and organizations.</li>
                            <li>PEO4: To inspire students to pursue lifelong learning, innovation, and professional development in the field of commerce and finance.</li>
                            <li>PEO5: To create socially responsible graduates who demonstrate a strong sense of civic responsibility and sustainability, contributing meaningfully to society through inclusive and ethical business practices.</li>
                        </ul>
                    </AccordionItem> */}
                    {/* <AccordionItem title="M.Com - Banking and Finance" titleClassName="font-bold text-lg text-[var(--button-red)]" bgClassName="bg-white">
                        <ul className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                            <li>PEO1: To provide knowledge and skills for being successful entrepreneurs and finance professionals in the field of Banking, Insurance, Manufacturing, Transport, Telecom, Service, Hospitality, IT, and Academics.</li>
                            <li>PEO2: To equip students with quantitative, qualitative, cognitive and analytical skills for identifying, analysing, designing, and creating business opportunities in a global dynamic environment.</li>
                            <li>PEO3: To make competent professionals with ethics, humility and societal needs through their holistic development.</li>
                            <li>PEO4: To transform graduates capable of thinking strategically and to lead, motivate and manage multi-disciplinary teams thereby enhancing managerial effectiveness under all circumstances.</li>
                            <li>PEO5: To prepare committed professionals with a sense of ‘giving back to the society’ through display of professional ethics, human dignity, empathy and humility in their professional and personal life.</li>
                        </ul>
                    </AccordionItem> */}
                </div>
            )
        },
        {
            id: 4,
            question: "Course Outcomes (COs)",
            component: (
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                    <AccordionItem title="Bachelor Of Commerce" titleClassName="font-bold text-xl text-[var(--button-red)]" bgClassName="bg-white" defaultOpen={true}>
                        <div className="space-y-4 mt-4">
                            {[
                                { code: "BCOM101", name: "Financial Accounting", outcomes: "CO1: Understand the theoretical framework of accounting and to prepare financial statements.\nCO2: Determine depreciation and value of inventory\nCO3: Learn accounting for hire purchase transactions, leases, branches and departments.\nCO4: Understand the concepts of partnership firm and prepare accounts for dissolution of a partnership firm.\nCO5: Develop the skill of preparation of trading and profit and loss account and balance sheet using computerized accounting." },
                                { code: "BCOM102", name: "Principles And Practices of Management", outcomes: "CO1: Understand the evolution of management and apprehend its effect on future managers.\nCO2: Analyze how organizations adapt to an uncertain environment and decipher decision making techniques managers use to influence and control the internal environment.\nCO3: Comprehend the changes happening in organization structure over time\nCO4: Analyze the relationship amongst functions of management i.e. planning, organizing, directing and controlling\nCO5: Appreciate the changing dynamics of management practice." },
                                { code: "BCOM103", name: "Micro Economics", outcomes: "CO1: To explain the mechanics of supply and demand in allocating goods and services and resources.\nCO2: To describe how changes in demand and supply affect markets.\nCO3: To understand the choices made by a rational consumer.\nCO4: To identify relationships between production and costs.\nCO5: To define key characteristics and consequences of different forms of markets" },
                                { code: "BCOM104", name: "English", outcomes: "CO1: It will enhance Language of communication, various speaking skills such as personal communication, social interactions and communication in professional situations such as interviews, group discussions and office environments, important reading skills as well as writing skills such as report writing, note taking etc." },
                                { code: "BCOM105", name: "Computer Applications in Business", outcomes: "CO1: Bridge the fundamental concepts of computers with the present level of knowledge of the students\nCO2: Understand the practical concepts of MS Word, MS Excel and MS Power Point." },
                                { code: "BCOM201", name: "Cost Accounting", outcomes: "CO1: Recognize and apply appropriate theories, principles and concepts relevant to cost accounting.\nCO2: Exercise appropriate judgement in selecting and learning material/ inventory control concepts.\nCO3: Plan, design and execute labour requirement and procedures under different plans, and concepts.\nCO4: Understanding overheads and its ascertainment using different treatment techniques and practices.\nCO5: Learn problems relevant to different types of cost using ideas and techniques some of which are at forefront of the discipline." },
                                { code: "BCOM202", name: "Macro Economics", outcomes: "CO1: To identify the basic macroeconomic variables\nCO2: To identify economic growth and its determinants.\nCO3: To identify international factors affecting economies.\nCO4: To Analyze policies and its role.\nCO5: To Assess the external macro environment" },
                                { code: "BCOM203", name: "Business Mathematics and Statistics", outcomes: "CO1: To provide students with the understanding of role of quantitative techniques in business decision making.\nCO2: To prepare a common platform for students for better understanding of statistical tools.\nCO3: To familiarize the students of different streams about different quantitative techniques\nCO4: To understand in more specific Management related areas from planning till controlling." },
                                { code: "BCOM204", name: "Business Law", outcomes: "CO1: Understand characteristics of Indian Contract Act.\nCO2: Define Specific Contract, Contract of Indemnity of Indian contract Act.\nCO3: Describe features of the Sales of Good Act 1930.\nCO4: Identify the main provisions of The Partnership Act, 1932 and Limited liability partnership.\nCO5: Describe the provisions of Negotiable Instrument Act 1881." },
                                { code: "BCOM205A", name: "Environmental Studies", outcomes: "CO1: To understand fundamentals of environment\nCO2: To understand about the concept of natural resources.\nCO3: To understand about the concept biodiversity and conservation\nCO4: To understand environmental pollution.\nCO5: To understand Human Communities and the Environment." },
                                { code: "BCOM301", name: "Corporate Accounting", outcomes: "CO1: Develop an understanding of accounting for share capital and debentures\nCO2: Prepare financial statements of a company.\nCO3: Develop an understanding of cash flow statements.\nCO4: Understand the accounting for amalgamation and liquidation of companies.\nCO5: Prepare consolidated balance sheet for Holding company." },
                                { code: "BCOM302", name: "Human Resource Management", outcomes: "CO1: Understand basic nature and importance of human resource management and policies.\nCO2: Analyze the current theory and practice of recruitment and selection.\nCO3: Realize the importance of performance management system in enhancing employee performance.\nCO4: Recommend actions based on results of the compensation analysis and design compensation schemes that are cost effective, the increase productivity of the workforce.\nCO5: Understand role of modern HRM in meeting challenges of changing business environment." },
                                { code: "BCOM303", name: "Principles of Marketing", outcomes: "CO1: Understand the concepts and the principles of marketing.\nCO2: Analyze the concept of consumer buying behavior and its importance.\nCO3: Design the strategies used for product life cycle.\nCO4: Determine pricing policies and strategies of a product.\nCO5: Design promotion strategies used for a product" },
                                { code: "BCOM304", name: "Indian Financial System", outcomes: "CO1: Analyze the role of various markets in financial intermediation.\nCO2: Analyze the roles of various market regulators in Indian Financial System\nCO3: Identify the principles of operations of financial institutions and the issues faced by them.\nCO4: Understand the functionality of Financial market.\nCO5: Identify the roles played by various institutions" },
                                { code: "BCOM305", name: "Business Communication", outcomes: "CO1: Understand principles of effective business communication\nCO2: Recognize elements of corporate communication, its barriers and strategies to overcome it.\nCO3: Design office memos, Transactional, Directive Memo and Status memo\nCO4: Understand the skills for report writing and presentation\nCO5: Execute and Apply group discussion and interview skills." },
                                { code: "BCOM401", name: "Research Methodology", outcomes: "CO1: To create scientific attitude towards solving a management problem and impart knowledge about tools available for carrying out research.\nCO2: To introduce the basic concepts and need of research methodology that will help in data analysis and preparation of reports.\nCO3: To understand the use of research design and software in research\nCO4: To understand in reporting procedure of research activities." },
                                { code: "BCOM402", name: "Financial Management", outcomes: "CO1: Explain the concept of fundamental financial concepts, especially time value of money.\nCO2: Apply capital budgeting projects using traditional methods.\nCO3: Analyze he main ways of raising capital and their respective advantages and disadvantages in different circumstances\nCO4: Integrate the concept and apply the financial concepts to calculate ratios and do the capital budgeting." },
                                { code: "BCOM403", name: "Business Policy and Strategy", outcomes: "CO1: To understand strategic management process in management.\nCO2: To understand strategic management process in an organization\nCO3: To understand about the approaches to the Environment scanning\nCO4: To understand about internal analyses of organizations and their competitive environment.\nCO5: To understand more specific approaches to Strategy formation from models." },
                                { code: "BCOM404", name: "International Business", outcomes: "CO1: To Explain the concepts in international business with respect to foreign trade/international business\nCO2: To apply the current business phenomenon and to evaluate the global business environment in terms of economic, social and legal aspects.\nCO3: To analyse the principle of international business and strategies adopted by firms to expand globally.\nCO4: To understand exchange rate determination\nCO5: To integrate concept in international business concepts with functioning of global trade." },
                                { code: "BCOM405", name: "Indian Economy", outcomes: "CO1: To understand key concept of Indian economy.\nCO2: To familiarize with research terminologies and various types of research design.\nCO3: To get an insight into various policy regimes with respect to Indian economic scenario\nCO4: To get acquainted with various sectoral trends and issues.\nCO5: To have basic learning of unemployment and inflation in Indian economic scenario." },
                                { code: "BCOM501", name: "Income Tax : Law and Practice", outcomes: "CO1: To understand the basic concepts in the law of income tax and determine the residential status of different persons.\nCO2: To Identify the five heads in which income is categorised and compute income under the heads ‘Salaries’ and ‘Income from House Property’.\nCO3: To compute income under the head ‘Profits and gains of business or profession’, ‘Capital gains’ and ‘Income from other sources’.\nCO4: Tounderstand clubbing provisions, aggregate income after set-off and carry forward of losses, and deductions allowed under the Income Tax Act; and further to compute taxable income and tax liability of individuals and firms.\nCO5: To develop the ability to file online returns of income." },
                                { code: "BCOM502", name: "Value Based Leadership", outcomes: "CO1: The students will be able to identify the impact of changing from employee to leader and personality characteristics on leadership behavior.\nCO2: Students will be to understand and apply leaders role in implementing and managing change; motivation and communication strategies to manage team performance effectively.\nCO3: Decision making skills will be inculcated among the students to gather, assess, and use information to make informed and well-reasoned decisions as a leader\nCO4: Inculcation of leadership skills and exposure to the role of leaders in creating an organization culture." },
                                { code: "BCOM504", name: "E- Commerce", outcomes: "CO1: To analyze the impact of E-commerce on business models and strategy.\nCO2: To describe the major types of E-commerce.\nCO3: To explain the process that should be followed in building an E-commerce presence\nCO4: To identify the key security threats in the E-commerce environment\nCO5: To describe how procurement and supply chains relate to B2B E-commerce." },
                                { code: "BCOM505", name: "Financial Markets, Institutions and Financial Services", outcomes: "CO1: To understand the meaning and scope of financial markets as well as institutions in India.\nCO2: To understand the concepts of Money Market and Capital Market\nCO3: To explain Commercial Banking and its Current developments\nCO4: To explain concept of Non-Banking Financial Companies (NBFC’s).\nCO5: To examine the Financial Services Industry." },
                                { code: "BCOM506", name: "Industrial Relations and Labour Laws", outcomes: "CO1: To comprehend the evolution of Industrial Relations.\nCO2: To understand the concept of Trade Unions and the factors affecting it.\nCO3: To analyze the concept and process of collective bargaining.\nCO4: To evaluate the causes of Indiscipline and misconduct.\nCO5: To understand the concept of Industrial Dispute and Factories act for the employee welfare." },
                                { code: "BCOM507", name: "Management Accounting", outcomes: "CO1: To evaluate the application of management accounting and the various tools used.\nCO2: To making Inter-firm and inter-period comparison, of financial statements using ratios analysis.\nCO3: To prepare and learn different budgets for the business.\nCO4: To calculate and understanding the Material, Labor and overhead variances and its utility.\nCO5: To analyze Cost Volume Profit analysis and its applications in different situation." },
                                { code: "BCOM601", name: "Entrepreneurship Development", outcomes: "CO1: To understand the concepts of “entrepreneur”, “entrepreneurship” and their development in all forms and shapes.\nCO2: Effectively assess entrepreneurial opportunities and build the required business plan to reach entrepreneurial goals\nCO3: To understand the programs designed and formulated by Central, State governments and other important institution in entrepreneurship development.\nCO4: To understand the special challenges of starting new ventures and introducing new product and service ideas, the process of founding a startup.\nCO5: Comprehend the legal issues involved while setting up an enterprise and entrepreneurial financing." },
                                { code: "BCOM602", name: "Business Ethics & Corporate Social Responsibility", outcomes: "CO1: To Analyze the Employees conditions and Business Ethics.\nCO2: To analyze various ethical codes in corporate governance.\nCO3: To Enhance awareness and critical self-examination of one's own values.\nCO4: To appreciate the relevance of personal values in the business/workplace setting.\nCO5: To Analyze corporate social Responsibility." },
                                { code: "BCOM605", name: "Indirect Taxes", outcomes: "CO1: Analyze the concept and basic of Goods and Service Tax.\nCO2: Determine provisions relating to supply of goods and rendering services\nCO3: Determine valuation in Goods and service Tax and payment of Goods and Service Tax.\nCO4: Determine the concept and provisions relating to Inter Goods and Service Tax act.\nCO5: Compute Assessable value and customs Duty in Indirect Tax." },
                                { code: "BCOM606", name: "Credit Management and SME", outcomes: "CO1: Evaluate the role, importance and regulatory framework of Small and medium Enterprises.\nCO2: Identify the financial institutions providing finance to Small and medium Enterprise\nCO3: Comprehend the market promotion and technological developments in Small medium Enterprise \nCO4: Comprehend the concept of sick units and ways of restructuring them\nCO5: Evaluate credit facilities available for Small Medium Enterprises." },
                                { code: "BCOM607", name: "Performance Appraisal and Compensation Management", outcomes: "CO1: To understand performance appraisals is to measure and improve the performance of employees and increase their future potential and value to the company.\nCO2: To Review the appraisee's performance and clearly summaries the agreed level of performance.\nCO3: To understand about the role of human resources management in dealing with employees, and methods used to provide compensation\nCO4: To understand a sound knowledge of job evaluation approaches and provide an understanding of how job evaluation fits into the broader context of human resources management, and to provide practical skills in the application of job evaluation systems.\nCO5: To understand profit sharing plans to retain employee in order to improve productivity" },
                                { code: "BCOM608", name: "Advertising And Brand Management", outcomes: "CO1: To understand key concept of Advertising.\nCO2: To understand about the Advertising aids and Media.\nCO3: To understand about the Brand\nCO4: To understand in more specific Brand Adoption Practices" }
                            ].map((course, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                    <h5 className="font-bold text-[var(--foreground)] mb-1">{course.code}: {course.name}</h5>
                                    <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{course.outcomes}</div>
                                </div>
                            ))}
                        </div>
                    </AccordionItem>

                    <AccordionItem title="Master Of Commerce" titleClassName="font-bold text-xl text-[var(--button-red)]" bgClassName="bg-white">
                        <div className="space-y-4 mt-4">
                            {[
                                { code: "MCOM101", name: "Business Statistics", outcomes: "CO1: To impart knowledge of theory of Probability and Probability Distribution.\nCO2: To understand the statistical decision theory.\nCO3: To discern the sampling distribution and estimation.\nCO4: To examine general methodology of Hypothesis testing.\nCO5: Assess the analysis of variance and Non-parametric Tests." },
                                { code: "MCOM102", name: "MANAGERIAL ACCOUNTING", outcomes: "CO1: To understand the nature and functions of Management Accounting.\nCO2: To Learn about Activity Based Costing.\nCO3: To examine the variable and absorption costing.\nCO4: To discuss about managerial decision making.\nCO5: To discern about the Responsibility Accounting and Divisional Performance Measurement." },
                                { code: "MCOM103", name: "FINANCIAL PLANNING", outcomes: "CO1: To know basic introduction of financial planning.\nCO2: To understand the types of Investment Environment.\nCO3: To discuss about the return risk assessment.\nCO4: To discern about personal financial planning and process.\nCO5: To recognize the credit planning and retirement planning." },
                                { code: "MCOM104", name: "COMMUNICATION SKILLS", outcomes: "CO1: Understand the role of communication in personal & professional success.\nCO2: Prepare and present messages with a specific intent.\nCO3: Will develop knowledge, skills, and judgment around human communication that facilitate their ability to work collaboratively with others.\nCO4: Will learn etiquettes and gestures for business purpose.\nCO5: Will have a practical knowledge of employability quotient." },
                                { code: "MCOM105", name: "ORGANISATIONAL THEORY AND BEHAVIOUR", outcomes: "CO1: Understand the concept of organizational behavior.\nCO2: Strengthen the foundations of individual behavior with an understanding of human personality, perception, leading and emotions.\nCO3: Understand the process of leadership.\nCO4: Understand the behavioral approach to Managerial decision-making.\nCO5: Develop an understanding of teams and groups in organizations." },
                                { code: "MCOM201", name: "QUANTITATIVE TECHNIQUES FOR BUSINESS DECISIONS", outcomes: "CO1: To understand the fundamental of decision making.\nCO2: To acquainted with the concepts of linear programming and Sensitivity analysis.\nCO3: To discuss about the transportation, assignment and trans-shipment.\nCO4: To examine the concepts of inventory management.\nCO5: To assess the concepts and application of PERT and CPM techniques." },
                                { code: "MCOM202", name: "FINANCIAL MANAGEMENT AND POLICY", outcomes: "CO1: Explain the concept of fundamental financial concepts, especially time value of money.\nCO2: Apply capital budgeting projects using traditional methods.\nCO3: Analyze the main ways of raising capital and their respective advantages and disadvantages in different circumstances.\nCO4: Integrate the concept and apply the financial concepts to calculate ratios and do the capital budgeting." },
                                { code: "MCOM203", name: "LEGAL ASPECTS OF BUSINESS", outcomes: "CO1: To have knowledge of law relating to transfer of property.\nCO2: To understand the general concept relating to registration of societies.\nCO3: Discern the concept and development of intellectual property law in India.\nCO4: Get acquainted with law relating to competition and consumer protection.\nCO5: Assess the law relating to Right to Information Act, 2005." },
                                { code: "MCOM204", name: "INTERNATIONAL BUSINESS", outcomes: "CO1: Explain the concepts in international business with respect to foreign trade/ international business.\nCO2: Apply the current business phenomenon and to evaluate the global business environment in terms of economic, social and legal aspects.\nCO3: Analyze the principle of international business and strategies adopted by firms to expand globally.\nCO4: Understand exchange rate determination.\nCO5: Integrate concept in international business concepts with functioning of global trade." },
                                { code: "MCOM205", name: "MARKETING MANAGEMENT", outcomes: "CO1: Understand basic about marketing and modern marketing concept.\nCO2: Develop and understanding of product and pricing decisions.\nCO3: Students understand channel management of distributors and retailing strategies.\nCO4: Understand communication mix elements in marketing.\nCO5: Understand recent trance in marketing." },
                                { code: "MCOM301", name: "Strategic Management", outcomes: "CO1: Understand the concept and role of strategy.\nCO2: Learn about the environmental scanning techniques.\nCO3: Comprehend about the strategic options at business level.\nCO4: Recognize about the Situation Specific Strategies.\nCO5: Interpret the strategy implementation and control." },
                                { code: "MCOM302", name: "RESEARCH METHODOLOGY", outcomes: "CO1: Understand about the basics of research.\nCO2: Learn various kinds of research design.\nCO3: Interpret about the measurement and scaling techniques.\nCO4: Comprehend about the methods of data collection.\nCO5: Discern about the interpretation of data and report writing." },
                                { code: "MCOM304", name: "PRINCIPLES AND PRACTICE OF TAXATION AND INDIAN TAX SYSTEM", outcomes: "CO1: To acquainted with Introduction and benefit principle of Taxation.\nCO2: To discuss about the methods to alleviate international tax duplication.\nCO3: To discern about tax incidence and tax evasion in India.\nCO4: To get knowledge about the Constitutional Provisions Pertaining to Taxes.\nCO5: Assess the tax Reforms in Direct and Indirect Taxes." },
                                { code: "MCOM305", name: "CORPORATE LAW", outcomes: "CO1: Understand the origin and growth of company law.\nCO2: Familiar with Companies and its formation.\nCO3: Get knowledge about management and control of companies such as appointment, managerial remuneration.\nCO4: Discern about accounts and audit.\nCO5: Study related to functions and powers of SEBI in relation to securities markets." },
                                { code: "MCOM306", name: "STRATEGIC COST MANAGEMENT", outcomes: "CO1: Develop an understanding of accounting for cost Management and SCM.\nCO2: Develop an understanding life cycle costing, ABC and target costing.\nCO3: Prepare reporting quality cost.\nCO4: Understand pricing strategies.\nCO5: Prepare business process Re-engineering." },
                                { code: "MCOM401", name: "CORPORATE GOVERNANCE ETHICS AND SOCIAL RESPONSIBILITY OF BUSINESS", outcomes: "CO1: Knowledge about the concept of business ethics.\nCO2: Understand about the conceptual framework of corporate governance.\nCO3: Learning about the corporate management.\nCO4: Recognize about the role and functions of Board Committees.\nCO5: : Explain about the major corporate failures." },
                                { code: "MCOM402", name: "ENTREPRENEURSHIP", outcomes: "CO1: Knowledge related with the entrepreneur & entrepreneurship process.\nCO2: Understand about creating entrepreneurial venture.\nCO3: Learning about the functional and marketing plan.\nCO4: Explain about sources of finance.\nCO5: Discern about enterprise management." },
                                { code: "MCOM404", name: "CORPORATE TAX STRUCTURE AND PLANNING", outcomes: "CO1: Understand the introduction of Tax Planning.\nCO2: Acquainted with the Assessment of companies.\nCO3: Discuss the Tax Planning and Specific Management Decisions.\nCO4: Discern Tax Planning and Financial Management Decisions\nCO5: Get knowledge of business Reorganization." },
                                { code: "MCOM405", name: "INDUSTRIAL LAW", outcomes: "CO1: Become familiar with Employees Provident fund and schemes.\nCO2: Understand the Employees state Insurance Act 1948.\nCO3: Gain knowledge about Factories Act 1948.\nCO4: Discern about the topic Industrial Disputes Act 1947.\nCO5: Discuss about Trade Unions act 1926." },
                                { code: "MCOM406", name: "ACCOUNTING THEORY AND FINANCIAL REPORTING", outcomes: "CO1: Get acquainted with Accounting theory and Accounting Principles.\nCO2: Knowledge of various concepts of Income measurement.\nCO3: Understand the nature and benefits of financial reporting.\nCO4: Discuss an issue in corporate financial reporting.\nCO5: Assess the human resource accounting and social reporting." }
                            ].map((course, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                    <h5 className="font-bold text-[var(--foreground)] mb-1">{course.code}: {course.name}</h5>
                                    <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{course.outcomes}</div>
                                </div>
                            ))}
                        </div>
                    </AccordionItem>

                    <AccordionItem title="Bachelor of Business Administration" titleClassName="font-bold text-xl text-[var(--button-red)]" bgClassName="bg-white">
                        <div className="space-y-4 mt-4">
                            {[
                                { code: "BBA101", name: "Principles & Practices of Management", outcomes: "CO1: Demonstrate how management principles are used to solve practical business Problems. \nCO2: Compare and contrast different management theories and their effectiveness in various organizational contexts. \nCO3: Design a management strategy for a hypothetical or real organization using a mix of management theories and practices. \nCO4: Propose innovative management solutions to enhance efficiency and effectiveness in given business scenarios. \nCO5: Assess the impact of change management and CSR in business" },
                                { code: "BBA102", name: "Financial Accounting", outcomes: "CO1: Understand and explain the basic concepts, needs, and functions of accounting, including the accounting process and system. \nCO2: Record business transactions accurately in journals and ledgers, and prepare trial balances while applying accounting principles. \nCO3: Prepare final accounts for sole proprietorship firms and interpret their financial implications. \nCO4: Explain the structure of corporate financial statements and prepare company accounts incompliance. \nCO5: Demonstrate an understanding of green accounting and sustainability reporting, including IFRS sustainability disclosure standards." },
                                { code: "BBA103", name: "Business Statistics and Logic", outcomes: "CO1: Demonstrate data handling skills with clarity and logical reasoning. \nCO2: Outline the relevant concepts of Statistics to a given context/business scenario.\nCO3: Organize business data and conduct statistical treatment. \nCO4: Evaluate and interpret data using appropriate statistical techniques. \nCO5: Explain data trends using appropriate statistical models." },
                                { code: "BBA104", name: "Communicative English - I", outcomes: "CO1: Develop a better understanding of advanced grammar rules and write grammatically correct sentences.\nCO2: Acquire wide vocabulary and punctuation rules and learn strategies for error-free communication. \nCO3: Interpret texts, pictures and improve both reading and writing skills which would help them in their academic as well as Professional career.\nCO4: Comprehend language and improve speaking skills in academic and social contexts.\nCO5: Develop, share and maximize new ideas with the concept of brainstorming and the documentation of key critical thoughts." },
                                { code: "BBA105", name: "Fundamentals of Information Technology", outcomes: "CO1: Gain a foundational understanding of key IT concepts, including hardware, software, and networks.\nCO2: Develop proficiency in using common computer applications, such as word processing and spreadsheet software.\nCO3: Explore the ethical and security considerations in IT, emphasizing responsible digital behaviour.\nCO4: Acquire problem-solving skills by applying IT knowledge to real world scenarios.\nCO5: Prepare for further studies in IT or related fields by establishing a strong IT knowledge base." },
                                { code: "BBA106", name: "Environmental Science", outcomes: "CO1: Master core concepts and methods from ecological and physical sciences and their application in environmental problem solving. \nCO2: Appreciate the ethical, cross-cultural, and historical context of environmental issues and the links between human and natural systems. \nCO3: Apply systems concepts and methodologies to analyze and understand interactions between social and environmental processes. \nCO4: Reflect critically about their roles and identities as citizens, consumers and environmental actors in a complex, interconnected world. \nCO5: Master core concepts and methods from economic, political, and social analysis as they pertain to the design and evaluation of environmental policies and institutions. " },
                                { code: "BBA107P", name: "Fundamentals of Information Technology Lab", outcomes: "CO1: Gain a foundational understanding of key IT concepts, including hardware, software, and networks. \nCO2: Develop proficiency in using common computer applications, such as word processing and spreadsheet software. \nCO3: Explore the ethical and security considerations in IT, emphasizing responsible digital behaviour. \nCO4: Acquire problem-solving skills by applying IT knowledge to real world scenarios. \nCO5: Prepare for further studies in IT or related fields by establishing a strong IT knowledge base." },
                                { code: "BBA108", name: "Meta Skills-I", outcomes: "CO1: Develop self-awareness and personal growth by understanding potential, building a growth mindset, and crafting a vision-driven life. \nCO2: Cultivate a positive attitude and emotional intelligence to manage emotions effectively, reframe negativity, and enhance self-belief and resilience. \nCO3: Strengthen confidence and self-efficacy through practical strategies for handling setbacks, overcoming fear, and leveraging affirmations for personal empowerment. \nCO4: Enhance communication skills, including verbal, non-verbal, interpersonal, and group communication, to express ideas clearly and interact effectively in diverse settings. \nCO5: Apply aptitude and problem-solving skills using logical reasoning, numerical methods and analytical shortcuts to solve quantitative and reasoning challenges efficiently." },
                                { code: "BBA201", name: "Human Behavior and Organization", outcomes: "CO1: Describe individual and group behavior in organizational settings. \nCO2: Demonstrate theoretical knowledge of human behavior in human life setting in management. \nCO3: Judge the lacunae in the system to be able to improve the organization health and other OB outcomes. \nCO4: Formulate a more productive system and high-performance work culture operating on the principles of OB. \nCO5: Analyse and apply motivational, communication, and leadership strategies to enhance employee engagement an organizational effectiveness." },
                                { code: "BBA202", name: "Marketing Management", outcomes: "CO1: Understand fundamental marketing concepts, theories and principles; the role of marketing in the organization context. \nCO2: Recognize various elements of marketing mix for effective functioning of an organization. \nCO3: Critically analyze an organization’s marketing strategies. \nCO4: Learn appropriate tools and techniques of marketing with focus on Indian experiences, approaches and cases. \nCO5: Evaluate marketing implementation strategies and formulate and assess strategic, operational and tactical marketing decisions." },
                                { code: "BBA203", name: "Business Economics", outcomes: "CO1: Understand basic concepts of microeconomics and solve the problem of reallocation and distribution of the scarce resources. \nCO2: To analyze the form and nature of the market and their pricing strategies. CO3: Understand the calculation of national income and true measure for increasing economic welfare. \nCO4: Understand various challenges associated with the Indian economy and help to balance the economy.\nCO5: Explain the role of government and economic reforms in promoting sustainable and inclusive economic growth." },
                                { code: "BBA204", name: "Communicative English-II", outcomes: "CO1: Acquire Vision, Goals and Strategies through Audio-visual Language Texts.\nCO2: Synthesize complex concepts and present them in creative writing \nCO3: Develop MTI Reduction/Neutral Accent through Classroom Sessions & Practice CO4 Determine their role in achieving team success through defining strategies for effective communication with different people.\nCO4: Realize their potentials as human beings and conduct themselves properly in the ways of world. \nCO5: Acquire satisfactory competency in use of Quantitative aptitude and Logical Reasoning." },
                                { code: "BBA205", name: "Corporate Governance", outcomes: "CO1: Describe the concept of corporate governance and its significance and discuss different theories of corporate governance. \nCO2: Demonstrate the role of different stakeholders in corporate governance and interpret concepts like insider trading, shareholder activism, and CSR. \nCO3: Relate major global corporate failures and the international codes that were developed in response. \nCO4: Judge the regulatory framework of corporate governance in India, major corporate failures in India and the common governance problems associated with these failures. \nCO5: Explain real-world case studies of corporate governance practices and propose strategies for enhancing transparency, accountability, and ethical conduct in organizations." },
                                { code: "BBA206A", name: "Cyber Security", outcomes: "CO1: Define the key concepts of cyber security, cyberspace, cyber threats, cyber warfare, CIA Triad, and cyber terrorism. \nCO2: Identify different types of hackers, cybercrimes, malware, worms, viruses, trojans, and backdoors. \nCO3: Explain ethical hacking concepts, social engineering techniques, insider threats, and preventive strategies for securing information systems. \nCO4: Understand the principles and process of cyber forensics, evidence collection, auditing, and introduction to ISO 27001:2013 standards. \nCO5: Interpret cyber laws, IT Act 2000 provisions, cyber offences and penalties, e-commerce regulations, and intellectual property rights in cyberspace." },
                                { code: "BBA206B", name: "Disaster Management", outcomes: "CO1: Define key concepts, types, causes, and impacts of disasters, including physical, social, economic, political, environmental, and psychosocial aspects. CO2: Identify various forms of vulnerability (physical, economic, social) and factors that increase disaster risk. \nCO3: Explain the disaster management cycle, phases, and principles of disaster risk reduction, including community-based strategies. \nCO4: Understand national and international disaster management frameworks, policies, plans, and legislative initiatives. \nCO5: Explain emergency management processes and the role of agencies such as NIDM, NDRF, NCDC, Fire Brigade, and local administration through training and workshops." },
                                { code: "BBA207P", name: "Advanced Excel for Business Lab", outcomes: "CO1: Demonstrate the ability to apply advanced Excel tools and functions for solving business and analytical problems. \nCO2: Perform data cleaning, validation, and transformation processes to prepare datasets for analysis. \nCO3: Use formulas, Pivot Tables, and What-If Analysis techniques to analyze business scenarios and support decision-making. \nCO4: Design professional dashboards and visual reports that effectively communicate business insights. \nCO5: Develop and implement Excel Macros and VBA scripts to automate repetitive business tasks and enhance efficiency." },
                                { code: "BCOM208", name: "Meta Skills-II", outcomes: "CO1: To apply aptitude and logical reasoning techniques to solve quantitative and analytical problems effectively. \nCO2: To demonstrate enhanced memory, creative thinking, and study strategies to improve academic and professional performance. \nCO3: To work efficiently in teams by exhibiting leadership, trust, accountability, and conflict management skills. \nCO4: To develop entrepreneurial competencies by creating, validating, and pitching innovative business ideas. \nCO5: To exhibit professional behaviour and etiquette in workplace settings, including effective communication and digital professionalism." },
                                { code: "BBA301", name: "Financial Management", outcomes: "CO1: Summarize the motives behind financial decision making. \nCO2: Interpret the relevant theories and concepts of various practices of financial management and ethics in Finance. \nCO3: Analyze the relationship among capital structure, cost of capital. \nCO4: Analyze and evaluate investment projects using traditional and modern capital budgeting techniques. \nCO5: Identify and evaluate the determinants influencing dividend policies & working capital management." },
                                { code: "BBA302", name: "Cost and Management Accounting", outcomes: "CO1: Interpret the relevant theories and concepts of cost and management accounting, and prepare cost sheets and quotations accurately. \nCO2: Ascertain and control material costs using inventory techniques and pricing methods. \nCO3: Calculate labor costs and apply various methods of wage payments, including incentive plans. \nCO4: Allocate and apportion overhead costs effectively for accurate cost determination. \nCO5: Analyze financial statements and cash flow reports to support managerial decision-making and prepare management reports for different organizational levels." },
                                { code: "BBA303", name: "Legal and Ethical Issues in Business", outcomes: "CO1: Recall major laws and regulations and ethical principles that guide business conduct. \nCO2: Analyse case studies to identify legal and ethical challenges within business operations. \nCO3: Evaluate the effectiveness of existing legal frameworks in governing business practices. \nCO4: Propose solutions to ethical dilemmas based on ethical theories and principles that align with corporate social responsibility.\nCO5: Implements the philosophical and ethical knowledge by way of practical enhancement" },
                                { code: "BBA304", name: "Universal Human Values", outcomes: "CO1: Understand the significance of value inputs in a classroom, distinguish between values and skills,understand the need, basic guidelines, content and process of value education, explore the meaning of happiness and prosperityand do a correct appraisal of the current scenario in the society. \nCO2: Distinguish between the Self and the Body, understand the meaning of Harmony in the Self the Co-existence of Self and Body. \nCO3: Understand the value of harmonious relationship based on trust, respect and other naturally acceptable feelings in human-human relationships and explore their role in ensuring a harmonious society. \nCO4: Understand the harmony in nature and existence, and work out their mutually fulfilling participation in the nature. \nCO5: Distinguish between ethical and unethical practices, and start working out the strategy to actualize a harmonious environment wherever they work." },
                                { code: "BBA305", name: "Logical Skill Building and Soft Skills", outcomes: "CO1: Ascertain a competency level through Building Essential Language and Life Skills. \nCO2: Build positive emotional competence in self and learn GOAL Setting and SMART Goals techniques. \nCO3: Apply positive thinking, goal setting and success-focused attitudes, time Management, which would help them in their academic as well as professional career. \nCO4: Acquire satisfactory competency in use of aptitude, logical and analytical reasoning. \nCO5: Demonstrate an ability to apply various quantitative aptitude tools for making business decisions." },
                                { code: "BBA306A", name: "Database Management System (DBMS)", outcomes: "CO1: Understand Data, Database system and its architecture. \nCO2: Apply ER modelling and Relational Database design using Normalization.\nCO3: Apply concepts of database storage and querying. \nCO4: Understand Concurrency, Recovery and Security mechanism in DBMS.\nCO5: Understand Current advances in DBMS." },
                                { code: "BBA306B", name: "Management Information System (MIS)", outcomes: "CO1: Understand the basic concepts, types, dimensions, and components of MIS, and evaluate the benefits and evolution of IT infrastructure in the digital firm era. \nCO2: Apply database management principles by setting up and managing DBMS packages, creating Entity-Relationship diagrams, and understanding data models, data warehouses, and administration techniques. \nCO3: Analyze various MIS applications, including DSS, GDSS, and knowledge management systems, and develop e-commerce solutions by leveraging enterprise models, business process reengineering, and digital communication strategies. \nCO4: Evaluate project management objectives and methodologies, including agile practices such as SCRUM, and manage projects effectively to control risk factors and understand ethical, social, and political issues in the information era.\nCO5: Understand and evaluate the role of emerging technologies." },
                                { code: "BBA307A", name: "Indian Culture and Constitution of India", outcomes: "CO1: Identify and explore the basic features and modalities about Indian constitution. \nCO2: Differentiate and relate the functioning of Indian parliamentary system at the center and state level. \nCO3: Differentiate different aspects of Indian Legal System and its related bodies.\nCO4: Discover and apply different laws and regulations related to engineering practices. \nCO5:Correlate role of engineers with different organizations and governance e-models." },
                                { code: "BBA307B", name: "Yoga", outcomes: "CO1: Gain a comprehensive understanding of yoga and its modern applications for holistic well-being. \nCO2: Demonstrate proficiency in yogic anatomy and physiology, enhancing yoga practice and promoting physical and energetic balance. \nCO3: Master the Eight Limbs of Yoga and comprehend their psychological impact, fostering personal growth and self-realization. \nCO4: Integrate yoga principles into sports and physical fitness activities to enhance performance and prevent injuries. \nCO5: Develop skills in wellness management and nutrition." },
                                { code: "BBA401", name: "Strategic Management", outcomes: "CO1:Explain the basic concept of strategic management. \nCO2:Apply environmental scanning and internal appraisal methods identify strategic advantages and opportunities. \nCO3:Evaluate corporate-level strategies and business-level competitive strategies. \nCO4:Conduct strategic analysis and choice using tools. \nCO5:Design strategy implementation plans and employing evaluation techniques for strategic and operational performance." },
                                { code: "BBA402", name: "Human Resources Management", outcomes: "CO1: Explain how Functional HRM contributes in organizational management.\nCO2: Analyze all HR Functions like recruitment selection, performance management, compensation benefit, Training and Development and Career Management/Talent Management.\nCO3: Apply HR analytics, HR with innovation. \nCO4: Create sustainable goals with diversity, Inclusion and wellness. \nCO5: Evaluate strategic HR initiatives to enhance organizational effectiveness and drive long-term business success." },
                                { code: "BBA403", name: "Operations Management", outcomes: "CO1: Understand the core principles of operations management and their significance in enhancing efficiency, quality, and customer satisfaction. \nCO2: Analyze different production systems and develop strategies aligned with business objectives. \nCO3: Optimize operational processes through effective process design, layout decisions, and capacity anning. \nCO4: Implement quality management principles to enhance product/service quality and reduce defects. \nCO5: Evaluate emerging trends in operations management, such as sustainable operations and technological advancements." },
                                { code: "BBA404", name: "International Business", outcomes: "CO1: Demonstrate and interpret the fundamental theories of international business and trade. \nCO2: Develop an understanding of the concept of Foreign Direct Investment and its impact on various world economy. \nCO3: Analyse the significance of economic Integration in International Business. \nCO4: Appraise and develop a comprehensive understanding of global emerging trends and Stakeholder engagement. \nCO5: Apply international business strategies and cross-cultural management skills to real- world global trade and investment decisions." },
                                { code: "BBA405", name: "Personality Development & Decision Making Skills", outcomes: "CO1: Develop self-confidence, personality awareness, and interpersonal effectiveness to create a positive personal and professional impression. \nCO2: Apply logical and analytical reasoning skills to solve numerical, spatial, and argument-based problems. \nCO3: Solve quantitative and data interpretation problems using mathematical concepts and logical techniques. \nCO4: Enhance verbal reasoning and language proficiency through cloze tests and sentence arrangement exercises. \nCO5: Demonstrate charismatic personality traits and communication skills to improve personal influence and professional presence." },
                                { code: "BBA406", name: "Srimad Bhagavad GitaManual of Life and Universe", outcomes: "CO1: To learn the scientific aspects of the Bhagavad Gita. \nCO2: To explore how the timeless wisdom of the Gita can be integrated into modern life to foster holistic well-being. \nCO3: To discover practical methods from the Gita to manage and reduce stress, anxiety, and overwhelm in personal and professional life. \nCO4: To gain insights from the Gita on building meaningful and harmonious relationships, enhancing effective communication, and critical thinking. \nCO5: To develop mindfulness and meditation practices based on Gita teachings to enhance selfawareness, inner peace, and bhakti for achieving the ultimate goal of life." },
                                { code: "BBA501", name: "Entrepreneurial Development", outcomes: "CO1: Explain the concept of entrepreneurship and its role in economic development. \nCO2: Identify and evaluate business opportunities through market research and feasibility studies. \nCO3: Develop a comprehensive business plan, including financial, marketing, and operational strategies. \nCO4: Understand the legal and regulatory aspects of starting a business. \nCO5: Demonstrate knowledge of financial planning, including funding sources and cost management." },
                                { code: "BBA502", name: "Income Tax", outcomes: "CO1: To understand the basic concepts in the law of income tax and determine the residential status of different persons. \nCO2: To identify the five heads in which income is categorised and compute income under the heads Salaries’ and Income from House Property’. \nCO3: To compute income under the head ‘Profits and gains of business or profession’, ‘Capital gains’and ‘Income from other sources’. \nCO4: To understand clubbing provisions, aggregate income after set-off and carry forward of losses,and deductions allowed under the Income Tax Act; and further to compute taxable income and tax liability of individuals and firms. \nCO5: To develop the ability to file online returns of income." },
                                { code: "BBA503", name: "Logistic and Supply Chain Management", outcomes: "CO1: Describe the strategic role of supply chain management in improving organizational competitiveness. \nCO2: Explain the design and optimization of supply chain networks, including considerations for ecommerce operations. \nCO3: Analyse the impact of sourcing and pricing decisions on supply chain efficiency and effectiveness. \nCO4: Demonstrate skills in coordinating and managing supply and demand in a globalized market environment. \nCO5: Practices in supply chain operations to enhance performance and resilience" },
                                { code: "BBA506P", name: " Internship Assessment", outcomes: "CO1: Learning from experts (contemporary/traditional). CO2: Understanding the material cultures, techniques, tools, relevant skills as well as the philosophies behind the various practices that the interns will engage with. CO3: Inculcating experiential learning CO4: Generating employability and entrepreneurship CO5: Understanding the possibilities of developing art eco-system in the region." },
                                { code: "BBA601", name: "Project Management", outcomes: "CO1: Define project management concepts, importance, and applications. CO2: Apply project planning, scheduling, and budgeting techniques. CO3: Analyse risk factors and develop mitigation strategies. CO4: Evaluate and control project progress using monitoring tools. CO5: Demonstrate knowledge of contemporary project management practices including agile and sustainable approaches." },
                                { code: "BBA602", name: "Local to Global Management", outcomes: "CO1: Explain the concepts and determinants of rural development and identify challenges affecting rural growth. CO2: Assess the functioning of rural community structures and their contribution to sustainable development. CO3: Evaluate the global business environment and its impact on international trade and cooperation. CO4: Analyse the policies, functions, and current initiatives of international economic institutions. CO5: Interpret trade policies, investment trends, and trade barriers between India and other countries." },
                                { code: "BBA605P", name: "Project with Research Paper Publication", outcomes: "CO1: Identify and formulate a research problem relevant to commerce and management. CO2: Apply suitable research design, data sources, and basic analytical tools for conducting research. CO3: Collect, analyze, and interpret primary or secondary data to derive meaningful findings. CO4: Prepare a structured project report and research paper following standard academic writing and referencing norms. CO5: Demonstrate the ability to present research findings and submit a research paper to a journal or conference." },
                            ].map((course, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                    <h5 className="font-bold text-[var(--foreground)] mb-1">{course.code}: {course.name}</h5>
                                    <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{course.outcomes}</div>
                                </div>
                            ))}
                        </div>
                    </AccordionItem>
                </div>
            )
        }
    ];

    const commerceActivities = [
        {
            id: 1,
            title: "Ideathon 1.0",
            date: "26 & 27 Nov, 2021",
            imageSrc: "https://cdn.kalingauniversity.ac.in/departments/Faculty of Commerece and Management/Ideathon/ideathon-images-1.webp",
            imageAlt: "Ideathon 1.0",
            description: "Ideathon 1.0 - A flagship event providing a platform for students to showcase their innovative ideas, business plans, and entrepreneurial spirit.",
            buttonText: "Read More"
        },
        {
            id: 2,
            title: "Ideathon 2.0",
            date: "16 - 18 Nov, 2022",
            imageSrc: "https://cdn.kalingauniversity.ac.in/departments/Faculty of Commerece and Management/Ideathon/ideathon-images-2.webp",
            imageAlt: "Ideathon 2.0",
            description: "Ideathon 2.0 - Building on the success of the first edition, this event brought together brilliant minds to solve complex business challenges.",
            buttonText: "Read More"
        }
    ];

    const facultyMembers = [
        { name: "Dr. Deepak Tiwari", designation: "Assistant Professor" },
        { name: "Dr. Arvind Kumar Tiwari", designation: "Assistant Professor" },
        { name: "Dr. Poonam Singh", designation: "Assistant Professor" },
        { name: "Ms. Shivangi Makade", designation: "Assistant Professor" },
        { name: "Dr. Prashant Kumar Jha", designation: "Assistant Professor" },
        { name: "Dr. Chandra Bhooshan Singh", designation: "Assistant Professor" },
        { name: "Mr. Shubham Singh Chandel", designation: "Assistant Professor" },
        { name: "Ms. Angel Mary Xess", designation: "Assistant Professor" },
        { name: "Dr. Jyotsna Dwivedi", designation: "Assistant Professor" },
        { name: "Dr. Priyam Vishwakarma", designation: "Assistant Professor" },
        { name: "Dr. Divya Nandini Sharma", designation: "Assistant Professor" }
    ];

    const bbaFacultyMembers = [
        { name: "Dr. Satvik Jain", designation: "Assistant Professor" },
        { name: "Dr. Utkarsh Anand", designation: "Assistant Professor" },
        { name: "Dr. Sandeep Soni", designation: "Assistant Professor" },
        { name: "Ms. Mariyam Ahmed", designation: "Assistant Professor" },
        { name: "Dr. Abhishek Sharma", designation: "Assistant Professor" },
        { name: "Dr. Sonam Dubey", designation: "Assistant Professor" },
        { name: "Dr. Jagan Mohan", designation: "Assistant Professor" },
        { name: "Dr. Ashish Kumar Sahu", designation: "Assistant Professor" },
        { name: "Dr. Aida Ventkat Rao Dora", designation: "Assistant Professor" },
        { name: "Dr. T Gayatri Murty", designation: "Assistant Professor" },
        { name: "Dr. Amitesh Barman", designation: "Assistant Professor" },
        { name: "Dr. Shilpi Nishant Tanwani", designation: "Assistant Professor" },
        { name: "Dr. Ankita Saxena", designation: "Assistant Professor" },
        { name: "Ms. Shreya Sharma", designation: "Assistant Professor" },
        { name: "Ms.Milan Singh", designation: "Assistant Professor" }
    ];

    const swayamCoursesColumns = [
        { key: "year", label: "Year", width: "w-20" },
        { key: "facultyName", label: "Name of Faculty", width: "w-48" },
        { key: "programTitle", label: "Title of Program", width: "flex-1" },
        { key: "organizedBy", label: "Organized By", width: "w-40" },
        { key: "duration", label: "Duration (From–To)", width: "w-48" }
    ];

    const swayamCoursesData = [
        { year: "2024", facultyName: "Mr. Rakshak Bharati", programTitle: "Organization Development and Change in 21st Century", organizedBy: "NPTEL / SWAYAM", duration: "July–Sep 2024 (8 Weeks)" }
    ];

    const navigationTabs = [
        { id: 'about', label: 'About' },
        { id: 'programs', label: 'Programs' },
        { id: 'activities', label: 'Events & Activities' },
        { id: 'faculty', label: 'Faculty' },
        { id: 'library', label: 'Library' },
        { id: 'feedback', label: 'Feedback' },
        { id: 'placements', label: 'Placements' },
        { id: 'facilities', label: 'Facilities' },
    ];

    return (
        <>
            <CourseNavigation tabs={navigationTabs} />
            <div id="about" className="scroll-mt-24 md:scroll-mt-28">
                <MainIntro
                    title={mainIntroContent.title}
                    description={mainIntroContent.description}
                    imageUrl={mainIntroContent.imageUrl}
                    imageAlt={mainIntroContent.imageAlt}
                    showKnowMore={false}
                />
                <VisionMissionUpdated
                    visionText={visionMissionContent.visionText}
                    missionText={visionMissionContent.missionText}
                />
            </div>
            {!loading && programsOffered.length > 0 && (
                <div id="programs" className="scroll-mt-24 md:scroll-mt-28">
                    <ProgramsOffered
                        programs={programsOffered}
                        title="Programs Offered"
                        description={programsOverview}
                        hideSearch={true}
                        {...(programsImage && { backgroundImage: programsImage })}
                    />
                </div>
            )}
            <FAQ
                items={faqItems}
                title="Academic Objectives & Outcomes"
                subtitle="Outcome"
                backgroundColor="bg-white"
            />

            {/* <MediaCardSlider
                categoryTitle=""
                title="Internship Opportunities At KU"
                description="At KU, you don’t have to wait till graduation, but we’ll help you get a sneak peek into the practical world with our internship programs, which will also make your CV stand out during your job interviews."
                videoItems={commerceVideoItems}
                backgroundColor="bg-light-gray"
                cardBgClass="bg-lite-sand"
                nameTextClass="text-[var(--button-red)]"
                descriptionTextClass=""
                swiperClassName="ccrc-video-slider"
                imageObjectPosition="object-center"
            /> */}
            <div id="activities" className="scroll-mt-24 md:scroll-mt-28">
                <StudentActivities
                    activities={commerceActivities}
                    title="Commerce Events & Activities"
                />
            </div>
            {clubsData && clubsData.length > 0 && (
                <UpcomingConference
                    title={`Introducing Our Commerce Club`}
                    registerButtonText="Join Now"
                    imageContainerClass="object-contain py-16 h-[350px]"
                    conferences={clubsData}
                    showCategory={false}
                    showDate={false}
                />
            )}

            <div id="faculty" className="scroll-mt-24 md:scroll-mt-28">
                <FacultyList
                    items={facultyMembers}
                    title="Our Commerce Faculty"
                    description="Commerce Faculty"
                    departmentName={departmentData?.name}
                />
                <FacultyList
                    items={bbaFacultyMembers}
                    title="BBA Faculty"
                    description="BBA Faculty"
                    departmentName={departmentData?.name}
                />
            </div>
            {/* <section className="py-16 bg-white">
                <div className="text-center mb-10">
                    <SectionHeading
                        title="List of Faculty Completed SWAYAM / NPTEL Course"
                        titleClassName="text-center !py-2"
                    />
                </div>
                <DataTable
                    columns={swayamCoursesColumns}
                    data={swayamCoursesData}
                    overflowX={true}
                    className="mb-12 text-center"
                />
            </section> */}
            <div id="library" className="scroll-mt-24 md:scroll-mt-28">
                <StudentCell
                    subtitle=""
                    title="Library"
                    imageSrc="https://cdn.kalingauniversity.ac.in/facilities/library-new.webp"
                    imageAlt="Kalinga University Central Library"
                    description="Kalinga University, Raipur, hosts a modern and fully digitized Central Library that serves as a pivotal academic resource center supporting the learning, teaching, and research needs of the Commerce program. Designed to foster a scholarly environment, the library integrates both traditional and digital resources with state-of-the-art services."
                    functionsTitle="Library Resources & Automation"
                    functionsSubtitle="Commerce Department Specifics & Digital Services:"
                    functionsList={[
                        "Comprehensive collection of volumes of commerce and management books",
                        "National and International e-Journals",
                        "Fully automated using KOHA Library Management Software",
                        "Online Public Access Catalogue (OPAC)",
                        "Turnitin and Drillbit anti-plagiarism softwares"
                    ]}
                />
            </div>
            <div id="feedback" className="scroll-mt-24 md:scroll-mt-28">
                <OrganogramOfKalinga
                    title="Feedback"
                    useContainer={true}
                    description="Your responses will help us improve our academic quality and learning experience."
                    showImage={false}
                    imageUrl="https://cdn.kalingauniversity.ac.in/about/Organogram.png"
                    imageAlt="Kalinga University Organogram"
                    buttons={[
                        {
                            id: 1,
                            text: "Course Exit Survey – Commerce",
                            onClick: () => handleOpenSurvey("course-exit-survey", "Course Exit Survey - Commerce")
                        },
                        {
                            id: 2,
                            text: "Students - Commerce",
                            onClick: () => handleOpenSurvey("students", "Students - Commerce")
                        },
                        {
                            id: 3,
                            text: "Teachers - Commerce",
                            onClick: () => handleOpenSurvey("teachers", "Teachers - Commerce")
                        },
                        {
                            id: 4,
                            text: "Employer - Commerce",
                            onClick: () => handleOpenSurvey("employer", "Employer - Commerce")
                        },
                        {
                            id: 5,
                            text: "Alumni - Commerce",
                            onClick: () => handleOpenSurvey("alumni", "Alumni - Commerce")
                        },
                    ]}
                />
            </div>

            <Modal
                isOpen={feedbackModalConfig.isOpen}
                onClose={handleCloseSurvey}
                title={feedbackModalConfig.title}
            >
                <SurveyForm
                    courseId={5} // Using courseId: 5 as specified
                    category={feedbackModalConfig.category}
                    onSuccess={handleCloseSurvey}
                />
            </Modal>
            <div id="placements" className="scroll-mt-24 md:scroll-mt-28">
                <Placements
                    placementData={departmentData}
                    bgColor="bg-white"
                    marginClassName="mt-10"
                    customRecruiterTitle="Top Management recruiters"
                    customImages={[
                        'https://cdn.kalingauniversity.ac.in/Home/placement1.webp',
                        'https://cdn.kalingauniversity.ac.in/Home/placement2.webp',
                        'https://cdn.kalingauniversity.ac.in/Home/placement3.webp',
                        'https://cdn.kalingauniversity.ac.in/Home/placement4.webp',
                        'https://cdn.kalingauniversity.ac.in/Home/placement5.webp',
                        'https://cdn.kalingauniversity.ac.in/Home/placement6.webp',
                        'https://cdn.kalingauniversity.ac.in/Home/place-1.png',
                        'https://cdn.kalingauniversity.ac.in/Home/place-2.png',
                        'https://cdn.kalingauniversity.ac.in/Home/place-3.png',
                        'https://cdn.kalingauniversity.ac.in/Home/place-4.png',
                        'https://cdn.kalingauniversity.ac.in/Home/place-5.png'
                    ]}
                />
            </div>

            <div id="facilities" className="scroll-mt-24 md:scroll-mt-28">
                <Facility />
            </div>
        </>
    );
}
