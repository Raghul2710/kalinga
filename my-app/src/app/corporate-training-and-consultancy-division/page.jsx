import HeroSectionTwo from '../components/general/hero-section-two';
import MainIntro from '../components/about/main_intro';
import MasterClassTab from '../components/ctcd/master_class_tab';
import OrganogramOfKalinga from '../components/about/organogram_of_kalinga';
import AdmissionSteps from '../components/admissions/admission-steps';
import ImageListItem from '../components/ccrc/imagelistitem';
import AdmissionCareer from '../components/general/admission_cta';
import CareerApplicationForm from '../components/careers/CareerApplicationForm';
import Gallery from '../components/general/gallery';
import CtcdTrainingTabs from '../components/ctcd/ctcd_training_tabs';

export default function CorporateTrainingAndConsultancyDivision() {
  const Items = [
    {
      id: 1,
      text: "Improved performance and output"
    },
    {
      id: 2,
      text: "Better decision-making"
    },
    {
      id: 3,
      text: "Enhanced employee engagement rate"
    },
    {
      id: 4,
      text: "Increased competitiveness"
    },
    {
      id: 5,
      text: "Improved leadership and team collaboration"
    },
    {
      id: 6,
      text: "Improved client/customer satisfaction"
    },
    {
      id: 7,
      text: "Stronger work culture and long-term profitability"
    },
  ];
  const admissionSteps = [
    {
      id: 1,
      stepNumber: "01",
      title: "Step 1",
      description: "Understanding Organisational Objectives",
      backDescription: "Understanding Organisational Objectives",
    },
    {
      id: 2,
      stepNumber: "02",
      title: "Step 2",
      description: "Conducting Assessments",
      backDescription: "Conducting Assessments",
    },
    {
      id: 3,
      stepNumber: "03",
      title: "Step 3",
      description: "Identifying Training Needs",
      backDescription: "Identifying Training Needs",
    },
    {
      id: 4,
      stepNumber: "04",
      title: "Step 4",
      description: "Mapping Training to Roles",
      backDescription: "Mapping Training to Roles",
    },
    {
      id: 5,
      stepNumber: "05",
      title: "Step 5",
      description: "Delivering Training and Monitoring Quality",
      backDescription: "Delivering Training and Monitoring Quality",
    },
    {
      id: 6,
      stepNumber: "06",
      title: "Step 6",
      description: "Developing Content and Methodology",
      backDescription: "Developing Content and Methodology",
    },
    {
      id: 7,
      stepNumber: "07",
      title: "Step 7",
      description: "Gathering Feedback and Analysing Results",
      backDescription: "Gathering Feedback and Analysing Results",
    },
    {
      id: 8,
      stepNumber: "08",
      title: "Step 8",
      description: "Follow-Up and Refresher Sessions",
      backDescription: "Follow-Up and Refresher Sessions",
    },
  ];
  // Masterclass Activities for Tab 1 (2024-25) - 10 items
  const masterclassActivities = [
    {
      id: 1,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/master-class.webp",
      imageAlt: "Grow As a Leader: A Program For First-Time Managers",
      title: "Resource Person: Mr. Amar Pathak",
      description: "",
      buttonText: "Read More",
      date: "17.08.2024",
    },
    {
      id: 2,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/master-class-2.webp",
      imageAlt: "Maximising Fund-Raising Resource For CSR",
      title: "Resource Person: Prof. Sanjay Vanani",
      description: "",
      buttonText: "Read More",
      date: "19.10.2024",
    },
    {
      id: 3,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/masterclass-3.webp",
      imageAlt: "Crack The Code: Gen Z Connection Guide For Teachers and Parents",
      title: "Resource Person: Dr. Sunayna Shukla",
      description: "",
      buttonText: "Read More",
      date: "21.12.2024",
    },
    {
      id: 4,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/masterclass-4.webp",
      imageAlt: "AI-Driven Benefits for Manufacturing & Operations",
      title: "Resource Person: Ms. Rajashree Rajadhya",
      description: "",
      buttonText: "Read More",
      date: "08.03.2025",
    },
    {
      id: 5,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/masterclass-5.webp",
      imageAlt: "HR Analytics: Leveraging AI & Data for Strategic HR",
      title: "Resource Person: Saurabh Saxena",
      description: "",
      buttonText: "Read More",
      date: "03.05.2025",
    },
    {
      id: 6,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/masterclass-6.webp",
      imageAlt: "Master Your Market: Sales, Marketing & Negotiating Strategies",
      title: "Resource Person: Ms. Rajashree Rajadhya",
      description: "",
      buttonText: "Read More",
      date: "26.07.2025",
    },
  ];

  // Masterclass Activities for Tab 2 (2025-26) - 4 items
  const masterclassActivities2 = [
    {
      id: 1,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/annual-5.webp",
      imageAlt: "Operational Excellence with Six Sigma: Driving Productivity & Cost Efficiency",
      title: "Operational Excellence with Six Sigma: Driving Productivity & Cost Efficiency",
      description: "",
      buttonText: "Read More",
      date: "November 2025",
    },
    {
      id: 2,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/annual-6.webp",
      imageAlt: "HR in the Age of AI: Reimagining People, Performance & Potential",
      title: "HR in the Age of AI: Reimagining People, Performance & Potential",
      description: "",
      buttonText: "Read More",
      date: "January 2026",
    },
    {
      id: 3,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/annual-7.webp",
      imageAlt: "Sustainable Industry Practices: Green Technologies & Compliance",
      title: "Sustainable Industry Practices: Green Technologies & Compliance",
      description: "",
      buttonText: "Read More",
      date: "March 2026",
    },
    {
      id: 4,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/annual-8.webp",
      imageAlt: "Future-Ready Classrooms: AI & Digital Tools in Education and Beyond",
      title: "Future-Ready Classrooms: AI & Digital Tools in Education and Beyond",
      description: "",
      buttonText: "Read More",
      date: "April 2026",
    },
    {
      id: 5,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/annual-9.webp",
      imageAlt: "AI & Data for Industrial Efficiency: From Buzzword to Business Value",
      title: "AI & Data for Industrial Efficiency: From Buzzword to Business Value",
      description: "",
      buttonText: "Read More",
      date: "June 2026",
    },
    {
      id: 6,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/annual-10.webp",
      imageAlt: "Life Skills & Emotional Intelligence for the 21st Century Professional",
      title: "Life Skills & Emotional Intelligence for the 21st Century Professional",
      description: "",
      buttonText: "Read More",
      date: "August 2026",
    },
  ];
  // Gallery Images for Tab 1 (2024-25) - 3 images
  const galleryImages = [
    {
      id: 2,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/masterclass-7.webp",
      alt: "Masterclass 2024-25 Glimpse 4"
    },
    {
      id: 3,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/masterclass-8.webp",
      alt: "Masterclass 2024-25 Glimpse 5"
    },
    {
      id: 4,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/masterclass-9.webp",
      alt: "Masterclass 2024-25 Glimpse 6"
    },
    {
      id: 5,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/masterclass-10.webp",
      alt: "Masterclass 2024-25 Glimpse 7"
    },
  ];

  // Gallery Images for Tab 2 (2025-26) - 4 images
  const galleryImages2 = [
    {
      id: 1,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/annual-1.png",
      alt: "Masterclass 2025-26 Glimpse 1"
    },
    {
      id: 2,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/annual-2.webp",
      alt: "Masterclass 2025-26 Glimpse 2"
    },
    {
      id: 3,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/annual-3.webp",
      alt: "Masterclass 2025-26 Glimpse 3"
    },
    {
      id: 4,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/annual-4.webp",
      alt: "Masterclass 2025-26 Glimpse 4"
    },
  ];

  return (
    <>
      <HeroSectionTwo />
      <MainIntro 
        title="Corporate Training And Consultancy Division (CTCD)"
        description={[
          "We offer training programs and provide one-on-one consultancy services to corporate employees using experiential methods at their location, at our campus, or through online mode, helping them upgrade their skills, boost morale, and improve productivity.",
          "Our team continuously researches and stays updated with the latest concepts and trends to provide valuable solutions to organisations. Through our soft skills, technical skills, and compliance training, they become ready to face any challenge and stand out in the workplace."
        ]}
        points={[
          "To align training programs with business needs",
          "To measure the impact of training through Key Result Areas (KRAs) and business metrics",
          "To develop core competencies among employees",
          "To measure the effectiveness of training through employees' performance evaluation and business results",
          "To use the Phase-Wise training approach for continuous performance improvement"
        ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/csr/csr-intro.png"
        imageAlt="CTCD"
        initialVisibleParagraphs={1}
        hidePointsUntilExpanded={true}
      />
      <CtcdTrainingTabs />
      <MasterClassTab
        tab1Activities={masterclassActivities}
        tab1Gallery={galleryImages}
        tab1GalleryTitle="Annual Masterclass 2024-25 Glimpse"
        tab2Activities={masterclassActivities2}
        tab2Gallery={galleryImages2}
        tab2GalleryTitle="Annual Masterclass Calendar 2025-26 Glimpse"
      />
      <OrganogramOfKalinga 
        title="Organogram of CTCD"
        description={[
          "Our consultancy services are designed to transform organisations to reach their maximum potential. Our experts conduct one-on-one discussions with team members of companies and develop strategies that improve their organisations' workflows, HR processes, and performance management systems. ",
          "More specifically, we assist them in talent management, digital integration, and workforce planning; every approach ensures improved productivity and employee engagement. We help them make SMARTER decisions with proper resource planning and integration, enabling them to grow with a clear roadmap"
        ]}
        buttonLabel="Explore Now"
        href="/ctcd-organogram"
        cardBackgroundColor="bg-[var(--dark-blue)]"
        useContainer = {true}
      />
      <AdmissionSteps 
        title="Our Training Cycle"
        subtitle=""
        steps={admissionSteps}
        bgColor="bg-[var(--background)]"
        showReadMore={false}
        showIcon={false}
        showHeaderButton={false}
        itemsAlignment="center"
      />
      <ImageListItem items={Items} imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/kif/kif.webp" title="Benefits for Organisations"  />
      <MainIntro 
        title="Training Benefits"
        description={[
          "Training and development programs are a top priority in companies as they aim to maximise profit by eliminating low-productive tasks. But, how do they do it in the right direction?",
          "Well, Kalinga's CTCD team uses effective training methods and trains employees to stay productive, motivated, and improve soft and cognitive skills."
        ]}
        points={[
          "Enhancing employee skills through targeted training programs aligned with industry needs",
          "Providing strategic consultancy services to help organizations navigate complex business challenges",
          "Developing customized training modules tailored to specific organizational requirements",
          "Fostering innovation and continuous learning culture within corporate environments",
          "Building strong partnerships with industry leaders to deliver world-class training solutions"
        ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd-meeting.jpg"
        imageAlt="CTCD"
        initialVisibleParagraphs={1}
        hidePointsUntilExpanded={true}
      />
      <OrganogramOfKalinga 
      
        title="Download Brochure 2025-26"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonLabel="Explore Now"
        href="https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/CTCD+-+Corporate+Training+and+Consultancy+Division_compressed+(1).pdf"
        cardBackgroundColor="bg-[var(--button-red)]"
        useContainer = {true}
      />
      <CareerApplicationForm
          heading="CTCD Application Form"
          description="Share your details to stay connected with Kalinga University, receive updates, and participate in alumni activities and events."
          backgroundClass="bg-[var(--dark-blue)]"
          hideTabs={true}
          submitLabel="Submit Alumni Details"
          useArrowSubmitButton={true}
          arrowSubmitVariant="white"
        />  
        <Gallery />
      <AdmissionCareer />
    </>
  );
}