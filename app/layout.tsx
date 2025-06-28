import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Santipan Sunee - Full Stack Developer",
  description:
    "Professional Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Available for freelance projects and full-time opportunities.",
  keywords: "Full Stack Developer, React, Next.js, Node.js, TypeScript, Web Development, Frontend, Backend",
  authors: [{ name: "Alex Johnson" }],
  openGraph: {
    title: "Alex Johnson - Full Stack Developer",
    description: "Professional Full Stack Developer Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Johnson - Full Stack Developer",
    description: "Professional Full Stack Developer Portfolio",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
