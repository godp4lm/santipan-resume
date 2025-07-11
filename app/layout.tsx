import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Santipan Sunee | Full Stack Developer",
    template: "%s | Santipan Sunee",
  },
  description:
    "Passionate Full Stack Developer crafting exceptional digital experiences with modern technologies. Specialized in React, Next.js, Node.js, and innovative web solutions. Based in Thailand, available worldwide.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "Thailand Developer",
    "Freelance Developer",
    "Modern Web Technologies",
    "Progressive Web Apps",
    "API Development",
  ],
  authors: [{ name: "Santipan Sunee", url: "https://github.com/santipan2003" }],
  creator: "Santipan Sunee",
  publisher: "Santipan Sunee",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://santipan.dev",
    siteName: "Santipan Sunee Portfolio",
    title: "Santipan Sunee | Full Stack Developer",
    description:
      "Passionate Full Stack Developer crafting exceptional digital experiences with modern technologies. Specialized in React, Next.js, Node.js, and innovative web solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Santipan Sunee - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@santipan_dev",
    creator: "@santipan_dev",
    title: "Santipan Sunee | Full Stack Developer",
    description:
      "Passionate Full Stack Developer crafting exceptional digital experiences with modern technologies. Specialized in React, Next.js, Node.js, and innovative web solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://santipan.dev",
  },
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark light",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Santipan Portfolio",
    "application-name": "Santipan Portfolio",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
