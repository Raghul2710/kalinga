import HeroSectionTwo from '../components/general/hero-section-two';
import MainIntro from '../components/about/main_intro';
import MasterClassTab from '../components/ctcd/master_class_tab';
import OrganogramOfKalinga from '../components/about/organogram_of_kalinga';
import AdmissionSteps from '../components/admissions/admission-steps';
import Specialization from '../components/course/specialization';
import AdmissionCareer from '../components/general/admission_cta';
import CTCDApplicationForm from '../components/forms/CTCDApplicationForm';
import Gallery from '../components/general/gallery';
import CtcdTrainingTabs from '../components/ctcd/ctcd_training_tabs';
import CTCDConsultancyTabSection from '../components/ctcd/ctcd_consultancy_tab_section'

export default function CorporateTrainingAndConsultancyDivision() {
  const benefitsData = [
    {
      icon: "https://cdn.kalingauniversity.ac.in/icons/facility-management.svg",
      title: "Improved workflow across different departments",
      description: ""
    },
    {
      icon: "https://cdn.kalingauniversity.ac.in/icons/Career+Counseling.svg",
      title: "Better employee management with optimised HR processes",
      description: ""
    },
    {
      icon: "https://cdn.kalingauniversity.ac.in/icons/Holistic+Development.svg",
      title: "Improved performance management systems",
      description: ""
    },
    {
      icon: "https://cdn.kalingauniversity.ac.in/careers/wages.svg",
      title: "Cost-cutting and reduced wastage of resources",
      description: ""
    },
    {
      icon: "https://cdn.kalingauniversity.ac.in/admission/Value+addition.svg",
      title: "Improved efficiency in day-to-day processes",
      description: ""
    },
    {
      icon: "https://cdn.kalingauniversity.ac.in/icons/Extensive+Research+Facilities.svg",
      title: "Seamless integration of digital tools",
      description: ""
    },
    {
      icon: "https://cdn.kalingauniversity.ac.in/icons/Future+Career+Planning.svg",
      title: "Long-term growth and profitability",
      description: " "
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
  // Masterclass Activities for Tab 1 (2024-25) - 6 items
  const masterclassActivities = [
    {
      id: 1,
      imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/master-class.webp",
      imageAlt: "Grow As a Leader: A Program For First-Time Managers",
      title: "Grow As a Leader: A Program For First-Time Managers",
      description: "Resource Person: Mr. Amar Pathak",
      buttonText: "Read More",
      buttonLink: "",
      button: "true",
      date: "17.08.2024",
    },
    {
      id: 2,
      imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/master-class-2.webp",
      imageAlt: "Maximising Fund-Raising Resource For CSR",
      title: "Maximising Fund-Raising Resource For CSR",
      description: "Resource Person: Prof. Sanjay Vanani",
      buttonText: "Read More",
      buttonLink: "",
      button: "true",
      date: "19.10.2024",
    },
    {
      id: 3,
      imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/masterclass-3.webp",
      imageAlt: "Crack The Code: Gen Z Connection Guide For Teachers and Parents",
      title: "Crack The Code: Gen Z Connection Guide For Teachers and Parents",
      description: "Resource Person: Dr. Sunayna Shukla",
      buttonText: "Read More",
      buttonLink: "",
      button: "true",
      date: "21.12.2024",
    },
    {
      id: 4,
      imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/masterclass-4.webp",
      imageAlt: "AI-Driven Benefits for Manufacturing & Operations",
      title: "AI-Driven Benefits for Manufacturing & Operations",
      description: "Resource Person: Ms. Rajashree Rajadhya",
      buttonText: "Read More",
      buttonLink: "",
      button: "true",
      date: "08.03.2025",
    },
    {
      id: 5,
      imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/masterclass-5.webp",
      imageAlt: "HR Analytics: Leveraging AI & Data for Strategic HR",
      title: "HR Analytics: Leveraging AI & Data for Strategic HR",
      description: "Resource Person: Saurabh Saxena",
      buttonText: "Read More",
      buttonLink: "",
      button: "true",
      date: "03.05.2025",
    },
    {
      id: 6,
      imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/masterclass-6.webp",
      imageAlt: "Master Your Market: Sales, Marketing & Negotiating Strategies",
      title: "Master Your Market: Sales, Marketing & Negotiating Strategies",
      description: "Resource Person: Meenakshi Ravi Shankar",
      buttonText: "Read More",
      buttonLink: "",
      button: "true",
      date: "26.07.2025",
    },
  ];

  // Masterclass Activities for Tab 2 (2025-26) - 4 items
  const masterclassActivities2 = [
    {
      id: 1,
      imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/annual-5.webp",
      imageAlt: "Operational Excellence with Six Sigma: Driving Productivity & Cost Efficiency",
      title: "Operational Excellence with Six Sigma: Driving Productivity & Cost Efficiency",
      description: "",
      buttonText: "",
      buttonLink: "",
      button: "false",
      date: "November 2025",
    },
    {
      id: 2,
      imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/annual-6.webp",
      imageAlt: "HR in the Age of AI: Reimagining People, Performance & Potential",
      title: "HR in the Age of AI: Reimagining People, Performance & Potential",
      description: "",
      buttonText: "",
      buttonLink: "",
      button: "false",
      date: "January 2026",
    },
    {
      id: 3,
      imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/annual-7.webp",
      imageAlt: "Sustainable Industry Practices: Green Technologies & Compliance",
      title: "Sustainable Industry Practices: Green Technologies & Compliance",
      description: "",
      buttonText: "",
      buttonLink: "",
      button: "false",
      date: "March 2026",
    },
    {
      id: 4,
      imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/annual-8.webp",
      title: "Future-Ready Classrooms: AI & Digital Tools in Education and Beyond",
      description: "",
      buttonText: "",
      buttonLink: "",
      button: "false",
      date: "April 2026",
    },
    {
      id: 5,
      imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/annual-9.webp",
      imageAlt: "AI & Data for Industrial Efficiency: From Buzzword to Business Value",
      title: "AI & Data for Industrial Efficiency: From Buzzword to Business Value",
      description: "",
      buttonText: "",
      buttonLink: "",
      button: "false",
      date: "June 2026",
    },
    {
      id: 6,
      imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/annual-10.webp",
      imageAlt: "Life Skills & Emotional Intelligence for the 21st Century Professional",
      title: "Life Skills & Emotional Intelligence for the 21st Century Professional",
      description: "",
      buttonText: "",
      buttonLink: "",
      button: "false",
      date: "August 2026",
    },
  ];
  // Gallery Images for Tab 1 (2024-25) - 3 images
  const galleryImages = [
    {
      id: 1,
      image: "https://cdn.kalingauniversity.ac.in/ctcd/chart+(1).webp",
      alt: "Masterclass 2024-25 Glimpse 1"
    },
    {
      id: 2,
      image: "https://cdn.kalingauniversity.ac.in/ctcd/masterclass-7.webp",
      alt: "Masterclass 2024-25 Glimpse 4"
    },
    {
      id: 3,
      image: "https://cdn.kalingauniversity.ac.in/ctcd/masterclass-8.webp",
      alt: "Masterclass 2024-25 Glimpse 5"
    },
    {
      id: 4,
      image: "https://cdn.kalingauniversity.ac.in/ctcd/masterclass-9.webp",
      alt: "Masterclass 2024-25 Glimpse 6"
    },
    {
      id: 5,
      image: "https://cdn.kalingauniversity.ac.in/ctcd/masterclass-10.webp",
      alt: "Masterclass 2024-25 Glimpse 7"
    },
    {
      id: 6,
      image: "https://cdn.kalingauniversity.ac.in/ctcd/chart+(14).webp",
      alt: "Masterclass 2024-25 Glimpse 8"
    },
    {
      id: 7,
      image: "https://cdn.kalingauniversity.ac.in/ctcd/chart+(15).webp",
      alt: "Masterclass 2024-25 Glimpse 9"
    },
  ];

  // Gallery Images for Tab 2 (2025-26) - 4 images
  const galleryImages2 = [
    {
      id: 1,
      image: "https://cdn.kalingauniversity.ac.in/ctcd/annual-1.png",
      alt: "Masterclass 2025-26 Glimpse 1"
    },
    {
      id: 2,
      image: "https://cdn.kalingauniversity.ac.in/ctcd/annual-2.webp",
      alt: "Masterclass 2025-26 Glimpse 2"
    },
    {
      id: 3,
      image: "https://cdn.kalingauniversity.ac.in/ctcd/annual-3.webp",
      alt: "Masterclass 2025-26 Glimpse 3"
    },
    {
      id: 4,
      image: "https://cdn.kalingauniversity.ac.in/ctcd/annual-4.webp",
      alt: "Masterclass 2025-26 Glimpse 4"
    },
    {
      id: 1,
      image: "https://cdn.kalingauniversity.ac.in/ctcd/chart+(11).webp",
      alt: "Masterclass 2025-26 Glimpse 5"
    },
    {
      id: 2,
      image: "https://cdn.kalingauniversity.ac.in/ctcd/chart+(12).webp",
      alt: "Masterclass 2025-26 Glimpse 6"
    },
    {
      id: 7,
      image: "https://cdn.kalingauniversity.ac.in/ctcd/chart+(13).webp",
      alt: "Masterclass 2025-26 Glimpse 7"
    },
  ];

  return (
    <>
      <HeroSectionTwo
        showBlackOverlay={true}
        titleTextColor="text-white"
        subtitleTextColor="text-white"
        subtitle=""
        hideBorder={true}
        subtitleImage="https://cdn.kalingauniversity.ac.in/ccrc/logo-ctcd.svg"
        subtitleImageAlt="CTCD Logo"
        customForm={<CTCDApplicationForm />}
        showButton={false}
      />
      <div id="ctcd-main-intro">
        <MainIntro
          title="Corporate Training and Consultancy Division (CTCD)"
          description={[
            "Due to increasing competition in the domestic and international markets, political influence, and technological advancements, organisations find it difficult to compete in the marketplace. Corporate Training and Consultancy Division (CTCD) at Kalinga helps businesses effectively utilise their most valuable asset, i.e., THEIR PEOPLE.",
            "We offer training programs and provide one-on-one consultancy services to corporate employees using experiential methods at their location, at our campus, or through online mode, helping them upgrade their skills, boost morale, and improve productivity. Our team continuously researches and stays updated with the latest concepts and trends to provide valuable solutions to organisations. Through our soft skills, technical skills, and compliance training, they become ready to face any challenge and stand out in the workplace."
          ]}
          points={[
            "To align training programs with business needs",
            "To measure the impact of training through Key Result Areas (KRAs) and business metrics",
            "To develop core competencies among employees",
            "To measure the effectiveness of training through employees' performance evaluation and business results",
            "To use the Phase-Wise training approach for continuous performance improvement"
          ]}
          imageUrl="https://cdn.kalingauniversity.ac.in/csr/csr-intro.png"
          imageAlt="CTCD"
          initialVisibleParagraphs={1}
          hidePointsUntilExpanded={true}

        />
      </div>
      <CtcdTrainingTabs />
      <MasterClassTab
        tab1Activities={masterclassActivities}
        tab1Gallery={galleryImages}
        tab1GalleryTitle="Glimpses"
        tab2Activities={masterclassActivities2}
        tab2Gallery={galleryImages2}
        tab2GalleryTitle="Glimpses"
        tab2GalleryclassName="mt-10"
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
      <div className="container mx-auto px-4 mt-16 mb-16">
        <h2 className="font-stix text-center mb-8">Benefits for Organisations</h2>
        <Specialization cards={benefitsData} />
      </div>
      <MainIntro
        title="Training Benefits"
        description={[
          "Training and development programs are a top priority in companies as they aim to maximise profit by eliminating low-productive tasks. But, how do they do it in the right direction?",
          "Well, Kalinga's CTCD team uses effective training methods and trains employees to stay productive, motivated, and improve soft and cognitive skills."
        ]}
        points={[
          "Customised training programs",
          "Improved problem-solving and Decision-Making Skills",
          "Bridge skills gaps",
          "Aligns employees' goals with organisational objectives",
          "Improved employees' performance",
          "Flexibility in timings and location (Online, In-Person, and Hybrid)",
          "Access to the latest training technologies",
          "Improved employee engagement and morale",
          "Increased innovation and adaptability",
          "Development of future leaders",
          "Boosts employees' retention",
          "Improves workforce competitiveness"
        ]}
        imageUrl="https://cdn.kalingauniversity.ac.in/ctcd/ctcd-meeting.jpg"
        imageAlt="CTCD"
        initialVisibleParagraphs={2}
        hidePointsUntilExpanded={true}
        showKnowMore={true}
      />
      <OrganogramOfKalinga
        title="Consultancy Services"
        description={[
          "Our consultancy services are designed to transform organisations to reach their maximum potential. Our experts conduct one-on-one discussions with team members of companies and develop strategies that improve their organisations' workflows, HR processes, and performance management systems. ",
          "More specifically, we assist them in talent management, digital integration, and workforce planning; every approach ensures improved productivity and employee engagement. We help them make SMARTER decisions with proper resource planning and integration, enabling them to grow with a clear roadmap"
        ]}
        buttonLabel="Explore Now"
        href="#ctcd-consultancy-tab-section"
        cardBackgroundColor="bg-[var(--dark-blue)]"
        useContainer={true}
      />
      <CTCDConsultancyTabSection />

      <OrganogramOfKalinga

        title="Download Brochure 2025-26"
        description="Download our comprehensive Corporate Training and Consultancy Division (CTCD) brochure to explore our training programs, consultancy services, masterclasses, and how we can help your organization enhance employee skills, boost productivity, and achieve business excellence through customized training solutions."
        buttonLabel="Explore Now"
        href="https://cdn.kalingauniversity.ac.in/ctcd/CTCD+-+Corporate+Training+and+Consultancy+Division_compressed+(1).pdf"
        cardBackgroundColor="bg-[var(--button-red)]"
        useContainer={true}
      />
      <AdmissionCareer />
    </>
  );
}