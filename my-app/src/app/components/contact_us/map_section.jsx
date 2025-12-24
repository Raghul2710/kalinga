"use client";
// components/Map.js
import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import SectionHeading from "../general/SectionHeading";
import Image from "next/image";

// Create a singleton loader instance
const loader = new Loader({
  apiKey: "",
  version: "weekly",
  libraries: ["places"],
});

const Map = () => {
  const mapRef = useRef(null);
  const markers = useRef([]);
  const mapInstance = useRef(null);
  const infoWindow = useRef(null);

  // Kalinga University coordinates
  const universityPosition = { lat: 21.1670404, lng: 81.8206352 };
  const kalingaPinUrl = "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/kalinga-pin.png";

  // Define nearest facilities
  const facilities = [
    {
      id: 1,
      name: "Bus Stop",
      distance: "8km Near By",
      icon: "🚌",
      position: { lat: 21.1540426, lng: 81.7963184 },
      pinUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/bus-pin.png",
    },
    {
      id: 2,
      name: "Airport (Raipur)",
      distance: "14km Near By",
      icon: "✈️",
      position: { lat: 21.1859715, lng: 81.7402786 },
      pinUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/airport-pin.png",
    },
    {
      id: 3,
      name: "Railway Station (Raipur)",
      distance: "28km Near By",
      icon: "🚂",
      position: { lat: 21.2573531, lng: 81.6283452 },
      pinUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/rail-pin.png",
    },
    {
      id: 4,
      name: "Hospital",
      distance: "24km Near By",
      icon: "🏥",
      position: { lat: 21.2131334, lng: 81.6536364 },
      pinUrl: "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/hospital-pin.png",
    }
  ];

  const [selectedFacility, setSelectedFacility] = useState(null);
  const facilityMarkers = useRef({}); // Store markers by facility ID
  const animatedMarker = useRef(null); // Store currently animated marker
  const universityMarkerRef = useRef(null); // Store university marker reference

  const handleCardClick = (facility) => {
    setSelectedFacility(facility);
    if (mapInstance.current) {
      // Stop previous animation if any
      if (animatedMarker.current) {
        animatedMarker.current.setAnimation(null);
      }

      // Center map directly on the selected facility and zoom in closely
      mapInstance.current.setCenter(facility.position);
      mapInstance.current.setZoom(16);

      // Get the marker for this facility and animate it
      const marker = facilityMarkers.current[facility.id];
      if (marker) {
        // Add bounce animation
        marker.setAnimation(google.maps.Animation.BOUNCE);
        animatedMarker.current = marker;
        
        // Stop animation after 2 seconds
        setTimeout(() => {
          if (marker) {
            marker.setAnimation(null);
          }
        }, 2000);
      }

      // Close existing info window if open
      if (infoWindow.current) {
        infoWindow.current.close();
      }
    }
  };

  const handleGetDirection = (facility, e) => {
    e.stopPropagation(); // Prevent card click from firing
    // Open Google Maps directions in a new tab
    const origin = `${universityPosition.lat},${universityPosition.lng}`;
    const destination = `${facility.position.lat},${facility.position.lng}`;
    const directionsUrl = `https://www.google.com/maps/dir/${origin}/${destination}`;
    window.open(directionsUrl, '_blank');
  };

  const handleResetMap = () => {
    setSelectedFacility(null);
    if (mapInstance.current) {
      // Stop any animations
      if (animatedMarker.current) {
        animatedMarker.current.setAnimation(null);
      }

      // Reset map to Kalinga University
      mapInstance.current.setCenter(universityPosition);
      mapInstance.current.setZoom(14);

      // Animate the university marker
      if (universityMarkerRef.current) {
        universityMarkerRef.current.setAnimation(google.maps.Animation.BOUNCE);
        animatedMarker.current = universityMarkerRef.current;
        
        // Stop animation after 2 seconds
        setTimeout(() => {
          if (universityMarkerRef.current) {
            universityMarkerRef.current.setAnimation(null);
          }
        }, 2000);
      }

      // Close any info windows
      if (infoWindow.current) {
        infoWindow.current.close();
      }
    }
  };

  // Initialize the map and add markers
  useEffect(() => {
    loader.load().then(() => {
      const map = new google.maps.Map(mapRef.current, {
        center: universityPosition,
        zoom: 14,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });

      mapInstance.current = map;

      // Create marker for Kalinga University
      const universityMarker = new google.maps.Marker({
        position: universityPosition,
        map,
        title: "Kalinga University Raipur",
        icon: {
          url: kalingaPinUrl,
          scaledSize: new google.maps.Size(60, 75),
          anchor: new google.maps.Point(30, 75)
        }
      });

      // Store university marker reference
      universityMarkerRef.current = universityMarker;

      // Create markers for each facility
      markers.current = facilities.map((facility) => {
        const marker = new google.maps.Marker({
          position: facility.position,
          map,
          title: facility.name,
          icon: {
            url: facility.pinUrl,
            scaledSize: new google.maps.Size(60, 75),
            anchor: new google.maps.Point(30, 75)
          }
        });

        // Store marker with facility ID for easy access
        facilityMarkers.current[facility.id] = marker;

        return marker;
      });

      // Add MarkerClusterer
      new MarkerClusterer({ markers: [universityMarker, ...markers.current], map });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-[var(--dark-blue)] p-3 mx-2 rounded-[20px] flex md:flex-row flex-col my-16">
      <div className="relative rounded-[20px] h-[570px] w-full md:w-3/5">
        <div id="map" ref={mapRef} className="w-full h-full rounded-[20px]" />
        {selectedFacility && (
          <button
            onClick={handleResetMap}
            className="absolute top-4 right-4 z-10 bg-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors text-sm font-semibold text-[var(--foreground)] flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Reset Map
          </button>
        )}
      </div>

      <div className="bg-[var(--dark-blue)] md:h-[570px] w-full md:w-2/5 rounded-b-[20px] md:rounded-r-[20px] md:rounded-bl-none p-0 md:p-6">
        <SectionHeading
          title="Nearest by KU"
          titleClassName="text-white mb-6 mt-5 md:mt-0"
        />

        <div className="space-y-4">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              onClick={() => handleCardClick(facility)}
              className="bg-white rounded-lg p-5 shadow-md hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-15 h-15 flex items-center justify-center overflow-hidden">
                  <Image
                    src={facility.pinUrl}
                    alt={facility.name}
                    width={60}
                    height={60}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="font-plus-jakarta-sans text-[20px] text-[var(--foreground)] mb-2">
                    {facility.name}
                  </h4>
                  <div className="flex items-center justify-start flex-wrap md:gap-5 gap-2">
                    <p className="text-[14px] text-[var(--light-text-gray)]">
                      Distance : {facility.distance}
                    </p>
                    <button
                      onClick={(e) => handleGetDirection(facility, e)}
                      className="inline-flex items-center gap-2 text-sm text-[var(--light-text-gray)] hover:text-[var(--button-red)] transition-colors group cursor-pointer"
                    >
                      <span>Get Direction</span>
                      <svg
                        className="w-4 h-4 text-[var(--button-red)] group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 12L12 4M12 4H6M12 4V10"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );  
};

export default Map;