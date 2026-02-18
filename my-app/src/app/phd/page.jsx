"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AdmissionCareer from "../components/general/admission_cta";
import PhdGrid from "../components/phd/phd-grid";
import PhdIntro from "../components/phd/phd-intro";
import PhdObjectivesPanel from "../components/phd/phd-objectives";
import FAQ from "../components/general/faq";
import ScholarStats from "../components/phd/scholar_stats";
import WhyChoosePhd from "../components/phd/why-phd";
import { useFlipbook } from "../components/general/FlipbookContext";

export default function PhdPage() {
  const pathname = usePathname();
  const { openFlipbook } = useFlipbook();



  const phdResources = [
    {
      id: 1,
      title: "Ph.D. Ordinance",
      description: "Download the complete ordinance documents governing the Ph.D. program.",
      buttons: [
        { label: "Ordinance No. 48", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Ordinance+No.+48+(16.09.2013).pdf", "Ordinance No. 48") },
        { label: "Revised Ordinance No. 48", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Amended+Ordinance+No.+48+(18.02.2022).pdf", "Revised Ordinance No. 48") },
      ]
    },
    {
      id: 2,
      title: "Thesis Format",
      description: "Guidelines and templates for thesis submission.",
      buttons: [
        { label: "Cover Page Format", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Kalinga+University-+Cover+Page+-Thesis.pdf", "Cover Page Format") },
        { label: "Synopsis Format", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Kalinga+University+-Synopsis+Format+-Cover+Page+(1).pdf", "Synopsis Format") },
        { label: "Summary Format", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Kalinga+University+-Summary+Format-+Cover+page.pdf", "Summary Format") },
        { label: "Arrangement of Thesis Content", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/ARRANGEMENT+OF+THESIS+CONTENTS.pdf", "Arrangement of Thesis Content") },
        { label: "Thesis Chapterization", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Kalinga+University-+Thesis+Chapterization_Final.pdf", "Thesis Chapterization") },
      ]
    },
    {
      id: 3,
      title: "Ph.D. Admission Policy",
      description: "Detailed policy document regarding Ph.D. admissions.",
      buttons: [
        { label: "Ph.D. Admission Policy", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/2.+Admission+poilcy+(1).pdf", "Ph.D. Admission Policy") },
      ]
    },
    {
      id: 4,
      title: "Syllabus for Ph.D. Entrance",
      description: "",
      buttons: [
        { label: "Syllabus for Ph.D. Entrance", onClick: () => openFlipbook("", "") },
      ]
    },
    {
      id: 5,
      title: "Detailed Syllabus of Research Methodology",
      description: "Course syllabus for Research Methodology coursework.",
      buttons: [
        { label: "Detailed Syllabus", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Detailed+Syllabus.pdf", "Detailed Syllabus") },
      ]
    },
    {
      id: 6,
      title: "Fellowship Scholarship Policy for Ph.D. Scholars",
      description: "Policy details for research fellowships and scholarships.",
      buttons: [
        { label: "Fellowship Scholarship Policy", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/3.+Fellowship+Scholarship+Policy+for+Ph.D.+Scholars.pdf", "Fellowship Scholarship Policy") },
      ]
    },
    {
      id: 7,
      title: "Policy for the Grievance Redress Mechanism of Scholars",
      description: "Mechanism for addressing scholar grievances.",
      buttons: [
        { label: "Grievance Redress Policy", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/6+POLICY+FOR+GRIEVANCE+REDRESS+MECHANISM+OF+SCHOLARS.pdf", "Grievance Redress Policy") },
      ]
    },
    {
      id: 8,
      title: "Ph.D. Process Improvement",
      description: "Best practices and process improvement guidelines.",
      buttons: [
        { label: "Best Practices & Process Improvement", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Best+Practices+%26+Process+Improvement+(1).pdf", "Best Practices & Process Improvement") },
      ]
    },
    {
      id: 9,
      title: "UGC Regulations",
      description: "Relevant University Grants Commission regulations.",
      buttons: [
        { label: "2022", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/UGC+Regulation+2022+(1).pdf", "UGC Regulation 2022") },
        { label: "2018", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/UGCNotification_Plagiarism_2018.pdf", "UGC Notification Plagiarism 2018") },
        { label: "2016", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/UGC+Regulations+2016+(1).pdf", "UGC Regulation 2016") },
      ]
    },
    {
      id: 10,
      title: "Ph.D. Notification 2025-26",
      description: "Latest notifications for the upcoming academic year.",
      buttons: [
        { label: "Ph.D. Notification 2026", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Ph.+D.+2026+Notification.pdf", "Ph.D. Notification 2026") },
        { label: "Ph.D. Notification 2025-26", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Ph.+D.+2025+Notification+26-07-2025.pdf", "Ph.D. Notification 2025-26") },
      ]
    },
    {
      id: 11,
      title: "Details of Currently Enrolled Ph.d. Scholars and Supervisors",
      description: "View details of current scholars and supervisors.",
      buttons: [
        { label: "Ph.d. Scholars", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/DETAILS+OF+CURRENTLY+ENROLLED+Ph.D.+SCHOLARS+(1).pdf", "Ph.d. Scholars") },
        { label: "Ph.d. Supervisors", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/DETAILS+OF+SUPERVISOR.pdf", "Ph.d. Supervisor") },

      ]
    },
    {
      id: 12,
      title: "Undertaking",
      description: "Download the undertaking format.",
      buttons: [
        { label: "Undertaking", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Undertaking+(1).pdf", "Undertaking") },
      ]
    },
    {
      id: 13,
      title: "Ethics Committee Constitution",
      description: "Download the undertaking format.",
      buttons: [
        { label: "Download", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Undertaking+(1).pdf", "Download") },
      ]
    },
    {

      id: 14,
      title: "Constitution of the Ethics Board for Maintaining Research Integrity",
      description: "Download the undertaking format.",
      buttons: [
        { label: "Download", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/research/5.+CONSTITUTION+OF+ETHICS+BOARD+FOR+MAINTAINING+RESEARCH+INTEGRITY.pdf", "Download") },
      ]
    },
    {
      id: 15,
      title: "Research Integrity & Ethics Policy",
      description: "Download the undertaking format.",
      buttons: [
        { label: "Download", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Undertaking+(1).pdf", "Download") },
      ]
    },
    {
      id: 16,
      title: "Research Advisory Committee",
      description: "Download the undertaking format.",
      buttons: [
        { label: "Download", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Undertaking+(1).pdf", "Download") },
      ]
    },
    {
      id: 17,
      title: "Constitution of the Research Advisory Committee and Departmental Research Committee",
      description: "Download the undertaking format.",
      buttons: [
        { label: "Download", onClick: () => openFlipbook("https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Constitution+of+Research+Advisory+Committee.pdf", "Download") },
      ]
    },
  ];

  return (
    <>
      <style jsx global>{`
      .absolute.inset-0 > img {
        object-position: center 35% !important;
      }
    
      @media (max-width: 768px) {
        .absolute.inset-0 > img {
          object-position: center 5% !important;
        }
      }
    `}</style>

      <PhdIntro />
      <PhdGrid />
      <WhyChoosePhd />
      <PhdObjectivesPanel />
      <FAQ
        title="Ph.D. Resources"
        variant="button"
        buttons={phdResources}
        subtitle=""
      />
      <ScholarStats />
      <AdmissionCareer />
    </>
  );
}
