import Image from "next/image";
import SectionHeading from "../general/SectionHeading";

export default function AppreciationLetterLayout({
  imageSrc = "https://cdn.kalingauniversity.ac.in/international-students/appreciation-letter.png",
  imageAlt = "Appreciation Letter",
  subtitle = "",
  title = "Appreciation Letter",
  description = "International students at Kalinga University are supported at each step of their academic journey. This appreciation letter from our African students reflects the mentorship, inclusive environment, and opportunities provided to them by our University. We create a learning environment where students from every corner of the world feel welcomed and empowered to succeed in their lives.",
  subtitleClassName = "",
  titleClassName = "!text-white",
  subtitleTextColor = "text-[var(--dark-orange-red)]",
}) {
  return (
    <section className="container mx-auto py-16 mx-2">
      <div className="bg-[var(--dark-blue)] text-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-8 py-16 px-6 md:px-8">
          {/* Left side - Text content */}
          <div className="flex flex-col gap-4 md:w-4/5">
            <SectionHeading
              subtitle={subtitle}
              title={title}
              subtitleClassName={subtitleClassName}
              titleClassName={titleClassName}
              subtitleTextColor={subtitleTextColor}
            />
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right side - Image */}
          <div className="relative w-full md:w-2/5 h-[500px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain rounded-2xl"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

