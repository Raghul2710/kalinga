'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const routeHeroImages = [
  {
    match: /^\/about/,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/about-banner.webp",
  },
];

const Breadcrumb = ({ customBreadcrumbs = null, heroImage = null, pageTitle = null }) => {
  const pathname = usePathname();

  // Don't show breadcrumb on homepage
  if (pathname === '/') return null;

  // Generate breadcrumbs from path or use custom ones
  const generateBreadcrumbs = () => {
    if (customBreadcrumbs) return customBreadcrumbs;

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
  const resolvedHeroImage =
    heroImage ||
    routeHeroImages.find(route => route.match.test(pathname))?.image ||
    null;
  const currentPageTitle = pageTitle || breadcrumbs[breadcrumbs.length - 1]?.label || '';

  return (
    <div className="relative px-5  ">
      {/* Hero Image Section */}
      <div className="relative h-[400px] rounded-4xl md:h-[400px] lg:h-[400px] w-full overflow-visible bg-gradient-to-br from-[var(--dark-blue)] to-[var(--foreground)] z-0 pb-20 md:pb-24 lg:pb-28">
        {resolvedHeroImage ? (
          <>
            <div className="absolute inset-0 overflow-hidden rounded-4xl">
              <Image
                src={resolvedHeroImage}
                alt={currentPageTitle}
                fill
                className="object-cover"
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
        <div className="absolute z-[100] flex md:flex-row flex-col md:items-end items-start gap-4 md:gap-6 bottom-[40px] md:bottom-[50px] lg:bottom-[50px] translate-y-1/2 mb-8 md:mb-12">
          <div className="bg-[var(--dark-blue)]/80 backdrop-blur-md rounded-2xl lg:p-16 md:p-10 p-8 min-w-[300px] max-w-3/5 wraptext-center">
            <h1 className="font-stix text-center text-white text-2xl md:text-4xl lg:text-5xl font-normal ">
              {currentPageTitle}
            </h1>
          </div>
          {/* Breadcrumb positioned next to the title card - horizontally aligned with blue box */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center h-auto min-h-[40px] md:min-h-[50px] gap-1 md:pl-0 pl-4 mb-4 md:mb-0 MD:-translate-y-1/2">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              
              return (
                <div key={crumb.href} className="flex items-center flex-shrink-0">
                  {index > 0 && (
                    <span className="text-[var(--dark-gray)] mx-2 text-sm">»</span>
                  )}
                  {isLast ? (
                    <span className="text-sm font-medium text-[var(--red)] whitespace-nowrap">
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

