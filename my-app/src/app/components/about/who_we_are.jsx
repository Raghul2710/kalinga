'use client'
import Image from "next/image";

const stats = [
  { number: "8,000+", label: "Students Enrolled" },
  { number: "600+", label: "International Students from 29+ Countries" },
  { number: "3 Cr+", label: "Scholarships Distributed" },
  { number: "130+", label: "Programs Offered" },
  { number: "400+", label: "Recruitment Partners" },
  { number: "3360+", label: "Research Publications" },
  { number: "510+", label: "Patents Filed" },
  { number: "160+", label: "Sponsored Research Projects" },
  { number: "130+", label: "Consultancy Projects" },
  { number: "200+", label: "MoUs Signed" },
  { number: "7", label: "Centres of Excellence" },
  { number: "90+", label: "Advanced Laboratories" },
];

export default function WhoWeAre() {
  return (
    <section className="relative px-2">
      {/* Top Section - Image with Overlay */}
      <div className="relative w-full rounded-2xl overflow-visible h-[450px] sm:h-[500px] md:h-[550px] lg:h-[700px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/who-we-are.webp"
            alt="Who We Are"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
        {/* Text Overlay */}
        <div className="relative container mx-auto px-2 h-full flex items-center sm:items-center justify-center">
          <div className="text-center max-w-5xl pt-12 sm:pt-16 md:pt-24 lg:pt-[200px] pb-20 sm:pb-24 md:pb-16">
            <h2
              className="font-stix text-white text-[40px] sm:text-[50px] md:text-[70px] lg:!text-[100px] mb-4 sm:mb-6 md:mb-8 font-bold"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1.57px rgb(255, 255, 255)',
                fontFamily: '"STIX Two Math", serif',
                fontWeight: 400,
                fontStyle: 'normal',
                transform: 'scale(1)',
                transformOrigin: 'center center',
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
              }}
            >
              Who We Are
            </h2>
            <div className="space-y-3 sm:space-y-4 text-white/90 px-2 sm:px-0">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Kalinga University, Raipur, stands as one of Central India’s most distinguished centers for higher learning. With a legacy built on academic excellence, innovation, and inclusivity, we empower students to transform their potential into impactful careers.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Section - Statistics Marquee */}
      <div className="relative pb-12 lg:pb-16 mt-[-80px] sm:mt-[-100px] md:mt-[-120px] lg:mt-[-140px]">
        <div className="">
          <div className="overflow-hidden rounded-xl">
            <div className="flex flex-nowrap gap-6 py-4 animate-marquee">
              {[...stats, ...stats].map((stat, index) => (
                <div
                  key={`${stat.label}-${index}`}
                  className="bg-[var(--light-gray)] rounded-xl p-6 lg:p-8 shadow-lg w-[240px] sm:w-[260px] flex-shrink-0 flex flex-col items-center justify-center text-left"
                >
                  <div className="flex flex-col gap-2 w-full">
                    <h2 className="text-[var(--button-red)] !font-stix mb-2 break-words text-left">
                      {stat.number}
                    </h2>
                    <h3 className="text-[var(--foreground)] !text-[18px] !leading-relaxed !font-stix mb-3 break-words text-left">
                      {stat.label}
                    </h3>
                  </div>
                  {stat.description && (
                    <p className="text-[var(--light-text-gray)] text-sm leading-relaxed break-words text-left">
                      {stat.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          width: max-content;
          animation: marquee 120s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

