"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import SectionHeading from "../general/SectionHeading";
import GlobalArrowButton from "../general/global-arrow_button";
import FlipbookTrigger from "../general/FlipbookTrigger";

export default function StudentCell({
  imageSrc = "https://cdn.kalingauniversity.ac.in/international-students/student-cell.webp",
  imageAlt = "International students",
  tag = "International Students Cell",
  title = "Supporting Global Students At Every Step",
  description = "The International Students Cell at Kalinga University has been established to streamline the academic processes of our global students, helping them seize the best opportunities and resources of our University. The members of our cell take utmost care of our students from their arrival and admission into our programs to providing support and guidance until they receive their degree. Not just academically, but they also provide details of events, competitions, and training programs, and encourage them to actively participate in events outside the classroom. They even provide complete immigration support, make accommodation arrangements, and arrange language classes. From organising BRIDGE Classes to providing counselling sessions for academic and personal growth, their aim is to make every student feel at home.",

  ctaLabel = "Read More",
  ctaHref = "#",
  subtitle = "International Students Cell",
  subtitleClassName = "",
  titleClassName = "!text-white",
  subtitleTextColor = "text-[var(--dark-orange-red)]",
  functionsTitle = "Functions of the International Student Cell",
  functionsSubtitle = "The cell assists and guides the students on matters related to:",
  functionsList = [
    "Admission formalities",
    "Hostel allocation",
    "Issue of offer letters for provisional admission (By International Counsellor)",
    "Issue of Bonafide Certificates",
    "Guidance to register with the Foreign Regional Registration Office (FRRO)",
    "Extension of the visa",
    "Addressing any other academic or administrative problems of students",
    "Student Information System",
    "Redressal of student grievances",
    "Issue of all official letters and documents related to International students",
  ],
  buttons = [],
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split description into paragraphs by splitting on periods followed by space and capital letter
  const paragraphs = useMemo(() => {
    // Split by periods followed by space and capital letter, but keep the period
    const sentences = description.match(/[^.!?]+[.!?]+/g) || [description];

    // Group sentences into paragraphs (2 sentences per paragraph, or logical breaks)
    const paras = [];
    let currentPara = '';

    sentences.forEach((sentence, index) => {
      currentPara += sentence.trim() + ' ';

      // Create a paragraph after every 2 sentences, or if it's the last sentence
      if ((index + 1) % 2 === 0 || index === sentences.length - 1) {
        if (currentPara.trim()) {
          paras.push(currentPara.trim());
          currentPara = '';
        }
      }
    });

    return paras;
  }, [description]);

  const hasMoreThanTwoParagraphs = paragraphs.length > 2;
  const visibleParagraphs = isExpanded ? paragraphs : paragraphs.slice(0, 2);

  return (
    <section className="mx-2">
      <div className="bg-[var(--dark-blue)] text-white rounded-2xl shadow-lg overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-16">
            <div className="relative w-full h-[300px] md:h-[500px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="rounded-2xl"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>

            <div className="flex flex-col">
              <SectionHeading
                subtitle={subtitle}
                title={title}
                subtitleClassName={subtitleClassName}
                titleClassName={titleClassName}
                subtitleTextColor={subtitleTextColor}
              />
              <div className="space-y-4">
                {visibleParagraphs.map((para, index) => (
                  <p
                    key={index}
                    className="text-sm md:text-base text-white/80 leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
              {isExpanded && (
                <div className="mt-4 text-white/80">
                  <h4 className="font-bold text-white mb-2">{functionsTitle}</h4>
                  <p className="mb-2">{functionsSubtitle}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {functionsList.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {hasMoreThanTwoParagraphs && (
                <GlobalArrowButton
                  className="!bg-[var(--dark-blue)] !text-white shadow-none !p-0 mt-2"
                  arrowClassName="!bg-[var(--button-red)]"
                  arrowIconClassName="!text-white"
                  textClassName="!text-white text-xs sm:text-base !pl-0"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Read Less" : ctaLabel}
                </GlobalArrowButton>
              )}
              {buttons && buttons.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-6">
                  {buttons.map((btn, index) => {
                    const isPdf = btn.fileUrl && btn.fileUrl.toLowerCase().endsWith(".pdf");
                    const buttonEl = (
                      <GlobalArrowButton
                        key={btn.id || index}
                        className="!bg-white !text-black"
                        arrowClassName="!bg-[var(--button-red)]"
                        arrowIconClassName="!text-white"
                        textClassName="!text-black text-xs sm:text-base"
                      >
                        {btn.text}
                      </GlobalArrowButton>
                    );

                    return isPdf ? (
                      <FlipbookTrigger key={btn.id || index} pdfUrl={btn.fileUrl} title={btn.text}>
                        <a
                          href={btn.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex"
                        >
                          {buttonEl}
                        </a>
                      </FlipbookTrigger>
                    ) : (
                      <a
                        key={btn.id || index}
                        href={btn.fileUrl || "#"}
                        target={btn.fileUrl ? "_blank" : undefined}
                        rel={btn.fileUrl ? "noopener noreferrer" : undefined}
                        className="inline-flex"
                      >
                        {buttonEl}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
