import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://santipan.dev"),
  title: {
    default: "Santipan Sunee | Full Stack Developer & Digital Creator",
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
    "Digital Creator",
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
    title: "Santipan Sunee | Full Stack Developer & Digital Creator",
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
    title: "Santipan Sunee | Full Stack Developer & Digital Creator",
    description:
      "Passionate Full Stack Developer crafting exceptional digital experiences with modern technologies. Specialized in React, Next.js, Node.js, and innovative web solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
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
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${playfair.variable}`}
    >
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
