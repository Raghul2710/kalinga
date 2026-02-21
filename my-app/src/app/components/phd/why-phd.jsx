"use client";

import Image from 'next/image';

const phdWhyChooseItems = [
    {
        id: 1,
        title: "Expert Faculty",
        description: "Learn from highly experienced faculty who have vast experience and knowledge and excel in both academic and research fields.",
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/education.svg",
    },
    {
        id: 2,
        title: "Global Collaboration",
        description: "Get an opportunity to collaborate with multi-national industries and institutions for project work, internship, and exposure.",
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/collaboration.svg",
    },
    {
        id: 3,
        title: "Research Support",
        description: "Our dedicated research cell supports students at every step until they obtain their Ph.D. degree.",
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/search+(1).svg",
    },
    {
        id: 4,
        title: "Funding & IPR",
        description: "We provide complete research support through funding, grants, book publication, and patent and IPR support to deserving candidates.",
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/science.svg",
    },
    {
        id: 5,
        title: "Resourceful Library",
        description: "Our extensive library facilitates researchers with physical and digital resources, including different subject books, journals, research papers, a global database, and academic repositories.",
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/book.svg",
    },
    {
        id: 6,
        title: "Modern Tools",
        description: "We provide access to research-related tools and plagiarism detection tools.",
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/electronic.svg",
    },
    {
        id: 7,
        title: "Advanced Labs",
        description: "With 90 + labs, including a computer lab and a CIF lab, scholars can easily conduct research work using advanced equipment.",
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/microscope.svg",
    },
    {
        id: 8,
        title: "Events & Visits",
        description: "We frequently organise seminars, workshops, conferences, industrial visits, and guest lectures led by industry experts.",
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/conference.svg",
    },
    {
        id: 9,
        title: "Teamwork",
        description: "With our collaborative learning environment, we promote a spirit of teamwork among researchers, enabling them to produce high-impact research outcomes.",
        icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/collaboration.svg",
    },
];

export default function WhyChoosePhd() {
    // Calculate dynamic top positions and widths based on number of cards
    const calculateTopPosition = (index) => {
        const baseTop = 100; // Starting top position for first card
        const increment = 30; // Increment for each subsequent card
        return baseTop + (index * increment);
    };

    const calculateWidth = (index) => {
        const baseWidth = 85; // Starting width percentage
        const increment = 1.5; // Smaller increment for 9 cards to keep them within container
        return `${Math.min(100, baseWidth + (index * increment))}%`;
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-plus-jakarta-sans text-[var(--foreground)] font-bold">
                    Why Choose Kalinga For Ph.D.?
                </h2>
            </div>

            <div className="relative flex flex-col gap-8 my-[50px] mx-auto items-center">
                {phdWhyChooseItems.map((card, index) => {
                    // Alternate colors: 0 = light skin color, 1 = white
                    const backgroundColor = index % 2 === 0 ? 'bg-[var(--card-skin)]' : 'bg-[var(--card-white)]';

                    return (
                        <div
                            key={index}
                            className={`mx-5 box-border min-h-[250px] md:min-h-[300px] rounded-[32px] sticky flex items-center justify-center font-sans md:p-8 p-6 border-3 border-gray-200 shadow-sm ${backgroundColor}`}
                            style={{
                                top: `${calculateTopPosition(index)}px`,
                                width: calculateWidth(index)
                            }}
                        >
                            <div className={`w-full flex flex-col md:flex-row items-center gap-8 md:gap-14`}>
                                {/* Left Side - Icon */}
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 md:w-28 md:h-28 relative flex items-center justify-center">
                                        <Image
                                            src={card.icon}
                                            alt={card.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Right Side - Title and Description */}
                                <div className="flex-1 min-w-0 w-full md:w-auto text-center md:text-left">
                                    <h3 className="mb-3 text-xl md:text-4xl font-semibold text-[var(--foreground)]">
                                        {card.title}
                                    </h3>
                                    <div
                                        className="leading-relaxed font-plus-jakarta-sans text-gray-700 text-sm md:text-lg [&_a]:text-[var(--button-red)] [&_a]:underline [&_a]:font-bold [&_a]:hover:text-[var(--dark-orange-red)] transition-colors"
                                        dangerouslySetInnerHTML={{ __html: card.description }}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
