"use client";

import GlobalArrowButton from "../general/global-arrow_button";

const SdgImageGrid = () => {
  const images = Array.from({ length: 17 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    const id = i + 1;
    let pdfUrl = "";

    // PDF links
    if (id === 3) {
      pdfUrl = "https://cdn.kalingauniversity.ac.in/sdg-cell/pdf/SDG-3-Good-Health-and-Well-Being.pdf";
    } else if (id === 6) {
      pdfUrl = "https://cdn.kalingauniversity.ac.in/sdg-cell/pdf/SDG-6-Water-Conservation.pdf";
    } else if (id === 7) {
      pdfUrl = "https://cdn.kalingauniversity.ac.in/sdg-cell/pdf/SDG-7-Energy-Conservation.pdf";
    } else if (id === 12) {
      pdfUrl = "https://cdn.kalingauniversity.ac.in/sdg-cell/pdf/SDG-12-Waste-Management.pdf";
    } else if (id === 15) {
      pdfUrl = "https://cdn.kalingauniversity.ac.in/sdg-cell/pdf/SDG-15-Sustainable-initiatives-For-Green-Campus.pdf";
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
          {images.map((img) => (
            <div
              key={img.id}
              className="group relative block rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 p-3 aspect-square flex items-center justify-center bg-white shadow-sm hover:shadow-md"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover Overlay with Button */}
              {img.pdfUrl && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <GlobalArrowButton
                    as="a"
                    href={img.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!py-2 !px-4 !rounded-full scale-90 group-hover:scale-100 transition-transform duration-300 shadow-xl"
                  >
                    View Report
                  </GlobalArrowButton>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SdgImageGrid;
