"use client"
import React from 'react'
import QuickLinkCard from './quick_link_card'
import SectionHeading from "../general/SectionHeading";

const defaultQuickLinks = [
  {
    id: 1,
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
    title: "Conferences",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
    title: "IPR",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
    title: "Patents",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
    title: "Book Chapters",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 5,
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
    title: "Research Papers",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 6,
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
    title: "Awards",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
]

const QuickLinks = ({
  links = defaultQuickLinks,
  title = "Quick Links",
  description,
  backgroundColor = "bg-[var(--dark-blue)]",
  cardBackgroundColor = "bg-[var(--lite-sand)]",
  textColorClassName = "text-white/80",
  showReadMore = true,
  titleClassName = "",
  gridClassName = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10",
}) => {
  // Default description only if not provided
  const displayDescription = description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid";
  
  return (
    <section className={`${backgroundColor} py-16 rounded-xl md:mx-2`}>
      <div className="container mx-auto px-2">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
       <SectionHeading title={title} titleClassName={titleClassName} />
          {displayDescription && (
            <p className={`text-sm md:text-base max-w-6xl mx-auto font-plus-jakarta-sans mt-4 ${textColorClassName}`}>
              {displayDescription}
            </p>
          )}
        </div>

        {/* Cards Grid */}
        <div className={gridClassName}>
          {links.map((link) => (
            <QuickLinkCard
              key={link.id}
              icon={link.icon}
              title={link.title}
              description={link.description}
              cardBackgroundColor={cardBackgroundColor}
              showReadMore={showReadMore}
              href={link.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickLinks

