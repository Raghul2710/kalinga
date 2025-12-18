import React from 'react'
import LibraryIntro from '../components/library/library-intro'


import LibraryHeadMessage from '../components/library/library-head-intro'
import LibraryGrid from '../components/library/library-feature'
import LibraryResource from '../components/library/library-resource'
import DeptSyllabus from '../components/department/dept_syllabus'
import LibraryEAccess from '../components/library/library-login'
import MentorIntro from '../components/cif/contact_section'
const page = () => {
  return (
    <>
    <LibraryIntro/>
    <LibraryGrid/>
    <LibraryHeadMessage/>
    <LibraryResource/>
    <LibraryEAccess/>
    </>
  )
}

export default page