"use client";

import Image from "next/image";

export default function Organogram() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="relative w-full max-w-6xl">
            <Image
              src="https://cdn.kalingauniversity.ac.in/organogram/kalinga-org+(1).webp"
              alt="Kalinga University Organogram"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
