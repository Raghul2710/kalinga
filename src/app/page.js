import HeroSection from "./components/home/HeroSection";
import AccreditationRanking from "./components/home/AccreditationRanking";
import AboutKalinga from "./components/home/AboutKalinga";
import Programs from "./components/home/programs";
import FeatureCards from "./components/home/featurecard";
import Facilities from "./components/home/facilities";
import Placements from "./components/home/placements";
import Map from "./components/home/global_presence-new";
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
import { ScrollScene } from "./components/gsap/Scrollscene";
import QuickLinks from "./components/home/QuickLinks";
import ValueAdditionVideoInterview from "./components/value-additions/valueadditionvideointerview";
import MediaCardSlider from "./components/general/media-card-slider";



export default function Home() {
  const videoItems = [
    {
      id: 1,
      title: "Mansi Majumdar",
      description: "M.Sc. Zoology",
      videoUrl: "https://www.youtube.com/watch?v=JLlMztuYLao",
      thumbnail: "https://i.ytimg.com/vi/JLlMztuYLao/hqdefault.jpg",
    },
    {
      id: 2,
      title: "Shreyanka Raha",
      description: "BJMC",
      videoUrl: "https://www.youtube.com/watch?v=U-ofFXqFKfU",
      thumbnail: "https://i.ytimg.com/vi/U-ofFXqFKfU/hqdefault.jpg",
    },
    {
      id: 3,
      title: "Payal Talukar",
      description: "MBA",
      videoUrl: "https://www.youtube.com/watch?v=t8UAjsnO4PQ",
      thumbnail: "https://i.ytimg.com/vi/t8UAjsnO4PQ/hqdefault.jpg",
    },
    {
      id: 4,
      title: "Kimberly Brita",
      description: "Diploma in Computer Science",
      videoUrl: "https://www.youtube.com/watch?v=Yt-dPCrghNc",
      thumbnail: "https://i.ytimg.com/vi/Yt-dPCrghNc/hqdefault.jpg",
    },
    {
      id: 5,
      title: "Mona Aggarwal",
      description: "BBA LLB",
      videoUrl: "https://www.youtube.com/watch?v=V6xjrHuF5e0",
      thumbnail: "https://i.ytimg.com/vi/V6xjrHuF5e0/hqdefault.jpg",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Links Section */}
      <QuickLinks />
      <Achievements />
      <AccreditationRanking />
      <AboutKalinga />
      <Programs />
      <FeatureCards
        title="Why is Kalinga University the Right Choice?"
        subtitle=""
        description="Spread across 50+ Acres of Land, the University offers fully equipped infrastructure with the most advanced curriculum that prepares students to compete in global opportunities. Every space on our campus generates curiosity and encourages motivation among young minds. We just don't focus on classroom-based learning, but our primary focus is to provide a holistic learning experience to our students so that they can become all-rounders in their personal and professional lives. With a supportive and inclusive learning environment, our students have achieved remarkable success and transformed their DREAMS into REALITY."
      />
      {/* <ImageAnimation /> */}
      {/*  <ScrollScene /> */}

      <Facilities />
      <Placements hideMilestones={false} />
      <ValueAdditionVideoInterview
        title="We Promised. We Delivered."
        description=""
      />
      <Testimonials
        title="Stories that Define Kalinga's Spirit"
        subtitle="Journeys that Inspire"
      />
      <MediaCardSlider
        categoryTitle="Transformative Learning Experience"
        title="Hear From Our Students"
        description=""
        videoItems={videoItems}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        descriptionTextClass=""
        swiperClassName="ccrc-video-slider"
      />
      <Map backgroundColor="bg-[var(--dark-blue)]" textColor="text-white" subtitleTextColor="!text-white" textColorClass="text-white" />

      <Scroll
        texts={['Admission Open 2026']}
        velocity={100}
        numCopies={6}
        className="font-stix !stroke-pink-500	 !text-var(--button-red)"
        logo="/kalingacolorlogo.svg"
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
