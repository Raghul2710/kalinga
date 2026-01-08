import React from 'react'
import WhyStudy from '../department/why-study'

function Valueadditionwhatmakes() {
    const whatMakesKuStandOut = [
        {
            id: 1,
            title: "Future-Ready Infrastructure",
            body:
                "We stand at the forefront of academic excellence by providing students with an exceptional learning experience. Our 50+ acre campus includes Digital Classrooms, High-Tech Labs, Sports Centres, an Auditorium, a Moot Court, a Library, Board Rooms, and much more.",
            variant: "gray",
            image:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/value-additions/futurereadyinfra.svg", // Image - 24
        },
        {
            id: 2,
            title: "Dedicated Counselling Sessions",
            body:
                "Our primary aim is to navigate your journey towards the right direction by providing career guidance and support until you land your dream job.",
            variant: "amber",
            image:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/value-additions/counselingsessions.svg", // Image - 25
        },
        {
            id: 3,
            title: "Unmatched Research Facilities",
            body:
                "With 90+ Labs, including IT Labs, we’re Chhattisgarh’s No. 1 institute, committed to innovation and excel in providing groundbreaking research facilities.",
            variant: "gray",
            image:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/value-additions/researchfacilities.svg", // Image - 26
        },
        {
            id: 4,
            title: "Vibrant Campus Life",
            body:
                "Luscious gardens, lively events, and a dynamic student community will make your college life experience truly unforgettable.",
            variant: "amber",
            image:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/value-additions/vibrantcampus.svg", // Image - 27
        },
        {
            id: 5,
            title: "Endless Career Options",
            body:
                "Choose from our 130+ Programs, designed to provide industry-relevant knowledge and make you job-ready.",
            variant: "gray",
            image:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/value-additions/careeroptions.svg", // Image - 28
        },
        {
            id: 6,
            title: "Experienced Teaching Faculties",
            body:
                "Learn from highly experienced professors of KU who are from across India and abroad. Their expertise helps students become future leaders.",
            variant: "amber",
            image:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/value-additions/teachingfaculties.svg", // Image - 29
        },
        {
            id: 7,
            title: "Exclusive Scholarships",
            body:
                "We offer up to 100% merit-based scholarships, social scholarships, entrance exam scholarships, sports scholarships, culture & achievers scholarships, and much more.",
            variant: "gray",
            image:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/value-additions/exclusivescolarships.svg", // Image - 30
        },
        {
            id: 8,
            title: "Networking Opportunities",
            body:
                "Connect with industry leaders, alumni, and working professionals through our workshops and seminars and future-proof your career.",
            variant: "amber",
            image:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/value-additions/networking.svg", // Image - 31
        },
        {
            id: 9,
            title: "Global Recruitment Partners",
            body:
                "With 400+ recruitment partners, we offer placement opportunities to students from different backgrounds so that they can secure their dream job.",
            variant: "gray",
            image:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/value-additions/recruitmentpartners.svg", // Image - 32
        },
    ];

    return (
        <>
            <WhyStudy
                items={whatMakesKuStandOut}
                sectionTitle='What Makes KU Stand Out?'
                backgroundImage='https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/why-this-course-1.webp' />
        </>
    )
}

export default Valueadditionwhatmakes