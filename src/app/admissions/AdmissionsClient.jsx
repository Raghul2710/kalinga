"use client";

import { Suspense, useEffect } from "react";
import OurPrograms from "../components/admissions/our_programs";
import ScholarshipsSlider from "../components/admissions/scholarships_slider";
import AdmissionSteps from "../components/admissions/admission-steps";
import Facility from "../components/admissions/facility";
import QuickLinks from "../components/general/quick_links";
import FAQ from "../components/general/faq";
import AdmissionCareer from "../components/general/admission_cta";
import OrganogramOfKalinga from "../components/about/organogram_of_kalinga";

export default function AdmissionsClient() {
    // Handle scrolling to program search section when hash is present
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.location.hash === '#program-search-section') {
                setTimeout(() => {
                    const searchSection = document.getElementById('program-search-section');
                    if (searchSection) {
                        const headerOffset = window.innerWidth < 768 ? 100 : 80;
                        const elementPosition = searchSection.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                        setTimeout(() => {
                            const searchInput = searchSection.querySelector('input[type="text"]');
                            if (searchInput) searchInput.focus();
                        }, 500);
                    }
                }, 300);
            }
        }
    }, []);

    const admissionStepsContent = {
        steps: [
            {
                id: 1,
                icon: "https://cdn.kalingauniversity.ac.in/admission/step-1.svg",
                stepNumber: "01",
                title: "Step Ⅰ",
                description: "Visit https://admissions.kalingauniversity.ac.in/",
                backDescription: "Visit https://admissions.kalingauniversity.ac.in/ to begin your admission process.",
            },
            {
                id: 2,
                icon: "https://cdn.kalingauniversity.ac.in/admission/step-2.svg",
                stepNumber: "02",
                title: "Step Ⅱ",
                description: "Register for the entrance exam (KALSEE/KAL-MAT)",
                backDescription: "Register for the entrance exam (KALSEE/KAL-MAT) by completing the registration form with accurate personal details.",
            },
            {
                id: 3,
                icon: "https://cdn.kalingauniversity.ac.in/admission/step-3.svg",
                stepNumber: "03",
                title: "Step Ⅲ",
                description: "Take the computer-based exam and get shortlisted",
                backDescription: "Take the computer-based exam on the scheduled date. Results will be announced, and shortlisted candidates will be notified.",
            },
            {
                id: 4,
                icon: "https://cdn.kalingauniversity.ac.in/admission/step-4.svg",
                stepNumber: "04",
                title: "Step Ⅳ",
                description: "Fill out the online admission form after selection",
                backDescription: "Fill out the online admission form after selection with all required information.",
            },
            {
                id: 5,
                icon: "https://cdn.kalingauniversity.ac.in/admission/step-5.svg",
                stepNumber: "05",
                title: "Step Ⅴ",
                description: "Attach self-attested copies with the admission form",
                backDescription: "Attach the following self-attested copies with the admission form:\n• Xerox copies of mark sheets (Class X, XII, UG/PG depending on your course)\n• Original Copies of TC, CC, Migration Certificate, and Gap Certificate (if any)\n• Proof of employment or self-employment (if working)",
            },
            {
                id: 6,
                icon: "https://cdn.kalingauniversity.ac.in/admission/step-3.svg",
                stepNumber: "06",
                title: "Step Ⅵ",
                description: "Pay your program fee within 10 days",
                backDescription: "Pay your program fee within 10 days after receiving the offer letter. Online/Offline payment options are available.",
            },
            {
                id: 7,
                icon: "https://cdn.kalingauniversity.ac.in/admission/step-4.svg",
                stepNumber: "07",
                title: "Step Ⅶ",
                description: "Welcome to Kalinga University!",
                backDescription: "Welcome to Kalinga University! Begin your journey with us.",
            },
        ],
        subtitle: "Steps To Get Admission Into KU",
        title: "Admission Procedure",
        showHeaderButton: true,
        ctaLabel: "Apply Now",
        showReadMore: true,
        showIcon: true,
    };

    const entranceExamContent = {
        title: "Book Your Spot",
        description: ["Take the first step towards your dream career with KALSEE and KAL-MAT."],
        buttonLabel: "Explore Now",
        cardBackgroundColor: "bg-[var(--dark-blue)]",
        showImage: true,
        imageUrl: "https://cdn.kalingauniversity.ac.in/admission/student-img.png",
        buttonClassName: "!bg-[var(--button-red)] !text-white",
        href: "/entrance-exam",
    };

    const admissionOrganogramContent = {
        title: "Proposed Fee Structure 2025-26",
        description: ["Detailed fee breakdowns for all programs are available for Indian students."],
        buttonLabel: "Learn More",
        cardBackgroundColor: "bg-[var(--dark-blue)]",
        showImage: false,
        buttonClassName: "!bg-white !text-black",
        href: "/ku-fees",
    };

    const facilityContent = {
        title: "Campus Facilities",
        subtitle: "World-Class Infrastructure",
        facilities: [
            { id: 1, name: "Hostel", image: "https://cdn.kalingauniversity.ac.in/facilities/hostel.webp" },
            { id: 2, name: "Library", image: "https://cdn.kalingauniversity.ac.in/admission/library.webp" },
            { id: 3, name: "GYM", image: "https://cdn.kalingauniversity.ac.in/facilities/gym.webp" },
            { id: 4, name: "Sports Complex", image: "https://cdn.kalingauniversity.ac.in/facilities/DSC00047.webp" },
            { id: 5, name: "Laboratories", image: "https://cdn.kalingauniversity.ac.in/facilities/labotories.webp" },
            { id: 6, name: "Cafeteria", image: "https://cdn.kalingauniversity.ac.in/facilities/canteen+mess.webp" },
        ],
    };

    const quickLinksContent = {
        title: "Explore More",
        description: "Access essential information to support your academic journey.",
        links: [
            { id: 1, title: "Value Added Courses", href: "/value-added-course" },
            { id: 2, title: "Value Addition", href: "/value-additions" },
            { id: 3, title: "Hostel", href: "/hostel" },
            { id: 4, title: "Transport", href: "/transport-facility" },
            { id: 5, title: "KU Fees", href: "/ku-fees" },
            { id: 6, title: "Why Kalinga", href: "/about-us" },
        ],
    };

    const faqContent = {
        title: "Frequently Asked Questions",
        items: [
            { id: 1, question: "Am I eligible to take admission?", answer: "Check the minimum eligibility criteria and clear the entrance exam." },
            { id: 2, question: "What is the admission procedure?", answer: "Registration, entrance test, and completion of formalities." },
        ],
    };

    return (
        <div className="pt-[100px] md:pt-0" id="course-finder">
            <Suspense fallback={<div className="text-center py-16">Loading programs...</div>}>
                <OurPrograms programCardTitleClassName=" !text-base md:!text-lg lg:!text-xl" customSubtitle="Explore our programs" />
            </Suspense>
            <OrganogramOfKalinga {...entranceExamContent} useContainer={true} />
            <div id="admission-steps">
                <AdmissionSteps {...admissionStepsContent} ctaHref="https://admissions.kalingauniversity.ac.in/" />
            </div>
            <OrganogramOfKalinga {...admissionOrganogramContent} useContainer={true} />
            <ScholarshipsSlider />
            <Facility {...facilityContent} className="!pt-4 pb-16" />
            <QuickLinks {...quickLinksContent} titleClassName="text-white" />
            <FAQ {...faqContent} subtitle="" />
            <AdmissionCareer />
        </div>
    );
}
