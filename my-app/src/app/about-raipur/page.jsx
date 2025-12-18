import React from 'react'
import RaipurMainIntro from '@/app/components/about-raipur/raipur_main_intro'
import NewRaipur from '@/app/components/about-raipur/new_raipur'
import Objectives from '@/app/components/about-raipur/objective'
import Highlights from '@/app/components/about-raipur/highlights'

function page() {

  return (
    <>
      <RaipurMainIntro />
      <NewRaipur />
      <Objectives />
      <Highlights />
    </>
  )
}

export default page
