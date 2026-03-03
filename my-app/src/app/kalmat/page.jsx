import { Suspense } from "react";
import Image from "next/image";
import DeptSyllabus from "../components/department/dept_syllabus";
import HeroSectionTwo from "../components/general/hero-section-two";
import KalseeApplicationForm from "../components/kalsee/kalsee-application-form";
import KalseeMilestone from "../components/general/kalsee-milestone";
import MainIntro from "../components/about/main_intro";
import ImageListItem from "../components/ccrc/imagelistitem";
import OurPrograms from "../components/admissions/our_programs";
import AdmissionSteps from "../components/admissions/admission-steps";
import FAQ from "../components/general/faq";
import AdmissionCareer from "../components/general/admission_cta";
import SampleTesting from '../components/cif/sample_testing';
import Testimonials from "../components/home/Testimonials";
import MediaCardSlider from "../components/general/media-card-slider";
export default function KalseePage() {
  const milestones = [
    {
      value: '4 LPA',
      label: 'Average Package',
    },
    {
      value: '12L +',
      label: 'Highest Package',
    },
    {
      value: '400 +',
      label: 'Recruitment Partners',
    },
  ]
  const faqItems = [
    {
      question: "What is the purpose of KU's KAL-MAT exam?",
      answer: "We have designed this exam to assess the logical skills, communication skills, and subject knowledge of students who want to pursue their careers in BBA and MBA programs."
    },
    {
      question: "How can I prepare for the KAL-MAT exam?",
      answer: [
        "Clear all your concepts till class 12th.",
        "Give a specific time to all 4 subjects during your preparation.",
        "Focus on weak subjects or chapters.",
        "Practice sample papers or mock tests regularly.",
        "Refer to books of reputed publishers."
      ]
    },
    {
      question: "Is KAL-MAT mandatory for admission into BBA and MBA programs?",
      answer: "Yes, if you want to secure your spot in our BBA and MBA programs, then you compulsorily have to give KAL-MAT."
    },
    {
      question: "How long will my score be valid?",
      answer: "Your KAL-MAT score will be valid for one academic year."
    },
    {
      question: "What time management strategies can I follow during the exam?",
      answer: [
        "First, scan all questions carefully.",
        "Prioritise solving easier questions.",
        "Manage your time for each question.",
        "Solve difficult questions in the end."
      ]
    },
    {
      question: "When will the KAL-MAT results be declared?",
      answer: "Within one week, you'll get the results via email."
    },
    {
      question: "What if I face any technical issues during the exam?",
      answer: "If candidates face any technical issues, they must immediately inform the support team. We can also reschedule the exam depending on the situation."
    },
  ]
  const testimonials = [
    {
      name: "John Doe",
      role: "Student",
      quote: "I got my admission for KALSEE by filling out the application form online.",
      image: "https://cdn.kalingauniversity.ac.in/entrance-exam/entrance-exam-banner.webp"
    },
    {
      name: "John Smith",
      description: "I got my admission for KALSEE by filling out the application form online.",
      image: "https://cdn.kalingauniversity.ac.in/entrance-exam/entrance-exam-banner.webp"
    },
    {
      name: "Jane Doe",
      role: "Student",
      quote: "I got my admission for KALSEE by filling out the application form online.",
      image: "https://cdn.kalingauniversity.ac.in/entrance-exam/entrance-exam-banner.webp"
    },
  ]
  const kifSteps = [
    {
      id: 1,
      stepNumber: "01",
      title: "Step 1: Visit & Apply",
      description: "",
      backDescription: "Visit https://admissions.kalingauniversity.ac.in/ and apply for the KAL-MAT Exam.",
      icon: "https://cdn.kalingauniversity.ac.in/kalsee/exam+(2).png",
      image: "https://cdn.kalingauniversity.ac.in/entrance-exam/entrance-exam-banner.webp"
    },
    {
      id: 2,
      stepNumber: "02",
      title: "Step 2: Fill Application Form",
      description: "",
      backDescription: "Fill out the online application form with your details.",
      icon: "https://cdn.kalingauniversity.ac.in/kalsee/exam+(3).png",
      image: "https://cdn.kalingauniversity.ac.in/entrance-exam/entrance-exam-banner.webp"
    },
    {
      id: 3,
      stepNumber: "03",
      title: "Step 3: Pay Application Fees",
      description: "",
      backDescription: "Pay the application fees to complete your registration.",
      icon: "https://cdn.kalingauniversity.ac.in/kal-mat/fees.png",
      image: "https://cdn.kalingauniversity.ac.in/entrance-exam/entrance-exam-banner.webp"
    },
    {
      id: 4,
      stepNumber: "04",
      title: "Step 4: Receive Login Details",
      description: "",
      backDescription: "Get login details & scheduling link within 24 hours.",
      icon: "https://cdn.kalingauniversity.ac.in/kal-mat/key.png",
      image: "https://cdn.kalingauniversity.ac.in/entrance-exam/entrance-exam-banner.webp"
    },
    {
      id: 5,
      stepNumber: "05",
      title: "Step 5: Take the CBT",
      description: "",
      backDescription: "Take the Computer-Based Test (CBT) as per your scheduled date.",
      icon: "https://cdn.kalingauniversity.ac.in/kalsee/exam+(3).png",
      image: "https://cdn.kalingauniversity.ac.in/entrance-exam/entrance-exam-banner.webp"
    },
    {
      id: 6,
      stepNumber: "06",
      title: "Step 6: Check Results",
      description: "",
      backDescription: "Check your final results online.",
      icon: "https://cdn.kalingauniversity.ac.in/kalsee/medical-result.png",
      image: "https://cdn.kalingauniversity.ac.in/entrance-exam/entrance-exam-banner.webp"
    },
    {
      id: 7,
      stepNumber: "07",
      title: "Step 7: Welcome to KU",
      description: "",
      backDescription: "Welcome to Kalinga University!",
      icon: "https://cdn.kalingauniversity.ac.in/kalsee/college-student.png",
      image: "https://cdn.kalingauniversity.ac.in/entrance-exam/entrance-exam-banner.webp"
    },
  ]

  const links = [
    {
      title: "Apply Now",
      description: "Apply for KALSEE by filling out the application form online.",
      image: "https://cdn.kalingauniversity.ac.in/entrance-exam/entrance-exam-banner.webp"
    },
    {
      title: "Prepare for KALSEE",
      description: "Prepare for KALSEE by studying the exam pattern and syllabus.",
      image: "https://cdn.kalingauniversity.ac.in/entrance-exam/entrance-exam-banner.webp"
    },
    {
      title: "Take the Exam",
      description: "Take the KALSEE exam by attending the exam center on the scheduled date.",
      image: "https://cdn.kalingauniversity.ac.in/entrance-exam/entrance-exam-banner.webp"
    },
  ]
  const boxItems = [
    {
      title: "Eligibility",
      description: "10 + 2 For BBA, Graduation For MBA",
      icon: <Image src="https://cdn.kalingauniversity.ac.in/kalsee/criteria+(1).png" alt="Eligibility" width={64} height={64} className="object-contain" />
    },
    {
      title: "Mode",
      description: "Online; Flexible scheduling for BBA & fixed date for MBA",
      icon: <Image src="https://cdn.kalingauniversity.ac.in/kalsee/test.png" alt="Mode" width={64} height={64} className="object-contain" />
    },
    {
      title: "Exam Dates & Registration",
      description: "BBA - Anytime within a week after registration, MBA - Will be intimated by the University from time to time.",
      icon: <Image src="https://cdn.kalingauniversity.ac.in/kalsee/registration.png" alt="Exam Dates & Registration" width={64} height={64} className="object-contain" />
    },
    {
      title: "Exam Pattern",
      description: "MCQ-Based",
      icon: <Image src="https://cdn.kalingauniversity.ac.in/kalsee/pattern.png" alt="Exam Pattern" width={64} height={64} className="object-contain" />
    },
    {
      title: "Total Questions",
      description: "90 questions, 90 minutes for BBA and MBA",
      icon: <Image src="https://cdn.kalingauniversity.ac.in/kalsee/exam+(1).png" alt="Total Questions" width={64} height={64} className="object-contain" />
    },
    {
      title: "Negative Marking",
      description: "No Negative Marking",
      icon: <Image src="https://cdn.kalingauniversity.ac.in/kalsee/exam.png" alt="Negative Marking" width={64} height={64} className="object-contain" />
    },
    {
      title: "Passing Marks",
      description: "Need 50% to qualify",
      icon: <Image src="https://cdn.kalingauniversity.ac.in/kalsee/mark.png" alt="Passing Marks" width={64} height={64} className="object-contain" />
    },
    {
      title: "Exam Fee",
      description: "BBA - INR 1,400/- (Online Exam) + INR 1,000/- (Personal Interview) (one-time eligibility), MBA - INR 2,000/- (Online Exam) + INR 1,500/- (Personal Interview) (one-time eligibility)",
      icon: <Image src="https://cdn.kalingauniversity.ac.in/kalsee/hand.png" alt="Exam Fee" width={64} height={64} className="object-contain" />
    },
    {
      title: "Scholarships",
      description: "Attractive scholarships to top scorers for BBA and MBA courses",
      icon: <Image src="https://cdn.kalingauniversity.ac.in/kalsee/scholarship.png" alt="Scholarships" width={64} height={64} className="object-contain" />
    },
  ]
  const highScorers = [
    {
      image: "https://cdn.kalingauniversity.ac.in/kal-mat/Dhanajay+Sahu.webp",
      title: "DHANANJAY SAHU",
      description: "MBA"
    },
    {
      image: "https://cdn.kalingauniversity.ac.in/kal-mat/Divya+Choudhary.webp",
      title: "DIVYA CHOUDHARY",
      description: "MBA"
    },
    {
      image: "https://cdn.kalingauniversity.ac.in/kal-mat/Bhavika+rathi.webp",
      title: "BHAVIKA RATHI",
      description: "BBA"
    },
    {
      image: "https://cdn.kalingauniversity.ac.in/kal-mat/Alok+gupta.webp",
      title: "ALOK GUPTA",
      description: "MBA"
    },
    {
      image: "https://cdn.kalingauniversity.ac.in/kal-mat/Ayush+SIngh.webp",
      title: "AYUSH SINGH",
      description: "BBA"
    },
    {
      image: "https://cdn.kalingauniversity.ac.in/kal-mat/Yuraj+Singh.webp",
      title: "YUVRAJ SINGH CHOUHAN",
      description: "BBA"
    },
    {
      image: "https://cdn.kalingauniversity.ac.in/kal-mat/NISHANT+SWARNKAR.webp",
      title: "NISHANT SWARNKAR",
      description: "BBA"
    }
  ];

  // const videoItems1 = [
  //   {
  //     id: 1,
  //     name: "SGS Technical Services Pvt Ltd ",
  //     videoUrl: "https://cdn.kalingauniversity.ac.in/placement/Campus+Drives/SGS+Technical+services+Pvt.+ltd+Campus+Drive.mp4",
  //     thumbnail: "https://cdn.kalingauniversity.ac.in/placement/Campus+Drives/campus-1.png",
  //     description: "SGS Technical Services Pvt Ltd",
  //   },
  //   {
  //     id: 2,
  //     name: "9M India Limited",
  //     videoUrl: "https://cdn.kalingauniversity.ac.in/placement/Campus+Drives/9M+india+limited+Campus+Drive+CCRC.mp4",
  //     thumbnail: "https://cdn.kalingauniversity.ac.in/placement/Campus+Drives/campus-2.png",
  //     description: "9M India Limited",
  //   },
  //   {
  //     id: 3,
  //     name: "Hirojet Campus Drive",
  //     videoUrl: "https://cdn.kalingauniversity.ac.in/placement/Campus+Drives/Hirojet+Campus+Drive.mp4",
  //     thumbnail: "https://cdn.kalingauniversity.ac.in/placement/Campus+Drives/campus-3.png",
  //     description: "Hirojet",
  //   },
  //   {
  //     id: 4,
  //     name: "Airtel Campus Drive",
  //     videoUrl: "https://cdn.kalingauniversity.ac.in/placement/Campus+Drives/Airtel+Campus+Drive.mp4",
  //     thumbnail: "https://cdn.kalingauniversity.ac.in/placement/Campus+Drives/campus-4.png",
  //     description: "Airtel",
  //   },
  // ];
  return (
    <>
      <HeroSectionTwo
        id="hero-banner"
        backgroundImage="https://cdn.kalingauniversity.ac.in/kal-mat/kalmat-banner-new.png"
        title="Turn Your Business Ambition Into A Thriving Career"
        description=""
        buttonText="Apply Now"
        buttonLink="#hero-banner"
        showForm={false}
        customForm={<KalseeApplicationForm />}
      />
      <KalseeMilestone
        milestones={milestones}
        imageSrc="https://cdn.kalingauniversity.ac.in/admission/student-img.png"
      />
      <MainIntro
        title="Kalinga Management Aptitude Test [KAL-MAT]"
        description="KAL-MAT is your pathway to book a spot in KU’s prestigious BBA and MBA programs. Aspiring students from India and other countries can appear for this exam and shape their destiny."
        imageUrl="https://cdn.kalingauniversity.ac.in/kal-mat/kalmat-intro.jpg"
        imageAlt="KALSEE"
      />
      <ImageListItem textClassName="hidden" listItemTextClassName="text-black" imageSrc="https://cdn.kalingauniversity.ac.in/ccrc/kif/kif.webp" boxItems={boxItems} title="Details of KAL-MAT" subtitle="KAL-MAT Exam Information" description="Comprehensive details about the Kalinga Management Aptitude Test (KAL-MAT) including eligibility, exam pattern, dates, fees, and more." />
      <DeptSyllabus
        title="Personal Interview"
        imageSrc="https://cdn.kalingauniversity.ac.in/departments/bg-course.webp"
        imageAlt="KAL-MAT Course Materials"
        leftCardTitle="BBA"
        leftCardDescription="Within 3 days post-exam"
        leftCardButtonText="Know more"
        leftCardButtonLink="/admissions"
        leftCardSecondButtonText="Register now"
        leftCardSecondButtonLink="#hero-banner"
        rightCardTitle="MBA"
        rightCardDescription="Will be intimated by the University from time to time."
        rightCardButtonText="Know more"
        rightCardButtonLink="/admissions"
        rightCardSecondButtonText="Register now"
        rightCardSecondButtonLink="#hero-banner"
        mobileImageHeight={700}
      />
      <SampleTesting
        title="Pattern of KAL-MAT Exam"
        instruction="All questions carry 1 mark each."
        subtitle=""
        description=""
        note="*Note: Scheduling of the KAL-MAT Exam must be completed at least 48 hours before the desired exam appointment"
        tableColumns={[
          { key: "slNo", label: "Sl. No", width: "w-20" },
          { key: "section", label: "Section", width: "w-32" },
          { key: "subject", label: "Subject", width: "w-64" },
          { key: "questions", label: "Questions", width: "w-32" }
        ]}
        tableData={[
          {
            slNo: 1,
            section: "Section A",
            subject: "English Communication",
            questions: 25
          },
          {
            slNo: 2,
            section: "Section B",
            subject: "Logical Reasoning",
            questions: 25
          },
          {
            slNo: 3,
            section: "Section C",
            subject: "Quantitative Aptitude",
            questions: 20
          },
          {
            slNo: 4,
            section: "Section D",
            subject: "General Aptitude",
            questions: 20
          },
          {
            slNo: "Total",
            section: "",
            subject: "",
            questions: 90,
            colSpan: {
              slNo: 3, // Merge Sl. No, Section, and Subject columns (Total spans all three)
              section: 0, // Skip this cell (merged into slNo)
              subject: 0, // Skip this cell (merged into slNo)
              questions: 1
            }
          }
        ]}
      />
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center">Loading programs...</div>}>
        <OurPrograms
          customPrograms={[
            {
              id: 1,
              title: "BBA",
              specialization: "Bachelor of Business Administration",
              duration: "3 Years",
              eligibility: "10+2",
              type: "UG",
              coursePageUrl: "/courses/bachelor-of-business-administration",
              hideScholarshipLink: true,
              exploreLinkText: "Know More"
            },
            {
              id: 2,
              title: "MBA",
              specialization: "Master of Business Administration",
              duration: "2 Years",
              eligibility: "Graduation",
              type: "PG",
              coursePageUrl: "/courses/master-of-business-administration",
              hideScholarshipLink: true,
              exploreLinkText: "Know More"
            }
          ]}
          hideSearchFilter={true}
          customTitle="Programs Available Through KAL-MAT"
          customSubtitle="Explore Our Programs"
          maxPrograms={2}
          mobileMaxWidth={700}
        />
      </Suspense>
      <AdmissionSteps
        steps={kifSteps}
        subtitleClassName="hidden"
        title="Your Step-By-Step Admission Process"
        ctaLabel="Apply Now"
        showReadMore={true}
        showHeaderButton={false}
        showIcon={true}
        showImage={false}
        bgColor="bg-white"
      />
      {/* <MediaCardSlider
        categoryTitle=""
        title="Campus Drives"
        videoItems={videoItems1}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        descriptionTextClass=""
        swiperClassName="ccrc-video-slider"
      /> */}
      <MediaCardSlider
        title="High Scorers Of KAL-MAT"
        description="Introducing our KAL-MAT achievers whose top scores turned into a bright future."
        imageItems={highScorers}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        swiperClassName="high-scorers-slider"
      />
      {/* <Testimonials testimonials={testimonials} className="bg-[var(--light-gray)]" /> */}
      <FAQ title="Frequently Asked Questions"
        subtitle=""
        items={faqItems} />
      <AdmissionCareer />
    </>
  );
}
