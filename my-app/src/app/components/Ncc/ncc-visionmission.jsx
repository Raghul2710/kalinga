"use client";

import VisionMission from "../about/vision-mission";

const nccVision =
  "To build a strong foundation of leadership and discipline, and encourage them to take part in national service and become responsible individuals.";

const nccMission =
  "To provide physical training and basic military skills to youth and prepare them to take up challenging careers in the Indian Defence Forces and lead confidently.";

export default function NccVisionMission() {
  return (
    <div className="ncc-vm-wrap mt-6 mb-12 md:mt-12 md:mb-20">
      {/* ✅ MOBILE-ONLY overrides */}
      <style jsx>{`
        /* -------------------------------------- */
        /* ❌ Disable Read More (unchanged) */
        /* -------------------------------------- */
        .ncc-vm-wrap :global(.line-clamp-4) {
          -webkit-line-clamp: unset !important;
          display: block !important;
          overflow: visible !important;
        }

        .ncc-vm-wrap :global(button) {
          display: none !important;
        }

        /* -------------------------------------- */
        /* 📱 MOBILE ONLY: reduce Vision & Mission box padding */
        /* Original: py-16 = 80px */
        /* -------------------------------------- */
        @media (max-width: 767px) {
          .ncc-vm-wrap :global(.py-16) {
            padding-top: 32px !important;
            padding-bottom: 32px !important;
          }
        }
      `}</style>

      <VisionMission
        showImage={false}
        imageSrc=""
        imageAlt=""
        className={[
          "-mt-16 md:-mt-24",

          // layout alignment (UNCHANGED)
          "[&_.grid]:items-stretch",
          "[&_.grid]:gap-8",
          "[&_.grid>div]:h-full",
          "[&_.grid>div]:flex",
          "[&_.grid>div]:items-stretch",
          "[&_.grid>div>div]:h-full",
          "[&_.grid>div>div]:flex",
          "[&_.grid>div>div]:flex-col",
          "[&_.grid>div>div]:justify-center",
          "[&_.grid>div>div]:text-center",
        ].join(" ")}
        visionTitle="Vision"
        missionTitle="Mission"
        visionText={nccVision}
        missionText={nccMission}
      />
    </div>
  );
}
