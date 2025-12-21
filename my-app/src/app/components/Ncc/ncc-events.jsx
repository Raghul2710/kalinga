"use client";

import StudentActivities from "../department/student_activities";

const nccEvents = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "NCC Annual Training Camp",
    title: "Annual Training Camp (ATC)",
    description: null,
    buttonText: "Read More",
    date: "January 2025",
  },
  {
    id: 2,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "NCC Parade & Drill",
    title: "Parade & Drill Training",
    description: null,
    buttonText: "Read More",
    date: "Ongoing",
  },
  {
    id: 3,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "NCC Adventure Camp",
    title: "Adventure & Trekking Camp",
    description: null,
    buttonText: "Read More",
    date: "March 2025",
  },
  {
    id: 4,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "NCC Social Service",
    title: "Social Service & Community Outreach",
    description: null,
    buttonText: "Read More",
    date: "July 2025",
  },
  {
    id: 5,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "NCC National Level Camp",
    title: "National-Level Camps & Competitions",
    description: null,
    buttonText: "Read More",
    date: "August 2025",
  },
  {
    id: 6,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "NCC Leadership Workshop",
    title: "Leadership & Personality Development Workshop",
    description: null,
    buttonText: "Read More",
    date: "September 2025",
  },
];

export default function NccEvents() {
  return (
    <StudentActivities
      title="NCC Events & Activities"
      subtitle="Training, leadership, service, and adventure opportunities for KU cadets"
      activities={nccEvents}
    />
  );
}
