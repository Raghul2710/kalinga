"use client";

import Facility from "../admissions/facility";

const miniMarketFacilities = [
  { id: 1, name: "ATM", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png" },
  { id: 2, name: "Salon", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png" },
  { id: 3, name: "Stationery", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png" },
  { id: 4, name: "Snacks Shop", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png" },
  { id: 5, name: "Juice Center", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png" },
  { id: 6, name: "Chemist Shop", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png" },
];

export default function MiniMarketFacility() {
  return (
    <div className="mini-market-facility">
      <Facility
        title="Mini Market"
        subtitle=""
        description="The mini market at Kalinga University is established to fulfil the basic requirements of our students, guests, and faculty members. It saves the time of our students and hostellers as they don’t have to go outside the campus whenever they need any essentials. The mini mart at our campus consists of an ATM facility, a salon, stationery, a snacks shop, a juice centre, and a chemist shop. So, focus on your studies and enjoy a comfortable life at our campus."
        titleClassName="text-center"
        subtitleClassName="text-center !text-[var(--button-red)]"
        facilities={miniMarketFacilities}
      />

      {/* ✅ Scoped override for Facility's description width */}
      <style jsx global>{`
        .mini-market-facility p.text-center.text-gray-600.max-w-3xl {
          max-width: 80rem; /* same as Tailwind max-w-7xl */
        }
      `}</style>
    </div>
  );
}
