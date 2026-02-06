"use client";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SectionHeading from "../general/SectionHeading";
import ProgramCard from "../general/program-card";
import { fetchAllDepartments, fetchAllDepartmentCourses, fetchAllCourses, fetchAllDepartmentsCourses } from "@/app/lib/api";
import { normalizeString, rankAndSortPrograms } from "@/app/lib/search-utils";
import Link from "next/link";

// Helper function to format course name (BSE, BTech format - uppercase first few letters, then lowercase)
const formatCourseName = (name) => {
  if (!name) return "";

  // Find the first space or special character
  const match = name.match(/^([A-Za-z]+)(.*)$/);
  if (match) {
    const firstPart = match[1].toUpperCase();
    const rest = match[2];
    return firstPart + rest;
  }
  return name;
};

// Helper function to generate course slug
const generateCourseSlug = (name) => {
  if (!name) return "";
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// Helper function to format duration (matches department page implementation)
const formatDuration = (course) => {
  if (!course) return "3 Year";

  // Check if duration exists in course object
  const duration = course.duration;

  // Format duration - same logic as department page
  const durationNum = typeof duration === 'number' ? duration : parseInt(duration);
  let formattedDuration = "3 Year";

  if (!isNaN(durationNum)) {
    formattedDuration = `${durationNum} Year${durationNum > 1 ? 's' : ''}`;
  } else if (duration && typeof duration === 'string') {
    formattedDuration = duration;
  }

  return formattedDuration;
};

// Helper function to get study level from program_type
const getStudyLevel = (programType) => {
  if (!programType) return "UG";
  const type = programType.toLowerCase();
  if (type === "pg" || type === "postgraduate") return "PG";
  if (type === "phd" || type === "doctorate") return "PhD";
  if (type === "diploma") return "Diploma";
  return "UG";
};

const phdSpecializations = [
  "Biochemistry",
  "Bioinformatics",
  "Biotechnology",
  "Botany",
  "Chemistry",
  "Civil Engineering",
  "Economics",
  "Forensic Science",
  "Journalism and Mass Communication",
  "Mechanical Engineering",
  "Microbiology",
  "Pharmacy",
  "Physics",
  "Yoga",
  "Zoology"
];

export default function OurPrograms({
  customPrograms = null,
  hideSearchFilter = false,
  customTitle = null,
  customSubtitle = null,
  maxPrograms = null,
  backgroundColor = "bg-white",
  mobileMaxWidth = null,
  programCardTitleClassName = ""
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Initialize state from URL query parameters, default to "UG" instead of "All"
  const initialStudyLevel = searchParams?.get('studyLevel') || "UG";
  const initialDepartment = searchParams?.get('department') || "All";

  const [selectedStudyLevel, setSelectedStudyLevel] = useState(initialStudyLevel);
  const [selectedDepartment, setSelectedDepartment] = useState(initialDepartment);
  const [searchQuery, setSearchQuery] = useState("");
  const [departments, setDepartments] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Update state when URL parameters change
  useEffect(() => {
    if (searchParams) {
      const studyLevel = searchParams.get('studyLevel');
      const department = searchParams.get('department');
      if (studyLevel) {
        setSelectedStudyLevel(studyLevel);
      } else {
        // Default to UG if no studyLevel in URL
        setSelectedStudyLevel("UG");
      }
      if (department) {
        setSelectedDepartment(department);
      }
    }
  }, [searchParams]);

  // Reset showAll when filters change
  useEffect(() => {
    setShowAll(false);
  }, [selectedStudyLevel, selectedDepartment, searchQuery]);

  // Skip data fetching if custom programs are provided
  const shouldFetchData = !customPrograms;

  // Fetch all departments and courses (optimized approach)
  useEffect(() => {
    if (!shouldFetchData) {
      setLoading(false);
      return;
    }

    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Use the new all-departments-courses endpoint
        let departmentsData = [];
        let coursesData = [];

        try {
          // Fetch all courses without program_type filter to get all departments and courses
          const response = await fetchAllDepartmentsCourses(null);

          // Response format: { departments: [...], courses: [...] }
          if (response && response.departments && response.courses) {
            // Extract departments
            departmentsData = Array.isArray(response.departments)
              ? response.departments.map(dept => ({
                id: dept.id,
                name: dept.name,
                slug: dept.slug
              }))
              : [];

            // Map courses to include department info
            coursesData = Array.isArray(response.courses)
              ? response.courses.map(course => {
                // Extract department info from nested department object
                const dept = course.department || {};

                return {
                  ...course,
                  departmentId: dept.id || course.departmentId,
                  departmentName: dept.name || course.departmentName || '',
                  departmentSlug: dept.slug || course.departmentSlug || '',
                  // Use course URL from API (course.url contains full URL)
                  courseUrl: course.url || `/courses/${course.slug}`,
                  // Preserve program_type from API (ug, pg, phd, diploma)
                  program_type: course.program_type
                };
              })
              : [];
          }

        } catch (deptCoursesError) {
          console.warn('all-departments-courses endpoint failed, trying fallback approach:', deptCoursesError);

          // Fallback: Fetch departments separately
          try {
            departmentsData = await fetchAllDepartments();
            departmentsData = Array.isArray(departmentsData) ? departmentsData : [];
          } catch (deptError) {
            console.warn('Failed to fetch departments:', deptError);
          }

          // Fallback: Try to use optimized endpoint (department-courses with department info)
          try {
            coursesData = await fetchAllDepartmentCourses();
            coursesData = coursesData.map(course => ({
              ...course,
              courseUrl: course.url || `/courses/${course.slug}`
            }));
          } catch (deptCoursesError2) {
            console.warn('department-courses endpoint failed, trying alternative approach:', deptCoursesError2);

            // Final fallback: Fetch all courses and departments separately
            try {
              const [allCoursesData, allDepartmentsData] = await Promise.all([
                fetchAllCourses(),
                fetchAllDepartments()
              ]);

              // Create a map of department IDs to names
              const deptMap = new Map();
              (Array.isArray(allDepartmentsData) ? allDepartmentsData : []).forEach(dept => {
                if (dept.id) {
                  deptMap.set(dept.id, {
                    id: dept.id,
                    name: dept.name,
                    slug: dept.slug
                  });
                }
              });

              // Map courses with department info
              coursesData = (Array.isArray(allCoursesData) ? allCoursesData : []).map(course => ({
                ...course,
                departmentId: course.department,
                departmentName: deptMap.get(course.department)?.name || '',
                departmentSlug: deptMap.get(course.department)?.slug || '',
                courseUrl: course.url || `/courses/${course.slug}`
              }));
            } catch (fallbackError) {
              console.error('Fallback approach also failed:', fallbackError);
              throw fallbackError;
            }
          }
        }

        // Set departments for the dropdown
        setDepartments(departmentsData);

        // If department is selected from URL (by slug), find matching department
        if (initialDepartment !== "All" && departmentsData.length > 0) {
          const matchingDept = departmentsData.find(dept =>
            dept.slug?.toLowerCase() === initialDepartment.toLowerCase() ||
            dept.id?.toString() === initialDepartment ||
            dept.name?.toLowerCase() === initialDepartment.toLowerCase()
          );
          if (matchingDept) {
            // Use department slug for filtering
            setSelectedDepartment(matchingDept.slug || matchingDept.id?.toString() || matchingDept.name);
          }
        }

        // Ensure coursesData is an array
        setAllCourses(Array.isArray(coursesData) ? coursesData : []);
      } catch (err) {
        console.error('Failed to load data:', err);
        setError(err.message || 'Failed to load programs');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [shouldFetchData, initialDepartment]);

  // Get unique study levels - always show all program types
  const studyLevels = useMemo(() => {
    // Always include all program types in order
    return ["UG", "PG", "PhD", "Diploma"];
  }, []);

  // Filter and format courses
  const filteredPrograms = useMemo(() => {
    // If custom programs are provided, use them instead
    if (customPrograms && Array.isArray(customPrograms)) {
      const limited = maxPrograms ? customPrograms.slice(0, maxPrograms) : customPrograms;
      return limited;
    }

    let filtered = allCourses;
    const isSearchActive = searchQuery.trim().length > 0;

    // Static PhD programs as requested by user - separate cards for each specialization
    const staticPhdPrograms = phdSpecializations.map(spec => ({
      id: `static-phd-${spec.replace(/\s+/g, '-').toLowerCase()}`,
      title: "Doctor of Philosophy",
      shortName: `Ph.D - ${spec}`,
      specialization: spec,
      duration: "3 Years",
      type: "PhD",
      program_type: "phd",
      courseUrl: "/phd",
      courseSlug: "phd",
      hideDuration: true,
      hideScholarshipLink: true,
      showSpecializationDropdown: false,
      applyNowLink: "https://admissions.kalingauniversity.ac.in/"
    }));

    // Only apply Level and Department filters if search is NOT active
    if (!isSearchActive) {
      // Filter by study level (always filter, default is UG)
      if (selectedStudyLevel && selectedStudyLevel !== "All") {
        filtered = filtered.filter(course => {
          // Get program_type from course
          const programType = course.program_type;

          // Handle null/undefined program_type - default to UG
          if (!programType) {
            return selectedStudyLevel === "UG";
          }

          const level = getStudyLevel(programType);
          return level === selectedStudyLevel;
        });

        // Prepend static PhDs if searching for PhD
        if (selectedStudyLevel === "PhD") {
          // Add all static PhD specializations
          filtered = [...staticPhdPrograms, ...filtered.filter(c => !c.id.toString().startsWith("static-phd"))];
        }
      }
    } else {
      // Global search mode: Search across all programs Irrespective of filters
      filtered = rankAndSortPrograms(filtered, searchQuery, { includeDept: true });

      // Match search query against static PhDs as well
      const query = searchQuery.toLowerCase();
      const matchingPhds = staticPhdPrograms.filter(p =>
        "phd".includes(query) ||
        "doctor of philosophy".includes(query) ||
        p.specialization.toLowerCase().includes(query)
      );

      if (matchingPhds.length > 0) {
        // Filter out any that might already be in results by shared ID
        const existingIds = new Set(filtered.map(f => f.id));
        const newPhds = matchingPhds.filter(p => !existingIds.has(p.id));
        filtered = [...newPhds, ...filtered];
      }
    }

    // Format courses for ProgramCard
    return filtered.map(course => {
      const courseName = course.name || course.title || "";
      // Use course URL from API or generate from slug
      const courseUrl = course.url || course.courseUrl || `/courses/${course.slug || (courseName ? courseName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') : 'program')}`;
      const courseSlug = course.slug || course.courseSlug || (courseName ? courseName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') : 'program');

      // Get program_type and map to display level
      const programType = course.program_type;
      const mappedLevel = getStudyLevel(programType);

      return {
        id: course.id,
        title: courseName,
        shortName: course.short_name || course.shortName || "",
        specialization: course.departmentName || course.specialization || "",
        duration: course.duration ? formatDuration(course) : "3 Years", // Pass entire course object
        type: mappedLevel,
        courseSlug: courseSlug,
        coursePageUrl: courseUrl, // Use the URL from API
        departmentId: course.departmentId,
        departmentName: course.departmentName,
        departmentSlug: course.departmentSlug,
        // Preserve program_type for filtering
        program_type: programType,
        // Support static properties
        hideDuration: course.hideDuration,
        hideScholarshipLink: course.hideScholarshipLink,
        showSpecializationDropdown: course.showSpecializationDropdown,
        specializationOptions: course.specializationOptions,
        specializationPlaceholder: course.specializationPlaceholder,
        applyNowLink: course.applyNowLink
      };
    });
  }, [allCourses, selectedStudyLevel, selectedDepartment, searchQuery]);

  // Handle program actions
  const handleCheckEligibility = (program) => {
    // Link to course page eligibility section
    if (program.coursePageUrl) {
      router.push(`${program.coursePageUrl}#eligibility`);
    } else {
      router.push("/admissions#eligibility");
    }
  };

  const handleApplyNow = (program) => {
    // Static link to admissions portal
    window.open("https://admissions.kalingauniversity.ac.in/", "_blank");
  };

  const handleExploreProgram = (program) => {
    // Link to course page
    if (program.coursePageUrl) {
      router.push(program.coursePageUrl);
    } else {
      router.push("/academics");
    }
  };

  const handleScholarshipsClick = (program) => {
    // Link to scholarships page
    router.push("/scholarships");
  };

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-2">
          <div className="text-center">
            <p className="text-gray-600">Loading programs...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-2">
          <div className="text-center">
            <p className="text-red-600">Error loading programs: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  // Determine if we should use dark blue background (when custom programs are provided)
  const sectionBg = customPrograms ? "bg-[var(--dark-blue)]" : backgroundColor;
  const textColor = customPrograms ? "text-white" : "";
  const mobileWidthClass = mobileMaxWidth ? `max-w-[${mobileMaxWidth}px] md:max-w-none` : '';

  return (
    <section className={`pt-0 md:pt-16 pb-16 ${sectionBg} ${customPrograms ? 'mx-2 rounded-xl' : 'mx-2'} ${mobileWidthClass}`}>
      <div className={`container mx-auto ${customPrograms ? 'px-2 md:px-4' : 'px-2'}`}>
        {/* Title and Subtitle */}
        <div className="text-center mb-5">
          <SectionHeading
            subtitle={customSubtitle || "Explore Our Programs"}
            title={customTitle || "Discover a World of Learning Opportunities"}
            subtitleClassName={`text-center ${customPrograms ? "text-white" : "text-[var(--button-red)]"}`}
            titleClassName={`text-center ${textColor}`}
            subtitleTextColor={customPrograms ? "text-white" : "text-center"}
          />
        </div>

        {/* Programs Container */}
        <div className={`${customPrograms ? 'bg-transparent' : 'bg-[var(--dark-blue)]'} rounded-2xl md:p-5 p-4 relative overflow-hidden`}>
          {/* Search and Filter Section - Single White Bar */}
          {!hideSearchFilter && (
            <div id="program-search-section" className="bg-[var(--light-gray)] border border-white rounded-lg flex flex-col md:flex-row items-stretch mb-8 relative z-20 overflow-hidden scroll-mt-[100px] md:scroll-mt-20">
              {/* Study Level Dropdown - Left Section */}
              <div className={`relative flex-shrink-0 md:w-32 lg:w-36 border-r border-gray-200 transition-opacity duration-200 ${searchQuery.trim().length > 0 ? 'opacity-50 grayscale bg-gray-100' : ''}`}>
                <select
                  value={selectedStudyLevel}
                  onChange={(e) => setSelectedStudyLevel(e.target.value)}
                  disabled={searchQuery.trim().length > 0}
                  className={`w-full bg-transparent px-4 py-3 text-[var(--button-red)] text-sm md:text-base font-medium appearance-none pr-8 focus:outline-none ${searchQuery.trim().length > 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  {studyLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none bg-[var(--background)] rounded p-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="var(--button-red)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Department Dropdown - Middle Section */}
              <div className={`relative flex-1 border-r border-gray-200 transition-opacity duration-200 ${searchQuery.trim().length > 0 ? 'opacity-50 grayscale bg-gray-100' : ''}`}>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  disabled={searchQuery.trim().length > 0}
                  className={`w-full bg-transparent px-4 py-3 text-[var(--foreground)] text-sm md:text-base appearance-none pr-10 focus:outline-none ${searchQuery.trim().length > 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <option value="All">All Departments</option>
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.slug || dept.id?.toString() || dept.name}>
                      {dept.name || "Unknown Department"}
                    </option>
                  ))}
                </select>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none bg-[var(--background)] rounded p-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="var(--button-red)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Search Bar - Right Section (Red) */}
              <div className="relative flex-1 bg-[var(--button-red)] border border-white rounded-lg">
                <input
                  type="text"
                  placeholder="Search Programs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent px-4 py-3 pr-12 text-white placeholder-white text-sm md:text-base focus:outline-none"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Programs Grid */}
          <div className={`grid grid-cols-1 ${customPrograms && customPrograms.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-2'} gap-4 md:gap-5 relative z-10`}>
            {filteredPrograms.length === 0 && (
              <div className="col-span-full text-center text-white/80 py-8">
                No programs match your search criteria.
              </div>
            )}
            {(showAll ? filteredPrograms : filteredPrograms.slice(0, 6)).map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
                onCheckEligibility={handleCheckEligibility}
                onApplyNow={handleApplyNow}
                onScholarshipsClick={handleScholarshipsClick}
                onExploreProgramClick={handleExploreProgram}
                showSpecializationDropdown={program.showSpecializationDropdown}
                specializationOptions={program.specializationOptions}
                specializationPlaceholder={program.specializationPlaceholder}
                titleClassName={programCardTitleClassName}
              />
            ))}
          </div>

          {/* Load More Button */}
          {!showAll && filteredPrograms.length > 6 && (
            <div className="flex justify-center mt-6 md:mt-8">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 bg-[var(--button-red)] text-white rounded-lg font-medium hover:bg-[var(--dark-orange-red)] transition-colors duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
