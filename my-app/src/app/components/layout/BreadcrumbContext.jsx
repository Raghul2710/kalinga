'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const BreadcrumbContext = createContext(null);

export function BreadcrumbProvider({ children }) {
  const [breadcrumbData, setBreadcrumbData] = useState(null);

  return (
    <BreadcrumbContext.Provider value={{ breadcrumbData, setBreadcrumbData }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}

export function useBreadcrumb() {
  return useContext(BreadcrumbContext);
}

// Hook for pages to set breadcrumb data
export function useBreadcrumbData(data) {
  const context = useBreadcrumb();
  const setBreadcrumbData = context?.setBreadcrumbData;
  
  useEffect(() => {
    if (setBreadcrumbData) {
      // Set data if provided, or clear it if null/undefined
      setBreadcrumbData(data || null);
    }
    // Cleanup: reset when component unmounts
    return () => {
      if (setBreadcrumbData) {
        setBreadcrumbData(null);
      }
    };
  }, [data, setBreadcrumbData]);
}

