"use client";

import StudentActivities from "../department/student_activities";

const nccActivities = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "",
    title: "",
    description:
      "",
    
  },
  {
   id: 2,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "",
    title: "",
    description:
      "",
    
  },
  {
id: 3,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "",
    title: "",
    description:
      "",
    
  },
  {
    id: 4,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "",
    title: "",
    description:
      "",
    
  },
];

export default function NccEvents() {
  return (
    <div className="ncc-events-wrapper">
      {/* ✅ Adds spacing below heading by increasing the content block top margin */}
      <style jsx global>{`
        .ncc-events-wrapper .container.mt-5 {
          margin-top: 32px !important;
        }
      `}</style>

      <StudentActivities
        title="Events & Activities"
        subtitle=""
        activities={nccActivities}
        paddingClassName="py-16"
      />
    </div>  
  );
}
