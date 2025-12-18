import React from 'react'
import ResearchIntro from '../research-resources/research_intro'

function RaipurMainIntro() {
    return (
        <>
            <ResearchIntro
                title="About Raipur"
                description={["Raipur, the capital city of Chhattisgarh, is a blend of culture, heritage, and development. It is one of the fastest-developing cities of India and has become a centre of attraction in education, infrastructure, tourism, business, and Innovation. The city is famous for temples, parks, animal sanctuaries, the Shaheed Veer Narayan Singh International Cricket Stadium, food joints, shopping places, malls, & tribal heritage sites. It is home to some of the largest steel plants, IT industries, and manufacturing units.",
                ]}
                imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png" //image change
                imageAlt="About Raipur"
            />
        </>
    )
}

export default RaipurMainIntro
