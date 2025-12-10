import Image from "next/image";
import SectionHeading from "../general/SectionHeading";

const DEFAULT_IMAGE_SRC = "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/omprakash.png";
const QUOTE_IMAGE = "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/quote.png";
const DEFAULT_BADGES = [
  "Compassionate & Patient-Centered",
  "Trusted for Experience",
  "Leader in Robotic Surgery",
  "A Global Mentor & Educator"
];
const DEFAULT_BADGE_CLASSES = [
  "bg-[#FDE3A7]",
  "bg-[#FFF4C8]",
  "bg-[#FADCBE]",
  "bg-[#FCC8A2]",
];
const DEFAULT_HEADING = "Why Patients Trust Him";
const DEFAULT_DESCRIPTION = "Beyond surgical excellence, Dr. Arumugam. S is known for his compassionate approach, honest advice, and ability to make patients feel seen, heard, and truly cared for.";
const DEFAULT_READ_MORE_LINK = "/about";
const DEFAULT_READ_MORE_TEXT = "Read More";

export default function MentorIntro({
  cardClassName = "",
  imageSrc = DEFAULT_IMAGE_SRC,
  badges = DEFAULT_BADGES,
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  readMoreLink = DEFAULT_READ_MORE_LINK,
  readMoreText = DEFAULT_READ_MORE_TEXT,
  badgeClasses = DEFAULT_BADGE_CLASSES,
}) {
  return (
    <section className="py-16 bg-white pt-30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-5 lg:gap-0">
          {/* Left Image - Overlapping the card */}
          <div className="lg:col-span-4 z-20 h-full">
            <div className="relative z-20 bg-[var(--lite-sand)] rounded-2xl p-2 w-full ">
              <Image
                src={imageSrc}
                alt="faculty image"
                width={500}
                height={500}
                className="w-full h-[320px] md:h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="lg:col-span-8 flex flex-col gap-6 relative lg:left-[-25px] lg:pt-20 lg:pt-0 z-10">
            {/* Header Information */}
            <div className="md:pl-12 pl-0">
              <SectionHeading title="Mr. Omprakash Dewangan" subtitle="Head of department" titleClassName="!py-2" />
             
              <p className="text-gray-700 text-xl">
                Faculty of Information Technology
              </p>
            </div> 

            {/* Quote Box */}
            <div className="bg-[var(--dark-blue)] rounded-xl p-14 relative overflow-hidden pl-12 z-10">
              {/* Opening Quote Mark */}
              <div className="absolute top-10 left-12">
              <div className="flex gap-1">
                                                    
<svg width="26" height="41" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.2832 40.0727C19.6607 40.0727 20.7877 38.9457 20.7877 37.5682C20.7877 36.6916 20.412 35.9402 19.6607 35.5645C19.5355 35.4393 19.5355 35.4393 19.4102 35.3141C13.1489 31.1816 12.7732 26.2977 13.9002 22.5409H22.5409C23.9184 22.5409 25.0455 21.4139 25.0455 20.0364V2.50455C25.0455 1.12705 23.9184 0 22.5409 0H2.50455C1.12705 0 0 1.12705 0 2.50455V24.795C0 27.9257 1.00182 31.0564 2.88023 33.5609C5.13432 36.5663 9.6425 39.9475 18.2832 40.0727Z" fill="white"/>
</svg>

                                                    
<svg width="26" height="41" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.2832 40.0727C19.6607 40.0727 20.7877 38.9457 20.7877 37.5682C20.7877 36.6916 20.412 35.9402 19.6607 35.5645C19.5355 35.4393 19.5355 35.4393 19.4102 35.3141C13.1489 31.1816 12.7732 26.2977 13.9002 22.5409H22.5409C23.9184 22.5409 25.0455 21.4139 25.0455 20.0364V2.50455C25.0455 1.12705 23.9184 0 22.5409 0H2.50455C1.12705 0 0 1.12705 0 2.50455V24.795C0 27.9257 1.00182 31.0564 2.88023 33.5609C5.13432 36.5663 9.6425 39.9475 18.2832 40.0727Z" fill="white"/>
</svg>

                                                </div>
              </div>

              {/* Quote Text */}
              <p className="text-white text-base leading-relaxed pt-10 pb-12 relative z-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidi
              </p>

              {/* Closing Quote Mark */}
              <div className="flex items-end justify-end relative z-10">
                <div className="absolute bottom-0">
             
              <div className="flex justify-end gap-1 mt-4 sm:mt-0">
                                              
<svg width="26" height="41" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.76369 40.0727C5.26097 39.9475 4.25915 38.57 4.5096 37.1925C4.63483 36.4411 5.01051 35.815 5.63665 35.3141C11.898 31.1816 12.2737 26.2977 11.1466 22.5409H2.50597C1.12847 22.5409 0.00142097 21.4139 0.00142097 20.0364V2.50454C0.00142097 1.12705 1.12847 0 2.50597 0H22.5423C23.9198 0 25.0469 1.12705 25.0469 2.50454V24.795C25.0469 27.9257 24.0451 31.0564 22.1666 33.5609C19.9126 36.5664 15.4044 39.9475 6.76369 40.0727Z" fill="white"/>
</svg>


<svg width="26" height="41" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.76369 40.0727C5.26097 39.9475 4.25915 38.57 4.5096 37.1925C4.63483 36.4411 5.01051 35.815 5.63665 35.3141C11.898 31.1816 12.2737 26.2977 11.1466 22.5409H2.50597C1.12847 22.5409 0.00142097 21.4139 0.00142097 20.0364V2.50454C0.00142097 1.12705 1.12847 0 2.50597 0H22.5423C23.9198 0 25.0469 1.12705 25.0469 2.50454V24.795C25.0469 27.9257 24.0451 31.0564 22.1666 33.5609C19.9126 36.5664 15.4044 39.9475 6.76369 40.0727Z" fill="white"/>
</svg>

                                            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
