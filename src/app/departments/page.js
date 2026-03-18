'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '@/app/components/general/SectionHeading'
import AdmissionCareer from '@/app/components/general/admission_cta'
import QuickLinks from "@/app/components/general/quick_links";
import Stack from '@/app/components/gsap/Stack'
import { fetchAllDepartments, fetchDepartmentCompleteDetail, parseHtmlToText, fetchDepartmentCourseCounts } from '@/app/lib/api'
import GlobalArrowButton from '@/app/components/general/global-arrow_button'

// Function to convert text to proper title case
const toTitleCase = (str) => {
  if (!str) return '';
  const lowercaseWords = ['of', 'and', 'the', 'a', 'an', 'in', 'on', 'at', 'to', 'for', 'with', 'by'];
  return str
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      if (index === 0 || !lowercaseWords.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join(' ');
};

// Generate slug from department name
const generateSlug = (name) => {
  if (!name) return '';
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Truncate text to N words
const truncateToWords = (text, maxWords = 30) => {
  if (!text) return '';
  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '...';
};

const PLACEHOLDER_IMAGE = "https://cdn.kalingauniversity.ac.in/academics/arts.webp";

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [expandedDept, setExpandedDept] = useState(null)

  useEffect(() => {
    const loadDepartments = async () => {
      try {
        setLoading(true);
        setError(null);

        const [departmentsList, courseCountsData] = await Promise.all([
          fetchAllDepartments(),
          fetchDepartmentCourseCounts().catch(() => []),
        ]);

        const courseCountMap = new Map();
        if (Array.isArray(courseCountsData)) {
          courseCountsData.forEach(item => {
            if (item.id && item.course_count !== undefined) {
              courseCountMap.set(item.id, item.course_count);
            }
          });
        }

        const departmentsWithDetails = await Promise.all(
          departmentsList.map(async (dept) => {
            try {
              const completeDetail = await fetchDepartmentCompleteDetail(dept.id);
              const aboutImage =
                completeDetail?.about_sections?.[0]?.image ||
                completeDetail?.banners?.[0]?.image ||
                completeDetail?.banners?.[0]?.image_url ||
                PLACEHOLDER_IMAGE;
              const overviewText = parseHtmlToText(completeDetail?.about_sections?.[0]?.content || '');
              const programsCount = courseCountMap.get(dept.id) ?? dept.course_count ?? completeDetail?.department_courses?.length ?? 0;
              const courseCountItem = Array.isArray(courseCountsData) ? courseCountsData.find(item => item.id === dept.id) : null;
              const deptSlug = courseCountItem?.slug || dept.slug || completeDetail?.slug || generateSlug(completeDetail?.name || dept.name);
              return {
                id: dept.id,
                title: completeDetail?.name || dept.name,
                img: aboutImage,
                summary: overviewText,
                fullSummary: overviewText,
                programs: programsCount.toString(),
                slug: deptSlug,
                departmentId: dept.id,
              };
            } catch {
              const fallbackCount = courseCountMap.get(dept.id) ?? dept.course_count ?? 0;
              const courseCountItem = Array.isArray(courseCountsData) ? courseCountsData.find(item => item.id === dept.id) : null;
              return {
                id: dept.id,
                title: dept.name,
                img: PLACEHOLDER_IMAGE,
                summary: '',
                fullSummary: '',
                programs: fallbackCount.toString(),
                slug: courseCountItem?.slug || dept.slug || generateSlug(dept.name),
                departmentId: dept.id,
              };
            }
          })
        );

        const sortedDepartments = departmentsWithDetails.sort((a, b) =>
          (a.title || '').localeCompare(b.title || '')
        );

        // Add static PhD department
        const phdDepartment = {
          id: 'static-phd',
          title: 'Ph.D.',
          img: "https://cdn.kalingauniversity.ac.in/phd/Phd-BannerImage.webp",
          summary: "Pursuing a doctoral program can be a transformative step for the growth of your career...",
          fullSummary: "Pursuing a doctoral program can be a transformative step for the growth of your career and to earn a name and recognition in society. It will not just provide you with in-depth knowledge, but you will also get an opportunity to contribute to research and development. A Ph.D. degree will make you stand out in both the academic and corporate worlds.",
          programs: "Research",
          slug: "phd",
          departmentId: 'static-phd',
        };

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

  const handleKnowMore = (dept) => {
    if (dept.slug === 'phd') { window.location.href = '/phd'; return; }
    window.location.href = `/departments/${dept.slug}`;
  };

  const handleApplyNow = () => {
    window.open("https://admissions.kalingauniversity.ac.in/", "_blank");
  };

  const handleReadMore = (dept) => {
    if (expandedDept === dept.id) {
      if (dept.slug === 'phd') window.location.href = '/phd';
      else window.location.href = `/departments/${dept.slug}`;
    } else {
      setExpandedDept(dept.id);
    }
  };

  const quickLinks = [
    { id: 1, icon: "https://cdn.kalingauniversity.ac.in/academics/icons/Programs.svg", title: "Student Clubs", description: "Our vibrant clubs motivate students to learn and grow with confidence inside and outside their classrooms.", link: "/student-clubs" },
    { id: 2, icon: "https://cdn.kalingauniversity.ac.in/academics/icons/teachings.svg", title: "Value Added Courses", description: "Explore a wide range of short-term value-added certification courses conducted by industry experts at the University.", link: "/value-added-course" },
    { id: 3, icon: "https://cdn.kalingauniversity.ac.in/academics/icons/Curriculum.svg", title: "Industrial Visits", description: "To understand the industry dynamics, we conduct industrial visits where students interact with industry professionals.", link: "/news-and-events#industrial-visits" },
    { id: 4, icon: "https://cdn.kalingauniversity.ac.in/icons/Industrial+Visits.svg", title: "Internships & Placement", description: "Get an on-campus or off-campus internship opportunity and get placed in top companies through our Campus Placement Drives.", link: "/training-and-placements" },
    { id: 5, icon: "https://cdn.kalingauniversity.ac.in/admission/elgbility.svg", title: "Academic Facilities", description: "Our top-notch academic facilities will support your dreams by giving an all-around practical exposure.", link: "/academic-facilities" },
    { id: 6, icon: "https://cdn.kalingauniversity.ac.in/academics/icons/Events.svg", title: "Conferences & Events", description: "Discover various National and International conferences held at Kalinga University.", link: "/conferences-and-events" },
  ];

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
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <SectionHeading
              subtitle="Explore Academics"
              title="Your Journey Begins Here"
              subtitleClassName="text-center !text-[var(--button-red)]"
              titleClassName="text-center"
            />
          </div>

          {/* Departments Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {departments.length === 0 && (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-600">No departments found.</p>
              </div>
            )}
            {departments.map((dept) => {
              const isExpanded = expandedDept === dept.id;
              const displaySummary = isExpanded ? dept.fullSummary : truncateToWords(dept.fullSummary, 30);
              const shouldShowReadMore = dept.fullSummary && dept.fullSummary.split(/\s+/).length > 30;

              const programData = {
                ...dept,
                summary: displaySummary,
                onKnowMore: () => handleKnowMore(dept),
                onApplyNow: handleApplyNow,
                onReadMore: shouldShowReadMore ? () => handleReadMore(dept) : null,
                isExpanded,
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
  );
}

// Department Card Component
function DepartmentCard({ program }) {
  const imageCard = (
    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">
      <Image src={program.img} alt={program.title} fill className="object-cover" />
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
        </p>
      </div>
      <div className="mt-auto flex items-center gap-2 sm:gap-3">
        <GlobalArrowButton
          className="!bg-white !text-black"
          arrowClassName="!bg-[var(--button-red)]"
          arrowIconClassName="!text-white"
          textClassName="!text-black"
          onClick={(e) => { e.stopPropagation(); if (program.onKnowMore) program.onKnowMore(); }}
        >
          Know More
        </GlobalArrowButton>
        <GlobalArrowButton onClick={(e) => { e.stopPropagation(); if (program.onApplyNow) program.onApplyNow(); }}>
          Apply Now
        </GlobalArrowButton>
      </div>
    </div>
  );

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
