import React from 'react'
import OrganogramOfKalinga from '../about/organogram_of_kalinga';

function Admissionprocedurescolarship() {
    const syllabusContent = {
        title: "Scholarships & Financial Assistance",
        description: [
            "Your hard work deserves a reward.",
            "With KU, you don’t have to worry about the tuition fee as we’ve got you covered. Our scholarships are designed to help bright minds succeed in their career."
        ],
        buttonLabel: "Know More",
        href: "https://cdn.kalingauniversity.ac.in/scholarships/Scholarships+2026-2027.pdf"
    };
    return (
        <div>
            <OrganogramOfKalinga
                title={syllabusContent.title}
                description={syllabusContent.description}
                buttonLabel={syllabusContent.buttonLabel}
                href={syllabusContent.href}
                buttons={syllabusContent.buttons}
                buttonClassName="!bg-white !text-black"
                arrowClassName="!bg-[var(--dark-orange-red)]"
                arrowIconClassName="!text-white"
                textClassName="!text-black"
                cardBackgroundColor="bg-[var(--button-red)]"
                useContainer={false}
                showImage={false}
                imageUrl={syllabusContent.imageUrl}
                imageAlt={syllabusContent.title}
            />
        </div>
    )
}

export default Admissionprocedurescolarship