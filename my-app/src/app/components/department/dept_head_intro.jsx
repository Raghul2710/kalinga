const DEFAULT_IMAGE_SRC = "https://dr-arumugam.s3.ap-south-1.amazonaws.com/dr-img-new.jpg";
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-5 lg:gap-0 relative">
          {/* Left Image - Overlapping the card */}
          <div className="lg:col-span-4">
            <div className="relative z-20 -mt-20">
              <img
                src={imageSrc}
                alt="Dr. Arumugam. S"
                className="w-full h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="lg:col-span-8 flex flex-col gap-6 relative lg:left-[-25px] pt-20 lg:pt-0">
            {/* Header Information */}
            <div>
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
            <div className="bg-[var(--dark-blue)] rounded-lg p-8 relative overflow-hidden">
              {/* Opening Quote Mark */}
              <div className="absolute top-4 left-4">
                <span className="text-white text-8xl font-serif opacity-50 leading-none">
                  "
                </span>
              </div>

              {/* Quote Text */}
              <p className="text-white text-base leading-relaxed pt-8 pb-12 relative z-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidi
              </p>

              {/* Closing Quote Mark and J Icon */}
              <div className="flex items-end justify-between relative z-10">
                <div className="absolute bottom-0 right-4">
                  <span className="text-white text-8xl font-serif opacity-50 leading-none">
                    "
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
