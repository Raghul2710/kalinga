"use client";

/**
 * Dynamic Department Page
 * Route: /departments/[slug]
 * 
 * This page dynamically loads department data based on the slug from the URL.
 */

import { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import MainIntro from "@/app/components/about/main_intro";
import PublicationGrid from "@/app/components/research/publication-grid";
import ProgramsOffered from "@/app/components/department/programs-offered";
import DeptHeadIntro from "@/app/components/department/dept_head_intro";
import DeptSyllabus from "@/app/components/department/dept_syllabus";
import Facility from "@/app/components/admissions/facility";
import StudentActivities from "@/app/components/department/student_activities";
import WhyStudy from "@/app/components/department/why-study";
import Placements from "@/app/components/home/placements";
import AdmissionCareer from "@/app/components/general/admission_cta";
import FAQ from "@/app/components/general/faq";
import MediaCardSlider from "@/app/components/general/media-card-slider";
import WeStandOut from "@/app/components/department/we_stand_out";
import UpcomingConference from "@/app/components/research/upcoming_conference";
import Testimonials from "@/app/components/home/Testimonials";
import DataTable from "@/app/components/general/data-table";
import SectionHeading from "@/app/components/general/SectionHeading";
import EligibilityCriteria from "@/app/components/course/eligibility_criteria";
import CareerPath from "@/app/components/course/career_path";
import { fetchAllDepartments, fetchDepartmentCompleteDetail, fetchAllDepartmentsCourses, parseHtmlToParagraphs, parseHtmlToText, parseHtmlListItems, fetchDesignations } from "@/app/lib/api";
import Gallery from "@/app/components/general/gallery";

// import CustomScrollCard from "@/app/components/gsap/CustomScrollCard"; // No longer used
import Specialization from "@/app/components/course/specialization";
import Image from "next/image";

// Generate slug from department name if slug is not available
const generateSlug = (name) => {
  if (!name) return '';
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export default function DynamicDepartmentPage() {
  const params = useParams();
  const slug = params?.slug;

  const [departmentData, setDepartmentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [departmentId, setDepartmentId] = useState(null);
  const [departmentCourses, setDepartmentCourses] = useState([]);
  const [designations, setDesignations] = useState([]);

  // Find department data from slug
  useEffect(() => {
    const findDepartment = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log(`[Dept Page] Looking for department: "${slug}"`);

        // Strategy 1: Try direct fetch by slug first (faster)
        try {
          const directData = await fetchDepartmentCompleteDetail(slug);
          if (directData && directData.id) {
            console.log(`[Dept Page] Successfully fetched department by slug:`, directData.name);
            setDepartmentData(directData);
            setDepartmentId(directData.id);
            setLoading(false);
            return;
          }
        } catch (slugErr) {
          console.warn(`[Dept Page] Direct slug fetch for "${slug}" failed, falling back to search.`, slugErr);
        }

        // Strategy 2: Fallback to list search if direct slug fetch fails
        const departments = await fetchAllDepartments();
        const dept = departments.find(d =>
          (d.slug && d.slug === slug) ||
          generateSlug(d.name) === slug
        );

        if (dept) {
          console.log(`[Dept Page] Found department in list: ${dept.name}`);
          setDepartmentId(dept.id);
        } else {
          setError('Department not found');
          setLoading(false);
        }
      } catch (err) {
        console.error('[Dept Page] Failed to resolve department:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    if (slug) {
      findDepartment();
    }
  }, [slug]);

  // Fetch complete details if only ID was found (fallback strategy)
  useEffect(() => {
    if (!departmentId || departmentData?.id === departmentId) return;

    const loadDepartmentData = async () => {
      try {
        setLoading(true);
        const data = await fetchDepartmentCompleteDetail(departmentId);
        setDepartmentData(data);
        setError(null);
      } catch (err) {
        console.error('[Dept Page] Failed to fetch dept details by ID:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadDepartmentData();
  }, [departmentId, departmentData?.id]);

  // Fetch department courses (optimized endpoint)
  useEffect(() => {
    if (!slug) return;

    const loadDepartmentCourses = async () => {
      try {
        const data = await fetchAllDepartmentsCourses(null, slug);
        if (data && data.courses && Array.isArray(data.courses)) {
          setDepartmentCourses(data.courses);
        }
      } catch (err) {
        console.warn('[Dept Page] Optimization: department courses fetch failed, ignoring.', err);
      }
    };

    loadDepartmentCourses();
  }, [slug]);

  // Update SEO metadata when departmentData is available
  useEffect(() => {
    if (!departmentData) return;

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

    if (departmentData?.meta_title) {
      document.title = departmentData.meta_title;
    } else if (departmentData?.name) {
      document.title = departmentData.name;
    }

    updateMetaTag('description', departmentData?.meta_description);
    updateMetaTag('keywords', departmentData?.keywords);
    updateMetaTag('author', departmentData?.author);
    updateMetaTag('robots', departmentData?.robots);

    if (departmentData?.canonical_url) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', departmentData.canonical_url);
    }

    updateMetaTag('og:title', departmentData?.og_title || departmentData?.meta_title || departmentData?.name, 'property');
    updateMetaTag('og:description', departmentData?.og_description || departmentData?.meta_description, 'property');
    updateMetaTag('og:image', departmentData?.og_image, 'property');
    updateMetaTag('og:type', departmentData?.og_type, 'property');
    updateMetaTag('og:locale', departmentData?.og_locale, 'property');
    updateMetaTag('og:site_name', departmentData?.og_site_name, 'property');
    updateMetaTag('og:url', departmentData?.og_url || departmentData?.canonical_url, 'property');

    updateMetaTag('twitter:card', departmentData?.twitter_card);
    updateMetaTag('twitter:title', departmentData?.twitter_title || departmentData?.meta_title || departmentData?.name);
    updateMetaTag('twitter:description', departmentData?.twitter_description || departmentData?.meta_description);
    updateMetaTag('twitter:image', departmentData?.twitter_image);

    if (departmentData?.schema_json) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      try {
        schemaScript.textContent = departmentData.schema_json;
      } catch (e) {
        console.error('Error parsing schema JSON:', e);
      }
    }
  }, [departmentData]);

  // Fetch designations
  useEffect(() => {
    const loadDesignations = async () => {
      try {
        const data = await fetchDesignations();
        setDesignations(data);
      } catch (err) {
        console.warn('[Dept Page] Failed to fetch designations:', err);
      }
    };
    loadDesignations();
  }, []);

  // Map API data to components (same logic as static page)
  const mainIntroContent = departmentData?.about_sections?.[0] ? (() => {
    const description = departmentData.about_sections[0].content;

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

  // Map API data to DeptHeadIntro component props
  // Component expects: title, subtitle, department, imageSrc, quote, message
  const deptHeadIntroContent = departmentData?.department_faculty_details?.[0] ? (() => {
    const faculty = departmentData.department_faculty_details[0];
    const designationObj = designations.find(d => d.id === faculty.designation);
    const rawDesignationName = designationObj ? designationObj.name : (faculty.qualification || "Dean");
    const designationName = rawDesignationName.split(',')[0].trim();

    return {
      title: faculty.name || "",
      subtitle: `Message from the ${designationName}`,
      department: departmentData.name || "",
      imageSrc: faculty.image || "",
      quote: faculty.quote_description || "",
      message: faculty.about || "",
    };
  })() : null;

  const publicationStats = departmentData?.milestones && departmentData.milestones.length > 0
    ? departmentData.milestones
      .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
      .map(milestone => ({
        title: milestone.heading || "",
        value: `${milestone.number || ""} ${milestone.symbol || ""}`.trim(),
        description: milestone.description || "",
      }))
    : null;

  const programsOffered = useMemo(() => {
    // Prioritize courses from the optimized endpoint, fallback to department_courses
    const coursesData = (departmentCourses && departmentCourses.length > 0)
      ? departmentCourses
      : departmentData?.department_courses;

    if (!coursesData || !Array.isArray(coursesData) || coursesData.length === 0) {
      return null;
    }

    return coursesData.map(course => {
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
        shortName: course.short_name || "",
        duration: duration,
        level: level,
        slug: course.slug || null,
      };
    });
  }, [departmentCourses, departmentData?.department_courses]);

  // Map program_syllabus_images data (prioritize this over legacy fields)
  const programSyllabusImage = departmentData?.program_syllabus_images?.[0];
  const programsImage = programSyllabusImage?.image || programSyllabusImage?.image_url || departmentData?.programs_image || null;
  const programsImageAlt = programSyllabusImage?.image_alt || departmentData?.programs_image_alt || "Programs Offered";
  const programsOverview = programSyllabusImage?.programs_offered_overview || departmentData?.programs_offered_overview || "Explore our diverse academic programs designed to empower your future.";

  const placementData = {
    placement_info: departmentData?.placement_info || [],
    placement_statistics: departmentData?.placement_statistics || departmentData?.statistics || [],
    placement_student_photos: departmentData?.placement_student_photos || [],
  };

  const whyStudyContent = departmentData?.benefits && departmentData.benefits.length > 0 ? {
    sectionTitle: `Why Study ${(departmentData.name || "").replace(/^Faculty of\s+/i, '')}?`,
    backgroundImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/why-this-course-1.webp",
    items: departmentData.benefits
      .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
      .map((benefit, index) => ({
        id: benefit.id,
        title: benefit.heading || "",
        body: benefit.text || "",
        variant: index % 2 === 0 ? "gray" : "amber",
        image: benefit.image || null,
      }))
  } : null;

  const faqItems = useMemo(() => {
    if (!departmentData?.faqs || !Array.isArray(departmentData.faqs) || departmentData.faqs.length === 0) {
      return [];
    }

    return departmentData.faqs
      .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
      .map(faq => ({
        id: faq.id,
        question: faq.question || "",
        answer: faq.answer || "",
      }));
  }, [departmentData?.faqs]);

  // Map video interviews for MediaCardSlider (Hidden for future use)
  const videoInterviewItems = useMemo(() => {
    if (!departmentData?.video_interviews || !Array.isArray(departmentData.video_interviews) || departmentData.video_interviews.length === 0) {
      return [];
    }

    return departmentData.video_interviews
      .filter(interview => interview.heading || interview.description) // Filter out items without heading or description
      .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
      .map(interview => ({
        id: interview.id,
        name: interview.heading || "",
        description: interview.description || "",
        videoUrl: interview.video_link || null,
        thumbnail: interview.placeholder_image || null,
      }));
  }, [departmentData?.video_interviews]);

  // Map video interviews for Testimonials component
  const testimonialsData = useMemo(() => {
    if (!departmentData?.video_interviews || !Array.isArray(departmentData.video_interviews) || departmentData.video_interviews.length === 0) {
      return [];
    }

    const themes = ["orange", "red", "amber"];

    return departmentData.video_interviews
      .filter(interview => interview.heading || interview.description) // Filter out items without heading or description
      .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
      .map((interview, index) => ({
        id: interview.id,
        name: interview.heading || "",
        role: "Student", // Default role
        quote: interview.description || "",
        image: interview.placeholder_image || null,
        theme: themes[index % themes.length], // Cycle through themes
      }));
  }, [departmentData?.video_interviews]);

  // Map board of studies for DataTable component
  const boardOfStudiesData = useMemo(() => {
    if (!departmentData?.board_of_studies || !Array.isArray(departmentData.board_of_studies) || departmentData.board_of_studies.length === 0) {
      return [];
    }

    return departmentData.board_of_studies
      .sort((a, b) => (a.s_no || 0) - (b.s_no || 0))
      .map(member => ({
        number: member.s_no || "",
        name: member.name || "",
        designation: member.designation || "",
      }));
  }, [departmentData?.board_of_studies]);

  const breadcrumbData = (departmentData?.name && !loading) ? {
    heroImage: departmentData?.banners?.[0]?.image || departmentData?.banners?.[0]?.image_url || "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/student-gathered.webp",
    pageTitle: departmentData.name,
    imageposition: "object-[45%_10%]",
    customBreadcrumbs: [
      { label: 'Home', href: '/' },
      {
        label: departmentData.name,
        href: `/departments/${departmentData.slug || generateSlug(departmentData.name)}`
      }
    ]
  } : loading ? {
    customBreadcrumbs: []
  } : null;

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

  if (!departmentData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[var(--light-text-gray)]">Department not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {mainIntroContent && (
        <MainIntro
          title={mainIntroContent.title}
          // subtitle={mainIntroContent.subtitle}
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
          {...(programsImage && { backgroundImage: programsImage })}
          {...(programsImageAlt && { imageAlt: programsImageAlt })}
        />
      )}
      {deptHeadIntroContent && (
        <DeptHeadIntro
          title={deptHeadIntroContent.title}
          subtitle={deptHeadIntroContent.subtitle}
          department={deptHeadIntroContent.department}
          imageSrc={deptHeadIntroContent.imageSrc}
          quote={deptHeadIntroContent.quote}
          message={deptHeadIntroContent.message}
        />
      )}

      {/* Career Pathways */}
      {departmentData?.career_pathways && departmentData.career_pathways.length > 0 && (
        <CareerPath
          title="Career Pathways"
          description={departmentData.career_pathway_description || ""}
          careers={departmentData.career_pathways.map(career => ({
            id: career.id,
            title: career.heading || career.title,
            description: career.description || "",
            imageUrl: career.icon_image || career.icon || null
          }))}
        />
      )}

      <Placements placementData={placementData} bgColor="bg-white" title="Placements" />
      <Facility subtitle="Campus Facilities" title="Step into a World-Class Infrastructure" description="Every space of our campus is designed to support learning, innovation, and comfort. Our eco-friendly campus and state-of-the-art facilities are designed to create an environment where students can focus, collaborate, and make life-long memories. " />
      {/* {whyStudyContent && whyStudyContent.items && whyStudyContent.items.length > 0 && (
        <WhyStudy
          sectionTitle={whyStudyContent.sectionTitle}
          backgroundImage={whyStudyContent.backgroundImage}
          items={whyStudyContent.items}
        />
      )} */}

      {/* Specializations Section with CustomScrollCard */}
      {departmentData?.benefits && departmentData.benefits.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              {whyStudyContent && whyStudyContent.items && whyStudyContent.items.length > 0 && (
                <SectionHeading
                  title={whyStudyContent.sectionTitle}
                  subtitle=""
                  titleClassName="text-center"
                  subtitleClassName="text-center"
                />
              )}
            </div>
            <Specialization
              cards={departmentData.benefits
                .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
                .map((benefit) => ({
                  icon: benefit.image ? (
                    benefit.image // Pass URL string directly if it's an image
                  ) : (
                    <div className="w-16 h-16 text-red-600">
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                  ), // Pass JSX element if no image
                  title: benefit.heading || '',
                  description: benefit.text || '',
                }))}
            />
          </div>
        </section>
      )}

      {departmentData?.how_we_stand_items && departmentData.how_we_stand_items.length > 0 && (
        <WeStandOut
          cards={departmentData.how_we_stand_items
            .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
            .map(item => ({
              id: item.id,
              text: item.description
            }))
          }
        />
      )}
      {departmentData?.clubs && departmentData.clubs.length > 0 && (
        <UpcomingConference
          title={`Introducing Our ${(departmentData.name || "").replace(/^Faculty of\s+/i, '')} Club`}
          registerButtonText="Join Now"
          imageContainerClass="object-contain py-16 h-[350px]"

          conferences={departmentData.clubs
            .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
            .map(club => ({
              id: club.id,
              title: club.name || "",
              description: club.description || "",
              image: club.logo || null,
              category: "Clubs", // Default category from component, can be customized per club if needed
            }))
          }
          showCategory={false}
          showDate={false}
        />
      )}
      {/* Board of Studies Table */}
      {boardOfStudiesData && boardOfStudiesData.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <SectionHeading
                title="Board of Studies"
                titleClassName=""
              />
            </div>
            <DataTable
              columns={[
                { key: "number", label: "S. No", width: "w-20" },
                { key: "name", label: "Name", width: "flex-1" },
                { key: "designation", label: "Designation", width: "flex-1" },
              ]}
              data={boardOfStudiesData}
              overflowX={true}
            />
          </div>
        </section>
      )}
      {/* MediaCardSlider Section - Hidden for future use */}
      {false && videoInterviewItems && videoInterviewItems.length > 0 && (
        <MediaCardSlider
          categoryTitle="Video Interviews"
          title="Student Interviews"
          description="Hear from our students about their experiences"
          videoItems={videoInterviewItems}
          cardBgClass="bg-white"
          nameTextClass="text-[var(--button-red)]"
          descriptionTextClass="text-gray-600"
          swiperClassName="video-interviews-slider"
        />
      )}
      {/* Testimonials Section - Using video interviews data */}
      {/* {testimonialsData && testimonialsData.length > 0 && (
        <Testimonials
          testimonials={testimonialsData}
          subtitle="Real Stories. Real Success."
          title="Stories that define our Kalinga spirit."
        />
      )} */}
      <StudentActivities
        departmentId={departmentData?.id}
        fallbackToGlobal={true}
      />
      <Gallery title="Glimpses" />

      {faqItems && faqItems.length > 0 && (
        <FAQ
          title="Frequently Asked Questions"
          subtitle=""
          items={faqItems}
          key={`${departmentData.id}-${faqItems.length}-${faqItems.map(item => item.id).join('-')}`}
        />
      )}
      <AdmissionCareer />
    </div>
  );
}
