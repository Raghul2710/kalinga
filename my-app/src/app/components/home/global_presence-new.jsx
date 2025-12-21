"use client";

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import SectionHeading from "../general/SectionHeading";
import LogoLoop from "../gsap/LogoLoop";

const locations = [ 
  {
    id: 1,
    name: "AFGHANISTAN",
    flag: "https://flagcdn.com/w40/af.png",
    coordinates: { top: "35%", left: "69%" }
  },
  {
    id: 2,
    name: "ANGOLA",
    flag: "https://flagcdn.com/w40/ao.png",
    coordinates: { top: "40%", left: "50%" }
  },
  {
    id: 3,
    name: "BANGLADESH",
    flag: "https://flagcdn.com/w40/bd.png",
    coordinates: { top: "45%", left: "73%" }
  },
  {
    id: 4,
    name: "BURUNDI",
    flag: "https://flagcdn.com/w40/bi.png",
    coordinates: { top: "40%", left: "55%" }
  },
  {
    id: 5,
    name: "CAMEROON",
    flag: "https://flagcdn.com/w40/cm.png",
    coordinates: { top: "39%", left: "49%" }
  },
  {
    id: 6,
    name: "CONGO",
    flag: "https://flagcdn.com/w40/cd.png",
    coordinates: { top: "42%", left: "51%" }
  },
  {
    id: 7,
    name: "GAMBIA",
    flag: "https://flagcdn.com/w40/gm.png",
    coordinates: { top: "34%", left: "42%" }
  },
  {
    id: 8,
    name: "GHANA",
    flag: "https://flagcdn.com/w40/gh.png",
    coordinates: { top: "36%", left: "43%" }
  },
  {
    id: 9,
    name: "IVORY COAST",
    flag: "https://flagcdn.com/w40/ci.png",
    coordinates: { top: "36%", left: "42%" }
  },
  {
    id: 10,
    name: "LESOTHO",
    flag: "https://flagcdn.com/w40/ls.png",
    coordinates: { top: "45%", left: "55%" }
  },
  {
    id: 11,
    name: "LIBERIA",
    flag: "https://flagcdn.com/w40/lr.png",
    coordinates: { top: "33%", left: "42%" }
  },
  {
    id: 12,
    name: "MALAWI",
    flag: "https://flagcdn.com/w40/mw.png",
    coordinates: { top: "44%", left: "55%" }
  },
  {
    id: 13,
    name: "MOZAMBIQUE",
    flag: "https://flagcdn.com/w40/mz.png",
    coordinates: { top: "44%", left: "57%" }
  },
  {
    id: 14,
    name: "NAMIBIA",
    flag: "https://flagcdn.com/w40/na.png",
    coordinates: { top: "45%", left: "50%" }
  },
  {
    id: 15,
    name: "NEPAL",
    flag: "https://flagcdn.com/w40/np.png",
    coordinates: { top: "43%", left: "73%" }
  },
  {
    id: 16,
    name: "NIGERIA",
    flag: "https://flagcdn.com/w40/ng.png",
    coordinates: { top: "37%", left: "45%" }
  },
  {
    id: 17,
    name: "PAPUA NEW GUINEA",
    flag: "https://flagcdn.com/w40/pg.png",
    coordinates: { top: "81%", left: "83%" }
  },
  {
    id: 18,
    name: "RWANDA",
    flag: "https://flagcdn.com/w40/rw.png",
    coordinates: { top: "41%", left: "54%" }
  },
  {
    id: 19,
    name: "SINGAPORE",
    flag: "https://flagcdn.com/w40/sg.png",
    coordinates: { top: "60%", left: "75%" }
  },
  {
    id: 20,
    name: "SOMALIA",
    flag: "https://flagcdn.com/w40/so.png",
    coordinates: { top: "39%", left: "60%" }
  },
  {
    id: 21,
    name: "SOUTH AFRICA",
    flag: "https://flagcdn.com/w40/za.png",
    coordinates: { top: "48%", left: "52%" }
  },
  {
    id: 22,
    name: "SOUTH KOREA",
    flag: "https://flagcdn.com/w40/kr.png",
    coordinates: { top: "59%", left: "85%" }
  },
  {
    id: 23,
    name: "SOUTH SUDAN",
    flag: "https://flagcdn.com/w40/ss.png",
    coordinates: { top: "40%", left: "54%" }
  },
  {
    id: 24,
    name: "SUDAN",
    flag: "https://flagcdn.com/w40/sd.png",
    coordinates: { top: "35%", left: "53%" }
  },
  {
    id: 25,
    name: "SWAZILAND",
    flag: "https://flagcdn.com/w40/sz.png",
    coordinates: { top: "45%", left: "54%" }
  },
  {
    id: 26,
    name: "SYRIA",
    flag: "https://flagcdn.com/w40/sy.png",
    coordinates: { top: "30%", left: "58%" }
  },
  {
    id: 27,
    name: "TANZANIA",
    flag: "https://flagcdn.com/w40/tz.png",
    coordinates: { top: "44%", left: "54%" }
  },
  {
    id: 28,
    name: "ZAMBIA",
    flag: "https://flagcdn.com/w40/zm.png",
    coordinates: { top: "46%", left: "54%" }
  },
  {
    id: 29,
    name: "ZIMBABWE",
    flag: "https://flagcdn.com/w40/zw.png",
    coordinates: { top: "43%", left: "54%" }
  }
];

// GlowingBox Component
function GlowingBox({ children, borderColor = "var(--dark-blue)", style = {}, className = "", ...props }) {
  const boxRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!boxRef.current) return;
      
      const box = boxRef.current;
      const rect = box.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;
      
      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      angle = (angle + 360) % 360;
      
      box.style.setProperty("--start", angle + 60);
      box.style.setProperty("--border-color", borderColor);
    };
    
    const box = boxRef.current;
    if (box) {
      box.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      if (box) {
        box.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [borderColor]);

  const defaultStyle = {
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
    ...style
  };

  return (
    <div 
      ref={boxRef} 
      className={`glowing-box ${className}`}
      style={defaultStyle}
      {...props}
    >
      {children}
      
      <style dangerouslySetInnerHTML={{__html: `
        .glowing-box {
          --start: 0;
          --border-color: ${borderColor};
        }
        
        .glowing-box::before {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: inherit;
          border: 4px solid transparent;
          background: var(--border-color);
          mask: linear-gradient(#0000, #0000), conic-gradient(from calc((
                      var(--start) - (20 * 1.1)
                  ) * 1deg), #ffffff1f 0deg, white, #ffffff00 100deg);
          mask-composite: intersect;
          mask-clip: padding-box, border-box;
          opacity: 0;
          transition: 0.5s ease;
          z-index: 10;
          pointer-events: none;
        }
        
        .glowing-box:hover::before {
          opacity: 1;
        }
      `}} />
    </div>
  );
}

export default function Map({ backgroundColor = "", textColor = "", subtitleTextColor = "!text-[var(--button-red)]", textColorClass="text-[var(--dark-orange-red)]" }) {
  const [activeLocation, setActiveLocation] = useState(null);

  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4 relative">
        <SectionHeading 
          subtitle="Global Scale"
          title="Expanding Horizons Through Global Partnerships"
          subtitleClassName="mb-2 text-center"
          titleClassName={`mb-8 text-center ${textColor}`}
          subtitleTextColor={subtitleTextColor}
        />
        <p className={`text-center ${textColor}`}>Kalinga University is home to students from 29+ countries, fostering a truly international learning environment. Through academic exchange programs, research collaborations, and strategic global alliances, the University prepares students to become globally competent professionals and leaders.</p>
        <div className="relative">
          <Image 
            src="https://kalinga-university.s3.ap-south-1.amazonaws.com/about/globe-new.png"
            alt="Global Presence Map" 
            width={1200} 
            height={600} 
            className="w-full pt-10"
            quality={100}
            priority
          />
          
          {/* Location Points */}
          {locations.map((location) => (
            <div
              key={location.id}
              className={`absolute transition-all duration-300 group ${
                activeLocation === null || activeLocation === location.id 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-0'
              }`}
              style={{
                top: location.coordinates.top,
                left: location.coordinates.left,
              }}
            >
              <svg 
                className={`${textColorClass} text-4xl animate-bounce w-10 h-10`} 
                fill="currentColor" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-white text-primary px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
                {location.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Legend - Horizontal under image */}
        <div className="w-full rounded-[20px] bg-[#D9D9D975] backdrop-blur-md overflow-hidden">
          <GlowingBox borderColor="var(--button-red)" className="p-6 rounded-[20px]">
            {/* Marquee Slider using LogoLoop */}
            <div className="relative z-20" style={{ pointerEvents: 'auto' }}>
              <LogoLoop
                logos={locations.map(location => ({
                  src: location.flag,
                  alt: location.name,
                  title: location.name,
                  id: location.id
                }))}
                speed={60}
                direction="left"
                logoHeight={40}
                gap={32}
                pauseOnHover={true}
                hoverSpeed={0}
                ariaLabel="Global presence locations"
                renderItem={(item, key) => (
                  <div
                    className={`flex flex-col md:flex-row items-center gap-2 md:gap-3 cursor-pointer transition-colors py-2 px-2 ${
                      activeLocation === item.id ? 'underline underline-offset-4' : ''
                    } ${textColor}`}
                    onClick={() => setActiveLocation(
                      activeLocation === item.id ? null : item.id
                    )}
                  >
                    <Image src={item.src} alt={item.alt} width={30} height={30} />
                    {/* <span className="text-xs md:text-sm text-center whitespace-nowrap">{item.title}</span> */}
                  </div>
                )}
              />
            </div>
          </GlowingBox>
        </div>
      </div>
    </section>
  );
}
