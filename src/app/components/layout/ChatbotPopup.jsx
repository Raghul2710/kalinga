"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useChatbot } from "./ChatbotContext";

export default function ChatbotPopup() {
    const { isOpen, toggleChat } = useChatbot();
    const [isExpanded, setIsExpanded] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    // Show tooltip after a slight delay on load
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) setShowTooltip(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, [isOpen]);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={`fixed z-[99999] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col font-plus-jakarta-sans ${isExpanded
                            ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] h-[95vh] md:w-[850px] md:h-[850px] max-w-[95vw] max-h-[95vh]"
                            : "bottom-24 left-4 md:left-8 w-[380px] md:w-[450px] h-[720px] md:h-[780px] max-h-[90vh] max-w-[calc(100vw-2rem)]"
                            } transition-all duration-300`}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[var(--dark-blue)] via-[var(--dark-blue)] to-blue-800 text-white p-4 md:p-5 flex justify-between items-center shadow-lg shrink-0 relative overflow-hidden">
                            {/* Decorative background pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
                            </div>

                            <div className="flex items-center gap-3 relative z-10">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--dark-orange-red)] to-[var(--button-red)] flex items-center justify-center border-2 border-white shadow-lg">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                        </svg>
                                    </div>
                                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 border-2 border-[var(--dark-blue)] rounded-full animate-pulse shadow-sm"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">Kalinga Assistant</h3>
                                    <p className="text-xs text-blue-100 flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                                        Online - Ready to help
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 relative z-10">
                                {/* Expand/Collapse Button */}
                                <button
                                    onClick={toggleExpand}
                                    className="hover:bg-white/10 rounded-lg p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30 group"
                                    aria-label={isExpanded ? "Minimize" : "Expand"}
                                    title={isExpanded ? "Minimize" : "Expand to fullscreen"}
                                >
                                    {isExpanded ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="opacity-80 group-hover:opacity-100 transition-opacity"
                                        >
                                            <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="opacity-80 group-hover:opacity-100 transition-opacity"
                                        >
                                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                                        </svg>
                                    )}
                                </button>

                                {/* Close Button */}
                                <button
                                    onClick={toggleChat}
                                    className="hover:bg-white/10 rounded-lg p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30 group"
                                    aria-label="Close Chat"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-80 group-hover:opacity-100 transition-opacity"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Iframe Content */}
                        <div className="flex-1 bg-gradient-to-br from-gray-50 to-white relative w-full h-full overflow-hidden">
                            {/* Loading skeleton (optional) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-orange-50/30 animate-pulse pointer-events-none"></div>

                            <iframe
                                src="https://kalinga.dupebox.com/chatbot_v1/"
                                className="w-full h-full border-none relative z-10"
                                title="Kalinga University Chatbot"
                            />
                        </div>

                        {/* Footer Branding */}
                        <div className="py-3 bg-gradient-to-r from-gray-50 via-white to-gray-50 text-[10px] text-center text-gray-400 border-t border-gray-100 flex items-center justify-center gap-2 shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-[var(--dark-orange-red)]"
                            >
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                            <span className="font-medium">Powered by Xtracut</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button & Tooltip Container */}
            <div className="fixed bottom-6 left-4 md:left-8 z-[9999] flex flex-col items-end gap-3 pointer-events-none" suppressHydrationWarning={true}>
                {/* Tooltip / Call to Action */}
                {/* <AnimatePresence>
                    {showTooltip && !isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 10, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 10, scale: 0.9 }}
                            className="relative bg-white px-5 py-3.5 rounded-2xl shadow-2xl border border-gray-100 mb-1 -ml-2 pointer-events-auto max-w-[220px]"
                        >
                            <div className="text-sm font-semibold text-gray-800 mb-1">
                                👋 Hi there!
                            </div>
                            <div className="text-xs text-gray-600">
                                Need help with admissions or courses?
                            </div>
                            <div className="absolute -bottom-1.5 right-8 w-4 h-4 bg-white border-b border-r border-gray-100 rotate-45 transform"></div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowTooltip(false);
                                }}
                                className="absolute -top-1.5 -right-1.5 bg-gray-800 hover:bg-gray-900 text-white rounded-full p-1 shadow-md transition-colors"
                            >
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence> */}

                {/* Floating Action Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleChat}
                    className={`pointer-events-auto w-16 h-16 md:w-[70px] md:h-[70px] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 border-4 border-white overflow-hidden relative group ${isOpen
                        ? "bg-gradient-to-tr from-gray-700 to-gray-800"
                        : "bg-gradient-to-tr from-[var(--button-red)] via-[var(--dark-orange-red)] to-[var(--dark-orange-red-light)]"
                        }`}
                    aria-label="Toggle Chat"
                >
                    {/* Icon Animation Wrapper */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        <motion.div
                            initial={false}
                            animate={{
                                rotate: isOpen ? 90 : 0,
                                opacity: isOpen ? 0 : 1,
                                scale: isOpen ? 0.5 : 1,
                            }}
                            transition={{ duration: 0.25 }}
                            className="absolute text-white"
                        >
                            {/* Chat Bubble Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg>
                        </motion.div>

                        <motion.div
                            initial={false}
                            animate={{
                                rotate: isOpen ? 0 : -90,
                                opacity: isOpen ? 1 : 0,
                                scale: isOpen ? 1 : 0.5,
                            }}
                            transition={{ duration: 0.25 }}
                            className="absolute text-white"
                        >
                            {/* Close X Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </motion.div>
                    </div>

                    {/* Subtle Glow Ring */}
                    {!isOpen && (
                        <>
                            <span className="absolute inset-0 rounded-full animate-ping bg-[var(--dark-orange-red)] opacity-20"></span>
                            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--button-red)] to-transparent opacity-50 group-hover:opacity-70 transition-opacity"></span>
                        </>
                    )}
                </motion.button>
            </div>
        </>
    );
}
