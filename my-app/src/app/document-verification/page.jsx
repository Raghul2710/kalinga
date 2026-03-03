"use client";

import React from 'react'
import MainIntro from '../components/about/main_intro'
import ImageContent from "@/app/components/ccrc/imagecontent";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import Image from 'next/image';
import FAQ from '../components/general/faq';
import GlobalArrowButton from '../components/general/global-arrow_button';
import FlipbookTrigger from '../components/general/FlipbookTrigger';
import { useFlipbook } from '../components/general/FlipbookContext';

const tableSections = [
  {
    id: 1,
    title: "Step-1: Submission",
    answer: `You can send the duly filled application form along with other required documents through speed post.<br /><br />
        <strong>Applicants are required to submit:</strong><br />
        • Notarised copies of their documents<br />
        • Pay the verification fee<br />
        • Verification form<br /><br />
        <strong>Documents Accepted</strong><br />
        • Academic Transcripts/Degree/Certificates/Marksheets<br />
        • Identification Proof: Valid government-issued identification documents such as a Passport, driver's license, or Aadhaar Card<br />
        • Fee Payment Proof: Demand Draft/ Receipt of Online payment<br />
        • Any other important document or relevant credentials (Provisional degree certificate, Migration certificate, Transfer certificate, Internship or training completion certificate, Professional certifications, etc.)<br /><br />
        <strong>Fee Payment Options</strong><br />
        • Demand Draft in favour of KALINGA UNIVERSITY, payable at Raipur<br />
        • Bank Transfer using the following details:<br />
        Account Holder's Name: KALINGA UNIVERSITY<br />
        Bank Name: Punjab National Bank<br />
        Account No.: 17441131000055<br />
        Bank Branch Name: RAKHI (NEW RAIPUR)<br />
        IFSC Code: PUNB0174410<br /><br />
        <strong>Note:</strong> Applications submitted through other modes will not be entertained.<br /><br />`,
  },
  {
    id: 2,
    title: "Step-2: Review",
    answer: "Once the documents are received, our experts will carefully review each document to ensure authenticity and accuracy. ",
  },
  {
    id: 3,
    title: "Step-3: Confirmation",
    answer: "Upon successful verification, you will receive an official confirmation certifying the authenticity of your documents.",
  },
]



const faqContent = [
  {
    id: 1,
    question: "How can I submit my documents for verification at Kalinga University?",
    answer: "You can send the duly filled application form along with other required documents through speed post. Applications submitted through other modes will not be entertained.<br />Address - Kalinga University, Kotni, Near Mantralaya, Naya Raipur, 492101, Chhattisgarh, India<br />Email - <a href='mailto:registrar@kalingauniversity.ac.in'>registrar@kalingauniversity.ac.in</a><br />Phone No. - <a href='tel:+91-9109199711'>+91-9109199711</a>",
  },
  {
    id: 2,
    question: "How long does the document verification process take?",
    answer: "The duration of the verification process may vary depending on the volume of documents received and the complexity of verification requirements. However, we aim to ensure a prompt and efficient verification process.",
  },
  {
    id: 3,
    question: "Is there a fee for document verification at Kalinga University?",
    answer: "Yes, there is a nominal fee of INR 3,000/- associated with document verification services at Kalinga University. The fee structure may vary depending on the number and type of documents being verified.",
  },
  {
    id: 4,
    question: "Can I use the verified documents for employment or further education purposes?",
    answer: "Yes, the verified documents issued by Kalinga University can be used for employment, further education, immigration, or any other official purposes requiring validated academic credentials.",
  },
  {
    id: 5,
    question: "Are my personal information and documents kept secure during the verification process?",
    answer: "Yes, we prioritise the security and confidentiality of your personal information and documents throughout the verification process.",
  },
]


const boxItems = [{
  title: "Effortless Verification",
  description: "Our process is hassle-free, and you will get a quick verification result.",
  icon: (
    <Image
      src="https://cdn.kalingauniversity.ac.in/document-verification/verification.svg"
      alt="Effortless Verification"
      width={40}
      height={40}
      className="h-10 w-10"
    />
  ),
}, {
  title: "Accuracy",
  description: "With our step-wise verification process, you’ll get precise results.",
  icon: (
    <Image
      src="https://cdn.kalingauniversity.ac.in/document-verification/calibration.svg"
      alt="Accuracy"
      width={40}
      height={40}
      className="h-10 w-10"
    />
  ),
}, {
  title: "Confidentiality",
  description: "Your personal information and documents will be safe and secure as we follow a strict protocol in maintaining the privacy of our applicants. ",
  icon: (
    <Image
      src="https://cdn.kalingauniversity.ac.in/document-verification/secret-file.svg"
      alt="Prototype Development Lab"
      width={40}
      height={40}
      className="h-10 w-10"
    />
  ),
},];






export default function Page() {
  const { openFlipbook } = useFlipbook();
  return (
    <div>
      <ImageContent
        hasImage={false}
        readmore={false}
        className="items-center justify-center"
        title="Document Verification"
        subtitleclassName="hidden"
        description="We understand the importance of accurate documentation verification. Whether you're a prospective student, an employer, or an organisation, we ensure that the documents provided to us are thoroughly verified to maintain the integrity and credibility of our academic system."
      />
      <MainIntro
        title="Public Notice"
        description="The general public is advised that only verifications conducted directly through Kalinga University are valid. Reports from unauthorised third parties will be considered invalid and will not receive official recognition."
        imageSrc="https://cdn.kalingauniversity.ac.in/common/kalinga-front-banner02.webp"
        readmore={false}
        knowMoreLabel="IBC Verifications Bangalore 21st September 2024"
        knowMoreHref="https://cdn.kalingauniversity.ac.in/common/Public+Notice+IBC+Verifictions+Bangalore+21st+September+2024.pdf"
        showKnowMore={true}
      />
      <ImageListItem boxItems={boxItems} imageSrc="https://cdn.kalingauniversity.ac.in/ccrc/ccrc.webp" title="" description="" />
      <FAQ
        title="Our Document Verification Procedure "
        subtitle=""
        variant="table-display"
        items={[]}
        tableSections={tableSections}
        className="mt-8 mb-8" />
      <FAQ
        title="Frequently Asked Questions"
        subtitle=""
        items={faqContent} />
      <div className="flex justify-center py-8">
        <GlobalArrowButton
          className="px-8 py-3 text-base"
          arrowClassName="!px-2 !py-1"
          arrowSize={24}
          onClick={() => openFlipbook("https://cdn.kalingauniversity.ac.in/common/Verification+Form.pdf", "Verification Form")}
        >
          Download Application Form
        </GlobalArrowButton>
      </div>
    </div>
  );
}