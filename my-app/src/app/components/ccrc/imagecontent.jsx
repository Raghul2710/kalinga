import Image from "next/image";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";
import SectionHeading from "../general/SectionHeading";

export default function ImageContent({
  imageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrclogo.webp",
  imageAlt = "CCRC Banner",
  imageWidth = 600,
  imageHeight = 400,
  title = "Career and Corporate Resource Centre",
  subtitle = "About CCRC ",
  description = "The Career and Corporate Resource Centre (CCRC) of Kalinga University bridges academic learning and industrial knowledge through collaborations and customised solutions. Our services include: Corporate Trainings & Psychometric Analysis, Consultancy Services: 360 Degree PMS & HRIS.",
  buttonText = "Apply for CCRC",
  onButtonClick,
  className = "",
}) {
  return (
    <section className={`container rounded-xl mx-auto bg-[var(--light-gray)] my-16  md:p-12 p-6 py-10 ${className}`}>
      <div className="grid items-center md:grid-cols-12 grid-cols-6  gap-6 ">
        
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          width={imageWidth} 
          height={imageHeight}
          className="md:col-span-4 col-span-6 w-9/12 md:w-4/5"
        />
 
        <div className="md:col-span-8 col-span-6 gap-5">
            <SectionHeading title={title} subtitle={subtitle} titleClassName="!py-2" subtitleClassName="!py-2" />
            <p className="text-sm pb-4">{description}</p>
           <GlobalArrowButton variant="transparent" onClick={onButtonClick}>{buttonText}</GlobalArrowButton>
        </div>
      </div>
     
    </section>
  );
}

