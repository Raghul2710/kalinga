import MainIntro from "../../components/about/main_intro";
import PublicationGrid from "../../components/research/publication-grid";
import programsOffered from "../../components/department/programs-offered";
import DeptHeadIntro from "../../components/department/dept_head_intro";
import DeptSyllabus from "../../components/department/dept_syllabus";
import Facility from "../../components/admissions/facility";
import StudentActivities from "../../components/department/student_activities";

export default function FacultyOfInformationTechnology() {
  return (
    <div>
      <MainIntro />
      <PublicationGrid />
      <programsOffered />
      <DeptHeadIntro />
      <DeptSyllabus />
      <Facility />
      <StudentActivities />
    </div>
  );
}