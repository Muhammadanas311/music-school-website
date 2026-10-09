import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

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
    default: "Music School | Master the Art of Music",
    template: "%s | Music School",
  },
  description:
    "Explore comprehensive music courses, live webinars, and masterclasses from world-class instructors.",
  keywords: [
    "music school",
    "online music classes",
    "learn music online",
    "music courses",
    "piano lessons",
    "guitar lessons",
    "vocal training",
    "music theory",
    "music webinars",
    "masterclasses",
  ],
  authors: [{ name: "Music School" }],
  creator: "Music School",
  applicationName: "Music School",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Music School",
    title: "Music School | Master the Art of Music",
    description:
      "Expert-led music courses, live webinars, and masterclasses for every level.",
    images: [
      {
        url: "/icon.png",
        width: 1024,
        height: 1024,
        alt: "Music School logo",
      },
    ],
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
      <body className="min-h-full flex flex-col overflow-x-hidden w-full">
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
