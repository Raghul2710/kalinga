"use client";

import { useEffect, useState } from "react";
import GlobalArrowButton from "../general/global-arrow_button";

export default function CanteenMess() {
  // ✅ 2 images as required
  const imageSets = [
    [
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/canteen-and-mess/canteen+mess+(5).webp",
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/canteen-and-mess/canteen+mess+(4).webp",
    ],
  ];

  const [indexes, setIndexes] = useState([0]);

  useEffect(() => {
    const t = setInterval(() => {
      setIndexes((prev) => prev.map((val, i) => (val + 1) % imageSets[i].length));
    }, 3000);

    return () => clearInterval(t);
  }, []);

  return (
    <section className="w-full py-10 md:py-16">
      <div className="container mx-auto px-6">
        {/* ✅ Best layout: grid (no absolute, no overlap) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* CONTENT (Left) */}
          <div className="lg:col-span-6">
            <div className="bg-[var(--card-sandal)] rounded-2xl p-8 shadow-md w-full">
              <h2 className="text-2xl font-regular mb-4">Mess</h2>

              <p className="text-sm text-[var(--foreground)] leading-relaxed mb-4">
                We have designed three spacious halls to accommodate large groups of
                students at a time and serve them with different food options every
                day. Meals of both vegetarian and non-vegetarian plans are prepared
                and served as per student preferences, offering four meals a day —
                breakfast, lunch, high tea, and dinner.
              </p>

              <p className="text-sm text-[var(--foreground)] leading-relaxed mb-4">
                There is a separate meal plan for international students as well. Our
                attentive staff ensures warm hospitality and takes care of all food
                requirements. During Ramadan, special meal plans are arranged for
                Muslim students, and during Navratri, special meals are provided for
                Hindu students.
              </p>

              <p className="text-sm text-[var(--foreground)] leading-relaxed mb-6">
                With wholesome and nutritious meals served in a calm atmosphere near
                nature, students enjoy a healthy and pleasant dining experience.
              </p>

              <GlobalArrowButton>Know More</GlobalArrowButton>
            </div>
          </div>

          {/* IMAGE (Right) */}
          <div className="lg:col-span-6">
            <div className="w-full">
              <div className="relative h-[220px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg w-full">
                <img
                  src={imageSets[0][indexes[0]]}
                  alt="Mess Facility at Kalinga University"
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>

              {/* Indicators */}
              <div className="mt-3 w-full flex justify-center gap-2">
                {imageSets[0].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full ${
                      i === indexes[0]
                        ? "bg-[var(--dark-orange-red-light)] w-12"
                        : "bg-[var(--light-gray)] w-4"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}