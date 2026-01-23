import React from 'react'
import AdmissionSteps from '../admissions/admission-steps'

function Admissionproceduresteps() {
    const admissionStepsContent = {
        steps: [
            {
                id: 1,
                icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-1.svg",
                stepNumber: "01",
                title: "Step Ⅰ",
                description: "Visit https://admissions.kalingauniversity.ac.in/",
                backDescription: "Visit https://admissions.kalingauniversity.ac.in/ to begin your admission process.",
            },
            {
                id: 2,
                icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-2.svg",
                stepNumber: "02",
                title: "Step Ⅱ",
                description: "Register for the entrance exam (KALSEE/KAL-MAT)",
                backDescription: "Register for the entrance exam (KALSEE/KAL-MAT) by completing the registration form with accurate personal details.",
            },
            {
                id: 3,
                icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-3.svg",
                stepNumber: "03",
                title: "Step Ⅲ",
                description: "Take the computer-based exam and get shortlisted",
                backDescription: "Take the computer-based exam on the scheduled date. Results will be announced, and shortlisted candidates will be notified.",
            },
            {
                id: 4,
                icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-4.svg",
                stepNumber: "04",
                title: "Step Ⅳ",
                description: "Fill out the online admission form after selection",
                backDescription: "Fill out the online admission form after selection with all required information.",
            },
            {
                id: 5,
                icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-5.svg",
                stepNumber: "05",
                title: "Step Ⅴ",
                description: "Attach self-attested copies with the admission form",
                backDescription: "Attach the following self-attested copies with the admission form:\n• Xerox copies of mark sheets (Class X, XII, UG/PG depending on your course)\n• Original Copies of TC, CC, Migration Certificate, and Gap Certificate (if any)\n• Proof of employment or self-employment (if working)",
            },
            {
                id: 6,
                icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-3.svg",
                stepNumber: "06",
                title: "Step Ⅵ",
                description: "Pay your program fee within 10 days",
                backDescription: "Pay your program fee within 10 days after receiving the offer letter. Online/Offline payment options are available.",
            },
            {
                id: 7,
                icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/step-4.svg",
                stepNumber: "07",
                title: "Step Ⅶ",
                description: "Welcome to Kalinga University!",
                backDescription: "Welcome to Kalinga University! Begin your journey with us.",
            },
        ],
        subtitle: "Crack the Test | Grab the Scholarship | Make Your Mark",
        title: "Steps To Get Admission Into KU",
        showHeaderButton: true,
        ctaLabel: "Apply Now",
        showReadMore: true,
        showIcon: true,
    };

    return (
        <div>
            <AdmissionSteps
                steps={admissionStepsContent.steps}
                subtitle={admissionStepsContent.subtitle}
                title={admissionStepsContent.title}
                showHeaderButton={admissionStepsContent.showHeaderButton}
                ctaLabel={admissionStepsContent.ctaLabel}
                showReadMore={admissionStepsContent.showReadMore}
                showIcon={admissionStepsContent.showIcon}
                bgColor=""
                ctaHref="https://admissions.kalingauniversity.ac.in/"
            />
        </div>
    )
}

export default Admissionproceduresteps