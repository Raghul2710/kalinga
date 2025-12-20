import React from 'react'
import CenterOfExcellence from '../about/center_of_excellence'

function Valueadditionskilldev() {
    const valueAdditionSkills = [
        {
            id: 1,
            name: "Make Your Resume Exceptional",
            title:
                "Once you finish your degree with KU, your resume will contain all the additional skills or certifications that will keep you in the spotlight among other applicants.",
            image:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png", // Image - 20
        },
        {
            id: 2,
            name: "Holistic Development",
            title:
                "Our primary goal is to make our students well-rounded in their academic journey. By nurturing their minds, they become confident to make the best decisions in life.",
            image:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png", // Image - 21
        },
        {
            id: 3,
            name: "Fill Skill Gaps",
            title:
                "Our academic curriculum not only covers the topics of your syllabus but also includes hands-on training programs and internship opportunities that will make you a career-ready professional.",
            image:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png", // Image - 22
        },
        {
            id: 4,
            name: "Improve Personality Development",
            title:
                "Beyond professional growth, our value-additions will improve your decision-making power and sharpen your personality. It will be valuable not only for your career but for your everyday life too.",
            image:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png", // Image - 23
        },
    ];

    return (
        <>
            <CenterOfExcellence
                title='Become Employable With Our Skill Development Initiatives'
                description='Become CONFIDENT, SMARTER, and SHINE BRIGHTER with our career-focused training. All our value additions are “FREE OF COST” and will help you achieve the following benefits: '
                centres={valueAdditionSkills} />
        </>
    )
}

export default Valueadditionskilldev