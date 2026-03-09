import Link from 'next/link';
import { fetchAllDepartments, fetchAllCourses, fetchNewsEvents } from '@/app/lib/api';
import { staticPages, EXCLUDED_DEPT_SLUGS } from '@/lib/sitemap-data';

export const revalidate = 3600;

async function getDynamicLinks() {
  const [departments, courses, newsResponse] = await Promise.all([
    fetchAllDepartments().catch(() => []),
    fetchAllCourses().catch(() => []),
    fetchNewsEvents({ is_published: true }).catch(() => ({ results: [] })),
  ]);
  const depts = Array.isArray(departments) ? departments : [];
  const crs = Array.isArray(courses) ? courses : [];
  const news = newsResponse?.results ?? (Array.isArray(newsResponse) ? newsResponse : []);
  return {
    departments: depts.filter((d) => d?.slug && !EXCLUDED_DEPT_SLUGS.has(d.slug)),
    courses: crs.filter((c) => c?.slug),
    news: Array.isArray(news) ? news.filter((n) => n?.slug) : [],
  };
}

export const metadata = {
  title: 'Sitemap | Kalinga University',
  description: 'Complete list of all pages on the Kalinga University website.',
};

export default async function HtmlSitemapPage() {
  const { departments, courses, news } = await getDynamicLinks();

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Sitemap</h1>
        <p className="text-gray-600 mb-8">
          All pages on the Kalinga University website. You can also use{' '}
          <a href="/sitemap.xml" className="text-[var(--dark-orange-red)] underline">sitemap.xml</a>
        </p>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Static pages</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {staticPages.map(({ url }) => (
              <li key={url}>
                <Link href={url || '/'} className="text-gray-700 hover:text-[var(--dark-orange-red)] hover:underline">
                  {url === '/' ? 'Home' : url.replace(/^\//, '').replace(/-/g, ' ')}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Departments</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {departments.map((dept) => (
              <li key={dept.slug}>
                <Link href={`/departments/${dept.slug}`} className="text-gray-700 hover:text-[var(--dark-orange-red)] hover:underline">
                  {dept.name || dept.slug}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Courses</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {courses.map((course) => (
              <li key={course.slug}>
                <Link href={`/courses/${course.slug}`} className="text-gray-700 hover:text-[var(--dark-orange-red)] hover:underline">
                  {course.name || course.title || course.slug}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">News & events</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {news.map((item) => (
              <li key={item.slug}>
                <Link href={`/news-and-events/${item.slug}`} className="text-gray-700 hover:text-[var(--dark-orange-red)] hover:underline">
                  {item.title || item.slug}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* <p className="text-gray-500 text-sm">
          Total: {staticPages.length} static + {departments.length} departments + {courses.length} courses + {news.length} news ={' '}
          {staticPages.length + departments.length + courses.length + news.length} pages.
        </p> */}
      </div>
    </main>
  );
}
