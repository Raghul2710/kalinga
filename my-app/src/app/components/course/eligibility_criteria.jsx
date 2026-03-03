import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GlobalArrowButton from "../general/global-arrow_button";
import SectionHeading from "../general/SectionHeading";
import { Tabs, TabsList, TabsTrigger } from "../general/tab";

const defaultContent = {
  imageUrl: "https://cdn.kalingauniversity.ac.in/course/course_page.webp",
  imageAlt: "Students",
  duration: "3 Years (6 Semesters)",
  title: "Eligibility Criteria",
  criteria: [
    "The candidate should be a 12th pass with 45% aggregate marks.",
    "Take the Entrance Test: KALSEE",
  ],
  admissionTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  admissionButtonLabel: "Admission Open",
};

const CriterionItem = ({ criterion }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Helper to strip HTML and count words
  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  };

  const text = stripHtml(criterion);
  const words = text.split(" ").filter((word) => word.length > 0);
  const isTooLong = words.length > 200;

  if (!isTooLong) {
    return (
      <p
        className="text-white"
        dangerouslySetInnerHTML={{ __html: criterion }}
      />
    );
  }

  const truncatedText = words.slice(0, 200).join(" ") + " ...";

  return (
    <div className="flex flex-col gap-1">
      <p className="text-white">
        {isExpanded ? (
          <span dangerouslySetInnerHTML={{ __html: criterion }} />
        ) : (
          <span>{truncatedText}</span>
        )}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-[var(--card-skin)] text-xs font-semibold hover:underline w-fit mt-1"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default function EligibilityCriteria({
  imageUrl = defaultContent.imageUrl,
  imageAlt = defaultContent.imageAlt,
  duration = defaultContent.duration,
  title = defaultContent.title,
  criteria = defaultContent.criteria,
  admissionTitle = defaultContent.admissionTitle,
  admissionButtonLabel = defaultContent.admissionButtonLabel,
  href = "https://admissions.kalingauniversity.ac.in/",
  additionalButtons = [], // Array of { label, href } objects
  lateralEntryData = null, // Optional lateral entry data
}) {
  const [activeTab, setActiveTab] = useState("direct");

  const currentDuration =
    activeTab === "lateral" && lateralEntryData
      ? lateralEntryData.duration
      : duration;
  const currentCriteria =
    activeTab === "lateral" && lateralEntryData
      ? lateralEntryData.criteria
      : criteria;
  const currentTitle =
    activeTab === "lateral" && lateralEntryData
      ? "Lateral Entry Eligibility"
      : title;
  const currentDescription =
    activeTab === "lateral" && lateralEntryData
      ? lateralEntryData.description
      : null;

  return (
    <section className="bg-[var(--dark-blue)] py-16 rounded-2xl mx-2">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image */}
          <div className="w-full order-2 lg:order-1 ">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={600}
              height={500}
              className="rounded-lg object-cover w-full"
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col gap-10 justify-center h-full order-3 lg:order-2">
            {/* Tabs for Lateral Entry */}
            {lateralEntryData && (
              <div className="-mb-6">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="!flex-row mb-4">
                    <TabsTrigger
                      value="direct"
                      className="flex-1 !min-w-0 !flex-shrink"
                    >
                      Direct
                    </TabsTrigger>
                    <TabsTrigger
                      value="lateral"
                      className="flex-1 !min-w-0 !flex-shrink"
                    >
                      Lateral Entry
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            )}

            {/* Duration Box */}
            <div className="bg-[var(--card-skin)] rounded-lg px-2 py-5 text-center">
              <h3 className="text-[18px] md:text-[24px]">
                Duration : {currentDuration}
              </h3>
            </div>

            {/* Eligibility Criteria Section */}
            <div>
              {currentDescription && (
                <div
                  className="mb-6 text-white/90 text-[15px] leading-relaxed font-plus-jakarta-sans"
                  dangerouslySetInnerHTML={{ __html: currentDescription }}
                />
              )}
              <div className="mb-6">
                <SectionHeading
                  title={currentTitle}
                  titleClassName="!text-white !mb-0"
                />
              </div>

              <ul className="space-y-4">
                {currentCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-[var(--card-skin)]   rounded-md p-1.5 flex-shrink-0 mt-0.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-black transition-transform duration-300 group-hover:rotate-45"
                      >
                        <path
                          d="M4 12L12 4M12 4H6M12 4V10"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <CriterionItem criterion={criterion} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Red Box with Admission Open Button */}
            <div className="bg-[var(--button-red)] rounded-lg p-6 md:p-8 ">
              <h3 className="text-white mb-6 text-2xl md:text-3xl lg:text-[30px] leading-tight">
                {admissionTitle}
              </h3>

              {/* Main Admission Button - Full Width */}
              {href ? (
                <Link href={href} className="flex">
                  <GlobalArrowButton
                    className="!bg-white !text-[var(--foreground)] hover:!bg-gray-100 !shadow-none hover:!shadow-none "
                    arrowClassName="!bg-[var(--button-red)]"
                    arrowIconClassName="!text-white"
                    textClassName="!font-semibold"
                  >
                    {admissionButtonLabel}
                  </GlobalArrowButton>
                </Link>
              ) : (
                <GlobalArrowButton
                  className="!bg-white !text-[var(--foreground)] hover:!bg-gray-100 !shadow-none hover:!shadow-none w-full"
                  arrowClassName="!bg-[var(--button-red)]"
                  arrowIconClassName="!text-white"
                  textClassName="!font-semibold"
                >
                  {admissionButtonLabel}
                </GlobalArrowButton>
              )}

              {/* Divider and Additional Buttons */}
              {additionalButtons.length > 0 && (
                <>
                  {/* Horizontal Divider */}
                  <div className="w-full h-[1px] bg-white/30 my-6"></div>

                  {/* Additional Buttons as Text Links */}
                  <div className="flex flex-wrap gap-6 md:gap-8">
                    {additionalButtons.map((button, index) => (
                      <Link
                        key={index}
                        href={button.onClick ? "#" : button.href}
                        onClick={(e) => {
                          if (button.onClick) {
                            e.preventDefault();
                            button.onClick();
                          }
                        }}
                        className="group flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                      >
                        <span className="text-lg md:text-xl font-medium">{button.label}</span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        >
                          <path
                            d="M4 12L12 4M12 4H6M12 4V10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

