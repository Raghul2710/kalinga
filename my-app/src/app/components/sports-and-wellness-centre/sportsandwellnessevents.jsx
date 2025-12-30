"use client";

import React from "react";
import StudentActivities from "../department/student_activities";

function Sportsandwellnessevents() {
    const defaultEvents = [
        {
            id: 1,
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            imageAlt: "",
            title:
                "",
            description: [
                ""
            ],
            buttonText: "",
            date: "",
        },
        {
            id: 2,
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            imageAlt: "",
            title: "",
            description: [
                ""
            ],
            buttonText: "",
            date: "",
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
