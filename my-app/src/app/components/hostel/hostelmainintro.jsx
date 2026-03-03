import React from 'react'
import MainIntro from '../about/main_intro'

function Hostelmainintro() {
    return (
        <div>
            <MainIntro
                title="Enjoy a Comfortable Life Away From Home"
                subtitle=""
                description={["Parents always worry if their children will be able to adjust to a new life away from home. Their main concerns include: Will they get nutritious food, a comfortable lifestyle, a safe environment, or proper care and treatment? Well, hostels at Kalinga University are designed to provide students with all the basic facilities they will need in their academic journey.",
                    "Our separate girl's and boy's hostels will ensure the safety and privacy of all students with tight security. Our hostels and campus are surrounded by lush greenery and breathtaking landscapes, where they can learn & grow in an eco-friendly environment and make new friends. Our staff members are well-trained in maintaining the cleanliness of all rooms and corridors and are committed to taking care of your children. Parents will also be informed about every activity of their children from time to time. We always strive to fulfil all the basic requirements of our hostelers, ensuring they never face any difficulty while living here."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/campus-facilities/hostel.webp" //change image
                imageAlt="Academic Facilities"
                readMoreLabel="Read More"
                readLessLabel="Read Less"
                showKnowMore={true}
                initialVisibleParagraphs={1} />
        </div>
    )
}

export default Hostelmainintro