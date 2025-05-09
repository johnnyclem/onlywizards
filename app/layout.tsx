import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Code Hike v1 Starter",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
