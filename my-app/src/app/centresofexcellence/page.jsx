import CenterOfExcellenceMain from "../components/centresofexcellence/centreofexcellencemain";
import AdmissionCareer from "../components/general/admission_cta";

export default function CenterOfExcellence({

}) {
  return (
    <>
      <CenterOfExcellenceMain
        breadcrumbData={{
          heroImage: "https://cdn.kalingauniversity.ac.in/placement/placement-intro.jpg",
          pageTitle: "Centres of Excellence",
          customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Centres of Excellence", href: "/centresofexcellence" },
          ],
        }}
      />
      <AdmissionCareer />

    </>
  )
}