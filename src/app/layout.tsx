/* eslint-disable */
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Space_Mono } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
})


export const metadata: Metadata = {
  title: "Akeso Health",
  description: "At Akeso Health, we’re transforming healthcare for patients and providers alike. By making technology work for everyone, we’re creating a future where your health comes first.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable} ${spaceMono.variable} `}>
      <body>{children}</body>
    </html>
  )
}