import React from 'react'
import Valueadditionsmainintro from '../components/value-additions/valueadditionsmainintro'
import AutoBreadcrumb from '../components/layout/BreadcrumbData';
import Valueadditionvideointerview from '../components/value-additions/valueadditionvideointerview';
import Valueadditioncards from '../components/value-additions/valueadditionscards';
import Valueadditionsofkalinga from '../components/value-additions/valueadditionsofkalinga';
import Valueadditionskilldev from '../components/value-additions/valueadditionskilldev';
import Valueadditionwhatmakes from '../components/value-additions/valueadditionwhatmakes';
import AdmissionCareer from '../components/general/admission_cta';

function ValueAddition() {
    const breadcrumbData = {
        heroImage:
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
        pageTitle: "Value Additions",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Value Additions", href: "/value-additions" },
        ],
    };
    return (
        <>
            <AutoBreadcrumb data={breadcrumbData} />
            <Valueadditionsmainintro />
            <Valueadditionvideointerview />
            <Valueadditioncards />
            <Valueadditionsofkalinga />
            <Valueadditionskilldev />
            <Valueadditionwhatmakes />
            <AdmissionCareer />
        </>
    )
}

export default ValueAddition