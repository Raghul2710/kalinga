import React from 'react'
import CareerPath from '../course/career_path'

function Admissionhacks() {
    const aboutFeatureCards = [
        {
            title: "Plan Your Finances Wisely",
            description:
                "Perform well in your board exams and look for universities that provide scholarship options, as it will significantly reduce your financial burden.",
            icon: "",
            imageUrl: "",
        },
        {
            title: "Take Up Career Counselling",
            description:
                "Select universities that offer career counselling services to help you identify your strengths, weaknesses, and interests, while also clearing all your doubts related to courses and career paths.",
            icon: "",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/Admission+Procedure/2.svg",
        },
        {
            title: "Select Future-Proof Careers",
            description:
                "Opt for high-demand careers such as Artificial Intelligence, Machine Learning, Cybersecurity, Designing, Management, Healthcare, Engineering, Law, and other emerging fields.",
            icon: "",
            imageUrl: "https://kalinga-university.s3.amazonaws.com/kalinga_backend/files/course/career_icons/businessman_1.svg",
        },
        {
            title: "Prioritise Colleges Offering Placements",
            description:
                "Choose universities with strong industry connections, reputed recruitment partners, internship opportunities, and regular on-campus placement drives.",
            icon: "",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/Admission+Procedure/4.svg",
        },
        {
            title: "Check University Accreditation",
            description:
                "Always select accredited universities, as they offer recognised degrees, ensure quality education, focus on holistic development, and follow standard academic practices.",
            icon: "",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/Admission+Procedure/5.svg",
        },
        {
            title: "Think Beyond Academics",
            description:
                "Enroll in universities that promote learning beyond textbooks through hands-on training, research opportunities, workshops, seminars, and industry exposure to make you job-ready.",
            icon: "",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/Admission+Procedure/6.svg",
        },
        {
            title: "Look For Student Reviews",
            description:
                "Before making your final decision, explore student reviews across different platforms or interact with seniors to understand real campus experiences and academic quality.",
            icon: "",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/Admission+Procedure/7.svg",
        },
        {
            title: "Campus Life Matters",
            description:
                "Choose a vibrant campus that hosts events, fests, competitions, and extracurricular activities, as these experiences are equally important alongside academics.",
            icon: "",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/Admission+Procedure/8.svg",
        },
        {
            title: "Location and Connectivity",
            description:
                "If the university is far from your home, ensure it offers good transportation facilities and connectivity to make commuting convenient and hassle-free.",
            icon: "",
            imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/Admission+Procedure/9.svg",
        },
    ];

    return (
        <div className='mt-7'>
            <CareerPath careers={aboutFeatureCards} title='Master These University Selection Hacks' description='' />
        </div>
    )
}

export default Admissionhacks