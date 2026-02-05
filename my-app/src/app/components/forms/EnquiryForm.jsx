'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FormWrapper, InputField, FormGrid } from './FormComponents'
import GlobalArrowButton from '../general/global-arrow_button'
import { submitForm } from '../../config/api'

export default function EnquiryForm() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        category: '',
        program_of_interest: ''
    })
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({ type: '', message: '' })

    const categories = [
        { value: 'Hands-on Training', label: 'Hands-on Training' },
        { value: 'Sample Testing', label: 'Sample Testing' },
        { value: 'Internship', label: 'Internship' }
    ]

    const programsByCategory = {
        'Hands-on Training': [
            "Google SketchUp for 3D Developments",
            "SEM & Microscopy",
            "Literature Review & Research Writing",
            "Stock Market Trading",
            "Artificial Intelligence (AI) for Future Teachers",
            "Protein Estimation & Biochemistry Analyser",
            "Entrepreneurship in Biotechnology",
            "3D Printing",
            "Molecular Techniques (PCR, Electrophoresis, etc.)",
            "Electrical Vehicle",
            "Advanced Instrumentation & Water Analysis",
            "High-Performance Liquid Chromatography",
            "Microsoft Power Business Intelligence",
            "X-Ray Diffractometer"
        ],
        'Sample Testing': [
            "X-Ray Diffractometer",
            "Scanning Electron Microscope (SEM)",
            "High-Performance Liquid Chromatography",
            "Thermal Cycler (PCR)",
            "Horizontal Mini Gel Chromatography",
            "UV Transilluminator",
            "FT-IR Spectrophotometer",
            "Bio-Chemistry Analyzer",
            "Touch Screen Viscometer",
            "Digital Viscometer",
            "UV-Visible Spectrophotometer",
            "Digital Turbidity Meter",
            "Digital Flame Photometer",
            "Rotary Tablet Press"
        ],
        'Internship': [
            "45 Days - Biotech Tools & Techniques",
            "45 Days - Zoological Tools & Techniques",
            "45 Days - Physics Tools & Techniques",
            "45 Days - Pharmaceutical Techniques",
            "45 Days - Applied Business Management",
            "45 Days - Botany & Microbiology Tools & Techniques",
            "45 Days - Chemistry Tools & Techniques",
            "45 Days - Artificial Intelligence & Machine Learning (AI & ML)",
            "45 Days - Python and R Programming",
            "45 Days - E-Vehicle",
            "45 Days - Forensic Science",
            "6 Months - Zoological Techniques",
            "6 Months - Physics",
            "6 Months - Pharmaceutical Sciences",
            "6 Months - Interior Design",
            "6 Months - Fashion Design",
            "6 Months - Data Science Using R Programming",
            "6 Months - Chemistry",
            "6 Months - Botany & Microbiology",
            "6 Months - Biotechnology"
        ]
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => {
            const newData = { ...prev, [name]: value }
            // Reset program_of_interest when category changes
            if (name === 'category') {
                newData.program_of_interest = ''
            }
            return newData
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus({ type: '', message: '' })

        try {
            await submitForm('/cif-forms/', formData)
            // Redirect to thank you page with form type
            router.push('/thank-you?form=enquiry')
        } catch (err) {
            setStatus({ type: 'error', message: err.message || 'Error submitting form.' })
            setLoading(false)
        }
    }

    const getProgramOptions = () => {
        if (!formData.category) return []
        return (programsByCategory[formData.category] || []).map(p => ({ value: p, label: p }))
    }

    return (
        <FormWrapper
            title="CIF Enquiry Form"
            description="Tell us about your interests and we'll get back to you with more details about our programs."
            theme="blue"
        >
            <form onSubmit={handleSubmit}>
                <FormGrid>
                    <InputField
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                    />
                    <InputField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                    />
                    <InputField
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Enter your phone number"
                    />
                    <InputField
                        label="Category"
                        name="category"
                        type="select"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        options={categories}
                    />
                    <InputField
                        label="Program of Interest"
                        name="program_of_interest"
                        type="select"
                        value={formData.program_of_interest}
                        onChange={handleChange}
                        required
                        options={getProgramOptions()}
                        disabled={!formData.category}
                    />
                </FormGrid>

                <div className="flex justify-center mt-10">
                    <GlobalArrowButton variant="white" onClick={handleSubmit} disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit Inquiry'}
                    </GlobalArrowButton>
                </div>

                {status.message && (
                    <p className={`text-center mt-4 ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {status.message}
                    </p>
                )}
            </form>
        </FormWrapper>
    )
}
