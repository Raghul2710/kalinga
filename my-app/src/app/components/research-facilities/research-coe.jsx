"use client";

import CenterOfExcellence from "../about/center_of_excellence";

export default function ResearchCE() {
  return (
    <CenterOfExcellence
      title="Introducing Our Centres of Excellence (CoE)"
      description="To align academic learning with industrial knowledge, we have partnered with seven leading companies that offer skill-based training to students in various high-demanding sectors like electric vehicles, drone technology, AI, cybersecurity, automobiles, and many more. We’re a leading research university, empowering students to go from textbooks to real-world innovation and become ready to stand out in the competitive job market."
      centres={[
        {
          id: 1,
          name: "Electric Vehicles Training Centre",
          title: "In collaboration with Godawari Electric Motors Pvt. Ltd. (Eblu)",
         image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png", 
        },
        {
          id: 2,
          name: "IIoT Training Centre",
          title: "In collaboration with Technoviz Automation",
         image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png", 
        },
        {
          id: 3,
          name: "Robotics, Coding, & Drones Training Centre",
          title: "In collaboration with BDS Education",
          image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png", 
        },
        {
          id: 4,
          name: "MSME Training Centre",
          title: "In collaboration with IamSMEofIndia",
         image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png", 
        },
        {
          id: 5,
          name: "BRIDGE Courses Training Centre",
          title: "In collaboration with BOSCH",
         image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png", 
        },
        {
          id: 6,
          name: "AI-ML Courses Training Centre",
          title: "In collaboration with IBM Innovation Centre for Education",
         image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png", 
        },
        {
          id: 7,
          name: "Automobile Training Centre",
          title: "In collaboration with JustAuto Solutions",
         image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png", 
        },
      ]}
    />
  );
}
