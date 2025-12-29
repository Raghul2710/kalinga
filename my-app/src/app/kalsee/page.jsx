import KalseeExamPattern from "../components/kalsee/kalsee_exam_pattern";
import HeroSectionTwo from "../components/general/hero-section-two";
import KalseeApplicationForm from "../components/kalsee/kalsee-application-form";
import KalseeMilestone from "../components/general/kalsee-milestone";
import MainIntro from "../components/about/main_intro";
import ImageListItem from "../components/ccrc/imagelistitem";
import QuickLinks from "../components/general/quick_links";
import AdmissionSteps from "../components/admissions/admission-steps";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/general/faq";
import AdmissionCareer from "../components/general/admission_cta";
import MediaCardSlider from "../components/general/media-card-slider";
import Image from "next/image";
export default function KalseePage() {
  const faqItems = [
    
    
  {
    question: "What is the purpose of KU’s KALSEE exam?",
    answer:
      "We have designed this exam to assess the knowledge, problem-solving abilities, and current skills of students pursuing graduation and post-graduation degrees.",
  },
  {
    question: "Is there any age limit to take the KALSEE exam?",
    answer:
      "There’s no specific age limit to apply for this exam, but you have to meet the eligibility criteria for your selected programs.",
  },
  {
    question: "How can I prepare for the KALSEE exam?",
    answer:
      "Firstly, you need to clear all your concepts by class 12th, and secondly, solve some sample papers and MCQs related to all 4 subjects by referring to the books of reputed publishers.",
  },
  {
    question: "What time management strategies can I follow during the exam?",
    answer:
      "Focus on solving easier questions first. Avoid spending too much time on any question. Allot time for each section.",
  },
  {
    question: "How long will my score be valid?",
    answer:
      "Your KALSEE score will be valid for one academic year.",
  },
  {
    question: "When are the results declared?",
    answer:
      "Within one to two working days, you’ll get the results via email and within two days after this, you’ll receive the offer letter if you get qualified in the exam.",
  },
  {
    question: "What if I face any technical issues during the exam?",
    answer:
      "If candidates face any technical issues, they must immediately inform the support team. We can also reschedule the exam depending on the situation.",
  },
  {
    question: "What if I missed my scheduled exam date?",
    answer:
      "In this case, you can reapply for the exam by paying an additional fee.",
  },
  {
    question: "How do I know if I am shortlisted for the scholarship?",
    answer:
      "It will be shared with you via email depending on your scores. You will also be informed by our admission counsellors.",
  },
];

  const testimonials = [
  {
    title: "Syedzaid Mohammad",
    subtitle: "B. TECH. (Computer Science Engineering)",
    description: "Score: 81",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/kalsee-student(1).png",
    videoUrl: "", // keep empty if no video
  },
  {
    title: "Vishal Kumar Mandal",
    subtitle: "B. TECH. CS - AIML with IBM",
    description: "KALSEE Qualified Student",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/kalsee-student(2).png",
    videoUrl: "",
  },
  {
    title: "Ajay Chauhan",
    subtitle: "B. TECH. (Computer Science Engineering)",
    description: "KALSEE Qualified Student",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/kalsee-student(3).png",
    videoUrl: "",
  },
  {
    title: "KALSEE Student",
    subtitle: "Undergraduate Program",
    description: "Scholarship Achiever",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/kalsee-student(4).png",
    videoUrl: "",
  },
  {
    title: "KALSEE Student",
    subtitle: "Undergraduate Program",
    description: "Scholarship Achiever",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/kalsee-student(5).png",
    videoUrl: "",
  },
  {
    title: "KALSEE Student",
    subtitle: "Postgraduate Program",
    description: "Merit Based Selection",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/kalsee-student(6).png",
    videoUrl: "",
  },
  {
    title: "KALSEE Student",
    subtitle: "Postgraduate Program",
    description: "Merit Based Selection",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/kalsee-student(7).png",
    videoUrl: "",
  },
  {
    title: "KALSEE Student",
    subtitle: "UG Program",
    description: "Entrance Exam Qualifier",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/kalsee-student(8).png",
    videoUrl: "",
  },
  {
    title: "KALSEE Student",
    subtitle: "UG Program",
    description: "Entrance Exam Qualifier",
    thumbnail:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/kalsee-student(9).png",
    videoUrl: "",
  },
];

  const kifSteps = [
    {
      id: 1,
      stepNumber: "01",
      title: "Visit Admissions Portal",
      description: "",
      backDescription: "Visit https://admissions.kalingauniversity.ac.in/ to start your application process.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/exam+(2).png",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      id: 2,
      stepNumber: "02",
      title: "Apply for KALSEE Exam",
      description: "",
      backDescription: "Apply for the KALSEE Exam through the online portal.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/exam-preparation.png",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      id: 3,
      stepNumber: "03",
      title: "Fill Application Form",
      description: "",
      backDescription: "Fill out the online application form with all required details.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/exam+(3).png",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },  
    {
      id: 4,
      stepNumber: "04",
      title: "Pay Application Fees",
      description: "",
      backDescription: "Pay the application fees through the secure payment gateway.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/medical-result.png",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      id: 5,
      stepNumber: "05",
      title: "Get Login Details",
      description: "",
      backDescription: "Get login details & scheduling link within 24 hours after payment confirmation.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/college-student.png",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      id: 6,
      stepNumber: "06",
      title: "Take the CBT",
      description: "",
      backDescription: "Take the Computer-Based Test (CBT) on your scheduled date and time.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/exam+(3).png",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      id: 7,
      stepNumber: "07",
      title: "Check Results",
      description: "",
      backDescription: "Check your final results online through the admissions portal.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/medical-result.png",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      id: 8,
      stepNumber: "08",
      title: "Welcome to Kalinga University!",
      description: "",
      backDescription: "Welcome to Kalinga University! Complete your admission process and begin your academic journey.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/college-student.png",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
  ]

  const links = [
  {
    title: "Rescheduling Policy",
    description: "Rescheduling of the KALSEE exam is allowed only if requested at least 48 hours before the scheduled test.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
  },
  {
    title: "Additional Attempts",
    description: "Candidates opting for additional attempts must pay a separate examination fee.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
  },
  {
    title: "Cancellation Policy",
    description: "The examination fee once paid is non-refundable under any circumstances.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
  },
  {
    title: "Documents Required",
    description: "Candidates must carry a valid Driving License, Passport, Aadhaar Card, PAN Card, or any Government-approved Photo ID.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
  }
];

  const boxItems = [
  {
    title: "Eligibility",
    description: "Required for UG, PG, and Ph.D. Programs.",
    icon: <Image src="https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/criteria+(1).png" alt="Eligibility" width={64} height={64} className="object-contain" />
  },
  {
    title: "Mode of Examination",
    description: "Computer-Based Test (CBT).",
    icon: <Image src="https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/test.png" alt="Mode of Examination" width={64} height={64} className="object-contain" />
  },
  {
    title: "Exam Registration",
    description: "Online registration is mandatory to appear for the KALSEE exam.",
    icon: <Image src="https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/registration.png" alt="Exam Registration" width={64} height={64} className="object-contain" />
  },
  {
    title: "Exam Pattern & Duration",
    description: "MCQ-based examination. Duration is 90 minutes for UG and PG programs, and 120 minutes for Ph.D. programs.",
    icon: <Image src="https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/pattern.png" alt="Exam Pattern & Duration" width={64} height={64} className="object-contain" />
  },
  {
    title: "Total Questions",
    description: "90 questions for UG and PG programs, and 100 questions for Ph.D. programs.",
    icon: <Image src="https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/exam+(1).png" alt="Total Questions" width={64} height={64} className="object-contain" />
  },
  {
    title: "Negative Marking",
    description: "There is no negative marking in the KALSEE examination.",
    icon: <Image src="https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/exam.png" alt="Negative Marking" width={64} height={64} className="object-contain" />
  },
  {
    title: "Passing Marks",
    description: "Candidates must secure a minimum of 50% marks to qualify.",
    icon: <Image src="https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/mark.png" alt="Passing Marks" width={64} height={64} className="object-contain" />
  },
  {
    title: "Exam Fee",
    description: "India & SAARC candidates: INR 1,400 for all UG and PG courses, and INR 3,500 for Ph.D. courses.",
    icon: <Image src="https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/hand.png" alt="Exam Fee" width={64} height={64} className="object-contain" />
  },
  {
    title: "Scholarship Opportunities",
    description: "Merit-based scholarships are available for top scorers.",
    icon: <Image src="https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/scholarship.png" alt="Scholarship Opportunities" width={64} height={64} className="object-contain" />
  }
];

  return (
    <>
      <HeroSectionTwo 
        backgroundImage="https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/kalsee-banner-new.png"
        title="Your Next Big Chapter Starts With One Click"
        description="KALSEE (Kalinga University Entrance Examination) is the gateway to your academic journey at Kalinga University. This comprehensive entrance exam is designed to assess your knowledge, aptitude, and readiness for various undergraduate and postgraduate programs. Prepare yourself for success and take the first step towards a bright future."
        buttonText="Apply Now"
        buttonLink="/admissions"
        showForm={false}
        customForm={<KalseeApplicationForm />}
        subtitle="Admission Open 2026-2027"
      />
      <KalseeMilestone />
      <MainIntro
        title=" What is KALSEE?"
        description="Kalinga Scholastic Entrance Examination (KALSEE) is your gateway to book a seat in our selected course among 130+ Programs of KU. With amazing scholarships and endless career options, it’s time to make your dreams come true with one of the top private university in Chhattisgarh. "
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/kalsee/kalsee.webp"
        imageAlt="KALSEE"
      />
      <ImageListItem textClassName="hidden" listItemTextClassName="text-black"  imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/kif/kif.webp" boxItems={boxItems} title="Details of KALSEE" subtitle="About KIF" description="Kalinga Incubation Foundation (KIF) is a platform for students to incubate their ideas and turn them into reality." hideIcons={false} />
      <KalseeExamPattern />
      <QuickLinks links={links} title="Exam Policies" description="KALSEE follows comprehensive policies covering eligibility, registration, examination format, fee structure, and scholarship opportunities to ensure a fair and transparent examination process."
       textColorClassName="text-[var(--background)]" showReadMore={false}  titleClassName="text-white" gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5" />
      <AdmissionSteps
        steps={kifSteps}
     subtitleClassName="hidden"
        title="Your Step-By-Step Startup Process"
        ctaLabel="How To Apply? "
        showReadMore={true}
        showHeaderButton={false}
        showIcon={true}
        showImage={false}
        bgColor="bg-white"
      />
      <MediaCardSlider
        title="KALSEE Testimonials"
        videoItems={testimonials}
        items={testimonials}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        swiperClassName="ccrc-video-slider"
        backgroundColor="bg-[var(--light-gray)] mx-2 rounded-xl"
      />
      <FAQ title="Frequently Asked Questions" items={faqItems} />
      <AdmissionCareer />
    </>
  );
}
