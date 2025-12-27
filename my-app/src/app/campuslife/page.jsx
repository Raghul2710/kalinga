import FeaturesSection from "../components/campuslife/featuresection";
import MainIntro from "../components/about/main_intro";
import Facilities from "../components/home/facilities";
import GalleryAll from "../components/general/image_animation";
import CampusLife from "../components/campuslife/campusvideo";
import Gallery from "../components/campuslife/campusgallery";
import AdmissionCareer from "../components/general/admission_cta";
import UpcomingConferences from "../components/research/upcoming_conference";
import AutoBreadcrumb from "../components/layout/BreadcrumbData";

const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/campuslife.webp",
  pageTitle: "Campus Life",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Campus Life', href: '/campus-life' }
  ]
};

export default function Page() {
  return (
    <>
    <AutoBreadcrumb data={breadcrumbData} />
      <MainIntro 
        title="Life at KU"
        description={["Life at Kalinga University is a vibrant blend of learning, culture, and community. Students from across India and around the world come together to explore ideas, develop skills, and build lifelong connections.From academic clubs and cultural events to sports and leadership activities, every experience at KU fosters growth, confidence, and creativity — all within a modern, green, and inclusive campus."
      ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/campus-life-intro-1.webp"
        imageAlt="Life at KU"
        showButton ={false}
        showKnowMore ={false}
      />
      <Facilities/>
      <FeaturesSection />
      <CampusLife/>
      <GalleryAll className="mt-10 mb-10" />
      <UpcomingConferences
        conferences={[
          {
            id: 1,
            title: "Scopus Workshop: Research Impact",
            date: "Nov 28, 2025 · 10:00 A.M.",
            category: "Academic Event",
            description: "Hybrid workshop on Scopus analytics and publishing insights with experts.",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Pic1+(1).jpeg",
            href: "/contact-us"
          }
        ]}
       
        title="Upcoming Campus Events"
      />
      <Gallery/>
      <AdmissionCareer/>
    </>
  );
}
