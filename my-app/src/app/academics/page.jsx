'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '@/app/components/general/SectionHeading'
import AdmissionCareer from '@/app/components/general/admission_cta'
import QuickLinks from "@/app/components/general/quick_links";
import Stack from '@/app/components/gsap/Stack'
import { fetchAllDepartments, fetchDepartmentCompleteDetail, parseHtmlToText, fetchDepartmentCourseCounts } from '@/app/lib/api'
import { useBreadcrumbData } from '@/app/components/layout/BreadcrumbContext'
import GlobalArrowButton from '@/app/components/general/global-arrow_button'

// Function to convert text to proper title case
const toTitleCase = (str) => {
  if (!str) return '';
  // Words that should be lowercase unless they're the first word
  const lowercaseWords = ['of', 'and', 'the', 'a', 'an', 'in', 'on', 'at', 'to', 'for', 'with', 'by'];

  return str
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      // Always capitalize first word, or if word is not in lowercase list
      if (index === 0 || !lowercaseWords.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      // Keep lowercase for words in the list (except first word)
      return word;
    })
    .join(' ');
};

// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/academics-banner.webp",
  pageTitle: "Academics",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Academics', href: '/academics-api' }
  ]
};

// Generate slug from department name if slug is not available
const generateSlug = (name) => {
  if (!name) return '';
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Helper function to truncate text to 30 words
const truncateToWords = (text, maxWords = 30) => {
  if (!text) return '';
  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '...';
};

// Placeholder image
const PLACEHOLDER_IMAGE = "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/arts.webp";

export default function AcademicsApi() {
  const [searchQuery, setSearchQuery] = useState('')
  const [departments, setDepartments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [expandedDept, setExpandedDept] = useState(null) // Track which department is expanded

  // Register breadcrumb data
  useBreadcrumbData(breadcrumbData);

  // Fetch all departments and their complete details
  useEffect(() => {
    const loadDepartments = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch all departments and course counts in parallel
        const [departmentsList, courseCountsData] = await Promise.all([
          fetchAllDepartments(),
          fetchDepartmentCourseCounts().catch(err => {
            console.warn('Failed to fetch course counts, will use fallback:', err);
            return [];
          })
        ]);

        // Create a map of department ID to course count for quick lookup
        const courseCountMap = new Map();
        if (Array.isArray(courseCountsData)) {
          courseCountsData.forEach(item => {
            if (item.id && item.course_count !== undefined) {
              courseCountMap.set(item.id, item.course_count);
            }
          });
        }

        // Fetch complete details for each department to get course count and about image
        const departmentsWithDetails = await Promise.all(
          departmentsList.map(async (dept) => {
            try {
              const completeDetail = await fetchDepartmentCompleteDetail(dept.id);

              // Get about image from about_sections
              const aboutImage = completeDetail?.about_sections?.[0]?.image ||
                completeDetail?.banners?.[0]?.image ||
                completeDetail?.banners?.[0]?.image_url ||
                PLACEHOLDER_IMAGE;

              // Get overview text from about_sections
              const overviewText = parseHtmlToText(completeDetail?.about_sections?.[0]?.content || '');

              // Get programs count - prefer from courseCountsData, then dept.course_count, then calculate from department_courses
              const programsCount = courseCountMap.get(dept.id) ??
                dept.course_count ??
                completeDetail?.department_courses?.length ??
                0;

              // Generate department slug - prefer from courseCountsData, then dept, then completeDetail, then generate
              const courseCountItem = Array.isArray(courseCountsData)
                ? courseCountsData.find(item => item.id === dept.id)
                : null;
              const deptSlug = courseCountItem?.slug ||
                dept.slug ||
                completeDetail?.slug ||
                generateSlug(completeDetail?.name || dept.name);

              return {
                id: dept.id,
                title: completeDetail?.name || dept.name,
                img: aboutImage,
                summary: overviewText,
                fullSummary: overviewText, // Store full text for expansion
                programs: programsCount.toString(),
                scholarships: "Know More",
                slug: deptSlug,
                departmentId: dept.id,
              };
            } catch (err) {
              console.error(`Error fetching details for department ${dept.id}:`, err);
              // Return basic info if detail fetch fails - use course_count from courseCountsData or dept
              const fallbackCount = courseCountMap.get(dept.id) ?? dept.course_count ?? 0;
              const courseCountItem = Array.isArray(courseCountsData)
                ? courseCountsData.find(item => item.id === dept.id)
                : null;
              return {
                id: dept.id,
                title: dept.name,
                img: PLACEHOLDER_IMAGE,
                summary: '',
                fullSummary: '',
                programs: fallbackCount.toString(),
                scholarships: "Know More",
                slug: courseCountItem?.slug || dept.slug || generateSlug(dept.name),
                departmentId: dept.id,
              };
            }
          })
        );

        // Sort departments alphabetically by title
        const sortedDepartments = departmentsWithDetails.sort((a, b) =>
          (a.title || '').localeCompare(b.title || '')
        );

        // Add static PhD department
        const phdDepartment = {
          id: 'static-phd',
          title: 'Ph.D.',
          img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Phd-BannerImage.webp",
          summary: "Pursuing a doctoral program can be a transformative step for the growth of your career...",
          fullSummary: "Pursuing a doctoral program can be a transformative step for the growth of your career and to earn a name and recognition in society. It will not just provide you with in-depth knowledge, but you will also get an opportunity to contribute to research and development. A Ph.D. degree will make you stand out in both the academic and corporate worlds.",
          programs: "Research", // Specific label for PhD
          scholarships: "Know More",
          slug: "phd",
          departmentId: 'static-phd',
        };

        // Insert PhD in alphabetical order or append? 
        // "P" comes after "O", etc. Let's just push it and resort or just push it. 
        // If we want it alphabetically sorted:
        sortedDepartments.push(phdDepartment);
        sortedDepartments.sort((a, b) => (a.title || '').localeCompare(b.title || ''));

        setDepartments(sortedDepartments);
      } catch (err) {
        console.error('Failed to load departments:', err);
        setError(err.message || 'Failed to load departments');
      } finally {
        setLoading(false);
      }
    };

    loadDepartments();
  }, []);

  // Filter departments based on search query
  const filteredDepartments = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return departments;
    return departments.filter(dept =>
      dept.title.toLowerCase().includes(query)
    );
  }, [departments, searchQuery]);

  // QuickLinks content (same as academics page)
  const quickLinks = [
    {
      id: 1,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/icons/Programs.svg",
      title: "Student Clubs",
      description: "Our vibrant clubs motivate students to learn and grow with confidence inside and outside their classrooms.",
      link: "/student-clubs"
    },
    {
      id: 2,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/icons/teachings.svg",
      title: "Value Added Courses",
      description: "Explore a wide range of short-term value-added certification courses conducted by industry experts at the University. ",
      link: "/value-added-courses"
    },
    {
      id: 3,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/icons/Curriculum.svg",
      title: "Industrial Visits",
      description: "To understand the industry dynamics, we conduct industrial visits where students interact with industry professionals and explore real-world applications.",
      link: ""
    },
    {
      id: 4,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Industrial+Visits.svg",
      title: "Internships & Placement",
      description: "Get an on-campus or off-campus internship opportunity and get placed in top companies through our Campus Placement Drives.",
      link: "/placement"
    },
    {
      id: 5,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/elgbility.svg",
      title: "Academic Facilities",
      description: "Our top-notch academic facilities will support your dreams by giving an all-around practical exposure at every step of your journey.",
      link: "/academic-facilities"
    },
    {
      id: 6,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/icons/Events.svg",
      title: "Conferences & Events",
      description: "Discover various National and International conferences held at Kalinga University, offering a dynamic platform for knowledge sharing.",
      link: "/conferences-and-events"
    },
  ];

  // Handle Know More click - navigate to department page
  const handleKnowMore = (dept) => {
    if (dept.slug === 'phd') {
      window.location.href = '/phd';
      return;
    }
    window.location.href = `/departments/${dept.slug}`;
  };

  // Handle Apply Now click - static link
  const handleApplyNow = () => {
    window.open("https://admissions.kalingauniversity.ac.in/", "_blank");
  };

  // Handle Read More click - expand text inline or navigate to department page
  const handleReadMore = (dept) => {
    if (expandedDept === dept.id) {
      // If already expanded, navigate to department page
      if (dept.slug === 'phd') {
        window.location.href = '/phd';
      } else {
        window.location.href = `/departments/${dept.slug}`;
      }
    } else {
      // Expand the text inline
      setExpandedDept(dept.id);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--button-red)] mx-auto mb-4"></div>
          <p className="text-[var(--light-text-gray)]">Loading academic departments...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading departments: {error}</p>
          <p className="text-[var(--light-text-gray)]">Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-2">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <SectionHeading
              subtitle="Explore Academics"
              title="Your Journey Begins Here"
              subtitleClassName="text-center !text-[var(--button-red)]"
              titleClassName="text-center"
            />
          </div>

          {/* Search Bar */}
          {/* <a href='/admissions#course-finder'>
            <div className="mb-5">
              <div className="flex items-center bg-[var(--light-gray)] rounded-lg px-3 sm:px-4 lg:px-5 py-3 sm:py-3.5 shadow-sm border border-gray-200">
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Programs...."
                  className="bg-transparent outline-none flex-1 text-sm sm:text-base font-plus-jakarta-sans font-medium text-black"
                />
                <button className="text-[var(--button-red)] ml-1 sm:ml-2" aria-label="search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </a> */}
          {/* Programs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDepartments.length === 0 && (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-600">No departments found matching your search.</p>
              </div>
            )}
            {filteredDepartments.map((dept) => {
              // Determine if this department is expanded
              const isExpanded = expandedDept === dept.id;
              // Get truncated or full summary based on expansion state
              const displaySummary = isExpanded ? dept.fullSummary : truncateToWords(dept.fullSummary, 30);
              const shouldShowReadMore = dept.fullSummary && dept.fullSummary.split(/\s+/).length > 30;

              // Create program object with dynamic summary
              const programData = {
                ...dept,
                summary: displaySummary,
                onKnowMore: () => handleKnowMore(dept),
                onApplyNow: handleApplyNow,
                onReadMore: shouldShowReadMore ? () => handleReadMore(dept) : null,
                isExpanded: isExpanded,
              };

              return (
                <div key={dept.id} className="flex justify-center">
                  <DepartmentCard program={programData} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <QuickLinks
        title="Quick Links"
        description="Learning at Kalinga University goes beyond classroom lectures and textbook knowledge. From participating in student clubs to attending conferences and events, these experiences will make you well-rounded learners and future professionals."
        links={quickLinks}
        titleClassName="text-white"
      />
      <AdmissionCareer />
    </>
  )
}

// Custom Department Card Component with Read More functionality
function DepartmentCard({ program }) {
  const shouldShowReadMore = program.onReadMore && program.fullSummary && program.fullSummary.split(/\s+/).length > 30;
  const isExpanded = program.isExpanded;

  const imageCard = (
    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">
      <Image
        src={program.img}
        alt={program.title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-5 left-8 right-3 text-white">
        <h3 className="font-stix text-lg sm:text-xl leading-snug drop-shadow">{toTitleCase(program.title)}</h3>
      </div>
    </div>
  );

  const overviewCard = (
    <div className="w-full h-full rounded-xl overflow-hidden shadow-xl p-4 sm:p-4 lg:p-4 flex flex-col" style={{ backgroundColor: 'rgba(254, 192, 113, 1)' }}>
      <div>
        <h3 className="font-stix !text-[25px] leading-tight mb-3 sm:mb-4">Overview</h3>
        <p className="font-plus-jakarta-sans text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 !text-gray-800">
          {program.summary || 'Learn more about this department and its opportunities.'}
          {/* {shouldShowReadMore && !isExpanded && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (program.onKnowMore) program.onKnowMore();
              }}
              className="cursor-pointer text-[var(--button-red)] font-semibold ml-1 hover:underline inline"
            >
              Read More
            </button>
          )} */}

        </p>
      </div>
      {/* <ul className="text-sm sm:text-base font-plus-jakarta-sans space-y-2.5 sm:space-y-3 mb-4 sm:mb-5">
        {program.scholarships && (
          <li className="flex items-start gap-2">
            <Image
              src="https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/hand-graduation-icon.png"
              alt="Scholarships icon"
              width={20}
              height={20}
              className="mt-0.5"
            />
            <span className="text-gray-800">
              <span className="font-stix text-[20px] text-black">Scholarships :</span>{' '}
              <Link href="/scholarships" className=" cursor-pointer  ml-1 hover:underline inline text-xl ">
                {program.scholarships}
              </Link>
            </span>
          </li>
        )}
        {program.programs && (
          <li className="flex items-start gap-2">
            <Image
              src="https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/hand-graduation-icon.png"
              alt="Programs icon"
              width={20}
              height={20}
              className="mt-0.5"
            />
            <span className="text-gray-800"><span className="font-stix text-[20px] text-black">Programs :</span> {program.programs}</span>
          </li>
        )}
      </ul> */}

      <div className="mt-auto flex items-center justify-between gap-2 sm:gap-3">
        <div className="flex items-center gap-2 sm:gap-3">

          <GlobalArrowButton
            className="!bg-white !text-black"
            arrowClassName="!bg-[var(--button-red)]"
            arrowIconClassName="!text-white"
            textClassName="!text-black"
            onClick={(e) => {
              e.stopPropagation();
              if (program.onKnowMore) program.onKnowMore();
            }}
          >
            Know More
          </GlobalArrowButton>
          <GlobalArrowButton

            onClick={(e) => {
              e.stopPropagation();
              if (program.onApplyNow) program.onApplyNow();
            }}
          >
            Apply Now

          </GlobalArrowButton>
        </div>
      </div>
    </div>
  );

  // Keep image on top initially: place overview first, image last in the stack array
  const cards = [overviewCard, imageCard];

  return (
    <div className="flex justify-center">
      <div className="h-[340px] sm:h-[380px] md:h-[400px] lg:h-[420px] w-[300px] sm:w-[340px] md:w-[360px] lg:w-[380px]">
        <Stack
          cards={cards}
          randomRotation
          sendToBackOnClick
          pauseOnHover
          autoplay={false}
          mobileClickOnly
        />
      </div>
    </div>
  );
}
