"use client";

import StudentActivities from "../department/student_activities";


const nccEvents = [
  {
    id: 1,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "NCC Annual Training Camp",
    title: "Annual Training Camp (ATC)",
    description:
      "A structured camp featuring drill practice, weapon training basics, map reading, and team-building activities to build discipline, endurance, and confidence.",
    buttonText: "Read More",
    date: "January 2025",
  },
  {
    id: 2,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "NCC Parade & Drill",
    title: "Parade & Drill Training",
    description:
      "Regular parade sessions to improve posture, coordination, and leadership—helping cadets develop precision, unity, and command presence.",
    buttonText: "Read More",
    date: "Ongoing",
  },
  {
    id: 3,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "NCC Adventure Camp",
    title: "Adventure & Trekking Camp",
    description:
      "High-energy outdoor activities like trekking and endurance challenges that strengthen mental toughness, courage, and decision-making under pressure.",
    buttonText: "Read More",
    date: "March 2025",
  },
  {
    id: 4,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "NCC Social Service",
    title: "Social Service & Community Outreach",
    description:
      "Cadets take part in awareness drives, campus cleanliness initiatives, and local community support programs to learn service with responsibility.",
    buttonText: "Read More",
    date: "July 2025",
  },
  {
    id: 5,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "NCC National Level Camp",
    title: "National-Level Camps & Competitions",
    description:
      "Opportunities to represent the institution at national camps—enhancing exposure, teamwork, and leadership through competitive training modules.",
    buttonText: "Read More",
    date: "August 2025",
  },
  {
    id: 6,
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    imageAlt: "NCC Leadership Workshop",
    title: "Leadership & Personality Development Workshop",
    description:
      "Sessions on communication, leadership, and life skills that support cadets in becoming confident individuals and strong future citizens.",
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
