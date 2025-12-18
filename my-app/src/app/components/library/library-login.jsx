"use client";
import React from "react";
import OrganogramOfKalinga from "../about/organogram_of_kalinga";


export default function LibraryEAccess() {
  return (
    <OrganogramOfKalinga
     
      cardBackgroundColor="bg-[var(--button-red)]"
      useContainer={false}

      
      title="Library E-Access"
      description={[
        "Access the digital library resources of Kalinga University through the official ERP portal. Students, faculty, and researchers can log in to explore a wide range of academic databases, journals, e-books, and research materials anytime, anywhere."
      ]}

      
      buttonLabel="Login"
      href="https://kusis.kalingauniversity.edu.in/"
      buttonClassName="!bg-white !text-black"
      arrowClassName="!bg-[var(--dark-orange-red)]"
      arrowIconClassName="!text-white"
      textClassName="!text-black"

     
      collapsedParagraphs={1}
      readMoreLabel="Read More"
      readLessLabel="Show Less"

      
      showImage={false}
    />
  );
}
