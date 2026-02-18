"use client";

import React from "react";
import Newraipurvideos from "@/app/components/about-raipur/newraipurvideos";

function Campusfacilityvideo() {
    const campusFacilityVideos = [
        { id: 1, title: "Green Campus", videoUrl: "https://www.youtube.com/watch?v=O0hEiIfOXBE" },
        { id: 2, title: "Campus Tour", videoUrl: "https://www.youtube.com/watch?v=1awXKWYD6Zg" },
        { id: 3, title: "Eco-Friendly Campus", videoUrl: "https://www.youtube.com/watch?v=jo8WbtoWs2w" },
        { id: 4, title: "Hostel", videoUrl: "https://www.youtube.com/watch?v=O_q7pPo6fjA" },
        { id: 5, title: "Cafeteria And Mess", videoUrl: "https://www.youtube.com/watch?v=Wsv6dss4wSs" },
        { id: 6, title: "Library", videoUrl: "https://www.youtube.com/watch?v=llHISVPRkxI" },
        { id: 7, title: "Green House", videoUrl: "https://www.youtube.com/watch?v=s1u67-VoFdc" },
        { id: 8, title: "Gym", videoUrl: "https://www.youtube.com/watch?v=Mi8wq5XU53g" },
        // { id: 9, title: "Sports Festival", videoUrl: "https://www.youtube.com/watch?v=r0tBeANR5fQ" },
        { id: 10, title: "Cycling Tour", videoUrl: "https://www.youtube.com/watch?v=zOH1RHIB5CQ" },
        { id: 11, title: "Wellness Centre", videoUrl: "https://www.youtube.com/watch?v=EEI7mF68lwA" },
        { id: 12, title: "Mini Market", videoUrl: "https://www.youtube.com/watch?v=8bqYKGqQ8XI" },
    ];

    return (
        /* ✅ Wrapper adds spacing so it doesn't touch next section */
        <div className="mb-16 md:mb-24">
            <Newraipurvideos
                title="Campus Facilities"
                description="Explore Kalinga University campus facilities."
                videos={campusFacilityVideos}
                backgroundColor="bg-[var(--light-gray)]"
                showPagination={true}
                showNavigation={true}
            />
        </div>
    );
}

export default Campusfacilityvideo;
