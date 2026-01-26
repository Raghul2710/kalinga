import React from 'react'
import Newraipurvideos from '../about-raipur/newraipurvideos';

function Nccvideos() {
    const NccVideos = [
        {
            id: 1,
            title: "From NCC Cadet to Future Forensic Scientist",
            videoUrl: "https://www.youtube.com/watch?v=yL5Y_AaV8SQ",
        },
        {
            id: 2,
            title: "Nafsiya's Amazing Cadet Life Story ",
            videoUrl: "https://www.youtube.com/watch?v=GS7JVHCEZ1c",
        },
        {
            id: 3,
            title: "Sephali’s Journey as CLCP NCC",
            videoUrl: "https://www.youtube.com/watch?v=kCgxdVw37Qo",
        },
        {
            id: 4,
            title: "Jeenat’s NCC Story!",
            videoUrl: "https://www.youtube.com/watch?v=zTusrZ6YzWo",
        },
        {
            id: 5,
            title: "Saniya’s Story Will Leave You Speechless!",
            videoUrl: "https://www.youtube.com/watch?v=-iQ_mUdlQ4c",
        },
        {
            id: 6,
            title: "Kajal Pandey Shares her NCC journey",
            videoUrl: "https://www.youtube.com/watch?v=TrBZ8jyieqw",
        },
    ];

    return (
        <div>
            <Newraipurvideos
                title="Stories from the NCC"
                description=""
                videos={NccVideos}
                backgroundColor="bg-[var(--light-gray)]"
                showPagination={true}
                showNavigation={true}
            />
        </div>
    )
}

export default Nccvideos