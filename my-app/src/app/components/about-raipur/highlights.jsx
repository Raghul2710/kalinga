import React from 'react'
import CareerCard from '../general/career-card'
import CareerPath from '../course/career_path';

function Highlights() {
    const aboutFeatureCards = [
        {
            title: "Emerging Smart City",
            description:
                "Raipur is one of the fastest-growing smart cities due to thoughtful urban planning, including modern infrastructure, sustainable development, wide roads, waste management systems, technological advancements, and smart systems. It offers a future-ready and improved quality of life that is safe, smart, and secure.",
            icon: "",
            imageUrl:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/about-raipur/smart-city.svg",
        },
        {
            title: "Green Infrastructure",
            description:
                "With luscious public parks, solar-powered systems, clean transport systems, rainwater harvesting, and energy-efficient buildings, the city is shifting towards a low-carbon and greener future.",
            icon: "",
            imageUrl:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/about-raipur/greeninfrastructure.svg",
        },
        {
            title: "Education Hub of Central India",
            description:
                "Raipur is home to some of the renowned institutions like IIT, IIM, IIIT, Hidayatullah National Law University, and AIIMS. It attracts talented students from different states of India and international students from various corners of the world.",
            icon: "",
            imageUrl:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/about-raipur/educationhub-1.svg",
        },
        {
            title: "Manufacturing & Industrial Capital",
            description:
                "The city is a major industrial centre for steel and iron, power generation, agricultural products, cement, infrastructure, chemicals, and fabrication. Top companies in Raipur include Jayaswal Neco Industries, Godawari Power & Ispat, Sarda Energy & Minerals, Jindal Power Ltd., ACC Cement, Shri Bajrang Alliance, Hira Steel Ltd., Singhania Buildcon, Avinash Group, Shree Ji Steel Private Limited, and more.",
            icon: "",
            imageUrl:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/about-raipur/manufacturingcapital.svg",
        },
        {
            title: "Rich Culture & Traditions",
            description:
                "The cultural spirit of Raipur is always alive as people celebrate its tribal heritage through traditional Chhattisgarhi music and folk dances like Panthi and Raut Nacha. They also joyfully celebrate different festivals like Dusshera, Hareli, Diwali, Holi, and more. From lively fairs to ancient temples, people here are deeply connected with their cultural roots and follow their customs and traditions.",
            icon: "",
            imageUrl:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/about-raipur/richculture.svg",
        },
        {
            title: "Lifestyle & Connectivity",
            description:
                "The city offers a vibrant lifestyle with shopping malls, cafes and restaurants, a shopping hub like Pandri and Sadar Bazar, parks, entertainment and relaxation spots, and much more, situated in different locations for all age groups. Due to its strategic location, it also offers seamless connectivity through railways, airways, and roadways.",
            icon: "",
            imageUrl:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/about-raipur/lifestyle.svg",
        },
        {
            title: "Advanced Healthcare Centres",
            description:
                "Raipur has some of the best hospitals like MMI Narayana Hospital, Ramakrishna CARE Hospitals, Suyash Hospital, Dr. B. R. Ambedkar Memorial Hospital, AIIMS, and more. They have some highly experienced doctors and specialists who treat patients with precision. Some of the hospitals also have advanced robotic treatment systems that perform complex procedures and deliver better results.",
            icon: "",
            imageUrl:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/about-raipur/healthcare.svg",
        },
        {
            title: "Tourism Hotspots",
            description:
                "Raipur is for travellers who want to explore a city that mixes nature, culture, modernity, and history. Some of the popular places include City Centre Mall, Ambuja Mall, ZORA The Mall, Marine Drive, ISCON Temple, Shaheed Veer Narayan Singh International Cricket Stadium, MM Fun City, Naya Raipur Central Park, Kevalya Dham Jain Temple, Urja Park, Nandanvan Jungle Safari, and Ram Mandir.",
            icon: "",
            imageUrl:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/about-raipur/travel-and-tourism.svg",
        },
    ];

    return (
        <div>
            <CareerPath careers={aboutFeatureCards} title='Key Highlights of Raipur' description='' />
        </div>
    )
}

export default Highlights
