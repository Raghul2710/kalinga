"use client";

import { useState } from "react";
import { submitForm } from "../../config/api";
import FlipbookTrigger from "../general/FlipbookTrigger";

// Student Feedback Form Component
function StudentFeedbackForm({ onClose }) {
  const [formData, setFormData] = useState({
    studentName: "",
    session: "",
    program: "",
    nationality: "",
    email: "",
    gender: "",
    mobile: "",
    ratings: {},
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const ratingQuestions = [
    "The course objectives were clear",
    "The subject workload was manageable",
    "Course outcomes were fulfilled",
    "The learning and teaching methods encouraged participation",
    "The provision of learning resources in the library was adequate and appropriate",
    "The method's of assessment were reasonable",
    "Feedback on assessment was helpful",
    "Subject topics are relevant to correct industry requirement",
    "How do you rate the list of experiments for the laboratory courses in relation to real life applications",
    "How do you rate the course outcomes for the laboratory courses",
    "How do you rate the evaluation scheme designed for each of the course",
    "Sufficient Classrooms, reading rooms, toilets are available",
    "You are satisfied with sports facilities available in University",
    "You are satisfied with the medical facilities that are available round the clock",
    "Classrooms/labs/workshops are cleaned properly",
    "The toilets are cleaned properly and regulary",
    "You are provided with Clean and cold drinking water",
    "You are satisfied with Student Amenity Centre(Mini Market) present in your Campus",
    "The feedback process is fair and unbiased",
    "The teacher uses modern teaching aids, handouts, suitable references, powerpoint presentation, web resources etc",
    "The Syllabus has a good balance between theory and practical applications",
  ];

  const ratingOptions = [
    { value: 5, label: "Strongly Agree" },
    { value: 4, label: "Very Much Agree" },
    { value: 3, label: "Agree" },
    { value: 2, label: "Somewhat Agree" },
    { value: 1, label: "Neither Agree Nor Disagree" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (question, value) => {
    setFormData((prev) => ({
      ...prev,
      ratings: { ...prev.ratings, [question]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // Map existing structure to API expectation if needed, or send as is if backend handles it.
    // Assuming backend expects specific field names for questions, we might need a mapping.
    // However, the user said "integrate the api" but "dont change ui".
    // I will try to map the ratings to q1...q21 dynamically or send the whole object if the API permits.
    // Since I must use the existing UI which uses an array of strings for questions, 
    // I'll assume the API has been updated or I map them by index.

    // Mapping Question Index to API fields (q1..q21) based on order
    const apiData = {
      student_name: formData.studentName,
      session: formData.session,
      program: formData.program,
      nationality: formData.nationality,
      email: formData.email,
      gender: formData.gender,
      mobile: formData.mobile,
      q1_course_objectives_clear: formData.ratings[ratingQuestions[0]],
      q2_workload_manageable: formData.ratings[ratingQuestions[1]],
      q3_outcomes_fulfilled: formData.ratings[ratingQuestions[2]],
      q4_teaching_methods_encouraged_participation: formData.ratings[ratingQuestions[3]],
      q5_library_resources_adequate: formData.ratings[ratingQuestions[4]],
      q6_assessment_methods_reasonable: formData.ratings[ratingQuestions[5]],
      q7_assessment_feedback_helpful: formData.ratings[ratingQuestions[6]],
      q8_industry_relevance: formData.ratings[ratingQuestions[7]],
      q9_experiments_relevance: formData.ratings[ratingQuestions[8]],
      q10_lab_outcomes_rating: formData.ratings[ratingQuestions[9]],
      q11_evaluation_scheme_rating: formData.ratings[ratingQuestions[10]],
      q12_infrastructure_sufficient: formData.ratings[ratingQuestions[11]],
      q13_sports_facilities_satisfaction: formData.ratings[ratingQuestions[12]],
      q14_medical_facilities_satisfaction: formData.ratings[ratingQuestions[13]],
      q15_cleanliness_classrooms: formData.ratings[ratingQuestions[14]],
      q16_cleanliness_toilets: formData.ratings[ratingQuestions[15]],
      q17_drinking_water: formData.ratings[ratingQuestions[16]],
      q18_amenity_centre_satisfaction: formData.ratings[ratingQuestions[17]],
      q19_feedback_process_fair: formData.ratings[ratingQuestions[18]],
      q20_teaching_aids_usage: formData.ratings[ratingQuestions[19]],
      q21_syllabus_balance: formData.ratings[ratingQuestions[20]],
    };

    try {
      await submitForm('/student-feedback-forms/', apiData);
      setStatus({ type: 'success', message: 'Feedback submitted successfully!' });
      setTimeout(onClose, 2000);
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', message: 'Error submitting feedback. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="font-plus-jakarta-sans text-2xl md:text-3xl text-[var(--foreground)] mb-2">
        Student's Feedback
      </h3>
      <p className="text-gray-600 text-sm mb-6">
        This questionnaire is intended to collect information relating to your satisfaction towards the curriculum, end facilities. The information provided by you will be kept confidential and will be used as important feedback for quality improvement of Kalinga University.
      </p>

      {status.message && (
        <div className={`p-3 rounded ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {status.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Student Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Session</label>
          <input
            type="text"
            name="session"
            value={formData.session}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Program</label>
          <input
            type="text"
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Id <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
                className="mr-2"
              />
              Female
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm font-medium text-gray-700 mb-4">
          Directions: A score for each item please indicate your level of satisfaction with the following statement by choosing between 1 and 5.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2 text-left">Question</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Strongly Agree (5)</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Very Much Agree (4)</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Agree (3)</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Somewhat Agree (2)</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Neither Agree Nor Disagree (1)</th>
              </tr>
            </thead>
            <tbody>
              {ratingQuestions.map((question, idx) => (
                <tr key={idx}>
                  <td className="border border-gray-300 px-3 py-2">{question}</td>
                  {ratingOptions.map((option) => (
                    <td key={option.value} className="border border-gray-300 px-2 py-2 text-center">
                      <input
                        type="radio"
                        name={`rating_${idx}`}
                        value={option.value}
                        onChange={() => handleRatingChange(question, option.value)}
                        className="cursor-pointer"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-[var(--button-red)] text-white rounded-md hover:bg-[var(--button-red)]/90 disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

// Alumni Feedback Form Component
function AlumniFeedbackForm({ onClose }) {
  const [formData, setFormData] = useState({
    studentName: "",
    session: "",
    programName: "",
    enrollmentNo: "",
    email: "",
    mobile: "",
    currentStatus: "",
    toolsUsed: "",
    improvements: "",
    ratings: {},
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const ratingQuestions = [
    "How do you find the relevance of the curriculum of your degree in relevance with higher studies",
    "How do you find the relevance of the curriculum of your degree with respect to your current job",
    "How do you find the relevance of the curriculum of your degree with respect to your ability to link theory to practice",
    "How do you find the relevance of the curriculum of your degree with respect to your IT knowledge",
  ];

  const ratingOptions = [
    { value: 5, label: "Excellent" },
    { value: 4, label: "V. Good" },
    { value: 3, label: "Good" },
    { value: 2, label: "Avg" },
    { value: 1, label: "Poor" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (question, value) => {
    setFormData((prev) => ({
      ...prev,
      ratings: { ...prev.ratings, [question]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const apiData = {
      student_name: formData.studentName,
      session: formData.session,
      program_name: formData.programName,
      enrollment_no: formData.enrollmentNo,
      email: formData.email,
      mobile: formData.mobile,
      current_status: formData.currentStatus,
      tools_technologies_used: formData.toolsUsed,
      improvement_comments: formData.improvements,
      q1_relevance_higher_studies: formData.ratings[ratingQuestions[0]],
      q2_relevance_job: formData.ratings[ratingQuestions[1]],
      q3_theory_to_practice: formData.ratings[ratingQuestions[2]],
      q4_it_knowledge: formData.ratings[ratingQuestions[3]],
    };

    try {
      await submitForm('/alumni-feedback-forms/', apiData);
      setStatus({ type: 'success', message: 'Feedback submitted successfully!' });
      setTimeout(onClose, 2000);
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', message: 'Error submitting feedback.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="font-plus-jakarta-sans text-2xl md:text-3xl text-[var(--foreground)] mb-2">
        Alumni Feedback
      </h3>
      <p className="text-gray-600 text-sm mb-6">
        The purpose of this survey held at Kalinga University is to obtain alumni input on the quality of education they received and the level of preparation they had at University. The purpose of this survey is to assess the quality of the academic program. We seek your help in completing this survey.
      </p>

      {status.message && (
        <div className={`p-3 rounded ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {status.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Student Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Session</label>
          <input
            type="text"
            name="session"
            value={formData.session}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Program Name</label>
          <input
            type="text"
            name="programName"
            value={formData.programName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Enrollment No</label>
          <input
            type="text"
            name="enrollmentNo"
            value={formData.enrollmentNo}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Id <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Current Status</label>
          <div className="flex flex-wrap gap-4 mt-2">
            {["Pursuing higher education", "Working", "Self employed", "Preparing for competitive exams"].map((status) => (
              <label key={status} className="flex items-center">
                <input
                  type="radio"
                  name="currentStatus"
                  value={status}
                  onChange={handleChange}
                  className="mr-2"
                />
                {status}
              </label>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            To meet the current job requirements, please specify Tools/New Technologies, you have used
          </label>
          <textarea
            name="toolsUsed"
            value={formData.toolsUsed}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            How could your programs be improved? What specific comments do you have regarding the curriculum
          </label>
          <textarea
            name="improvements"
            value={formData.improvements}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm font-medium text-gray-700 mb-4">
          Directions: A score for each item please indicate your level of satisfaction with the following statement by choosing between 1 and 5.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2 text-left">Question</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Excellent (5)</th>
                <th className="border border-gray-300 px-2 py-2 text-center">V. Good (4)</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Good (3)</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Avg (2)</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Poor (1)</th>
              </tr>
            </thead>
            <tbody>
              {ratingQuestions.map((question, idx) => (
                <tr key={idx}>
                  <td className="border border-gray-300 px-3 py-2">{question}</td>
                  {ratingOptions.map((option) => (
                    <td key={option.value} className="border border-gray-300 px-2 py-2 text-center">
                      <input
                        type="radio"
                        name={`rating_${idx}`}
                        value={option.value}
                        onChange={() => handleRatingChange(question, option.value)}
                        className="cursor-pointer"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-[var(--button-red)] text-white rounded-md hover:bg-[var(--button-red)]/90 disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

// Faculty Feedback Form Component
function FacultyFeedbackForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    subjectTaught: "",
    subjectCode: "",
    department: "",
    employeeCode: "",
    email: "",
    mobile: "",
    ratings: {},
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const ratingQuestions = [
    "Subject curriculum is based on the needs of the stakeholders",
    "The Subject has created interest and increased student knowledge and perspective in the subject area",
    "Subject syllabus contents are clear and well defined",
    "Course Outcomes are well defined and clear to stakeholders",
    "The Subject curriculum has good balance between Theory and application",
    "The Text and reference books prescribed are relevant, of latest edition and available",
    "Proper coverage of all units in the curriculum in the allocated period is done",
    "Syllabus is sufficient to bridge the gap between industry standards / currents global scenarios and academics",
    "Class test are conducted well in time with proper coverage of all Units in the syllabus",
    "Flexibility to adopt new techniques of teaching such as seminar presentation group discussion and students participation",
  ];

  const ratingOptions = [
    { value: 5, label: "Strongly Agree" },
    { value: 4, label: "Very much Agree" },
    { value: 3, label: "Agree" },
    { value: 2, label: "Somewhat Agree" },
    { value: 1, label: "Neither Agree Nor Disagree" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (question, value) => {
    setFormData((prev) => ({
      ...prev,
      ratings: { ...prev.ratings, [question]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const apiData = {
      faculty_name: formData.name,
      designation: formData.designation,
      subject_taught: formData.subjectTaught,
      subject_code: formData.subjectCode,
      department: formData.department,
      employee_code: formData.employeeCode,
      email: formData.email,
      mobile: formData.mobile,
      q1_curriculum_needs: formData.ratings[ratingQuestions[0]],
      q2_knowledge_interest: formData.ratings[ratingQuestions[1]],
      q3_syllabus_clarity: formData.ratings[ratingQuestions[2]],
      q4_outcomes_clarity: formData.ratings[ratingQuestions[3]],
      q5_theory_application_balance: formData.ratings[ratingQuestions[4]],
      q6_books_relevance: formData.ratings[ratingQuestions[5]],
      q7_unit_coverage: formData.ratings[ratingQuestions[6]],
      q8_industry_gap_bridging: formData.ratings[ratingQuestions[7]],
      q9_class_test_conduct: formData.ratings[ratingQuestions[8]],
      q10_teaching_flexibility: formData.ratings[ratingQuestions[9]],
    };

    try {
      await submitForm('/faculty-feedback-forms/', apiData);
      setStatus({ type: 'success', message: 'Feedback submitted successfully!' });
      setTimeout(onClose, 2000);
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', message: 'Error submitting feedback.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="font-plus-jakarta-sans text-2xl md:text-3xl text-[var(--foreground)] mb-2">
        Faculty Feedback
      </h3>
      <p className="text-gray-600 text-sm mb-6">
        This Feedback is to collect information about your satisfaction regarding Kalinga University curriculum of the subject currently taught. The information provided will be kept confidential and will be used as important feedback for quality improvement of teaching –learning process.
      </p>

      {status.message && (
        <div className={`p-3 rounded ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {status.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name of Faculty <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Subject Taught</label>
          <input
            type="text"
            name="subjectTaught"
            value={formData.subjectTaught}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Subject Code</label>
          <input
            type="text"
            name="subjectCode"
            value={formData.subjectCode}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Employee Code</label>
          <input
            type="text"
            name="employeeCode"
            value={formData.employeeCode}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Id <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm font-medium text-gray-700 mb-4">
          Directions: A score for each item please indicate your level of satisfaction with the following statement by choosing between 1 and 5.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2 text-left">Question</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Strongly Agree (5)</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Very much Agree (4)</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Agree (3)</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Somewhat Agree (2)</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Neither Agree Nor Disagree (1)</th>
              </tr>
            </thead>
            <tbody>
              {ratingQuestions.map((question, idx) => (
                <tr key={idx}>
                  <td className="border border-gray-300 px-3 py-2">{question}</td>
                  {ratingOptions.map((option) => (
                    <td key={option.value} className="border border-gray-300 px-2 py-2 text-center">
                      <input
                        type="radio"
                        name={`rating_${idx}`}
                        value={option.value}
                        onChange={() => handleRatingChange(question, option.value)}
                        className="cursor-pointer"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-[var(--button-red)] text-white rounded-md hover:bg-[var(--button-red)]/90 disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

// Employer Feedback Form Component
function EmployerFeedbackForm({ onClose }) {
  const [formData, setFormData] = useState({
    companyName: "",
    evaluatorName: "",
    email: "",
    studentName: "",
    mobile: "",
    overallSatisfaction: "",
    improvements: "",
    recruitMore: "",
    ratings: {},
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const ratingQuestions = [
    "Ability to contribute to the goal of the organization",
    "Technical knowledge/skill Ability to manage/leadership Innovativeness",
    "Creativity is intelligence having fun",
    "Relationship with seniors/peers /subordinates",
    "Ability and motivation for social activity",
    "Obligation to work beyond schedule if required",
    "Overall impression about their performance",
  ];

  const ratingOptions = [
    { value: 5, label: "Excellent" },
    { value: 4, label: "V.Good" },
    { value: 3, label: "Good" },
    { value: 2, label: "Satisfactory" },
    { value: 1, label: "Poor" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (question, value) => {
    setFormData((prev) => ({
      ...prev,
      ratings: { ...prev.ratings, [question]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const apiData = {
      company_name: formData.companyName,
      evaluator_name_designation: formData.evaluatorName,
      email: formData.email,
      student_employee_name: formData.studentName,
      mobile: formData.mobile,
      overall_satisfaction: formData.overallSatisfaction,
      program_improvements: formData.improvements,
      recruit_more_students: formData.recruitMore,
      q1_goal_contribution: formData.ratings[ratingQuestions[0]],
      q2_technical_leadership_skill: formData.ratings[ratingQuestions[1]],
      q3_creativity: formData.ratings[ratingQuestions[2]],
      q4_relationship: formData.ratings[ratingQuestions[3]],
      q5_social_activity_motivation: formData.ratings[ratingQuestions[4]],
      q6_obligation_beyond_schedule: formData.ratings[ratingQuestions[5]],
      q7_overall_performance: formData.ratings[ratingQuestions[6]],
    };

    try {
      await submitForm('/employer-feedback-forms/', apiData);
      setStatus({ type: 'success', message: 'Feedback submitted successfully!' });
      setTimeout(onClose, 2000);
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', message: 'Error submitting feedback.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="font-plus-jakarta-sans text-2xl md:text-3xl text-[var(--foreground)] mb-2">
        Employer Feedback
      </h3>
      <p className="text-gray-600 text-sm mb-6">
        Dear Employers, As industry is the ultimate customer of university pass out student graduates, its satisfaction about standards and Kalinga University products is important. Kalinga University always maintains a continuous dialogue accordingly. As the ultimate beneficiary of our quality product your support and feedback will help us to maintain the required standards of education. Here are some of the points to facilitate you in giving feedback about our student. You are requested to give marks in the box provided against each item as per the following norms.
      </p>

      {status.message && (
        <div className={`p-3 rounded ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {status.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name of the Company/Organization</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name of the evaluating person with Designation</label>
          <input
            type="text"
            name="evaluatorName"
            value={formData.evaluatorName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Id <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name of the Student/Employee <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            How do you rate your overall satisfaction with Kalinga University students and the curriculum
          </label>
          <textarea
            name="overallSatisfaction"
            value={formData.overallSatisfaction}
            onChange={handleChange}
            rows={2}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            How Could our programs be improved? What specific comments you would like to share for imporvement of curriculum
          </label>
          <textarea
            name="improvements"
            value={formData.improvements}
            onChange={handleChange}
            rows={2}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Would you like to recruit more Kalinga University student
          </label>
          <select
            name="recruitMore"
            value={formData.recruitMore}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]"
          >
            <option value="">Choose</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm font-medium text-gray-700 mb-4">
          Directions: A score for each item please indicate your level of satisfaction with the following statement by choosing between 1 and 5.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2 text-left">Question</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Excellent (5)</th>
                <th className="border border-gray-300 px-2 py-2 text-center">V.Good (4)</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Good (3)</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Satisfactory (2)</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Poor (1)</th>
              </tr>
            </thead>
            <tbody>
              {ratingQuestions.map((question, idx) => (
                <tr key={idx}>
                  <td className="border border-gray-300 px-3 py-2">{question}</td>
                  {ratingOptions.map((option) => (
                    <td key={option.value} className="border border-gray-300 px-2 py-2 text-center">
                      <input
                        type="radio"
                        name={`rating_${idx}`}
                        value={option.value}
                        onChange={() => handleRatingChange(question, option.value)}
                        className="cursor-pointer"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-[var(--button-red)] text-white rounded-md hover:bg-[var(--button-red)]/90 disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

// Parents Feedback Form Component
function ParentsFeedbackForm({ onClose }) {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    program: "",
    session: "",
    yearOfStudy: "",
    nationality: "",
    email: "",
    mobile: "",
    ratings: {},
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const ratingQuestions = [
    "Course objectives were clear",
    "Value based curriculum",
    "Preparation for career",
    "Relevance to industry",
    "Effectiveness of internships",
    "Academic support provided",
    "Accessibility of faculty",
    "Satisfaction with resources",
    "Transparency of evaluation",
    "Overall Satisfaction"
  ];

  // Note: While the prompt said previous form was iframe, to "integrate API", we need a UI.
  // I am creating a UI that matches the style of the Student/Alumni forms above.

  const ratingOptions = [
    { value: 5, label: "Excellent" },
    { value: 4, label: "V.Good" },
    { value: 3, label: "Good" },
    { value: 2, label: "Satisfactory" },
    { value: 1, label: "Poor" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (question, value) => {
    setFormData((prev) => ({
      ...prev,
      ratings: { ...prev.ratings, [question]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const apiData = {
      parent_name: formData.parentName,
      student_name: formData.studentName,
      program: formData.program,
      session: formData.session,
      year_of_study: formData.yearOfStudy,
      nationality: formData.nationality,
      email: formData.email,
      mobile: formData.mobile,
      q1_course_objectives_clear: formData.ratings[ratingQuestions[0]],
      q2_value_based_curriculum: formData.ratings[ratingQuestions[1]],
      q3_career_preparation: formData.ratings[ratingQuestions[2]],
      q4_industry_relevance: formData.ratings[ratingQuestions[3]],
      q5_internship_effectiveness: formData.ratings[ratingQuestions[4]],
      q6_academic_support: formData.ratings[ratingQuestions[5]],
      q7_faculty_accessibility: formData.ratings[ratingQuestions[6]],
      q8_resources_satisfaction: formData.ratings[ratingQuestions[7]],
      q9_evaluation_transparency: formData.ratings[ratingQuestions[8]],
      q10_overall_satisfaction: formData.ratings[ratingQuestions[9]],
    };

    try {
      await submitForm('/parent-feedback-forms/', apiData);
      setStatus({ type: 'success', message: 'Feedback submitted successfully!' });
      setTimeout(onClose, 2000);
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', message: 'Error submitting feedback.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="font-plus-jakarta-sans text-2xl md:text-3xl text-[var(--foreground)] mb-2">
        Parents Feedback
      </h3>

      {status.message && (
        <div className={`p-3 rounded ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {status.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="parentName" placeholder="Parent Name" value={formData.parentName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]" />
        <input name="studentName" placeholder="Student Name" value={formData.studentName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]" />
        <input name="program" placeholder="Program" value={formData.program} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]" />
        <input name="session" placeholder="Session" value={formData.session} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]" />
        <input name="yearOfStudy" placeholder="Year of Study" value={formData.yearOfStudy} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]" />
        <input name="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]" />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]" />
        <input name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)]" />
      </div>

      <div className="mt-8">
        <p className="text-sm font-medium text-gray-700 mb-4">
          Directions: A score for each item please indicate your level of satisfaction with the following statement by choosing between 1 and 5.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2 text-left">Question</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Excellent (5)</th>
                <th className="border border-gray-300 px-2 py-2 text-center">V.Good (4)</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Good (3)</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Satisfactory (2)</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Poor (1)</th>
              </tr>
            </thead>
            <tbody>
              {ratingQuestions.map((question, idx) => (
                <tr key={idx}>
                  <td className="border border-gray-300 px-3 py-2">{question}</td>
                  {ratingOptions.map((option) => (
                    <td key={option.value} className="border border-gray-300 px-2 py-2 text-center">
                      <input
                        type="radio"
                        name={`rating_${idx}`}
                        value={option.value}
                        onChange={() => handleRatingChange(question, option.value)}
                        className="cursor-pointer"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button type="button" onClick={onClose} className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Cancel</button>
        <button type="submit" disabled={loading} className="px-6 py-2 bg-[var(--button-red)] text-white rounded-md hover:bg-[var(--button-red)]/90 disabled:opacity-50">{loading ? 'Submitting...' : 'Submit'}</button>
      </div>
    </form>
  );
}

const IQAC_TABS = [
  { id: "minutes", label: "IQAC Minutes Of Meeting" },
  { id: "initiatives", label: "IQAC Initiatives" },
  { id: "feedback", label: "Feedback Analysis & Action Taken Report" },
  { id: "committee", label: "IQAC Committee" },
  { id: "satisfaction", label: "Student Satisfaction Survey" },
  { id: "strategic", label: "Strategic Plan & Deployment" },
  { id: "naac", label: "NAAC SSR" },
  { id: "financial", label: "Financial Audited Statements" },
  { id: "feedback-form", label: "Feedback Form" },
];

// IQAC Committee Data
const IQAC_COMMITTEE = [
  { sno: 1, designation: "Vice-Chancellor", position: "Chairperson" },
  { sno: 2, designation: "Director General", position: "Member" },
  { sno: 3, designation: "Registrar", position: "Member" },
  { sno: 4, designation: "Director IQAC", position: "Director IQAC" },
  { sno: 5, designation: "Dean, Academic Affairs", position: "Member" },
  { sno: 6, designation: "Deputy Registrar", position: "Member" },
  { sno: 7, designation: "Dean, Faculty of Technology", position: "Member" },
  { sno: 8, designation: "Dean, Faculty of CS & IT", position: "Member" },
  { sno: 9, designation: "Dean, Faculty of Science", position: "Member" },
  { sno: 10, designation: "Dean, Faculty of Arts & Humanities", position: "Member" },
  { sno: 11, designation: "Dean, Faculty of Education", position: "Member" },
  { sno: 12, designation: "Dean, Faculty of Pharmacy", position: "Member" },
  { sno: 13, designation: "Dean, Faculty of Commerce & Management", position: "Member" },
  { sno: 14, designation: "Dean, Faculty of Law", position: "Member" },
  { sno: 15, designation: "Director Corporate Relations", position: "Member" },
  { sno: 16, designation: "IQAC Coordinator", position: "Member" },
  { sno: 17, designation: "IQAC Coordinator", position: "Member" },
  { sno: 18, designation: "IQAC Coordinator", position: "Member" },
  { sno: 19, designation: "IQAC Coordinator", position: "Member" },
  { sno: 20, designation: "Research Associate", position: "Member" },
  { sno: 21, designation: "IQAC Office Assistant", position: "Member" },
  { sno: 22, designation: "IQAC Office Assistant", position: "Member" },
];

// IQAC Initiatives Data
const IQAC_INITIATIVES = {
  "2023-24": [
    { sno: 1, initiative: "Academic Audit", year: "2023-24" },
    { sno: 2, initiative: "Initiated the installation of a Biogas plant in the University", year: "2023-24" },
    { sno: 3, initiative: "Audit of Non-teaching Departments", year: "2023-24" },
    { sno: 4, initiative: "Conduction of activities and reporting of IIC 5.0 & IIC 6.0", year: "2023-24" },
    { sno: 5, initiative: "Initiated Project/ live model exhibition for all departments", year: "2023-24" },
    { sno: 6, initiative: "Updation of Patents to receive funds under the KAPILA Scheme", year: "2023-24" },
    { sno: 7, initiative: "NABL-related work for CIF Lab", year: "2023-24" },
    { sno: 8, initiative: "Provided training on PO, CO, PSO mapping and use of POCO software to newly joined faculty.", year: "2023-24" },
    { sno: 9, initiative: "Initiation towards Kalinga University Journal", year: "2023-24" },
    { sno: 10, initiative: "Participated in GU Ranking, London", year: "2023-24" },
    { sno: 11, initiative: "Conducted Laboratory Internal Re Audit for checking compliance", year: "2023-24" },
    { sno: 12, initiative: "Participated in College Dunia Excellence Ranking", year: "2023-24" },
    { sno: 13, initiative: "Conducted Training on MS Office for the government. employees", year: "2023-24" },
    { sno: 14, initiative: "Ensuring effective maintenance of department-level files", year: "2023-24" },
    { sno: 15, initiative: "Criteria-wise maintenance of data and files for NAAC", year: "2023-24" },
    { sno: 16, initiative: "Collection and maintenance of monthly data from departments", year: "2023-24" },
    { sno: 17, initiative: "Updation/revision of various policies", year: "2023-24" },
    { sno: 18, initiative: "Updation of the Environment, Health and Safety policy at the University", year: "2023-24" },
    { sno: 19, initiative: "Formulated a strategy for fire and natural hazards", year: "2023-24" },
    { sno: 20, initiative: "Guidance and maintenance of research-related data", year: "2023-24" },
    { sno: 21, initiative: "Collection of department-level club activity reports", year: "2023-24" },
    { sno: 22, initiative: "Maintenance of the University-level conference proceedings", year: "2023-24" },
    { sno: 23, initiative: "Collection and analysis of feedback", year: "2023-24" },
  ],
  "2022-23": [
    { sno: 1, initiative: "Teaching Faculty Audit", year: "2022-23" },
    { sno: 2, initiative: "Conducted Laboratory Internal Audit", year: "2022-23" },
    { sno: 3, initiative: "Conducted a 2-Day NAAC-sponsored workshop entitled \"Role of IQAC in achieving quality and excellence in higher education by promoting Research, Innovation and Extension activities\"", year: "2022-23" },
    { sno: 4, initiative: "Formed department-level IQAC coordinators", year: "2022-23" },
    { sno: 5, initiative: "Collection and maintenance of monthly data from departments", year: "2022-23" },
    { sno: 6, initiative: "Involved in research work and publications", year: "2022-23" },
    { sno: 7, initiative: "Guest Lecture on \"NEEDO Education\"", year: "2022-23" },
    { sno: 8, initiative: "Audit of Non-Teaching Departments", year: "2022-23" },
    { sno: 9, initiative: "Initiated a green and energy audit for the campus", year: "2022-23" },
    { sno: 10, initiative: "Development of CO-PO-PSO mapping software", year: "2022-23" },
    { sno: 11, initiative: "Audit of e-content", year: "2022-23" },
    { sno: 12, initiative: "Update of Innovation-related activities in the IIC portal", year: "2022-23" },
    { sno: 13, initiative: "Initiated rainwater harvesting on the campus", year: "2022-23" },
    { sno: 14, initiative: "Applied for the India Today Ranking", year: "2022-23" },
    { sno: 15, initiative: "Initiated the process of CSR funding", year: "2022-23" },
    { sno: 16, initiative: "Conducted a session on \"Preparation of Department-level Files\"", year: "2022-23" },
    { sno: 17, initiative: "Unnat Bharat Abhiyan", year: "2022-23" },
    { sno: 18, initiative: "Infrastructure (basic amenities) development of the Government Schools in rural areas", year: "2022-23" },
    { sno: 19, initiative: "Feedback collection and analysis of conferences", year: "2022-23" },
    { sno: 20, initiative: "Feedback collection and analysis of Campus Recruitment Training", year: "2022-23" },
    { sno: 21, initiative: "Standardisation of event report format", year: "2022-23" },
    { sno: 22, initiative: "NEP-2020 implementation", year: "2022-23" },
  ],
  "2021-22": [
    { sno: 1, initiative: "One-Week FDP on Outcome-Based Education in collaboration with VMedulife", year: "2021-22" },
    { sno: 2, initiative: "Development of Research Ecosystem", year: "2021-22" },
    { sno: 3, initiative: "Conducted a workshop on NAAC accreditation", year: "2021-22" },
    { sno: 4, initiative: "Applied for ARIIA-2022", year: "2021-22" },
    { sno: 5, initiative: "Initiated Institution Innovation Council (IIC)", year: "2021-22" },
    { sno: 6, initiative: "Modification of the question paper format as per OBE", year: "2021-22" },
    { sno: 7, initiative: "Started working on the NBA accreditation of the CSE department", year: "2021-22" },
    { sno: 8, initiative: "Mentoring other HEIs towards accreditation", year: "2021-22" },
    { sno: 9, initiative: "Implementation of Seed money", year: "2021-22" },
    { sno: 10, initiative: "AQAR submission", year: "2021-22" },
  ],
  "2020-21": [
    { sno: 1, initiative: "Faculty Development Programme on Outcome-Based Education (24th- 29th August 2020)", year: "2020-21" },
    { sno: 2, initiative: "Faculty Development Programme on Research Methodology & Latest Advances in Teaching Methodologies (29th June-12th July 2021)", year: "2020-21" },
    { sno: 3, initiative: "Webinar on How to Write a Research Paper (16th March 2021)", year: "2020-21" },
    { sno: 4, initiative: "Webinar on \"Research Paper Writing Skills\" (20th March 2021)", year: "2020-21" },
    { sno: 5, initiative: "Seminar on Implementation of New Education Policy 2020 Under AICTE Theme \"Reinvigorating Human Capital Through Excellence in Education and Multilingualism\" (11th May 2021)", year: "2020-21" },
  ],
  "2019-20": [
    { sno: 1, initiative: "Training Program on Time Management and Stress Management", year: "2019-20" },
    { sno: 2, initiative: "Training Program on Best Practices in Office Administration", year: "2019-20" },
    { sno: 3, initiative: "Training Program on skill development: To implement self-management, develop interpersonal & managerial skills and enhance the administrative capabilities", year: "2019-20" },
    { sno: 4, initiative: "Training Program on Use of animation & presentation skills", year: "2019-20" },
    { sno: 5, initiative: "Training Program on the use of IT in the workplace", year: "2019-20" },
    { sno: 6, initiative: "Adopted the semester pattern for the forthcoming session", year: "2019-20" },
    { sno: 7, initiative: "Started conducting remedial classes for weak learners and competitive coaching classes.", year: "2019-20" },
    { sno: 8, initiative: "As an IQAC initiative, it was discussed and accepted to go for NAAC accreditation in the forthcoming session", year: "2019-20" },
    { sno: 9, initiative: "Adoption of five villages in and around the University was done", year: "2019-20" },
  ],
  "2018-19": [
    { sno: 1, initiative: "Establishment of a medicinal garden on the university campus", year: "2018-19" },
    { sno: 2, initiative: "An MoU with Career Launcher was signed to promote awareness amongst students regarding competitive exams", year: "2018-19" },
    { sno: 3, initiative: "Extension activities in nearby villages", year: "2018-19" },
    { sno: 4, initiative: "Publishing University journals", year: "2018-19" },
    { sno: 5, initiative: "Procured e-resources like Delnet and Manupatra for library enrichment", year: "2018-19" },
    { sno: 6, initiative: "Started advanced English coaching for remedial classes", year: "2018-19" },
    { sno: 7, initiative: "The student grievance cell was directed to make a decision regarding grievances at the earliest", year: "2018-19" },
    { sno: 8, initiative: "Established rainwater harvesting system", year: "2018-19" },
    { sno: 9, initiative: "MoUs with various companies were signed for waste disposal", year: "2018-19" },
    { sno: 10, initiative: "Feedback from parents was taken regarding the University", year: "2018-19" },
    { sno: 11, initiative: "The form for UGC 12B was filled out and applied for approval", year: "2018-19" },
  ],
  "2017-18": [
    { sno: 1, initiative: "Procurement of ERP", year: "2017-18" },
    { sno: 2, initiative: "The mass plantation drive was initiated", year: "2017-18" },
    { sno: 3, initiative: "Celebrate World Ozone Day every year", year: "2017-18" },
    { sno: 4, initiative: "Organised National and International-level seminars, conferences and workshops to enhance the research environment in the University", year: "2017-18" },
    { sno: 5, initiative: "Increased the guest lectures in each department, and expert faculty members were invited from various walks of life", year: "2017-18" },
    { sno: 6, initiative: "Procured the advanced software for the computer laboratories", year: "2017-18" },
    { sno: 7, initiative: "Procurement of computers with higher configurations to match the student-to-computer ratio", year: "2017-18" },
    { sno: 8, initiative: "Provided incentives to the faculty for research paper publication to promote research activity in the University", year: "2017-18" },
    { sno: 9, initiative: "Student feedback regarding curriculum, faculty and facilities on campus", year: "2017-18" },
    { sno: 10, initiative: "Procurement of more research journals and textbooks for the library", year: "2017-18" },
  ],
  "2016-17": [
    { sno: 1, initiative: "Heads of Department and faculty members of the university were given autonomy in academics and related activities", year: "2016-17" },
    { sno: 2, initiative: "Academic and administrative activities were strictly monitored by the IQAC", year: "2016-17" },
    { sno: 3, initiative: "Review of the teaching learning process and methods of operation", year: "2016-17" },
    { sno: 4, initiative: "The bi-annual meetings of the IQAC were initiated", year: "2016-17" },
    { sno: 5, initiative: "Celebration of Pharmacy Week, along with health check-up camps and a model-making workshop", year: "2016-17" },
  ],
};

// Minutes of Meeting Data
const MINUTES_OF_MEETING = {
  "2022-23": [
    { title: "Minutes of Meeting (18-09-2022)", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/18-09-2022-mom.pdf" },
  ],
  "2021-22": [],
  "2020-21": [],
  "2019-20": [
    { title: "Minutes of Meeting (16-01-2020)", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/16-01-2020-mom.pdf" },
    { title: "Minutes of Meeting (23-07-2019)", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/23-07-2019-mom.pdf" },
  ],
  "2018-19": [
    { title: "Minutes of Meeting 2018-19", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/iqac+minutes-+2018-19-mom.pdf" },
  ],
  "2017-18": [
    { title: "Minutes of Meeting 2018-19", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/iqac+minutes-+2017-18-mom.pdf" },
  ],
  "2016-17": [
    { title: "Minutes of Meeting 2016-17", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/iqac+minutes-2016-17-mom.pdf" },
  ],
};

// Feedback Analysis Data
const FEEDBACK_ANALYSIS = {
  "2023-24": [
    { title: "Students Feedback Report 2023-2024", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Students+Feedback+Report-2023-2024.pdf" },
    { title: "Faculty Feedback 2023-2024", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Faculty+Feedback-2023-2024.pdf" },
    { title: "Employer Feedback Report 2023-2024", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Employer+Feedback+Report-2023-2024.pdf" },
    { title: "Alumni Feedback Report 2023-2024", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Alumni+Feedback+Report-2023-2024.pdf" },
  ],
  "2022-23": [
    { title: "Students Feedback Report 2022-23", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Students-Feedback-2022-23.pdf" },
    { title: "Faculty Feedback 2022-23", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Faculty-Feedback-2022-23.pdf" },
    { title: "Employer Feedback 2022-23", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Employer-Feedback-2022-23.pdf" },
    { title: "Alumni Feedback 2022-23", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Alumni-Feedback-2022-23.pdf" },
  ],
  "2021-22": [
    { title: "Student Feedback Report 2021-22", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Student-Feedback-Report-2021-22.pdf" },
    { title: "Faculty Feedback 2021-22", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Faculty-Feedback-2021-22.pdf" },
    { title: "Employer Feedback 2021-22", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/EMPLOYER-FEEDBACK-updated-2021-22.pdf" },
    { title: "Alumni Feedback Report 2021-22", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/ALUMNI-FEEDBACK-REPORT-2021-22.pdf" },
  ],
  "2020-21": [
    { title: "Student 2020-2021", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/1.4.1-STUDENT-2020-2021.pdf" },
    { title: "Faculty 2020-2021", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/1.4.1-FACULTY-2020-2021.pdf" },
    { title: "Employer 2020-2021", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/1.4.1-EMPLOYER-2020-2021.pdf" },
    { title: "Alumni 2020-2021", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/1.4.1-ALUMNI-2020-2021.pdf" },
  ],
  "2019-20": [
    { title: "Student Feedback Report 2019-20", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Student-Feedback-Report-2019-20.pdf" },
    { title: "Faculty Feedback 2019-20", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Faculty-Feedback-2019-20.pdf" },
    { title: "Employer Feedback 2019-20", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/EMPLOYER-FEEDBACK-updated-2019-20.pdf" },
    { title: "Alumni Feedback Report 2019-20", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/ALUMNI-FEEDBACK-REPORT-2019-20.pdf" },
  ],
  "2018-19": [
    { title: "Student 2018-19", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/STUDENT2018-19.pdf" },
    { title: "Faculty 2018-19", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/FACULTY2018-19.pdf" },
    { title: "Employer 2018-19", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/EMPLOYER2018-19.pdf" },
    { title: "Alumni 2018-19", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/ALUMNI-2018-19.pdf" },
  ],
  "2017-18": [
    { title: "Student 2017-18", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/STUDENT-2017-18.pdf" },
    { title: "Faculty 2017-18", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/FACULTY-2017-18.pdf" },
    { title: "Employer 2017-18", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/EMPLOYER-2017-18.pdf" },
    { title: "Alumni 2017-18", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/ALUMNI-2017-18.pdf" },
  ],
  "2016-17": [
    { title: "Student 2016-17", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/STUDENT2016-17-2-5.pdf" },
    { title: "Faculty 2016-17", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/FACULTY-2016-17.pdf" },
    { title: "Employer 2016-17", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/EMPLOYER-2016-17-7-16.pdf" },
    { title: "Alumni 2016-17", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/ALUMNI-2016-17-17-18.pdf" },
  ],
  "2015-16": [
    { title: "Student 2015-16", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/STUDENT-2015-16.pdf" },
    { title: "Faculty 2015-16", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Faculty-2015-16.pdf" },
    { title: "Employer 2015-16", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/EMPLOYER-2015-16.pdf" },
    { title: "Alumni 2015-16", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/ALUMNI-2015-16.pdf" },
  ],
  "2014-15": [
    { title: "Student 2014-15", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/STUDENT-14-15.pdf" },
    { title: "Faculty 2014-15", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/FACULTY-2014-15-4.pdf" },
    { title: "Employer 2014-15", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/EMPLOYER-2014-15-5-14.pdf" },
    { title: "Alumani 2014-15", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/ALUMANI-2014-15-15.pdf" },
  ],
};

// Strategic Plan Content
const STRATEGIC_PLAN_CONTENT = `Kalinga University promotes knowledge development through innovation & research, hands-on learning, and student startups. It provides a platform for students to experiment, work on real-world projects, and bring their innovative ideas. It has also established an incubation centre to support and transform the brilliant startup ideas of young students into successful businesses.

KU is supporting people from five villages, including Kotni, Palaud, Kuhera, Parsada, and Kotrabhata, and provides effective teaching and learning in model classrooms. Scholarships for SC/ST/OBC students improve the knowledge pool and inclusivity in the nearby communities. The university is also utilising its talent pool through Skill Pathshala in Kotni Village, where youth are trained in cooking, sewing, and security services. Kalinga also offers employment opportunities to people from nearby areas for their career growth.

These initiatives prove the University's commitment to expanding its horizons and developing social responsibility.`;

export default function IqacTabSection() {
  const [activeTab, setActiveTab] = useState("initiatives");
  const [expandedYears, setExpandedYears] = useState({
    "2023-24": true,
    "2022-23": false,
    "2021-22": false,
    "2020-21": false,
    "2019-20": false,
    "2018-19": false,
    "2017-18": false,
    "2016-17": false,
    "2015-16": false,
    "2014-15": false,
  });
  const [activeFeedbackModal, setActiveFeedbackModal] = useState(null);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const toggleYear = (year) => {
    setExpandedYears((prev) => {
      // If the clicked year is already expanded, close it
      if (prev[year]) {
        // Close all years
        const newState = {};
        Object.keys(prev).forEach((y) => {
          newState[y] = false;
        });
        return newState;
      } else {
        // Close all years and open only the clicked year
        const newState = {};
        Object.keys(prev).forEach((y) => {
          newState[y] = y === year;
        });
        return newState;
      }
    });
  };

  // Get available years based on active tab
  const getAvailableYears = () => {
    if (activeTab === "initiatives") {
      return ["2023-24", "2022-23", "2021-22", "2020-21", "2019-20", "2018-19", "2017-18", "2016-17"];
    } else if (activeTab === "minutes") {
      return ["2022-23", "2021-22", "2020-21", "2019-20", "2018-19", "2017-18", "2016-17"];
    } else if (activeTab === "feedback") {
      return ["2023-24", "2022-23", "2021-22", "2020-21", "2019-20", "2018-19", "2017-18", "2016-17", "2015-16", "2014-15"];
    }
    return [];
  };

  return (
    <section className="w-full py-4 px-2">
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="">
        <div className="flex flex-col lg:flex-row gap-4 bg-[var(--dark-blue)] py-16 md:px-10 px-4 rounded-xl">
          {/* Vertical Tabs on Left (Horizontal Scroll on Mobile) */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="rounded-[16px] bg-[var(--dark-blue)]">
              <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
                {IQAC_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`
                        flex-shrink-0 lg:w-full text-left px-4 py-5 rounded-[8px] 
                        font-plus-jakarta-sans text-sm md:text-base font-semibold
                        transition-all duration-200
                        ${isActive
                          ? "bg-[var(--button-red)] text-white font-semibold"
                          : "bg-[var(--lite-sand)] text-[var(--foreground)] hover:opacity-90"
                        }
                      `}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content Area - White Background */}
          <div className="flex-1 w-full">
            <div className="rounded-[16px] bg-white p-4 md:p-5 shadow-sm h-full flex flex-col">
              {/* IQAC Committee Tab */}
              {activeTab === "committee" && (
                <div className="flex-1">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4 text-center mt-3">
                    IQAC Committee
                  </h2>
                  <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-gray-200 rounded-lg">
                    <table className="w-full border-collapse min-w-[600px]">
                      <thead className="sticky top-0 z-10">
                        <tr className="bg-[var(--dark-blue)] text-white">
                          <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                            S.No.
                          </th>
                          <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                            Designation
                          </th>
                          <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                            Position in IQAC
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {IQAC_COMMITTEE.map((member) => (
                          <tr
                            key={member.sno}
                            className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white"
                          >
                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">
                              {member.sno}
                            </td>
                            <td className="px-4 py-3 text-[var(--foreground)]">
                              {member.designation}
                            </td>
                            <td className="px-4 py-3 text-[var(--foreground)]">
                              {member.position}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* IQAC Initiatives Tab */}
              {activeTab === "initiatives" && (
                <div className="flex-1 text-center">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4">
                    IQAC Initiatives
                  </h2>
                  <div className="space-y-2 text-left">
                    {getAvailableYears().map((year) => {
                      const isExpanded = expandedYears[year] || false;
                      const initiatives = IQAC_INITIATIVES[year] || [];
                      return (
                        <div key={year} className="border-b border-[var(--button-red)] pb-2 last:border-b-0">
                          <button
                            onClick={() => toggleYear(year)}
                            className="w-full flex items-center gap-2 py-1 hover:opacity-80 transition-opacity justify-between pr-3"
                            aria-label={`Toggle ${year}`}
                          >
                            <h3 className="font-plus-jakarta-sans text-sm md:text-base text-[var(--foreground)]">
                              {year}
                            </h3>
                            <div className={`text-[var(--background)] bg-[var(--button-red)] rounded-sm p-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </button>
                          {isExpanded && initiatives.length > 0 && (
                            <div className="mt-2 overflow-x-auto overflow-y-auto max-h-[300px] border border-gray-200 rounded-lg">
                              <table className="w-full border-collapse min-w-[600px]">
                                <thead className="sticky top-0 z-10">
                                  <tr className="bg-[var(--dark-blue)] text-white">
                                    <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                      S.No
                                    </th>
                                    <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                      IQAC Initiatives
                                    </th>
                                    <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                      Year
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {initiatives.map((item) => (
                                    <tr key={item.sno} className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                      <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">{item.sno}</td>
                                      <td className="px-4 py-3 text-[var(--foreground)]">{item.initiative}</td>
                                      <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">{item.year}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Minutes of Meeting Tab */}
              {activeTab === "minutes" && (
                <div className="flex-1">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4 text-center mt-3">
                    IQAC Minutes Of Meeting
                  </h2>
                  <div className="space-y-2 text-left">
                    {getAvailableYears().map((year) => {
                      const isExpanded = expandedYears[year] || false;
                      const minutes = MINUTES_OF_MEETING[year] || [];
                      return (
                        <div key={year} className="border-b border-[var(--button-red)] pb-2 last:border-b-0">
                          <button
                            onClick={() => toggleYear(year)}
                            className="w-full flex items-center gap-2 py-1 hover:opacity-80 transition-opacity justify-between pr-3"
                            aria-label={`Toggle ${year}`}
                          >
                            <h3 className="font-plus-jakarta-sans text-sm md:text-base text-[var(--foreground)]">
                              {year}
                            </h3>
                            <div className={`text-[var(--background)] bg-[var(--button-red)] rounded-sm p-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </button>
                          {isExpanded && (
                            <div className="mt-2 space-y-2">
                              {minutes.length > 0 ? (
                                minutes.map((minute, idx) => (
                                  <FlipbookTrigger key={idx} pdfUrl={minute.url} title={minute.title}>
                                    <a
                                      href={minute.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="block px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-[var(--foreground)] border border-gray-200"
                                    >
                                      <span className="font-plus-jakarta-sans text-sm md:text-base">{minute.title}</span>
                                    </a>
                                  </FlipbookTrigger>
                                ))
                              ) : (
                                <p className="px-4 py-2 text-[var(--foreground)]/60 text-sm">No minutes available for this year.</p>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Feedback Analysis Tab */}
              {activeTab === "feedback" && (
                <div className="flex-1">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4 text-center mt-3">
                    Feedback Analysis & Action Taken Report
                  </h2>
                  <div className="space-y-2 text-left">
                    {getAvailableYears().map((year) => {
                      const isExpanded = expandedYears[year] || false;
                      const feedbacks = FEEDBACK_ANALYSIS[year] || [];
                      return (
                        <div key={year} className="border-b border-[var(--button-red)] pb-2 last:border-b-0">
                          <button
                            onClick={() => toggleYear(year)}
                            className="w-full flex items-center gap-2 py-1 hover:opacity-80 transition-opacity justify-between pr-3"
                            aria-label={`Toggle ${year}`}
                          >
                            <h3 className="font-plus-jakarta-sans text-sm md:text-base text-[var(--foreground)]">
                              {year}
                            </h3>
                            <div className={`text-[var(--background)] bg-[var(--button-red)] rounded-sm p-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </button>
                          {isExpanded && (
                            <div className="mt-2 space-y-2">
                              {feedbacks.length > 0 ? (
                                feedbacks.map((feedback, idx) => (
                                  <FlipbookTrigger key={idx} pdfUrl={feedback.url} title={feedback.title}>
                                    <a
                                      href={feedback.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="block px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-[var(--foreground)] border border-gray-200"
                                    >
                                      <span className="font-plus-jakarta-sans text-sm md:text-base">{feedback.title}</span>
                                    </a>
                                  </FlipbookTrigger>
                                ))
                              ) : (
                                <p className="px-4 py-2 text-[var(--foreground)]/60 text-sm">No feedback reports available for this year.</p>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Strategic Plan Tab */}
              {activeTab === "strategic" && (
                <div className="flex-1">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4 text-center mt-3">
                    Strategic Plan & Deployment
                  </h2>
                  {/* <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((num) => (
                      <div key={num} className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Image {num}</span>
                      </div>
                    ))}
                  </div> */}
                  <div className="text-left space-y-4">
                    {STRATEGIC_PLAN_CONTENT.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Strategic Plan Documents */}
                  <div className="mt-8">
                    <h3 className="font-plus-jakarta-sans text-lg md:text-2xl text-[var(--foreground)] mb-6 text-center">
                      Strategic Plan Documents
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* 2025-2029 Plan */}
                      <a
                        href="https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Perspective+Cum+Strategic+Plan+for+2025-2029.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--button-red)] hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-16 h-16 bg-[var(--lite-sand)] rounded-full flex items-center justify-center group-hover:bg-[var(--button-red)] transition-colors">
                            <svg className="w-8 h-8 text-[var(--button-red)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-plus-jakarta-sans font-semibold text-[var(--foreground)] text-lg mb-2">
                              2025-2029
                            </h4>
                            <p className="text-gray-600 text-sm">
                              Perspective Cum Strategic Plan
                            </p>
                          </div>
                          <div className="flex items-center text-[var(--button-red)] group-hover:text-[var(--button-red)] font-plus-jakarta-sans text-sm font-medium">
                            <span>View Document</span>
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </a>

                      {/* 2020-2024 Plan */}
                      <a
                        href="https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Perspective+Cum+Strategic+Plan+for+2020-2024.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--button-red)] hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-16 h-16 bg-[var(--lite-sand)] rounded-full flex items-center justify-center group-hover:bg-[var(--button-red)] transition-colors">
                            <svg className="w-8 h-8 text-[var(--button-red)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-plus-jakarta-sans font-semibold text-[var(--foreground)] text-lg mb-2">
                              2020-2024
                            </h4>
                            <p className="text-gray-600 text-sm">
                              Perspective Cum Strategic Plan
                            </p>
                          </div>
                          <div className="flex items-center text-[var(--button-red)] group-hover:text-[var(--button-red)] font-plus-jakarta-sans text-sm font-medium">
                            <span>View Document</span>
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </a>

                      {/* 2014-2019 Plan */}
                      <a
                        href="https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Perspective+Cum+Strategic+Plan+for+2014-2019.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--button-red)] hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-16 h-16 bg-[var(--lite-sand)] rounded-full flex items-center justify-center group-hover:bg-[var(--button-red)] transition-colors">
                            <svg className="w-8 h-8 text-[var(--button-red)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-plus-jakarta-sans font-semibold text-[var(--foreground)] text-lg mb-2">
                              2014-2019
                            </h4>
                            <p className="text-gray-600 text-sm">
                              Perspective Cum Strategic Plan
                            </p>
                          </div>
                          <div className="flex items-center text-[var(--button-red)] group-hover:text-[var(--button-red)] font-plus-jakarta-sans text-sm font-medium">
                            <span>View Document</span>
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Student Satisfaction Survey Tab */}
              {activeTab === "satisfaction" && (
                <div className="flex-1">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4 text-center mt-3">
                    Student Satisfaction Survey
                  </h2>
                  <div className="flex justify-center mt-6">
                    <FlipbookTrigger pdfUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Students+Satisfaction+Survey+2021-22.pdf" title="Student Satisfaction Survey 2021-22">
                      <a
                        href="https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/Students+Satisfaction+Survey+2021-22.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-[var(--button-red)] text-white rounded-lg hover:bg-[var(--button-red)]/90 transition-colors font-plus-jakarta-sans text-sm md:text-base font-semibold"
                      >
                        View Student Satisfaction Survey 2021-22
                      </a>
                    </FlipbookTrigger>
                  </div>
                </div>
              )}

              {/* Feedback Form Tab */}
              {activeTab === "feedback-form" && (
                <div className="flex-1">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-6 text-center mt-3">
                    Feedback Form
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { id: "student", label: "Student Feedback" },
                      { id: "alumni", label: "Alumni Feedback" },
                      { id: "faculty", label: "Faculty Feedback" },
                      { id: "employer", label: "Employer Feedback" },
                      { id: "parents", label: "Parents Feedback" },
                    ].map((feedback) => (
                      <button
                        key={feedback.id}
                        onClick={() => setActiveFeedbackModal(feedback.id)}
                        className="px-6 py-4 bg-[var(--button-red)] text-white rounded-lg hover:bg-[var(--button-red)]/90 transition-colors font-plus-jakarta-sans text-sm md:text-base font-semibold text-center"
                      >
                        {feedback.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Placeholder content for other tabs */}
              {!["committee", "initiatives", "minutes", "feedback", "strategic", "satisfaction", "feedback-form"].includes(activeTab) && (
                <div className="flex-1">
                  <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-4 text-center mt-3">
                    {IQAC_TABS.find((tab) => tab.id === activeTab)?.label}
                  </h2>
                  {/* <p className="text-[var(--foreground)] font-plus-jakarta-sans text-center">
                    Content for this section will be added here.
                  </p> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Form Modals */}
      {activeFeedbackModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={() => setActiveFeedbackModal(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveFeedbackModal(null)}
              className="absolute top-6 right-6 z-50 bg-white rounded-full p-2 shadow-lg text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="p-6 md:p-8">
              {activeFeedbackModal === "student" && <StudentFeedbackForm onClose={() => setActiveFeedbackModal(null)} />}
              {activeFeedbackModal === "alumni" && <AlumniFeedbackForm onClose={() => setActiveFeedbackModal(null)} />}
              {activeFeedbackModal === "faculty" && <FacultyFeedbackForm onClose={() => setActiveFeedbackModal(null)} />}
              {activeFeedbackModal === "employer" && <EmployerFeedbackForm onClose={() => setActiveFeedbackModal(null)} />}
              {activeFeedbackModal === "parents" && <ParentsFeedbackForm onClose={() => setActiveFeedbackModal(null)} />}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

