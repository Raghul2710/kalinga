"use client";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SectionHeading from "../general/SectionHeading";
import ProgramCard from "../general/program-card";
import { fetchAllDepartments, fetchAllDepartmentCourses, fetchAllCourses } from "@/app/lib/api";
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

export default function OurPrograms({
  customPrograms = null,
  hideSearchFilter = false,
  customTitle = null,
  customSubtitle = null,
  maxPrograms = null,
  backgroundColor = "bg-white",
  mobileMaxWidth = null
}) {
  const searchParams = useSearchParams();
  
  // Initialize state from URL query parameters
  const initialStudyLevel = searchParams?.get('studyLevel') || "All";
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

        // Fetch all departments for the dropdown
        const departmentsData = await fetchAllDepartments();
        const deptArray = Array.isArray(departmentsData) ? departmentsData : [];
        setDepartments(deptArray);
        
        // If department is selected from URL (by slug), find matching department
        if (initialDepartment !== "All" && deptArray.length > 0) {
          const matchingDept = deptArray.find(dept => 
            dept.slug?.toLowerCase() === initialDepartment.toLowerCase() ||
            dept.id?.toString() === initialDepartment ||
            dept.name?.toLowerCase() === initialDepartment.toLowerCase()
          );
          if (matchingDept) {
            // Use department ID or slug for filtering
            setSelectedDepartment(matchingDept.slug || matchingDept.id?.toString() || matchingDept.name);
          }
        }

        // Try to use optimized endpoint first (department-courses with department info)
        let coursesData = [];
        try {
          coursesData = await fetchAllDepartmentCourses();
        } catch (deptCoursesError) {
          console.warn('department-courses endpoint failed, trying alternative approach:', deptCoursesError);
          
          // Fallback: Fetch all courses and departments separately
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
            }));
          } catch (fallbackError) {
            console.error('Fallback approach also failed:', fallbackError);
            throw fallbackError;
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
  }, [shouldFetchData]);

  // Get unique study levels from courses
  const studyLevels = useMemo(() => {
    const levels = new Set(["All"]);
    allCourses.forEach(course => {
      const level = getStudyLevel(course.program_type);
      levels.add(level);
    });
    return Array.from(levels).sort();
  }, [allCourses]);

  // Filter and format courses
  const filteredPrograms = useMemo(() => {
    // If custom programs are provided, use them instead
    if (customPrograms && Array.isArray(customPrograms)) {
      const limited = maxPrograms ? customPrograms.slice(0, maxPrograms) : customPrograms;
      return limited;
    }
    
    let filtered = allCourses;

    // Filter by study level
    if (selectedStudyLevel !== "All") {
      filtered = filtered.filter(course => {
        const level = getStudyLevel(course.program_type);
        return level === selectedStudyLevel;
      });
    }

    // Filter by department (supports ID, slug, or name)
    if (selectedDepartment !== "All") {
      filtered = filtered.filter(course => {
        const deptId = course.departmentId || course.department;
        const deptSlug = course.departmentSlug || course.department?.slug;
        const deptName = course.departmentName || course.department?.name;
        
        // Match by ID, slug, or name (case-insensitive)
        const selectedDeptLower = selectedDepartment.toLowerCase();
        return (
          deptId?.toString() === selectedDepartment ||
          deptSlug?.toLowerCase() === selectedDeptLower ||
          deptName?.toLowerCase() === selectedDeptLower
        );
      });
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      filtered = filtered.filter(course => {
        const courseName = (course.name || "").toLowerCase();
        const deptName = (course.departmentName || "").toLowerCase();
        return courseName.includes(query) || deptName.includes(query);
      });
    }

    // Format courses for ProgramCard
    return filtered.map(course => {
      const courseName = formatCourseName(course.name || "");
      // Use course slug if available, otherwise generate from name
      const courseSlug = course.slug || generateCourseSlug(course.name);
      // Course pages are at /courses/{course-slug} (dynamic route)
      const coursePageUrl = `/courses/${courseSlug}`;

      return {
        id: course.id,
        title: courseName,
        specialization: course.departmentName || "",
        duration: formatDuration(course), // Pass entire course object
        type: getStudyLevel(course.program_type),
        courseSlug: courseSlug,
        coursePageUrl: coursePageUrl,
        departmentId: course.departmentId,
        departmentName: course.departmentName,
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
    // Link to KALSEE page for admissions
    router.push("/kalsee");
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
    // Link to course page (scholarships section if available) or admissions page
    if (program.coursePageUrl) {
      router.push(program.coursePageUrl);
    } else {
      router.push("/admissions");
    }
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
    <section className={`py-16 ${sectionBg} ${customPrograms ? 'mx-2 rounded-xl' : 'mx-2'} ${mobileWidthClass}`}>
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
          <div className="bg-[var(--light-gray)] border border-white rounded-lg flex flex-col md:flex-row items-stretch mb-8 relative z-20 overflow-hidden">
            {/* Study Level Dropdown - Left Section */}
            <div className="relative flex-shrink-0 md:w-32 lg:w-36 border-r border-gray-200">
              <select
                value={selectedStudyLevel}
                onChange={(e) => setSelectedStudyLevel(e.target.value)}
                className="w-full bg-transparent px-4 py-3 text-[var(--button-red)] text-sm md:text-base font-medium appearance-none pr-8 focus:outline-none cursor-pointer"
              >
                {studyLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
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
            <div className="relative flex-1 border-r border-gray-200">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full bg-transparent px-4 py-3 text-[var(--foreground)] text-sm md:text-base appearance-none pr-10 focus:outline-none cursor-pointer"
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
