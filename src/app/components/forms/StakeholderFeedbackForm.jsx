"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitSurvey } from "@/app/lib/survey";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";

const LIKERT_OPTIONS = [
    { label: "Strongly Agree", value: "5" },
    { label: "Agree", value: "4" },
    { label: "Neutral", value: "3" },
    { label: "Disagree", value: "2" },
    { label: "Strongly Disagree", value: "1" }
];

const ROLES = [
    "Alumni",
    "Employer",
    "Industry Expert"
];

const MISSION_POINTS = [
    "M1: To equip students with essential skills by providing exposure to cutting-edge knowledge through innovative teaching and impactful research.",
    "M2: To foster entrepreneurship, nurture creativity, and promote ethical, values-based education.",
    "M3: To enhance competitiveness and create ample opportunities for rewarding managerial careers.",
    "M4: To impart the knowledge, skills, and mindset required for effective managerial roles while instilling a strong sense of responsibility and corporate citizenship."
];

const PEO_POINTS = [
    "PEO 1: Apply business and management principles in practical scenarios, including Start-up and Entrepreneurship initiatives.",
    "PEO 2: Demonstrate analytical reasoning and innovative thinking to develop feasible, optimal solutions when addressing professional challenges.",
    "PEO 3: Exhibit strong ethical values, integrity, and a high level of commitment in both personal and professional spheres."
];

const PSO_POINTS = [
    "PSO1: Ability to apply specialized knowledge from core domains such as Marketing, Finance, Human Resources, and Operations to solve business problems effectively.",
    "PSO2: Exhibit strategic thinking, data-driven analysis, and problem-solving skills to make informed and effective business decisions in dynamic environments.",
    "PSO3: Ability to identify business opportunities, create innovative solutions, and demonstrate entrepreneurial skills to launch or scale ventures with sustainability in focus."
];

export default function StakeholderFeedbackForm({ courseId, onSuccess }) {
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        organization: "",
        contactInfo: "",
        // Section B: Vision
        b1: "",
        b2: "",
        b3: "",
        b4_suggestions: "",
        // Section C: Mission
        c1: "",
        c2: "",
        c3: "",
        c4_suggestions: "",
        // Section D: PEOs
        d1: "",
        d2: "",
        d3: "",
        d4_suggestions: "",
        // Section E: PSOs
        e1: "",
        e2: "",
        e3: "",
        e4_suggestions: "",
        // Section F: Overall
        f1: "",
        f2_comments: "",
        signature: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (error) setError("");
    };

    const handleRoleChange = (role) => {
        setFormData(prev => ({ ...prev, role }));
        if (error) setError("");
    };

    const handleLikertChange = (q, value) => {
        setFormData(prev => ({ ...prev, [q]: value }));
        if (error) setError("");
    };

    const validateForm = () => {
        const requiredFields = [
            "name", "role", "contactInfo",
            "b1", "b2", "b3",
            "c1", "c2", "c3",
            "d1", "d2", "d3",
            "e1", "e2", "e3",
            "f1",
            "signature"
        ];

        const missingFields = requiredFields.filter(field => !formData[field]);
        if (missingFields.length > 0) {
            setError("Please fill in all required fields and sign the form.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        setError("");

        try {
            // Map the flat formData to the structured answers payload for the dynamic API
            const answers = Object.entries(formData)
                .filter(([key, value]) => value !== "" && key !== 'signature') // Skip empty fields and non-question fields
                .map(([key, value]) => {
                    const isLikert = /^[bcdef]1$|^b[23]$|^c[23]$|^d[23]$|^e[23]$/.test(key);
                    return {
                        question_id: key, // Using the field key as question_id identifier
                        rating: isLikert ? parseInt(value, 10) : null,
                        answer_text: !isLikert ? value : null
                    };
                });

            // Add the signature as a special field
            answers.push({
                question_id: "signature",
                rating: null,
                answer_text: formData.signature
            });

            await submitSurvey({
                course_id: String(courseId),
                category: "stakeholder-feedback",
                answers: answers
            });

            setIsSubmitted(true);
            if (onSuccess) {
                setTimeout(onSuccess, 2000);
            }
        } catch (err) {
            setError("Failed to submit feedback. Please try again.");
            console.error("Submission Error:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full py-16 text-center bg-white rounded-2xl"
            >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 font-stix">Thank You!</h3>
                <p className="text-gray-600 text-base mb-8 px-4 text-pretty font-plus-jakarta-sans">Your expertise and feedback are invaluable to our department's growth.</p>
                <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-[var(--button-red)] text-sm font-bold hover:underline"
                >
                    Submit another response
                </button>
            </motion.div>
        );
    }

    return (
        <div className="bg-white rounded-2xl overflow-hidden max-h-[70vh] overflow-y-auto custom-scrollbar md:px-2">
            <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-12">
                {/* Section A: Stakeholder Details */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                        <span className="bg-[var(--button-red)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">A</span>
                        <h3 className="text-xl font-bold text-gray-800 font-stix">Stakeholder Details</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Full Name *</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[var(--button-red)] focus:bg-white outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Organization / Institution</label>
                            <input 
                                type="text" 
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                placeholder="Enter your org or institution"
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[var(--button-red)] focus:bg-white outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Contact Number / Email ID *</label>
                            <input 
                                type="text" 
                                name="contactInfo"
                                value={formData.contactInfo}
                                onChange={handleChange}
                                placeholder="Enter your contact details"
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[var(--button-red)] focus:bg-white outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Designation / Role *</label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {ROLES.map((role) => (
                                <button
                                    key={role}
                                    type="button"
                                    onClick={() => handleRoleChange(role)}
                                    className={`px-4 py-2.5 rounded-xl border-2 transition-all text-[10px] font-bold text-left uppercase tracking-tight ${
                                        formData.role === role 
                                        ? "border-[var(--button-red)] bg-red-50 text-[var(--button-red)]" 
                                        : "border-gray-100 bg-gray-50 text-gray-400 hover:border-gray-200"
                                    }`}
                                >
                                    {role}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section B: Vision */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                        <span className="bg-[var(--button-red)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">B</span>
                        <h3 className="text-xl font-bold text-gray-800 font-stix">Feedback on Vision Statement</h3>
                    </div>

                    <div className="p-5 bg-blue-50 border-l-4 border-[var(--dark-blue)] rounded-r-xl">
                        <h4 className="text-xs font-bold text-[var(--dark-blue)] uppercase tracking-widest mb-2 font-plus-jakarta-sans">Vision of the Department:</h4>
                        <p className="text-sm italic text-gray-700 leading-relaxed font-serif">
                            “To educate and empower young business leaders through innovative teaching, hands-on training, and impactful research, fostering successful managers and entrepreneurs with a strong sense of social responsibility.”
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            { id: "b1", label: "1. Do you think the Vision Statement is clear and easy to understand?" },
                            { id: "b2", label: "2. Does the Vision Statement align with current industrial, professional, and social requirements?" },
                            { id: "b3", label: "3. Does the Vision Statement inspire long-term growth and excellence?" }
                        ].map((q) => (
                            <LikertQuestion 
                                key={q.id}
                                id={q.id}
                                label={q.label}
                                value={formData[q.id]}
                                onChange={handleLikertChange}
                            />
                        ))}
                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">4. Suggestions for improvement (if any):</label>
                            <textarea 
                                name="b4_suggestions"
                                value={formData.b4_suggestions}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[var(--button-red)] focus:bg-white outline-none transition-all resize-none text-sm"
                                rows={2}
                            />
                        </div>
                    </div>
                </div>

                {/* Section C: Mission */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                        <span className="bg-[var(--button-red)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">C</span>
                        <h3 className="text-xl font-bold text-gray-800 font-stix">Feedback on Mission Statement</h3>
                    </div>

                    <div className="p-5 bg-blue-50 border-l-4 border-[var(--dark-blue)] rounded-r-xl space-y-3">
                        <h4 className="text-xs font-bold text-[var(--dark-blue)] uppercase tracking-widest font-plus-jakarta-sans">Mission of the Department:</h4>
                        <ul className="text-xs text-gray-700 space-y-2 font-serif list-disc pl-4 italic">
                            {MISSION_POINTS.map((m, i) => <li key={i}>{m}</li>)}
                        </ul>
                    </div>

                    <div className="space-y-8">
                        {[
                            { id: "c1", label: "1. Is the Mission Statement aligned with the Vision of the Department?" },
                            { id: "c2", label: "2. Does the Mission Statement adequately reflect teaching, research, and community engagement?" },
                            { id: "c3", label: "3. Does it emphasize employability, entrepreneurship, and ethical values?" }
                        ].map((q) => (
                            <LikertQuestion 
                                key={q.id}
                                id={q.id}
                                label={q.label}
                                value={formData[q.id]}
                                onChange={handleLikertChange}
                            />
                        ))}
                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">4. Suggestions for improvement (if any):</label>
                            <textarea 
                                name="c4_suggestions"
                                value={formData.c4_suggestions}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[var(--button-red)] focus:bg-white outline-none transition-all resize-none text-sm"
                                rows={3}
                            />
                        </div>
                    </div>
                </div>

                {/* Section D: PEOs */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                        <span className="bg-[var(--button-red)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">D</span>
                        <h3 className="text-xl font-bold text-gray-800 font-stix">Feedback on PEOs</h3>
                    </div>

                    <div className="p-5 bg-blue-50 border-l-4 border-[var(--dark-blue)] rounded-r-xl space-y-3">
                        <h4 className="text-xs font-bold text-[var(--dark-blue)] uppercase tracking-widest font-plus-jakarta-sans">PEOs of the Department:</h4>
                        <ul className="text-xs text-gray-700 space-y-2 font-serif list-disc pl-4 italic">
                            {PEO_POINTS.map((p, i) => <li key={i}>{p}</li>)}
                        </ul>
                    </div>

                    <div className="space-y-8">
                        {[
                            { id: "d1", label: "1. Are the PEOs clearly stated and easy to understand?" },
                            { id: "d2", label: "2. Do the PEOs reflect the expected professional and academic growth of graduates?" },
                            { id: "d3", label: "3. Are the PEOs aligned with industry and societal needs?" }
                        ].map((q) => (
                            <LikertQuestion 
                                key={q.id}
                                id={q.id}
                                label={q.label}
                                value={formData[q.id]}
                                onChange={handleLikertChange}
                            />
                        ))}
                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">4. Suggestions for improvement (if any):</label>
                            <textarea 
                                name="d4_suggestions"
                                value={formData.d4_suggestions}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[var(--button-red)] focus:bg-white outline-none transition-all resize-none text-sm"
                                rows={3}
                            />
                        </div>
                    </div>
                </div>

                {/* Section E: PSOs */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                        <span className="bg-[var(--button-red)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">E</span>
                        <h3 className="text-xl font-bold text-gray-800 font-stix">Feedback on PSOs</h3>
                    </div>

                    <div className="p-5 bg-blue-50 border-l-4 border-[var(--dark-blue)] rounded-r-xl space-y-3">
                        <h4 className="text-xs font-bold text-[var(--dark-blue)] uppercase tracking-widest font-plus-jakarta-sans">PSOs of the Department:</h4>
                        <ul className="text-xs text-gray-700 space-y-2 font-serif list-disc pl-4 italic">
                            {PSO_POINTS.map((p, i) => <li key={i}>{p}</li>)}
                        </ul>
                    </div>

                    <div className="space-y-8">
                        {[
                            { id: "e1", label: "1. Are the PSOs relevant to current business and management practices?" },
                            { id: "e2", label: "2. Do the PSOs reflect skills and competencies expected from management graduates?" },
                            { id: "e3", label: "3. Are the PSOs aligned with Programme Outcomes?" }
                        ].map((q) => (
                            <LikertQuestion 
                                key={q.id}
                                id={q.id}
                                label={q.label}
                                value={formData[q.id]}
                                onChange={handleLikertChange}
                            />
                        ))}
                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">4. Suggestions for improvement (if any):</label>
                            <textarea 
                                name="e4_suggestions"
                                value={formData.e4_suggestions}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[var(--button-red)] focus:bg-white outline-none transition-all resize-none text-sm"
                                rows={3}
                            />
                        </div>
                    </div>
                </div>

                {/* Section F: Overall Feedback */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                        <span className="bg-[var(--button-red)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">F</span>
                        <h3 className="text-xl font-bold text-gray-800 font-stix">Overall Feedback</h3>
                    </div>

                    <div className="space-y-8">
                        <LikertQuestion 
                            id="f1"
                            label="1. Do you think Vision, Mission, PEOs, and PSOs collectively represent the core values and direction of the Department?"
                            value={formData.f1}
                            onChange={handleLikertChange}
                        />
                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">2. Any general comments or suggestions for enhancement:</label>
                            <textarea 
                                name="f2_comments"
                                value={formData.f2_comments}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[var(--button-red)] focus:bg-white outline-none transition-all resize-none text-sm"
                                rows={3}
                            />
                        </div>
                    </div>
                </div>

                {/* Signature */}
                <div className="pt-8 space-y-4">
                    <div className="max-w-xs space-y-2">
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider underline">Signature *</label>
                        <input 
                            type="text" 
                            name="signature"
                            value={formData.signature}
                            onChange={handleChange}
                            placeholder="Type your name as signature"
                            className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-100 focus:border-[var(--button-red)] focus:bg-white outline-none transition-all font-cedarville-cursive text-lg"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] text-gray-400 italic">
                        Fields marked with <span className="text-red-500">*</span> are mandatory.
                    </p>
                    <AnimatePresence>
                        {error && (
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="text-[10px] text-red-600 font-bold bg-red-50 px-3 py-1.5 rounded-lg border border-red-100"
                            >
                                {error}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <GlobalArrowButton
                        type="submit"
                        disabled={isSubmitting}
                        className="!bg-[var(--button-red)] !text-white px-8 h-12 text-sm font-bold rounded-xl shadow-lg shadow-red-600/10 hover:scale-105 transition-transform"
                    >
                        {isSubmitting ? "Submitting..." : "Submit Feedback"}
                    </GlobalArrowButton>
                </div>
            </form>
        </div>
    );
}

function LikertQuestion({ id, label, value, onChange }) {
    return (
        <div className="space-y-4">
            <p className="font-bold text-gray-800 text-sm leading-tight font-plus-jakarta-sans">{label} *</p>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                {LIKERT_OPTIONS.map((opt) => (
                    <button
                        key={opt.value}
                        type="button"
                        onClick={() => onChange(id, opt.value)}
                        className={`p-2 py-3 rounded-xl border-2 transition-all flex flex-col items-center justify-center ${
                            value === opt.value
                            ? "border-[var(--button-red)] bg-red-50 text-[var(--button-red)] shadow-sm scale-[1.02]"
                            : "border-gray-100 bg-gray-50 text-gray-400 hover:border-gray-200"
                        }`}
                    >
                        <span className="text-[9px] font-bold uppercase text-center leading-tight tracking-tighter">{opt.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
