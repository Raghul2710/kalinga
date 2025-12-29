"use client";

import React from "react";
import StudentActivities from "../department/student_activities";

function Sportsandwellnessevents() {
    const defaultEvents = [
        {
            id: 1,
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/woodball.webp",
            imageAlt: "Sports Events",
            title:
                "Kalinga University Clinches Gold at AIU Woodball Championship 2024-25 in Vadodara, Gujarat",
            description: [
                "Among 44 universities of India, our Woodball team secured a Gold Medal in the Mixed Double Event and a Bronze Medal in the Women’s Team Stroke category,",
                "at the AIU Woodball Championship 2024-25, held at Parul University, Vadodara, Gujarat. Our athletes were accompanied by Dr. Sanjeev Kumar Yadav (Assistant Professor, Faculty of Physical Education) and Ms. Anamika Shukla (Assistant, Department of Sports), under the mentorship of Dr. D. Kalidoss, Director, Sports of Kalinga University. Their outstanding performance is proof of their hard work and exceptional sportsmanship.",
            ],
            buttonText: "Read More",
            date: "07.03.2025 - 10.03.2025",
        },
        {
            id: 2,
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/wellness_event.webp",
            imageAlt: "Sports Events",
            title: `A session on "Health & Wellness through Ayurveda"`,
            description: [
                "To raise awareness about Ayurveda, Office of the Chief Proctor and the Faculty of Pharmacy organized a powerful discussion on “Health & Wellness through Ayurveda”",
                "presented by Dr. K. B. Srinivas Rao, a renowned Ayurveda Consultant and Panchkarma Specialist from Raipur. He addressed various misconceptions regarding Ayurvedic medicines and treatments of different diseases. He also explained its scientific principles and how it works effectively in diseases prevention along with other modern medical practices. Students and staff members actively participated in the discussion and the event marked the University’s commitment towards holistic education and well-being.",
            ],
            buttonText: "Read More",
            date: "07.03.2025",
        },
    ];

    return (
        <>
            {/* ✅ Scoped styling ONLY for this section */}
            <style jsx global>{`
        .sports-events-wrapper h1,
        .sports-events-wrapper h2,
        .sports-events-wrapper h3 {
          padding-bottom: 20px; /* adjust */
          margin-bottom: 0 !important;
        }
      `}</style>

            <div className="sports-events-wrapper">
                <StudentActivities
                    title="Sports Events"
                    subtitle=""
                    activities={defaultEvents}
                    paddingClassName="py-20 pt-0"

                />
            </div>
        </>
    );
}

export default Sportsandwellnessevents;
