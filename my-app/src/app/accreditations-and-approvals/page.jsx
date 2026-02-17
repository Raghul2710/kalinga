import React from 'react'
import AccreditationRanking from '../components/home/AccreditationRanking'
import FAQ from '../components/general/faq'
import APITable from '../components/general/api-table';
import ResearchSixGridButtons from '../components/research/research_six_grid-buttons';
import AwardsScrollbar from '../components/home/awards-scrollbar';


function Accreditations() {
    const aboutApproval = [
        { id: 1, name: "CG Government", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/cg-government.webp" },
        { id: 2, name: "UGC", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/ugc.webp" },
        { id: 3, name: "AICTE", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/acite.webp" },
        { id: 4, name: "BCI", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/bci.webp" },
        { id: 5, name: "PCI", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002980.png" },
        { id: 6, name: "NCTE", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002978.png" },
        { id: 6, name: "NAAC Accreditation B+", logo: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/Accreditation+and+Ranking+Logo/Naac+niirf+2025.png" },
    ]

    const ranking = [
        {
            id: 0,
            year: "2025",
            title: "Ranked in top 101–150 universities",
            subtitle: "",
            active: true,
        },
        {
            id: 1,
            year: "2024",
            title: "Ranked in top 101–150 universities",
            subtitle: "",
            active: true,
        },
        {
            id: 2,
            year: "2023",
            title: "Ranked in top 101–150 universities",
            subtitle: "",
            active: true,
        },
        {
            id: 3,
            year: "2022",
            title: "Ranked in top 101–150 universities",
            subtitle: "",
            active: true,
        },
        {
            id: 4,
            year: "2021",
            title: "Ranked in top 151–200 universities",
            subtitle: "",
            active: true,
        },

    ]
    const defaultButtons = [
        // Left Column
        {
            id: 1,
            text: "A.I.U. Membership",
            href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/accreditation/AIU-Membership.webp",
        },
        {
            id: 2,
            text: "Ethics Committee Constitution",
            href: "",
            isTable: true,
            tableType: "ethics",
        },
        {
            id: 3,
            text: "Software used for Plagiarism",
            href: "/research-resources/#seedmoney",
        },
        {
            id: 4,
            text: "Research Policy",
            href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/1.+Research+Policy+(2).pdf",
        },
        {
            id: 5,
            text: "Constitution of the Ethics Board for Maintaining Research Integrity",
            href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/5.+CONSTITUTION+OF+ETHICS+BOARD+FOR+MAINTAINING+RESEARCH+INTEGRITY.pdf"
        },
        {
            id: 6,
            text: "Conferences",
            href: "/research-conferences",
        },

        // Right Column
        {
            id: 7,
            text: "Research Advisory Committee",
            href: "",
            isTable: true,
            tableType: "research",
        },
        // {
        //   id: 8,
        //   text: "Plagiarism Policy",
        //   href: "/research-resources",
        //   isContent: true,
        // },
        // {
        //   id: 9,`
        //   text: "Ph.D. Admissions",
        //   href: "/phd",
        // },
        {
            id: 10,
            text: "Research Integrity & Ethics Policy",
            href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/RESEARCH+Ethics.pdf",
        },
        {
            id: 11,
            text: "Constitution Of the Research Advisory Committee",
            href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Constitution+of+Research+Advisory+Committee.pdf",
        },
        // {
        //   id: 12,
        //   text: "Doctoral Research Committee",
        //   href: "/phd",
        // },
        {
            id: 13,
            text: "Seed Money",
            href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research-resources/Seed+Money+Policy.pdf",
        },
        {
            id: 14,
            text: "Research Paper",
            href: "/research-papers-and-books-published",
        },
        {
            id: 15,
            text: "Book Chapters",
            href: "/book-chapters",
        },
        {
            id: 16,
            text: "Patents",
            href: "/patents",
        },
        {
            id: 17,
            text: "Chairs and their Activities",
            href: "/chairs-and-their-activities",
        },
        {
            id: 18,
            text: "IPR Cell",
            href: "/ipr-cell",
        },
        {
            id: 19,
            text: "Conferences",
            href: "/research-conferences",
        },

    ];
    return (
        <>
            <AccreditationRanking
                heading="Accreditations & Approvals"
                secondHeading=""
                accreditations={aboutApproval}
            />
            <AwardsScrollbar title="NIRF Ranking" awards={ranking} />
            <ResearchSixGridButtons buttons={defaultButtons} />
        </>
    )
}

export default Accreditations