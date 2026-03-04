// Import DOMMatrix polyfill first, before any other imports
if (typeof window === 'undefined' && typeof global !== 'undefined') {
  try {
    require('../../polyfills/dommatrix.js');
  } catch (e) {
    // Polyfill file not found, define inline
    if (typeof global.DOMMatrix === 'undefined') {
      global.DOMMatrix = class DOMMatrix {
        constructor(init) {
          if (typeof init === 'string') {
            this.a = 1; this.b = 0; this.c = 0; this.d = 1; this.e = 0; this.f = 0;
          } else if (init) {
            this.a = init.a ?? 1; this.b = init.b ?? 0; this.c = init.c ?? 0;
            this.d = init.d ?? 1; this.e = init.e ?? 0; this.f = init.f ?? 0;
          } else {
            this.a = 1; this.b = 0; this.c = 0; this.d = 1; this.e = 0; this.f = 0;
          }
        }
        multiply(other) {
          return new global.DOMMatrix({
            a: this.a * other.a + this.c * other.b,
            b: this.b * other.a + this.d * other.b,
            c: this.a * other.c + this.c * other.d,
            d: this.b * other.c + this.d * other.d,
            e: this.a * other.e + this.c * other.f + this.e,
            f: this.b * other.e + this.d * other.f + this.f,
          });
        }
        translate(x, y) {
          return this.multiply(new global.DOMMatrix({ a: 1, b: 0, c: 0, d: 1, e: x, f: y }));
        }
        scale(x, y) {
          return this.multiply(new global.DOMMatrix({ a: x, b: 0, c: 0, d: y || x, e: 0, f: 0 }));
        }
        rotate(angle) {
          const rad = (angle * Math.PI) / 180;
          const cos = Math.cos(rad);
          const sin = Math.sin(rad);
          return this.multiply(new global.DOMMatrix({ a: cos, b: sin, c: -sin, d: cos, e: 0, f: 0 }));
        }
        toString() {
          return `matrix(${this.a}, ${this.b}, ${this.c}, ${this.d}, ${this.e}, ${this.f})`;
        }
      };
    }
  }
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Breadcrumb from "./components/layout/Breadcrumb";
import Footer from "./components/layout/Footer";
import ClickSparkWrapper from "./components/layout/ClickSparkWrapper";
import { FlipbookProvider } from "./components/general/FlipbookContext";
import ChatbotPopup from "./components/layout/ChatbotPopup";
import { ChatbotProvider } from "./components/layout/ChatbotContext";
import { headers } from "next/headers";
import siteMeta from "./config/site-meta.json";
import { getPageMetadata } from "@/lib/getPageMetadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultMetadata = {
  ...siteMeta,
  metadataBase: siteMeta.metadataBase ? new URL(siteMeta.metadataBase) : undefined,
};

// Dynamic meta from metadata_export.json by path; edit that file to update any page's title/description.
export async function generateMetadata() {
  const h = await headers();
  const pathname = h.get("x-pathname");
  if (!pathname) return defaultMetadata;
  let metadataExport;
  try {
    const fs = require("fs");
    const path = require("path");
    const jsonPath = path.join(process.cwd(), "metadata_export.json");
    if (fs.existsSync(jsonPath)) {
      metadataExport = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    }
  } catch (_) {
    return defaultMetadata;
  }
  const meta = getPageMetadata(pathname, metadataExport);
  if (!meta) return defaultMetadata;
  return {
    ...meta,
    metadataBase: meta.metadataBase ? new URL(meta.metadataBase) : defaultMetadata.metadataBase,
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager - as high in head as possible */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WV53V78');`,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=STIX+Two+Math&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) - immediately after opening body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WV53V78"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <ChatbotProvider>
          <FlipbookProvider>
            <ClickSparkWrapper>
              <Header />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    if (typeof history !== 'undefined') history.scrollRestoration = 'manual';
                    
                    const originalError = console.error;
                    console.error = function (...args) {
                      if (typeof args[0] === 'string' && (
                        args[0].includes('A tree hydrated but some attributes of the server rendered HTML') ||
                        args[0].includes('Hydration failed because the initial UI does not match') ||
                        args[0].includes('Warning: Expected server HTML to contain a matching') ||
                        args[0].includes('Warning: Text content did not match') ||
                        args[0].includes('Warning: Prop ')
                      )) {
                        return;
                      }
              originalError.apply(console, args);
                    };
              `
                }}
              />
              <main className="min-h-screen">
                <Breadcrumb />
                {children}
              </main>
              <Footer />
              <ChatbotPopup />
            </ClickSparkWrapper>
          </FlipbookProvider>
        </ChatbotProvider>
      </body>
    </html>
  );
}
