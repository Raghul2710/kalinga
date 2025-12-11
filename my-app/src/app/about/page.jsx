import AboutHero from "../components/about/AboutHero";
import MainIntro from "../components/about/main_intro";
import VisionMission from "../components/about/vision-mission";
import WhoWeAre from "../components/about/who_we_are";
import OurJourney from "../components/about/our_journey";
import CenterOfExcellence from "../components/about/center_of_excellence";
import Leadership from "../components/about/leadership";
import Facility from "../components/admissions/facility";
import AccreditationRanking from "../components/home/AccreditationRanking";
import OrganogramOfKalinga from "../components/about/organogram_of_kalinga";
import AdmissionCareer from "../components/general/admission_cta";
import FeatureCards from "../components/home/featurecard";
import GlobalPresence from "../components/home/global_presence";
import AwardsScrollbar from "../components/home/awards-scrollbar";

const aboutFeatureCards = [
  {
    id: 1,
    title: 'Global Exposure',
    body: 'Our students are from 29+ nationalities, which opens doors to experiencing a diverse student community. Here you’ll not just study but collaborate, make new connections, learn new languages, participate in multi-cultural programs, and grow together.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Global.svg',
    variant: 'gray',
  },
  {
    id: 2,
    title: 'Vibrant Campus Life',
    body: 'Luscious gardens, lively events, and a dynamic student community will make your college life experience truly unforgettable.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/campus+life.svg',
    variant: 'amber',
  },
  {
    id: 3,
    title: 'Career Counseling',
    body: 'Our primary aim is to navigate your journey towards the right direction by providing career guidance and support at every step until you land your dream job.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Career+Counseling.svg',
    variant: 'gray',
  },
  {
    id: 4,
    title: 'Choose From a Wide Range Of Programs',
    body: 'Our 130+ programs are designed to provide industry-relevant knowledge and make you job-ready. From Computer Science to Pharmacy, choose from unlimited career opportunities.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Wide+Range+of+Programs.svg',
    variant: 'amber',
  },
  {
    id: 5,
    title: 'Abundant Scholarships',
    body: 'We offer up to 100% merit-based scholarships, social scholarships, entrance exam scholarships, sports scholarships, culture & achievers scholarships, and much more.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Abundant+Scholarships.svg',
    variant: 'gray',
  },
  {
    id: 6,
    title: 'Industry-Relevant Curriculum',
    body: 'Our curriculum is aligned with the New Education Policy 2020. All our educational programs match industry standards that equip our students with essential practical skills and updated industrial knowledge.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Industry-Relevant+Curriculum.svg',
    variant: 'amber',
  },
  {
    id: 7,
    title: 'Holistic Development',
    body: 'Our primary goal is to make our students well-rounded in their academic journey. By nurturing their minds, they become confident to make the best decisions in life.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Holistic+Development.svg',
    variant: 'gray',
  },
  {
    id: 8,
    title: 'Extensive Research Facilities',
    body: 'With 90+ labs, including IT Labs and CIF labs, we’re Chhattisgarh’s No. 1 institute, committed to innovation and groundbreaking research facilities.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Extensive+Research+Facilities.svg',
    variant: 'amber',
  },
  {
    id: 9,
    title: 'Experienced Faculties',
    body: 'Learn from highly experienced professors of KU who are from across India and abroad. Their expertise helps students become future leaders.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Experienced+Faculties.svg',
    variant: 'gray',
  },
  {
    id: 10,
    title: 'Our Flagship Events',
    body: 'Every year, we organise memorable events and competitions where students showcase their creativity and talent and win amazing prizes.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Flagship+Events.svg',
    variant: 'amber',
  },
  {
    id: 11,
    title: 'Internships & Industrial Visits',
    body: 'All Kalinga University students are provided with internship opportunities and are encouraged to work on practical projects and visit industrial sites.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/international.svg',
    variant: 'gray',
  },
  {
    id: 12,
    title: 'Improve Employability',
    body: 'Beyond textbook knowledge, KU teaches communication skills, leadership qualities, problem-solving abilities, time management, critical thinking, emotional intelligence, teamwork, and much more.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/100%25+Automation.svg',
    variant: 'amber',
  },
  {
    id: 13,
    title: 'Campus Placement Drives',
    body: 'With 400+ recruitment partners, we offer placement opportunities to students in our campus drives so they can secure their dream job.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/placements.svg',
    variant: 'gray',
  },
  {
    id: 14,
    title: 'Networking Opportunities',
    body: 'Connect with industry leaders, alumni, and working professionals through workshops, seminars, national and international conferences, and future-proof your career.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/networking.svg',
    variant: 'amber',
  },
  {
    id: 15,
    title: 'Cultural Celebrations',
    body: 'Become a part of a campus that celebrates both National and International events with cultural fests, concerts, talent shows, sports day, Kalinga Utsav, and open mic competitions.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/cultural.svg',
    variant: 'gray',
  },
  {
    id: 16,
    title: 'Community Services',
    body: 'Join our NCC and NSS team and become a part of a community that serves the nation while you grow as a socially responsible citizen.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Community+Services.svg',
    variant: 'amber',
  },
  {
    id: 17,
    title: 'Educational Tours',
    body: 'From visiting top industries across India to exploring mega-infrastructure in Dubai, our educational tours provide fun learning experiences with more exciting tours planned.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Educational+Tours.svg',
    variant: 'gray',
  },
  {
    id: 18,
    title: 'Mentor-Mentee System',
    body: 'We establish one-on-one connections with every student so that issues can be identified and solved early, helping students excel personally and academically.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Mentor-Mentee+System.svg',
    variant: 'amber',
  },
  {
    id: 19,
    title: 'Emotional Well-Being',
    body: 'To cope with academic stress, mental health issues, or social anxiety, we organise well-being programs tailored to student needs so their voices are heard and acted upon.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Emotional+Well-Being.svg',
    variant: 'gray',
  },
  {
    id: 20,
    title: '100% Automation',
    body: 'Get a seamless digital experience through our student ERP system for admissions, academics, schedules, results, notices, transportation details, events, and more.',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/automation.svg',
    variant: 'amber',
  },
];

const aboutAccreditations = [
  { id: 1, name: "NIRF", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/nirf.webp" },
  { id: 2, name: "NAAC B+", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/naac.webp" },
  { id: 3, name: "UGC Grant", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/ugc.webp" },
  { id: 4, name: "Outlook", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/outlook.webp" },
  { id: 5, name: "India Today", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/india-today.webp" },
];

export default function About() {
  return (
    <div>
      <MainIntro 
      title="Transforming futures with knowledge & innovation"
      description={["Established in 2013, Kalinga University, Raipur has emerged as a premier institution of higher learning in Central India, strategically located in the Smart City of New Raipur, Chhattisgarh. The University is recognized for its academic excellence, global perspective, and commitment to innovation and research.",
      "With a strong focus on quality education, Kalinga University offers 130+ undergraduate, postgraduate, and doctoral programs across diverse disciplines including Arts, Management, Law, Pharmacy, Information Technology, and Science. The curriculum is designed in alignment with the National Education Policy (NEP) 2020, ensuring that students are equipped with contemporary skills and global competencies."
    ,"The University is home to students from over 29+ countries, creating a vibrant, multicultural environment that promotes collaboration and cross-cultural understanding. Through partnerships with global leaders such as IBM, Cisco, Bosch, and Microsoft, Kalinga University integrates academic learning with practical industry experience."
    ,"Spread across a 50-acre green campus, the University features modern infrastructure, advanced laboratories, digital classrooms, and Centres of Excellence, providing an ecosystem that fosters creativity, research, and innovation."
    ,"Driven by its mission to empower learners with knowledge, leadership, and integrity, Kalinga University continues to shape the next generation of professionals, innovators, and changemakers who contribute meaningfully to society and the world."
    ]}
      imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
      imageAlt="Kalinga University campus"
      />
      <AccreditationRanking 
        heading="Accreditations & Rankings"
        secondHeading="Recognized Nationally & Globally"
        accreditations={aboutAccreditations}
      />
      <VisionMission />
      <WhoWeAre />
      <Leadership />
      <AccreditationRanking 
        heading="Approvals & Recognitions"
        secondHeading=""
        accreditations={aboutAccreditations}
      />
      <OurJourney />
    <CenterOfExcellence />
    <OrganogramOfKalinga 
    title="Organogram of Kalinga University" 
    description={[
      "Kalinga University follows a well-defined governance structure that ensures smooth administration, transparency, and institutional excellence.",
      "The framework begins with the Chancellor, followed by the Vice-Chancellor and Director General, who oversee the academic, administrative, and strategic functions of the University.",
      "Each department operates under clearly defined roles and responsibilities, enabling effective coordination, accountability, and efficient decision-making across all levels of the institution."
    ]}
    buttonLabel="Explore Now"
    href="/about-us"
    buttonClassName="!bg-white !text-black"
    arrowClassName="!bg-[var(--dark-orange-red)]"
    arrowIconClassName="!text-white"
    textClassName="!text-black"
    cardBackgroundColor="bg-[var(--button-red)]"
    />
    <AwardsScrollbar />
    <FeatureCards 
    title="Discover Kalinga Advantage"
    subtitle="Best Private University In India"
    description="From building a solid academic foundation to experiencing a diverse campus life, Kalinga University offers the best of both worlds and stands as one of the top private university. With students from all across the world, our campus gives a global vibe through cultural exchange, collaborations, fresh ideas, and lifelong connections."
    cards={aboutFeatureCards}
    imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
    />
    <Facility />
    <GlobalPresence
      subtitle="Global Presence"
      title="Expanding Horizons Through Global Partnerships"
      description="Kalinga University is home to students from 29+ countries, fostering a truly international learning environment. Through academic exchange programs, research collaborations, and strategic global alliances, the University prepares students to become globally competent professionals and leaders."
      logos={['Infosys','Citi','Microsoft','Adobe','Cognizant','PayPal']}
      imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/globe-skin-color.png"
      imageAlt="Kalinga University global presence map"
      subtitleColor="text-[var(--button-red)]"
      titleColor="text-[var(--foreground)]"
      descriptionColor="text-gray-600"
      backgroundColor="bg-transparent"
      subtitleClassName="text-center"
      titleClassName="text-center"
      subtitleTextColor="!text-[var(--button-red)]"
      sectionClassName="py-0 pb-16"
    />
    <AdmissionCareer />
    </div>
  );
}

