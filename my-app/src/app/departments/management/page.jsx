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

export default function ManagementDepartmentPage() {
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    const mainIntroContent = {
        title: "About the Department of Management",
        description: [
            "If leadership, managing people, and decision-making excite you, choose management.",
            "The Department of Management Studies of KU trains young managers with a global level of knowledge about managerial and entrepreneurial skills. They will be prepared to tackle industrial challenges using skills that drive success in the competitive business environment. With seminars, guest lectures, and industrial visits, they will experience a complete holistic development.",
            "Our programs related to the department of management are designed to make future leaders plan wisely, make strategic decisions, and execute every action confidently. These programs are tailored to develop skilled professionals who can contribute meaningfully to the industry and economy."
        ],
        imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/Faculty+of+Commerece+and+Management/07.webp",
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
                        src="https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/Faculty+of+Commerece+and+Management/MBA+all+COs+compiled.pdf#toolbar=0&navpanes=0&scrollbar=0"
                        className="w-full h-full border-none"
                        title="MBA Course Outcomes"
                    />
                </div>
            )
        }
    ];

    const ideathonActivities = [
        {
            id: 1,
            title: "Ideathon 1.0",
            date: "26 & 27 Nov, 2021",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/Faculty+of+Commerece+and+Management/ma-e-1.jpeg",
            imageAlt: "Ideathon 1.0",
            description: "Ideathon 1.0 - A flagship event providing a platform for students to showcase their innovative ideas, business plans, and entrepreneurial spirit.",
            buttonText: "Read More"
        },
        {
            id: 2,
            title: "Ideathon 2.0",
            date: "16 - 18 Nov, 2022",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/Faculty+of+Commerece+and+Management/ma-e-2.jpeg",
            imageAlt: "Ideathon 2.0",
            description: "Ideathon 2.0 - Building on the success of the first edition, this event brought together brilliant minds to solve complex business challenges.",
            buttonText: "Read More"
        },
        {
            id: 3,
            title: "Ideathon 3.0",
            date: "5 - 6 Jan, 2024",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/Faculty+of+Commerece+and+Management/ma-e-3.jpeg",
            imageAlt: "Ideathon 3.0",
            description: "Ideathon 3.0 - Continued the tradition of fostering innovation and providing students with industry insights and mentorship.",
            buttonText: "Read More"
        },
        {
            id: 4,
            title: "Ideathon 4.0",
            date: "22 & 23 Nov, 2024",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/Faculty+of+Commerece+and+Management/ma-e-4.jpeg",
            imageAlt: "Ideathon 4.0",
            description: "Ideathon 4.0 - Focused on sustainable business models and creative problem-solving in a rapidly changing global economy.",
            buttonText: "Read More"
        },
        {
            id: 5,
            title: "Ideathon 5.0",
            date: "4 & 5 Nov, 2025",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/Faculty+of+Commerece+and+Management/ma-e-5.jpeg",
            imageAlt: "Ideathon 5.0",
            description: "Ideathon 5.0 - The latest iteration of the competition, pushing boundaries and celebrating the entrepreneurial achievements of our students.",
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
        { name: "Dr. Lincy Roy", designation: "Assistant Professor" },
        { name: "Dr. Pankaj Tiwari", designation: "Associate Professor" },
        { name: "Dr. Saurabh Banwar", designation: "Associate Professor" },
        { name: "Ms. Dawakit Lepcha", designation: "Assistant Professor" },
        { name: "Mr. Rakshak Bharti", designation: "Assistant Professor" },
        { name: "Dr. Deepti Patnaik", designation: "Assistant Professor" },
        { name: "Dr. Kanchan Thakur", designation: "Assistant Professor" },
        { name: "Ms. Milan Singh", designation: "Assistant Professor" },
        { name: "Dr. Nishtha Sharma", designation: "Assistant Professor" },
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
            <StudentActivities
                activities={ideathonActivities}
                title="Management Events & Activities"
            />
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

            <FacultyList
                items={facultyMembers}
                title="Our Management Faculty"
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
                imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/library-new.webp"
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
            />
            <OrganogramOfKalinga
                useContainer={true}
                description="Kalinga University follows a well-structured governance model to ensure smooth administration and institutional integrity. It begins with the Chancellor, followed by the Vice-Chancellor and Director General. Their roles and responsibilities are well-defined, enabling proper decision-making across all the departments of the university."
                showImage={false}
                imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/about/Organogram.png"
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
                                "Apply the principles of accounting and learn how to prepare financial statements in accordance with generally accepted accounting principles.",
                                "Apply the knowledge and develop thinking about analysis and interpretation of financial data.",
                                "Analyze and develop the ability to support decision-making, formulate recommendations, and enhance business performance.",
                                "Evaluate the financial data and develop the ability to Control the cost through Budgetary Control & Standard Costing."
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
            <MediaCardSlider
                categoryTitle=""
                title="Internship Opportunities At KU"
                description="At KU, you don’t have to wait till graduation, but we’ll help you get a sneak peek into the practical world with our internship programs, which will also make your CV stand out during your job interviews."
                videoItems={[
                    {
                        id: 1,
                        name: "Trupti Ranjan Sahu",
                        description: "Aditya Birla Group",
                        title: "Trupti Ranjan Sahu - MBA",
                        thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Trupti+Ranjan+Sahu.jpeg",
                        videoUrl: ""
                    },
                    {
                        id: 2,
                        name: "Hrithik Kumar Sharma",
                        description: "MBA Student",
                        thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Hrithik+Kumar+Sharma.jpg",
                        videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Hrithik+Kumar+Sharma+CCRC+Placement+Video.mp4",
                    },
                    {
                        id: 3,
                        name: "Laxmi Bharti",
                        description: "MBA Student",
                        thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Laxmi+Bharti.jpg",
                        videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Laxmi+Bharti+CCRC+Placement+Video.mp4",
                    },
                    {
                        id: 4,
                        name: "Prachi Sahu",
                        description: "MBA Student",
                        thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Prachi+Sahu.jpg",
                        videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Prachi+Sahu+CCRC+Placement+Video.mp4",
                    }
                ]}
                backgroundColor="bg-white"
                cardBgClass="bg-lite-sand"
                nameTextClass="text-[var(--button-red)]"
                descriptionTextClass=""
                swiperClassName="cms-internship-slider"
            />
            <Facility />
        </>
    );
}
