"use client";

import React, { useLayoutEffect, useRef } from "react";
import Cards from "../ccrc/cards";

function Academiccards() {
    const wrapperRef = useRef(null);

    const cards = [
        {
            title: "Digital Classrooms",
            description:
                "Our classrooms have smart boards, projectors, and audio-visual tools, which make the learning fun and interactive, and students use them to give presentations.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/digitalclassrooms.webp",
            logoSrc: "",
            subtitle: "ACADEMIC INFRASTRUCTURE",
        },
        {
            title: "Resource-Rich Library",
            description:
                "Our library is packed with the latest collection of resources in the form of books, journals, research papers, digital resources, magazines, and newspapers.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/resourcerichlibrary.webp",
            logoSrc: "",
            subtitle: "ACADEMIC INFRASTRUCTURE",
            link: "/library",
        },
        {
            title: "Modern Laboratories",
            description:
                "We have over 90 + labs, including a language lab, a central instrumentation facility, computer labs (with more than 1600 high-tech computers), and other research labs that offer sophisticated instruments, technologies, and advanced computer systems.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/modernlabrotary.webp",
            logoSrc: "",
            subtitle: "RESEARCH & PRACTICAL LEARNING",
            link: "/laboratories",
        },
        {
            title: "Incubation Centre",
            description:
                "Kalinga Incubation Foundation (KIF) supports the unique entrepreneurial ideas of our students and helps them transform into successful startup ventures. We aim to fast-track your entrepreneurial growth by providing industry insights, networking opportunities, and seed funding support.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/kif.png",
            logoSrc: "",
            subtitle: "INNOVATION & STARTUPS",
            link: "/kif",
        },
        {
            title: "Moot Court",
            description:
                "Our law students get a real courtroom experience with our Moot Court, where they put their legal skills into trials and participate in competitions, and gain confidence.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/mootcourt.webp",
            logoSrc: "",
            subtitle: "LEGAL EDUCATION",
        },
        {
            title: "Centres of Excellence",
            description:
                "We collaborate with leading industry partners to offer skill-based training across EVs (Eblu), IIoT (Technoviz Automation), Robotics, Coding & Drones (BDS Education), MSME (IamSMEofIndia), BRIDGE & Automation (BOSCH), AI & ML (IBM Innovation Centre), and Automobile Engineering (JustAuto Solutions).",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-glimpse2.webp",
            logoSrc: "",
            subtitle: "INDUSTRY COLLABORATIONS",
            link: "/centresofexcellence",
        },
        {
            title: "Film Making Studio",
            description:
                "We have a vibrant film making studio at our campus, equipped with lights, cameras, speakers, and editing tools that enable students to learn script-writing, acting, direction, production, lighting techniques, video editing, set design, camera handling, live streaming, and more.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/filmmakingstudio.webp",
            logoSrc: "",
            subtitle: "CREATIVE ARTS",
        },
        {
            title: "Podcast Studio",
            description:
                "Our podcast studio is a soundproof room equipped with high-quality microphones and equipment, providing students with an ideal space to practice and record content creation.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/recording-studios.webp",
            logoSrc: "",
            subtitle: "MEDIA & COMMUNICATION",
        },
        {
            title: "Central Instrumentation Facility",
            description:
                "Every year, we provide on-campus and off-campus internship opportunities to our students and conduct hands-on training programs on real-world skills to improve their practical knowledge and technical expertise. We don’t just make our students academically strong but also job-ready with new skills so that they can meet industry demands.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/education.webp",
            logoSrc: "",
            subtitle: "CAREER READINESS",
        },
        {
            title: "ERP",
            description:
                "We give every student access to the ERP portal, where they log in and get all sorts of information like the academic curriculum, exam timetable, notices, results, transportation details, and other information.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/student-erp.webp",
            logoSrc: "",
            subtitle: "DIGITAL SERVICES",
        },
        {
            title: "Animal House",
            description:
                "To support experimental studies and research in the field of pharmacy, biotechnology, and life sciences, we have a safe and well-maintained animal house on our campus. We strictly adhere to ethical guidelines and safe practices in conducting practical experiments.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/animal+house.webp",
            logoSrc: "",
            subtitle: "RESEARCH FACILITIES",
        },
        {
            title: "Audio-Visual Centre",
            description:
                "Our audio-visual centre offers advanced tools and resources that support interactive learning, presentations, and projects of students.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/audiovisualcentre.webp",
            logoSrc: "",
            subtitle: "LEARNING SUPPORT",
        },
        {
            title: "Auditorium, Seminar Hall, & Board Rooms",
            description:
                "We have a digitally-equipped and spacious auditorium with a seating capacity of 200 people, seminar halls, and board rooms where we regularly organise conferences, meetings, guest lectures, placement programs, training programs, events and activities, and much more.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/seminar-rooms.webp",
            logoSrc: "",
            subtitle: "EVENT INFRASTRUCTURE",
            // link: "/auditorium-and-halls",
        },
        {
            title: "E-Learning Rooms (Swayam/MOOCs)",
            description:
                "The E-Learning Rooms at Kalinga University come with high-speed internet connection, printing facilities, and modern infrastructure. Our students can have access to digital libraries, online courses, research databases, and e-resources.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/elearning.webp",
            logoSrc: "",
            subtitle: "DIGITAL EDUCATION",
        },
        {
            title: "TnP Cell",
            description:
                "The training team conducts interview prep sessions, resume building, and soft skills training programs to fill the gap between academic learning and companies' expectations. The placement team organises campus drives to generate placement opportunities for graduate and postgraduate students.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/alumini/alimini-meet2.webp",
            logoSrc: "",
            subtitle: "CAREER SERVICES",
            link: "/placements",
        },
        {
            title: "Research Facilities",
            description:
                "We have high-tech instruments at CIF, research labs for different streams, centres of excellence, an IPR cell, and dedicated faculty members who are always ready to guide, support, and mentor undergraduate, postgraduate, and Ph.D. students and research scholars in performing experimentation work and preparing reports.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/science.webp",
            logoSrc: "",
            subtitle: "ADVANCED RESEARCH",
            link: "/research-facilities",
        },
        {
            title: "Recording Studio",
            description:
                "Our recording studio provides students and faculty members with a creative space where they can explore their artistic expression and produce high-quality audio and video content. It contains advanced tools, audio plugins, video systems, microphones, and pro-grade systems.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/recordingstudio.webp",
            logoSrc: "",
            subtitle: "MEDIA PRODUCTION",
        },
        {
            title: "Business Lab",
            description:
                "Our business lab features advanced computer systems and software that help commerce and management students master statistical tools, data analysis, and decision-making with an easy-to-use interface.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/businesslab.webp",
            logoSrc: "",
            subtitle: "MANAGEMENT STUDIES",
        },
        {
            title: "Statistical Database Lab",
            description:
                "The lab equips students and research scholars to study various business parameters through advanced statistical analysis techniques. With our statistical database lab, they learn to analyse, interpret, and present the information in textual, tabular, and graphical forms in their research field.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/research-and-statistical-database-lab1.webp",
            logoSrc: "",
            subtitle: "DATA & ANALYTICS",
        },
    ];


    // ✅ Prevent "Know More" button flash
    useLayoutEffect(() => {
        const root = wrapperRef.current;
        if (!root) return;

        // Hide all Know More buttons
        root.querySelectorAll(".absolute.left-5.bottom-4").forEach((btn) => {
            btn.style.display = "none";
        });

        // Reveal wrapper only after buttons are hidden
        root.style.visibility = "visible";
    }, []);

    return (
        <>
            <style jsx global>{`
        /* Default image handling */
        .academic-cards-wrapper img {
          width: 100% !important;
          object-fit: cover !important;
          border-radius: 0.75rem;
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .academic-cards-wrapper img {
            height: 340px !important;
          }
        }

        /* Tablet */
        @media (min-width: 641px) and (max-width: 1023px) {
          .academic-cards-wrapper img {
            height: 280px !important;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .academic-cards-wrapper img {
            height: 220px !important;
            padding: 6px;
          }
        }

        /* Prevent Next.js empty-src warning */
        .academic-cards-wrapper img[src=""],
        .academic-cards-wrapper img:not([src]) {
          display: none !important;
        }
      `}</style>

            <h2 className="mb-1 text-black text-center">
                Our Dynamic Academic Facilities
            </h2>

            {/* ✅ Hidden on first paint */}
            <div
                ref={wrapperRef}
                className="academic-cards-wrapper"
                style={{ visibility: "hidden" }}
            >
                <Cards cards={cards} />
            </div>
        </>
    );
}

export default Academiccards;
