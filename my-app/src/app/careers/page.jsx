'use client'
import { useEffect } from 'react';
import MainIntro from "../components/about/main_intro";
import OpenPositions from "../components/careers/OpenPositions"
import EmployeeBenefits from "../components/careers/EmployeeBenefits"
import CareerApplicationForm from "../components/careers/CareerApplicationForm"
import FaqSection from "../components/general/faq"


export default function Careers() {
  useEffect(() => {
    // Enable scrolling but hide scrollbar - works on all devices including mobile
    const body = document.body;
    const html = document.documentElement;
    
    // Store original styles
    const originalBodyOverflow = body.style.overflowY;
    const originalHtmlOverflow = html.style.overflowY;
    const originalBodyScrollbarWidth = body.style.scrollbarWidth;
    const originalHtmlScrollbarWidth = html.style.scrollbarWidth;
    const originalBodyMsOverflow = body.style.msOverflowStyle;
    const originalHtmlMsOverflow = html.style.msOverflowStyle;
    
    // Enable scrolling (auto allows scrolling when needed)
    body.style.overflowY = 'auto';
    html.style.overflowY = 'auto';
    
    // Hide scrollbar - Firefox
    body.style.scrollbarWidth = 'none';
    html.style.scrollbarWidth = 'none';
    
    // Hide scrollbar - IE/Edge
    body.style.msOverflowStyle = 'none';
    html.style.msOverflowStyle = 'none';
    
    // Add class for webkit browsers (Chrome, Safari, Edge)
    body.classList.add('scrollbar-hide');
    html.classList.add('scrollbar-hide');
    
    // Cleanup: restore original styles when component unmounts
    return () => {
      body.style.overflowY = originalBodyOverflow;
      html.style.overflowY = originalHtmlOverflow;
      body.style.scrollbarWidth = originalBodyScrollbarWidth;
      html.style.scrollbarWidth = originalHtmlScrollbarWidth;
      body.style.msOverflowStyle = originalBodyMsOverflow;
      html.style.msOverflowStyle = originalHtmlMsOverflow;
      body.classList.remove('scrollbar-hide');
      html.classList.remove('scrollbar-hide');
    };
  }, []);

  const careerFAQs = [
    {
      id: 1,
      question: "How can I applyfor ajob at Kalinga University?",
      answer: "You can apply directly through our official careers page by filling out the Career Application Form and uploading your updated resume. Shortlisted candidates will be contacted by our HR team for further rounds of the selection process."
    },
    {
      id: 2,
      question: "What types of positions are available at Kalinga University?",
      answer: "We offer opportunities for teaching, non-teaching, and administrative roles across various departments. Open positions are updated regularly on our website under the “Open Positions” section."
    },
    {
      id: 3,
      question: "What qualifications are required to apply for teaching positions?",
      answer: "Applicants should possess a postgraduate degree or Ph.D. in the relevant discipline, as per UGC norms. Relevant teaching and research experience will be an added advantage."
    },
    {
      id: 4,
      question: "Does Kalinga University offer internships or training opportunities?",
      answer: "Yes, Kalinga University provides internships and professional training for both fresh graduates and students. These programs help participants gain practical exposure and industry-relevant skills."
    },
    {
      id: 5,
      question: "What employee benefits does Kalinga University provide?",
      answer: "We offer a comprehensive benefits package including competitive salaries, research support, professional development programs, healthcare, and work-life balance initiatives to ensure overall employee well-being."
    }
   
  ]

  return (
    <>
      <MainIntro  title="Why Work With Us?"
      description={["At Kalinga University, we believe that excellence begins with people. We offer a collaborative, growth-oriented environment where innovation, integrity, and inclusivity drive everything we do. Our faculty and staff are empowered with continuous learning opportunities, modern infrastructure, and a culture that values both academic and personal fulfillment.Join us and become part of a forward-thinking institution shaping the next generation of leaders through education, research, and innovation."
    ]}
      imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/whywork.webp"
      imageAlt="Why Work With Us?" 
      showButton ={false}
      showKnowMore ={false} />
     
      <OpenPositions />
      <EmployeeBenefits />
      <CareerApplicationForm />
      <FaqSection items={careerFAQs} />

    </>
  );
}
