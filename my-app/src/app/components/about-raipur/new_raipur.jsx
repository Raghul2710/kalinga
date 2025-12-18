import React from 'react'
import ImageContent from '../ccrc/imagecontent'

function NewRaipur() {
    return (
        <>
            <ImageContent
                imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png" //change image
                imageAlt="New Raipur image"
                subtitle=''
                title="About New Raipur"
                description="New Raipur is the first Greenfield Smart City in India, where 27% of the land is solely devoted to green and sustainable practices. It is also becoming a major hub of education and health in Central India. The Government is planning to make it a global destination for the IT and services industry to offer employment opportunities to youth. New Raipur is a well-planned smart city that supports a sustainable lifestyle and intelligent infrastructure. Due to growing opportunities and developments, it attracts students, entrepreneurs, and innovators who are ready to turn their ideas into innovation."
                buttonText="Read More"
            />
        </>
    )
}

export default NewRaipur
