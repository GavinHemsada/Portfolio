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
    "I need a high-converting landing page for a SaaS startup",
    "Looking for a real estate landing page designer for lead generation",
    "Healthcare landing page expert for HIPAA compliant medical services",
    "E-commerce product landing page to drive high-volume sales",
    "Law firm landing page design to capture legal consultations",
    "Dental practice landing page for new patient appointments",
    "Fitness and wellness landing page for online coaching programs",
    "Cryptocurrency and NFT landing page for project launches",
    "Affiliate marketing landing page with direct response copy",
    "Educational course landing page for webinar registrations",
    "Non-profit donation landing page to increase fundraising",
    "Tech startup landing page design like Stripe or Notion",
    "B2B enterprise landing page for long-cycle sales funnels",
    "Solar energy landing page for lead generation and quotes",
    "Pet niche landing page for e-commerce subscription products",
    "Travel agency landing page for exclusive holiday bookings",
    "Financial services landing page for investment consulting",
    "Insurance landing page to generate daily leads and quotes",
    "Interior design portfolio landing page to showcase projects",
    "Photography landing page for booking wedding sessions",
    "Fashion brand landing page for seasonal collection launches",
    "Beauty and cosmetics landing page for influencers and brands",
    "Home services landing page for plumbing and HVAC leads",
    "Author landing page for book pre-order and launch events",
    "Fintech landing page for banking and digital payment apps"
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
