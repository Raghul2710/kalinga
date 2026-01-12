import React from 'react'
import MainIntro from '../about/main_intro'

function Safetyandsecuritymainintro() {
    return (
        <div>
            <MainIntro
                title="Your Safety is Our Priority"
                subtitle="Campus Safety and Security"
                description={[
                    "Kalinga University is committed to maintaining the safety and security of its students, staff members, and visitors. Our students who are living at our hostels are our responsibility, and we ensure that they live in a free, secure, and healthy environment. The entire campus area, including hostels, parking areas, and academic buildings, is very well secured by the in-house security team. CCTV cameras are installed all across the campus to continuously monitor all the activities of the University. We’ve zero tolerance towards ragging, alcohol, smoking, drugs, misbehaviour, or physical violence, and we take necessary steps in case students are found violating our rules. We encourage everyone on our campus to take care of their personal belongings. ",
                ]}
                imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/commerce-management.webp"
                imageAlt="Academic Facilities"
                readMoreLabel="Read More"
                readLessLabel="Read Less"
                showKnowMore={true}
                initialVisibleParagraphs={1}
            />
        </div>
    )
}

export default Safetyandsecuritymainintro