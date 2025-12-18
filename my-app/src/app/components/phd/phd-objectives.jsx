import ImageListItem from "../ccrc/imagelistitem";

export default function PhdObjectivesPanel() {
  return (
    <ImageListItem
      imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
      imageAlt="Doctoral Studies & Research"
     description=""
      title="Objectives Of Our Doctoral Studies & Research"
      subtitle=""
      items={[
        {
          text: "Develop and implement university guidelines, policies, and ordinances according to the standards set by the statutory regulatory bodies to promote a world-class research environment.",
        },
        {
          text: "Continuously track and evaluate the quality of research and development activities.",
        },
        {
          text: "Maintain advanced research infrastructure for research facilitation.",
        },
        {
          text: "Overseeing every stage of the PhD process from admission to awarding the doctoral degree.",
        },
        {
          text: "Manage and support the publication of research work in scientific journals.",
        },
        {
          text: "Establish and manage partnerships through Memorandum of Understanding (MoU) with national and international institutions.",
        },
        {
          text: "Strengthen the reputation of the university by producing high-quality research outcomes.",
        },
        {
          text: "Conduct workshops, seminars, and hands-on training programs to develop interest in research work among students and faculty members.",
        },
        {
          text: "Strictly adhere to ethical research practices and university guidelines.",
        },
      ]}
    />
  );
}
