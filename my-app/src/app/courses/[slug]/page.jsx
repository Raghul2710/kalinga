"use client";

/**
 * Dynamic Course Page
 * Route: /courses/[slug]
 * 
 * This page dynamically loads course data based on the slug from the URL.
 */

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import MainIntro from "@/app/components/about/main_intro";
import PublicationGrid from "@/app/components/research/publication-grid";
import Facility from "@/app/components/admissions/facility";
import StudentActivities from "@/app/components/department/student_activities";
import EligibilityCriteria from "@/app/components/course/eligibility_criteria";
import CareerPath from "@/app/components/course/career_path";
import BoardStudies from "@/app/components/course/board-studies";
import Specialization from "@/app/components/department/specialization";
import OrganogramOfKalinga from "@/app/components/about/organogram_of_kalinga";
import FAQ from "@/app/components/general/faq";
import AdmissionCareer from "@/app/components/general/admission_cta";
import CourseNavigation from "@/app/components/general/course-navigation";
import QuickLinks from "@/app/components/general/quick_links";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";
import { useFlipbook } from "@/app/components/general/FlipbookContext";
import { fetchAllCourses, fetchCourseCompleteDetail, fetchDepartmentCompleteDetail, parseHtmlToParagraphs, parseHtmlToText, parseHtmlListItems, fetchClubs, fetchClubDetail } from "@/app/lib/api";
import { useBreadcrumbData } from "@/app/components/layout/BreadcrumbContext";
import FacilitySlider from "@/app/components/course/facility-slider";
// Helper function to format duration
const formatDuration = (duration, semester) => {
  if (duration && semester) {
    return `${duration} Year${duration > 1 ? 's' : ''} (${semester} Semester${semester > 1 ? 's' : ''})`;
  }
  return "3 Years (6 Semesters)";
};

// Generate slug from course name if slug is not available
const generateSlug = (name) => {
  if (!name) return '';
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Normalize slug for comparison (handles variations)
const normalizeSlug = (slug) => {
  if (!slug) return '';
  return slug
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export default function DynamicCoursePage() {
  const params = useParams();
  const slug = params?.slug;

  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courseId, setCourseId] = useState(null);
  const [departmentData, setDepartmentData] = useState(null);
  const [metadataLoaded, setMetadataLoaded] = useState(false);
  const [clubsData, setClubsData] = useState([]);
  const { openFlipbook } = useFlipbook();

  // Find course data from slug
  useEffect(() => {
    const findCourse = async () => {
      try {
        setLoading(true);
        setError(null);
        setMetadataLoaded(false);

        console.log(`[Course Page] Fetching course by slug: "${slug}"`);

        // Strategy 1: Direct fetch by slug - much faster than fetching all courses
        const directCourseData = await fetchCourseCompleteDetail(slug);

        if (directCourseData && directCourseData.id) {
          console.log(`[Course Page] Successfully fetched course directly by slug:`, {
            id: directCourseData.id,
            name: directCourseData.name
          });

          setCourseData(directCourseData);
          setCourseId(directCourseData.id);

          // Fetch department data for milestones/fallbacks if needed
          if (directCourseData.department) {
            try {
              const deptId = typeof directCourseData.department === 'object' ? directCourseData.department.id : directCourseData.department;
              if (deptId) {
                fetchDepartmentCompleteDetail(deptId).then(setDepartmentData).catch(err => {
                  console.warn('[Course Page] Non-critical error fetching department:', err);
                });
              }
            } catch (deptErr) {
              console.error('[Course Page] Failed to trigger department search:', deptErr);
            }
          }

          setLoading(false);
          return;
        }
      } catch (err) {
        console.warn(`[Course Page] Direct fetch by slug "${slug}" failed. Falling back to search.`, err);

        // Strategy 2: Fallback to list search if direct slug fetch fails
        try {
          const courses = await fetchAllCourses();
          const normalizedSlug = normalizeSlug(slug);

          // Try to find match in the list
          const course = courses.find(c =>
            normalizeSlug(c.slug) === normalizedSlug ||
            normalizeSlug(c.name) === normalizedSlug
          );

          if (course) {
            console.log(`[Course Page] Found course in list after direct match failed: ${course.name}`);
            setCourseId(course.id);
            // The second useEffect will handle fetching complete details for this ID
          } else {
            setError(`Course not found: ${slug}`);
            setLoading(false);
          }
        } catch (listErr) {
          console.error('[Course Page] Fallback search also failed:', listErr);
          setError(`Failed to load course details: ${listErr.message}`);
          setLoading(false);
        }
      }
    };

    if (slug) {
      findCourse();
    }
  }, [slug]);

  // Fetch course data from API
  useEffect(() => {
    // Skip if courseData was already set by direct fetch in findCourse
    if (courseData) {
      setLoading(false);
      return;
    }

    if (!courseId) return;

    const loadCourseData = async () => {
      try {
        setLoading(true);
        setError(null);
        setMetadataLoaded(false); // Reset metadata loaded state
        console.log(`[Course Page] Fetching complete details for course ID: ${courseId}`);

        const data = await fetchCourseCompleteDetail(courseId);
        console.log(`[Course Page] Successfully loaded course data for ID: ${courseId}`, { name: data.name, slug: data.slug });
        setCourseData(data);
        setError(null);

        // Fetch department data if course milestones are not available or for image fallbacks
        if (data.department) {
          try {
            const deptId = typeof data.department === 'object' ? data.department.id : data.department;
            if (deptId) {
              console.log(`[Course Page] Fetching department data for ID: ${deptId}`);
              const deptData = await fetchDepartmentCompleteDetail(deptId);
              setDepartmentData(deptData);
            }
          } catch (deptErr) {
            console.error('[Course Page] Failed to load department data for fallbacks:', deptErr);
            // Silently fail - will just not show milestones or use fallback images
          }
        }
      } catch (err) {
        console.error(`[Course Page] Failed to load course data for ID ${courseId}:`, err);
        const errorMessage = err.message || 'Unknown error';
        setError(`Failed to load course details: ${errorMessage}. This might be a backend issue. Please check the API endpoint: /courses/${courseId}/complete-detail/`);
      } finally {
        setLoading(false);
      }
    };

    loadCourseData();
  }, [courseId, courseData]);

  // Fetch clubs data
  useEffect(() => {
    const loadClubsData = async () => {
      try {
        const clubsList = await fetchClubs();

        // Fetch details for each club to get description (which contains the link too)
        const detailedClubs = await Promise.all(
          clubsList.map(async (club) => {
            try {
              const detail = await fetchClubDetail(club.id);

              // Use description and link from the JSON detail
              const description = typeof detail === 'object' ? parseHtmlToText(detail.description) : parseHtmlToText(detail);
              const link = (typeof detail === 'object' && detail.link) ? detail.link : "#";

              return {
                ...club,
                longDescription: description,
                link: link
              };
            } catch (err) {
              console.warn(`Failed to fetch details for club ${club.id}`, err);
              return { ...club, longDescription: "", link: "#" };
            }
          })
        );

        setClubsData(detailedClubs);
      } catch (err) {
        console.error("Failed to load clubs data:", err);
      }
    };

    loadClubsData();
  }, []);

  // Update SEO metadata when courseData is available
  useEffect(() => {
    if (!courseData) return;

    const updateMetaTag = (name, content, attribute = 'name') => {
      if (!content) return;

      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (courseData.meta_title) {
      document.title = courseData.meta_title;
    } else if (courseData.name) {
      document.title = courseData.name;
    }

    updateMetaTag('description', courseData.meta_description);
    updateMetaTag('keywords', courseData.keywords);
    updateMetaTag('author', courseData.author);
    updateMetaTag('robots', courseData.robots);

    if (courseData.canonical_url) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', courseData.canonical_url);
    }

    updateMetaTag('og:title', courseData.og_title || courseData.meta_title || courseData.name, 'property');
    updateMetaTag('og:description', courseData.og_description || courseData.meta_description, 'property');
    updateMetaTag('og:image', courseData.og_image || courseData.image, 'property');
    updateMetaTag('og:type', courseData.og_type, 'property');
    updateMetaTag('og:locale', courseData.og_locale, 'property');
    updateMetaTag('og:site_name', courseData.og_site_name, 'property');
    updateMetaTag('og:url', courseData.og_url || courseData.canonical_url, 'property');

    updateMetaTag('twitter:card', courseData.twitter_card);
    updateMetaTag('twitter:title', courseData.twitter_title || courseData.meta_title || courseData.name);
    updateMetaTag('twitter:description', courseData.twitter_description || courseData.meta_description);
    updateMetaTag('twitter:image', courseData.twitter_image || courseData.image);
    updateMetaTag('twitter:label1', courseData.twitter_label1);
    updateMetaTag('twitter:data1', courseData.twitter_data1);
    updateMetaTag('twitter:label2', courseData.twitter_label2);
    updateMetaTag('twitter:data2', courseData.twitter_data2);

    if (courseData.schema_json) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      try {
        schemaScript.textContent = courseData.schema_json;
      } catch (e) {
        console.error('Error parsing schema JSON:', e);
      }
    }

    // Mark metadata as loaded
    setMetadataLoaded(true);
  }, [courseData]);

  // Map API data to components (same logic as static page)
  const mainIntroContent = courseData?.about_sections?.[0] ? {
    title: courseData.about_sections[0].heading,
    subtitle: "About The Program",
    description: courseData.about_sections[0].content, // Keep HTML intact for ul/li support
    imageUrl: courseData.about_sections[0].image,
    imageAlt: courseData.about_sections[0].alt,
  } : null;

  // Use course milestones if available, otherwise fallback to department milestones
  const publicationStats = (() => {
    const courseMilestones = courseData?.milestones && courseData.milestones.length > 0
      ? courseData.milestones
      : null;

    const deptMilestones = departmentData?.milestones && departmentData.milestones.length > 0
      ? departmentData.milestones
      : null;

    const milestones = courseMilestones || deptMilestones;

    if (!milestones || milestones.length === 0) {
      return null;
    }

    return milestones
      .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
      .map(milestone => ({
        title: milestone.heading || "",
        value: `${milestone.number || ""} ${milestone.symbol || ""}`.trim(),
        description: milestone.description || "",
      }));
  })();

  // Helper function to parse eligibility criteria (handles both list items and paragraphs)
  const parseEligibilityCriteria = (htmlContent) => {
    if (!htmlContent) return [];

    // First try to parse as list items
    const listItems = parseHtmlListItems(htmlContent);
    if (listItems && listItems.length > 0) {
      return listItems;
    }

    // If no list items, try to split by paragraphs
    const paragraphMatches = htmlContent.match(/<p[^>]*>([\s\S]*?)<\/p>/gi);
    if (paragraphMatches && paragraphMatches.length > 0) {
      return paragraphMatches.map(p => {
        const innerMatch = p.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
        return innerMatch && innerMatch[1] ? innerMatch[1].trim() : '';
      }).filter(item => item.length > 0);
    }

    // If no paragraphs, return the HTML content as a single item
    return [htmlContent.trim()];
  };

  const eligibilityContent = courseData?.eligibility_criteria?.[0] ? {
    imageUrl: courseData.eligibility_criteria[0].image ||
      courseData.eligibility_criteria[0].image_url ||
      courseData?.image ||
      (departmentData?.program_syllabus_images?.[0]?.image || departmentData?.program_syllabus_images?.[0]?.image_url) ||
      departmentData?.programs_image ||
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/course/course_page.webp",
    imageAlt: courseData.eligibility_criteria[0].image_alt ||
      courseData?.image_alt ||
      departmentData?.programs_image_alt ||
      "Students",
    duration: formatDuration(courseData?.duration, courseData?.semester),
    title: "Eligibility Criteria",
    criteria: parseEligibilityCriteria(courseData.eligibility_criteria[0].eligibility_criteria),
    // admissionTitle: courseData.eligibility_criteria[0].cta_text || "Your Next Big Chapter Starts With One Click",
    admissionTitle: "Your Next Big Chapter Starts With One Click",

    admissionButtonLabel: "Admission Open",
    href: courseData.eligibility_criteria[0].cta_link || "https://admissions.kalingauniversity.ac.in/",
    additionalButtons: [
      { label: "Fees", href: "/ku-fees" },
      {
        label: "Scheme & Syllabus",
        href: (courseData?.syllabus_buttons?.length === 1) ? "#" : "#syllabus",
        onClick: (courseData?.syllabus_buttons?.length === 1) ? () => {
          const btn = courseData.syllabus_buttons[0];
          openFlipbook(btn.file_url || btn.file, courseData.syllabus_info?.heading || "Scheme & Syllabus");
        } : undefined
      }
    ],
    lateralEntryData: courseData.lateral_entry ? {
      duration: formatDuration(courseData.lateral_entry.duration, courseData.lateral_entry.semester),
      criteria: parseEligibilityCriteria(courseData.lateral_entry.eligibility),
      description: courseData.lateral_entry.description || ""
    } : null
  } : null;

  const breadcrumbData = (courseData?.name && !loading && metadataLoaded) ? {
    heroImage: courseData?.banners?.[0]?.image || courseData?.banners?.[0]?.image_url || courseData.image || "https://kalinga-university.s3.ap-south-1.amazonaws.com/course/student-computer.webp",
    pageTitle: courseData.name,
    customBreadcrumbs: [
      { label: 'Home', href: '/' },
      {
        label: "Academics",
        href: `/admissions#course-finder`
      }
    ]
  } : null;

  useBreadcrumbData(breadcrumbData);

  const careerPathContent = courseData?.career_info && courseData.career_info.length > 0 ? {
    title: "Career Pathways",
    description: parseHtmlToText(courseData.career_pathway || ""),
    careers: courseData.career_info
      .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
      .map(career => ({
        id: career.id,
        title: career.heading || "",
        description: parseHtmlToText(career.description) || "",
        imageUrl: career.icon_image || null,
      }))
      .filter(career => career.title || career.description) // Filter out empty careers
  } : null;

  const whyStudyContent = courseData?.specializations && courseData.specializations.length > 0 ? {
    sectionTitle: "Specialisation",
    sectionDescription: "Choose a specialisation of your choice and master what’s trending.",
    backgroundImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/why-this-course-1.webp",
    items: courseData.specializations
      .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
      .map((specialization, index) => ({
        id: specialization.id,
        title: specialization.heading || "",
        body: parseHtmlToText(specialization.career_opportunities) || "",
        variant: index % 2 === 0 ? "gray" : "amber",
        image: specialization.icon || specialization.icon_url || null,
        alt: specialization.alt || "",
        duration: specialization.duration || "",
        fees: specialization.fee || "",
        eligibility: specialization.eligibility_criteria || "",
      }))
      .filter(item => item.title || item.body) // Filter out empty items
  } : null;

  // Extract link from HTML description if available
  const extractLinkFromHtml = (htmlContent) => {
    if (!htmlContent) return null;
    const linkMatch = htmlContent.match(/<a[^>]+href=["']([^"']+)["'][^>]*>/i);
    return linkMatch ? linkMatch[1] : null;
  };

  const syllabusContent = courseData?.syllabus_info ? {
    title: courseData.syllabus_info.heading || "Scheme & Syllabus",
    description: courseData.syllabus_info.description,
    buttonLabel: "Explore Now",
    href: extractLinkFromHtml(courseData.syllabus_info.description) || "/about-us",
    imageUrl: null,
    showImage: false,
    buttons: courseData?.syllabus_buttons && courseData.syllabus_buttons.length > 0
      ? courseData.syllabus_buttons
        .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
        .map(btn => ({
          id: btn.id,
          text: btn.button_text || "Download",
          fileUrl: btn.file_url || btn.file || null,
          displayOrder: btn.display_order || 0,
        }))
      : null,
  } : null;

  const faqContent = courseData?.faqs && courseData.faqs.length > 0 ? {
    title: "Frequently Asked Questions",
    items: courseData.faqs
      .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
      .filter((item, index, self) =>
        index === self.findIndex(t =>
          t.question?.toLowerCase() === item.question?.toLowerCase()
        )
      )
      .map(faq => ({
        id: faq.id,
        question: faq.question || "",
        answer: faq.answer || "", // Keep HTML intact for links and formatting
      }))
  } : null;

  const quickLinksContent = (() => {
    // 1. Try clubsData from fetchClubs (User requested source)
    if (clubsData && clubsData.length > 0) {
      return {
        title: "Beyond The Curriculum",
        description: "At KU, you will get to explore more than just academics. Here, we don’t just teach subjects, but help our students in launching their own startups and performing groundbreaking research work.",
        links: clubsData
          .sort((a, b) => (a.id || 0) - (b.id || 0))
          .map(item => ({
            id: item.id,
            icon: item.image || null,
            title: item.heading || "",
            description: item.longDescription || "",
            href: item.link || "#",
            alt: item.image_alt_text || item.heading || ""
          }))
      };
    }

    // 2. Try courseData.clubs (Primary API source)
    if (courseData?.clubs && courseData.clubs.length > 0) {
      return {
        title: "Beyond The Curriculum ",
        description: "At KU, you will get to explore more than just academics. Here, we don’t just teach subjects, but help our students in launching their own startups and performing groundbreaking research work.",
        links: courseData.clubs
          .sort((a, b) => (a.id || 0) - (b.id || 0)) // Optional sorting
          .map(item => ({
            id: item.id,
            icon: item.image || null,
            title: item.heading || "",
            description: parseHtmlToText(item.description) || "",
            href: item.link || "#"
          }))
      };
    }

    // 3. Try courseData.curriculum_btc (Secondary/Legacy API source)
    if (courseData?.curriculum_btc && courseData.curriculum_btc.length > 0) {
      return {
        title: "Beyond The Curriculum ",
        description: "At KU, you will get to explore more than just academics. Here, we don’t just teach subjects, but help our students in launching their own startups and performing groundbreaking research work. ",
        links: courseData.curriculum_btc
          .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
          .filter((item, index, self) =>
            index === self.findIndex(t =>
              t.heading?.toLowerCase() === item.heading?.toLowerCase()
            )
          )
          .map(item => ({
            id: item.id,
            icon: item.icon_image || undefined,
            title: item.heading || "",
            description: parseHtmlToText(item.description) || "",
            href: "#" // curriculum_btc items didn't have link in previous code
          }))
      };
    }

    // 4. Fallback (Static Data)
    return {
      title: "Beyond The Curriculum ",
      description: "At KU, you will get to explore more than just academics. Here, we don’t just teach subjects, but help our students in launching their own startups and performing groundbreaking research work. ",
      links: [
        {
          id: 2,
          icon: "https://kalinga-university.s3.amazonaws.com/kalinga_backend/files/clubs/kif_2.webp",
          title: "Kalinga Incubation Foundation (KIF)",
          description: parseHtmlToText("<p>KIF converts students&#39; bold and unique entrepreneurial ideas into ACTION by providing all-around support.</p>\r\n\r\n<p>&nbsp;</p>"),
          href: "/kif"
        },
        {
          id: 3,
          icon: null,
          title: "Student Clubs",
          description: parseHtmlToText("<p>The vibrant clubs of KU are filled with talented and passionate students who are always ready to showcase their creative skills and develop interests in engaging activities.</p>\r\n\r\n<p>&nbsp;</p>"),
          href: "/student-clubs"
        },
        {
          id: 4,
          icon: null,
          title: "Student Welfare Services",
          description: parseHtmlToText("<p>The Department of Student Welfare (DSW) at KU organises various activities, events, and cultural programs that create a balanced educational environment.</p>"),
          href: "/student-welfare"
        }
      ]
    };
  })();

  // Build navigation tabs based on available sections
  const navigationTabs = (() => {
    const tabs = [];

    // About section
    if (mainIntroContent) {
      tabs.push({ id: 'about', label: 'About' });
    }

    // Eligibility Criteria section
    if (eligibilityContent) {
      tabs.push({ id: 'eligibility', label: 'Eligibility Criteria' });
    }

    // Career Pathways section
    if (careerPathContent && careerPathContent.careers && careerPathContent.careers.length > 0) {
      tabs.push({ id: 'career', label: 'Career Pathways' });
    }

    // Specialization section
    if (whyStudyContent && whyStudyContent.items && whyStudyContent.items.length > 0) {
      tabs.push({ id: 'specialization', label: 'Specialization' });
    }

    // Facilities section (always available)
    tabs.push({ id: 'facilities', label: 'Facilities' });

    //  Events and Activities section (always available)
    tabs.push({ id: 'activities', label: ' Events and Activities' });

    return tabs.length > 0 ? tabs : null;
  })();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--button-red)] mx-auto mb-4"></div>
          <p className="text-[var(--light-text-gray)]">Loading course information...</p>
        </div>
      </div>
    );
  }

  // Check if error is a "not found" error
  const isNotFound = error && (
    error.includes('Course not found') ||
    error.includes('not found') ||
    (!courseData && !loading && error)
  );

  if (isNotFound || (!courseData && !loading && error && error.includes('not found'))) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--dark-blue)] to-[var(--foreground)]">
        <div className="text-center px-4">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-white mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Course Not Found</h2>
            <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">
              The course you're looking for doesn't exist or may have been moved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/admissions#course-finder"
              className="px-6 py-3 bg-[var(--button-red)] text-white rounded-lg font-semibold hover:bg-[var(--button-red)]/90 transition-colors"
            >
              Browse All Courses
            </a>
            <a
              href="/"
              className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Go to Homepage
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (error && !isNotFound) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading course data: {error}</p>
          <p className="text-[var(--light-text-gray)]">Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  if (!courseData && !loading && !error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--dark-blue)] to-[var(--foreground)]">
        <div className="text-center px-4">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-white mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Course Not Found</h2>
            <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">
              The course you're looking for doesn't exist or may have been moved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/admissions#course-finder"
              className="px-6 py-3 bg-[var(--button-red)] text-white rounded-lg font-semibold hover:bg-[var(--button-red)]/90 transition-colors"
            >
              Browse All Courses
            </a>
            <a
              href="/"
              className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Go to Homepage
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {navigationTabs && <CourseNavigation tabs={navigationTabs} />}
      {mainIntroContent && (
        <div id="about" className="scroll-mt-24 md:scroll-mt-28">
          <MainIntro
            title={mainIntroContent.title}
            // subtitle={mainIntroContent.subtitle}
            description={mainIntroContent.description} // This now supports rich HTML from CKEditor
            imageUrl={mainIntroContent.imageUrl}
            imageAlt={mainIntroContent.imageAlt}
            showKnowMore={true}
          />
        </div>
      )}
      {publicationStats && publicationStats.length > 0 && (
        <PublicationGrid stats={publicationStats} />
      )}
      {eligibilityContent && (
        <div id="eligibility" className="scroll-mt-24 md:scroll-mt-28">
          <EligibilityCriteria
            imageUrl={eligibilityContent.imageUrl}
            imageAlt={eligibilityContent.imageAlt}
            duration={eligibilityContent.duration}
            title={eligibilityContent.title}
            criteria={eligibilityContent.criteria}
            admissionTitle={eligibilityContent.admissionTitle}
            admissionButtonLabel={eligibilityContent.admissionButtonLabel}
            href={eligibilityContent.href}
            additionalButtons={eligibilityContent.additionalButtons}
            lateralEntryData={eligibilityContent.lateralEntryData}
          />
        </div>
      )}
      {careerPathContent && careerPathContent.careers && careerPathContent.careers.length > 0 && (
        <div id="career" className="scroll-mt-24 md:scroll-mt-28">
          <CareerPath
            title={careerPathContent.title}
            description={careerPathContent.description}
            careers={careerPathContent.careers}
          />
        </div>
      )}
      {whyStudyContent && whyStudyContent.items && whyStudyContent.items.length > 0 && (
        <div id="specialization" className="scroll-mt-24 md:scroll-mt-28">
          <Specialization

            title={whyStudyContent.sectionTitle}
            subtitle={whyStudyContent.sectionDescription}
            // description={whyStudyContent.sectionDescription}
            items={whyStudyContent.items.map(item => ({
              title: item.title,
              careerOpportunities: [item.body], // Map body to skills array
              imageUrl: item.image,
              imageAlt: item.alt,
              duration: item.duration,
              fees: item.fees,
              eligibility: item.eligibility
            }))}
          />
        </div>
      )}
      {['bachelor-of-arts-bachelor-of-law', 'bachelor-of-business-administration-and-bachelor-of-law', 'bachelor-of-law', 'master-of-law'].includes(slug) && (
        <FacilitySlider />
      )}
      {['bachelor-of-library-information-science', 'master-of-library-information-science'].includes(slug) && (
        <FacilitySlider
          title="Discover Kalinga’s Library"
          subtitle=""
          description="The Library at Kalinga University, Naya Raipur, is the biggest learning platform that offers a large number of books, magazines, Indian & International journals, and other online resources, providing students and faculty members with an outstanding learning experience. It has a reading room capacity for 400 students, which is divided into 2 halls of 200 students each. With modern infrastructure and facilities, students get the highest level of comfort and academic support throughout their journey."
          images={[
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/Library-1.webp",
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/Library-2.webp"
          ]}
          ctaText="Know More"
          ctaLink="/library"
        />
      )}
      {['bachelor-of-arts-in-film-making', 'master-of-arts-in-film-making'].includes(slug) && (
        <FacilitySlider
          title="Film Studio Of KU"
          subtitle="Lights, Camera, Action!"
          description="Kalinga doesn’t teach film making from slides, but hands you the camera so that you can produce your own story. Our studio will give you the vibe of a mini production house where you can write scripts, shoot, edit, collaborate, and make impactful films. With pro-level cameras, lightning setup, sound gear, professional editing software, makeup and costume area, and a soundproof room, learn the A-Z of filmmaking and produce a masterpiece."
          images={[
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/filmmakingstudio.webp",
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/recordingstudio.webp"
          ]}
          ctaText=""
          ctaLink=""
        />
      )}
      {syllabusContent && !(syllabusContent.buttons && syllabusContent.buttons.length === 1) && (
        <div id="syllabus" className="scroll-mt-24 md:scroll-mt-28">
          <OrganogramOfKalinga
            title={syllabusContent.title}
            description={syllabusContent.description}
            buttonLabel={syllabusContent.buttonLabel}
            href={syllabusContent.href}
            buttons={syllabusContent.buttons}
            buttonClassName="!bg-white !text-black"
            arrowClassName="!bg-[var(--dark-orange-red)]"
            arrowIconClassName="!text-white"
            textClassName="!text-black"
            cardBackgroundColor="bg-[var(--button-red)]"
            useContainer={false}
            showImage={false}
            imageUrl={syllabusContent.imageUrl}
            imageAlt={syllabusContent.title}
          />
        </div>
      )}
      <div id="facilities" className="scroll-mt-24 md:scroll-mt-28">
        <Facility
          subtitle="An Environment That Empowers Students"
          title="Step into a World-Class Infrastructure"
          description="Every space of our campus is designed to support learning, innovation, and comfort. Our eco-friendly campus and state-of-the-art facilities are designed to create an environment where students can focus, collaborate, and make life-long memories."
        />
      </div>
      <QuickLinks
        title={quickLinksContent.title}
        description={quickLinksContent.description}
        links={quickLinksContent.links}
        titleClassName="text-white"
        iconWrapperClassName="w-full h-40 sm:h-48"
      />
      {faqContent && faqContent.items && faqContent.items.length > 0 && (
        <FAQ
          subtitle=""
          title={faqContent.title}
          items={faqContent.items}
        />
      )}
      <div id="activities" className="scroll-mt-24 md:scroll-mt-28">
        <StudentActivities />
      </div>
      <AdmissionCareer />
    </div>
  );
}
