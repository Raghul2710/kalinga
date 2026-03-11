"use client";

import { useState, useEffect } from "react";
import { getSurveyQuestions, submitSurvey } from "@/app/lib/survey";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";

export default function SurveyForm({ courseId, category, onSuccess }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Map of question_id -> rating (1-5)
    const [answers, setAnswers] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        async function loadQuestions() {
            try {
                setLoading(true);
                const res = await getSurveyQuestions(courseId, category);
                setData(res);
            } catch (err) {
                setError("Failed to load survey questions. Please try again later.");
            } finally {
                setLoading(false);
            }
        }
        loadQuestions();
    }, [courseId, category]);

    const handleOptionChange = (questionId, rating) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: rating
        }));
    };

    const handleSubmit = async () => {
        if (!data) return;
        setSubmitError(null);

        // Validate if all questions are answered
        const unanswered = data.questions.filter(q => !answers[q.id]);
        if (unanswered.length > 0) {
            setSubmitError("Please answer all questions before submitting.");
            return;
        }

        try {
            setSubmitting(true);
            const payloadAnswers = Object.entries(answers).map(([qId, rating]) => ({
                question_id: parseInt(qId, 10),
                rating: parseInt(rating, 10)
            }));

            await submitSurvey({
                course_id: courseId,
                category: category,
                answers: payloadAnswers
            });

            setSuccess(true);
            if (onSuccess) {
                setTimeout(onSuccess, 1500);
            }
        } catch (err) {
            setSubmitError("Failed to submit feedback. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <div className="p-8 text-center">Loading survey...</div>;
    if (error) return <div className="p-8 text-center text-red-600">{error}</div>;
    if (!data || !data.questions || data.questions.length === 0) {
        return <div className="p-8 text-center">No survey questions available.</div>;
    }

    if (success) {
        return (
            <div className="p-8 text-center">
                <h3 className="text-xl font-semibold text-green-600 mb-2">Survey submitted successfully</h3>
                <p className="text-gray-600">Thank you for your valuable feedback.</p>
            </div>
        );
    }

    const scaleValues = Object.keys(data.scale).sort((a, b) => b - a);

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6 text-left">
            {data.questions.map((q, idx) => (
                <div key={q.id} className="bg-gray-50 border rounded-xl p-5 shadow-sm">
                    <p className="font-semibold text-gray-800 text-lg mb-4">
                        {idx + 1}. {q.question_text || q.question}
                    </p>
                    <div className="space-y-3">
                        {scaleValues.map(num => (
                            <label
                                key={num}
                                className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${answers[q.id] === Number(num) ? "bg-[var(--button-red)] text-white border-transparent" : "bg-white hover:bg-gray-100"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name={`q-${q.id}`}
                                    value={num}
                                    checked={answers[q.id] === Number(num)}
                                    onChange={() => handleOptionChange(q.id, Number(num))}
                                    className="w-4 h-4 accent-white cursor-pointer mr-3"
                                />
                                <span className="font-medium">
                                    {num} - {data.scale[num]}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            ))}

            {submitError && (
                <div className="mt-4 p-4 bg-red-50 text-red-600 text-sm font-medium rounded-lg border border-red-200">
                    {submitError}
                </div>
            )}

            <div className="pt-4 flex justify-end border-t">
                <GlobalArrowButton
                    className="!bg-[var(--button-red)] !text-white w-full sm:w-auto"
                    onClick={handleSubmit}
                    disabled={submitting}
                >
                    {submitting ? "Submitting..." : "Submit Feedback"}
                </GlobalArrowButton>
            </div>
        </div>
    );
}
