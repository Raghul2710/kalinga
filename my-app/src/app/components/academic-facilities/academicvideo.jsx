"use client";

import React from "react";
import Newraipurvideos from "@/app/components/about-raipur/newraipurvideos";
// ⬆️ adjust path if needed

function Academicvideo() {
    return (
        <Newraipurvideos
            title="Academic Video"
            description=""
            videos={[
                {
                    title: "Academic Excellence at Kalinga University",
                    videoUrl: "https://www.youtube.com/watch?v=vXnjBfvu8RY",
                    image: "https://cdn.kalingauniversity.ac.in/academic-facilities/mootcourt.webp"
                },
            ]}
        />
    );
}

export default Academicvideo;
