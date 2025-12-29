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
import WhyStudy from "@/app/components/department/why-study";
import OrganogramOfKalinga from "@/app/components/about/organogram_of_kalinga";
import FAQ from "@/app/components/general/faq";
import AdmissionCareer from "@/app/components/general/admission_cta";
import CourseNavigation from "@/app/components/general/course-navigation";
import QuickLinks from "@/app/components/general/quick_links";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";
import { fetchAllCourses, fetchCourseCompleteDetail, fetchDepartmentCompleteDetail, parseHtmlToParagraphs, parseHtmlToText, parseHtmlListItems } from "@/app/lib/api";
import { useBreadcrumbData } from "@/app/components/layout/BreadcrumbContext";

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

  // Find course ID from slug
  useEffect(() => {
    const findCourse = async () => {
      try {
        setLoading(true);
        setError(null);
        const courses = await fetchAllCourses();
        
        const normalizedSlug = normalizeSlug(slug);
        console.log(`[Course Page] Looking for course with slug: "${slug}" (normalized: "${normalizedSlug}")`);
        console.log(`[Course Page] Total courses fetched: ${courses.length}`);
        
        // Try multiple matching strategies
        let course = null;
        
        // Strategy 1: Exact slug match (case-insensitive)
        course = courses.find(c => {
          if (!c.slug) return false;
          return normalizeSlug(c.slug) === normalizedSlug;
        });
        
        // Strategy 2: Generated slug from name
        if (!course) {
          course = courses.find(c => {
            if (!c.name) return false;
            return normalizeSlug(generateSlug(c.name)) === normalizedSlug;
          });
        }
        
        // Strategy 3: Partial match on slug
        if (!course) {
          course = courses.find(c => {
            if (!c.slug) return false;
            return normalizeSlug(c.slug).includes(normalizedSlug) || normalizedSlug.includes(normalizeSlug(c.slug));
          });
        }
        
        // Strategy 4: Match on name (remove common prefixes/suffixes)
        if (!course) {
          const searchTerms = normalizedSlug.split('-').filter(t => t.length > 2);
          course = courses.find(c => {
            if (!c.name) return false;
            const normalizedName = normalizeSlug(c.name);
            return searchTerms.every(term => normalizedName.includes(term));
          });
        }
        
        // Log potential matches for debugging
        if (!course) {
          const potentialMatches = courses.filter(c => {
            const cSlug = normalizeSlug(c.slug || generateSlug(c.name || ''));
            const cName = (c.name || '').toLowerCase();
            const searchName = slug.replace(/-/g, ' ').toLowerCase();
            
            return cSlug.includes(normalizedSlug) || 
                   normalizedSlug.includes(cSlug) ||
                   cName.includes(searchName) ||
                   searchName.includes(cName);
          });
          
          console.log(`[Course Page] No exact match found. Potential matches (${potentialMatches.length}):`, 
            potentialMatches.slice(0, 10).map(c => ({ 
              id: c.id, 
              name: c.name, 
              slug: c.slug,
              generatedSlug: generateSlug(c.name),
              normalizedSlug: normalizeSlug(c.slug || generateSlug(c.name))
            }))
          );
        }
        
        if (course) {
          console.log(`[Course Page] Found course:`, { 
            id: course.id, 
            name: course.name, 
            slug: course.slug,
            generatedSlug: generateSlug(course.name),
            matchType: 'found'
          });
          setCourseId(course.id);
        } else {
          console.error(`[Course Page] Course not found for slug: "${slug}"`);
          console.error(`[Course Page] All course slugs:`, courses.slice(0, 20).map(c => ({
            id: c.id,
            name: c.name,
            slug: c.slug,
            normalized: normalizeSlug(c.slug || generateSlug(c.name))
          })));
          setError(`Course not found: ${slug}`);
          setLoading(false);
        }
      } catch (err) {
        console.error('[Course Page] Failed to find course:', err);
        setError(`Failed to load courses: ${err.message}`);
        setLoading(false);
      }
    };

    if (slug) {
      findCourse();
    }
  }, [slug]);

  // Fetch course data from API
  useEffect(() => {
    if (!courseId) return;

    const loadCourseData = async () => {
      try {
        setLoading(true);
        setError(null);
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
  }, [courseId]);

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
  }, [courseData]);

  // Map API data to components (same logic as static page)
  const mainIntroContent = courseData?.about_sections?.[0] ? {
    title: courseData.about_sections[0].heading,
    subtitle: "About The Program",
    description: parseHtmlToParagraphs(courseData.about_sections[0].content),
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
    admissionTitle:  "Your Next Big Chapter Starts With One Click",

    admissionButtonLabel: "Admission Open",
    href: courseData.eligibility_criteria[0].cta_link || null,
  } : null;

  const breadcrumbData = (courseData?.name && !loading) ? {
    heroImage: courseData?.banners?.[0]?.image || courseData?.banners?.[0]?.image_url || courseData.image || "https://kalinga-university.s3.ap-south-1.amazonaws.com/course/student-computer.webp",
    pageTitle: courseData.name,
    customBreadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Departments', href: '/departments' },
      { 
        label: courseData.name, 
        href: `/courses/${courseData.slug || generateSlug(courseData.name)}` 
      }
    ]
  } : loading ? {
    customBreadcrumbs: []
  } : null;

  useBreadcrumbData(breadcrumbData);

  const careerPathContent = courseData?.career_info && courseData.career_info.length > 0 ? {
    title: "Career Pathway",
    description: "Get ready to turn your unique ideas into reality in the world of tech and design with limitless career opportunities.",
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
    sectionTitle: " Course Specialization",
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
    description: parseHtmlToParagraphs(courseData.syllabus_info.description),
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
        answer: parseHtmlToText(faq.answer) || "",
      }))
  } : null;

  const quickLinksContent = courseData?.curriculum_btc && courseData.curriculum_btc.length > 0 ? {
    title: "Beyond The Curriculum ",
    description: "",
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
      }))
  } : {
    title: "Beyond The Curriculum ",
    description: "Beyond the classroom, Kalinga provides platforms for students to develop useful skills, explore concepts, and get ready for opportunities in the real world. Through industry-focused training, career counseling, and entrepreneurship support, students are encouraged to develop both personally and professionally.",
    links: [
      {
        id: 1,
        title: "Kalinga Incubation Foundation (KIF)",
        href: "/kif",
        description: "KIF converts students' bold and unique entrepreneurial ideas into ACTION by providing all-around support.",
      },
      {
        id: 2,
        title: "Corporate Training And Consultancy Division (CTCD)",
        href: "/ctcd",
        description: "CTCD offers customised training programs to junior, middle, and senior levels of management of different companies.",
      },
      {
        id: 3,
        title: "Career Development Centre",
        href: "/training-and-placement-cell",

        description: "It connects students with different companies and trains them in essential skills, helping them achieve their personal and professional goals.",
      },
    ],
  };

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
    
    // Student Activities section (always available)
    tabs.push({ id: 'activities', label: 'Student Activities' });
    
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

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading course data: {error}</p>
          <p className="text-[var(--light-text-gray)]">Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[var(--light-text-gray)]">Course not found.</p>
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
            description={mainIntroContent.description}
            imageUrl={mainIntroContent.imageUrl}
            imageAlt={mainIntroContent.imageAlt}
            showKnowMore={false}
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
          <WhyStudy 
            sectionTitle={whyStudyContent.sectionTitle}
            backgroundImage={whyStudyContent.backgroundImage}
            items={whyStudyContent.items}
          />
        </div>
      )}
      {syllabusContent && (
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
      )}
      <div id="facilities" className="scroll-mt-24 md:scroll-mt-28">
        <Facility 
        subtitle="An Environment That Empowers Students"
        />
      </div>
      <QuickLinks 
        title={quickLinksContent.title}
        description={quickLinksContent.description}
        links={quickLinksContent.links}
        titleClassName="text-white"
      />
      {faqContent && faqContent.items && faqContent.items.length > 0 && (
        <FAQ 
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
