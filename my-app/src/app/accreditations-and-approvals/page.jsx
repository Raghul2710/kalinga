import React from 'react'
import AccreditationRanking from '../components/home/AccreditationRanking'
import FAQ from '../components/general/faq'
import APITable from '../components/general/api-table';
import ResearchSixGridButtons from '../components/research/research_six_grid-buttons';
import AwardsScrollbar from '../components/home/awards-scrollbar';
import AccreditationsApprovalsSection from '../components/ana/AccreditationsApprovalsSection';
import NIRFRankings from '../components/approvals/nirf_rankings';


function Accreditations() {

    const aboutApproval = [
        { id: 1, name: "CG Government", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/cg-government.webp" },
        { id: 2, name: "UGC", logo: "https://cdn.kalingauniversity.ac.in/Home/ugc.webp" },
        { id: 3, name: "AICTE", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/acite.webp" },
        { id: 4, name: "BCI", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/bci.webp" },
        { id: 5, name: "PCI", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/Group+1000002980.png" },
        { id: 6, name: "NCTE", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/Group+1000002978.png" },
        // { id: 6, name: "NAAC Accreditation B+", logo: "https://cdn.kalingauniversity.ac.in/about/Accreditation+and+Ranking+Logo/Naac+niirf+2025.png" },
        { id: 6, name: "NAAC Accreditation B+", logo: "https://cdn.kalingauniversity.ac.in/Home/naac.webp" },
        { id: 6, name: "NIRF", logo: "https://cdn.kalingauniversity.ac.in/accreditation/nirf-logo-new.jpeg" },

    ]
    const defaultButtons = [
        // Left Column
        {
            id: 1,
            text: "A.I.U. Membership",
            href: "https://cdn.kalingauniversity.ac.in/accreditation/AIU-Membership.pdf",
        },
        {
            id: 2,
            text: "PHD Chamber of Commerce and Industry",
            href: "https://cdn.kalingauniversity.ac.in/accreditation/PHD-Chamber-of-Commerce-and-Industry.pdf",
        },
        {
            id: 3,
            text: "Vigyan Prasar",
            href: "https://cdn.kalingauniversity.ac.in/accreditation/Vigyan%2BPrasar-Certificate%2Bof%2BAffiliation.pdf",
        },
        {
            id: 4,
            text: "DELNET - Certificate of Membership",
            href: "https://cdn.kalingauniversity.ac.in/accreditation/delnet.pdf",
        },
        {
            id: 5,
            text: "Bank Loan (Tie-Up)",
            href: "https://cdn.kalingauniversity.ac.in/accreditation/Bank%2BLoan%2B(Tie-Up)%2B-%2BCentral%2BBank%2Bof%2BIndia.pdf"
        },
        {
            id: 6,
            text: "Tribhuvan University Kirtipur, Nepal",
            href: "https://cdn.kalingauniversity.ac.in/accreditation/Tribhuvan%2BUniversity%2C%2BNepal%2C%2BB.pdf"
        },
        {
            id: 7,
            text: "Ministry Of Education",
            href: "https://cdn.kalingauniversity.ac.in/accreditation/Ministry+Of+Education%2C+Nepal.pdf"
        },
        {
            id: 8,
            text: "CTEVT Nepal Equivalency",
            href: ""
        },
        {
            id: 9,
            text: "Equivalence to Sambalpur University, Odisha",
            href: "https://cdn.kalingauniversity.ac.in/accreditation/Equivalence+to+Sambalpur+University%2C+Odisha.pdf"
        },
        {
            id: 10,
            text: "MoU with National Law University",
            href: "https://cdn.kalingauniversity.ac.in/accreditation/MoU+with+National+Law+University.pdf"
        },

        {
            id: 11,
            text: "Kalinga University - Statutes and Ordinance",
            href: "https://cdn.kalingauniversity.ac.in/accreditation/statutes_ordinance.pdf"
        },
        {
            id: 12,
            text: "IIC Appreciation Letter",
            href: "https://cdn.kalingauniversity.ac.in/accreditation/IIC+Appreciation+Letter.pdf"
        },
        {
            id: 13,
            text: "Digital Smart Campus Ranking 2024",
            href: "https://cdn.kalingauniversity.ac.in/accreditation/Digital+Smart+Campus+Ranking+2024.pdf"
        },
        {
            id: 14,
            text: "CSR Ranking Law 2025",
            href: "https://cdn.kalingauniversity.ac.in/accreditation/CSR-Ranking-Law-2025.pdf"
        },

    ];

    const accreditationsData = {
        title: "Accreditations & Approvals",
        tabs: [
            { id: "cg", label: "C.G. Govt. Approval", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/cg-government.webp", description: "Official recognition and approval by the Chhattisgarh State Government." },
            { id: "ugc", label: "UGC Approval", logo: "https://cdn.kalingauniversity.ac.in/Home/ugc.webp", description: "Recognition under section 12B of the UGC Act, ensuring high educational standards." },
            { id: "pci", label: "PCI Approval", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/Group+1000002980.png", description: "Approval by the Pharmacy Council of India for quality pharmaceutical education." },
            { id: "aicte", label: "AICTE Approval", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/acite.webp", description: "All India Council for Technical Education approval for engineering and technical courses." },
            { id: "bci", label: "BCI Approval", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/bci.webp", description: "Bar Council of India recognition for legal education and professional law standards." },
            { id: "ncte", label: "NCTE Approval", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/Group+1000002978.png", description: "National Council for Teacher Education approval for B.Ed. and B.P.Ed. programs." },
            { id: "naac", label: "National Assessment and Accreditation Council", logo: "https://cdn.kalingauniversity.ac.in/Home/naac.webp", description: "NAAC B+ accreditation reflecting institutional quality and excellence." },
            { id: "eoa_pharmacy", label: "EOA PHARMACY", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/acite.webp", description: "Extension of Approval (EOA) for Pharmacy programs by AICTE." },
            { id: "eoa_diploma", label: "EOA Diploma Engg", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/acite.webp", description: "Extension of Approval (EOA) for Diploma in Engineering programs by AICTE." },
        ],
        sections: {
            cg: {
                docs: [
                    { title: "C.G. Govt. Approval", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/C.G.+Govt.+Approval.pdf" },
                ]
            },
            ugc: {
                docs: [
                    { title: "UGC Approval (under section 12B)", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/UGC+Approval+(under+section+12B).pdf" },
                    { title: "UGC 2(f) Approval", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/UGC+2(f)+Approval.pdf" },
                ]
            },
            pci: {
                years: {
                    "2026 - 27": [{ title: "2026-27 PCI APPROVAL LETTER", url: "https://cdn.kalingauniversity.ac.in/about/accerdation/2026-27+-+PCI+APPROVAL+(PHARMACY)+2026-27.pdf" }],
                    "2024 - 25": [{ title: "2024-25 PCI APPROVAL LETTER", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/PCI/2024-25+PCI+APPROVAL+LETTER+2024-25.pdf" }],
                    "2020 - 21": [{ title: "PCI extension of approval for 2020-21", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/PCI/PCI+extension+of+approval+for+2020-21.pdf" }],
                    "2019 - 20": [{ title: "PCI extension of approval for 2019-20", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/PCI/PCI+extension+of+approval+for+2019-20.pdf" }],
                    "2018 - 19": [{ title: "P.C.I. Approval - B.Pharmacy 2018 - 19", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/PCI/P.C.I.+Approval+-+B.Pharmacy+2018+-+19.pdf" }],
                    "2017 - 18": [{ title: "P.C.I. Approval - B.Pharmacy 2017 - 18", url: "#" }],
                    "2016 - 17": [{ title: "P.C.I. Approval - B.Pharmacy 2016 - 17", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/PCI/P.C.I.+Approval+-+B.Pharmacy+2016+-+17.pdf" }],
                },
            },

            aicte: {
                years: {
                    "2025 - 26": [
                        { title: "AICTE-DIPLOMA ENGINEERING 2025-26 EOA (With Working Professional)", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/AICTE-DIPLOMA+ENGINEERING+2025-26+EOA+(With+Working+Professional).pdf" },
                        { title: "AICTE B.TECH. 2025-26 EOA (with Working Professional)", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/AICTE+B.TECH.+2025-26+EOA+(with+Working+Professional).pdf" },
                    ],
                    "2024 - 25": [{ title: "AICTE-DIPLOMA ENGINEERING 2024-25", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/AICTE-DIPLOMA+ENGINEERING+2024-25.pdf" }, { title: "AICTE B.TECH. 2024-25 EOA)", url: "#" },],
                    "2023 - 24": [{ title: "AICTE EOA of B.Tech. (Engineering) - Session 2023-24", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/AICTE+EOA+of+B.Tech.+(Engineering)+-+Session+2023-24.pdf" }, { title: "AICTE EOA of Diploma (Engineering) - Session 2023-24", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/AICTE+EOA+of+Diploma+(Engineering)+-+Session+2023-24+(1).pdf" },],
                    "2022 - 23": [{ title: "AICTE EOA of B.Tech (Engineering) - Session 2022-23", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/AICTE+EOA+of+B.Tech+(Engineering)+-+Session+2022-23.pdf" }, { title: "AICTE EOA of Diploma (Engineering) - Session 2022-23", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/AICTE+EOA+of+Diploma+(Engineering)+-+Session+2022-23.pdf" }, { title: "AICTE EOA of Pharmacy - Session 2022-23", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/AICTE+EOA+of+Pharmacy+-+Session+2022-23.pdf" },],
                    "2021 - 22": [{ title: "AICTE - EOA - 2021-22 (B.Tech)", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/AICTE+-+EOA+-+2021-22+(B.Tech).pdf" }, { title: "AICTE - EOA - 2021-22 (DIPLOMA)", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/AICTE+-+EOA+-+2021-22+(DIPLOMA).pdf" }, { title: "AICTE - EOA - 2021-22 (PHARMACY)", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/AICTE+-+EOA+-+2021-22+(PHARMACY).pdf" },],
                    "2020 - 21": [{ title: "AICTE - EOA - 2020-21 (B.Tech)", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/AICTE+-+EOA+-+2020-21+(B.Tech).pdf" },],
                    "2019 - 20": [{ title: "AICTE - EOA - 2019-20 (B.Tech)", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/AICTE+-+EOA+-+2019-20+(B.Tech).pdf" },],
                    "2018 - 19": [{ title: "A.I.C.T.E. Extension of Approval - Technology - 2018 - 19", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/A.I.C.T.E.+Extension+of+Approval+-+Technology+-+2018+-+19.pdf" }, { title: "A.I.C.T.E. Extension of Approval - Diploma Pharmacy - 2018 - 19", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/A.I.C.T.E.+Extension+of+Approval+-+Diploma+Pharmacy+-+2018+-+19.pdf" }, { title: "A.I.C.T.E. Extension of Approval - Diploma Engineering - 2018 - 19", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/A.I.C.T.E.+Extension+of+Approval+-+Diploma+Engineering+-+2018+-+19.pdf" }, { title: "A.I.C.T.E. Extension of Approval - B.Pharmacy - 2018 - 19", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/A.I.C.T.E.+Extension+of+Approval+-+B.Pharmacy+-+2018+-+19.pdf" },],
                    "2017 - 18": [{ title: "A.I.C.T.E. Approval - Diploma Pharmacy - 2017 - 18", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/A.I.C.T.E.+Approval+-+Diploma+Pharmacy+-+2017+-+18.pdf" }, { title: "A.I.C.T.E. - Approval - Diploma in Engineering - 2017 - 18", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/A.I.C.T.E.+-+Approval+-+Diploma+in+Engineering+-+2017+-+18.pdf" }, { title: "A.I.C.T.E. Extension of Approval - Technology - 2017 - 18", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/A.I.C.T.E.+Extension+of+Approval+-+Technology+-+2017+-+18.pdf" }, { title: "A.I.C.T.E. Extension of Approval - B.Pharmacy - 2017 - 18", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/A.I.C.T.E.+Extension+of+Approval+-+B.Pharmacy+-+2017+-+18.pdf" },],
                    "2016 - 17": [{ title: "A.I.C.T.E. Extension of Approval - B.Pharmacy - 2016 - 17", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/A.I.C.T.E.+Extension+of+Approval+-+B.Pharmacy+-+2016+-+17.pdf" }, { title: "A.I.C.T.E. Extension of Approval - Technology - 2016 - 17", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/A.I.C.T.E.+Extension+of+Approval+-+Technology+-+2016+-+17.pdf" },],
                    "2015 - 16": [{ title: "A.I.C.T.E. Extension of Approval - Technology - 2015 - 16", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/A.I.C.T.E.+Extension+of+Approval+-+Technology+-+2015+-+16.pdf" }, { title: "A.I.C.T.E. - Approval - B.Pharmacy - 2015 - 16", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/A.I.C.T.E.+-+Approval+-+B.Pharmacy+-+2015+-+16.pdf" },],
                    "2014 - 15": [{ title: "A.I.C.T.E. Approval - Technology - 2014 - 15", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/AICTE/A.I.C.T.E.+Approval+-+Technology+-+2014+-+15.pdf" },],
                },
            },
            bci: {
                years: {
                    "2024 - 25": [{ title: "BCI Approval - Session 2024-25", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/BCI+Approval/BCI+Approval+-+Session+2024-25.pdf" },],
                    "2023 - 24": [{ title: "BCI Approval - Session 2023-24", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/BCI+Approval/BCI+Approval+-+Session+2023-24.pdf" },],
                    "2022 - 23": [{ title: "BCI Approval - Session 2022-23", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/BCI+Approval/BCI+Approval+-+Session+2022-23.pdf" },],
                    "2021 - 22": [{ title: "BCI Approval - Session 2021-22", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/BCI+Approval/BCI+Approval+-+Session+2021-22.pdf" },],
                    "2020 - 21": [{ title: "BCI Approval - Session 2020-21", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/BCI+Approval/BCI+Approval+-+Session+2020-21.pdf" },],
                    "2019 - 20": [{ title: "BCI Approval 2019-20", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/BCI+Approval/BCI+Approval+2019-20.pdf" },],
                    "2016 - 19": [{ title: "B.C.I. Approval Extension till 2016 - 19", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/BCI+Approval/B.C.I.+Approval+Extension+till+2016+-+19.pdf" },],
                    "2014 - 16": [{ title: "B.C.I. Approval - 2014 - 15 & 2015 - 16", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/BCI+Approval/B.C.I.+Approval+-+2014+-+15+%26+2015+-+16.pdf" },],
                }
            },
            naac: {
                docs: [
                    { title: "National Assessment and Accreditation Council", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/National+Assessment+and+Accreditation+Council.pdf" },
                ]
            },
            ncte: {
                years: {
                    "2017 - 18": [{ title: "N.C.T.E. Approval - B.Ed for 2017 - 18", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/NCTE/N.C.T.E.+Approval+-+B.Ed+for+2017+-+18.pdf" },
                    { title: "N.C.T.E. Approval - B.P.Ed for 2017 - 18", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/NCTE/N.C.T.E.+Approval+-+B.P.Ed+for+2017+-+18.pdf" },]
                }
            },
            eoa_pharmacy: {
                years: {
                    "2021 - 22": [{ title: "EOA PHARMACY 2021-22", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/EOA/EOA+PHARMACY+2021-22.pdf" },
                    ],
                    "2020 - 21": [{ title: "EOA PHARMACY 2020-21", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/EOA/EOA+PHARMACY+2020-21.pdf" },
                    ],
                    "2019 – 20": [{ title: "EOA PHARMACY 2019-20", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/EOA/EOA+PHARMACY+2019-20.pdf" },
                    ],


                }
            },
            eoa_diploma: {
                years: {
                    "2020 - 21": [{ title: "EOA Diploma Engg 2020-21", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/EOA/EOA+Diploma+Engg+2020-21.pdf" },
                    ],
                    "2019 – 20": [{ title: "EOA Diploma Engg 2019-20", url: "https://cdn.kalingauniversity.ac.in/accreditation/Approval+PDF/EOA/EOA+Diploma+Engg+2019-20.pdf" },
                    ],
                }
            },
        },
    };


    return (
        <>
            <AccreditationRanking
                heading="Accreditations & Approvals"
                secondHeading=""
                accreditations={aboutApproval}
            />

            <NIRFRankings
                description="NIRF is a methodology adopted by the Ministry of Education, Government of India, to rank higher education institutions in India. It considers several parameters such as Teaching, Learning and Resources, Research and Professional Practice, Graduation Outcomes, etc."
                rankings={[
                    { year: "2021", range: "151-200" },
                    { year: "2022", range: "101-150" },
                    { year: "2023", range: "101-150" },
                    { year: "2024", range: "101-150" },
                    { year: "2025", range: "101-150" },
                ]}
            />
            <AccreditationsApprovalsSection data={accreditationsData} />
            <ResearchSixGridButtons buttons={defaultButtons} />
        </>
    )
}

export default Accreditations