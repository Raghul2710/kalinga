import React from 'react'
import StudentActivities from '../department/student_activities';

function Sportsandwellnessevents() {
    const defaultEvents = [
        {
            id: 1,
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/basektballevent.webp",
            imageAlt: "Sports Events",
            title: "Lorem ipsum dolor sit amet, consectetur",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            buttonText: "Read More",
            date: "August 25 - 2025",
        },
        {
            id: 2,
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            imageAlt: "Sports Events",
            title: "Lorem ipsum dolor sit amet, consectetur",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            buttonText: "Read More",
            date: "August 25 - 2025",
        },
        {
            id: 3,
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            imageAlt: "Sports Events",
            title: "Lorem ipsum dolor sit amet, consectetur",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            buttonText: "Read More",
            date: "August 25 - 2025",
        },
    ];

    return (
        <>
            <StudentActivities
                title="Sports Events"
                subtitle=''
                activities={defaultEvents}
                paddingClassName="py-16"
            />

        </>
    )
}

export default Sportsandwellnessevents