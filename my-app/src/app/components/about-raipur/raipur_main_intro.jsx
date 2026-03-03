import React from 'react'
import MainIntro from '../about/main_intro'

function RaipurMainIntro({ knowMoreHref = "/about-raipur", knowMoreLabel = "Know More" }) {
    return (
        <>
            <MainIntro
                title="About Raipur"
                description={["Raipur, the capital city of Chhattisgarh, is a blend of culture, heritage, and development. It is one of the fastest-developing cities of India and has become a centre of attraction in education, infrastructure, tourism, business, and Innovation. The city is famous for temples, parks, animal sanctuaries, the Shaheed Veer Narayan Singh International Cricket Stadium, food joints, shopping places, malls, & tribal heritage sites. It is home to some of the largest steel plants, IT industries, and manufacturing units.",
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/about-raipur/raipur2.webp" //image change
                imageAlt="About Raipur"
                knowMoreHref={knowMoreHref}
                knowMoreLabel={knowMoreLabel}
                readMoreLabel="Read More"
                readLessLabel="Read Less"
                showKnowMore={true}
                initialVisibleParagraphs={1}
            />
        </>
    )
}

export default RaipurMainIntro
