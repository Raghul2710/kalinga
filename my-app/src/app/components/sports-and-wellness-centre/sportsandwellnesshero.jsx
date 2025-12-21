import React from "react";
import Image from "next/image";
import ImageListItem from "../ccrc/imagelistitem";

function SportsAndWellnessHero() {
  const boxItems = [
    {
      id: 1,
      title: "Expert Training & Professional Guidance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: (
        <Image
          src="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
          alt="Expert Training"
          width={40}
          height={40}
        />
      ),
    },
    {
      id: 2,
      title: "Avail Exclusive Sports Scholarship",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: (
        <Image
          src="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
          alt="Scholarship"
          width={40}
          height={40}
        />
      ),
    },
    {
      id: 3,
      title: "Develop a Winning Mindset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: (
        <Image
          src="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
          alt="Winning Mindset"
          width={40}
          height={40}
        />
      ),
    },
  ];

  return (
    <ImageListItem
      imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/kif/kif.webp"
      boxItems={boxItems}
      title="Turning Passionate Players Into Athletes"
      description=""
      className="bg-white"
      cardBackgroundColor="bg-[var(--button-red)]"
      cardTitleClassName="text-white"
      listItemTextClassName="text-white"
    />
  );
}

export default SportsAndWellnessHero;
