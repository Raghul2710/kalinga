import Image from "next/image";
import Link from "next/link";
import GlobalArrowButton from "../general/global-arrow_button";
import SectionHeading from "../general/SectionHeading";

export default function DeptSyllabus({ 
  title,
  imageSrc,
  imageAlt = "Students collaborating",
  leftCardTitle = "Program & Syllabus",
  leftCardDescription,
  leftCardButtonText = "Download Syllabus",
  leftCardButtonLink = "/admissions",
  leftCardSecondButtonText,
  leftCardSecondButtonLink,
  rightCardTitle = "Course Materials",
  rightCardDescription,
  rightCardButtonText = "Explore Courses",
  rightCardButtonLink = "/admissions",
  rightCardSecondButtonText,
  rightCardSecondButtonLink,
  mobileImageHeight = null
}) {
  const defaultImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/bg-course.webp";
  const finalImageSrc = imageSrc || defaultImageSrc;
  
  // Determine image height classes based on mobileImageHeight prop
  const imageHeightClass = mobileImageHeight === 700 
    ? `h-[700px] md:h-[600px] lg:h-[700px]`
    : "h-[400px] md:h-[600px] lg:h-[700px]";

  return (
    <section className="py-16 pb-16 bg-white">
      <div className="px-2">
        {/* Students Image with Overlay Cards */}
        <div className="relative">
          <Image
            src={finalImageSrc}
            alt={imageAlt}
            width={1200}
            height={500}
            className={`w-full ${imageHeightClass} object-cover rounded-2xl`}
          />
          
          {/* Two Cards Overlaying the Image */}
          <div className="absolute bottom-0 left-0 right-0 px-4 md:px-6 lg:px-10 pb-4 md:pb-6">
             {/* Title */}
            {title && (
              <div className="mb-8 md:mb-10 text-center">
                <SectionHeading title={title} titleClassName="!text-white" />
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Left Card - Program & Syllabus */}
              <div className="bg-[var(--dark-orange-red)] rounded-xl p-4 md:p-6 lg:p-8 flex flex-col justify-around min-h-[160px] md:min-h-[180px] lg:min-h-[200px]">
                <div>
                  <h3 className="text-white md:!text-[35px] text-[28px]">
                    {leftCardTitle}
                  </h3>
                  {leftCardDescription && (
                    <p className="text-white my-2 md:my-3">
                      {leftCardDescription}
                    </p>
                  )}
                </div>
                <div className="w-full flex flex-row gap-2 md:gap-3 flex-wrap">
                  {leftCardButtonLink ? (
                    <Link href={leftCardButtonLink}>
                      <GlobalArrowButton
                        className="!bg-white !text-[#000] !w-auto !justify-start text-sm md:text-base !px-4 !py-3 md:!py-2"
                        arrowClassName="!bg-[var(--button-red)]"
                        arrowIconClassName="!text-white"
                        textClassName="!font-bold"
                      >
                        {leftCardButtonText}
                      </GlobalArrowButton>
                    </Link>
                  ) : (
                    <GlobalArrowButton
                      className="!bg-white !text-[#000] !w-auto !justify-start text-sm md:text-base !px-4 !py-3 md:!py-2"
                      arrowClassName="!bg-[var(--button-red)]"
                      arrowIconClassName="!text-white"
                      textClassName="!font-bold"
                    >
                      {leftCardButtonText}
                    </GlobalArrowButton>
                  )}
                  {leftCardSecondButtonText && (
                    leftCardSecondButtonLink ? (
                      <Link href={leftCardSecondButtonLink}>
                        <GlobalArrowButton
                          className="!bg-white !text-[#000] !w-auto !justify-start text-sm md:text-base !px-4 !py-3 md:!py-2"
                          arrowClassName="!bg-[var(--button-red)]"
                          arrowIconClassName="!text-white"
                          textClassName="!font-bold"
                        >
                          {leftCardSecondButtonText}
                        </GlobalArrowButton>
                      </Link>
                    ) : (
                      <GlobalArrowButton
                        className="!bg-white !text-[#000] !w-auto !justify-start text-sm md:text-base !px-4 !py-3 md:!py-2"
                        arrowClassName="!bg-[var(--button-red)]"
                        arrowIconClassName="!text-white"
                        textClassName="!font-bold"
                      >
                        {leftCardSecondButtonText}
                      </GlobalArrowButton>
                    )
                  )}
                </div>
              </div>

              {/* Right Card - Course Materials */}
              <div className="bg-[var(--button-red)] rounded-xl p-4 md:p-6 lg:p-8 flex flex-col justify-around min-h-[160px] md:min-h-[180px] lg:min-h-[200px]">
                <div>
                  <h3 className="text-white md:!text-[35px] text-[28px]">
                    {rightCardTitle}
                  </h3>
                  {rightCardDescription && (
                    <p className="text-white my-2 md:my-3">
                      {rightCardDescription}
                    </p>
                  )}
                </div>
                <div className="w-full flex flex-row gap-2 md:gap-3 flex-wrap">
                  {rightCardButtonLink ? (
                    <Link href={rightCardButtonLink}>
                      <GlobalArrowButton
                        className="!bg-white !text-[#000] !w-auto !justify-start text-sm md:text-base !px-4 !py-3 md:!py-2"
                        arrowClassName="!bg-[var(--dark-orange-red)]"
                        arrowIconClassName="!text-white"
                        textClassName="!font-bold"
                      >
                        {rightCardButtonText}
                      </GlobalArrowButton>
                    </Link>
                  ) : (
                    <GlobalArrowButton
                      className="!bg-white !text-[#000] !w-auto !justify-start text-sm md:text-base !px-4 !py-3 md:!py-2"
                      arrowClassName="!bg-[var(--dark-orange-red)]"
                      arrowIconClassName="!text-white"
                      textClassName="!font-bold"
                    >
                      {rightCardButtonText}
                    </GlobalArrowButton>
                  )}
                  {rightCardSecondButtonText && (
                    rightCardSecondButtonLink ? (
                      <Link href={rightCardSecondButtonLink}>
                        <GlobalArrowButton
                          className="!bg-white !text-[#000] !w-auto !justify-start text-sm md:text-base !px-4 !py-3 md:!py-2"
                          arrowClassName="!bg-[var(--dark-orange-red)]"
                          arrowIconClassName="!text-white"
                          textClassName="!font-bold"
                        >
                          {rightCardSecondButtonText}
                        </GlobalArrowButton>
                      </Link>
                    ) : (
                      <GlobalArrowButton
                        className="!bg-white !text-[#000] !w-auto !justify-start text-sm md:text-base !px-4 !py-3 md:!py-2"
                        arrowClassName="!bg-[var(--dark-orange-red)]"
                        arrowIconClassName="!text-white"
                        textClassName="!font-bold"
                      >
                        {rightCardSecondButtonText}
                      </GlobalArrowButton>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

