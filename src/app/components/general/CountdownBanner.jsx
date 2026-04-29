"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CountdownBanner = ({ targetDate }) => {
  const pathname = usePathname();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Check if user has minimized the banner before
    const wasMinimized = localStorage.getItem("admissionBannerMinimized");
    if (wasMinimized === "true") {
      setIsMinimized(true);
    }

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleMinimize = () => {
    setIsMinimized(true);
    localStorage.setItem("admissionBannerMinimized", "true");
  };

  const handleExpand = () => {
    setIsMinimized(false);
    localStorage.setItem("admissionBannerMinimized", "false");
  };

  if (!isMounted) return null;

  return (
    <AnimatePresence mode="wait">
      {isMinimized ? (
        <motion.button
          key="minimized"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          onClick={handleExpand}
          className="fixed bottom-24 left-4 z-[10060] flex items-center gap-3 text-white px-4 py-2.5 rounded-2xl shadow-2xl border border-white/20 group overflow-hidden"
          style={{
            fontFamily: "'Outfit', sans-serif",
            backgroundColor: 'rgba(13, 59, 102, 0.85)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)'
          }}
        >
          {/* Pulsing indicator */}
          <span className="absolute top-0 left-0 w-1 h-full bg-[var(--dark-orange-red-light)]" />

          <div className="bg-white/10 p-1.5 rounded-lg flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="flex flex-col items-start leading-none">
            <span className="text-[10px] font-medium text-white/70 mb-1 uppercase tracking-wider">Ends in</span>
            <span className="text-sm font-bold font-mono text-white">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
            </span>
          </div>

          <div className="ml-2 bg-white/10 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </div>
        </motion.button>
      ) : (
        <motion.div
          key="expanded"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed bottom-0 left-0 w-full z-[10060] shadow-[0_-8px_30px_rgba(0,0,0,0.3)]"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          <div
            className="relative overflow-hidden py-3 md:py-4 px-4 md:px-8"
            style={{
              backgroundColor: 'rgba(13, 59, 102, 0.85)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              color: 'white'
            }}
          >
            {/* Background Decorative Pattern */}
            <div className="absolute top-0 right-0 w-96 h-full bg-white/5 skew-x-[-25deg] transform translate-x-48 pointer-events-none" />

            <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-start gap-1 md:gap-12 relative z-10">
              {/* Text Section */}
              <div className="flex items-center gap-3">
                <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/20 shadow-inner">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-sm md:text-[24px] font-medium tracking-normal !leading-tight mb-0.5">
                    Phase 2 Admission Closes on 30th April 2026
                  </h4>
                </div>
              </div>

              {/* Timer & CTA Section */}
              <div className="flex items-center justify-start w-full md:w-auto gap-4 md:gap-10">
                <div className="flex gap-2 md:gap-3">
                  <TimerUnit value={timeLeft.days} label="D" />
                  <TimerUnit value={timeLeft.hours} label="H" />
                  <TimerUnit value={timeLeft.minutes} label="M" />
                  <TimerUnit value={timeLeft.seconds} label="S" />
                </div>

                <Link
                  href="https://admissions.kalingauniversity.ac.in/?utm_source=website&utm_medium=counter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center bg-[var(--button-red)] hover:bg-[#b03531] text-white px-3 py-2 rounded-xl !text-[13px] md:!text-sm font-medium transition-all duration-300 shadow-lg whitespace-nowrap"
                >
                  <span className="px-2 uppercase  !text-[13px] md:!text-sm">APPLY NOW</span>
                  <div className="bg-white rounded-lg p-1 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/90">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[var(--button-red)] transition-transform duration-300 group-hover:rotate-45"
                    >
                      <path
                        d="M4 12L12 4M12 4H6M12 4V10"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            {/* Minimize Button */}
            <button
              onClick={handleMinimize}
              className="absolute right-2 md:right-4 top-2 md:top-1/2 md:-translate-y-1/2 p-1.5 hover:bg-white/10 rounded-lg transition-all duration-300 group"
              aria-label="Minimize banner"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:rotate-90 transition-transform duration-500 opacity-60 group-hover:opacity-100 md:w-5 md:h-5"
              >
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TimerUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg md:rounded-xl w-8 h-9 md:w-11 md:h-12 flex items-center justify-center shadow-inner">
      <span className="text-xs md:text-xl font-normal leading-none tracking-tighter text-white">
        {value.toString().padStart(2, '0')}
      </span>
    </div>
    <span className="text-[8px] md:text-[10px] font-medium mt-1 uppercase tracking-widest opacity-70">{label}</span>
  </div>
);

export default CountdownBanner;
