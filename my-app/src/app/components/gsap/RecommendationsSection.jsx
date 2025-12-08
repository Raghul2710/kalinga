'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getLogoSrc, getLogoAlt } from '../../config/contact-info';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function RecommendationsSection() {
  const containerRef = useRef(null);
  const fixedImageRef = useRef(null);
  const box0Ref = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);
  const box5Ref = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const container = containerRef.current;
    if (!container) return;

    // Fixed centered image that scales on scroll
    if (fixedImageRef.current) {
      // Set initial scale and center position using GSAP
      gsap.set(fixedImageRef.current, {
        scale: 1,
        xPercent: -50,
        yPercent: -50,
        transformOrigin: 'center center',
      });

      // Scale animation when box1 comes into view
      gsap.to(fixedImageRef.current, {
        scale: 2,
        transformOrigin: 'center center',
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: box1Ref.current,
          start: 'top top',
          end: '+=300',
          scrub: 0.5,
          // markers: true, // Uncomment to see trigger points
        },
      });

      // Scale animation when box2 comes into view
      gsap.to(fixedImageRef.current, {
        scale: 7,
        transformOrigin: 'center center',
        ease: 'power1.inOut',
        immediateRender: false,
        scrollTrigger: {
          trigger: box2Ref.current,
          start: 'top top',
          end: '+=300',
          scrub: 0.5,
          // markers: true, // Uncomment to see trigger points
        },
      });

      // Scale animation when box3 comes into view
      gsap.to(fixedImageRef.current, {
        scale: 10,
        transformOrigin: 'center center',
        ease: 'power1.inOut',
        immediateRender: false,
        scrollTrigger: {
          trigger: box3Ref.current,
          start: 'top top',
          end: '+=300',
          scrub: 0.5,
          // markers: true, // Uncomment to see trigger points
        },
      });
    }

    // Animate each box element as it comes into view
    const boxes = [
      { ref: box0Ref },
      { ref: box1Ref },
      { ref: box2Ref },
      { ref: box3Ref },
      { ref: box4Ref },
      { ref: box5Ref },
    ];

    boxes.forEach((box, index) => {
      if (!box.ref.current) return;

      // Set initial state - start from different positions
      const randomX = (Math.random() - 0.5) * 400;
      const randomY = (Math.random() - 0.5) * 400;
      const randomRotation = (Math.random() - 0.5) * 60;
      const randomScale = 0.2 + Math.random() * 0.3;

      gsap.set(box.ref.current, {
        opacity: 0,
        x: randomX,
        y: randomY,
        rotation: randomRotation,
        scale: randomScale,
      });

      // Animate to final position when scrolling
      gsap.to(box.ref.current, {
        opacity: 1,
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: box.ref.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#8B0000', overflowX: 'hidden' }}>
      {/* Fixed centered image (like box3 in CodePen) */}
      <div
        ref={fixedImageRef}
        className="fixed"
        style={{
          top: '50vh',
          left: '50vw',
          width: '100px',
          height: '100px',
          zIndex: 10,
        }}
      >
        <Image
          src={getLogoSrc('primary')}
          alt={getLogoAlt('primary')}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Long scrollable container */}
      <div
        ref={containerRef}
        className="relative max-w-[1200px] mx-auto"
        style={{
          height: '5000px',
          backgroundColor: '#8B0000',
          transformOrigin: 'center center',
        }}
      >
        {/* Center Text - Fixed position */}
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 z-20 pointer-events-none"
          style={{ width: '100%', maxWidth: '1200px' }}
        >
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Real Recommendations
            <br />
            <span className="block mt-2">by real people</span>
          </h2>
        </div>

        {/* Box 0 - at top (0px) */}
        <div
          ref={box0Ref}
          className="absolute"
          style={{
            top: '0px',
            left: '10%',
            width: '120px',
            height: '120px',
          }}
        >
          <Image
            src={getLogoSrc('primary')}
            alt={getLogoAlt('primary')}
            fill
            className="object-contain"
          />
        </div>

        {/* Box 1 - at 150vh (approximately 1125px for 750px viewport) */}
        <div
          ref={box1Ref}
          className="absolute"
          style={{
            top: '150vh',
            left: '20%',
            width: '100px',
            height: '100px',
          }}
        >
          <Image
            src={getLogoSrc('primary')}
            alt={getLogoAlt('primary')}
            fill
            className="object-contain"
          />
        </div>

        {/* Box 2 - at 300vh */}
        <div
          ref={box2Ref}
          className="absolute"
          style={{
            top: '300vh',
            left: '75%',
            width: '110px',
            height: '110px',
          }}
        >
          <Image
            src={getLogoSrc('primary')}
            alt={getLogoAlt('primary')}
            fill
            className="object-contain"
          />
        </div>

        {/* Box 3 - at 450vh */}
        <div
          ref={box3Ref}
          className="absolute"
          style={{
            top: '450vh',
            left: '15%',
            width: '95px',
            height: '95px',
          }}
        >
          <Image
            src={getLogoSrc('primary')}
            alt={getLogoAlt('primary')}
            fill
            className="object-contain"
          />
        </div>

        {/* Box 4 - at 600vh */}
        <div
          ref={box4Ref}
          className="absolute"
          style={{
            top: '600vh',
            left: '80%',
            width: '105px',
            height: '105px',
          }}
        >
          <Image
            src={getLogoSrc('primary')}
            alt={getLogoAlt('primary')}
            fill
            className="object-contain"
          />
        </div>

        {/* Box 5 - at 750vh */}
        <div
          ref={box5Ref}
          className="absolute"
          style={{
            top: '750vh',
            left: '50%',
            width: '115px',
            height: '115px',
          }}
        >
          <Image
            src={getLogoSrc('primary')}
            alt={getLogoAlt('primary')}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

