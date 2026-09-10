import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { TooltipProvider } from "@/components/ui/tooltip"

import { ScrollReset } from "./scroll-reset"
import { SiteHeader, SiteFooter } from "./site-header"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "pepeloper/ui — Registry",
  description: "My personal UI component collection.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <script
          defer
          src="https://shipwake.dev/tracker.js"
          data-site="97Vb2im5w1arbH5xwoD3Ipd0mElvurbB"
        />
        <TooltipProvider>
          <ScrollReset />
          <SiteHeader />
          {children}
          <SiteFooter />
        </TooltipProvider>
      </body>
    </html>
  )
}
