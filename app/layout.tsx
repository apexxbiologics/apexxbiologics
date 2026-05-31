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

export const metadata: Metadata = {
  title: {
    default: "Apexx Biolabs | Laboratory Research Materials",
    template: "%s | Apexx Biolabs",
  },
  description:
    "Apexx Biolabs supplies laboratory research materials intended strictly for scientific, educational, and analytical research applications. Research Use Only.",

  verification: {
    google: "32QpnbgyOIQ_12SS9SlNK3I_eKubhzvcFAaNOEXDZYU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
