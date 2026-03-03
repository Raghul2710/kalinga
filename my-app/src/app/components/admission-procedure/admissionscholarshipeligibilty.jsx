import React from 'react'
import ImageListItem from '../ccrc/imagelistitem';

function Admissionscholarshipeligibilty() {
    const Items = [
        {
            id: 1,
            text: "Merit-based performers.",
        },
        {
            id: 2,
            text: "Students who scored 80+ percentile or above in competitive examinations.",
        },
        {
            id: 3,
            text: "State, National, and International sports champions.",
        },
        {
            id: 4,
            text: "Achievers awarded in National and International cultural events or participants in TV reality shows.",
        },
        {
            id: 5,
            text: "Female students.",
        },
        {
            id: 6,
            text: "Physically challenged students.",
        },
        {
            id: 7,
            text: "Wards and siblings of personnel from the Indian Army, Air Force, Indian Navy, Paramilitary Forces, and Police.",
        },
        {
            id: 8,
            text: "Wards of health and hospital frontline workers.",
        },
        {
            id: 9,
            text: "National award winners.",
        },
        {
            id: 10,
            text: "Students from North-East India.",
        },
        {
            id: 11,
            text: "Siblings (valid only until the completion of the course of the elder sibling).",
        },
        {
            id: 12,
            text: "Applicants listed in the Limca Book of Records, Golden Book of Records, or Guinness World Records.",
        },
        {
            id: 13,
            text: "Applicants with a strong social media presence.",
        },
        {
            id: 14,
            text: "Students who have published research papers, books, technology, or product innovations.",
        },
        {
            id: 15,
            text: "Wards of Kalinga University teaching and non-teaching staff.",
        },
    ];

    return (
        <div>
            <ImageListItem items={Items} imageSrc="https://cdn.kalingauniversity.ac.in/ccrc/ccrc.webp" title="Who Are Eligible For Our Scholarships?" subtitle="" description="" />
        </div>
    )
}

export default Admissionscholarshipeligibilty