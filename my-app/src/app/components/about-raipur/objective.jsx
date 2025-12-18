import React from 'react'
import ImageListItem from '../ccrc/imagelistitem'

function Objectives() {
    const Items = [
        {
            id: 1,
            text: "To become a hub of manufacturing, information technology, and biotechnology sectors."
        },
        {
            id: 2,
            text: "To become the financial centre of the region"
        },
        {
            id: 3,
            text: "To become a centre of trade and businesses."
        },
        {
            id: 4,
            text: "To support the local economy through cultural services."
        },
        {
            id: 5,
            text: "To become a place for affordable and high-quality medical services"
        },
        {
            id: 6,
            text: "To become a hub of National and International educational institutions"
        },
        {
            id: 7,
            text: "To develop sustainable and eco-friendly infrastructure."
        }
    ]
    return (
        <>
            {/* //change image */}
            <ImageListItem items={Items} imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png" title="Objectives of New Raipur" />
        </>
    )
}

export default Objectives
