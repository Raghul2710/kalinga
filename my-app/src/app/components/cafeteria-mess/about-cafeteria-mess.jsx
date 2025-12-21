"use client";

import ImageContent from "../ccrc/imagecontent";

export default function AboutCafeteria() {
  return (
    <ImageContent
      imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/canteen-and-mess/canteen+mess+(1).webp" // Add Video - 1 (placeholder for now)
      imageAlt="Cafeteria and Mess at Kalinga University"
      title="Cafeteria & Mess"
      subtitle="Cravings? We’ve Got You Covered!"
      description="A healthy and balanced diet is an essential part of every student’s life, especially those staying away from home, either in hostels or PGs. In partnership with Sodexo, our University has a well-established mess facility, canteen, and cafeterias, where students can enjoy their meals together and make new connections."
      buttonText="Read More"
      additionalContent={[
        "Hygiene is our main concern, and we never compromise on it. Our food services ensure that students stay healthy, happy, and parents remain completely carefree."
      ]}
      hasImage={true}
      readmore={true}
    />
  );
}
