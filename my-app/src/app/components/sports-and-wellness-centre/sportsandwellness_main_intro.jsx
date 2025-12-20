import React from 'react'
import MainIntro from '../about/main_intro'

function SportsandwellnessMainIntro() {
    return (
        <>
            <MainIntro
                title="About KU’s Sports Facilities"
                description={["Nothing is more important than good health, and sports and games are a great way to maintain your physical health, personal growth, and self-confidence. We don’t just encourage students to achieve top scores in academics, but we also motivate them to become a pro in their favourite sports with our elite indoor and outdoor sports facilities. Our thriving sports environment transforms both beginners and experts into champions.",
                    "Whether you are smashing sixes in a cricket ground or scoring goals in football, you’ll get to play a wide range of sports at our campus. Our sports enthusiasts participate in inter-university, state-level, and national-level competitions and win trophies. Every year, we organise a sports fest in which both National and International students actively participate in different games of their choice and win amazing prizes."
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

export default SportsandwellnessMainIntro