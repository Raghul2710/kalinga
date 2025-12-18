"use client";

import VisionMission from "../about/vision-mission";

const nccVision =
  "To build a strong foundation of leadership and discipline, and encourage them to take part in national service and become responsible individuals.";

const nccMission =
  "To provide physical training and basic military skills to youth and prepare them to take up challenging careers in the Indian Defence Forces and lead confidently.";

export default function NccVisionMission({
  className = "",
  imageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  imageAlt = "NCC Vision and Mission",
  showImage = true,
}) {
  return (
    <VisionMission
      className={className}
      visionTitle="Vision"
      missionTitle="Mission"
      visionText={nccVision}
      missionText={nccMission}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      showImage={showImage}
    />
  );
}
