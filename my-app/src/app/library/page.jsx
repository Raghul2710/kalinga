import React from 'react'
import LibraryIntro from '../components/library/library-intro'


import LibraryHeadMessage from '../components/library/library-head-intro'
import LibraryGrid from '../components/library/library-feature'
import LibraryResource from '../components/library/library-resource'
import DeptSyllabus from '../components/department/dept_syllabus'
import LibraryEAccess from '../components/library/library-login'
import MentorIntro from '../components/department/dept_head_intro'
import AutoBreadcrumb from '../components/layout/BreadcrumbData'
import AdmissionCareer from '../components/general/admission_cta'
import LibraryHeadIntro from '../components/library/library-head-intro'
const page = () => {
   const breadcrumbData = {
        heroImage:
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
        pageTitle: "KU Library",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "KU Library", href: "/library" },
        ],
    };
  return (
    <>
     <AutoBreadcrumb data={breadcrumbData} />
    <LibraryIntro/>
    <LibraryGrid/>
    <LibraryHeadMessage/>
    <LibraryResource/>
    <LibraryEAccess/>
    <AdmissionCareer/>
    </>
  )
}

export default page