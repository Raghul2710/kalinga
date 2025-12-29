"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../general/tab";
import DataTable from "../general/data-table";

/**
 * ✅ CTCD-style responsive layout:
 * - Desktop (md+): Tabs
 * - Mobile (<md): Accordion
 * - Same scrollbar-hide CSS
 * - Uses DataTable for outdoor tables
 * - Keeps ALL your existing data (no removal)
 */

export default function SportsFacilitiesTabs({
  // Indoor (single images)
  caromImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/carrom-game-pieces.webp",
  chessImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/chess+(1).webp",
  tableTennisImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/table_tennis.webp",
  snookerImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/snooker.webp",

  // Outdoor (single images)
  cricketImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  footballImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  badmintonImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/badminton.webp",
  basketballImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/basektballevent.webp",
  volleyballImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  kabaddiImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/kabaddi+(1).webp",
  khoKhoImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  hockeyImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  handballImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/sports/handball.webp",
  lawnTennisImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  shotPutImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  discusThrowImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  javelinThrowImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  hammerThrowImageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",

  // Multiple images
  gymImages = [],
  yogaImages = [],
}) {
  const tabs = useMemo(
    () => [
      { id: "indoor", label: "Indoor Games" },
      { id: "outdoor", label: "Outdoor Games" },
      { id: "gym", label: "Gymnasium" },
      { id: "yoga", label: "Yoga Room" },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState("indoor");

  const toggleAccordion = (id) => {
    setActiveTab((prev) => (prev === id ? "" : id));
  };

  const renderTabContent = (tabId) => {
    if (tabId === "indoor") {
      return (
        <IndoorGames
          caromImageSrc={caromImageSrc}
          chessImageSrc={chessImageSrc}
          tableTennisImageSrc={tableTennisImageSrc}
          snookerImageSrc={snookerImageSrc}
        />
      );
    }

    if (tabId === "outdoor") {
      return (
        <OutdoorGames
          cricketImageSrc={cricketImageSrc}
          footballImageSrc={footballImageSrc}
          badmintonImageSrc={badmintonImageSrc}
          basketballImageSrc={basketballImageSrc}
          volleyballImageSrc={volleyballImageSrc}
          kabaddiImageSrc={kabaddiImageSrc}
          khoKhoImageSrc={khoKhoImageSrc}
          hockeyImageSrc={hockeyImageSrc}
          handballImageSrc={handballImageSrc}
          lawnTennisImageSrc={lawnTennisImageSrc}
          shotPutImageSrc={shotPutImageSrc}
          discusThrowImageSrc={discusThrowImageSrc}
          javelinThrowImageSrc={javelinThrowImageSrc}
          hammerThrowImageSrc={hammerThrowImageSrc}
        />
      );
    }

    if (tabId === "gym") return <Gymnasium gymImages={gymImages} />;
    if (tabId === "yoga") return <YogaRoom yogaImages={yogaImages} />;

    return null;
  };

  return (
    <section className="py-10 md:py-14">
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* ✅ Centered dark-blue card like CTCD */}
      <div className="mx-auto max-w-6xl rounded-3xl bg-[var(--dark-blue)] p-4 md:p-6">
        {/* ---------------- DESKTOP TABS (md+) ---------------- */}
        <div className="hidden md:block">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="!flex !gap-4 md:!gap-5 !bg-transparent !rounded-none !p-0 !overflow-x-auto !overflow-y-visible scrollbar-hide !px-2 md:!px-0 !pb-2 md:!pb-0">
              <TabsTrigger
                value="indoor"
                className="flex-shrink-0 min-w-[160px] md:min-w-[170px] md:flex-1 break-words whitespace-nowrap"
              >
                Indoor Games
              </TabsTrigger>

              <TabsTrigger
                value="outdoor"
                className="flex-shrink-0 min-w-[170px] md:min-w-[180px] md:flex-1 break-words whitespace-nowrap"
              >
                Outdoor Games
              </TabsTrigger>

              <TabsTrigger
                value="gym"
                className="flex-shrink-0 min-w-[160px] md:min-w-[170px] md:flex-1 break-words whitespace-nowrap"
              >
                Gymnasium
              </TabsTrigger>

              <TabsTrigger
                value="yoga"
                className="flex-shrink-0 min-w-[160px] md:min-w-[170px] md:flex-1 break-words whitespace-nowrap"
              >
                Yoga Room
              </TabsTrigger>
            </TabsList>

            {/* White inner panel */}
            <div className="mt-[16px] rounded-[18px] bg-white px-3 py-[22px] md:px-[36px] md:py-[28px]">
              <TabsContent value="indoor">{renderTabContent("indoor")}</TabsContent>
              <TabsContent value="outdoor">{renderTabContent("outdoor")}</TabsContent>
              <TabsContent value="gym">{renderTabContent("gym")}</TabsContent>
              <TabsContent value="yoga">{renderTabContent("yoga")}</TabsContent>
            </div>
          </Tabs>
        </div>

        {/* ---------------- MOBILE ACCORDION (<md) ---------------- */}
        <div className="md:hidden mt-2">
          <div className="rounded-[18px] bg-white px-3 py-[14px]">
            <div className="space-y-3">
              {tabs.map((t) => {
                const isOpen = t.id === activeTab;
                return (
                  <div
                    key={t.id}
                    className="rounded-xl border border-black/10 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(t.id)}
                      className={[
                        "w-full flex items-center justify-between px-4 py-3 text-left transition-colors",
                        isOpen ? "bg-black/5" : "bg-white",
                      ].join(" ")}
                    >
                      <span className="font-plus-jakarta-sans font-semibold text-[var(--foreground)]">
                        {t.label}
                      </span>

                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        className={[
                          "transition-transform",
                          isOpen ? "rotate-180" : "rotate-0",
                        ].join(" ")}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {isOpen && (
                      <div className="px-4 py-6">{renderTabContent(t.id)}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- SECTIONS -------------------- */

function IndoorGames({ caromImageSrc, chessImageSrc, tableTennisImageSrc, snookerImageSrc }) {
  const indoorGames = [
    { name: "Carom", sub: "(12 Carom Board Sets)", image: caromImageSrc },
    { name: "Chess", sub: "(12 Chess Board Sets)", image: chessImageSrc },
    { name: "Table Tennis", sub: "(24 Bats, 12 Boxes of Balls, 6 Net Sets)", image: tableTennisImageSrc },
    { name: "Snooker", sub: "(2 Pool Tables, 6 Sets of Balls, 20 Pool Sticks)", image: snookerImageSrc },
  ];

  return (
    <div>
      <h2 className="font-stix text-3xl md:text-4xl text-[var(--foreground)]">Indoor Games</h2>

      <p className="mt-3 text-[var(--light-text-gray)] leading-relaxed">
        It is a great hangout place for students and a hub for recreational activities. The 1500 sqft. Hall provides opportunities for leisure activities where students can connect and play friendly matches.
      </p>

      <h5 className="mt-6 font-plus-jakarta-sans font-semibold text-[var(--foreground)]">
        Indoor Games At KU
      </h5>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {indoorGames.map((g, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl border border-black/10 bg-black/5">
            <div className="relative w-full aspect-[4/3]">
              {g.image ? (
                <Image src={g.image} alt={g.name} fill className="object-cover" sizes="(min-width: 1024px) 220px, 50vw" />
              ) : (
                <div className="absolute inset-0" />
              )}
            </div>

            <div className="px-3 py-2">
              <p className="font-plus-jakarta-sans font-medium text-[var(--foreground)]">{g.name}</p>
              <p className="text-xs text-[var(--light-text-gray)]">{g.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OutdoorGames({
  cricketImageSrc,
  footballImageSrc,
  badmintonImageSrc,
  basketballImageSrc,
  volleyballImageSrc,
  kabaddiImageSrc,
  khoKhoImageSrc,
  hockeyImageSrc,
  handballImageSrc,
  lawnTennisImageSrc,
  shotPutImageSrc,
  discusThrowImageSrc,
  javelinThrowImageSrc,
  hammerThrowImageSrc,
}) {
  const outdoorGames = [
    { name: "Cricket", image: cricketImageSrc },
    { name: "Football", image: footballImageSrc },
    { name: "Badminton", image: badmintonImageSrc },
    { name: "Basketball", image: basketballImageSrc },
    { name: "Volleyball", image: volleyballImageSrc },
    { name: "Kabaddi", image: kabaddiImageSrc },
    { name: "Kho-Kho", image: khoKhoImageSrc },
    { name: "Hockey", image: hockeyImageSrc },
    { name: "Handball", image: handballImageSrc },
    { name: "Lawn Tennis", image: lawnTennisImageSrc },
    { name: "Shot Put", image: shotPutImageSrc },
    { name: "Discus Throw", image: discusThrowImageSrc },
    { name: "Javelin Throw", image: javelinThrowImageSrc },
    { name: "Hammer Throw", image: hammerThrowImageSrc },
  ];

  // ✅ SAME DATA (not removed)
  const facilitiesRows = [
    { sno: "01", game: "Cricket Ground Turf Wicket", material: "Cricket Kit 12, Bat 25, Ball 30, Wickets 30, Cricket mat 1, T Shirt, Marking Cone 80, Flag 90, Cap" },
    { sno: "02", game: "Football Ground", material: "Football 30, Football Net 4 Set, T Shirt, Air Pump 2, Pole 1 Set, Whistle, Cap" },
    { sno: "03", game: "Badminton Court", material: "Racket 12, Shuttle Cock 10 Box, Badminton Net 4 Set, T Shirt, Pole 4 Set, Cap" },
    { sno: "04", game: "Basketball Ground", material: "Basketball 20, Basketball Net 20 Set, T Shirt, Pole 2 Set, Whistle, Cap" },
    { sno: "05", game: "Volleyball Ground", material: "Volleyball 20, Volleyball Net 10, Antenna 4, T Shirt, Volleyball Pole 2 Set, Whistle, Cap" },
    { sno: "06", game: "Kabaddi Ground", material: "Kabaddi Mat, T Shirt, Marking Tape, T Shirt, Whistle, Cap" },
    { sno: "07", game: "Kho-Kho Ground", material: "T Shirt, Marking Tape, Whistle, Cap" },
    { sno: "08", game: "Hockey Ground", material: "Hockey Steak 24, Hockey Ball 24, Pole 1 Set, T Shirt, Cap" },
    { sno: "09", game: "Handball Ground", material: "Ball 10, Pole 2 Set, T Shirt, Cap" },
    { sno: "10", game: "Lawn Tennis", material: "Racket 6 Set, Ball 40, Pole 1 Set, Net 2, T Shirt, Cap" },
    { sno: "11", game: "Shot put Throw", material: "12 pieces" },
    { sno: "12", game: "Discuss Throw", material: "12 pieces" },
    { sno: "13", game: "Javelin Throw", material: "12 pieces" },
    { sno: "14", game: "Hammer Throw", material: "12 pieces" },
    { sno: "15", game: "Running Events", material: "Athletic Track of 200 metres" },
  ];

  const groundRows = [
    { sno: "01", facility: "Basketball Court", total: "Two", area: "9400 Sqft." },
    { sno: "02", facility: "Volleyball Court", total: "One", area: "1740 Sqft." },
    { sno: "03", facility: "Lawn Tennis Court", total: "One", area: "2106 Sqft." },
    { sno: "04", facility: "Badminton Court", total: "One", area: "880 Sqft." },
    { sno: "05", facility: "Kabaddi Ground", total: "One", area: "1657 Sqft." },
    { sno: "06", facility: "Kho Kho Ground", total: "One", area: "6972 Sqft." },
    { sno: "07", facility: "Handball Ground", total: "One", area: "8646 Sqft." },
    { sno: "08", facility: "Football Ground", total: "One", area: "76900 Sqft." },
    { sno: "09", facility: "Cricket Ground", total: "One", area: "450 Feet" },
    { sno: "10", facility: "Hockey Ground", total: "One", area: "54090 Sqft." },
    { sno: "11", facility: "Athletics Track 400 Mtr.", total: "One", area: "400 Mtr." },
  ];

  const facilitiesColumns = [
    { key: "sno", label: "S.No.", widthPx: 90 },
    { key: "game", label: "Outdoor Games", widthPx: 280 },
    { key: "material", label: "Material", widthPx: 520 },
  ];

  const groundsColumns = [
    { key: "sno", label: "S.No.", widthPx: 90 },
    { key: "facility", label: "Facilities", widthPx: 340 },
    { key: "total", label: "Total", widthPx: 160 },
    { key: "area", label: "Area", widthPx: 200 },
  ];

  return (
    <div>
      <h2 className="font-stix text-3xl md:text-4xl text-[var(--foreground)]">Outdoor Games</h2>

      <p className="mt-3 text-[var(--light-text-gray)] leading-relaxed">
        We have a world-class outdoor sports facility on our campus that is designed to provide an exceptional sports experience for all our students. With different grounds and courts, we give them complete facilities and support so that they can represent our university at the National and International level competitions.
      </p>

      <h5 className="mt-7 font-plus-jakarta-sans font-semibold text-[var(--foreground)]">
        Outdoor Games At KU
      </h5>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {outdoorGames.map((g, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl border border-black/10 bg-black/5">
            <div className="relative w-full aspect-[4/3]">
              {g.image ? (
                <Image src={g.image} alt={g.name} fill className="object-cover" sizes="(min-width: 1024px) 220px, 50vw" />
              ) : (
                <div className="absolute inset-0" />
              )}
            </div>
            <div className="px-3 py-2">
              <p className="font-plus-jakarta-sans font-medium text-[var(--foreground)]">{g.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ TABLE 1 (DataTable) */}
      <p className="mt-10 font-plus-jakarta-sans font-semibold text-[var(--foreground)]">Outdoor Game Facilities</p>

      <div className="mt-4">
        <DataTable
          columns={facilitiesColumns}
          data={facilitiesRows}
          overflowX={true}
          className="border border-black/10"
          headerBgColor="bg-black/5"
          headerTextColor="text-[var(--foreground)]"
          evenRowBg="bg-white"
          oddRowBg="bg-gray-50"
          borderColor="border-black/10"
        />
      </div>

      {/* ✅ TABLE 2 (DataTable) */}
      <p className="mt-10 font-plus-jakarta-sans font-semibold text-[var(--foreground)]">Sports Grounds Dimension</p>

      <div className="mt-4">
        <DataTable
          columns={groundsColumns}
          data={groundRows}
          overflowX={true}
          className="border border-black/10"
          headerBgColor="bg-black/5"
          headerTextColor="text-[var(--foreground)]"
          evenRowBg="bg-white"
          oddRowBg="bg-gray-50"
          borderColor="border-black/10"
        />
      </div>
    </div>
  );
}

function Gymnasium({ gymImages }) {
  return (
    <div>
      <h2 className="font-stix text-3xl md:text-4xl text-[var(--foreground)]">Gymnasium</h2>

      <p className="mt-3 text-[var(--light-text-gray)] leading-relaxed">
        We have a fully equipped, air-conditioned separate boys’ and girls’ gym facility on our campus for students who are residing in our hostels. To maintain their physical fitness, we have all the necessary instruments and machines that can be used by our students at any time. We also have certified weight and fitness trainers who are always available to guide our students.
      </p>

      <p className="mt-6 font-plus-jakarta-sans font-semibold text-[var(--foreground)]">Equipment Available</p>

      <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[var(--light-text-gray)]">
        {[
          "Treadmills",
          "Stretching Machines",
          "Suspension Training System",
          "Stationary Bikes",
          "Abdominal Benches",
          "Weight Training Equipment",
          "Cross Trainers",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <svg
              fill="none"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 bg-[var(--card-skin)] fill-black rounded-md p-1 flex-shrink-0 mt-0.5"
              aria-hidden
            >
              <path d="m19 5.50049v10.99951c0 .2761-.2239.5-.5.5s-.5-.2239-.5-.5v-9.79289l-12.14645 12.14649c-.19526.1952-.51184.1952-.7071 0-.19527-.1953-.19527-.5119 0-.7072l12.14645-12.1464h-9.7929c-.27614 0-.5-.22386-.5-.5s.22386-.5.5-.5h11c.1316 0 .2578.05186.3514.14426l.0022.00219c.0879.0879.1397.20518.1458.32876.0004.00824.0006.01699.0006.02528z" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <GlimpseGrid images={gymImages} />
    </div>
  );
}

function YogaRoom({ yogaImages }) {
  return (
    <div>
      <h2 className="font-stix text-3xl md:text-4xl text-[var(--foreground)]">Yoga Room</h2>

      <p className="mt-3 text-[var(--light-text-gray)] leading-relaxed">
        We have a dedicated yoga room on our campus designed to promote the physical, mental, and emotional well-being of our students. It is equipped with mats and props, enabling students to practice yoga and meditation in a tranquil ambience. It is a great way to manage stress and anxiety or take a break from studies and relax in a calm environment. We also have an experienced yoga trainer who conducts sessions from time to time. Our students and faculty celebrate the International Yoga Day every year, raising awareness among students about the importance of Yoga.
      </p>

      <GlimpseGrid images={yogaImages} />
    </div>
  );
}

function GlimpseGrid({ images = [] }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="mt-8">
      <p className="font-stix text-2xl md:text-3xl text-[var(--foreground)]">Training Glimpse</p>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.slice(0, 8).map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl border border-black/10 bg-black/5">
            <div className="relative w-full aspect-[4/3]">
              <Image src={img?.src || img} alt="" fill className="object-cover" sizes="(min-width: 1024px) 220px, 50vw" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
