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
// Default Health Clinic Videos
// -----------------------------
const defaultClinicVideos = [
    {
        id: 1,
        title: "Health Clinic Overview & Patient Care",
        videoUrl: "https://youtu.be/VIDEO_ID_1",
    },
    {
        id: 2,
        title: "Advanced Medical Facilities & Infrastructure",
        videoUrl: "https://youtu.be/VIDEO_ID_2",
    },
    {
        id: 3,
        title: "Doctor Consultation & Treatment Process",
        videoUrl: "https://youtu.be/VIDEO_ID_3",
    },
    {
        id: 4,
        title: "Patient Testimonials & Success Stories",
        videoUrl: "https://youtu.be/VIDEO_ID_4",
    },
];

// -----------------------------
// Reusable Health Clinic Component
// -----------------------------
function HealthClinicVideos({
    videos = defaultClinicVideos,
    subtitle = "Healthcare Services",
    title = "Health Clinic Videos",
    description = "Watch videos showcasing our clinic facilities, expert doctors, patient care, and advanced medical services.",
    backgroundColor = "bg-[var(--light-gray)]",
    showPagination = true,
    showNavigation = true,
    fallbackImage = "https://kalinga-university.s3.ap-south-1.amazonaws.com/health-clinic/clinic-fallback.webp",
}) {
    // Normalize videos for slider
    const normalizedVideos = useMemo(() => {
        return (videos || []).map((v, index) => {
            const videoUrl = v.videoUrl || "";
            const image =
                v.image ||
                (videoUrl.includes("youtu") ? getYouTubeThumbnail(videoUrl) : "") ||
                fallbackImage;

            return {
                id: v.id ?? index + 1,
                title: v.title || "",
                videoUrl,
                image,
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

export default HealthClinicVideos;
