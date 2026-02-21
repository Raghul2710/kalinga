'use client'

import React, { useState } from 'react'
import { FormWrapper, InputField, FormGrid } from './FormComponents'
import GlobalArrowButton from '../general/global-arrow_button'
import { submitForm } from '../../config/api'

export default function CsrForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        program_name: '',
        semester: '',
        enrollment_number: '',
        details: '',
        status: 'pending', // Default status for new forms
    })
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({ type: '', message: '' })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus({ type: '', message: '' })

        try {
            const result = await submitForm('/csr-forms/', formData)
            setStatus({
                type: 'success',
                message: `Form submitted successfully. Reference number: ${result.id || 'N/A'}`
            })
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                program_name: '',
                semester: '',
                enrollment_number: '',
                details: '',
                status: 'pending',
            })
        } catch (err) {
            setStatus({ type: 'error', message: err.message || 'Error submitting form.' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <FormWrapper
            title="CSR Enrollment Form"
            description="Please fill out the form below to enroll."
            theme="red"
        >
            <form onSubmit={handleSubmit}>
                <FormGrid>
                    <InputField label="Student Name" name="name" value={formData.name} onChange={handleChange} required />
                    <InputField label="Program Name" name="program_name" value={formData.program_name} onChange={handleChange} />
                    <InputField label="Semester" name="semester" value={formData.semester} onChange={handleChange} />
                    <InputField label="Enrollment Number" name="enrollment_number" value={formData.enrollment_number} onChange={handleChange} />
                    <InputField label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
                    <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </FormGrid>
                <InputField label="Details" name="details" type="textarea" value={formData.details} onChange={handleChange} required />

                <div className="flex justify-center mt-10">
                    <GlobalArrowButton variant="white" onClick={handleSubmit}>
                        {loading ? 'Submitting...' : 'Submit'}
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
