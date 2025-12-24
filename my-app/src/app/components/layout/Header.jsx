'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import FlatIcon from '../general/flat-icon';
import GlobalArrowButton from '../general/global-arrow_button';
import { contactInfo, getPhone, getEmail, getLogoSrc, getLogoAlt } from '../../config/contact-info';
import { fetchAllDepartments } from '@/app/lib/api';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [departments, setDepartments] = useState([]);
  const searchRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';
  const isCorporateTrainingPage = pathname === '/corporate-training-and-consultancy-division';

  // Fetch departments for academics menu
  useEffect(() => {
    const loadDepartments = async () => {
      try {
        const departmentsData = await fetchAllDepartments();
        setDepartments(Array.isArray(departmentsData) ? departmentsData : []);
      } catch (err) {
        console.error('Failed to load departments for menu:', err);
        setDepartments([]);
      }
    };
    loadDepartments();
  }, []);

  const courses = useMemo(
    () => [
      { name: 'Bachelor of Technology (B.Tech)', href: '/about-us' },
      { name: 'Bachelor of Business Administration (BBA)', href: '/academics/undergraduate/bba' },
      { name: 'Bachelor of Computer Applications (BCA)', href: '/academics/undergraduate/bca' },
      { name: 'Master of Business Administration (MBA)', href: '/academics/postgraduate/mba' },
      { name: 'Master of Computer Applications (MCA)', href: '/academics/postgraduate/mca' },
      { name: 'Bachelor of Arts (BA)', href: '/academics/undergraduate/ba' },
      { name: 'Bachelor of Science (BSc)', href: '/academics/undergraduate/bsc' },
      { name: 'Bachelor of Commerce (B.Com)', href: '/academics/undergraduate/bcom' },
      { name: 'Law (LLB)', href: '/academics/undergraduate/llb' },
      { name: 'Pharmacy (B.Pharm)', href: '/academics/undergraduate/bpharm' },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isSearchOpen) {
      setFilteredCourses([]);
      return;
    }
    const query = searchTerm.trim().toLowerCase();
    if (!query) {
      setFilteredCourses(courses.slice(0, 6));
      return;
    }
    const matches = courses.filter((c) => c.name.toLowerCase().includes(query));
    setFilteredCourses(matches.slice(0, 8));
  }, [searchTerm, isSearchOpen, courses]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchTerm.trim();
    if (!query) return;
    const exactMatch = courses.find((c) => c.name.toLowerCase() === query.toLowerCase());
    if (exactMatch) {
      router.push(exactMatch.href);
    } else {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
    setIsSearchOpen(false);
  };

  const navItems = useMemo(() => [
    {
      id: 'about',
      label: 'About Us',
      href: '/about-us',
      megaMenu: {
        sections: [
          {
            title: 'Overview',
            links: [
              { label: 'About University', href: '/about-us' },
              { label: 'Vision & Mission', href: '/about-us#vision-mission' },
              { label: 'Chancellor Message', href: '/chancellor' },
              { label: 'Vice Chancellor', href: '/vice-chancellor' },
              { label: 'Leadership', href: '/leadership' },
            ]
          },
          {
            title: 'Infrastructure',
            links: [
              { label: 'Campus Facilities', href: '/campus-facilities' },
              { label: 'Academic Facilities', href: '/academic-facilities' },
              { label: 'Library', href: '/library' },
              { label: 'Laboratories', href: '/laboratories' },
            ]
          }
        ]
      }
    },
    {
      id: 'academics',
      label: 'Academics',
      href: '/academics',
      megaMenu: {
        sections: [
          {
            title: 'Overview',
            links: [
              { label: 'Academics', href: '/academics' },
              { label: 'Academics API', href: '/academics-api' },
            ]
          },
          {
            title: 'Programs',
            links: [
              { label: 'Undergraduate (UG)', href: '/admissions?studyLevel=UG' },
              { label: 'Postgraduate (PG)', href: '/admissions?studyLevel=PG' },
              { label: 'Doctoral (PhD)', href: '/admissions?studyLevel=PhD' },
              { label: 'Diploma', href: '/admissions?studyLevel=Diploma' },
            ]
          },
          {
            title: 'Departments',
            links: departments.length > 0 
              ? departments.slice(0, 10).map(dept => ({
                  label: dept.name || 'Department',
                  href: `/admissions?department=${encodeURIComponent(dept.slug || dept.id)}`
                }))
              : [
                  { label: 'Loading...', href: '/academics' }
                ]
          }
        ]
      }
    },
    {
      id: 'departments',
      label: 'Departments',
      href: '/departments',
      megaMenu: {
        sections: [
          {
            title: 'Departments',
            links: [
              { label: 'Courses', href: '/departments/bachelor-of-animation-and-visual-effects' },
              { label: 'Faculty of Information Technology', href: '/departments/faculty-of-information-technology' },
            ]
          }
        ]
      }
    },
    {
      id: 'admissions',
      label: 'Admissions',
      href: '/admissions',
      megaMenu: {
        sections: [
          {
            title: 'Admissions',
            links: [
              { label: 'Admission Overview', href: '/admissions' },
              { label: 'Entrance Exams', href: '/entrance-exam' },
              { label: 'KALSEE', href: '/kalsee' },
              { label: 'KAL-MAT', href: '/kalmat' },
            ]
          }
        ]
      }
    },
    {
      id: 'students',
      label: 'Students',
      href: '#',
      megaMenu: {
        sections: [
          {
            title: 'Student Life',
            links: [
              { label: 'Campus Life', href: '/campuslife' },
              { label: 'Student Clubs', href: '/student-clubs' },
              { label: 'Sports & Wellness', href: '/sports-and-wellness-centre' },
              { label: 'News & Events', href: '/news-and-events' },
            ]
          },
          {
            title: 'Resources',
            links: [
              { label: 'Student Support', href: '/student-support' },
              { label: 'Student Welfare', href: '/student-welfare' },
              { label: 'Student Counselling', href: '/students-counselling-cell' },
              { label: 'Downloads', href: '/downloads' },
            ]
          }
        ]
      }
    },
    {
      id: 'research',
      label: 'Research',
      href: '/research',
      megaMenu: {
        sections: [
          {
            title: 'Research',
            links: [
              { label: 'Research Overview', href: '/research' },
              { label: 'Research Facilities', href: '/research-facilities' },
              { label: 'Research Resources', href: '/research-resources' },
              { label: 'Publications', href: '/research-papers-and-books-published' },
            ]
          },
          {
            title: 'Centers',
            links: [
              { label: 'Centres of Excellence', href: '/centresofexcellence' },
              { label: 'Central Instrumentation Facility', href: '/central-instrumentation-facility' },
              { label: 'IPR Cell', href: '/ipr-cell' },
              { label: 'Conferences & Events', href: '/conferences-and-events' },
            ]
          }
        ]
      }
    },
    {
      id: 'placements',
      label: 'Placements',
      href: '/placements',
      megaMenu: {
        sections: [
          {
            title: 'Placements',
            links: [
              { label: 'Placement Overview', href: '/placements' },
              { label: 'Training & Placement Cell', href: '/training-and-placement-cell' },
              { label: 'Career & Corporate Resource Centre', href: '/career-and-corporate-resource-centre' },
            ]
          }
        ]
      }
    },
    {
      id: 'news',
      label: 'News & Events',
      href: '/news-and-events',
      megaMenu: {
        sections: [
          {
            title: 'News & Events',
            links: [
              { label: 'News & Events', href: '/news-and-events' },
              { label: 'Conferences & Events', href: '/conferences-and-events' },
            ]
          }
        ]
      }
    },
  ], [departments]);
  const topBarItems = [

    {
      label: 'International',
      href: '/international',
    },
    {
      label: 'IQAC',
      href: '/internal-quality-assurance-cell',
    },
    {
      label: 'CCRC',
      href: '/career-and-corporate-resource-centre',
    },
    {
      label: 'KIF',
      href: '/kif',
    },
    {
      label: 'CSR',
      href: '/csr',
    },
    {
      label: 'ERP Login',
      href: '#',
    },
    {
      label: 'Contact Us',
      href: '/contact-us',
    },
  ];

  return (
    <header className="relative z-[10040] w-full overflow-visible">
      {/* Top Bar */}
      <div className="text-xs w-full">
        <div className="container mx-auto px-2 pt-3 pb-2">
            <div className="flex justify-between font-medium gap-2 text-[var(--dark-gray)] flex-wrap">
            <a href={getEmail('admissions').href} className="flex items-center gap-1.5 text-[var(--red)]">
                <FlatIcon name="email" />
                <span>{getEmail('admissions').display}</span>
              </a>
              <a href={getPhone('primary').href} className="flex items-center gap-1.5 text-[var(--red)]">
                <FlatIcon name="phone" />
                <span>{getPhone('primary').display}</span>
              </a>
              <a href="https://virtualtour.kalingauniversity.ac.in/" className="lg:flex hidden items-center gap-1.5 text-[var(--dark-gray)] ">  
              <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.3086 3.31075C22.1443 3.31075 22.8219 2.56959 22.8219 1.65538C22.8219 0.741164 22.1443 0 21.3086 0C20.4729 0 19.7954 0.741164 19.7954 1.65538C19.7964 2.56913 20.4733 3.30964 21.3086 3.31075ZM21.3086 1.16282C21.557 1.16282 21.7583 1.38307 21.7583 1.65472C21.7583 1.92637 21.557 2.14662 21.3086 2.14662C21.0603 2.14662 20.859 1.92637 20.859 1.65472C20.8593 1.3832 21.0604 1.16315 21.3086 1.16282Z" fill="#F58220"></path><path d="M22.8149 4.00737C22.5524 3.86314 22.2328 3.97895 22.1009 4.26602C21.9691 4.5531 22.0749 4.90274 22.3374 5.04704C22.3425 5.04986 22.3476 5.05255 22.3528 5.05518C24.3618 6.11651 25.4726 7.44679 25.4726 8.80419C25.4726 10.2139 24.227 11.6353 22.0562 12.7038C19.7181 13.8544 16.5971 14.4878 13.2687 14.4878C9.94035 14.4878 6.81992 13.8544 4.48124 12.7038C2.30975 11.636 1.06483 10.2146 1.06483 8.80419C1.06483 7.44679 2.17275 6.11782 4.18467 5.05518C4.45123 4.92027 4.56729 4.5745 4.44397 4.2829C4.32065 3.99129 4.00457 3.86432 3.73801 3.99923C3.73285 4.00186 3.72768 4.00455 3.72258 4.00737C1.3224 5.273 0 6.97623 0 8.80288C0 12.6424 5.82782 15.6493 13.2675 15.6493C20.7072 15.6493 26.5351 12.6417 26.5351 8.80288C26.5368 6.97623 25.215 5.273 22.8149 4.00737Z" fill="#F58220"></path><path d="M5.78567 10.3255C6.22801 10.7698 6.82817 10.9919 7.58605 10.9919C8.3081 10.9919 8.89344 10.7764 9.34214 10.3455C9.79084 9.91461 10.0149 9.35444 10.0146 8.66494C10.0146 8.19089 9.9021 7.79989 9.67718 7.49174C9.45226 7.18366 9.13715 6.98973 8.73177 6.90997C9.06621 6.79666 9.32066 6.61456 9.49517 6.36378C9.6737 6.09935 9.76588 5.77709 9.75694 5.44852C9.75694 4.88533 9.5667 4.43932 9.18617 4.11048C8.80565 3.78165 8.28409 3.61924 7.62152 3.62311C6.87858 3.62311 6.30074 3.80693 5.88787 4.17449C5.47505 4.54205 5.26274 5.0568 5.25091 5.71866H6.82265C6.82853 5.47563 6.89377 5.28775 7.01823 5.15501C7.14269 5.02227 7.31738 4.9559 7.54236 4.9559C7.73242 4.94802 7.91779 5.02122 8.05935 5.16013C8.19396 5.29595 8.26777 5.48929 8.26141 5.68951C8.26141 5.96143 8.18142 6.16868 8.02155 6.31133C7.86162 6.45398 7.63214 6.52528 7.33316 6.52528H7.24219V7.66676C7.26583 7.66676 7.29182 7.66676 7.3196 7.66676C7.34739 7.66676 7.38813 7.66676 7.4419 7.66676C7.77316 7.66676 8.01663 7.7437 8.17223 7.89751C8.32784 8.05133 8.40544 8.29179 8.40502 8.61885C8.40502 8.91013 8.33252 9.13274 8.1876 9.28656C8.04261 9.44037 7.83407 9.51731 7.56187 9.51731C7.30148 9.51731 7.10452 9.43715 6.971 9.27684C6.83748 9.11653 6.77032 8.87934 6.76948 8.56515V8.44882H5.12207V8.5167C5.12207 9.27756 5.34327 9.8804 5.78567 10.3255Z" fill="#F58220"></path><path d="M13.2955 10.9909C14.053 10.9909 14.6575 10.7554 15.1089 10.2844C15.5603 9.81333 15.7861 9.18705 15.7861 8.40532C15.7861 7.75462 15.6055 7.21795 15.2443 6.79517C14.883 6.37247 14.4273 6.16108 13.877 6.16108C13.7584 6.16069 13.6399 6.16955 13.5224 6.1876C13.4125 6.20474 13.304 6.23159 13.198 6.26776L14.7166 3.76172H12.905L11.9944 5.30267C11.5178 6.1188 11.2048 6.74042 11.0555 7.16746C10.9114 7.56496 10.8355 7.98806 10.8315 8.41563C10.8315 9.20248 11.0535 9.82902 11.4975 10.2953C11.9414 10.7616 12.5408 10.9934 13.2955 10.9909ZM12.5599 7.69429C12.736 7.4982 12.9751 7.40018 13.2772 7.40018C13.5793 7.40018 13.8186 7.4982 13.9951 7.69429C14.1712 7.89038 14.2592 8.15665 14.2592 8.49322C14.2592 8.8298 14.1712 9.0937 13.9951 9.28507C13.8191 9.47938 13.5799 9.57661 13.2778 9.57661C12.9757 9.57661 12.7364 9.4803 12.5599 9.28769C12.3838 9.09337 12.2958 8.8294 12.2958 8.49585C12.2958 8.16229 12.3838 7.8951 12.5599 7.69429Z" fill="#F58220"></path><path d="M18.961 10.9918C19.7248 10.9918 20.3249 10.6686 20.7614 10.0222C21.1978 9.37583 21.4161 8.49241 21.4161 7.37206C21.4161 6.18404 21.2008 5.26208 20.7703 4.60619C20.3397 3.9503 19.7366 3.62259 18.961 3.62305C18.1972 3.62305 17.5957 3.9501 17.1565 4.60422C16.7172 5.25834 16.4974 6.15856 16.4971 7.30478C16.4971 8.45447 16.7169 9.35706 17.1565 10.0125C17.5961 10.6679 18.1976 10.9943 18.961 10.9918ZM18.3305 5.59321C18.4609 5.23858 18.6711 5.06126 18.961 5.06126C19.2423 5.06126 19.4486 5.24265 19.5802 5.60548C19.7118 5.96832 19.7776 6.53328 19.7776 7.30031C19.7776 8.07594 19.7118 8.64261 19.5802 9.00026C19.4487 9.35791 19.2423 9.53759 18.961 9.53936C18.6738 9.53936 18.4645 9.36054 18.3329 9.00289C18.2014 8.64524 18.1355 8.07771 18.1355 7.30031C18.1351 6.51818 18.2002 5.9498 18.3305 5.59517V5.59321Z" fill="#F58220"></path></svg>
              <span>Campus View</span>
              </a>
             
            {topBarItems.map((item) => (
              <Link key={item.label} href={item.href} className="lg:flex hidden items-center  gap-1.5 text-[var(--dark-gray)]">
                <span>{item.label}</span>
              </Link>
            ))} 
            <div className="relative" ref={searchRef}>
              <button
                type="button"
                onClick={() => setIsSearchOpen((prev) => !prev)}
                className="p-1 rounded hover:text-[var(--red)] focus:outline-none focus:ring-2 focus:ring-[var(--red)]"
                aria-label="Search"
              >
                <FlatIcon name="search" className="w-6" />
              </button>
              {isSearchOpen && (
                <form
                  onSubmit={handleSearchSubmit}
                  className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg flex flex-col gap-2 px-3 py-2 min-w-[260px] z-[10070]"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search courses..."
                      className="flex-1 border border-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--red)] focus:border-[var(--red)]"
                    />
                    <button
                      type="submit"
                      className="p-2 rounded bg-[var(--red)] text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--red)]"
                    >
                      <FlatIcon name="search" className="w-4 h-4" />
                    </button>
                  </div>
                  {filteredCourses.length > 0 ? (
                    <div className="max-h-64 overflow-y-auto border border-gray-100 rounded-md">
                      {filteredCourses.map((course) => (
                        <Link
                          key={course.href}
                          href={course.href}
                          className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                          onClick={() => {
                            setIsSearchOpen(false)
                            setSearchTerm('')
                          }}
                        >
                          {course.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="px-1 py-1 text-xs text-gray-500">
                      No courses found
                    </div>
                  )}
                </form>
              )}
            </div>
            </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`transition-all z-[10050] w-full  overflow-visible ${isScrolled ? 'fixed top-0 left-0 right-0 bg-white duration-500 shadow-md' : isHomePage ? 'bg-transparent' : isCorporateTrainingPage ? 'bg-white duration-500' : 'bg-white duration-500'}`}>
          <div className="flex items-center justify-between   container mx-auto px-2 py-4 w-full max-w-full !z-[10050] overflow-visible">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 relative">
              <div className="w-42 h-12 relative">
                <Image
                  src={
                    isCorporateTrainingPage
                      ? getLogoSrc('secondary')
                      : isHomePage
                      ? (isScrolled ? getLogoSrc('secondary') : getLogoSrc('primary'))
                      : getLogoSrc('secondary')
                  }
                  alt={getLogoAlt('primary')}
                  fill
                  className="object-contain transition-all duration-300"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2 overflow-visible">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="relative group z-[10060]"
                  onMouseEnter={() => item.megaMenu && setActiveMenu(item.id)}
                  onMouseLeave={() => setActiveMenu(null)} 
                >
                
                    <Link
                      href={item.href}
                      className={`px-2 !text-[15px] ${
                        isHomePage 
                          ? (isScrolled ? 'text-[var(--dark-gray)]' : 'text-white')
                          : isCorporateTrainingPage
                          ? 'text-black'
                          : 'text-black'
                      }`}
                    >
                      {item.label}
                    </Link>
                 
                  {item.megaMenu && activeMenu === item.id && (
                    <MegaMenu sections={item.megaMenu.sections} />
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
             
              <Link href="/admissions">
                <GlobalArrowButton className="lg:flex hidden">
                  <span>Admissions</span>
                </GlobalArrowButton>
              </Link>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 bg-white rounded transition-all duration-300 hover:text-white hover:bg-[var(--red)]"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <FlatIcon name="close" fill="text-white" />
                ) : (
                  <FlatIcon name="menu" fill="currentColor" />
                )}
              </button>
            </div>
          </div>
        </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileMenu navItems={navItems} onClose={() => setIsMobileMenuOpen(false)} />
      )}
    </header>
  );
};

export default Header;

