import React from 'react';
import SectionHeading from './SectionHeading';

const KeyDates = ({ title = "Key Dates", subtitle = "", dates = [], secondaryText = "", className = "py-16 bg-[var(--background)]" }) => {
    return (
        <section className={className}>
            <div className="container mx-auto px-4">
                <SectionHeading
                    title={title}
                    subtitle={subtitle}
                    titleClassName="text-center md:text-[40px] mb-12"
                />

                <div className="flex flex-wrap justify-center gap-6 lg:gap-8 w-full max-w-7xl mx-auto">
                    {dates.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center flex-1 min-w-[240px] max-w-[300px]">
                            {/* Date Box */}
                            <div className={`w-full rounded-2xl shadow-[0_4px_24px_rgb(0,0,0,0.06)] border p-5 sm:p-6 flex items-center justify-center min-h-[110px] transition-transform hover:-translate-y-1 duration-300 ${item.isPrimary ? 'bg-[var(--button-red)] text-white border-[var(--button-red)]' : 'bg-white text-[var(--foreground)] border-gray-100'}`}>
                                <div className="flex items-start">
                                    <div className="flex items-start">
                                        <span className="text-5xl font-bold font-plus-jakarta-sans tracking-tight leading-none">
                                            {item.day}
                                        </span>
                                        {item.superscript && (
                                            <span className="text-base font-bold ml-0.5" style={{ paddingTop: '4px' }}>
                                                {item.superscript}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex flex-col text-left ml-3 justify-center h-full">
                                        <span className="text-base font-bold uppercase leading-tight tracking-wider">{item.month}</span>
                                        <span className="text-sm font-semibold opacity-90 leading-tight mt-0.5">{item.year}</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Description Below */}
                            <p className="mt-5 font-plus-jakarta-sans text-base font-semibold text-[var(--foreground)] opacity-80 px-2 leading-relaxed">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>

                {secondaryText && (
                    <div className="mt-12 text-center">
                        <span className="inline-block px-8 py-3 bg-[var(--card-skin)] text-[var(--foreground)] font-plus-jakarta-sans font-bold text-lg rounded-full shadow border border-gray-200">
                            {secondaryText}
                        </span>
                    </div>
                )}
            </div>
        </section>
    );
};

export default KeyDates;
