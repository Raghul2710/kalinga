import Image from "next/image";
import GlobalArrowButton from "../general/global-arrow_button";

export default function EligibilityCriteria() {
  return (
    <section className="bg-[var(--dark-blue)] py-16 rounded-2xl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image */}
          <div className="w-full order-2 lg:order-1">
            <Image
              src="https://kalinga-university.s3.ap-south-1.amazonaws.com/course/course_page.webp"
              alt="Students"
              width={600}
              height={500}
              className="rounded-lg object-cover w-full"
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col gap-6 justify-between h-full order-3 lg:order-2">
            {/* Duration Box */}
            <div className="bg-[var(--dark-green)] rounded-lg px-6 py-5 text-center">
              <h3 className="">Duration : 3 Years (6 Semesters)</h3>
            </div>
            
            {/* Eligibility Criteria Section */}
            <div>
              <h2 className="text-white mb-6">Eligibility Criteria</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
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
                  <p className="text-white">The candidate should be a 12th pass with 45% aggregate marks.</p>
                </li>
                <li className="flex items-center gap-3">
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
                  <p className="text-white">
                    Take the Entrance Test:{" "}
                    <a href="#" className="text-[var(--dark-orange-red)] hover:underline inline-flex items-center gap-1">
                      KALSEE
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[var(--dark-orange-red)]"
                      >
                        <path
                          d="M4 12L12 4M12 4H6M12 4V10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            
            {/* Red Box with Admission Open Button */}
            <div className="bg-[var(--button-red)] rounded-lg p-6 md:p-8 lg:p-11">
              <h3 className="text-white mb-6 text-2xl md:text-3xl lg:text-[36px] leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h3>
              <GlobalArrowButton
                className="!bg-white !text-[var(--button-red)] hover:!bg-gray-100 !shadow-none hover:!shadow-none"
                arrowClassName="!bg-[var(--dark-orange-red)]"
                arrowIconClassName="!text-white"
                textClassName="!font-semibold"
              >
                Admission Open
              </GlobalArrowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

