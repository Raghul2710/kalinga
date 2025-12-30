import React from "react";
import ImageContent from "../ccrc/imagecontent";

function NewRaipur() {
  return (
    <>
      {/* 🔧 IMAGE SIZE OVERRIDES */}
      <style jsx global>{`
        /* Target ImageContent image container ONLY */
        .imagecontent-wrapper .col-span-6.w-9\\/12 {
          width: 100% !important;        /* Increase width on mobile */
          max-width: 100% !important;
        }

        // .imagecontent-wrapper .md\\:col-span-4.md\\:w-4\\/5 {
        //   width: 100% !important;        /* Increase width on desktop */
        // }

        /* Increase image height */
        .imagecontent-wrapper img {
          height: 300px !important;      /* desktop height */
          object-fit: cover !important;
        }

        @media (max-width: 768px) {
          .imagecontent-wrapper img {
            height: 360px !important;    /* mobile height */
          }
        }
      `}</style>

      <div className="imagecontent-wrapper">
        <ImageContent
          imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/MBA.webp"
          imageAlt="New Raipur image"
          subtitle=""
          title="About New Raipur"
          description="New Raipur is the first Greenfield Smart City in India, where 27% of the land is solely devoted to green and sustainable practices. It is also becoming a major hub of education and health in Central India. The Government is planning to make it a global destination for the IT and services industry to offer employment opportunities to youth. New Raipur is a well-planned smart city that supports a sustainable lifestyle and intelligent infrastructure. Due to growing opportunities and developments, it attracts students, entrepreneurs, and innovators who are ready to turn their ideas into innovation."
          buttonText=""
          readmore={false}
        />
      </div>
    </>
  );
}

export default NewRaipur;
