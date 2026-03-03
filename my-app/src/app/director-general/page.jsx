"use client";

import React from "react";
import ChairmanMessage from "../components/leadership/chairman_message";

export default function Leadership() {
  return (
    <>
      <ChairmanMessage
        imageSrc="https://cdn.kalingauniversity.ac.in/about/Leadership/Byju+John.png"
        imageAlt="Dr. Byju John"
        name="Dr. Byju John"
        title="Director General"
        messageHeading="Director General's Message"
        quote="Learning has real power only when it shapes judgment, character, and responsibility."
        message={[
          "It gives me immense pleasure to welcome you all to Kalinga University.",
          "Not just education, but a quality education is an important factor in the growth and development of any country and its people. It is a powerful tool to combat any challenge with a proper decision. KU stands as a pillar in providing robust knowledge and academic experience, making students ready for a rapidly evolving world. Our focus is not on quantitative learning but on providing quality and value-based education so that our students are turned out to be global leaders.",
          "We meet the educational aspirations of our students by offering 130+ industry-relevant programs along with world-class infrastructure, updated course curriculum, and a student-friendly environment. Our efforts will give them a platform to achieve both academic and professional growth. Our students are not just encouraged to find answers but are also motivated to question and explore, and see things from their own perspective.",
          "From recreation centres to centres of excellence, every aspect of our campus is thoughtfully designed so that our students have everything they need to fulfil their academic journey. Today, when companies demand a lot more than just knowledge and marks, we also emphasise the overall personality development of the students to meet the demands and challenges of the modern world.",
          "I invite you to prepare yourself for the opportunities of the new millennium at Kalinga University with its mix of academic offerings and new-age programs in the emerging areas."
        ]
        }
      />
    </>
  );
}
