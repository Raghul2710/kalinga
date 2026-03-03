"use client";

import GlobalArrowButton from "../components/general/global-arrow_button";



export default function Page() {
    return (
        <section className="min-h-[70vh] mb-10 flex items-center justify-center bg-white py-16">
            <div className="flex flex-col items-center text-center gap-6">

                {/* Clickable Image */}
                <a
                    href="https://voterportal.eci.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <img
                        src="https://cdn.kalingauniversity.ac.in/Voter-Portal/chart.png"
                        alt="Voter Portal"
                        className="
    w-[360px] h-[360px]
    md:w-[1300px] md:h-auto
    object-contain
    rounded-xl shadow-md
    transition-transform duration-300
    group-hover:scale-105
  "
                    />


                </a>

                {/* Register Button */}
                <GlobalArrowButton
                    className="px-8 py-3 text-base"
                    arrowClassName="!px-2 !py-1"
                    arrowSize={24}
                    onClick={() => window.open("https://voterportal.eci.gov.in/", "_blank", "noopener,noreferrer")}
                >
                    Apply For Voter Portal
                </GlobalArrowButton>

            </div>
        </section>
    );
}