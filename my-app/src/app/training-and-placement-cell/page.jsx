"use client";

import React, { useEffect } from 'react'
import MainIntro from '@/app/components/about/main_intro'
import ImageContent from '@/app/components/ccrc/imagecontent'
import ImageListItem from '@/app/components/ccrc/imagelistitem'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/components/general/tab'
import CareerPath from '@/app/components/course/career_path'
import Partner from '@/app/components/ccrc/partner'
import MediaCardSlider from '@/app/components/general/media-card-slider'
import Testimonials from '@/app/components/home/Testimonials'
import Gallery from '@/app/components/campuslife/campusgallery'
import CustomGallery from '@/app/components/general/gallery'



const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-intro.jpg",
  imageposition: "object-center",
  pageTitle: "Training and Placement Cell",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Training and Placement Cell", href: "/training-and-placement-cell" },
  ],
}
const TrainingAndPlacementCell = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
  }, []);
  const blueItems = [
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-1.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-2.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-3.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-4.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-5.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-6.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-7.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-8.webp",
      imageAlt: "",
    },  
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-9.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-10.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-11.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-12.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-13.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-14.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-15.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-16.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-17.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-18.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-19.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-20.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-21.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-22.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-23.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-24.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-25.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-26.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-27.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-28.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-29.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-30.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-31.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-32.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-33.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-34.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-35.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-36.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-37.webp",
      imageAlt: "",
    },
    // {
    //   imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-38.webp",
    //   imageAlt: "",
    // },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-39.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-40.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-41.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-42.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-43.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-44.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-45.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-46.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-47.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-48.webp",
      imageAlt: "",
    },
    { 
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-49.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-50.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-51.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-52.webp",
      imageAlt: "",
    },
    {
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-53.webp",
      imageAlt: "",
    },
  ]
    const items = [
        {
            id: 1,
            text: "To provide career counselling services for skill development and better job opportunities"
        },
        {
            id: 2,
            text: "To organise pre-placement training, which includes soft skills, group discussions, resume writing, and mock interviews"
        },
        {
            id: 3,
            text: "To organise guest lectures, seminars, workshops, industrial visits, and certification programs"
        },
        {
            id: 4,
            text: "To invite companies for campus placements drives"
        },
        {
            id: 5,
            text: "To facilitate internships and job opportunities through campus placement drives"
        },
        {
            id: 6,
            text: "To promote entrepreneurial skills among students"
        },
        {
            id: 7,
            text: "To maintain an updated record of students' skills to match them with current industry requirements for better placement opportunities"
        },
        {
            id: 8,
            text: "To regularly monitor placement activities and generate feedback to improve students' performance in interviews"
        },
    ]
    const skillsContent = {
        title: "Preparing You With Relevant Skills",
        description: "We stand as one of the highest campus placement universities in Chhattisgarh, as we strategically work at every step until students land their dream job.",
        careers: [
            {
                id: 1,
                title: "Aptitude Training",
                description: "We conduct classes on logical reasoning, quantitative aptitude, and analytical skills, which prepare students for pre-employment tests.",
            },
            {
                id: 2,
                title: "Certification Programs",
                description: "We offer short-term and skill-oriented certification programs that will introduce them to trending tools and technologies so that they can impress the interviewers.",
            },
            {
                id: 3,
                title: "Communication Skills",
                description: "Our T&P cell conducts personalised sessions on English speaking skills, email writing, and presentation skills.",
            },
            {
                id: 4,
                title: "Resume Building",
                description: "Our workshops guide students in preparing a well-structured resume that highlights their strengths, skills, projects, and internships.",
            },
            {
                id: 5,
                title: "Interview Preparation",
                description: "A special session is conducted where students are trained with mock interviews and group discussions so that they can clear each round without any hesitation.",
            },
        ]
    }
    const galleryImages = [
        {
            id: 1,
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-glimple-1.webp",
            alt: "Training and Placement Gallery 1"
        },
        {
            id: 2,
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-glimple-2.webp",
            alt: "Training and Placement Gallery 2"
        },
        {
            id: 3,
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-glimple-3.webp",
            alt: "Training and Placement Gallery 3"
        },
        {
            id: 4,
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-glimple-4.webp",
            alt: "Training and Placement Gallery 4"
        },
        {
            id: 5,
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-glimple-5.webp",
            alt: "Training and Placement Gallery 5"
        },
    ]
    return (
    <>
    <MainIntro
    title="Training And Placement Cell"
    description={[
      "The Career and Corporate Centre of Kalinga University is a hub for career guidance and training, and corporate partnerships. With modern infrastructure and resources, the centre meets industry standards and has even received appreciation from top organisations. The Kalinga University campus placements support cell introduces you to the professional world. We don't just prepare you for the corporate world, but give you a 360-degree training so that you can turn out to be a confident individual who is ready to tackle any challenge in life.",
      "With our personalised training programs, expert-led sessions, and interview preparation, you will be well-prepared to clear any job interview according to your skill set. Our expert mentors go beyond and guide you with skills that companies are looking for in the current job market, and even update the training modules accordingly. Apart from this, we also keep the database of job openings in various companies up-to-date, so that our students don't miss out on any opportunities. With our strong industry connections, we conduct campus drives each year, ensuring that our graduates are placed in leading companies with competitive salary packages."
    ]}
    imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/placemnt-intro.webp"
    imageAlt="Objectives"
    initialVisibleParagraphs={1}
    showKnowMore={true}
    />
    <ImageListItem items={items} imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/placement-intro-2.webp" title="Training And Placement Cell" />
    <ImageContent
    title="Our Career And Corporate Resource Centre"
    description="The Career and Corporate Resource Centre (CCRC) of Kalinga University bridges academic learning and industrial knowledge through collaborations and customised solutions. Our services include: Corporate Trainings & Psychometric Analysis, Consultancy Services: 360 Degree PMS & HRIS, Corporate Social Responsibility, Training and Placements, and Incubation support."
    imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp"
    imageAlt="Training And Placement Cell"
    buttonLink="/career-and-corporate-resource-centre"
    buttonText="Explore More"
    />
    <div className="container mx-auto mt-8 rounded-2xl bg-[var(--card-gray)] p-5 md:p-7">
      <Tabs defaultValue="tab1">
        <TabsList className="gap-0">
          <TabsTrigger value="tab1">Training Programs</TabsTrigger>
          <TabsTrigger value="tab2">Student Training Initiatives</TabsTrigger>
        </TabsList>

        <TabsContent value="tab1" className="pt-7">
          <div className="space-y-8">
            <div>
              <h3 className="font-stix text-2xl text-[var(--foreground)] mb-4">
                Campus Recruitment Training (CRT)
              </h3>
              <p className="text-[var(--light-text-gray)] leading-relaxed">
                Companies today look for graduates who don't just excel in academics but also possess some real workplace skills like problem-solving, communication, and confidence. Our Campus Recruitment Training (CRT) offers a 100-hour training cycle on attitude (50 hours) and aptitude (50 hours) and prepares students for early success. It aligns their career goals with employer expectations, making them job-ready. It includes behavioural and personality development skills and training in relevant tools and techniques, preparing students for initial corporate screenings.
              </p>
            </div>

            <div>
              <h4 className="font-stix text-xl  text-[var(--foreground)] mb-3">
                Learning Methodology
              </h4>
              <p className="text-[var(--light-text-gray)] mb-3">
                The CRT training follows the "Learn, Practice & Apply" model through:
              </p>
              <ul className="list-disc list-inside text-[var(--light-text-gray)] space-y-2 ml-4">
                <li>Interactive classroom sessions</li>
                <li>Role plays and case studies</li>
                <li>Mock interviews</li>
                <li>One-on-one feedback sessions</li>
                <li>Self-assessment exercises</li>
              </ul>
            </div>

            <div>
              <h3 className="font-stix text-2xl text-[var(--foreground)] mb-4">
                Corporate Employment Assessment Test (CEAT)
              </h3>
              <p className="text-[var(--light-text-gray)] leading-relaxed">
                Want to know if you are ready for interviews or if your skills match recruiters' requirements?
              </p>
              <p className="text-[var(--light-text-gray)] leading-relaxed mt-3">
                Introducing Corporate Employability Assessment Test (CEAT)! A test that is designed to evaluate students' job-readiness by measuring their aptitude, technical skills, and communication skills as per industry standards. This test further helps our experts pinpoint the student skill gaps, enabling us to design tailored training programs and make them ready to ace job interviews.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tab2" className="pt-7">
          <div className="space-y-8">
            <div>
              <h3 className="font-stix text-2xl text-[var(--foreground)] mb-4">
                Our Student Training Initiatives
              </h3>
              <p className="text-[var(--light-text-gray)] leading-relaxed">
                The training and placement cell takes the conventional idea of campus training to a whole new dimension where learnings are transformed into employability. Our student training initiatives are designed to make you confident, skilled, and emotionally intelligent, qualities that companies actively seek. With the winning combination of "Qualification + Skills", you'll be prepared not just for your first job but for a lifetime of success.
              </p>
            </div>

            <div>
              <h4 className="font-stix text-xl  text-[var(--foreground)] mb-3">
                Meta Skills Training
              </h4>
              <p className="text-[var(--light-text-gray)] leading-relaxed mb-4">
                Built on the principle that employability is not taught but developed, this program covers 350+ hours of structured training on job-ready skills and maximises students' career potential. Through behavioural training, experiential learning, and corporate simulations, this Empowerment for Employability and Entrepreneurship (EEE) model bridges the gap between theoretical knowledge and corporate expectations.
              </p>

              <div className="mb-4">
                <h5 className="font-stix text-lg  text-[var(--foreground)] mb-2">
                  Core Objectives:
                </h5>
                <ul className="list-disc list-inside text-[var(--light-text-gray)] space-y-2 ml-4">
                  <li>Conducted alongside academic semesters</li>
                  <li>Credit-based structured modules</li>
                  <li>Includes classroom sessions, workshops, and live projects</li>
                  <li>Continuous evaluation based on participation, assignments, and projects</li>
                  <li>Step-by-step professional development of students</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-stix text-lg  text-[var(--foreground)] mb-2">
                  Methodology:
                </h5>
                <p className="text-[var(--light-text-gray)] mb-3">
                  The module combines industrial learning with personalised mentorship through:
                </p>
                <div className="space-y-3">
                  <div>
                    <p className=" text-[var(--foreground)] mb-1">Industry-Focused Approach -</p>
                    <ul className="list-disc list-inside text-[var(--light-text-gray)] space-y-1 ml-4">
                      <li>Experiential activities, role-plays, and group discussions</li>
                      <li>Mentorship from industry experts</li>
                      <li>Self-assessment exercises and one-on-one feedback sessions</li>
                    </ul>
                  </div>
                  <div>
                    <p className=" text-[var(--foreground)] mb-1">Individual-Focused Approach -</p>
                    <ul className="list-disc list-inside text-[var(--light-text-gray)] space-y-1 ml-4">
                      <li>Identifying their strengths, challenges, and interests</li>
                      <li>Setting personalised career paths and actionable goals</li>
                      <li>Mentorship on future-ready skills</li>
                      <li>Evaluation and progress monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-stix text-lg  text-[var(--foreground)] mb-2">
                  Year-Wise Development Modules:
                </h5>
                <ul className="list-disc list-inside text-[var(--light-text-gray)] space-y-2 ml-4">
                  <li><strong>First-Year Foundation Module</strong> - Development of goals, life skills, self-awareness, and confidence building</li>
                  <li><strong>Mid-Year Orientation Module</strong> - Customised training on leadership, mental and emotional well-being, communication skills, presentation skills, problem-solving skills, and personality development</li>
                  <li><strong>Final-Year Nirvana Module</strong> - Focused training on core industry skills, people skills, networking opportunities, managerial skills, business development, and creative and technology skills</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-stix text-xl  text-[var(--foreground)] mb-3">
                Apti Mitra Module
              </h4>
              <p className="text-[var(--light-text-gray)] leading-relaxed">
                It is an aptitude training program that focuses on quantitative, logical, analytical, and verbal reasoning, preparing students for placement tests and other competitive exams.
              </p>
            </div>

            <div>
              <h4 className="font-stix text-xl  text-[var(--foreground)] mb-3">
                Outbound Training
              </h4>
              <p className="text-[var(--light-text-gray)] leading-relaxed">
                This training program will take your learning outside the classroom and step you into real-world situations. Through team-building exercises and industrial visits, students develop qualities like leadership, collaboration, and problem-solving, making them professionals who are ready for placement in top companies and lifelong success.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
    <CareerPath 
      title={skillsContent.title}
      description={skillsContent.description}
      careers={skillsContent.careers}
    />

    <Partner 
        blueTitle="Our Prominent Recruiters" 
        redTitle="" 
        blueItems={blueItems} 
        ccrcLogo="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp"
        singleColumn={true}
        description=""
      />
      <MediaCardSlider
        categoryTitle="Top Performers"
        title="Our Outstanding Achievers"
        imageItems={[
          {
            id: 1,
            name: "Anisha Hussain",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/training-and-placement-cell/Our-Outstanding-Achievers(1).png",
            description: "MBA ",
          },
          {
            id: 2,
            name: "Yash Agarwal",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/training-and-placement-cell/Our-Outstanding-Achievers(2).png",
            description: "B.Pharma",
          },
          {
            id: 3,
            name: "Karishma meher",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/training-and-placement-cell/Our-Outstanding-Achievers(3).png",
            description: "B.com",
          },
          {
            id: 4,
            name: "David Kisku",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/training-and-placement-cell/Our-Outstanding-Achievers(4).png",
            description: "B.pharmacy",
          },
          {
            id: 5,
            name: "Aryan Prakash Gupta",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/training-and-placement-cell/Our-Outstanding-Achievers(5).png",
            description: "MBA",
          },
          {
            id: 6,
            name: "Ashley Christeena Thomas",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/training-and-placement-cell/Our-Outstanding-Achievers(6).png",
            description: "B.pharmacy",
          },
           {
            id: 7,
            name: "Gautam Mandal",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/training-and-placement-cell/Our-Outstanding-Achievers(7).png",
            description: "B.Tech CS",
          },
           {
            id: 8,
            name: "Mehek Sharma",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/training-and-placement-cell/Our-Outstanding-Achievers(8).png",
            description: "B.com",
          },
           {
            id: 9,
            name: "Adarsh choudhary",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/training-and-placement-cell/Our-Outstanding-Achievers(9).png",
            description: "B.com(Banking and Finance)",
          },
           {
            id: 10,
            name: "Rupali Sahu",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/training-and-placement-cell/Our-Outstanding-Achievers(10).png",
            description: "MBA",
          },
           
        ]}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        descriptionTextClass="text-gray-600"
        swiperClassName="top-performers-slider"
      />
    <CustomGallery 
      images={galleryImages}
      title="Glimpses of Our Training and Placement Activities"
    />
    </>
  )
}

export default TrainingAndPlacementCell