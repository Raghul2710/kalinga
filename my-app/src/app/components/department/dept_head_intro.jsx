import Image from "next/image";

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
    <section className="py-20 bg-white pt-30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-5 lg:gap-0">
          {/* Left Image - Overlapping the card */}
          <div className="lg:col-span-4 z-20">
            <div className="relative z-20 bg-[var(--lite-sand)] rounded-2xl p-2 w-full top-[-80px]">
              <Image
                src={imageSrc}
                alt="Mr. Omprakash Dewangan"
                width={500}
                height={500}
                className="w-full h-[320px] md:h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="lg:col-span-8 flex flex-col gap-6 relative lg:left-[-25px] lg:pt-20 lg:pt-0 z-10">
            {/* Header Information */}
            <div className="pl-12">
              <p className="text-[var(--button-red)] text-sm font-semibold mb-2">
                Head of department
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 font-stix">
                Mr. Omprakash Dewangan
              </h2>
              <p className="text-gray-700 text-base">
                Faculty of Information Technology
              </p>
            </div>

            {/* Quote Box */}
            <div className="bg-[var(--dark-blue)] rounded-xl p-14 relative overflow-hidden pl-12 z-10">
              {/* Opening Quote Mark */}
              <div className="absolute top-10 left-12">
                <Image
                  src={QUOTE_IMAGE}
                  alt="Opening quote"
                  width={60}
                  height={60}
                  className="w-[40px] object-contain"
                />
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
                  <Image
                    src={QUOTE_IMAGE}
                    alt="Closing quote"
                    width={60}
                    height={60}
                    className="rotate-180 w-[40px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
