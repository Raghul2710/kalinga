import React from "react";
import ImageContent from "../ccrc/imagecontent";

function NewRaipur() {
  const objectives = [
    "To become a hub of manufacturing, information technology, and biotechnology sectors",
    "To become the financial centre of the region",
    "To become a centre of trade and businesses",
    "To support the local economy through cultural services",
    "To become a place for affordable and high-quality medical services",
    "To become a hub of National and International educational institutions",
    "To develop sustainable and eco-friendly infrastructure",
  ];

  const expandedContent = [
    <strong key="obj-title" className="block text-sm font-semibold">
      Objectives of New Raipur
    </strong>,
    ...objectives.map((item, index) => (
      <span key={index}>• {item}</span>
    )),
  ];


  return (
    <>
      <style jsx global>{`
        .imagecontent-wrapper .col-span-6.w-9\\/12 {
          width: 100% !important;
          max-width: 100% !important;
        }

        .imagecontent-wrapper img {
          height: 300px !important;
          object-fit: cover !important;
        }

        @media (max-width: 768px) {
          .imagecontent-wrapper img {
            height: 360px !important;
          }
        }
      `}</style>

      <div className="imagecontent-wrapper">
        <ImageContent
          imageSrc="https://cdn.kalingauniversity.ac.in/about-raipur/raipur1.webp"
          imageAlt="New Raipur image"
          subtitle=""
          title="About New Raipur"
          description="New Raipur is the first Greenfield Smart City in India, where 27% of the land is solely devoted to green and sustainable practices. It is also becoming a major hub of education and health in Central India. The Government is planning to make it a global destination for the IT and services industry to offer employment opportunities to youth. New Raipur is a well-planned smart city that supports a sustainable lifestyle and intelligent infrastructure. Due to growing opportunities and developments, it attracts students, entrepreneurs, and innovators who are ready to turn their ideas into innovation."
          readmore={true}
          buttonText="Know More"
          additionalContent={expandedContent}
        />
      </div>
    </>
  );
}

export default NewRaipur;
