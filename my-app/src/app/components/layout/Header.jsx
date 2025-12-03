'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import FlatIcon from '../general/flat-icon';
import GlobalArrowButton from '../general/global-arrow_button';
import { contactInfo, getPhone, getEmail, getLogoSrc, getLogoAlt } from '../../config/contact-info';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      id: 'about',
      label: 'About Us',
      href: '/about',
      megaMenu: {
        sections: [
          {
            title: 'Overview',
            links: [
              { label: 'About University', href: '/about' },
              { label: 'Vision & Mission', href: '/about/vision-mission' },
              { label: 'Chancellor Message', href: '/about/chancellor' },
              { label: 'Vice Chancellor', href: '/about/vice-chancellor' },
            ]
          },
          {
            title: 'Infrastructure',
            links: [
              { label: 'Campus', href: '/about/campus' },
              { label: 'Facilities', href: '/about/facilities' },
              { label: 'Libraries', href: '/about/libraries' },
              { label: 'Labs', href: '/about/labs' },
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
            title: 'Programs',
            links: [
              { label: 'Undergraduate', href: '/academics/undergraduate' },
              { label: 'Postgraduate', href: '/academics/postgraduate' },
              { label: 'Doctoral', href: '/academics/doctoral' },
              { label: 'Distance Learning', href: '/academics/distance' },
            ]
          },
          {
            title: 'Departments',
            links: [
              { label: 'Engineering', href: '/academics/engineering' },
              { label: 'Management', href: '/academics/management' },
              { label: 'Science', href: '/academics/science' },
              { label: 'Arts', href: '/academics/arts' },
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
              { label: 'Courses', href: '/departments/courses' },
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
              { label: 'How to Apply', href: '/admissions/how-to-apply' },
              { label: 'Programs', href: '/admissions/programs' },
              { label: 'Eligibility', href: '/admissions/eligibility' },
              { label: 'Fee Structure', href: '/admissions/fees' },
            ]
          }
        ]
      }
    },
    {
      id: 'students',
      label: 'Students',
      href: '/students',
      megaMenu: {
        sections: [
          {
            title: 'Student Life',
            links: [
              { label: 'Campus Life', href: '/students/campus-life' },
              { label: 'Clubs & Societies', href: '/students/clubs' },
              { label: 'Sports', href: '/students/sports' },
              { label: 'Events', href: '/students/events' },
            ]
          },
          {
            title: 'Resources',
            links: [
              { label: 'Student Portal', href: '/students/portal' },
              { label: 'Time Table', href: '/students/timetable' },
              { label: 'Results', href: '/students/results' },
              { label: 'Scholarships', href: '/students/scholarships' },
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
              { label: 'Publications', href: '/research/publications' },
              { label: 'Conferences', href: '/research/conferences' },
              { label: 'Patents', href: '/research/patents' },
            ]
          },
          {
            title: 'Centers',
            links: [
              { label: 'Research Centers', href: '/research/centers' },
              { label: 'Innovation Lab', href: '/research/innovation' },
              { label: 'Incubation', href: '/research/incubation' },
              { label: 'Projects', href: '/research/projects' },
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
              { label: 'Recruiters', href: '/placements/recruiters' },
              { label: 'Statistics', href: '/placements/statistics' },
              { label: 'Training', href: '/placements/training' },
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
              { label: 'Events Calendar', href: '/news-and-events' },
              { label: 'Latest News', href: '/news-and-events/news' },
              { label: 'Upcoming Events', href: '/news-and-events/upcoming' },
              { label: 'Past Events', href: '/news-and-events/past' },
            ]
          }
        ]
      }
    },
  ];
  const topBarItems = [

    {
      label: 'International',
      href: '/international',
    },
    {
      label: 'IQAC',
      href: '/iqac',

    },
    {
      label: 'CTC',
      href: '/ctc',
    },
    {
      label: 'KIF',
      href: '/kif',
    },
    {
      label: 'CIF',
      href: '/cif',
    },
    {
      label: 'ERP Login',
      href: '/erp-login',
    },
    {
      label: 'Contact Us',
      href: '/contact-us',
    },
  ];

  return (
    <header className="relative z-10" >
      {/* Top Bar */}
      <div className="text-xs py-4">
        <div className="container">
            <div className="flex justify-between font-medium gap-4 text-[var(--dark-gray)]">
            <a href={getEmail('admissions').href} className="flex items-center gap-1.5 text-[var(--red)]">
                <FlatIcon name="email" />
                <span>{getEmail('admissions').display}</span>
              </a>
              <a href={getPhone('primary').href} className="flex items-center gap-1.5 text-[var(--red)]">
                <FlatIcon name="phone" />
                <span>{getPhone('primary').display}</span>
              </a>
              <a href="" className="lg:flex hidden items-center gap-1.5 text-[var(--dark-gray)] ">  
              <FlatIcon name="360view" />
              <span>Campus View</span>
              </a>
             
            {topBarItems.map((item) => (
              <Link key={item.label} href={item.href} className="lg:flex hidden items-center  gap-1.5 text-[var(--dark-gray)]">
                <span>{item.label}</span>
              </Link>
            ))} 
            <FlatIcon name="search" className="w-6 " />
            </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`transition-all z-50 ${isScrolled ? 'fixed top-0 left-0 right-0 bg-white duration-500' : ' duration-500'}`}>
          <div className="flex items-center justify-between gap-4 container py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 relative">
              <div className="w-36 h-12">
                <Image
                  src={
                    typeof window !== 'undefined'
                      ? (
                          window.location.pathname === '/'
                            ? (isScrolled ? getLogoSrc('secondary') : getLogoSrc('primary'))
                            : getLogoSrc('secondary') 
                        )
                      : getLogoSrc('secondary')
                  }
                  alt={getLogoAlt('primary')}
                  fill
                  className="object-contain relative transition-all duration-300"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => item.megaMenu && setActiveMenu(item.id)}
                  onMouseLeave={() => setActiveMenu(null)} 
                >
                
                    <Link
                      href={item.href}
                      className={`px-3 text-base font-medium ${isScrolled ? 'text-[var(--dark-gray)]' : 'text-white'}`}
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

