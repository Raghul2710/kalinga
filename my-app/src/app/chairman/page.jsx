"use client";

import React from 'react'
import ChairmanMessage from '@/app/components/leadership/chairman_message'

if (typeof window !== 'undefined') {

}

export default function Leadership() {
  return (
    <>
      <ChairmanMessage
        imageSrc="https://cdn.kalingauniversity.ac.in/about/Leadership/Rajeev+Kumar.png"
        imageAlt="Dr. Rajeev Kumar"
        name="Dr. Rajeev Kumar"
        title="Chairman"
        quote="Education must not only inform minds but ignite purpose and shape responsible leaders of tomorrow."
        message={[
          "It gives me immense pleasure to welcome you to the Kalinga University, where we believe that education is not just about classroom learning but about inspiring learners to pursue lifelong knowledge.",
          "Due to globalisation, the competition has tremendously increased in every field, including education. To cope with that, we have developed a smart curriculum that turns students into job-ready professionals. We focus on imparting a holistic learning experience that makes them well-rounded in emotional, intellectual, and ethical standards. With a motive to deliver quality education, we proudly inform you that we rank between 101-150 top universities in India under the NIRF Rankings, 2025. We are also a NAAC B+ accredited university, proving our commitment to academic excellence.",
          "We have a multi-cultural campus environment with students from 29+ countries. KU offers a range of programs, a sustainable campus, an interdisciplinary learning environment, centres of excellence, advanced research labs, expert faculty members, an industry-ready curriculum, and impeccable networking opportunities. Academics are just one part of our university, but we also emphasise co-curricular, extracurricular, and community service. We just don’t nurture young minds, but encourage them to go beyond their boundaries, discover their strengths and weaknesses, and become responsible citizens.",
          "At KU, students don’t just earn degrees; they graduate with confidence and purpose to make a thoughtful change in society. As you step into a new journey with us, we assure you that you’ll always feel motivated and inspired every single day of your life.",
          "I welcome you all to Kalinga University and wish all the best in your career and life."
        ]}
      />
    </>
  )
}