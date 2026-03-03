"use client"
import React, { useEffect } from 'react'
import { usePathname } from "next/navigation"
import SportsWellnessOverview from '@/app/components/sports-and-wellness-centre/sportsandwellnesshero'
import SportsandwellnessMainIntro from '@/app/components/sports-and-wellness-centre/sportsandwellness_main_intro'
import SportsFacilitiesTabs from '@/app/components/sports-and-wellness-centre/sportsfacilitiestabs'
import NewsEvents from '@/app/components/home/news_and_events'
import AdmissionCareer from '@/app/components/general/admission_cta'
import Gallery from '@/app/components/general/gallery'
import Sportsandwellnesshighlightvideo from '../components/sports-and-wellness-centre/sportsandwellnesshighlightvideo'
import Sportsandwellnessvideo from '../components/sports-and-wellness-centre/sportsandwellnessvideo'
import SectionHeading from '../components/general/SectionHeading'


const galleryItems = [
  // Indoor Sports
  {
    id: 1,
    image: "https://cdn.kalingauniversity.ac.in/sports/carrom-game-pieces.webp",
    alt: "Carom",
    description: "Indoor Sports",
  },
  {
    id: 2,
    image: "https://cdn.kalingauniversity.ac.in/sports/chess+(1).webp",
    alt: "Chess",
    description: "Indoor Sports",
  },
  {
    id: 3,
    image: "https://cdn.kalingauniversity.ac.in/sports/table_tennis.webp",
    alt: "Table Tennis",
    description: "Indoor Sports",
  },
  {
    id: 4,
    image: "https://cdn.kalingauniversity.ac.in/sports/snooker.webp",
    alt: "Snooker",
    description: "Indoor Sports",
  },
  // Outdoor Sports
  {
    id: 5,
    image: "https://cdn.kalingauniversity.ac.in/sports/cricket.webp",
    alt: "Cricket",
    description: "Outdoor Sports",
  },
  {
    id: 6,
    image: "https://cdn.kalingauniversity.ac.in/sports/football.webp",
    alt: "Football",
    description: "Outdoor Sports",
  },
  {
    id: 7,
    image: "https://cdn.kalingauniversity.ac.in/sports/badminton.webp",
    alt: "Badminton",
    description: "Outdoor Sports",
  },
  {
    id: 8,
    image: "https://cdn.kalingauniversity.ac.in/sports/basektballevent.webp",
    alt: "Basketball",
    description: "Outdoor Sports",
  },
  {
    id: 9,
    image: "https://cdn.kalingauniversity.ac.in/sports/volleyball.webp",
    alt: "Volleyball",
    description: "Outdoor Sports",
  },
  {
    id: 10,
    image: "https://cdn.kalingauniversity.ac.in/sports/kabaddi+(1).webp",
    alt: "Kabaddi",
    description: "Outdoor Sports",
  },
  {
    id: 11,
    image: "https://cdn.kalingauniversity.ac.in/sports/kho-kho.webp",
    alt: "Kho-Kho",
    description: "Outdoor Sports",
  },
  {
    id: 12,
    image: "https://cdn.kalingauniversity.ac.in/sports/hockey.webp",
    alt: "Hockey",
    description: "Outdoor Sports",
  },
  {
    id: 13,
    image: "https://cdn.kalingauniversity.ac.in/sports/handball.webp",
    alt: "Handball",
    description: "Outdoor Sports",
  },
  {
    id: 14,
    image: "https://cdn.kalingauniversity.ac.in/sports/shotput.webp",
    alt: "Shot Put",
    description: "Outdoor Sports",
  },
  {
    id: 15,
    image: "https://cdn.kalingauniversity.ac.in/sports/discthrow.webp",
    alt: "Discus Throw",
    description: "Outdoor Sports",
  },
  {
    id: 16,
    image: "https://cdn.kalingauniversity.ac.in/sports/javelin_throw.webp",
    alt: "Javelin Throw",
    description: "Outdoor Sports",
  },
  {
    id: 17,
    image: "https://cdn.kalingauniversity.ac.in/sports/hammer_throw.webp",
    alt: "Hammer Throw",
    description: "Outdoor Sports",
  },
  // Gymnasium
  {
    id: 18,
    image: "https://cdn.kalingauniversity.ac.in/sports/gym1.webp",
    alt: "Gymnasium",
    description: "Fitness Centre",
  },
  {
    id: 19,
    image: "https://cdn.kalingauniversity.ac.in/sports/gym2.webp",
    alt: "Gymnasium",
    description: "Fitness Centre",
  },
  {
    id: 20,
    image: "https://cdn.kalingauniversity.ac.in/sports/gym3.webp",
    alt: "Gymnasium",
    description: "Fitness Centre",
  },
  {
    id: 21,
    image: "https://cdn.kalingauniversity.ac.in/sports/gym4.webp",
    alt: "Gymnasium",
    description: "Fitness Centre",
  },
  {
    id: 22,
    image: "https://cdn.kalingauniversity.ac.in/facilities/gym.webp",
    alt: "Gymnasium",
    description: "Fitness Centre",
  },
]

function Sportsandwellnesscentre() {
  const pathname = usePathname();



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
      <Sportsandwellnesshighlightvideo />
      <SportsWellnessOverview />
      <Sportsandwellnessvideo />
      <div className="container py-10 text-center">
        <SectionHeading title="Sports Facilities" titleClassName="text-center" />
        <SportsFacilitiesTabs />
      </div>
      {/* Category ID 6 is Sports */}
      <NewsEvents categoryId="6" title="Sports Achievers" titleClassName="text-center" hideCalendar={true} />
      <Gallery title='Glimpses' images={galleryItems} />
      <AdmissionCareer />
    </>
  )
}

export default Sportsandwellnesscentre
