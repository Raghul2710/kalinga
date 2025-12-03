import PublicationGrid from "../components/research/publication-grid";
import UGCLogo from "../components/research/ugc_logo";
import UpcomingConference from "../components/research/upcoming_conference";
import ProgramsOffered from "../components/department/programs-offered"; 

import MainIntro from "../components/about/main_intro";

export default function Research() {
  return (
    <div>
      <MainIntro />
      <PublicationGrid />
      <UGCLogo />
      <UpcomingConference />
      <ProgramsOffered />
    </div>
  );        
}