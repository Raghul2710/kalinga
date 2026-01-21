"use client"
import React from 'react'
import SportsWellnessOverview from '@/app/components/sports-and-wellness-centre/sportsandwellnesshero'
import SportsandwellnessMainIntro from '@/app/components/sports-and-wellness-centre/sportsandwellness_main_intro'
import SportsFacilitiesTabs from '@/app/components/sports-and-wellness-centre/sportsfacilitiestabs'
import NewsEvents from '@/app/components/home/news_and_events'
import AdmissionCareer from '@/app/components/general/admission_cta'
import Gallery from '@/app/components/general/gallery'


const galleryItems = [
  // Indoor Sports
  {
    id: 1,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/carrom-game-pieces.webp",
    alt: "Carom",
    description: "Indoor Sports",
  },
  {
    id: 2,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/chess+(1).webp",
    alt: "Chess",
    description: "Indoor Sports",
  },
  {
    id: 3,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/table_tennis.webp",
    alt: "Table Tennis",
    description: "Indoor Sports",
  },
  {
    id: 4,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/snooker.webp",
    alt: "Snooker",
    description: "Indoor Sports",
  },
  // Outdoor Sports
  {
    id: 5,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/cricket.webp",
    alt: "Cricket",
    description: "Outdoor Sports",
  },
  {
    id: 6,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/football.webp",
    alt: "Football",
    description: "Outdoor Sports",
  },
  {
    id: 7,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/badminton.webp",
    alt: "Badminton",
    description: "Outdoor Sports",
  },
  {
    id: 8,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/basektballevent.webp",
    alt: "Basketball",
    description: "Outdoor Sports",
  },
  {
    id: 9,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/volleyball.webp",
    alt: "Volleyball",
    description: "Outdoor Sports",
  },
  {
    id: 10,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/kabaddi+(1).webp",
    alt: "Kabaddi",
    description: "Outdoor Sports",
  },
  {
    id: 11,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/kho-kho.webp",
    alt: "Kho-Kho",
    description: "Outdoor Sports",
  },
  {
    id: 12,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/hockey.webp",
    alt: "Hockey",
    description: "Outdoor Sports",
  },
  {
    id: 13,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/handball.webp",
    alt: "Handball",
    description: "Outdoor Sports",
  },
  {
    id: 14,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/shotput.webp",
    alt: "Shot Put",
    description: "Outdoor Sports",
  },
  {
    id: 15,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/discthrow.webp",
    alt: "Discus Throw",
    description: "Outdoor Sports",
  },
  {
    id: 16,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/javelin_throw.webp",
    alt: "Javelin Throw",
    description: "Outdoor Sports",
  },
  {
    id: 17,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/hammer_throw.webp",
    alt: "Hammer Throw",
    description: "Outdoor Sports",
  },
  // Gymnasium
  {
    id: 18,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/gym1.webp",
    alt: "Gymnasium",
    description: "Fitness Centre",
  },
  {
    id: 19,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/gym2.webp",
    alt: "Gymnasium",
    description: "Fitness Centre",
  },
  {
    id: 20,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/gym3.webp",
    alt: "Gymnasium",
    description: "Fitness Centre",
  },
  {
    id: 21,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/gym4.webp",
    alt: "Gymnasium",
    description: "Fitness Centre",
  },
  {
    id: 22,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/gym.webp",
    alt: "Gymnasium",
    description: "Fitness Centre",
  },
]

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/sportsmain.webp",
  pageTitle: "Sports & Wellness Centre",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Sports & Wellness", href: "/sports-and-wellness-centre" },
  ],
};

if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

function Sportsandwellnesscentre() {

  return (
    <>
      <style jsx global>{`
  .absolute.inset-0 > img {
    object-position: center 60% !important;
  }

  @media (max-width: 768px) {
    .absolute.inset-0 > img {
      object-position: center 5% !important;
    }
  }
`}</style>
      <SportsandwellnessMainIntro />
      <SportsWellnessOverview />
      <div className="container py-10">
        <SportsFacilitiesTabs />
      </div>

      {/* Category ID 6 is Sports */}
      <NewsEvents categoryId="6" title="Sports Achievers" titleClassName="text-center" hideCalendar={true} />

      <Gallery title='Glimpse' images={galleryItems} />
      <AdmissionCareer />
    </>
  )
}

export default Sportsandwellnesscentre
