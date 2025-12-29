"use client";

import React from "react";
import Image from "next/image";
import ImageListItem from "../ccrc/imagelistitem";

function SportsAndWellnessHero() {
  const boxItems = [
    {
      id: 1,
      title: "Expert Training & Professional Guidance",
      description: "",
      icon: (
        <Image
          src="https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/experttraining.svg"
          alt="Expert Training"
          width={40}
          height={40}
          className="svg-ivory"
        />
      ),
    },
    {
      id: 2,
      title: "Avail Exclusive Sports Scholarship",
      description: "",
      icon: (
        <Image
          src="https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/sportscholarship.svg"
          alt="Scholarship"
          width={40}
          height={40}
          className="svg-ivory"
        />
      ),
    },
    {
      id: 3,
      title: "Develop a Winning Mindset",
      description: "",
      icon: (
        <Image
          src="https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/winningmindset.svg"
          alt="Winning Mindset"
          width={40}
          height={40}
          className="svg-ivory"
        />
      ),
    },
  ];

  return (
    <>
      <style jsx global>{`
        .sports-wellness-bg {
          background-color: #f3f4f6;
        }

        /* kill white bg coming from ImageListItem wrapper */
        .sports-imagelistitem .bg-white {
          background: transparent !important;
        }

        /* ✅ Responsive image sizing (NO huge height on mobile) */
        .sports-imagelistitem img.col-span-6.rounded-xl {
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important; /* let it scale naturally */
          object-fit: cover !important;

          /* Desktop-ish default height cap */
          max-height: 500px !important;
        }

        /* ✅ On small screens: keep image compact */
        @media (max-width: 640px) {
          .sports-imagelistitem img.col-span-6.rounded-xl {
            max-height: 260px !important; /* adjust if you want 220/280 */
            border-radius: 16px !important;
          }

          /* reduce section padding on mobile */
          .sports-wellness-bg {
            padding-top: 32px !important;
            padding-bottom: 32px !important;
          }

          /* reduce container side padding */
          .sports-imagelistitem {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }

        /* ✅ Smooth responsive height cap for tablets */
        @media (min-width: 641px) and (max-width: 1024px) {
          .sports-imagelistitem img.col-span-6.rounded-xl {
            max-height: 380px !important;
          }
        }

        .svg-ivory {
          filter: brightness(0) invert(1) sepia(8%) saturate(140%)
            hue-rotate(8deg);
        }
      `}</style>

      <section className="sports-wellness-bg py-16">
        <div className="sports-imagelistitem max-w-7xl mx-auto px-6">
          <ImageListItem
            imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/chess.webp"
            boxItems={boxItems}
            title="Turning Passionate Players Into Athletes"
            description=""
            textClassName="text-[var(--foreground)]"
            headingClassName="text-[var(--foreground)]"
            className="bg-transparent"
            cardBackgroundColor="bg-[var(--button-red)]"
            cardTitleClassName="text-white"
            listItemTextClassName="text-white"
          />
        </div>
      </section>
    </>
  );
}

export default SportsAndWellnessHero;
