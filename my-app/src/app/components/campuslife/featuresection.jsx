"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import GlobalArrowButton from "../general/global-arrow_button";

export default function Page() {
  const imageSets = [
    ["https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Infrastructure1.webp", "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Infrastructure2.webp", "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Infrastructure3.webp"],
    ["https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/transport-1.jpg", "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/transport-2.jpg", "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/transport-3.webp"],
    ["https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/mini-market2.webp","https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/mini-market3.webp"],
    ["https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Health+Clinic1.webp", "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Health+Clinic2.webp", "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Health+Clinic3.webp"],
    ["https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/bank-atm1.png", "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/bank-atm2.jpeg", "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/bank-atm3.webp"],
    ["https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/security1.jpg","https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/security2.jpeg","https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/security3.jpeg"]
  ];

  const [indexes, setIndexes] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const t = setInterval(() => {
      setIndexes((prev) =>
        prev.map((val, i) => (val + 1) % imageSets[i].length)
      );
    }, 3000);
    return () => clearInterval(t);
  }, []);


  return (
    <div className="container mx-auto py-16 md:pb-25 px-2 flex flex-col md:gap-20 gap-12 items-stretch">

      {[
        { type: "sandal", title: "Academic Infrastructure", desc: "Kalinga University offers state-of-the-art academic infrastructure with smart classrooms, digital learning tools, and well-equipped labs that promote innovation and practical learning.", link: "/academic-facilities" },
        { type: "red", title: "Transportation", desc: "With 30+ buses and 4-wheelers, our transport service offers convenient, safe, and affordable pick-up and drop facilities across Raipur, covering up to 70 km each way.", link: "/transport-facility", feesLink: "/ku-fees?tab=other" },
        { type: "sandal", title: "Mini Market", desc: "The on-campus mini market includes an ATM, stationery shop, salon, juice and snack counters, and a chemist — ensuring students have access to essentials without leaving campus.", link: "/mini-market" },
        { type: "red", title: "Health Clinic", desc: "Our on-campus health clinic, staffed by qualified doctors and nurses, provides consultation, counseling, and emergency medical support for students and staff.", link: "/health-clinic" },
        { type: "sandal", title: "Banking & ATM", desc: "With tie-ups with the Central Bank of India and Canara Bank, students can avail of education loans easily. Two 24×7 ATMs (ICICI & OBC Bank) are also available on campus, supporting all major digital payment methods.", link: "/campus-facilities"},
        { type: "red", title: "Safety & Security", desc: "The entire campus, including hostels and academic areas, is under continuous CCTV surveillance and managed by a trained in-house security team for complete safety.", link: "/campus-facilities" },
      ].map((sec, index) => (
        
        <div
          key={index}
          className="relative w-full h-auto md:h-[400px]
                     flex flex-col md:block"
        >

          {sec.type === "sandal" ? (
            // IMAGE RIGHT
            <div
              className="
                md:absolute md:bottom-[75px] md:right-[0px] md:w-[55%]
                w-full mb-4 md:mb-0
              "
            >
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
                    className={`h-2 rounded-full ${
                      i === indexes[index]
                        ? "bg-[var(--dark-orange-red-light)] w-12"
                        : "bg-[var(--light-gray)] w-4"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          ) : (
            // IMAGE LEFT
            <div
              className="
                md:absolute md:top-10 md:left-[0px] md:w-[55%] md:z-20
                w-full mb-4 md:mb-0
              "
            >
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
                    className={`h-2 rounded-full ${
                      i === indexes[index]
                        ? "bg-[var(--dark-orange-red-light)] w-12"
                        : "bg-[var(--light-gray)] w-4"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          )}

          {/* CONTENT BOXES */}
          {sec.type === "sandal" ? (
            <div
              className="
              bg-[var(--card-sandal)] rounded-2xl p-6 md:p-8 shadow-md w-full md:w-[55%] 
              md:min-h-[330px]
              md:absolute md:left-[0] md:top-[100px] flex flex-col justify-center
            "
            >
              <h1 className="text-xl md:text-2xl font-regular mb-3">{sec.title}</h1>
              <p className="text-sm text-[var(--foreground)]/70 leading-relaxed mb-4 md:w-3/4 w-full">{sec.desc}</p>
              <Link href={sec.link}>
                <GlobalArrowButton className="hover:!bg-[var(--background)]">Know More</GlobalArrowButton>
              </Link>
            </div>
          ) : (
            <div
              className="
              bg-[var(--button-red)] text-white rounded-2xl p-6 md:p-8 shadow-md 
              w-full md:w-[55%] md:min-h-[330px]
              md:absolute md:right-[0px] md:top-[100px] flex flex-col justify-center
            "
            >
              <h2 className="text-xl md:text-2xl font-regular mb-3 md:pl-[140px]">
                {sec.title}
              </h2>
              <p className="text-sm leading-relaxed mb-4 md:pl-[140px] w-full">
                {sec.desc}
              </p>
              <div className={`md:pl-[140px] flex ${index === 1 ? 'gap-3 md:gap-4' : ''} flex-wrap`}>
                <Link href={sec.link}>
                  <GlobalArrowButton 
                    className="!bg-white !text-[var(--foreground)]"
                    variant="transparent"
                    arrowClassName="bg-[var(--brown)]"
                  >
                    Know More
                  </GlobalArrowButton>
                </Link>
                {index === 1 && sec.feesLink && (
                  <Link href={sec.feesLink}>
                    <GlobalArrowButton 
                      className="!bg-[var(--dark-orange-red)] !border-[1px] !border-white !text-white hover:!bg-[var(--dark-orange-red-light)]"
                      arrowClassName="!bg-white"
                      arrowIconClassName="!text-[var(--dark-orange-red)]"
                    >
                      Check fees
                    </GlobalArrowButton>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
