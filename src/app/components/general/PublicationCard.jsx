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
                    <div className="flex flex-col h-full justify-between w-full overflow-hidden">
                        <div>
                            <h3 className="font-stix text-[#a34439] text-base md:text-lg lg:text-xl font-medium leading-tight font-plus-jakarta-sans truncate" title={data.title}>
                                {data.title}
                                <div className="w-16 h-px bg-gray-300 my-3"></div>
                            </h3>

                            <div className="space-y-1">
                                {(() => {
                                    const authors = data.author
                                        ? [data.author]
                                        : [data.author_1, data.author_2, data.author_3, data.author_4].filter(Boolean);

                                    const authorText =
                                        authors.length > 1
                                            ? authors.slice(0, -1).join(", ") + " & " + authors.slice(-1)
                                            : authors[0] || data.subtitle || "";

                                    const designations = data.designation
                                        ? [data.designation]
                                        : [
                                            data.designation_1,
                                            data.designation_2,
                                            data.designation_3,
                                            data.designation_4,
                                        ].filter(Boolean);

                                    const uniqueDesignations = [...new Set(designations)];
                                    const designationText = uniqueDesignations.join(", ");

                                    return (
                                        <>
                                            <p className="font-stix text-lg md:text-xl font-medium text-gray-800 line-clamp-2" title={authorText}>
                                                {authorText ? (authors.length > 0 || data.author ? `By ${authorText}` : authorText) : ""}
                                            </p>
                                            {designationText && (
                                                <p className="text-xs md:text-sm">
                                                    {designationText}
                                                </p>
                                            )}
                                        </>
                                    );
                                })()}
                                {(data.faculty || data.department) && (
                                    <p className="text-xs tracking-tight mt-1 truncate w-full" title={data.faculty || data.department}>
                                        {data.faculty || data.department}
                                    </p>
                                )}
                            </div>
                        </div>

                        {data.exploreLinkText && data.onExplore && (
                            <div className="mt-4 mt-auto pt-2">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        data.onExplore(data);
                                    }}
                                    className="px-4 py-2 bg-[var(--button-red)] text-white text-sm font-medium rounded-lg hover:bg-[var(--dark-orange-red)] transition-colors w-max"
                                >
                                    {data.exploreLinkText}
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PublicationCard;
