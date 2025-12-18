"use client";

import PublicationGrid from "../research/publication-grid";


export default function ResearchGrid() {
  return (
    <PublicationGrid
      stats={[
        {
          title: "Total Number of Centres of Excellence (CoE)",
          value: "7",
          description: "",
        },
        {
          title: "Total Number of Laboratories",
          value: "90+",
          description: "",
        },
      ]}
    />
  );
}
