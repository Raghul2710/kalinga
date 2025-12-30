import React from "react";
import CenterOfExcellence from "../about/center_of_excellence";

function Valueadditionskilldev() {
    const valueAdditionSkills = [
        {
            id: 1,
            name: "Make Your Resume Exceptional",
            title:
                "Once you finish your degree with KU, your resume will contain all the additional skills or certifications that will keep you in the spotlight among other applicants.",
            image:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/value-additions/resume.webp",
        },
        {
            id: 2,
            name: "Holistic Development",
            title:
                "Our primary goal is to make our students well-rounded in their academic journey. By nurturing their minds, they become confident to make the best decisions in life.",
            image:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/value-additions/holistic_dev.webp",
        },
        {
            id: 3,
            name: "Fill Skill Gaps",
            title:
                "Our academic curriculum not only covers the topics of your syllabus but also includes hands-on training programs and internship opportunities that will make you a career-ready professional.",
            image:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/value-additions/skillgap.webp",
        },
        {
            id: 4,
            name: "Improve Personality Development",
            title:
                "Beyond professional growth, our value-additions will improve your decision-making power and sharpen your personality. It will be valuable not only for your career but for your everyday life too.",
            image:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/value-additions/personality_dev.webp",
        },
    ];

    return (
        <div className="value-addition-skilldev">
            <CenterOfExcellence
                title="Become Employable With Our Skill Development Initiatives"
                description='Become CONFIDENT, SMARTER, and SHINE BRIGHTER with our career-focused training. All our value additions are “FREE OF COST” and will help you achieve the following benefits:'
                centres={valueAdditionSkills}
            />

            {/* ✅ ONLY HERE: override CentreOfExcellence injected CSS to STRETCH images */}
            <style jsx global>{`
        /* Target the exact image wrapper used in CenterOfExcellence */
        .value-addition-skilldev
          .centres-swiper
          .centres-card-wrapper
          div[class*="relative"][class*="w-full"][class*="mb-4"]
          img {
          object-fit: cover !important; /* ✅ TRUE stretch (distorts) */
          width: 100% !important;
          height: 100% !important;

          max-width: none !important; /* remove 80% limit */
          max-height: none !important; /* remove 80% limit */

          position: absolute !important;
          inset: 0 !important; /* top/right/bottom/left = 0 */
          left: 0 !important;
          top: 0 !important;
          transform: none !important; /* remove translateX(-50%) */
          padding: 0 !important;
        }
      `}</style>
        </div>
    );
}

export default Valueadditionskilldev;
