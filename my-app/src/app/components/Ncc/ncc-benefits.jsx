"use client";

import ImageListItem from "../ccrc/imagelistitem";

export default function NccBenefits() {
  return (
    <div className="pt-20 pb-10 md:py-28">
      <ImageListItem
        className="!pt-6 !pb-2 md:!py-16"   // ✅ reduce section padding on mobile only
        imageSrc="https://cdn.kalingauniversity.ac.in/ncc/Ncc-3.webp"
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
