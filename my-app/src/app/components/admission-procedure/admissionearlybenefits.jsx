import React from 'react'
import ImageListItem from '../ccrc/imagelistitem';

function Admissionearlybenefits() {
    const items = [
        {
            text: "Guaranteed spot in your desired program.",
        },
        {
            text: "Avail an exclusive scholarship before anyone else.",
        },
        {
            text: "Get early insights into the New Education Policy.",
        },
        {
            text: "Get your preferred hostel room on a first-come, first-served basis.",
        },
        {
            text: "Avoid last-minute admission hassles.",
        },
        {
            text: "Secure your bus pass early.",
        },
        {
            text: "Take advantage of early networking opportunities.",
        },
    ];

    return (
        <div className='mt-16'>
            <ImageListItem
                items={items}
                imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/CIF/cif-objectives+(1).webp"
                title="Apply Early For Early Benefits"
                description="Your Early Decision Can Give You Big Rewards."
                buttonText=""
                className="!bg-[var(--light-gray)]"
                textClassName="text-[var(--foreground)]"
                headingClassName="text-[var(--foreground)]"
            />
        </div>
    )
}

export default Admissionearlybenefits