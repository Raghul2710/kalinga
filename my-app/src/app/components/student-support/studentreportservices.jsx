import React from "react";
import ImageListItem from "../ccrc/imagelistitem";

function Studentreportservices() {
    const Items = [
        { id: 1, text: "Get better career opportunities" },
        { id: 2, text: "Choose from different academic programs" },
        { id: 3, text: "Become job-ready" },
        { id: 4, text: "Improve confidence level" },
        { id: 5, text: "Build a resume with additional skills and an internship" },
        { id: 6, text: "Enjoy a vibrant campus life" },
        { id: 7, text: "Receive guidance and mentorship" },
        { id: 8, text: "Explore beyond traditional classroom learning" },
    ];

    return (
        <section className="py-12 md:py-16 px-4 md:px-6">
            <ImageListItem
                items={Items}
                imageSrc="https://cdn.kalingauniversity.ac.in/ccrc/ccrc.webp"
                title="Our services can help you:"
                description=""
            />
        </section>
    );
}

export default Studentreportservices;
