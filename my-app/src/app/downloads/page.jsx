"use client";

import GlobalArrowButton from "../components/general/global-arrow_button";




const downloadsreport = [
  // {
  //   id: 0,
  //   text: "Pharmacy Magazine",
  //   href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/pharmacy_magazine.pdf",
  // },
  {
    id: 8,
    text: "New Admission Form",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/newadmissionform.pdf",
  },
  {
    id: 1,
    text: "Application for the Issue of a Bonafide Certificate",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/BONAFIDE+APPLICATION+FORM.pdf",
  },
  {
    id: 2,
    text: "Application for the Issue of Semester / Year-wise Transcript",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/APPLICATION_FORM_FOR_TRANSCRIPT+CERTIFICATE.pdfICATION+FORM.pdf",
  },
  {
    id: 3,
    text: "Application for the Issue of a Migration Certificate",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/APPLICATION_FORM_MIGRATION+CERTIFICATE.pdf",
  },
  {
    id: 4,
    text: "Application for the Issue of Provisional Degree / Diploma",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/APPLICATION_+FORM_PROVISIONAL+CERTIFICATE.pdf",
  },
  {
    id: 5,
    text: "Re-Appear Supplementary Form",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/Supplementary+Form+.pdf",
  },
  {
    id: 6,
    text: "Re-Appear ATKT Form",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/ATKT_FORM.pdf",
  },
  {
    id: 7,
    text: "Re-Registration Form",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/RE-REGISTRATION_FORM.pdf",
  },
  {
    id: 9,
    text: "Application Form For the Issue of Medium of Instruction",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/APPLICATION+FORM+FOR+ISSUE+OF+MEDIUM+OF+INSTRUCTION.pdf",
  },
  {
    id: 10,
    text: "Application Form For the Issue of a Letter of Recommendation",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/APPLICATION+FORM+FOR+ISSUE+OF+LETTER+OF+RECOMMENDATION.pdf",
  },
  {
    id: 11,
    text: "Application form for Name and Surname Correction",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/Change_of_Name_and_Surname.pdf",
  },
  {
    id: 12,
    text: "Application form for the Issue of Degree",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/APPLICATION_FORM_DEGREE+CERTIFICATE.pdf",
  },
  {
    id: 13,
    text: "Application for Issue of Character Certificate",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/CHARACTER_CERTIFICATE.pdf",
  },
  {
    id: 14,
    text: "Application form for Diploma",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/APPLICATION_FORM_FOR_ISSUE_OF_DIPLOMA+CERTIFICATE.pdf",
  },
  {
    id: 15,
    text: "Application form for Transfer Certificate",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/APPLICATION_FORM_TRANSFER.pdf",
  },
  {
    id: 16,
    text: "Application form for Verification",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/Verification+Form.pdf",
  },
  {
    id: 17,
    text: "Application form and Affidavit format for the issue of a Duplicate Degree",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/DUPLICATE_DEGREE_FORM.pdf",
  },
  {
    id: 18,
    text: "Application form and Affidavit format for the issue of a Duplicate Marksheet",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/DUPLICATE_DMC_FORM+(1).pdf",
  },
  {
    id: 18,
    text: "Re-Totalling / Re-Evaluation Form",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/RE-TOTALING_%26_REEVALUATION_FORM.pdf",
  },

];

export default function Page() {

  return (
    <>


      {/* ✅ PAGE-SPECIFIC GRID */}
      <section className="pt-16 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadsreport.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <GlobalArrowButton
                  className="!w-full h-[60px] justify-between"
                  arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                  arrowSize={29}
                >
                  {item.text}
                </GlobalArrowButton>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
