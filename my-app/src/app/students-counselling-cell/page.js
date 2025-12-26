"use client";

import React from 'react'
import MainIntro from '../components/about/main_intro'
import EmployeeBenefits from "../components/careers/EmployeeBenefits"


// Model breradcrumb

const breadcrumbData = {
    heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/about-banner.webp",
    pageTitle: "Students Counselling Cell",
    customBreadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Students Counselling Cell', href: '/students-counselling-cell' }
    ]
  };
  
  // Register it globally (no import needed - this pattern works automatically)
  if (typeof window !== 'undefined') {
    window.__breadcrumbData = breadcrumbData;
  }

  const counsellingAreas = [
    {
      title: "Our Key Counselling Areas",
      description: "Kalinga University's counselling cell provides comprehensive support to help students navigate their academic and personal journey with confidence and clarity.",
      benefits: [
        {
          id: 1,
          title: "Identifying Interests",
          description: "A student can sometimes be unaware of their passion or new career opportunities. Our dedicated counsellors interact with each candidate and identify their interests.",
          img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/careers/wages.svg",
        },
        {
          id: 2,
          title: "Selection of Programs",
          description: "They guide each student in choosing the best programs available according to their interests and goals, helping them make an informed academic decision.",
          img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/loyalty-program.svg"
        },
        {
          id: 3,
          title: "Managing Academic Pressure",
          description: "A college life often comes with new academic challenges, which sometimes increases their stress level. Counsellors at Kalinga effectively manage their new challenges by giving them proper solutions.",
          img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/knowledge.svg"
        },
        {
          id: 4,
          title: "Adjustment Problems",
          description: "Students find it difficult to adjust to a new environment or make new friends, but they will get complete help, making them feel at home.",
          img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Adjustment+Problems.svg"
        },
        {
          id: 5,
          title: "Mental Health Support",
          description: "Students' health can deteriorate if they're facing issues with their academic or personal life. With our one-on-one interaction session, their problems will be resolved so that they can enjoy their college life.",
          img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Mental+Health+Support.svg"
        },
        {
          id: 6,
          title: "Personal Growth and Development",
          description: "We inform our students about essential skills apart from their curriculum. They will be informed about our training on soft skills, interview preparation, and co-curricular and extracurricular activities.",
          img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Personal+Growth+and+Development.svg"
        },
        {
          id: 7,
          title: "Future Career Planning",
          description: "Based on their selected programs, they'll be guided on different career opportunities they can explore in their chosen field. They will also be informed about our campus placement drives.",
          img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Future+Career+Planning.svg"
        },
        {
          id: 8,
          title: "Crisis Management",
          description: "If they face any traumatic incident in their life, we'll not let them go through that alone. They will be taken care of every single day so that they can overcome their situation.",
          img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Crisis+Management.svg"
        }
      ]
    }
  ]


  export default function RefundPolicyPage() {
    return (
        <div>
            <MainIntro 
      title="Supporting You At Every Step Of Your Journey"
      subtitle="Students Counselling Cell"
      description={["Kalinga University prioritises the emotional and mental well-being of its students by supporting them in their academic and personal journey. We believe that in no circumstances should students be pressurised, but we should try to look at situations from their perspective. Our experienced counselling team addresses key challenges that are hindering their overall well-being and meets their emotional needs with utmost care.",
      "Whether students are confused about the selection of a program or face any issue in college life, they go one step beyond to help them at each step. With our self-awareness and wellness programs, our students develop the confidence to deal with every challenge in their lives. Our counselling services prove our commitment to the holistic development and success of our students."
    ]}
    readMoreLabel="Read More"
    readLessLabel="Read Less"
    
      imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
      imageAlt="Kalinga University campus"
      showKnowMore={true}
      initialVisibleParagraphs={1}
      />
        <EmployeeBenefits
        counsellingAreas={counsellingAreas}
        headingTextColor="text-black"
        />
        </div>
    )
}