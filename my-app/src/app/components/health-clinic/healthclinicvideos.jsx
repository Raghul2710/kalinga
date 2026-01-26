import React, { useMemo } from "react";
import Newraipurvideos from "../about-raipur/newraipurvideos";

function Healthclinicvideos() {
    const clinicVideosBase = [
        {
            id: 1,
            title: "Health Checkup Camp – Community Outreach",
            videoUrl: "https://www.youtube.com/watch?v=ogUpFzbzP1c",
        },
        {
            id: 2,
            title: "Medical Health Checkup Camp",
            videoUrl: "https://www.youtube.com/watch?v=3A9HC5ZASGY",
        },
        {
            id: 3,
            title: "Free Health Screening & Awareness Camp",
            videoUrl: "https://www.youtube.com/watch?v=oUhUIh4Akbg",
        },
    ];

    // ✅ Make slides enough for loop mode (desktop usually shows 3 per view)
    // We’ll duplicate until we have at least 6 slides.
    const clinicVideos = useMemo(() => {
        const minSlidesNeeded = 6;

        if (clinicVideosBase.length >= minSlidesNeeded) return clinicVideosBase;

        const out = [];
        let copyIndex = 0;

        while (out.length < minSlidesNeeded) {
            for (let i = 0; i < clinicVideosBase.length && out.length < minSlidesNeeded; i++) {
                const v = clinicVideosBase[i];
                out.push({
                    ...v,
                    id: Number(`${v.id}${copyIndex}`), // unique id (avoids React key conflicts)
                });
            }
            copyIndex++;
        }

        return out;
    }, []);

    return (
        <div>
            <Newraipurvideos
                title="Health Clinic"
                description=""
                videos={clinicVideos}
                backgroundColor="bg-[var(--light-gray)]"
                showPagination={true}
                showNavigation={true}
            />
        </div>
    );
}

export default Healthclinicvideos;
