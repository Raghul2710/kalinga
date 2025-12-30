'use client';

import { createContext, useContext, useState, useEffect, useRef, useMemo } from 'react';
import { usePathname } from 'next/navigation';

const BreadcrumbContext = createContext(null);

export function BreadcrumbProvider({ children }) {
  const [breadcrumbData, setBreadcrumbData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  // Clear breadcrumb data when pathname changes
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      setBreadcrumbData(null);
      setIsLoading(true); // Set loading when route changes
    }
  }, [pathname]);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ 
    breadcrumbData, 
    setBreadcrumbData,
    isLoading,
    setIsLoading
  }), [breadcrumbData, isLoading]);

  // Auto-set loading to false when breadcrumbData is set
  useEffect(() => {
    if (breadcrumbData !== null) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [breadcrumbData]);

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
  const setIsLoading = context?.setIsLoading;
  const pathname = usePathname();
  const prevDataRef = useRef(undefined);
  const prevPathnameRef = useRef(pathname);
  const isMountedRef = useRef(true);
  
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // Clear data when pathname changes (component remounts on new route)
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      prevDataRef.current = undefined;
      // Clear immediately when route changes
      if (setBreadcrumbData) {
        setBreadcrumbData(null);
      }
      if (setIsLoading) {
        setIsLoading(true);
      }
    }
  }, [pathname, setBreadcrumbData, setIsLoading]);
  
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
        // Update loading state
        if (setIsLoading) {
          setIsLoading(data === null || data === undefined);
        }
      }
      return;
    }
    
    // Only update if data actually changed
    if (currentDataStr !== prevDataStr) {
      setBreadcrumbData(data || null);
      prevDataRef.current = data;
      // Update loading state
      if (setIsLoading) {
        setIsLoading(data === null || data === undefined);
      }
    }
  }, [data, setBreadcrumbData, setIsLoading]);
  
    // Cleanup: reset when component unmounts
  useEffect(() => {
    return () => {
      if (setBreadcrumbData && isMountedRef.current) {
        setBreadcrumbData(null);
        prevDataRef.current = undefined;
      }
      if (setIsLoading && isMountedRef.current) {
        setIsLoading(true);
      }
    };
  }, [setBreadcrumbData, setIsLoading]);
}

