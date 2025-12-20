import React from 'react'
import FeatureCards from '../home/featurecard';

function Valueadditionsofkalinga() {
    const internationalStudentsFeatureCards = [
        {
            id: 1,
            title: "Research",
            body: "We facilitate research work in all the departments under our well-crafted research policy. With access to high-tech labs, our students and faculty members work together to deliver impactful outcomes.",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            variant: "gray",
        },
        {
            id: 2,
            title: "Innovation",
            body: "It's not just about labs! We encourage our students to stay curious and active, acquire problem-solving skills, and come up with unique ideas inside and outside the classroom. They develop innovative solutions through our innovation and incubation centre.",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            variant: "amber",
        },
        {
            id: 3,
            title: "Consultancy",
            body: "Our faculties and departments take up the live projects of big companies or government bodies. So, what’s for you? Well, you’ll be the one assisting them by solving some realistic problems beyond your classroom studies.",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            variant: "gray",
        },
        {
            id: 4,
            title: "Internships and Industrial Visits",
            body: "All Kalinga University students are provided with internship opportunities and are encouraged to work on practical projects and visit industrial sites.",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            variant: "amber",
        },
        {
            id: 5,
            title: "Co-Curricular Activities",
            body: "KU conducts workshops, seminars, guest lectures, research paper presentations, Ideathons, Hackathons, and certification courses to develop an additional knowledge base among students.",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            variant: "gray",
        },
        {
            id: 6,
            title: "Extra-Curricular Activities",
            body: "We also help students think beyond the box through activities like quiz competitions, debates, theatre and drama acts, creative writing competitions, open mic competitions, fashion shows, exhibitions, and much more.",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            variant: "amber",
        },
        {
            id: 7,
            title: "National Cadet Corps (NCC)",
            body: "Students can opt for NCC voluntarily, and it is a great value addition in terms of service to the nation, discipline, and physical fitness.",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            variant: "gray",
        },
        {
            id: 8,
            title: "National Service Scheme (NSS)",
            body: "Become a part of our NSS team and engage in our student volunteer programs. It will make you confident, develop leadership qualities, and become an active citizen through social and community services.",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            variant: "amber",
        },
        {
            id: 9,
            title: "Sports and Fitness",
            body: "To develop sportsmanship among students, our university has an ultramodern gymnasium and a sports complex consisting of a basketball court, volleyball court, badminton court, handball court, cricket pitch, football ground, and much more.",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            variant: "gray",
        },
        {
            id: 10,
            title: "Career Guidance",
            body: "Our career counsellors are always available to guide students at any time during their academic journey and mentor them in choosing their desired streams or clearing all their doubts.",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            variant: "amber",
        },
        {
            id: 11,
            title: "Grooming and Placements",
            body: "Our special trainers prepare students with soft skills, basic mannerisms, etiquette, interview preparation, and language proficiency, making them ready for campus placement drives.",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            variant: "gray",
        },
        {
            id: 12,
            title: "Experience Cultural Diversity",
            body: "We have students from 28+ nationalities, which opens doors to experiencing a wide diversity. We encourage all our students to participate in different festivals or cultural activities and develop global connections.",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            variant: "amber",
        },
        {
            id: 13,
            title: "Value Added Courses",
            body: "We offer a range of short-term value-added certificate courses, which are conducted after class hours or during semester breaks. These courses are conducted by professionals and industry experts who help students stand out in the job market by adding further value to their resumes.",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            variant: "gray",
        },
    ];

    return (
        <>
            <FeatureCards
                title="Value Additions Of Kalinga University"
                subtitle=""
                description="We’ve created a learning environment where you can find your passion, develop curiosity, and get new experiences. You will not just attend classes but grow academically, personally, and socially. At KU, you will get a space that matches your energy and ambition."
                imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
                imageAlt="International Students"
                cards={internationalStudentsFeatureCards}
            />
        </>
    )
}

export default Valueadditionsofkalinga