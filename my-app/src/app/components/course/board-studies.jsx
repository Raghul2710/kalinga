import Image from "next/image";
import GlobalArrowButton from "../general/global-arrow_button";

export default function BoardStudies() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://kalinga-university.s3.ap-south-1.amazonaws.com/course/board-group.webp"
          alt="Board of Studies"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Red Semi-Transparent Overlay */}
      <div className="absolute inset-0 bg-[var(--button-red)] opacity-0 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          {/* Left Side - Text Content */}
          <div className="flex flex-col gap-6 text-white py-20 px-5">
            <h2 className="text-white font-stix text-4xl md:text-5xl lg:text-6xl font-bold">
              Board of Studies
            </h2>
            <p className="text-white text-base md:text-lg leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </p>
            <div className="mt-4">
              <GlobalArrowButton
                className="!bg-white"
                arrowClassName="!bg-[var(--button-red)]"
                arrowIconClassName="!text-white"
                textClassName="!text-[var(--button-red)]"
              >
                Explore Now
              </GlobalArrowButton>
            </div>
          </div>

          {/* Right Side - Globe Image */}
          <div className="flex items-center justify-center relative">
            <div className="relative w-full h-full">
              <Image
                src="https://kalinga-university.s3.ap-south-1.amazonaws.com/course/globe.png"
                alt="World Map"
                width={600}
                height={600}
                className="object-contain w-full h-full opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

