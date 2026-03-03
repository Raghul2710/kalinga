"use client"
import { useEffect, useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import EventCalendar from "../components/news_and_events/event_calendar";
import ThreeCardSider from "../components/general/three_card_sider";
import UpcomingEvents from "../components/admissions/upcoming_events";
import UpcomingConference from "../components/research/upcoming_conference";
import Gallery from "../components/general/gallery";
import AdmissionCareer from "../components/general/admission_cta";
import { fetchNewsEvents, fetchAllDepartments, parseHtmlToText } from '../lib/api';

import MediaCardSlider from "../components/general/media-card-slider";
import StudentActivities from "../components/department/student_activities";

const placementGalleryImages = [
  // // Training and Placement Cell
  // { id: 1, image: "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/pt-glimple-1.webp", title: "Training and Placement Gallery" },
  // { id: 2, image: "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/pt-glimple-2.webp", title: "Training and Placement Gallery" },
  // { id: 3, image: "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/pt-glimple-3.webp", title: "Training and Placement Gallery" },

  // // Aditya Biotech Lab
  // { id: 4, image: "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/pt-glimple-4.webp", title: "Aditya Biotech Lab" },
  // { id: 5, image: "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/pt-glimple-5.webp", title: "Aditya Biotech Lab" },

  // International Students / Campus (IDs 6-9)
  { id: 6, image: "https://cdn.kalingauniversity.ac.in/placement/ind-1.jpeg", title: "Aditya Biotech Lab" },
  { id: 7, image: "https://cdn.kalingauniversity.ac.in/placement/ind-2.jpeg", title: "Aditya Biotech Lab" },
  { id: 8, image: "https://cdn.kalingauniversity.ac.in/placement/ind-3.jpeg", title: "Aditya Biotech Lab" },
  { id: 9, image: "https://cdn.kalingauniversity.ac.in/placement/ind-4.jpg", title: "Automobile Expo Visit" },

  // Automobile Expo Visit
  { id: 10, image: "https://cdn.kalingauniversity.ac.in/placement/ind-5.jpg", title: "Automobile Expo Visit" },
  { id: 11, image: "https://cdn.kalingauniversity.ac.in/placement/ind-6.jpg", title: "Automobile Expo Visit" },
  { id: 12, image: "https://cdn.kalingauniversity.ac.in/placement/ind-7.jpg", title: "Automobile Expo Visit" },
  { id: 13, image: "https://cdn.kalingauniversity.ac.in/placement/ind-8.jpg", title: "Automobile Expo Visit" },
  { id: 14, image: "https://cdn.kalingauniversity.ac.in/placement/ind-9.jpg", title: "Automobile Expo Visit" },
  { id: 15, image: "https://cdn.kalingauniversity.ac.in/placement/ind-10.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 16, image: "https://cdn.kalingauniversity.ac.in/placement/ind-11.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 17, image: "https://cdn.kalingauniversity.ac.in/placement/ind-12.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 18, image: "https://cdn.kalingauniversity.ac.in/placement/ind-13.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 19, image: "https://cdn.kalingauniversity.ac.in/placement/ind-14.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 20, image: "https://cdn.kalingauniversity.ac.in/placement/ind-15.jpg", title: "Bhilai Steel Plant Industrial Visit" },

  // Bhilai Steel Plant Industrial Visit
  { id: 21, image: "https://cdn.kalingauniversity.ac.in/placement/ind-16.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 22, image: "https://cdn.kalingauniversity.ac.in/placement/ind-17.jpg", title: "Bhilai Steel Plant Industrial Visit" },

  // CIPET Visit
  { id: 23, image: "https://cdn.kalingauniversity.ac.in/placement/ind-18.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 24, image: "https://cdn.kalingauniversity.ac.in/placement/ind-19.jpg", title: "Bhilai Steel Plant Industrial Visit" },
];

const customImages = [
  { id: 4, image: "https://cdn.kalingauniversity.ac.in/news-and-events/new-year.png", alt: "New Year Celebration" },
  { id: 5, image: "https://cdn.kalingauniversity.ac.in/news-and-events/Gallery-1.webp", alt: "gallery-1" },
  { id: 6, image: "https://cdn.kalingauniversity.ac.in/news-and-events/Gallery-2.webp", alt: "gallery-2" },
  { id: 7, image: "https://cdn.kalingauniversity.ac.in/news-and-events/Gallery-3.webp", alt: "gallery-3" },
  { id: 8, image: "https://cdn.kalingauniversity.ac.in/news-and-events/Gallery-4.webp", alt: "gallery-4" },
  { id: 9, image: "https://cdn.kalingauniversity.ac.in/news-and-events/gallery-5.webp", alt: "gallery-5" },
  { id: 10, image: "https://cdn.kalingauniversity.ac.in/news-and-events/Gallery-6.webp", alt: "gallery-6" },
  { id: 11, image: "https://cdn.kalingauniversity.ac.in/news-and-events/gallery-7.webp", alt: "gallery-7" },
  { id: 12, image: "https://cdn.kalingauniversity.ac.in/news-and-events/gallery-8.webp", alt: "gallery-8" },
  { id: 13, image: "https://cdn.kalingauniversity.ac.in/news-and-events/gallery-9.webp", alt: "gallery-9" }
];



function NewsAndEvents() {
  const [newsItems, setNewsItems] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);





  const loadNews = useCallback(async () => {
    setLoading(true);
    try {
      // Fetch all items to handle distinct sections client-side for smoother transition
      const params = {};
      const data = await fetchNewsEvents(params);

      if (data && data.results) {
        setNewsItems(data.results);

        // Extract unique categories from the data
        const categoryMap = new Map();
        data.results.forEach(item => {
          if (item.category && item.category_name) {
            categoryMap.set(String(item.category), {
              id: String(item.category),
              name: item.category_name
            });
          }
        });
        const uniqueCategories = Array.from(categoryMap.values());
        setCategories(uniqueCategories);
      }
    } catch (error) {
      console.error("Failed to fetch news", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // --- Derived Data Processing ---
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  // Helper to ensure stable rendering for SSR
  const isFutureEvent = (dateStr) => {
    if (!mounted) return false;
    return new Date(dateStr) > today;
  };

  // Truncation helper for fallback content
  const getTruncatedContent = (content) => {
    if (!content) return "";
    const text = parseHtmlToText(content);
    const words = text.split(/\s+/);
    if (words.length <= 18) return text;
    return words.slice(0, 18).join(" ") + " ....";
  };

  // 1. Future Events (Date > Today) - For Top Section
  const futureEvents = useMemo(() => {
    return newsItems.filter(item => {
      if (!item.date) return false;
      return isFutureEvent(item.date);
    }).map(item => ({
      id: item.id,
      image: item.images?.[0]?.image || 'https://cdn.kalingauniversity.ac.in/common/student.jpg',
      title: item.heading,
      badgeText: item.date,
      slug: item.slug
    }));
  }, [newsItems]);

  // 2. Newly Adds (This Week) - For Bottom Section
  const newlyAdds = useMemo(() => {
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(today.getDate() - 7);
    const oneWeekFuture = new Date(today);
    oneWeekFuture.setDate(today.getDate() + 7);

    return newsItems.filter(item => {
      if (!item.date) return false;
      const d = new Date(item.date);
      return d >= oneWeekAgo && d <= oneWeekFuture;
    }).slice(0, 3).map(item => {
      return {
        id: item.id,
        title: item.heading,
        date: item.date,
        category: item.category_name,
        description: item.short_para ? parseHtmlToText(item.short_para) : getTruncatedContent(item.content),
        image: item.images?.[0]?.image || 'https://cdn.kalingauniversity.ac.in/common/student.jpg',
        href: `/news-and-events/${item.slug}`,
        registerButtonText: "Read More"
      };
    });
  }, [newsItems]);

  const eventActivities = [
    {
      id: 'educational-picnic-kanker',
      title: "One-Day Educational Picnic to Kanker",
      description: "A one-day educational picnic for the B.Ed Semester 3 students, organised to provide historical exposure and opportunities for team bonding. The trip began with a historic visit to the Kanker Palace, where students interacted with the official guide and learnt about the significance of the architecture and its royal linkage. After this, students visited Sarvodaya Vidyalaya, an educational institution run under the guidance of the daughter of Raja Saheb, where they learnt community-based educational practices. Following this, the students visited Malajkundum Dam and Dudh Nadi Dam, where they understood the importance of dams in water conservation. The picnic provided valuable exposure to students beyond classroom-based learning.",
      date: "19.11.2025",
      time: "06:00 A.M. to 10:00 P.M.",
      venue: "From Raipur to Kanker (C.G)",
      organisedBy: "Faculty of Education",
      eventType: "Offline",
      attendedBy: "B.Ed Students and Faculty Members",
      buttonText: "Read More"
    },
    {
      id: 'international-trip-dubai',
      title: "An International Trip to Dubai",
      description: "To take learning beyond textbooks, we organised an international educational trip to Dubai. It was a 5-night and 6-day trip in which a team of students and faculty members explored one of the world’s most advanced cities. The trip included a stay at a luxury 4-star hotel, Indian meals, and private transportation. They explored Burj Khalifa, Miracle Garden, Dubai Mall, Dubai Frame, Knowledge Village, Marina Dhow Cruise, and Desert Safari. The trip generated curiosity among students and unforgettable memories as we prepared students for a global future.",
      date: "15.04.2025",
      venue: "Dubai, UAE",
      buttonText: "Read More"
    },
    {
      id: 'excursion-manali',
      title: "An Excursion to Manali, Himachal Pradesh",
      description: "After the insightful industrial visit to Sorbax Pharmaceutical, Badii, faculty members and students went on a trip to Manali, where students enjoyed paragliding and other activities. The trip ended with a fun learning experience and enriched the bond between students.",
      date: "24.02.2025 - 02.03.2025",
      venue: "Manali, Himachal Pradesh",
      buttonText: "Read More"
    },
    {
      id: 'jagran-film-festival',
      title: "Collaboration with Jagran Film Festival (Raipur)",
      description: "It aimed to provide students with exposure to the world of cinema and media through special screenings, panel discussions, and interactive sessions with filmmakers and industry experts.",
      date: "17.01.2025 - 18.01.2025",
      time: "09:30 A.M. to 06:30 P.M.",
      venue: "City Centre Mall, Pandri (Raipur)",
      organisedBy: "Department of Journalism and Mass Communication, Faculty of Arts & Humanities",
      eventType: "Offline",
      attendedBy: "Students and faculty members from the Arts & Humanities Department",
      buttonText: "Read More",
      learningOutcomes: [
        "An understanding of the key stages of cinema and film production.",
        "Networking opportunities with filmmakers, critics, and industry professionals.",
        "A broader perspective on storytelling techniques, cinematic forms, and global cinematic trends.",
        "Creative and technical elements behind filmmaking.",
        "Ethical, social, and cultural influence on the industry.",
        "Career pathways and opportunities in the cinema and media industries."
      ]
    }
  ];

  const mappedEventActivities = eventActivities.map(activity => ({
    ...activity,
    description: getTruncatedContent(activity.description),
    fullDescription: activity.description
  }));


  return (
    <div>


      {/* 1. Upcoming Events (Future items) */}
      {futureEvents.length > 0 && (
        <UpcomingEvents events={futureEvents} />
      )}

      {/* 2. Main Filters & List */}
      <EventCalendar items={newsItems} departments={departments} categories={categories} />

      {/* 3. Newly Adds (This Week) */}
      {newlyAdds.length > 0 && (
        <UpcomingConference
          conferences={newlyAdds}
          title="This Week's Updates"
          backgroundColor="bg-[var(--light-gray)]"
          categoryText="New" // Override category badge if needed
        />
      )}

      {/* Static Sections */}
      <ThreeCardSider />
      <MediaCardSlider
        title="Industrial Visits"
        imageItems={placementGalleryImages}
        categoryTitle=""
        id="industrial-visits"
      />
      <StudentActivities
        id="events-activities"
        title="Excursions"
        subtitle=""
        activities={mappedEventActivities}
        useModal={true}
      />
      <Gallery images={customImages} />
      <AdmissionCareer />

      {/* Scrollbar Styles */}
      <style jsx global>{`
        .date-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .date-scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default NewsAndEvents;