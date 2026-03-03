"use client";

import Facility from "../admissions/facility";

const miniMarketFacilities = [
  { id: 1, name: "ATM", image: "https://cdn.kalingauniversity.ac.in/mini-market/atm.webp" },
  { id: 2, name: "Salon", image: "https://cdn.kalingauniversity.ac.in/mini-market/salon.webp" },
  { id: 3, name: "Stationary", image: "https://cdn.kalingauniversity.ac.in/mini-market/stationary.webp" },
  { id: 4, name: "Snacks Shop", image: "https://cdn.kalingauniversity.ac.in/mini-market/snacks.webp" },
  { id: 5, name: "Juice Center", image: "https://cdn.kalingauniversity.ac.in/mini-market/juice.webp" },
  { id: 6, name: "Chemist Shop", image: "https://cdn.kalingauniversity.ac.in/mini-market/chemist_shop.webp" },
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

      {/* ✅ Make description FULL WIDTH */}
      <style jsx global>{`
        .mini-market-facility section p {
          max-width: 100% !important;
          width: 100% !important;
        }
      `}</style>
    </div>
  );
}
