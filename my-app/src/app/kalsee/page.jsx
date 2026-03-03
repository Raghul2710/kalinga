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
        "Firstly, you need to clear all your concepts till class 12th, and secondly, solve some sample papers and MCQs related to all 4 subjects by referring to the books of reputed publishers.",
    },
    {
      question: "What time management strategies can I follow during the exam?",
      answer: [
        "Focus on solving easier questions first. ",
        "Avoid spending too much time on any question. ",
        "Allot time for each section.",
      ],
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
      name: "Syedzaid Mohammad",
      title: "Syedzaid Mohammad",
      subtitle: "B. TECH. (Computer Science Engineering)",
      description: "Score: 81",
      thumbnail:
        "https://cdn.kalingauniversity.ac.in/kalsee/kalsee-student(1).png",
      videoUrl: "", // keep empty if no video
    },
    {
      name: "Vishal Kumar Mandal",
      title: "Vishal Kumar Mandal",
      subtitle: "B. TECH. CS - AIML with IBM",
      description: "Score: 81",
      thumbnail:
        "https://cdn.kalingauniversity.ac.in/kalsee/kalsee-student(2).png",
      videoUrl: "",
    },
    {
      name: "Ajay Chauhan",
      title: "Ajay Chauhan",
      subtitle: "B. TECH. (Computer Science Engineering)",
      description: "Score: 80",
      thumbnail:
        "https://cdn.kalingauniversity.ac.in/kalsee/kalsee-student(3).png",
      videoUrl: "",
    },
    {
      name: "Chintu Maurya",
      title: "Chintu Maurya",
      subtitle: "B. TECH. (Computer Science Engineering)",
      description: "Score: 81",
      thumbnail:
        "https://cdn.kalingauniversity.ac.in/kalsee/kalsee-student(4).png",
      videoUrl: "",
    },
    {
      name: "Govind Kumar",
      title: "Govind Kumar",
      subtitle: "B. TECH. (Computer Science Engineering)",
      description: "Score: 80",
      thumbnail:
        "https://cdn.kalingauniversity.ac.in/kalsee/kalsee-student(5).png",
      videoUrl: "",
    },
    {
      name: "Kajal Kumari",
      title: "Kajal Kumari",
      subtitle: "B. TECH. LATERAL ENTRY (Computer Science Engineering)",
      description: "Score: 80",
      thumbnail:
        "https://cdn.kalingauniversity.ac.in/kalsee/kalsee-student(6).png",
      videoUrl: "",
    },
    {
      name: "Mahesh Verma",
      title: "Mahesh Verma",
      subtitle: "B. TECH. CS - AIML WITH IBM",
      description: "Score: 81",
      thumbnail:
        "https://cdn.kalingauniversity.ac.in/kalsee/kalsee-student(7).png",
      videoUrl: "",
    },
    {
      name: "Pankaj Kumar Sahu",
      title: "Pankaj Kumar Sahu",
      subtitle: "B. TECH. (Computer Science Engineering)",
      description: "Score: 81",
      thumbnail:
        "https://cdn.kalingauniversity.ac.in/kalsee/kalsee-student(8).png",
      videoUrl: "",
    },
    {
      name: "Sudhir Kushwaha",
      title: "Sudhir Kushwaha",
      subtitle: "B. TECH. (Computer Science Engineering)",
      description: "Score: 80",
      thumbnail:
        "https://cdn.kalingauniversity.ac.in/kalsee/kalsee-student(9).png",
      videoUrl: "",
    },
  ];

  const kifSteps = [
    {
      id: 1,
      stepNumber: "01",
      title: "Step 1: Visit & Apply",
      description: "",
      backDescription: "Visit https://admissions.kalingauniversity.ac.in/ and apply for the KALSEE Exam.",
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
      title: "Rescheduling Policy",
      description: "Rescheduling of the KALSEE exam is allowed only if requested at least 48 hours before the scheduled test.",
      image: "https://cdn.kalingauniversity.ac.in/entrance-exam/entrance-exam-banner.webp"
    },
    {
      title: "Additional Attempts",
      description: "Candidates opting for additional attempts must pay a separate examination fee.",
      image: "https://cdn.kalingauniversity.ac.in/entrance-exam/entrance-exam-banner.webp"
    },
    {
      title: "Cancellation Policy",
      description: "The examination fee once paid is non-refundable under any circumstances.",
      image: "https://cdn.kalingauniversity.ac.in/entrance-exam/entrance-exam-banner.webp"
    },
    {
      title: "Documents Required",
      description: "Candidates must carry a valid Driving License, Passport, Aadhaar Card, PAN Card, or any Government-approved Photo ID.",
      image: "https://cdn.kalingauniversity.ac.in/entrance-exam/entrance-exam-banner.webp"
    }
  ];

  const boxItems = [
    {
      title: "Eligibility",
      description: "Required for UG, PG, and Ph.D. Programs.",
      icon: <Image src="https://cdn.kalingauniversity.ac.in/kalsee/criteria+(1).png" alt="Eligibility" width={64} height={64} className="object-contain" />
    },
    {
      title: "Mode of Examination",
      description: "Computer-Based Test (CBT).",
      icon: <Image src="https://cdn.kalingauniversity.ac.in/kalsee/test.png" alt="Mode of Examination" width={64} height={64} className="object-contain" />
    },
    {
      title: "Exam Registration",
      description: "Online registration is mandatory to appear for the KALSEE exam.",
      icon: <Image src="https://cdn.kalingauniversity.ac.in/kalsee/registration.png" alt="Exam Registration" width={64} height={64} className="object-contain" />
    },
    {
      title: "Exam Pattern & Duration",
      description: "MCQ-based examination. Duration is 90 minutes for UG and PG programs, and 120 minutes for Ph.D. programs.",
      icon: <Image src="https://cdn.kalingauniversity.ac.in/kalsee/pattern.png" alt="Exam Pattern & Duration" width={64} height={64} className="object-contain" />
    },
    {
      title: "Total Questions",
      description: "90 questions for UG and PG programs, and 100 questions for Ph.D. programs.",
      icon: <Image src="https://cdn.kalingauniversity.ac.in/kalsee/exam+(1).png" alt="Total Questions" width={64} height={64} className="object-contain" />
    },
    {
      title: "Negative Marking",
      description: "There is no negative marking in the KALSEE examination.",
      icon: <Image src="https://cdn.kalingauniversity.ac.in/kalsee/exam.png" alt="Negative Marking" width={64} height={64} className="object-contain" />
    },
    {
      title: "Passing Marks",
      description: "Candidates must secure a minimum of 50% marks to qualify.",
      icon: <Image src="https://cdn.kalingauniversity.ac.in/kalsee/mark.png" alt="Passing Marks" width={64} height={64} className="object-contain" />
    },
    {
      title: "Exam Fee",
      description: "India & SAARC candidates: INR 1,400 for all UG and PG courses, and INR 3,500 for Ph.D. courses.",
      icon: <Image src="https://cdn.kalingauniversity.ac.in/kalsee/hand.png" alt="Exam Fee" width={64} height={64} className="object-contain" />
    },
    {
      title: "Scholarship Opportunities",
      description: "Merit-based scholarships are available for top scorers.",
      icon: <Image src="https://cdn.kalingauniversity.ac.in/kalsee/scholarship.png" alt="Scholarship Opportunities" width={64} height={64} className="object-contain" />
    }
  ];

  return (
    <>
      <HeroSectionTwo
        id="kalsee-application-form"
        backgroundImage="https://cdn.kalingauniversity.ac.in/kalsee/kalsee-banner-new.png"
        title="One Entrance Exam Opens Door To 130+ Programs"
        description="KALSEE (Kalinga University Entrance Examination) is the gateway to your academic journey at Kalinga University. This comprehensive entrance exam is designed to assess your knowledge, aptitude, and readiness for various undergraduate and postgraduate programs. Prepare yourself for success and take the first step towards a bright future."
        buttonText="Apply Now"
        buttonLink="/admissions"
        showForm={false}
        customForm={<KalseeApplicationForm />}
        subtitle="KALSEE - Entrance Exam [2026-27]"
      />
      <KalseeMilestone />
      <MainIntro
        title="Kalinga Scholastic Entrance Examination [KALSEE]"
        description="KALSEE is your gateway to secure a seat in a selected program among 130+ academic programs at KU. With amazing scholarships and endless career options, it’s time to make your dreams come true with one of the top private university in Chhattisgarh. "
        imageUrl="https://cdn.kalingauniversity.ac.in/kalsee/kalsee.webp"
        imageAlt="KALSEE"
      />
      <ImageListItem textClassName="hidden" listItemTextClassName="text-black" imageSrc="https://cdn.kalingauniversity.ac.in/ccrc/kif/kif.webp" boxItems={boxItems} title="Details of KALSEE" subtitle="About KIF" description="Kalinga Incubation Foundation (KIF) is a platform for students to incubate their ideas and turn them into reality." hideIcons={false} />
      <KalseeExamPattern />
      <QuickLinks links={links} title="Exam Policies" description="KALSEE follows comprehensive policies covering eligibility, registration, examination format, fee structure, and scholarship opportunities to ensure a fair and transparent examination process."
        textColorClassName="text-[var(--background)]" showReadMore={false} titleClassName="text-white" gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5" />
      <AdmissionSteps
        steps={kifSteps}
        subtitleClassName="hidden"
        title="Your Step-By-Step Admission Process"
        ctaLabel="How To Apply? "
        showReadMore={true}
        showHeaderButton={false}
        showIcon={true}
        showImage={false}
        bgColor="bg-white"
        firstCardScrollTarget="kalsee-application-form"
      />
      <MediaCardSlider
        title="High Scorers Of KALSEE"
        description="Introducing our KALSEE achievers whose top scores turned into a bright future. "
        videoItems={testimonials}
        items={testimonials}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        swiperClassName="ccrc-video-slider"
        backgroundColor="bg-[var(--light-gray)] mx-2 rounded-xl"
      />
      <FAQ title="Frequently Asked Questions"
        subtitle=""
        items={faqItems} />
      <AdmissionCareer />
    </>
  );
}
