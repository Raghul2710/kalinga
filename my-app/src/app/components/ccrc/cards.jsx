import Image from "next/image";
import GlobalArrowButton from "../general/global-arrow_button";

export default function Cards({ cards = [] }) {

  return (
    <section className="container py-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-[var(--card-sandal)] rounded-xl px-5 py-10 flex flex-col gap-4 w-full mx-auto">
            <div className="flex flex-col justify-between h-full gap-6">
              <div>
          <h3 className="md:text-3xl text-2xl ">{card.title}</h3>
          <p className="text-sm text-[var(--dark-gray)] pt-5">{card.description}</p>
          
          </div>
          <div className="w-full rounded-lg overflow-hidden mt-2 relative">
            <Image
              src={card.imageSrc}
              alt={card.title}
              width={340}
              height={160}
              className="w-full h-auto rounded-lg"
            />
            {/* Red Button (bottom left) */}
            <div className="absolute left-5 bottom-4 z-10">
              <GlobalArrowButton 
                variant="default" 
                onClick={() => {
                  if (card.href) {
                    window.location.href = card.href;
                  }
                }}
              >
                Know More
              </GlobalArrowButton>
            </div>

            {/* Small white rounded box (bottom right) */}
            <div className="absolute right-3 bottom-3  items-center" >
              <Image
                src={card.logoSrc}
                alt="CYCD Logo"
                width={120}
                height={120}
                className="rounded-lg"
                style={{ objectFit: "contain" }}
              />
             
            </div>
          </div>
        </div>
        </div>
      ))}
    </section>
  )
}