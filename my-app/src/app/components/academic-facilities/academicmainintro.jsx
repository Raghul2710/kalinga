import React from "react";
import MainIntro from "../about/main_intro";

function Academicmainintro() {
    return (
        <>
        <style jsx global>{`
        .academic-mainintro img.transform-3d-slant {
            height: 320px !important;   /* 🔽 decrease height here */
            max-height: 320px !important;
            width: 100% !important;
            object-fit: cover !important;
        }
        @media (min-width: 1024px) {
            .academic-mainintro img.transform-3d-slant {
            height: 380px !important;
            max-height: 380px !important;
            }
        }
        `}</style>

            <div className="academic-mainintro">
                <MainIntro
                    title="Academic Facilities"
                    subtitle="Experience A Supportive Learning Environment"
                    description={[
                        "We nurture our students by providing them with all the essential academic facilities and support they need to excel in their chosen fields. They don’t just learn theoretical knowledge, but also learn from practical exposure and an experiential learning environment. With our hands-on learning experience, they become confident and ready to take up challenges and stand out as a better individual.",
                    ]}
                    imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/commerce-management.webp"
                    imageAlt="Academic Facilities"
                    readMoreLabel="Read More"
                    readLessLabel="Read Less"
                    showKnowMore={true}
                    initialVisibleParagraphs={1}
                />
            </div>
        </>
    );
}

export default Academicmainintro;
