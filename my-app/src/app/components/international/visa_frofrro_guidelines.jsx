"use client";

import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../general/tab";
import SectionHeading from "../general/SectionHeading";

const visaPoints = [
  "Students should immediately apply for a student visa at the Indian Embassy / High Commission once the Admission Letter/Visa Letter has been issued by the University.",
  "Students have to ensure that their student visa is endorsed for Kalinga University.",
  "Students have to make sure that they have applied for a visa well in advance and in time. It generally takes 3–8 weeks to get the Indian Visa; thus, it is advisable to apply for the visa accordingly and consult the Indian High Commission/Embassy, if required.",
  "Students have to make sure that if they have entered India based on a Student Visa endorsed to Kalinga University, then it is their responsibility to ensure that they directly join and report to the University. The Visa endorsed in the name of the University or obtained based on University documents cannot be used for any other purpose, like employment, admission to any other University/College/Institute/Academy, etc., or for non-regular (distance/online) mode of education.",
  "After reaching the University Campus, students have to get the visa verified by the University and have to deposit a copy of the valid visa with the International Student Coordinator. It is the responsibility of the students to ensure that throughout his/her study period, students are on a valid visa.",
];

const extensionPoints = [
  "All international students should check visa validity and apply for extension well in advance.",
  "Students staying in India for more than 180 days must register with FRRO/FRO as per applicable rules.",
  "Keep passport, visa, admission letter, and required documents ready for FRRO/FRO processes.",
  "Update address/passport renewal/visa updates through FRRO/FRO portal as applicable.",
  "Stay in touch with the International Student Coordinator for guidance during extension/registration.",
];

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-3 leading-relaxed">
      <svg 
        fill="none" 
        height="24" 
        className="md:h-6 md:w-6 h-6 w-9 bg-[var(--card-skin)] fill-black rounded-md p-1 flex-shrink-0 mt-0.5" 
        viewBox="0 0 24 24" 
        width="24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m19 5.50049v10.99951c0 .2761-.2239.5-.5.5s-.5-.2239-.5-.5v-9.79289l-12.14645 12.14649c-.19526.1952-.51184.1952-.7071 0-.19527-.1953-.19527-.5119 0-.7072l12.14645-12.1464h-9.7929c-.27614 0-.5-.22386-.5-.5s.22386-.5.5-.5h11c.1316 0 .2578.05186.3514.14426l.0022.00219c.0879.0879.1397.20518.1458.32876.0004.00824.0006.01699.0006.02528z"></path>
      </svg>
      <span className="text-sm leading-7 text-[var(--light-text-gray)]">{children}</span>
    </li>
  );
}

export default function VisaFroFrroGuidelines({ viewAllHref = "#" }) {
  return (
    <section className="w-full py-16">
      <div className="mx-auto w-full max-w-5xl px-4">
        <SectionHeading 
          title="Guidelines For Visa And FRO/FRRO"
          titleClassName="text-center text-[var(--foreground)]"
        />

        <div className="mt-8 rounded-2xl bg-[var(--card-gray)] p-5 md:p-7">
          <Tabs defaultValue="visa">
            <TabsList className="gap-0">
              <TabsTrigger value="visa">Guidelines For a Visa</TabsTrigger>
              <TabsTrigger value="ext">Guidelines For Visa Extension And FRO/FRRO</TabsTrigger>
            </TabsList>

            <TabsContent value="visa" className="pt-7">
              <h3 className="font-stix text-[var(--foreground)]">
                Guidelines For a Visa
              </h3>
              <ul className="mt-5 space-y-4">
                {visaPoints.map((t, i) => <Bullet key={i}>{t}</Bullet>)}
              </ul>
            </TabsContent>

            <TabsContent value="ext" className="pt-7">
              <h3 className="font-stix text-2xl font-bold text-[var(--foreground)]">
                Guidelines For Visa Extension And FRO/FRRO
              </h3>
              <ul className="mt-5 space-y-4">
                {extensionPoints.map((t, i) => <Bullet key={i}>{t}</Bullet>)}
              </ul>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-6 flex justify-center">
          <Link href={viewAllHref} className="inline-flex items-center gap-2 font-semibold text-[var(--foreground)]">
            <span>View all Guidelines</span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-[var(--button-red)] text-white">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
