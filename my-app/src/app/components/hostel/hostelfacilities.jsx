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
            image: "https://cdn.kalingauniversity.ac.in/facilities/canteen+mess.webp",
        },
        {
            id: 2,
            name: "Different Occupancy Options",
            image: "https://cdn.kalingauniversity.ac.in/hostel/occupancy.webp",
        },
        {
            id: 3,
            name: "Reading Room",
            image: "https://cdn.kalingauniversity.ac.in/campus-facilities/hostelreadingroom_campusfacility.webp",
        },
        {
            id: 4,
            name: "AC / Non-AC Rooms",
            image: "https://cdn.kalingauniversity.ac.in/hostel/Acnonac.webp",
        },
        {
            id: 5,
            name: "Wi-Fi Facility",
            image: "https://cdn.kalingauniversity.ac.in/campus-facilities/wifienabledcampus.webp",
        },
        {
            id: 6,
            name: "Attached Washroom",
            image: "https://cdn.kalingauniversity.ac.in/hostel/attached.webp",
        },
        {
            id: 7,
            name: "CCTV Surveillance",
            image: "https://cdn.kalingauniversity.ac.in/campus-life/security1.jpg",
        },
        {
            id: 8,
            name: "24/7 Security",
            image: "https://cdn.kalingauniversity.ac.in/campus-life/security2.jpeg",
        },
        {
            id: 9,
            name: "Recreational Corners",
            image: "https://cdn.kalingauniversity.ac.in/campus-facilities/recreation.webp",
        },
        {
            id: 10,
            name: "Gym",
            image: "https://cdn.kalingauniversity.ac.in/facilities/gym.webp",
        },
        {
            id: 11,
            name: "Staff Nurse",
            image: "https://cdn.kalingauniversity.ac.in/campus-life/Health+Clinic1.webp",
        },
    ];

    return (
        <div>
            <Facility title='Explore Our Student-Friendly Amenities' subtitle='Benefits of Staying At KU Hostel' facilities={hostFacilities} description='Our hostels are thoughtfully designed to ensure the safety and comfort of both boys and girls. We want every student to focus on academics and enjoy college life without stressing about accommodation or daily essentials, as everything they need is available right on our campus.' />
        </div>
    )
}

export default Hostelfacilities