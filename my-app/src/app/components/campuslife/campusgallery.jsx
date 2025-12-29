"use client";

import Image from "next/image";
import SectionHeading from "../general/SectionHeading";

const defaultImages = [
  { id: 1, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Infrastructure1.webp", alt: "Gallery Image 1" },
  { id: 2, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/gallery2.webp", alt: "Gallery Image 2" },
  { id: 3, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/gallery3.webp", alt: "Gallery Image 3" },
  { id: 4, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Infrastructure2.webp", alt: "Gallery Image 4" },
  { id: 5, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/gallery4.webp", alt: "Gallery Image 5" },
  { id: 6, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/student-dance.webp", alt: "Gallery Image 6" },
  { id: 7, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/gallery1.webp", alt: "Gallery Image 7" },
  { id: 9, src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/student-grppic.webp", alt: "Gallery Image 9" },
];

export default function Gallery({ 
  title = "Collage of life @KU",
  images = defaultImages,
  description = null
}) {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];
 
  return (
    <section className="w-full px-2 py-16 overflow-hidden">
      <div className="">
        <div className="text-center mb-12">
          <SectionHeading 
            title={title}
            titleClassName="text-[var(--foreground)]"
          />
          {description && (
            <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed max-w-6xl mx-auto">
              {description}
            </p>
          )}
        </div>

      <div className="relative overflow-hidden">
        <div className="flex animate-marquee gap-4">
          {duplicatedImages.map((img, index) => (
            <div
              key={`${img.id}-${index}`}
              className="relative h-[320px] sm:h-[330px] w-[300px] sm:w-[350px] flex-shrink-0 rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="w-full h-full relative">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-[var(--foreground)]/0 group-hover:bg-[var(--foreground)]/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
