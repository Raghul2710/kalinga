"use client";

import Link from "next/link";
import Image from "next/image";
import { useChatbot } from "@/app/components/layout/ChatbotContext";

const quickLinks = [
    {
        title: "Events",
        href: "/news-and-events",
        icon: "https://cdn.kalingauniversity.ac.in/icons/Flagship+Events.svg"
    },
    {
        title: "Campus Life",
        href: "/campuslife",
        icon: "https://cdn.kalingauniversity.ac.in/icons/campus+life.svg"
    },
    {
        title: "International",
        href: "/international-students",
        icon: "https://cdn.kalingauniversity.ac.in/icons/international.svg"
    },
    {
        title: "Chat with Kalinga AI",
        href: "#",
        icon: "https://cdn.kalingauniversity.ac.in/icons/chat+with+students.svg",
        isChatbot: true
    },
    {
        title: "Admission",
        href: "/admissions",
        icon: "https://cdn.kalingauniversity.ac.in/icons/admissions.svg"
    },
    {
        title: "Facilities",
        href: "/campus-facilities",
        icon: "https://cdn.kalingauniversity.ac.in/icons/facility-management.svg"
    },
];

export default function QuickLinks() {
    const { openChat } = useChatbot();

    return (
        <section suppressHydrationWarning={true} className="container md:-mt-16 mt-6 sm:-mt-20 md:-mt-35 mx-auto px-6 py-6 sm:py-8 lg:py-6 bg-[var(--dark-blue)]/80 z-2 backdrop-blur-xs relative rounded-xl sm:rounded-2xl lg:rounded-4xl max-w-5xl">
            <div suppressHydrationWarning={true} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
                {quickLinks.map((link) => {
                    if (link.isChatbot) {
                        return (
                            <button
                                key={link.title}
                                onClick={(e) => {
                                    e.preventDefault();
                                    openChat();
                                }}
                                className="p-3 sm:p-4 md:p-5 bg-white rounded-lg hover:shadow-xl hover:-translate-y-5 hover:bg-[var(--card-skin)] transition-all duration-300 flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 min-h-[100px] sm:min-h-[120px] w-full text-left"
                            >
                                <div suppressHydrationWarning={true} className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex-shrink-0">
                                    <Image
                                        src={link.icon}
                                        alt={link.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-[var(--text-gray)] text-center leading-tight">
                                    {link.title}
                                </p>
                            </button>
                        );
                    }

                    return (
                        <Link
                            key={link.title}
                            href={link.href}
                            className="p-3 sm:p-4 md:p-5 bg-white rounded-lg hover:shadow-xl hover:-translate-y-5 hover:bg-[var(--card-skin)] transition-all duration-300 flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 min-h-[100px] sm:min-h-[120px]"
                        >
                            <div suppressHydrationWarning={true} className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex-shrink-0">
                                <Image
                                    src={link.icon}
                                    alt={link.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-[var(--text-gray)] text-center leading-tight">
                                {link.title}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
