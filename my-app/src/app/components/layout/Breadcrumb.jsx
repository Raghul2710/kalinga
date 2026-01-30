'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useBreadcrumb } from './BreadcrumbContext';
import { useEffect, useRef } from 'react';

const imageposition = "object-top";

// Function to convert text to proper title case
// applyLowercaseRestrictions: if true, applies lowercase restrictions (of, and, the, etc.) for department/course pages
// if false, preserves existing capitalizations and capitalizes all words normally without restrictions
const toTitleCase = (str, applyLowercaseRestrictions = false) => {
  if (!str) return '';

  const words = str.split(' ');

  // If lowercase restrictions should not be applied, preserve existing caps and capitalize normally
  if (!applyLowercaseRestrictions) {
    return words
      .map((word) => {
        // If word is already all caps (like "SDG", "SGD"), preserve it
        if (word === word.toUpperCase() && word.length > 1) {
          return word;
        }
        // Otherwise, capitalize first letter and lowercase the rest
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
  }

  // Words that should be lowercase unless they're the first word (for department/course pages)
  const lowercaseWords = ['of', 'and', 'the', 'a', 'an', 'in', 'on', 'at', 'to', 'for', 'with', 'by'];

  return words
    .map((word, index) => {
      const lowerWord = word.toLowerCase();

      // If word is already all caps (like "SDG", "SGD"), preserve it
      if (word === word.toUpperCase() && word.length > 1) {
        return word;
      }

      // Always capitalize first word, or if word is not in lowercase list
      if (index === 0 || !lowercaseWords.includes(lowerWord)) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      // Keep lowercase for words in the list (except first word)
      return lowerWord;
    })
    .join(' ');
};

// Static page data mapping (titles and hero images for instant loading)
const STATIC_PAGE_DATA = {
  '/about-us': {
    title: 'About Us',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/about/about-banner.webp'
  },
  '/admissions': {
    title: 'Admissions',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/student-gathered.webp'
  },
  '/leadership': { title: 'Leadership' },
  '/academic-calendar': { title: 'Academic Calendar' },
  '/campuslife': { title: 'Life @ KU' },
  '/student-support': { title: 'Student Support' },
  '/student-welfare': { title: 'Student Welfare' },
  '/library': { title: 'Library' },
  '/student-clubs': { title: 'Clubs & Societies' },
  '/academic-facilities': { title: 'Academic Facilities' },
  '/campus-facilities': { title: 'Campus Facilities' },
  '/sports-and-wellness-centre': { title: 'Sports & Wellness Centre' },
  '/students-counselling-cell': { title: 'Student Counselling' },
  '/downloads': { title: 'Downloads' },
  '/research': {
    title: 'Research Overview',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/research/reserarch-banner.webp'
  },
  '/ipr-cell': { title: 'IPR (Intellectual Property Rights Cell)' },
  '/research-resources': { title: 'Research Resources' },
  '/placements': { title: 'Placements' },
  '/training-and-placement-cell': {
    title: 'Career Development Centre',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-intro.jpg'
  },
  '/news-and-events': {
    title: 'News & Events',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/news-and-events/news-and-event.jpg'
  },
  '/conferences-and-events': { title: 'Conferences & Events' },
  '/contact-us': { title: 'Contact Us' },
  '/careers': {
    title: 'Careers',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/career.webp'
  },
  '/career-and-corporate-resource-centre': {
    title: 'Career and Corporate Resource Centre',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/IMG-20250409-WA0032-Picsart-AiImageEnhancer.jpg'
  },
  '/ccrc': { title: 'CCRC' },
  '/kif': {
    title: 'Kalinga Incubation Foundation',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/k4.jpg'
  },
  '/csr': {
    title: 'Corporate Social Responsibility',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/kif-banner.webp'
  },
  '/Ncc': {
    title: 'NCC',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/Ncc-3.webp'
  },
  '/ncc': {
    title: 'NCC',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/Ncc-3.webp'
  },
  '/scholarships': {
    title: 'Scholarships',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/library/Library-1.webp'
  },
  '/leadership': {
    title: 'Leadership',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp'
  },
  '/anti-ragging-cell': {
    title: 'Anti Ragging Cell',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/academics-banner.webp'
  },
  '/institution-innovation-council': {
    title: 'IIC',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp'
  },
  '/iqac': {
    title: 'IQAC',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/banner.webp'
  },
  '/internal-quality-assurance-cell': {
    title: 'IQAC',
    image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/IQAC/banner.webp'
  },
};

const Breadcrumb = ({ customBreadcrumbs, heroImage, pageTitle }) => {
  const pathname = usePathname();
  const breadcrumbContext = useBreadcrumb();
  const { breadcrumbData: contextData, isLoading: contextLoading, setBreadcrumbData, setIsLoading } = breadcrumbContext || {};
  const prevPathnameRef = useRef(pathname);

  // Clear old data and window.__breadcrumbData immediately when pathname changes
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      // Clear previous page's data immediately
      if (setBreadcrumbData) {
        setBreadcrumbData(null);
      }
      if (setIsLoading) {
        setIsLoading(true);
      }
      // Clear any stale window.__breadcrumbData from previous page
      if (typeof window !== 'undefined' && window.__breadcrumbData) {
        delete window.__breadcrumbData;
      }
      prevPathnameRef.current = pathname;
    }
  }, [pathname, setBreadcrumbData, setIsLoading]);

  // Check for new breadcrumb data from window.__breadcrumbData (legacy support)
  // Only check after pathname has been updated
  useEffect(() => {
    if (!breadcrumbContext?.setBreadcrumbData) return;

    // Check immediately for new data
    if (typeof window !== 'undefined' && window.__breadcrumbData) {
      const data = window.__breadcrumbData;
      // Verify the data is for current pathname - only use if pathname matches or not specified
      if (!data.pathname || data.pathname === pathname) {
        breadcrumbContext.setBreadcrumbData(data);
        delete window.__breadcrumbData;
        if (setIsLoading) {
          setIsLoading(false);
        }
        return;
      } else {
        // Data doesn't match current pathname, ignore it
        delete window.__breadcrumbData;
      }
    }

    // Also check after a microtask to catch data set in useEffect
    const timeoutId = setTimeout(() => {
      if (typeof window !== 'undefined' && window.__breadcrumbData) {
        const data = window.__breadcrumbData;
        // Verify the data is for current pathname
        if (!data.pathname || data.pathname === pathname) {
          breadcrumbContext.setBreadcrumbData(data);
          delete window.__breadcrumbData;
          if (setIsLoading) {
            setIsLoading(false);
          }
        } else {
          // Data doesn't match current pathname, ignore it
          delete window.__breadcrumbData;
        }
      } else if (!contextData && !heroImage && !pageTitle) {
        // If no data arrives and no props provided, stop loading after a reasonable timeout
        const fallbackTimeout = setTimeout(() => {
          if (setIsLoading) {
            setIsLoading(false);
          }
        }, 500);
        return () => clearTimeout(fallbackTimeout);
      }
    }, 50); // Small delay to let pages set their data

    return () => clearTimeout(timeoutId);
  }, [pathname, breadcrumbContext, contextData, heroImage, pageTitle, setIsLoading]);

  // Don't show breadcrumb on homepage
  if (pathname === '/') return null;

  // Don't show breadcrumb on thank-you page
  if (pathname === '/thank-you') return null;

  // Don't show breadcrumb on corporate-training-and-consultancy-division page
  if (pathname === '/corporate-training-and-consultancy-division') return null;

  // Don't show breadcrumb on kalsee page
  if (pathname === '/kalsee') return null;

  // Don't show breadcrumb on kalmat page
  if (pathname === '/kalmat') return null;

  // Validate contextData belongs to current pathname
  const validContextData = contextData && (!contextData.pathname || contextData.pathname === pathname) ? contextData : null;

  // Prioritize props over static data over context data for immediate rendering
  const staticData = STATIC_PAGE_DATA[pathname];
  const finalHeroImage = heroImage ?? staticData?.image ?? validContextData?.heroImage;
  // For pageTitle: if contextData exists, prioritize it to preserve exact casing
  // Otherwise use props > static > context priority
  const finalPageTitle = pageTitle ?? (validContextData?.pageTitle ? validContextData.pageTitle : (staticData?.title ?? validContextData?.pageTitle));
  const finalCustomBreadcrumbs = customBreadcrumbs ?? validContextData?.customBreadcrumbs;
  const finalImagePosition = validContextData?.imageposition ?? imageposition;

  // Generate breadcrumbs from path or use custom ones
  const generateBreadcrumbs = () => {
    // If customBreadcrumbs is explicitly provided (even if empty array), use it
    if (finalCustomBreadcrumbs !== undefined) return finalCustomBreadcrumbs;

    // Otherwise, auto-generate from pathname
    const paths = pathname.split('/').filter(Boolean);
    const breadcrumbs = [{ label: 'Home', href: '/' }];

    paths.forEach((path, index) => {
      const href = '/' + paths.slice(0, index + 1).join('/');
      const label = path
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      breadcrumbs.push({ label, href });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Use heroImage if provided, otherwise null
  const resolvedHeroImage = finalHeroImage || null;

  // Check if breadcrumb data is loading
  // Show loader only if we have no data at all (no props, no context) and context says it's loading
  const isDynamicRoute = pathname.includes('/academics/') || pathname.includes('/courses/') || pathname.includes('/departments/');
  const hasAnyData = finalHeroImage || finalPageTitle || (finalCustomBreadcrumbs && finalCustomBreadcrumbs.length > 0);
  // Only show loading if we truly have no data and context indicates loading
  // Also check if contextData is invalid (wrong pathname)
  const isLoading = contextLoading && !hasAnyData && !validContextData;

  // Apply lowercase restrictions only for department or course pages
  const applyLowercaseRestrictions = isDynamicRoute;

  // Use finalPageTitle (which includes props, static data, or context)
  const currentPageTitle = finalPageTitle || breadcrumbs[breadcrumbs.length - 1]?.label || '';

  // Use pathname as key to force re-render when route changes
  return (
    <div key={pathname} className="relative px-2  ">
      {/* Hero Image Section */}
      <div className="relative h-[400px] rounded-4xl md:h-[400px] lg:h-[400px] w-full overflow-visible bg-gradient-to-br from-[var(--dark-blue)] to-[var(--foreground)] z-0 pb-20 md:pb-24 lg:pb-28">
        {isLoading ? (
          <>
            {/* Loading state with spinner */}
            <div className="absolute rounded-4xl inset-0 bg-gradient-to-br from-[var(--dark-blue)] via-[var(--dark-blue)]/90 to-[var(--foreground)]/95"></div>
            <div className="absolute rounded-4xl inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                <p className="text-sm font-medium">Loading...</p>
              </div>
            </div>
          </>
        ) : resolvedHeroImage ? (
          <>
            <div className="absolute inset-0 overflow-hidden rounded-4xl">
              <Image
                key={`${pathname}-${resolvedHeroImage}`}
                src={resolvedHeroImage}
                alt={currentPageTitle}
                fill
                className={`object-cover ${finalImagePosition}`}
                priority
                unoptimized
              />
              {/* Gradient Overlay for image */}
              <div className="absolute inset-0"></div>
            </div>
          </>
        ) : (
          <>
            {/* Placeholder gradient background */}
            <div className="absolute rounded-4xl inset-0 bg-gradient-to-br from-[var(--dark-blue)] via-[var(--dark-blue)]/90 to-[var(--foreground)]/95"></div>
            {/* Placeholder icon */}
            <div className="absolute rounded-4xl inset-0 flex items-center justify-center">
              <div className="text-center text-white/30">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
                <p className="text-sm font-medium">No Image Available</p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* White Section */}
      <div className="relative bg-white py-4 md:py-6 lg:py-8 z-0">
        {/* Spacer to maintain layout and prevent overlap with breadcrumb */}
      </div>

      {/* Page Title Card - Positioned at the boundary between blue and white sections */}
      {isLoading ? (
        <div className="container mx-auto">
          <div className="absolute z-[10] flex md:flex-row flex-col md:items-end items-start gap-2 md:gap-6 left-1/2 -translate-x-1/2 md:left-auto md:right-auto md:translate-x-0 md:bottom-[25px] -bottom-[35px] translate-y-1/2 mb-12 md:mb-16">
            <div className="p-5 bg-[var(--dark-blue)]/80 backdrop-blur-md rounded-2xl md:min-h-[150px] min-h-[100px] flex justify-center items-center min-w-[330px] md:max-w-4/5 max-w-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
          </div>
        </div>
      ) : currentPageTitle && (
        <div className="container mx-auto">
          <div className="absolute z-[10] flex md:flex-row flex-col md:items-end items-start gap-2  md:gap-6 left-1/2 -translate-x-1/2 md:left-auto md:right-auto md:translate-x-0 md:bottom-[25px]  -bottom-[35px] translate-y-1/2 mb-12 md:mb-16 ">
            <div className="p-5 bg-[var(--dark-blue)]/80 backdrop-blur-md rounded-2xl md:min-h-[150px] min-h-[100px] flex justify-center items-center min-w-[330px] md:max-w-4/5 max-w-full wraptext-center">
              <h1 className="font-stix text-center text-white text-2xl md:text-4xl lg:text-5xl font-normal ">
                {currentPageTitle}
              </h1>
            </div>
            {/* Breadcrumb positioned next to the title card - horizontally aligned with blue box */}
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center h-auto min-h-[40px] md:min-h-[50px] gap-1 md:pl-0 pl-4 md:mb-0 MD:-translate-y-1/2 mt-3 mb-15">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return (
                  <div key={crumb.href} className="flex items-center flex-shrink-0">
                    {index > 0 && (
                      <span className="text-[var(--dark-gray)] mx-2 text-sm">»</span>
                    )}
                    {isLast ? (
                      <span className="text-sm font-medium text-[var(--red)] break-normal">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="text-sm text-[var(--dark-gray)] hover:text-[var(--red)] transition-colors whitespace-nowrap"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Breadcrumb;

