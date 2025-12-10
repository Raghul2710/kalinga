 "use client" 
 import ImageListItem from "@/app/components/ccrc/imagelistitem";
import ImageContent from "@/app/components/ccrc/imagecontent";
import Cards from "@/app/components/ccrc/cards";
import Hearfrom from "@/app/components/ccrc/Hearfrom";
import Partner from "@/app/components/ccrc/partner";
import AccreditationRanking from "@/app/components/home/AccreditationRanking";
import UpcomingConferences from "@/app/components/research/upcoming_conference";
import Gallery from "@/app/components/general/gallery";
import DeptHeadIntro from "@/app/components/department/dept_head_intro";
import AdmissionCareer from "@/app/components/general/admission_cta";
import MediaCardSlider from "@/app/components/general/media-card-slider";
const newsConferences = [
  {
    id: 1,
    title: "Annual Research Symposium 2025",
    date: "November 10 · 2025",
    category: "Research & Innovation",
    description:
      "Join us for our annual research symposium featuring cutting-edge research presentations, keynote speakers, and networking opportunities for researchers and academics.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  },
  {
    id: 2,
    title: "International Education Summit",
    date: "December 05 · 2025",
    category: "Education",
    description:
      "A global gathering of educators, policymakers, and thought leaders to discuss the future of higher education and innovative teaching methodologies.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  },
  {
    id: 3,
    title: "Technology & Innovation Conference",
    date: "January 20 · 2026",
    category: "Technology",
    description:
      "Explore the latest trends in technology, artificial intelligence, and digital transformation in education and industry applications.",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  },
];
const cards = [
  {
    title: "Corporate Training And Consultancy Division (CTCD)",
    description: "The Career and Corporate Resource Centre (CCRC) at Kalinga University collaborates with leading organizations such as GRI to empower students with industry knowledge and practical skills. Our MP with GRI program provides mentorship, project experience, and a professional network to boost career growth.",
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrcimg.webp",
    logoSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp",
    subtitle: "CORPORATE TRAINING & CONSULTANCY DIVISION",
  },
  {
    title: "Corporate Social Responsibility (CSR) ",
    description: "The Career and Corporate Resource Centre (CCRC) at Kalinga University collaborates with leading organizations such as GRI to empower students with industry knowledge and practical skills. Our MP with GRI program provides mentorship, project experience, and a professional network to boost career growth.",
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrcimg.webp",
    logoSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp",
    subtitle: "CORPORATE TRAINING & CONSULTANCY DIVISION",
  },
  {
    title: "Kalinga Incubation Foundation (KIF)",
    description: "The Career and Corporate Resource Centre (CCRC) at Kalinga University collaborates with leading organizations such as GRI to empower students with industry knowledge and practical skills. Our MP with GRI program provides mentorship, project experience, and a professional network to boost career growth.",
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrcimg.webp",
    logoSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp",
    subtitle: "CORPORATE TRAINING & CONSULTANCY DIVISION",
  },
  {
    title: "Training & Placements",
    description: "The Career and Corporate Resource Centre (CCRC) at Kalinga University collaborates with leading organizations such as GRI to empower students with industry knowledge and practical skills. Our MP with GRI program provides mentorship, project experience, and a professional network to boost career growth.",
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrcimg.webp",
    logoSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp",
    subtitle: "CORPORATE TRAINING & CONSULTANCY DIVISION",
  },
]


const sliderItems = [
  {
    id: 1,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    id: 2,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore"
  },
  {
    id: 3,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    text: "Ut enim ad minim veniam, quis nostrud exercitation"
  },
  {
    id: 4,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    text: "Ut enim ad minim veniam, quis nostrud exercitation"
  }
]
const Items = [
  {
  
    text: "Hear from our students about their experience at Kalinga University"
  }]
const blueItems = [
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp",
    imageAlt: "CCRC Logo",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp",
    imageAlt: "CCRC Logo",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp",
    imageAlt: "CCRC Logo",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp",
    imageAlt: "CCRC Logo",
  }
]
const redItems = [
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp",
    imageAlt: "CCRC Logo",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp",
    imageAlt: "CCRC Logo",
  },
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp",
    imageAlt: "CCRC Logo",
  }
]
const accreditations = [
  { id: 1, name: 'Best Practices', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/best-prac.webp' },
  { id: 2, name: 'Best Research', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/best-res.webp' },
  { id: 3, name: 'Competition Success', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/comp-top.webp' },
  { id: 4, name: 'Outlook', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/outlook.webp' },
  { id: 5, name: 'Competition 3', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/comp-3.webp' },
  { id: 6, name: 'UGC Grant', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/ugc-gra.webp' },
  { id: 7, name: 'Competition', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/comp.webp' },
  { id: 8, name: 'India Today', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/india-today.webp' },
  { id: 9, name: 'Global', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/global.webp' },
  { id: 10, name: 'NIRF', logo: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/nirf.png' },
]
const videoItems = [
  {
    id: 1,
    name: "Name",
    description: "Lorem ipsum",
    thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  },
  {
    id: 2,
    name: "Name",
    description: "Lorem ipsum",
    thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  },
  {
    id: 3,
    name: "Name",
    description: "Lorem ipsum",
    thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
  },
]
export default function CCRCPage() {
  return <>
    <ImageContent imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp" />
    <ImageListItem items={Items} imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrc.webp" title="Benefits for Organisations"  />
    <DeptHeadIntro />

    <Cards cards={cards} />
    <Hearfrom items={sliderItems  } title="Hear From Our Clients" />
    <MediaCardSlider
        categoryTitle="Video Interviews"
        title="Lorem ipsum dolor sit amet, consectetur"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
        videoItems={videoItems}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        descriptionTextClass="text-gray-600"
        swiperClassName="ccrc-video-slider"
      />
    <Partner 
      blueTitle="Industry Partner" 
      redTitle="MoU Partners" 
      blueItems={blueItems} 
      redItems={redItems}
      ccrcLogo="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp"
    />
    <AccreditationRanking 
      heading="Clients We Served"
          accreditations={accreditations} 
    />
  <UpcomingConferences 
        conferences={newsConferences}
        title="Upcoming CCRC Events"
        backgroundColor="bg-[var(--light-gray)]"
        backgroundColorcard="bg-white"
      />
      <Gallery title=" CCRC  Glimpse" />
     
      <AdmissionCareer />


        {/* <CCrcContent /> */}
  </>;  
}