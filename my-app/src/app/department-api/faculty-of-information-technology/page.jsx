"use client";

/**
 * Department Page - Faculty of Information Technology
 * 
 * API Field Mappings (from /api/departments/{id}/complete-detail/):
 * 
 * ✅ Mapped Fields:
 * - about_sections[] → MainIntro (title, description, image)
 * - department_faculty_details[] → DeptHeadIntro (name, image, about, quote)
 * - statistics[] → PublicationGrid (name, number, suffix)
 * - placement_statistics[] → Placements (statistics)
 * - placement_info[] → Placements (title, description)
 * - placement_student_photos[] → Placements (images)
 * - video_interviews[] → MediaCardSlider (heading, description, video_link, placeholder_image)
 * - benefits[] → WhyStudy (heading, text, image)
 * - faqs[] → FAQ (question, answer)
 * - how_we_stand_items[] → WeStandOut (description)
 * - clubs[] → UpcomingConference (name, description, logo)
 * - banners[] → Breadcrumb (heroImage) & SEO (og:image, twitter:image)
 * - programs_image → ProgramsOffered (backgroundImage)
 * - programs_image_alt → ProgramsOffered (imageAlt)
 * - programs_offered_overview → ProgramsOffered (description)
 * - courses[] → ProgramsOffered (name, duration, program_type) - NOTE: May not be in API response
 * - name → Breadcrumb (pageTitle, label)
 * - slug → Breadcrumb (href)
 * - meta_title, meta_description, keywords, author, robots → SEO meta tags
 * - canonical_url → SEO canonical link
 * - og_*, twitter_* → SEO Open Graph & Twitter Card tags
 * - schema_json → SEO JSON-LD schema
 * 
 * ⚠️ Unmapped Fields (available in API but not currently used):
 * - program_syllabus_images[] (could be used for DeptSyllabus component)
 * - company_logos[] (could be used for company logos section)
 * - quick_links[] (currently null in API response)
 * 
 * Parent-Child Relationships:
 * - All array fields use optional chaining (?.) and length checks
 * - All nested objects use optional chaining for safe access
 * - Conditional rendering: sections only render if data exists (no fallback to mock data)
 */

import { useState, useEffect, useMemo } from "react";
import MainIntro from "../../components/about/main_intro";
import PublicationGrid from "../../components/research/publication-grid";
import ProgramsOffered from "../../components/department/programs-offered";
import DeptHeadIntro from "../../components/department/dept_head_intro";
import DeptSyllabus from "../../components/department/dept_syllabus";
import Facility from "../../components/admissions/facility";
import StudentActivities from "../../components/department/student_activities";
import WhyStudy from "../../components/department/why-study";
import Placements from "../../components/home/placements";
import AdmissionCareer from "../../components/general/admission_cta";
import FAQ from "../../components/general/faq";
import MediaCardSlider from "../../components/general/media-card-slider";
import WeStandOut from "../../components/department/we_stand_out";
import UpcomingConference from "../../components/research/upcoming_conference";
import { fetchDepartmentCompleteDetail, parseHtmlToParagraphs, parseHtmlToText } from "@/app/lib/api";
import { useBreadcrumbData } from "@/app/components/layout/BreadcrumbContext";

// Generate slug from department name if slug is not available
const generateSlug = (name) => {
  if (!name) return 'faculty-of-information-technology';
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export default function FacultyOfInformationTechnology() {
  const [departmentData, setDepartmentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Department ID - can be made dynamic based on route or props
  const departmentId = 1;

  // Fetch department data from API (includes department_courses)
  useEffect(() => {
    const loadDepartmentData = async () => {
      try {
        setLoading(true);
        const data = await fetchDepartmentCompleteDetail(departmentId);
        setDepartmentData(data);
        setError(null);
      } catch (err) {
        console.error('Failed to load department data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadDepartmentData();
  }, [departmentId]);

  // Update SEO metadata when departmentData is available - Priority for SEO
  useEffect(() => {
    if (!departmentData) return;

    // Helper function to update or create meta tags
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

    // Update document title first (critical for SEO)
    if (departmentData?.meta_title) {
      document.title = departmentData.meta_title;
    } else if (departmentData?.name) {
      document.title = departmentData.name;
    }

    // Basic meta tags
    updateMetaTag('description', departmentData?.meta_description);
    updateMetaTag('keywords', departmentData?.keywords);
    updateMetaTag('author', departmentData?.author);
    updateMetaTag('robots', departmentData?.robots);

    // Canonical URL
    if (departmentData?.canonical_url) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', departmentData.canonical_url);
    }

    // Get banner image for SEO (prioritize banner, then og_image, then department image)
    const seoImage = departmentData?.banners?.[0]?.image || 
                     departmentData?.banners?.[0]?.image_url || 
                     departmentData?.og_image || 
                     departmentData?.image;

    // Open Graph tags
    updateMetaTag('og:title', departmentData?.og_title || departmentData?.meta_title || departmentData?.name, 'property');
    updateMetaTag('og:description', departmentData?.og_description || departmentData?.meta_description, 'property');
    updateMetaTag('og:image', seoImage, 'property');
    updateMetaTag('og:type', departmentData?.og_type, 'property');
    updateMetaTag('og:locale', departmentData?.og_locale, 'property');
    updateMetaTag('og:site_name', departmentData?.og_site_name, 'property');
    updateMetaTag('og:url', departmentData?.og_url || departmentData?.canonical_url, 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', departmentData?.twitter_card);
    updateMetaTag('twitter:title', departmentData?.twitter_title || departmentData?.meta_title || departmentData?.name);
    updateMetaTag('twitter:description', departmentData?.twitter_description || departmentData?.meta_description);
    updateMetaTag('twitter:image', departmentData?.twitter_image || seoImage);
    updateMetaTag('twitter:label1', departmentData?.twitter_label1);
    updateMetaTag('twitter:data1', departmentData?.twitter_data1);
    updateMetaTag('twitter:label2', departmentData?.twitter_label2);
    updateMetaTag('twitter:data2', departmentData?.twitter_data2);

    // Schema JSON-LD
    if (departmentData?.schema_json) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      try {
        // Handle both string and object formats
        const schemaContent = typeof departmentData.schema_json === 'string' 
          ? departmentData.schema_json 
          : JSON.stringify(departmentData.schema_json);
        schemaScript.textContent = schemaContent;
      } catch (e) {
        console.error('Error parsing schema JSON:', e);
      }
    }
  }, [departmentData]);

  // Map API data to MainIntro content - Only if data exists
  // Keep mock content for second paragraph in "read more" section
  const mainIntroContent = departmentData?.about_sections?.[0] ? (() => {
    const apiParagraphs = parseHtmlToParagraphs(departmentData.about_sections[0].content);
    // Mock second paragraph for "read more" section
    const mockSecondParagraph = "The Faculty of Computer Science and Information Technology is a department of skilled professionals who combine theoretical and practical knowledge and prepare students with the trending IT skills that will keep them ahead in the digital world.";
    
    // Combine: first paragraph from API, mock second paragraph, then rest from API
    const description = apiParagraphs.length > 0 
      ? [apiParagraphs[0], mockSecondParagraph, ...apiParagraphs.slice(1)]
      : [mockSecondParagraph];
    
    return {
      title: departmentData.about_sections[0].heading,
      subtitle: departmentData.about_sections[0].heading,
      description: description,
      imageUrl: departmentData.about_sections[0].image,
      imageAlt: departmentData.about_sections[0].alt,
      initialVisibleParagraphs: 2,
      showKnowMore: true,
      knowMoreLabel: "Read More",
    };
  })() : null;

  // Map API data to DeptHeadIntro - Only if data exists
  const mentorIntroProps = departmentData?.department_faculty_details && departmentData.department_faculty_details.length > 0
    ? departmentData.department_faculty_details.map(faculty => ({
        cardClassName: "",
        imageSrc: faculty.image,
        title: faculty.name,
        subtitle: faculty.qualification || "Dean of Faculty",
        department: departmentData.name || "Faculty of Information Technology",
        message: parseHtmlToParagraphs(faculty.about),
        quote: faculty.quote_description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      }))
    : null;

  // Map API data to publicationStats for PublicationGrid from milestones - Only if data exists
  const publicationStats = departmentData?.milestones && departmentData.milestones.length > 0
    ? departmentData.milestones
        .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
        .map(milestone => ({
          title: milestone.heading || "",
          value: `${milestone.number || ""}${milestone.suffix ? ` ${milestone.suffix}` : ""}`.trim(),
          description: milestone.description || "", // Use description from milestones
        }))
    : null;

  // Prepare breadcrumb data - Only set when departmentData is fully loaded
  const breadcrumbData = (departmentData?.name && !loading) ? {
    heroImage: departmentData?.banners?.[0]?.image || departmentData?.banners?.[0]?.image_url || departmentData.image || "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/student-gathered.webp",
    pageTitle: departmentData.name,
    customBreadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Departments', href: '/departments' },
      { 
        label: departmentData.name, 
        href: `/departments/${departmentData.slug || generateSlug(departmentData.name)}` 
      }
    ]
  } : loading ? {
    // During loading, set empty breadcrumbs to hide breadcrumb component
    customBreadcrumbs: []
  } : null;

  // Update breadcrumb using the hook
  useBreadcrumbData(breadcrumbData);

  // Map API data to videoItems for MediaCardSlider - Only if data exists
  const videoItems = departmentData?.video_interviews && departmentData.video_interviews.length > 0
    ? departmentData.video_interviews.map(video => ({
        id: video.id,
        name: video.heading,
        description: parseHtmlToText(video.description),
        thumbnail: video.placeholder_image,
        videoUrl: video.video_link,
      }))
    : null;

  // Map API data to whyStudyItems for WhyStudy component - Only if data exists
  const whyStudyItems = departmentData?.benefits && departmentData.benefits.length > 0
    ? departmentData.benefits
        .sort((a, b) => (a.id || 0) - (b.id || 0)) // Sort by id to maintain order
        .map((benefit, index) => ({
          id: benefit.id,
          title: benefit.heading || "",
          body: benefit.text || "",
          variant: index % 2 === 0 ? "gray" : "amber",
          image: benefit.image || null,
        }))
    : null;

  // Map API data to faqItems for FAQ component - Only if data exists
  // Use useMemo to prevent array recreation on every render
  const faqItems = useMemo(() => {
    if (!departmentData?.faqs || departmentData.faqs.length === 0) {
      return null;
    }
    return departmentData.faqs
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
      }));
  }, [departmentData?.faqs]);

  // Map API data to weStandOutCards for WeStandOut component - Only if data exists
  const weStandOutCards = departmentData?.how_we_stand_items && departmentData.how_we_stand_items.length > 0
    ? departmentData.how_we_stand_items
        .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
        .map(item => ({
          id: item.id,
          text: parseHtmlToText(item.description) || "",
        }))
    : null;

  // Map API data to newsConferences for UpcomingConference component - Only if data exists
  const newsConferences = departmentData?.clubs && departmentData.clubs.length > 0
    ? departmentData.clubs.map(club => ({
        id: club.id,
        title: club.name || "",
        date: "",
        category: "Student Club",
        description: parseHtmlToText(club.description) || "",
        image: club.logo || null,
      }))
    : null;

  // Map API data to placementData for Placements component
  // Statistics structure: { id, name, number, suffix, featured, display_order, department }
  const placementData = departmentData ? {
    placement_statistics: (departmentData.statistics || departmentData.placement_statistics || [])
      .map(stat => ({
        id: stat.id,
        name: stat.name || "",
        number: stat.number || 0,
        suffix: stat.suffix || "",
        featured: stat.featured || false,
        display_order: stat.display_order || 0,
      })),
    placement_info: departmentData.placement_info && departmentData.placement_info.length > 0
      ? departmentData.placement_info.map(info => ({
          ...info,
          description: parseHtmlToText(info.description) || "",
        }))
      : [],
    placement_student_photos: departmentData.placement_student_photos || [],
  } : null;

  // Map API data to programsOffered from department_courses field
  const programsOffered = useMemo(() => {
    const coursesData = departmentData?.department_courses;
    
    if (!coursesData || !Array.isArray(coursesData) || coursesData.length === 0) {
      return null;
    }
    
    return coursesData.map(course => {
      // Determine level based on program_type
      let level = "UG";
      if (course.program_type) {
        const programType = course.program_type.toLowerCase();
        if (programType === "pg" || programType === "postgraduate") {
          level = "PG";
        } else if (programType === "phd" || programType === "doctorate") {
          level = "PhD";
        } else if (programType === "diploma") {
          level = "Diploma";
        } else if (programType === "ug" || programType === "undergraduate") {
          level = "UG";
        }
      }
      
      // Format duration
      const durationNum = typeof course.duration === 'number' ? course.duration : parseInt(course.duration);
      let duration = "3 Year";
      if (!isNaN(durationNum)) {
        duration = `${durationNum} Year${durationNum > 1 ? 's' : ''}`;
      } else if (course.duration && typeof course.duration === 'string') {
        duration = course.duration;
      }
      
      return {
        id: course.id,
        title: course.name || "",
        duration: duration,
        level: level,
      };
    });
  }, [departmentData?.department_courses]);

  // Map programs image and overview from API
  const programsImage = departmentData?.programs_image || null;
  const programsImageAlt = departmentData?.programs_image_alt || "Programs Offered";
  const programsOverview = departmentData?.programs_offered_overview
    ? parseHtmlToText(departmentData.programs_offered_overview)
    : "Explore our comprehensive range of undergraduate, postgraduate, and diploma programs designed to equip you with cutting-edge IT skills. From Artificial Intelligence and Machine Learning to Cybersecurity and Data Science, our programs are tailored to meet the demands of the rapidly evolving tech industry.";

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--button-red)] mx-auto mb-4"></div>
          <p className="text-[var(--light-text-gray)]">Loading department information...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading department data: {error}</p>
          <p className="text-[var(--light-text-gray)]">Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {mainIntroContent && (
        <MainIntro 
          title={mainIntroContent.title}
          subtitle={mainIntroContent.subtitle}
          description={mainIntroContent.description}
          imageUrl={mainIntroContent.imageUrl}
          imageAlt={mainIntroContent.imageAlt}
          initialVisibleParagraphs={mainIntroContent.initialVisibleParagraphs}
          showKnowMore={mainIntroContent.showKnowMore}
          knowMoreLabel={mainIntroContent.knowMoreLabel}
        />
      )}
      {publicationStats && publicationStats.length > 0 && (
        <PublicationGrid stats={publicationStats} />
      )}
      {programsOffered && programsOffered.length > 0 && (
        <ProgramsOffered 
          programs={programsOffered}
          title="Programs Offered"
          description={programsOverview}
          backgroundImage={programsImage || "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/programs-offered.webp"}
          imageAlt={programsImageAlt}
        />
      )}
      {mentorIntroProps && mentorIntroProps.length > 0 && (
        <DeptHeadIntro items={mentorIntroProps} />
      )}
      <DeptSyllabus />
      <Placements placementData={placementData} />
      {videoItems && videoItems.length > 0 && (
        <MediaCardSlider
          categoryTitle="Video Interviews"
          title="Video Interviews"
          description="Watch interviews with our students and faculty members"
          videoItems={videoItems}
          cardBgClass="bg-white"
          nameTextClass="text-[var(--button-red)]"
          descriptionTextClass=""
          swiperClassName="ccrc-video-slider"
        />
      )}
      <Facility />
      {whyStudyItems && whyStudyItems.length > 0 && (
        <WhyStudy 
          items={whyStudyItems}
          sectionTitle={departmentData?.name 
            ? `Why Study ${departmentData.name.replace(/^Faculty of\s+/i, '')}?` 
            : "Why Study Information Technology?"}
        />
      )}
      {weStandOutCards && weStandOutCards.length > 0 && (
        <WeStandOut cards={weStandOutCards} />
      )}
      {newsConferences && newsConferences.length > 0 && (
        <UpcomingConference 
          conferences={newsConferences}
          title="Upcoming Conferences & Events"
          backgroundColor="bg-[var(--light-gray)]"
          backgroundColorcard="bg-white"
          showCategory={false}
          showDate={false}
          imageContainerClass="w-full md:w-1/3 flex justify-center"
        />
      )}
      <StudentActivities />
      {faqItems && faqItems.length > 0 && (
        <FAQ 
          key={`faq-${departmentData?.id || 'default'}-${faqItems.length}-${faqItems.map(item => item.id).join('-')}`} 
          items={faqItems} 
        />
      )}
      <AdmissionCareer />
    </div>
  );
}