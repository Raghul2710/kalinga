"use client";

import { useState, useEffect } from "react";
import MainIntro from "../../components/about/main_intro";
import PublicationGrid from "../../components/research/publication-grid";
import Facility from "../../components/admissions/facility";
import StudentActivities from "../../components/department/student_activities";
import EligibilityCriteria from "../../components/course/eligibility_criteria";
import CareerPath from "../../components/course/career_path";
import BoardStudies from "../../components/course/board-studies";
import WhyStudy from "@/app/components/department/why-study";
import OrganogramOfKalinga from "@/app/components/about/organogram_of_kalinga";
import FAQ from "@/app/components/general/faq";
import AdmissionCareer from "@/app/components/general/admission_cta";
import CourseNavigation from "@/app/components/general/course-navigation";
import QuickLinks from "@/app/components/general/quick_links";
import { fetchCourseCompleteDetail, parseHtmlToParagraphs, parseHtmlToText, parseHtmlListItems } from "@/app/lib/api";
import { useBreadcrumbData } from "@/app/components/layout/BreadcrumbContext";

// Helper function to format duration
const formatDuration = (duration, semester) => {
  if (duration && semester) {
    return `${duration} Year${duration > 1 ? 's' : ''} (${semester} Semester${semester > 1 ? 's' : ''})`;
  }
  return "3 Years (6 Semesters)";
};

// No initial breadcrumb - will be set only after courseData loads

function Courses() {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Course ID - can be made dynamic based on route or props
  const courseId = 3;

  // Generate slug from course name if slug is not available
  const generateSlug = (name) => {
    if (!name) return 'bachelor-of-animation-and-visual-effects';
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  // Fetch course data from API
  useEffect(() => {
    const loadCourseData = async () => {
      try {
        setLoading(true);
        const data = await fetchCourseCompleteDetail(courseId);
        setCourseData(data);
        setError(null);
      } catch (err) {
        console.error('Failed to load course data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCourseData();
  }, [courseId]);

  // Update SEO metadata when courseData is available - Priority for SEO
  useEffect(() => {
    if (!courseData) return;

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
    if (courseData.meta_title) {
      document.title = courseData.meta_title;
    } else if (courseData.name) {
      document.title = courseData.name;
    }

    // Basic meta tags
    updateMetaTag('description', courseData.meta_description);
    updateMetaTag('keywords', courseData.keywords);
    updateMetaTag('author', courseData.author);
    updateMetaTag('robots', courseData.robots);

    // Canonical URL
    if (courseData.canonical_url) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', courseData.canonical_url);
    }

    // Open Graph tags
    updateMetaTag('og:title', courseData.og_title || courseData.meta_title || courseData.name, 'property');
    updateMetaTag('og:description', courseData.og_description || courseData.meta_description, 'property');
    updateMetaTag('og:image', courseData.og_image || courseData.image, 'property');
    updateMetaTag('og:type', courseData.og_type, 'property');
    updateMetaTag('og:locale', courseData.og_locale, 'property');
    updateMetaTag('og:site_name', courseData.og_site_name, 'property');
    updateMetaTag('og:url', courseData.og_url || courseData.canonical_url, 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', courseData.twitter_card);
    updateMetaTag('twitter:title', courseData.twitter_title || courseData.meta_title || courseData.name);
    updateMetaTag('twitter:description', courseData.twitter_description || courseData.meta_description);
    updateMetaTag('twitter:image', courseData.twitter_image || courseData.image);
    updateMetaTag('twitter:label1', courseData.twitter_label1);
    updateMetaTag('twitter:data1', courseData.twitter_data1);
    updateMetaTag('twitter:label2', courseData.twitter_label2);
    updateMetaTag('twitter:data2', courseData.twitter_data2);

    // Schema JSON-LD
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

  // Map API data to MainIntro content - Only if data exists
  const mainIntroContent = courseData?.about_sections?.[0] ? {
    title: courseData.about_sections[0].heading,
    subtitle: "About The Program",
    description: parseHtmlToParagraphs(courseData.about_sections[0].content),
    imageUrl: courseData.about_sections[0].image,
    imageAlt: courseData.about_sections[0].alt, 
  } : null;

  // PublicationGrid content - Map from API milestones - Only if data exists
  const publicationStats = courseData?.milestones && courseData.milestones.length > 0
    ? courseData.milestones
        .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
        .map(milestone => ({
          title: milestone.heading || "",
          value: `${milestone.number || ""} ${milestone.symbol || ""}`.trim(),
          description: milestone.description || "",
        }))
    : null;

  // EligibilityCriteria content - Map from API eligibility_criteria - Only if data exists
  const eligibilityContent = courseData?.eligibility_criteria?.[0] ? {
    imageUrl: courseData.eligibility_criteria[0].image || courseData?.image,
    imageAlt: courseData?.image_alt || "Students",
    duration: formatDuration(courseData?.duration, courseData?.semester),
    title: "Eligibility Criteria",
    criteria: parseHtmlListItems(courseData.eligibility_criteria[0].eligibility_criteria),
    admissionTitle: courseData.eligibility_criteria[0].cta_text,
    admissionButtonLabel: "Admission Open", // Keep static as per requirement
    ctaLink: courseData.eligibility_criteria[0].cta_link || null,
  } : null;

  // Prepare breadcrumb data - Only set when courseData is fully loaded
  // Hide breadcrumb during loading by setting empty array, show only after course name and SEO data loads
  const breadcrumbData = (courseData?.name && !loading) ? {
    heroImage: courseData?.banners?.[0]?.image || courseData?.banners?.[0]?.image_url || courseData.image || "https://kalinga-university.s3.ap-south-1.amazonaws.com/course/student-computer.webp",
    pageTitle: courseData.name,
    customBreadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Departments', href: '/departments' },
      { 
        label: courseData.name, 
        href: `/departments/${courseData.slug || generateSlug(courseData.name)}` 
      }
    ]
  } : loading ? {
    // During loading, set empty breadcrumbs to hide breadcrumb component
    customBreadcrumbs: []
  } : null;

  // Update breadcrumb using the hook
  // During loading: shows empty (hidden)
  // After data loads: shows actual breadcrumb with course name and slug
  useBreadcrumbData(breadcrumbData);

  // CareerPath content - Map from API career_info - Only if data exists
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
  } : null;

  // WhyStudy content - Map from API specializations - Only if data exists
  const whyStudyContent = courseData?.specializations && courseData.specializations.length > 0 ? {
    sectionTitle: "Specialization",
    backgroundImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/why-this-course-1.webp",
    items: courseData.specializations
      .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
      .map((specialization, index) => ({
        id: specialization.id,
        title: specialization.heading || "",
        body: parseHtmlToText(specialization.description) || "",
        variant: index % 2 === 0 ? "gray" : "amber",
        image: specialization.icon_image || null,
      }))
  } : null;

  // Syllabus content - Map from API syllabus - Only if data exists
  const syllabusContent = courseData?.syllabus && courseData.syllabus.length > 0 ? {
    title: courseData.syllabus[0].heading,
    description: parseHtmlToParagraphs(courseData.syllabus[0].description),
    buttonLabel: "Explore Now",
    href: courseData.syllabus[0].link || "/about-us",
    imageUrl: courseData.syllabus[0].file || null,
    showImage: !!courseData.syllabus[0].file,
  } : null;

  // FAQ content - Map from API faqs - Only if data exists
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

  // QuickLinks content - Map from API curriculum_btc - Use mock data as fallback
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
    // Mock/fallback data for Beyond The Curriculum section
    title: "Beyond The Curriculum ",
    description: "",
    links: [
      {
        id: 1,
        title: "Kalinga Incubation Foundation (KIF)",
        description: "KIF converts students' bold and unique entrepreneurial ideas into ACTION by providing all-around support.",
      },
      {
        id: 2,
        title: "Corporate Training And Consultancy Division (CTCD)",
        description: "CTCD offers customised training programs to junior, middle, and senior levels of management of different companies.",
      },
      {
        id: 3,
        title: "Career Development Centre",
        description: "It connects students with different companies and trains them in essential skills, helping them achieve their personal and professional goals.",
      },
    ],
  };

  // Course Navigation Tabs - Map from API quick_links - Only if data exists
  const navigationTabs = courseData?.quick_links && courseData.quick_links.length > 0
    ? courseData.quick_links
        .map(link => ({
          id: link.link,
          label: link.name
        }))
        .filter((tab, index, self) => 
          index === self.findIndex(t => t.id === tab.id)
        )
        .sort((a, b) => {
          const order = ['about', 'program details', 'specialization', 'career', 'career pathway', 'eligibility', 'fees', 'syllabus'];
          const aIndex = order.findIndex(o => a.id.toLowerCase().includes(o.toLowerCase()));
          const bIndex = order.findIndex(o => b.id.toLowerCase().includes(o.toLowerCase()));
          if (aIndex === -1 && bIndex === -1) return 0;
          if (aIndex === -1) return 1;
          if (bIndex === -1) return -1;
          return aIndex - bIndex;
        })
    : null;

  // Show loading state
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

  // Show error state
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

  return (
    <div>
      {navigationTabs && <CourseNavigation tabs={navigationTabs} />}
      {mainIntroContent && (
      <div id="about">
        <MainIntro 
          title={mainIntroContent.title}
          subtitle={mainIntroContent.subtitle}
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
      <div id="eligibility">
        <EligibilityCriteria 
          imageUrl={eligibilityContent.imageUrl}
          imageAlt={eligibilityContent.imageAlt}
          duration={eligibilityContent.duration}
          title={eligibilityContent.title}
          criteria={eligibilityContent.criteria}
          admissionTitle={eligibilityContent.admissionTitle}
          admissionButtonLabel={eligibilityContent.admissionButtonLabel}
        />
      </div>
      )}
      {careerPathContent && (
      <div id="career">
        <CareerPath 
          title={careerPathContent.title}
          description={careerPathContent.description}
          careers={careerPathContent.careers}
        />
      </div>
      )}
      {whyStudyContent && whyStudyContent.items && whyStudyContent.items.length > 0 && (
      <div id="specialization">
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
      <div id="facilities">
        <Facility />
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
      {/* <BoardStudies /> */}
      <div id="activities">
        <StudentActivities />
      </div>
      <AdmissionCareer />
    </div>
  );
}

export default Courses;