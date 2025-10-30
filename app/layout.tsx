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
  title: "Lokahi Ohana",
  description: "Connect with your community through shared experiences",
  openGraph: {
    title: "Lokahi Ohana",
    description: "Check out this event on Lokahi!",
    images: ['/og-image.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokahi Ohana",
    description: "Check out this event on Lokahi!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
