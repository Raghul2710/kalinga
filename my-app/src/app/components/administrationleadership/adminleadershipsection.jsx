"use client";
import LeadershipCard from "../leadership/LeadershipCard";

const leaders = [
  {
    imageSrc: "https://cdn.kalingauniversity.ac.in/about/Leadership/Rajeev+Kumar.png",
    name: "Dr. Rajeev Kumar",
    designation: "Chairman",
    quote: "Education must not only inform minds but ignite purpose and shape responsible leaders of tomorrow.",
    profileLink: "/chairman"
  },
  {
    imageSrc: "https://cdn.kalingauniversity.ac.in/about/Leadership/Sandeep+Arora.png",
    name: "Dr. Sandeep Arora",
    designation: "Chancellor",
    quote: "True progress begins when learning inspires responsibility, resilience, and the courage to create change.",
    profileLink: "/chancellor"
  },
  {
    imageSrc: "https://cdn.kalingauniversity.ac.in/about/Leadership/Sajjan+Singh.png",
    name: "Mr. Sajjan Singh",
    designation: "Pro-Chancellor",
    quote: "Education thrives when opportunity meets vision, and talent meets the right guidance.",
    profileLink: "/pro-chancellor"
  },
  {
    imageSrc: "https://cdn.kalingauniversity.ac.in/about/Leadership/Shridhar.png",
    name: "Dr. R. Shridhar",
    designation: "Vice-Chancellor",
    quote: "Education is not preparation for life; it is the awakening of purpose within it.",
    profileLink: "/vice-chancellor"
  },
  {
    imageSrc: "https://cdn.kalingauniversity.ac.in/about/Leadership/Byju+John.png",
    name: "Dr. Byju John",
    designation: "Director General",
    quote: "Learning has real power only when it shapes judgment, character, and responsibility.",
    profileLink: "/director-general"
  },
  {
    imageSrc: "https://cdn.kalingauniversity.ac.in/about/Leadership/Sandeep+Gandhi.png",
    name: "Dr. Sandeep Gandhi",
    designation: "Registrar",
    quote: "Education must expand perspectives, challenge limitations, and prepare minds for a global future.",
    profileLink: "/registrar"
  },
];

export default function adminLeadershipSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title could go here if needed, but wasn't explicitly asked for in the specific component request, 
            assuming it might be part of the page layout or just the grid. 
            I will render just the grid as requested "create this section here". */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5">
          {leaders.map((leader, index) => (
            <LeadershipCard
              key={index}
              imageSrc={leader.imageSrc}
              name={leader.name}
              designation={leader.designation}
              quote={leader.quote}
              profileLink={leader.profileLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
