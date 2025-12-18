import AdmissionCareer from "../components/general/admission_cta";
import PhdGrid from "../components/phd/phd-grid";
import PhdIntro from "../components/phd/phd-intro";
import PhdObjectivesPanel from "../components/phd/phd-objectives";
import PhdResourcesAccordion from "../components/phd/phd-resources";


import WhyChoosePhd from "../components/phd/why-phd";


export default function PhdPage() {
  return (
    <>
      <PhdIntro />
      <PhdGrid />
      <WhyChoosePhd />
      <PhdObjectivesPanel />
      <PhdResourcesAccordion />
      <AdmissionCareer />
    </>
  );
}
