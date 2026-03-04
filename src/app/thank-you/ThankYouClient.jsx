"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import GlobalArrowButton from "../components/general/global-arrow_button";

const ThankYouContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [mounted, setMounted] = useState(false);

    // Get form type from URL params (e.g., ?form=enquiry)
    const formType = searchParams.get("form") || "form";

    // Map form types to friendly names
    const formNames = {
        enquiry: "Enquiry",
        career: "Career Application",
        alumni: "Alumni Registration",
        event: "Event Registration",
        ctcd: "CTCD Application",
        contact: "Contact",
        grievance: "Grievance",
    };

    const formName = formNames[formType] || "Form";

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 flex items-center justify-center py-12 px-4">
            <div
                className={`max-w-2xl w-full text-center transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
            >
                {/* Success Icon with Animation */}
                <div className="mb-8 flex justify-center">
                    <div
                        className={`relative transition-all duration-1000 ${mounted ? "scale-100 rotate-0" : "scale-0 rotate-180"
                            }`}
                    >
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center relative">
                            {/* Animated rings */}
                            <div className="absolute inset-0 rounded-full bg-green-200 animate-ping opacity-20"></div>
                            <div className="absolute inset-0 rounded-full bg-green-300 animate-pulse opacity-30"></div>

                            {/* Checkmark */}
                            <svg
                                className="w-12 h-12 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                    className={`transition-all duration-700 delay-300 ${mounted ? "opacity-100" : "opacity-0"
                                        }`}
                                    style={{
                                        strokeDasharray: 100,
                                        strokeDashoffset: mounted ? 0 : 100,
                                    }}
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Thank You Message */}
                <h1 className="font-stix text-4xl md:text-5xl text-[var(--dark-blue)] mb-4 font-bold">
                    Thank You!
                </h1>

                <p className="text-xl text-gray-700 mb-3">
                    Your {formName} has been submitted successfully.
                </p>

                <p className="text-base text-[var(--light-text-gray)] mb-8 max-w-lg mx-auto leading-relaxed">
                    We appreciate you taking the time to reach out to us. Our team will
                    review your submission and get back to you as soon as possible.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button onClick={() => router.back()} className="inline-block">
                        <GlobalArrowButton
                            variant="white"
                            className="!bg-gray-100 !text-gray-700 border-2 border-gray-300 hover:!bg-gray-200 transition-colors"
                        >
                            Go Back
                        </GlobalArrowButton>
                    </button>

                    <Link href="/">
                        <GlobalArrowButton className="lg:flex hidden">
                            <span>Back to Home</span>
                        </GlobalArrowButton>
                    </Link>
                </div>

                {/* Additional Help */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-3">Need immediate assistance?</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                        <a
                            href="tel:+917714973111"
                            className="flex items-center gap-2 text-[var(--button-red)] hover:underline"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            Call Us: +91 771 497 3111
                        </a>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <a
                            href="mailto:info@kalingauniversity.ac.in"
                            className="flex items-center gap-2 text-[var(--button-red)] hover:underline"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            Email: info@kalingauniversity.ac.in
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

const ThankYouClient = () => {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <ThankYouContent />
        </Suspense>
    )
}

export default ThankYouClient;
