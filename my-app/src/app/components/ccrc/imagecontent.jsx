import Image from "next/image";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";
import SectionHeading from "../general/SectionHeading";

export default function ImageContent({
  imageSrc = "/images/ccrc/ccrc-banner.png",
  imageAlt = "CCRC Banner",
  imageWidth = 100,
  imageHeight = 100,
  title = "About CCRC",
  subtitle = "Career and Corporate Resource Centre",
  description = "The Career and Corporate Resource Centre (CCRC) of Kalinga University bridges academic learning and industrial knowledge through collaborations and customised solutions. Our services include: Corporate Trainings & Psychometric Analysis, Consultancy Services: 360 Degree PMS & HRIS.",
  buttonText = "Apply for CCRC",
  onButtonClick,
  className = "",
}) {
  return (
    <section className={`container mx-auto bg-[var(--light-gray)]   md:p-12 p-6 ${className}`}>
      <div className="grid md:grid-cols-12 grid-cols-6  gap-4">
        
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          width={imageWidth} 
          height={imageHeight}
          className="col-span-4"
        />
 
        <div className="col-span-7 gap-5">
            <SectionHeading title={title} subtitle={subtitle} titleClassName="!py-2" />
            <p className="text-sm pb-4">{description}</p>
           <GlobalArrowButton onClick={onButtonClick}>{buttonText}</GlobalArrowButton>
        </div>
      </div>
     
    </section>
  );
}

