"use client";

import { useEffect } from "react";
import Link from "next/link";
import LeadershipCard from "../general/leadership-card";

const centresOfExcellence = [
  {
    id: 1,
    name: "AI & ML Courses Training Centre",
    title: "IBM Innovation Centre for Education",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/ibm.webp",
    href: "/centresofexcellence/ai-ml",
  },
  {
    id: 2,
    name: "Automobile Training Centre",
    title: "JustAuto Solutions",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/justauto.webp",
    href: "/centresofexcellence/automobile",
  },
  {
    id: 3,
    name: "BRIDGE Courses Training Centre",
    title: "In collaboration with BOSCH",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002989.png",
    href: "/centresofexcellence/bosch",
  },
  {
    id: 4,
    name: "Robotics, Coding, & Drone",
    title: "BDS Education",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002988.png",
    href: "/centresofexcellence/robotics",
  },
  {
    id: 5,
    name: "Electric Vehicles Training Centre",
    title: "Godawari Electric Motors Pvt. Ltd. (Eblu)",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/godawari.png",
    href: "/centresofexcellence/godawari",
  },
  {
    id: 6,
    name: "IIoT Training Centre",
    title: "Technoviz Automation",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002977.png",
    href: "/centresofexcellence/iiot",
  },
  {
    id: 7,
    name: "MSME Training Centre",
    title: "IamSMEofIndia",
    image:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/smeindia.webp",
    href: "/centresofexcellence/msme",
  },
];

export default function CenterOfExcellenceMain({
  centres = centresOfExcellence,
  title = "Centres of Excellence",
  description = "At Kalinga, we'll not just build your future with only classroom-based studies, but there's something more to it that will make your learning experience fun and exciting. Presenting to you our Centres of Excellence that will introduce you to the future of technologies.",
  nameOnly = false,
  showDescription = true,
  breadcrumbData = null,
  headerTextMaxWidthClass = "max-w-screen-xl",
}) {
  useEffect(() => {
    if (!breadcrumbData) return;

    if (typeof window !== "undefined") {
      window.__breadcrumbData = breadcrumbData;
    }

    return () => {
      if (typeof window !== "undefined") delete window.__breadcrumbData;
    };
  }, [breadcrumbData]);

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-2">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-stix text-[var(--foreground)] text-3xl md:text-4xl lg:text-5xl mb-4">
            {title}
          </h2>

          {showDescription && (
            <p
              className={`text-[var(--light-text-gray)] ${headerTextMaxWidthClass} mx-auto`}
            >
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
          {centres.map((centre) => (
            <Link
              key={centre.id}
              href={centre.href || "#"}
              className="block h-full w-full cursor-pointer transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--button-red)] rounded-xl"
              prefetch={false}
            >
              {nameOnly ? (
                <div className="bg-[var(--lite-sand)] rounded-xl p-6 h-full flex items-center justify-center text-center min-h-[400px]">
                  <h3 className="font-jakarta text-lg md:text-xl font-medium text-[var(--foreground)]">
                    {centre.name}
                  </h3>
                </div>
              ) : (
                <LeadershipCard
                  name={centre.name}
                  title={centre.title}
                  image={centre.image}
                  usePTagForName={true}
                  imageFit="contain"
                  imageContainerClassName="h-[180px] bg-white rounded-lg p-5 flex items-center justify-center"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
