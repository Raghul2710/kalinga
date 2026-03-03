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
import UpcomingConference from "@/app/components/research/upcoming_conference";
import MediaCardSlider from "@/app/components/general/media-card-slider";

export default function CommerceDepartmentPage() {
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    const mainIntroContent = {
        title: "About the Department of Commerce",
        description: [
            "If you enjoy decoding numbers and helping businesses make financial decisions, choose commerce.",
            "The Department of Commerce focuses on imparting the highest quality of education and exposure related to the economy and businesses to produce next-gen leaders. Learn how to operate a business while exploring the impact of economic, social, cultural, political, and technological decisions positively or negatively on companies and society.",
            "With our innovative teaching pedagogy, students become well-equipped with various problem-solving skills through case studies and practical exposure. Our programs offer units that focus on key principles of commerce and their application in the industry. The vision of this department is to ensure that our students have an industry-relevant degree"
        ],
        imageUrl: "https://cdn.kalingauniversity.ac.in/departments/Faculty+of+Commerece+and+Management/cm-1.webp",
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
        visionText: "Vision will be shared.",
        missionText: {
            paragraphs: ["Mission will be shared."],
            pointsHeading: "Mission Statements",
            points: []
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
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-[var(--button-red)]">Bachelor Of Commerce</h4>
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
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-[var(--button-red)]">Master Of Commerce</h4>
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
                    </div>
                </div>
            )
        },
        {
            id: 2,
            question: "Program Specific Outcomes (PSOs)",
            component: (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-[var(--button-red)]">Bachelor Of Commerce</h4>
                        <ul className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                            <li>Apply different concepts in starting and managing business and realize the social responsibilities, social realities and inculcate an essential value system</li>
                            <li>An ability to apply conceptual foundations of management to solve practical decision-making problems.</li>
                            <li>An ability to adapt to dynamic changes in an environment with an understanding of societal and ecological issues relevant to professional managerial practice through life-long experiential learning.</li>
                            <li>Develop excellent adaptability to function in the multi-disciplinary work environment, good interpersonal skills as a leader in a team in appreciation of professional ethics and societal responsibilities.</li>
                            <li>To ignite a passion for a multidisciplinary approach to problem solving, critical analysis, and decision making by giving due importance for lateral thanking so that management graduates see things from aa perspective that is not just simple but effective.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-[var(--button-red)]">Master Of Commerce</h4>
                        <ul className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                            <li>Develop an ability to apply the knowledge acquired in problem-solving</li>
                            <li>Ability to work in teams with enhanced interpersonal skills and communication.</li>
                            <li>To develop an understanding of the conceptual framework of Management Accounting.</li>
                            <li>To inculcate the understanding of rules of measurement and reporting relating to various types of business entities.</li>
                            <li>To impart knowledge regarding strategic financial planning.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            question: "Course Outcomes (COs)",
            component: (
                <div className="space-y-8 max-h-[600px] overflow-y-auto pr-2">
                    <div>
                        <h4 className="font-bold text-xl mb-4 text-[var(--button-red)] border-b pb-2">Bachelor Of Commerce</h4>
                        <div className="space-y-4">
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
                                <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
                                    <h5 className="font-bold text-[var(--foreground)] mb-1">{course.code}: {course.name}</h5>
                                    <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{course.outcomes}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-4 text-[var(--button-red)] border-b pb-2">Master Of Commerce</h4>
                        <div className="space-y-4">
                            {[
                                { code: "MCOM101", name: "Business Statistics", outcomes: "CO1: To impart knowledge of theory of Probability and Probability Distribution.\nCO2: To understand the statistical decision theory.\nCO3: To discern the sampling distribution and estimation.\nCO4: To examine general methodology of Hypothesis testing.\nCO5: Assess the analysis of variance and Non-parametric Tests." },
                                { code: "MCOM102", name: "MANAGERIAL ACCOUNTING", outcomes: "CO1: To understand the nature and functions of Management Accounting.\nCO2: To Learn about Activity Based Costing.\nCO3: To examine the variable and absorption costing.\nCO4: To discuss about managerial decision making.\nCO5: To discern about the Responsibility Accounting and Divisional Performance Measurement." },
                                { code: "MCOM103", name: "FINANCIAL PLANNING", outcomes: "CO1: To know basic introduction of financial planning.\nCO2: To understand the types of Investment Environment.\nCO3: To discuss about the return risk assessment.\nCO4: To discern about personal financial planning and process.\nCO5: To recognize the credit planning and retirement planning." },
                                { code: "MCOM104", name: "COMMUNICATION SKILLS", outcomes: "CO1: Understand the role of communication in personal & professional success.\nCO2: Prepare and present messages with a specific intent.\nCO3: Will develop knowledge, skills, and judgment around human communication that facilitate their ability to work collaboratively with others.\nCO4: Will learn etiquettes and gestures for business purpose.\nCO5: Will have a practical knowledge of employability quotient." },
                                { code: "MCOM105", name: "ORGANISATIONAL THEORY AND BEHAVIOUR", outcomes: "CO1: Understand the concept of organizational behavior.\nCO2: Strengthen the foundations of individual behavior with an understanding of human personality, perception, learning and emotions.\nCO3: Understand the process of leadership.\nCO4: Understand the behavioral approach to Managerial decision-making.\nCO5: Develop an understanding of teams and groups in organizations." },
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
                                <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
                                    <h5 className="font-bold text-[var(--foreground)] mb-1">{course.code}: {course.name}</h5>
                                    <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{course.outcomes}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const commerceActivities = [
        {
            id: 1,
            title: "Ideathon 1.0",
            date: "26 & 27 Nov, 2021",
            imageSrc: "https://cdn.kalingauniversity.ac.in/departments/Faculty+of+Commerece+and+Management/ma-e-1.jpeg",
            imageAlt: "Ideathon 1.0",
            description: "Ideathon 1.0 - A flagship event providing a platform for students to showcase their innovative ideas, business plans, and entrepreneurial spirit.",
            buttonText: "Read More"
        },
        {
            id: 2,
            title: "Ideathon 2.0",
            date: "16 - 18 Nov, 2022",
            imageSrc: "https://cdn.kalingauniversity.ac.in/departments/Faculty+of+Commerece+and+Management/ma-e-2.jpeg",
            imageAlt: "Ideathon 2.0",
            description: "Ideathon 2.0 - Building on the success of the first edition, this event brought together brilliant minds to solve complex business challenges.",
            buttonText: "Read More"
        }
    ];

    const facultyMembers = [
        { name: "Dr. R. Shridhar", designation: "Vice-Chancellor, Professor" },
        { name: "Dr. Akash Bhattacharya", designation: "Assistant Professor" },
        { name: "Dr. Arup Kumar Haldar", designation: "Associate Professor" },
        { name: "Dr. Arvind Kumar Saxena", designation: "Associate Professor" },
        { name: "Dr. Atul Bhardwaj", designation: "Associate Professor" },
        { name: "Dr. Lalit Sachdeva", designation: "Associate Professor" },
        { name: "Mr. Rakshak Bharti", designation: "Assistant Professor" },
        { name: "Prof. Byju John", designation: "Director General" }
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

    return (
        <>
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
            {!loading && programsOffered.length > 0 && (
                <ProgramsOffered
                    programs={programsOffered}
                    title="Programs Offered"
                    description={programsOverview}
                    hideSearch={true}
                    {...(programsImage && { backgroundImage: programsImage })}
                />
            )}
            <FAQ
                items={faqItems}
                title="Academic Objectives & Outcomes"
                subtitle="Outcome"
                backgroundColor="bg-white"
            />

            <MediaCardSlider
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
            />
            <StudentActivities
                activities={commerceActivities}
                title="Commerce Events & Activities"
            />
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

            <FacultyList
                items={facultyMembers}
                title="Our Commerce Faculty"
                description="Faculty of Commerce and Management"
                departmentName={departmentData?.name}
            />
            <section className="py-16 bg-white">
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
            </section>
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
            <OrganogramOfKalinga
                useContainer={true}
                description="Kalinga University follows a well-structured governance model to ensure smooth administration and institutional integrity."
                showImage={false}
                imageUrl="https://cdn.kalingauniversity.ac.in/about/Organogram.png"
                imageAlt="Kalinga University Organogram"
                buttons={[
                    {
                        id: 1,
                        text: "Faculty Feedback Form",
                        onClick: () => setIsFeedbackModalOpen(true)
                    }
                ]}
            />

            <Modal
                isOpen={isFeedbackModalOpen}
                onClose={() => setIsFeedbackModalOpen(false)}
                title="Faculty Feedback Form"
            >
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3 border font-plus-jakarta-sans font-semibold text-sm">S. No</th>
                                <th className="p-3 border font-plus-jakarta-sans font-semibold text-sm">I am able to</th>
                                {[5, 4, 3, 2, 1].map(num => (
                                    <th key={num} className="p-3 border text-center font-plus-jakarta-sans font-semibold text-sm">{num}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                "Understand and get acquainted with the concept of Financial, Cost and Management Accounting.",
                                "Apply the principles of accounting and learn how to prepare financial statements.",
                                "Apply the knowledge about analysis and interpretation of financial data."
                            ].map((question, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                    <td className="p-3 border text-sm font-plus-jakarta-sans">{idx + 1}</td>
                                    <td className="p-3 border text-sm font-plus-jakarta-sans">{question}</td>
                                    {[5, 4, 3, 2, 1].map(num => (
                                        <td key={num} className="p-3 border text-center">
                                            <input
                                                type="radio"
                                                name={`q-${idx}`}
                                                className="w-4 h-4 accent-[var(--button-red)] cursor-pointer"
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-8 flex justify-end">
                        <GlobalArrowButton
                            className="!bg-[var(--button-red)] !text-white"
                            onClick={() => {
                                alert("Thank you for your feedback!");
                                setIsFeedbackModalOpen(false);
                            }}
                        >
                            Submit Feedback
                        </GlobalArrowButton>
                    </div>
                </div>
            </Modal>

            <Facility />
        </>
    );
}
