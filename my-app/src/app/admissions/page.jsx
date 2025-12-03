import OurPrograms from "../components/admissions/our_programs";
import ScholarshipsSlider from "../components/admissions/scholarships_slider";
import AdmissionSteps from "../components/admissions/admission-steps";
import Facility from "../components/admissions/facility";

export default function Admissions() {
  return (
    <div>
      <OurPrograms />
      <ScholarshipsSlider />
      <AdmissionSteps />
      <Facility />
    </div>
  );
}