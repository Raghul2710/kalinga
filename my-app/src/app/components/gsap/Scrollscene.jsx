'use client';

import React, { useRef } from 'react';
import { useScroll, useTransform, motion, useMotionTemplate } from 'framer-motion';
import { ScatterItem } from './ScatterItem';

export const ScrollScene = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // --- 1. Title Exit (0.0 -> 0.2) ---
    // "Real Recommendations" moves UP and fades OUT
    const titleY = useTransform(scrollYProgress, [0, 0.2], ["0%", "-100%"]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    // --- 2. Gate Opening (0.15 -> 0.4) ---
    // "by real people" splits.
    const splitLeftX = useTransform(scrollYProgress, [0.15, 0.4], ["0vw", "-60vw"]);
    const splitRightX = useTransform(scrollYProgress, [0.15, 0.4], ["0vw", "60vw"]);
    const splitOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]); // Fade out eventually

    // --- 3. Hero Image Reveal (0.15 -> 0.6) ---
    // Zooms in through the gate.
    // Start VERY small (0.05) to fit between text, then grow to full (1).
    const heroScale = useTransform(scrollYProgress, [0.15, 0.6], [0.05, 1]);
    const heroOpacity = useTransform(scrollYProgress, [0.15, 0.2], [0, 1]); // Quick fade in at small size
    const heroRadius = useTransform(scrollYProgress, [0.4, 0.6], ["40px", "0px"]);

    // --- 4. Final Text Fade In (0.6 -> 0.8) ---
    const finalTextOpacity = useTransform(scrollYProgress, [0.65, 0.85], [0, 1]);
    const finalTextY = useTransform(scrollYProgress, [0.65, 0.85], ["20px", "0px"]);


    // Scatter images configuration
    // "Cloud" layout: clustered closer to center initially, moving OUT.
    const tunnelImages = [
        // Top Left Cluster
        { id: 1, src: "https://cdn.kalingauniversity.ac.in/Home/campus/1.webp", top: "15%", left: "10%", xMove: -800, yMove: -400, className: "w-32 h-40 md:w-40 md:h-52" },
        { id: 2, src: "https://cdn.kalingauniversity.ac.in/common/student.jpg", top: "8%", left: "28%", xMove: -400, yMove: -600, className: "hidden md:block w-24 h-24 md:w-32 md:h-32" },

        // Top Right Cluster
        { id: 3, src: "https://cdn.kalingauniversity.ac.in/Home/campus/3.webp", top: "15%", right: "20%", xMove: 600, yMove: -500, className: "w-28 h-36 md:w-36 md:h-56" },
        { id: 4, src: "https://cdn.kalingauniversity.ac.in/Home/campus/4.webp", top: "5%", right: "38%", xMove: 300, yMove: -600, className: "hidden md:block w-32 h-20 md:w-48 md:h-40" },

        // Bottom Left Cluster
        { id: 5, src: "https://cdn.kalingauniversity.ac.in/campus-life/student-grppic.webp", bottom: "15%", left: "8%", xMove: -600, yMove: 400, className: "w-40 h-40 md:w-52 md:h-52" },
        { id: 6, src: "https://cdn.kalingauniversity.ac.in/course/course_page.webp?w=1000", bottom: "20%", left: "30%", xMove: -300, yMove: 600, className: "w-20 h-28 md:w-28 md:h-36" },

        // Bottom Right Cluster
        { id: 7, src: "https://cdn.kalingauniversity.ac.in/campus-life/gallery3.webp", bottom: "12%", right: "8%", xMove: 600, yMove: 400, className: "w-24 h-32 md:w-32 md:h-40" },
        { id: 8, src: "https://cdn.kalingauniversity.ac.in/academics/arts.webp", bottom: "5%", right: "25%", xMove: 400, yMove: 600, className: "w-32 h-24 md:w-40 md:h-32" },

        // Fillers / Peripherals
        { id: 9, src: "https://cdn.kalingauniversity.ac.in/alumini/alimini-meet1.webp", top: "35%", left: "22%", xMove: -900, yMove: 0, className: "w-28 h-28 md:w-24 md:h-24" }, // Far Left
        { id: 10, src: "https://cdn.kalingauniversity.ac.in/Home/campus/filler2.webp", top: "35%", right: "5%", xMove: 900, yMove: 100, className: "w-28 h-28 md:w-36 md:h-36" }, // Far Right
    ];

    return (
        <div ref={containerRef} className="h-[400vh] relative w-full bg-white" suppressHydrationWarning={true}>
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center perspective-1000">

                {/* LAYER 1: SCATTER IMAGES (z-40) */}
                {/* They start visible around center and explode OUT */}
                <div className="absolute inset-0 z-40 pointer-events-none w-full h-full">
                    {tunnelImages.map((img) => (
                        <ScatterItem
                            key={img.id}
                            {...img}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </div>

                {/* LAYER 2: TEXT LAYERS (z-50) */}
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none pb-[5vh]">
                    {/* Main Title - Slides UP and OUT */}
                    <motion.h1
                        style={{ y: titleY, opacity: titleOpacity }}
                        className="text-4xl  md:text-6xl font-serif text-black tracking-tight drop-shadow-xl text-center origin-center px-4 mb-2 md:mb-6 pt-16 leading-none"
                    >
                        Real Recommendations
                    </motion.h1>

                    {/* Gate Text - Splits apart to reveal Hero */}
                    <div className="flex items-center justify-center gap-3 md:gap-6 relative h-[1.2em]">
                        <motion.h2
                            style={{ x: splitLeftX, opacity: splitOpacity }}
                            className="text-4xl md:text-6xl font-serif text-black whitespace-nowrap origin-right leading-none"
                        >
                            by real
                        </motion.h2>

                        <motion.h2
                            style={{ x: splitRightX, opacity: splitOpacity }}
                            className="text-4xl md:text-6xl font-serif text-black whitespace-nowrap origin-left leading-none"
                        >
                            people
                        </motion.h2>
                    </div>
                </div>

                {/* LAYER 3: HERO REVEAL (z-30) */}
                <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">

                    {/* 1. BASE ROOM LAYER (Text is here) */}
                    <motion.div
                        style={{
                            scale: heroScale,
                            opacity: heroOpacity,
                            borderRadius: heroRadius,
                        }}
                        className="absolute w-full h-[90vh] md:aspect-video shadow-2xl origin-center overflow-hidden bg-black flex items-center justify-center z-10"
                    >
                        <img
                            src="https://framerusercontent.com/images/cnRtwVuxzVat35pyP94Hlnw1g.png?width=1600"
                            alt="Room Background"
                            className="w-full h-full object-cover"
                        />
                        {/* Vignette on Base */}
                        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] mix-blend-multiply" />
                    </motion.div>

                    {/* 2. RIPPLE LAYERS (Cutouts only) - ON TOP of Base */}
                    {[0, 1, 2, 3, 4, 5].map((index) => {
                        const lag = (5 - index) * 0.03;
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const scale = useTransform(scrollYProgress, [0.15 + lag, 0.6 + lag], [0.05, 1]);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const opacity = useTransform(scrollYProgress, [0.15 + lag, 0.2 + lag], [0, 1]);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const borderRadius = useTransform(scrollYProgress, [0.4 + lag, 0.6 + lag], ["40px", "0px"]);

                        return (
                            <motion.div
                                key={index}
                                style={{
                                    scale,
                                    opacity,
                                    borderRadius,
                                    zIndex: 50 - index, // Lagging/Smaller on TOP
                                }}
                                className="absolute w-full h-[90vh] md:aspect-video origin-center overflow-hidden pointer-events-none flex items-center justify-center will-change-transform"
                            >
                                <img
                                    src="https://framerusercontent.com/images/oWJ5kVT9dEXuazRGl0p8qbEN1M.png?width=1600"
                                    alt={`Ripple Cutout ${index}`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        );
                    })}

                    {/* 3. TEXT OVERLAY - MOVED to Top Z-Index (z-60) */}
                    <div className="absolute inset-0 z-[60] flex items-center justify-center pointer-events-none">
                        <motion.div
                            style={{ opacity: finalTextOpacity, y: finalTextY }}
                            className="relative text-center px-4 max-w-5xl"
                        >
                            <h3 className="text-3xl md:text-6xl font-serif text-white drop-shadow-lg leading-tight">
                                A Sneak Peek into Your Daily Campus Life
                            </h3>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};