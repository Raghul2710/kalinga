"use client";

import ImageListItem from "../ccrc/imagelistitem";

export default function NccBenefits() {
  return (
    <div className="py-20 md:py-28">
      <ImageListItem
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
        imageAlt="NCC Benefits"
        imageWidth={500}
        imageHeight={240}
        title="Benefits of Joining KU’s NCC Team"
        subtitle=""
        description={null}
        items={[
          { text: "Learn to lead with responsibility" },
          { text: "Become confident and fearless" },
          { text: "Participate in National-level camps" },
          { text: "Physical training will keep you fit and energetic" },
          { text: "Become punctual and disciplined" },
          { text: "Contribute towards a national cause" },
          { text: "Stand out in job interviews" },
        ]}
      />
    </div>
  );
}
