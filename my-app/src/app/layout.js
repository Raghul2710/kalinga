import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Breadcrumb from "./components/layout/Breadcrumb";
import Footer from "./components/layout/Footer";
import ClickSparkWrapper from "./components/layout/ClickSparkWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kalinga University - Transforming Futures with Knowledge & Innovation",
  description: "Kalinga University is a leading institution offering world-class education in engineering, management, science, arts, and more.",
  other: {
    "google-fonts-inter": "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap",
    "google-fonts-stix": "https://fonts.googleapis.com/css2?family=STIX+Two+Math&display=swap",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
      >
        <ClickSparkWrapper>
          <Header />
          <main className="min-h-screen">
            <Breadcrumb />
            {children}
          </main>
          <Footer />
        </ClickSparkWrapper>
      </body>
    </html>
  );
}
