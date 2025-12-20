import React from 'react'
import MainIntro from '../about/main_intro'

function Valueadditionsmainintro() {
    return (
        <>
            <MainIntro
                title="Beyond Books: Master Real-World Knowledge"
                subtitle="Become An All-Rounder!"
                description={["Emerging trends in education call for value additions, i.e. students must acquire real-world knowledge apart from their course curriculum. Employers these days are looking for more than just a degree in candidates. We strongly emphasise the holistic development of students, and thus we prepare them to lead in a challenging world and become professionally ready with all the potential know-how.",
                    , "Gain confidence during interviews or learn to present your ideas to a large audience. Kalinga University is giving you a platform where you can explore, experiment, learn, and grow. Pass out with a degree and become a pro in every aspect of your life."
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

export default Valueadditionsmainintro