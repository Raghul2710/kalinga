    import ImageSlider from "./imageslider";
    import SectionHeading from "../general/SectionHeading";
    export default function Hearfrom({ items = [], title = "Hear From Our Clients" }) {
    return <>
        <div className=" bg-[var(--dark-blue)] rounded-xl  mx-5 md:my-16 !mb-0 md:p-8 py-10">
            <div className="container mx-auto"> 
        <SectionHeading  title={title}  titleClassName="text-center text-white font-light" />

        <ImageSlider items={items} />
            </div>
        </div>
    </>
    }