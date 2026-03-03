"use client";

import { useState, useEffect } from "react";
import GlobalArrowButton from "../general/global-arrow_button";

export default function CanteenMess() {
  const imageSets = [
    [
      "https://cdn.kalingauniversity.ac.in/canteen-and-mess/cafeteria-mess-img1.webp",
      "https://cdn.kalingauniversity.ac.in/canteen-and-mess/cafeteria-mess-img2.webp",
    ],
    [
      "https://cdn.kalingauniversity.ac.in/canteen-and-mess/cafeteria-mess-img.webp",
      "https://cdn.kalingauniversity.ac.in/canteen-and-mess/canteen-mess-5.webp",
      "https://cdn.kalingauniversity.ac.in/canteen-and-mess/canteen-mess-4.webp",
    ],
  ];

  const [indexes, setIndexes] = useState([0, 0]);

  useEffect(() => {
    const t = setInterval(() => {
      setIndexes((prev) =>
        prev.map((val, i) => (val + 1) % imageSets[i].length)
      );
    }, 3000);
    return () => clearInterval(t);
  }, []);

  const sections = [
    {
      type: "sandal",
      title: "Mess",
      desc: "We have designed three spacious halls to accommodate large groups of students at a time and serve with different food options every day. Meals of both vegetarian and non-vegetarian plans are prepared and served to students as per their preference, serving 4 meals a day – breakfast, lunch, high tea, and dinner.",
      extra:
        "There is a separate meal plan for international students as well. Experience warm hospitality with our attentive staff members who will take care of your food requirements. As part of the University’s support network for hostel students, during Ramadan, an appropriate meal plan is provided to our Muslim students, and at the time of Navratri, a special meal is provided to our Hindu students. With wholesome and nutritious meals, our students enjoy their food in a calm atmosphere near nature.",
    },
    {
      type: "red",
      title: "Canteen and Cafeterias",
      desc:
        "Apart from the mess food, you can also explore some other options in our canteen and cafeterias. Check out regular food and fast food items on the menu of our canteen, and if you are looking for fresh juices, snacks, or ice-creams, then our campus has cafeterias that remain open till late hours. Our students love to hang out in cafes with their friends and enjoy delicious snacks at affordable prices. So, if you are taking a study break, these will ensure that you never go hungry.",
    },
  ];

  const [isMessExpanded, setIsMessExpanded] = useState(false);

  return (
    <div className="container mx-auto py-16 md:pb-25 px-2 flex flex-col md:gap-20 gap-12 items-stretch">
      {/* ✅ TITLE ADDED (ONLY ADDITION) */}
      <h2 className="flex flex-col items-center text-center">
        Explore KU’s Food Corners
      </h2>

      {sections.map((sec, index) => (
        <div
          key={index}
          className="relative w-full h-auto md:min-h-[400px] flex flex-col md:block"
        >
          {sec.type === "sandal" ? (
            <div className="md:absolute md:top-[25px] md:right-[0px] md:w-[55%] w-full mb-4 md:mb-0">
              <div className="relative h-[220px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg w-full z-10">
                <img
                  src={imageSets[index][indexes[index]]}
                  alt={`${sec.title} at Kalinga University`}
                  className="w-full h-full object-cover transition-all duration-700 object-top"
                />
              </div>

              <div className="mt-3 w-full flex justify-center gap-2 z-20">
                {imageSets[index].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full ${i === indexes[index]
                      ? "bg-[var(--dark-orange-red-light)] w-12"
                      : "bg-[var(--light-gray)] w-4"
                      }`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="md:absolute md:top-10 md:left-[0px] md:w-[55%] md:z-20 w-full mb-4 md:mb-0">
              <div className="relative h-[220px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg w-full">
                <img
                  src={imageSets[index][indexes[index]]}
                  alt={`${sec.title} at Kalinga University`}
                  className="w-full h-full object-cover transition-all duration-700 object-top"
                />
              </div>

              <div className="mt-3 w-full flex justify-center gap-2">
                {imageSets[index].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full ${i === indexes[index]
                      ? "bg-[var(--dark-orange-red-light)] w-12"
                      : "bg-[var(--light-gray)] w-4"
                      }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* CONTENT */}
          {sec.type === "sandal" ? (
            <div className="bg-[var(--card-sandal)] rounded-2xl p-6 md:p-8 shadow-md w-full md:w-[55%] md:min-h-[330px] md:relative md:left-[0] md:mt-[100px] md:mb-8 flex flex-col justify-center">
              <h1 className="text-xl md:text-2xl font-regular mb-3">
                {sec.title}
              </h1>
              <p className="text-sm text-[var(--foreground)]/70 leading-relaxed mb-4 md:w-3/4 w-full">
                {sec.desc}
                {!isMessExpanded && (
                  <span
                    onClick={() => setIsMessExpanded(true)}
                    className="cursor-pointer font-bold ml-1 text-[var(--button-red)] hover:underline"
                  >
                    Read More
                  </span>
                )}
              </p>
              {isMessExpanded && sec.extra && (
                <p className="text-sm text-[var(--foreground)]/70 leading-relaxed mb-4 md:w-3/4 w-full">
                  {sec.extra}
                  <span
                    onClick={() => setIsMessExpanded(false)}
                    className="cursor-pointer font-bold ml-1 text-[var(--button-red)] hover:underline"
                  >
                    Read Less
                  </span>
                </p>
              )}
            </div>
          ) : (
            <div className="bg-[var(--button-red)] text-white rounded-2xl p-6 md:p-8 shadow-md w-full md:w-[55%] md:min-h-[330px] md:absolute md:right-[0px] md:top-[100px] flex flex-col justify-center">
              <h2 className="text-xl md:text-2xl font-regular mb-3 md:pl-[140px]">
                {sec.title}
              </h2>
              <p className="text-sm leading-relaxed mb-4 md:pl-[140px] w-full">
                {sec.desc}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
