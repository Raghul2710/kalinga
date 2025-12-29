'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useBreadcrumb } from './BreadcrumbContext';
import { useEffect, useRef } from 'react';

const imageposition = "object-top";

const Breadcrumb = ({ customBreadcrumbs, heroImage, pageTitle }) => {
  const pathname = usePathname();
  const breadcrumbContext = useBreadcrumb();
  const { breadcrumbData: contextData } = breadcrumbContext || {};

  // Don't show breadcrumb on homepage
  if (pathname === '/') return null;
  
  // Don't show breadcrumb on corporate-training-and-consultancy-division page
  if (pathname === '/corporate-training-and-consultancy-division') return null;
  
  // Don't show breadcrumb on kalsee page
  if (pathname === '/kalsee') return null;
  
  // Don't show breadcrumb on kalmat page
  if (pathname === '/kalmat') return null;

  // Track previous pathname to detect route changes
  const prevPathnameRef = useRef(pathname);

  // Clear breadcrumb data when pathname changes
  useEffect(() => {
    if (!breadcrumbContext?.setBreadcrumbData) return;

    const pathnameChanged = prevPathnameRef.current !== pathname;
    
    if (pathnameChanged) {
      // Pathname changed - clear old breadcrumb data first
      prevPathnameRef.current = pathname;
      breadcrumbContext.setBreadcrumbData(null);
    }
  }, [pathname, breadcrumbContext]);

  // Check for new breadcrumb data - runs after page components have a chance to set it
  useEffect(() => {
    if (!breadcrumbContext?.setBreadcrumbData) return;

    // Check immediately first (in case data was set synchronously)
    if (typeof window !== 'undefined' && window.__breadcrumbData) {
      breadcrumbContext.setBreadcrumbData(window.__breadcrumbData);
      delete window.__breadcrumbData;
      return;
    }

    // Also check after a microtask to catch data set in useEffect
    const timeoutId = setTimeout(() => {
      if (typeof window !== 'undefined' && window.__breadcrumbData) {
        breadcrumbContext.setBreadcrumbData(window.__breadcrumbData);
        delete window.__breadcrumbData;
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [pathname, breadcrumbContext]);

  // Use context data if available, otherwise use props
  const finalHeroImage = contextData?.heroImage ?? heroImage;
  const finalPageTitle = contextData?.pageTitle ?? pageTitle;
  const finalCustomBreadcrumbs = contextData?.customBreadcrumbs ?? customBreadcrumbs;
  const finalImagePosition = contextData?.imageposition ?? imageposition;

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
  
  // Use pageTitle if provided, otherwise use last breadcrumb label
  const currentPageTitle = finalPageTitle || breadcrumbs[breadcrumbs.length - 1]?.label || '';

  return (
    <div className="relative px-2  ">
      {/* Hero Image Section */}
      <div className="relative h-[400px] rounded-4xl md:h-[400px] lg:h-[400px] w-full overflow-visible bg-gradient-to-br from-[var(--dark-blue)] to-[var(--foreground)] z-0 pb-20 md:pb-24 lg:pb-28">
        {resolvedHeroImage ? (
          <>
            <div className="absolute inset-0 overflow-hidden rounded-4xl">
              <Image
                src={resolvedHeroImage}
                alt={currentPageTitle}
                fill
                className={`object-cover ${finalImagePosition}`} 
                priority
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
      {currentPageTitle  && (
        <div className="container mx-auto">
        <div className="absolute z-[10] flex md:flex-row flex-col md:items-end items-start gap-2  md:gap-6 left-1/2 -translate-x-1/2 md:left-auto md:right-auto md:translate-x-0 md:bottom-[25px]  -bottom-[35px] translate-y-1/2 mb-12 md:mb-16 ">
          <div className="p-5 bg-[var(--dark-blue)]/80 backdrop-blur-md rounded-2xl md:min-h-[150px] min-h-[100px] flex justify-center items-center min-w-[330px] md:max-w-4/5 max-w-full wraptext-center">
            <h1 className="font-stix capitalize text-center text-white text-2xl md:text-4xl lg:text-5xl font-normal ">
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

