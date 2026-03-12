'use client';

import { useEffect } from 'react';

export default function KalseeApplicationForm() {
  useEffect(() => {
    // Load NoPaperForms widget script
    const scriptId = 'npf-widget-script';

    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widgets.nopaperforms.com/emwgts.js";
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 md:p-6 w-full max-w-md shadow-xl min-h-[550px]">
      <div
        className="npf_wgts"
        data-height="550px"
        data-w="6eb428165b9e7391f8ffaf9488673f81"
      />
    </div>
  );
}

