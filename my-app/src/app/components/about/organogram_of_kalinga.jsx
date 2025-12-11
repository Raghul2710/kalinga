'use client'
import React from "react";
import GlobalArrowButton from "../general/global-arrow_button";

const defaultContent = {
  title: "Organogram of Kalinga University",
  description: [
    "Kalinga University follows a well-structured governance model to ensure smooth administration and institutional integrity. It begins with the Chancellor, followed by the Vice-Chancellor and Director General. Their roles and responsibilities are well-defined, enabling proper decision-making across all the departments of the university.",
  ],
  buttonLabel: "Explore Now",
};

const OrganogramOfKalinga = ({
  cardBackgroundColor = "bg-[var(--button-red)]",
  title = defaultContent.title,
  description = defaultContent.description,
  buttonLabel = defaultContent.buttonLabel,
  onClick = null,
  href = null,
  buttonClassName = "!bg-white !text-black",
  arrowClassName = "!bg-[var(--dark-orange-red)]",
  arrowIconClassName = "!text-white",
  textClassName = "!text-black",
  collapsedParagraphs = 1,
  readMoreLabel = "Read More",
  readLessLabel = "Show Less",
}) => {
  const descriptionArray = Array.isArray(description) ? description : [description];
  const [showAll, setShowAll] = React.useState(false);
  const visibleParagraphs = showAll
    ? descriptionArray
    : descriptionArray.slice(0, collapsedParagraphs);

  const ButtonContent = (
    <GlobalArrowButton
      className={buttonClassName}
      arrowClassName={arrowClassName}
      arrowIconClassName={arrowIconClassName}
      textClassName={textClassName}
      onClick={onClick || undefined}
    >
      {buttonLabel}
    </GlobalArrowButton>
  );

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="px-4 sm:px-5">
        <div
          className={`${cardBackgroundColor} rounded-[10px] p-6 sm:p-8 md:p-8 text-white`}
        >
          {/* Title */}
          <h2 className="font-stix text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4 sm:mb-6 md:mb-8">
            {title}
          </h2>

          {/* Description */}
          <div className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-normal md:leading-relaxed mb-6 sm:mb-8 md:mb-10 font-plus-jakarta-sans space-y-3">
            {visibleParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
            {descriptionArray.length > collapsedParagraphs && (
              <button
                type="button"
                className="text-white font-semibold underline underline-offset-4"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? readLessLabel : readMoreLabel}
              </button>
            )}
          </div>

          {/* Explore Now Button */}
          <div className="flex justify-start">
            {href ? (
              <a href={href} className="inline-flex">
                {ButtonContent}
              </a>
            ) : (
              ButtonContent
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganogramOfKalinga;

