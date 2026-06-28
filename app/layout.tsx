import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import LenisProvider from "@/components/LenisProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khushal Sirvi — Full-Stack Developer",
  description:
    "Portfolio of Khushal Sirvi, a full-stack developer specialising in AI/ML pipelines, real-time data systems, and scalable web applications.",
  openGraph: {
    title: "Khushal Sirvi — Full-Stack Developer",
    description:
      "Full-stack developer building AI-powered, production-ready systems.",
    url: "https://khushalsirvi.dev",
    siteName: "Khushal Sirvi",
    type: "website",
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
      className={`${geistSans.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
