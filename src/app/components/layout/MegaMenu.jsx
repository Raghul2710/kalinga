'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

const MegaMenu = ({ sections, imageUrl, imageAlt = "Menu Image" }) => {
  const menuRef = useRef(null);
  const [position, setPosition] = useState({ left: '50%', transform: 'translateX(-50%)' });

  // Calculate grid columns: 1 for image + number of sections
  const totalCols = sections.length + 1;
  const gridColsClass = totalCols === 2 ? 'grid-cols-2' :
    totalCols === 3 ? 'grid-cols-3' :
      totalCols === 4 ? 'grid-cols-4' :
        'grid-cols-5';

  useEffect(() => {
    const adjustPosition = () => {
      // The ref is detached on unmount before this effect's cleanup runs, so a
      // pending timer or resize event can still fire with a null ref.
      const menu = menuRef.current;
      if (!menu) return;

      const rect = menu.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const padding = 24;

      let adjustmentStyle = { left: '50%', transform: 'translateX(-50%)', right: 'auto' };

      // Calculate how much the menu overflows
      const overflowLeft = padding - rect.left;
      const overflowRight = rect.right - (viewportWidth - padding);

      if (overflowLeft > 0) {
        // Menu overflows on the left - shift it right
        adjustmentStyle = {
          left: '50%',
          transform: `translateX(calc(-50% + ${overflowLeft}px))`,
          right: 'auto'
        };
      } else if (overflowRight > 0) {
        // Menu overflows on the right - shift it left
        adjustmentStyle = {
          left: '50%',
          transform: `translateX(calc(-50% - ${overflowRight}px))`,
          right: 'auto'
        };
      }

      setPosition(adjustmentStyle);
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(adjustPosition, 10);
    window.addEventListener('resize', adjustPosition);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', adjustPosition);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="absolute pt-[25px] z-[99999] pointer-events-auto"
      style={position}
    >
      <div className="bg-white rounded-xl shadow-2xl border-2 border-[var(--button-red)] p-6 w-fit">
        <div className={`grid ${gridColsClass} gap-6`} style={{ gridTemplateColumns: `repeat(${totalCols}, 280px)` }}>

          {/* Image Card */}
          <Link
            href="/about-us"
            className="relative rounded-lg overflow-hidden group block min-h-[220px]"
          >
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold text-lg">
                  About Kalinga
                </p>
              </div> */}
          </Link>

          {/* Sections */}
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="mb-3 pb-2 border-b border-gray-300">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="block text-sm text-black hover:text-red-600 hover:pl-2 transition-all"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
