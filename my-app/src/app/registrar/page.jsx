"use client";

import React from "react";
import ChairmanMessage from "../components/leadership/chairman_message";

export default function Leadership() {
  return (
    <>
      <ChairmanMessage
        imageSrc="https://cdn.kalingauniversity.ac.in/about/Leadership/Sandeep+Gandhi.png"
        imageAlt="Dr. Sandeep Gandhi"
        name="Dr. Sandeep Gandhi"
        title="Registrar"
        messageHeading="Registrar's Message"
        quote="Education must expand perspectives, challenge limitations, and prepare minds for a global future."
        message={[
          "With great honour and pleasure, I welcome you to Kalinga University.",
          "As a Registrar of the university, I have the opportunity to lead with a vision and a purpose, ensuring that we always deliver excellence in education in the years to come. The quality of education you will receive at KU will not only open doors to job opportunities in reputed companies but will also prepare you with the skills to launch your own startup firm, adding economic value to the nation.",
          "We understand that students these days need to compete at an international level to get opportunities in the world’s top companies, and for this, they need to develop a creative and innovative thinking process. Keeping this in mind, we are working with our students at each step so that they can achieve their future endeavours. Here, they’re not only motivated and guided but also develop emotional intelligence, which they will need in both personal and professional life.",
          "Further, we believe that placements and internship opportunities are the need of the hour for every student. For this, we provide internships to students from their first year and conduct campus drives where our National and International hiring partners conduct interviews of our students on campus. With a blend of contemporary knowledge, skills and values, we groom high-calibre thinkers to become morally upright and physically sound citizens and turn into productive individuals in an ever-evolving society.",
          "I have complete trust in your unmeasured potential, and I wish you all success in your future endeavours."
        ]
        }
      />
    </>
  );
}
