"use client";

import { useState, useEffect } from "react";
import { getSurveyQuestions, submitSurvey } from "@/app/lib/survey";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";
import { motion, AnimatePresence } from "framer-motion";

export default function SurveyForm({ courseId, category, onSuccess }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Map of question_id -> value (rating number or text string)
    const [answers, setAnswers] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        async function loadQuestions() {
            try {
                setLoading(true);
                setError(null);
                setSuccess(false);
                setData(null); // Clear old data to prevent showing duplicates/stale content while loading
                
                const res = await getSurveyQuestions(courseId, category);
                console.log(`[SurveyForm] Fetched questions from API:`, res);
                if (res && res.questions) {
                    const seenText = new Set();
                    const uniqueQuestions = [];
                    
                    res.questions.forEach(q => {
                        // Use text-only key to deduplicate identical questions with different IDs
                        const text = (q.question_text || q.question || "").trim().toLowerCase();
                        if (!seenText.has(text) && text !== "") {
                            seenText.add(text);
                            uniqueQuestions.push(q);
                        }
                    });
                    res.questions = uniqueQuestions;
                }
                setData(res);
            } catch (err) {
                setError("Failed to load survey questions. Please try again later.");
            } finally {
                setLoading(false);
            }
        }
        loadQuestions();
    }, [courseId, category]);

    const handleValueChange = (questionId, value) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: value
        }));
    };

    const handleSubmit = async () => {
        if (!data) return;
        setSubmitError(null);

        // Validate if all required questions are answered
        const unansweredRequired = data.questions.filter(q => q.is_required && !answers[q.id]);
        if (unansweredRequired.length > 0) {
            setSubmitError("Please answer all required questions before submitting.");
            return;
        }

        try {
            setSubmitting(true);
            
            // Map all questions to ensure the backend receives the full set of responses
            const payloadAnswers = data.questions.map(q => {
                const value = answers[q.id];
                const isRating = q.question_type === 'rating';
                
                return {
                    question_id: q.id,
                    rating: isRating ? (value ? parseInt(value, 10) : null) : null,
                    answer_text: !isRating ? (value || "") : null
                };
            });

            await submitSurvey({
                course_id: String(courseId),
                category: category,
                answers: payloadAnswers
            });

            setSuccess(true);
            console.log(`[SurveyForm] Submission successful for ${category}. Payload:`, {
                course_id: String(courseId),
                category: category,
                answers: payloadAnswers
            });
            if (onSuccess) {
                setTimeout(onSuccess, 2000);
            }
        } catch (err) {
            setSubmitError("Failed to submit feedback. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return (
        <div className="p-12 text-center flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-[var(--button-red)] rounded-full animate-spin"></div>
            <p className="text-gray-500 font-medium">Loading survey questions...</p>
        </div>
    );

    if (error) return (
        <div className="p-12 text-center text-red-600 bg-red-50 rounded-2xl border border-red-100 mx-4">
            <p className="font-semibold">{error}</p>
        </div>
    );

    if (!data || !data.questions || data.questions.length === 0) {
        return (
            <div className="p-12 text-center text-gray-500 bg-gray-50 rounded-2xl border border-gray-100 mx-4">
                No survey questions available for this category.
            </div>
        );
    }

    if (success) {
        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center"
            >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                <p className="text-gray-600 text-lg">Your feedback has been submitted successfully.</p>
            </motion.div>
        );
    }

    // Logic to split questions into sections for better alignment with templates
    const isTopField = (text) => {
        const t = text.toLowerCase();
        return (
            t.includes("name") || 
            t.includes("register") || 
            t.includes("mobile") || 
            t.includes("email") || 
            t.includes("year") || 
            t.includes("programme") || 
            t.includes("program") || 
            t.includes("course") ||
            t.includes("designation") ||
            t.includes("profile") ||
            t.includes("id")
        ) && !t.includes("syllabus") && !t.includes("curriculum");
    };

    const isBottomField = (text) => {
        const t = text.toLowerCase();
        return t.includes("suggestion") || t.includes("remark") || t.includes("comment") || t.includes("improve");
    };

    const topQuestions = data.questions.filter(q => q.question_type !== 'rating' && isTopField(q.question_text || q.question));
    const bottomQuestions = data.questions.filter(q => q.question_type !== 'rating' && isBottomField(q.question_text || q.question));
    const middleQuestions = data.questions.filter(q => 
        !topQuestions.find(tq => tq.id === q.id) && 
        !bottomQuestions.find(bq => bq.id === q.id)
    );

    const renderQuestion = (q, index, showNumber = true) => {
        const questionText = q.question_text || q.question;
        const isRequired = q.is_required;

        return (
            <div key={q.id} className="group transition-all duration-300">
                <div className="flex justify-between items-start mb-3">
                    <p className="font-semibold text-gray-800 leading-tight">
                        {showNumber && <span className="text-[var(--button-red)] mr-2">{index}.</span>}
                        {questionText}
                        {isRequired && <span className="text-red-500 ml-1">*</span>}
                    </p>
                </div>

                {q.question_type === 'rating' ? (
                    <div className="grid grid-cols-5 gap-2 sm:gap-4">
                        {Object.keys(data.scale).sort((a, b) => a - b).map(num => (
                            <button
                                key={num}
                                type="button"
                                onClick={() => handleValueChange(q.id, num)}
                                className={`flex flex-col items-center justify-center p-2 sm:p-3 border-2 rounded-xl transition-all duration-200 ${
                                    answers[q.id] == num 
                                    ? "bg-[var(--button-red)] border-[var(--button-red)] text-white shadow-md scale-[1.02]" 
                                    : "bg-white border-gray-100 text-gray-600 hover:border-gray-200 hover:bg-gray-50"
                                }`}
                            >
                                <span className="text-lg sm:text-xl font-bold">{num}</span>
                                <span className={`text-[10px] uppercase font-bold text-center leading-tight mt-1 ${answers[q.id] == num ? "text-white/80" : "text-gray-400"}`}>
                                    {data.scale[num]}
                                </span>
                            </button>
                        ))}
                    </div>
                ) : q.question_type === 'textarea' ? (
                    <textarea
                        className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-[var(--button-red)] focus:ring-0 outline-none transition-all placeholder:text-gray-300 min-h-[120px]"
                        placeholder={`Enter ${questionText.replace(':', '').trim()}...`}
                        value={answers[q.id] || ""}
                        onChange={(e) => handleValueChange(q.id, e.target.value)}
                    />
                ) : (
                    <input
                        type="text"
                        className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-[var(--button-red)] focus:ring-0 outline-none transition-all placeholder:text-gray-300"
                        placeholder={`Enter ${questionText.replace(':', '').trim()}...`}
                        value={answers[q.id] || ""}
                        onChange={(e) => handleValueChange(q.id, e.target.value)}
                    />
                )}
            </div>
        );
    };

    const scaleLabels = Object.entries(data.scale).sort((a, b) => b[0] - a[0]);

    return (
        <div className="w-full space-y-8 text-left pb-4 px-1">
            {/* Top Section - Profile/Header Info */}
            {topQuestions.length > 0 && (
                <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-end shadow-inner">
                    {topQuestions.map((q) => (
                        <div key={q.id}>
                            {renderQuestion(q, 0, false)}
                        </div>
                    ))}
                </div>
            )}

            {/* Rating Section Legend */}
            {middleQuestions.some(q => q.question_type === 'rating') && (
                <div className="bg-red-50/50 border border-red-100 rounded-2xl p-4 sm:p-6 text-center shadow-sm">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        {scaleLabels.map(([val, label]) => (
                            <div key={val} className="flex items-center gap-2">
                                <span className="font-bold text-[var(--button-red)]">{val}-</span>
                                <span className="text-sm font-semibold text-gray-700">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Main Questions Section */}
            <div className="space-y-10 px-2 sm:px-4">
                {middleQuestions.map((q, idx) => renderQuestion(q, idx + 1))}
            </div>

            {/* Suggestions Section */}
            {bottomQuestions.length > 0 && (
                <div className="pt-4 space-y-8 px-2 sm:px-4">
                    {bottomQuestions.map((q, idx) => renderQuestion(q, middleQuestions.length + idx + 1))}
                </div>
            )}

            <AnimatePresence>
                {submitError && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-4 bg-red-50 text-red-600 text-sm font-bold rounded-xl border border-red-100 flex items-center gap-3"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {submitError}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="pt-10 flex flex-col sm:flex-row gap-4 justify-between items-center border-t border-gray-100">
                <p className="text-xs text-gray-400 font-medium italic">
                    All fields marked with <span className="text-red-500">*</span> are mandatory for submission.
                </p>
                <GlobalArrowButton
                    className="!bg-[var(--button-red)] !text-white w-full sm:w-auto px-10 h-14"
                    onClick={handleSubmit}
                    disabled={submitting}
                >
                    {submitting ? "SUBMITTING..." : "SUBMIT FEEDBACK"}
                </GlobalArrowButton>
            </div>
        </div>
    );
}
