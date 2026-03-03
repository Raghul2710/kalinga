"use client";

import React from "react";
import Link from "next/link";
import LeadershipCard from "../components/general/leadership-card";



const paymentOptions = [
  {
    id: 1,
    title: "Click here to pay online (National)",
    href: "https://kuerp.in/",
    image: "https://cdn.kalingauniversity.ac.in/common/student.jpg",
    name: "National Online Payment"
  },
  {
    id: 2,
    title: "Click here to pay online (International)",
    href: "https://kuerp.in/",
    image: "https://cdn.kalingauniversity.ac.in/international-students/international-students-intro.jpg",
    name: "International Online Payment"
  },
];

export default function KalingaBuzz() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {paymentOptions.map((option) => (
            <Link key={option.id} href={option.href} target="_blank" className="block h-full group">
              <LeadershipCard
                image={option.image}
                name={option.name}
                title={option.title}
                imageContainerClassName="h-[250px] md:h-[300px]"
                usePTagForName={true}
                showArrowButton={true}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}