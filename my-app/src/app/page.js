import HeroSection from "./components/home/HeroSection";
import Link from "next/link";
import Image from "next/image";
import AccreditationRanking from "./components/home/AccreditationRanking";
import AboutKalinga from "./components/home/AboutKalinga";
import Programs from "./components/home/programs";
import FeatureCards from "./components/home/featurecard";
import Facilities from "./components/home/facilities";
import Placements from "./components/home/placements";
import GlobalPresence from "./components/home/global_presence";
import ResearchInnovation from "./components/home/research_innovation";
import CampusTour from "./components/home/campus_tour";
import NewsEvents from "./components/home/news_and_events";
import SocialThumbs from "./components/home/social_thumbnail";
import AdmissionCareer from "./components/general/admission_cta";
import Achievements from "./components/home/achievements";
import Testimonials from "./components/home/Testimonials";
import Scroll from "./components/home/Scroll";
import AwardsScrollbar from "./components/home/awards-scrollbar";
import ImageAnimation from "./components/general/image_animation";

const quickLinks = [
  {
    title: "Events",
    href: "/news-and-events",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Flagship+Events.svg"
  },
  {
    title: "Campus Life",
    href: "/students/campus-life",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/campus+life.svg"
  },
  {
    title: "International",
    href: "/international",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/international.svg"
  },
  {
    title: "Chat with Student",
    href: "/students",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/chat+with+students.svg"
  },
  {
    title: "Admission",
    href: "/admissions",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/admissions.svg"
  },
  {
    title: "Facilities",
    href: "/facilities",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/facility-management.svg"
  },

]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Links Section */}
      <section className="container md:-mt-16 mt-6 sm:-mt-20 md:-mt-45 mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-6 bg-[var(--dark-blue)]/80 z-2 backdrop-blur-xs relative rounded-xl sm:rounded-2xl lg:rounded-4xl max-w-5xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-3 sm:p-4 md:p-5 bg-white rounded-lg hover:shadow-xl hover:-translate-y-5 hover:bg-[var(--card-skin)] transition-all duration-300 flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 min-h-[100px] sm:min-h-[120px]"
            >
              {/* Icon */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex-shrink-0">
                <Image
                  src={link.icon}
                  alt={link.title}
                  fill
                  className="object-contain"
                />
              </div>
              {/* Label */}
              <p className="text-[var(--light-text-gray)] text-center leading-tight">
                {link.title}
              </p>
            </Link>
          ))}
        </div>
      </section>
      <Achievements />
      <AccreditationRanking />
      <AboutKalinga />
      <Programs />
      <FeatureCards />
      <ImageAnimation />
      <Facilities />
      <Placements />
      <Testimonials />
      <GlobalPresence />
      <Scroll
        texts={['Admission Open 2026']} 
        velocity={100}
        numCopies={6}
        className="font-stix !stroke-pink-500	 !text-var(--button-red)"
        logo="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/kalinga+logo+png.webp"
      />
      <ResearchInnovation />
      <CampusTour />
      <AwardsScrollbar />
      <NewsEvents />
      <SocialThumbs />
      <AdmissionCareer />
    </>
  );
}
