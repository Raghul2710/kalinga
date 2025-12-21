import AdmissionCareer from "../components/general/admission_cta";
import AutoBreadcrumb from "../components/layout/BreadcrumbData";
import PhdGrid from "../components/phd/phd-grid";
import PhdIntro from "../components/phd/phd-intro";
import PhdObjectivesPanel from "../components/phd/phd-objectives";
import PhdResourcesAccordion from "../components/phd/phd-resources";


import WhyChoosePhd from "../components/phd/why-phd";


export default function PhdPage() {
  const breadcrumbData = {
        heroImage:
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
        pageTitle: "Ph.D",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Ph.D", href: "/phd" },
        ],
    };
  return (
    <>
    <AutoBreadcrumb data={breadcrumbData} />
      <PhdIntro />
      <PhdGrid />
      <WhyChoosePhd />
      <PhdObjectivesPanel />
      <PhdResourcesAccordion />
      <AdmissionCareer />
    </>
  );
}
