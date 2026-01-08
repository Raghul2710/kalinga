"use client";

import React, { useLayoutEffect, useRef } from "react";
import Cards from "../ccrc/cards";

export default function Studentreportcards() {
    const wrapperRef = useRef(null);

    const cards = [
        {
            title: "Student Development Programs",
            description:
                "It includes workshops, seminars, conferences, industrial visits, guest lectures, masterclasses, hands-on training programs, hackathons (coding competitions), ideathons (business plan competitions), and more.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/arts.webp",
            logoSrc: "",
            subtitle: "SKILL & CAREER DEVELOPMENT",
        },
        {
            title: "CTCD",
            description:
                "Our Corporate Training and Consultancy Division (CTCD) regularly organises expert-led masterclasses on the latest industry trends to make students job-ready professionals.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ctcd.png",
            logoSrc: "",
            subtitle: "INDUSTRY EXPOSURE",
            link: "/corporate-training-and-consultancy-division",
        },
        {
            title: "Academic Clubs & Non-Academic Clubs",
            description:
                "Students participate in the activities of departmental academic clubs and also enthusiastically take part in music, dance, arts, and literature clubs.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-support/academicandnonacademic.webp",
            logoSrc: "",
            subtitle: "STUDENT ENGAGEMENT",
        },
        {
            title: "Campus Placement Drives",
            description:
                "Top industries visit our campus and hire students for deserving roles with competitive salary packages through regular campus placement drives.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/commerce-management.webp",
            logoSrc: "",
            subtitle: "PLACEMENT OPPORTUNITIES",
        },
        {
            title: "Sustainable Campus Environment",
            description:
                "Learn and grow in an eco-friendly campus environment that promotes sustainable practices in day-to-day activities.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-support/sustainablecampusenv.webp",
            logoSrc: "",
            subtitle: "GREEN CAMPUS",
        },
        {
            title: "Academic Programs",
            description:
                "Students can choose from 130+ academic programs in different streams that meet industry standards and are designed for student success.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/education.webp",
            logoSrc: "",
            subtitle: "DIVERSE COURSES",
        },
        {
            title: "Career Development",
            description:
                "Our holistic learning approach helps students excel academically and personally through career counselling, soft skills development, language labs, bridge courses, yoga, meditation, competitive exam coaching, and remedial coaching.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-support/careerdevelopement.webp",
            logoSrc: "",
            subtitle: "HOLISTIC GROWTH",
        },
        {
            title: "Student Welfare Services",
            description:
                "The Department of Student Welfare facilitates a student-centric learning environment where students can develop their hobbies, interests, and participate in in-house programs.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/computer.webp",
            logoSrc: "",
            subtitle: "STUDENT SUPPORT",
        },
        {
            title: "Student Feedback",
            description:
                "We value student feedback and continuously work on improving student life and academic experience.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/MBA.webp",
            logoSrc: "",
            subtitle: "CONTINUOUS IMPROVEMENT",
        },
        {
            title: "Mentor-Mentee System",
            description:
                "Our professors provide personal attention and guidance to students in academics and career development, increasing confidence and keeping them on the right track.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-support/mentormentee.webp",
            logoSrc: "",
            subtitle: "PERSONAL GUIDANCE",
        },
        {
            title: "Academic Advice",
            description:
                "From selecting the right program to securing placements, our team provides career guidance and effective time management strategies.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/alumini/alimini-meet1.webp",
            logoSrc: "",
            subtitle: "CAREER GUIDANCE",
        },
        {
            title: "Parent-Teacher Meeting",
            description:
                "We organise parent-teacher meetings every year to inform parents about their child’s performance and address their concerns.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/careerdevelopmentcentre.webp",
            logoSrc: "",
            subtitle: "PARENT ENGAGEMENT",
        },
        {
            title: "130+ Academic Programs",
            description:
                "Choose from career options including commerce, management, arts, science, pharmacy, law, technology, information technology, and education.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/bg-course.webp",
            logoSrc: "",
            subtitle: "CAREER OPTIONS",
        },
        {
            title: "Bridge Courses",
            description:
                "We provide bridge courses in Physics, Chemistry, Maths, English, and more to help students from different academic backgrounds grasp essential concepts.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrc.webp",
            logoSrc: "",
            subtitle: "ACADEMIC SUPPORT",
            link: "/international-students#bridge-course"
        },
        {
            title: "Competitive Exams Coaching",
            description:
                "We prepare students for national and international competitive exams such as GATE, GRE, GMAT, CAT, IAS, UPSC, IELTS, TOEFL, IBPS, PSC, SSC, NET, and more.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp",
            logoSrc: "",
            subtitle: "EXAM PREPARATION",
        },
        {
            title: "Scholarships",
            description:
                "Obtain up to 100% scholarships as per our eligibility criteria and make your finances more manageable. Students who face financial difficulties at the time of admission can get scholarships, like merit-based, sports-based, entrance exam, content creators, and more, based on eligibility criteria.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/scolarships.webp",
            logoSrc: "",
            subtitle: "STUDENT SUPPORT",
            link: "/scholarships",
        },
        {
            title: "Remedial Coaching",
            description:
                "Remedial coaching supports slow learners with extra classes and assignments while encouraging fast learners to take up advanced projects.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/placemnt-intro.webp",
            logoSrc: "",
            subtitle: "LEARNING SUPPORT",
        },
        {
            title: "Value Added Courses",
            description:
                "We offer a range of short-term value-added certificate courses, which are conducted after class hours or during semester breaks. These courses are conducted by professionals and industry experts who help students stand out in the job market by adding further value to their resumes.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/valueaddedcourses.webp",
            logoSrc: "",
            subtitle: "SKILL DEVELOPMENT",
            link: "/value-added-course",
        },
        {
            title: "Counselling Support",
            description:
                "We have experienced counsellors at our campus who conduct one-on-one sessions with every student. Whether they are dealing with academic stress or any other issues, a dedicated counsellor will first listen and then take necessary action.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/conselling.webp",
            logoSrc: "",
            subtitle: "STUDENT WELLBEING",
        },
        {
            title: "New Age Programs",
            description:
                "We offer emerging programs in AI, ML, Cybersecurity, Data Science, Film Making, Animation & VFX, and Forensic Science to meet industry demands.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/placement-intro-2.webp",
            logoSrc: "",
            subtitle: "FUTURE-READY SKILLS",
        },
        {
            title: "Training & Placement Cell",
            description:
                "The Training & Placement Cell conducts interview preparation, resume building, soft skills training, and organises campus placement drives.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/trainingandplacementcell.webp",
            logoSrc: "",
            subtitle: "PLACEMENT SUPPORT",
        },
    ];
    // ✅ PREVENT FLASH (runs before paint)
    useLayoutEffect(() => {
        const root = wrapperRef.current;
        if (!root) return;

        // Hide all "Know More" buttons
        root.querySelectorAll(".absolute.left-5.bottom-4").forEach((btn) => {
            btn.style.display = "none";
        });

        // Reveal wrapper only after buttons are hidden
        root.style.visibility = "visible";
    }, []);

    return (
        <>
            <style jsx global>{`
        /* Base image handling */
        .student-cards-wrapper img {
          width: 100% !important;
          object-fit: cover !important;
          border-radius: 0.75rem;
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .student-cards-wrapper img {
            height: 340px !important;
          }
        }

        /* Tablet */
        @media (min-width: 641px) and (max-width: 1023px) {
          .student-cards-wrapper img {
            height: 280px !important;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .student-cards-wrapper img {
            height: 220px !important;
            padding: 6px;
          }
        }

        /* Prevent Next.js empty-src warning */
        .student-cards-wrapper img[src=""],
        .student-cards-wrapper img:not([src]) {
          display: none !important;
        }
      `}</style>

            <h2 className="mb-1 text-black text-center">
                Experience KU’s Unmatched Student Services
            </h2>

            {/* ✅ Hidden on first paint */}
            <div
                ref={wrapperRef}
                className="student-cards-wrapper"
                style={{ visibility: "hidden" }}
            >
                <Cards cards={cards} />
            </div>
        </>
    );
}
