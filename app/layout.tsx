import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import MouseGlow from "./components/MouseGlow";

export const metadata: Metadata = {
  metadataBase: new URL("https://gavinhemsandaportfolio.netlify.app/"),
  title: "DevByGavin | Software Engineer & Developer in Sri Lanka",
  description:
    "Gavin (Gavin Hemsada) is a professional software engineer and developer specializing in full-stack web development, scalable applications, and modern software solutions. Based in Sri Lanka.",
  keywords: [
    "Gavin",
    "Gavin Hemsada",
    "software engineer",
    "software developer",
    "software",
    "full-stack developer",
    "Sri Lanka",
    "Next.js",
    "React",
    "Spring Boot",
    "ASP.NET",
    "web development",
    "portfolio",
  ],
  icons: {
    icon: "/logo_with_blackbg.png",
    shortcut: "/logo_with_blackbg.png",
    apple: "/logo_with_blackbg.png",
  },
  openGraph: {
    title: "DevByGavin | Software Engineer & Developer in Sri Lanka",
    description:
      "Gavin (Gavin Hemsada) is a professional software engineer and developer specializing in full-stack web development, scalable applications, and modern software solutions. Based in Sri Lanka.",
    url: "https://gavinhemsandaportfolio.netlify.app/",
    siteName: "DevByGavin Portfolio",
    images: [
      {
        url: "/logo_with_blackbg.png",
        width: 800,
        height: 600,
        alt: "DevByGavin | Software Engineer & Developer in Sri Lanka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevByGavin | Software Engineer & Developer in Sri Lanka",
    description:
      "Gavin (Gavin Hemsada) is a professional software engineer and developer specializing in full-stack web development, scalable applications, and modern software solutions. Based in Sri Lanka.",
    images: ["/logo_with_blackbg.png"],
    creator: "@yourtwitterhandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
