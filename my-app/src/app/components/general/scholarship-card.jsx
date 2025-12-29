import Image from "next/image";

export default function ScholarshipCard({ title, description, icon }) {
  return (
    <div className="bg-[var(--lite-sand)] rounded-xl p-5 pt-14 h-full min-h-[280px] flex flex-col relative overflow-visible">
      {/* Icon - Positioned outside top */}
      <div className="absolute -top-12 left-25 transform -translate-x-1/2 z-20">
        {icon || (
          <Image
            src="https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/book-logo.png"
            alt="Scholarship icon"
            width={180}
            height={180}
            className="object-contain"
          />
        )}
      </div>

      {/* Title */}
      <h3 className="mb-3 mt-15 !text-[22px] font-stix text-[var(--foreground)] leading-tight">{title}</h3>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300 mb-3"></div>

      {/* Description */}
      <p className="text-[var(--light-text-gray)] text-sm flex-grow">
        {description}
      </p>
    </div>
  );
}

