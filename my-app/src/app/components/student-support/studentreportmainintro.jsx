import React from 'react'
import MainIntro from '../about/main_intro'

function StudentReportmainintro() {
    return (
        <>
            <MainIntro
                title="Student Support"
                subtitle="Empowering You With 360° Support System"
                description={["Kalinga University is one of the Best Universities in India, providing an exceptional college life experience to its students. With our extraordinary services and facilities, we help them achieve their academic and professional goals. Our student-centric services are designed to meet the needs and aspirations of both national and international students, helping them learn and grow together in an inclusive learning environment.",
                    , "Our curriculum does not just stick to academic programs, but it covers a wide range of student development programs and engagement activities that take them one step ahead in the corporate world We just don’t care about our students graduating, but we care about their overall success."
                ]}
                readMoreLabel="Read More"
                readLessLabel="Read Less"
                imageUrl='https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png'
                showKnowMore={true}
                initialVisibleParagraphs={1}
            />
        </>
    )
}

export default StudentReportmainintro