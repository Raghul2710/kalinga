import MainIntro from "../../components/about/main_intro";
import PublicationGrid from "../../components/research/publication-grid";
import DeptHeadIntro from "../../components/department/dept_head_intro";
import DeptSyllabus from "../../components/department/dept_syllabus";
import Facility from "../../components/admissions/facility";
import StudentActivities from "../../components/department/student_activities";
import EligibilityCriteria from "../../components/course/eligibility_criteria";
import CareerPath from "../../components/course/career_path";
import BoardStudies from "../../components/course/board-studies";

function Courses() {
  return (
    <div>
      <MainIntro />
      <PublicationGrid />
      <EligibilityCriteria />
      <CareerPath />
      <Facility />
      <BoardStudies />
      <StudentActivities />
    </div>
  );
}

export default Courses;