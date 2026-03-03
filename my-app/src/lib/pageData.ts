export interface PageData {
    slug: string; // The URL path (e.g., "/about-us")
    title: string;
    breadcrumbLabel?: string;
    banner: string;
    imagePosition?: string; // CSS object-position class (e.g., "object-center", "object-top")
}

export const pageDataMap: Record<string, PageData> = {
    "/": {
        slug: "/",
        title: "Home",
        banner: "https://cdn.kalingauniversity.ac.in/home/banner.webp",
    },
    "/Ncc": {
        slug: "/Ncc",
        title: "NCC",
        banner: "https://cdn.kalingauniversity.ac.in/ncc/Ncc-3.webp",
    },
    "/voter-portal": {
        slug: "/voter-portal",
        title: "Voter Portal",
        banner: "https://cdn.kalingauniversity.ac.in/academic-calendar/academic-calendar-banner.webp",
    },
    "/about-raipur": {
        slug: "/about-raipur",
        title: "About Raipur",
        banner: "https://cdn.kalingauniversity.ac.in/about-raipur/raipur_breadcrujmb.webp",
    },
    "/about-us": {
        slug: "/about-us",
        title: "About Kalinga",
        banner: "https://cdn.kalingauniversity.ac.in/about/about-banner.webp",
    },
    "/academic-and-industry-collaborations": {
        slug: "/academic-and-industry-collaborations",
        title: "Academic and Industry Collaborations",
        banner: "https://cdn.kalingauniversity.ac.in/campus-life/campuslife.webp",
    },
    "/academic-calendar": {
        slug: "/academic-calendar",
        title: "Academic Calendar",
        banner: "https://cdn.kalingauniversity.ac.in/academic-calendar/academic-calendar-banner.webp",
    },
    "/academic-facilities": {
        slug: "/academic-facilities",
        title: "Academic Facilities",
        banner: "https://cdn.kalingauniversity.ac.in/academics/academics-banner.webp",
    },
    "/academic-planner": {
        slug: "/academic-planner",
        title: "Academic Planner",
        banner: "https://cdn.kalingauniversity.ac.in/common/kalinga-front-banner02.webp",
    },
    "/academics": {
        slug: "/academics",
        title: "Academics",
        banner: "https://cdn.kalingauniversity.ac.in/academics/academics-banner.webp",
    },
    "/academics-bk": {
        slug: "/academics-bk",
        title: "Academics",
        banner: "https://cdn.kalingauniversity.ac.in/academics/academics-banner.webp",
    },
    "/admission-procedure": {
        slug: "/admission-procedure",
        title: "Admission Procedure",
        banner: "https://cdn.kalingauniversity.ac.in/academics/academics-banner.webp",
    },
    "/admissions": {
        slug: "/admissions",
        title: "Admissions",
        banner: "https://cdn.kalingauniversity.ac.in/departments/student-gathered.webp",
    },
    "/alumini": {
        slug: "/alumini",
        title: "Alumni",
        banner: "https://cdn.kalingauniversity.ac.in/alumini/alumini.webp",
    },
    "/annual-reports": {
        slug: "/annual-reports",
        title: "Annual Reports",
        banner: "https://cdn.kalingauniversity.ac.in/about/about-banner.webp",
    },
    "/anti-ragging-cell": {
        slug: "/anti-ragging-cell",
        title: "Anti-Ragging Cell",
        banner: "https://cdn.kalingauniversity.ac.in/academics/academics-banner.webp",
    },
    "/book-chapters": {
        slug: "/book-chapters",
        title: "Book / Book Chapters",
        banner: "https://cdn.kalingauniversity.ac.in/alumini/alumini.webp",
    },
    "/book-publications": {
        slug: "/book-publications",
        title: "Book Publications",
        banner: "https://cdn.kalingauniversity.ac.in/common/kalinga-front-banner02.webp",
    },
    "/cafeteria-mess": {
        slug: "/cafeteria-mess",
        title: "Cafeteria & Mess",
        banner: "https://cdn.kalingauniversity.ac.in/canteen-and-mess/canteen+mess+(6).webp",
    },
    "/campus-facilities": {
        slug: "/campus-facilities",
        title: "Campus Facilities",
        banner: "https://cdn.kalingauniversity.ac.in/campus-life/campus-life-intro-1.webp",
    },
    "/campuslife": {
        slug: "/campuslife",
        title: "Campus Life",
        banner: "https://cdn.kalingauniversity.ac.in/campus-life/campuslife.webp",
    },
    "/career-and-corporate-resource-centre": {
        slug: "/career-and-corporate-resource-centre",
        title: "Career and Corporate Resource Centre",
        banner: "https://cdn.kalingauniversity.ac.in/ccrc/IMG-20250409-WA0032-Picsart-AiImageEnhancer.jpg",
        imagePosition: "object-center",
    },
    "/careers": {
        slug: "/careers",
        title: "Careers",
        banner: "https://cdn.kalingauniversity.ac.in/campus-life/career.webp",
    },
    "/central-instrumentation-facility": {
        slug: "/central-instrumentation-facility",
        title: "Central Instrumentation Facility",
        banner: "https://cdn.kalingauniversity.ac.in/about/about-banner.webp",
    },
    "/centresofexcellence": {
        slug: "/centresofexcellence",
        title: "Centres of Excellence",
        banner: "https://cdn.kalingauniversity.ac.in/placement/placement-intro.jpg",
    },
    "/centresofexcellence/ai-ml": {
        slug: "/centresofexcellence/ai-ml",
        title: "AI & ML Courses Training",
        banner: "https://cdn.kalingauniversity.ac.in/aiml/aiml-banner.webp",
    },
    "/centresofexcellence/automobile": {
        slug: "/centresofexcellence/automobile",
        title: "Automobile Training",
        banner: "https://cdn.kalingauniversity.ac.in/automobile/automobile-banner.webp",
    },
    "/centresofexcellence/bosch": {
        slug: "/centresofexcellence/bosch",
        title: "BRIDGE Courses Training",
        banner: "https://cdn.kalingauniversity.ac.in/bosch/bosch-banner.webp",
    },
    "/centresofexcellence/godawari": {
        slug: "/centresofexcellence/godawari",
        title: "Electric Vehicles Training",
        banner: "https://cdn.kalingauniversity.ac.in/godawari/godawari-banner.webp",
    },
    "/centresofexcellence/iiot": {
        slug: "/centresofexcellence/iiot",
        title: "IIoT Training",
        banner: "https://cdn.kalingauniversity.ac.in/iiot/iiot-banner.webp",
    },
    "/centresofexcellence/msme": {
        slug: "/centresofexcellence/msme",
        title: "MSME Training",
        banner: "https://cdn.kalingauniversity.ac.in/msme/msme-banner.webp",
    },
    "/centresofexcellence/robotics": {
        slug: "/centresofexcellence/robotics",
        title: "Robotics, Coding & Drones Training",
        banner: "https://cdn.kalingauniversity.ac.in/robotics/robotics-banner.webp",
    },
    "/chair-activities": {
        slug: "/chair-activities",
        title: "Chairs",
        banner: "https://cdn.kalingauniversity.ac.in/contact-us/contact-us-banner.webp",
    },
    "/chairman": {
        slug: "/chairman",
        title: "Chairman",
        banner: "https://cdn.kalingauniversity.ac.in/common/kalinga-front-banner02.webp",
    },
    "/chancellor": {
        slug: "/chancellor",
        title: "Chancellor",
        banner: "https://cdn.kalingauniversity.ac.in/common/kalinga-front-banner02.webp",
    },
    "/chhattisgarh": {
        slug: "/chhattisgarh",
        title: "Chhattisgarh",
        banner: "https://cdn.kalingauniversity.ac.in/contact-us/contact-us-banner.webp",
    },
    "/conferences-and-events": {
        slug: "/conferences-and-events",
        title: "Conferences & Events",
        banner: "https://cdn.kalingauniversity.ac.in/conferences/conferences-objective.webp",
    },
    "/contact-us": {
        slug: "/contact-us",
        title: "Contact Us",
        banner: "https://cdn.kalingauniversity.ac.in/contact-us/contact-us-banner.webp",
    },
    "/corporate-training-and-consultancy-division": {
        slug: "/corporate-training-and-consultancy-division",
        title: "Corporate Training & Consultancy Division",
        breadcrumbLabel: "CTCD",
        banner: "https://cdn.kalingauniversity.ac.in/ccrc/IMG-20250409-WA0032-Picsart-AiImageEnhancer.jpg",
        imagePosition: "object-top",
    },
    "/csr": {
        slug: "/csr",
        title: "Corporate Social Responsibility",
        banner: "https://cdn.kalingauniversity.ac.in/kif/kif-banner.webp",
    },
    "/ctcd": {
        slug: "/ctcd",
        title: "Corporate Training And Consultancy Division (CTCD)",
        banner: "https://cdn.kalingauniversity.ac.in/common/student.jpg",
        imagePosition: "object-top",
    },
    "/departments/bachelor-of-animation-and-visual-effects bk": {
        slug: "/departments/bachelor-of-animation-and-visual-effects bk",
        title: "Bachelor of Animation and Visual Effects",
        banner: "https://cdn.kalingauniversity.ac.in/departments/student-computer-course.webp",
    },
    "/departments/management": {
        slug: "/departments/management",
        title: "Department of Management",
        banner: "https://cdn.kalingauniversity.ac.in/contact-us/contact-us-banner.webp",
    },
    "/director-general": {
        slug: "/director-general",
        title: "Director General",
        banner: "https://cdn.kalingauniversity.ac.in/common/kalinga-front-banner02.webp",
    },
    "/document-verification": {
        slug: "/document-verification",
        title: "Document Verification",
        banner: "https://cdn.kalingauniversity.ac.in/common/kalinga-front-banner02.webp",
    },
    "/downloads": {
        slug: "/downloads",
        title: "Downloads",
        banner: "https://cdn.kalingauniversity.ac.in/about/about-banner.webp",
    },
    "/ekeeda-digital-library": {
        slug: "/ekeeda-digital-library",
        title: "Ekeeda Digital Library",
        banner: "https://cdn.kalingauniversity.ac.in/contact-us/contact-us-banner.webp",
    },
    "/entrance-exam": {
        slug: "/entrance-exam",
        title: "Entrance Exam",
        banner: "https://cdn.kalingauniversity.ac.in/entrance-exam/banner.webp",
        imagePosition: "object-top",
    },
    "/executive-development-program": {
        slug: "/executive-development-program",
        title: "Executive Development Program",
        banner: "https://cdn.kalingauniversity.ac.in/contact-us/contact-us-banner.webp",
    },
    "/grievance-redressal": {
        slug: "/grievance-redressal",
        title: "Grievance Redressal Cell",
        banner: "https://cdn.kalingauniversity.ac.in/grievance/grievance-banner.webp",
    },
    "/health-clinic": {
        slug: "/health-clinic",
        title: "Health Clinic",
        banner: "https://cdn.kalingauniversity.ac.in/health-clinic/health-clinic-1.webp",
    },
    "/hostel": {
        slug: "/hostel",
        title: "Hostel",
        banner: "https://cdn.kalingauniversity.ac.in/facilities/hostel.webp",
    },
    "/ieee": {
        slug: "/ieee",
        title: "IEEE KU Student Branch",
        banner: "https://cdn.kalingauniversity.ac.in/ieee/ieee-banner.webp",
    },
    "/important-links": {
        slug: "/important-links",
        title: "Important Links",
        banner: "https://cdn.kalingauniversity.ac.in/common/kalinga-front-banner02.webp",
    },
    "/institution-innovation-council": {
        slug: "/institution-innovation-council",
        title: "Institution Innovation Council",
        banner: "https://cdn.kalingauniversity.ac.in/contact-us/contact-us-banner.webp",
    },
    "/internal-quality-assurance-cell": {
        slug: "/internal-quality-assurance-cell",
        title: "IQAC",
        banner: "https://cdn.kalingauniversity.ac.in/about/about-banner.webp",
    },
    "/international-students": {
        slug: "/international-students",
        title: "International Students",
        banner: "https://cdn.kalingauniversity.ac.in/international-students/international-students-banner.webp",
    },
    "/ipr-cell": {
        slug: "/ipr-cell",
        title: "IPR Cell",
        banner: "https://cdn.kalingauniversity.ac.in/alumini/alumini.webp",
    },
    "/kalinga-buzz": {
        slug: "/kalinga-buzz",
        title: "Kalinga Buzz",
        banner: "https://cdn.kalingauniversity.ac.in/contact-us/contact-us-banner.webp",
    },
    "/kalinga-incubation-foundation": {
        slug: "/kalinga-incubation-foundation",
        title: "Kalinga Incubation Foundation",
        banner: "https://cdn.kalingauniversity.ac.in/kif/k4.jpg",
        imagePosition: "center",
    },
    "/ku-fees": {
        slug: "/ku-fees",
        title: "KU Fees",
        banner: "https://cdn.kalingauniversity.ac.in/contact-us/contact-us-banner.webp",
    },
    "/laboratories": {
        slug: "/laboratories",
        title: "Laboratories",
        banner: "https://cdn.kalingauniversity.ac.in/laboratories/laboratories-heroimage.webp",
    },
    "/leadership": {
        slug: "/leadership",
        title: "Leadership",
        banner: "https://cdn.kalingauniversity.ac.in/contact-us/contact-us-banner.webp",
    },
    "/library": {
        slug: "/library",
        title: "KU Library",
        banner: "https://cdn.kalingauniversity.ac.in/library/Library-1.webp",
    },
    "/media": {
        slug: "/media",
        title: "Media",
        banner: "https://cdn.kalingauniversity.ac.in/common/kalinga-front-banner02.webp",
    },
    "/mini-market": {
        slug: "/mini-market",
        title: "Mini Market",
        banner: "https://cdn.kalingauniversity.ac.in/mini-market/minimarket_breadcrumb.webp",
    },
    "/mou": {
        slug: "/mou",
        title: "MOU",
        banner: "https://cdn.kalingauniversity.ac.in/campus-life/campuslife.webp",
    },
    "/national-council-teacher-education": {
        slug: "/national-council-teacher-education",
        title: "National Council For Teacher Education",
        banner: "https://cdn.kalingauniversity.ac.in/contact-us/contact-us-banner.webp",
    },
    "/news-and-events": {
        slug: "/news-and-events",
        title: "News & Events",
        banner: "https://cdn.kalingauniversity.ac.in/news-and-events/news-and-event.jpg",
    },
    "/news-and-events/[slug]": {
        slug: "/news-and-events/[slug]",
        title: "News & Events",
        banner: "",
    },
    "/nss": {
        slug: "/nss",
        title: "NSS",
        banner: "https://cdn.kalingauniversity.ac.in/nss/nss-benefits-new.webp",
    },
    "/organogram": {
        slug: "/organogram",
        title: "Organogram",
        banner: "https://cdn.kalingauniversity.ac.in/organogram/kalinga-org-banner.webp",
    },
    "/other-committees": {
        slug: "/other-committees",
        title: "Committees",
        banner: "https://cdn.kalingauniversity.ac.in/common/kalinga-front-banner02.webp",
    },
    "/patents": {
        slug: "/patents",
        title: "Patents",
        banner: "https://cdn.kalingauniversity.ac.in/alumini/alumini.webp",
    },
    "/pay-online": {
        slug: "/pay-online",
        title: "Pay Online",
        banner: "https://cdn.kalingauniversity.ac.in/contact-us/contact-us-banner.webp",
    },
    "/phd": {
        slug: "/phd",
        title: "Ph.D",
        banner: "https://cdn.kalingauniversity.ac.in/phd/Phd-BannerImage.webp",
    },
    "/placements": {
        slug: "/training-and-placements",
        title: "Placements",
        banner: "https://cdn.kalingauniversity.ac.in/alumini/alumini.webp",
        imagePosition: "object-center",
    },
    "/podcast": {
        slug: "/podcast",
        title: "Kalinga Podcast",
        banner: "https://cdn.kalingauniversity.ac.in/contact-us/contact-us-banner.webp",
    },
    "/privacy-policy": {
        slug: "/privacy-policy",
        title: "Privacy Policy",
        banner: "https://cdn.kalingauniversity.ac.in/contact-us/contact-us-banner.webp",
    },
    "/pro-chancellor": {
        slug: "/pro-chancellor",
        title: "Pro-Chancellor",
        banner: "https://cdn.kalingauniversity.ac.in/common/kalinga-front-banner02.webp",
    },
    "/radio": {
        slug: "/radio",
        title: "Kalinga Radio",
        banner: "https://cdn.kalingauniversity.ac.in/contact-us/contact-us-banner.webp",
    },
    "/refund-policy": {
        slug: "/refund-policy",
        title: "Refund & Cancellation Policy",
        banner: "https://cdn.kalingauniversity.ac.in/contact-us/contact-us-banner.webp",
    },
    "/registrar": {
        slug: "/registrar",
        title: "Registrar",
        banner: "https://cdn.kalingauniversity.ac.in/common/kalinga-front-banner02.webp",
    },
    "/research": {
        slug: "/research",
        title: "Research",
        banner: "https://cdn.kalingauniversity.ac.in/research/reserarch-banner.webp",
        imagePosition: "object-center",
    },
    "/research-conferences": {
        slug: "/research-conferences",
        title: "Research Conferences",
        banner: "https://cdn.kalingauniversity.ac.in/contact-us/contact-us-banner.webp",
    },
    "/research-facilities": {
        slug: "/research-facilities",
        title: "Research Facilities",
        banner: "https://cdn.kalingauniversity.ac.in/research-facilities/researchfaciities-introimg2.webp",
    },
    "/research-papers-and-books-published": {
        slug: "/research-papers-and-books-published",
        title: "Research Resources",
        banner: "https://cdn.kalingauniversity.ac.in/research-facilities/DSC02606+2.jpg",
    },
    "/research-resources": {
        slug: "/research-resources",
        title: "Research Resources",
        banner: "https://cdn.kalingauniversity.ac.in/research-facilities/researchfaciities-introimg2.webp",
    },
    "/rti": {
        slug: "/rti",
        title: "Right To Information (RTI)",
        banner: "https://cdn.kalingauniversity.ac.in/academics/academics-banner.webp",
    },
    "/safety-and-security": {
        slug: "/safety-and-security",
        title: "Safety and Security",
        banner: "https://cdn.kalingauniversity.ac.in/academics/academics-banner.webp",
    },
    "/scholarships": {
        slug: "/scholarships",
        title: "Scholarships",
        banner: "https://cdn.kalingauniversity.ac.in/library/Library-1.webp",
    },
    "/sdg-cell": {
        slug: "/sdg-cell",
        title: "Sustainability",
        banner: "https://cdn.kalingauniversity.ac.in/common/kalinga-front-banner02.webp",
    },
    "/sports-and-wellness-centre": {
        slug: "/sports-and-wellness-centre",
        title: "Sports & Wellness Centre",
        banner: "https://cdn.kalingauniversity.ac.in/sports/sportsmain.webp",
    },
    "/student-clubs": {
        slug: "/student-clubs",
        title: "Student Clubs",
        banner: "https://cdn.kalingauniversity.ac.in/campus-life/campuslife.webp",
    },
    "/student-support": {
        slug: "/student-support",
        title: "Student Support",
        banner: "https://cdn.kalingauniversity.ac.in/student-support/studentsupportmain.webp",
    },
    "/student-welfare": {
        slug: "/student-welfare",
        title: "Student Welfare",
        banner: "https://cdn.kalingauniversity.ac.in/alumini/alumini.webp",
    },
    "/students-counselling-cell": {
        slug: "/students-counselling-cell",
        title: "Students Counselling Cell",
        banner: "https://cdn.kalingauniversity.ac.in/about/about-banner.webp",
    },
    "/terms-conditions": {
        slug: "/terms-conditions",
        title: "Terms & Conditions",
        banner: "https://cdn.kalingauniversity.ac.in/about/about-banner.webp",
    },
    "/training-and-placement-cell": {
        slug: "/training-and-placement-cell",
        title: "Training and Placement Cell",
        banner: "https://cdn.kalingauniversity.ac.in/placement/placement-intro.jpg",
        imagePosition: "object-center",
    },
    "/transport-facility": {
        slug: "/transport-facility",
        title: "Transport Facility",
        banner: "https://cdn.kalingauniversity.ac.in/contact-us/contact-us-banner.webp",
    },
    "/unnat-bharat-abhiyan": {
        slug: "/unnat-bharat-abhiyan",
        title: "Unnat Bharat Abhiyan",
        banner: "https://cdn.kalingauniversity.ac.in/kif/kif-banner.webp",
    },
    "/value-added-course": {
        slug: "/value-added-course",
        title: "Value Added Courses",
        banner: "https://cdn.kalingauniversity.ac.in/international-students/international-students-banner.webp",
    },
    "/value-additions": {
        slug: "/value-additions",
        title: "Value Additions",
        banner: "https://cdn.kalingauniversity.ac.in/international-students/international-students-banner.webp",
    },
    "/vice-chancellor": {
        slug: "/vice-chancellor",
        title: "Vice-Chancellor",
        banner: "https://cdn.kalingauniversity.ac.in/common/kalinga-front-banner02.webp",
    },
};


/**
 * Normalizes a path by ensuring it starts with a slash and removing trailing slashes.
 */
function normalizePath(path: string): string {
    let p = path.trim();
    if (!p.startsWith('/')) p = '/' + p;
    if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
    return p;
}

/**
 * Formats a slug segment into a human-readable title with smart capitalization.
 */
export function formatSlugToTitle(slug: string, applyLowercaseRestrictions: boolean = true): string {
    const words = slug.split('-').filter(Boolean);
    if (words.length === 0) return '';

    const lowercaseWords = ['of', 'and', 'the', 'a', 'an', 'in', 'on', 'at', 'to', 'for', 'with', 'by'];

    return words
        .map((word, index) => {
            const lowerWord = word.toLowerCase();

            // If word is already all caps (like "SDG", "SGD"), preserve it
            // This assumes the input might contain abbreviations already correctly capitalized.
            if (word === word.toUpperCase() && word.length > 1) {
                return word;
            }

            if (!applyLowercaseRestrictions) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }

            // Always capitalize first word, or if word is not in lowercase list
            if (index === 0 || !lowercaseWords.includes(lowerWord)) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
            // Keep lowercase for words in the list (except first word)
            return lowerWord;
        })
        .join(' ');
}

/**
 * Fetches page data based on a given path.
 */
export async function getPageData(path: string): Promise<PageData> {
    const normalizedPath = normalizePath(path);

    if (pageDataMap[normalizedPath]) {
        return pageDataMap[normalizedPath];
    }

    // Fallback for dynamic logic (e.g., departments)
    const segments = normalizedPath.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1] || '';

    // Use the new smart formatting logic
    const title = formatSlugToTitle(lastSegment);

    return {
        slug: normalizedPath,
        title: title || 'Kalinga University',
        banner: 'https://cdn.kalingauniversity.ac.in/about/about-banner.webp', // Default banner
    };
}


/**
 * Helper to generate Next.js Metadata.
 */
export async function generatePageMetadata(path: string) {
    const pageData = await getPageData(path);
    return {
        title: `${pageData.title} | Kalinga University`,
        description: `Learn more about ${pageData.title} at Kalinga University.`,
    };
}

