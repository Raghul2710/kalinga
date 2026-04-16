"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function NPFWidget() {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                .npf-sticky-button {
                    position: fixed !important;
                    right: 0 !important;
                    top: 50% !important;
                    /* Standard center-right vertical tab */
                    transform: rotate(-90deg) translate(50%, 0) !important;
                    transform-origin: bottom right !important;
                    background: #972B28 !important;
                    padding: 8px 20px !important;
                    font-size: 16px !important;
                    font-weight: 500 !important;
                    letter-spacing: 2px !important;
                    border-radius: 10px 10px 0 0 !important;
                    cursor: pointer !important;
                    z-index: 2147483647 !important;
                    font-family: "plus jakarta sans",sans-serif !important;
                    white-space: nowrap !important;
                    display: block !important;
                    visibility: visible !important;
                }
                /* Surgical suppression for NPF launcher/tracking elements only */
                iframe#npf-widget-launcher,
                iframe.npf-widget-launcher,
                #npf-widget-launcher-bubble,
                .npf-chat-icon, 
                .npf-bubble,
                .npf-tracking-icon,
                #npf_chat_icon,
                svg[class*="npf-"] {
                    display: none !important;
                    visibility: hidden !important;
                    opacity: 0 !important;
                    pointer-events: none !important;
                    width: 0 !important;
                    height: 0 !important;
                }
                /* Explicitly allow the modal and form content iframe to be visible and correctly sized */
                .npfwpopup-wrapper, 
                .npf-popup-modal, 
                iframe[id*="npf"],
                iframe[src*="form"],
                [id*="npfWidget"] {
                    display: flex !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    z-index: 2147483647 !important;
                    width: 100% !important;
                    height: 520px !important;
                    min-height: 520px !important;
                }
                /* Mobile adjustments */
                @media (max-width: 1024px) {
                    .npf-sticky-button {
                        z-index: 5 !important;
                        padding: 8px 16px !important;
                        font-size: 13px !important;
                    }
                }
                `
            }} />

            <button
                type="button"
                className="npfWidgetButton npfWidget-91df5911b269a8c3f63541c1f915d331 npf-sticky-button"
            >
                Enquire Now
            </button>

            <Script
                src="https://cdn.npfs.co/js/widget/npfwpopup.js"
                strategy="afterInteractive"
                onLoad={() => {
                    if (typeof NpfWidgetsInit !== 'undefined') {
                        new NpfWidgetsInit({
                            "widgetId": "91df5911b269a8c3f63541c1f915d331",
                            "baseurl": "widgets.nopaperforms.com",
                            "formTitle": "Feedback Form",
                            "titleColor": "#FF0033",
                            "backgroundColor": "#ddd",
                            "iframeHeight": "600px",
                            "buttonbgColor": "#972B28",
                            "buttonTextColor": "#FFF",
                        });
                    }
                }}
            />
        </>
    );
}
