"use client";

import Image from "next/image";
import { useMemo, useRef, useState, useEffect } from "react";
import SectionHeading from "../general/SectionHeading";
import GlobalArrowButton from "../general/global-arrow_button";

const defaultCards = [
  {
    id: 1,
    title: "Social Scholarships",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://cdn.kalingauniversity.ac.in/common/placeholder-img.png",
    href: "/",
  },
  {
    id: 2,
    title: "Merit Scholarships",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://cdn.kalingauniversity.ac.in/common/placeholder-img.png",
    href: "/",
  },
  {
    id: 3,
    title: "Social Scholarships",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://cdn.kalingauniversity.ac.in/common/placeholder-img.png",
    href: "/",
  },
];

export default function ScholarshipsCarousel({
  title = "Scholarships",
  description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`,
  buttonLabel = "Explore Now",
  onExplore = null,
  cards = defaultCards,
}) {
  const trackRef = useRef(null);

  const items = useMemo(() => (Array.isArray(cards) ? cards : []), [cards]);

  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const scrollToIndex = (idx) => {
    const el = trackRef.current;
    if (!el) return;
    const children = el.querySelectorAll("[data-card]");
    if (!children[idx]) return;
    children[idx].scrollIntoView({ behavior: "smooth", inline: "start" });
  };

  const prev = () => scrollToIndex(Math.max(active - 1, 0));
  const next = () => scrollToIndex(Math.min(active + 1, items.length - 1));

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      const children = el.querySelectorAll("[data-card]");
      if (!children.length) return;

      // find the left-most mostly visible card
      const elRect = el.getBoundingClientRect();
      let bestIdx = 0;
      let bestScore = -Infinity;

      children.forEach((child, idx) => {
        const r = child.getBoundingClientRect();
        const visible = Math.max(0, Math.min(r.right, elRect.right) - Math.max(r.left, elRect.left));
        const score = visible - Math.abs(r.left - elRect.left) * 0.1;
        if (score > bestScore) {
          bestScore = score;
          bestIdx = idx;
        }
      });

      setActive(bestIdx);

      setCanPrev(el.scrollLeft > 2);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
    };

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items.length]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <SectionHeading
              title={title}
              subtitle={null}
              titleClassName="!text-left"
              subtitleClassName="!hidden"
            />
            <p className="mt-4 text-[var(--light-text-gray)] leading-relaxed">
              {description}
            </p>
          </div>

          <div className="md:pt-2">
            <GlobalArrowButton
              className="w-fit cursor-pointer"
              onClick={onExplore || (() => { })}
            >
              {buttonLabel}
            </GlobalArrowButton>
          </div>
        </div>

        {/* Cards Row */}
        <div className="mt-8 relative">
          <div
            ref={trackRef}
            className="
              flex gap-6 overflow-x-auto scroll-smooth
              pb-4
              [scrollbar-width:thin]
              [-ms-overflow-style:auto]
              snap-x snap-mandatory
            "
          >
            {items.map((c) => (
              <div
                key={c.id}
                data-card
                className="
                  snap-start
                  min-w-[260px] sm:min-w-[300px] md:min-w-[320px]
                  rounded-2xl bg-[var(--lite-sand)]
                  px-6 pt-5 pb-4
                  border border-black/5
                  shadow-sm
                  relative
                "
              >
                <div className="h-[120px] flex items-center justify-center">
                  <Image
                    src={c.image}
                    alt={c.title}
                    width={220}
                    height={140}
                    className="h-[110px] w-auto object-contain"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-[16px] font-semibold text-[var(--foreground)]">
                    {c.title}
                  </h3>
                  <div className="mt-3 h-[1px] w-full bg-black/20" />
                  <p className="mt-3 text-[13px] leading-[20px] text-[var(--light-text-gray)]">
                    {c.description}
                  </p>
                </div>

                <a
                  href={c.href || "#"}
                  target={c.href?.startsWith("http") ? "_blank" : undefined}
                  rel={c.href?.startsWith("http") ? "noreferrer" : undefined}
                  className="
                    absolute bottom-4 right-4
                    h-8 w-8 rounded-md
                    bg-[var(--button-red)]
                    flex items-center justify-center
                    cursor-pointer
                    group
                  "
                  aria-label={`Open ${c.title}`}
                >
                  <svg
                    className="h-4 w-4 text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 7h7v7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Bottom right controls */}
          <div className="absolute -bottom-2 right-0 flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              disabled={!canPrev}
              className={`
                h-9 w-9 rounded-md
                flex items-center justify-center
                ${canPrev ? "bg-[var(--button-red)] cursor-pointer" : "bg-gray-300 cursor-not-allowed"}
              `}
              aria-label="Previous"
            >
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={next}
              disabled={!canNext}
              className={`
                h-9 w-9 rounded-md
                flex items-center justify-center
                ${canNext ? "bg-[var(--button-red)] cursor-pointer" : "bg-gray-300 cursor-not-allowed"}
              `}
              aria-label="Next"
            >
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}