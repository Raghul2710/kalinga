"use client";

import React from 'react'
import MainIntro from '../components/about/main_intro'
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import ImageContent from "@/app/components/ccrc/imagecontent";

const breadcrumbData = {
    heroImage:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-front-banner02.webp",
    pageTitle: "Document Verification",
    customBreadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Document Verification", href: "/document-verification" },
    ],
  };
  
  if (typeof window !== "undefined") {
    window.__breadcrumbData = breadcrumbData;
  }


  export default function Page() {
    return (
      <div>
        <ImageContent 
        title="Document Verification" 
        subtitle=""
        description="We understand the importance of accurate documentation verification. Whether you're a prospective student, an employer, or an organisation, we ensure that the documents provided to us are thoroughly verified to maintain the integrity and credibility of our academic system."
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-front-banner02.webp"
        readmore={false} />
        <MainIntro
        title="Public Notice"
        description="We understand the importance of accurate documentation verification. Whether you're a prospective student, an employer, or an organisation, we ensure that the documents provided to us are thoroughly verified to maintain the integrity and credibility of our academic system."
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-front-banner02.webp"
        readmore={false} />
      </div>
    );
  }