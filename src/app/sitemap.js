import { fetchAllDepartments, fetchAllCourses, fetchNewsEvents } from '@/app/lib/api';

const BASE_URL = 'https://kalingauniversity.ac.in';
const LAST_MOD = '2026-03-02';

/**
 * Static pages with their SEO priorities and change frequencies.
 * Dynamic routes (departments, courses, news) are added separately.
 */
const staticPages = [
    // ─── Homepage ────────────────────────────────────────────────────────────────
    { url: '/', priority: 1.0, changefreq: 'daily' },

    // ─── Core / High-traffic ─────────────────────────────────────────────────────
    { url: '/admissions', priority: 0.9, changefreq: 'weekly' },
    { url: '/academics', priority: 0.9, changefreq: 'weekly' },
    { url: '/about-us', priority: 0.9, changefreq: 'monthly' },
    { url: '/training-and-placements', priority: 0.9, changefreq: 'weekly' },
    { url: '/contact-us', priority: 0.8, changefreq: 'monthly' },

    // ─── Admissions ──────────────────────────────────────────────────────────────
    { url: '/admission-procedure', priority: 0.8, changefreq: 'monthly' },
    { url: '/entrance-exam', priority: 0.8, changefreq: 'monthly' },
    { url: '/scholarships', priority: 0.8, changefreq: 'monthly' },
    { url: '/value-additions', priority: 0.7, changefreq: 'monthly' },
    { url: '/ku-fees', priority: 0.7, changefreq: 'monthly' },

    // ─── Departments (static) ─────────────────────────────────────────────────────
    { url: '/departments/commerce', priority: 0.8, changefreq: 'monthly' },
    { url: '/departments/management', priority: 0.8, changefreq: 'monthly' },

    // ─── Centres of Excellence ────────────────────────────────────────────────────
    { url: '/centresofexcellence', priority: 0.8, changefreq: 'monthly' },
    { url: '/centresofexcellence/ai-ml', priority: 0.8, changefreq: 'monthly' },
    { url: '/centresofexcellence/automobile', priority: 0.8, changefreq: 'monthly' },
    { url: '/centresofexcellence/bosch', priority: 0.8, changefreq: 'monthly' },
    { url: '/centresofexcellence/godawari', priority: 0.8, changefreq: 'monthly' },
    { url: '/centresofexcellence/iiot', priority: 0.8, changefreq: 'monthly' },
    { url: '/centresofexcellence/msme', priority: 0.8, changefreq: 'monthly' },
    { url: '/centresofexcellence/robotics', priority: 0.8, changefreq: 'monthly' },

    // ─── Research ────────────────────────────────────────────────────────────────
    { url: '/research', priority: 0.7, changefreq: 'weekly' },
    { url: '/phd', priority: 0.7, changefreq: 'monthly' },
    { url: '/research-facilities', priority: 0.6, changefreq: 'monthly' },
    { url: '/research-resources', priority: 0.6, changefreq: 'monthly' },
    { url: '/research-papers-and-books-published', priority: 0.6, changefreq: 'monthly' },
    { url: '/research-conferences', priority: 0.6, changefreq: 'monthly' },
    { url: '/conferences-and-events', priority: 0.6, changefreq: 'weekly' },
    { url: '/book-publications', priority: 0.6, changefreq: 'monthly' },
    { url: '/book-chapters', priority: 0.6, changefreq: 'monthly' },
    { url: '/patents', priority: 0.6, changefreq: 'monthly' },
    { url: '/ipr-cell', priority: 0.6, changefreq: 'monthly' },

    // ─── Campus Life ─────────────────────────────────────────────────────────────
    { url: '/campuslife', priority: 0.7, changefreq: 'weekly' },
    { url: '/campus-facilities', priority: 0.7, changefreq: 'monthly' },
    { url: '/academic-facilities', priority: 0.7, changefreq: 'monthly' },
    { url: '/hostel', priority: 0.7, changefreq: 'monthly' },
    { url: '/sports-and-wellness-centre', priority: 0.7, changefreq: 'monthly' },
    { url: '/cafeteria-mess', priority: 0.6, changefreq: 'monthly' },
    { url: '/health-clinic', priority: 0.6, changefreq: 'monthly' },
    { url: '/library', priority: 0.7, changefreq: 'monthly' },
    { url: '/student-clubs', priority: 0.6, changefreq: 'monthly' },
    { url: '/student-support', priority: 0.6, changefreq: 'monthly' },
    { url: '/student-welfare', priority: 0.6, changefreq: 'monthly' },
    { url: '/students-counselling-cell', priority: 0.6, changefreq: 'monthly' },
    { url: '/transport-facility', priority: 0.5, changefreq: 'monthly' },
    { url: '/mini-market', priority: 0.5, changefreq: 'monthly' },

    // ─── About & Leadership ───────────────────────────────────────────────────────
    { url: '/about-raipur', priority: 0.6, changefreq: 'monthly' },
    { url: '/accreditations-and-approvals', priority: 0.7, changefreq: 'monthly' },
    { url: '/leadership', priority: 0.7, changefreq: 'monthly' },
    { url: '/organogram', priority: 0.5, changefreq: 'monthly' },
    { url: '/chancellor', priority: 0.6, changefreq: 'monthly' },
    { url: '/pro-chancellor', priority: 0.6, changefreq: 'monthly' },
    { url: '/vice-chancellor', priority: 0.6, changefreq: 'monthly' },
    { url: '/chairman', priority: 0.6, changefreq: 'monthly' },
    { url: '/director-general', priority: 0.6, changefreq: 'monthly' },
    { url: '/registrar', priority: 0.6, changefreq: 'monthly' },

    // ─── Academics ────────────────────────────────────────────────────────────────
    { url: '/academic-calendar', priority: 0.7, changefreq: 'monthly' },
    { url: '/academic-planner', priority: 0.6, changefreq: 'monthly' },
    { url: '/academic-and-industry-collaborations', priority: 0.6, changefreq: 'monthly' },
    { url: '/value-added-course', priority: 0.6, changefreq: 'monthly' },
    { url: '/laboratories', priority: 0.6, changefreq: 'monthly' },

    // ─── Placements & Careers ─────────────────────────────────────────────────────
    { url: '/training-and-placement-cell', priority: 0.7, changefreq: 'monthly' },
    { url: '/career-and-corporate-resource-centre', priority: 0.7, changefreq: 'monthly' },
    { url: '/careers', priority: 0.6, changefreq: 'weekly' },

    // ─── International ────────────────────────────────────────────────────────────
    { url: '/international-students', priority: 0.7, changefreq: 'monthly' },

    // ─── Innovation & Special Cells ───────────────────────────────────────────────
    { url: '/institution-innovation-council', priority: 0.6, changefreq: 'monthly' },
    { url: '/kalinga-incubation-foundation', priority: 0.6, changefreq: 'monthly' },
    { url: '/central-instrumentation-facility', priority: 0.6, changefreq: 'monthly' },
    { url: '/corporate-training-and-consultancy-division', priority: 0.6, changefreq: 'monthly' },
    { url: '/mou', priority: 0.6, changefreq: 'monthly' },
    { url: '/sustainability', priority: 0.6, changefreq: 'monthly' },
    { url: '/ieee', priority: 0.6, changefreq: 'monthly' },
    { url: '/nss', priority: 0.6, changefreq: 'monthly' },
    { url: '/Ncc', priority: 0.6, changefreq: 'monthly' },
    { url: '/csr', priority: 0.6, changefreq: 'monthly' },

    // ─── Committees & Compliance ──────────────────────────────────────────────────
    { url: '/internal-quality-assurance-cell', priority: 0.6, changefreq: 'monthly' },
    { url: '/anti-ragging-cell', priority: 0.5, changefreq: 'monthly' },
    { url: '/grievance-redressal', priority: 0.5, changefreq: 'monthly' },
    { url: '/other-committees', priority: 0.5, changefreq: 'monthly' },
    { url: '/national-council-teacher-education', priority: 0.5, changefreq: 'monthly' },
    { url: '/rti', priority: 0.5, changefreq: 'monthly' },
    { url: '/safety-and-security', priority: 0.5, changefreq: 'monthly' },
    { url: '/chairs-and-their-activities', priority: 0.5, changefreq: 'monthly' },

    // ─── News / Events / Media ────────────────────────────────────────────────────
    { url: '/news-and-events', priority: 0.7, changefreq: 'daily' },
    { url: '/media', priority: 0.6, changefreq: 'weekly' },
    { url: '/kalinga-buzz', priority: 0.6, changefreq: 'weekly' },
    { url: '/podcast', priority: 0.5, changefreq: 'weekly' },
    { url: '/radio', priority: 0.5, changefreq: 'weekly' },

    // ─── Alumni ──────────────────────────────────────────────────────────────────
    { url: '/alumini', priority: 0.6, changefreq: 'monthly' },

    // ─── Voter / Chhattisgarh / Downloads ─────────────────────────────────────────
    { url: '/voter-portal', priority: 0.5, changefreq: 'monthly' },
    { url: '/chhattisgarh', priority: 0.5, changefreq: 'monthly' },
    { url: '/downloads', priority: 0.5, changefreq: 'monthly' },
    { url: '/important-links', priority: 0.4, changefreq: 'monthly' },
    { url: '/annual-reports', priority: 0.5, changefreq: 'monthly' },
    { url: '/document-verification', priority: 0.4, changefreq: 'monthly' },
    { url: '/pay-online', priority: 0.5, changefreq: 'monthly' },

    // ─── Legal / Utility ──────────────────────────────────────────────────────────
    { url: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
    { url: '/terms-conditions', priority: 0.3, changefreq: 'yearly' },
    { url: '/refund-policy', priority: 0.3, changefreq: 'yearly' },

    // ─── Additional Static Pages ──────────────────────────────────────────────────
    { url: '/sustainability', priority: 0.7, changefreq: 'monthly' },
    { url: '/international', priority: 0.6, changefreq: 'monthly' },
    { url: '/all-forms', priority: 0.5, changefreq: 'monthly' },
    { url: '/ekeeda-digital-library', priority: 0.6, changefreq: 'monthly' },
    { url: '/executive-development-program', priority: 0.6, changefreq: 'monthly' },
    { url: '/kalmat', priority: 0.7, changefreq: 'monthly' },
    { url: '/kalsee', priority: 0.7, changefreq: 'monthly' },
    { url: '/research-papers', priority: 0.6, changefreq: 'monthly' },
    { url: '/unnat-bharat-abhiyan', priority: 0.6, changefreq: 'monthly' },
    { url: '/ctcd', priority: 0.6, changefreq: 'monthly' },
    { url: '/chair-activities', priority: 0.6, changefreq: 'monthly' },
];

/** Exclude these slugs from the dynamic departments section (already in staticPages) */
const EXCLUDED_DEPT_SLUGS = new Set([
    'faculty-of-commerce-and-management', // combined – only show after split
]);

export default async function sitemap() {
    // ── 1. Static pages ───────────────────────────────────────────────────────────
    const staticEntries = staticPages.map(({ url, priority, changefreq }) => ({
        url: `${BASE_URL}${url}`,
        lastModified: LAST_MOD,
        changeFrequency: changefreq,
        priority,
    }));

    // ── 2. Dynamic department pages ───────────────────────────────────────────────
    let departmentEntries = [];
    try {
        const departments = await fetchAllDepartments();
        if (Array.isArray(departments)) {
            departmentEntries = departments
                .filter((dept) => dept?.slug && !EXCLUDED_DEPT_SLUGS.has(dept.slug))
                .map((dept) => ({
                    url: `${BASE_URL}/departments/${dept.slug}`,
                    lastModified: LAST_MOD,
                    changeFrequency: 'monthly',
                    priority: 0.8,
                }));
        }
    } catch {
        // Continue if API fails
    }

    // ── 3. Dynamic course pages ──────────────────────────────────────────────────
    let courseEntries = [];
    try {
        const courses = await fetchAllCourses();
        if (Array.isArray(courses)) {
            courseEntries = courses
                .filter((course) => course?.slug)
                .map((course) => ({
                    url: `${BASE_URL}/courses/${course.slug}`,
                    lastModified: LAST_MOD,
                    changeFrequency: 'monthly',
                    priority: 0.7,
                }));
        }
    } catch {
        // Continue if API fails
    }

    // ── 4. Dynamic news & events pages ───────────────────────────────────────────
    let newsEntries = [];
    try {
        const newsResponse = await fetchNewsEvents({ is_published: true });
        const news = newsResponse?.results || newsResponse;
        if (Array.isArray(news)) {
            newsEntries = news
                .filter((item) => item?.slug)
                .map((item) => ({
                    url: `${BASE_URL}/news-and-events/${item.slug}`,
                    lastModified: LAST_MOD,
                    changeFrequency: 'weekly',
                    priority: 0.6,
                }));
        }
    } catch {
        // Continue if API fails
    }

    return [...staticEntries, ...departmentEntries, ...courseEntries, ...newsEntries];
}
