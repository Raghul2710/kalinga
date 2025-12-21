import React from 'react'
import MediaCardSlider from '@/app/components/general/media-card-slider';

function Valueadditionvideointerview() {
    const videoItems = [
        {
            id: 1,
            title: "Video 1",
            description: "Loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        },
        {
            id: 2,
            title: "Video 2",
            description: "Loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 3,
            title: "Video 3",
            description: "Loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ];
    return (
        <>
            <MediaCardSlider
                categoryTitle="Video Interviews"
                title="Lorem ipsum dolor sit amet, consectetur"
                videoItems={videoItems}
                cardBgClass="bg-white"
                nameTextClass="text-[var(--button-red)]"
                descriptionTextClass=""
                swiperClassName="ccrc-video-slider"
            />
        </>
    )
}

export default Valueadditionvideointerview