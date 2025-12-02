import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aditya Hospital & Gastro Center | Best Gastroenterologist in Sri Ganganagar",
  description:
    "Aditya Hospital is the leading gastroenterology and endoscopy center in Sri Ganganagar, Rajasthan. Offering advanced endoscopic procedures, ERCP, EUS, and 24/7 emergency care with expert specialists.",
  keywords: ["Gastroenterologist", "Endoscopy", "Sri Ganganagar", "Aditya Hospital", "ERCP", "EUS", "Liver Specialist", "Stomach Doctor"],
  generator: "v0.app",
  icons: {
    icon: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
