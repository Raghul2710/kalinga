import React from 'react'
import FeatureCards from '@/app/components/home/featurecard'

function Highlights() {
    const aboutFeatureCards = [
        {
            id: 1,
            title: 'Emerging Smart City',
            body: 'Raipur is one of the fastest-growing smart cities due to thoughtful urban planning, including modern infrastructure, sustainable development, wide roads, waste management systems, technological advancements, and smart systems. It offers a future-ready and improved quality of life that is safe, smart, and secure.',
            image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png', //change image
            variant: 'gray',
        },
        {
            id: 2,
            title: 'Green Infrastructure',
            body: 'With luscious public parks, solar-powered systems, clean transport systems, rainwater harvesting, and energy-efficient buildings, the city is shifting towards a low-carbon and greener future.',
            image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png', //change image
            variant: 'amber',
        },
        {
            id: 3,
            title: 'Education Hub of Central India',
            body: 'Raipur is home to some of the renowned institutions like IIT, IIM, IIIT, Hidayatullah National Law University, and AIIMS. It attracts talented students from different states of India and international students from various corners of the world.',
            image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png', //change image
            variant: 'gray',
        },
        {
            id: 4,
            title: 'Manufacturing & Industrial Capital',
            body: 'The city is a major industrial centre for steel and iron, power generation, agricultural products, cement, infrastructure, chemicals, and fabrication. Top companies in Raipur include Jayaswal Neco Industries, Godawari Power & Ispat, Sarda Energy & Minerals, Jindal Power Ltd., ACC Cement, Shri Bajrang Alliance, Hira Steel Ltd., Singhania Buildcon, Avinash Group, Shree Ji Steel Private Limited, and more.',
            image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png', //change image
            variant: 'amber',
        },
        {
            id: 5,
            title: 'Rich Culture & Traditions',
            body: 'The cultural spirit of Raipur is always alive as people celebrate its tribal heritage through traditional Chhattisgarhi music and folk dances like Panthi and Raut Nacha. They also joyfully celebrate different festivals like Dusshera, Hareli, Diwali, Holi, and more. From lively fairs to ancient temples, people here are deeply connected with their cultural roots and follow their customs and traditions.',
            image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png', //change image
            variant: 'gray',
        },
        {
            id: 6,
            title: 'Lifestyle & Connectivity',
            body: 'The city offers a vibrant lifestyle with shopping malls, cafes and restaurants, a shopping hub like Pandri and Sadar Bazar, parks, entertainment and relaxation spots, and much more, situated in different locations for all age groups. Due to its strategic location, it also offers seamless connectivity through railways, airways, and roadways.',
            image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png', //change image
            variant: 'amber',
        },
        {
            id: 7,
            title: 'Advanced Healthcare Centres',
            body: 'Raipur has some of the best hospitals like MMI Narayana Hospital, Ramakrishna CARE Hospitals, Suyash Hospital, Dr. B. R. Ambedkar Memorial Hospital, AIIMS, and more. They have some highly experienced doctors and specialists who treat patients with precision. Some of the hospitals also have advanced robotic treatment systems that perform complex procedures and deliver better results.',
            image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png', //change image
            variant: 'gray',
        },
        {
            id: 8,
            title: 'Tourism Hotspots',
            body: 'Raipur is for travellers who want to explore a city that mixes nature, culture, modernity, and history. Some of the popular places include City Centre Mall, Ambuja Mall, ZORA The Mall, Marine Drive, ISCON Temple, Shaheed Veer Narayan Singh International Cricket Stadium, MM Fun City, Naya Raipur Central Park, Kevalya Dham Jain Temple, Urja Park, Nandanvan Jungle Safari, and Ram Mandir.',
            image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png', //change image
            variant: 'amber',
        },
    ]
    return (
        <div>
            <FeatureCards
                title="Key Highlights of Raipur"
                subtitle=""
                cards={aboutFeatureCards}
                imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png" //change image
            />
        </div>
    )
}

export default Highlights
