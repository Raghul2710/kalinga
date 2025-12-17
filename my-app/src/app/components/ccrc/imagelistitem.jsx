import Image from "next/image";
import SectionHeading from "../general/SectionHeading";

export default function ImageListItem({
  imageSrc = "/images/ccrc/ccrc-banner.png",
  imageAlt = "CCRC Banner",
  imageWidth = 600,
  imageHeight = 400,
  title = "About CCRC",
  subtitle = "Career and Corporate Resource Centre",
  description = "The Career and Corporate Resource Centre (CCRC) of Kalinga University bridges academic learning and industrial knowledge through collaborations and customised solutions. Our services include: Corporate Trainings & Psychometric Analysis, Consultancy Services: 360 Degree PMS & HRIS.",
  buttonText = "Apply for CCRC",
  onButtonClick,
  items = [],
  boxItems = [],
  className = "",
  textClassName = "text-white ",
  headingClassName = "text-white",
  cardBackgroundColor = "bg-[var(--card-sandal)]",
  cardTitleClassName = "text-[var(--red)]",
  listItemTextClassName = "",
}) {
  return (
    <section
      className={`bg-[var(--dark-blue)] rounded-xl py-16 mx-2 ${className}`}
    >
      {/* Custom CSS for scrollbar */}
      <style>
        {`
          .ccrc-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: var(--red) var(--light-gray);
            padding-right: 8px;
          }
          .ccrc-scrollbar::-webkit-scrollbar {
            width: 10px;
            background: var(--light-gray);
            border-radius: 12px;
          }
          .ccrc-scrollbar::-webkit-scrollbar-thumb {
            background: var(--red);
            border-radius: 12px;
            min-height: 40px;
            border: 2px solid var(--light-gray);
          }
          .ccrc-scrollbar::-webkit-scrollbar-track {
            background: var(--light-gray);
            border-radius: 12px;
          }
          .ccrc-scrollbar::-webkit-scrollbar-button {
            display: none;
            height: 0;
            width: 0;
          }
        `}
      </style>
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-12 grid-cols-6 items-center md:gap-12 gap-6 justify-between">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="col-span-6 "
          />

          <div className="col-span-6 md:gap-5 gap-2   items-center items-start min-h-[500px] flex flex-col">
            {/* Heading not scrollable */}
            <SectionHeading
              title={title}
              titleClassName={`!py-2 text-left  ${headingClassName}`}
            />

            {/* Description */}
            {description && (
              <p className={`text-sm pb-4 ${textClassName}`}>{description}</p>
            )}

            {/* Scrollable items only */}
            {items && Array.isArray(items) && items.length > 0 && (
              <ul className="space-y-3 py-2 w-full overflow-y-auto max-h-inherit ccrc-scrollbar pr-2">
                {items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-3 space-y-2"
                  >
                    <svg
                      fill="none"
                      height="24"
                      className="h-6 w-6 bg-[var(--card-skin)] fill-black rounded-md p-1 flex-shrink-0"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      id="fi_16777580"
                    >
                      <path d="m19 5.50049v10.99951c0 .2761-.2239.5-.5.5s-.5-.2239-.5-.5v-9.79289l-12.14645 12.14649c-.19526.1952-.51184.1952-.7071 0-.19527-.1953-.19527-.5119 0-.7072l12.14645-12.1464h-9.7929c-.27614 0-.5-.22386-.5-.5s.22386-.5.5-.5h11c.1316 0 .2578.05186.3514.14426l.0022.00219c.0879.0879.1397.20518.1458.32876.0004.00824.0006.01699.0006.02528z"></path>
                    </svg>
                    <span className={`text-sm ${textClassName}`}>{item.text}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Scrollable boxItems only */}
            {boxItems && Array.isArray(boxItems) && boxItems.length > 0 && (
              <ul className="space-y-3 py-2 w-full overflow-y-auto max-h-[450px] ccrc-scrollbar pr-2">
                {boxItems.map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center space-x-3 rounded-lg  p-3 ${cardBackgroundColor}`}
                  >
                    <div className="mt-1 flex h-16 w-16 items-center justify-center rounded text-[var(--dark-blue)]">
                      {item.icon ? (
                        item.icon
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-10 w-10"
                          fill="currentColor"
                        >
                          <path d="M4.75 6A2.75 2.75 0 0 1 7.5 3.25h9A2.75 2.75 0 0 1 19.25 6v12A2.75 2.75 0 0 1 16.5 20.75h-9A2.75 2.75 0 0 1 4.75 18zM7.5 4.75A1.25 1.25 0 0 0 6.25 6v12A1.25 1.25 0 0 0 7.5 19.25h9A1.25 1.25 0 0 0 17.75 18V6A1.25 1.25 0 0 0 16.5 4.75z" />
                          <path d="M9 8.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 9 8.25M9 11.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 9 11.25M9 14.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 9 14.25" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      {item.title && (
                        <h4 className={`text-xl ${cardTitleClassName}`}>
                          {item.title}
                        </h4>
                      )}
                      <p className={listItemTextClassName}>
                        {item.text || item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}