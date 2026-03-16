"use client";

import React from "react";
import FlipbookTrigger from "../general/FlipbookTrigger";

const SdgImageGrid = () => {
  const images = Array.from({ length: 17 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    const id = i + 1;
    let pdfUrl = "#";
    
    // PDF link for Goal 03
    if (id === 3) {
      pdfUrl = "https://cdn.kalingauniversity.ac.in/sdg-cell/pdf/SDG-3-Good-Health-and-Well-Being.pdf";
    }

    return {
      id,
      src: `https://cdn.kalingauniversity.ac.in/sdg-cell/sdg-logo/E-WEB-Goal-${num}.png`,
      alt: `SDG Goal ${num}`,
      pdfUrl
    };
  });

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl text-black mb-4">
            Sustainable Development Goals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">

          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center">
          {images.map((img) => {
            const content = (
              <a
                href={img.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 p-3 aspect-square flex items-center justify-center cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </a>
            );

            return img.pdfUrl !== "#" ? (
              <FlipbookTrigger key={img.id} pdfUrl={img.pdfUrl} title={img.alt}>
                {content}
              </FlipbookTrigger>
            ) : (
              <React.Fragment key={img.id}>
                {content}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SdgImageGrid;
