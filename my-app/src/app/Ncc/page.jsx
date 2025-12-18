import React from 'react'
import NccIntro from '../components/Ncc/ncc-intro'
import NccBenefits from '../components/Ncc/ncc-benefits'
import NccHeadMessage from '../components/Ncc/ncc-coordinator-message'
import NccVisionMission from '../components/Ncc/ncc-visionmission'
import NccEvents from '../components/Ncc/ncc-events'

const page = () => {
  return (
    <>
    <NccIntro/>
    <NccBenefits/>
     <NccVisionMission/>
    <NccHeadMessage/>
    <NccEvents/>
    </>
  )
}

export default page