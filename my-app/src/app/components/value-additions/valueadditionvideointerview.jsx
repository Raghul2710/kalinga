import React from "react";
import MediaCardSlider from "@/app/components/general/media-card-slider";

function Valueadditionvideointerview() {
    const videoItems = [
        {
            id: 1,
            name: "Sadiq Isa Yusuf",
            description: "MBA",
            videoUrl:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_7fe436a0-5cc2-45e0-90bf-49bf031fb5f2+(1)+(1).mp4",
            thumbnail:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_7fe436a0-5cc2-45e0-90bf-49bf031fb5f2+(1)+(1).mp4",
        },
        {
            id: 2,
            name: "Debraj Debnath",
            description: "B.Tech CS",
            videoUrl:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_5112c405-c05e-42cd-a9f2-6f043d3d2181.mp4",
            thumbnail:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_5112c405-c05e-42cd-a9f2-6f043d3d2181.mp4",
        },
        {
            id: 3,
            name: "Surya Kumar Srivastava",
            description: "B.Tech CS (AIML)",
            videoUrl:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_8b1b9390-247c-4ca7-b120-29a1e6e2d85d.mp4",
            thumbnail:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_8b1b9390-247c-4ca7-b120-29a1e6e2d85d.mp4",
        },
    ];

    return (
        <>
            <style jsx global>{`
        /* ✅ Only affect this slider */
        @media (max-width: 640px) {
          /* Thumbnail <img> case */
          .ccrc-video-slider img {
            object-fit: contain !important;
            background: #fff !important; /* optional to avoid black bars */
          }

          /* ReactPlayer thumbnail wrapper often uses <video> or inner div */
          .ccrc-video-slider video {
            height: 380px !important;
            object-fit: contain !important;
            background: #fff !important;
          }

          /* If the player uses a background-image on a div */
          .ccrc-video-slider [style*="background-image"] {
            background-size: contain !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-color: #fff !important;
          }
        }
      `}</style>

            <MediaCardSlider
                categoryTitle=""
                title="Their Experience Can Become Your Inspiration"
                videoItems={videoItems}
                cardBgClass="bg-white"
                nameTextClass="text-[var(--button-red)]"
                descriptionTextClass=""
                swiperClassName="ccrc-video-slider"
            />
        </>
    );
}

export default Valueadditionvideointerview;
