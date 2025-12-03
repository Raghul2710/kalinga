import Image from "next/image";

export default function LeadershipCard({ name, title, image, usePTagForName = false }) {
  const NameTag = usePTagForName ? 'p' : 'h3';
  return (
    <div className="bg-[var(--lite-sand)] rounded-xl p-4 h-full flex flex-col relative overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-[350px] mb-4 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Name */}
      <NameTag className="mb-2 !text-[20px] font-stix text-[var(--foreground)] font-semibold">
        {name}
      </NameTag>

      {/* Title */}
      <p className="text-[var(--light-text-gray)] text-sm mb-4">
        {title}
      </p>
    </div>
  );
}

