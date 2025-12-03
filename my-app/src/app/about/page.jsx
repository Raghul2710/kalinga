import AboutHero from "../components/about/AboutHero";
import MainIntro from "../components/about/main_intro";
import VisionMission from "../components/about/vision-mission";
import WhoWeAre from "../components/about/who_we_are";
import OurJourney from "../components/about/our_journey";
import CenterOfExcellence from "../components/about/center_of_excellence";
import Leadership from "../components/about/leadership";
import Facility from "../components/admissions/facility";

export default function About() {
  return (
    <div>
      <MainIntro />
      <VisionMission />
      <WhoWeAre />
      <Leadership />
      <OurJourney />
    <CenterOfExcellence />
    <Facility />
    </div>
  );
}

