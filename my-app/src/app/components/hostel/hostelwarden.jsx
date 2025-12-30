"use client"

import React from "react";
import MentorIntro from "../department/dept_head_intro";

function Hostelwarden() {
    const MentorIntroProps = [
        {
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            title: "A Message From the Warden",
            subtitle: "Mr. Manish Singh",
            department: "Warden - Hostel",
            imageAlt: "Warden-Hostel",
            message: [
                "I welcome you all to the Kalinga family, where students live in a neat and clean environment and develop self-discipline. Our students come from all around the globe with different cultures and upbringings, but they live together in harmony.",
                "We provide them with an atmosphere where they can learn, live, laugh, and grow together. Our dedicated wardens of each hostel ensure cleanliness in each corner so that hostelers live in a hygienic environment.",
                "Get a 24/7 water supply and electricity, purified drinking water, a gym facility, and all other basic amenities. It is our prime responsibility to take proper care of every child staying at our hostels.",
            ],
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ];

    return (
        <>
            <div className="-mt-16 md:-mt-20">
                <MentorIntro items={MentorIntroProps} />
            </div>
        </>
    );
}

export default Hostelwarden;
