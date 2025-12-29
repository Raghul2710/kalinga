"use client";

import Image from "next/image";
import Link from "next/link";

  const leadershipData = [
  {
    name: "Dr. Rajeev Kumar",
    title: "Chairman",
    route: "chairman",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/Leadership/Rajeev+Kumar.png",
  },
  {
    name: "Dr. Sandeep Arora",
    title: "Chancellor",
    route: "chancellor",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/Leadership/Sandeep+Arora.png",
  },
  {
    name: "Mr. Sajjan Singh",
    title: "Pro-Chancellor",
    route: "pro-chancellor",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/Leadership/Sajjan+Singh.png",
  },
  {
    name: "Dr. R. Shridhar",
    title: "Vice-Chancellor",
    route: "vice-chancellor",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/Leadership/Shridhar.png",
  },
  {
    name: "Dr. Byju John",
    title: "Director General",
    route: "director-general",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/Leadership/Byju+John.png",
  },
  {
    name: "Dr. Sandeep Gandhi",
    title: "Registrar",
    route: "registrar",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/Leadership/Sandeep+Gandhi.png",
  },
];


const LeadershipCard = ({ leader }) => {
  return (
    <Link href={`/${leader.route}`} className="block w-full max-w-[332px] mx-auto mt-8">
      <div className="relative bg-[#FFEBD0] rounded-[10px] overflow-hidden group w-full min-h-[350px] sm:min-h-[386px] cursor-pointer hover:shadow-lg transition-shadow">
        
        {/* IMAGE */}
        <div className="relative w-full h-[300px] sm:h-[240px] md:h-[280px] flex items-center justify-center pt-4 mt-1">
          <Image
            src={leader.image}
            width={300}
            height={400}
            alt={`${leader.name}, ${leader.title} at Kalinga University`}
            className="w-[85%] h-[280px] sm:h-[260px] md:h-[280px] object-cover rounded-[7px]"
          />
        </div>

        {/* CONTENT */}
        <div className="relative px-4 pb-6 mt-4 ml-2">
          <h3 className="font-medium text-[#191919] text-[18px] sm:text-[22px] md:text-[24px] leading-tight mb-1 font-stix">
            {leader.name}
          </h3>

          <p className="text-[#4D4C4C] text-[14px] sm:text-[15px] md:text-[17px] font-plus-jakarta-sans font-medium">
            {leader.title}
          </p>

          {/* BADGE BUTTON */}
          <div className="absolute bottom-6 right-6">
            <div className="w-8 h-8 bg-[var(--button-red)] group-hover:bg-[#c41e3a] rounded-lg flex items-center justify-center transition-colors shadow-md">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const AdminLeadershipSection = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-normal text-black tracking-wide font-stix">
            Administration & Leadership
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {leadershipData.map((leader, index) => (
            <LeadershipCard key={index} leader={leader} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminLeadershipSection;
