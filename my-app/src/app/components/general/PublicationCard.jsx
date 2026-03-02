"use client";
import React from "react";

const PublicationCard = ({ data, className = "" }) => {
    return (
        <div className={`rounded-xl p-4 flex gap-5 hover:shadow-lg transition-all duration-300 flex-wrap md:flex-nowrap h-full ${className || "bg-[#eef2f5]"}`}>
            {/* Left side: Image */}
            <div className="w-full md:w-2/5 flex-shrink-0 max-h-52 overflow-hidden rounded-lg shadow-sm border border-black/5">
                <img
                    src={data.img || data.imageSrc}
                    alt={data.title || data.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right side: Metadata */}
            <div className="md:w-3/5 flex flex-col py-1 justify-around">
                {data.variant === "achievement" ? (
                    <>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl md:text-2xl text-black leading-tight font-plus-jakarta-sans">
                                    {data.name}
                                </h3>
                                <div className="w-full h-px bg-gray-300 my-4"></div>
                                <p className="text-medium text-black font-medium">
                                    {data.degree}
                                </p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-sm text-gray-600">
                                    {data.status}
                                </p>
                                <p className="text-2xl font-medium text-black uppercase">
                                    {data.badge}
                                </p>
                                <p className="text-base text-black">
                                    {data.exam}
                                </p>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h3 className="font-stix text-[#a34439] text-base md:text-lg lg:text-xl font-medium leading-tight font-plus-jakarta-sans">
                            {data.title}
                            <div className="w-16 h-px bg-gray-300 my-3"></div>
                        </h3>

                        <div className="space-y-1">
                            <p className="font-stix text-lg md:text-xl font-medium text-gray-800">
                                {data.author ? `By ${data.author}` : data.subtitle}
                            </p>
                            <p className="text-xs md:text-sm">
                                {data.designation}
                            </p>
                            <p className="text-xs tracking-tight mt-1">
                                {data.faculty || data.department}
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default PublicationCard;
