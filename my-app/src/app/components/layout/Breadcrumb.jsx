'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { pageDataMap, formatSlugToTitle } from '@/lib/pageData';

/**
 * Breadcrumb Component - Data-driven and synchronized with centralized lib/pageData.
 */
const Breadcrumb = () => {
  const pathname = usePathname();

  // Exclusions (same as original + current requirements)
  if (pathname === '/' || pathname === '/thank-you') return null;

  // Fetch page data from central map
  const pageData = pageDataMap[pathname];

  // Detect pages that use HeroSectionTwo (don't show the duplicate blue banner)
  const isCustomHeroPage = ['/corporate-training-and-consultancy-division', '/kalsee', '/kalmat'].includes(pathname);

  // Default fallbacks if data is missing
  const title = pageData?.title || formatSlugToTitle(pathname.split('/').pop() || '');
  const banner = pageData?.banner || 'https://kalinga-university.s3.ap-south-1.amazonaws.com/about/about-banner.webp';

  // Generate breadcrumbs using central labels
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs = [{ label: 'Home', href: '/' }];

  let accumulatedPath = '';
  paths.forEach((segment) => {
    accumulatedPath += `/${segment}`;
    const segmentData = pageDataMap[accumulatedPath];
    breadcrumbs.push({
      label: segmentData?.breadcrumbLabel || segmentData?.title || formatSlugToTitle(segment),
      href: accumulatedPath,
    });
  });

  if (isCustomHeroPage) {
    return (
      <div key={pathname} className="container mx-auto px-4 py-4">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <div key={crumb.href} className="flex items-center">
                {index > 0 && <span className="text-gray-400 mx-2 text-sm">»</span>}
                {isLast ? (
                  <span className="text-sm font-medium text-[var(--red)]">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="text-sm text-gray-500 hover:text-[var(--red)] transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    );
  }

  return (
    <div key={pathname} className="relative px-2">
      {/* Hero Image Section */}
      <div className="relative h-[400px] rounded-4xl md:h-[400px] lg:h-[400px] w-full overflow-hidden bg-gradient-to-br from-[var(--dark-blue)] to-[var(--foreground)] z-0">
        <Image
          src={banner}
          alt={title}
          fill
          className={`object-cover ${pageData?.imagePosition  
            ? (pageData.imagePosition.startsWith('object-') ? pageData.imagePosition : `object-${pageData.imagePosition}`)
            : 'object-top'
            } opacity-80`}
          priority
          unoptimized
        />
        <div className="absolute inset-0" />
      </div>

      {/* White Section Spacer */}
      <div className="relative bg-white py-4 md:py-6 lg:py-8 z-0"></div>

      {/* Page Title Card & Breadcrumbs Container */}
      <div className="container mx-auto relative">
        <div className="absolute z-[10] flex md:flex-row flex-col md:items-end items-start gap-2 md:gap-6 left-1/2 -translate-x-1/2 md:left-auto md:right-auto md:translate-x-0 md:bottom-[25px] -bottom-[35px] translate-y-1/2 mb-12 md:mb-16">

          {/* Title Card */}
          <div className="p-5 bg-[var(--dark-blue)]/80 backdrop-blur-md rounded-2xl md:min-h-[150px] min-h-[100px] flex justify-center items-center min-w-[330px] md:max-w-4/5 max-w-full">
            <h1 className="font-stix text-center text-white text-2xl md:text-4xl lg:text-5xl font-normal leading-tight">
              {title}
            </h1>
          </div>

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center h-auto min-h-[40px] md:min-h-[50px] gap-1 md:pl-0 pl-4 md:mb-0 mt-3 mb-15">
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
    </div>
  );
};

export default Breadcrumb;
