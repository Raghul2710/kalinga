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
import APITable from "@/app/components/general/api-table";
import OrganogramOfKalinga from "@/app/components/about/organogram_of_kalinga";
import { fetchDepartmentCompleteDetail, fetchAllDepartmentsCourses } from "@/app/lib/api";
import Facility from "@/app/components/admissions/facility";
import Modal from "@/app/components/general/Modal";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";
import StudentCell from "@/app/components/international-students/student_cell";
import UpcomingConference from "@/app/components/research/upcoming_conference";
import Placements from "@/app/components/home/placements";
import SurveyForm from "@/app/components/general/SurveyForm";
import CourseNavigation from "@/app/components/general/course-navigation";
import VisionFeedbackForm from "@/app/components/forms/VisionFeedbackForm";
import StakeholderFeedbackForm from "@/app/components/forms/StakeholderFeedbackForm";
import ResearchSixGridButtons from "@/app/components/research/research_six_grid-buttons";
import FlipbookTrigger from "@/app/components/general/FlipbookTrigger";

export default function ManagementDepartmentPage() {
    const [feedbackModalConfig, setFeedbackModalConfig] = useState({ isOpen: false, category: "", title: "" });

    const handleOpenSurvey = (category, title) => {
        setFeedbackModalConfig({ isOpen: true, category, title });
    };

    const handleCloseSurvey = () => {
        setFeedbackModalConfig(prev => ({ ...prev, isOpen: false }));
    };
    const mainIntroContent = {
        title: "About the Department of Management",
        description: [
            "If leadership, managing people, and decision-making excite you, choose management.",
            "The Department of Management Studies of KU trains young managers with a global level of knowledge about managerial and entrepreneurial skills. They will be prepared to tackle industrial challenges using skills that drive success in the competitive business environment. With seminars, guest lectures, and industrial visits, they will experience a complete holistic development.",
            "Our programs related to the department of management are designed to make future leaders plan wisely, make strategic decisions, and execute every action confidently. These programs are tailored to develop skilled professionals who can contribute meaningfully to the industry and economy."
        ],
        imageUrl: "https://cdn.kalingauniversity.ac.in/common/student.jpg",
        imageAlt: "Department of Management",
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
                console.error("Error loading Management department data:", error);
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
                const name = (course.name || "").toLowerCase();
                const shortName = (course.short_name || "").toUpperCase();
                return (name.includes("management") ||
                    shortName.includes("MBA") ||
                    shortName.includes("PGDM")) &&
                    !shortName.includes("BBA");
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
    const programsOverview = programSyllabusImage?.programs_offered_overview || departmentData?.programs_offered_overview || "Explore our management programs designed to empower your professional journey.";

    const visionMissionContent = {
        visionText: "To educate and empower young business leaders through innovative teaching, hands-on training, and impactful research, fostering successful managers and entrepreneurs with a strong sense of social responsibility.",
        missionText: {
            paragraphs: ["The Department of Management is committed to achieving excellence through its core mission goals:"],
            pointsHeading: "Mission Statements",
            points: [
                "M1: To equip students with essential skills by providing exposure to cutting-edge knowledge through innovative teaching and impactful research.",
                "M2: To foster entrepreneurship, nurture creativity, and promote ethical, values-based education.",
                "M3: To enhance competitiveness and create ample opportunities for rewarding managerial careers.",
                "M4: To impart the knowledge, skills, and mindset required for effective managerial roles while instilling a strong sense of responsibility and corporate citizenship."
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

    const swayamCoursesColumns = [
        { key: "year", label: "Year", width: "w-20" },
        { key: "facultyName", label: "Name of Faculty", width: "w-48" },
        { key: "programTitle", label: "Title of Program", width: "flex-1" },
        { key: "organizedBy", label: "Organized By", width: "w-40" },
        { key: "duration", label: "Duration (From–To)", width: "w-48" }
    ];

    const swayamCoursesData = [
        { year: "2025", facultyName: "Dr. Shinki K Pandey", programTitle: "Leadership for India Inc: Practical Concepts and Constructs", organizedBy: "NPTEL / SWAYAM", duration: "Jan–Apr 2025 (12 Weeks)" },
        { year: "2025", facultyName: "Ms. Dawakit Lepcha", programTitle: "Managing Change in Organization", organizedBy: "NPTEL / SWAYAM", duration: "Jan–Mar 2025 (8 Weeks)" },
        { year: "2025", facultyName: "Mr. Rakshak Bharti", programTitle: "Management of Field Sales", organizedBy: "NPTEL / SWAYAM", duration: "Jan–Feb 2025 (4 Weeks)" },
        { year: "2025", facultyName: "Mr. Shubham Singh Chandel", programTitle: "Advances in Strategic HRM", organizedBy: "NPTEL / SWAYAM", duration: "Jan–Feb 2025 (4 Weeks)" },
        { year: "2025", facultyName: "Ms. Dawakit Lepcha", programTitle: "Management of New Products & Services", organizedBy: "NPTEL / SWAYAM", duration: "Jan–Feb 2025 (4 Weeks)" },
        { year: "2025", facultyName: "Dr. Kanchan Thakur", programTitle: "Human Behaviour", organizedBy: "NPTEL / SWAYAM", duration: "Jan–Apr 2025 (12 Weeks)" },
        { year: "2025", facultyName: "Dr. Nishtha Sharma", programTitle: "Leadership for India Inc: Practical Concepts and Constructs", organizedBy: "NPTEL / SWAYAM", duration: "Feb–Apr 2025 (8 Weeks)" },
        { year: "2025", facultyName: "Dr. Deepti Patnaik", programTitle: "Principles of Management", organizedBy: "NPTEL / SWAYAM", duration: "Jan–Apr 2025 (12 Weeks)" },
        { year: "2024", facultyName: "Mr. Rakshak Bharati", programTitle: "Organization Development and Change in 21st Century", organizedBy: "NPTEL / SWAYAM", duration: "July–Sep 2024 (8 Weeks)" },
        { year: "2024", facultyName: "Dr. Deepti Patnaik", programTitle: "Organizational Behavior", organizedBy: "NPTEL / SWAYAM", duration: "July–Oct 2024 (12 Weeks)" },
        { year: "2024", facultyName: "Dr. Nishtha Sharma", programTitle: "Organizational Behavior", organizedBy: "NPTEL / SWAYAM", duration: "July–Oct 2024 (12 Weeks)" },
        { year: "2024", facultyName: "Ms. Deepti Patnaik", programTitle: "Behavioral and Personal Finance", organizedBy: "NPTEL / SWAYAM", duration: "Jan–Mar 2024 (8 Weeks)" },
        { year: "2024", facultyName: "Ms. Nishtha Sharma", programTitle: "Strategic Performance Management", organizedBy: "NPTEL / SWAYAM", duration: "Jan–Mar 2024 (8 Weeks)" },
        { year: "2023", facultyName: "Ms. Shinki K Pandey", programTitle: "Brand Management", organizedBy: "NPTEL / SWAYAM", duration: "July–Dec 2023 (8 Weeks)" },
        { year: "2023", facultyName: "Ms. Nishtha Sharma", programTitle: "Business and Sustainable Development", organizedBy: "NPTEL / SWAYAM", duration: "July–Dec 2023 (4 Weeks)" }
    ];

    const swayamFaqItems = [
        {
            id: 1,
            question: "List of Faculty Completed SWAYAM / NPTEL Course",
            component: (
                <DataTable
                    columns={swayamCoursesColumns}
                    data={swayamCoursesData}
                    overflowX={true}
                    className="text-center"
                />
            )
        },
        {
            id: 2,
            question: "Appreciation from Industry",
            component: (
                <APITable tableId="87" title="" showTableTitle={false} />
            )
        }
    ];

    const faqItems = [
        {
            id: 1,
            question: "Program Outcomes (POs)",
            answer: [
                "Program Outcomes (POs) are attributes of the graduates of the program that are indicative of the graduates’ ability and competence to work as a management professional upon graduation. Program Outcomes are statements that describe what students are expected to know or be able to do by the time of graduation. They must relate to knowledge and skills that they acquire from the program. The achievement of all outcomes indicates that the student is well prepared to achieve the program educational objectives down the road. The following 8 POs have been chosen by the MBA Department of Kalinga University.",
                "PO 1: Generic and Domain Knowledge - Apply knowledge of management theories and practices to solve business problems.",
                "PO 2: Critical Thinking- Foster Analytical and critical thinking abilities for data-based decision making.",
                "PO 3: Leadership - Ability to develop Value based Leadership ability.",
                "PO 4: Effective Communication - Ability to understand, analyze and communicate global, economic, legal, and ethical aspects of business.",
                "PO 5: Teamwork- Ability to lead themselves and others in the achievement of organizational goals, contributing effectively to a team environment.",
                "PO 6: Entrepreneurship – Ability to identify entrepreneurial opportunities and apply managerial and leadership skills to launch, lead, and grow startups or professionalize family businesses.",
                "PO 7: Environment and Sustainability – Ability to understand sustainable development and evaluate the impact of managerial decisions on society, the economy, and the environment.",
                "PO 8: Lifelong Learning – Ability to operate independently in new environment, acquire new knowledge and skills and assimilate them into the internalized knowledge and skills."
            ]
        },
        {
            id: 2,
            question: "Program Educational Objectives (PEOs)",
            answer: [
                "PEO 1: Apply business and management principles in practical scenarios, including Start-up and Entrepreneurship initiatives.",
                "PEO 2: Demonstrate analytical reasoning and innovative thinking to develop feasible, optimal solutions when addressing professional challenges.",
                "PEO 3: Exhibit strong ethical values, integrity, and a high level of commitment in both personal and professional spheres."
            ]
        },
        {
            id: 3,
            question: "Program Specific Outcomes (PSOs)",
            answer: [
                "PSO1: Ability to apply specialized knowledge from core domains such as Marketing, Finance, Human Resources, and Operations to solve business problems effectively.",
                "PSO2: Exhibit strategic thinking, data-driven analysis, and problem-solving skills to make informed and effective business decisions in dynamic environments.",
                "PSO3: Ability to identify business opportunities, create innovative solutions, and demonstrate entrepreneurial skills to launch or scale ventures with sustainability in focus."
            ]
        },
        {
            id: 4,
            question: "Course Outcomes (CO)",
            component: (
                <div className="w-full h-[600px] bg-white rounded-lg overflow-hidden shadow-inner">
                    <iframe
                        src="https://cdn.kalingauniversity.ac.in/departments/Faculty+of+Commerece+and+Management/MBA+all+COs+compiled.pdf#toolbar=0&navpanes=0&scrollbar=0"
                        className="w-full h-full border-none"
                        title="MBA Course Outcomes"
                    />
                </div>
            )
        }
    ];


    const research_six_grid_buttons1 = [
        {
            id: 1,
            text: "Placement 2021-22",
            href: "https://cdn.kalingauniversity.ac.in/departments/MBA/Placement-2021-22.pdf",
            disableFlipbook: true
        },
        {
            id: 2,
            text: "Placement 2022-23",
            href: "https://cdn.kalingauniversity.ac.in/departments/MBA/Placement-2022-23.pdf",
            disableFlipbook: true
        },
        {
            id: 3,
            text: "Placement 2023-24",
            href: "https://cdn.kalingauniversity.ac.in/departments/MBA/Placement-2023-24.pdf",
            disableFlipbook: true
        }
    ];

    const ideathonActivities = [
        {
            id: 1,
            title: "Ideathon 1.0",
            date: "26 & 27 Nov, 2021",
            imageSrc: "https://cdn.kalingauniversity.ac.in/departments/MBA/Ideathon/ideathon-images-1.webp",
            imageAlt: "Ideathon 1.0",
            description: "Ideathon 1.0 - A flagship event providing a platform for students to showcase their innovative ideas, business plans, and entrepreneurial spirit.",
            buttonText: "Read More",
            buttonlink: "https://cdn.kalingauniversity.ac.in/departments/MBA/Ideathon/Ideathon-1.0.webp"
        },
        {
            id: 2,
            title: "Ideathon 2.0",
            date: "16 - 18 Nov, 2022",
            imageSrc: "https://cdn.kalingauniversity.ac.in/departments/MBA/Ideathon/ideathon-images-2.webp",
            imageAlt: "Ideathon 2.0",
            description: "Ideathon 2.0 - Building on the success of the first edition, this event brought together brilliant minds to solve complex business challenges.",
            buttonText: "Read More",
            buttonlink: "https://cdn.kalingauniversity.ac.in/departments/MBA/Ideathon/Ideathon-2.0.png"
        },
        {
            id: 3,
            title: "Ideathon 3.0",
            date: "5 - 6 Jan, 2024",
            imageSrc: "https://cdn.kalingauniversity.ac.in/departments/MBA/Ideathon/ideathon-images-3.webp",
            imageAlt: "Ideathon 3.0",
            description: "Ideathon 3.0 - Continued the tradition of fostering innovation and providing students with industry insights and mentorship.",
            buttonText: "Read More",
            buttonlink: "https://cdn.kalingauniversity.ac.in/departments/MBA/Ideathon/Ideathon-3.0.png"
        },
        {
            id: 4,
            title: "Ideathon 4.0",
            date: "22 & 23 Nov, 2024",
            imageSrc: "https://cdn.kalingauniversity.ac.in/departments/Faculty+of+Commerece+and+Management/ma-e-1.jpeg",
            imageAlt: "Ideathon 4.0",
            description: "Ideathon 4.0 - Focused on sustainable business models and creative problem-solving in a rapidly changing global economy.",
            buttonText: "Read More",
            buttonlink: "https://cdn.kalingauniversity.ac.in/departments/MBA/Ideathon/Ideathon-4.0.png"
        },
        {
            id: 5,
            title: "Ideathon 5.0",
            date: "4 & 5 Nov, 2025",
            imageSrc: "https://cdn.kalingauniversity.ac.in/departments/Faculty+of+Commerece+and+Management/ma-e-5.jpeg",
            imageAlt: "Ideathon 5.0",
            description: "Ideathon 5.0 - The latest iteration of the competition, pushing boundaries and celebrating the entrepreneurial achievements of our students.",
            buttonText: "Read More",
            buttonlink: "https://cdn.kalingauniversity.ac.in/departments/MBA/Ideathon/Ideathon-5.0.png"
        }
    ];

    const facultyMembers = [
        { name: "Dr. R. Shridhar", designation: "Professor", Qualification: "Ph.D", doj: "14-11-2013" },
        { name: "Prof. Byju John", designation: "Professor", Qualification: "Ph.D", doj: "06-04-2019" },
        { name: "Dr. Arup Kumar Haldar", designation: "Associate Professor", Qualification: "Ph.D", doj: "16-12-2016" },
        { name: "Dr. Arvind Kumar Saxena", designation: "Associate Professor", Qualification: "Ph.D", doj: "03-09-2018" },
        { name: "Dr. Atul Bhardwaj", designation: "Associate Professor", Qualification: "Ph.D", doj: "08-05-2019" },
        { name: "Dr. Lalit Sachdeva", designation: "Associate Professor", Qualification: "Ph.D", doj: "24-12-2020" },
        { name: "Dr. Pankaj Tiwari", designation: "Associate Professor", Qualification: "Ph.D", dOJ: "27-06-2022" },
        { name: "Dr. Saurabh Banwar", designation: "Associate Professor", Qualification: "Ph.D", dOJ: "27-06-2022" },
        { name: "Dr. Akash Bhattacharya", designation: "Assistant Professor", Qualification: "Ph.D", dOJ: "27-06-2022" },
        { name: "Dr. Lincy Roy", designation: "Assistant Professor", Qualification: "Ph.D", dOJ: "30-09-2013" },
        { name: "Dr. Deepti Patnaik", designation: "Assistant Professor", Qualification: "Ph.D", dOJ: "20-07-2023" },
        { name: "Dr. Kanchan Thakur", designation: "Assistant Professor", Qualification: "Ph.D", dOJ: "25-07-2022" },
        { name: "Dr. Nishtha Sharma", designation: "Assistant Professor", Qualification: "Ph.D", dOJ: "20-02-2023" },
        { name: "Dr. Shinki Katyayani Pandey", designation: "Assistant Professor", Qualification: "Ph.D", dOJ: "15-11-2021" },
        { name: "Dr. Parvinder Shesh", designation: "Assistant Professor", Qualification: "Ph.D", dOJ: "28-08-2017" },
        { name: "Dr. Ankita Nihlani", designation: "Assistant Professor", Qualification: "Ph.D", dOJ: "01-05-2017" },
        { name: "Ms. Dawakit Lepcha", designation: "Assistant Professor", Qualification: "MBA & UGC-NET", dOJ: "18-07-2022" },
        { name: "Mr. Rakshak Bharti", designation: "Assistant Professor", Qualification: "MBA & UGC-NET", dOJ: "18-07-2022" }

    ];



    const boardOfStudiesData = [
        {
            id: 1,
            title: "Board of Studies",
            columns: [
                { key: "slNo", label: "S. No.", width: "w-20" },
                { key: "member", label: "Designation/Nomination", width: "flex-1" }
            ],
            data: [
                { slNo: 1, member: "Dean/HoD, Chairman of the Committee" },
                { slNo: 2, member: "Industry Expert - Member" },
                { slNo: 3, member: "Expert from other Academic Institution - Member" },
                { slNo: 4, member: "Senior Professors from Department - Members" },
                { slNo: 5, member: "Students and Alumni Representative - Members" }
            ]
        },
    ];

    const navigationTabs = [
        { id: 'about', label: 'About' },
        { id: 'programs', label: 'Programs' },
        { id: 'board-of-studies', label: 'Board of Studies' },
        { id: 'activities', label: 'Events & Activities' },
        { id: 'faculty', label: 'Faculty' },
        { id: 'research', label: 'Research' },
        { id: 'placements', label: 'Placements' },
        { id: 'facilities', label: 'Facilities' },
    ];

    const researchItems = [
        { id: 1, title: "Research", href: "/research" },
        { id: 2, title: "Publications", href: "/publications" },
        { id: 3, title: "Conferences", href: "/conferences" }
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
                    sectionClassName="bg-white"
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
            <section id="board-of-studies" className="py-10 scroll-mt-24 md:scroll-mt-28">
                <div className="container mx-auto px-4 max-w-5xl">
                    <SectionHeading
                        title="Board of Studies"
                        titleClassName="text-center mb-6"
                    />
                    <div className="overflow-hidden border border-gray-100 p-2">
                        <DataTable
                            columns={boardOfStudiesData[0].columns}
                            data={boardOfStudiesData[0].data}
                            overflowX={true}
                            className="text-center"
                        />
                    </div>
                </div>
            </section>
            <FAQ
                items={swayamFaqItems}
                title="SWAYAM / NPTEL Certifications"
                subtitle="Faculty Achievements"
                backgroundColor="bg-gray-50"
            />
            <div id="activities" className="scroll-mt-24 md:scroll-mt-28">
                <StudentActivities
                    activities={ideathonActivities}
                    title="Ideathon- Business Plan Competitions"
                />
                <NewsEventsTabs />
            </div>


            {clubsData && clubsData.length > 0 && (
                <UpcomingConference
                    title={`Introducing Our Management Club`}
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
                    title="Meet our Faculty"
                    description=""
                    departmentName={departmentData?.name}
                    sectionClassName="pt-16 bg-white"
                />
            </div>

            <div id="research" className="scroll-mt-24 md:scroll-mt-28">
                <ResearchPublicationsTabs />
            </div>



            <div id="library" className="scroll-mt-24 md:scroll-mt-28">
                <StudentCell
                    subtitle=""
                    title="Library"
                    imageSrc="https://cdn.kalingauniversity.ac.in/facilities/library-new.webp"
                    imageAlt="Kalinga University Central Library"
                    description="Kalinga University, Raipur, hosts a modern and fully digitized Central Library that serves as a pivotal academic resource center supporting the learning, teaching, and research needs of the MBA program. Designed to foster a scholarly environment, the library integrates both traditional and digital resources with state-of-the-art services. 
                
                1. Kalinga University Central Library has 92000+ books and has also subscribed to more than 38,000 National and International e-Journals.
                2. It has a reading room capacity for 400 students that is divided into 2 halls of 200 each.
                3. The University is also member of several Online/Digital Libraries including Scopus, National Digital Library (NDL), Developing Library Network (DELNET), NPTEL, Manupatra and Lexis Nexis. Students are given free access to these e-resources through their ERP login: IP:103.251.94.207.
                4. Extended operational hours until 6:00 PM to support student schedules. It features CCTV surveillance to ensure a safe environment for all users.
                5. Library has a regular feedback mechanism.
                6. There is an information desk for assistance to the students and remote access is provided for e-resources.
                7. The library provides separate e-resource for faculty and research scholars.
                
                Budget: The University allots a specific budget to the library for upgradation its physical and e-resource facilities."
                    functionsTitle="Library Resources & Automation"
                    functionsSubtitle="Management Department Specifics & Digital Services:"
                    functionsList={[
                        "Comprehensive collection of 10,681 volumes of management books",
                        "1,674 e-journals and 4 major e-databases",
                        "Robust collection of reference materials and competitive exam guides",
                        "Special sections for student project reports and newspapers/magazines",
                        "Fully automated using KOHA Library Management Software",
                        "Real-time computerized cataloguing and circulation",
                        "Online Public Access Catalogue (OPAC)",
                        "Wi-Fi-enabled digital access terminals (50 computers)",
                        "Turnitin and Drillbit anti-plagiarism softwares",
                        "INFEED platform for remote access"
                    ]}
                    buttons={[
                        {
                            id: 1,
                            text: "Management Journal List",
                            fileUrl: "https://cdn.kalingauniversity.ac.in/departments/MBA/Management-Journal-List.pdf",
                            disableFlipbook: true
                        },
                        {
                            id: 2,
                            text: "Management Title List",
                            fileUrl: "https://cdn.kalingauniversity.ac.in/departments/MBA/Management-Title-List.pdf",
                            disableFlipbook: true
                        }
                    ]}
                />
            </div>

            <div id="feedback">
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
                            text: "Course Exit Survey – MBA",
                            onClick: () => handleOpenSurvey("course-exit-survey", "Course Exit Survey - MBA")
                        }
                    ]}
                />
            </div>

            <OrganogramOfKalinga
                title="On Curriculum, Course, Teaching-Learning and Evaluation"
                useContainer={true}
                description="Your responses will help us improve our academic quality and learning experience."
                showImage={false}
                imageUrl="https://cdn.kalingauniversity.ac.in/about/Organogram.png"
                imageAlt="Kalinga University Organogram"
                buttons={[
                    {
                        id: 2,
                        text: "Students - MBA",
                        onClick: () => handleOpenSurvey("students", "Students - MBA")
                    },
                    {
                        id: 3,
                        text: "Teachers - MBA",
                        onClick: () => handleOpenSurvey("teachers", "Teachers - MBA")
                    },
                    {
                        id: 4,
                        text: "Employer - MBA",
                        onClick: () => handleOpenSurvey("employer", "Employer - MBA")
                    },
                    {
                        id: 5,
                        text: "Alumni - MBA",
                        onClick: () => handleOpenSurvey("alumni", "Alumni - MBA")
                    },
                ]}
            />
            <OrganogramOfKalinga
                title="Vision_Mission_PEOs_PSOs"
                useContainer={true}
                description="Your responses will help us improve our academic quality and learning experience."
                showImage={false}
                imageUrl="https://cdn.kalingauniversity.ac.in/about/Organogram.png"
                imageAlt="Kalinga University Organogram"
                buttons={[
                    {
                        id: 6,
                        text: "(Alumni/ Employer/ Industry Expert/Others)",
                        onClick: () => handleOpenSurvey("vision-feedback", "Vision Statement Feedback")
                    },
                    {
                        id: 7,
                        text: "(Faculty Member / Parent / Student / Professional Body)",
                        onClick: () => handleOpenSurvey("stakeholder-external", "External Stakeholder Feedback")
                    }
                ]}
            />


            <Modal
                isOpen={feedbackModalConfig.isOpen}
                onClose={handleCloseSurvey}
                title={feedbackModalConfig.title}
            >
                {feedbackModalConfig.category === "vision-feedback" ? (
                    <VisionFeedbackForm courseId={17} onSuccess={handleCloseSurvey} />
                ) : feedbackModalConfig.category === "stakeholder-external" ? (
                    <StakeholderFeedbackForm courseId={17} onSuccess={handleCloseSurvey} />
                ) : (
                    <SurveyForm
                        courseId={17}
                        category={feedbackModalConfig.category}
                        onSuccess={handleCloseSurvey}
                    />
                )}
            </Modal>

            <SectionHeading
                title="Placement Details"
                titleClassName="text-center"
            />
            <ResearchSixGridButtons
                buttons={research_six_grid_buttons1}
            />

            <div id="placements" className="scroll-mt-24 md:scroll-mt-28">
                <Placements
                    placementData={departmentData}
                    bgColor="bg-white"
                    marginClassName="mt-10"
                    customRecruiterTitle="Top Management recruiters"
                    customImages={[
                        'https://cdn.kalingauniversity.ac.in/Home/place-1.png',
                        'https://cdn.kalingauniversity.ac.in/Home/place-2.png',
                        'https://cdn.kalingauniversity.ac.in/Home/place-3.png',
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

function ResearchPublicationsTabs() {
    const tabs = useMemo(
        () => [
            { id: "85", label: "Research Papers (2025)" },
            { id: "84", label: "Research Papers (2024)" },
            { id: "83", label: "Research Papers (2023)" },
            { id: "82", label: "Research Papers (2022)" },
            { id: "81", label: "Book Chapters (2025)" },
            { id: "80", label: "Book Chapters (2024)" },
            { id: "79", label: "Book Chapters (2023)" },
            { id: "78", label: "Book Chapters (2022)" },
            { id: "77", label: "Book Chapters (2021)" },
            { id: "93", label: "Patents (2025)" },
            { id: "94", label: "Patents (2024)" },
            { id: "95", label: "Patents (2023)" },
            { id: "96", label: "Patents (2022)" },
            { id: "97", label: "Patents (2021)" },


        ],
        []
    );

    const [activeTab, setActiveTab] = useState("85");

    const toggleAccordion = (id) => {
        setActiveTab((prev) => (prev === id ? "" : id));
    };

    return (
        <section className="py-10 md:py-14 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <SectionHeading
                        title="Research (Paper Publications, Book/Chapters, Patents)"
                        titleClassName="text-center !py-2"
                    />
                </div>
                <div className="mx-auto max-w-6xl rounded-3xl bg-[var(--dark-blue)] p-4 md:p-6 shadow-xl flex flex-col md:flex-row gap-6">
                    {/* Tabs sidebar (Desktop & Mobile styles combined simply here) */}
                    <div className="flex flex-col gap-2 w-full md:w-64 shrink-0 overflow-y-auto max-h-[500px] custom-scrollbar pb-4 md:pb-0">
                        {tabs.map((t) => {
                            const isActive = t.id === activeTab;
                            return (
                                <button
                                    key={t.id}
                                    type="button"
                                    onClick={() => setActiveTab(t.id)}
                                    className={[
                                        "text-left rounded-lg border px-4 py-3 text-sm font-medium transition-all duration-200",
                                        isActive
                                            ? "bg-[var(--button-red)] text-white border-white/20 shadow-lg md:scale-105"
                                            : "bg-white text-[var(--foreground)] border-transparent hover:bg-gray-100",
                                    ].join(" ")}
                                >
                                    {t.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Content area */}
                    <div className="rounded-2xl bg-white p-4 md:p-8 h-[500px] overflow-auto flex-1 w-full min-w-0">
                        <style jsx global>{`
                            .custom-scrollbar::-webkit-scrollbar {
                                width: 8px;
                                height: 8px;
                            }
                            .custom-scrollbar::-webkit-scrollbar-track {
                                background: #f1f1f1;
                                border-radius: 10px;
                            }
                            .custom-scrollbar::-webkit-scrollbar-thumb {
                                background: #c1c1c1;
                                border-radius: 10px;
                            }
                            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                                background: #a8a8a8;
                            }
                            .custom-scrollbar {
                                scrollbar-width: thin;
                                scrollbar-color: #c1c1c1 #f1f1f1;
                            }
                        `}</style>
                        <div className="h-full">
                            <APITable tableId={activeTab} nested={true} overflowX={true} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function NewsEventsTabs() {
    const eventsColumns = [
        { key: "sno", label: "S.No.", width: "w-20" },
        { key: "event", label: "Event", width: "flex-1" },
        { key: "date", label: "Date", width: "w-48" }
    ];

    const eventsData = [
        {
            id: 1,
            question: "2024-25",
            component: <DataTable columns={eventsColumns} data={[
                { sno: 1, event: "Online Seminar on Six Sigma", date: "17.04.2025" },
                { sno: 2, event: "Workshop on “Raising Capital & Managing Finance for Start-ups” in collaboration with IIC", date: "08.04.2025" },
                { sno: 3, event: "Online Workshop on Business Model Canvas in collaboration with IIC", date: "24.03.2025" },
                { sno: 4, event: "International Conference on Innovative Management Techniques for Sustainable Development (IMTSD-25)", date: "21.02.2025 & 22.02.2025" },
                { sno: 5, event: "Workshop on “E-Commerce & Effective Sales & Marketing Strategies for Entrepreneurs/Startups” in collaboration with IIC", date: "13.02.2025" },
                { sno: 6, event: "Guest Lecture on “Role of Industrial Sector in Viksit Bharat” under Amartya Sen Chair", date: "31.01.2025" },
                { sno: 7, event: "Ideathon 4.0", date: "22.11.2024 to 23.11.2024" },
                { sno: 8, event: "Workshop on - Hands-On Training Program on “Stock Market Trading”.", date: "05.10.2024" },
                { sno: 9, event: "Workshop on Investment Awareness Session by SEBI", date: "30.09.2024" },
                { sno: 10, event: "Workshop on GST", date: "28.09.2024" },
                { sno: 11, event: "Guest Lecture on a session on AI Leadership: The Future of Management", date: "13.09.2024" },
                { sno: 12, event: "Workshop on Job Ready for BFSI", date: "10.09.2024" },
                { sno: 13, event: "Guest Lecture on Job Opportunities in the UK", date: "14.08.2024" },
                { sno: 14, event: "Guest Lecture on “Future-Ready Commerce Education: Implementing NEP & OBE Aligned Practicums Using Tech-Enabled Experiential Tools”.", date: "13.08.2024" },
            ]} overflowX={true} />
        },
        {
            id: 2,
            question: "2023-24",
            component: <DataTable columns={eventsColumns} data={[
                { sno: 1, event: "Seminar on “Latest Trends in HRM”", date: "22.03.2024" },
                { sno: 2, event: "Entrepreneurship and Innovation as Career Opportunity", date: "09.11.2023" },
                { sno: 3, event: "Anand Mela", date: "13.10.2023 to 14.10.2023" },
                { sno: 4, event: "Research Paper Writing Using Time Series", date: "30.09.2023" },
            ]} overflowX={true} />
        },
        {
            id: 3,
            question: "2022-23",
            component: <DataTable columns={eventsColumns} data={[
                { sno: 1, event: "Junior MBA Program", date: "05.06.2023 to 09.06.2023" },
                { sno: 2, event: "E-Workshop", date: "08.05.2023 & 09.05.2023" },
                { sno: 3, event: "G-20 Events – Quiz Competition on theme “One Earth, One Family, One Future”", date: "06.05.2023" },
                { sno: 4, event: "Webinar on Creativity and Innovation Driving Modern Business", date: "21.04.2023" },
                { sno: 5, event: "Global Peace and Sustainable Development Summit, 2023", date: "17.04.2023" },
                { sno: 6, event: "Annual Sports Meet", date: "21.02.2023" },
                { sno: 7, event: "Paiso ki Pathshala", date: "01.03.2023" },
                { sno: 8, event: "Annual Sports Meet", date: "21.02.2023" },
                { sno: 9, event: "Connecting Dots – The Investor Summit", date: "18.02.2023" },
                { sno: 10, event: "Budget Analysis Session and Quiz Competition", date: "09.02.2023 to 10.02.2023" },
                { sno: 11, event: "Workshop on Design Thinking, Critical Thinking & Innovation Design", date: "01.02.2023 to 02.02.2023" },
                { sno: 12, event: "Seminar on Preventive Strategies to Combat Counterfeiting and Smuggling", date: "10.01.2023" },
                { sno: 13, event: "National Workshop on Data Analysis in Research using SPSS", date: "02.01.2023 to 06.01.2023" },
                { sno: 14, event: "Kathak Dance in Collaboration with Jan Shikshan Sansthan Raipur", date: "21.11.2022" },
                { sno: 15, event: "Annual Function", date: "18.11.2022 & 19.11.2022" },
                { sno: 16, event: "IDEATHON 2.0", date: "14.11.2022 to 16.11.2022" },
                { sno: 17, event: "Webinar on Career Opportunities in Banking and Finance", date: "05.11.2022" },
                { sno: 18, event: "Certification in Tally ERP", date: "04.11.2022" },
                { sno: 19, event: "Webinar on Mutual Funds and Wealth Creation", date: "14.10.2022" },
                { sno: 20, event: "Student Clubs", date: "11.10.2022" },
                { sno: 21, event: "Kalinga University inks pact with Infosys Limited for Academic and Internship Collaboration", date: "10.10.2022" },
                { sno: 22, event: "Guest Session on “Mental Health with YPV Sadhna” on the Occasion of World Mental Health Day", date: "10.10.2022" },
                { sno: 23, event: "Webinar “Powerful Career in Digital World” in Collaboration with London School of Digital Business", date: "04.10.2022" },
                { sno: 24, event: "Workshop on Cryptocurrency and Blockchain Technology", date: "01.10.2022" },
                { sno: 25, event: "MSME Entrepreneurship Awareness Camp", date: "31.08.2022" },
                { sno: 26, event: "National Seminar on Advanced Research", date: "27.08.2022" },
                { sno: 27, event: "Industrial Visit to Vachan Dairy at Kharora (BBA & BCOM Sem-5 Students)", date: "27.08.2022" },
                { sno: 28, event: "Departmental Induction Organized", date: "25.08.2022" },
                { sno: 29, event: "Town Hall Meeting for Senior Batch Students", date: "25.08.2022" },
                { sno: 30, event: "Adverto – The AD MAD Show", date: "18.08.2022" }
            ]} overflowX={true} />
        },
    ];

    const guestLectureColumns = [
        { key: "guestSpeaker", label: "Guest Speaker", width: "w-40" },
        { key: "designation", label: "Designation", width: "w-60" },
        { key: "topic", label: "Topic", width: "w-60" },
        { key: "eventDate", label: "Event Date", width: "w-30" }
    ];

    const guestLectureData = [
        { guestSpeaker: "Dr. Ravindra K Brahme", designation: "General Secretary, Indian Economic Association", topic: "Role of Industrial Sector in Viksit Bharat", eventDate: "31-01-2025" },
        { guestSpeaker: "Ms. Ambika Agrawal", designation: "Legal Consultant, KPMG, London, U.K", topic: "Guest Lecture on Job Opportunity in U.K", eventDate: "14-08-2024" },
        { guestSpeaker: "Mr. Rahul Patel", designation: "Freelance Trainer, Minimalist, Motivational Speaker", topic: "Paiso Ki Pathshala", eventDate: "01-03-2023" },
        { guestSpeaker: "Mr. Sudip Nag & Mr. Abhishek Kumar", designation: "National Securities Depository Limited", topic: "National Securities Depository Limited", eventDate: "15-10-2022" },
        { guestSpeaker: "Mr. Chintan Dave", designation: "Stock Market Institute, Bangalore", topic: "National Workshop on Cryptocurrency & Blockchain Technology", eventDate: "01-10-2022" },
        { guestSpeaker: "Mr. Raj Mehrotra & Mrs. Vinita Raj", designation: "Research Analyst, E&Y MD, World Dealers Pvt. Ltd.", topic: "Budget Analysis and Quiz", eventDate: "09-02-2023 to 10-02-2023" },
        { guestSpeaker: "Molly Faulkner, Keith Koo, Sanjay Kumar Agrawal, Victoria McClure, William Du, Jona Lemmonds, Sameer Kaila, Sebastian Jude, Anthony Jarrin, Sebastian Gerona, Bianca Ventura, Amresh Kumar Singh", designation: "Various CEOs, Vice Presidents, Investors, Founders, Managing Partners", topic: "Investor Summit", eventDate: "18-02-2023" }
    ];

    const fdpColumns = [
        { key: "Sno", label: "S.No", width: "w-10" },
        { key: "AcademicYear", label: "Academic Year", width: "w-20" },
        { key: "topic", label: "Title of the Programme", width: "w-50" },
        { key: "eventDate", label: "Duration", width: "w-30" },
        { key: "noofcandidates", label: "No of Candidates Attended", width: "w-30" }
    ];

    const fdpData = [
        // {
        //     id: 1, question: "2024-25", component: <DataTable columns={fdpColumns} data={[
        //         { Sno: "1", AcademicYear: "2025-26", topic: "One Week FDP on “Next-Gen Teaching: Enhancing Pedagogy, Leadership & Innovation.", eventDate: "17 to 22 June, 2024", noofcandidates: "46" }
        //     ]} overflowX={true} />
        // },
        {
            id: 2, question: "2023-24", component: <DataTable columns={fdpColumns} data={[
                { Sno: "1", AcademicYear: "2023-24", topic: "10 Days FDP on An Experience with Research Methodology on Statistical Programming in R.", eventDate: "20 to 29 May, 2023", noofcandidates: "11" },
                { Sno: "2", AcademicYear: "2023-24", topic: "One Week FDP on “Next-Gen Teaching: Enhancing Pedagogy, Leadership & Innovation.", eventDate: "17 to 22 June, 2024", noofcandidates: "46" }
            ]} overflowX={true} />
        },
        {
            id: 3, question: "2022-23", component: <DataTable columns={fdpColumns} data={[
                { Sno: "1", AcademicYear: "2022-23", topic: "Two Week FDP on “Innovative Trends in Teaching and Professional Skills Acquisition in Management.", eventDate: "14 to 27 June, 2022", noofcandidates: "35" },
                { Sno: "2", AcademicYear: "2022-23", topic: "FDP on Outcome Based Education", eventDate: "18-04-2022 to 23-04-2022", noofcandidates: "26" },
                { Sno: "3", AcademicYear: "2022-23", topic: "One Week National Workshop on Data Analytics in Research using SPSS", eventDate: "02/01/2023 to 06/01/2023", noofcandidates: "77" }
            ]} overflowX={true} />
        },
        {
            id: 4, question: "2021-22", component: <DataTable columns={fdpColumns} data={[
                { Sno: "1", AcademicYear: "2021-22", topic: "Two Days Boot Camp (FDP) on Personal Effectiveness", eventDate: "12 to 13 August, 2022", noofcandidates: "97" }
            ]} overflowX={true} />
        },
        {
            id: 5, question: "2020-21", component: <DataTable columns={fdpColumns} data={[
                { Sno: "1", AcademicYear: "2020-21", topic: "One Week FDP on Emerging Business Issues", eventDate: "12 to 13 August, 2022", noofcandidates: "41" }
            ]} overflowX={true} />
        }
    ];

    const mainTabs = [
        { id: "events", label: "Events" },
        { id: "guest-lectures", label: "Guest Lectures by Industry Experts" },
        { id: "fdp", label: "FDP Organized" },
    ];

    const [activeMainTab, setActiveMainTab] = useState("events");

    return (
        <section className="py-16 bg-white pt-8">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <SectionHeading
                        title="Management Events & Activities"
                        titleClassName="text-center !py-2"
                    />
                </div>
                <div className="mx-auto max-w-6xl rounded-3xl bg-[var(--dark-blue)] p-4 md:p-6 shadow-xl">
                    <div className="flex gap-2 overflow-x-auto pb-4 custom-scrollbar md:justify-center">
                        {mainTabs.map((t) => (
                            <button
                                key={t.id}
                                type="button"
                                onClick={() => setActiveMainTab(t.id)}
                                className={[
                                    "whitespace-nowrap rounded-lg border px-6 py-2 text transition-all duration-200",
                                    t.id === activeMainTab
                                        ? "bg-[var(--button-red)] text-white border-white/20 shadow-lg scale-105"
                                        : "bg-white text-[var(--foreground)] border-transparent hover:bg-gray-100",
                                ].join(" ")}
                            >
                                {t.label}
                            </button>
                        ))}
                    </div>

                    <div className="mt-4 rounded-2xl bg-white p-4 md:p-8 min-h-[400px]">
                        {activeMainTab === "events" && (
                            <div className="animate-fadeIn">
                                <FAQ items={eventsData} title="" subtitle="" backgroundColor="bg-white" />
                            </div>
                        )}
                        {activeMainTab === "guest-lectures" && (
                            <div className="animate-fadeIn rounded-xl border border-black/10 p-2 overflow-hidden shadow-sm">
                                <DataTable columns={guestLectureColumns} data={guestLectureData} overflowX={true} />
                            </div>
                        )}
                        {activeMainTab === "fdp" && (
                            <div className="animate-fadeIn">
                                <FAQ items={fdpData} title="" subtitle="" backgroundColor="bg-white" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
