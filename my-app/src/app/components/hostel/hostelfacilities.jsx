import React from 'react'
import Facility from '../admissions/facility'

//   title="A Campus That Defines Possibilities"
//                 subtitle="Real Stories. Real Success."
//                 description=" Kalinga University offers a state-of-the-art campus that redefines the student experience. Our cutting-edge labs, expansive library, modern hostels, and recreational facilities ensure a balanced environment where learning and lifestyle go hand in hand."
//                 titleClassName="text-center"
//                 subtitleClassName="text-center !text-[var(--button-red)]"
//                 facilities= defaultFacilities

function Hostelfacilities() {
    const hostFacilities = [
        {
            id: 1,
            name: "Mess Facility",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/canteen+mess.webp",
        },
        {
            id: 2,
            name: "Different Occupancy Options",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/hostel/occupancy.webp",
        },
        {
            id: 3,
            name: "Reading Room",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-facilities/hostelreadingroom_campusfacility.webp",
        },
        {
            id: 4,
            name: "AC / Non-AC Rooms",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/hostel/Acnonac.webp",
        },
        {
            id: 5,
            name: "Wi-Fi Facility",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-facilities/wifienabledcampus.webp",
        },
        {
            id: 6,
            name: "Attached Washroom",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/hostel/attached.webp",
        },
        {
            id: 7,
            name: "CCTV Surveillance",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/security1.jpg",
        },
        {
            id: 8,
            name: "24/7 Security",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/security2.jpeg",
        },
        {
            id: 9,
            name: "Recreational Corners",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-facilities/recreation.webp",
        },
        {
            id: 10,
            name: "Gym",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/gym.webp",
        },
        {
            id: 11,
            name: "Staff Nurse",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Health+Clinic1.webp",
        },
    ];

    return (
        <div>
            <Facility title='Explore our student-friendly amenities:' subtitle='Benefits of Staying At KU Hostel' facilities={hostFacilities} />
        </div>
    )
}

export default Hostelfacilities