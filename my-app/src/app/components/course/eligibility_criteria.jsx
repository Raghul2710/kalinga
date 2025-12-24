import Image from "next/image";
import Link from "next/link";
import GlobalArrowButton from "../general/global-arrow_button";

const defaultContent = {
  imageUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/course/course_page.webp",
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

export default function EligibilityCriteria({
  imageUrl = defaultContent.imageUrl,
  imageAlt = defaultContent.imageAlt,
  duration = defaultContent.duration,
  title = defaultContent.title,
  criteria = defaultContent.criteria,
  admissionTitle = defaultContent.admissionTitle,
  admissionButtonLabel = defaultContent.admissionButtonLabel,
  href = null,
}) {
  return (
    <section className="bg-[var(--dark-blue)] py-16 rounded-2xl mx-2">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image */}
          <div className="w-full order-2 lg:order-1">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={600}
              height={500}
              className="rounded-lg object-cover w-full"
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col gap-6 justify-between h-full order-3 lg:order-2">
            {/* Duration Box */}
            <div className="bg-[var(--card-skin)] rounded-lg px-2 py-5 text-center">
              <h3 className="">Duration : {duration}</h3>
            </div>
            
            {/* Eligibility Criteria Section */}
            <div>
              <h2 className="text-white mb-6">{title}</h2>
              <ul className="space-y-4">
                {criteria.map((criterion, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-[var(--dark-orange-red)] rounded-md p-1.5 flex-shrink-0">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white transition-transform duration-300 group-hover:rotate-45"
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
                    <p className="text-white" dangerouslySetInnerHTML={{ __html: criterion }} />
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Red Box with Admission Open Button */}
            <div className="bg-[var(--button-red)] rounded-lg p-6 md:p-8 lg:p-11">
              <h3 className="text-white mb-6 text-2xl md:text-3xl lg:text-[30px] leading-tight">
                {admissionTitle}
              </h3>
              {href ? (
                <Link href={href} className="inline-flex">
                  <GlobalArrowButton
                    className="!bg-white !text-[var(--button-red)] hover:!bg-gray-100 !shadow-none hover:!shadow-none"
                    arrowClassName="!bg-[var(--dark-orange-red)]"
                    arrowIconClassName="!text-white"
                    textClassName="!font-semibold"
                  >
                    {admissionButtonLabel}
                  </GlobalArrowButton>
                </Link>
              ) : (
                <GlobalArrowButton
                  className="!bg-white !text-[var(--button-red)] hover:!bg-gray-100 !shadow-none hover:!shadow-none"
                  arrowClassName="!bg-[var(--dark-orange-red)]"
                  arrowIconClassName="!text-white"
                  textClassName="!font-semibold"
                >
                  {admissionButtonLabel}
                </GlobalArrowButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

