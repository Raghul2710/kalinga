"use client";

import React, { useMemo } from "react";
import SustainableSlider from "@/app/components/general/three_card_sider";

// -----------------------------
// Helpers
// -----------------------------
const getYouTubeId = (url) => {
    if (!url) return "";

    if (url.includes("youtu.be/")) return url.split("youtu.be/")[1].split("?")[0];
    if (url.includes("youtube.com/watch?v=")) return url.split("v=")[1].split("&")[0];
    if (url.includes("youtube.com/embed/")) return url.split("youtube.com/embed/")[1].split("?")[0];

    return "";
};

const getYouTubeThumbnail = (url) => {
    const id = getYouTubeId(url);
    return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "";
};

// -----------------------------
// Default Videos (your current New Raipur set)
// -----------------------------
const defaultVideosInput = [
    { id: 1, title: "Smart City New Raipur – Vision & Development", videoUrl: "https://youtu.be/ZJmzkECP5eI" },
    { id: 2, title: "New Raipur Infrastructure & Urban Planning", videoUrl: "https://youtu.be/OVG4OAkQCMA" },
    { id: 3, title: "Life in New Raipur – Growth & Opportunities", videoUrl: "https://youtu.be/T5hsDieiWR0" },
    { id: 4, title: "Why New Raipur is India’s Next Smart City", videoUrl: "https://youtu.be/NXEoprAcRCc" },
    { id: 5, title: "New Raipur Smart City – Future Ready India", videoUrl: "https://youtu.be/4UXli2oy2I8" },
];

// -----------------------------
// Reusable Component (same file)
// -----------------------------
function Newraipurvideos({
    videos = defaultVideosInput,
    subtitle = "",
    title = "New Raipur in Action",
    description = "Explore New Raipur through videos showcasing smart infrastructure, planning, lifestyle, and future-ready development.",
    backgroundColor = "bg-[var(--light-gray)]",
    showPagination = true,
    showNavigation = true,
    fallbackImage = "https://cdn.kalingauniversity.ac.in/about-raipur/raipur1.webp",
}) {
    // Normalize videos for the slider (ensure id + image exist)
    const normalizedVideos = useMemo(() => {
        return (videos || []).map((v, index) => {
            const videoUrl = v.videoUrl || "";
            const img =
                v.image ||
                (videoUrl.includes("youtu") ? getYouTubeThumbnail(videoUrl) : "") ||
                fallbackImage;

            return {
                id: v.id ?? index + 1,
                title: v.title || "",
                videoUrl,
                image: img,
            };
        });
    }, [videos, fallbackImage]);

    return (
        <SustainableSlider
            videos={normalizedVideos}
            subtitle={subtitle}
            title={title}
            description={description}
            backgroundColor={backgroundColor}
            showPagination={showPagination}
            showNavigation={showNavigation}
        />
    );
}

export default Newraipurvideos;
