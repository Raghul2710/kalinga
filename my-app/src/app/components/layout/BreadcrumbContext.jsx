'use client';

import { createContext, useContext, useState, useEffect, useRef, useMemo } from 'react';

const BreadcrumbContext = createContext(null);

export function BreadcrumbProvider({ children }) {
  const [breadcrumbData, setBreadcrumbData] = useState(null);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ breadcrumbData, setBreadcrumbData }), [breadcrumbData]);

  return (
    <BreadcrumbContext.Provider value={contextValue}>
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
  const prevDataRef = useRef(undefined);
  const isMountedRef = useRef(true);
  
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  
  useEffect(() => {
    if (!setBreadcrumbData || !isMountedRef.current) return;
    
    // Compare data by serializing to JSON to avoid reference comparison issues
    // Use try-catch in case data contains non-serializable values
    let currentDataStr, prevDataStr;
    try {
      currentDataStr = JSON.stringify(data);
      prevDataStr = JSON.stringify(prevDataRef.current);
    } catch (e) {
      // If serialization fails, fall back to reference comparison
      if (data !== prevDataRef.current) {
        setBreadcrumbData(data || null);
        prevDataRef.current = data;
      }
      return;
    }
    
    // Only update if data actually changed
    if (currentDataStr !== prevDataStr) {
      setBreadcrumbData(data || null);
      prevDataRef.current = data;
    }
  }, [data, setBreadcrumbData]);
  
    // Cleanup: reset when component unmounts
  useEffect(() => {
    return () => {
      if (setBreadcrumbData && isMountedRef.current) {
        setBreadcrumbData(null);
        prevDataRef.current = null;
      }
    };
  }, [setBreadcrumbData]);
}

