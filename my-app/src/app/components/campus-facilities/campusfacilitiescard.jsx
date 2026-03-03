"use client";

import React, { useLayoutEffect, useRef } from "react";
import Cards from "../ccrc/cards";

function Campusfacilitiescard() {
    const wrapperRef = useRef(null);

    const cards = [
        {
            title: "Hostel",
            description:
                "We have fully-furnished hostels for girls and boys on our campus, where all necessary facilities are available along with tight security. We always strive to fulfil all the basic requirements of our hostelers, ensuring they never face any difficulty while living here.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/campus-facilities/hostel.webp",
            logoSrc: "",
            subtitle: "STUDENT ACCOMMODATION",
            link: "/hostel",
        },
        {
            title: "Mess",
            description:
                "In partnership with Sodexo Food Solutions India Pvt. Ltd., we have a separate mess for boys and girls, serving 4 nutritious meals a day—breakfast, lunch, high tea, and dinner—that are freshly prepared and hygienic.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/campus-facilities/mess.webp",
            logoSrc: "",
            subtitle: "DINING FACILITIES",
            link: "/cafeteria-mess",
        },
        {
            title: "Canteen & Cafeteria",
            description:
                "In partnership with Sodexo Food Solutions India Pvt. Ltd., explore our regular food and fast food items at the canteen. For fresh juices, snacks, or ice creams, our campus cafeterias offer delicious options at affordable prices.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/campus-facilities/canteenandcafteria.webp",
            logoSrc: "",
            subtitle: "FOOD & REFRESHMENTS",
        },
        {
            title: "Transportation Options",
            description:
                "We have 30+ buses and four-wheel vehicles that provide pick-up and drop facilities with a comfortable travelling experience. Transport is offered at minimal rates, with faculty assigned proctorial duties in the morning and evening. Our buses and cars cover distances up to 70 km (one way).",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/campus-life/transport-1.jpg",
            logoSrc: "",
            subtitle: "CAMPUS CONNECTIVITY",
        },
        {
            title: "Mini Market",
            description:
                "The mini mart on campus includes an ATM facility, salon, stationery store, snack shop, juice centre, and chemist. It saves time for students and hostellers by meeting daily needs without having to step outside the campus.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/campus-life/mini-market2.webp",
            logoSrc: "",
            subtitle: "DAILY ESSENTIALS",
            link: "/mini-market",
        },
        {
            title: "Hostel Reading Room",
            description:
                "We have a spacious reading room in the hostel that offers a quiet and comfortable environment. Students can study individually or in groups and prepare for exams, projects, or presentations without any membership requirement.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/campus-facilities/hostelreadingroom_campusfacility.webp",
            logoSrc: "",
            subtitle: "STUDY SPACES",
        },
        {
            title: "Health Clinic",
            description:
                "Our on-campus health clinic has an experienced doctor and nurse who ensure the well-being of students and staff by providing general consultation, counselling, and emergency medical support.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/campus-life/Health+Clinic1.webp",
            logoSrc: "",
            subtitle: "HEALTH & WELLNESS",
            link: "/health-clinic",
        },
        {
            title: "Banking and ATM",
            description:
                "We have tie-ups with Central Bank of India and Canara Bank for education loans. The campus also has two fully operational 24-hour ATMs from ICICI Bank and OBC Bank, along with support for digital payments like net banking, UPI, Paytm, and cards.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/campus-life/bank-atm1.png",
            logoSrc: "",
            subtitle: "FINANCIAL SERVICES",
        },
        {
            title: "24/7 Wi-Fi Enabled Campus",
            description:
                "Our campus is equipped with a high-speed 24/7 Wi-Fi-enabled network with multiple ISPs, offering up to 1 Gbps secure internet connectivity. The seamless Wi-Fi also supports the Learning Management System (LMS) for academic needs.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/campus-facilities/wifienabledcampus.webp",
            logoSrc: "",
            subtitle: "DIGITAL INFRASTRUCTURE",
        },
        {
            title: "Safety & Security",
            description:
                "The entire campus—including hostels, parking areas, and academic buildings—is secured by an in-house security team. CCTV cameras are installed across the campus to continuously monitor university activities.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/campus-life/security1.jpg",
            logoSrc: "",
            subtitle: "CAMPUS SAFETY",
        },
        {
            title: "Art Gallery",
            description:
                "Our art gallery displays souvenirs from different countries brought by international students. It allows both national and international students to explore cultural diversity and global traditions.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/campus-facilities/artgallery.webp",
            logoSrc: "",
            subtitle: "CULTURAL EXPRESSION",
        },
        {
            title: "Sanitary Napkin Vending Machines",
            description:
                "Sanitary napkin vending machines are installed in all girls’ washrooms and hostels to ensure hygiene and round-the-clock accessibility, supporting the well-being of female students.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/campus-facilities/sanitary-napkin-vending-machines.webp",
            logoSrc: "",
            subtitle: "WOMEN WELLBEING",
        },
        {
            title: "Recreation Corners",
            description:
                "Need a break? Our peaceful recreational corners offer students a space to relax, socialize, and unwind from academic stress. These serene spots help students recharge and connect with peers.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/campus-facilities/recreation.webp",
            logoSrc: "",
            subtitle: "STUDENT LIFE",
        },
        {
            title: "Selfie Points",
            description:
                "For those who love capturing moments, our picturesque selfie points across campus let students click memorable photos and share their experiences with friends and family.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/campus-facilities/selfiepoints.webp",
            logoSrc: "",
            subtitle: "CAMPUS EXPERIENCE",
        },
        {
            title: "Sports & Wellness Centre",
            description:
                "We have indoor and outdoor sports facilities where students can play different games like carom, chess, table tennis, cricket, football, badminton, Hockey, Lawn Tennis, and more. We also have a dedicated yoga room that supports students’ emotional and mental well-being.",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/sports/sportsmain.webp",
            logoSrc: "",
            subtitle: "CAMPUS EXPERIENCE",
        },
        {
            title: "Gymnasium",
            description:
                "We have separate boys’ and girls’ gym facilities on our campus for students who are residing in our hostels. ",
            imageSrc:
                "https://cdn.kalingauniversity.ac.in/facilities/gym.webp",
            logoSrc: "",
            subtitle: "CAMPUS EXPERIENCE",
        },
    ];

    // ✅ useLayoutEffect runs earlier than useEffect (prevents flash)
    useLayoutEffect(() => {
        const root = wrapperRef.current;
        if (!root) return;

        // hide the buttons
        const btns = root.querySelectorAll(".absolute.left-5.bottom-4");
        btns.forEach((btn) => (btn.style.display = "none"));

        // unhide the wrapper after hiding buttons
        root.style.visibility = "visible";
    }, []);

    return (
        <>
            <style jsx global>{`
        /* your existing image css stays same */
        .campus-cards-wrapper img {
          width: 100% !important;
          object-fit: cover !important;
          border-radius: 0.75rem;
        }

        @media (min-width: 1024px) {
          .campus-cards-wrapper img {
            height: 340px !important;
          }
        }

        @media (min-width: 641px) and (max-width: 1023px) {
          .campus-cards-wrapper img {
            height: 280px !important;
          }
        }

        @media (max-width: 640px) {
          .campus-cards-wrapper img {
            height: 220px !important;
            padding: 6px;
          }
        }

        .campus-cards-wrapper img[src=""],
        .campus-cards-wrapper img:not([src]) {
          display: none !important;
        }
      `}</style>

            <h2 className="mb-1 text-black text-center">
                Campus Facilities
            </h2>

            {/* ✅ hidden on first paint, shown immediately after layout effect */}
            <div
                ref={wrapperRef}
                className="campus-cards-wrapper"
                style={{ visibility: "hidden" }}
            >
                <Cards cards={cards} />
            </div>
        </>
    );
}

export default Campusfacilitiescard;
