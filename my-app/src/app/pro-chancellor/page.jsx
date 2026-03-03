"use client";

import React from "react";
import ChairmanMessage from "../components/leadership/chairman_message";

export default function Leadership() {
  return (
    <>
      <ChairmanMessage
        imageSrc="https://cdn.kalingauniversity.ac.in/about/Leadership/Sajjan+Singh.png"
        imageAlt="Mr. Sajjan Singh"
        name="Mr. Sajjan Singh"
        title="Pro-Chancellor"
        messageHeading="Pro-Chancellor's Message"
        quote="Education thrives when opportunity meets vision, and talent meets the right guidance."
        message={[
          "As you begin a new journey of academic exploration, I extend a heartfelt welcome to all our students joining Kalinga University.",
          "It is a matter of immense pleasure for me to be a part of Kalinga University as the Pro Chancellor. I take this opportunity to welcome students from not only India but all parts of the world joining the undergraduate as well as postgraduate and research programs. We aim to provide our students with a supportive learning environment that promotes innovation, sustainability, and diversity. Our responsible graduates are prepared to lead businesses, society, and the country. From onboarding to graduation, we train them with the right mindset and skills so that they can be ready to deal with real-life challenges.",
          "I am glad that our meritorious students are placed in the reputed companies, which not only proves their hard work but also uplifts the reputation of the university in terms of quality education and core values. We have a separate career and corporate resource centre that prepares students for the corporate world by teaching them communication skills, grooming, interview prep skills, and resume preparation tips. In terms of geographical location, KU offers a serene and pollution-free environment, encouraging students to devote their maximum time to studies without any distractions, and also engage in various extracurricular activities.",
          "The University provides updated knowledge to the students so that they become employable citizens of India and contribute towards the overall development of the nation by leading a good quality of life.",
          "May your journey be filled with growth and achievement."
        ]}
      />
    </>
  );
}
