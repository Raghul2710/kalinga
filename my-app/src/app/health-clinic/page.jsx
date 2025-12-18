import React from 'react'
import HCIntro from '../components/health-clinic/healthclinic-intro'
import DataTable from '../components/general/data-table'
import HealthClinicTable from '../components/health-clinic/healthclinic-table'
import AdmissionCareer from '../components/general/admission_cta'

const page = () => {
  return (
    <>
    <HCIntro/>
    <HealthClinicTable/>
    <AdmissionCareer/>
    </>
  )
}

export default page