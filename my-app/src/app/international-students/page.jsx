"use client";

import React, { useEffect } from 'react'   
import MainIntro from '../components/about/main_intro'
import PublicationGrid from '../components/research/publication-grid'
import AccreditationRanking from '../components/home/AccreditationRanking'
import FeatureCards from "../components/home/featurecard";
import ImageListItem from '../components/ccrc/imagelistitem';
import StudentCell from '../components/international-students/student_cell';
import AdmissionSteps from '../components/admissions/admission-steps';
import AppreciationLetterLayout from '../components/international-students/appreciation_letter_layout';
import OrganogramOfKalinga from '../components/about/organogram_of_kalinga';
import MediaCardSlider from '../components/general/media-card-slider';
import UpcomingConference from '../components/research/upcoming_conference';
import Gallery from '../components/campuslife/campusgallery';
import AdmissionCareer from '../components/general/admission_cta';
import OpenPositions from '../components/careers/OpenPositions';
import VisaFrofrroGuidelines from '../components/international/visa_frofrro_guidelines';

// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/international-students-banner.webp",
  pageTitle: "International Students",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'International Students', href: '/international-students' }
  ]
};



export default function InternationalStudents() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
  }, []);
  const newsConferences = [
    {
      id: 1,
      title: "Annual Research Symposium 2025",
      date: "November 10 · 2025",
      category: "Research & Innovation",
      description: "Join us for our annual research symposium featuring cutting-edge research presentations, keynote speakers, and networking opportunities for researchers and academics.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    },
    {
      id: 2,
      title: "International Education Summit",
      date: "December 05 · 2025",
      category: "Education",
      description: "A global gathering of educators, policymakers, and thought leaders to discuss the future of higher education and innovative teaching methodologies.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    },
    {
      id: 3,
      title: "Technology & Innovation Conference",
      date: "January 20 · 2026",
      category: "Technology",
      description: "Explore the latest trends in technology, artificial intelligence, and digital transformation in education and industry applications.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    },
  ]
  const videoItems = [
    {
      id: 1,
      name: "David Giir Riiny",
      description: "B.tech Student",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/REEL_AIML_TESTOMONIAL_02.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/REEL_AIML_TESTOMONIAL_02.mp4",
    },
    {
      id: 2,
      name: "Salima Naguago",
      description: "Pharmacy Student",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/REEL_PHARMA_TESTIMONIALS_01.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/REEL_PHARMA_TESTIMONIALS_01.mp4",
    },
    {
      id: 3,
      name: "Khazi lupiya",
      description: "Pharmacy Student",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/REEL_PHARMA_TESTIMONIALS_04.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/REEL_PHARMA_TESTIMONIALS_04.mp4",
    },  
    {
      id: 4,
      name: "Palchin Upadhyay",
      description: "BA Gen Student",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/REEL_TESTIMONIAL_BJMC_01.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/REEL_TESTIMONIAL_BJMC_01.mp4",
    },
    {
      id: 5,
      name: "Issac",
      description: "BSW Student",
      videoUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/REEL_TESTIMONIAL_BJMC_02.mp4",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/REEL_TESTIMONIAL_BJMC_02.mp4",
    },
  ]
  const boxItems = [
    {
      id: 1,
      title: "Warm & Welcoming Society",
      description: "Indian people offer outstanding hospitality and a safe, welcoming, and respectful environment to their international students.",
    },
    {
      id: 2,
      title: "Affordable Quality Education",
      description: "From tuition fees to living expenses, India offers world-class education and excellent academic standards at a significantly lower cost compared to Western countries.",
    },
    {
      id: 3,
      title: "English-Taught Programs",
      description: "Academic Programs in Indian Universities are mostly taught in English, enabling every international student prepare for global careers.",
    },
    {
      id: 4,
      title: "Diverse Programs",
      description: "With a strong focus on a practical learning approach, Indian Universities offer a wide range of programs in Engineering, Technology, IT, Science, Pharmacy, commerce, management, Law, and more.",
    },
    {
      id: 5,
      title: "Tech & Innovation Hub",
      description: "With strong government policies, booming startup culture, a tech-savvy workforce, and the establishment of MNCs, India is setting new benchmarks on the global tech map.",
    },
    {
      id: 6,
      title: "Globally Recognised Institutions",
      description: "Indian Universities are recognised by National and International Accreditation Bodies, and degrees are respected worldwide.",
    },
    {
      id: 7,
      title: "Rich Cultural Experience",
      description: "Studying in India means experiencing different cultures & traditions, festivals, cuisines, languages, and historical landmarks.",
    },
    {
      id: 8,
      title: "Holistic Student Development",
      description: "Beyond academics, Indian Universities emphasise students' all-around growth and make them confident individuals.",
    },
  ]
  const internationalStudentsFeatureCards = [
    {
      id: 1,
      title: 'Holistic Development And Explorative Learning',
      body: 'With our 360-degree learning approach, your learning will not be limited to just classroom-based studies, but you will also learn practical skills through interactive workshops, hands-on training programs, industrial visits, project work, and case studies.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Holistic+Development.svg',
      variant: 'gray',
    },
    {
      id: 2,
      title: 'Choose From Diverse Programs',
      body: 'Our programs are designed to provide updated industry-relevant knowledge to our students. From Fashion Designing to Biotechnology, choose from unlimited career options.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Wide+Range+of+Programs.svg',
      variant: 'amber',
    },
    {
      id: 3,
      title: 'English Is Our Primary Language',
      body: 'English is one of the widely spoken languages in the world, and at Kalinga, you will not face any language barrier. All our programs are taught in English by highly qualified professors, and your friends from all around the Globe will even communicate with you in English.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Global.svg',
      variant: 'gray',
    },
    {
      id: 4,
      title: 'Co-curricular And Extracurricular Activities',
      body: 'Participate in competitions, workshops, events, seminars, National and International conferences, training programs, tribal fests, and more. The University also offers indoor and outdoor sports facilities and even conducts sports competitions.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Cultural+Celebrations.svg',
      variant: 'amber',
    },
    {
      id: 5,
      title: 'Extensive Research Facilities',
      body: "With 90 + Labs, including IT Labs and CIF labs, we're Chhattisgarh's No. 1 institute, committed to innovation and groundbreaking research facilities.",
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Extensive+Research+Facilities.svg',
      variant: 'gray',
    },
    {
      id: 6,
      title: 'Build Networks And Lifelong Connections',
      body: "Here, you'll not just study but collaborate, meet industry leaders, make new connections, learn new languages, participate in multi-cultural programs, and grow together.",
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Networking+Opportunities.svg',
      variant: 'amber',
    },
    {
      id: 7,
      title: 'Multicultural Environment',
      body: 'With students from different countries, our campus buzzes with high energy, new cultures, ideas, friendships, and celebrations.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Cultural+Celebrations.svg',
      variant: 'gray',
    },
    {
      id: 8,
      title: 'Unmatched Support and Guidance',
      body: 'We let our students enjoy their academic journey without any obstacles, as our international student cell guides them at every step. From enrollment in a program till the convocation ceremony, we ensure that they get a seamless experience.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Mentor-Mentee+System.svg',
      variant: 'amber',
    },
    {
      id: 9,
      title: 'Residential Facilities',
      body: 'We have well-furnished separate hostels for both boys and girls for our international students where all their needs are properly taken care of and they can live comfortably in a supportive environment.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/campus+life.svg',
      variant: 'gray',
    },
    {
      id: 10,
      title: 'Enjoy an Economical Lifestyle',
      body: 'Enjoy a vibrant lifestyle at a feasible rate in Raipur, Chhattisgarh. From affordable shopping markets to transportation systems, enjoy a rich culture and diversity.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Community+Services.svg',
      variant: 'amber',
    },
  ];
  
  const publicationStats = [
    {
      id: 1,
      title: "Students",
      value: "8000 +",
      description: "",
    },
    {
      id: 2,
      title: "International students from",
      value: "600 +",
      description: "",
    },
    {
      id: 3,
      title: "Countries",
      value: "29 +",
      description: "",
    },
    {
      id: 4,
      title: "Scholarships Distributed",
      value: "3 Cr. +",
      description: "",
    },
    {
      id: 5,
      title: "Programs",
      value: "130 +",
      description: "",
    },
    {
      id: 6,
      title: "Recruitment Partners",
      value: "250 +",
      description: "",
    },
    {
      id: 7,
      title: "Research Publications",
      value: "3360 +",
      description: "",
    },
    {
      id: 8,
      title: "Patents",
      value: "510 +",
      description: "",
    },
    {
      id: 9,
      title: "Sponsored Research Projects",
      value: "160 +",
      description: "",
    },
    {
      id: 10,
      title: "Consultancy Projects",
      value: "130 +",
      description: "",
    },
    {
      id: 11,
      title: "MoUs Signed",
      value: "200 +",
      description: "",
    },
    {
      id: 12,
      title: "Centres of Excellence",
      value: "7",
      description: "",
    },
    {
      id: 13,
      title: "Laboratories",
      value: "90 +",
      description: "",
    },
  ]

  const internationalAdmissionSteps = [
    {
      id: 1,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-2.svg",
      stepNumber: "01",
      title: "Step 1",
      description: "Document Verification",
      backDescription: "Document Verification",
    },
    {
      id: 2,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-4.svg",
      stepNumber: "02",
      title: "Step 2",
      description: "Offer letter",
      backDescription: "Offer letter will be issued after checking the eligibility",
    },
    {
      id: 3,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-1.svg",
      stepNumber: "03",
      title: "Step 3",
      description: "Registration fee",
      backDescription: "Registration fee of USD 300 is to be paid to the University, and share the proof of payment with us over email",
    },
    {
      id: 4,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-5.svg",
      stepNumber: "04",
      title: "Step 4",
      description: "Admission and Visa Letter",
      backDescription: "Admission Letter and Visa Letter will be issued by the University. You need to contact the nearest Indian Embassy / High Commission to initiate the Student Visa Process",
    },
  ]
  return (
    <>
      <MainIntro
        title="International Students At KU"
        description={[
          "Our international collaborations are with different nationalities, including Afghanistan, Angola, Bangladesh, Burundi, Cameroon, Congo, Gambia, Ghana, Ivory Coast, Lesotho, Liberia, Malawi, Mozambique, Namibia, Nepal, Nigeria, PNG, Rwanda, Somalia, South Korea, South Sudan, Sudan, Swaziland, Syria, Tanzania, Zambia, Zimbabwe, ⁠Singapore, ⁠South Africa.",
          "We offer our global students a vibrant platform where they can all express their views and share their country's culture and values.",
          "From pre-arrival to post-arrival, we're here to support them at every step of their academic journey.",
          "We conduct one-on-one counselling sessions for every student, helping them select the programs of their interest.",
          "Our highly experienced faculty members provide unparalleled mentorship to our international students in academics and personal growth.",
          "Explore Diploma, UG, PG, and Doctorate programs designed to meet your academic aspirations.",
          "At Kalinga, you're not just another student but a part of a global community where IDEAS are nurtured and DREAMS are fulfilled."
        ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/international-students-intro.jpg"
        imageAlt="International Students"
        initialVisibleParagraphs={2}
        showKnowMore={true}
      />
      <PublicationGrid stats={publicationStats} />
      <AccreditationRanking
        heading="Accreditations & Rankings"
        secondHeading=""
      />
      <FeatureCards 
        title="Why is Kalinga University the Right Choice?"
        subtitle=""
        description="At Kalinga University, our international students benefit from complete support and guidance, world-class infrastructure, and unmatched campus facilities. With our quality education system, our global students will be well-prepared for the professional world. Here, we just don't value your academic journey, but care about your emotional well-being too."
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/int-why.jpg"
        imageAlt="International Students"
        cards={internationalStudentsFeatureCards}
      />        
       <ImageListItem 
         imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/kif/kif.webp" 
         boxItems={boxItems} 
         title="Why Study At India" 
         subtitle="" 
         description=""
         className="bg-white"
         textClassName=""
         headingClassName="" 
         cardBackgroundColor="bg-[var(--button-red)]"
         cardTitleClassName="text-white"
         listItemTextClassName="text-white"
         hideIcons={true}
       /> 
      <StudentCell />
      <VisaFrofrroGuidelines />
      <AdmissionSteps   
        steps={internationalAdmissionSteps}
        bgColor="bg-[var(--background)]"
      />
      <AppreciationLetterLayout />
      <MainIntro
        subtitle="Faith and Worship Facility"
        title="Honouring Every Faith and Religion"
        description={[
          "Kalinga University, established in 2013, stands out as one of the leading private universities strategically located in the Smart City of New Raipur, Chhattisgarh. The University has consistently ranked among the top 101–150 universities in India under the NIRF Rankings 2025 for the fourth consecutive year and has also received a NAAC B+ accreditation, continuously shining on the horizons of high-quality education with equal opportunities to its international students.",
          "At Kalinga University, you'll find the world in one place. With students from 29+ countries, we celebrate their cultures, faiths, and beliefs. We offer an inclusive environment to all our students where they can freely practice their religion and stay connected with their roots."
        ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/international-students-group.webp"
        imageAlt="International Students"
        reverseLayout={true}
        applyTransform3dSlant={false}
        initialVisibleParagraphs={1}
        showKnowMore={true}
        hidePointsUntilExpanded={true}
        points={[
          "Free-of-cost transportation facility for prayers at the Mosque (on Fridays) and the Church (on Sundays) to our Muslim and Christian students.",
          "A visit to the Temple is organised on demand for our Hindu students.",
          "During Ramadan, an appropriate meal plan is provided to our Muslim students.",
          "During Navratri, a special meal is provided to our Hindu Students.",
          "The Meditation Room is available for all students (Hostel + Regular) to meditate or offer prayers."
        ]}
      />
      <OpenPositions 
        title="BRIDGE Courses for International Students" 
        subtitle="Pre-Semester Preparation Programs"
        description="BRIDGE Courses for newly admitted international students are conducted before the commencement of the first semester classes. The main objective of the course is to bridge the gap between subjects studied at the Pre-university level and subjects they would be studying here. We also understand that the students applying to the university come from different backgrounds and countries, and thus, we have included a few topics that will help them understand the local culture and history of India. To make this bridge course interesting for the students, we have included workshops related to art and culture & a hobby class too. We have bridge courses of 2 months, 4 months, and 6 months (5 days a week)."
        hideCheckEligibility={true}
        cardTitleClassName="font-plus-jakarta-sans"
        positions={[
          {
            title: "Technical BRIDGE Courses",
            description: "Maths, Physics, Chemistry, Biology",
            checkEligibilityLink: "/contact-us",
            applyNowLink: "/contact-us"
          },
          {
            title: "Non-Technical BRIDGE Courses",
            description: "Yoga & Meditation, Indian Arts & Crafts",
            checkEligibilityLink: "/contact-us",
            applyNowLink: "/contact-us"
          },
          {
            title: "Common Topics (Technical & Non-Technical)",
            description: "English & Soft Skills, Language Communications (Hindi), Indian Culture & Lifestyle, IT Skills",
            checkEligibilityLink: "/contact-us",
            applyNowLink: "/contact-us"
          }
        ]}
      />
      <OrganogramOfKalinga
        title="Download Brochure 2025-26"
        description="Kalinga University follows a well-defined governance structure that ensures smooth administration, transparency, and institutional excellence."
        buttonLabel="Download PDF"
        href="https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/International+Student_compressed.pdf"
        useContainer={true}
      />
      <MainIntro
        subtitle="Campus Safety and Security"
        title="A Safe & Protected Learning Environment "
        description="Kalinga University is committed to maintaining a safe and secure campus environment for its students, staff members, and visitors. The entire campus area, including hostels, parking areas, and academic buildings, is very well-secured by the in-house security team. CCTV cameras are also installed all across the campus to continuously monitor all the activities of the University. We even encourage everyone on our campus to take care of their personal belongings. "
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/int-sage.jpg"
        imageAlt="International Students"
        initialVisibleParagraphs={1}
        showKnowMore={true}
      />
      <MediaCardSlider
        categoryTitle="Video Interviews"
        title="Hear From Our International Students"
        description="Discover firsthand experiences from our international students as they share their journey at Kalinga University. From academic excellence to campus life, cultural integration, and career aspirations, listen to their inspiring stories and learn why they chose Kalinga University for their higher education."
        videoItems={videoItems}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        descriptionTextClass=""
        swiperClassName="ccrc-video-slider"
      />
      <UpcomingConference 
        conferences={newsConferences}
        title="Upcoming Conferences & Events"
        backgroundColor="bg-[var(--light-gray)]"
        backgroundColorcard="bg-white"
        showCategory={false}
        showDate={false}
        href="/contact-us"
      />
      <Gallery 
        title="Glimpse" 
        description="Explore the vibrant life of our international students at Kalinga University. From cultural celebrations to academic achievements, witness the diverse experiences that make our campus a global community."
        images={[
          { id: 1, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/int-g-1.webp", alt: "International Students Introduction" },
          { id: 2, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/int-g-2.webp", alt: "Why Choose Kalinga University" },
          { id: 3, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/int-g-3.webp", alt: "International Students Group" },
          { id: 4, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/int-g-4.webp", alt: "Campus Safety and Security" },
          { id: 5, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/int-g-5.webp", alt: "International Students Banner" },
          { id: 6, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/int-g-6.webp", alt: "International Students Banner" },
          { id: 7, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/int-g-7.webp", alt: "International Students Banner" },
          { id: 8, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/int-g-8.webp", alt: "International Students Banner" },
        ]}
      /> 
      <AdmissionCareer />
    </>
  )
}