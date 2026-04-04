"use client";

import PublicationGrid from "../research/publication-grid";


export default function PhdGrid() {
  const phdStats = [
    {
      title: "Patents Published",
      value: "549+",
      description: "",
    },
    {
      title: "Centres Of Excellence",
      value: "7",
      description: "",
    },
    {
      title: "Research Publications",
      value: "4700+",
      description: "",
    },
    {
      title: "Consultancy Projects",
      value: "130+",
      description: "",
    },
    {
      title: "Laboratories",
      value: "100+",
      description: "",
    },
    {
      title: "Sponsored Research Projects",
      value: "160+",
      description: "",
    },
  ];

  return <PublicationGrid stats={phdStats} />;
}
