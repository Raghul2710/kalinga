import React from 'react'
import ResearchGrid from '../components/research-facilities/research-grid'
import ResearchCE from '../components/research-facilities/research-coe'
import AdmissionCareer from '../components/general/admission_cta'
import ResearchLab from '../components/research-facilities/research-lab'
import ResearchFacilitiesIntro from '../components/research-facilities/research-intro'

const page = () => {
    return (
        <>
            <ResearchFacilitiesIntro />
            <ResearchGrid />
            <ResearchCE />
            <ResearchLab />
            <AdmissionCareer />
        </>
    )
}

export default page