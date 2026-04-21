"use client";

import Script from "next/script";

export default function NPFChatbot() {
  return (
    <>
      <div
        className="npf_chatbots"
        data-w="83d92d42d8cc4c839d761d929fc3211c"
        style={{ display: "none" }}
        suppressHydrationWarning
      />
      <Script
        id="npf-chatbot-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var s=document.createElement("script");
            s.type="text/javascript";
            s.async=true;
            s.src="https://chatbot.in1.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/6426019081578b6b/83d92d42d8cc4c839d761d929fc3211c";
            document.body.appendChild(s);
          `,
        }}
      />
    </>
  );
}
