"use client";

import React from "react";
import ImageContent from "@/app/components/ccrc/imagecontent";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import QuickLinks from "@/app/components/general/quick_links";
import MainIntro from "@/app/components/about/main_intro";
import FAQ from "@/app/components/general/faq";
import SectionHeading from "@/app/components/general/SectionHeading";
import WhyStudy from "@/app/components/department/why-study";
import Gallery from "@/app/components/general/gallery";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";
import StudentActivities from "@/app/components/department/student_activities";
import AdmissionCareer from "@/app/components/general/admission_cta";
import CsrForm from "../components/forms/csr-form";
import Link from 'next/link';
import Image from "next/image";

const CSRClient = ({
    Items,
    whyStudyItems,
    aboutQuickLinks,
    targetGroups,
    villagesAdopted,
    FAQItems
}) => {
    const renderCardGrid = (items) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
            {items.map((item, idx) => (
                <div key={idx} className="bg-[var(--card-skin)] p-6 rounded-xl flex flex-col items-center text-center gap-4 hover:shadow-lg transition-all duration-300 group cursor-pointer border border-transparent hover:border-[var(--button-red)]/20">
                    <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <Image
                            src={`https://cdn.kalingauniversity.ac.in/icons/${item.icon}`}
                            alt={item.title}
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain"
                        />
                    </div>
                    <span className="font-semibold text-[var(--foreground)] text-lg leading-tight">
                        {item.title}
                    </span>
                </div>
            ))}
        </div>
    );
    return (
        <div>
            <ImageContent
                hasImage={true}
                readmore={false}
                className="items-center justify-center"
                title="Corporate Social Responsibility (CSR)"
                subtitleclassName="hidden"
                imageSrc="https://cdn.kalingauniversity.ac.in/csr/bhagawan-sri.webp"
                description={
                    <>
                        Companies today understand the importance of giving back...
                    </>
                }
            />
            <MainIntro
                title="About Bhagwan Shri Bala Sai Educational and Charitable Society"
                description={["It is a philanthropic organisation..."]}
                imageUrl="https://cdn.kalingauniversity.ac.in/csr/csr-intro.png"
                imageAlt="Kalinga University campus"
                showKnowMore={false}
                showImage={true}
            />
            <ImageListItem items={Items} description="" imageSrc="https://cdn.kalingauniversity.ac.in/csr/chart-3.webp" title="Objectives of the Organisation" />
            <WhyStudy
                items={whyStudyItems}
                sectionTitle="Our Programs"
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1280: { slidesPerView: 3 },
                }}
            />
            <QuickLinks
                slider={true}
                links={aboutQuickLinks}
                title="CSR at Kalinga University"
                titleClassName="!text-white"
                showReadMore={false}
                description="Corporate Social Responsibility (CSR) at Kalinga University aims to make a positive social and environmental impact..."
            >
                <Link
                    href="https://cdn.kalingauniversity.ac.in/csr/Bhagwan+Sri+Bala+Sai+CSR+Brochure+Modified+-+16+NOV.pdf"
                    target="_blank"
                >
                    <GlobalArrowButton>
                        Click to know more
                    </GlobalArrowButton>
                </Link>
            </QuickLinks>
            <section className="py-16 px-4">
                <div className="container mx-auto text-center">
                    <SectionHeading
                        title="Target Groups"
                        subtitle="Who We Serve"
                        subtitleTextColor="!text-[var(--button-red)]"
                    />
                    {renderCardGrid(targetGroups)}
                </div>
            </section>
            <section className="py-16 px-4 bg-[var(--background)]">
                <div className="container mx-auto text-center">
                    <SectionHeading
                        title="Villages Adopted"
                        subtitle="Community Impact"
                        subtitleTextColor="!text-[var(--button-red)]"
                    />
                    {renderCardGrid(villagesAdopted)}
                </div>
            </section>
            <FAQ
                items={FAQItems}
                title=""
                subtitle=""
            />
            <StudentActivities
                title="Events and Activities"
                subtitle="Experience Campus Life Beyond Academics"
                fallbackToGlobal={true}
            />
            <CsrForm />
            <Gallery title=" Glimpses" paddingClassName="py-16" />
            <AdmissionCareer />
        </div>
    );
};

export default CSRClient;
