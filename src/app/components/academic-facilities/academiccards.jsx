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
                "https://cdn.kalingauniversity.ac.in/academic-facilities/digitalclassrooms.webp",
            logoSrc: "",
            subtitle: "ACADEMIC INFRASTRUCTURE",
        },
        {
            title: "Resource-Rich Library",
            description:
                "Our library is packed with the latest collection of resources in the form of books, journals, research papers, digital resources, magazines, and newspapers.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/academic-facilities/resourcerichlibrary.webp",
            logoSrc: "",
            subtitle: "ACADEMIC INFRASTRUCTURE",
            link: "/library",
        },
        {
            title: "Modern Laboratories",
            description:
                "We have over 90 + labs, including a language lab, a central instrumentation facility, computer labs (with more than 1600 high-tech computers), and other research labs that offer sophisticated instruments, technologies, and advanced computer systems.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/academic-facilities/modernlabrotary.webp",
            logoSrc: "",
            subtitle: "RESEARCH & PRACTICAL LEARNING",
            link: "/laboratories",
        },
        {
            title: "Incubation Centre",
            description:
                "Kalinga Incubation Foundation (KIF) supports the unique entrepreneurial ideas of our students and helps them transform into successful startup ventures. We aim to fast-track your entrepreneurial growth by providing industry insights, networking opportunities, and seed funding support.",
            imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/kif.png",
            logoSrc: "",
            subtitle: "INNOVATION & STARTUPS",
            link: "/kalinga-incubation-foundation",
        },
        {
            title: "Moot Court",
            description:
                "Our law students get a real courtroom experience with our Moot Court, where they put their legal skills into trials and participate in competitions, and gain confidence.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/academic-facilities/mootcourt.webp",
            logoSrc: "",
            subtitle: "LEGAL EDUCATION",
        },
        {
            title: "Centres of Excellence",
            description:
                "We collaborate with leading industry partners to offer skill-based training across EVs (Eblu), IIoT (Technoviz Automation), Robotics, Coding & Drones (BDS Education), MSME (IamSMEofIndia), BRIDGE & Automation (BOSCH), AI & ML (IBM Innovation Centre), and Automobile Engineering (JustAuto Solutions).",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/bosch/bosch-glimpse2.webp",
            logoSrc: "",
            subtitle: "INDUSTRY COLLABORATIONS",
            link: "/centresofexcellence",
        },
        {
            title: "Film Making Studio",
            description:
                "We have a vibrant film making studio at our campus, equipped with lights, cameras, speakers, and editing tools that enable students to learn script-writing, acting, direction, production, lighting techniques, video editing, set design, camera handling, live streaming, and more.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/academic-facilities/filmmakingstudio.webp",
            logoSrc: "",
            subtitle: "CREATIVE ARTS",
        },
        {
            title: "Podcast Studio",
            description:
                "Our podcast studio is a soundproof room equipped with high-quality microphones and equipment, providing students with an ideal space to practice and record content creation.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/academic-facilities/recording-studios.webp",
            logoSrc: "",
            subtitle: "MEDIA & COMMUNICATION",
        },
        {
            title: "Central Instrumentation Facility",
            description:
                "Every year, we provide on-campus internship opportunities to our students and conduct hands-on training programs on advanced instruments to improve their practical knowledge and technical expertise. We don’t just make our students academically strong but also job-ready with new skills so that they can meet industry demands.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/academics/education.webp",
            logoSrc: "",
            subtitle: "CAREER READINESS",
        },
        {
            title: "ERP",
            description:
                "We give every student access to the ERP portal, where they log in and get all sorts of information like the academic curriculum, exam timetable, notices, results, transportation details, and other information.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/campus-life/erp-images.webp",
            logoSrc: "",
            subtitle: "DIGITAL SERVICES",
        },
        {
            title: "Animal House",
            description:
                "To support experimental studies and research in the field of pharmacy, biotechnology, and life sciences, we have a safe and well-maintained animal house on our campus. We strictly adhere to ethical guidelines and safe practices in conducting practical experiments.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/academic-facilities/animal+house.webp",
            logoSrc: "",
            subtitle: "RESEARCH FACILITIES",
        },
        {
            title: "Audio-Visual Centre",
            description:
                "Our audio-visual centre offers advanced tools and resources that support interactive learning, presentations, and projects of students.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/academic-facilities/audiovisualcentre.webp",
            logoSrc: "",
            subtitle: "LEARNING SUPPORT",
        },
        {
            title: "Auditorium, Seminar Hall, & Board Rooms",
            description:
                "We have a digitally-equipped and spacious auditorium with a seating capacity of 200 people, seminar halls, and board rooms where we regularly organise conferences, meetings, guest lectures, placement programs, training programs, events and activities, and much more.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/academic-facilities/seminar-rooms.webp",
            logoSrc: "",
            subtitle: "EVENT INFRASTRUCTURE",
            // link: "/auditorium-and-halls",
        },
        {
            title: "E-Learning Rooms",
            description:
                "The E-Learning Rooms at Kalinga University come with high-speed internet connection, printing facilities, and modern infrastructure. Our students can have access to digital libraries, online courses, research databases, and e-resources.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/academic-facilities/elearning.webp",
            logoSrc: "",
            subtitle: "DIGITAL EDUCATION",
        },
        {
            title: "Training and Placement Cell",
            description:
                "The training team conducts interview prep sessions, resume building, and soft skills training programs to fill the gap between academic learning and companies' expectations. The placement team organises campus drives to generate placement opportunities for graduate and postgraduate students.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/alumini/alimini-meet2.webp",
            logoSrc: "",
            subtitle: "CAREER SERVICES",
            link: "/training-and-placements",
        },
        {
            title: "Research Facilities",
            description:
                "We have high-tech instruments at CIF, research labs for different streams, centres of excellence, an IPR cell, and dedicated faculty members who are always ready to guide, support, and mentor undergraduate, postgraduate, and Ph.D. students and research scholars in performing experimentation work and preparing reports.",
            imageSrc: "https://cdn.kalingauniversity.ac.in/academics/science.webp",
            logoSrc: "",
            subtitle: "ADVANCED RESEARCH",
            link: "/research-facilities",
        },
        {
            title: "Recording Studio",
            description:
                "Our recording studio provides students and faculty members with a creative space where they can explore their artistic expression and produce high-quality audio and video content. It contains advanced tools, audio plugins, video systems, microphones, and pro-grade systems.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/academic-facilities/recordingstudio.webp",
            logoSrc: "",
            subtitle: "MEDIA PRODUCTION",
        },
        {
            title: "Business Lab",
            description:
                "Our business lab features advanced computer systems and software that help commerce and management students master statistical tools, data analysis, and decision-making with an easy-to-use interface.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/academic-facilities/businesslab.webp",
            logoSrc: "",
            subtitle: "MANAGEMENT STUDIES",
        },
        {
            title: "Statistical Database Lab",
            description:
                "The lab equips students and research scholars to study various business parameters through advanced statistical analysis techniques. With our statistical database lab, they learn to analyse, interpret, and present the information in textual, tabular, and graphical forms in their research field.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/academic-facilities/research-and-statistical-database-lab1.webp",
            logoSrc: "",
            subtitle: "DATA & ANALYTICS",
        },
        {
            title: "Language Lab",
            description:
                "A dedicated learning space designed for students to improve their language and communication skills in English and Hindi.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/academics/arts.webp",
            logoSrc: "",
            subtitle: "DIGITAL EDUCATION",
        },
        {
            title: "Hostel",
            description:
                "We have fully-furnished hostels for girls and boys on our campus, where all necessary facilities are available along with tight security. We always strive to fulfil all the basic requirements of our hostelers, ensuring they never face any difficulty while living here.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/campus-facilities/hostel.webp",
            logoSrc: "",
            subtitle: "STUDENT ACCOMMODATION",
            link: "/hostel",
            href: "/hostel",
        },
        {
            title: "Transportation Options",
            description:
                "We have 30+ buses and four-wheel vehicles that provide pick-up and drop facilities with a comfortable travelling experience. Transport is offered at minimal rates, with faculty assigned proctorial duties in the morning and evening. Our buses and cars cover distances up to 70 km (one way).",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/campus-life/transport-1.jpg",
            logoSrc: "",
            subtitle: "CAMPUS CONNECTIVITY",
            href: "/transport-facility",
        }
    ];


    // ✅ Prevent "Know More" button flash
    useLayoutEffect(() => {
        const root = wrapperRef.current;
        if (!root) return;

        // Hide all Know More buttons except for Hostel and Transportation Options
        root.querySelectorAll(".bg-\\[var\\(--card-sandal\\)\\]").forEach((cardNode) => {
            const h3 = cardNode.querySelector("h3");
            const btn = cardNode.querySelector(".absolute.left-5.bottom-4");
            if (h3 && btn) {
                const title = h3.textContent.trim();
                if (title === "Hostel" || title === "Transportation Options") {
                    btn.style.display = "block"; // Ensure it's visible
                } else {
                    btn.style.display = "none";
                }
            }
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

            <h2 className="mb-1 text-black text-left md:text-center">
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
