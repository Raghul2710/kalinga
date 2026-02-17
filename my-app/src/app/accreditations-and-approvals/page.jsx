import React from 'react'
import AccreditationRanking from '../components/home/AccreditationRanking'
import FAQ from '../components/general/faq'
import APITable from '../components/general/api-table';
import ResearchSixGridButtons from '../components/research/research_six_grid-buttons';
import AwardsScrollbar from '../components/home/awards-scrollbar';
import AccreditationsApprovalsSection from '../components/ana/AccreditationsApprovalsSection';


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
            text: "PHD Chamber of Commerce and Industry",
            href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/accreditation/PHD-Chamber-of-Commerce-and-Industry.webp",
        },
        {
            id: 3,
            text: "Vigyan Prasar",
            href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/accreditation/Vigyan%2BPrasar-Certificate%2Bof%2BAffiliation.pdf",
        },
        {
            id: 4,
            text: "DELNET - Certificate of Membership",
            href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/accreditation/delnet.pdf",
        },
        {
            id: 5,
            text: "Bank Loan (Tie-Up)",
            href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/accreditation/Bank%2BLoan%2B(Tie-Up)%2B-%2BCentral%2BBank%2Bof%2BIndia.pdf"
        },
        {
            id: 6,
            text: "Tribhuvan University Kirtipur, Nepal",
            href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/accreditation/Tribhuvan%2BUniversity%2C%2BNepal%2C%2BB.pdf"
        },
         {
            id: 7,
            text: "Ministry Of Education",
            href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/accreditation/Ministry+Of+Education%2C+Nepal.webp"
        },
         {
            id: 8,
            text: "CTEVT Nepal Equivalency",
            href: ""
        },
         {
            id: 9,
            text: "Equivalence to Sambalpur University, Odisha",
            href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/accreditation/Equivalence+to+Sambalpur+University%2C+Odisha.webp"
        },
         {
            id: 10,
            text: "MoU with National Law University",
            href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/accreditation/MoU+with+National+Law+University.pdf"
        },
        
         {
            id: 11,
            text: "Kalinga University - Statutes and Ordinance",
            href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/accreditation/statutes_ordinance.pdf"
        },
         {
            id: 12,
            text: "IIC Appreciation Letter",
            href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/accreditation/IIC+Appreciation+Letter.pdf"
        },
         {
            id: 13,
            text: "Digital Smart Campus Ranking 2024",
            href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/accreditation/Digital+Smart+Campus+Ranking+2024.webp"
        },
         {
            id: 14,
            text: "CSR Ranking Law 2025",
            href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/accreditation/CSR-Ranking-Law-2025.webp"
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
            <AccreditationsApprovalsSection />
            <ResearchSixGridButtons buttons={defaultButtons} />
        </>
    )
}

export default Accreditations