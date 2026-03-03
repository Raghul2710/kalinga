"use client";

import React, { useEffect } from "react";
import ChairmanMessage from "../components/leadership/chairman_message";

export default function Leadership() {

  return (
    <>
      <ChairmanMessage
        imageSrc="https://cdn.kalingauniversity.ac.in/about/Leadership/Sandeep+Arora.png"
        imageAlt="Dr. Sandeep Arora"
        name="Dr. Sandeep Arora"
        title="Chancellor"
        messageHeading="Chancellor's Message"
        quote="True progress begins when learning inspires responsibility, resilience, and the courage to create change."
        message={[
          "I feel honoured and privileged to lead Kalinga University at a time when higher education is being modified and redefined at a global level. The National Education Policy 2020 has set new standards with a bold vision, and we are committed to following its core values. Our mission is to combine knowledge with purpose, helping students develop curiosity and interests in their field of study.",
          "At Kalinga, we surpass conventional learning by using modern teaching practices and creating an environment where students are turned into holistic beings and can put their learning into action. With an aim to pursue excellence in every parameter, KU also offers an environment where non-academic pursuits of students are also achieved alongside the academic curriculum. Striking a balance between the two, we offer 130+ academic programs along with world-class infrastructure that incorporates research facilities, advanced laboratories with high-tech instruments, an expansive library with all the latest resources, an auditorium, A-1 level sports facilities, a fully-equipped gym, recreation centres, separate boys and girls hostel facilities, and other dedicated spaces for extracurriculars.",
          "We constantly strive to introduce changes into our education systems so that students are well-prepared for the rapidly changing world and develop a global perspective. With national and international tie-ups, we conduct conferences and seminars so that our students meet with industry leaders or popular personalities and learn to lead in the competitive world.",
          "I would like to conclude by saying Rabindranath Tagore’s timeless words, “The highest education is that which does not merely give us information but makes our life in harmony with all existence.",
          "Wishing you all great success!"
        ]}
      />
    </>
  );
}
